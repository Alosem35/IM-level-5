(function () {
  const STORAGE_KEY = "im_qbank_state_v1";

  const SPECIALTIES = [
    { key: "rheumatology", label: "Rheumatology" },
    { key: "neurology", label: "Neurology" },
    { key: "hematology", label: "Hematology" }
  ];

  // Persistent State
  let state = loadState();
  let activeTab = "essays"; // essays | rheumatology | neurology | hematology
  let selectedTopic = "all";
  let shuffleMode = false;

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
      return {
        answers: saved.answers || {},
        reviewed: saved.reviewed || {},
        flagged: saved.flagged || {},
        dark: Boolean(saved.dark)
      };
    } catch {
      return { answers: {}, reviewed: {}, flagged: {}, dark: false };
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateScore();
  }

  // Fisher-Yates Shuffle
  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // DOM Elements
  const appContent = document.getElementById("appContent");
  const topicNav = document.getElementById("topicNav");
  const mainTabs = document.getElementById("mainTabs");
  const filterBatch = document.getElementById("filterBatch");
  const filterExam = document.getElementById("filterExam");
  const filterStatus = document.getElementById("filterStatus");
  const filterTopic = document.getElementById("filterTopic");
  const searchInput = document.getElementById("searchInput");
  const btnShuffle = document.getElementById("btnShuffle");
  const btnExport = document.getElementById("btnExport");
  const btnImport = document.getElementById("btnImport");
  const importFile = document.getElementById("importFile");
  const btnDark = document.getElementById("btnDark");
  const btnPrint = document.getElementById("btnPrint");
  const btnReset = document.getElementById("btnReset");

  // Init Theme
  if (state.dark) {
    document.body.classList.add("dark");
    btnDark.textContent = "☀️ Light";
  }

  // Event Listeners
  mainTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    activeTab = btn.dataset.tab;
    selectedTopic = "all";
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    document.body.setAttribute("data-theme", activeTab);
    populateTopicFilter();
    render();
  });

  [filterBatch, filterExam, filterStatus].forEach((el) => el.addEventListener("change", render));
  filterTopic.addEventListener("change", () => {
    selectedTopic = filterTopic.value;
    render();
  });
  searchInput.addEventListener("input", render);

  // Shuffle Toggle
  btnShuffle.addEventListener("click", () => {
    shuffleMode = !shuffleMode;
    btnShuffle.classList.toggle("active-toggle", shuffleMode);
    btnShuffle.textContent = shuffleMode ? "🔀 Shuffle: ON" : "🔀 Shuffle: OFF";
    render();
  });

  // Export Progress JSON
  btnExport.addEventListener("click", () => {
    const dataStr = JSON.stringify(state, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const date = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `IM-QBank-Backup-${date}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });

  // Import Progress JSON
  btnImport.addEventListener("click", () => importFile.click());
  importFile.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const imported = JSON.parse(ev.target.result);
        if (typeof imported !== "object" || imported === null) throw new Error("Invalid file");
        state = {
          answers: imported.answers || {},
          reviewed: imported.reviewed || {},
          flagged: imported.flagged || {},
          dark: Boolean(imported.dark)
        };
        document.body.classList.toggle("dark", state.dark);
        btnDark.textContent = state.dark ? "☀️ Light" : "🌙 Dark";
        saveState();
        render();
        alert("Progress imported successfully!");
      } catch {
        alert("Invalid backup file. Please select a valid IM-QBank JSON file.");
      }
      importFile.value = "";
    };
    reader.readAsText(file);
  });

  btnDark.addEventListener("click", () => {
    state.dark = !state.dark;
    document.body.classList.toggle("dark", state.dark);
    btnDark.textContent = state.dark ? "☀️ Light" : "🌙 Dark";
    saveState();
  });

  btnPrint.addEventListener("click", () => window.print());

  btnReset.addEventListener("click", () => {
    if (confirm("Reset all your MCQ answers, flags, and review checkboxes?")) {
      state.answers = {};
      state.reviewed = {};
      state.flagged = {};
      saveState();
      render();
    }
  });

  // Populate Topic Dropdown for Current Tab (Filtering)
  function populateTopicFilter() {
    filterTopic.innerHTML = `<option value="all">All Topics</option>`;
    if (activeTab === "essays") {
      SPECIALTIES.forEach((spec) => {
        const topics = window.IM_DATA[spec.key] || [];
        topics.forEach((t, idx) => {
          if ((t.essays || []).length) {
            const val = `${spec.key}::${idx}`;
            const opt = document.createElement("option");
            opt.value = val;
            opt.textContent = `${spec.label} — ${t.shortTitle || t.title}`;
            filterTopic.appendChild(opt);
          }
        });
      });
    } else {
      const topics = window.IM_DATA[activeTab] || [];
      topics.forEach((t, idx) => {
        const opt = document.createElement("option");
        opt.value = String(idx);
        opt.textContent = `${idx + 1}. ${t.shortTitle || t.title}`;
        filterTopic.appendChild(opt);
      });
    }
    filterTopic.value = selectedTopic;
  }

  // Helper: Create Jump Link Pill (Scroll Only, No Filtering)
  function createJumpPill(label, targetId) {
    const a = document.createElement("a");
    a.className = "topic-pill";
    a.href = `#${targetId}`;
    a.textContent = label;
    return a;
  }

  // Helper: Filter Check
  function matchesFilters(q) {
    const b = filterBatch.value;
    const ex = filterExam.value;
    const st = filterStatus.value;
    const query = searchInput.value.trim().toLowerCase();

    if (b !== "all" && String(q.batch) !== b) return false;
    if (ex !== "all" && q.exam !== ex) return false;

    if (query) {
      const hay = (q.stem + " " + (q.source || "") + " " + JSON.stringify(q.options || "")).toLowerCase();
      if (!hay.includes(query)) return false;
    }

    if (st !== "all") {
      if (st === "flagged" && !state.flagged[q.id]) return false;
      if (st === "reviewed" && !state.reviewed[q.id]) return false;
      if (q.type === "mcq") {
        const chosen = state.answers[q.id];
        if (st === "unanswered" && chosen) return false;
        if (st === "incorrect" && (!chosen || chosen === q.correct)) return false;
      } else if (st === "incorrect" || st === "unanswered") {
        return false;
      }
    }
    return true;
  }

  // Update Global Score Counter
  function updateScore() {
    let correct = 0;
    let attempted = 0;
    SPECIALTIES.forEach((s) => {
      const topics = window.IM_DATA[s.key] || [];
      topics.forEach((t) => {
        (t.mcqs || []).forEach((q) => {
          if (q.type === "mcq" && state.answers[q.id]) {
            attempted++;
            if (state.answers[q.id] === q.correct) correct++;
          }
        });
      });
    });
    const pct = attempted ? Math.round((correct / attempted) * 100) : 0;
    document.getElementById("scoreVal").textContent = `${correct} / ${attempted}`;
    document.getElementById("scorePct").textContent = `${pct}%`;
  }

  // Render Main View
  function render() {
    appContent.innerHTML = "";
    topicNav.innerHTML = "";

    if (activeTab === "essays") {
      renderAllEssaysTab();
    } else {
      renderSpecialtyTab(activeTab);
    }
    updateScore();
  }

  // 1. Dedicated All-Essays Tab
  function renderAllEssaysTab() {
    let totalShown = 0;

    SPECIALTIES.forEach((spec) => {
      const topics = window.IM_DATA[spec.key] || [];
      const specEssays = [];

      topics.forEach((topic, idx) => {
        const topicKey = `${spec.key}::${idx}`;
        if (selectedTopic !== "all" && selectedTopic !== topicKey) return;

        let filtered = (topic.essays || []).filter((q) => matchesFilters(q));
        if (shuffleMode) filtered = shuffleArray(filtered);
        if (filtered.length) {
          const anchorId = `essay-topic-${spec.key}-${idx}`;
          topicNav.appendChild(createJumpPill(`${spec.label}: ${topic.shortTitle || topic.title}`, anchorId));
          specEssays.push({ topicTitle: topic.title, anchorId, items: filtered });
        }
      });

      if (!specEssays.length) return;

      const sec = document.createElement("section");
      sec.className = "topic-section";
      sec.id = `essay-spec-${spec.key}`;

      const count = specEssays.reduce((acc, g) => acc + g.items.length, 0);
      totalShown += count;

      sec.innerHTML = `
        <div class="topic-header">
          <h2>${spec.label} — Model Essay Answers</h2>
          <span class="topic-count">${count} Essays</span>
        </div>
      `;

      specEssays.forEach((group) => {
        const sub = document.createElement("div");
        sub.className = "sub-heading";
        sub.id = group.anchorId;
        sub.style.scrollMarginTop = "130px";
        sub.textContent = group.topicTitle;
        sec.appendChild(sub);
        group.items.forEach((q) => sec.appendChild(buildEssayCard(q, true)));
      });

      appContent.appendChild(sec);
    });

    if (!totalShown) {
      appContent.innerHTML = `
        <div class="empty-state">
          <h3>No Essay Questions Found</h3>
          <p>Try resetting filters or load additional data files.</p>
        </div>`;
    }
  }

  // 2. Specialty Tab
  function renderSpecialtyTab(specKey) {
    const topics = window.IM_DATA[specKey] || [];
    if (!topics.length) {
      appContent.innerHTML = `
        <div class="empty-state">
          <h3>${specKey.toUpperCase()} Data Not Loaded Yet</h3>
          <p>Populate <code>data/${specKey}.js</code> in the next phase to view questions here.</p>
        </div>`;
      return;
    }

    let anyRendered = false;

    topics.forEach((topic, idx) => {
      if (selectedTopic !== "all" && selectedTopic !== String(idx)) return;

      let essays = (topic.essays || []).filter((q) => matchesFilters(q));
      let mcqs = (topic.mcqs || []).filter((q) => matchesFilters(q));
      if (!essays.length && !mcqs.length) return;

      if (shuffleMode) {
        essays = shuffleArray(essays);
        mcqs = shuffleArray(mcqs);
      }

      anyRendered = true;
      const anchorId = `topic-${specKey}-${idx}`;
      topicNav.appendChild(createJumpPill(`${idx + 1}. ${topic.shortTitle || topic.title}`, anchorId));

      const sec = document.createElement("section");
      sec.className = "topic-section";
      sec.id = anchorId;

      sec.innerHTML = `
        <div class="topic-header">
          <h2>${idx + 1}. ${topic.title}</h2>
          <span class="topic-count">${essays.length} Essay • ${mcqs.length} MCQ</span>
        </div>
      `;

      if (essays.length) {
        const h = document.createElement("div");
        h.className = "sub-heading";
        h.textContent = "Essay Questions (Self-Test — Model Answers in 'All Essays' Tab)";
        sec.appendChild(h);
        essays.forEach((q) => sec.appendChild(buildEssayCard(q, false)));
      }

      if (mcqs.length) {
        const h = document.createElement("div");
        h.className = "sub-heading";
        h.textContent = "Multiple Choice & Matching Questions";
        sec.appendChild(h);
        mcqs.forEach((q, i) => sec.appendChild(buildMcqCard(q, i + 1)));
      }

      appContent.appendChild(sec);
    });

    if (!anyRendered) {
      appContent.innerHTML = `<div class="empty-state"><p>No questions match your current filters.</p></div>`;
    }
  }

  // Helper: Card Actions (Flag + Reviewed)
  function attachCardActions(card, q) {
    const flagBtn = card.querySelector(".btn-flag");
    const chk = card.querySelector("input[type='checkbox']");

    flagBtn.addEventListener("click", () => {
      state.flagged[q.id] = !state.flagged[q.id];
      flagBtn.classList.toggle("flagged", state.flagged[q.id]);
      flagBtn.textContent = state.flagged[q.id] ? "⭐ Flagged" : "☆ Flag";
      saveState();
    });

    chk.addEventListener("change", (e) => {
      state.reviewed[q.id] = e.target.checked;
      card.classList.toggle("reviewed", e.target.checked);
      saveState();
    });
  }

  // Build Essay Card
  function buildEssayCard(q, showAnswer) {
    const card = document.createElement("article");
    card.className = `q-card essay-card ${state.reviewed[q.id] ? "reviewed" : ""}`;
    const isFlagged = Boolean(state.flagged[q.id]);

    card.innerHTML = `
      <div class="q-meta">
        <div class="badges">
          <span class="badge badge-essay">ESSAY</span>
          <span class="badge badge-source">(${q.source})</span>
        </div>
        <div class="card-actions">
          <button type="button" class="btn-flag ${isFlagged ? "flagged" : ""}">${isFlagged ? "⭐ Flagged" : "☆ Flag"}</button>
          <label class="review-check">
            <input type="checkbox" ${state.reviewed[q.id] ? "checked" : ""} /> Reviewed
          </label>
        </div>
      </div>
      <div class="q-stem">${escapeHtml(q.stem)}</div>
      ${showAnswer ? `<div class="essay-answer">${q.modelAnswer}</div>` : ""}
    `;

    attachCardActions(card, q);
    return card;
  }

  // Build MCQ / Matching Card
  function buildMcqCard(q, num) {
    const card = document.createElement("article");
    card.className = `q-card ${state.reviewed[q.id] ? "reviewed" : ""}`;
    const chosen = state.answers[q.id];
    const isFlagged = Boolean(state.flagged[q.id]);
    const cleanStem = String(q.stem || "").replace(/^\s*\d+\s*[\.\-\)\*:]+\s*/, "");

    card.innerHTML = `
      <div class="q-meta">
        <div class="badges">
          <span class="badge badge-mcq">${q.type === "matching" ? "MATCHING" : "MCQ"}</span>
          <span class="badge badge-source">(${q.source})</span>
        </div>
        <div class="card-actions">
          <button type="button" class="btn-flag ${isFlagged ? "flagged" : ""}">${isFlagged ? "⭐ Flagged" : "☆ Flag"}</button>
          <label class="review-check">
            <input type="checkbox" ${state.reviewed[q.id] ? "checked" : ""} /> Reviewed
          </label>
        </div>
      </div>
      <div class="q-stem"><span style="color:var(--accent);">${num}.</span> ${escapeHtml(cleanStem)}</div>
    `;

    attachCardActions(card, q);

    if (q.type === "matching") {
      const btn = document.createElement("button");
      btn.className = "btn-exp";
      btn.textContent = "Show Matching Answer & Explanation";
      const panel = buildExplanationPanel(q, false);
      btn.addEventListener("click", () => {
        panel.classList.toggle("hidden");
        btn.textContent = panel.classList.contains("hidden")
          ? "Show Matching Answer & Explanation"
          : "Hide Matching Answer & Explanation";
      });
      card.appendChild(btn);
      card.appendChild(panel);
      return card;
    }

    const optList = document.createElement("div");
    optList.className = "options-list";
    const footer = document.createElement("div");
    footer.className = "mcq-footer";
    const expPanel = buildExplanationPanel(q, false);

    let optionEntries = Object.entries(q.options);
    if (shuffleMode) optionEntries = shuffleArray(optionEntries);

    optionEntries.forEach(([key, text]) => {
      const btn = document.createElement("button");
      btn.className = "opt-btn";
      btn.dataset.key = key;
      btn.innerHTML = `<span class="opt-key">${key}.</span><span>${escapeHtml(text)}</span>`;

      btn.addEventListener("click", () => {
        state.answers[q.id] = key;
        saveState();
        applyMcqVisuals(optList, footer, expPanel, q, key);
      });

      optList.appendChild(btn);
    });

    card.appendChild(optList);
    card.appendChild(footer);
    card.appendChild(expPanel);

    if (chosen) {
      applyMcqVisuals(optList, footer, expPanel, q, chosen);
    }

    return card;
  }

  function applyMcqVisuals(optList, footer, expPanel, q, chosen) {
    optList.querySelectorAll(".opt-btn").forEach((b) => {
      b.classList.remove("correct", "wrong");
      const k = b.dataset.key;
      if (k === q.correct) b.classList.add("correct");
      else if (k === chosen && chosen !== q.correct) b.classList.add("wrong");
    });

    const isRight = chosen === q.correct;
    footer.innerHTML = `
      <span class="result-tag ${isRight ? "ok" : "err"}">
        ${isRight ? "✓ Correct!" : `✗ Incorrect — Correct Answer: ${q.correct.toUpperCase()}`}
      </span>
      <button class="btn-exp" type="button">
        ${expPanel.classList.contains("hidden") ? "Show Explanations & High-Yield Note" : "Hide Explanations"}
      </button>
    `;

    footer.querySelector(".btn-exp").addEventListener("click", (e) => {
      expPanel.classList.toggle("hidden");
      e.target.textContent = expPanel.classList.contains("hidden")
        ? "Show Explanations & High-Yield Note"
        : "Hide Explanations";
    });
  }

  function buildExplanationPanel(q, visible) {
    const div = document.createElement("div");
    div.className = `exp-panel ${visible ? "" : "hidden"}`;

    let html = "";
    if (q.explanations) {
      Object.entries(q.explanations).forEach(([k, txt]) => {
        html += `<div class="exp-item"><strong>${k.toUpperCase()}:</strong> ${txt}</div>`;
      });
    }
    if (q.highYield) {
      html += `<div class="hy-box"><strong>⭐ High-Yield Note:</strong> ${q.highYield}</div>`;
    }
    if (q.examNote) {
      html += `<div class="exam-note-box"><strong>📌 Exam Note:</strong> ${q.examNote}</div>`;
    }
    div.innerHTML = html;
    return div;
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // Initial Render
  populateTopicFilter();
  render();
})();
