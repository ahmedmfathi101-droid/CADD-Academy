import type { L10n, Level, LessonMeta, PathDef, SkillDomain } from "./types";

const L = (ar: string, en: string): L10n => ({ ar, en });

function lesson(
  id: string,
  levelId: string,
  moduleId: string,
  order: number,
  title: L10n,
  summary: L10n,
  durationMin: number,
  skills: SkillDomain[],
  prerequisites: string[] = [],
  quizId?: string,
): LessonMeta {
  return {
    id,
    levelId,
    moduleId,
    order,
    title,
    summary,
    durationMin,
    skills,
    prerequisites,
    quizId,
  };
}

export const levels: Level[] = [
  {
    id: "l0",
    number: 0,
    code: "L0",
    title: L("التوجّه", "Orientation"),
    summary: L(
      "ما هو الاكتشاف الدوائي الحاسوبي، أين ينجح، وأين يفشل، وكيف ستتعلّم.",
      "What computational drug discovery is, where it helps, where it fails, and how you will learn.",
    ),
    skills: ["research"],
    modules: [
      {
        id: "l0-m1",
        title: L("الخريطة الكبرى", "The big map"),
        summary: L("من الهدف إلى المرشح، ودور الحساب.", "From target to candidate, and the role of computation."),
        lessonIds: ["l0-cadd", "l0-pipeline", "l0-limits", "l0-misconceptions", "l0-journey"],
      },
    ],
  },
  {
    id: "l1",
    number: 1,
    code: "L1",
    title: L("أسس الكيمياء", "Chemistry foundations"),
    summary: L(
      "المجموعات الوظيفية، التأثيرات الإلكترونية، التوتومرية، والحموضة كما يراها مصمّم الدواء.",
      "Functional groups, electronic effects, tautomerism, and acidity as a drug designer sees them.",
    ),
    skills: ["chemistry"],
    modules: [
      {
        id: "l1-m1",
        title: L("البنية الإلكترونية للدواء", "Drug electronics"),
        summary: L("ما الذي يجعل جزيئاً يرتبط.", "What makes a molecule bind."),
        lessonIds: [
          "l1-groups",
          "l1-electronics",
          "l1-tautomer",
          "l1-stereo",
          "l1-conform",
          "l1-pka",
          "l1-hbond",
          "l1-hetero",
        ],
      },
    ],
  },
  {
    id: "l2",
    number: 2,
    code: "L2",
    title: L("الكيمياء الفيزيائية", "Physical chemistry"),
    summary: L(
      "الثيرموديناميكا، بولتزمان، والقوى بين الجزيئية — لغة طاقة الارتباط.",
      "Thermodynamics, Boltzmann, and intermolecular forces — the language of binding.",
    ),
    skills: ["physics"],
    modules: [
      {
        id: "l2-m1",
        title: L("الطاقة والارتباط", "Energy and binding"),
        summary: L("ΔG وسبب ارتباط الليجند.", "ΔG and why ligands bind."),
        lessonIds: [
          "l2-thermo",
          "l2-gibbs",
          "l2-boltzmann",
          "l2-kinetics",
          "l2-forces",
          "l2-solvation",
          "l2-binding",
        ],
      },
    ],
  },
  {
    id: "l3",
    number: 3,
    code: "L3",
    title: L("رياضيات النمذجة", "Mathematics for modeling"),
    summary: L(
      "المتجهات، التدرجات، التكامل العددي، والتحسين — فقط ما تحتاجه النمذجة.",
      "Vectors, gradients, numerical integration, and optimization — only what modeling needs.",
    ),
    skills: ["math"],
    modules: [
      {
        id: "l3-m1",
        title: L("أدوات الحساب", "Computational tools"),
        summary: L("من الإحداثيات إلى الإحصاء.", "From coordinates to statistics."),
        lessonIds: [
          "l3-vectors",
          "l3-gradients",
          "l3-integration",
          "l3-opt",
          "l3-stats",
          "l3-pca",
          "l3-regression",
        ],
      },
    ],
  },
  {
    id: "l4",
    number: 4,
    code: "L4",
    title: L("بنية البروتين", "Protein structure"),
    summary: L(
      "من الحمض الأميني إلى الجيب، ومن البلورة إلى ملف PDB.",
      "From amino acid to pocket, from crystal to PDB file.",
    ),
    skills: ["structure"],
    modules: [
      {
        id: "l4-m1",
        title: L("قراءة البنية", "Reading structure"),
        summary: L("ما الذي تراه العين الخبيرة في PDB.", "What an expert eye sees in a PDB."),
        lessonIds: [
          "l4-aa",
          "l4-hierarchy",
          "l4-secondary",
          "l4-pockets",
          "l4-methods",
          "l4-quality",
          "l4-pdb",
          "l4-waters",
        ],
      },
    ],
  },
  {
    id: "l5",
    number: 5,
    code: "L5",
    title: L("الليجند والكيمإنفورماتكس", "Ligand & cheminformatics"),
    summary: L(
      "SMILES، البصمات، التشابه، والهياكل الأساسية.",
      "SMILES, fingerprints, similarity, and scaffolds.",
    ),
    skills: ["cheminformatics"],
    modules: [
      {
        id: "l5-m1",
        title: L("تمثيل الجزيء", "Representing molecules"),
        summary: L("من الرسم إلى المتجه.", "From drawing to vector."),
        lessonIds: [
          "l5-smiles",
          "l5-graphs",
          "l5-descriptors",
          "l5-fp",
          "l5-scaffold",
          "l5-rdkit",
          "l5-draw",
        ],
      },
    ],
  },
  {
    id: "l6",
    number: 6,
    code: "L6",
    title: L("الميكانيكا الجزيئية", "Molecular mechanics"),
    summary: L(
      "دالة الجهد، مجالات القوة، والشحنات الجزئية — قلب كل محاكاة.",
      "The potential, force fields, and partial charges — the heart of every simulation.",
    ),
    skills: ["mechanics"],
    modules: [
      {
        id: "l6-m1",
        title: L("دالة الجهد", "The potential"),
        summary: L("كل حدّ ومعناه الكيميائي.", "Each term and its chemical meaning."),
        lessonIds: [
          "l6-etotal",
          "l6-bonded",
          "l6-lj",
          "l6-coulomb",
          "l6-families",
          "l6-ligandff",
          "l6-charges",
          "l6-limits",
        ],
      },
    ],
  },
  {
    id: "l7",
    number: 7,
    code: "L7",
    title: L("أسس الكيمياء الكمومية", "Quantum chemistry foundations"),
    summary: L(
      "متى نحتاج QM في التصميم الدوائي، وما الذي لا نحتاجه.",
      "When QM is useful in drug design, and when it is not.",
    ),
    skills: ["quantum"],
    modules: [
      {
        id: "l7-m1",
        title: L("الإلكترونات للدوائي", "Electrons for medicinal chemists"),
        summary: L("من شرودنغر إلى QM/MM.", "From Schrödinger to QM/MM."),
        lessonIds: ["l7-schrodinger", "l7-hf-dft", "l7-mep", "l7-when", "l7-geom", "l7-qmmm"],
      },
    ],
  },
  {
    id: "l8",
    number: 8,
    code: "L8",
    title: L("الالتحام الجزيئي", "Molecular docking"),
    summary: L(
      "خوارزمية بحث + دالة تقييم. ولماذا الدرجة ليست طاقة ارتباط.",
      "Search algorithm + scoring function. And why a score is not binding free energy.",
    ),
    skills: ["docking"],
    modules: [
      {
        id: "l8-m1",
        title: L("المبادئ", "First principles"),
        summary: L("المسألة الفيزيائية.", "The physical problem."),
        lessonIds: ["l8-problem", "l8-search", "l8-scoring", "l8-not-dg", "l8-affinity"],
      },
      {
        id: "l8-m2",
        title: L("المختبرات", "Laboratories"),
        summary: L("Vina وAutoDock وGnina والبرمجيات التجارية كمفاهيم.", "Vina, AutoDock, Gnina, and commercial tools conceptually."),
        lessonIds: ["l8-vina", "l8-ad4", "l8-gnina", "l8-commercial"],
      },
      {
        id: "l8-m3",
        title: L("التحقّق والفشل", "Validation and failure"),
        summary: L("RMSD وROC ولماذا الالتحام يكذب أحياناً.", "RMSD, ROC, and why docking sometimes lies."),
        lessonIds: ["l8-validation", "l8-failures", "l8-poses"],
      },
    ],
  },
  {
    id: "l9",
    number: 9,
    code: "L9",
    title: L("الديناميكا الجزيئية", "Molecular dynamics"),
    summary: L(
      "من F = ma إلى التقارب الإحصائي. الجودة أهم من طول المسار.",
      "From F = ma to statistical convergence. Quality over trajectory length.",
    ),
    skills: ["md"],
    modules: [
      {
        id: "l9-m1",
        title: L("الفيزياء", "The physics"),
        summary: L("المكاملات والخطوة الزمنية.", "Integrators and the timestep."),
        lessonIds: ["l9-newton", "l9-integrators", "l9-system", "l9-pbc"],
      },
      {
        id: "l9-m2",
        title: L("البروتوكول", "The protocol"),
        summary: L("التقليل، الاتزان، والإنتاج.", "Minimization, equilibration, production."),
        lessonIds: ["l9-min", "l9-ensembles", "l9-production", "l9-gromacs", "l9-engines"],
      },
      {
        id: "l9-m3",
        title: L("التحليل", "Analysis"),
        summary: L("RMSD ليس دليلاً على الاستقرار.", "RMSD is not proof of stability."),
        lessonIds: ["l9-rmsd", "l9-flex", "l9-pca", "l9-convergence", "l9-mistakes"],
      },
    ],
  },
  {
    id: "l10",
    number: 10,
    code: "L10",
    title: L("طاقة الارتباط الحرة", "Binding free energy"),
    summary: L(
      "MM/PBSA وFEP وTI والمعاينة المعززة — الدقة مقابل التكلفة.",
      "MM/PBSA, FEP, TI, and enhanced sampling — accuracy versus cost.",
    ),
    skills: ["freeEnergy"],
    modules: [
      {
        id: "l10-m1",
        title: L("من ΔG إلى الطريقة", "From ΔG to method"),
        summary: L("ما الذي تقيسه كل طريقة.", "What each method actually measures."),
        lessonIds: [
          "l10-dg",
          "l10-mmpbsa",
          "l10-decomp",
          "l10-limits",
          "l10-fep",
          "l10-enhanced",
          "l10-choose",
        ],
      },
    ],
  },
  {
    id: "l11",
    number: 11,
    code: "L11",
    title: L("التصميم البنيوي", "Structure-based drug design"),
    summary: L("من الجيب إلى التعديل الطبي.", "From pocket to medicinal modification."),
    skills: ["sbdd"],
    modules: [
      {
        id: "l11-m1",
        title: L("الهندسة في الجيب", "Engineering the pocket"),
        summary: L("hotspots، الشظايا، والبيوأيزوستير.", "Hotspots, fragments, and bioisosteres."),
        lessonIds: ["l11-site", "l11-hotspot", "l11-fragment", "l11-bioiso", "l11-medchem", "l11-selectivity"],
      },
    ],
  },
  {
    id: "l12",
    number: 12,
    code: "L12",
    title: L("التصميم الليبندي", "Ligand-based drug design"),
    summary: L("التشابه، pharmacophore، وQSAR مع نطاق التطبيق.", "Similarity, pharmacophores, and QSAR with applicability domain."),
    skills: ["lbdd"],
    modules: [
      {
        id: "l12-m1",
        title: L("من الجزيء إلى النموذج", "From molecule to model"),
        summary: L("بلا بنية هدف، أو معها.", "Without a target structure — or with one."),
        lessonIds: ["l12-sim", "l12-pharma", "l12-qsar", "l12-3dqsar", "l12-ad", "l12-valid"],
      },
    ],
  },
  {
    id: "l13",
    number: 13,
    code: "L13",
    title: L("الفرز الافتراضي", "Virtual screening"),
    summary: L("مكتبة → ترشيح → التحام → MD → ADMET → أولوية.", "Library → filter → dock → MD → ADMET → prioritize."),
    skills: ["screening"],
    modules: [
      {
        id: "l13-m1",
        title: L("خط الأنابيب", "The pipeline"),
        summary: L("كل سهم له سبب.", "Every arrow has a reason."),
        lessonIds: ["l13-libs", "l13-filter", "l13-workflow", "l13-consensus", "l13-priority"],
      },
    ],
  },
  {
    id: "l14",
    number: 14,
    code: "L14",
    title: L("شبه الدواء والقواعد", "Drug-likeness & rules"),
    summary: L("Lipinski وPAINS — قواعد إرشادية لا شرائع.", "Lipinski and PAINS — heuristics, not commandments."),
    skills: ["admet", "chemistry"],
    modules: [
      {
        id: "l14-m1",
        title: L("القواعد وحدودها", "Rules and their limits"),
        summary: L("متى تُكسر القاعدة عمداً.", "When a rule should be broken on purpose."),
        lessonIds: ["l14-lipinski", "l14-veber", "l14-pains", "l14-sa"],
      },
    ],
  },
  {
    id: "l15",
    number: 15,
    code: "L15",
    title: L("ADMET", "ADMET"),
    summary: L("امتصاص، توزّع، استقلاب، إطراح، سمية — تنبؤ بحذر.", "Absorption to toxicity — predict cautiously."),
    skills: ["admet"],
    modules: [
      {
        id: "l15-m1",
        title: L("المصير في الجسم", "Fate in the body"),
        summary: L("من logP إلى hERG.", "From logP to hERG."),
        lessonIds: ["l15-adme", "l15-pka-logd", "l15-permeability", "l15-cyp", "l15-tox", "l15-models"],
      },
    ],
  },
  {
    id: "l16",
    number: 16,
    code: "L16",
    title: L("التعلّم الآلي", "Machine learning for discovery"),
    summary: L("البيانات → التمثيل → النموذج → التحقّق. بلا سحر.", "Data → representation → model → validation. No magic."),
    skills: ["ml"],
    modules: [
      {
        id: "l16-m1",
        title: L("من الانحدار إلى النماذج التأسيسية", "From regression to foundation models"),
        summary: L("وما الذي يبقى فرضية.", "And what remains a hypothesis."),
        lessonIds: ["l16-pipeline", "l16-classical", "l16-gnn", "l16-gen", "l16-plm", "l16-scoring", "l16-limits"],
      },
    ],
  },
  {
    id: "l17",
    number: 17,
    code: "L17",
    title: L("بايثون للتصميم الدوائي", "Python for CADD"),
    summary: L("RDKit وNumPy وتحليل المسارات — تمارين حقيقية.", "RDKit, NumPy, and trajectory analysis — real exercises."),
    skills: ["coding"],
    modules: [
      {
        id: "l17-m1",
        title: L("المختبر", "The lab"),
        summary: L("شيفرة تُفهم لا تُنسخ.", "Code you understand, not copy."),
        lessonIds: ["l17-python", "l17-rdkit", "l17-similarity", "l17-qsarcode", "l17-mdanalysis", "l17-plots"],
      },
    ],
  },
  {
    id: "l18",
    number: 18,
    code: "L18",
    title: L("التصوير العلمي", "Scientific visualization"),
    summary: L("PyMOL وChimeraX وVMD — أشكال تصلح للنشر.", "PyMOL, ChimeraX, VMD — figures that can be published."),
    skills: ["structure", "research"],
    modules: [
      {
        id: "l18-m1",
        title: L("العين الناقدة", "The critical eye"),
        summary: L("ما الذي يجب أن يُرى، وما الذي يُضلل.", "What must be seen, and what misleads."),
        lessonIds: ["l18-pymol", "l18-chimerax", "l18-vmd", "l18-figures"],
      },
    ],
  },
  {
    id: "l19",
    number: 19,
    code: "L19",
    title: L("لينكس وبيئة الحساب", "Linux & environment"),
    summary: L("ما يكفي لتشغيل محاكاة بثقة وإعادة إنتاج.", "Enough to run a simulation with confidence and reproduce it."),
    skills: ["coding", "research"],
    modules: [
      {
        id: "l19-m1",
        title: L("الورشة", "The workshop"),
        summary: L("shell وconda وgit.", "Shell, conda, and git."),
        lessonIds: ["l19-shell", "l19-conda", "l19-git", "l19-docker"],
      },
    ],
  },
  {
    id: "l20",
    number: 20,
    code: "L20",
    title: L("الحوسبة عالية الأداء", "High-performance computing"),
    summary: L("GPU وSlurm وMPI — كيف تُقدَّم وظيفة MD.", "GPU, Slurm, MPI — how an MD job is actually submitted."),
    skills: ["coding", "md"],
    modules: [
      {
        id: "l20-m1",
        title: L("من الحاسوب إلى العنقود", "From laptop to cluster"),
        summary: L("لماذا 100 ns على اللابتوب ليست خطة بحث.", "Why 100 ns on a laptop is not a research plan."),
        lessonIds: ["l20-cpu-gpu", "l20-parallel", "l20-slurm"],
      },
    ],
  },
  {
    id: "l21",
    number: 21,
    code: "L21",
    title: L("قابلية إعادة الإنتاج", "Reproducibility"),
    summary: L("المجلدات، البذور، والبيانات الوصفية.", "Directories, seeds, and metadata."),
    skills: ["research"],
    modules: [
      {
        id: "l21-m1",
        title: L("أن يعمل غيرك عملك", "So someone else can rerun you"),
        summary: L("قائمة تحقق.", "A checklist."),
        lessonIds: ["l21-layout", "l21-env", "l21-checklist"],
      },
    ],
  },
  {
    id: "l22",
    number: 22,
    code: "L22",
    title: L("قراءة الأوراق", "Reading papers"),
    summary: L("كيف تُقرأ منهجية حاسوبية كمحكّم.", "How to read a computational methods section as a reviewer."),
    skills: ["criticism", "research"],
    modules: [
      {
        id: "l22-m1",
        title: L("نادي القراءة", "The club"),
        summary: L("الفرضية، البروتوكول، والدليل.", "Hypothesis, protocol, evidence."),
        lessonIds: ["l22-anatomy", "l22-reviewer", "l22-workflow-read"],
      },
    ],
  },
  {
    id: "l23",
    number: 23,
    code: "L23",
    title: L("النقد العلمي", "Scientific criticism"),
    summary: L("كيف تكتشف ورقة التحام ضعيفة.", "How to spot a weak docking paper."),
    skills: ["criticism"],
    modules: [
      {
        id: "l23-m1",
        title: L("أنماط الفشل", "Failure patterns"),
        summary: L("أمثلة تعليمية، ليست اتهاماً لورقة معيّنة.", "Educational patterns, not accusations of a named paper."),
        lessonIds: ["l23-docking-only", "l23-short-md", "l23-mmpbsa-abuse", "l23-plots"],
      },
    ],
  },
  {
    id: "l24",
    number: 24,
    code: "L24",
    title: L("بناء المشروع البحثي", "Research project builder"),
    summary: L("من سؤال علمي إلى خط أنابيب قابل للدفاع.", "From a scientific question to a defensible pipeline."),
    skills: ["research"],
    modules: [
      {
        id: "l24-m1",
        title: L("المعالج", "The wizard"),
        summary: L("كل خطوة بسبب.", "Every step for a reason."),
        lessonIds: ["l24-question", "l24-workflow"],
      },
    ],
  },
  {
    id: "l25",
    number: 25,
    code: "L25",
    title: L("طرائق متقدمة", "Advanced methods"),
    summary: L("التحام المجموعة، IFD، FEP، MSM، وQM/MM.", "Ensemble docking, IFD, FEP, MSM, and QM/MM."),
    skills: ["docking", "md", "freeEnergy"],
    modules: [
      {
        id: "l25-m1",
        title: L("ما بعد البروتوكول القياسي", "Beyond the standard protocol"),
        summary: L("متى تستحق التكلفة.", "When the cost is justified."),
        lessonIds: [
          "l25-ensemble",
          "l25-ifd",
          "l25-covalent",
          "l25-waters",
          "l25-msm",
          "l25-alchemical",
        ],
      },
    ],
  },
  {
    id: "l26",
    number: 26,
    code: "L26",
    title: L("تصميم البحث", "Research design"),
    summary: L("ما الذي يُفنّد فرضيتك؟", "What would falsify your hypothesis?"),
    skills: ["research", "criticism"],
    modules: [
      {
        id: "l26-m1",
        title: L("من السؤال إلى الدفاع", "From question to defense"),
        summary: L("فرضية قابلة للتكذيب.", "A falsifiable hypothesis."),
        lessonIds: ["l26-hypothesis", "l26-choices", "l26-falsify"],
      },
    ],
  },
];

export const lessons: LessonMeta[] = [
  lesson("l0-cadd", "l0", "l0-m1", 1, L("ما هو الاكتشاف الدوائي الحاسوبي؟", "What is computational drug discovery?"), L("CADD والنمذجة والالتحام والديناميكا والكيمإنفورماتكس — تعريفات دقيقة.", "CADD, modeling, docking, MD, and cheminformatics — precise definitions."), 25, ["research"], [], "q-l0"),
  lesson("l0-pipeline", "l0", "l0-m1", 2, L("خط الاكتشاف: هدف → إصابة → قائد → مرشح", "Pipeline: target → hit → lead → candidate"), L("أين يدخل الحساب في كل مرحلة.", "Where computation enters each stage."), 20, ["research", "sbdd"]),
  lesson("l0-limits", "l0", "l0-m1", 3, L("أين ينجح الحساب وأين يفشل", "Where computation helps and where it fails"), L("حدود الفيزياء المُنمذَجة.", "Limits of the modeled physics."), 20, ["research", "criticism"]),
  lesson("l0-misconceptions", "l0", "l0-m1", 4, L("مفاهيم شائعة خاطئة", "Typical misconceptions"), L("الدرجة ≠ الدواء. RMSD المسطح ≠ تقارب.", "Score ≠ drug. Flat RMSD ≠ convergence."), 18, ["criticism"], [], "q-l0"),
  lesson("l0-journey", "l0", "l0-m1", 5, L("رحلة التعلّم", "The learning journey"), L("من المبتدئ إلى باحث مستقل.", "From beginner to independent researcher."), 15, ["research"]),

  lesson("l1-groups", "l1", "l1-m1", 1, L("المجموعات الوظيفية في الأدوية", "Functional groups in drugs"), L("أميدات، فينولات، هيتيروسيكلات وأمثلة دوائية.", "Amides, phenols, heterocycles, with drug examples."), 30, ["chemistry"], ["l0-cadd"]),
  lesson("l1-electronics", "l1", "l1-m1", 2, L("التأثيرات الإلكترونية والرنين", "Electronic effects and resonance"), L("حثّي، رنين، عطرية.", "Inductive, resonance, aromaticity."), 28, ["chemistry"]),
  lesson("l1-tautomer", "l1", "l1-m1", 3, L("التوتومرية وحالة البرتنة", "Tautomerism and protonation"), L("خطأ شائع يُفسد التحاماً كاملاً.", "A common error that wrecks a docking run."), 30, ["chemistry", "docking"], [], "q-l1"),
  lesson("l1-stereo", "l1", "l1-m1", 4, L("الكيمياء الفراغية", "Stereochemistry"), L("المقابل الضوئي قد يكون غير نشط أو سام.", "The enantiomer may be inactive or toxic."), 25, ["chemistry"]),
  lesson("l1-conform", "l1", "l1-m1", 5, L("التحليل التوافقي", "Conformational analysis"), L("الهيئة النشطة حيوياً ليست دائماً الأدنى طاقة في الفراغ.", "The bioactive conformer is not always the global vacuum minimum."), 25, ["chemistry", "mechanics"]),
  lesson("l1-pka", "l1", "l1-m1", 6, L("pKa والتأين", "pKa and ionization"), L("من يتأين في الجيب عند pH 7.4؟", "Who is ionized in the pocket at pH 7.4?"), 30, ["chemistry"]),
  lesson("l1-hbond", "l1", "l1-m1", 7, L("الرابطة الهيدروجينية والمحبة للدهن", "Hydrogen bonding and lipophilicity"), L("logP مقابل logD والأثر الكاره للماء.", "logP vs logD and the hydrophobic effect."), 25, ["chemistry", "physics"]),
  lesson("l1-hetero", "l1", "l1-m1", 8, L("الهيتيروسيكلات الدوائية", "Medicinal heterocycles"), L("بيريدين، إندول، بيريميدين بوصفها أدوات تصميم.", "Pyridine, indole, pyrimidine as design tools."), 22, ["chemistry"]),

  lesson("l2-thermo", "l2", "l2-m1", 1, L("الإنثالبي والإنتروبي", "Enthalpy and entropy"), L("لماذا يرتبط جزيء «ضعيف التفاعلات» أحياناً بقوة.", "Why a weakly interacting molecule can still bind tightly."), 28, ["physics"], ["l1-hbond"]),
  lesson("l2-gibbs", "l2", "l2-m1", 2, L("طاقة غيبس والاتزان", "Gibbs energy and equilibrium"), L("ΔG = −RT ln K.", "ΔG = −RT ln K."), 25, ["physics"], [], "q-l2"),
  lesson("l2-boltzmann", "l2", "l2-m1", 3, L("توزيع بولتزمان والميكانيكا الإحصائية", "Boltzmann and statistical mechanics"), L("لماذا نُعاين بدل أن نأخذ هيئة واحدة.", "Why we sample instead of taking one pose."), 30, ["physics", "md"]),
  lesson("l2-kinetics", "l2", "l2-m1", 4, L("الحركية مقابل الثيرموديناميكا", "Kinetics versus thermodynamics"), L("Kd ليس koff، والإقامة الزمنية.", "Kd is not koff, and residence time."), 22, ["physics"]),
  lesson("l2-forces", "l2", "l2-m1", 5, L("القوى بين الجزيئية", "Intermolecular forces"), L("كهرباء ساكنة، vdW، روابط هيدروجينية، كاتيون−π.", "Electrostatics, vdW, H-bonds, cation−π."), 25, ["physics", "mechanics"]),
  lesson("l2-solvation", "l2", "l2-m1", 6, L("الإذابة والأثر الكاره للماء", "Solvation and the hydrophobic effect"), L("الماء شريك في الارتباط لا خلفية.", "Water is a partner in binding, not wallpaper."), 28, ["physics"]),
  lesson("l2-binding", "l2", "l2-m1", 7, L("ثيرموديناميكا الارتباط", "Thermodynamics of binding"), L("تعويض إنثالبي−إنتروبي.", "Enthalpy–entropy compensation."), 24, ["physics", "freeEnergy"]),

  lesson("l3-vectors", "l3", "l3-m1", 1, L("المتجهات والمصفوفات", "Vectors and matrices"), L("الإحداثيات، الدوران، RMSD كمسافة.", "Coordinates, rotation, RMSD as a distance."), 25, ["math"]),
  lesson("l3-gradients", "l3", "l3-m1", 2, L("المشتقات والتدرجات", "Derivatives and gradients"), L("F = −∇V.", "F = −∇V."), 22, ["math", "mechanics"], [], "q-l3"),
  lesson("l3-integration", "l3", "l3-m1", 3, L("التكامل العددي", "Numerical integration"), L("لماذا 2 fs وليس 5 fs.", "Why 2 fs and not 5 fs."), 22, ["math", "md"]),
  lesson("l3-opt", "l3", "l3-m1", 4, L("التحسين العددي", "Numerical optimization"), L("انحدار، نيوتن، بحث عشوائي.", "Descent, Newton, stochastic search."), 24, ["math", "docking"]),
  lesson("l3-stats", "l3", "l3-m1", 5, L("الاحتمال والإحصاء", "Probability and statistics"), L("الخطأ المعياري والنسخ المستقلة.", "Standard error and independent replicas."), 28, ["math", "research"]),
  lesson("l3-pca", "l3", "l3-m1", 6, L("PCA والتجميع", "PCA and clustering"), L("الحركة الجماعية وهيئات المسار.", "Collective motion and trajectory conformers."), 26, ["math", "md"]),
  lesson("l3-regression", "l3", "l3-m1", 7, L("الانحدار وتقدير الخطأ", "Regression and error"), L("الارتباط ليس سببية، وQSAR ينهار خارج نطاقه.", "Correlation is not causation; QSAR dies outside its domain."), 24, ["math", "lbdd"]),

  lesson("l4-aa", "l4", "l4-m1", 1, L("الأحماض الأمينية في الجيب", "Amino acids in the pocket"), L("من الجانب السلسلة إلى التفاعل.", "From side chain to interaction."), 22, ["structure", "chemistry"]),
  lesson("l4-hierarchy", "l4", "l4-m1", 2, L("تسلسل البنية", "Structural hierarchy"), L("أولي إلى رباعي.", "Primary to quaternary."), 20, ["structure"]),
  lesson("l4-secondary", "l4", "l4-m1", 3, L("حلزون وصحيفة وعروة", "Helix, sheet, loop"), L("العُرى غالباً مكان الارتباط.", "Loops are often where binding happens."), 20, ["structure"]),
  lesson("l4-pockets", "l4", "l4-m1", 4, L("الجيوب والمواقع التفارغية", "Pockets and allosteric sites"), L("حفرة تقويمية ليست الموقع الوحيد.", "The orthosteric hole is not the only site."), 26, ["structure", "sbdd"], [], "q-l4"),
  lesson("l4-methods", "l4", "l4-m1", 5, L("تحديد البنية: أشعة سينية، cryo-EM، NMR", "Structure determination: X-ray, cryo-EM, NMR"), L("كل طريقة تُشوّه الحقيقة بطريقة مختلفة.", "Each method distorts truth differently."), 28, ["structure"]),
  lesson("l4-quality", "l4", "l4-m1", 6, L("الدقة وB-factor والإشغال", "Resolution, B-factor, occupancy"), L("كيف تقرأ جودة البلورة قبل أن ترسّم.", "How to read crystal quality before you dock."), 30, ["structure", "docking"]),
  lesson("l4-pdb", "l4", "l4-m1", 7, L("فحص ملف PDB بعمق", "Inspecting a PDB in depth"), L("رواسب ناقصة، هيئات بديلة، روابط غير قياسية.", "Missing residues, altlocs, nonstandard links."), 28, ["structure"]),
  lesson("l4-waters", "l4", "l4-m1", 8, L("الماء والمعادن والعوامل المرافقة", "Waters, metals, cofactors"), L("حذفها قد يحذف الفيزياء.", "Deleting them can delete the physics."), 26, ["structure", "docking"]),

  lesson("l5-smiles", "l5", "l5-m1", 1, L("SMILES وSMARTS وInChI", "SMILES, SMARTS, InChI"), L("لغة الجزيء الخطية.", "The molecule as a string."), 24, ["cheminformatics"]),
  lesson("l5-graphs", "l5", "l5-m1", 2, L("الرسوم الجزيئية", "Molecular graphs"), L("الذرة عقدة والرابطة حافة.", "Atom = node, bond = edge."), 18, ["cheminformatics", "math"]),
  lesson("l5-descriptors", "l5", "l5-m1", 3, L("الواصفات الجزيئية", "Molecular descriptors"), L("MW وTPSA وlogP ليست شخصية الجزيء كاملة.", "MW, TPSA, logP are not the whole personality."), 22, ["cheminformatics"]),
  lesson("l5-fp", "l5", "l5-m1", 4, L("البصمات ومعامل تانيموتو", "Fingerprints and Tanimoto"), L("ECFP/Morgan وMACCS، وما الذي تعنيه 0.7.", "ECFP/Morgan and MACCS, and what 0.7 means."), 28, ["cheminformatics"], [], "q-l5"),
  lesson("l5-scaffold", "l5", "l5-m1", 5, L("الهياكل الأساسية والتنوّع", "Scaffolds and diversity"), L("Bemis–Murcko ولماذا المكتبة المتشابهة تخدع الإثراء.", "Bemis–Murcko and why a redundant library fakes enrichment."), 22, ["cheminformatics", "screening"]),
  lesson("l5-rdkit", "l5", "l5-m1", 6, L("RDKit عملياً", "RDKit in practice"), L("تحضير ليغند، معايير، تشابه.", "Ligand prep, descriptors, similarity."), 30, ["cheminformatics", "coding"]),
  lesson("l5-draw", "l5", "l5-m1", 7, L("مختبر الرسم الجزيئي", "Molecular drawing lab"), L("SMILES حي وخصائص فورية.", "Live SMILES and instant properties."), 20, ["cheminformatics"]),

  lesson("l6-etotal", "l6", "l6-m1", 1, L("دالة الجهد الكلية", "The total potential"), L("E = bonded + nonbonded. كل حد قرار فيزيائي.", "E = bonded + nonbonded. Each term is a physics decision."), 30, ["mechanics"], ["l2-forces"], "q-l6"),
  lesson("l6-bonded", "l6", "l6-m1", 2, L("الروابط والزوايا وثنائي السطح", "Bonds, angles, dihedrals"), L("توافقي مقابل تورشن فورييه.", "Harmonic versus Fourier torsion."), 28, ["mechanics"]),
  lesson("l6-lj", "l6", "l6-m1", 3, L("كمون لينارد-جونز", "Lennard-Jones potential"), L("r⁻¹² وr⁻⁶: طرد تجريبي وتجاذب تشتتي.", "r⁻¹² and r⁻⁶: empirical repulsion and dispersion."), 26, ["mechanics", "physics"]),
  lesson("l6-coulomb", "l6", "l6-m1", 4, L("كولوم والشحنات الجزئية", "Coulomb and partial charges"), L("الشحنة ليست ملاحظة تجريبية في MM.", "Charge is not an experimental observable in MM."), 28, ["mechanics"]),
  lesson("l6-families", "l6", "l6-m1", 5, L("AMBER وCHARMM وOPLS وGROMOS", "AMBER, CHARMM, OPLS, GROMOS"), L("فلسفات لا مجرد أسماء.", "Philosophies, not just names."), 30, ["mechanics", "md"]),
  lesson("l6-ligandff", "l6", "l6-m1", 6, L("مجالات قوة الليجند", "Ligand force fields"), L("GAFF وCGenFF وOpenFF.", "GAFF, CGenFF, OpenFF."), 26, ["mechanics", "docking"]),
  lesson("l6-charges", "l6", "l6-m1", 7, L("طرائق الشحن", "Charge methods"), L("Mulliken وRESP وAM1-BCC.", "Mulliken, RESP, AM1-BCC."), 28, ["mechanics", "quantum"]),
  lesson("l6-limits", "l6", "l6-m1", 8, L("حدود الميكانيكا الجزيئية", "Limits of molecular mechanics"), L("لا تكسر روابط، لا تستقطب إلا إذا طُلب منها.", "No bond breaking, no polarizability unless asked."), 22, ["mechanics", "criticism"]),

  lesson("l7-schrodinger", "l7", "l7-m1", 1, L("معادلة شرودنغر مفهومياً", "The Schrödinger equation, conceptually"), L("دالة موجية وكثافة إلكترونية.", "Wavefunction and electron density."), 24, ["quantum"]),
  lesson("l7-hf-dft", "l7", "l7-m1", 2, L("Hartree–Fock وDFT والأساسات", "Hartree–Fock, DFT, and basis sets"), L("ماذا يعني B3LYP/6-31G* فعلاً.", "What B3LYP/6-31G* actually means."), 28, ["quantum"]),
  lesson("l7-mep", "l7", "l7-m1", 3, L("HOMO وLUMO وMEP", "HOMO, LUMO, and MEP"), L("خريطة الكهروستاتيك للتصميم.", "Electrostatic maps for design."), 20, ["quantum", "sbdd"]),
  lesson("l7-when", "l7", "l7-m1", 4, L("متى QM في التصميم الدوائي", "When QM is useful in drug design"), L("شحنات، معادن، تساهمية — لا لفرز ملايين المركبات.", "Charges, metals, covalency — not for screening millions."), 22, ["quantum", "research"]),
  lesson("l7-geom", "l7", "l7-m1", 5, L("تحسين الهندسة والشحنات", "Geometry optimization and charges"), L("هيئة وRESP قبل GAFF.", "Conformer and RESP before GAFF."), 22, ["quantum", "mechanics"]),
  lesson("l7-qmmm", "l7", "l7-m1", 6, L("QM/MM", "QM/MM"), L("حدود المنطقة الكمومية قرار علمي.", "The QM region boundary is a scientific decision."), 24, ["quantum", "md"]),

  lesson("l8-problem", "l8", "l8-m1", 1, L("مسألة الالتحام", "The docking problem"), L("بحث + تقييم. هذه ليست محاكاة ارتباط.", "Search + score. This is not a binding simulation."), 25, ["docking"], ["l4-pockets", "l6-etotal"], "q-l8"),
  lesson("l8-search", "l8", "l8-m1", 2, L("خوارزميات البحث", "Search algorithms"), L("منهجي، عشوائي، جيني، محاكاة تلدين.", "Systematic, stochastic, genetic, annealing."), 28, ["docking", "math"]),
  lesson("l8-scoring", "l8", "l8-m1", 3, L("دوال التقييم", "Scoring functions"), L("حقل قسري، تجريبية، معرفية، وتعلّم آلي.", "Force-field, empirical, knowledge-based, ML."), 30, ["docking"]),
  lesson("l8-not-dg", "l8", "l8-m1", 4, L("الدرجة ليست طاقة ارتباط", "A score is not ΔG"), L("لماذا −9 kcal/mol لا تعني مثبّطاً جيداً.", "Why −9 kcal/mol does not mean a good inhibitor."), 24, ["docking", "criticism"], [], "q-l8"),
  lesson("l8-affinity", "l8", "l8-m1", 5, L("ΔG وKd وKi وIC50", "ΔG, Kd, Ki, and IC50"), L("فروقات لا يجوز خلطها في ورقة.", "Distinctions you must not blur in a paper."), 26, ["docking", "physics"]),
  lesson("l8-vina", "l8", "l8-m2", 6, L("مختبر AutoDock Vina", "AutoDock Vina laboratory"), L("تحضير، صندوق، exhaustiveness، قراءة النتائج.", "Prep, box, exhaustiveness, reading output."), 40, ["docking"], [], "q-l8"),
  lesson("l8-ad4", "l8", "l8-m2", 7, L("مختبر AutoDock4", "AutoDock4 laboratory"), L("خرائط الأشبكة ودالة تقييم مختلفة.", "Grid maps and a different scoring function."), 30, ["docking"]),
  lesson("l8-gnina", "l8", "l8-m2", 8, L("Smina وGnina", "Smina and Gnina"), L("تقييم تجريبي مقابل شبكة طيّ.", "Empirical scoring versus a CNN."), 24, ["docking", "ml"]),
  lesson("l8-commercial", "l8", "l8-m2", 9, L("Glide وGOLD وMOE — مفاهيمياً", "Glide, GOLD, MOE — conceptually"), L("بدون ادعاء تشغيل تراخيص غير موجودة.", "No claim to run licenses you do not have."), 22, ["docking"]),
  lesson("l8-validation", "l8", "l8-m3", 10, L("التحقّق: إعادة الالتحام وROC", "Validation: redocking and ROC"), L("RMSD وAUC وEF وBEDROC ومجموعات الخداع.", "RMSD, AUC, EF, BEDROC, decoy sets."), 35, ["docking", "research"]),
  lesson("l8-failures", "l8", "l8-m3", 11, L("أنماط فشل الالتحام", "Docking failure modes"), L("برتنة، توتومر، معدن، مرونة، صندوق.", "Protonation, tautomer, metal, flexibility, box."), 30, ["docking", "criticism"]),
  lesson("l8-poses", "l8", "l8-m3", 12, L("تحليل الهيئة والتفاعلات", "Pose and interaction analysis"), L("العين قبل الرقم.", "The eye before the number."), 24, ["docking", "sbdd"]),

  lesson("l9-newton", "l9", "l9-m1", 1, L("من نيوتن إلى المحاكاة", "From Newton to a simulation"), L("F = ma وF = −∇V.", "F = ma and F = −∇V."), 24, ["md", "physics"], ["l6-etotal", "l3-gradients"], "q-l9"),
  lesson("l9-integrators", "l9", "l9-m1", 2, L("المكاملات والخطوة الزمنية", "Integrators and timestep"), L("Verlet وقيود الهيدروجين و2 fs.", "Verlet, hydrogen constraints, and 2 fs."), 26, ["md", "math"]),
  lesson("l9-system", "l9", "l9-m1", 3, L("تحضير النظام", "System preparation"), L("بروتين + ليغند + حقل + ماء + أيونات.", "Protein + ligand + FF + water + ions."), 30, ["md"]),
  lesson("l9-pbc", "l9", "l9-m1", 4, L("الحدود الدورية والمذيب", "PBC and solvent"), L("TIP3P وPME ولماذا الصندوق أهم مما يبدو.", "TIP3P, PME, and why the box matters more than it looks."), 28, ["md"]),
  lesson("l9-min", "l9", "l9-m2", 5, L("تقليل الطاقة", "Energy minimization"), L("انحدار حاد وتدرج مرافق.", "Steepest descent and conjugate gradient."), 18, ["md", "math"]),
  lesson("l9-ensembles", "l9", "l9-m2", 6, L("NVT وNPT ومنظمات الحرارة والضغط", "NVT, NPT, thermostats, barostats"), L("بيرندسن ليس للقياس الإنتاجي بلا وعي.", "Berendsen is not for production without thought."), 32, ["md", "physics"]),
  lesson("l9-production", "l9", "l9-m2", 7, L("محاكاة الإنتاج", "Production MD"), L("الطول لا يشتري التقارب.", "Length does not buy convergence."), 22, ["md"]),
  lesson("l9-gromacs", "l9", "l9-m2", 8, L("مختبر GROMACS أمراً فأمراً", "GROMACS laboratory, command by command"), L("pdb2gmx حتى mdrun ثم التحليل.", "From pdb2gmx to mdrun and analysis."), 45, ["md", "coding"], [], "q-l9"),
  lesson("l9-engines", "l9", "l9-m2", 9, L("AMBER وNAMD وOpenMM", "AMBER, NAMD, OpenMM"), L("المحرك أداة، الحقل هو الفيزياء.", "The engine is a tool; the force field is the physics."), 20, ["md"]),
  lesson("l9-rmsd", "l9", "l9-m3", 10, L("RMSD — المعادلة وسوء الاستخدام", "RMSD — equation and misuse"), L("مسطّح لا يعني متقارباً.", "Flat does not mean converged."), 28, ["md", "criticism"]),
  lesson("l9-flex", "l9", "l9-m3", 11, L("RMSF وRg وSASA والروابط الهيدروجينية", "RMSF, Rg, SASA, hydrogen bonds"), L("مرونة، اكتناز، سطح، استمرار التفاعل.", "Flexibility, compactness, surface, interaction persistence."), 26, ["md"]),
  lesson("l9-pca", "l9", "l9-m3", 12, L("PCA ومشهد الطاقة وDCCM", "PCA, free-energy landscape, DCCM"), L("تفسير حذر للتجاويف.", "Cautious reading of basins."), 30, ["md", "math"]),
  lesson("l9-convergence", "l9", "l9-m3", 13, L("التقارب والمعاينة والنسخ", "Convergence, sampling, replicas"), L("متوسط الكتل وعدم اليقين.", "Block averaging and uncertainty."), 32, ["md", "research"]),
  lesson("l9-mistakes", "l9", "l9-m3", 14, L("أخطاء MD الشائعة", "Common MD mistakes"), L("من الخطوة الزمنية إلى ادّعاء الاستقرار.", "From timestep to claiming stability."), 22, ["md", "criticism"]),

  lesson("l10-dg", "l10", "l10-m1", 1, L("ΔG الارتباط", "Binding ΔG"), L("ΔH − TΔS وما الذي يُقاس فعلاً.", "ΔH − TΔS and what is actually measured."), 22, ["freeEnergy", "physics"], ["l2-gibbs"]),
  lesson("l10-mmpbsa", "l10", "l10-m1", 2, L("MM/PBSA وMM/GBSA", "MM/PBSA and MM/GBSA"), L("المكوّنات: MM، إذابة قطبية وغير قطبية، إنتروبي.", "Components: MM, polar/nonpolar solvation, entropy."), 32, ["freeEnergy"], [], "q-l10"),
  lesson("l10-decomp", "l10", "l10-m1", 3, L("تفكيك الطاقة لكل بقايا", "Per-residue decomposition"), L("مؤشر تصميم لا برهان سببي.", "A design hint, not causal proof."), 20, ["freeEnergy", "sbdd"]),
  lesson("l10-limits", "l10", "l10-m1", 4, L("حدود MM/PBSA", "Limits of MM/PBSA"), L("متى تكون الطريقة غير ملائمة.", "When the method is inappropriate."), 24, ["freeEnergy", "criticism"]),
  lesson("l10-fep", "l10", "l10-m1", 5, L("FEP وTI", "FEP and TI"), L("تحولات كيميائية في خريطة ترموديناميكية.", "Alchemical transformations on a thermodynamic map."), 30, ["freeEnergy"]),
  lesson("l10-enhanced", "l10", "l10-m1", 6, L("Umbrella وMetadynamics وABF", "Umbrella sampling, metadynamics, ABF"), L("معاينة الأحداث النادرة.", "Sampling rare events."), 26, ["freeEnergy", "md"]),
  lesson("l10-choose", "l10", "l10-m1", 7, L("اختيار طريقة الطاقة الحرة", "Choosing a free-energy method"), L("دقة، تكلفة، سؤال علمي.", "Accuracy, cost, scientific question."), 18, ["freeEnergy", "research"]),

  lesson("l11-site", "l11", "l11-m1", 1, L("تحليل موقع الارتباط", "Binding-site analysis"), L("حجم، قطبية، hotspots.", "Volume, polarity, hotspots."), 22, ["sbdd", "structure"], ["l4-pockets"]),
  lesson("l11-hotspot", "l11", "l11-m1", 2, L("تحليل النقاط الساخنة", "Hotspot analysis"), L("أين تستحق الذرة الواحدة عناء التخليق.", "Where a single atom is worth synthesizing."), 20, ["sbdd"]),
  lesson("l11-fragment", "l11", "l11-m1", 3, L("نمو الشظايا وربطها", "Fragment growing and linking"), L("وFBDD.", "And fragment-based design."), 22, ["sbdd"]),
  lesson("l11-bioiso", "l11", "l11-m1", 4, L("التبديل الحيوي وقفز الهيكل", "Bioisosteres and scaffold hopping"), L("تغيير الهيكل مع حفظ الفيزياء.", "Change the scaffold, keep the physics."), 22, ["sbdd", "chemistry"]),
  lesson("l11-medchem", "l11", "l11-m1", 5, L("تحسين القوة والذوبان والاستقلاب", "Optimizing potency, solubility, metabolism"), L("مقايضات المصمّم.", "The designer’s trade-offs."), 26, ["sbdd", "admet"]),
  lesson("l11-selectivity", "l11", "l11-m1", 6, L("الانتقائية والسمية", "Selectivity and toxicity"), L("الكينازات كمثال تعليمي.", "Kinases as an educational example."), 22, ["sbdd"]),

  lesson("l12-sim", "l12", "l12-m1", 1, L("البحث بالتشابه", "Similarity searching"), L("فرضية: الجزيئات المتشابهة تفعل أشياء متشابهة — وكسورها.", "Similar molecules act similarly — and the fractures of that hypothesis."), 20, ["lbdd", "cheminformatics"]),
  lesson("l12-pharma", "l12", "l12-m1", 2, L("النمذجة الفارماكوفورية", "Pharmacophore modeling"), L("سمات هندسية لا ذرات.", "Geometric features, not atoms."), 24, ["lbdd"]),
  lesson("l12-qsar", "l12", "l12-m1", 3, L("QSAR", "QSAR"), L("واصفات + نشاط + نموذج.", "Descriptors + activity + a model."), 26, ["lbdd", "ml"], [], "q-l12"),
  lesson("l12-3dqsar", "l12", "l12-m1", 4, L("3D-QSAR: CoMFA وCoMSIA", "3D-QSAR: CoMFA and CoMSIA"), L("الهيئة المشتركة قرار يُفسد النموذج إن أُسيء.", "Alignment is a decision that can ruin the model."), 24, ["lbdd"]),
  lesson("l12-ad", "l12", "l12-m1", 5, L("نطاق التطبيق", "Applicability domain"), L("التنبؤ خارج النطاق تخمين.", "Prediction outside the domain is a guess."), 20, ["lbdd", "criticism"]),
  lesson("l12-valid", "l12", "l12-m1", 6, L("تحقّق نماذج QSAR", "Validating QSAR models"), L("y-scrambling وتقسيم زمني لا عشوائي فقط.", "Y-scrambling and temporal splits, not only random ones."), 22, ["lbdd", "research"]),

  lesson("l13-libs", "l13", "l13-m1", 1, L("المكتبات: ZINC وChEMBL وPubChem", "Libraries: ZINC, ChEMBL, PubChem"), L("مفاهيم ومصادر. تحقّق من الترخيص والاستخدام.", "Concepts and sources. Verify licenses and use."), 20, ["screening", "cheminformatics"]),
  lesson("l13-filter", "l13", "l13-m1", 2, L("الترشيح الفيزيوكيميائي", "Physicochemical filtering"), L("قبل أن تدفع ثمن الالتحام.", "Before you pay for docking."), 18, ["screening", "admet"]),
  lesson("l13-workflow", "l13", "l13-m1", 3, L("خط الفرز الكامل", "The full screening workflow"), L("كل سهم قرار.", "Every arrow is a decision."), 24, ["screening"], [], "q-l13"),
  lesson("l13-consensus", "l13", "l13-m1", 4, L("التقييم التوافقي وترشيح الهيئة", "Consensus scoring and pose filters"), L("لا يُصلح دالة سيئة سحرياً.", "Does not magically fix a bad function."), 20, ["screening", "docking"]),
  lesson("l13-priority", "l13", "l13-m1", 5, L("أولوية الإصابات", "Hit prioritization"), L("حساب + كيمياء طبية + ADMET، لا رقم واحد.", "Computation + medicinal chemistry + ADMET, not one number."), 22, ["screening", "research"]),

  lesson("l14-lipinski", "l14", "l14-m1", 1, L("Lipinski وحدوده", "Lipinski and its limits"), L("صيغ فموية تاريخياً، لا قانون طبيعة.", "Historically oral drugs, not a law of nature."), 18, ["admet"]),
  lesson("l14-veber", "l14", "l14-m1", 2, L("Veber وGhose وEgan", "Veber, Ghose, and Egan"), L("تPSA والروابط القابلة للدوران.", "TPSA and rotatable bonds."), 16, ["admet"]),
  lesson("l14-pains", "l14", "l14-m1", 3, L("PAINS وBrenk", "PAINS and Brenk"), L("إنذارات لا إعدامات.", "Alerts, not death sentences."), 20, ["admet", "chemistry"]),
  lesson("l14-sa", "l14", "l14-m1", 4, L("إمكانية التخليق", "Synthetic accessibility"), L("جزيء جميل لا يُصنَّع ليس اكتشافاً.", "A beautiful unsynthesizable molecule is not a discovery."), 16, ["admet", "chemistry"]),

  lesson("l15-adme", "l15", "l15-m1", 1, L("مخطط ADMET", "The ADMET map"), L("خمسة أبواب، كل منها يقتل مرشحاً.", "Five gates, each of which can kill a candidate."), 20, ["admet"]),
  lesson("l15-pka-logd", "l15", "l15-m1", 2, L("logP وlogD وpKa وTPSA", "logP, logD, pKa, TPSA"), L("أدوات لا أهداف بحد ذاتها.", "Tools, not goals in themselves."), 22, ["admet", "chemistry"]),
  lesson("l15-permeability", "l15", "l15-m1", 3, L("الامتصاص وBBB", "Absorption and BBB"), L("قاعدة عامة تنكسر للناقلات.", "Rules break for transporters."), 20, ["admet"]),
  lesson("l15-cyp", "l15", "l15-m1", 4, L("CYP450 والإطراح", "CYP450 and clearance"), L("مثبط ومادة خاضعة في آن.", "Inhibitor and substrate at once."), 22, ["admet"]),
  lesson("l15-tox", "l15", "l15-m1", 5, L("hERG والكبد والطفرات", "hERG, liver, mutagenicity"), L("تنبؤ السمية أضعف حلقات النماذج.", "Toxicity prediction is the weakest link."), 22, ["admet", "criticism"]),
  lesson("l15-models", "l15", "l15-m1", 6, L("أدوات التنبؤ — مفهومياً", "Prediction tools — conceptually"), L("نموذج محلي أفضل من لوحة عامة عمياء.", "A local model beats a blind public dashboard."), 18, ["admet", "ml"]),

  lesson("l16-pipeline", "l16", "l16-m1", 1, L("بيانات → تمثيل → نموذج → تحقّق", "Data → representation → model → validation"), L("بدون بيانات جيدة النموذج مسرح.", "Without good data the model is theatre."), 22, ["ml"], [], "q-l16"),
  lesson("l16-classical", "l16", "l16-m1", 2, L("انحدار، غابة، SVM، XGBoost", "Regression, forests, SVM, XGBoost"), L("لا تزال تنافس الشبكات على بيانات صغيرة.", "Still competitive on small data."), 22, ["ml"]),
  lesson("l16-gnn", "l16", "l16-m1", 3, L("الشبكات البيانية والمحولات", "Graph nets and transformers"), L("الجزيء كرسم.", "The molecule as a graph."), 24, ["ml", "cheminformatics"]),
  lesson("l16-gen", "l16", "l16-m1", 4, L("الكيمياء التوليدية", "Generative chemistry"), L("توزيع تعلّمه النموذج ليس كيمياء ممكنة تلقائياً.", "A learned distribution is not automatically makeable chemistry."), 22, ["ml"]),
  lesson("l16-plm", "l16", "l16-m1", 5, L("نماذج لغة البروتين وAlphaFold", "Protein language models and AlphaFold"), L("بنية متوقعة ≠ هيئة مرتبطة.", "A predicted fold ≠ a bound pose."), 24, ["ml", "structure"]),
  lesson("l16-scoring", "l16", "l16-m1", 6, L("دوال التقييم بالتعلّم الآلي", "ML scoring functions"), L("خطر التعلّم على الهياكل لا على الفيزياء.", "The risk of learning scaffolds, not physics."), 20, ["ml", "docking"]),
  lesson("l16-limits", "l16", "l16-m1", 7, L("حدود الذكاء الاصطناعي في الاكتشاف", "Limits of AI in discovery"), L("انزياح التوزيع وتسرّب التقييم.", "Distribution shift and evaluation leakage."), 20, ["ml", "criticism"]),

  lesson("l17-python", "l17", "l17-m1", 1, L("بايثون العلمي", "Scientific Python"), L("NumPy وPandas وMatplotlib.", "NumPy, Pandas, Matplotlib."), 24, ["coding"]),
  lesson("l17-rdkit", "l17", "l17-m1", 2, L("واصفات RDKit", "RDKit descriptors"), L("حساب وتوزيع خصائص مكتبة.", "Compute and plot a library’s properties."), 28, ["coding", "cheminformatics"]),
  lesson("l17-similarity", "l17", "l17-m1", 3, L("بحث التشابه والتجميع", "Similarity search and clustering"), L("تانيموتو عملياً.", "Tanimoto in practice."), 24, ["coding", "cheminformatics"]),
  lesson("l17-qsarcode", "l17", "l17-m1", 4, L("بناء نموذج QSAR", "Building a QSAR model"), L("scikit-learn مع تحقّق صادق.", "scikit-learn with honest validation."), 28, ["coding", "lbdd"]),
  lesson("l17-mdanalysis", "l17", "l17-m1", 5, L("تحليل المسارات", "Trajectory analysis"), L("RMSD وملامسات بـ MDAnalysis.", "RMSD and contacts with MDAnalysis."), 26, ["coding", "md"]),
  lesson("l17-plots", "l17", "l17-m1", 6, L("رسوم علمية نزيهة", "Honest scientific plots"), L("لا تُخفِ النسخ داخل متوسط لامع.", "Do not hide replicas inside a glossy mean."), 20, ["coding", "research"]),

  lesson("l18-pymol", "l18", "l18-m1", 1, L("PyMOL عملياً", "PyMOL in practice"), L("هيئة، سطح، نشر.", "Pose, surface, publication."), 22, ["structure"]),
  lesson("l18-chimerax", "l18", "l18-m1", 2, L("ChimeraX", "ChimeraX"), L("cryo-EM والخرائط.", "cryo-EM and maps."), 18, ["structure"]),
  lesson("l18-vmd", "l18", "l18-m1", 3, L("VMD للمسارات", "VMD for trajectories"), L("فيلم لا يغني عن إحصاء.", "A movie does not replace statistics."), 18, ["structure", "md"]),
  lesson("l18-figures", "l18", "l18-m1", 4, L("أشكال تصلح للمجلة", "Journal-ready figures"), L("تباين، مقياس، لا زينة.", "Contrast, scale bar, no decoration."), 20, ["research"]),

  lesson("l19-shell", "l19", "l19-m1", 1, L("الصدفة والأوامر", "The shell"), L("cd وgrep وawk بما يكفي لباحث.", "cd, grep, awk — enough for a researcher."), 22, ["coding"]),
  lesson("l19-conda", "l19", "l19-m1", 2, L("بيئات Conda", "Conda environments"), L("إعادة الإنتاج تبدأ هنا.", "Reproducibility starts here."), 16, ["coding", "research"]),
  lesson("l19-git", "l19", "l19-m1", 3, L("Git وGitHub", "Git and GitHub"), L("الشيفرة والبروتوكول والملاحظات.", "Code, protocol, and notes."), 18, ["coding", "research"]),
  lesson("l19-docker", "l19", "l19-m1", 4, L("Docker بإيجاز", "Docker, briefly"), L("حاوية للمحاكاة لا للموضة.", "A container for the simulation, not for fashion."), 14, ["coding"]),

  lesson("l20-cpu-gpu", "l20", "l20-m1", 1, L("CPU وGPU وCUDA", "CPU, GPU, and CUDA"), L("لماذا MD يحب البطاقة.", "Why MD loves the GPU."), 18, ["md", "coding"]),
  lesson("l20-parallel", "l20", "l20-m1", 2, L("التوازي: MPI وOpenMP", "Parallelism: MPI and OpenMP"), L("ما الذي يتوزّع وما الذي لا.", "What parallelizes and what does not."), 16, ["coding"]),
  lesson("l20-slurm", "l20", "l20-m1", 3, L("Slurm وتقديم الوظائف", "Slurm and job submission"), L("مورد، زمن، مسار.", "Resource, walltime, path."), 20, ["coding", "md"]),

  lesson("l21-layout", "l21", "l21-m1", 1, L("تنظيم المجلدات والأسماء", "Directory layout and naming"), L("raw / work / results.", "raw / work / results."), 14, ["research"]),
  lesson("l21-env", "l21", "l21-m1", 2, L("البيئة والبذور والبيانات الوصفية", "Environment, seeds, metadata"), L("نسخ البرمجية حقل إلزامي.", "Software version is a required field."), 16, ["research"]),
  lesson("l21-checklist", "l21", "l21-m1", 3, L("قائمة إعادة الإنتاج", "Reproducibility checklist"), L("قبل أن تكتب methods.", "Before you write Methods."), 16, ["research"]),

  lesson("l22-anatomy", "l22", "l22-m1", 1, L("تشريح ورقة حاسوبية", "Anatomy of a computational paper"), L("اثنا عشر سؤالاً للمحكّم.", "Twelve reviewer questions."), 22, ["criticism", "research"]),
  lesson("l22-reviewer", "l22", "l22-m1", 2, L("وضع المحكّم", "Reviewer mode"), L("اكتب تقريراً لا ملخصاً.", "Write a report, not a summary."), 20, ["criticism"]),
  lesson("l22-workflow-read", "l22", "l22-m1", 3, L("قراءة البروتوكول", "Reading a protocol"), L("ما الذي لم يُذكر أهم مما ذُكر.", "What is missing matters more than what is present."), 18, ["criticism"]),

  lesson("l23-docking-only", "l23", "l23-m1", 1, L("أوراق الالتحام فقط", "Docking-only papers"), L("ادّعاء اكتشاف من درجة واحدة.", "Claiming discovery from one score."), 20, ["criticism", "docking"]),
  lesson("l23-short-md", "l23", "l23-m1", 2, L("MD قصير يُفسَّر كبرهان", "Short MD interpreted as proof"), L("100 ns بلا نُسخ.", "100 ns with no replicas."), 20, ["criticism", "md"]),
  lesson("l23-mmpbsa-abuse", "l23", "l23-m1", 3, L("إساءة MM/PBSA", "Misuse of MM/PBSA"), L("ترتيب مركبات متباعدة كيمياء بخطأ أكبر من الفرق.", "Ranking dissimilar chemotypes with error larger than the gap."), 20, ["criticism", "freeEnergy"]),
  lesson("l23-plots", "l23", "l23-m1", 4, L("رسوم مضلّلة", "Misleading plots"), L("محور مبتور ومتوسط بلا تشتت.", "Cropped axes and a mean without spread."), 16, ["criticism"]),

  lesson("l24-question", "l24", "l24-m1", 1, L("تحويل السؤال إلى دراسة", "Turning a question into a study"), L("هدف، دليل الجيب، طريقة التحقّق.", "Aim, pocket evidence, validation plan."), 18, ["research"]),
  lesson("l24-workflow", "l24", "l24-m1", 2, L("توليد خط الأنابيب", "Generating the workflow"), L("كل صندوق قابل للنقر لأنه قرار.", "Every box is clickable because it is a decision."), 16, ["research"]),

  lesson("l25-ensemble", "l25", "l25-m1", 1, L("التحام المجموعة", "Ensemble docking"), L("هيئة واحدة كذبة مريحة.", "One receptor pose is a convenient lie."), 20, ["docking", "md"]),
  lesson("l25-ifd", "l25", "l25-m1", 2, L("التحام التوافق المستحث", "Induced-fit docking"), L("مرونة موضعية لا سحر.", "Local flexibility, not magic."), 18, ["docking"]),
  lesson("l25-covalent", "l25", "l25-m1", 3, L("الالتحام التساهمي", "Covalent docking"), L("رد فعل + هيئة.", "Reaction + pose."), 18, ["docking", "quantum"]),
  lesson("l25-waters", "l25", "l25-m1", 4, L("شبكات الماء وبصمات التفاعل", "Water networks and interaction fingerprints"), L("ماء محبوس قد يكون الجزء الأهم.", "A trapped water may be the important part."), 20, ["sbdd", "md"]),
  lesson("l25-msm", "l25", "l25-m1", 5, L("نماذج ماركوف", "Markov state models"), L("حركية من معاينة.", "Kinetics from sampling."), 22, ["md"]),
  lesson("l25-alchemical", "l25", "l25-m1", 6, L("حسابات الطاقة الكيميائية التبديلية", "Alchemical free energy"), L("متى تستحق أسبوع عنقود.", "When a week of cluster time is worth it."), 20, ["freeEnergy"]),

  lesson("l26-hypothesis", "l26", "l26-m1", 1, L("الفرضية والهدف", "Hypothesis and target"), L("لماذا هذا البروتين؟", "Why this protein?"), 16, ["research"]),
  lesson("l26-choices", "l26", "l26-m1", 2, L("لماذا هذا الحقل ولماذا هذا المحرّك", "Why this force field and engine"), L("كل اختيار يُسأل في المناقشة.", "Every choice will be asked in the viva."), 18, ["research", "mechanics"]),
  lesson("l26-falsify", "l26", "l26-m1", 3, L("ما الذي يُفنّد الفرضية", "What would falsify the hypothesis"), L("دراسة بلا معيار فشل ليست علماً.", "A study with no failure criterion is not science."), 18, ["research", "criticism"]),
];

export const lessonById: Record<string, LessonMeta> = Object.fromEntries(
  lessons.map((l) => [l.id, l]),
);

export const levelById: Record<string, Level> = Object.fromEntries(
  levels.map((l) => [l.id, l]),
);

export function lessonsForLevel(levelId: string): LessonMeta[] {
  return lessons.filter((l) => l.levelId === levelId).sort((a, b) => a.order - b.order);
}

export const paths: PathDef[] = [
  {
    id: "docking-specialist",
    title: L("أخصائي التحام", "Docking specialist"),
    summary: L("من الجيب إلى التحقّق الإحصائي للفرز.", "From pocket to statistically validated screening."),
    lessonIds: [
      "l0-cadd", "l1-tautomer", "l1-pka", "l4-quality", "l4-waters", "l5-fp",
      "l6-etotal", "l8-problem", "l8-scoring", "l8-not-dg", "l8-vina", "l8-validation",
      "l8-failures", "l13-workflow", "l23-docking-only",
    ],
  },
  {
    id: "md-specialist",
    title: L("أخصائي ديناميكا جزيئية", "MD specialist"),
    summary: L("من نيوتن إلى التقارب والنسخ.", "From Newton to convergence and replicas."),
    lessonIds: [
      "l2-boltzmann", "l3-integration", "l6-families", "l9-newton", "l9-integrators",
      "l9-pbc", "l9-ensembles", "l9-gromacs", "l9-rmsd", "l9-convergence",
      "l10-mmpbsa", "l10-limits", "l23-short-md",
    ],
  },
  {
    id: "cadd-researcher",
    title: L("باحث CADD", "CADD researcher"),
    summary: L("خط أنابيب كامل قابل للدفاع.", "A full defensible pipeline."),
    lessonIds: [
      "l0-pipeline", "l4-pdb", "l8-validation", "l9-gromacs", "l10-choose",
      "l13-priority", "l15-adme", "l21-checklist", "l24-workflow", "l26-falsify",
    ],
  },
  {
    id: "chemoinformatist",
    title: L("عالم كيمإنفورماتكس", "Cheminformatics scientist"),
    summary: L("تمثيل، تشابه، QSAR، مكتبات.", "Representation, similarity, QSAR, libraries."),
    lessonIds: [
      "l5-smiles", "l5-fp", "l5-rdkit", "l12-qsar", "l12-ad", "l13-libs",
      "l16-pipeline", "l17-rdkit", "l17-qsarcode",
    ],
  },
  {
    id: "ai-discovery",
    title: L("اكتشاف دوائي بالذكاء الاصطناعي", "AI drug discovery scientist"),
    summary: L("نماذج بحذر علمي.", "Models with scientific caution."),
    lessonIds: [
      "l5-fp", "l12-qsar", "l16-pipeline", "l16-gnn", "l16-gen", "l16-plm",
      "l16-scoring", "l16-limits", "l17-qsarcode",
    ],
  },
  {
    id: "academic",
    title: L("باحث أكاديمي", "Academic researcher"),
    summary: L("منهج، نقد، كتابة، دفاع.", "Methods, critique, writing, defense."),
    lessonIds: [
      "l21-checklist", "l22-anatomy", "l23-docking-only", "l23-short-md",
      "l26-hypothesis", "l26-falsify", "l18-figures", "l10-limits",
    ],
  },
];

export const totalLessons = lessons.length;
