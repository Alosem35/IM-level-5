// ==========================================
// HEMATOLOGY - TOPIC 1: NUTRITIONAL & CHRONIC ANEMIAS
// ==========================================
window.IM_DATA.hematology.push({
  title: "Nutritional & Chronic Anemias (IDA, ACD, B12/Folate/Pernicious & Approach)",
  shortTitle: "Nutritional & Chronic Anemias",
  essays: [
    {
      id: "he-t1-e1",
      type: "essay",
      batch: 18,
      exam: "Final",
      source: "Short Essay Q4 | Batch 18 | Final",
      stem: "4- What is your approach to patient with anemia? (5 M)",
      modelAnswer: `
        <h4>1. Focused History</h4>
        <ul>
          <li><strong>Symptoms of Anemia &amp; Severity:</strong> Fatigue, exertional dyspnea, palpitations, dizziness, angina, or syncope (assess onset: acute vs chronic).</li>
          <li><strong>Bleeding History:</strong> Menorrhagia (most common cause of IDA in young women), melena, hematochezia, hematemesis, epistaxis, or chronic NSAID/aspirin use.</li>
          <li><strong>Nutritional, GI &amp; Drug History:</strong> Strict veganism (B₁₂), poor diet/alcoholism (Folate), celiac/Crohn's/gastrectomy (malabsorption), pica, and offending drugs (Metformin, Methotrexate, Chloramphenicol, G6PD triggers).</li>
          <li><strong>Systemic &amp; Family History:</strong> Jaundice/dark urine/gallstones (hemolysis), B-symptoms/recurrent infections (malignancy/marrow failure), chronic inflammatory/renal disease (ACD/CKD), and family history (Thalassemia, Sickle cell, Hereditary Spherocytosis).</li>
        </ul>
        <h4>2. Physical Examination</h4>
        <ul>
          <li><strong>General &amp; Vital Signs:</strong> Pallor (conjunctiva, palmar creases), tachycardia, flow murmur, orthostatic hypotension.</li>
          <li><strong>Etiology-Specific Clues:</strong> Koilonychia &amp; angular stomatitis (IDA), beefy-red glossitis &amp; loss of vibration/proprioception (B₁₂ deficiency), jaundice &amp; splenomegaly (hemolytic anemia), petechiae/ecchymoses &amp; lymphadenopathy (bone marrow failure/leukemia).</li>
        </ul>
        <h4>3. Stepwise Laboratory Classification (MCV + Reticulocyte Count)</h4>
        <ul>
          <li><strong>Initial Screen:</strong> CBC with RBC indices (<strong>MCV</strong>, MCH, RDW), <strong>Reticulocyte Count</strong>, and <strong>Peripheral Blood Smear</strong>.</li>
          <li><strong>A. Microcytic Anemia (MCV &lt; 80 fL):</strong> Order Iron studies (Serum Ferritin, Iron, TIBC, Transferrin saturation) → <strong>IDA</strong> (↓ Ferritin, ↑ TIBC), <strong>Thalassemia</strong> (normal iron, ↑ RBC count, Hb electrophoresis), <strong>ACD</strong> (↑/normal Ferritin, ↓ TIBC), <strong>Sideroblastic anemia</strong> (ringed sideroblasts).</li>
          <li><strong>B. Normocytic Anemia (MCV 80–100 fL):</strong> Check <strong>Reticulocyte Count</strong>:
            <ul>
              <li><em>High Retics (&gt;2%):</em> Acute blood loss or <strong>Hemolytic Anemia</strong> (check LDH, indirect bilirubin, haptoglobin, Coombs test).</li>
              <li><em>Low/Normal Retics:</em> <strong>Anemia of Chronic Disease (ACD)</strong>, <strong>CKD</strong> (low EPO), endocrine (hypothyroidism), or <strong>Bone Marrow Failure</strong> (aplastic anemia, infiltration → Bone Marrow Biopsy).</li>
            </ul>
          </li>
          <li><strong>C. Macrocytic Anemia (MCV &gt; 100 fL):</strong> Check Blood Smear (hypersegmented neutrophils = megaloblastic):
            <ul>
              <li><em>Megaloblastic:</em> Check <strong>Serum B₁₂</strong> (with MMA/homocysteine, anti-IF Ab) and <strong>Serum/RBC Folate</strong>.</li>
              <li><em>Non-Megaloblastic:</em> Liver disease, alcoholism, hypothyroidism, MDS, or reticulocytosis.</li>
            </ul>
          </li>
        </ul>
        <h4>4. Management Principles</h4>
        <ul>
          <li>Treat the <strong>underlying cause</strong> (e.g., upper/lower GI endoscopy for IDA in men and postmenopausal women to exclude GI malignancy!), replace deficient nutrients (Iron, IM B₁₂, Folate), and reserve PRBC transfusion for symptomatic/hemodynamically unstable severe anemia.</li>
        </ul>
      `
    }
  ],
  mcqs: [
    {
      id: "he-t1-m1",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q10 | Batch 24 | Final",
      stem: "Which of the following acute-phase proteins plays the central pathogenic role in causing Anemia of Chronic Disease by inhibiting ferroportin?",
      options: {
        a: "Erythropoietin",
        b: "Hepcidin",
        c: "Transferrin",
        d: "Intrinsic factor"
      },
      correct: "b",
      explanations: {
        a: "Erythropoietin (EPO) stimulates erythropoiesis; its production is blunted in ACD/CKD, but it does not inhibit ferroportin.",
        b: "CORRECT: Inflammatory cytokines (especially IL-6) upregulate hepatic HEPCIDIN, which degrades/inhibits FERROPORTIN on enterocytes and macrophages — trapping iron inside storage macrophages (↑ ferritin) and blocking gut absorption (↓ serum iron).",
        c: "Transferrin is the plasma iron-transport protein (negative acute-phase reactant → ↓ TIBC in ACD).",
        d: "Intrinsic factor is required for Vitamin B12 absorption in the terminal ileum."
      },
      highYield: "ACD Pathophysiology: Inflammation (IL-6) → ↑ Hepcidin → Inhibits Ferroportin → Iron trapped in macrophages (↑ Ferritin, ↓ Serum Iron, ↓ TIBC)."
    },
    {
      id: "he-t1-m2",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q11 | Batch 24 | Final",
      stem: "Which of the following is the earliest and most common neurological manifestation of Vitamin B12 deficiency anemia?",
      options: {
        a: "Symmetrical paresthesia (numbness and tingling in feet/hands)",
        b: "Chorea",
        c: "Resting tremor",
        d: "Unilateral facial palsy"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Symmetrical distal paresthesias (tingling/numbness in feet and hands) due to dorsal column and peripheral nerve demyelination are the earliest and most common neurological symptom of Vitamin B12 deficiency.",
        b: "Chorea is a basal ganglia disorder, not a classic manifestation of B12 deficiency.",
        c: "Resting tremor is a hallmark of Parkinson's disease.",
        d: "Unilateral facial palsy is Bell's palsy (CN VII)."
      },
      highYield: "Earliest neurological symptom of B12 deficiency = Symmetrical paresthesias (glove-and-stocking) + loss of vibration & proprioception."
    },
    {
      id: "he-t1-m3",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q12 | Batch 24 | Final",
      stem: "Regarding the management of folate deficiency megaloblastic anemia, which of the following statements is TRUE?",
      options: {
        a: "Always give Vitamin B12 injections lifelong with folate",
        b: "Never give folic acid alone without excluding Vitamin B12 deficiency (as it may precipitate subacute combined degeneration of the cord)",
        c: "Folate must be given parenterally",
        d: "Blood transfusion is the first-line treatment"
      },
      correct: "b",
      explanations: {
        a: "Lifelong B12 is only needed for B12 malabsorption (e.g., pernicious anemia), not pure folate deficiency.",
        b: "CORRECT: Giving folic acid alone to a patient with unrecognized Vitamin B12 deficiency masks/corrects the megaloblastic anemia while allowing irreversible Subacute Combined Degeneration (SACD) of the spinal cord to progress rapidly!",
        c: "Folic acid is well absorbed orally (1–5 mg/day).",
        d: "Blood transfusion is avoided in chronic megaloblastic anemia unless life-threatening cardiac compromise (risk of volume overload/heart failure)."
      },
      highYield: "Golden Rule of Megaloblastic Anemia: NEVER give Folic Acid alone until Vitamin B12 deficiency has been excluded (or replace B12 first!)."
    },
    {
      id: "he-t1-m4",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q15 | Batch 23 | Final",
      stem: "All of the following are true about Anemia of Chronic Disease EXCEPT:",
      options: {
        a: "Serum ferritin is decreased",
        b: "Serum iron is decreased",
        c: "TIBC is decreased",
        d: "Bone marrow iron stores are normal or increased"
      },
      correct: "a",
      explanations: {
        a: "CORRECT (EXCEPT): Serum ferritin is NORMAL OR INCREASED in Anemia of Chronic Disease (because iron is trapped in macrophages and ferritin is a positive acute-phase reactant). Decreased ferritin is diagnostic of Iron Deficiency Anemia.",
        b: "True: Serum iron is decreased in both ACD and IDA.",
        c: "True: TIBC (transferrin) is decreased in ACD (whereas it is INCREASED in IDA).",
        d: "True: Bone marrow iron stores (Prussian blue stain) are abundant/normal or increased in ACD."
      },
      highYield: "IDA vs ACD: IDA = ↓ Ferritin + ↑ TIBC + Absent BM iron. ACD = ↑/Normal Ferritin + ↓ TIBC + Normal/↑ BM iron."
    },
    {
      id: "he-t1-m5",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q16 | Batch 23 | Final",
      stem: "All of the following are true about Iron Deficiency Anemia EXCEPT:",
      options: {
        a: "Caused by blood loss, malabsorption, or increased demand",
        b: "Transferrin saturation <20%",
        c: "Low serum ferritin",
        d: "Decreased TIBC (or High serum ferritin)"
      },
      correct: "d",
      explanations: {
        a: "True: The 3 main causes of IDA are chronic blood loss (#1), malabsorption (celiac/gastrectomy), and increased demand (pregnancy/growth).",
        b: "True: Transferrin saturation is classically low (<15–20%) in IDA.",
        c: "True: Low serum ferritin (<15–30 ng/mL) is the most sensitive and specific test for IDA.",
        d: "CORRECT (EXCEPT): In IDA, TIBC is INCREASED (liver produces more transferrin to scavenge scarce iron), NOT decreased, and serum ferritin is LOW, not high."
      },
      highYield: "IDA Lab Profile: ↓ Ferritin, ↓ Serum Iron, ↑ TIBC, ↓ Transferrin Saturation (<15–20%), ↑ RDW."
    },
    {
      id: "he-t1-m6",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q17 | Batch 23 | Final",
      stem: "about Vitamine B12 defciency anemia all true except :",
      options: {
        a: "Stock & gloves parasthesia",
        b: "Loss of knee reflex",
        c: "(>120fl)",
        d: "always elevatated serum transferrin"
      },
      correct: "d",
      explanations: {
        a: "True: Symmetrical stocking-and-glove paresthesias are classic.",
        b: "True: Peripheral neuropathy can cause diminished/absent deep tendon reflexes (especially ankle/knee jerks).",
        c: "True: Severe megaloblastic anemia classically produces extreme macrocytosis (MCV >110–120 fL).",
        d: "CORRECT (EXCEPT): Serum transferrin (TIBC) is an iron-status marker (elevated in IDA), NOT elevated in Vitamin B12 deficiency."
      },
      highYield: "MCV > 115–120 fL is almost always Megaloblastic Anemia (Vitamin B12 or Folate deficiency)!"
    },
    {
      id: "he-t1-m7",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q16 | Batch 22 | Final",
      stem: "All the fallowing's Lab investigations For chronic anemia's are true Except?",
      options: {
        a: "normal mcv",
        b: "normal iron or high",
        c: "Deficient B.M store",
        d: "normal or high s.ferritin"
      },
      correct: "c",
      explanations: {
        a: "True: Anemia of chronic disease (ACD) is typically normocytic, normochromic (normal MCV).",
        b: "Note: Serum iron is typically low in ACD, though option (c) is the definitive textbook contradiction (see Exam Note).",
        c: "CORRECT (EXCEPT): Bone marrow iron stores are NORMAL OR INCREASED (iron is trapped in macrophages) in ACD — DEFICIENT bone marrow iron stores is the gold-standard hallmark of Iron Deficiency Anemia (IDA), NOT ACD.",
        d: "True: Serum ferritin is normal or elevated in ACD."
      },
      highYield: "Bone Marrow Iron Stores: Absent/Deficient = IDA; Normal/Increased = Anemia of Chronic Disease (ACD).",
      examNote: "In ACD, serum iron is actually decreased, but 'Deficient B.M. store' is the classic hallmark that exclusively defines IDA."
    },
    {
      id: "he-t1-m8",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q18 | Batch 22 | Final",
      stem: "The site of absorption of VIT.B12 iS ?",
      options: {
        a: "Duodenum",
        b: "Jejunum",
        c: "Terminal ileum",
        d: "Large Intestine"
      },
      correct: "c",
      explanations: {
        a: "Duodenum is the primary site of IRON absorption.",
        b: "Jejunum (and proximal duodenum) is the primary site of FOLATE absorption.",
        c: "CORRECT: Vitamin B12–Intrinsic Factor complex is absorbed exclusively in the TERMINAL ILEUM (via cubilin receptors).",
        d: "Large intestine absorbs water and electrolytes."
      },
      highYield: "GI Absorption Sites: Iron = Duodenum; Folate = Jejunum; Vitamin B12 (and Bile Salts) = Terminal Ileum."
    },
    {
      id: "he-t1-m9",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q7 | Batch 21 | Final",
      stem: "All of the following are causes of macrocytosis except.",
      options: {
        a: "Liver disease",
        b: "Myelodysplastic syndrome",
        c: "A plastic anemia",
        d: "Azathioprine"
      },
      correct: "c",
      explanations: {
        a: "Liver disease (and alcohol) is a classic cause of non-megaloblastic macrocytosis.",
        b: "Myelodysplastic syndrome (MDS) is a classic cause of macrocytic anemia in the elderly.",
        c: "CORRECT (EXCEPT): Aplastic anemia classically presents as NORMOCYTIC, normochromic pancytopenia (though mild macrocytosis can occasionally occur, in classic MCQ banks it is grouped as normocytic compared to the 3 classic macrocytic causes).",
        d: "Azathioprine (purine antimetabolite) inhibits DNA synthesis and classically causes megaloblastic macrocytosis."
      },
      highYield: "Causes of Macrocytosis: Megaloblastic (B12, Folate, Methotrexate, Azathioprine, Hydroxyurea) & Non-Megaloblastic (Alcohol, Liver disease, Hypothyroidism, MDS, Reticulocytosis)."
    },
    {
      id: "he-t1-m10",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q10 | Batch 21 | Final",
      stem: "All of the following are correct recording IDA except:",
      options: {
        a: "It is more likely in patients with achlorhydria than in those with normal gastric acidity",
        b: "It is associated with early reduced MCH value",
        c: "It is commonly associated with Anisocytosis in early stage",
        d: "It is associated with decreased serum ferritin"
      },
      correct: "b",
      explanations: {
        a: "True: Gastric acid (HCl) reduces dietary Fe³⁺ to absorbable Fe²⁺; achlorhydria (e.g., atrophic gastritis, chronic PPIs) impairs iron absorption.",
        b: "CORRECT (EXCEPT): In Iron Deficiency Anemia, serum ferritin drops FIRST, followed by elevated RDW (anisocytosis); reduced MCV and MCH (microcytosis/hypochromia) are LATE findings, NOT early!",
        c: "True: Increased RDW (anisocytosis — variation in RBC size) is one of the earliest CBC changes in IDA.",
        d: "True: Decreased serum ferritin is the earliest and most specific lab abnormality in IDA."
      },
      highYield: "Chronological Sequence of IDA: 1) ↓ BM iron & ↓ Serum Ferritin → 2) ↓ Serum Iron & ↑ TIBC → 3) ↑ RDW (Anisocytosis) → 4) ↓ MCV & ↓ MCH (Microcytic Hypochromic anemia — LATE!)."
    },
    {
      id: "he-t1-m11",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q16 | Batch 21 | Final",
      stem: "The most common cause of ANEMIA world wide is?",
      options: {
        a: "Megaloplastic ANEMIA",
        b: "Sickle cells ANEMIA",
        c: "Iron deficiency ANEMIA",
        d: "Haemolytic ANEMIA."
      },
      correct: "c",
      explanations: {
        a: "Far less common than IDA.",
        b: "Common in specific geographic regions (Africa, Middle East), not #1 worldwide.",
        c: "CORRECT: Iron Deficiency Anemia (IDA) is by far the #1 most common cause of anemia worldwide.",
        d: "Less common than IDA."
      },
      highYield: "#1 most common cause of anemia worldwide = Iron Deficiency Anemia (IDA)."
    },
    {
      id: "he-t1-m12",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q17 | Batch 21 | Final",
      stem: "Etiology of pernicious ANEMIA is?",
      options: {
        a: "It is haemolytic anemia.",
        b: "It isan Autoimmune diseases",
        c: "It is X_link disease.",
        d: "It is metabolic disease"
      },
      correct: "b",
      explanations: {
        a: "It is a megaloblastic anemia (though intramedullary ineffective erythropoiesis causes mild ↑ LDH/indirect bilirubin).",
        b: "CORRECT: Pernicious anemia is an AUTOIMMUNE disease (autoimmune atrophic gastritis with autoantibodies against gastric parietal cells and Intrinsic Factor, causing Vitamin B12 malabsorption).",
        c: "Not X-linked.",
        d: "Not a primary metabolic disorder."
      },
      highYield: "Pernicious Anemia = Autoimmune destruction of gastric parietal cells & Anti-Intrinsic Factor antibodies → Vitamin B12 deficiency + ↑ Risk of Gastric Adenocarcinoma."
    },
    {
      id: "he-t1-m13",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q18 | Batch 21 | Final",
      stem: "The site of absorption of Vitamin B12 is ?",
      options: {
        a: "Duodenum",
        b: "Jaujenum",
        c: "Large intestine",
        d: "Termenal Ileum"
      },
      correct: "d",
      explanations: {
        a: "Site of Iron absorption.",
        b: "Site of Folate absorption.",
        c: "Water/electrolyte absorption.",
        d: "CORRECT: Terminal Ileum (repeated in Batch 21 & Batch 22 Finals!)."
      },
      highYield: "Vitamin B12 is absorbed in the Terminal Ileum."
    },
    {
      id: "he-t1-m14",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q21 | Batch 21 | Final",
      stem: "All of the following laboratory values are typical either normal or decreases in anemia of chronic disease except.",
      options: {
        a: "Serum iron",
        b: "Transforin saturation",
        c: "Serum ferritine",
        d: "Serum transferin reception."
      },
      correct: "c",
      explanations: {
        a: "Serum iron is DECREASED in ACD.",
        b: "Transferrin saturation is NORMAL or DECREASED in ACD.",
        c: "CORRECT (EXCEPT): Serum Ferritin is characteristically INCREASED (or normal) in ACD because it is an acute-phase reactant and iron is sequestered in macrophages.",
        d: "Soluble serum transferrin receptor (sTfR) is NORMAL in pure ACD (whereas it is INCREASED in IDA)."
      },
      highYield: "Soluble Transferrin Receptor (sTfR): Normal in ACD, Elevated in IDA — very useful when ferritin is falsely elevated by inflammation!"
    },
    {
      id: "he-t1-m15",
      type: "mcq",
      batch: 20,
      exam: "Final",
      source: "Q11 | Batch 20 | Final",
      stem: "Which of the following conditions can cause anemia with high reticulocyte count except:",
      options: {
        a: "Sickle cell anemia",
        b: "Paroxysmal nocturnal hemoglobinuria",
        c: "Anemia of chronic diseases",
        d: "G6PD deficiency"
      },
      correct: "c",
      explanations: {
        a: "Sickle cell anemia is a hemolytic anemia → HIGH reticulocyte count.",
        b: "PNH is a hemolytic anemia → HIGH reticulocyte count.",
        c: "CORRECT (EXCEPT): Anemia of Chronic Disease (ACD) is a HYPOPROLIFERATIVE anemia (blunted EPO response & iron restriction) → LOW or inappropriately normal reticulocyte count.",
        d: "G6PD deficiency causes acute hemolytic anemia → HIGH reticulocyte count."
      },
      highYield: "High Reticulocyte Count = Hemolysis or Acute Blood Loss (or response to Iron/B12/Folate therapy). Low Reticulocyte Count = Marrow failure, IDA, B12/Folate, ACD, CKD."
    },
    {
      id: "he-t1-m16",
      type: "mcq",
      batch: 20,
      exam: "Final",
      source: "Q16 | Batch 20 | Final",
      stem: "The most important LAB INVESTIGATIONS to determine the type of ANEMIA?",
      options: {
        a: "CBC and ESR",
        b: "MCH and MCHC",
        c: "MCV and RETICULOCYTE count",
        d: "HAEMOGLOBIN and sickling test"
      },
      correct: "c",
      explanations: {
        a: "ESR is non-specific and does not classify anemia.",
        b: "MCH/MCHC are secondary indices.",
        c: "CORRECT: MCV (morphological classification: microcytic, normocytic, macrocytic) and Reticulocyte Count (kinetic classification: hypoproliferative vs hemolytic/blood loss) are the two most important initial lab tests to classify anemia.",
        d: "Sickling test is only for suspected sickle cell disease."
      },
      highYield: "Initial Classification of Anemia = MCV (Size) + Reticulocyte Count (Bone marrow response)."
    },
    {
      id: "he-t1-m17",
      type: "mcq",
      batch: 20,
      exam: "Final",
      source: "Q17 | Batch 20 | Final",
      stem: "All the FOLLOWING are TRUE about Iron Deficiency ANEMIA EXCEPT?",
      options: {
        a: "Most common cause of anemia in Third World",
        b: "Microcytic Hypochromic ANEMIA",
        c: "Low S. Iron",
        d: "High S. Ferritin"
      },
      correct: "d",
      explanations: {
        a: "True: IDA is the #1 anemia worldwide and in developing countries.",
        b: "True: Classic morphology is microcytic, hypochromic anemia.",
        c: "True: Serum iron is low.",
        d: "CORRECT (EXCEPT): Serum Ferritin is LOW (not high) in Iron Deficiency Anemia."
      },
      highYield: "Low Serum Ferritin = Diagnostic of IDA."
    },
    {
      id: "he-t1-m18",
      type: "mcq",
      batch: 20,
      exam: "Final",
      source: "Q19 | Batch 20 | Final",
      stem: "The mode of inheritance / nature of pernicious anemia is?",
      options: {
        a: "Autosomal Dominant",
        b: "Autosomal Recessive",
        c: "X-linked inheritance",
        d: "Autoimmune disease"
      },
      correct: "d",
      explanations: {
        a: "Not autosomal dominant.",
        b: "Not autosomal recessive.",
        c: "Not X-linked.",
        d: "CORRECT: Pernicious anemia is an acquired AUTOIMMUNE disease (repeated across Batch 18, 20, and 21 Finals!)."
      },
      highYield: "Pernicious Anemia = Autoimmune Disease (NOT Mendelian inherited)."
    },
    {
      id: "he-t1-m19",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q10 | Batch 19 | Final",
      stem: "All of the following are manifestation of folate deficiency except:",
      options: {
        a: "Reticulocytopnia",
        b: "Increase LDH",
        c: "Neuropsychiatric manifestation",
        d: "Bone marrow hypercellularity"
      },
      correct: "c",
      explanations: {
        a: "True: Megaloblastic anemias have a low reticulocyte count (ineffective erythropoiesis).",
        b: "True: Intramedullary destruction of fragile megaloblasts releases LDH and indirect bilirubin.",
        c: "CORRECT (EXCEPT): Neuropsychiatric manifestations (subacute combined degeneration, peripheral neuropathy, dementia) are characteristic of VITAMIN B12 deficiency, NOT Folate deficiency (Folate deficiency has NO neurological symptoms!).",
        d: "True: Bone marrow is hypercellular with megaloblastic erythroid hyperplasia."
      },
      highYield: "B12 vs Folate Deficiency: BOTH cause megaloblastic anemia & ↑ Homocysteine. ONLY B12 deficiency causes Neurologic symptoms (SACD) & ↑ Methylmalonic Acid (MMA)!"
    },
    {
      id: "he-t1-m20",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q11 | Batch 19 | Final",
      stem: "All the following feature of I D A except:",
      options: {
        a: "Glossitis",
        b: "Koilonychia",
        c: "Peripheral neuropathy",
        d: "Angular stomatitis"
      },
      correct: "c",
      explanations: {
        a: "Atrophic glossitis is a classic epithelial sign of IDA.",
        b: "Koilonychia (spoon-shaped nails) is pathognomonic for chronic severe IDA.",
        c: "CORRECT (EXCEPT): Peripheral neuropathy is a hallmark of VITAMIN B12 deficiency, NOT Iron Deficiency Anemia.",
        d: "Angular stomatitis (cheilitis) is a classic epithelial sign of IDA."
      },
      highYield: "Epithelial signs of IDA: Koilonychia (spoon nails), Angular stomatitis, Atrophic glossitis, Plummer-Vinson syndrome (esophageal web + dysphagia + IDA)."
    },
    {
      id: "he-t1-m21",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q14 | Batch 19 | Final",
      stem: "All the following causes of microcytic hypochromic anemia except",
      options: {
        a: "IDA",
        b: "B-thalasmia majore",
        c: "Sidroblastic anemia",
        d: "Chronic liver disease"
      },
      correct: "d",
      explanations: {
        a: "IDA is the #1 cause of microcytic hypochromic anemia.",
        b: "β-Thalassemia major (and minor) causes marked microcytic hypochromic anemia.",
        c: "Sideroblastic anemia (e.g., lead poisoning, INH, congenital) causes microcytic hypochromic anemia.",
        d: "CORRECT (EXCEPT): Chronic liver disease causes MACROCYTIC (or normocytic) anemia with target cells, NOT microcytic hypochromic anemia."
      },
      highYield: "Microcytic Anemia Mnemonic (TICS): Thalassemia, Iron deficiency, Chronic disease (late), Sideroblastic anemia (and Lead poisoning)."
    },
    {
      id: "he-t1-m22",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q18 | Batch 18 | Final",
      stem: "All the following are correct regading pernicious anemia except :-",
      options: {
        a: "Common anemia in western countries",
        b: "It is autoimmune disease",
        c: "It is autosomal dominant",
        d: "Anti bodies against in ternsic factors is a common lab investigation"
      },
      correct: "c",
      explanations: {
        a: "True: Pernicious anemia is the most common cause of B12 deficiency in Western countries.",
        b: "True: It is an autoimmune gastritis.",
        c: "CORRECT (EXCEPT): It is NOT inherited as an autosomal dominant disorder.",
        d: "True: Anti-Intrinsic Factor antibodies are highly specific (>95%) for diagnosing pernicious anemia."
      },
      highYield: "Anti-Intrinsic Factor Ab = Highly SPECIFIC for Pernicious Anemia. Anti-Parietal Cell Ab = More SENSITIVE."
    },
    {
      id: "he-t1-m23",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q19 | Batch 18 | Final",
      stem: "The most important lab investigation to differentiate iron deficiency anemia and anemia of chronic disease is :-",
      options: {
        a: "Hb and reticulocyte count",
        b: "Hb and TIBC",
        c: "Hb and s-iron",
        d: "Mcv and serum ferritin"
      },
      correct: "d",
      explanations: {
        a: "Both have low Hb and low/normal reticulocytes.",
        b: "TIBC helps (↑ in IDA, ↓ in ACD), but Serum Ferritin is the single most important differentiating test.",
        c: "Serum iron is LOW in both IDA and ACD.",
        d: "CORRECT: MCV (low in IDA vs usually normal in ACD) and especially SERUM FERRITIN (low in IDA vs normal/high in ACD) are the most important tests to differentiate IDA from ACD."
      },
      highYield: "Best single test to differentiate IDA from ACD = Serum Ferritin (↓ in IDA, ↑/Normal in ACD)."
    }
  ]
});
// ==========================================
// HEMATOLOGY - TOPIC 2: HEMOLYTIC ANEMIAS, HEMOGLOBINOPATHIES & BLOOD FILM
// ==========================================
window.IM_DATA.hematology.push({
  title: "Hemolytic Anemias, Hemoglobinopathies (Sickle Cell, Thalassemia, G6PD) & Blood Film",
  shortTitle: "Hemolytic Anemias & Blood Film",
  essays: [
    {
      id: "he-t2-e1",
      type: "essay",
      batch: 24,
      exam: "Final",
      source: "Short Essay Q3 | Batch 24 | Final",
      stem: "Q3: Causes of hemolytic anemia (5M)",
      modelAnswer: `
        <h4>1. Intrinsic (Intracorpuscular) Causes — Mostly Inherited</h4>
        <ul>
          <li><strong>RBC Membrane Defects:</strong> Hereditary Spherocytosis (most common inherited membrane defect), Hereditary Elliptocytosis, and Paroxysmal Nocturnal Hemoglobinuria (PNH — the only <em>acquired</em> intrinsic defect).</li>
          <li><strong>RBC Enzyme Deficiencies:</strong> <strong>G6PD deficiency</strong> (X-linked; oxidative stress hemolysis) and Pyruvate Kinase (PK) deficiency (autosomal recessive).</li>
          <li><strong>Hemoglobinopathies:</strong>
            <ul>
              <li><em>Qualitative (Structural):</em> <strong>Sickle Cell Anemia (HbS)</strong>, HbC, HbSC.</li>
              <li><em>Quantitative (Synthesis):</em> <strong>α- and β-Thalassemias</strong>.</li>
            </ul>
          </li>
        </ul>
        <h4>2. Extrinsic (Extracorpuscular) Causes — All Acquired</h4>
        <ul>
          <li><strong>Immune-Mediated (Direct Coombs Positive):</strong>
            <ul>
              <li><em>Warm AIHA (IgG):</em> Idiopathic, SLE, CLL, lymphoma, drugs (α-methyldopa).</li>
              <li><em>Cold AIHA (IgM):</em> <em>Mycoplasma pneumoniae</em>, EBV, Waldenström macroglobulinemia.</li>
              <li><em>Alloimmune:</em> Acute/delayed hemolytic transfusion reactions, Hemolytic Disease of the Newborn (Rh/ABO).</li>
            </ul>
          </li>
          <li><strong>Mechanical / Microangiopathic (MAHA — Schistocytes on Smear):</strong> TTP, HUS, DIC, HELLP syndrome, malignant hypertension, and prosthetic mechanical heart valves.</li>
          <li><strong>Infections &amp; Toxins:</strong> Malaria (<em>Plasmodium</em>), <em>Babesia</em>, <em>Clostridium perfringens</em> sepsis, Wilson's disease (copper toxicity), snake/spider venoms, severe burns.</li>
          <li><strong>Hypersplenism:</strong> Portal hypertension, cirrhosis, storage diseases.</li>
        </ul>
      `
    },
    {
      id: "he-t2-e2",
      type: "essay",
      batch: 23,
      exam: "Final",
      source: "Short Note Q3 | Batch 23 | Final",
      stem: "3- G6PD defeciency anemia ?(5marks)",
      modelAnswer: `
        <h4>1. Pathophysiology &amp; Genetics</h4>
        <ul>
          <li><strong>X-Linked Recessive</strong> enzymopathy (most common human enzyme deficiency; affects males predominantly, though female carriers can be affected via lyonization).</li>
          <li><strong>Mechanism:</strong> G6PD is the rate-limiting enzyme of the Hexose Monophosphate (pentose phosphate) shunt, generating <strong>NADPH</strong> to keep <strong>Glutathione</strong> reduced. Without reduced glutathione, oxidative stress denatures hemoglobin into insoluble precipitates (<strong>Heinz bodies</strong>), which splenic macrophages bite out to form <strong>Bite cells</strong>, causing acute intravascular and extravascular hemolysis.</li>
        </ul>
        <h4>2. Common Oxidative Triggers</h4>
        <ul>
          <li><strong>Infections</strong> (most common trigger overall!).</li>
          <li><strong>Drugs:</strong> Antimalarials (<strong>Primaquine</strong>, Chloroquine), Sulfonamides (Cotrimoxazole, Dapsone), Nitrofurantoin, Ciprofloxacin, Rasburicase, High-dose Aspirin.</li>
          <li><strong>Foods &amp; Metabolic:</strong> <strong>Fava beans</strong> (Favism), Diabetic Ketoacidosis (DKA).</li>
        </ul>
        <h4>3. Clinical Features</h4>
        <ul>
          <li>Usually asymptomatic between episodes. Within <strong>24–72 hours</strong> of exposure to a trigger: sudden pallor, fatigue, jaundice, back/abdominal pain, and dark "cola-colored" urine (<strong>hemoglobinuria</strong>). Also causes severe neonatal jaundice.</li>
        </ul>
        <h4>4. Diagnosis</h4>
        <ul>
          <li><strong>Hemolysis Labs:</strong> ↓ Hb, ↑ Reticulocytes, ↑ Indirect bilirubin, ↑ LDH, ↓ Haptoglobin, <strong>Negative Direct Coombs test</strong>.</li>
          <li><strong>Peripheral Blood Smear:</strong> <strong>Heinz bodies</strong> (on supravital stain) and <strong>Bite cells (degmacytes)</strong> / blister cells.</li>
          <li><strong>Confirmatory Test:</strong> Quantitative <strong>G6PD enzyme assay</strong> — <em>must be performed 6–8 weeks AFTER an acute crisis</em> (during an acute crisis, old deficient RBCs are destroyed and young reticulocytes have falsely normal G6PD levels!).</li>
        </ul>
        <h4>5. Management</h4>
        <ul>
          <li><strong>Immediate removal</strong> of the offending drug/trigger and treat underlying infection.</li>
          <li><strong>Supportive Care:</strong> Aggressive IV hydration (prevents acute tubular necrosis from hemoglobinuria), Folic acid supplementation, and PRBC transfusion if severe symptomatic anemia.</li>
          <li><strong>Prevention:</strong> Patient education with a written list of contraindicated drugs/foods.</li>
        </ul>
      `
    },
    {
      id: "he-t2-e3",
      type: "essay",
      batch: 22,
      exam: "Final",
      source: "Short Essay Q5 | Batch 22 | Final",
      stem: "5: How to approach patient with Hemolytic Anemia? (6 Marks)",
      modelAnswer: `
        <h4>Step 1: Confirm Presence of Hemolysis</h4>
        <ul>
          <li><strong>Clinical Clues:</strong> Pallor + <strong>Jaundice</strong> (lemon-yellow) + <strong>Splenomegaly</strong> + dark urine (hemoglobinuria) ± pigment gallstones.</li>
          <li><strong>Laboratory Hallmarks of Hemolysis:</strong>
            <ul>
              <li><em>Increased RBC Destruction:</em> ↑ Indirect (unconjugated) bilirubin, ↑↑ <strong>LDH</strong>, ↓↓ <strong>Haptoglobin</strong> (most sensitive marker).</li>
              <li><em>Compensatory Marrow Response:</em> ↑↑ <strong>Reticulocyte count</strong> (&gt;2–3%), polychromasia on smear.</li>
            </ul>
          </li>
        </ul>
        <h4>Step 2: Differentiate Intravascular vs Extravascular Hemolysis</h4>
        <ul>
          <li><strong>Intravascular (e.g., G6PD, PNH, MAHA, ABO mismatch):</strong> Hemoglobinemia, <strong>hemoglobinuria</strong> (dark red/brown urine), <strong>hemosiderinuria</strong>, undetectable haptoglobin, markedly elevated LDH.</li>
          <li><strong>Extravascular (e.g., Hereditary Spherocytosis, Warm AIHA, Sickle Cell):</strong> Prominent <strong>splenomegaly</strong>, jaundice, pigment gallstones, no hemoglobinuria.</li>
        </ul>
        <h4>Step 3: Perform Direct Antiglobulin Test (Direct Coombs Test — DAT)</h4>
        <ul>
          <li><strong>Coombs POSITIVE → Immune Hemolytic Anemia:</strong> Warm AIHA (IgG — SLE, CLL, drugs), Cold AIHA (IgM — <em>Mycoplasma</em>, EBV), or Alloimmune transfusion reaction.</li>
          <li><strong>Coombs NEGATIVE → Non-Immune Hemolytic Anemia:</strong> Proceed to Peripheral Blood Smear!</li>
        </ul>
        <h4>Step 4: Examine Peripheral Blood Smear &amp; Specific Confirmatory Tests</h4>
        <ul>
          <li><strong>Spherocytes (Coombs −):</strong> Hereditary Spherocytosis → EMA binding / Osmotic fragility test.</li>
          <li><strong>Sickle cells / Target cells:</strong> Sickle Cell Disease or Thalassemia → <strong>Hemoglobin Electrophoresis</strong>.</li>
          <li><strong>Bite cells / Heinz bodies:</strong> G6PD deficiency → G6PD enzyme assay (after crisis resolves).</li>
          <li><strong>Schistocytes (Fragmented RBCs):</strong> MAHA (TTP, HUS, DIC, prosthetic valve) → Check Platelets, PT/aPTT, ADAMTS13, Renal function.</li>
          <li><strong>Normal smear + Pancytopenia/Thrombosis:</strong> PNH → <strong>Flow cytometry (CD55/CD59 deficiency)</strong>.</li>
        </ul>
      `
    },
    {
      id: "he-t2-e4",
      type: "essay",
      batch: 21,
      exam: "Final",
      source: "Short Essay Q1 | Batch 21 | Final",
      stem: "1- List types of Sickle Cell Crises and discuss briefly about Vaso_Occlusive Crises (6 mark)",
      modelAnswer: `
        <h4>1. Four Main Types of Sickle Cell Crises</h4>
        <ul>
          <li><strong>1. Vaso-Occlusive (Painful) Crisis</strong> (most common).</li>
          <li><strong>2. Aplastic Crisis:</strong> Sudden drop in Hb and <em>reticulocytes</em> (reticulocytopenia) triggered by <strong>Parvovirus B19</strong> infection.</li>
          <li><strong>3. Splenic Sequestration Crisis:</strong> Acute trapping of blood in the spleen causing rapid painful splenomegaly, severe anemia, and hypovolemic shock (occurs mainly in young children before autosplenectomy).</li>
          <li><strong>4. Hemolytic (Hyperhemolytic) Crisis:</strong> Accelerated RBC breakdown with worsening jaundice, dark urine, and high reticulocytes (often triggered by infection or coexisting G6PD deficiency).</li>
          <li><em>(Plus Acute Chest Syndrome &amp; Priapism as severe vaso-occlusive emergencies).</em></li>
        </ul>
        <h4>2. Brief Discussion: Vaso-Occlusive (Painful) Crisis (VOC)</h4>
        <ul>
          <li><strong>Pathophysiology:</strong> Deoxygenation causes HbS polymerization → rigid sickle-shaped RBCs obstruct the microvasculature → tissue ischemia, infarction, and severe pain.</li>
          <li><strong>Precipitants:</strong> Dehydration, infection, cold exposure, hypoxia/high altitude, acidosis, physical/emotional stress.</li>
          <li><strong>Clinical Presentation:</strong> Acute severe deep bone/joint pain (back, chest, long bones, abdomen); in infants/toddlers presents as painful swelling of hands and feet (<strong>Dactylitis / Hand-Foot Syndrome</strong>).</li>
          <li><strong>Management:</strong>
            <ul>
              <li><strong>Aggressive Analgesia:</strong> Rapid IV Opioids (Morphine/Hydromorphone) + Paracetamol/NSAIDs.</li>
              <li><strong>IV Hydration:</strong> Isotonic/hypotonic IV fluids (avoid fluid overload).</li>
              <li><strong>Search &amp; Treat Precipitants:</strong> Empiric antibiotics if febrile/infected.</li>
              <li><strong>Oxygen:</strong> Give ONLY if hypoxic (SpO₂ &lt;92–95%) — routine O₂ is NOT indicated.</li>
              <li><strong>Prevention of Future Crises:</strong> <strong>Hydroxyurea</strong> (increases HbF), Folic acid, vaccinations (pneumococcal, meningococcal, <em>H. influenzae</em>).</li>
            </ul>
          </li>
        </ul>
      `
    },
    {
      id: "he-t2-e5",
      type: "essay",
      batch: 20,
      exam: "Final",
      source: "Essay Q1 | Batch 20 | Final",
      stem: "1- WHAT IS YOUR APPROACH TO A PATIENT WITH HEMOLYTIC ANEMIA? (6 marks)",
      modelAnswer: `
        <h4>1. History &amp; Physical Examination</h4>
        <ul>
          <li>Ask about family history of anemia/gallstones, ethnic origin, recent infections, drugs/fava beans, dark urine, and autoimmune symptoms.</li>
          <li>Examine for the classic triad: <strong>Pallor + Jaundice + Splenomegaly</strong> (plus leg ulcers or frontal bossing in chronic congenital hemolysis).</li>
        </ul>
        <h4>2. Confirm Hemolysis (Laboratory Triad)</h4>
        <ul>
          <li><strong>Reticulocytosis</strong> (high reticulocyte count &gt;2% + polychromasia).</li>
          <li><strong>↑ Indirect Bilirubin &amp; ↑ LDH</strong>.</li>
          <li><strong>↓ Serum Haptoglobin</strong> (plus hemoglobinuria/hemosiderinuria if intravascular).</li>
        </ul>
        <h4>3. Direct Coombs Test (DAT) — Immune vs Non-Immune</h4>
        <ul>
          <li><strong>Positive DAT:</strong> Immune hemolytic anemia (Warm IgG AIHA, Cold IgM AIHA, drug-induced, or transfusion reaction).</li>
          <li><strong>Negative DAT:</strong> Non-immune hemolytic anemia (proceed to blood smear).</li>
        </ul>
        <h4>4. Peripheral Blood Smear &amp; Confirmatory Testing</h4>
        <ul>
          <li><strong>Spherocytes (DAT −):</strong> Hereditary Spherocytosis (EMA/osmotic fragility).</li>
          <li><strong>Sickle cells / Target cells:</strong> Hemoglobin Electrophoresis (SCA / Thalassemia).</li>
          <li><strong>Bite cells / Heinz bodies:</strong> G6PD Assay (delayed 6–8 wks post-crisis).</li>
          <li><strong>Schistocytes:</strong> MAHA (TTP, HUS, DIC — check coagulation profile, renal function, ADAMTS13).</li>
          <li><strong>PNH suspected:</strong> Flow cytometry for CD55/CD59.</li>
        </ul>
      `
    },
    {
      id: "he-t2-e6",
      type: "essay",
      batch: 19,
      exam: "Final",
      source: "Short Essay Q4 | Batch 19 | Final",
      stem: "4- Sickle cell crisis (6 mark)",
      modelAnswer: `
        <h4>1. Classification of Sickle Cell Crises</h4>
        <ul>
          <li><strong>1. Vaso-Occlusive (Painful) Crisis:</strong> Most common; microvascular occlusion causing severe bone/joint/abdominal pain (or dactylitis in infants).</li>
          <li><strong>2. Acute Chest Syndrome (ACS — Leading Cause of Death):</strong> New pulmonary infiltrate on CXR + fever, chest pain, dyspnea, hypoxia, and tachypnea.</li>
          <li><strong>3. Aplastic Crisis:</strong> Transient bone marrow arrest (sharp drop in Hb + <strong>low reticulocytes</strong>) caused by <strong>Parvovirus B19</strong> infection.</li>
          <li><strong>4. Splenic Sequestration Crisis:</strong> Sudden pooling of blood in the spleen → rapid splenomegaly, severe anemia, hypovolemic shock (young children).</li>
          <li><strong>5. Hyperhemolytic Crisis:</strong> Sudden accelerated hemolysis with severe jaundice and high reticulocytes.</li>
        </ul>
        <h4>2. Triggers</h4>
        <ul>
          <li>Infection, dehydration, hypoxia, cold weather, acidosis, stress, and pregnancy.</li>
        </ul>
        <h4>3. General Management</h4>
        <ul>
          <li><strong>Vaso-Occlusive Crisis:</strong> Rapid strong analgesia (IV opioids), IV hydration, treat underlying infection, supplemental O₂ <em>only if hypoxic</em>.</li>
          <li><strong>Acute Chest Syndrome / Stroke:</strong> Urgent <strong>Exchange Blood Transfusion</strong> (target HbS &lt;30%), broad-spectrum IV antibiotics (Ceftriaxone + Azithromycin), O₂, and incentive spirometry.</li>
          <li><strong>Aplastic / Sequestration Crisis:</strong> Careful PRBC transfusion and hemodynamic resuscitation.</li>
          <li><strong>Long-Term Prevention:</strong> <strong>Hydroxyurea</strong> (↑ HbF), Folic acid, penicillin prophylaxis (children), and encapsulated-organism vaccines.</li>
        </ul>
      `
    }
  ],
  mcqs: [
    {
      id: "he-t2-m1",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q13 | Batch 24 | Final",
      stem: "which of the following is NOT associate c hemolytic anemia?",
      options: {
        a: "↑ Reticulocytes",
        b: "↑ LDH",
        c: "↑ Hb",
        d: "↑ bilirubin"
      },
      correct: "c",
      explanations: {
        a: "Reticulocytes are INCREASED due to compensatory bone marrow erythroid hyperplasia.",
        b: "LDH is INCREASED due to release from lysed RBCs.",
        c: "CORRECT (NOT associated): Hemoglobin (Hb) is DECREASED (anemia), NOT increased!",
        d: "Indirect (unconjugated) bilirubin is INCREASED from heme catabolism."
      },
      highYield: "Hemolysis Lab Profile: ↓ Hb, ↓ Haptoglobin, ↑ Reticulocytes, ↑ LDH, ↑ Indirect Bilirubin."
    },
    {
      id: "he-t2-m2",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q14 | Batch 24 | Final",
      stem: "Sickle cell anemia results from a single point mutation in the β-globin gene causing the substitution of which amino acid at position 6?",
      options: {
        a: "Valine is replaced by Glutamic acid",
        b: "Glutamic acid is replaced by Valine",
        c: "Glutamic acid is replaced by Lysine",
        d: "Valine is replaced by Arginine"
      },
      correct: "b",
      explanations: {
        a: "Reversed! Glutamic acid is the normal amino acid replaced by Valine.",
        b: "CORRECT: Sickle cell anemia (HbS) is caused by a single point mutation (GAG → GTG) at position 6 of the β-globin chain, replacing hydrophilic GLUTAMIC ACID with hydrophobic VALINE.",
        c: "Glutamic acid replaced by Lysine at position 6 causes Hemoglobin C (HbC) disease.",
        d: "Incorrect."
      },
      highYield: "Position 6 of β-globin: Glu → Val = HbS (Sickle Cell). Glu → Lys = HbC."
    },
    {
      id: "he-t2-m3",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q18 | Batch 23 | Final",
      stem: "Howell-Jolly bodies are found in the peripheral blood film in all of the following conditions EXCEPT:",
      options: {
        a: "Hyposplenism (Celiac / Sickle cell)",
        b: "Post-splenectomy",
        c: "Dyserythropoietic / Megaloblastic anemia",
        d: "None of the above (or Iron deficiency anemia)"
      },
      correct: "d",
      explanations: {
        a: "Hyposplenism (e.g., celiac disease, autosplenectomy in sickle cell anemia) fails to pit nuclear remnants → Howell-Jolly bodies present.",
        b: "Post-splenectomy is the #1 classic cause of Howell-Jolly bodies.",
        c: "Severe megaloblastic / dyserythropoietic anemia can also show Howell-Jolly bodies.",
        d: "CORRECT: None of the above (all a, b, and c cause Howell-Jolly bodies; Iron deficiency anemia does NOT)."
      },
      highYield: "Howell-Jolly bodies = Basophilic nuclear (DNA) remnants inside RBCs → Classic marker of Absent/Decreased Splenic Function (Splenectomy, Sickle Cell autosplenectomy, Celiac disease)."
    },
    {
      id: "he-t2-m4",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q19 | Batch 23 | Final",
      stem: "Target cells are seen in the peripheral blood film in all of the following conditions EXCEPT:",
      options: {
        a: "Renal disease",
        b: "Obstructive liver disease",
        c: "Thalassemia",
        d: "Post-splenectomy / Iron deficiency anemia"
      },
      correct: "a",
      explanations: {
        a: "CORRECT (EXCEPT): Renal disease (uremia) classically causes BURR CELLS (echinocytes), NOT target cells.",
        b: "Obstructive liver disease increases membrane cholesterol/surface-to-volume ratio → Target cells.",
        c: "Thalassemia (and HbC/HbS) classically shows abundant Target cells.",
        d: "Post-splenectomy and severe IDA also show Target cells."
      },
      highYield: "Target Cells Mnemonic (HALT): Hemoglobinopathies (HbC, HbS), Asplenia (post-splenectomy), Liver disease (obstructive), Thalassemia (+ IDA). Renal disease = Burr cells (Echinocytes)!"
    },
    {
      id: "he-t2-m5",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q20 | Batch 23 | Final",
      stem: "Red blood cell fragments (Schistocytes) are present on the blood film in all of the following conditions EXCEPT:",
      options: {
        a: "Disseminated intravascular coagulation (DIC)",
        b: "Thrombotic thrombocytopenic purpura (TTP)",
        c: "Hemolytic uremic syndrome (HUS)",
        d: "Autoimmune hemolytic anemia / Iron deficiency anemia"
      },
      correct: "d",
      explanations: {
        a: "DIC causes fibrin strands in microvessels that shear RBCs → Schistocytes.",
        b: "TTP causes platelet microthrombi → Schistocytes (MAHA).",
        c: "HUS causes renal microvascular thrombosis → Schistocytes (MAHA).",
        d: "CORRECT (EXCEPT): Autoimmune hemolytic anemia (AIHA) classically shows SPHEROCYTES (not schistocytes), and IDA shows microcytic hypochromic pencil cells."
      },
      highYield: "Schistocytes (RBC fragments) = Microangiopathic Hemolytic Anemia (TTP, HUS, DIC, HELLP, Mechanical heart valve). Spherocytes = AIHA & Hereditary Spherocytosis."
    },
    {
      id: "he-t2-m6",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q31 | Batch 23 | Final",
      stem: "Spherocytes are present in the peripheral blood film in all of the following conditions EXCEPT:",
      options: {
        a: "Liver disease (causes target cells)",
        b: "Hereditary spherocytosis",
        c: "Autoimmune hemolytic anemia",
        d: "ABO incompatibility / Delayed hemolytic transfusion reaction"
      },
      correct: "a",
      explanations: {
        a: "CORRECT (EXCEPT): Liver disease causes TARGET CELLS (and spur cells/acanthocytes in severe cirrhosis), NOT spherocytes.",
        b: "Hereditary spherocytosis is the classic inherited cause of spherocytes (Coombs negative).",
        c: "Warm AIHA is the classic acquired cause of spherocytes (Coombs positive).",
        d: "ABO incompatibility and delayed hemolytic transfusion reactions cause immune-mediated spherocytes."
      },
      highYield: "Spherocytes = Hereditary Spherocytosis (Coombs −) + Warm AIHA / ABO incompatibility (Coombs +)."
    },
    {
      id: "he-t2-m7",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q17 | Batch 22 | Final",
      stem: "All the followings cause huge splenomegaly except?",
      options: {
        a: "Chronic Myeloid Leukaemia",
        b: "Sickle Cell anemia",
        c: "Visceral Leishmaniasis",
        d: "Polycythemia rubra Vera"
      },
      correct: "b",
      explanations: {
        a: "CML is a classic cause of massive (huge) splenomegaly.",
        b: "CORRECT (EXCEPT): Adults with Sickle Cell Anemia undergo recurrent splenic infarctions leading to AUTOSPLENECTOMY (a small, shrunken, fibrotic, non-palpable spleen — NOT huge splenomegaly!).",
        c: "Visceral Leishmaniasis (Kala-azar) is a classic infectious cause of massive splenomegaly.",
        d: "Polycythemia Vera (and especially Primary Myelofibrosis) causes marked splenomegaly."
      },
      highYield: "Causes of MASSIVE Splenomegaly: CML, Myelofibrosis, Malaria, Visceral Leishmaniasis (Kala-azar), Gaucher's disease, Hairy Cell Leukemia, Thalassemia Major. Sickle Cell Anemia → Autosplenectomy!"
    },
    {
      id: "he-t2-m8",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q19 | Batch 22 | Final",
      stem: "sickle Cell anemia treatment including all of the following Except.",
      options: {
        a: "Recurrent blood transfusion",
        b: "Folic Acid",
        c: "HydroxyUrea",
        d: "Bone Marow Transplant"
      },
      correct: "a",
      explanations: {
        a: "CORRECT (EXCEPT): Routine recurrent blood transfusions are AVOIDED in uncomplicated Sickle Cell Anemia due to severe iron overload, alloimmunization, and hyperviscosity (reserved only for specific indications like stroke prevention or acute chest syndrome).",
        b: "Folic acid is given daily to all SCA patients to support chronic brisk erythropoiesis.",
        c: "Hydroxyurea is the cornerstone disease-modifying drug (increases HbF, reduces crises and ACS).",
        d: "Allogeneic Bone Marrow (Stem Cell) Transplant is the only established curative therapy."
      },
      highYield: "SCA Standard Therapy: Hydroxyurea + Folic Acid + Vaccinations/Penicillin + BMT (curative). Avoid Iron supplements and avoid unnecessary recurrent transfusions!"
    },
    {
      id: "he-t2-m9",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q3 | Batch 21 | Final",
      stem: "All of the following causes microangiopathy except.",
      options: {
        a: "TTP",
        b: "Hus",
        c: "Vasculitis",
        d: "Venom",
        e: "DIC"
      },
      correct: "d",
      explanations: {
        a: "TTP is a classic cause of MAHA.",
        b: "HUS is a classic cause of MAHA.",
        c: "Systemic vasculitis (and malignant HTN/scleroderma renal crisis) causes MAHA.",
        d: "CORRECT (EXCEPT): In the departmental syllabus/bank (repeated 3 times across Batches 19 & 21!), 'Venoms' is the keyed exception (venoms primarily cause direct hemolysis/coagulopathy rather than classic primary microangiopathy).",
        e: "DIC is a classic cause of MAHA."
      },
      highYield: "Departmental Repeat (Batch 19 Q9, Batch 21 Q3 & Q23): Classic MAHA causes = TTP, HUS, DIC, Vasculitis (Exception = Venoms)."
    },
    {
      id: "he-t2-m10",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q19 | Batch 21 | Final",
      stem: "All the FOLLOWING are TRUE about the Treatment of Sickle cell ANEMIA EXCEPT?",
      options: {
        a: "Folic acid supplements",
        b: "Ferrus(Iron)supplements",
        c: "Hydroxy Urea",
        d: "B.MAROW Transplant."
      },
      correct: "b",
      explanations: {
        a: "Folic acid is essential due to increased RBC turnover.",
        b: "CORRECT (EXCEPT): Iron (Ferrous) supplements are CONTRAINDICATED in Sickle Cell Anemia (and Thalassemia) because chronic hemolysis and transfusions already cause iron overload (hemosiderosis).",
        c: "Hydroxyurea increases HbF and reduces painful crises.",
        d: "Bone Marrow Transplant is curative."
      },
      highYield: "NEVER give Iron supplements in Sickle Cell Anemia or Thalassemia! (Repeated in Batch 18, 19, and 21 Finals!)."
    },
    {
      id: "he-t2-m11",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q22 | Batch 21 | Final",
      stem: "The management of an acute painful episode in sickle cell patients include all the following except.",
      options: {
        a: "Hydration by is fluid administration",
        b: "Administration of analgesic",
        c: "Oxygen administration",
        d: "Search for underlying infection"
      },
      correct: "c",
      explanations: {
        a: "IV fluid hydration is a cornerstone of acute VOC management.",
        b: "Rapid, strong analgesia (opioids) is a cornerstone of acute VOC management.",
        c: "CORRECT (EXCEPT): Routine supplemental Oxygen administration is NOT recommended in an uncomplicated vaso-occlusive crisis unless the patient is documented to be HYPOXIC (SpO₂ <92–95%), as hyperoxia can suppress erythropoiesis without reversing sickling.",
        d: "Searching for and treating underlying infection is essential."
      },
      highYield: "Acute VOC Management = Hydration + Strong Analgesia + Search for Infection. Routine Oxygen is NOT indicated unless hypoxic! (Repeated in Batch 19 & 21 Finals)."
    },
    {
      id: "he-t2-m12",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q23 | Batch 21 | Final",
      stem: "All the following cause Microangio pathic hemolgic anemia except.",
      options: {
        a: "TTP",
        b: "Hus",
        c: "Vasculites",
        d: "Venom s"
      },
      correct: "d",
      explanations: {
        a: "TTP causes MAHA.",
        b: "HUS causes MAHA.",
        c: "Vasculitis causes MAHA.",
        d: "CORRECT (EXCEPT): Venoms (repeated verbatim from Q3 of the same exam and Batch 19 Final Q9)."
      },
      highYield: "MAHA = TTP, HUS, DIC, Vasculitis, Malignant HTN, Prosthetic valves."
    },
    {
      id: "he-t2-m13",
      type: "mcq",
      batch: 20,
      exam: "Final",
      source: "Q3 | Batch 20 | Final",
      stem: "The neutrophil count in sickle cell anemia directly correlates with all the following except:",
      options: {
        a: "Mortality rate",
        b: "Hemorrhagic stroke",
        c: "Acute chest syndrome",
        d: "Transfusion requirements"
      },
      correct: "d",
      explanations: {
        a: "True: Elevated baseline neutrophil/WBC count (>15,000) is an independent predictor of early MORTALITY in SCA.",
        b: "True: Baseline leukocytosis directly correlates with increased risk of HEMORRHAGIC STROKE in SCA.",
        c: "True: Baseline leukocytosis directly correlates with increased frequency of ACUTE CHEST SYNDROME.",
        d: "CORRECT (EXCEPT): Neutrophil count does NOT directly correlate with transfusion requirements (transfusion needs correlate with baseline Hb level, not neutrophil count)."
      },
      highYield: "High steady-state Neutrophil count in SCA predicts: Early Death (Mortality), Acute Chest Syndrome, and Hemorrhagic Stroke (one reason Hydroxyurea helps is by lowering WBCs!)."
    },
    {
      id: "he-t2-m14",
      type: "mcq",
      batch: 20,
      exam: "Final",
      source: "Q4 | Batch 20 | Final",
      stem: "Sickle cell anemia (Acute Chest Syndrome) is characterized by all the following except:",
      options: {
        a: "Dyspnea",
        b: "Chest pain",
        c: "Fever",
        d: "Leukocytosis"
      },
      correct: "d",
      explanations: {
        a: "Dyspnea/tachypnea is a cardinal clinical feature of Acute Chest Syndrome (ACS).",
        b: "Pleuritic chest pain is a cardinal clinical feature of ACS.",
        c: "Fever (>38.5°C) is a cardinal clinical feature of ACS.",
        d: "CORRECT (EXCEPT): While leukocytosis often occurs during ACS, it is a non-specific lab finding already present at baseline in many SCA patients and is NOT one of the core clinical diagnostic criteria of ACS (which are: new pulmonary infiltrate on CXR + fever, chest pain, dyspnea/hypoxia)."
      },
      highYield: "Acute Chest Syndrome (ACS) Diagnostic Criteria = New pulmonary infiltrate on CXR + Fever, Chest pain, Dyspnea/tachypnea, or Hypoxia → #1 cause of death in SCA!",
      examNote: "All four can be seen in ACS, but Leukocytosis is not a defining clinical criterion."
    },
    {
      id: "he-t2-m15",
      type: "mcq",
      batch: 20,
      exam: "Final",
      source: "Q20 | Batch 20 | Final",
      stem: "The most common clinical MANIFESTATION of a patient with sickle cell ANEMIA is?",
      options: {
        a: "Vaso-occlusive crises",
        b: "Sequestration crises",
        c: "Aplastic crises",
        d: "Acute chest syndrome"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Vaso-occlusive (painful) crises are by far the #1 most common clinical manifestation and cause of hospitalization in Sickle Cell Anemia.",
        b: "Splenic sequestration occurs mainly in young children.",
        c: "Aplastic crisis is episodic (Parvovirus B19).",
        d: "Acute chest syndrome is the #1 cause of DEATH in SCA, not the most common overall manifestation."
      },
      highYield: "SCA: Most common manifestation = Vaso-occlusive (painful) crisis. #1 cause of death = Acute Chest Syndrome."
    },
    {
      id: "he-t2-m16",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q8 | Batch 19 | Final",
      stem: "The managment of acute painful episode of sick cell patient includes the following except:",
      options: {
        a: "Hydration",
        b: "Analgesic",
        c: "oxygen administration",
        d: "Antibotic if there infection"
      },
      correct: "c",
      explanations: {
        a: "Hydration is essential.",
        b: "Strong analgesics are essential.",
        c: "CORRECT (EXCEPT): Routine oxygen administration is NOT indicated unless the patient is hypoxic.",
        d: "Antibiotics are indicated if infection is suspected/present."
      },
      highYield: "Repeated verbatim in Batch 19 & Batch 21 Finals: Routine oxygen is NOT part of uncomplicated VOC management."
    },
    {
      id: "he-t2-m17",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q9 | Batch 19 | Final",
      stem: "All of the following cause microangiopathic hemolytic anemia except:",
      options: {
        a: "TTP",
        b: "HUS",
        c: "Vasculitis",
        d: "Venoms"
      },
      correct: "d",
      explanations: {
        a: "TTP causes MAHA.",
        b: "HUS causes MAHA.",
        c: "Vasculitis causes MAHA.",
        d: "CORRECT (EXCEPT): Venoms."
      },
      highYield: "MAHA causes: TTP, HUS, DIC, Vasculitis."
    },
    {
      id: "he-t2-m18",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q13 | Batch 19 | Final",
      stem: "All the following can treat patient with thalasmia except:",
      options: {
        a: "Folic acid",
        b: "Iron supplement",
        c: "Blood transfusion",
        d: "Splenectomy"
      },
      correct: "b",
      explanations: {
        a: "Folic acid supports chronic erythroid hyperplasia.",
        b: "CORRECT (EXCEPT): Iron supplements are STRICTLY CONTRAINDICATED in Thalassemia! Patients suffer from severe iron overload (requiring Iron CHELATION with Deferoxamine/Deferasirox).",
        c: "Regular blood transfusions (to maintain Hb >9–10 g/dL) are the mainstay of β-Thalassemia Major treatment.",
        d: "Splenectomy is indicated if hypersplenism causes excessive transfusion requirements."
      },
      highYield: "Thalassemia Major Treatment: Regular PRBC transfusions + Iron CHELATION (Deferasirox/Deferoxamine) + Folic acid ± Splenectomy (Curative = BMT). NEVER give Iron!"
    },
    {
      id: "he-t2-m19",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q15 | Batch 18 | Final",
      stem: "All of the following are treatment of sickle cell anemia except:",
      options: {
        a: "Folic acid",
        b: "Iron supplement",
        c: "Bone marrow transplantation",
        d: "Hydroxyl urea"
      },
      correct: "b",
      explanations: {
        a: "Folic acid is standard supportive therapy.",
        b: "CORRECT (EXCEPT): Iron supplements are contraindicated due to iron overload risk.",
        c: "Bone marrow transplantation is curative.",
        d: "Hydroxyurea is first-line disease-modifying therapy."
      },
      highYield: "Never give Iron supplements in Sickle Cell Anemia or Thalassemia!"
    },
    {
      id: "he-t2-m20",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q17 | Batch 18 | Final",
      stem: "The most important treatment of a patient with vasoocclusive crisis is:-",
      options: {
        a: "urgent blood transfusion",
        b: "strong analgesic and good hydration",
        c: "Iron supplement and oxygenation",
        d: "Strong and multiple antibiotic"
      },
      correct: "b",
      explanations: {
        a: "Simple blood transfusion is NOT indicated for uncomplicated VOC (risk of hyperviscosity).",
        b: "CORRECT: Strong analgesia (IV opioids) and good IV hydration are the two most important immediate pillars of treating an acute Vaso-Occlusive Crisis.",
        c: "Iron is contraindicated and routine oxygen is not indicated unless hypoxic.",
        d: "Antibiotics are only given if infection/fever is present."
      },
      highYield: "Most important treatment of Acute Vaso-Occlusive Crisis = Strong Analgesia + Good Hydration!"
    }
  ]
});
// ==========================================
// HEMATOLOGY - TOPIC 3: LEUKEMIAS (AML, ALL, CML, CLL)
// ==========================================
window.IM_DATA.hematology.push({
  title: "Leukemias (AML, ALL, CML, CLL)",
  shortTitle: "Leukemias",
  essays: [
    {
      id: "he-t3-e1",
      type: "essay",
      batch: 24,
      exam: "Final",
      source: "Short Essay Q6 | Batch 24 | Final",
      stem: "Q6: CLL RAI Staging & indcations of treatment (5M)",
      modelAnswer: `
        <h4>1. Rai Staging System for Chronic Lymphocytic Leukemia (CLL)</h4>
        <ul>
          <li><strong>Stage 0 (Low Risk):</strong> Lymphocytosis ONLY (blood &gt;5,000/µL and/or bone marrow &gt;30%). Median survival &gt;10–12 years.</li>
          <li><strong>Stage I (Intermediate Risk):</strong> Lymphocytosis + <strong>Lymphadenopathy</strong>.</li>
          <li><strong>Stage II (Intermediate Risk):</strong> Lymphocytosis + <strong>Splenomegaly and/or Hepatomegaly</strong> (± lymphadenopathy).</li>
          <li><strong>Stage III (High Risk):</strong> Lymphocytosis + <strong>Anemia</strong> (Hb &lt;11 g/dL, non-immune).</li>
          <li><strong>Stage IV (High Risk):</strong> Lymphocytosis + <strong>Thrombocytopenia</strong> (Platelets &lt;100,000/µL, non-immune).</li>
        </ul>
        <h4>2. Indications to Initiate Treatment in CLL (iwCLL Criteria — Otherwise "Watch &amp; Wait")</h4>
        <ul>
          <li><strong>Progressive Bone Marrow Failure:</strong> Worsening anemia (Hb &lt;10–11 g/dL) or thrombocytopenia (Platelets &lt;100,000/µL) — i.e., Rai Stage III/IV or Binet Stage C.</li>
          <li><strong>Massive / Progressive / Symptomatic Splenomegaly</strong> (&gt;6 cm below costal margin) or <strong>Bulky / Symptomatic Lymphadenopathy</strong> (&gt;10 cm).</li>
          <li><strong>Constitutional B-Symptoms:</strong> Unintentional weight loss ≥10% in 6 months, severe fatigue, fever &gt;38°C for ≥2 weeks without infection, or drenching night sweats &gt;1 month.</li>
          <li><strong>Rapid Lymphocyte Doubling Time:</strong> &lt;6 months (or &gt;50% increase in 2 months).</li>
          <li><strong>Autoimmune Complications Poorly Responsive to Steroids:</strong> Autoimmune hemolytic anemia (AIHA) or immune thrombocytopenia (ITP).</li>
          <li><em>Note:</em> Asymptomatic early-stage disease (Rai 0–II), high absolute WBC count alone, or recurrent infections alone are <strong>NOT</strong> indications for chemotherapy.</li>
        </ul>
      `
    },
    {
      id: "he-t3-e2",
      type: "essay",
      batch: 22,
      exam: "Final",
      source: "Short Essay Q4 | Batch 22 | Final",
      stem: "4: .clinical stages of CML (6 marks)",
      modelAnswer: `
        <h4>Three Clinical Phases (Stages) of Chronic Myeloid Leukemia (CML)</h4>
        <ul>
          <li><strong>1. Chronic Phase (~85–90% at diagnosis):</strong>
            <ul>
              <li><em>Blasts:</em> <strong>&lt;10%</strong> blasts in peripheral blood and bone marrow.</li>
              <li><em>Clinical Features:</em> Often asymptomatic (incidental leukocytosis) or insidious fatigue, weight loss, night sweats, left upper quadrant fullness/early satiety from <strong>massive splenomegaly</strong>, and gout.</li>
              <li><em>Labs:</em> Marked leukocytosis (all stages of granulocyte maturation), basophilia, eosinophilia, low LAP score, and Philadelphia chromosome <strong>t(9;22) / BCR-ABL1</strong>. Responds excellently to Tyrosine Kinase Inhibitors (Imatinib).</li>
            </ul>
          </li>
          <li><strong>2. Accelerated Phase (Transitional — 3–12 months if untreated):</strong>
            <ul>
              <li><em>Blasts:</em> <strong>10–19%</strong> blasts in peripheral blood or bone marrow.</li>
              <li><em>Other Criteria:</em> Peripheral basophils <strong>≥20%</strong>, persistent thrombocytopenia (&lt;100,000/µL) unrelated to therapy, increasing spleen size and worsening leukocytosis unresponsive to therapy, fever/bone pain/weight loss, and new clonal cytogenetic abnormalities.</li>
            </ul>
          </li>
          <li><strong>3. Blast Crisis (Blastic Phase — Resembles Acute Leukemia):</strong>
            <ul>
              <li><em>Blasts:</em> <strong>≥20%</strong> blasts in peripheral blood or bone marrow, OR extramedullary blast proliferation (myeloid sarcoma/chloroma).</li>
              <li><em>Types:</em> ~70% transform into <strong>AML</strong> (myeloid blast crisis — worse prognosis) and ~30% into <strong>ALL</strong> (lymphoid blast crisis).</li>
              <li><em>Clinical Features:</em> Severe bone marrow failure (anemia, bleeding/petechiae, severe infections), rapid deterioration, and very poor prognosis without intensive chemotherapy/allo-SCT.</li>
            </ul>
          </li>
        </ul>
      `
    },
    {
      id: "he-t3-e3",
      type: "essay",
      batch: 21,
      exam: "Final",
      source: "Short Essay Q6 | Batch 21 | Final",
      stem: "6- A 70 years man came complaining of cough which is dry not associated with difficulty of breathing or hemoptysis for the last few days the patient notice painless lumps involving both side of the neck and inguinal region which are gradually increasing in size during ab- dominal examination show Hepatosplenomegaly investigation CBC show HB is low -Leukocytosis 75000/ml Differential count shows increase lymphocytosis 95% depends on the above information (6 mark)\na. What is most likely diagnosis?\nb. What are the other investigation you will request?\nc. How to treat this patient?",
      modelAnswer: `
        <h4>a. Most Likely Diagnosis</h4>
        <ul>
          <li><strong>Chronic Lymphocytic Leukemia (CLL) — Rai Stage III</strong> (elderly male with generalized painless lymphadenopathy, hepatosplenomegaly, marked mature lymphocytosis 95%, and anemia).</li>
        </ul>
        <h4>b. Other Investigations to Request</h4>
        <ul>
          <li><strong>Peripheral Blood Smear:</strong> Numerous small, mature-appearing lymphocytes and classic <strong>Smudge cells (basket cells)</strong>.</li>
          <li><strong>Flow Cytometry (Immunophenotyping — Gold Standard Diagnostic Test):</strong> Confirms clonal B-cell population positive for <strong>CD19, CD20 (dim), CD23, and aberrant CD5</strong>.</li>
          <li><strong>Prognostic &amp; Cytogenetic Workup (FISH):</strong> Check for <strong>del(17p) / TP53 mutation</strong> (worst prognosis), del(11q), del(13q) (best prognosis), and IGHV mutation status.</li>
          <li><strong>Complication &amp; Baseline Labs:</strong> Direct Coombs test (DAT — rule out AIHA as cause of anemia), reticulocyte count, LDH, β₂-microglobulin, serum immunoglobulins (rule out hypogammaglobulinemia), LFTs, renal function, uric acid, and viral serology (HBV/HCV/HIV before Rituximab).</li>
          <li><strong>Imaging / Marrow:</strong> Chest X-ray/CT (evaluate cough &amp; mediastinal/hilar nodes); Bone marrow biopsy (if needed to confirm marrow infiltration vs AIHA).</li>
        </ul>
        <h4>c. Management</h4>
        <ul>
          <li><strong>Indication Met:</strong> Because the patient has <strong>anemia (Rai Stage III)</strong> and progressive hepatosplenomegaly/lymphadenopathy, active systemic therapy is indicated.</li>
          <li><strong>First-Line Targeted Therapy (Preferred in Elderly/All Patients):</strong>
            <ul>
              <li><strong>BTK Inhibitors:</strong> Oral <strong>Ibrutinib</strong>, Acalabrutinib, or Zanubrutinib (continuous).</li>
              <li><strong>OR BCL-2 Inhibitor + Anti-CD20:</strong> <strong>Venetoclax + Obinutuzumab/Rituximab</strong> (fixed duration).</li>
              <li><em>Traditional Chemoimmunotherapy (if targeted agents unavailable):</em> <strong>Chlorambucil + Obinutuzumab/Rituximab</strong> (elderly/unfit) or Bendamustine + Rituximab (BR) / FCR (young fit).</li>
            </ul>
          </li>
          <li><strong>Supportive Care:</strong> Vaccinations (pneumococcal, influenza — avoid live vaccines), IVIG if recurrent infections with hypogammaglobulinemia, corticosteroids if Coombs-positive AIHA, and allopurinol for tumor lysis prophylaxis.</li>
        </ul>
      `
    },
    {
      id: "he-t3-e4",
      type: "essay",
      batch: 20,
      exam: "Final",
      source: "Essay Q6 | Batch 20 | Final",
      stem: "6- Young female patient 25 y presented with general fatigue and left upper quadrant ab- dominal discomfort. During examination, patient looks ill, no pallor, cyanosis or jaun- dice, huge splenomegaly, no lymphadenopathy. Depending on the above information: (5 marks)\nWhat is the most likely diagnosis?\nWhat are the necessary investigations?\nWhat is the treatment?\nWhat are the causes of death?",
      modelAnswer: `
        <h4>1. Most Likely Diagnosis</h4>
        <ul>
          <li><strong>Chronic Myeloid Leukemia (CML)</strong> — Chronic Phase (classic presentation: fatigue, LUQ discomfort, <strong>huge splenomegaly</strong>, and absence of lymphadenopathy).</li>
        </ul>
        <h4>2. Necessary Investigations</h4>
        <ul>
          <li><strong>CBC &amp; Peripheral Blood Smear:</strong> Marked leukocytosis (often 50,000–300,000/µL) showing the <strong>entire spectrum of myeloid maturation</strong> (myelocytes, metamyelocytes, bands, neutrophils), <strong>basophilia</strong>, eosinophilia, normocytic anemia, and normal/high platelets.</li>
          <li><strong>Cytogenetics &amp; Molecular Confirmation (Gold Standard):</strong> Karyotyping/FISH for the <strong>Philadelphia Chromosome t(9;22)(q34;q11)</strong> and RT-PCR for the <strong>BCR-ABL1 fusion gene</strong>.</li>
          <li><strong>Bone Marrow Aspiration &amp; Biopsy:</strong> Markedly <strong>hypercellular</strong> marrow with myeloid hyperplasia (high M:E ratio) and blast percentage (&lt;10% in chronic phase).</li>
          <li><strong>Supportive Labs:</strong> <strong>Low Leukocyte Alkaline Phosphatase (LAP) score</strong> (differentiates from leukemoid reaction), elevated serum <strong>uric acid</strong>, LDH, and Vitamin B₁₂ levels.</li>
        </ul>
        <h4>3. Treatment</h4>
        <ul>
          <li><strong>First-Line Therapy:</strong> Oral <strong>BCR-ABL Tyrosine Kinase Inhibitors (TKIs)</strong> — <strong>Imatinib</strong> (1st-generation) or Dasatinib / Nilotinib (2nd-generation).</li>
          <li><strong>Supportive / Cytoreduction:</strong> <strong>Hydroxyurea</strong> (for rapid initial WBC lowering while awaiting BCR-ABL confirmation) + <strong>Allopurinol</strong> &amp; hydration (prevents hyperuricemia/tumor lysis).</li>
          <li><strong>Curative Option (TKI-Resistant / Blast Crisis):</strong> Allogeneic Hematopoietic Stem Cell Transplantation (Allo-HSCT).</li>
        </ul>
        <h4>4. Causes of Death</h4>
        <ul>
          <li><strong>Blast Crisis</strong> (transformation to refractory AML/ALL — #1 cause of death).</li>
          <li><strong>Severe Secondary Infections / Sepsis</strong> (neutropenia/dysfunctional granulocytes).</li>
          <li><strong>Fatal Bleeding / Hemorrhage</strong> (severe thrombocytopenia/DIC in blast crisis).</li>
          <li><strong>Secondary Myelofibrosis &amp; Bone Marrow Failure</strong> (rarely leukostasis).</li>
        </ul>
      `
    },
    {
      id: "he-t3-e5",
      type: "essay",
      batch: 19,
      exam: "Final",
      source: "Short Essay Q5 | Batch 19 | Final",
      stem: "5- Staging (phases) of CML (6 mark)",
      modelAnswer: `
        <h4>1. Chronic Phase (CP)</h4>
        <ul>
          <li><strong>Blasts:</strong> &lt;10% in blood/bone marrow.</li>
          <li><strong>Features:</strong> Insidious onset (fatigue, weight loss, huge splenomegaly, gout), marked leukocytosis with full myeloid maturation and basophilia. Excellent long-term remission with TKIs (Imatinib).</li>
        </ul>
        <h4>2. Accelerated Phase (AP)</h4>
        <ul>
          <li><strong>Blasts:</strong> 10–19% in blood/bone marrow.</li>
          <li><strong>Features:</strong> Peripheral basophils ≥20%, worsening thrombocytopenia (&lt;100,000/µL), progressive splenomegaly and rising WBC count despite therapy, fever/night sweats/bone pain, and additional chromosomal abnormalities.</li>
        </ul>
        <h4>3. Blast Crisis (BC)</h4>
        <ul>
          <li><strong>Blasts:</strong> ≥20% in blood/bone marrow (or extramedullary blast infiltration).</li>
          <li><strong>Features:</strong> Behaves like acute leukemia (~70% AML, ~30% ALL) with severe anemia, bleeding, infections, and poor survival.</li>
        </ul>
      `
    }
  ],
  mcqs: [
    {
      id: "he-t3-m1",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q15 | Batch 24 | Final",
      stem: "Which of the following leukemias is the most common leukemia in adults and the elderly in Western countries?",
      options: {
        a: "AML",
        b: "CML",
        c: "CLL",
        d: "ALL"
      },
      correct: "c",
      explanations: {
        a: "AML is the most common ACUTE leukemia in adults, but CLL is the most common leukemia overall.",
        b: "CML accounts for ~15% of adult leukemias.",
        c: "CORRECT: Chronic Lymphocytic Leukemia (CLL) is the #1 most common leukemia overall in adults and the elderly in Western countries (median age ~70 years).",
        d: "ALL is the most common leukemia in CHILDREN."
      },
      highYield: "Most common leukemia in Children = ALL. Most common ACUTE leukemia in Adults = AML. Most common leukemia OVERALL in Adults/Elderly = CLL."
    },
    {
      id: "he-t3-m2",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q19 | Batch 24 | Final",
      stem: "What is the initial first-line treatment of choice in Chronic Myeloid Leukemia (CML)?",
      options: {
        a: "Imatinib (BCR-ABL Tyrosine kinase inhibitor)",
        b: "Chlorambucil",
        c: "R-CHOP regimen",
        d: "All-trans retinoic acid (ATRA)"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Imatinib (first-generation BCR-ABL tyrosine kinase inhibitor) is the classic first-line treatment of choice for Chronic Phase CML.",
        b: "Chlorambucil is an alkylating agent historically used in elderly CLL.",
        c: "R-CHOP is the first-line regimen for Diffuse Large B-Cell Lymphoma (DLBCL).",
        d: "ATRA is the specific treatment for Acute Promyelocytic Leukemia (AML-M3)."
      },
      highYield: "CML (t(9;22) BCR-ABL) → Imatinib (TKI). AML-M3 (t(15;17) PML-RARA) → ATRA + Arsenic Trioxide."
    },
    {
      id: "he-t3-m3",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q11 | Batch 23 | Final",
      stem: "CLL may transform into all of the following EXCEPT:",
      options: {
        a: "Acute myeloid leukemia",
        b: "Richter's syndrome (High-grade diffuse large B-cell lymphoma)",
        c: "Prolymphocytic leukemia",
        d: "Acute lymphoblastic leukemia"
      },
      correct: "a",
      explanations: {
        a: "CORRECT (EXCEPT): CLL is a lymphoid (B-cell) malignancy and does NOT directly transform into Acute Myeloid Leukemia (AML) (whereas CML, PV, ET, and MDS transform into AML).",
        b: "Richter's transformation (~5–10% of CLL) is transformation into aggressive Diffuse Large B-Cell Lymphoma (DLBCL) or Hodgkin lymphoma.",
        c: "CLL can undergo prolymphocytic transformation (B-PLL).",
        d: "Rarely, CLL can transform into acute lymphoblastic leukemia (ALL)."
      },
      highYield: "Richter's Syndrome = Transformation of CLL into aggressive High-Grade Lymphoma (DLBCL) — suspect if sudden rapid nodal enlargement, ↑↑ LDH, and B-symptoms!"
    },
    {
      id: "he-t3-m4",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q13 | Batch 23 | Final",
      stem: "Which of the following FAB subtypes of Acute Myeloid Leukemia (AML) is the most curable and has the best prognosis?",
      options: {
        a: "M3 (Acute promyelocytic leukemia)",
        b: "M0",
        c: "M5",
        d: "M7"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: AML-M3 (Acute Promyelocytic Leukemia — APL, t(15;17) PML-RARA, abundant Auer rods) has the BEST prognosis and highest cure rate (>90%) when treated with ATRA + Arsenic Trioxide!",
        b: "M0 (minimally differentiated AML) has a poor prognosis.",
        c: "M5 (acute monocytic leukemia — gingival hyperplasia) has an intermediate/poor prognosis.",
        d: "M7 (acute megakaryoblastic leukemia — Down syndrome) has a poor prognosis in adults."
      },
      highYield: "AML-M3 (APL) = t(15;17) + Auer rods + DIC risk + Treated with ATRA (All-trans retinoic acid) → MOST CURABLE AML subtype!"
    },
    {
      id: "he-t3-m5",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q14 | Batch 23 | Final",
      stem: "Signs of progression to the accelerated phase of CML include all of the following EXCEPT:",
      options: {
        a: "Worsening thrombocytosis",
        b: "Increasing splenomegaly",
        c: "Fever, malaise, weight loss",
        d: "Difficulty controlling the leukocytosis"
      },
      correct: "a",
      explanations: {
        a: "CORRECT (EXCEPT): Progression to the accelerated phase is classically signaled by worsening THROMBOCYTOPENIA (<100,000/µL) and anemia (marrow failure), NOT worsening thrombocytosis.",
        b: "Increasing splenomegaly unresponsive to therapy is a classic sign of accelerated phase.",
        c: "New constitutional symptoms (fever, malaise, weight loss, bone pain) herald accelerated phase.",
        d: "Increasing difficulty controlling leukocytosis despite escalating therapy indicates accelerated phase."
      },
      highYield: "Repeated verbatim in Batch 20 Final & Batch 23 Final: Accelerated phase of CML → Increasing splenomegaly, B-symptoms, uncontrolled leukocytosis, and worsening THROMBOCYTOPENIA (not thrombocytosis)."
    },
    {
      id: "he-t3-m6",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q14 | Batch 22 | Final",
      stem: "Poor prognosis of ALL including all of the following except",
      options: {
        a: "age <3year or >35 year",
        b: "WBC 100000/micro litre",
        c: "CNS involvement",
        d: "T(4,11)"
      },
      correct: "a",
      explanations: {
        a: "CORRECT (EXCEPT): In ALL, the BEST prognosis is in young children aged 1–9 years (so age 2–3 years has a GOOD prognosis; poor prognosis is strictly infants <1 year or adults >35 years!).",
        b: "Very high WBC count (>30,000–100,000/µL) at diagnosis is a major poor prognostic factor.",
        c: "CNS involvement at diagnosis is a poor prognostic factor.",
        d: "Translocations t(4;11) (MLL rearrangement) and t(9;22) (Philadelphia chromosome) are classic poor prognostic cytogenetics in ALL."
      },
      highYield: "ALL Prognosis: GOOD = Age 1–9 yrs, Hyperdiploidy, t(12;21). POOR = Age <1 yr or >35 yrs, WBC >50–100k, CNS disease, t(9;22), t(4;11)."
    },
    {
      id: "he-t3-m7",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q4 | Batch 21 | Final",
      stem: "AML is now generally classified into how many sparate forms based on FAB classification",
      options: {
        a: "8",
        b: "2",
        c: "5",
        d: "7",
        e: "6"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: The French-American-British (FAB) classification divides AML into 8 separate subtypes: M0, M1, M2, M3, M4, M5, M6, and M7.",
        b: "Incorrect.",
        c: "Incorrect.",
        d: "Incorrect (don't forget M0!).",
        e: "Incorrect."
      },
      highYield: "FAB Classification of AML = 8 subtypes (M0 through M7). (Repeated verbatim in Batch 20 & Batch 21 Finals!)."
    },
    {
      id: "he-t3-m8",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q8 | Batch 21 | Final",
      stem: "All of the following poor prognosis of CML except.",
      options: {
        a: "Increased circulating blast",
        b: "Increased spleen size",
        c: "Young age",
        d: "Decreased platelets count"
      },
      correct: "c",
      explanations: {
        a: "Increased circulating blasts is a major poor prognostic factor (Sokal/Hasford score).",
        b: "Massive/increased spleen size is a poor prognostic factor.",
        c: "CORRECT (EXCEPT): OLDER age (not young age) is a poor prognostic factor in CML.",
        d: "Thrombocytopenia (decreased platelet count) indicates advanced/accelerated disease and poor prognosis."
      },
      highYield: "CML Poor Prognosis (Sokal Score): Older age, Larger spleen size, Higher blast %, Abnormal platelet count, Basophilia/eosinophilia."
    },
    {
      id: "he-t3-m9",
      type: "mcq",
      batch: 20,
      exam: "Final",
      source: "Q1 | Batch 20 | Final",
      stem: "AML is generally classified into how many separate forms based on FAB classifications:",
      options: {
        a: "2",
        b: "8",
        c: "5",
        d: "6"
      },
      correct: "b",
      explanations: {
        a: "Incorrect.",
        b: "CORRECT: 8 forms (M0 to M7).",
        c: "Incorrect.",
        d: "Incorrect."
      },
      highYield: "AML FAB = 8 subtypes (M0–M7)."
    },
    {
      id: "he-t3-m10",
      type: "mcq",
      batch: 20,
      exam: "Final",
      source: "Q5 | Batch 20 | Final",
      stem: "Signs of progression to the accelerated phase of CML include all of the following except:",
      options: {
        a: "Increasing splenomegaly",
        b: "Worsening thrombocytosis",
        c: "Fever, malaise, weight loss",
        d: "Difficulty controlling the leukocytosis"
      },
      correct: "b",
      explanations: {
        a: "Sign of accelerated phase.",
        b: "CORRECT (EXCEPT): Worsening thrombocytosis is NOT the classic sign (worsening thrombocytopenia is).",
        c: "Sign of accelerated phase.",
        d: "Sign of accelerated phase."
      },
      highYield: "Repeated verbatim in Batch 20 Final & Batch 23 Final."
    },
    {
      id: "he-t3-m11",
      type: "mcq",
      batch: 20,
      exam: "Final",
      source: "Q15 | Batch 20 | Final",
      stem: "Which of the following should not be by itself considered an indication to begin CLL direct therapy?",
      options: {
        a: "Night sweats and weight loss",
        b: "Splenomegaly",
        c: "Increased frequency of infections",
        d: "Anemia"
      },
      correct: "c",
      explanations: {
        a: "Constitutional B-symptoms (drenching night sweats, ≥10% weight loss) ARE an indication to treat.",
        b: "Massive/progressive symptomatic splenomegaly IS an indication to treat.",
        c: "CORRECT (NOT an indication): Hypogammaglobulinemia and increased frequency of infections by itself is NOT an indication to start CLL chemotherapy (chemotherapy actually worsens immunosuppression! Manage with antibiotics, vaccines, and IVIG).",
        d: "Progressive marrow-failure anemia (Hb <10–11 g/dL) IS an indication to treat."
      },
      highYield: "Recurrent infections alone in CLL → Give IVIG & antibiotics, NOT chemotherapy!"
    },
    {
      id: "he-t3-m12",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q2 | Batch 19 | Final",
      stem: "All the following consider as feature of CML except:",
      options: {
        a: "Basophilia",
        b: "Massive splenomegaly",
        c: "Microcytic hypochromic anemia",
        d: "Gout"
      },
      correct: "c",
      explanations: {
        a: "Basophilia is a classic hallmark of CML.",
        b: "Massive splenomegaly is a classic hallmark of CML.",
        c: "CORRECT (EXCEPT): CML causes NORMOCYTIC NORMOCHROMIC anemia, NOT microcytic hypochromic anemia.",
        d: "Hyperuricemia and secondary gout occur due to high myeloid cell turnover."
      },
      highYield: "CML Classic Features: Massive splenomegaly + Basophilia + Low LAP score + Hyperuricemia/Gout + Normocytic anemia + t(9;22)."
    },
    {
      id: "he-t3-m13",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q3 | Batch 19 | Final",
      stem: "All the following side effect of imatinib except:",
      options: {
        a: "Skin rash",
        b: "Fliud retention",
        c: "Muscle cramp",
        d: "Neutrophelia."
      },
      correct: "d",
      explanations: {
        a: "Skin rash is a common side effect of Imatinib.",
        b: "Fluid retention (especially periorbital edema and peripheral edema) is a classic side effect of Imatinib.",
        c: "Muscle cramps and nausea/diarrhea are common side effects of Imatinib.",
        d: "CORRECT (EXCEPT): Imatinib causes NEUTROPENIA (and thrombocytopenia/anemia via myelosuppression), NOT neutrophilia!"
      },
      highYield: "Imatinib Side Effects: Periorbital edema/fluid retention, Muscle cramps, Skin rash, GI upset, and Cytopenias (Neutropenia/Thrombocytopenia)."
    },
    {
      id: "he-t3-m14",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q7 | Batch 19 | Final",
      stem: "Which one of the following is most curable in AML?",
      options: {
        a: "M0",
        b: "M1",
        c: "M3",
        d: "M4"
      },
      correct: "c",
      explanations: {
        a: "Poor prognosis.",
        b: "Intermediate prognosis.",
        c: "CORRECT: M3 (Acute Promyelocytic Leukemia — APL) is the most curable subtype of AML (>90% cure rate with ATRA + Arsenic Trioxide).",
        d: "Intermediate prognosis."
      },
      highYield: "Most curable AML = M3 (APL)."
    },
    {
      id: "he-t3-m15",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q7 | Batch 18 | Final",
      stem: "All the following risk factores for A M L except:-",
      options: {
        a: "Fanconi anemia",
        b: "Killnefelter syndrome",
        c: "Down's syndrome",
        d: "Kallaman's syndrome"
      },
      correct: "d",
      explanations: {
        a: "Fanconi anemia (DNA repair defect) carries a very high risk of AML and MDS.",
        b: "Klinefelter syndrome (47,XXY) is listed in textbooks as a congenital risk factor for acute leukemia/AML.",
        c: "Down's syndrome (Trisomy 21) carries a 10–20x increased risk of AML (especially M7) and ALL.",
        d: "CORRECT (EXCEPT): Kallmann syndrome (hypogonadotropic hypogonadism + anosmia) is an endocrine/developmental disorder with NO association with AML."
      },
      highYield: "AML Risk Factors: Benzene, Ionizing radiation, Prior chemotherapy (alkylating agents, topoisomerase II inhibitors), MDS/MPNs, Down's syndrome, Fanconi anemia, Bloom syndrome."
    },
    {
      id: "he-t3-m16",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q8 | Batch 18 | Final",
      stem: "Which the following can be associeted whit DIC in AML?",
      options: {
        a: "M1",
        b: "M2",
        c: "M3",
        d: "M4"
      },
      correct: "c",
      explanations: {
        a: "Not classically associated with DIC.",
        b: "Not classically associated with DIC.",
        c: "CORRECT: AML-M3 (Acute Promyelocytic Leukemia) releases procoagulant primary granules (tissue factor/Auer rods) from lysed promyelocytes, classically precipitating severe life-threatening Disseminated Intravascular Coagulation (DIC) and hemorrhage!",
        d: "Not classically associated with DIC."
      },
      highYield: "AML-M3 (APL) = High risk of fatal DIC → Start ATRA immediately upon morphological suspicion even before cytogenetics return!"
    },
    {
      id: "he-t3-m17",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q9 | Batch 18 | Final",
      stem: "All the following indication of treatment of C L L except:-",
      options: {
        a: "Thrombocytopenia <50000/mm3",
        b: "Anemia Hb>8",
        c: "Bulkly lymphedemopathy.",
        d: "Fever without infection"
      },
      correct: "b",
      explanations: {
        a: "Severe thrombocytopenia (<100,000, and certainly <50,000/mm³) is a clear indication for CLL therapy.",
        b: "CORRECT (EXCEPT): Treatment is indicated for progressive anemia with Hb <10–11 g/dL (not simply 'Hb > 8', which includes completely normal hemoglobin levels!).",
        c: "Bulky/symptomatic lymphadenopathy (>10 cm) is an indication for therapy.",
        d: "Unexplained fever without infection (B-symptom) is an indication for therapy."
      },
      highYield: "CLL Treatment Indications: Rai III/IV (Hb <10–11, Plt <100k), Bulky nodes/spleen, B-symptoms, Lymphocyte doubling time <6 mo, Steroid-refractory AIHA/ITP."
    },
    {
      id: "he-t3-m18",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q10 | Batch 18 | Final",
      stem: "All the following are present in CML except:-",
      options: {
        a: "Marked leuko cytosis",
        b: "LAP decreased",
        c: "Decrease marrow cellularity",
        d: "Baso philia."
      },
      correct: "c",
      explanations: {
        a: "Marked leukocytosis is universal in CML.",
        b: "Leukocyte Alkaline Phosphatase (LAP) score is classically DECREASED in CML (vs HIGH in leukemoid reaction).",
        c: "CORRECT (EXCEPT): Bone marrow in CML is markedly HYPERCELLULAR (100% cellularity with myeloid hyperplasia), NOT decreased cellularity (hypocellularity is seen in Aplastic Anemia).",
        d: "Basophilia is a classic hallmark of CML."
      },
      highYield: "CML vs Leukemoid Reaction: CML = Low LAP score + Basophilia + Splenomegaly + t(9;22). Leukemoid Reaction = HIGH LAP score + Toxic granulation + No basophilia."
    },
    {
      id: "he-t3-m19",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q14 | Batch 18 | Final",
      stem: "The least likely cause of death in CML is :-",
      options: {
        a: "Blast crisis",
        b: "Secondry infection",
        c: "Thrombosis",
        d: "Myelofibrosis"
      },
      correct: "c",
      explanations: {
        a: "Blast crisis is the #1 leading cause of death in CML.",
        b: "Secondary infection/sepsis (during blast crisis/neutropenia) is a major cause of death.",
        c: "CORRECT (Least likely): Thrombosis is the #1 cause of death in Polycythemia Vera (PV) and Essential Thrombocythemia (ET), NOT CML (CML patients die primarily from blast crisis, infection, bleeding, or secondary myelofibrosis).",
        d: "Progression to secondary myelofibrosis and marrow failure is a recognized late complication."
      },
      highYield: "Cause of Death Comparison: CML → Blast Crisis (#1). PV & ET → Thrombosis (#1)."
    }
  ]
});
// ==========================================
// HEMATOLOGY - TOPIC 4: LYMPHOMAS (HL & NHL) & MULTIPLE MYELOMA
// ==========================================
window.IM_DATA.hematology.push({
  title: "Lymphomas (Hodgkin & Non-Hodgkin) & Multiple Myeloma",
  shortTitle: "Lymphomas & Myeloma",
  essays: [
    {
      id: "he-t4-e1",
      type: "essay",
      batch: 18,
      exam: "Final",
      source: "Short Essay Q3 | Batch 18 | Final",
      stem: "3- Differences between HL & NHL? (5 M)",
      modelAnswer: `
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Hodgkin Lymphoma (HL)</th>
              <th>Non-Hodgkin Lymphoma (NHL)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Hallmark Cell</strong></td>
              <td><strong>Reed-Sternberg (RS) cells</strong> ("owl-eye" binucleated cells; CD15+, CD30+)</td>
              <td><strong>Absent</strong> (diverse B-cell [~85%] or T-cell [~15%] clonal populations; CD20+ in B-NHL)</td>
            </tr>
            <tr>
              <td><strong>Age Distribution</strong></td>
              <td><strong>Bimodal</strong> (peaks at 15–35 yrs &amp; &gt;55 yrs)</td>
              <td>Increases steadily with age (mostly <strong>older adults &gt;50–60 yrs</strong>)</td>
            </tr>
            <tr>
              <td><strong>Pattern of Spread</strong></td>
              <td><strong>Contiguous</strong> (orderly spread from one adjacent lymph node group to the next)</td>
              <td><strong>Non-contiguous / Hematogenous</strong> (random, widespread nodal &amp; extranodal)</td>
            </tr>
            <tr>
              <td><strong>Nodal Distribution</strong></td>
              <td>Localized to <strong>axial / central nodes</strong> (cervical, supraclavicular, mediastinal); rarely mesenteric or epitrochlear</td>
              <td>Widespread peripheral nodes (including <strong>epitrochlear, mesenteric, and Waldeyer's ring</strong>)</td>
            </tr>
            <tr>
              <td><strong>Extranodal Involvement</strong></td>
              <td><strong>Rare</strong> (uncommon at presentation)</td>
              <td><strong>Common</strong> (GI tract, CNS, skin, bone marrow, Waldeyer's ring)</td>
            </tr>
            <tr>
              <td><strong>Characteristic Symptoms</strong></td>
              <td><strong>B-symptoms</strong> common, <strong>Pel-Ebstein fever</strong> (cyclical), and <strong>alcohol-induced nodal pain</strong></td>
              <td>B-symptoms common in high-grade; no Pel-Ebstein fever or alcohol pain</td>
            </tr>
            <tr>
              <td><strong>Stage at Presentation</strong></td>
              <td>Often localized (Stage I–II)</td>
              <td>Often advanced/disseminated (Stage III–IV)</td>
            </tr>
            <tr>
              <td><strong>Treatment &amp; Prognosis</strong></td>
              <td><strong>ABVD</strong> regimen ± radiotherapy; generally <strong>excellent prognosis / highly curable (&gt;85%)</strong></td>
              <td>Low-grade: Watch &amp; wait (incurable but indolent); High-grade: <strong>R-CHOP</strong> (potentially curable)</td>
            </tr>
          </tbody>
        </table>
      `
    }
  ],
  mcqs: [
    {
      id: "he-t4-m1",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q16 | Batch 24 | Final",
      stem: "Reed-Sternberg cells are pathognomonic and present in which of the following malignancies?",
      options: {
        a: "Hodgkin lymphoma",
        b: "Multiple myeloma",
        c: "Non-Hodgkin lymphoma",
        d: "Burkitt's lymphoma"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Binucleated 'owl-eye' Reed-Sternberg cells (CD15+, CD30+) are pathognomonic for Classical Hodgkin Lymphoma.",
        b: "Multiple myeloma is characterized by clonal plasma cells (eccentric 'clock-face' nucleus, perinuclear halo, Russell bodies).",
        c: "NHL lacks Reed-Sternberg cells.",
        d: "Burkitt's lymphoma shows a classic 'starry-sky' appearance on histology (tingible body macrophages among dark-blue lymphocytes)."
      },
      highYield: "Reed-Sternberg cells (CD15+, CD30+) = Hodgkin Lymphoma. 'Starry-sky' = Burkitt's Lymphoma."
    },
    {
      id: "he-t4-m2",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q17 | Batch 24 | Final",
      stem: "The chromosomal translocation t(14;18) involving the BCL-2 gene is characteristically associated with:",
      options: {
        a: "Burkitt's lymphoma",
        b: "Follicular lymphoma",
        c: "Mantle cell lymphoma",
        d: "Anaplastic large-cell lymphoma"
      },
      correct: "b",
      explanations: {
        a: "Burkitt's lymphoma = t(8;14) (c-MYC).",
        b: "CORRECT: Follicular lymphoma (most common indolent/low-grade NHL) is caused by t(14;18), which juxtaposes the anti-apoptotic BCL-2 gene on chromosome 18 with the IgH enhancer on chromosome 14, preventing B-cell apoptosis.",
        c: "Mantle cell lymphoma = t(11;14) (Cyclin D1 overexpression).",
        d: "Anaplastic large-cell lymphoma = t(2;5) (ALK gene)."
      },
      highYield: "Lymphoma Translocations: t(14;18) BCL-2 = Follicular; t(8;14) c-MYC = Burkitt's; t(11;14) Cyclin D1 = Mantle Cell."
    },
    {
      id: "he-t4-m3",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q18 | Batch 24 | Final",
      stem: "The chromosomal translocation t(8;14) involving the c-MYC oncogene is characteristically associated with:",
      options: {
        a: "Burkitt's lymphoma",
        b: "Follicular lymphoma",
        c: "Mantle cell lymphoma",
        d: "Marginal zone lymphoma"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Burkitt's lymphoma (fastest-growing human tumor, 'starry-sky' histology, EBV-associated) is driven by t(8;14), causing c-MYC overexpression.",
        b: "Follicular lymphoma = t(14;18).",
        c: "Mantle cell lymphoma = t(11;14).",
        d: "MALT / Marginal zone lymphoma = t(11;18) (associated with H. pylori in the stomach)."
      },
      highYield: "Burkitt's Lymphoma = t(8;14) c-MYC + EBV + 'Starry-Sky' histology + High risk of Tumor Lysis Syndrome!"
    },
    {
      id: "he-t4-m4",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q12 | Batch 23 | Final",
      stem: "All are risk factors of NHL except :",
      options: {
        a: "CMV",
        b: "EBV",
        c: "H.pylori",
        d: "Hair dye"
      },
      correct: "a",
      explanations: {
        a: "CORRECT (EXCEPT): Cytomegalovirus (CMV) is NOT a recognized oncogenic risk factor for Non-Hodgkin Lymphoma.",
        b: "EBV is strongly linked to Burkitt's lymphoma, CNS lymphoma in HIV, and post-transplant lymphoproliferative disorder.",
        c: "Helicobacter pylori causes gastric MALT lymphoma (often cured by H. pylori eradication!).",
        d: "Chronic exposure to dark hair dyes, pesticides/herbicides, and solvents is a recognized environmental risk factor for NHL."
      },
      highYield: "Infectious Causes of NHL: EBV (Burkitt's), H. pylori (Gastric MALT), HIV, HTLV-1 (Adult T-cell leukemia/lymphoma), HCV, HHV-8 (Primary effusion lymphoma). NOT CMV!"
    },
    {
      id: "he-t4-m5",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q4 | Batch 22 | Final",
      stem: "An 83 year-old man is diagnosed with stage four low grade lymphoma which of the following option of therapy is most appropriate?",
      options: {
        a: "Perform high dose therapy and stem cell transplantation",
        b: "Watch and wait to treat only if she become symptomatic",
        c: "Administer R-CHOP",
        d: "Administer radiation therapy",
        e: "None of above"
      },
      correct: "b",
      explanations: {
        a: "Stem cell transplantation is far too toxic for an 83-year-old with indolent lymphoma.",
        b: "CORRECT: Asymptomatic advanced-stage (Stage III/IV) LOW-GRADE (indolent) NHL (e.g., Follicular lymphoma) is incurable with standard chemotherapy, and early treatment does NOT improve overall survival — therefore 'Watch and Wait' (active surveillance until symptomatic) is the gold-standard management.",
        c: "R-CHOP is used for aggressive high-grade NHL (DLBCL) or symptomatic advanced follicular lymphoma.",
        d: "Radiation therapy alone is only for localized Stage I/II disease."
      },
      highYield: "Asymptomatic Stage III/IV Low-Grade (Indolent) NHL → Watch and Wait! (Treat only if B-symptoms, bulky disease, or cytopenias develop)."
    },
    {
      id: "he-t4-m6",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q5 | Batch 22 | Final",
      stem: "Which of the following drug can be used in CHF HFREF?",
      options: {
        a: "Duanorubicin",
        b: "Doxorubicin",
        c: "Vincristine",
        d: "Mitoxantrone"
      },
      correct: "c",
      explanations: {
        a: "Daunorubicin is an anthracycline that causes dose-dependent irreversible dilated cardiomyopathy (strictly contraindicated in HFrEF).",
        b: "Doxorubicin (Adriamycin — the 'H' in R-CHOP) is famously cardiotoxic and contraindicated in HFrEF.",
        c: "CORRECT: Vincristine (vinca alkaloid — the 'O' [Oncovin] in R-CHOP) causes peripheral neuropathy and constipation, NOT cardiotoxicity — so it can be safely used in patients with HFrEF.",
        d: "Mitoxantrone (anthracenedione) is also significantly cardiotoxic and avoided in HFrEF."
      },
      highYield: "Cardiotoxic Chemo Drugs (AVOID in CHF/HFrEF): Doxorubicin, Daunorubicin, Mitoxantrone, Trastuzumab. Vincristine = Neurotoxic (peripheral neuropathy), NOT cardiotoxic."
    },
    {
      id: "he-t4-m7",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q8 | Batch 22 | Final",
      stem: "All of the following are features of high grade NHL except.",
      options: {
        a: "early symptoms are common",
        b: "Small cells",
        c: "Diffuse cell",
        d: "Fatal if untreated"
      },
      correct: "b",
      explanations: {
        a: "True: High-grade NHL (e.g., DLBCL) grows rapidly and causes early systemic/compressive symptoms.",
        b: "CORRECT (EXCEPT): High-grade NHL is characteristically composed of LARGE rapidly dividing cells (e.g., Diffuse LARGE B-Cell Lymphoma), whereas SMALL cells (small lymphocytic/follicular) are typical of LOW-GRADE indolent NHL.",
        c: "True: High-grade NHL typically shows a DIFFUSE architectural pattern (not nodular/follicular).",
        d: "True: High-grade NHL is rapidly fatal within months if untreated, yet potentially CURABLE with aggressive chemotherapy (R-CHOP)."
      },
      highYield: "High-Grade NHL = Large cells, Diffuse pattern, Rapidly fatal if untreated, Potentially CURABLE. Low-Grade NHL = Small cells, Nodular/Follicular pattern, Indolent, Incurable."
    },
    {
      id: "he-t4-m8",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q5 | Batch 21 | Final",
      stem: "All of the following features of high grade NHL except",
      options: {
        a: "It is large cells",
        b: "Mostly diffuse",
        c: "Mostly nodular",
        d: "Responds better to treatment"
      },
      correct: "c",
      explanations: {
        a: "True: Composed of large cells.",
        b: "True: Mostly diffuse pattern.",
        c: "CORRECT (EXCEPT): A NODULAR (follicular) growth pattern is characteristic of LOW-GRADE (indolent) NHL, NOT high-grade NHL.",
        d: "True: Paradoxically, high-grade rapidly dividing NHL responds much better to chemotherapy and is potentially curable."
      },
      highYield: "High-grade NHL = Diffuse + Large cells + Potentially curable. Low-grade NHL = Nodular/Follicular + Small cells."
    },
    {
      id: "he-t4-m9",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q6 | Batch 21 | Final",
      stem: "Which of the following is incorrect regarding NHL?",
      options: {
        a: "The histologic subtypes can, t predict prognosis",
        b: "B-symptoms include fever night sweat and weight loss",
        c: "Stage IA can be treated with radiation only.",
        d: "The moset subtype of HL is nodular sclerosis"
      },
      correct: "a",
      explanations: {
        a: "CORRECT (INCORRECT statement): In NHL, the HISTOLOGIC SUBTYPE (low-grade vs high-grade, e.g., Follicular vs DLBCL vs Burkitt's) is the SINGLE MOST IMPORTANT determinant of clinical behavior, treatment, and prognosis!",
        b: "True: B-symptoms are fever >38°C, drenching night sweats, and >10% unintentional weight loss over 6 months.",
        c: "True: Localized Stage IA indolent NHL can be treated with involved-site radiation therapy alone.",
        d: "True: Nodular Sclerosis is the most common subtype of Hodgkin Lymphoma (~65–70%, classic mediastinal mass in young females)."
      },
      highYield: "In NHL, Histology (Grade) dictates prognosis & treatment. In HL, Nodular Sclerosis is the most common subtype."
    },
    {
      id: "he-t4-m10",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q11 | Batch 21 | Final",
      stem: "Infectious agents known to be linked with development of NHL include all the following except.",
      options: {
        a: "EBV",
        b: "Cytomegalovirus",
        c: "H- pylori",
        d: "HIV",
        e: "Kaposi's sarcoma associated herpes virus"
      },
      correct: "b",
      explanations: {
        a: "EBV → Burkitt's & CNS lymphoma.",
        b: "CORRECT (EXCEPT): Cytomegalovirus (CMV) is NOT linked to the development of NHL (repeated in Batch 21 & Batch 23 Finals!).",
        c: "H. pylori → Gastric MALT lymphoma.",
        d: "HIV → Aggressive B-cell NHL / Primary CNS lymphoma.",
        e: "KSHV (HHV-8) → Primary effusion lymphoma & Multicentric Castleman disease."
      },
      highYield: "CMV does NOT cause NHL!"
    },
    {
      id: "he-t4-m11",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q5 | Batch 19 | Final",
      stem: "All the following are common features of HL except:",
      options: {
        a: "Epitrochlear lymphadenopathy",
        b: "B-Symptome",
        c: "contiguous lymphadenopathy",
        d: "Pel-ebestein fever"
      },
      correct: "a",
      explanations: {
        a: "CORRECT (EXCEPT): Epitrochlear (and mesenteric/Waldeyer's ring) lymphadenopathy is characteristic of NON-HODGKIN Lymphoma (NHL), and is very RARE in Hodgkin Lymphoma (HL prefers axial cervical/mediastinal nodes).",
        b: "B-symptoms are common in HL.",
        c: "Orderly contiguous nodal spread is a classic hallmark of HL.",
        d: "Pel-Ebstein fever (cyclical 1–2 weeks of high fever alternating with 1–2 weeks of normal temperature) is classic for HL."
      },
      highYield: "HL = Axial nodes (cervical/mediastinal) + Contiguous spread + Pel-Ebstein fever + Alcohol-induced nodal pain. Epitrochlear / Waldeyer's ring nodes = NHL!"
    },
    {
      id: "he-t4-m12",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q6 | Batch 19 | Final",
      stem: "All the following are of poor prognosisy of NHL except:",
      options: {
        a: "Age > 60 years",
        b: "Stage III or IV",
        c: "Low serum LDH",
        d: "More than one extra lymphatic site"
      },
      correct: "c",
      explanations: {
        a: "Age >60 years = 1 point in the International Prognostic Index (IPI).",
        b: "Ann Arbor Stage III or IV = 1 point in IPI.",
        c: "CORRECT (EXCEPT): HIGH (elevated) serum LDH — NOT low LDH — is a poor prognostic factor in the IPI (reflects high tumor burden/turnover).",
        d: ">1 Extranodal site = 1 point in IPI."
      },
      highYield: "International Prognostic Index (IPI) for NHL — Poor Prognosis Mnemonic (APLES): Age >60, Performance status ≥2 (ECOG), elevated LDH, >1 Extranodal site, Stage III/IV."
    },
    {
      id: "he-t4-m13",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q12 | Batch 19 | Final",
      stem: "Rituximabe is amono clonal antibody directed against:",
      options: {
        a: "CD20.",
        b: "CD19",
        c: "CD5",
        d: "CD23"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Rituximab is a chimeric monoclonal antibody directed against CD20 on mature B-lymphocytes (used in B-cell NHL [R-CHOP], CLL, RA, ITP, and ANCA vasculitis).",
        b: "CD19 is targeted by Blinatumomab and CAR-T cells.",
        c: "CD5 is a T-cell marker aberrantly expressed on CLL and Mantle cell lymphoma.",
        d: "CD23 is expressed on CLL cells."
      },
      highYield: "Rituximab = Anti-CD20 (always screen for Hepatitis B before starting Rituximab to prevent fatal HBV reactivation!)."
    },
    {
      id: "he-t4-m14",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q11 | Batch 18 | Final",
      stem: "Stag II multiple myeloma including the following except:-",
      options: {
        a: "Hb 9 g/dl",
        b: "Bence jones protein 5 g/dl",
        c: "Ig G 6 g/dl",
        d: "Multiple lytic bone lesion on x ray"
      },
      correct: "d",
      explanations: {
        a: "Hb 9 g/dL (between 8.5 and 10 g/dL) fits Durie-Salmon Stage II.",
        b: "Urine Bence Jones protein 5 g/24h (between 4 and 12 g/24h) fits Stage II.",
        c: "Serum IgG 6 g/dL (between 5 and 7 g/dL) fits Stage II.",
        d: "CORRECT (EXCEPT): Multiple/advanced lytic bone lesions on skeletal X-ray (along with Hb <8.5 g/dL, Ca >12 mg/dL, IgG >7 g/dL, or Bence Jones >12 g/24h) defines Durie-Salmon STAGE III Multiple Myeloma, NOT Stage II!"
      },
      highYield: "Multiple Myeloma CRAB: HyperCalcemia, Renal failure, Anemia, lytic Bone lesions. Durie-Salmon Stage III = ANY ONE of: Hb <8.5, Ca >12, IgG >7, IgA >5, Bence Jones >12 g/24h, or Advanced/Multiple lytic bone lesions."
    }
  ]
});
// ==========================================
// HEMATOLOGY - TOPIC 5: MYELOPROLIFERATIVE NEOPLASMS (PV, ET, MF)
// ==========================================
window.IM_DATA.hematology.push({
  title: "Myeloproliferative Neoplasms (Polycythemia Vera, Essential Thrombocythemia & Myelofibrosis)",
  shortTitle: "MPNs (PV, ET, MF)",
  essays: [
    {
      id: "he-t5-e1",
      type: "essay",
      batch: 23,
      exam: "Final",
      source: "Short Note Q2 | Batch 23 | Final",
      stem: "2- Approach of polycythemia ?(6marks)",
      modelAnswer: `
        <h4>1. Definition &amp; Initial Confirmation</h4>
        <ul>
          <li><strong>Polycythemia (Erythrocytosis):</strong> Elevated hemoglobin (&gt;16.5 g/dL in men, &gt;16.0 g/dL in women) and/or hematocrit (&gt;49% in men, &gt;48% in women).</li>
          <li><strong>Step 1 — Exclude Relative (Spurious) Polycythemia:</strong> Decreased plasma volume with normal RBC mass (caused by dehydration, diuretics, burns, vomiting/diarrhea, or Gaisböck syndrome in obese smoking hypertensive males). Repeat CBC after hydration.</li>
        </ul>
        <h4>2. Differentiate Primary (Polycythemia Vera) vs Secondary Polycythemia</h4>
        <ul>
          <li><strong>Focused History &amp; Exam:</strong>
            <ul>
              <li><em>Clues to PV:</em> <strong>Aquagenic pruritus</strong> (itching after hot shower), <strong>erythromelalgia</strong> (burning red hands/feet), plethora, <strong>splenomegaly</strong>, gout, thrombosis (Budd-Chiari, DVT, stroke), or bleeding.</li>
              <li><em>Clues to Secondary:</em> Heavy smoking, COPD, obstructive sleep apnea (OSA), cyanotic heart disease, high altitude, or EPO-secreting tumors (renal cell carcinoma, hepatocellular carcinoma, cerebellar hemangioblastoma, uterine fibroids).</li>
            </ul>
          </li>
          <li><strong>Step 2 — Key Laboratory Workup:</strong>
            <ul>
              <li><strong>Serum Erythropoietin (EPO) Level</strong> + <strong>JAK2 V617F Mutation</strong> (positive in &gt;95% of PV).</li>
              <li><strong>Low EPO + JAK2 (+):</strong> Confirms <strong>Primary Polycythemia (Polycythemia Vera — PV)</strong> → Confirm with Bone Marrow Biopsy (panmyelosis / trilineage hyperplasia).</li>
              <li><strong>High/Normal EPO + JAK2 (−):</strong> Indicates <strong>Secondary Polycythemia</strong> → Check <strong>Pulse Oximetry / ABG</strong> (SaO₂ &lt;92% = hypoxic causes: COPD, OSA, high altitude; normal SaO₂ = check carboxyhemoglobin [smoking] or Abdominal Ultrasound/CT for renal/hepatic EPO-secreting tumors).</li>
            </ul>
          </li>
        </ul>
        <h4>3. Management Principles</h4>
        <ul>
          <li><strong>Polycythemia Vera (PV):</strong> Therapeutic <strong>Phlebotomy</strong> (target Hematocrit <strong>&lt;45%</strong>) + <strong>Low-dose Aspirin</strong> (all patients) + <strong>Cytoreductive therapy</strong> (<strong>Hydroxyurea</strong> or Interferon-α) for high-risk patients (age &gt;60 or prior thrombosis); Ruxolitinib (JAK1/2 inhibitor) for refractory cases.</li>
          <li><strong>Secondary Polycythemia:</strong> Treat the underlying cause (smoking cessation, CPAP for OSA, O₂ for COPD, surgical resection of EPO-secreting tumor).</li>
        </ul>
      `
    },
    {
      id: "he-t5-e2",
      type: "essay",
      batch: 18,
      exam: "Final",
      source: "Short Essay Q2 | Batch 18 | Final",
      stem: "2- Appoachs the patient with polycythemia (5 M)",
      modelAnswer: `
        <h4>Step 1: Confirm True (Absolute) vs Relative Polycythemia</h4>
        <ul>
          <li>Rule out hemoconcentration / contracted plasma volume (dehydration, diuretics, burns) by repeating CBC after adequate hydration.</li>
        </ul>
        <h4>Step 2: Measure Serum Erythropoietin (EPO) &amp; Test for JAK2 V617F</h4>
        <ul>
          <li><strong>Low Serum EPO + Positive JAK2 V617F (&gt;95%):</strong> Diagnoses <strong>Polycythemia Vera (PV)</strong> (primary clonal myeloproliferative neoplasm). Supported by panmyelosis (↑ RBCs, ↑ WBCs, ↑ Platelets), splenomegaly, aquagenic pruritus, and hypercellular bone marrow.</li>
          <li><strong>Elevated Serum EPO + Negative JAK2:</strong> Diagnoses <strong>Secondary Polycythemia</strong>:
            <ul>
              <li><em>Appropriate (Hypoxia-driven — ↓ SaO₂):</em> COPD, OSA, smoking (↑ COHb), cyanotic congenital heart disease, high altitude.</li>
              <li><em>Inappropriate (Autonomous EPO production — Normal SaO₂):</em> Renal cell carcinoma, hepatocellular carcinoma, cerebellar hemangioblastoma, renal artery stenosis, or androgen/EPO abuse → Order Abdominal US/CT.</li>
            </ul>
          </li>
        </ul>
        <h4>Step 3: Management Summary</h4>
        <ul>
          <li><strong>PV:</strong> Phlebotomy (target Hct &lt;45%) + Low-dose Aspirin + Hydroxyurea (if age &gt;60 or prior thrombosis).</li>
          <li><strong>Secondary:</strong> Correct underlying hypoxia or remove EPO-secreting lesion.</li>
        </ul>
      `
    }
  ],
  mcqs: [
    {
      id: "he-t5-m1",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q10 | Batch 23 | Final",
      stem: "The most sensitive test for PV:",
      options: {
        a: "Jack 2 inhibitors",
        b: "HB",
        c: "bone marrow aspiration"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Testing for the JAK2 V617F (and exon 12) mutation is the most sensitive and specific molecular diagnostic test for Polycythemia Vera (positive in ~95–98% of PV patients!).",
        b: "Elevated Hb is non-specific (cannot distinguish PV from secondary or relative polycythemia).",
        c: "Bone marrow biopsy shows panmyelosis but is less sensitive/specific than JAK2 mutation testing."
      },
      highYield: "JAK2 V617F mutation is positive in ~95–98% of PV, ~50–60% of ET, and ~50–60% of Primary Myelofibrosis (NEVER in CML!).",
      examNote: "Option (a) 'Jack 2 inhibitors' is a student recall typo in the original Batch 23 sheet for 'JAK2 mutation'."
    },
    {
      id: "he-t5-m2",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q15 | Batch 22 | Final",
      stem: "WHO Criteria of ET including all of the following except",
      options: {
        a: "platelet >600000/micr litre",
        b: "megakaryocyte proliferation in the bone marrow",
        c: "Presence of jak 2",
        d: "Normal RBCS mass"
      },
      correct: "a",
      explanations: {
        a: "CORRECT (EXCEPT): Modern WHO diagnostic criteria for Essential Thrombocythemia (ET) lowered the platelet threshold to sustained platelets ≥450,000/µL (NOT >600,000/µL, which was the outdated PVSG criterion).",
        b: "True: Bone marrow biopsy shows proliferation of large, mature megakaryocytes with hyperlobulated nuclei.",
        c: "True: Presence of JAK2, CALR, or MPL driver mutation is a major WHO criterion.",
        d: "True: Normal RBC mass / absence of PV, CML, or MF criteria is required."
      },
      highYield: "WHO Major Criteria for ET: 1) Platelets ≥450,000/µL, 2) BM megakaryocyte proliferation, 3) Exclusion of PV/CML/PMF/MDS, 4) JAK2, CALR, or MPL mutation."
    },
    {
      id: "he-t5-m3",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q1 | Batch 19 | Final",
      stem: "Which of the following is not a known complication of polycythemia vera?",
      options: {
        a: "Budd-chiari syndrome",
        b: "Erythromelalgia",
        c: "Marrow fibrosis",
        d: "Aplastic anemia"
      },
      correct: "d",
      explanations: {
        a: "Budd-Chiari syndrome (hepatic vein thrombosis) is a classic splanchnic thrombotic complication of PV.",
        b: "Erythromelalgia (painful burning erythema of hands/feet relieved by aspirin) is a classic microvascular complication of PV and ET.",
        c: "Post-PV Myelofibrosis ('spent phase' — marrow fibrosis) and transformation to AML are well-known late complications of PV.",
        d: "CORRECT (NOT a complication): Aplastic anemia is NOT a complication of Polycythemia Vera."
      },
      highYield: "Complications of PV: Thrombosis (#1 cause of death — including Budd-Chiari), Bleeding, Erythromelalgia, Gout, Peptic ulcer, Post-PV Myelofibrosis, and AML transformation."
    },
    {
      id: "he-t5-m4",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q4 | Batch 19 | Final",
      stem: "All the following are features of MF except:",
      options: {
        a: "Massive splenomegaly",
        b: "Increase marrow cellularity",
        c: "Anemia",
        d: "Tear drop cells"
      },
      correct: "b",
      explanations: {
        a: "Massive splenomegaly (due to extramedullary hematopoiesis) is the #1 physical sign of Primary Myelofibrosis (MF).",
        b: "CORRECT (EXCEPT): Classic fibrotic Myelofibrosis causes progressive bone marrow FIBROSIS (reticulin/collagen deposition) resulting in a HYPOCELLULAR fibrotic marrow and a classic 'DRY TAP' on bone marrow aspiration — NOT increased marrow cellularity.",
        c: "Progressive normocytic anemia is a hallmark of MF.",
        d: "Teardrop RBCs (dacrocytes) + leukoerythroblastic blood film (nucleated RBCs & immature granulocytes) are pathognomonic for MF."
      },
      highYield: "Primary Myelofibrosis = Massive splenomegaly + Teardrop cells (Dacrocytes) + Leukoerythroblastic smear + 'Dry tap' on bone marrow aspiration!"
    },
    {
      id: "he-t5-m5",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q6 | Batch 18 | Final",
      stem: "All of the features of essential Thrombocytosis except :",
      options: {
        a: "Mesentric thrombosis",
        b: "Splenomegaly",
        c: "Bleeding tendency",
        d: "Erythromelalagia"
      },
      correct: "b",
      explanations: {
        a: "Arterial and venous thrombosis (including mesenteric/portal/stroke/MI) is the major complication of ET.",
        b: "CORRECT (EXCEPT): Significant splenomegaly is classically ABSENT (or rare/minimal) in Essential Thrombocythemia compared to PV, CML, and Myelofibrosis (marked splenomegaly argues against ET and favors MF or PV!).",
        c: "Paradoxical bleeding tendency occurs when platelets exceed >1,000,000/µL due to Acquired von Willebrand Disease (consumption of large vWF multimers).",
        d: "Erythromelalgia (burning red palms/soles dramatically relieved by Aspirin) is a hallmark of ET."
      },
      highYield: "ET Paradox: Causes BOTH Thrombosis AND Bleeding (Acquired vWD when Plt >1,000,000) + Erythromelalgia. Significant Splenomegaly is NOT a typical feature!"
    },
    {
      id: "he-t5-m6",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q12 | Batch 18 | Final",
      stem: "JAK2 is present in the following except :-",
      options: {
        a: "PRV",
        b: "IMF",
        c: "ET",
        d: "CML"
      },
      correct: "d",
      explanations: {
        a: "Polycythemia Rubra Vera (PRV) = ~95–98% JAK2 positive.",
        b: "Idiopathic Myelofibrosis (IMF / PMF) = ~50–60% JAK2 positive.",
        c: "Essential Thrombocythemia (ET) = ~50–60% JAK2 positive.",
        d: "CORRECT (EXCEPT): CML is defined by the Philadelphia chromosome t(9;22) / BCR-ABL1 fusion gene and is JAK2 NEGATIVE."
      },
      highYield: "BCR-ABL1 Negative MPNs (JAK2 +): PV, ET, PMF. BCR-ABL1 Positive MPN (JAK2 −): CML."
    },
    {
      id: "he-t5-m7",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q13 | Batch 18 | Final",
      stem: "All the following indications for splenectomy in MF except:-",
      options: {
        a: "Hyper metabolic syndrome",
        b: "Portal hypertension",
        c: "Excessive blood transfusion",
        d: "Excessive used of erythropiotein"
      },
      correct: "d",
      explanations: {
        a: "Refractory hypermetabolic/constitutional symptoms (severe cachexia, pain, early satiety) from massive splenomegaly are a recognized indication.",
        b: "Symptomatic portal hypertension (variceal bleeding, refractory ascites) due to massive splenic blood flow is an indication.",
        c: "Refractory transfusion-dependent anemia (excessive blood transfusion requirements) is an indication.",
        d: "CORRECT (EXCEPT): 'Excessive use of erythropoietin' is NOT an indication for splenectomy in Myelofibrosis."
      },
      highYield: "Indications for Splenectomy in Myelofibrosis: Symptomatic portal hypertension, Refractory transfusion-dependent anemia, Severe symptomatic/painful splenomegaly, and Refractory hypermetabolic symptoms."
    }
  ]
});

// ==========================================
// HEMATOLOGY - TOPIC 6: PLATELETS, ITP & COAGULATION DISORDERS
// ==========================================
window.IM_DATA.hematology.push({
  title: "Platelets, ITP & Coagulation Disorders",
  shortTitle: "Platelets, ITP & Coagulation",
  essays: [],
  mcqs: [
    {
      id: "he-t6-m1",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q20 | Batch 21 | Final",
      stem: "The best management for patient with ITP is:",
      options: {
        a: "Iron therapy",
        b: "Immunoglobulin therapy",
        c: "Splenectomy",
        d: "Hydrocortisone therapy"
      },
      correct: "d",
      explanations: {
        a: "Iron therapy treats IDA, not immune thrombocytopenia.",
        b: "IVIG is reserved for acute life-threatening bleeding or rapid preoperative platelet rise (works fastest, within 24–48h, alongside steroids).",
        c: "Splenectomy is a second/third-line option for chronic steroid-refractory ITP.",
        d: "CORRECT: Corticosteroids (Prednisolone, Dexamethasone, or IV Hydrocortisone/Methylprednisolone) are the standard FIRST-LINE initial therapy for Immune Thrombocytopenic Purpura (ITP)."
      },
      highYield: "ITP Management: 1st-line = Corticosteroids (+ IVIG if active severe bleeding). 2nd-line = Thrombopoietin receptor agonists (Eltrombopag/Romiplostim), Rituximab, or Splenectomy. Avoid platelet transfusion unless life-threatening hemorrhage!"
    },
    {
      id: "he-t6-m2",
      type: "mcq",
      batch: 20,
      exam: "Final",
      source: "Q2 | Batch 20 | Final",
      stem: "All of the following tests should be ordered in the initial evaluation of a patient with suspected coagulopathy except:",
      options: {
        a: "Platelet count",
        b: "Bleeding time",
        c: "PT",
        d: "Platelet aggregation studies"
      },
      correct: "d",
      explanations: {
        a: "CBC / Platelet count is a mandatory first-line screening test.",
        b: "Bleeding time (or PFA-100) is traditionally included in textbook initial hemostasis screening.",
        c: "PT (and aPTT) is a mandatory first-line coagulation screening test.",
        d: "CORRECT (EXCEPT): Platelet aggregation studies (light transmission aggregometry) are specialized SECOND-LINE confirmatory tests reserved for suspected qualitative platelet function disorders (e.g., Glanzmann thrombasthenia, Bernard-Soulier) — NOT ordered in the initial screening evaluation."
      },
      highYield: "Initial Coagulopathy Screen: CBC (Platelets), Peripheral smear, PT/INR, aPTT (± Fibrinogen/D-dimer & Bleeding time). Specialized 2nd-line = Mixing studies, Factor assays, vWF panel, Platelet aggregation studies."
    },
    {
      id: "he-t6-m3",
      type: "mcq",
      batch: 20,
      exam: "Final",
      source: "Q18 | Batch 20 | Final",
      stem: "T1/2 (half-life / lifespan) of platelets is?",
      options: {
        a: "7 to 10 days",
        b: "7 to 10 hours",
        c: "7 to 10 minutes",
        d: "7 to 10 seconds"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: The normal circulating lifespan of platelets is 7 to 10 days (which is why Aspirin irreversibly inhibits platelets for their entire 7–10 day lifespan!).",
        b: "Incorrect.",
        c: "Incorrect.",
        d: "Incorrect."
      },
      highYield: "Normal Lifespans: Platelets = 7–10 days; RBCs = 120 days; Neutrophils = ~6–8 hours in blood."
    },
    {
      id: "he-t6-m4",
      type: "mcq",
      batch: 20,
      exam: "Final",
      source: "Q21 | Batch 20 | Final",
      stem: "All the FOLLOWING are causes of Thrombocytopenia EXCEPT?",
      options: {
        a: "Chronic Liver Disease",
        b: "Post Splenectomy",
        c: "Severe Malaria",
        d: "Dengue fever"
      },
      correct: "b",
      explanations: {
        a: "Chronic liver disease causes thrombocytopenia via portal hypertension/hypersplenism and decreased thrombopoietin production.",
        b: "CORRECT (EXCEPT): Post-splenectomy classically causes reactive THROMBOCYTOSIS (elevated platelet count, since the spleen normally sequesters ~1/3 of circulating platelets and clears old platelets), NOT thrombocytopenia!",
        c: "Severe Malaria (P. falciparum) is a classic infectious cause of thrombocytopenia.",
        d: "Dengue fever (dengue hemorrhagic fever) is a classic viral cause of severe thrombocytopenia."
      },
      highYield: "Post-Splenectomy Blood Picture: Thrombocytosis + Leukocytosis + Howell-Jolly bodies + Target cells."
    },
    {
      id: "he-t6-m5",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q16 | Batch 18 | Final",
      stem: "T1/2 of plate life's is.",
      options: {
        a: "7-8 year.",
        b: "7-8 moth",
        c: "7-8 days",
        d: "7-8 hours"
      },
      correct: "c",
      explanations: {
        a: "Incorrect.",
        b: "Incorrect.",
        c: "CORRECT: 7–8 (7–10) days (repeated in Batch 18 & Batch 20 Finals!).",
        d: "Incorrect."
      },
      highYield: "Platelet lifespan = 7–10 days."
    }
  ]
});
