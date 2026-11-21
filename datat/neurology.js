// ==========================================
// NEUROLOGY - TOPIC 1: NEUROANATOMY, CRANIAL NERVES, REFLEXES, GCS & LP
// ==========================================
window.IM_DATA.neurology.push({
  title: "Neuroanatomy Localization, Cranial Nerves, Reflexes, GCS & Lumbar Puncture",
  shortTitle: "Neuroanatomy, CNs & LP",
  essays: [
    {
      id: "ne-t1-e1",
      type: "essay",
      batch: 18,
      exam: "Final",
      source: "Short Essay Q6 | Batch 18 | Final",
      stem: "6- Diagnostic and therapeutic importance of lumbar puncture (5 M)",
      modelAnswer: `
        <h4>1. Diagnostic Importance (Indications)</h4>
        <ul>
          <li><strong>CNS Infections:</strong> Gold standard for diagnosing bacterial, viral, tuberculous, and fungal meningitis, as well as encephalitis (CSF cell count, glucose, protein, Gram stain, culture, AFB, PCR).</li>
          <li><strong>Subarachnoid Hemorrhage (SAH):</strong> Detecting xanthochromia (bilirubin) and RBCs when a non-contrast Brain CT is negative despite high clinical suspicion (ideally &gt;12 hours after onset).</li>
          <li><strong>Inflammatory &amp; Demyelinating Disorders:</strong>
            <ul>
              <li><em>Multiple Sclerosis (MS):</em> Oligoclonal IgG bands and elevated IgG index.</li>
              <li><em>Guillain-Barré Syndrome (GBS):</em> Albuminocytologic dissociation (high protein with normal WBC count).</li>
            </ul>
          </li>
          <li><strong>CSF Pressure Measurement:</strong> Confirming Idiopathic Intracranial Hypertension (Pseudotumor cerebri — opening pressure &gt;25 cmH₂O) or spontaneous intracranial hypotension.</li>
          <li><strong>CNS Malignancies:</strong> CSF cytology for leptomeningeal carcinomatosis, CNS lymphoma, or leukemic infiltration.</li>
          <li><strong>Normal Pressure Hydrocephalus (NPH):</strong> High-volume CSF tap test to assess temporary gait improvement.</li>
        </ul>
        <h4>2. Therapeutic Importance (Indications)</h4>
        <ul>
          <li><strong>Intrathecal Drug Administration:</strong>
            <ul>
              <li><em>Chemotherapy:</em> Intrathecal Methotrexate or Cytarabine (for ALL/lymphoma CNS prophylaxis or treatment).</li>
              <li><em>Anesthesia/Analgesia:</em> Spinal anesthesia (bupivacaine/lidocaine) and intrathecal opioids.</li>
              <li><em>Antibiotics/Antifungals:</em> Intrathecal vancomycin or amphotericin B in refractory meningitis.</li>
              <li><em>Antispasticity:</em> Intrathecal Baclofen.</li>
            </ul>
          </li>
          <li><strong>Therapeutic CSF Drainage (Pressure Reduction):</strong> Serial CSF removal in Idiopathic Intracranial Hypertension (to protect vision) or Cryptococcal meningitis with markedly elevated ICP.</li>
        </ul>
        <h4>3. Key Contraindications (Must Exclude Before LP)</h4>
        <ul>
          <li>Signs of raised ICP with mass effect / space-occupying lesion (risk of brainstem herniation — do Brain CT first if papilledema, focal deficit, or altered consciousness).</li>
          <li>Coagulopathy / severe thrombocytopenia (&lt;50,000/mm³) or active anticoagulation.</li>
          <li>Local skin infection / abscess at the puncture site (L3–L4 or L4–L5).</li>
        </ul>
      `
    }
  ],
  mcqs: [
    {
      id: "ne-t1-m1",
      type: "mcq",
      batch: 24,
      exam: "Midterm",
      source: "Q7 | Batch 24 | Midterm",
      stem: "Crossed hemiplegia is characteristic of a lesion in the:",
      options: {
        a: "Cerebral cortex",
        b: "Internal capsule",
        c: "Brainstem",
        d: "Spinal cord"
      },
      correct: "c",
      explanations: {
        a: "Cortical lesions cause contralateral face/arm or leg weakness (non-crossed) with cortical signs (aphasia, neglect).",
        b: "Internal capsule lesions cause dense, pure contralateral hemiplegia (face, arm, and leg on the same side).",
        c: "CORRECT: Brainstem lesions classically produce CROSSED (alternating) hemiplegia: IPSILATERAL cranial nerve palsy (LMN) + CONTRALATERAL limb hemiplegia (UMN) (e.g., Weber's, Millard-Gubler, Wallenberg syndromes).",
        d: "Spinal cord lesions spare the cranial nerves and face."
      },
      highYield: "Crossed signs (Ipsilateral CN palsy + Contralateral body weakness/sensory loss) = Pathognomonic for a BRAINSTEM lesion."
    },
    {
      id: "ne-t1-m2",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q27 | Batch 24 | Final",
      stem: "Which of the following clinical features is characteristic of a Lower Motor Neuron Lesion (LMNL)?",
      options: {
        a: "Hyperreflexia",
        b: "Positive Babinski sign",
        c: "Muscle fasciculations and severe wasting",
        d: "Spastic hypertonia"
      },
      correct: "c",
      explanations: {
        a: "Hyperreflexia is an Upper Motor Neuron (UMN) sign.",
        b: "Positive Babinski sign (extensor plantar response) is an UMN sign.",
        c: "CORRECT: LMNL is characterized by flaccid hypotonia, hyporeflexia/areflexia, severe muscle wasting (atrophy), and fasciculations (spontaneous firing of denervated motor units).",
        d: "Spastic hypertonia is an UMN sign."
      },
      highYield: "UMN = Spasticity, Hyperreflexia, Clonus, Babinski (+), No fasciculations. LMN = Flaccidity, Hypo/Areflexia, Severe atrophy, Fasciculations, Plantar flexor."
    },
    {
      id: "ne-t1-m3",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q21 | Batch 23 | Final",
      stem: "Damage to which cranial nerve affects the muscles of facial expression?",
      options: {
        a: "Facial nerve (CN VII)",
        b: "Trigeminal nerve (CN V)",
        c: "Oculomotor nerve (CN III)",
        d: "Glossopharyngeal nerve (CN IX)"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: The Facial nerve (CN VII) innervates all muscles of facial expression (plus anterior 2/3 tongue taste, stapedius, lacrimal/submandibular/sublingual glands).",
        b: "Trigeminal nerve (CN V) supplies facial sensation and muscles of mastication.",
        c: "Oculomotor nerve (CN III) supplies extraocular muscles (except LR6, SO4), levator palpebrae, and pupillary constriction.",
        d: "Glossopharyngeal nerve (CN IX) supplies posterior 1/3 tongue taste/sensation and stylopharyngeus."
      },
      highYield: "CN VII = Facial expression + Anterior 2/3 taste. CN V = Facial sensation + Mastication."
    },
    {
      id: "ne-t1-m4",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q22 | Batch 23 | Final",
      stem: "A lesion of the frontal lobe is most characteristically associated with which of the following clinical features?",
      options: {
        a: "Disinhibition and personality change",
        b: "Astereognosis",
        c: "Auditory agnosia",
        d: "Visual field defects"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Prefrontal cortex lesions cause behavioral disinhibition, personality change, apathy, poor executive function, and primitive reflexes (grasp, palmomental).",
        b: "Astereognosis (inability to identify objects by touch) is a PARIETAL lobe sign.",
        c: "Auditory agnosia is a TEMPORAL lobe sign.",
        d: "Visual field defects (cortical blindness/hemianopia) are OCCIPITAL (or temporal/parietal optic radiation) signs."
      },
      highYield: "Lobe Localization: Frontal = Disinhibition/personality, Broca's aphasia, contralateral hemiparesis. Parietal = Astereognosis, neglect, Gerstmann's. Temporal = Wernicke's, memory, auditory. Occipital = Visual."
    },
    {
      id: "ne-t1-m5",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q24 | Batch 23 | Final",
      stem: "Which of the following is a classic clinical sign of an Upper Motor Neuron (UMN) lesion?",
      options: {
        a: "Hypertonia (Spasticity)",
        b: "Muscle fasciculations",
        c: "Severe muscle wasting",
        d: "Areflexia"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Spastic hypertonia (velocity-dependent clasp-knife spasticity) is a hallmark UMN sign.",
        b: "Fasciculations are an LMN sign.",
        c: "Severe muscle wasting/atrophy is an LMN sign.",
        d: "Areflexia is an LMN sign."
      },
      highYield: "Clasp-knife spasticity = UMN (pyramidal). Lead-pipe / Cogwheel rigidity = Extrapyramidal (Basal ganglia)."
    },
    {
      id: "ne-t1-m6",
      type: "mcq",
      batch: 22,
      exam: "Midterm",
      source: "Q5 | Batch 22 | Midterm",
      stem: "The Loss of deep tendon reflex at the knee is most consistent with nerve root involvement at which level?",
      options: {
        a: "L-2",
        b: "L3",
        c: "L4",
        d: "L5"
      },
      correct: "c",
      explanations: {
        a: "L2 contributes primarily to hip flexion.",
        b: "L3 contributes to knee extension, but L4 is the primary root tested by the knee jerk.",
        c: "CORRECT: The patellar (knee) deep tendon reflex is mediated by L3–L4, with L4 being the classic primary root level.",
        d: "L5 mediates great toe dorsiflexion and has no standard deep tendon reflex."
      },
      highYield: "Deep Tendon Reflex Roots: Ankle = S1; Knee = L3–L4 (L4); Biceps = C5–C6; Brachioradialis = C5–C6; Triceps = C7."
    },
    {
      id: "ne-t1-m7",
      type: "mcq",
      batch: 22,
      exam: "Midterm",
      source: "Q12 | Batch 22 | Midterm",
      stem: "The nerve root values corresponding to biceps tendon & reflex are.",
      options: {
        a: "C5/C6",
        b: "C4/C5.",
        c: "C6/C7",
        d: "C7/C8"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Biceps reflex (and brachioradialis/supinator reflex) is mediated by C5–C6 (musculocutaneous nerve).",
        b: "Incorrect.",
        c: "Incorrect.",
        d: "Triceps reflex is mediated by C7 (C6–C7/C7–C8)."
      },
      highYield: "Mnemonic '1-2 Buckle my shoe (S1-2 Ankle), 3-4 Kick the door (L3-4 Knee), 5-6 Pick up sticks (C5-6 Biceps), 7-8 Lay them straight (C7 Triceps)'."
    },
    {
      id: "ne-t1-m8",
      type: "mcq",
      batch: 21,
      exam: "Midterm",
      source: "Q9 | Batch 21 | Midterm",
      stem: "Right homonymoushemianopia usually results from damage to the",
      options: {
        a: "left optic tract",
        b: "left optic radiation",
        c: "optic chiasma",
        d: "right lateral ganiculate body",
        e: "left optic nerve"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Any retrochiasmal lesion on the LEFT side (left optic tract, left LGN, left optic radiation, or left occipital cortex) causes a CONTRALATERAL (RIGHT) homonymous hemianopia.",
        b: "A complete lesion of the left optic radiation also causes right homonymous hemianopia (see Exam Note).",
        c: "Optic chiasm lesion causes BITEMPORAL hemianopia.",
        d: "Right LGN lesion causes LEFT homonymous hemianopia.",
        e: "Left optic nerve lesion causes monocular blindness in the left eye."
      },
      highYield: "Visual Pathway: Optic nerve = Monocular blindness; Optic chiasm = Bitemporal hemianopia; Retrochiasmal (Optic tract/radiation/occipital cortex) = Contralateral Homonymous Hemianopia.",
      examNote: "Both (a) left optic tract and (b) left optic radiation are anatomically true (this question originates from a true/false MRCP bank where both A & B were true; in single-best-answer format, (a) left optic tract is the first retrochiasmal structure)."
    },
    {
      id: "ne-t1-m9",
      type: "mcq",
      batch: 21,
      exam: "Midterm",
      source: "Q12 | Batch 21 | Midterm",
      stem: "Dysphasia suggests the impairment of:",
      options: {
        a: "Speech",
        b: "Gait",
        c: "Swallowing",
        d: "Movement",
        e: "Sensation"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Dysphasia (or aphasia) is an impairment of language/speech production or comprehension due to a dominant hemisphere cortical lesion.",
        b: "Impairment of gait = Ataxia / gait apraxia.",
        c: "Impairment of swallowing = Dysphagia (note the 'g'!).",
        d: "Impairment of movement = Paresis / ataxia.",
        e: "Impairment of sensation = Hypoesthesia / anesthesia."
      },
      highYield: "DysPHASIA = Speech/Language disorder. DysPHAGIA = Swallowing disorder. DysARTHRIA = Articulation/motor speech disorder."
    },
    {
      id: "ne-t1-m10",
      type: "mcq",
      batch: 20,
      exam: "Final",
      source: "Q23 | Batch 20 | Final",
      stem: "Signs of Horner's syndrome include all of the following EXCEPT:",
      options: {
        a: "Ptosis",
        b: "Mydriasis",
        c: "Anhidrosis",
        d: "Enophthalmos",
        e: "Dry skin of the ipsilateral side of the face"
      },
      correct: "b",
      explanations: {
        a: "Partial ptosis occurs due to paralysis of Müller's muscle (sympathetic).",
        b: "CORRECT (EXCEPT): Horner's syndrome causes MIOSIS (pupillary constriction due to unopposed parasympathetic tone), NOT mydriasis (pupillary dilation is seen in CN III palsy).",
        c: "Ipsilateral anhidrosis (loss of sweating) occurs in central/preganglionic lesions.",
        d: "Apparent enophthalmos (sunken eye appearance) is part of the classic triad.",
        e: "Dry skin of the ipsilateral face is a direct result of anhidrosis."
      },
      highYield: "Horner's Syndrome (Sympathetic chain lesion) = PAM: Ptosis (partial), Anhidrosis, Miosis (+ apparent enophthalmos). Mydriasis + complete ptosis + 'down & out' eye = CN III palsy."
    },
    {
      id: "ne-t1-m11",
      type: "mcq",
      batch: 20,
      exam: "Final",
      source: "Q24 | Batch 20 | Final",
      stem: "Typical findings in cerebellar disease include (all EXCEPT):",
      options: {
        a: "Dysmetria",
        b: "Dysarthria",
        c: "Intention tremor",
        d: "Increased muscle tone",
        e: "Pendular nystagmus"
      },
      correct: "d",
      explanations: {
        a: "Dysmetria (past-pointing / overshooting on finger-nose test) is a classic cerebellar sign.",
        b: "Scanning/staccato dysarthria is a classic cerebellar sign.",
        c: "Intention tremor (worsens as target is approached) is a classic cerebellar sign.",
        d: "CORRECT (EXCEPT): Cerebellar lesions cause HYPOTONIA (decreased muscle tone) and pendular reflexes, NOT increased muscle tone.",
        e: "Nystagmus (typically gaze-evoked/horizontal, sometimes pendular) occurs in cerebellar disease."
      },
      highYield: "Cerebellar Signs (DANISH): Dysdiadochokinesia, Ataxia, Nystagmus, Intention tremor, Slurred/Scanning speech (Dysarthria), Hypotonia (NOT hypertonia!)."
    },
    {
      id: "ne-t1-m12",
      type: "mcq",
      batch: 20,
      exam: "Final",
      source: "Q25 | Batch 20 | Final",
      stem: "Right homonymous hemianopia usually results from damage to the:",
      options: {
        a: "Left optic tract",
        b: "Left optic radiation",
        c: "Optic chiasma",
        d: "Right lateral geniculate body",
        e: "Left optic nerve"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Left optic tract damage produces contralateral (right) homonymous hemianopia.",
        b: "Left optic radiation damage also causes right homonymous hemianopia (see Exam Note).",
        c: "Optic chiasm causes bitemporal hemianopia.",
        d: "Right LGN causes left homonymous hemianopia.",
        e: "Left optic nerve causes left monocular blindness."
      },
      highYield: "Repeated verbatim from Batch 21 Midterm Q9: Retrochiasmal LEFT lesion → RIGHT homonymous hemianopia.",
      examNote: "Both (a) and (b) are anatomically correct (adapted from a multi-true MRCP question)."
    },
    {
      id: "ne-t1-m13",
      type: "mcq",
      batch: 20,
      exam: "Final",
      source: "Q26 | Batch 20 | Final",
      stem: "Features suggesting a third cranial nerve palsy include (all EXCEPT):",
      options: {
        a: "Paralysis of abduction",
        b: "Absence of facial sweating",
        c: "Complete ptosis",
        d: "Pupillary dilatation",
        e: "Absence of accommodation"
      },
      correct: "a",
      explanations: {
        a: "CORRECT (EXCEPT): Abduction is performed by the Lateral Rectus (CN VI — Abducens nerve), NOT CN III. In CN III palsy, adduction/elevation/depression are paralyzed, leaving the eye 'down and out'.",
        b: "Absence of facial sweating (anhidrosis) is a feature of Horner's syndrome, NOT CN III palsy (see Exam Note).",
        c: "Complete ptosis occurs due to levator palpebrae superioris paralysis (CN III).",
        d: "Pupillary dilatation (mydriasis) occurs in surgical/compressive CN III palsy (e.g., PCom aneurysm).",
        e: "Loss of accommodation occurs due to parasympathetic ciliary muscle paralysis."
      },
      highYield: "CN III Palsy = Complete ptosis + Eye 'down and out' (unopposed LR6 & SO4) + Mydriasis + Loss of accommodation. Pupil-sparing CN III palsy = Microvascular (Diabetes/HTN); Pupil-involving = PCom Aneurysm!",
      examNote: "Adapted from a multi-true question where BOTH (a) Paralysis of abduction (CN VI) and (b) Absence of facial sweating (Horner's) are NOT features of CN III palsy."
    },
    {
      id: "ne-t1-m14",
      type: "mcq",
      batch: 19,
      exam: "Midterm",
      source: "Q12 | Batch 19 | Midterm",
      stem: "The presence of ataxia suggests damage to any of the following EXCEPT",
      options: {
        a: "Cerebellar",
        b: "Thalamus",
        c: "Vestibular nucleus",
        d: "Vagal nerve",
        e: "Trigeminal nerve"
      },
      correct: "d",
      explanations: {
        a: "Cerebellar lesions cause cerebellar ataxia.",
        b: "Thalamic lesions (sensory relay/cerebellothalamic pathway) can cause hemiataxia / sensory ataxia.",
        c: "Vestibular nucleus lesions cause vestibular ataxia and vertigo.",
        d: "CORRECT (EXCEPT): The Vagal nerve (CN X) supplies palatal/pharyngeal/laryngeal muscles and autonomic viscera — damage does NOT cause ataxia.",
        e: "Trigeminal nerve (CN V) also does not cause limb/gait ataxia (see Exam Note)."
      },
      highYield: "Three main types of Ataxia: 1) Cerebellar, 2) Sensory (Dorsal columns/peripheral nerves/thalamus — Romberg positive), 3) Vestibular.",
      examNote: "Both (d) Vagal nerve and (e) Trigeminal nerve do not cause ataxia."
    },
    {
      id: "ne-t1-m15",
      type: "mcq",
      batch: 19,
      exam: "Midterm",
      source: "Q14 | Batch 19 | Midterm",
      stem: "Dysphagia, dyphonia, dysarthria together with tongue atrophy & depressed \"gag\" reflex is called:",
      options: {
        a: "Bulbar palsy",
        b: "Bell's palsy",
        c: "Neuralgia",
        d: "Pseudobulbar palsy",
        e: "erb's palsy"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Bulbar palsy is a LOWER Motor Neuron (LMN) lesion of cranial nerves IX, X, XI, XII (medulla), causing dysphagia, dysphonia, nasal dysarthria, wasted/fasciculating tongue, and depressed/absent gag reflex.",
        b: "Bell's palsy is an LMN lesion of CN VII (facial paralysis).",
        c: "Neuralgia is paroxysmal nerve pain (e.g., trigeminal neuralgia).",
        d: "Pseudobulbar palsy is a bilateral UMN lesion (corticobulbar tracts) causing spastic/small tongue (no wasting/fasciculations), BRISK gag/jaw jerk, and emotional lability.",
        e: "Erb's palsy is an upper brachial plexus (C5–C6) injury ('waiter's tip')."
      },
      highYield: "Bulbar Palsy (LMN CN IX–XII) = Wasted fasciculating tongue + Absent gag. Pseudobulbar Palsy (Bilateral UMN) = Spastic tongue + Brisk jaw jerk/gag + Emotional lability."
    },
    {
      id: "ne-t1-m16",
      type: "mcq",
      batch: 19,
      exam: "Midterm",
      source: "Q15 | Batch 19 | Midterm",
      stem: "The following symptoms may occur in optic nerve damage",
      options: {
        a: "Depressed pupilary reaction",
        b: "Exophthalmus",
        c: "Ptosis",
        d: "Diplopia",
        e: "Blindness"
      },
      correct: "e",
      explanations: {
        a: "Depressed direct pupillary light reflex (RAPD / Marcus Gunn pupil) also occurs in optic nerve damage (see Exam Note).",
        b: "Exophthalmos is due to orbital mass/Graves' disease.",
        c: "Ptosis is due to CN III palsy or Horner's syndrome.",
        d: "Diplopia is due to CN III, IV, or VI palsy (extraocular muscles).",
        e: "CORRECT: Blindness (monocular vision loss) is the primary hallmark of optic nerve (CN II) damage."
      },
      highYield: "Optic nerve (CN II) damage → Ipsilateral monocular blindness + Relative Afferent Pupillary Defect (RAPD / depressed direct light reflex with intact consensual reflex).",
      examNote: "Both (a) Depressed pupillary reaction and (e) Blindness occur in optic nerve damage; (e) Blindness is the most direct symptom."
    },
    {
      id: "ne-t1-m17",
      type: "mcq",
      batch: 19,
      exam: "Midterm",
      source: "Q17 | Batch 19 | Midterm",
      stem: "Upper motor neuron lesion Is characterised by",
      options: {
        a: "The rapid onset of muscle wasting",
        b: "Absent or decreased tendon reflexes",
        c: "Clonus",
        d: "Flexor plantar response"
      },
      correct: "c",
      explanations: {
        a: "Rapid muscle wasting is an LMN sign.",
        b: "Absent/decreased reflexes are an LMN sign.",
        c: "CORRECT: Clonus (rhythmic involuntary muscle contractions on sudden stretch) is a classic Upper Motor Neuron (UMN) sign.",
        d: "Flexor plantar response is normal (UMN causes EXTENSOR plantar response / Babinski sign)."
      },
      highYield: "Sustained ankle clonus = Classic UMN sign."
    },
    {
      id: "ne-t1-m18",
      type: "mcq",
      batch: 19,
      exam: "Midterm",
      source: "Q19 | Batch 19 | Midterm",
      stem: "fasciculation mostly affect :",
      options: {
        c: "tongue"
      },
      correct: "c",
      explanations: {
        c: "CORRECT: Tongue fasciculations (at rest inside the mouth) are the most reliable and classic site to observe pathological LMN fasciculations (e.g., in ALS / bulbar palsy), as benign fasciculations rarely affect the tongue."
      },
      highYield: "Tongue fasciculations + wasting = Pathognomonic for LMN CN XII lesion (classic in ALS/Bulbar palsy).",
      examNote: "Only the correct option (c) was recalled in the original Batch 19 Midterm sheet."
    },
    {
      id: "ne-t1-m19",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q22 | Batch 19 | Final",
      stem: "Poor prognostic factor in bell's palsy including all the following except:",
      options: {
        a: "Age above 60 y.",
        b: "Absence of hyperacuosis",
        c: "Diminshed lacrimation",
        d: "Associeded with DM"
      },
      correct: "b",
      explanations: {
        a: "Age >60 years is a recognized poor prognostic factor in Bell's palsy.",
        b: "CORRECT (EXCEPT): PRESENCE of hyperacusis (stapedius paralysis indicating a proximal lesion) is a poor prognostic factor; ABSENCE of hyperacusis indicates a more distal lesion with a BETTER prognosis.",
        c: "Diminished lacrimation (greater petrosal nerve involvement) indicates a proximal lesion and poorer prognosis.",
        d: "Diabetes mellitus (and hypertension, complete paralysis, Ramsay Hunt syndrome) worsens prognosis."
      },
      highYield: "Bell's Palsy Poor Prognosis: Age >60, Complete paralysis, Hyperacusis, Decreased lacrimation, Diabetes/HTN, No recovery by 3 weeks. Treatment = Oral Prednisolone within 72h + Eye protection!"
    },
    {
      id: "ne-t1-m20",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q27 | Batch 19 | Final",
      stem: "A patient with head injury who has painful stimuli eye opening, inappropriate ward and with drawal moter response, would has GCS is",
      options: {
        a: "4",
        b: "5",
        c: "8",
        d: "9"
      },
      correct: "d",
      explanations: {
        a: "Incorrect.",
        b: "Incorrect.",
        c: "Incorrect.",
        d: "CORRECT: Eye opening to pain (E2) + Inappropriate words (V3) + Withdrawal from pain (M4) = 2 + 3 + 4 = 9."
      },
      highYield: "GCS Scoring: Eyes (4=Spont, 3=Voice, 2=Pain, 1=None) | Verbal (5=Oriented, 4=Confused, 3=Inappropriate words, 2=Sounds, 1=None) | Motor (6=Obeys, 5=Localizes, 4=Withdraws, 3=Flexion, 2=Extension, 1=None). GCS ≤ 8 → Intubate!"
    },
    {
      id: "ne-t1-m21",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q25 | Batch 18 | Final",
      stem: "Which of the following is not a potential source of ototoxicity?",
      options: {
        a: "Salicylates",
        b: "Gentamycin",
        c: "Cisplatin",
        d: "Levetiracetam",
        e: "Vancomycin"
      },
      correct: "d",
      explanations: {
        a: "Salicylates (Aspirin toxicity) cause reversible tinnitus and sensorineural hearing loss.",
        b: "Gentamicin (aminoglycoside) is famously vestibulotoxic and cochleotoxic.",
        c: "Cisplatin (platinum chemotherapy) causes irreversible high-frequency sensorineural hearing loss.",
        d: "CORRECT (NOT ototoxic): Levetiracetam (Keppra) is a broad-spectrum antiepileptic whose main side effects are behavioral/psychiatric (irritability, agitation), NOT ototoxicity.",
        e: "Vancomycin is a recognized cause of ototoxicity and nephrotoxicity."
      },
      highYield: "Classic Ototoxic Drugs: Aminoglycosides (Gentamicin), Loop diuretics (Furosemide), Cisplatin, Vancomycin, High-dose Salicylates, Macrolides."
    },
    {
      id: "ne-t1-m22",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q29 | Batch 18 | Final",
      stem: "Which of the following nerves is responsible for taste on the anterior portion of the tongue?",
      options: {
        a: "Lingual nerve",
        b: "Hypoglossal nerve",
        c: "Glossopharyngeal nerve",
        d: "Mandibular branch of trigeminal nerve",
        e: "Facial nerve"
      },
      correct: "e",
      explanations: {
        a: "The lingual nerve (branch of CN V3) carries GENERAL sensation (touch, pain, temp) from the anterior 2/3 of the tongue (chorda tympani fibers hitchhike on it, but originate from CN VII).",
        b: "Hypoglossal nerve (CN XII) supplies motor innervation to tongue muscles.",
        c: "Glossopharyngeal nerve (CN IX) supplies both taste and general sensation to the POSTERIOR 1/3 of the tongue.",
        d: "CN V3 supplies general sensation to anterior 2/3 of tongue and muscles of mastication.",
        e: "CORRECT: The Facial nerve (CN VII), via the chorda tympani branch, is responsible for TASTE on the anterior 2/3 of the tongue."
      },
      highYield: "Tongue Innervation: Anterior 2/3 Taste = CN VII (Chorda tympani); Anterior 2/3 General Sensation = CN V3 (Lingual nerve); Posterior 1/3 Taste & Sensation = CN IX; Motor = CN XII."
    }
  ]
});
// ==========================================
// NEUROLOGY - TOPIC 2: CEREBROVASCULAR DISEASES (STROKE & TIA)
// ==========================================
window.IM_DATA.neurology.push({
  title: "Cerebrovascular Diseases (Ischemic & Hemorrhagic Stroke, TIA)",
  shortTitle: "Stroke & TIA",
  essays: [
    {
      id: "ne-t2-e1",
      type: "essay",
      batch: 24,
      exam: "Final",
      source: "Short Essay Q4 | Batch 24 | Final",
      stem: "Q4: Managment of ischemic strok. (5M)",
      modelAnswer: `
        <h4>1. Immediate Stabilization &amp; Urgent Diagnostics</h4>
        <ul>
          <li><strong>ABCs &amp; Vital Signs:</strong> Secure airway (if GCS ≤8 or bulbar dysfunction), maintain O₂ saturation &gt;94% (avoid routine O₂ if normoxic), and establish IV access.</li>
          <li><strong>Immediate Non-Contrast Brain CT:</strong> Mandatory first step to definitively rule out intracranial hemorrhage (ICH) before any reperfusion or antiplatelet therapy.</li>
          <li><strong>Stat Labs &amp; ECG:</strong> Fingerstick blood glucose (rule out hypoglycemia mimic!), CBC, platelets, PT/INR, aPTT, electrolytes, renal function, and 12-lead ECG (check for Atrial Fibrillation).</li>
        </ul>
        <h4>2. Acute Reperfusion Therapy (Time is Brain)</h4>
        <ul>
          <li><strong>IV Thrombolysis (Alteplase / Tenecteplase — tPA):</strong> Indicated within <strong>4.5 hours</strong> of symptom onset (last known well) after excluding hemorrhage and contraindications (e.g., recent surgery/bleeding, BP &gt;185/110 mmHg, INR &gt;1.7, platelets &lt;100,000).</li>
          <li><strong>Mechanical Thrombectomy:</strong> Indicated for Large Vessel Occlusion (LVO — e.g., proximal MCA/ICA) up to <strong>6 hours</strong> (and up to <strong>24 hours</strong> in selected patients with salvageable penumbra on perfusion imaging).</li>
        </ul>
        <h4>3. General Acute Supportive Management (Stroke Unit)</h4>
        <ul>
          <li><strong>Blood Pressure (Permissive Hypertension):</strong>
            <ul>
              <li>If <strong>NOT</strong> receiving tPA: Do NOT lower BP unless <strong>&gt;220/120 mmHg</strong> (then lower by only 15% over 24h).</li>
              <li>If receiving <strong>tPA</strong>: Lower BP to <strong>&lt;185/110 mmHg</strong> before tPA and maintain <strong>&lt;180/105 mmHg</strong> for 24h (using IV Labetalol or Nicardipine).</li>
            </ul>
          </li>
          <li><strong>Glycemic &amp; Temperature Control:</strong> Maintain blood glucose at <strong>140–180 mg/dL</strong> (avoid hypoglycemia &amp; hyperglycemia); treat fever (&gt;38°C) with antipyretics.</li>
          <li><strong>Swallowing &amp; Complications:</strong> Keep <strong>NPO</strong> until formal bedside dysphagia screening is passed (prevents aspiration pneumonia); DVT prophylaxis (intermittent pneumatic compression ± low-dose LMWH); avoid prophylactic antiepileptics.</li>
          <li><strong>Malignant Cerebral Edema:</strong> Head elevation 30°, IV Mannitol or hypertonic saline, and decompressive hemicraniectomy if large MCA infarct deteriorates.</li>
        </ul>
        <h4>4. Secondary Prevention</h4>
        <ul>
          <li><strong>Antiplatelets:</strong> Start <strong>Aspirin</strong> (160–325 mg) within 24–48 hours (wait 24h + repeat CT if tPA was given). Short-term DAPT (Aspirin + Clopidogrel for 21 days) for minor stroke/high-risk TIA.</li>
          <li><strong>Anticoagulation (for Cardioembolic / AF):</strong> Delay full-dose oral anticoagulation (DOACs or Warfarin) for <strong>4–14 days</strong> depending on infarct size to prevent hemorrhagic transformation.</li>
          <li><strong>Risk Factor Modification:</strong> High-intensity Statin (Atorvastatin), gradual BP control after acute phase, glycemic control, smoking cessation, and <strong>Carotid Endarterectomy (CEA)</strong> for symptomatic ipsilateral carotid stenosis ≥70%.</li>
        </ul>
      `
    }
  ],
  mcqs: [
    {
      id: "ne-t2-m1",
      type: "mcq",
      batch: 24,
      exam: "Midterm",
      source: "Q9 | Batch 24 | Midterm",
      stem: "The recommended time window for IV thrombolysis (TPA administration) in acute ischemic stroke is:",
      options: {
        a: "3 hours (3.5 hours)",
        b: "4.5 hours",
        c: "6 hours",
        d: "Individualized based on multimodal imaging"
      },
      correct: "b",
      explanations: {
        a: "3 hours was the original historical NINDS window, later expanded by the ECASS III trial.",
        b: "CORRECT: The standard recommended time window for IV thrombolysis (Alteplase/tPA) in acute ischemic stroke is within 4.5 hours from symptom onset (last known well).",
        c: "6 hours is the standard window for Mechanical Thrombectomy in large vessel occlusion.",
        d: "Multimodal perfusion imaging is used to extend the window in wake-up strokes or late thrombectomy (up to 24h), not the standard IV tPA window."
      },
      highYield: "IV tPA window = 4.5 hours. Mechanical Thrombectomy window = 6 hours (up to 24 hours with perfusion mismatch)."
    },
    {
      id: "ne-t2-m2",
      type: "mcq",
      batch: 24,
      exam: "Midterm",
      source: "Q10 | Batch 24 | Midterm",
      stem: "The most common risk factor (cause) for ischemic stroke in young adults (young male) is:",
      options: {
        a: "Diabetes mellitus",
        b: "Hypertension",
        c: "Valvular heart disease",
        d: "Autoimmune disorders"
      },
      correct: "c",
      explanations: {
        a: "DM is a major risk factor in older adults, less commonly the primary cause in young adults.",
        b: "Hypertension is the #1 modifiable risk factor for stroke overall (in older adults).",
        c: "CORRECT: In young adults (especially in developing countries with rheumatic heart disease), Cardioembolism — particularly Valvular Heart Disease (and patent foramen ovale / endocarditis) — is a leading cause of ischemic stroke (alongside cervical artery dissection).",
        d: "Autoimmune disorders (e.g., APS, SLE vasculitis) are important causes in young females, but less common overall than cardioembolic/valvular heart disease."
      },
      highYield: "Stroke in Young Adults: Think Cardioembolism (Valvular heart disease/RHD, PFO, Endocarditis), Cervical artery dissection, and Hypercoagulable states (APS)."
    },
    {
      id: "ne-t2-m3",
      type: "mcq",
      batch: 24,
      exam: "Midterm",
      source: "Q12 | Batch 24 | Midterm",
      stem: "Intracerebral hemorrhage due to amyloid angiopathy typically occurs in the:",
      options: {
        a: "Cortical (lobar) regions",
        b: "Internal capsule / basal ganglia",
        c: "Brainstem",
        d: "Cerebellum"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Cerebral Amyloid Angiopathy (CAA) deposits β-amyloid in small-to-medium cortical and leptomeningeal arteries, causing recurrent LOBAR (cortical/subcortical) intracerebral hemorrhages in elderly (>60–70 yrs) normotensive patients.",
        b: "Putamen/basal ganglia/internal capsule is the #1 site for HYPERTENSIVE hemorrhage.",
        c: "Pons (brainstem) is a classic site for HYPERTENSIVE hemorrhage.",
        d: "Cerebellum is a classic site for HYPERTENSIVE hemorrhage."
      },
      highYield: "Lobar ICH in Elderly = Cerebral Amyloid Angiopathy. Deep ICH (Putamen #1, Thalamus, Pons, Cerebellum) = Chronic Hypertension."
    },
    {
      id: "ne-t2-m4",
      type: "mcq",
      batch: 24,
      exam: "Midterm",
      source: "Q13 | Batch 24 | Midterm",
      stem: "Regarding general management of acute ischemic stroke, the following is FALSE (all true except):",
      options: {
        a: "Do not lower BP unless it exceeds 220/120 mmHg",
        b: "Monitor for NPO if dysphagia/aspiration is suspected",
        c: "Give prophylactic antiepileptic drugs",
        d: "Control blood glucose (target 140-180 mg/dl)"
      },
      correct: "c",
      explanations: {
        a: "True: Permissive hypertension up to 220/120 mmHg (if not receiving tPA) maintains cerebral perfusion to the ischemic penumbra.",
        b: "True: Keep NPO until dysphagia screening is passed to prevent aspiration pneumonia.",
        c: "CORRECT (FALSE): Prophylactic antiepileptic drugs are NOT recommended in acute ischemic stroke (treat only if clinical seizures actually occur).",
        d: "True: Target blood glucose in acute stroke is 140–180 mg/dL."
      },
      highYield: "Never give prophylactic antiepileptics in acute stroke! Only treat active/recurrent seizures."
    },
    {
      id: "ne-t2-m5",
      type: "mcq",
      batch: 24,
      exam: "Midterm",
      source: "Q14 | Batch 24 | Midterm",
      stem: "Pure sensory stroke (Homonymous hemianopia + Contralateral sensory loss, No motor in- volvement) is caused by occlusion of the:",
      options: {
        a: "MCA",
        b: "ACA",
        c: "PCA",
        d: "PICA"
      },
      correct: "c",
      explanations: {
        a: "MCA occlusion causes contralateral face/arm weakness & sensory loss + aphasia (dominant) or neglect (non-dominant).",
        b: "ACA occlusion causes contralateral leg weakness & sensory loss + abulia/urinary incontinence.",
        c: "CORRECT: Posterior Cerebral Artery (PCA) supplies the occipital lobe (contralateral homonymous hemianopia with macular sparing) and thalamus (contralateral hemisensory loss / pure sensory stroke) while sparing the motor cortex/pyramidal tract.",
        d: "PICA occlusion causes Lateral Medullary (Wallenberg) syndrome."
      },
      highYield: "PCA Stroke = Contralateral Homonymous Hemianopia (macular sparing) + Thalamic contralateral sensory loss + NO motor weakness."
    },
    {
      id: "ne-t2-m6",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q29 | Batch 24 | Final",
      stem: "A patient with a large Middle Cerebral Artery (MCA) infarction develops progressive neurological deterioration, headache, and depressed consciousness on the 3rd day after onset. What is the most likely cause?",
      options: {
        a: "Malignant cerebral edema and tentorial herniation",
        b: "Re-infarction",
        c: "Subarachnoid hemorrhage",
        d: "Post-stroke epilepsy"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Cytotoxic cerebral edema after a large territorial MCA infarction peaks at Days 2–5 (classically Day 3), causing raised ICP, midline shift, uncal/tentorial herniation, and rapid neurological deterioration.",
        b: "Re-infarction is less likely than peak malignant edema on Day 3 of a large MCA stroke.",
        c: "SAH is not a typical Day 3 complication of ischemic MCA stroke.",
        d: "Post-stroke epilepsy causes seizures, not progressive headache and herniation."
      },
      highYield: "Cerebral edema after large ischemic stroke peaks at 3–5 days! Treatment: Osmotic therapy (Mannitol/Hypertonic saline) + Urgent Decompressive Hemicraniectomy."
    },
    {
      id: "ne-t2-m7",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q30 | Batch 24 | Final",
      stem: "In a patient with a moderate-to-large acute cardioembolic ischemic stroke (due to atrial fibrillation), when is it generally recommended to start full-dose oral anticoagulation to avoid hemorrhagic transformation?",
      options: {
        a: "Delayed for 7 to 14 days (depending on infarct size)",
        b: "Within the first 6 hours",
        c: "Within the first 24 hours",
        d: "Immediately alongside IV tPA"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Starting full-dose anticoagulation too early in a moderate-to-large ischemic stroke carries a high risk of hemorrhagic transformation; guidelines recommend delaying 4–14 days (typically 7–14 days for large infarcts; '1-3-6-12 day rule').",
        b: "Contraindicated due to very high risk of hemorrhagic conversion.",
        c: "Too early for moderate-to-large infarcts.",
        d: "Strictly contraindicated — never give anticoagulants within 24 hours of IV tPA."
      },
      highYield: "AFib + Acute Ischemic Stroke → Delay oral anticoagulation (7–14 days for moderate/large infarcts) to prevent hemorrhagic transformation (use Aspirin in the interim)."
    },
    {
      id: "ne-t2-m8",
      type: "mcq",
      batch: 23,
      exam: "Midterm",
      source: "Q9 | Batch 23 | Midterm",
      stem: "What is the most common cause of amaurosis fugax (transient monocular blindness)?",
      options: {
        a: "Hypotension",
        b: "Ipsilateral internal carotid artery atherosclerosis",
        c: "Migraine",
        d: "Ophthalmic artery vasospasm"
      },
      correct: "b",
      explanations: {
        a: "Hypotension causes bilateral visual dimming/syncope, not monocular blindness.",
        b: "CORRECT: Amaurosis fugax ('curtain coming down over one eye' for minutes) is a retinal TIA most commonly caused by cholesterol/platelet microemboli (Hollenhorst plaques) from IPSILATERAL internal carotid artery atherosclerotic plaque.",
        c: "Retinal migraine is a rare diagnosis of exclusion.",
        d: "Vasospasm is much less common than carotid thromboembolism."
      },
      highYield: "Amaurosis Fugax = Retinal TIA → Most common cause = Ipsilateral Internal Carotid Artery (ICA) atherosclerosis → Order Carotid Duplex Ultrasound!"
    },
    {
      id: "ne-t2-m9",
      type: "mcq",
      batch: 23,
      exam: "Midterm",
      source: "Q10 | Batch 23 | Midterm",
      stem: "Which of the following is least likely to increase the risk for stroke due to atrial fibrillation?",
      options: {
        a: "Congestive heart failure",
        b: "Hypertension",
        c: "Diabetes",
        d: "Age 60 years"
      },
      correct: "d",
      explanations: {
        a: "CHF = 1 point in CHA₂DS₂-VASc score.",
        b: "Hypertension = 1 point in CHA₂DS₂-VASc score.",
        c: "Diabetes = 1 point in CHA₂DS₂-VASc score.",
        d: "CORRECT (Least likely): In the CHA₂DS₂-VASc score, age only adds points starting at ≥65 years (1 point for 65–74; 2 points for ≥75). Age 60 years gives 0 points."
      },
      highYield: "CHA₂DS₂-VASc: C(HF)=1, H(TN)=1, A(ge ≥75)=2, D(M)=1, S(troke/TIA)=2, V(ascular disease)=1, A(ge 65–74)=1, Sc(Female)=1. Age 60 = 0 points!"
    },
    {
      id: "ne-t2-m10",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q23 | Batch 23 | Final",
      stem: "The lateral medullary syndrome (Wallenberg syndrome) is usually due to occlusion of the:",
      options: {
        a: "Posterior inferior cerebellar artery (PICA)",
        b: "Anterior spinal artery",
        c: "Anterior inferior cerebellar artery (AICA)",
        d: "Posterior cerebral artery"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Occlusion of the Posterior Inferior Cerebellar Artery (PICA) (or vertebral artery) causes Lateral Medullary (Wallenberg) syndrome.",
        b: "Anterior spinal artery occlusion causes Medial Medullary (Dejerine) syndrome (contralateral hemiplegia + ipsilateral CN XII tongue deviation).",
        c: "AICA occlusion causes Lateral Pontine syndrome (facial paralysis + ipsilateral deafness/tinnitus).",
        d: "PCA occlusion causes occipital/thalamic stroke."
      },
      highYield: "Wallenberg (Lateral Medullary) Syndrome = PICA occlusion → Dysphagia/hoarseness (Nucleus ambiguus — SPECIFIC!), Vertigo/nystagmus, Ipsilateral Horner's, Ipsilateral ataxia, Crossed pain/temp loss (ipsilateral face, contralateral body)."
    },
    {
      id: "ne-t2-m11",
      type: "mcq",
      batch: 22,
      exam: "Midterm",
      source: "Q6 | Batch 22 | Midterm",
      stem: "The most. likely cause of hemorrhage in a 86 year old woman is",
      options: {
        a: "hypertension.",
        b: "head trauma",
        c: "Amyloid angiopathy hypertension",
        d: "aneurysm."
      },
      correct: "c",
      explanations: {
        a: "Hypertension is the #1 cause of deep ICH overall, but in very elderly patients (>80–85 yrs), Cerebral Amyloid Angiopathy (CAA) is the leading cause of lobar ICH.",
        b: "Head trauma causes subdural/epidural hematoma.",
        c: "CORRECT: Cerebral Amyloid Angiopathy (often coexisting with hypertension in the very elderly, age 86) is the classic cause of spontaneous lobar intracerebral hemorrhage in octogenarians.",
        d: "Berry aneurysm rupture causes Subarachnoid Hemorrhage (SAH), typically in middle-aged adults (40–60 yrs)."
      },
      highYield: "Spontaneous ICH in a very elderly patient (>75–85 yrs) → Think Cerebral Amyloid Angiopathy (CAA).",
      examNote: "The word 'hypertension' at the end of option (c) is a printing typo in the original Batch 22 Midterm paper; the intended answer is Amyloid angiopathy."
    },
    {
      id: "ne-t2-m12",
      type: "mcq",
      batch: 22,
      exam: "Midterm",
      source: "Q7 | Batch 22 | Midterm",
      stem: "The following are definite risk factors for stroke except",
      options: {
        a: "hypertension",
        b: "male gender",
        c: "smoking",
        d: "obesity"
      },
      correct: "d",
      explanations: {
        a: "Hypertension is the #1 most important modifiable risk factor for both ischemic and hemorrhagic stroke.",
        b: "Male gender is a definite non-modifiable risk factor (higher incidence at younger/middle ages).",
        c: "Smoking is a definite major modifiable risk factor.",
        d: "CORRECT (EXCEPT): Obesity is classically categorized in neurology textbooks as a 'less well-documented / indirect' risk factor (acts mainly via HTN, DM, and dyslipidemia) rather than an independent definite risk factor like HTN or smoking."
      },
      highYield: "Definite Stroke Risk Factors: Hypertension (#1 modifiable), Age (#1 non-modifiable), Male sex, Smoking, Diabetes, Atrial Fibrillation, Carotid stenosis, Prior TIA/Stroke."
    },
    {
      id: "ne-t2-m13",
      type: "mcq",
      batch: 22,
      exam: "Midterm",
      source: "Q10 | Batch 22 | Midterm",
      stem: "Which of the following is not correct regarding poor prognosis of interacerebral hemor- rhage?",
      options: {
        a: "intera ventricular hemorrhage",
        b: "lobar hemorrhage",
        c: "thalamic hemorrhage larger than 3Cm.",
        d: "putamin hemorrhage more than 4cm"
      },
      correct: "b",
      explanations: {
        a: "Intraventricular extension (IVH) is a major component of the ICH Score and strongly predicts poor prognosis/hydrocephalus.",
        b: "CORRECT (NOT correct): Lobar (superficial cortical) hemorrhages generally carry a BETTER prognosis (lower mortality and easier surgical accessibility) than deep (thalamic, putaminal, brainstem) or intraventricular hemorrhages.",
        c: "Large thalamic hemorrhage (>3 cm) has a very poor prognosis.",
        d: "Large putaminal hemorrhage (>4 cm / >30 mL volume) carries high mortality."
      },
      highYield: "ICH Score (Poor Prognosis Predictors): Low GCS, Volume ≥30 mL, Intraventricular extension (IVH), Infratentorial (brainstem/cerebellar) location, Age ≥80."
    },
    {
      id: "ne-t2-m14",
      type: "mcq",
      batch: 22,
      exam: "Midterm",
      source: "Q11 | Batch 22 | Midterm",
      stem: "The most common site of interacerebral hemorrhage is.",
      options: {
        a: "thalamus",
        b: "putamen",
        c: "pons",
        d: "cerebellar hemorrhage"
      },
      correct: "b",
      explanations: {
        a: "Thalamus is the 2nd most common deep site (~15–20%).",
        b: "CORRECT: The Putamen / Basal Ganglia (~35–50% of cases, from rupture of Charcot-Bouchard microaneurysms of the lenticulostriate arteries) is the #1 most common site of hypertensive intracerebral hemorrhage.",
        c: "Pons accounts for ~5–10% (pinpoint pupils + coma + quadriplegia).",
        d: "Cerebellum accounts for ~5–10%."
      },
      highYield: "Most common site of Hypertensive ICH = Putamen (Lenticulostriate arteries)."
    },
    {
      id: "ne-t2-m15",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q24 | Batch 22 | Final",
      stem: "All the following are indication for immediate brain imaging in acute stroke except-:",
      options: {
        a: "Patient on anticoagulant therapy.",
        b: "Patient with normal coagulation.",
        c: "Suitable for reperfusion.",
        d: "Deteriorating conscious level."
      },
      correct: "b",
      explanations: {
        a: "Patients on anticoagulants require IMMEDIATE brain CT to rule out life-threatening hemorrhage and reverse anticoagulation.",
        b: "CORRECT (EXCEPT): Having 'normal coagulation' is NOT by itself a specific red-flag indication for immediate/emergency CT (unlike anticoagulation, thrombolysis eligibility, or deteriorating consciousness).",
        c: "Candidates for reperfusion (tPA/thrombectomy) require IMMEDIATE brain CT (door-to-CT <25 min).",
        d: "Deteriorating conscious level (GCS drop) requires IMMEDIATE CT to rule out hemorrhage, herniation, or hydrocephalus."
      },
      highYield: "NICE / Davidson's Indications for IMMEDIATE Brain Imaging in Stroke: Thrombolysis/thrombectomy candidate, On anticoagulants, Known bleeding tendency, Depressed/fluctuating GCS, Severe headache at onset, Papilledema/neck stiffness/fever."
    },
    {
      id: "ne-t2-m16",
      type: "mcq",
      batch: 21,
      exam: "Midterm",
      source: "Q8 | Batch 21 | Midterm",
      stem: "The lateral medullary syndrome is usually due to occlusion of the:",
      options: {
        a: "Anterior spinal artery.",
        b: "Posterior spinal artery.",
        c: "AICA.",
        d: "PICA.",
        e: "Posterior cerebral artery"
      },
      correct: "d",
      explanations: {
        a: "Causes Medial Medullary syndrome.",
        b: "Causes dorsal column sensory loss.",
        c: "Causes Lateral Pontine syndrome.",
        d: "CORRECT: PICA (Posterior Inferior Cerebellar Artery) occlusion causes Lateral Medullary (Wallenberg) syndrome.",
        e: "Causes occipital/thalamic stroke."
      },
      highYield: "PICA = Lateral Medullary (Wallenberg) Syndrome (repeated in Batch 20, 21, and 23!)."
    },
    {
      id: "ne-t2-m17",
      type: "matching",
      batch: 21,
      exam: "Midterm",
      source: "Q13 | Batch 21 | Midterm",
      stem: "regard to strokes, match each of the clinical signs to the most likely lesion. Answers may be used more than once.\n\nArteries:\n1. Anterior cerebral artery\n2. Posterior inferior cerebellar artery\n3. Anterior choroidal artery\n4. Posterior communicating artery\n5. Basilar artery\n6. Posterior cerebral artery\n7. Anterior inferior cerebellar artery\n8. Middle cerebral artery\n9. Superior cerebellar artery\n10. Anterior inferior cerebellar artery\n\nClinical Signs:\na. Wernicke's aphasia\nb. 'Locked-in' syndrome\nc. Unilateral lower limb paresis\nd. Cortical blindness\ne. Lateral medullary syndrome",
      explanations: {
        "a (Wernicke's aphasia) → 8 (MCA)": "Inferior division of the dominant Middle Cerebral Artery supplies Wernicke's area (superior temporal gyrus).",
        "b ('Locked-in' syndrome) → 5 (Basilar artery)": "Basilar artery occlusion causes bilateral ventral pontine infarction → quadriplegia + preserved consciousness & vertical eye movements.",
        "c (Unilateral lower limb paresis) → 1 (ACA)": "Anterior Cerebral Artery supplies the medial frontal/parietal cortex (leg homunculus).",
        "d (Cortical blindness) → 6 (PCA)": "Bilateral Posterior Cerebral Artery occlusion causes bilateral occipital lobe infarction → cortical blindness (Anton's syndrome).",
        "e (Lateral medullary syndrome) → 2 (PICA)": "Posterior Inferior Cerebellar Artery occlusion causes Wallenberg syndrome."
      },
      highYield: "Stroke Territory Matching: MCA = Face/Arm + Aphasia; ACA = Leg; PCA = Visual/Cortical blindness; Basilar = Locked-in syndrome; PICA = Wallenberg."
    },
    {
      id: "ne-t2-m18",
      type: "mcq",
      batch: 20,
      exam: "Midterm",
      source: "Q8 | Batch 20 | Midterm",
      stem: "Which is the commonest cause of ocular monoblindness \"transient amaurosis fugax\"?",
      options: {
        a: "Ipsilateral internal carotid artery atherosclerosis",
        b: "Temporal arteritis",
        c: "Ophthalmic artery spasm",
        d: "Hypotension"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Emboli from ipsilateral internal carotid artery (ICA) atherosclerotic plaque are the #1 cause of transient monocular blindness (amaurosis fugax).",
        b: "Temporal arteritis causes permanent (or transient) ischemic optic neuropathy, but is far less common than ICA atherosclerosis.",
        c: "Rare cause.",
        d: "Causes bilateral dimming/syncope."
      },
      highYield: "Repeated verbatim from Batch 23 Midterm Q9: Amaurosis fugax → Ipsilateral ICA atherosclerosis."
    },
    {
      id: "ne-t2-m19",
      type: "mcq",
      batch: 20,
      exam: "Midterm",
      source: "Q10 | Batch 20 | Midterm",
      stem: "Which of the following is least likely to increase the risk for stroke in a patient with atrial fibrillation:",
      options: {
        a: "Congestive heart failure",
        b: "Hypertension",
        c: "Diabetes",
        d: "Age 60 years"
      },
      correct: "d",
      explanations: {
        a: "CHF = +1 point in CHA₂DS₂-VASc.",
        b: "Hypertension = +1 point.",
        c: "Diabetes = +1 point.",
        d: "CORRECT: Age 60 years scores 0 points in CHA₂DS₂-VASc (age risk starts at ≥65 years)."
      },
      highYield: "Repeated verbatim in Batch 20 Midterm & Batch 23 Midterm: Age 60 = 0 points in CHA₂DS₂-VASc."
    },
    {
      id: "ne-t2-m20",
      type: "mcq",
      batch: 20,
      exam: "Final",
      source: "Q22 | Batch 20 | Final",
      stem: "The lateral medullary syndrome is usually due to occlusion of the:",
      options: {
        a: "Anterior spinal artery",
        b: "Posterior spinal artery",
        c: "Anterior inferior cerebellar artery",
        d: "Posterior inferior cerebellar artery",
        e: "Posterior cerebral artery"
      },
      correct: "d",
      explanations: {
        a: "Medial medullary syndrome.",
        b: "Dorsal column syndrome.",
        c: "Lateral pontine syndrome.",
        d: "CORRECT: Posterior Inferior Cerebellar Artery (PICA) occlusion.",
        e: "Occipital/thalamic stroke."
      },
      highYield: "PICA occlusion = Lateral Medullary (Wallenberg) Syndrome."
    },
    {
      id: "ne-t2-m21",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q22* | Batch 19 | Final",
      stem: "All the following feature of PICA except:",
      options: {
        a: "Vertigo, nausea, nystagmus",
        b: "Horner's syndrome",
        c: "Dysphagia",
        d: "Absence of ataxia"
      },
      correct: "d",
      explanations: {
        a: "Vestibular nuclei involvement causes severe vertigo, nausea, vomiting, and nystagmus.",
        b: "Descending sympathetic tract involvement causes ipsilateral Horner's syndrome.",
        c: "Nucleus ambiguus (CN IX/X) involvement causes dysphagia, hoarseness, and absent gag reflex.",
        d: "CORRECT (EXCEPT): Inferior cerebellar peduncle involvement causes prominent IPSILATERAL ATAXIA (falling toward the side of the lesion), NOT absence of ataxia."
      },
      highYield: "PICA (Wallenberg) MUST have Ipsilateral Ataxia (Inferior cerebellar peduncle) + Vertigo + Horner's + Dysphagia + Crossed pain/temp loss."
    },
    {
      id: "ne-t2-m22",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q30 | Batch 19 | Final",
      stem: "If patient 65 years with TIA and diabetes with AF the most appropriate treatment for sec- ondary prevention of strock is.",
      options: {
        a: "Asprine",
        b: "warfarin",
        c: "Rivoroxaban",
        d: "Clopidogrel"
      },
      correct: "c",
      explanations: {
        a: "Antiplatelets (Aspirin) are vastly inferior to oral anticoagulation in AF with high CHA₂DS₂-VASc score.",
        b: "Warfarin is effective, but DOACs (like Rivaroxaban, Apixaban, Dabigatran) are now preferred first-line over Warfarin in non-valvular AF due to lower intracranial bleeding risk and no INR monitoring (unless mechanical valve or severe mitral stenosis).",
        c: "CORRECT: CHA₂DS₂-VASc score = Age 65 (1) + TIA (2) + Diabetes (1) = 4 → Oral anticoagulation is strongly indicated, and a DOAC (Rivaroxaban) is first-line for non-valvular AF.",
        d: "Clopidogrel alone is insufficient for cardioembolic stroke prevention in AF."
      },
      highYield: "Non-Valvular AF with CHA₂DS₂-VASc ≥2 (men) or ≥3 (women) → First-line = DOAC (Apixaban/Rivaroxaban). If severe renal failure (ESRD) or mechanical valve → Warfarin!"
    },
    {
      id: "ne-t2-m23",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q24 | Batch 18 | Final",
      stem: "If a renal patient after TIA has CHA2DS2-VASc score 4, the most appropriate regimen for secondary stroke prevention?",
      options: {
        a: "Aspirin",
        b: "Clopidogrel",
        c: "Warfarin",
        d: "Rivaroxaban",
        e: "Aspirin/extended-release dipyridamole combination"
      },
      correct: "c",
      explanations: {
        a: "Insufficient for AF with CHA₂DS₂-VASc score 4.",
        b: "Insufficient for AF with CHA₂DS₂-VASc score 4.",
        c: "CORRECT: Because this is a RENAL patient (severe CKD/ESRD), Warfarin (hepatically metabolized, INR-monitored) is classically preferred over renally cleared DOACs like Rivaroxaban (especially when CrCl <15–30 mL/min).",
        d: "Rivaroxaban is partially renally excreted and avoided/contraindicated in severe renal failure.",
        e: "Antiplatelet combination is not indicated for AF cardioembolic prevention."
      },
      highYield: "Notice the subtle trap between Batch 19 (normal kidney → Rivaroxaban) vs Batch 18 ('renal patient' → Warfarin)!"
    },
    {
      id: "ne-t2-m24",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q27 | Batch 18 | Final",
      stem: "The anterior choroidal artery is a branch of which of the following?",
      options: {
        a: "Middle cerebral artery",
        b: "Anterior cerebral artery",
        c: "Internal carotid artery",
        d: "Common carotid artery",
        e: "Ophthalmic artery"
      },
      correct: "c",
      explanations: {
        a: "Incorrect.",
        b: "Incorrect.",
        c: "CORRECT: The Anterior Choroidal Artery arises directly from the supraclinoid segment of the Internal Carotid Artery (ICA) (just distal to the posterior communicating artery) and supplies the posterior limb of the internal capsule, optic tract, and globus pallidus.",
        d: "Incorrect.",
        e: "Incorrect."
      },
      highYield: "Internal Carotid Artery (ICA) branches: Ophthalmic → Posterior Communicating → Anterior Choroidal → bifurcates into ACA & MCA."
    }
  ]
});
// ==========================================
// NEUROLOGY - TOPIC 3: DEMYELINATING DISEASES (MS & GBS)
// ==========================================
window.IM_DATA.neurology.push({
  title: "Demyelinating Diseases (Multiple Sclerosis & Guillain-Barré Syndrome)",
  shortTitle: "MS & GBS",
  essays: [
    {
      id: "ne-t3-e1",
      type: "essay",
      batch: 23,
      exam: "Final",
      source: "Short Note Q1 | Batch 23 | Final",
      stem: "1- When to suspect Multiple sclerosis ?(6marks)",
      modelAnswer: `
        <h4>1. Typical Patient Demographics &amp; Temporal Pattern</h4>
        <ul>
          <li><strong>Young Adult Female:</strong> Classic onset between <strong>20–40 years</strong> (F:M ratio ~3:1).</li>
          <li><strong>Relapsing-Remitting Course (Dissemination in Time &amp; Space):</strong> Subacute neurological deficits developing over hours to days, lasting &gt;24 hours, followed by partial or complete recovery, with recurrent episodes affecting <em>different anatomical sites</em> of the CNS.</li>
        </ul>
        <h4>2. Classic Clinical Presentations (Clinically Isolated Syndromes)</h4>
        <ul>
          <li><strong>Optic Neuritis:</strong> Subacute unilateral vision loss, pain on eye movement, impaired color vision (dyschromatopsia), central scotoma, and Relative Afferent Pupillary Defect (RAPD).</li>
          <li><strong>Brainstem / Cerebellar Syndromes:</strong> <strong>Internuclear Ophthalmoplegia (INO)</strong> (especially bilateral in a young adult — virtually pathognomonic!), diplopia, vertigo, ataxia, intention tremor, and scanning dysarthria (Charcot's neurological triad).</li>
          <li><strong>Spinal Cord (Partial Transverse Myelitis):</strong> Asymmetric limb weakness/spasticity, sensory level, paresthesias, bowel/bladder urgency or incontinence, and <strong>Lhermitte's sign</strong> (electric shock-like sensation down the spine on neck flexion).</li>
        </ul>
        <h4>3. Characteristic Pathognomonic Phenomena</h4>
        <ul>
          <li><strong>Uhthoff's Phenomenon:</strong> Transient worsening of neurological symptoms with heat (hot shower, fever, exercise).</li>
          <li><strong>Trigeminal Neuralgia in a Young Patient (&lt;40 years):</strong> Especially if bilateral, strongly raises suspicion for MS.</li>
          <li>Unexplained fatigue, cognitive slowing, or depression accompanying focal CNS signs.</li>
        </ul>
      `
    },
    {
      id: "ne-t3-e2",
      type: "essay",
      batch: 22,
      exam: "Final",
      source: "Short Essay Q6 | Batch 22 | Final",
      stem: "6: Disease-modifying MS therapy (6 Marks)",
      modelAnswer: `
        <h4>Goal of Disease-Modifying Therapies (DMTs)</h4>
        <ul>
          <li>Reduce relapse frequency and severity, decrease new MRI lesion accumulation, and slow long-term disability progression (primarily indicated in Relapsing-Remitting MS [RRMS]).</li>
        </ul>
        <h4>1. Injectable Therapies (First-Line / Moderate Efficacy)</h4>
        <ul>
          <li><strong>Interferon-β (IFN-β1a, IFN-β1b):</strong> Reduces relapse rate by ~30%. Side effects: flu-like symptoms, injection-site reactions, elevated LFTs, depression.</li>
          <li><strong>Glatiramer Acetate:</strong> Synthetic myelin basic protein analogue; <strong>safest DMT in pregnancy</strong>. Side effects: injection-site lipoatrophy, transient chest tightness/flushing.</li>
        </ul>
        <h4>2. Oral Therapies</h4>
        <ul>
          <li><strong>Fingolimod / Siponimod (S1P receptor modulators):</strong> Traps lymphocytes in lymph nodes. Side effects: first-dose bradycardia/AV block, macular edema, herpes reactivation, PML.</li>
          <li><strong>Dimethyl Fumarate:</strong> Activates Nrf2 antioxidant pathway. Side effects: flushing, GI upset, lymphopenia, rare PML.</li>
          <li><strong>Teriflunomide:</strong> Dihydroorotate dehydrogenase inhibitor. Side effects: hepatotoxicity, alopecia, <strong>teratogenic</strong>.</li>
          <li><strong>Cladribine:</strong> Purine analogue causing pulsed lymphocyte depletion.</li>
        </ul>
        <h4>3. High-Efficacy Infusion Monoclonal Antibodies</h4>
        <ul>
          <li><strong>Natalizumab (Anti-α4-integrin):</strong> Blocks leukocyte migration across the blood-brain barrier. Major risk: <strong>Progressive Multifocal Leukoencephalopathy (PML)</strong> due to JC virus reactivation.</li>
          <li><strong>Ocrelizumab &amp; Ofatumumab (Anti-CD20 B-cell depleting):</strong> High efficacy in RRMS; <strong>Ocrelizumab is the ONLY approved DMT for Primary Progressive MS (PPMS)</strong>.</li>
          <li><strong>Alemtuzumab (Anti-CD52):</strong> Profound lymphocyte depletion; risk of secondary autoimmune diseases (thyroiditis, ITP).</li>
        </ul>
      `
    },
    {
      id: "ne-t3-e3",
      type: "essay",
      batch: 20,
      exam: "Final",
      source: "Essay Q5 | Batch 20 | Final",
      stem: "5- Drugs for modification of MS (Multiple Sclerosis)? (6 marks)",
      modelAnswer: `
        <h4>1. First-Line Injectables</h4>
        <ul>
          <li><strong>Interferon-beta (IFN-β1a / IFN-β1b):</strong> Immunomodulator reducing T-cell activation and BBB permeability.</li>
          <li><strong>Glatiramer Acetate:</strong> Shifts immune response from Th1 to Th2; safest option during pregnancy.</li>
        </ul>
        <h4>2. Oral Disease-Modifying Drugs</h4>
        <ul>
          <li><strong>Fingolimod</strong> (Sphingosine-1-phosphate receptor modulator — requires cardiac monitoring on first dose).</li>
          <li><strong>Dimethyl Fumarate</strong> (Nrf2 pathway activator — flushing/GI side effects).</li>
          <li><strong>Teriflunomide</strong> (Pyrimidine synthesis inhibitor — hepatotoxic/teratogenic).</li>
          <li><strong>Cladribine</strong> (Selective lymphocyte depletion).</li>
        </ul>
        <h4>3. High-Efficacy Monoclonal Antibodies (IV/SC)</h4>
        <ul>
          <li><strong>Natalizumab (Anti-α4-integrin):</strong> High efficacy; monitor JC virus antibody status due to PML risk.</li>
          <li><strong>Ocrelizumab (Anti-CD20):</strong> Effective in both Relapsing-Remitting MS (RRMS) and Primary Progressive MS (PPMS).</li>
          <li><strong>Alemtuzumab (Anti-CD52):</strong> Reserved for highly active RRMS.</li>
          <li><strong>Mitoxantrone:</strong> Cytotoxic immunosuppressant (rarely used now due to cardiotoxicity and leukemia risk).</li>
        </ul>
        <h4>Note on Acute Relapses (Not DMTs)</h4>
        <ul>
          <li>Acute relapses are treated with high-dose <strong>IV Methylprednisolone</strong> (1 g/day for 3–5 days), which speeds recovery but does not alter long-term disease progression.</li>
        </ul>
      `
    }
  ],
  mcqs: [
    {
      id: "ne-t3-m1",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q20 | Batch 24 | Final",
      stem: "A 28-year-old female presents with subacute unilateral vision loss, pain on eye movement, impaired color vision (dyschromatopsia), and a relative afferent pupillary defect (RAPD). What is the most likely diagnosis?",
      options: {
        a: "Optic neuritis",
        b: "Central retinal artery occlusion",
        c: "Internuclear ophthalmoplegia",
        d: "Oculomotor nerve palsy"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Subacute unilateral vision loss + pain on eye movement + red desaturation (dyschromatopsia) + RAPD in a young woman is the classic presentation of Optic Neuritis (often the first manifestation of Multiple Sclerosis).",
        b: "CRAO presents with sudden, PAINLESS monocular vision loss and a 'cherry-red spot' on fundoscopy in older vascular patients.",
        c: "INO (MLF lesion) presents with diplopia and impaired adduction of the ipsilateral eye with nystagmus of the abducting eye — not vision loss or RAPD.",
        d: "CN III palsy causes ptosis, mydriasis, and 'down and out' eye — not optic nerve vision loss."
      },
      highYield: "Optic Neuritis = Young female + Painful eye movement + Unilateral vision loss + Dyschromatopsia + RAPD → Treat with IV Methylprednisolone (avoid oral prednisone alone as it increases relapse risk!)."
    },
    {
      id: "ne-t3-m2",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q21 | Batch 24 | Final",
      stem: "The McDonald criteria for the diagnosis of Multiple Sclerosis (MS) require objective evidence of central nervous system lesions showing dissemination in space (place) and dissemination in:",
      options: {
        a: "Time",
        b: "Position",
        c: "Severity",
        d: "Peripheral nerves"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: The McDonald criteria require CNS demyelinating lesions demonstrating Dissemination in SPACE (DIS — ≥2 distinct CNS regions) and Dissemination in TIME (DIT — lesions of different ages on MRI, clinical relapses, or CSF oligoclonal bands).",
        b: "Incorrect.",
        c: "Incorrect.",
        d: "MS exclusively affects the CENTRAL nervous system (oligodendrocytes), sparing peripheral nerves (Schwann cells)."
      },
      highYield: "McDonald Criteria = Dissemination in SPACE (Periventricular, Juxtacortical, Infratentorial, Spinal cord) + Dissemination in TIME (Enhancing + Non-enhancing MRI lesions, or CSF Oligoclonal Bands)."
    },
    {
      id: "ne-t3-m3",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q23 | Batch 24 | Final",
      stem: "A patient presents with rapidly progressive ascending symmetrical weakness and areflexia (Guillain-Barré syndrome). Which of the following is the most critical bedside monitoring test to ensure immediate patient safety?",
      options: {
        a: "Regular measurement of Forced Vital Capacity (FVC)",
        b: "Recurrent Nerve Conduction Studies (NCS)",
        c: "Serial lumbar punctures",
        d: "Brain MRI"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: The most life-threatening acute complication of GBS is neuromuscular respiratory failure (diaphragmatic paralysis). Serial bedside Forced Vital Capacity (FVC) monitoring (every 4–6 hours) is essential — intubate if FVC <15–20 mL/kg (or <1.5 L)!",
        b: "NCS confirms demyelinating polyneuropathy but is not used for acute bedside safety monitoring.",
        c: "LP shows albuminocytologic dissociation (often normal in week 1) and is not repeated for monitoring.",
        d: "Brain MRI is normal in GBS (peripheral nerve disorder)."
      },
      highYield: "GBS Immediate Safety = Serial Forced Vital Capacity (FVC) + Cardiac telemetry (autonomic dysfunction/arrhythmias). Treatment = IVIG or Plasmapheresis (NEVER Steroids!)."
    },
    {
      id: "ne-t3-m4",
      type: "mcq",
      batch: 23,
      exam: "Midterm",
      source: "Q11 | Batch 23 | Midterm",
      stem: "Which of the following is least likely to occur in MS?",
      options: {
        a: "Depression",
        b: "Vitamin D deficiency",
        c: "Sexual dysfunction",
        d: "Seizures"
      },
      correct: "d",
      explanations: {
        a: "Depression is extremely common in MS (lifetime prevalence ~50%).",
        b: "Vitamin D deficiency is a well-established environmental risk factor and very common in MS patients.",
        c: "Sexual dysfunction (along with bladder/bowel dysfunction) is very common due to spinal cord involvement.",
        d: "CORRECT (Least likely): Seizures are uncommon in MS (occur in only ~2–3% of patients) because MS is primarily a white-matter disease rather than a cortical gray-matter disease."
      },
      highYield: "Common in MS: Depression, Fatigue, Vitamin D deficiency, Sexual/bladder dysfunction. Rare in MS: Seizures, Aphasia, Peripheral neuropathy."
    },
    {
      id: "ne-t3-m5",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q26 | Batch 23 | Final",
      stem: "Incorrect about guillian barre syndrome (GBS):",
      options: {
        a: "It is an immune-mediated polyneuropathy",
        b: "EMG is the diagnostic tool",
        c: "Immunosuppressants are needed if the first therapy failed",
        d: "It can follow a preceding infection 2 weeks"
      },
      correct: "c",
      explanations: {
        a: "True: GBS is an acute immune-mediated demyelinating (or axonal) polyradiculoneuropathy.",
        b: "True: Nerve conduction studies / EMG confirm the diagnosis (prolonged F-waves, slowed conduction velocity, conduction block).",
        c: "CORRECT (INCORRECT statement): Corticosteroids and conventional immunosuppressants have NO proven benefit in GBS and are NOT recommended! First-line therapies are IVIG or Plasma Exchange (Plasmapheresis).",
        d: "True: ~2/3 of cases follow a GI (Campylobacter jejuni — #1) or URI infection 1–3 weeks prior."
      },
      highYield: "GBS Treatment Trap: IVIG or Plasmapheresis ONLY. Corticosteroids / Immunosuppressants DO NOT WORK in GBS (unlike CIDP where steroids work!)."
    },
    {
      id: "ne-t3-m6",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q23 | Batch 22 | Final",
      stem: "All the following are the common presentation of multiple sclerosis except:-",
      options: {
        a: "Optic neuritis.",
        b: "Tremor",
        c: "Brain stem syndrome.",
        d: "Cerebellar syndrome."
      },
      correct: "b",
      explanations: {
        a: "Optic neuritis is one of the most common initial presentations of MS.",
        b: "CORRECT (EXCEPT): Isolated tremor is NOT a common initial/classic standalone presentation of MS (unlike optic neuritis, transverse myelitis, brainstem syndrome, or cerebellar ataxia).",
        c: "Brainstem syndromes (INO, diplopia, vertigo) are classic common presentations.",
        d: "Cerebellar syndrome (ataxia, dysarthria) is a classic presentation."
      },
      highYield: "Top 4 Classic MS Presentations: 1) Optic neuritis, 2) Transverse myelitis (spinal cord), 3) Brainstem syndrome (INO), 4) Cerebellar syndrome."
    },
    {
      id: "ne-t3-m7",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q28 | Batch 22 | Final",
      stem: "All the following are true regarding Guillain-Barre - syndrome except:",
      options: {
        a: "Is the most common autoimmune inflammatory polyneuropathy",
        b: "Is a demyelinating polyneuropathy.",
        c: "Axonal variants polyneuropathy most commonly occur.",
        d: "Acute axonal variants are commonly associated with Preceding campylobacter jejune."
      },
      correct: "c",
      explanations: {
        a: "True: GBS is the most common acute autoimmune inflammatory polyneuropathy worldwide.",
        b: "True: Acute Inflammatory Demyelinating Polyneuropathy (AIDP) is the classic and most common form (~85–90% in Western countries).",
        c: "CORRECT (EXCEPT): Demyelinating (AIDP) is the most common variant, NOT axonal variants (AMAN/AMSAN are less common overall, though more severe).",
        d: "True: Acute Motor Axonal Neuropathy (AMAN) is strongly associated with preceding Campylobacter jejuni infection (anti-GM1 ganglioside antibodies)."
      },
      highYield: "GBS Variants: AIDP (Demyelinating) = Most common. AMAN (Axonal) = Linked to Campylobacter jejuni & poorer recovery. Miller Fisher Syndrome = Ophthalmoplegia + Ataxia + Areflexia (Anti-GQ1b Ab)."
    },
    {
      id: "ne-t3-m8",
      type: "mcq",
      batch: 21,
      exam: "Midterm",
      source: "Q10 | Batch 21 | Midterm",
      stem: "Which one of the following drugs is used for treatment of multiple sclerosis?",
      options: {
        a: "Gamma interferon",
        b: "Beta interferon",
        c: "Riluzole",
        d: "Alpha interferon",
        e: "Infliximab"
      },
      correct: "b",
      explanations: {
        a: "Interferon-gamma (pro-inflammatory Th1 cytokine) actually WORSENS MS relapses and is contraindicated!",
        b: "CORRECT: Interferon-beta (IFN-β1a / IFN-β1b) is a standard first-line Disease-Modifying Therapy (DMT) for Relapsing-Remitting MS.",
        c: "Riluzole is used for Amyotrophic Lateral Sclerosis (ALS).",
        d: "Interferon-alpha is used for viral hepatitis (HBV/HCV) and certain malignancies (CML, hairy cell leukemia).",
        e: "Infliximab (Anti-TNF) is CONTRAINDICATED in MS because TNF-α blockers can trigger or worsen CNS demyelination!"
      },
      highYield: "MS Drug Traps: Use Interferon-BETA! NEVER use Interferon-Gamma or Anti-TNF agents (Infliximab/Adalimumab) in MS."
    },
    {
      id: "ne-t3-m9",
      type: "mcq",
      batch: 20,
      exam: "Midterm",
      source: "Q16 | Batch 20 | Midterm",
      stem: "Which of the following is least associated with relapse of MS:",
      options: {
        a: "Fever",
        b: "Exercise",
        c: "Pregnancy",
        d: "Urinary tract infection"
      },
      correct: "c",
      explanations: {
        a: "Fever triggers pseudo-relapses (Uhthoff's phenomenon) and infections can trigger true relapses.",
        b: "Exercise raises core body temperature, transiently worsening MS symptoms (Uhthoff's phenomenon).",
        c: "CORRECT (Least associated): Pregnancy is actually PROTECTIVE against MS relapses (relapse rate drops by ~70% during the 3rd trimester due to immune tolerance), though relapse risk rebounds in the first 3 months POSTPARTUM.",
        d: "Infections such as UTI are a major trigger for MS relapses and pseudo-relapses."
      },
      highYield: "Pregnancy DECREASES MS relapse rate (especially 3rd trimester), while the Postpartum period (first 3 months) INCREASES relapse risk!"
    },
    {
      id: "ne-t3-m10",
      type: "mcq",
      batch: 20,
      exam: "Midterm",
      source: "Q17 | Batch 20 | Midterm",
      stem: "Which of the following drugs is safest during pregnancy in MS:",
      options: {
        a: "Fingolimod",
        b: "Glatiramer acetate",
        c: "Cladribine",
        d: "Natalizumab"
      },
      correct: "b",
      explanations: {
        a: "Fingolimod is teratogenic (congenital heart defects) and must be stopped ≥2 months before conception.",
        b: "CORRECT: Glatiramer Acetate (Category B / large polypeptide that does not cross the placenta) is the safest DMT for use during pregnancy in MS.",
        c: "Cladribine is teratogenic and strictly contraindicated in pregnancy.",
        d: "Natalizumab crosses the placenta in the 2nd/3rd trimester and can cause fetal hematologic abnormalities (anemia/thrombocytopenia)."
      },
      highYield: "Safest DMT in Pregnancy for MS = Glatiramer Acetate (and Interferon-β is also relatively safe)."
    },
    {
      id: "ne-t3-m11",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q23 | Batch 18 | Final",
      stem: "Which one of the following drugs/tests is not used for diagnosis of multiple sclerosis?",
      options: {
        a: "MRI",
        b: "Lumbar puncture",
        c: "Evoked potentials",
        d: "Blood studies",
        e: "Nerve biopsy"
      },
      correct: "e",
      explanations: {
        a: "Brain & Spine MRI with gadolinium is the gold-standard diagnostic test for MS (Dawson's fingers, periventricular plaques).",
        b: "Lumbar puncture detects CSF oligoclonal IgG bands (present in >90% of MS patients).",
        c: "Visual/Somatosensory Evoked Potentials (VEP/SSEP) detect subclinical demyelination (delayed P100 latency).",
        d: "Blood studies (B12, ANA, NMO-IgG/AQP4, syphilis, HIV) are essential to exclude MS mimics.",
        e: "CORRECT (NOT used): Peripheral Nerve Biopsy is NOT used because MS is strictly a CENTRAL nervous system disease — peripheral nerves are completely normal."
      },
      highYield: "MS Diagnostic Workup: MRI Brain/Spine (Gold standard) + LP (Oligoclonal bands) + Evoked Potentials (VEP) + Blood tests to rule out mimics. NEVER Nerve Biopsy!"
    }
  ]
});
// ==========================================
// NEUROLOGY - TOPIC 4: EPILEPSY, SEIZURES & AEDs
// ==========================================
window.IM_DATA.neurology.push({
  title: "Epilepsy, Seizures & Antiepileptic Drugs (AEDs)",
  shortTitle: "Epilepsy & AEDs",
  essays: [
    {
      id: "ne-t4-e1",
      type: "essay",
      batch: 21,
      exam: "Final",
      source: "Short Essay Q3 | Batch 21 | Final",
      stem: "3. Non- pharmacological approach in treatment of epilepsy. (8 mark)",
      modelAnswer: `
        <h4>1. Lifestyle Modifications &amp; Trigger Avoidance</h4>
        <ul>
          <li><strong>Sleep Hygiene:</strong> Maintain regular sleep schedules and strictly avoid sleep deprivation (one of the strongest seizure triggers).</li>
          <li><strong>Avoid Precipitants:</strong> Avoid excessive alcohol/binge drinking, illicit drugs, flashing/strobe lights (in photosensitive epilepsy), and uncontrolled stress.</li>
          <li><strong>Medication Adherence &amp; Education:</strong> Counsel on never abruptly stopping AEDs (risk of status epilepticus) and keeping a seizure diary.</li>
        </ul>
        <h4>2. Safety &amp; Driving Counseling</h4>
        <ul>
          <li><strong>Water &amp; Height Safety:</strong> Showers instead of baths, never swim alone, avoid working at heights or operating dangerous unguarded machinery.</li>
          <li><strong>Driving Restrictions:</strong> Follow legal seizure-free driving restrictions (typically 6–12 months seizure-free before resuming driving).</li>
          <li><strong>Pre-conception Counseling (Women):</strong> Folic acid supplementation (4–5 mg/day) and avoiding teratogenic AEDs (especially Valproate).</li>
        </ul>
        <h4>3. Dietary Therapy (For Drug-Resistant / Refractory Epilepsy)</h4>
        <ul>
          <li><strong>Ketogenic Diet:</strong> High-fat, adequate-protein, very-low-carbohydrate diet (generates ketone bodies that stabilize neuronal membranes; especially effective in pediatric refractory epilepsy and GLUT1 deficiency).</li>
          <li><strong>Modified Atkins Diet (MAD):</strong> Less restrictive alternative for adolescents and adults.</li>
        </ul>
        <h4>4. Epilepsy Surgery (For Drug-Resistant Focal Epilepsy)</h4>
        <ul>
          <li><strong>Resective Surgery:</strong> Anterior temporal lobectomy / amygdalohippocampectomy (for mesial temporal sclerosis — 60–80% seizure-free rate) or lesionectomy (tumors, cavernous malformations, focal cortical dysplasia).</li>
          <li><strong>Palliative / Disconnective Surgery:</strong> Corpus callosotomy (for refractory atonic "drop" attacks) or hemispherectomy (severe unilateral hemispheric pathology in children).</li>
        </ul>
        <h4>5. Neurostimulation Devices (When Surgery Is Not Feasible)</h4>
        <ul>
          <li><strong>Vagus Nerve Stimulation (VNS):</strong> Implanted generator stimulating the left vagus nerve to reduce seizure frequency and severity.</li>
          <li><strong>Responsive Neurostimulation (RNS) &amp; Deep Brain Stimulation (DBS):</strong> Targeted cortical or anterior thalamic stimulation for refractory focal epilepsy.</li>
        </ul>
      `
    },
    {
      id: "ne-t4-e2",
      type: "essay",
      batch: 20,
      exam: "Final",
      source: "Essay Q2 | Batch 20 | Final",
      stem: "2- Five mimics of seizures and discuss briefly one of them? (8 marks)",
      modelAnswer: `
        <h4>1. Five Important Mimics of Seizures</h4>
        <ul>
          <li><strong>1. Syncope</strong> (Vasovagal, orthostatic, or cardiogenic — including convulsive syncope).</li>
          <li><strong>2. Psychogenic Non-Epileptic Seizures (PNES / Functional Seizures).</strong></li>
          <li><strong>3. Transient Ischemic Attack (TIA)</strong> (especially limb-shaking TIA).</li>
          <li><strong>4. Migraine with Aura</strong> (visual/sensory aura, hemiplegic or basilar migraine).</li>
          <li><strong>5. Metabolic &amp; Sleep Disorders:</strong> Hypoglycemia, Panic attacks / hyperventilation, Narcolepsy/cataplexy, and Parasomnias (REM sleep behavior disorder, night terrors).</li>
        </ul>
        <h4>2. Brief Discussion of One Mimic: Syncope</h4>
        <ul>
          <li><strong>Definition &amp; Pathophysiology:</strong> Transient, self-limited loss of consciousness and postural tone caused by global cerebral hypoperfusion (e.g., vasovagal reflex, orthostatic hypotension, or cardiac arrhythmia).</li>
          <li><strong>Clinical Features Differentiating Syncope from Seizure:</strong>
            <ul>
              <li><em>Triggers:</em> Prolonged standing, heat, pain, emotional stress, or exertion (cardiac).</li>
              <li><em>Prodrome:</em> Lightheadedness, tunnel vision, pallor, diaphoresis, nausea (rather than an olfactory/epigastric epileptic aura).</li>
              <li><em>Motor Activity:</em> Usually brief (&lt;15–30 seconds); may have a few brief multifocal myoclonic jerks ("convulsive syncope"), but lacks sustained rhythmic tonic-clonic activity.</li>
              <li><em>Recovery:</em> <strong>Rapid, immediate orientation</strong> upon lying flat (NO prolonged post-ictal confusion, NO lateral tongue biting, and rarely urinary incontinence).</li>
            </ul>
          </li>
        </ul>
      `
    },
    {
      id: "ne-t4-e3",
      type: "essay",
      batch: 18,
      exam: "Final",
      source: "Short Essay Q5 | Batch 18 | Final",
      stem: "5- Epilepsy emergencies. (5 M)",
      modelAnswer: `
        <h4>1. Main Epilepsy Emergencies</h4>
        <ul>
          <li><strong>Convulsive Status Epilepticus (SE):</strong> Continuous generalized tonic-clonic seizure lasting <strong>&gt;5 minutes</strong>, OR ≥2 recurrent seizures without full recovery of consciousness between them.</li>
          <li><strong>Non-Convulsive Status Epilepticus (NCSE):</strong> Prolonged altered mental status/confusion with continuous electrographic seizure activity on EEG without prominent motor convulsions.</li>
          <li><strong>Acute Repetitive (Cluster) Seizures:</strong> Multiple closely spaced seizures with recovery in between, carrying high risk of progressing to SE.</li>
          <li><strong>SUDEP (Sudden Unexpected Death in Epilepsy):</strong> Sudden, non-traumatic, non-drowning death in an epilepsy patient, often nocturnal and post-ictal.</li>
        </ul>
        <h4>2. Emergency Management of Status Epilepticus</h4>
        <ul>
          <li><strong>0–5 min (Stabilization — ABCs):</strong> Protect airway, give high-flow O₂, IV access, check <strong>fingerstick blood glucose</strong> immediately (give IV Thiamine 100 mg + 50% Dextrose if hypoglycemic), draw labs (electrolytes, Ca²⁺, Mg²⁺, AED levels, toxicology).</li>
          <li><strong>5–20 min (First-Line — Benzodiazepines):</strong> <strong>IV Lorazepam</strong> (0.1 mg/kg, max 4 mg; may repeat once) OR <strong>IM Midazolam</strong> (10 mg if no IV access) OR IV/rectal Diazepam.</li>
          <li><strong>20–40 min (Second-Line — IV Antiepileptics):</strong> IV <strong>Levetiracetam</strong>, IV <strong>Fosphenytoin/Phenytoin</strong>, OR IV <strong>Valproate</strong> (load full dose).</li>
          <li><strong>&gt;40 min (Third-Line — Refractory SE in ICU):</strong> Endotracheal intubation + continuous IV anesthetic infusion (<strong>Midazolam</strong>, <strong>Propofol</strong>, or <strong>Pentobarbital</strong>) with continuous EEG monitoring.</li>
        </ul>
      `
    }
  ],
  mcqs: [
    {
      id: "ne-t4-m1",
      type: "mcq",
      batch: 24,
      exam: "Midterm",
      source: "Q8 | Batch 24 | Midterm",
      stem: "The first-line treatment for focal onset epilepsy in elderly patients is:",
      options: {
        a: "Carbamazepine",
        b: "Levetiracetam / Lamotrigine",
        c: "Phenytoin / Topiramate",
        d: "Sodium valproate"
      },
      correct: "b",
      explanations: {
        a: "Carbamazepine causes hyponatremia (SIADH), ataxia, osteoporosis, and major CYP450 drug-drug interactions in the elderly.",
        b: "CORRECT: Levetiracetam and Lamotrigine are the preferred first-line drugs for focal-onset epilepsy in elderly patients due to minimal drug interactions, excellent tolerability, and low risk of cognitive/metabolic side effects.",
        c: "Phenytoin has zero-order kinetics, high toxicity, and drug interactions; Topiramate causes cognitive slowing and kidney stones.",
        d: "Valproate is a broad-spectrum drug for generalized epilepsy and causes tremor/parkinsonism in the elderly."
      },
      highYield: "Focal Epilepsy in Elderly → Levetiracetam or Lamotrigine (avoid enzyme-inducing AEDs like Phenytoin & Carbamazepine due to polypharmacy and osteoporosis)."
    },
    {
      id: "ne-t4-m2",
      type: "mcq",
      batch: 24,
      exam: "Midterm",
      source: "Q11 | Batch 24 | Midterm",
      stem: "Symptomatic epilepsy refers to seizures that are:",
      options: {
        a: "Unprovoked with an identified structural/metabolic cause",
        b: "Provoked",
        c: "Genetic (Idiopathic)",
        d: "None of the above"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Symptomatic (structural/metabolic) epilepsy refers to recurrent UNPROVOKED seizures secondary to an identified underlying CNS lesion or pathology (e.g., old stroke, brain tumor, mesial temporal sclerosis, prior trauma).",
        b: "Provoked seizures (acute symptomatic seizures, e.g., hypoglycemia, alcohol withdrawal) are NOT epilepsy.",
        c: "Genetic (Idiopathic) epilepsy has a presumed genetic basis with normal brain imaging.",
        d: "Incorrect."
      },
      highYield: "Epilepsy = ≥2 UNPROVOKED seizures >24h apart. Symptomatic epilepsy = Unprovoked seizures with a known structural/metabolic lesion."
    },
    {
      id: "ne-t4-m3",
      type: "mcq",
      batch: 24,
      exam: "Midterm",
      source: "Q15 | Batch 24 | Midterm",
      stem: "Regarding Benign Childhood Epilepsy with Centrotemporal Spikes (BECTS), the FALSE statement is (all except):",
      options: {
        a: "Represents 15-20% (10-15%) of childhood epilepsy",
        b: "Mean onset is between 7-9 years",
        c: "Most common seizure is generalized motor seizure with Jacksonian march",
        d: "Seizures are more common at sleep (at night)"
      },
      correct: "c",
      explanations: {
        a: "True: BECTS (Benign Rolandic Epilepsy) accounts for ~15% of all childhood epilepsies.",
        b: "True: Peak/mean age of onset is 7–9 years (range 3–13 years) and almost always remits spontaneously by puberty.",
        c: "CORRECT (FALSE statement): The classic seizure in BECTS is a FOCAL aware sensorimotor seizure involving the FACE/OROPHARYNX (unilateral facial twitching, drooling, speech arrest/guttural sounds), NOT a generalized motor seizure with Jacksonian march.",
        d: "True: ~75–80% of seizures occur during sleep (especially shortly after falling asleep or before waking)."
      },
      highYield: "BECTS (Benign Rolandic Epilepsy) = Child 7–9 yrs + Nocturnal focal facial/oropharyngeal twitching & drooling + Centrotemporal spikes on EEG + Spontaneously resolves by adolescence."
    },
    {
      id: "ne-t4-m4",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q25 | Batch 23 | Final",
      stem: "Regarding the mechanism of action of antiepileptic drugs, which of the following is a FALSE pair?",
      options: {
        a: "Topiramate - Unknown mechanism",
        b: "Phenytoin - Sodium channel blocker",
        c: "Ethosuximide - T-type Calcium channel blocker",
        d: "Vigabatrin – GABA transaminase inhibitor"
      },
      correct: "a",
      explanations: {
        a: "CORRECT (FALSE pair): Topiramate has well-known MULTIPLE mechanisms of action (blocks voltage-gated Na⁺ channels, enhances GABA-A receptors, and antagonizes AMPA/kainate glutamate receptors + weak carbonic anhydrase inhibition). (Levetiracetam binds SV2A).",
        b: "True: Phenytoin (and Carbamazepine, Lamotrigine) blocks voltage-gated Na⁺ channels.",
        c: "True: Ethosuximide blocks thalamic T-type Ca²⁺ channels (1st-line for Absence seizures).",
        d: "True: Vigabatrin irreversibly inhibits GABA transaminase (increases synaptic GABA; side effect = irreversible visual field constriction)."
      },
      highYield: "AED Mechanisms: Na⁺ blockers = Phenytoin, Carbamazepine, Lamotrigine. T-type Ca²⁺ = Ethosuximide. GABA transaminase inhibitor = Vigabatrin. SV2A = Levetiracetam. Multiple (Na⁺ + GABA + Glutamate) = Topiramate & Valproate."
    },
    {
      id: "ne-t4-m5",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q29 | Batch 23 | Final",
      stem: "All of the following are recognized direct causes of seizures EXCEPT:",
      options: {
        a: "Pulmonary embolism",
        b: "Hypoglycemia",
        c: "Hyponatremia",
        d: "Meningoencephalitis / Brain tumor"
      },
      correct: "a",
      explanations: {
        a: "CORRECT (EXCEPT): Pulmonary embolism causes dyspnea, chest pain, hypoxia, and syncope, NOT a direct metabolic/structural cause of seizures.",
        b: "Hypoglycemia is a classic, rapidly reversible acute metabolic cause of seizures.",
        c: "Severe hyponatremia (Na⁺ <120 mEq/L) causes cerebral edema and generalized seizures.",
        d: "CNS infections (meningoencephalitis) and brain tumors are major structural causes of seizures."
      },
      highYield: "Always check Glucose & Sodium (Na⁺) immediately in any patient with a new-onset seizure!"
    },
    {
      id: "ne-t4-m6",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q30 | Batch 23 | Final",
      stem: "Which of the following is the first-line drug of choice for focal seizures?",
      options: {
        a: "Lamotrigine",
        b: "Ethosuximide",
        c: "Phenobarbitone",
        d: "Diazepam"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Lamotrigine (along with Levetiracetam and Carbamazepine) is a first-line drug of choice for focal-onset seizures.",
        b: "Ethosuximide is ONLY effective for Absence seizures (has zero efficacy in focal or tonic-clonic seizures).",
        c: "Phenobarbitone is an older, sedating second/third-line agent.",
        d: "Diazepam is used acutely for status epilepticus, not chronic maintenance."
      },
      highYield: "1st-line Focal Seizures = Lamotrigine, Levetiracetam, Carbamazepine. 1st-line Absence = Ethosuximide. 1st-line Generalized Tonic-Clonic / JME = Valproate (avoid in women of childbearing age → use Levetiracetam/Lamotrigine)."
    },
    {
      id: "ne-t4-m7",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q22 | Batch 22 | Final",
      stem: "All the following are indication for brain imaging in epilepsy except:-",
      options: {
        a: "Epilepsy starting after the age of 16 years.",
        b: "Seizers having focal features clinically.",
        c: "Electroencepharogram showing normal pattern.",
        d: "Control of seizures difficult or deteriorating."
      },
      correct: "c",
      explanations: {
        a: "True (Davidson's): Adult-onset epilepsy (starting after age 16–20) requires brain MRI to exclude structural lesions (tumors, stroke, AVM).",
        b: "True: Focal seizure semiology suggests a focal structural lesion → MRI indicated.",
        c: "CORRECT (EXCEPT): A normal interictal EEG is very common (~50% of epilepsy patients) and is NOT an indication for brain imaging (conversely, an EEG showing a FOCAL slow-wave abnormality IS an indication for imaging).",
        d: "True: Refractory or worsening seizure control is a clear indication for brain imaging."
      },
      highYield: "Davidson's Indications for Brain MRI in Epilepsy: Onset >16–20 yrs, Focal features on history/exam/EEG, Failure to respond to first-line AEDs, or Deteriorating seizure control."
    },
    {
      id: "ne-t4-m8",
      type: "mcq",
      batch: 20,
      exam: "Midterm",
      source: "Q11 | Batch 20 | Midterm",
      stem: "The drug that causes Polycystic ovary syndrome and fatal hemorrhagic pancreatitis is:",
      options: {
        a: "Phenobarbitone",
        b: "Valproic acid",
        c: "Phenytoin",
        d: "Oxcarbazepine"
      },
      correct: "b",
      explanations: {
        a: "Phenobarbitone causes sedation, cognitive impairment, and CYP450 induction.",
        b: "CORRECT: Valproic acid (Sodium Valproate) classically causes weight gain, Polycystic Ovary Syndrome (PCOS), alopecia, tremor, thrombocytopenia, hepatotoxicity, neural tube defects (spina bifida), and fatal hemorrhagic pancreatitis.",
        c: "Phenytoin causes gingival hyperplasia, hirsutism, cerebellar ataxia, and Stevens-Johnson syndrome.",
        d: "Oxcarbazepine classically causes hyponatremia (SIADH)."
      },
      highYield: "Valproate Side Effects: Weight gain, PCOS, Hair loss, Tremor, Thrombocytopenia, Hepatotoxicity, Fatal Pancreatitis, and Teratogenicity (Neural Tube Defects)."
    },
    {
      id: "ne-t4-m9",
      type: "mcq",
      batch: 20,
      exam: "Midterm",
      source: "Q15 | Batch 20 | Midterm",
      stem: "Most focal seizures in adults arise from which area?",
      options: {
        a: "Frontal lobe",
        b: "Temporal lobe",
        c: "Parietal lobe",
        d: "Occipital lobe"
      },
      correct: "b",
      explanations: {
        a: "Frontal lobe is the 2nd most common site (brief, nocturnal, hypermotor seizures with minimal post-ictal confusion).",
        b: "CORRECT: The Temporal lobe (~60–70% of focal epilepsies in adults, most commonly due to mesial temporal/hippocampal sclerosis) is the #1 site of origin for focal seizures (epigastric rising aura, déjà vu, lip-smacking automatisms).",
        c: "Parietal lobe focal seizures are uncommon (somatosensory aura).",
        d: "Occipital lobe focal seizures are rare (elementary visual hallucinations)."
      },
      highYield: "Most common focal epilepsy in adults = Temporal Lobe Epilepsy (rising epigastric sensation + déjà vu + oral/manual automatisms + post-ictal confusion)."
    },
    {
      id: "ne-t4-m10",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q26 | Batch 19 | Final",
      stem: "All of the following can be differentiate seizure from syncope except:",
      options: {
        a: "Presence of aura",
        b: "Post ictal confusion",
        c: "rapid recovery",
        d: "Post ictal headach"
      },
      correct: "c",
      explanations: {
        a: "Presence of an epileptic aura (e.g., rising epigastric sensation, déjà vu) favors SEIZURE.",
        b: "Prolonged post-ictal confusion/drowsiness strongly favors SEIZURE.",
        c: "CORRECT (EXCEPT): Rapid recovery is a hallmark feature of SYNCOPE, NOT seizure (whereas options a, b, and d are all positive features of seizure).",
        d: "Post-ictal headache and myalgias favor SEIZURE."
      },
      highYield: "Seizure vs Syncope: Seizure = Aura + Lateral tongue biting + Prolonged post-ictal confusion/headache. Syncope = Vasovagal prodrome (pallor/sweating) + Rapid immediate recovery."
    },
    {
      id: "ne-t4-m11",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q28 | Batch 19 | Final",
      stem: "Which of the following antiepileptic medication is broad spectrum?",
      options: {
        a: "Carbamazepine",
        b: "oxacarbamazepine",
        c: "Valproic acide",
        d: "Phenytion"
      },
      correct: "c",
      explanations: {
        a: "Carbamazepine is NARROW-spectrum (focal & tonic-clonic only — can WORSEN absence & myoclonic seizures!).",
        b: "Oxcarbazepine is NARROW-spectrum (focal seizures only).",
        c: "CORRECT: Valproic acid (along with Levetiracetam, Lamotrigine, and Topiramate) is a BROAD-spectrum AED effective against focal, generalized tonic-clonic, absence, and myoclonic seizures.",
        d: "Phenytoin is NARROW-spectrum (focal & tonic-clonic only — worsens absence/myoclonic seizures)."
      },
      highYield: "Broad-Spectrum AEDs: Valproate, Levetiracetam, Lamotrigine, Topiramate. Narrow-Spectrum (Focal only — worsen Absence/JME!): Carbamazepine, Oxcarbazepine, Phenytoin, Gabapentin."
    }
  ]
});
// ==========================================
// NEUROLOGY - TOPIC 5: HEADACHE & CRANIAL NEURALGIAS
// ==========================================
window.IM_DATA.neurology.push({
  title: "Headache & Cranial Neuralgias (Thunderclap, Migraine, Trigeminal Neuralgia)",
  shortTitle: "Headache & Neuralgias",
  essays: [
    {
      id: "ne-t5-e1",
      type: "essay",
      batch: 24,
      exam: "Final",
      source: "Long Essay | Batch 24 | Final",
      stem: "write about Thunderclap headache. (12 M)",
      modelAnswer: `
        <h4>1. Definition</h4>
        <ul>
          <li>A severe, explosive headache that reaches <strong>maximum intensity within ≤1 minute</strong> of onset (classically described as the <em>"worst headache of life"</em>). It is a neurological emergency until life-threatening secondary causes—especially <strong>Subarachnoid Hemorrhage (SAH)</strong>—are excluded.</li>
        </ul>
        <h4>2. Etiology (Differential Diagnosis)</h4>
        <ul>
          <li><strong>Vascular (Most Critical):</strong>
            <ul>
              <li><strong>Subarachnoid Hemorrhage (SAH):</strong> #1 must-not-miss cause (85% from ruptured saccular/berry aneurysm).</li>
              <li><strong>Reversible Cerebral Vasoconstriction Syndrome (RCVS):</strong> Recurrent thunderclap headaches over days–weeks (often postpartum or triggered by vasoactive drugs/SSRIs/triptans).</li>
              <li><strong>Cerebral Venous Sinus Thrombosis (CVST):</strong> Especially in young females (OCP use, pregnancy, thrombophilia).</li>
              <li><strong>Cervical Artery Dissection (Carotid/Vertebral)</strong> &amp; <strong>Intracerebral/Intraventricular Hemorrhage</strong>.</li>
              <li><strong>Pituitary Apoplexy:</strong> Sudden headache + ophthalmoplegia + visual field loss + acute adrenal insufficiency.</li>
            </ul>
          </li>
          <li><strong>Non-Vascular:</strong> Acute bacterial meningitis, spontaneous intracranial hypotension (CSF leak), acute hypertensive crisis (PRES), colloid cyst of the 3rd ventricle, and primary thunderclap headache (diagnosis of exclusion).</li>
        </ul>
        <h4>3. Clinical Assessment &amp; Red Flags</h4>
        <ul>
          <li>Assess onset speed, associated neck stiffness (meningismus), photophobia, nausea/vomiting, fever, seizures, focal neurological deficits, diplopia (CN III palsy in PCom aneurysm), and altered consciousness (GCS).</li>
        </ul>
        <h4>4. Diagnostic Approach</h4>
        <ul>
          <li><strong>Step 1 — Urgent Non-Contrast Brain CT:</strong> Sensitivity &gt;98% for SAH within the first 6–12 hours.</li>
          <li><strong>Step 2 — Lumbar Puncture (LP):</strong> Mandatory if Brain CT is negative and clinical suspicion remains high (ideally ≥12 hours after onset to detect <strong>xanthochromia</strong> [bilirubin] and persistent RBCs across tubes 1–4).</li>
          <li><strong>Step 3 — Vascular Imaging (CT Angiography / MR Angiography / MRV):</strong> To identify aneurysms, RCVS ("string of beads"), arterial dissection, or CVST.</li>
        </ul>
        <h4>5. Emergency Management (Focused on SAH)</h4>
        <ul>
          <li><strong>Stabilization:</strong> ABCs, ICU/neurosurgical admission, analgesia, antiemetics, stool softeners, and strict BP control (SBP &lt;160 mmHg before aneurysm securing using IV Labetalol/Nicardipine).</li>
          <li><strong>Prevent Vasospasm:</strong> Oral <strong>Nimodipine</strong> (60 mg q4h for 21 days — improves neurological outcomes).</li>
          <li><strong>Definitive Aneurysm Repair:</strong> Urgent <strong>Endovascular Coiling</strong> or <strong>Surgical Clipping</strong> within 24–72 hours to prevent catastrophic re-bleeding.</li>
          <li><strong>Complications:</strong> Monitor for hydrocephalus (EVD), hyponatremia (SIADH/CSW), and seizures.</li>
        </ul>
      `
    },
    {
      id: "ne-t5-e2",
      type: "essay",
      batch: 23,
      exam: "Final",
      source: "Long Note | Batch 23 | Final",
      stem: "Write 3 causes of emergency headache ?(16marks)",
      modelAnswer: `
        <h4>1. Subarachnoid Hemorrhage (SAH)</h4>
        <ul>
          <li><strong>Pathophysiology:</strong> Rupture of a saccular (berry) aneurysm (85%) or AVM into the subarachnoid space.</li>
          <li><strong>Clinical Features:</strong> Sudden explosive <em>thunderclap headache</em> ("worst headache of life"), nausea/vomiting, photophobia, neck stiffness (meningismus), transient loss of consciousness, or CN III palsy (PCom aneurysm).</li>
          <li><strong>Diagnosis:</strong> Urgent non-contrast Brain CT (1st-line) → Lumbar Puncture for xanthochromia if CT negative → CTA/DSA to localize aneurysm.</li>
          <li><strong>Management:</strong> Neuro-ICU, BP control (SBP &lt;160 mmHg), oral <strong>Nimodipine</strong> (prevents vasospasm), and urgent endovascular coiling or surgical clipping.</li>
        </ul>
        <h4>2. Acute Bacterial Meningitis</h4>
        <ul>
          <li><strong>Pathophysiology:</strong> Bacterial invasion of the leptomeninges (most commonly <em>S. pneumoniae</em>, <em>N. meningitidis</em>, and <em>L. monocytogenes</em> in elderly/immunocompromised).</li>
          <li><strong>Clinical Features:</strong> Classic triad of severe headache, high fever, and neck stiffness (Kernig's &amp; Brudzinski's signs), photophobia, altered mental status, and petechial/purpuric rash (meningococcemia).</li>
          <li><strong>Diagnosis:</strong> Blood cultures + Lumbar Puncture (CSF: cloudy, ↑↑ PMNs 1000–5000/mm³, ↓ glucose &lt;40 mg/dL, ↑↑ protein, Gram stain/culture). Do Brain CT before LP only if papilledema, focal deficit, seizure, or GCS &lt;10.</li>
          <li><strong>Management:</strong> Immediate empiric IV <strong>Ceftriaxone + Vancomycin</strong> (+ Ampicillin if &gt;50 yrs or immunocompromised) + <strong>IV Dexamethasone</strong> (given before or with the first antibiotic dose).</li>
        </ul>
        <h4>3. Giant Cell (Temporal) Arteritis (GCA)</h4>
        <ul>
          <li><strong>Pathophysiology:</strong> Granulomatous large/medium-vessel vasculitis affecting branches of the external carotid artery (superficial temporal &amp; posterior ciliary arteries) in adults <strong>&gt;50 years</strong>.</li>
          <li><strong>Clinical Features:</strong> New-onset unilateral temporal headache, scalp tenderness (pain combing hair), jaw claudication, thickened/pulseless temporal artery, Polymyalgia Rheumatica (PMR) symptoms, and risk of sudden irreversible blindness (anterior ischemic optic neuropathy).</li>
          <li><strong>Diagnosis:</strong> Markedly elevated ESR (&gt;50–100 mm/h) &amp; CRP; definitive diagnosis by <strong>Temporal Artery Biopsy</strong> (skip lesions, multinucleated giant cells).</li>
          <li><strong>Management:</strong> Start high-dose <strong>Corticosteroids (Prednisone 40–60 mg/day, or IV Methylprednisolone if visual loss) IMMEDIATELY</strong> upon suspicion—never delay steroids waiting for biopsy!</li>
        </ul>
      `
    },
    {
      id: "ne-t5-e3",
      type: "essay",
      batch: 22,
      exam: "Final",
      source: "Long Essay Q1 | Batch 22 | Final",
      stem: "Q1: Give important five differential diagnosis of headache (10) Marks",
      modelAnswer: `
        <h4>1. Tension-Type Headache (Most Common Primary Headache)</h4>
        <ul>
          <li>Bilateral, pressing/tightening ("band-like") mild-to-moderate pain; not aggravated by routine physical activity; no nausea/vomiting. Treated with simple analgesics (Paracetamol/NSAIDs) and Amitriptyline for prophylaxis.</li>
        </ul>
        <h4>2. Migraine Headache</h4>
        <ul>
          <li>Recurrent unilateral, throbbing/pulsatile moderate-to-severe headache lasting 4–72 hours, accompanied by nausea/vomiting, photophobia, and phonophobia (± reversible visual/sensory aura).</li>
        </ul>
        <h4>3. Cluster Headache (Trigeminal Autonomic Cephalalgia)</h4>
        <ul>
          <li>Excruciating, strictly unilateral periorbital/temporal pain lasting 15–180 minutes, occurring in clusters (often waking patient at night) with ipsilateral autonomic symptoms (lacrimation, conjunctival injection, rhinorrhea, Horner's) and restlessness.</li>
        </ul>
        <h4>4. Subarachnoid Hemorrhage (SAH) / Vascular Secondary Headache</h4>
        <ul>
          <li>Sudden-onset thunderclap headache reaching peak intensity in &lt;1 minute with meningismus, vomiting, or altered consciousness. Diagnosed via Brain CT ± Lumbar Puncture (xanthochromia).</li>
        </ul>
        <h4>5. Meningitis / Space-Occupying Lesion (Brain Tumor / Raised ICP)</h4>
        <ul>
          <li><strong>Meningitis:</strong> Fever + headache + neck stiffness + photophobia.</li>
          <li><strong>Raised ICP / Tumor:</strong> Progressive subacute headache worse in the morning, aggravated by coughing/bending/Valsalva, associated with papilledema, vomiting, and focal neurological deficits.</li>
        </ul>
      `
    },
    {
      id: "ne-t5-e4",
      type: "essay",
      batch: 22,
      exam: "Final",
      source: "Short Essay Q7 | Batch 22 | Final",
      stem: "7: Abortive and preventive therapy of migraine. (6 Marks)",
      modelAnswer: `
        <h4>1. Abortive (Acute Attack) Therapy — Take Early at Onset</h4>
        <ul>
          <li><strong>Mild-to-Moderate Attacks:</strong> Simple analgesics — <strong>NSAIDs</strong> (Ibuprofen, Naproxen, Aspirin, Diclofenac) or Paracetamol, combined with an antiemetic/prokinetic (<strong>Metoclopramide</strong> or Domperidone).</li>
          <li><strong>Moderate-to-Severe Attacks (Specific Therapy):</strong>
            <ul>
              <li><strong>Triptans (5-HT₁B/1D agonists):</strong> <strong>Sumatriptan</strong>, Rizatriptan, Zolmitriptan, Naratriptan (Contraindicated in CAD, uncontrolled HTN, stroke, hemiplegic migraine).</li>
              <li><strong>CGRP Receptor Antagonists (Gepants):</strong> Rimegepant, Ubrogepant (safe in cardiovascular disease).</li>
              <li><strong>Ergotamines:</strong> Dihydroergotamine (less used now due to vasoconstriction/side effects).</li>
            </ul>
          </li>
          <li><strong>Status Migrainosus (&gt;72 hrs):</strong> IV fluids, IV Ketorolac, IV Metoclopramide/Prochlorperazine, IV Magnesium sulfate, or IV Dexamethasone.</li>
        </ul>
        <h4>2. Preventive (Prophylactic) Therapy — Indicated if ≥4 Headache Days/Month or Disabling Attacks</h4>
        <ul>
          <li><strong>Beta-Blockers (1st-line):</strong> <strong>Propranolol</strong>, Metoprolol, Timolol (avoid in asthma/bradycardia).</li>
          <li><strong>Anticonvulsants (1st-line):</strong> <strong>Topiramate</strong> (causes weight loss; avoid in kidney stones/pregnancy) and <strong>Sodium Valproate</strong> (strictly avoid in women of childbearing age!).</li>
          <li><strong>Antidepressants:</strong> <strong>Amitriptyline</strong> (TCA — great if coexisting insomnia or tension headache) or Venlafaxine (SNRI).</li>
          <li><strong>Antihypertensives / Others:</strong> <strong>Candesartan</strong> (ARB), Flunarizine, Pizotifen.</li>
          <li><strong>Refractory / Chronic Migraine:</strong> <strong>Anti-CGRP Monoclonal Antibodies</strong> (Erenumab, Fremanezumab, Galcanezumab) and <strong>OnabotulinumtoxinA (Botox)</strong> injections.</li>
        </ul>
      `
    },
    {
      id: "ne-t5-e5",
      type: "essay",
      batch: 21,
      exam: "Final",
      source: "Short Essay Q5 | Batch 21 | Final",
      stem: "5. Thunderclap headache (8 mark)",
      modelAnswer: `
        <h4>1. Definition</h4>
        <ul>
          <li>An abrupt, excruciating headache reaching peak intensity within <strong>≤60 seconds</strong> ("worst headache of life"), representing a medical emergency.</li>
        </ul>
        <h4>2. Major Causes</h4>
        <ul>
          <li><strong>Subarachnoid Hemorrhage (SAH)</strong> — most critical and common serious cause.</li>
          <li><strong>Reversible Cerebral Vasoconstriction Syndrome (RCVS)</strong> — recurrent thunderclap headaches.</li>
          <li><strong>Cerebral Venous Sinus Thrombosis (CVST)</strong> &amp; <strong>Cervical Artery Dissection</strong>.</li>
          <li><strong>Pituitary Apoplexy</strong>, <strong>Intracerebral Hemorrhage</strong>, <strong>Bacterial Meningitis</strong>, and <strong>Spontaneous Intracranial Hypotension</strong>.</li>
        </ul>
        <h4>3. Investigations</h4>
        <ul>
          <li><strong>Immediate Non-Contrast Brain CT</strong> (first-line; &gt;98% sensitive for SAH within 6–12h).</li>
          <li><strong>Lumbar Puncture (LP)</strong> if CT is negative (check for <strong>xanthochromia</strong> after 12h, RBCs, and opening pressure).</li>
          <li><strong>CTA / MRA / MRV</strong> to detect aneurysms, dissection, RCVS, or venous sinus thrombosis.</li>
        </ul>
        <h4>4. Emergency Management (SAH)</h4>
        <ul>
          <li>ABCs, ICU admission, analgesia, BP control (SBP &lt;160 mmHg), oral <strong>Nimodipine</strong> (prevents delayed cerebral ischemia/vasospasm), and urgent neurosurgical <strong>coiling or clipping</strong> of the aneurysm.</li>
        </ul>
      `
    },
    {
      id: "ne-t5-e6",
      type: "essay",
      batch: 20,
      exam: "Final",
      source: "Essay Q3 | Batch 20 | Final",
      stem: "3- Five causes of secondary headache seen in an inpatient setting? (8 marks)",
      modelAnswer: `
        <h4>Five Important Causes of Secondary Headache in an Inpatient Setting</h4>
        <ul>
          <li><strong>1. Intracranial Hemorrhage (Subarachnoid Hemorrhage / Intracerebral / Subdural Hematoma):</strong> Presents acutely with thunderclap headache, focal deficits, vomiting, or decreased consciousness (often in hypertensive, elderly, or anticoagulated inpatients).</li>
          <li><strong>2. CNS Infections (Bacterial/Viral Meningitis, Encephalitis, Brain Abscess):</strong> Presents with fever, severe headache, neck stiffness, photophobia, and altered mental status.</li>
          <li><strong>3. Post-Lumbar Puncture (Post-Dural Puncture) Headache:</strong> Orthostatic headache (worsens upright, relieved completely by lying flat) due to CSF leakage following diagnostic LP or spinal anesthesia.</li>
          <li><strong>4. Space-Occupying Lesions / Raised Intracranial Pressure (Brain Tumor, Hydrocephalus, Cerebral Edema):</strong> Progressive headache worse in the morning or with Valsalva/coughing, accompanied by papilledema and nausea/vomiting.</li>
          <li><strong>5. Vascular &amp; Systemic Inpatient Causes:</strong> <strong>Cerebral Venous Sinus Thrombosis (CVST)</strong> (postpartum, hypercoagulable, dehydrated patients), <strong>Hypertensive Encephalopathy / PRES</strong>, <strong>Giant Cell Arteritis</strong>, or <strong>Drug-Induced Headache</strong> (nitrates/GTN, vasodilators, caffeine withdrawal).</li>
        </ul>
      `
    },
    {
      id: "ne-t5-e7",
      type: "essay",
      batch: 19,
      exam: "Final",
      source: "Short Essay Q3 | Batch 19 | Final",
      stem: "3- Trigeminal neuralgia (6 mark)",
      modelAnswer: `
        <h4>1. Definition &amp; Etiology</h4>
        <ul>
          <li>A severe neuropathic pain disorder affecting the <strong>Trigeminal Nerve (CN V)</strong>, most commonly the <strong>V₂ (maxillary)</strong> and <strong>V₃ (mandibular)</strong> divisions.</li>
          <li><strong>Classical/Primary (~85%):</strong> Neurovascular compression of the trigeminal nerve root entry zone by an aberrant loop of the <strong>Superior Cerebellar Artery (SCA)</strong> causing focal demyelination.</li>
          <li><strong>Secondary:</strong> <strong>Multiple Sclerosis</strong> (suspect if patient is &lt;40 years or pain is bilateral!) or cerebellopontine angle (CPA) tumors (schwannoma, meningioma).</li>
        </ul>
        <h4>2. Clinical Features</h4>
        <ul>
          <li>Brief (seconds to 2 minutes), recurrent, <strong>unilateral, excruciating electric shock-like / lancinating facial pain</strong> strictly confined to CN V distribution (usually V₂/V₃).</li>
          <li>Triggered by innocuous light touch to facial <em>trigger zones</em>: washing face, shaving, brushing teeth, chewing, talking, or a cold breeze.</li>
          <li>Neurological examination (facial sensation &amp; corneal reflex) is <strong>normal</strong> in classical TN (sensory loss = red flag for secondary cause!).</li>
        </ul>
        <h4>3. Diagnosis</h4>
        <ul>
          <li>Primarily <strong>clinical</strong>, plus <strong>Brain MRI</strong> in all patients to rule out secondary causes (MS plaques, CPA mass) and visualize neurovascular compression.</li>
        </ul>
        <h4>4. Management</h4>
        <ul>
          <li><strong>First-Line Medical Therapy:</strong> <strong>Carbamazepine</strong> (gold standard) or <strong>Oxcarbazepine</strong>.</li>
          <li><strong>Second-Line / Adjunctive:</strong> Lamotrigine, Baclofen, Gabapentin, or Pregabalin.</li>
          <li><strong>Surgical Options (for medically refractory cases):</strong> <strong>Microvascular Decompression (MVD)</strong> (definitive procedure of choice in fit patients), Gamma Knife radiosurgery, or percutaneous radiofrequency/glycerol rhizotomy.</li>
        </ul>
      `
    },
    {
      id: "ne-t5-e8",
      type: "essay",
      batch: 18,
      exam: "Final",
      source: "Long Essay Q1 | Batch 18 | Final",
      stem: "1. The common causes of paroxysmal unilateral headache and discuss in detail one of them? (10 M)",
      modelAnswer: `
        <h4>1. Common Causes of Paroxysmal Unilateral Headache</h4>
        <ul>
          <li><strong>Cluster Headache</strong> (most common Trigeminal Autonomic Cephalalgia — TAC).</li>
          <li><strong>Migraine</strong> (typically unilateral, throbbing, lasting 4–72h).</li>
          <li><strong>Paroxysmal Hemicrania</strong> (shorter attacks 2–30 min, 5–40/day; absolute response to Indomethacin).</li>
          <li><strong>SUNCT / SUNA</strong> (Short-lasting Unilateral Neuralgiform headache with Conjunctival injection and Tearing).</li>
          <li><strong>Trigeminal Neuralgia</strong> (brief electric-shock facial pain along V₂/V₃).</li>
        </ul>
        <h4>2. Detailed Discussion: Cluster Headache</h4>
        <ul>
          <li><strong>Epidemiology:</strong> Predominantly affects <strong>middle-aged men (20–50 yrs, M:F = 3–4:1)</strong>; strongly associated with heavy smoking.</li>
          <li><strong>Pathophysiology:</strong> Activation of the <strong>posterior hypothalamus</strong> (circadian/circannual clock) and the <strong>trigeminal-autonomic reflex</strong> (parasympathetic outflow via CN VII).</li>
          <li><strong>Clinical Features:</strong>
            <ul>
              <li>Excruciating, boring/stabbing, strictly <strong>unilateral periorbital/retro-orbital or temporal pain</strong> ("suicide headache").</li>
              <li>Lasts <strong>15–180 minutes</strong>, occurring 1–8 times/day in <strong>clusters</strong> lasting weeks to months, often at the exact same time each night (waking patient from sleep).</li>
              <li><strong>Ipsilateral Cranial Autonomic Symptoms:</strong> Lacrimation, conjunctival injection (red eye), nasal congestion/rhinorrhea, eyelid edema, and partial <strong>Horner's syndrome</strong> (ptosis + miosis).</li>
              <li><strong>Behavior:</strong> Marked <strong>agitation and restlessness</strong> (pacing the room — opposite of migraine patients who lie still in a dark room). Triggered by alcohol during cluster periods.</li>
            </ul>
          </li>
          <li><strong>Management:</strong>
            <ul>
              <li><strong>Acute Abortive Therapy:</strong> <strong>100% High-Flow Oxygen</strong> (12–15 L/min via non-rebreather mask for 15 min) AND/OR <strong>Subcutaneous Sumatriptan</strong> (or intranasal Zolmitriptan).</li>
              <li><strong>Transitional (Bridge) Therapy:</strong> Short course of oral Prednisolone or greater occipital nerve block.</li>
              <li><strong>Preventive (Prophylactic) Therapy:</strong> <strong>Verapamil</strong> (1st-line — monitor ECG for PR prolongation/heart block); alternatives: Lithium, Topiramate, Galcanezumab.</li>
            </ul>
          </li>
        </ul>
      `
    }
  ],
  mcqs: [
    {
      id: "ne-t5-m1",
      type: "mcq",
      batch: 24,
      exam: "Midterm",
      source: "Q16 | Batch 24 | Midterm",
      stem: "Which of the following is NOT considered a red flag in headache (Red Flag sign of headache except)?",
      options: {
        a: "New onset headache",
        b: "Worst headache of life",
        c: "Chronic daily headache",
        d: "Presence of neurological deficits (focal neurological sign)"
      },
      correct: "c",
      explanations: {
        a: "New-onset headache (especially >50 years or in cancer/HIV patients) is a classic SNOOP red flag.",
        b: "'Worst headache of life' (thunderclap onset) is a critical red flag for Subarachnoid Hemorrhage.",
        c: "CORRECT (NOT a red flag): Stable chronic daily headache (e.g., chronic tension-type or medication overuse headache) without new changes or neurological signs is NOT an acute red flag.",
        d: "Focal neurological deficits strongly indicate structural pathology (stroke, tumor, abscess, bleed)."
      },
      highYield: "Headache Red Flags (SNOOP4): Systemic symptoms (fever/weight loss/cancer/HIV), Neurologic deficits, Onset sudden (thunderclap), Older age (>50 yrs), Pattern change / Papilledema / Positional / Precipitated by Valsalva."
    },
    {
      id: "ne-t5-m2",
      type: "mcq",
      batch: 23,
      exam: "Midterm",
      source: "Q12 | Batch 23 | Midterm",
      stem: "What would be your first treatment of choice in migraine prevention, assuming there are no contraindications?",
      options: {
        a: "Sumatriptan",
        b: "Propranolol",
        c: "Indomethacin",
        d: "Topiramate"
      },
      correct: "b",
      explanations: {
        a: "Sumatriptan is an ACUTE abortive medication, NOT for prevention.",
        b: "CORRECT: Propranolol (non-selective beta-blocker) is the classic first-line drug of choice for migraine prophylaxis when there are no contraindications (such as asthma or bradycardia).",
        c: "Indomethacin is the drug of choice for Paroxysmal Hemicrania and Hemicrania Continua, not migraine prophylaxis.",
        d: "Topiramate is also a first-line prophylactic agent, but Propranolol is traditionally the #1 initial choice if no contraindications exist."
      },
      highYield: "1st-Line Migraine Prophylaxis = Propranolol (avoid in asthma!), Topiramate, Amitriptyline, Valproate (avoid in women of childbearing age!)."
    },
    {
      id: "ne-t5-m3",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q28 | Batch 23 | Final",
      stem: "All used in treatment acute migraine, except",
      options: {
        a: "Pizotifen",
        b: "Valporate",
        c: "CGRP",
        d: "Ergots"
      },
      correct: "a",
      explanations: {
        a: "CORRECT (EXCEPT): Pizotifen (5-HT₂ antagonist) is strictly a PROPHYLACTIC (preventive) medication for migraine, NOT used for acute attacks.",
        b: "IV Sodium Valproate can be used acutely in the ED for refractory status migrainosus (in addition to its oral prophylactic role).",
        c: "CGRP receptor antagonists (Gepants: Rimegepant, Ubrogepant) are used for acute migraine treatment.",
        d: "Ergots (Dihydroergotamine / Ergotamine) are acute abortive migraine drugs."
      },
      highYield: "Pizotifen & Propranolol = Prophylaxis ONLY. Triptans & Ergots = Acute Abortive ONLY."
    },
    {
      id: "ne-t5-m4",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q20 | Batch 22 | Final",
      stem: "The most common type of headache Is:-",
      options: {
        a: "Tension-type headache.",
        b: "Cluster headache.",
        c: "Medication overuse headache.",
        d: "Migraine."
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Tension-type headache is by far the #1 most common primary headache worldwide (lifetime prevalence ~40–80%).",
        b: "Cluster headache is rare (~0.1% prevalence).",
        c: "Medication overuse headache is a secondary headache.",
        d: "Migraine is the 2nd most common primary headache (~12–15%) and the most common reason patients seek medical care for headache."
      },
      highYield: "Most common headache overall = Tension-Type Headache (bilateral band-like tightness). Most common disabling headache presenting to clinics = Migraine."
    },
    {
      id: "ne-t5-m5",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q21 | Batch 22 | Final",
      stem: "Refractory migraine is treated by:-",
      options: {
        a: "Topiramate.",
        b: "Candesartan.",
        c: "Beta Blockers.",
        d: "Monoclonal antibodies to calcitonin gene related peptide receptors."
      },
      correct: "d",
      explanations: {
        a: "Topiramate is a standard first-line oral prophylactic drug.",
        b: "Candesartan is a standard first/second-line oral prophylactic drug.",
        c: "Beta-blockers (Propranolol) are standard first-line oral prophylactic drugs.",
        d: "CORRECT: Monoclonal antibodies targeting CGRP or its receptor (e.g., Erenumab, Fremanezumab, Galcanezumab) — along with Botulinum toxin A — are specifically reserved for REFRACTORY / chronic migraine failing conventional oral preventives."
      },
      highYield: "Refractory Migraine → Anti-CGRP Monoclonal Antibodies (Erenumab) or OnabotulinumtoxinA (Botox)."
    },
    {
      id: "ne-t5-m6",
      type: "mcq",
      batch: 21,
      exam: "Midterm",
      source: "Q11 | Batch 21 | Midterm",
      stem: "Each one of the following drugs can be used to prevent migraine attack, except:",
      options: {
        a: "Pizotifen",
        b: "Amitriptyline",
        c: "Propronalol",
        d: "Sumatriptan",
        e: "Methysergide"
      },
      correct: "d",
      explanations: {
        a: "Pizotifen is a migraine prophylactic drug.",
        b: "Amitriptyline is a first-line migraine prophylactic drug.",
        c: "Propranolol is a first-line migraine prophylactic drug.",
        d: "CORRECT (EXCEPT): Sumatriptan (5-HT₁B/1D agonist) is strictly an ACUTE ABORTIVE drug for migraine attacks, NOT for prevention (overuse actually causes medication-overuse headache).",
        e: "Methysergide is an older ergot-derived prophylactic drug (rarely used now due to retroperitoneal/cardiac fibrosis)."
      },
      highYield: "Sumatriptan = Acute Abortive ONLY! Never for prevention."
    },
    {
      id: "ne-t5-m7",
      type: "mcq",
      batch: 20,
      exam: "Midterm",
      source: "Q13 | Batch 20 | Midterm",
      stem: "Which of the following is typically associated with migraine without aura than migraine with aura:",
      options: {
        a: "Generalized cortical spread",
        b: "Prominent visual symptoms",
        c: "Associated with menstrual cycle",
        d: "Increased risk of ischemic stroke"
      },
      correct: "c",
      explanations: {
        a: "Cortical spreading depression is the hallmark mechanism of migraine WITH aura.",
        b: "Prominent visual symptoms (scintillating scotoma, fortification spectra) are the classic feature of migraine WITH aura.",
        c: "CORRECT: Menstrual migraine (triggered by the late-luteal drop in estrogen) is characteristically Migraine WITHOUT Aura.",
        d: "Migraine WITH aura (especially in women who smoke or take combined OCPs) carries a significantly higher risk of ischemic stroke than migraine without aura."
      },
      highYield: "Migraine WITHOUT Aura = Strongly linked to menstrual cycle (estrogen drop). Migraine WITH Aura = Visual scotoma + Cortical spreading depression + ↑ Ischemic stroke risk (avoid combined OCPs!)."
    },
    {
      id: "ne-t5-m8",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q23 | Batch 19 | Final",
      stem: "All of the following causes of thunder clap headach except:",
      options: {
        a: "Subarachnoid hemorrhage",
        b: "Meningitis",
        c: "Central venous thrombosis",
        d: "Trigeminal neuralgia"
      },
      correct: "d",
      explanations: {
        a: "SAH is the #1 classic cause of thunderclap headache.",
        b: "Acute meningitis can present acutely as a thunderclap headache.",
        c: "Cerebral venous sinus thrombosis (CVST) is a recognized vascular cause of thunderclap headache.",
        d: "CORRECT (EXCEPT): Trigeminal neuralgia causes brief, recurrent electric-shock FACIAL pain along CN V2/V3 triggered by touch — NOT a thunderclap headache."
      },
      highYield: "Thunderclap Headache Causes: SAH (#1), RCVS, CVST, Arterial Dissection, Pituitary Apoplexy, Meningitis. NOT Trigeminal Neuralgia."
    },
    {
      id: "ne-t5-m9",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q24 | Batch 19 | Final",
      stem: "Which is of the following drug is used in prophylaxis migraine:",
      options: {
        a: "Ergotamine",
        b: "Propronolole",
        c: "Narotriptan",
        d: "Zolmitriptan"
      },
      correct: "b",
      explanations: {
        a: "Ergotamine is an acute abortive drug.",
        b: "CORRECT: Propranolol (beta-blocker) is a first-line drug for migraine prophylaxis.",
        c: "Naratriptan is an acute abortive drug (triptan).",
        d: "Zolmitriptan is an acute abortive drug (triptan)."
      },
      highYield: "Propranolol = Prophylaxis. All '-triptans' & Ergotamine = Acute abortive."
    },
    {
      id: "ne-t5-m10",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q29 | Batch 19 | Final",
      stem: "Which of the following investigation is used to diagnose SAH?",
      options: {
        a: "Brain C-T scan",
        b: "Brain MRI",
        c: "Lumber punctur",
        d: "A&C",
        e: "A&b"
      },
      correct: "d",
      explanations: {
        a: "Non-contrast Brain CT is the #1 initial investigation for SAH (>98% sensitive within 6–12 hours).",
        b: "Brain MRI is not the standard first-line emergency test for acute SAH.",
        c: "Lumbar puncture (for xanthochromia & RBCs) is mandatory if Brain CT is negative despite high clinical suspicion.",
        d: "CORRECT: Both Non-contrast Brain CT (1st-line) AND Lumbar Puncture (if CT is negative) are the standard diagnostic investigations for Subarachnoid Hemorrhage.",
        e: "Incorrect."
      },
      highYield: "SAH Diagnosis: Step 1 = Non-contrast Brain CT → Step 2 (if CT negative) = Lumbar Puncture (Xanthochromia after 12h)."
    }
  ]
});
// ==========================================
// NEUROLOGY - TOPIC 6: MOVEMENT DISORDERS
// ==========================================
window.IM_DATA.neurology.push({
  title: "Movement Disorders (Parkinson's Disease, Chorea, Hemiballismus, Tremor)",
  shortTitle: "Movement Disorders",
  essays: [
    {
      id: "ne-t6-e1",
      type: "essay",
      batch: 24,
      exam: "Final",
      source: "Short Essay Q5 | Batch 24 | Final",
      stem: "Q5: Types of Chorea, & explain one (4 M)",
      modelAnswer: `
        <h4>1. Definition of Chorea</h4>
        <ul>
          <li>Brief, irregular, purposeless, non-rhythmic, dance-like involuntary movements that flow unpredictably from one body part to another (caused by basal ganglia / striatal dysfunction).</li>
        </ul>
        <h4>2. Main Types / Causes of Chorea</h4>
        <ul>
          <li><strong>Hereditary (Genetic):</strong> <strong>Huntington's Disease</strong> (most common hereditary cause), Wilson's disease, Neuroacanthocytosis, Benign hereditary chorea.</li>
          <li><strong>Autoimmune / Post-Infectious:</strong> <strong>Sydenham's Chorea</strong> (Acute Rheumatic Fever — post-Group A Streptococcal), Systemic Lupus Erythematosus (SLE), Antiphospholipid Syndrome (APS).</li>
          <li><strong>Hormonal / Metabolic:</strong> <strong>Chorea Gravidarum</strong> (pregnancy), Oral Contraceptive Pills (OCPs), Hyperthyroidism (thyrotoxicosis), Non-ketotic hyperglycemia, Hypo/hypercalcemia, Hepatic encephalopathy.</li>
          <li><strong>Drug-Induced:</strong> Levodopa (in Parkinson's disease), Tardive dyskinesia (neuroleptics/antipsychotics), Phenytoin, Amphetamines/cocaine.</li>
          <li><strong>Vascular / Structural:</strong> Basal ganglia stroke (ischemic/hemorrhagic), Polycythemia vera.</li>
        </ul>
        <h4>3. Detailed Explanation of One Type: Huntington's Disease</h4>
        <ul>
          <li><strong>Genetics &amp; Pathophysiology:</strong> <strong>Autosomal dominant</strong> neurodegenerative disorder caused by an expanded <strong>CAG trinucleotide repeat</strong> (&gt;36–40 repeats) in the <em>HTT</em> gene on <strong>chromosome 4p</strong>, exhibiting genetic <em>anticipation</em> (earlier onset in successive generations, especially with paternal transmission). Causes progressive atrophy of the <strong>caudate nucleus</strong> and putamen (loss of GABAergic medium spiny neurons → <em>boxcar ventricles</em> on MRI).</li>
          <li><strong>Clinical Triad (Onset 30–50 years):</strong>
            <ul>
              <li><em>Motor:</em> Progressive chorea, motor impersistence ("milkmaid's grip", inability to keep tongue protruded), dysarthria, dysphagia, and late rigidity/dystonia.</li>
              <li><em>Cognitive:</em> Progressive subcortical dementia (executive dysfunction).</li>
              <li><em>Psychiatric:</em> Depression (high suicide risk), irritability, apathy, psychosis.</li>
            </ul>
          </li>
          <li><strong>Diagnosis &amp; Management:</strong> Confirmed by <strong>genetic testing (CAG repeat count)</strong> and Brain MRI (caudate atrophy). Treatment is supportive/symptomatic: <strong>VMAT2 inhibitors</strong> (Tetrabenazine, Deutetrabenazine) or atypical antipsychotics (Olanzapine, Risperidone) for chorea, plus SSRIs for depression.</li>
        </ul>
      `
    },
    {
      id: "ne-t6-e2",
      type: "essay",
      batch: 21,
      exam: "Final",
      source: "Short Essay Q4 | Batch 21 | Final",
      stem: "4. Differential diagnosis of tremor. (8 mark)",
      modelAnswer: `
        <h4>1. Resting Tremor (Occurs at rest, diminishes with voluntary movement)</h4>
        <ul>
          <li><strong>Parkinson's Disease (and Parkinsonism):</strong> Asymmetric, slow (4–6 Hz), classic <em>"pill-rolling"</em> hand tremor that disappears during purposeful action and re-emerges at rest.</li>
          <li><strong>Drug-Induced Parkinsonism:</strong> Antipsychotics (haloperidol, risperidone), metoclopramide, valproate.</li>
        </ul>
        <h4>2. Postural / Action Tremor (Occurs when maintaining a posture against gravity, e.g., outstretched hands)</h4>
        <ul>
          <li><strong>Enhanced Physiological Tremor:</strong> Fine, rapid (8–12 Hz) bilateral tremor triggered by anxiety/stress, fatigue, caffeine, <strong>hyperthyroidism</strong>, hypoglycemia, alcohol withdrawal, or drugs (β₂-agonists like salbutamol, lithium, valproate, steroids, theophylline).</li>
          <li><strong>Essential Tremor (Benign Familial Tremor):</strong> Most common pathological tremor; autosomal dominant (~50%), bilateral symmetric postural/kinetic tremor (6–10 Hz) affecting hands, head ("yes-yes" or "no-no"), and voice. Classically <strong>improves with small amounts of alcohol</strong> and treated with <strong>Propranolol</strong> or <strong>Primidone</strong>.</li>
          <li><strong>Asterixis ("Flapping Tremor"):</strong> Negative myoclonus seen in hepatic encephalopathy, uremia, and hypercapnia (CO₂ retention).</li>
        </ul>
        <h4>3. Kinetic / Intention Tremor (Worsens as the limb approaches a target)</h4>
        <ul>
          <li><strong>Cerebellar Disease:</strong> Coarse, low-frequency (3–5 Hz) tremor maximal on finger-to-nose testing, accompanied by dysmetria, ataxia, nystagmus, and dysarthria. Causes: Multiple Sclerosis, cerebellar stroke/tumor, chronic alcoholism, Wilson's disease (classic <em>"wing-beating"</em> proximal tremor).</li>
        </ul>
        <h4>4. Other Specific Tremors</h4>
        <ul>
          <li><strong>Dystonic Tremor:</strong> Irregular, task-specific tremor (e.g., writer's cramp).</li>
          <li><strong>Holmes (Rubral / Midbrain) Tremor:</strong> Coarse, slow tremor present at rest, posture, AND intention (lesion in red nucleus / cerebellar outflow).</li>
          <li><strong>Functional (Psychogenic) Tremor:</strong> Abrupt onset, variable frequency, distractible, and shows entrainment.</li>
        </ul>
      `
    },
    {
      id: "ne-t6-e3",
      type: "essay",
      batch: 20,
      exam: "Final",
      source: "Essay Q4 | Batch 20 | Final",
      stem: "4- Clinical findings in a patient with PD (Parkinson's Disease)? (6 marks)",
      modelAnswer: `
        <h4>1. Cardinal Motor Features (TRAP)</h4>
        <ul>
          <li><strong>T — Tremor (Resting):</strong> Asymmetric, 4–6 Hz <em>"pill-rolling"</em> tremor starting in one hand, maximal at rest, decreasing with voluntary movement and disappearing during sleep.</li>
          <li><strong>R — Rigidity:</strong> Increased resistance throughout the entire range of passive movement: <strong>Lead-pipe rigidity</strong> (uniform resistance) or <strong>Cogwheel rigidity</strong> (ratchet-like resistance when tremor is superimposed).</li>
          <li><strong>A — Akinesia / Bradykinesia (Most Disabling &amp; Essential for Diagnosis):</strong> Slowness in initiating and executing movements, progressive decrement in finger/foot tapping, <strong>hypomimia</strong> (expressionless "mask-like" face with reduced blinking), <strong>micrographia</strong> (progressively smaller handwriting), and soft monotonous speech (<strong>hypophonia</strong>).</li>
          <li><strong>P — Postural Instability &amp; Gait Disturbance:</strong> Stooped/flexed posture, impaired righting reflexes (positive pull test → frequent falls), <strong>shuffling/festinating gait</strong> (short hurried steps) with <strong>loss of arm swing</strong>, hesitation/freezing at doorways, and turning <em>"en bloc"</em>.</li>
        </ul>
        <h4>2. Other Classic Examination Signs</h4>
        <ul>
          <li><strong>Glabellar Tap Sign (Myerson's sign):</strong> Persistent blinking on repeated tapping of the forehead (failure to habituate).</li>
          <li>Sialorrhea (drooling due to reduced automatic swallowing) and seborrheic dermatitis.</li>
        </ul>
        <h4>3. Non-Motor Features (Often Precede Motor Signs)</h4>
        <ul>
          <li><strong>Anosmia / Hyposmia</strong> (loss of smell — very early premotor feature).</li>
          <li><strong>REM Sleep Behavior Disorder (RBD):</strong> Vivid dream enactment (kicking/shouting during sleep).</li>
          <li><strong>Autonomic Dysfunction:</strong> Constipation, orthostatic hypotension, urinary urgency, erectile dysfunction.</li>
          <li><strong>Neuropsychiatric:</strong> Depression, anxiety, cognitive impairment/dementia (late), and visual hallucinations.</li>
        </ul>
      `
    }
  ],
  mcqs: [
    {
      id: "ne-t6-m1",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q24 | Batch 24 | Final",
      stem: "Which of the following gait abnormalities is characteristic of Parkinson's disease?",
      options: {
        a: "Wide-based ataxic gait",
        b: "Festinating shuffling gait with reduced arm swing",
        c: "High-steppage gait",
        d: "Spastic scissoring gait"
      },
      correct: "b",
      explanations: {
        a: "Wide-based ataxic gait is characteristic of Cerebellar disease.",
        b: "CORRECT: Parkinson's disease classically produces a stooped posture with a narrow-based, festinating (short, accelerating) shuffling gait and reduced/absent unilateral or bilateral arm swing.",
        c: "High-steppage gait is caused by foot drop (Common peroneal nerve palsy / L5 radiculopathy / peripheral neuropathy).",
        d: "Spastic scissoring gait is seen in bilateral UMN lesions (e.g., cerebral palsy, cervical myelopathy)."
      },
      highYield: "Gait Buzzwords: Shuffling/Festinating + No arm swing = Parkinson's; Wide-based = Cerebellar; High-steppage = Foot drop (Peroneal/L5); Scissoring = Bilateral UMN; Waddling = Proximal myopathy."
    },
    {
      id: "ne-t6-m2",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q28 | Batch 24 | Final",
      stem: "Hemiballismus (violent flinging movements of one half of the body) is caused by a lesion in the contralateral:",
      options: {
        a: "Subthalamic nucleus",
        b: "Caudate nucleus",
        c: "Substantia nigra",
        d: "Cerebellar hemisphere"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Hemiballismus (wild, violent, large-amplitude flinging movements of the contralateral arm and leg) is classically caused by a lacunar stroke/lesion in the contralateral Subthalamic Nucleus (STN).",
        b: "Caudate nucleus degeneration causes Chorea (Huntington's disease).",
        c: "Substantia nigra (pars compacta) degeneration causes Parkinson's disease.",
        d: "Cerebellar hemisphere lesions cause ipsilateral ataxia and intention tremor."
      },
      highYield: "Basal Ganglia Localization: Subthalamic nucleus = Contralateral Hemiballismus; Substantia nigra = Parkinsonism; Striatum (Caudate/Putamen) = Chorea (Huntington's)."
    },
    {
      id: "ne-t6-m3",
      type: "mcq",
      batch: 20,
      exam: "Midterm",
      source: "Q9 | Batch 20 | Midterm",
      stem: "Which of the following is least associated with Parkinson's Disease (PD):",
      options: {
        a: "Anosmia",
        b: "Rapid eye movement with dream disturbance",
        c: "Oculogyric crisis",
        d: "Depression"
      },
      correct: "c",
      explanations: {
        a: "Anosmia (hyposmia) is a very common early non-motor feature of PD.",
        b: "REM sleep behavior disorder (dream enactment) is strongly associated with PD and other synucleinopathies.",
        c: "CORRECT (Least associated): Oculogyric crisis (sustained upward conjugate deviation of the eyes) is an acute DYSTONIC reaction classically caused by dopamine-receptor blocking drugs (typical antipsychotics like haloperidol, metoclopramide) or post-encephalitic parkinsonism — NOT idiopathic Parkinson's disease.",
        d: "Depression occurs in up to 40–50% of PD patients."
      },
      highYield: "Oculogyric crisis = Acute dystonia from Dopamine Antagonists (Antipsychotics/Metoclopramide) → Treat immediately with IV/IM Diphenhydramine or Benztropine (anticholinergics)."
    },
    {
      id: "ne-t6-m4",
      type: "mcq",
      batch: 20,
      exam: "Midterm",
      source: "Q12 | Batch 20 | Midterm",
      stem: "Trihexyphenidyl which is used in PD, what is the mechanism of action of it?",
      options: {
        a: "Catecholamine-O-methyltransferase inhibitor",
        b: "Monoamine oxidase inhibitor",
        c: "Dopamine agonist",
        d: "Muscarinic receptor antagonist"
      },
      correct: "d",
      explanations: {
        a: "COMT inhibitors are Entacapone and Tolcapone.",
        b: "MAO-B inhibitors are Selegiline and Rasagiline.",
        c: "Dopamine agonists are Pramipexole, Ropinirole, and Bromocriptine.",
        d: "CORRECT: Trihexyphenidyl (and Benztropine) is a centrally acting Muscarinic (anticholinergic) receptor antagonist that restores the dopamine–acetylcholine balance in the striatum; primarily useful for resting tremor in younger PD patients (avoid in elderly due to confusion/delirium/urinary retention)."
      },
      highYield: "PD Drug Classes: Levodopa/Carbidopa (most effective); Pramipexole/Ropinirole (Dopamine agonists); Selegiline/Rasagiline (MAO-B inhibitors); Entacapone (COMT inhibitor); Trihexyphenidyl/Benztropine (Anticholinergics — best for tremor in young PD)."
    },
    {
      id: "ne-t6-m5",
      type: "mcq",
      batch: 19,
      exam: "Midterm",
      source: "Q11 | Batch 19 | Midterm",
      stem: "Chorea gravidarum occurs in:",
      options: {
        a: "Newborn",
        b: "Depressed women",
        c: "Pubescent girls",
        d: "Pregnant women",
        e: "Pubescent boys"
      },
      correct: "d",
      explanations: {
        a: "Incorrect.",
        b: "Incorrect.",
        c: "Incorrect.",
        d: "CORRECT: Chorea gravidarum is chorea occurring during PREGNANCY (typically 1st trimester), often in women with a prior history of Sydenham's chorea, SLE, or APS, triggered by elevated estrogen/progesterone levels sensitizing striatal dopamine receptors.",
        e: "Incorrect."
      },
      highYield: "Chorea Gravidarum = Chorea in Pregnancy (usually resolves spontaneously after delivery)."
    },
    {
      id: "ne-t6-m6",
      type: "mcq",
      batch: 19,
      exam: "Midterm",
      source: "Q13 | Batch 19 | Midterm",
      stem: "Any of the following syndromes is the involuntary movement EXCEPT",
      options: {
        a: "Chorea",
        b: "Tic",
        c: "Tremor",
        d: "Paresis",
        e: "Myoclonus"
      },
      correct: "d",
      explanations: {
        a: "Chorea is an involuntary hyperkinetic movement disorder.",
        b: "Tics are semi-involuntary/involuntary sudden stereotyped movements or vocalizations.",
        c: "Tremor is an involuntary rhythmic oscillatory movement.",
        d: "CORRECT (EXCEPT): Paresis means partial motor WEAKNESS (loss of voluntary strength), NOT an involuntary movement disorder.",
        e: "Myoclonus is a sudden, brief, shock-like involuntary muscle jerk."
      },
      highYield: "Hyperkinetic Involuntary Movements: Tremor, Chorea, Athetosis, Ballismus, Dystonia, Myoclonus, Tics. Paresis = Weakness."
    },
    {
      id: "ne-t6-m7",
      type: "mcq",
      batch: 19,
      exam: "Midterm",
      source: "Q16 | Batch 19 | Midterm",
      stem: "Which is the following indicated extra pyramidal sign?",
      options: {
        a: "Ankle clonus",
        b: "Babiniski sign",
        c: "Clasp Knife spastiticty",
        d: "Cog Wheel rigidity"
      },
      correct: "d",
      explanations: {
        a: "Ankle clonus is a PYRAMIDAL (UMN) sign.",
        b: "Babinski sign is a PYRAMIDAL (UMN) sign.",
        c: "Clasp-knife spasticity is a PYRAMIDAL (UMN) sign.",
        d: "CORRECT: Cogwheel rigidity (and lead-pipe rigidity, bradykinesia, resting tremor) is a classic EXTRAPYRAMIDAL (Basal Ganglia) sign."
      },
      highYield: "Pyramidal (UMN) = Clasp-knife spasticity, Clonus, Babinski (+), Hyperreflexia. Extrapyramidal (Basal Ganglia) = Cogwheel/Lead-pipe rigidity, Bradykinesia, Resting tremor, Normal reflexes."
    },
    {
      id: "ne-t6-m8",
      type: "mcq",
      batch: 19,
      exam: "Midterm",
      source: "Q18 | Batch 19 | Midterm",
      stem: "All the following diagnostic criteria for parkinsonism in cluding except",
      options: {
        a: "Tremer",
        b: "Chorea",
        c: "Hypokinsia",
        d: "Rigidly"
      },
      correct: "b",
      explanations: {
        a: "Resting tremor is a cardinal feature of Parkinsonism.",
        b: "CORRECT (EXCEPT): Chorea is a hyperkinetic movement disorder (e.g., Huntington's, Sydenham's), NOT a diagnostic criterion for Parkinsonism (though Levodopa-induced dyskinesias/chorea can occur later as a drug side effect).",
        c: "Hypokinesia / Bradykinesia is the single mandatory core criterion for diagnosing Parkinsonism.",
        d: "Rigidity is a cardinal feature of Parkinsonism."
      },
      highYield: "Parkinsonism Clinical Criteria = Bradykinesia/Hypokinesia (mandatory) + at least one of: Resting Tremor, Rigidity, or Postural Instability."
    },
    {
      id: "ne-t6-m9",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q30 | Batch 18 | Final",
      stem: "A lesion in the subthalamic nucleus is most likely to cause which of the following?",
      options: {
        a: "Hemiballismus",
        b: "Parkinsonism",
        c: "Essential tremor",
        d: "Pain syndrome",
        e: "Vertical gaze palsy"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Lesion of the Subthalamic Nucleus (STN) causes contralateral Hemiballismus.",
        b: "Parkinsonism is caused by Substantia Nigra pars compacta degeneration.",
        c: "Essential tremor involves cerebellothalamocortical circuits.",
        d: "Central post-stroke pain syndrome (Dejerine-Roussy) is caused by a Thalamic (VPL) lesion.",
        e: "Vertical gaze palsy is caused by a Dorsal Midbrain (Parinaud syndrome / pretectal) lesion or Progressive Supranuclear Palsy (PSP)."
      },
      highYield: "Subthalamic Nucleus = Contralateral Hemiballismus (repeated in Batch 18 Final & Batch 24 Final!)."
    }
  ]
});
// ==========================================
// NEUROLOGY - TOPIC 7: NMJ, MOTOR NEURON & MUSCLE DISEASES
// ==========================================
window.IM_DATA.neurology.push({
  title: "Neuromuscular Junction & Motor Neuron/Muscle Diseases (MG, ALS, DMD/Myopathies)",
  shortTitle: "MG, ALS & Myopathies",
  essays: [
    {
      id: "ne-t7-e1",
      type: "essay",
      batch: 19,
      exam: "Final",
      source: "Short Essay Q2 | Batch 19 | Final",
      stem: "2- Clinical feature and management of the Acute stage of myasthenia gravis? (6 mark)",
      modelAnswer: `
        <h4>1. Clinical Features of Acute Stage / Myasthenic Crisis</h4>
        <ul>
          <li><strong>Definition:</strong> A life-threatening exacerbation of Myasthenia Gravis (MG) characterized by severe respiratory and/or bulbar muscle weakness requiring mechanical ventilation (often triggered by infection, surgery, stress, pregnancy, or offending drugs like aminoglycosides, fluoroquinolones, beta-blockers, or magnesium).</li>
          <li><strong>Respiratory Failure:</strong> Rapidly progressive dyspnea, orthopnea, tachypnea with shallow breaths, use of accessory muscles, paradoxical abdominal breathing, weak cough, inability to count to 20 in a single breath, and declining Forced Vital Capacity (<strong>FVC &lt;15–20 mL/kg</strong>) or Negative Inspiratory Force (NIF worse than -20 to -30 cmH₂O).</li>
          <li><strong>Severe Bulbar Weakness:</strong> Profound dysphagia (high risk of aspiration), nasal/slurred dysarthria, dysphonia, inability to handle oral secretions, and facial/jaw drop.</li>
          <li><strong>Ocular &amp; Generalized Fatigable Weakness:</strong> Severe bilateral ptosis, diplopia, neck flexor weakness ("dropped head"), and proximal limb weakness that worsens with exertion.</li>
        </ul>
        <h4>2. Emergency Management of Myasthenic Crisis (ICU Setting)</h4>
        <ul>
          <li><strong>1. Airway &amp; Respiratory Support (Priority #1):</strong>
            <ul>
              <li>Admit to <strong>ICU</strong> and monitor serial bedside <strong>FVC and NIF</strong> every 2–4 hours (do NOT wait for hypercapnia/hypoxia on ABG!).</li>
              <li><strong>Early Elective Endotracheal Intubation &amp; Mechanical Ventilation</strong> if FVC &lt;15–20 mL/kg, NIF &lt; -20 cmH₂O, severe bulbar dysfunction/aspiration risk, or respiratory fatigue.</li>
            </ul>
          </li>
          <li><strong>2. Rapid Immunomodulatory Therapy (Cornerstone):</strong>
            <ul>
              <li><strong>Plasma Exchange (Plasmapheresis — PLEX):</strong> 5 exchanges over 7–14 days to rapidly clear circulating anti-AChR/anti-MuSK antibodies (fastest onset of action).</li>
              <li><strong>OR Intravenous Immunoglobulin (IVIG):</strong> 2 g/kg divided over 2–5 days (equally effective; preferred if hemodynamically unstable or poor vascular access).</li>
            </ul>
          </li>
          <li><strong>3. Medication Adjustments:</strong>
            <ul>
              <li><strong>Temporarily hold Anticholinesterases (Pyridostigmine)</strong> once intubated (reduces excessive bronchial secretions and avoids cholinergic crisis; restart upon weaning).</li>
              <li><strong>Corticosteroids (Prednisolone):</strong> Initiate or optimize for intermediate-term control (caution: high-dose steroids can cause transient worsening in the first 1–2 weeks, so give alongside PLEX/IVIG in ICU).</li>
            </ul>
          </li>
          <li><strong>4. Identify &amp; Treat Precipitants:</strong> Aggressively treat underlying infections (using MG-safe antibiotics — <strong>AVOID aminoglycosides, fluoroquinolones, macrolides</strong>), correct electrolytes, and provide DVT/ulcer prophylaxis and NG tube nutrition.</li>
        </ul>
      `
    }
  ],
  mcqs: [
    {
      id: "ne-t7-m1",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q22 | Batch 24 | Final",
      stem: "A 30-year-old female presents with bilateral fatigable ptosis, diplopia, and proximal muscle weakness that worsens at the end of the day. The underlying pathophysiology of this condition is most commonly mediated by:",
      options: {
        a: "Autoantibodies against postsynaptic Acetylcholine (ACh) receptors",
        b: "Autoantibodies against presynaptic Calcium channels",
        c: "Demyelination of peripheral motor nerves",
        d: "Degeneration of anterior horn cells"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Myasthenia Gravis (~85% of generalized cases) is mediated by IgG autoantibodies against POSTSYNAPTIC nicotinic Acetylcholine receptors (AChR) at the neuromuscular junction (blocking ACh binding and causing complement-mediated receptor destruction).",
        b: "Autoantibodies against PRESYNAPTIC voltage-gated calcium channels cause Lambert-Eaton Myasthenic Syndrome (LEMS — associated with small-cell lung cancer; weakness IMPROVES with repeated use).",
        c: "Demyelination of peripheral motor nerves causes Guillain-Barré syndrome (GBS).",
        d: "Degeneration of anterior horn cells (plus UMN) causes Amyotrophic Lateral Sclerosis (ALS)."
      },
      highYield: "Myasthenia Gravis = Postsynaptic AChR Ab (worsens with use, ocular/bulbar first, thymoma). LEMS = Presynaptic Ca²⁺ channel Ab (improves with use, proximal legs, SCLC)."
    },
    {
      id: "ne-t7-m2",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q26 | Batch 24 | Final",
      stem: "Which of the following clinical signs is classically present in a child with Duchenne Muscular Dystrophy (DMD)?",
      options: {
        a: "Gowers' sign (and calf pseudohypertrophy)",
        b: "Glove and stocking sensory loss",
        c: "Brisk deep tendon reflexes",
        d: "Myotonia of grip"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Duchenne Muscular Dystrophy (X-linked recessive frameshift mutation in dystrophin gene) classically presents in boys aged 2–5 with proximal hip/pelvic girdle weakness causing Gowers' sign (using hands to 'climb up' the legs to stand), waddling gait, calf pseudohypertrophy (fibrofatty replacement), and massively elevated CK.",
        b: "Glove-and-stocking sensory loss is seen in peripheral polyneuropathy (e.g., DM); sensation is completely normal in DMD.",
        c: "Deep tendon reflexes are diminished/absent in DMD (not brisk).",
        d: "Grip myotonia (delayed relaxation after handgrip) is classic for Myotonic Dystrophy (CTG repeat)."
      },
      highYield: "DMD = X-linked recessive (dystrophin absence) → Boy 3–5 yrs + Gowers' sign + Calf pseudohypertrophy + ↑↑↑ CK + Dilated cardiomyopathy."
    },
    {
      id: "ne-t7-m3",
      type: "mcq",
      batch: 23,
      exam: "Final",
      source: "Q27 | Batch 23 | Final",
      stem: "Which of the following drugs is used for the treatment of Amyotrophic Lateral Sclerosis (ALS) to prolong survival?",
      options: {
        a: "Riluzole",
        b: "Beta-interferon",
        c: "Pyridostigmine",
        d: "Levodopa"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Riluzole (a glutamate release inhibitor / anti-excitotoxic agent) is the classic disease-modifying drug for ALS shown to modestly prolong survival (by ~2–3 months) and delay tracheostomy.",
        b: "Beta-interferon is used for Multiple Sclerosis.",
        c: "Pyridostigmine is used for Myasthenia Gravis.",
        d: "Levodopa is used for Parkinson's Disease."
      },
      highYield: "ALS Treatment: Riluzole (glutamate antagonist — prolongs survival) + Edaravone (free radical scavenger) + Non-invasive ventilation (BiPAP) + PEG tube."
    },
    {
      id: "ne-t7-m4",
      type: "mcq",
      batch: 22,
      exam: "Midterm",
      source: "Q9 | Batch 22 | Midterm",
      stem: "The most diagnostic investigation for myasthenia Gravis is.",
      options: {
        a: "Tensilon test.",
        b: "EMG",
        c: "IGM IGg",
        d: "EEG"
      },
      correct: "b",
      explanations: {
        a: "Tensilon (Edrophonium) test was historically used at bedside but has high false-positive/negative rates and cholinergic side effects (bradycardia/asystole) and is rarely performed today.",
        b: "CORRECT: Single-Fiber EMG (SFEMG) showing increased 'jitter' is the MOST SENSITIVE diagnostic test for MG (>95%), and Repetitive Nerve Stimulation (RNS) shows a classic decremental response (>10% drop in CMAP).",
        c: "Specific anti-AChR IgG antibodies are the most specific first-line serologic test, though 'IGM IGg' alone is non-specific.",
        d: "EEG evaluates brain electrical activity (epilepsy), not the neuromuscular junction."
      },
      highYield: "MG Diagnosis: 1st-line & Most Specific = Anti-AChR Ab (or Anti-MuSK Ab); Most Sensitive = Single-Fiber EMG (increased jitter); Bedside = Ice pack test.",
      examNote: "Compare with Batch 22 Final Q29, which confirms that Tensilon test is NOT the best confirmatory test for MG."
    },
    {
      id: "ne-t7-m5",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q25 | Batch 22 | Final",
      stem: "All the following are true regarding motor neuron disease except-;",
      options: {
        a: "Usually occur after the age of 50 years.",
        b: "Very Uncommon before the age of 50 years",
        c: "Affects male more than female.",
        d: "Limb muscle weakness, cramps, fasciculation are most common clinical presentation."
      },
      correct: "b",
      explanations: {
        a: "True: MND (ALS) usually occurs after the age of 50 years (peak 55–75 years).",
        b: "CORRECT (EXCEPT): Per Davidson's Principles & Practice of Medicine, MND is 'very uncommon before the age of 30 years' (NOT 50 years — ~10–15% of cases occur between ages 30 and 50).",
        c: "True: Slightly more common in males than females (M:F ≈ 1.5:1).",
        d: "True: Asymmetric distal limb weakness, muscle cramps, wasting, and fasciculations are the most common presentation."
      },
      highYield: "MND (ALS) Key Rule: Combined UMN + LMN signs with COMPLETELY SPARED sensation, extraocular muscles, and bowel/bladder sphincters!"
    },
    {
      id: "ne-t7-m6",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q29 | Batch 22 | Final",
      stem: "All the following are true regarding myasthenia Gravies except-:",
      options: {
        a: "Is an autoimmune disorder.",
        b: "Most patient have autoantibody to either the postsynaptic acetylcholine receptor or muscle-specific tyrosine kinase receptor.",
        c: "Fatigable ptosis differentiate myasthenic ptosis from other Ptosis.",
        d: "Diagnosis is best confirmed by tensilon test."
      },
      correct: "d",
      explanations: {
        a: "True: MG is an antibody-mediated autoimmune disorder of the NMJ.",
        b: "True: ~85% have anti-AChR antibodies and ~5–8% have anti-MuSK antibodies.",
        c: "True: Fatigable ptosis (worsening on sustained upward gaze) is a hallmark clinical sign.",
        d: "CORRECT (EXCEPT): Diagnosis is best confirmed by serum Anti-AChR/Anti-MuSK antibodies and electrodiagnostic studies (RNS/SFEMG), NOT the Tensilon (edrophonium) test (which is obsolete due to false results and cardiac risks)."
      },
      highYield: "Never pick 'Tensilon test' as the best confirmatory test for MG when antibodies/EMG are the modern standard!"
    },
    {
      id: "ne-t7-m7",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q2 | Batch 21 | Final",
      stem: "MG is associated with all of the following disorders except:",
      options: {
        a: "thymomas",
        b: "thymic hyperplesia",
        c: "chronic autoimmune thyroiditis",
        d: "DM"
      },
      correct: "d",
      explanations: {
        a: "Thymoma occurs in ~10–15% of MG patients (always order a Chest CT in newly diagnosed MG!).",
        b: "Thymic follicular hyperplasia occurs in ~65–70% of young anti-AChR positive MG patients.",
        c: "Autoimmune thyroid disease (Graves' disease & Hashimoto's thyroiditis) is the most common coexisting autoimmune disorder in MG (~5–10%).",
        d: "CORRECT (EXCEPT): Diabetes mellitus is NOT a classic primary autoimmune/thymic association of MG compared to thymoma, thymic hyperplasia, and autoimmune thyroiditis."
      },
      highYield: "Every newly diagnosed MG patient needs: 1) Chest CT (to rule out Thymoma/Thymic hyperplasia), 2) Thyroid Function Tests (TSH/T4 — strong association with autoimmune thyroid disease)."
    },
    {
      id: "ne-t7-m8",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q29 | Batch 21 | Final",
      stem: "amyotrophic lateral sclerosis is due to :",
      options: {
        a: "lateral horn cells disorder",
        b: "anterior horn cells disorder",
        c: "A and B",
        d: "non of the above"
      },
      correct: "b",
      explanations: {
        a: "Lateral horn cells (T1–L2) are preganglionic sympathetic autonomic neurons — spared in ALS.",
        b: "CORRECT: ALS is caused by progressive degeneration of Anterior Horn Cells in the spinal cord (and brainstem motor nuclei → LMN signs) together with the lateral corticospinal tracts (UMN signs).",
        c: "Incorrect (lateral horn is spared).",
        d: "Incorrect."
      },
      highYield: "ALS Pathology = Anterior Horn Cells (LMN) + Lateral Corticospinal Tracts (UMN). Spares dorsal columns, lateral horn (autonomics), and extraocular nuclei."
    },
    {
      id: "ne-t7-m9",
      type: "mcq",
      batch: 20,
      exam: "Midterm",
      source: "Q14 | Batch 20 | Midterm",
      stem: "Patients with which of the following conditions are most likely to have asymmetric facial weakness?",
      options: {
        a: "Facioscapulohumeral dystrophy",
        b: "Myasthenia gravis",
        c: "Myotonic dystrophy",
        d: "Oculopharyngeal dystrophy"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Facioscapulohumeral Muscular Dystrophy (FSHD — autosomal dominant, chromosome 4q35) is uniquely characterized by ASYMMETRIC facial weakness (inability to whistle/close eyes tightly, transverse smile) and asymmetric scapular winging.",
        b: "MG typically causes fatigable ocular (ptosis/diplopia) and bulbar weakness.",
        c: "Myotonic dystrophy causes symmetric facial weakness ('hatchet face'), frontal balding, cataracts, and grip myotonia.",
        d: "Oculopharyngeal muscular dystrophy (OPMD) causes symmetric progressive ptosis and dysphagia in older adults."
      },
      highYield: "Asymmetric facial weakness + Scapular winging = Facioscapulohumeral Dystrophy (FSHD)."
    },
    {
      id: "ne-t7-m10",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q21 | Batch 18 | Final",
      stem: "A 50-year-old man presents with weakness of limbs for 1 year which is progressive. On examination he has fasciculations and wasting of the muscles of his upper limbs. Reflexes are brisk in his lower limbs and planters are extensor.\nWhat is the most likely diagnosis?",
      options: {
        a: "Amyotrophic lateral sclerosis",
        b: "Polyneuropathy",
        c: "Poliomyelitis",
        d: "Muscular dystrophy"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Progressive weakness with mixed LMN signs (fasciculations and muscle wasting in upper limbs) AND UMN signs (brisk lower limb reflexes and extensor plantar/Babinski responses) without sensory loss is the classic textbook presentation of Amyotrophic Lateral Sclerosis (ALS).",
        b: "Polyneuropathy causes pure LMN signs (areflexia) + glove-and-stocking sensory loss.",
        c: "Poliomyelitis causes acute pure LMN asymmetric flaccid paralysis (no UMN signs).",
        d: "Muscular dystrophy causes symmetric proximal weakness without UMN signs or fasciculations."
      },
      highYield: "LMN signs (wasting + fasciculations) + UMN signs (brisk reflexes + Babinski +) + NO sensory loss = ALS!"
    },
    {
      id: "ne-t7-m11",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q22 | Batch 18 | Final",
      stem: "Which of the following should be used in patients with myasthenia gravis?",
      options: {
        a: "Bupropion",
        b: "Aminoglycosides",
        c: "Haloperidol",
        d: "Pyridostigmine",
        e: "Sulfonamides"
      },
      correct: "d",
      explanations: {
        a: "Not used for MG.",
        b: "Aminoglycosides (e.g., Gentamicin) impair presynaptic ACh release and are STRICTLY CONTRAINDICATED in MG (can precipitate myasthenic crisis!).",
        c: "Not used for MG.",
        d: "CORRECT: Pyridostigmine (oral reversible acetylcholinesterase inhibitor) is the first-line symptomatic treatment of choice for Myasthenia Gravis.",
        e: "Not used for MG."
      },
      highYield: "Drugs to AVOID in Myasthenia Gravis: Aminoglycosides, Fluoroquinolones, Macrolides, Beta-blockers, Magnesium sulfate, Penicillamine, Quinine/Procainamide."
    },
    {
      id: "ne-t7-m12",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q28 | Batch 18 | Final",
      stem: "Which of the following is the mechanism of action for pyridostigmine?",
      options: {
        a: "Voltage-gated calcium channel agonist",
        b: "Reversible acetylcholinesterase inhibitor",
        c: "Muscarinic receptor agonist",
        d: "Nicotinic receptor antagonist",
        e: "Irreversible acetylcholinesterase inhibitor"
      },
      correct: "b",
      explanations: {
        a: "Incorrect.",
        b: "CORRECT: Pyridostigmine is a REVERSIBLE acetylcholinesterase (AChE) inhibitor that prevents breakdown of ACh in the synaptic cleft, increasing ACh availability for the remaining postsynaptic nicotinic receptors.",
        c: "Incorrect.",
        d: "Incorrect.",
        e: "Irreversible AChE inhibitors are organophosphate pesticides/nerve agents (toxic!)."
      },
      highYield: "Pyridostigmine = Reversible Acetylcholinesterase Inhibitor (1st-line symptomatic therapy for MG)."
    }
  ]
});
// ==========================================
// NEUROLOGY - TOPIC 8: SPINAL CORD DISORDERS & PERIPHERAL NEUROPATHY
// ==========================================
window.IM_DATA.neurology.push({
  title: "Spinal Cord Disorders & Peripheral Neuropathy (SACD, Transverse Myelitis, Tabes Dorsalis)",
  shortTitle: "Spinal Cord & Neuropathy",
  essays: [
    {
      id: "ne-t8-e1",
      type: "essay",
      batch: 19,
      exam: "Final",
      source: "Long Essay Q1 (Alt) | Batch 19 | Final",
      stem: "1- Write on details about Subacute combined degeneration of Spinal Cord (10 M)",
      modelAnswer: `
        <h4>1. Definition &amp; Pathophysiology</h4>
        <ul>
          <li>A progressive neurodegenerative disorder of the spinal cord caused by <strong>severe Vitamin B₁₂ (Cobalamin) deficiency</strong>.</li>
          <li><strong>Mechanism:</strong> Vitamin B₁₂ is an essential cofactor for <em>methylmalonyl-CoA mutase</em> (converts methylmalonyl-CoA → succinyl-CoA) and <em>methionine synthase</em>. Deficiency causes accumulation of methylmalonic acid and abnormal fatty acids, leading to <strong>segmental demyelination</strong> and axonal degeneration of the <strong>dorsal (posterior) columns</strong> and <strong>lateral corticospinal tracts</strong> (plus peripheral nerves).</li>
        </ul>
        <h4>2. Common Causes of Vitamin B₁₂ Deficiency</h4>
        <ul>
          <li><strong>Pernicious Anemia:</strong> Autoimmune destruction of gastric parietal cells / antibodies against Intrinsic Factor (most common cause in Western countries).</li>
          <li><strong>Malabsorption:</strong> Terminal ileal disease/resection (Crohn's disease, celiac disease), gastrectomy, chronic <em>H. pylori</em> gastritis, <em>Diphyllobothrium latum</em> (fish tapeworm).</li>
          <li><strong>Dietary &amp; Drugs:</strong> Strict veganism, chronic <strong>Metformin</strong> or <strong>PPI</strong> use, and <strong>Nitrous Oxide (N₂O)</strong> abuse/anesthesia (rapidly inactivates B₁₂).</li>
        </ul>
        <h4>3. Clinical Features (Mixed UMN + LMN + Dorsal Column Signs)</h4>
        <ul>
          <li><strong>Dorsal Column Involvement (Earliest):</strong> Symmetrical glove-and-stocking <strong>paresthesias</strong> (tingling/numbness in feet &amp; hands), loss of <strong>vibration</strong> and <strong>joint position sense (proprioception)</strong>, sensory ataxia, and a <strong>positive Romberg's sign</strong>.</li>
          <li><strong>Lateral Corticospinal Tract Involvement (UMN):</strong> Progressive symmetric spastic leg weakness, hyperreflexia, and <strong>bilateral extensor plantar responses (Babinski +)</strong>.</li>
          <li><strong>Peripheral Neuropathy (LMN):</strong> Often coexists, classically producing <strong>absent ankle jerks</strong> alongside <strong>upgoing plantars (Babinski +)</strong> and brisk knee jerks.</li>
          <li><strong>Other Neurological &amp; Systemic Signs:</strong> Optic atrophy, irritability, depression, cognitive impairment/dementia, glossitis, and megaloblastic anemia (MCV &gt;100 fL — note: neurological symptoms can occur <em>without</em> anemia!).</li>
        </ul>
        <h4>4. Investigations</h4>
        <ul>
          <li><strong>Blood Tests:</strong> Low serum Vitamin B₁₂, markedly elevated <strong>Methylmalonic Acid (MMA)</strong> and <strong>Homocysteine</strong> (most sensitive confirmatory tests), CBC (macrocytic anemia, hypersegmented neutrophils).</li>
          <li><strong>Etiologic Workup:</strong> Anti-Intrinsic Factor and Anti-Parietal Cell antibodies.</li>
          <li><strong>Spine MRI:</strong> T2-weighted hyperintensity in the posterior columns showing the classic <strong>"Inverted V sign"</strong>.</li>
        </ul>
        <h4>5. Management</h4>
        <ul>
          <li><strong>Parenteral Vitamin B₁₂ Replacement:</strong> <strong>IM Hydroxocobalamin</strong> (or Cyanocobalamin) 1000 µg every other day for 2 weeks (or until no further neurological improvement), followed by 1000 µg IM every 1–3 months lifelong.</li>
          <li><strong>Critical Trap:</strong> <strong>NEVER give Folic Acid alone</strong> before excluding B₁₂ deficiency — folate corrects the megaloblastic anemia while precipitating or irreversibly worsening Subacute Combined Degeneration!</li>
        </ul>
      `
    }
  ],
  mcqs: [
    {
      id: "ne-t8-m1",
      type: "mcq",
      batch: 24,
      exam: "Final",
      source: "Q25 | Batch 24 | Final",
      stem: "Which of the following is the most common cause of symmetrical distal sensory polyneuropathy (glove and stocking distribution) worldwide?",
      options: {
        a: "Diabetes Mellitus (DM)",
        b: "Chronic alcohol abuse",
        c: "Leprosy",
        d: "Vitamin B12 deficiency"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Diabetes Mellitus is the #1 most common cause of symmetrical distal sensory polyneuropathy ('glove-and-stocking' distribution) worldwide.",
        b: "Chronic alcohol abuse (combined with thiamine/B1 deficiency) is a common cause, but second to diabetes.",
        c: "Leprosy classically causes asymmetric mononeuritis multiplex/palpable thickened nerves and is the #1 TREATABLE infectious cause of neuropathy worldwide (compare with Batch 18 Final Q26).",
        d: "Vitamin B12 deficiency causes subacute combined degeneration and sensory neuropathy, less common overall than DM."
      },
      highYield: "Most common cause of symmetrical distal polyneuropathy (glove-and-stocking) = Diabetes Mellitus. Most common TREATABLE (curable) cause of neuropathy worldwide = Leprosy."
    },
    {
      id: "ne-t8-m2",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q26 | Batch 22 | Final",
      stem: "All the following are true regarding subacute combined degeneration of spinal cord except-:",
      options: {
        a: "Is due to B12 deficiency.",
        b: "Cause segmental loss of myelin of dorsal and lateral columns.",
        c: "Clinical presentation include gradual weakness associated with paresthesia and loss of proprioception.",
        d: "almost always associated with cognitive impairment."
      },
      correct: "d",
      explanations: {
        a: "True: SACD is caused by severe Vitamin B12 deficiency.",
        b: "True: Causes segmental demyelination of the dorsal (posterior) and lateral (corticospinal) columns.",
        c: "True: Presents with gradual weakness, paresthesias, and loss of vibration/proprioception.",
        d: "CORRECT (EXCEPT): Cognitive impairment/dementia MAY occur in severe B12 deficiency, but it is NOT 'almost always' present in SACD."
      },
      highYield: "SACD Classic Exam Finding: Absent ankle reflexes (peripheral neuropathy) + Upgoing plantars / Babinski (+) (lateral corticospinal tract) + Loss of vibration/proprioception (dorsal columns)."
    },
    {
      id: "ne-t8-m3",
      type: "mcq",
      batch: 22,
      exam: "Final",
      source: "Q27 | Batch 22 | Final",
      stem: "All the following are true regarding transverse myelitis except-:",
      options: {
        a: "TM is a rare problem.",
        b: "The exact cause is uncertain.",
        c: "Sphincteric disturbances and backache are rare.",
        d: "Is treated by steroid if the cause is post autoimmune disorder."
      },
      correct: "c",
      explanations: {
        a: "True: Acute transverse myelitis is a relatively rare neurological disorder.",
        b: "True: Many cases are idiopathic (post-infectious or autoimmune, e.g., MS, NMO, SLE).",
        c: "CORRECT (EXCEPT): Localized BACKACHE and early SPHINCTERIC DISTURBANCES (urinary retention/incontinence and constipation) are hallmark, VERY COMMON features of transverse myelitis (NOT rare!).",
        d: "True: High-dose IV Methylprednisolone is the first-line treatment for autoimmune/idiopathic transverse myelitis."
      },
      highYield: "Transverse Myelitis Triad: Bilateral motor weakness + Distinct sensory level + Early bowel/bladder sphincteric dysfunction (usually Thoracic cord) → Treat with IV Methylprednisolone."
    },
    {
      id: "ne-t8-m4",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q24 | Batch 21 | Final",
      stem: "typical manifestations of the spinal cord disease are the following except:",
      options: {
        a: "gait ataxia",
        b: "spasticity",
        c: "hyperreflexia",
        d: "bowel and bladder incontinence"
      },
      correct: "a",
      explanations: {
        a: "CORRECT (EXCEPT): Gait ataxia is classically a hallmark of CEREBELLAR disease (though sensory ataxia can occur if dorsal columns are selectively affected, the classic pyramidal/autonomic triad of myelopathy is spasticity, hyperreflexia, and sphincter incontinence).",
        b: "Spasticity (UMN lesion below the level) is a classic manifestation of spinal cord disease.",
        c: "Hyperreflexia (and Babinski +) below the lesion is a classic manifestation.",
        d: "Bowel and bladder incontinence/retention is a classic autonomic manifestation of spinal cord disease."
      },
      highYield: "Classic Spinal Cord Disease (Myelopathy) Signs: Spastic paraparesis/quadriparesis + Hyperreflexia + Extensor plantars + Sensory level + Bowel/bladder dysfunction."
    },
    {
      id: "ne-t8-m5",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q25 | Batch 21 | Final",
      stem: "sever vitB12 deficiency cause segmental loss of myelin especially in the:",
      options: {
        a: "dorsal columns of spinal cord",
        b: "lateral columns of spinal cord",
        c: "A and B",
        d: "non of the above"
      },
      correct: "c",
      explanations: {
        a: "Dorsal columns are affected (loss of vibration & proprioception).",
        b: "Lateral columns (corticospinal tracts) are affected (spastic weakness & Babinski +).",
        c: "CORRECT: Severe Vitamin B12 deficiency causes Subacute COMBINED Degeneration — affecting BOTH the dorsal columns AND the lateral columns of the spinal cord.",
        d: "Incorrect."
      },
      highYield: "Why is it called 'COMBINED' degeneration? Because it combines Dorsal Column + Lateral Corticospinal Tract demyelination!"
    },
    {
      id: "ne-t8-m6",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q26 | Batch 21 | Final",
      stem: "tabes dorsalis is syphilitic involvement of the:",
      options: {
        a: "anterior columns of the spinal cord",
        b: "lateral columns of the spinal cord",
        c: "posterior columns of the Spinal cord",
        d: "A and c"
      },
      correct: "c",
      explanations: {
        a: "Anterior columns/horns are spared in tabes dorsalis.",
        b: "Lateral columns are spared in pure tabes dorsalis.",
        c: "CORRECT: Tabes dorsalis (tertiary neurosyphilis) causes selective demyelination of the POSTERIOR (dorsal) columns and dorsal nerve roots → sensory ataxia ('stamping gait'), positive Romberg sign, lightning pains, areflexia, Charcot joints, and Argyll Robertson pupils.",
        d: "Incorrect."
      },
      highYield: "Tabes Dorsalis (Tertiary Syphilis) = Posterior (Dorsal) columns + Dorsal roots → Sensory ataxia + Romberg (+) + Lightning pains + Charcot joints + Argyll Robertson pupil (accommodates but does NOT react to light)."
    },
    {
      id: "ne-t8-m7",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q27 | Batch 21 | Final",
      stem: "transverse myelitis is a-rare problem causing inflammation of both sides of 1 and 2 segment of the cord usually:",
      options: {
        a: "cervical",
        b: "thoracic",
        c: "lumber",
        d: "sacral"
      },
      correct: "b",
      explanations: {
        a: "Cervical cord is less commonly affected than thoracic.",
        b: "CORRECT: Acute transverse myelitis most commonly involves the THORACIC spinal cord (presenting with paraparesis, a truncal sensory level, and sphincter dysfunction).",
        c: "Lumbar cord is less common.",
        d: "Sacral cord is rare."
      },
      highYield: "Most common spinal cord level in Transverse Myelitis = THORACIC cord (Davidson's verbatim fact)."
    },
    {
      id: "ne-t8-m8",
      type: "mcq",
      batch: 21,
      exam: "Final",
      source: "Q28 | Batch 21 | Final",
      stem: "the sole clue to cervical myelopathy is:",
      options: {
        a: "a brisk ankle reflex in patient over 65year",
        b: "a brisk knee reflex",
        c: "A and B",
        d: "non A or B"
      },
      correct: "a",
      explanations: {
        a: "CORRECT: Direct textbook pearl (Davidson's): Ankle reflexes normally diminish or become absent in healthy adults over age 65; therefore, a BRISK ankle reflex in a patient >65 years may be the SOLE early clinical clue to cervical spondylotic myelopathy (UMN compression).",
        b: "A brisk knee reflex alone is less specific than an unexpectedly brisk ankle reflex in an elderly patient.",
        c: "Incorrect.",
        d: "Incorrect."
      },
      highYield: "Davidson's Pearl: Brisk ankle jerk in a patient >65 years = Suspect Cervical Myelopathy! (Also check for inverted supinator/brachioradialis reflex & Hoffman's sign)."
    },
    {
      id: "ne-t8-m9",
      type: "mcq",
      batch: 18,
      exam: "Final",
      source: "Q26 | Batch 18 | Final",
      stem: "Which of the following is the most common treatable cause of neuropathy in the world?",
      options: {
        a: "Hypothyroidism",
        b: "Diabetes",
        c: "Paraproteinemia",
        d: "Lead toxicity",
        e: "Leprosy"
      },
      correct: "e",
      explanations: {
        a: "Hypothyroidism causes entrapment neuropathy (carpal tunnel), far less common globally.",
        b: "Diabetes is the most common cause of neuropathy overall, but diabetic neuropathy is chronic/progressive and NOT curable with antimicrobial therapy.",
        c: "Uncommon cause.",
        d: "Uncommon cause (causes wrist drop / radial nerve motor neuropathy).",
        e: "CORRECT: Leprosy (Hansen's disease, caused by Mycobacterium leprae) is classically the most common TREATABLE (curable with multidrug therapy: Rifampicin + Dapsone ± Clofazimine) cause of peripheral neuropathy worldwide."
      },
      highYield: "Notice the exam wording! Most common cause of symmetrical neuropathy worldwide = Diabetes Mellitus. Most common TREATABLE cause of neuropathy in the world = Leprosy."
    }
  ]
});
// ==========================================
// NEUROLOGY - TOPIC 9: CNS INFECTIONS (BACTERIAL MENINGITIS & CNS TB)
// ==========================================
window.IM_DATA.neurology.push({
  title: "CNS Infections (Bacterial Meningitis & CNS TB)",
  shortTitle: "CNS Infections",
  essays: [
    {
      id: "ne-t9-e1",
      type: "essay",
      batch: 19,
      exam: "Final",
      source: "Long Essay Q1 | Batch 19 | Final",
      stem: "1- Write on details about CNS TB (TB meningitis) (10 M)",
      modelAnswer: `
        <h4>1. Etiology &amp; Pathophysiology</h4>
        <ul>
          <li>Caused by <em>Mycobacterium tuberculosis</em> (acid-fast bacillus).</li>
          <li><strong>Mechanism:</strong> Hematogenous dissemination from a primary pulmonary focus forms small subpial/subependymal caseous foci (<strong>Rich foci</strong>). Rupture of a Rich focus into the subarachnoid space triggers a dense, gelatinous <strong>basal meningeal exudate</strong> (especially around the Circle of Willis and brainstem), causing:
            <ul>
              <li><strong>Cranial nerve palsies</strong> (especially CN VI, III, IV, VII).</li>
              <li><strong>Communicating hydrocephalus</strong> (obstruction of CSF resorption/basal cisterns).</li>
              <li><strong>Obliterative endarteritis / vasculitis</strong> → ischemic strokes (classically basal ganglia/internal capsule).</li>
            </ul>
          </li>
        </ul>
        <h4>2. Clinical Features (Subacute Onset Over 1–3 Weeks) — MRC Staging</h4>
        <ul>
          <li><strong>Stage I (Prodromal / Early):</strong> Nonspecific low-grade fever, malaise, night sweats, weight loss, headache, irritability, and personality changes; fully conscious with no focal neurological deficits.</li>
          <li><strong>Stage II (Meningitic / Intermediate):</strong> Severe headache, vomiting, neck stiffness (meningismus), mild confusion/lethargy (GCS 11–14), and <strong>cranial nerve palsies</strong> (diplopia/CN VI palsy is most common) or focal deficits.</li>
          <li><strong>Stage III (Paralytic / Advanced):</strong> Stupor or coma (GCS ≤10), seizures, dense hemiplegia/paraplegia, decerebrate posturing, and severe raised ICP (highest mortality).</li>
          <li><em>Other Forms of CNS TB:</em> Intracranial <strong>Tuberculoma</strong> (ring-enhancing space-occupying lesion causing seizures/focal signs) and <strong>Spinal TB (Pott's disease)</strong>.</li>
        </ul>
        <h4>3. Investigations</h4>
        <ul>
          <li><strong>Lumbar Puncture (CSF Analysis — Cornerstone):</strong>
            <ul>
              <li><em>Appearance:</em> Clear or slightly opalescent; forms a classic <strong>"cobweb" (fibrin) clot</strong> on standing.</li>
              <li><em>Opening Pressure:</em> Markedly elevated.</li>
              <li><em>Cells:</em> <strong>Lymphocytic pleocytosis</strong> (100–500 cells/mm³; may be neutrophilic very early).</li>
              <li><em>Protein:</em> Markedly elevated (100–500 mg/dL).</li>
              <li><em>Glucose:</em> Markedly <strong>decreased</strong> (&lt;40 mg/dL or CSF:serum ratio &lt;0.5).</li>
              <li><em>Microbiology &amp; Molecular:</em> <strong>Ziehl-Neelsen (AFB) smear</strong>, <strong>GeneXpert MTB/RIF (PCR)</strong> (rapid, high specificity), Mycobacterial culture (gold standard, slow), and elevated CSF <strong>Adenosine Deaminase (ADA)</strong>.</li>
            </ul>
          </li>
          <li><strong>Neuroimaging (Brain MRI with Contrast — Preferred over CT):</strong> Classic triad of <strong>basal meningeal enhancement</strong>, <strong>hydrocephalus</strong>, and <strong>basal ganglia infarcts</strong> (± ring-enhancing tuberculomas).</li>
          <li><strong>Systemic Workup:</strong> Chest X-ray (miliary or pulmonary TB), HIV testing, and serum sodium (check for <strong>SIADH / hyponatremia</strong>).</li>
        </ul>
        <h4>4. Management (Start Empirically Immediately — Do NOT Wait for Culture)</h4>
        <ul>
          <li><strong>Anti-Tuberculous Therapy (12 Months Total):</strong>
            <ul>
              <li><em>Intensive Phase (2 months):</em> <strong>RIPE</strong> — Rifampicin, Isoniazid (+ Pyridoxine/Vit B₆), Pyrazinamide, and Ethambutol.</li>
              <li><em>Continuation Phase (10 months):</em> <strong>Rifampicin + Isoniazid</strong>.</li>
            </ul>
          </li>
          <li><strong>Adjunctive Corticosteroids (MANDATORY):</strong> <strong>IV Dexamethasone</strong> (or oral Prednisolone) tapered over 6–8 weeks — significantly reduces mortality, basal inflammation, and neurological sequelae!</li>
          <li><strong>Supportive &amp; Surgical:</strong> Manage hyponatremia/SIADH, antiepileptics if seizures occur, and neurosurgical <strong>VP shunt / EVD</strong> for severe symptomatic hydrocephalus.</li>
        </ul>
      `
    }
  ],
  mcqs: [
    {
      id: "ne-t9-m1",
      type: "mcq",
      batch: 19,
      exam: "Final",
      source: "Q25 | Batch 19 | Final",
      stem: "All of the following CSF finding in acute bacterial meningitis except:",
      options: {
        a: "cloudy colour",
        b: "1000-5000/mm lymphocyte",
        c: "Glucose is decreased",
        d: "protein increase"
      },
      correct: "b",
      explanations: {
        a: "True: CSF in acute bacterial meningitis is classically cloudy/turbid (purulent) due to high WBCs and protein.",
        b: "CORRECT (EXCEPT): Acute bacterial meningitis causes marked NEUTROPHILIC (PMN) pleocytosis (1,000–5,000+ neutrophils/mm³), NOT lymphocytes! Lymphocytic predominance is characteristic of Viral, Tuberculous, and Fungal meningitis.",
        c: "True: CSF glucose is markedly decreased (<40 mg/dL or <40% of serum glucose) due to consumption by bacteria and leukocytes.",
        d: "True: CSF protein is markedly elevated (>100–200 mg/dL) due to blood-brain barrier breakdown."
      },
      highYield: "CSF Comparison: Bacterial = Cloudy, ↑↑ PMNs (Neutrophils), ↓↓ Glucose, ↑↑ Protein. Viral = Clear, ↑ Lymphocytes, NORMAL Glucose, Normal/mild ↑ Protein. TB/Fungal = Clear/Cobweb, ↑ Lymphocytes, ↓↓ Glucose, ↑↑↑ Protein."
    }
  ]
});
