import type { Lesson } from "@/lib/academy/types";
import { expand, L } from "@/lib/academy/content/helpers";

export const lessons: Lesson[] = [
  expand(
    "l0-cadd",
    [
      L(
        "تعريف CADD بدقة وتمييزه عن الكيمياء الطبية التجريبية وعن «اكتشاف دواء بالحاسوب» كشعار.",
        "Define CADD precisely and distinguish it from experimental medicinal chemistry and from the slogan of in-silico drug discovery.",
      ),
      L(
        "تسمية أدوار النمذجة الجزيئية والالتحام والديناميكا الجزيئية والكيمإنفورماتكس داخل سؤال علمي واحد.",
        "Name the roles of molecular modeling, docking, MD, and cheminformatics inside a single scientific question.",
      ),
      L(
        "صياغة ما يمكن للحساب أن يُضيّقه (فرضيات، هيئات، سلاسل كيميائية) وما لا يستطيع إثباته.",
        "State what computation can narrow (hypotheses, poses, chemical series) and what it cannot prove.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l0-cadd-def",
        title: L("تعريف عامل", "A working definition"),
        body: L(
          "الاكتشاف الدوائي الحاسوبي (computational drug discovery، وغالباً CADD) هو استخدام نماذج فيزيائية وإحصائية وكيميائية معلوماتية لتقليل فضاء الفرضيات قبل التجربة أو معها. ليس مصنعاً لجزيء نهائي، وليس بديلاً عن المقايسة أو البلورة أو الحركية. الحساب يُرتّب أسئلة: أي هيئة ligand محتملة؟ أي سلسلة تستحق التخليق؟ أي تفاعل في الجيب يبدو فيزيائياً؟ الإجابة التجريبية تبقى الحكم.",
          "Computational drug discovery (CADD) uses physical, statistical, and cheminformatic models to shrink hypothesis space before or alongside experiment. It is not a factory for a finished molecule, and not a substitute for assay, crystal, or kinetics. Computation ranks questions: which ligand pose is plausible? which series is worth making? which pocket contact looks physical? Experiment remains the verdict.",
        ),
      },
      {
        type: "list",
        id: "l0-cadd-map",
        title: L("خمسة أسماء تُخلط كثيراً", "Five names that get mixed"),
        items: [
          L(
            "النمذجة الجزيئية: بناء تمثيل ثلاثي الأبعاد (بروتين، ligand، مركب) وحساب طاقة أو هندسة تقريبية.",
            "Molecular modeling: building a 3D representation (protein, ligand, complex) and computing approximate energy or geometry.",
          ),
          L(
            "الالتحام (docking): بحث هيئة ligand داخل موقع + scoring function. ليست محاكاة ارتباط.",
            "Docking: searching a ligand pose in a site plus a scoring function. It is not a binding simulation.",
          ),
          L(
            "الديناميكا الجزيئية (MD): تكامل معادلات نيوتن تحت force field لمعاينة ensemble حراري.",
            "Molecular dynamics (MD): integrating Newton’s equations under a force field to sample a thermal ensemble.",
          ),
          L(
            "الكيمإنفورماتكس: تمثيل الجزيء كسلسلة أو رسم أو بصمة، ثم تشابه وQSAR ومكتبات.",
            "Cheminformatics: representing a molecule as a string, graph, or fingerprint, then similarity, QSAR, and libraries.",
          ),
          L(
            "SBDD وLBDD: تصميم من بنية الهدف مقابل تصميم من ligands نشطة معروفة. يُكمّلان لا يتنافيان.",
            "SBDD and LBDD: design from the target structure versus design from known active ligands. They complement, they do not compete.",
          ),
        ],
      },
      {
        type: "compare",
        id: "l0-cadd-vs-exp",
        left: L("الحساب", "Computation"),
        right: L("التجربة", "Experiment"),
        rows: [
          {
            dim: L("ماذا يقيس؟", "What does it measure?"),
            a: L("نموذجاً للطاقة أو التشابه أو الهيئة — تحت افتراضات صريحة.", "A model of energy, similarity, or pose — under explicit assumptions."),
            b: L("كمية فيزيائية أو بيولوجية في نظام محدد (Kd، IC50، بنية).", "A physical or biological quantity in a defined system (Kd, IC50, structure)."),
          },
          {
            dim: L("متى ينهار؟", "When does it collapse?"),
            a: L("عندما تخرج الفيزياء الحقيقية عن force field أو عن معاينة ناقصة.", "When real physics leaves the force field or undersampled ensemble."),
            b: L("عندما تكون المقايسة غير ملائمة للآلية (تكتل، مقايسة غير مباشرة).", "When the assay is mismatched to the mechanism (aggregation, indirect readout)."),
          },
          {
            dim: L("ماذا يملك أن يدّعي؟", "What may it claim?"),
            a: L("أولوية فرضيات ورفض هيئات غير فيزيائية.", "Priority among hypotheses and rejection of unphysical poses."),
            b: L("وجود أو غياب أثر قابل للإعادة في ذلك النظام.", "Presence or absence of a reproducible effect in that system."),
          },
        ],
      },
      {
        type: "why",
        id: "l0-cadd-why",
        question: L(
          "لماذا نُدرّس الفيزياء والكيمياء قبل أدوات الالتحام؟",
          "Why teach physics and chemistry before docking tools?",
        ),
        answer: L(
          "لأن كل برنامج يُخفي قرارات: حالة tautomer، شحنات، صندوق بحث، scoring function، مياه محذوفة. من لا يملك لغة ΔG وpKa وforce field سيُصدّق الرقم لأنه خرج من برمجية. الأداة تُسرّع خطأً أنيقاً بنفس سرعة ما تُسرّع فرضية جيدة.",
          "Every program hides decisions: tautomer state, charges, search box, scoring function, deleted waters. Without the language of ΔG, pKa, and force fields, a number is believed because software emitted it. A tool accelerates an elegant mistake as fast as a good hypothesis.",
        ),
      },
      {
        type: "callout",
        id: "l0-cadd-warn",
        kind: "warning",
        title: L("CADD لا يكتشف دواءً بمفرده", "CADD does not discover a drug by itself"),
        body: L(
          "ورقة تُعلن «مثبطاً واعداً» من درجة التحام واحدة بلا إعادة التحام، بلا مقايسة، وبلا نقد للبروتنة، ليست اكتشافاً. الحساب مساهمة في حجة، والحجة تحتاج دليلاً مستقلاً.",
          "A paper that announces a “promising inhibitor” from one docking score, with no redocking, no assay, and no protonation critique, is not a discovery. Computation is a contribution to an argument, and the argument needs independent evidence.",
        ),
      },
      {
        type: "whatif",
        id: "l0-cadd-whatif",
        scenario: L(
          "ماذا لو عاملتَ درجة Vina كأنها Kd؟",
          "What if you treated a Vina score as if it were Kd?",
        ),
        consequence: L(
          "ستُرتّب مركبات وفق دالة تقريبية دُرّبت أو وُزنت على مهام أخرى، وستُهمل الإنتروبي والإذابة والمعاينة. قد تُصنّع سلسلة كاملة حول هيئة خاطئة. الفشل يظهر متأخراً: مقايسة فارغة بعد أسابيع كيمياء.",
          "You will rank compounds by an approximate function trained or weighted on other tasks, and you will ignore entropy, solvation, and sampling. You may synthesize a whole series around a wrong pose. Failure arrives late: an empty assay after weeks of chemistry.",
        ),
      },
      {
        type: "exercise",
        id: "l0-cadd-ex",
        prompt: L(
          "اكتب في ثلاثة أسطر سؤال بحث لحسابك على كيناز: ما الفرضية، ما الدليل البنيوي الذي ستعتمده، وما الذي لن تدّعيه من الالتحام وحده.",
          "In three lines, write a computational research question on a kinase: the hypothesis, the structural evidence you will rely on, and what you will not claim from docking alone.",
        ),
        solution: L(
          "مثال تعليمي: الفرضية أن حلقة بيريدين تقبل H-bond من العمود الفقري في الجيب ATP. الدليل: بنية holo معلنة الجودة (لا نموذج عام بلا نقد). لن تدّعي أن الدرجة تُثبت أن المركب مثبط نانومولي، بل أن الهيئة تستحق التخليق والمقايسة.",
          "Educational example: hypothesis that a pyridine accepts an H-bond from the hinge in the ATP pocket. Evidence: a published holo structure of stated quality (not an uncritiqued generic model). You will not claim the score proves a nanomolar inhibitor — only that the pose is worth synthesis and assay.",
        ),
      },
    ],
    ["l0-pipeline", "l0-limits", "l0-misconceptions", "l8-not-dg"],
  ),

  expand(
    "l0-pipeline",
    [
      L(
        "ترتيب مراحل الهدف → hit → lead → candidate وموضع الحساب في كل منها.",
        "Order the stages target → hit → lead → candidate and place computation in each.",
      ),
      L(
        "التفريق بين إثبات الهدف، إيجاد إصابة، وتحسين قائد، واختيار مرشح.",
        "Distinguish target validation, hit finding, lead optimization, and candidate selection.",
      ),
      L(
        "معرفة متى يكون الفرز الافتراضي مضيعة، ومتى يكون تصميم دورة طبية أجدى.",
        "Know when virtual screening is waste, and when a medicinal-chemistry design cycle is wiser.",
      ),
    ],
    [
      {
        type: "steps",
        id: "l0-pipe-stages",
        title: L("الخيط الصناعي مبسّطاً", "The industrial thread, simplified"),
        items: [
          {
            title: L("هدف", "Target"),
            body: L(
              "بروتين (أو مسار) تربطه فرضية مرض. الحساب هنا يسأل: هل للموقع جيب قابل للتدخل؟ هل البنية موثوقة؟ لا يُثبت أن الهدف «صحيح دوائياً».",
              "A protein (or pathway) linked to a disease hypothesis. Computation asks: is there an actionable pocket? is the structure trustworthy? It does not prove the target is pharmaceutically “right”.",
            ),
          },
          {
            title: L("Hit", "Hit"),
            body: L(
              "جزيء يُظهر نشاطاً قابلاً للتأكيد في مقايسة. الفرز الافتراضي أو التشابه أو الشظايا قد تقترح قائمة، والتجربة تؤكد أو تنفي.",
              "A molecule with confirmable activity in an assay. Virtual screening, similarity, or fragments may propose a list; experiment confirms or kills it.",
            ),
          },
          {
            title: L("Lead", "Lead"),
            body: L(
              "سلسلة كيميائية لها علاقة بنية-نشاط (SAR) وقابلية تحسين. هنا SBDD وLBDD يُصمّمان تعديلات، لا يكتفيان بترتيب مكتبة عمياء.",
              "A chemical series with structure–activity relationship (SAR) and room to optimize. Here SBDD and LBDD design modifications; they do not merely rank a blind library.",
            ),
          },
          {
            title: L("Candidate", "Candidate"),
            body: L(
              "مركب يوازن القوة والانتقائية وADMET والتخليق. الحساب يُنبّه (hERG، CYP، نفاذية) ولا يُصدر شهادة سلامة.",
              "A compound balancing potency, selectivity, ADMET, and synthesis. Computation flags (hERG, CYP, permeability); it does not certify safety.",
            ),
          },
        ],
      },
      {
        type: "prose",
        id: "l0-pipe-where",
        title: L("أين يدخل الحساب فعلياً", "Where computation actually enters"),
        body: L(
          "قبل الالتحام: هل PDB يستحق؟ هل المياه والمعادن تُحفظ؟ أثناء إيجاد hit: ترشيح فيزيوكيميائي ثم docking أو pharmacophore ثم عين كيميائية. أثناء lead: هيئة وhotspots وbioisosteres وطاقة حرة على أزواج متقاربة. بعد المرشح: تفسير آلية أو مقاومة، لا «اكتشاف» متأخر.",
          "Before docking: is the PDB worth using? are waters and metals kept? During hit finding: physicochemical filters, then docking or a pharmacophore, then a chemist’s eye. During lead work: pose, hotspots, bioisosteres, and free energy on close pairs. After a candidate: mechanism or resistance — not a late “discovery”.",
        ),
      },
      {
        type: "list",
        id: "l0-pipe-not",
        title: L("متى لا تبدأ بفرز افتراضي", "When not to start with virtual screening"),
        ordered: true,
        items: [
          L("لا بنية للجيب أو البنية منخفضة الجودة بلا نقد.", "No pocket structure, or a low-quality structure left uncritiqued."),
          L("لا مقايسة تأكيد، فالقائمة الحاسوبية ستبقى قائمة.", "No confirmatory assay, so the computational list will remain a list."),
          L("الهدف perturbable تفارغياً وأنت ترسّم الموقع التقويمي فقط.", "The target is allosterically perturbable and you dock only the orthosteric site."),
          L("لديك SAR غني لسلسلة معروفة: صمّم الدورة التالية بدل غربلة مليون مركب.", "You already have rich SAR on a known series: design the next cycle instead of sieving a million compounds."),
        ],
      },
      {
        type: "why",
        id: "l0-pipe-why",
        question: L(
          "لماذا يفشل «خط أنابيب» منسوخ من ورقة دون ملاءمة للسؤال؟",
          "Why does a pipeline copied from a paper fail if it is not matched to the question?",
        ),
        answer: L(
          "كل سهم في المخطط قرار: مكتبة، مرشحات Lipinski، صندوق، exhaustiveness، MD 100 ns، MM/PBSA. هذه أدوات لأسئلة مختلفة. نسخ الترتيب دون أن تملك معيار فشل يعني أنك تُنتج أشكالاً لا أدلة.",
          "Every arrow is a decision: library, Lipinski filters, box, exhaustiveness, 100 ns MD, MM/PBSA. Those tools answer different questions. Copying the order without a failure criterion produces figures, not evidence.",
        ),
      },
      {
        type: "callout",
        id: "l0-pipe-lim",
        kind: "limitation",
        title: L("الخريطة الصناعية ليست بروتوكول رسالة", "The industrial map is not a thesis protocol"),
        body: L(
          "مراحل hit/lead/candidate تنظيم إداري. بحث أكاديمي قد يسأل سؤالاً أضيق: هل هذه الماء المحبوسة ضرورية؟ لا تحتاج «مرشحاً». لا تُقلّد مخطط شركة لتبدو جاداً.",
          "Hit/lead/candidate stages are managerial. An academic study may ask a narrower question: is this trapped water necessary? You do not need a “candidate”. Do not mimic a company flowchart to look serious.",
        ),
      },
      {
        type: "whatif",
        id: "l0-pipe-whatif",
        scenario: L(
          "ماذا لو أجريتَ فرزاً على مليون مركب ثم MD على أفضل 10 درجات فقط؟",
          "What if you screened a million compounds and ran MD only on the top 10 scores?",
        ),
        consequence: L(
          "تكون قد سمحت للـ scoring function أن تُقصي كل ما لا يُشبه تدريبَها، ثم «أكّدت» الناجين بمسار قصير. هذا تحيّز مزدوج لا خط أنابيب. الأفضل: عيّنة متنوعة من الهيئات المعقولة كيميائياً، ومعيار إعادة التحام قبل أي MD.",
          "You let the scoring function discard everything unlike its training, then “confirmed” the survivors with a short trajectory. That is double bias, not a pipeline. Better: a chemically diverse sample of physically plausible poses, and a redocking criterion before any MD.",
        ),
      },
    ],
    ["l0-cadd", "l13-workflow", "l24-workflow"],
  ),

  expand(
    "l0-limits",
    [
      L(
        "تسمية الحدود الفيزيائية للنماذج الكلاسيكية: معاينة، force field، مذيب، زمن.",
        "Name the physical limits of classical models: sampling, force field, solvent, time.",
      ),
      L(
        "التمييز بين خطأ منهجي (الفيزياء ناقصة) وخطأ عشوائي (معاينة ناقصة).",
        "Distinguish systematic error (missing physics) from random error (undersampling).",
      ),
      L(
        "تحديد أسئلة لا يحق للنموذج الكلاسيكي أن يجيب عليها.",
        "Identify questions a classical model is not entitled to answer.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l0-lim-physics",
        title: L("الفيزياء المُنمذَجة ليست الفيزياء", "Modeled physics is not physics"),
        body: L(
          "كل حساب CADD يستبدل العالم بدالة. force field كلاسيكي لا يكسر روابط، وغالباً لا يستقطب، ويضع شحنات ثابتة على ذرات. scoring function أبسط من ذلك: حدود تفاعل ووزن إحصائي. MD يُعاين شريحة من المشهد لا المشهد. الاعتراف بالحد ليس تواضعاً بلاغياً — هو جزء من النتيجة.",
          "Every CADD calculation replaces the world with a function. A classical force field does not break bonds, usually does not polarize, and parks fixed charges on atoms. A scoring function is simpler still: interaction terms plus statistical weights. MD samples a slice of the landscape, not the landscape. Naming the limit is not rhetorical humility — it is part of the result.",
        ),
      },
      {
        type: "list",
        id: "l0-lim-four",
        title: L("أربعة حدود متكررة", "Four recurring limits"),
        items: [
          L(
            "المعاينة: هيئة بلورية واحدة، أو 100 ns، قد لا ترى تغيراً بطيئاً أو ارتباطاً يحتاج عبور حاجز.",
            "Sampling: one crystal pose, or 100 ns, may miss slow change or binding that must cross a barrier.",
          ),
          L(
            "التمثيل الكيميائي: tautomer وprotonation خاطئان يُفسدان كل ما بعدهما.",
            "Chemical representation: a wrong tautomer or protonation poisons everything downstream.",
          ),
          L(
            "المذيب والمياه المحبوسة: حذف شبكة ماء قد يحذف الآلية.",
            "Solvent and trapped waters: deleting a water network may delete the mechanism.",
          ),
          L(
            "دقة الطاقة: خطأ force field أو MM/PBSA قد يكون أكبر من الفرق الذي تُرتّب به مركبين.",
            "Energy accuracy: force-field or MM/PBSA error can exceed the gap you use to rank two compounds.",
          ),
        ],
      },
      {
        type: "equation",
        id: "l0-lim-dg",
        latex: String.raw`\Delta G = -RT \ln K`,
        name: L("الربط بين ΔG وثابت الاتزان", "Linking ΔG to the equilibrium constant"),
        meaning: L(
          "فرق طاقة حرة صغير يُغيّر K بقوة أسية. النموذج الذي يخطئ بـ ~1–2 kcal/mol قد يعكس ترتيب مركبين.",
          "A small free-energy difference changes K exponentially. A model wrong by ~1–2 kcal/mol can invert two compounds.",
        ),
        variables: [
          { symbol: "ΔG", name: L("تغير طاقة غيبس", "Gibbs energy change"), unit: L("kcal mol⁻¹ أو kJ mol⁻¹", "kcal mol⁻¹ or kJ mol⁻¹") },
          { symbol: "R", name: L("ثابت الغاز", "Gas constant") },
          { symbol: "T", name: L("درجة الحرارة المطلقة", "Absolute temperature"), unit: L("K", "K") },
          { symbol: "K", name: L("ثابت الاتزان (مثل Ka أو 1/Kd حسب التعريف)", "Equilibrium constant (e.g. Ka or 1/Kd by definition)") },
        ],
        interpretation: L(
          "عند حرارة الغرفة تقريباً، عقدة لوغاريتمية عشرية في K تقابل نحو 1.4 kcal/mol. هذه علاقة فيزيائية عامة، ليست نتيجة ورقة.",
          "Near room temperature, a factor of ten in K corresponds to about 1.4 kcal/mol. This is a general physical relation, not a paper result.",
        ),
        application: L(
          "إذا كانت طريقة الطاقة الحرة لا تستطيع، بأمانة، أن تدّعي خطأ أصغر من الفرق المتوقع بين المركبين، فلا تستخدمها للترتيب.",
          "If a free-energy method cannot honestly claim an error smaller than the expected gap between two compounds, do not use it to rank them.",
        ),
      },
      {
        type: "why",
        id: "l0-lim-why",
        question: L(
          "لماذا لا يكفي إطالة MD لإصلاح scoring function سيئة؟",
          "Why is longer MD not enough to fix a bad scoring function?",
        ),
        answer: L(
          "المسار يتحرك على سطح force field. إن كان السطح نفسه يُخطئ في الشحن أو في الالتواء، فأنت تُعاين فيزياء خاطئة بدقة زمنية أعلى. المعاينة تُصلح نقص الاستكشاف لا نقص الفيزياء.",
          "The trajectory moves on a force-field surface. If that surface is wrong in charge or torsion, you are sampling wrong physics at higher time resolution. Sampling repairs incomplete exploration, not missing physics.",
        ),
      },
      {
        type: "callout",
        id: "l0-lim-whennot",
        kind: "limitation",
        title: L("متى لا تستخدم النموذج الكلاسيكي", "When not to use the classical model"),
        body: L(
          "ارتباط تساهمي، تحفيز بكسر رابطة، معدن انتقالي بتغير تناسق حقيقي، أو نفق بروتون: هذه أرض QM أو QM/MM. الإصرار على MM لأنها «أسرع» يُنتج هيئة تبدو معقولة في الصورة وكاذبة في الآلية.",
          "Covalent binding, catalysis that breaks a bond, a transition metal with real coordination change, or proton tunneling: that is QM or QM/MM territory. Insisting on MM because it is “faster” yields a pose that looks reasonable in a figure and is false as mechanism.",
        ),
      },
      {
        type: "whatif",
        id: "l0-lim-whatif",
        scenario: L(
          "ماذا لو كانت بنيتك من AlphaFold وهيئة الجيب مفتوحة بينما الدواء يرتبط بهيئة مغلقة؟",
          "What if your structure is from AlphaFold and the pocket is open while the drug binds a closed form?",
        ),
        consequence: L(
          "كل التحامك يستكشف الموقع الخطأ. RMSD منخفض لإعادة التحام ligand مرجعي قد لا ينقذك لأن المرجع نفسه غير موجود. ابحث عن بنية holo أو أدلة تفارغية قبل أن تُعلن إصابات.",
          "All of your docking explores the wrong site. A low redocking RMSD to a reference ligand will not save you if that reference does not exist. Seek a holo structure or allosteric evidence before announcing hits.",
        ),
      },
    ],
    ["l0-cadd", "l0-misconceptions", "l6-limits", "l10-limits"],
  ),

  expand(
    "l0-misconceptions",
    [
      L(
        "تفكيك أربعة شعارات شائعة: الدرجة ≠ الدواء، RMSD المسطح ≠ تقارب، الهيئة المتوقعة ≠ المرتبطة، البنية المتنبأة ≠ holo.",
        "Dismantle four slogans: score ≠ drug, flat RMSD ≠ convergence, predicted pose ≠ bound pose, predicted fold ≠ holo.",
      ),
      L(
        "استبدال الادعاء بعبارة قابلة للتكذيب في methods.",
        "Replace a claim with a falsifiable sentence in Methods.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l0-misc-intro",
        title: L("الشعارات تُختصر لأنها مريحة", "Slogans survive because they are comfortable"),
        body: L(
          "المجال مليء بجمل قصيرة تُمرَّر في المناقشات: «الدرجة جيدة إذن المركب جيد»، «RMSD استقر إذن النظام متزن»، «AlphaFold أعطانا بنية فنحن نملك هدفاً». كل جملة تُخفي قياساً مختلفاً. هذا الدرس يضع القياس الصحيح بجانب الشعار.",
          "The field is full of short sentences that pass in discussions: “the score is good so the compound is good”, “RMSD flattened so the system is equilibrated”, “AlphaFold gave a structure so we have a target”. Each sentence hides a different measurement. This lesson puts the right measurement next to the slogan.",
        ),
      },
      {
        type: "compare",
        id: "l0-misc-table",
        left: L("الشعار", "The slogan"),
        right: L("القياس الفعلي", "The actual measurement"),
        rows: [
          {
            dim: L("درجة الالتحام", "Docking score"),
            a: L("طاقة ارتباط أو قوة دوائية.", "Binding energy or drug potency."),
            b: L("قيمة دالة تقييم لهيئة واحدة في شروط البحث.", "A scoring-function value for one pose under the search settings."),
          },
          {
            dim: L("RMSD مسطح", "Flat RMSD"),
            a: L("المسار متقارب والنظام مستقر.", "The trajectory is converged and the system is stable."),
            b: L("متوسط مربع إزاحة عن مرجع لم يعد يتغير كثيراً — وقد تكون عالقاً في حوض واحد.", "Mean-square deviation from a reference stopped changing much — you may be stuck in one basin."),
          },
          {
            dim: L("أفضل هيئة", "Best pose"),
            a: L("الهيئة المرتبطة تجريبياً.", "The experimentally bound pose."),
            b: L("الهيئة التي فضّلتها خوارزمية البحث ودالة التقييم.", "The pose preferred by the search algorithm and scoring function."),
          },
          {
            dim: L("بنية متنبأة", "Predicted structure"),
            a: L("هدف جاهز للتصميم.", "A design-ready target."),
            b: L("نموذج طيّ قد يُخطئ الحلقات والجيب والoligo والligand.", "A fold model that may misplace loops, the pocket, oligomer, and ligand."),
          },
        ],
      },
      {
        type: "callout",
        id: "l0-misc-fact",
        kind: "fact",
        title: L("الدرجة بلا وحدات فيزياء الارتباط", "A score without the units of binding physics"),
        body: L(
          "حتى حين تُكتب درجة الالتحام بوحدات kcal/mol، فهي ليست بالضرورة ΔG قابلاً للمقارنة مع ITC. الوحدات موروثة من تدريب أو وزن حدود، لا من قياس حراري.",
          "Even when a docking score is written in kcal/mol, it is not necessarily a ΔG comparable to ITC. The units are inherited from training or term weights, not from a calorimetric measurement.",
        ),
      },
      {
        type: "why",
        id: "l0-misc-why",
        question: L(
          "لماذا ينتشر الخلط بين RMSD والتقارب؟",
          "Why is RMSD so often confused with convergence?",
        ),
        answer: L(
          "لأن RMSD يُرسم بسهولة ويبدو كـ «ثبات». التقارب الإحصائي يتطلب أن تتفق متوسطات مستقلة (نُسخ، كتل زمنية، ظروف بدء) ضمن خطأ معلن. مسار واحد مستقر شكلياً قد يكون غير ممثل للـ ensemble.",
          "Because RMSD is easy to plot and looks like “stability”. Statistical convergence requires that independent averages (replicas, time blocks, starting conditions) agree within a stated error. One cosmetically stable trajectory can still be unrepresentative of the ensemble.",
        ),
      },
      {
        type: "whatif",
        id: "l0-misc-whatif",
        scenario: L(
          "ماذا لو رفضتَ ورقة في ناديك لأنها تعرض درجة التحام كدليل وحيد على «مثبط قوي»؟",
          "What if you reject a paper in your journal club because it presents a docking score as the sole evidence of a “potent inhibitor”?",
        ),
        consequence: L(
          "تكون قد مارست النقد الذي تُدرّسه هذه الأكاديمية. البديل العلمي: إعادة التحام لمركب معروف، تحليل تفاعلات، وادعاء يتناسب مع الدليل (هيئة معقولة لا قوة نانومولية).",
          "You have practiced the criticism this academy teaches. The scientific alternative: redock a known ligand, analyse interactions, and make a claim sized to the evidence (a plausible pose, not nanomolar potency).",
        ),
      },
      {
        type: "exercise",
        id: "l0-misc-ex",
        prompt: L(
          "حوّل الجملة «المركب مستقر في الجيب لأن RMSD بقي تحت 2 Å لمدة 100 ns» إلى جملة methods صادقة.",
          "Rewrite “the compound is stable in the pocket because RMSD stayed below 2 Å for 100 ns” as an honest Methods sentence.",
        ),
        solution: L(
          "«خلال مسار إنتاج واحد بطول 100 ns، بقي RMSD للligand بعد مواءمة البروتين دون عتبة 2 Å بالنسبة لهيئة البداية. هذا يصف عدم انحراف كبير عن المرجع في تلك المعاينة، ولا يُثبت تقارب ensemble ولا ثباتاً حرارياً للارتباط.»",
          "“During a single 100 ns production trajectory, ligand RMSD after protein alignment remained below a 2 Å cutoff relative to the starting pose. This describes limited departure from the reference in that sample; it does not establish ensemble convergence or thermodynamic binding stability.”",
        ),
      },
    ],
    ["l0-limits", "l8-not-dg", "l9-rmsd", "l23-docking-only"],
  ),

  expand(
    "l0-journey",
    [
      L(
        "فهم مسار الأكاديمية من التوجّه إلى الدفاع عن مشروع، ولماذا النقد مهارة لا ملحق.",
        "Understand the academy path from orientation to defending a project, and why criticism is a skill not an appendix.",
      ),
      L(
        "تحديد فجوتك الحالية: كيمياء، فيزياء، بنية، أو أدوات.",
        "Locate your current gap: chemistry, physics, structure, or tools.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l0-jour-map",
        title: L("الخريطة التعليمية", "The teaching map"),
        body: L(
          "L0 يضبط اللغة. L1–L3 يبنون الكيمياء والفيزياء والرياضيات التي بدونها الأدوات تُصبح طقوساً. L4–L7 يعطون البنية والليجند والـ force field والكَمّ بمقدار حاجة المصمّم. ثم الالتحام وMD والطاقة الحرة والتصميم والفرز وADMET والتعلّم الآلي. أخيراً البيئة وإعادة الإنتاج وقراءة الأوراق والدفاع. الترتيب مقصود: لا MD قبل Boltzmann، ولا درجة قبل أن تعرف أنها ليست ΔG.",
          "L0 sets the language. L1–L3 build the chemistry, physics, and mathematics without which tools become ritual. L4–L7 give structure, ligand, force field, and enough quantum chemistry for a designer. Then docking, MD, free energy, design, screening, ADMET, and ML. Finally environment, reproducibility, paper reading, and defence. The order is deliberate: no MD before Boltzmann, and no score before you know it is not ΔG.",
        ),
      },
      {
        type: "list",
        id: "l0-jour-skills",
        title: L("ما الذي يُحسب باحثاً مستقلاً هنا", "What counts as an independent researcher here"),
        items: [
          L("يختار طريقة لأن السؤال يطلبها، لا لأنها شائعة في أوراق السنة.", "Chooses a method because the question demands it, not because it is fashionable this year."),
          L("يكتب قيوداً: متى تفشل الطريقة، وكيف سيكتشف الفشل.", "Writes constraints: when the method fails, and how failure will be detected."),
          L("يفصل الهيئة عن القوة، والمسار عن التقارب، والنموذج عن القياس.", "Separates pose from potency, trajectory from convergence, model from measurement."),
          L("يقبل أن نتيجة سالبة (الالتحام لا يُعيد الهيئة) نتيجة علمية.", "Accepts a negative result (docking fails to recover the pose) as science."),
        ],
      },
      {
        type: "steps",
        id: "l0-jour-how",
        title: L("كيف تدرس درساً في هذه الأكاديمية", "How to study a lesson here"),
        items: [
          {
            title: L("اقرأ المعادلة حتى تستطيع شرح كل رمز", "Read the equation until you can explain every symbol"),
            body: L("إن لم تعرف وحدة ΔG فلا تستخدم kcal/mol في جملة نتائج.", "If you do not know the unit of ΔG, do not write kcal/mol in a results sentence."),
          },
          {
            title: L("أجب why وwhatif بصوت عالٍ", "Answer the why and whatif out loud"),
            body: L("الفهم الذي لا يصمد على سؤال مضاد ليس فهماً.", "Understanding that cannot survive a counter-question is not understanding."),
          },
          {
            title: L("اربط الدرس بأداة لاحقاً", "Connect the lesson to a later tool"),
            body: L("pKa هنا هو بروتونة ligand في Vina لاحقاً. PCA هنا هو تحليل مسار لاحقاً.", "pKa here is ligand protonation in Vina later. PCA here is trajectory analysis later."),
          },
        ],
      },
      {
        type: "why",
        id: "l0-jour-why",
        question: L(
          "لماذا تُدرَّس مهارات النقد (L22–L26) كمستويات كاملة لا كـ «نصائح ختامية»؟",
          "Why are criticism skills (L22–L26) full levels rather than closing tips?",
        ),
        answer: L(
          "لأن معظم الضرر في الأدبيات الحاسوبية ليس غياب برمجية، بل ادّعاء أكبر من الدليل. إن انتظرت النقد حتى نهاية الرسالة فستكون قد راكمت أشكالاً تحتاج دفاعاً بدل علم يحتاج صياغة.",
          "Most harm in the computational literature is not missing software; it is a claim larger than the evidence. If you postpone criticism until the end of a thesis, you will have accumulated figures that need defending instead of science that needs wording.",
        ),
      },
      {
        type: "callout",
        id: "l0-jour-edu",
        kind: "educational",
        title: L("المسار ليس سباقاً بعدد الدروس", "The path is not a race through lesson count"),
        body: L(
          "درس pKa واحد مفهوم يغنيك عن عشر شاشات تحام على بروتونة خاطئة. إن ضاق وقتك: أتمم L1 tautomer/pKa وL4 quality وL8 not-ΔG قبل أي فرز كبير.",
          "One understood pKa lesson saves you ten docking screens on the wrong protonation. If time is short: finish L1 tautomer/pKa, L4 quality, and L8 not-ΔG before any large screen.",
        ),
      },
      {
        type: "whatif",
        id: "l0-jour-whatif",
        scenario: L(
          "ماذا لو بدأتَ مباشرة بـ GROMACS لأن مختبرك يُشغّله؟",
          "What if you start directly with GROMACS because your lab runs it?",
        ),
        consequence: L(
          "ستُتقن أوامر pdb2gmx دون أن تعرف إن كان الحقل يلائم الليجند، أو إن كان 2 fs مشروعاً، أو إن كان RMSD يُضلل. الأداة بلا لغة فيزيائية تُحوّلك إلى مشغّل لا باحث. ارجع إلى L2 وL6 وL3-integration ولو في أسبوع مكثف.",
          "You will master pdb2gmx without knowing whether the field fits the ligand, whether 2 fs is legitimate, or whether RMSD is misleading you. A tool without physical language turns you into an operator, not a researcher. Return to L2, L6, and L3-integration even if only for an intensive week.",
        ),
      },
    ],
    ["l0-cadd", "l1-groups", "l21-checklist", "l26-falsify"],
  ),

  expand(
    "l1-groups",
    [
      L(
        "ربط المجموعات الوظيفية الشائعة في الأدوية بأنماط تفاعل في الجيب.",
        "Map common drug functional groups to pocket interaction patterns.",
      ),
      L(
        "توقع كيف يُغيّر تحويل مجموعة (حمض ↔ أميد ↔ إستر) الـ pKa والـ H-bond والأيض.",
        "Predict how converting a group (acid ↔ amide ↔ ester) changes pKa, H-bonding, and metabolism.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l1-gr-intro",
        title: L("المجموعة أداة فيزياء لا زينة", "A group is a physics tool, not decoration"),
        body: L(
          "المصمم لا يحفظ أسماء المجموعات للامتحان، بل يسأل: من يمنح H-bond؟ من يحمل شحنة عند pH 7.4؟ من يرفع logD؟ من هو موقع أيض CYP؟ أميد العمود الفقري في الدواء غالباً مانح ومستقبل؛ فينول قد يكون مانحاً وحمضاً ضعيفاً؛ حمض كربوكسيلي غالباً سالب في الدم؛ أمين أليفاتي غالباً موجب. كل قرار يُحرّك الارتباط وADMET معاً.",
          "A designer does not memorize group names for an exam; they ask: who donates an H-bond? who carries charge at pH 7.4? who raises logD? who is a CYP site? A backbone-like amide is often donor and acceptor; a phenol can donate and is a weak acid; a carboxylic acid is usually anionic in blood; an aliphatic amine is often cationic. Every choice moves binding and ADMET together.",
        ),
      },
      {
        type: "list",
        id: "l1-gr-cast",
        title: L("طاقم متكرر في الأدوية", "A recurring cast in drugs"),
        items: [
          L("أميد: هندسة مسطحة تقريباً، H-bond قوي، صلابة دوران حول C–N.", "Amide: nearly planar geometry, strong H-bonding, restricted rotation about C–N."),
          L("سلفوناميد: حموضة قابلة للتعديل، هندسة مختلفة عن الأميد.", "Sulfonamide: tunable acidity, geometry unlike an amide."),
          L("فينول / كاتيكول: H-bond وشحنة جزئية؛ الكاتيكول إنذار أيض/سمية لا حكماً بالإعدام.", "Phenol / catechol: H-bond and partial charge; catechol is a metabolism/toxicity alert, not an automatic death sentence."),
          L("أمينات: أولية/ثانوية/ثالثية تختلف في pKa وقدرة H-bond وN-oxide.", "Amines: primary/secondary/tertiary differ in pKa, H-bond capacity, and N-oxide risk."),
          L("هيتيروسيكلات عطرية: نتروجين مستقبل (بيريدين) أو مانح (بيرول/إندول).", "Aromatic heterocycles: nitrogen as acceptor (pyridine) or donor (pyrrole/indole)."),
        ],
      },
      {
        type: "viewer",
        id: "l1-gr-1iep",
        pdb: "1IEP",
        ligand: "STI",
        caption: L(
          "1IEP: Abl kinase مع imatinib. اقرأ الأميدات والبيريدين والبيبيريدين كأدوات تفاعل لا كأسماء تجارية.",
          "1IEP: Abl kinase with imatinib. Read the amides, pyridine, and piperazine as interaction tools, not as brand names.",
        ),
      },
      {
        type: "why",
        id: "l1-gr-why",
        question: L(
          "لماذا يُعدّ تحويل حمض كربوكسيلي إلى أميد تغييراً دوائياً كبيراً لا «تنظيفاً» للصيغة؟",
          "Why is converting a carboxylic acid to an amide a major medicinal change, not formula housekeeping?",
        ),
        answer: L(
          "الحمض في الدم في الغالب أنيون: ملح، ذوبان، H-bond مختلف، ونفاذية مختلفة. الأميد محايد تقريباً، مانح ومستقبل، وأصلب. قد تفقد جسراً ملحياً وتكسب نفاذية — أو العكس. لا تُجرِ التحويل في الالتحام دون إعادة بروتونة وهيئة.",
          "In blood the acid is mostly an anion: salt, solubility, different H-bonding, different permeability. An amide is nearly neutral, donor and acceptor, and stiffer. You may lose a salt bridge and gain permeability — or the reverse. Do not make the conversion in docking without re-protonating and re-posing.",
        ),
      },
      {
        type: "callout",
        id: "l1-gr-warn",
        kind: "warning",
        title: L("المجموعة في SMILES ليست المجموعة في الجيب", "The group in SMILES is not the group in the pocket"),
        body: L(
          "إستر قد يُرسم مستقراً وهو prodrug يتفكك. نتروبنزيل قد يكون إنذار PAINS. لا تُقدّس الوجود في صيغة دواء معروف كدليل أن المجموعة «آمنة» في سلسلتك.",
          "An ester may be drawn as stable while it is a cleavable prodrug. A nitrobenzyl may be a PAINS alert. Do not treat presence in a famous drug formula as proof that the group is “safe” in your series.",
        ),
      },
      {
        type: "whatif",
        id: "l1-gr-whatif",
        scenario: L(
          "ماذا لو أضفتَ فينولين «لزيادة H-bond» في جيب كاره للماء؟",
          "What if you add a phenol “to add an H-bond” inside a hydrophobic pocket?",
        ),
        consequence: L(
          "قد تدفع عقوبة إذابة: الماء يُحب الفينول أكثر من الجيب. النتيجة الشائعة انخفاض affinity رغم «تفاعل إضافي» على الشاشة. اسأل أولاً: هل هناك مستقبل هندسي جاف نسبياً، أم أنك تُدخل قطبية إلى نواة كارهة؟",
          "You may pay a solvation penalty: water likes the phenol more than the pocket does. A common outcome is lower affinity despite an “extra interaction” on screen. Ask first: is there a relatively dry geometric acceptor, or are you inserting polarity into a hydrophobic core?",
        ),
      },
      {
        type: "exercise",
        id: "l1-gr-ex",
        prompt: L(
          "لسالسلين: حمض أريلي مقابل أميد الأريل نفسه. اذكر فرقاً واحداً متوقعاً في التأين، وواحداً في H-bond، وواحداً في الأيض.",
          "For two analogues: an aryl acid versus the corresponding aryl amide. State one expected difference in ionization, one in H-bonding, and one in metabolism.",
        ),
        solution: L(
          "التأين: الحمض في الغالب سالب عند 7.4، الأميد لا. H-bond: الحمض (أنيون) مستقبل قوي وجسر ملحي؛ الأميد مانح NH ومستقبل C=O. الأيض: الأميد قد يُفكك هيدروليزياً؛ الحمض قد يُقترن (glucuronidation) — اتجاهات تعليمية لا أرقام حتمية.",
          "Ionization: the acid is mostly anionic at 7.4, the amide is not. H-bond: the (anionic) acid is a strong acceptor and salt-bridge partner; the amide donates NH and accepts C=O. Metabolism: the amide may be hydrolysed; the acid may be conjugated (glucuronidation) — educational directions, not inevitable numbers.",
        ),
      },
    ],
    ["l1-electronics", "l1-pka", "l1-hetero", "l11-medchem"],
  ),

  expand(
    "l1-electronics",
    [
      L(
        "تفسير الأثر الحثي والرنين على الكثافة الإلكترونية في حلقة دوائية.",
        "Explain inductive and resonance effects on electron density in a drug ring.",
      ),
      L(
        "ربط العطرية وموضع المستبدل بـ pKa وقدرة مستقبل H-bond.",
        "Connect aromaticity and substituent position to pKa and H-bond acceptor strength.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l1-el-intro",
        title: L("الإلكترونات تُحرّك الارتباط قبل أن تُحرّك المعادلة", "Electrons move binding before they move an equation"),
        body: L(
          "مستبدل يسحب الكثافة (مثل NO2 أو CF3) يُضعِف أساسية نتروجين في الحلقة ويرفع حموضة فينول مجاور عبر الرنين أو الحث. مستبدل مانح (OMe، NH2) يفعل العكس. المصمم يستخدم هذا لضبط pKa دون تغيير الهيكل، أو لكسر اقتران π غير مرغوب. Hammett إطار فكري للاتجاه لا آلة تُخرج Kd.",
          "A withdrawing substituent (NO2, CF3) weakens the basicity of a ring nitrogen and can raise the acidity of a nearby phenol by resonance or induction. A donor (OMe, NH2) does the opposite. Designers use this to tune pKa without changing the scaffold, or to break an unwanted π-conjugation. Hammett is a directional framework, not a machine that emits Kd.",
        ),
      },
      {
        type: "list",
        id: "l1-el-three",
        title: L("ثلاث لغات للتأثير", "Three languages of effect"),
        items: [
          L("حثّي (inductive): عبر σ، يضعف مع المسافة، الهالوجينات وCF3 أمثلة.", "Inductive: through σ bonds, fades with distance; halogens and CF3 are examples."),
          L("رنين (resonance): عبر π، يعتمد على الموضع أورثو/بارا مقابل ميتا.", "Resonance: through π, depends on ortho/para versus meta placement."),
          L("عطرية: استقرار حلقي يُقيّد الهيئة ويجعل الاستبدال مكلفاً إن كسر العطرية.", "Aromaticity: cyclic stabilization that constrains geometry and makes substitutions costly if they break aromaticity."),
        ],
      },
      {
        type: "prose",
        id: "l1-el-pyridine",
        title: L("بيريدين كمثال تصميمي", "Pyridine as a design example"),
        body: L(
          "نتروجين البيريدين مستقبل H-bond أساسي في جيوب كيناز (hinge). سحب إلكتروني من الموضع 4 يُغيّر أساسية النتروجين وبالتالي قوة ذلك القبول — وقد يُغيّر البروتنة في المحلول فيُفسد الالتحام إن رسمت النوع الخطأ. لا تُعدّل الحلقة كشكل هندسي فقط.",
          "Pyridine nitrogen is a key H-bond acceptor in kinase hinges. Electron withdrawal at position 4 changes that nitrogen’s basicity and thus acceptor strength — and may change solution protonation, wrecking docking if you drew the wrong species. Do not edit the ring as geometry alone.",
        ),
      },
      {
        type: "why",
        id: "l1-el-why",
        question: L(
          "لماذا يفشل «إضافة فلور في كل مكان لزيادة القوة»؟",
          "Why does “add fluorine everywhere to boost potency” fail?",
        ),
        answer: L(
          "الفلور يسحب إلكترونياً، قد يخفض pKa، يُغيّر logD، ويسدّ موضعاً أيضياً أو يفتح آخر، وقد يخلق تفاعلاً مُضراً مع عمود فقري. القوة ليست جمع ذرات ثقيلة. كل فلور يحتاج سبباً: حجب أيض، ضبط pKa، أو ملء جيب هندسي.",
          "Fluorine withdraws electrons, can lower pKa, change logD, block one metabolic site or open another, and may clash with backbone. Potency is not a sum of heavy atoms. Each fluorine needs a reason: metabolic blocking, pKa tuning, or filling a geometric hole.",
        ),
      },
      {
        type: "callout",
        id: "l1-el-lim",
        kind: "limitation",
        title: L("الرنين في الرأس ليس الرنين في force field", "Resonance in your head is not resonance in the force field"),
        body: L(
          "MM الكلاسيكي لا «يرى» الرنين إلا بما دُفِن في ثوابت الالتواء والشحنات الجزئية. إن كانت الشحنات من طريقة لا تُمثّل الشكل الرنيني المهم، فكل ما بعده مبني على كثافة خاطئة.",
          "Classical MM does not “see” resonance except as baked into torsion parameters and partial charges. If those charges come from a method that misses the important resonance form, everything downstream is built on the wrong density.",
        ),
      },
      {
        type: "whatif",
        id: "l1-el-whatif",
        scenario: L(
          "ماذا لو نقلتَ مستبدلاً مانحاً من بارا إلى ميتا على فينول تظنه مانح H-bond؟",
          "What if you move a donor substituent from para to meta on a phenol you believe is an H-bond donor?",
        ),
        consequence: L(
          "قد يتغيّر pKa للفينول واتجاه الزوج الحر. الهيئة التي كانت تُناسب الجيب قد تضعف. أعد تقدير التأين قبل إعادة الالتحام، ولا تكتفِ بتحريك الذرة في المحرّر.",
          "The phenol pKa and the orientation of the lone pairs may change. A pocket-matching geometry may weaken. Re-estimate ionization before redocking; do not just drag the atom in the editor.",
        ),
      },
    ],
    ["l1-groups", "l1-pka", "l1-hetero", "l7-mep"],
  ),

  expand(
    "l1-tautomer",
    [
      L(
        "التعرف على مواضع tautomer الشائعة (كيتو–إنول، هيستيدين، بيرازول، بيريميدين) قبل أي docking.",
        "Recognize common tautomer sites (keto–enol, histidine, pyrazole, pyrimidine) before any docking.",
      ),
      L(
        "شرح كيف يُفسد tautomer خاطئ شبكة H-bond وبالتالي هيئة ranking بأكملها.",
        "Explain how a wrong tautomer wrecks an H-bond network and therefore an entire pose ranking.",
      ),
      L(
        "وضع قاعدة عملية: عدّد الأنواع المعقولة عند pH العمل ولا ترسّم نوعاً واحداً افتراضياً.",
        "Set a working rule: enumerate plausible species at the working pH; do not dock a single default form.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l1-tau-intro",
        title: L("الذرة نفسها، الفيزياء لا", "Same atoms, different physics"),
        body: L(
          "tautomer يُحرّك هيدروجيناً ويُغيّر موقع الرابطة المزدوجة. SMILES مختلفان قد يمثلان النوع نفسه أو نوعين يعيشان في اتزان. في الجيب، مانح يصبح مستقبلاً إن نُقل H. برامج الالتحام لا تُصحّح ذلك سحرياً إن أُعطيت بنية ثلاثية خاطئة. خطأ tautomer هو من أشيع أسباب فشل docking الصامت: RMSD سيئ لمركب مرجعي، أو هيئة «جميلة» لا تُعيد تفاعل البلورة.",
          "A tautomer moves a hydrogen and relocates a double bond. Two SMILES strings may be the same species or two species in equilibrium. In the pocket, a donor becomes an acceptor if H moves. Docking programs do not magically repair a wrong 3D species. A tautomer error is among the most common silent docking failures: poor RMSD for a reference ligand, or a “pretty” pose that does not recover the crystal contact.",
        ),
      },
      {
        type: "list",
        id: "l1-tau-hot",
        title: L("أماكن تُفتش قبل الصندوق", "Places to inspect before the box"),
        items: [
          L("كيتو–إنول في 1,3-ديكاربونيل وهيدروكسي بيريدين.", "Keto–enol in 1,3-dicarbonyls and hydroxypyridines."),
          L("هيستيدين: HID/HIE/HIP — بروتونة δ أو ε أو كلتاهما.", "Histidine: HID/HIE/HIP — δ, ε, or both protonated."),
          L("بيرازول وإندازول: أي نتروجين يحمل H يحدد اتجاه المانح.", "Pyrazole and indazole: which nitrogen bears H sets the donor direction."),
          L("بيريميدين/يوراسيل في قواعد نووية ومثبطات كيناز شبيهة.", "Pyrimidine/uracil in nucleobases and kinase-like inhibitors."),
          L("سلفوناميد وأميد تترولي: حموضة قد تُخرج H تماماً (تأين لا tautomer فقط).", "Sulfonamide and tetrazole: acidity may remove H entirely (ionization, not tautomer alone)."),
        ],
      },
      {
        type: "steps",
        id: "l1-tau-protocol",
        title: L("بروتوكول تعليمي قبل الالتحام", "An educational protocol before docking"),
        items: [
          {
            title: L("عدّد", "Enumerate"),
            body: L("ولّد tautomer معقولة كيميائياً عند pH المقايسة (غالباً نحو 7.4) دون أن تثق بالأداة العمياء إن تعارضت مع الكيمياء.", "Generate chemically reasonable tautomers at assay pH (often near 7.4). Do not trust a blind enumerator if it contradicts chemistry."),
          },
          {
            title: L("ارسم شبكة H-bond", "Draw the H-bond network"),
            body: L("لكل نوع: من يمنح لمن في الجيب؟ إن انقلبت الأدوار، ألغِ النوع أو اختبره صراحة.", "For each species: who donates to whom in the pocket? If roles invert, drop the species or test it explicitly."),
          },
          {
            title: L("لا تدمج الدرجات عبر أنواع مختلفة كأنها ligand واحد", "Do not merge scores across species as if they were one ligand"),
            body: L("كل tautomer جزيء فيزيائي مختلف. قارن داخل النوع، واذكر أي نوع رُسِم.", "Each tautomer is a different physical molecule. Compare within a species, and state which one was docked."),
          },
        ],
      },
      {
        type: "why",
        id: "l1-tau-why",
        question: L(
          "لماذا يُعدّ tautomer الهيستيدين في الجيب قرار docking لا تفصيلاً بروتينياً ثانوياً؟",
          "Why is histidine tautomer in the pocket a docking decision, not a minor protein detail?",
        ),
        answer: L(
          "HID مقابل HIE يعكس مانح/مستقبل على نفس الحلقة. ligand الذي يحتاج قبول N سيُرفض أو يُدار إن وضعت H على النتروجين الخطأ. كثير من «فشل إعادة الالتحام» في مواقع حمضية/أساسية هو بروتونة هيستيدين لا خوارزمية بحث.",
          "HID versus HIE reverses donor/acceptor on the same ring. A ligand that needs to accept at N will be rejected or rotated if you put H on the wrong nitrogen. Many “redocking failures” in acidic/basic sites are histidine protonation, not the search algorithm.",
        ),
      },
      {
        type: "callout",
        id: "l1-tau-warn",
        kind: "warning",
        title: L("أداة التحضير الافتراضية ليست حَكَماً", "The default prep tool is not a referee"),
        body: L(
          "مولّدات tautomer تختلف، وقد تُسقط النوع المرتبط تجريبياً. إذا كانت لديك بلورة ligand، طابق الهيدروجينات مع كثافة إلكترونية أو مع كيمياء الجيب، لا مع خيار القائمة الأولى.",
          "Tautomer enumerators disagree, and may drop the experimentally bound species. If you have a ligand crystal, match hydrogens to electron density or pocket chemistry, not to the first menu option.",
        ),
      },
      {
        type: "whatif",
        id: "l1-tau-whatif",
        scenario: L(
          "ماذا لو رسّمتَ بيرازول بـ H على النتروجين البعيد عن مستقبل العمود الفقري؟",
          "What if you dock a pyrazole with H on the nitrogen far from the backbone acceptor?",
        ),
        consequence: L(
          "ستفقد H-bond المحوري أو تُولّد هيئة مقلوبة تُرضي الدالة بحدود vdW. الدرجة قد تبدو «مقبولة» والمركب يفشل في المقايسة. اقلِب tautomer وأعد الالتحام قبل أن تُصنّع مشتقات حول الهيئة الخاطئة.",
          "You will lose the hinge H-bond or generate a flipped pose that satisfies the function with vdW terms. The score may look “acceptable” and the compound will fail in assay. Flip the tautomer and redock before you synthesize analogues around the wrong pose.",
        ),
      },
      {
        type: "exercise",
        id: "l1-tau-ex",
        prompt: L(
          "لديك 2-هيدروكسي بيريدين. اذكر النوعين، وكيف يختلف نمط H-bond لكل منهما في جيب يقدّم مانحاً من NH العمود الفقري.",
          "You have 2-hydroxypyridine. Name the two forms and how their H-bond patterns differ in a pocket that offers a backbone NH donor.",
        ),
        solution: L(
          "النوع إنولي (هيدروكسي بيريدين) يملك OH مانحاً وN مستقبلاً. النوع بيريدون يملك NH مانحاً وC=O مستقبلاً. إن كان الجيب يمنح NH، فمستقبل الكربونيل في البيريدون غالباً الأنسب؛ رسم الإنول قد يضع OH حيث لا يوجد مستقبل أو يخلق تنافراً.",
          "The enol (hydroxypyridine) has a donating OH and an accepting N. The pyridone has a donating NH and an accepting C=O. If the pocket donates NH, the pyridone carbonyl is often the matching acceptor; drawing the enol may place OH where no acceptor exists or create clash.",
        ),
      },
    ],
    ["l1-pka", "l1-hbond", "l8-failures", "l4-quality"],
  ),

  expand(
    "l1-stereo",
    [
      L(
        "التفريق بين enantiomer وdiastereomer وatropisomer من منظور هدف بروتيني يدوي.",
        "Distinguish enantiomer, diastereomer, and atropisomer from the viewpoint of a chiral protein target.",
      ),
      L(
        "توقع أن المقابل الضوئي قد يكون غير نشط أو سام أو نشطاً على هدف آخر.",
        "Expect that the enantiomer may be inactive, toxic, or active at another target.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l1-st-intro",
        title: L("الجيب يدوي", "The pocket is chiral"),
        body: L(
          "البروتين مصنوع من أحماض أمينية يدوية؛ الجيب بيئة غير متناظرة. enantiomerان ليسا «النفس الجزيء» للهدف. في الالتحام، تجاهل chirality (أو توسيع stereoisomer بلا وعي) يملأ القائمة بجزيئات لن تُصنّع كما رُسمت. في التخليق، المقابل قد يظهر كشائبة لها pharmacology خاص.",
          "Protein is built from chiral amino acids; the pocket is an unsymmetric environment. Two enantiomers are not “the same molecule” to the target. In docking, ignoring chirality (or expanding stereoisomers unconsciously) fills the list with molecules that will not be made as drawn. In synthesis, the antipode may appear as an impurity with its own pharmacology.",
        ),
      },
      {
        type: "list",
        id: "l1-st-kinds",
        title: L("أنواع تهُم المصمم", "Kinds that matter to a designer"),
        items: [
          L("Enantiomers: صور مرآة؛ تحتاج عادة فصلاً أو تخليقاً انتقائياً.", "Enantiomers: mirror images; usually need separation or stereoselective synthesis."),
          L("Diastereomers: ليست مرايا؛ خصائص فيزيائية مختلفة (ذوبان، logD) لا نشاط فقط.", "Diastereomers: not mirrors; physical properties differ (solubility, logD), not only activity."),
          L("مراكز في حلقة مشبعة (مثل سيس/ترانس على سيكلوهكسيل).", "Centres on saturated rings (e.g. cis/trans on cyclohexyl)."),
          L("Atropisomers: دوران مقيد حول رابطة محورية؛ قد يعيش النوعان في زمن المقايسة.", "Atropisomers: restricted rotation about an aryl–aryl bond; both may live on the assay timescale."),
        ],
      },
      {
        type: "callout",
        id: "l1-st-edu",
        kind: "educational",
        title: L("مثال تاريخي: ثاليدوميد", "Historical example: thalidomide"),
        body: L(
          "يُدرَّس ثاليدوميد لأن enantiomerين يمكن أن يختلفا في الأثر، ولأن الاتزان في الجسم قد يخلطهما. الدرس ليس حفظ تفاصيل سريرية، بل: لا تفترض أن اليد الأخرى «صامتة».",
          "Thalidomide is taught because enantiomers can differ in effect, and because in vivo equilibration can mix them. The lesson is not to memorize clinical detail; it is: do not assume the other hand is silent.",
        ),
      },
      {
        type: "why",
        id: "l1-st-why",
        question: L(
          "لماذا لا يكفي أن ترسّم enantiomer واحد ثم تدّعي أن «البرنامج اختار اليد الصحيحة»؟",
          "Why is docking one enantiomer and claiming “the program chose the right hand” insufficient?",
        ),
        answer: L(
          "خوارزمية البحث تُحسّن درجة على التوبولوجيا التي أعطيتها. إن لم تُدخل اليد الأخرى، فلن تُقارَن. وإن أدخلتهما، فالدالة قد تُفضّل يداً لأسباب vdW لا لأن الفيزياء اكتملت. التحقّق: بلورة أو SAR يدوي أو تخليق منفصل.",
          "The search optimizes a score on the topology you supplied. If you never input the other hand, it is never compared. If you input both, the function may prefer a hand for vdW reasons, not because the physics is complete. Validation: a crystal, chiral SAR, or separate synthesis.",
        ),
      },
      {
        type: "whatif",
        id: "l1-st-whatif",
        scenario: L(
          "ماذا لو كانت مكتبتك SMILES بلا stereochemistry (@ و / و \\ محذوفة)؟",
          "What if your library SMILES has no stereochemistry (@, /, \\ stripped)?",
        ),
        consequence: L(
          "ستُولَّد هيئات ثلاثية بتكوين عشوائي أو مسطّح. الإثراء الظاهري قد يأتي من يد لن تشتريها. أعد تعيين الـ stereo من المصدر، أو وسّع صراحة واحفظ أي يد رُسِمت.",
          "3D poses will be generated with random or flattened configuration. Apparent enrichment may come from a hand you will never purchase. Reassign stereo from the source, or expand explicitly and record which hand was docked.",
        ),
      },
      {
        type: "exercise",
        id: "l1-st-ex",
        prompt: L(
          "مركب فيه مركز chiral واحد وجيب غير متناظر. ما الحد الأدنى من التجارب الحاسوبية قبل أن توصي بتخليق racemate؟",
          "A compound has one chiral centre and an unsymmetric pocket. What is the minimum computational work before you recommend making a racemate?",
        ),
        solution: L(
          "رسّم اليدين كجزيئين منفصلين، قارن شبكات H-bond والاصطدام لا الدرجات وحدها، واذكر أن racemate يخفف الجرعة الفعالة لليد النشطة إلى النصف ويفرض pharmacology لليد الأخرى. إن اختلفت الهيئتان جذرياً، لا توصِ بالـ racemate كاختصار.",
          "Dock both hands as separate molecules, compare H-bond networks and clashes not scores alone, and state that a racemate halves the effective dose of the active hand and imposes the other hand’s pharmacology. If the poses differ radically, do not recommend the racemate as a shortcut.",
        ),
      },
    ],
    ["l1-conform", "l1-groups", "l5-smiles", "l8-failures"],
  ),

  expand(
    "l1-conform",
    [
      L(
        "التمييز بين الهيئة الأدنى طاقة في الفراغ والهيئة النشطة حيوياً في الجيب.",
        "Distinguish the vacuum global-minimum conformer from the bioactive conformer in the pocket.",
      ),
      L(
        "تقدير أن إرهاق التوافق (conformational strain) يُخصم من ΔG الارتباط.",
        "Treat conformational strain as a tax paid from binding ΔG.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l1-cf-intro",
        title: L("الجزيء مجموعة هيئات", "A molecule is a family of conformers"),
        body: L(
          "روابط أحادية تدور، حلقات تتنفّس، مجموعات قطبية تبحث عن H-bond داخلي في الماء أو عنه. الالتحام يفترض غالباً هيئة ligand مرنة أثناء البحث، لكن بعض البروتوكولات تُجمّد تطابقاً مولَّداً في الفراغ. إن كانت الهيئة النشطة أعلى طاقة ببضعة kcal/mol، فقد تربح تفاعلات الجيب وتخسر الاتزان — أو لا تُولَّد أصلاً.",
          "Single bonds rotate, rings breathe, polar groups seek or avoid internal H-bonds in water. Docking often treats the ligand as flexible during search, but some protocols freeze a vacuum-generated conformer. If the bioactive form lies a few kcal/mol higher, pocket contacts may win and equilibrium may lose — or that form is never generated at all.",
        ),
      },
      {
        type: "equation",
        id: "l1-cf-boltz",
        latex: String.raw`p_i \propto e^{-E_i / RT}`,
        name: L("وزن بولتزمان لهيئة", "Boltzmann weight of a conformer"),
        meaning: L(
          "الهيئات العالية الطاقة نادرة في المحلول الحر ما لم يُعوّضها الارتباط.",
          "High-energy conformers are rare in free solution unless binding pays for them.",
        ),
        variables: [
          { symbol: "p_i", name: L("احتمال الهيئة i", "Probability of conformer i") },
          { symbol: "E_i", name: L("طاقة نسبية للهيئة (تقريب)", "Relative conformer energy (approximate)"), unit: L("kcal mol⁻¹", "kcal mol⁻¹") },
          { symbol: "RT", name: L("الطاقة الحرارية المولية", "Molar thermal energy") },
        ],
        interpretation: L(
          "فرق تعليمي بنحو 1.4 kcal/mol يُنقص الوزن تقريباً عشر مرات عند حرارة الغرفة. strain أكبر من ذلك يجب أن يُبرَّر بتفاعلات الجيب لا بتجاهله.",
          "An educational gap of about 1.4 kcal/mol cuts the weight roughly tenfold at room temperature. Larger strain must be justified by pocket interactions, not ignored.",
        ),
        application: L(
          "قبل أن تُقدّس هيئة docked مطوية بشدة، قدّر طاقتها بميدان ligand (أو QM صغير) نسبة إلى ensemble محلول.",
          "Before you canonize a sharply bent docked pose, estimate its energy with a ligand field (or a small QM) relative to a solution ensemble.",
        ),
      },
      {
        type: "list",
        id: "l1-cf-flags",
        title: L("علامات strain غير فيزيائي", "Flags of unphysical strain"),
        items: [
          L("زاوية التواء بعيدة جداً عن كمون الـ torsion في GAFF/CGenFF.", "A torsion far from the GAFF/CGenFF torsion potential minimum."),
          L("حلقة سباعية أو أميد منحني خارج المستوى دون سبب جيبي.", "A seven-membered ring or amide bent out of plane without a pocket reason."),
          L("روابط داخلية H تُكسر في الجيب دون بديل.", "Internal H-bonds broken in the pocket with no replacement."),
          L("عدد روابط قابلة للدوران كبير مع هيئة وحيدة «فائزة» بلا عناقيد.", "Many rotatable bonds with a single “winning” pose and no clusters."),
        ],
      },
      {
        type: "why",
        id: "l1-cf-why",
        question: L(
          "لماذا قد تكون الهيئة النشطة حيوياً ليست الأدنى في الفراغ؟",
          "Why might the bioactive conformer not be the vacuum global minimum?",
        ),
        answer: L(
          "الفراغ يفتقد الماء والجيب. هيئة تُظهر قطباً للماء قد تنطوي على نفسها في الغاز. في الجيب، قد تُفتح لتكسب جسور H مع البروتين. المقارنة العادلة: طاقة في المذيب مقابل طاقة المركب المرتبط، لا حد أدنى غازي.",
          "Vacuum lacks water and the pocket. A conformer that exposes polarity to water may collapse on itself in the gas phase. In the pocket it may open to gain protein H-bonds. The fair comparison is solvated free ligand versus bound complex, not a gas-phase minimum.",
        ),
      },
      {
        type: "callout",
        id: "l1-cf-lim",
        kind: "limitation",
        title: L("مولّد الهيئات ليس ضماناً للـ bioactive form", "A conformer generator is not a guarantee of the bioactive form"),
        body: L(
          "إن ضيّقتَ نافذة الطاقة جداً فقد تحذف الهيئة المرتبطة. إن وسّعتها بلا حد ملأت الصندوق بهيئات لن تُعاين حرارياً. سجّل إعداد التوليد، ولا تخلط درجات docking عبر هيئات مجمّدة مختلفة دون أن تقول ذلك.",
          "A very tight energy window may delete the bound form. An unbounded window fills the box with thermally irrelevant shapes. Record generator settings, and do not mix docking scores across different frozen conformers without saying so.",
        ),
      },
      {
        type: "whatif",
        id: "l1-cf-whatif",
        scenario: L(
          "ماذا لو ثبّتَّ ligand بهيئة ممتدة لأنه «يبدو أنه يملأ الجيب» رغم التواء أميد؟",
          "What if you freeze an extended ligand because it “looks like it fills the pocket” despite a twisted amide?",
        ),
        consequence: L(
          "الأميد الملتوي جزاء طاقته كبير في أي force field محترم. ستحصل على درجة مخادعة من ملامسات vdW. أعد الالتحام مع مرونة أو قيود أميد مستوية، أو ارفض الهيئة.",
          "A twisted amide carries a large energy penalty in any respectable force field. You will get a deceptive score from vdW contacts. Redock with flexibility or planar-amide restraints, or reject the pose.",
        ),
      },
    ],
    ["l1-stereo", "l2-boltzmann", "l6-bonded", "l8-poses"],
  ),

  expand(
    "l1-pka",
    [
      L(
        "استخدام Henderson–Hasselbalch لتقدير أي نوع يسود عند pH 7.4.",
        "Use Henderson–Hasselbalch to estimate which species dominates at pH 7.4.",
      ),
      L(
        "ربط خطأ البروتنة بفشل docking: شحنة خاطئة تُحرّك coulomb وتُعكس ترتيب ligands.",
        "Connect protonation error to docking failure: a wrong charge moves Coulomb and can invert ligand ranking.",
      ),
      L(
        "معرفة متى لا تثق بـ pKa متنبأ من لوحة عامة دون سياق الجيب.",
        "Know when not to trust a dashboard-predicted pKa without pocket context.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l1-pka-intro",
        title: L("من يتأين في الدم قد لا يتأين في الجيب", "What is ionized in blood may not be ionized in the pocket"),
        body: L(
          "pKa كمية للمادة في مذيب محدد (غالباً ماء). الجيب قد يُزيح الاتزان بعدة وحدات إن وُجدت شحنة مقابلة أو بيئة منخفضة العزل. رغم ذلك، تجاهل pKa المحلول هو الخطأ الأشيع: أمين يُرسَم محايداً وهو في الغالب NH3+ عند 7.4، أو حمض يُرسَم COOH وهو COO−. الشحنة الخاطئة تُفسد electrostatics في scoring function وforce field معاً.",
          "pKa is a property of a species in a defined solvent (usually water). The pocket may shift the equilibrium by several units if a counter-charge or a low-dielectric environment exists. Still, ignoring solution pKa is the common error: an amine drawn neutral when it is mostly NH3+ at 7.4, or an acid drawn COOH when it is COO−. The wrong charge corrupts electrostatics in both scoring functions and force fields.",
        ),
      },
      {
        type: "equation",
        id: "l1-pka-hh",
        latex: String.raw`\mathrm{pH} = \mathrm{p}K_a + \log_{10}\frac{[A^-]}{[HA]}`,
        name: L("Henderson–Hasselbalch للحمض الضعيف", "Henderson–Hasselbalch for a weak acid"),
        meaning: L(
          "عندما يساوي pH قيمة pKa، النوعان بنصفين. كل وحدة فرق تُغيّر النسبة عشر مرات تقريباً.",
          "When pH equals pKa, the two species are equal. Each unit of difference changes the ratio about tenfold.",
        ),
        variables: [
          { symbol: "pH", name: L("حموضة الوسط", "Medium acidity") },
          { symbol: "pKa", name: L("سالب لوغاريتم ثابت الحموضة", "−log10 of the acid dissociation constant") },
          { symbol: "[A⁻]/[HA]", name: L("نسبة القاعدة المرافقة إلى الحمض", "Ratio of conjugate base to acid") },
        ],
        interpretation: L(
          "لأمين (قاعدة)، صِغ العلاقة للنظير BH+/B. القاعدة العملية: إن كان pKa (للحمض المرافق) أعلى بكثير من 7.4 فالأمين في الغالب بروتوني.",
          "For an amine (base), write the analogue for BH+/B. Practical rule: if the conjugate-acid pKa is well above 7.4, the amine is mostly protonated.",
        ),
        application: L(
          "قبل docking عند «pH 7.4»، اكتب النوع الغالب لكل مركز قابل للتأين. إن كان الاتزان قريباً (pKa نحو 6–8)، رسّم النوعين كمدخلين منفصلين.",
          "Before docking at “pH 7.4”, write the majority species for every ionizable centre. If equilibrium is close (pKa near 6–8), dock both species as separate inputs.",
        ),
      },
      {
        type: "list",
        id: "l1-pka-dock",
        title: L("كيف يقتل pKa خاطئ تجربة التحام", "How a wrong pKa kills a docking run"),
        ordered: true,
        items: [
          L("الشحنة الكلية للligand تتغيّر فتتغيّر حدود coulomb مع Asp/Glu/Lys/Arg.", "The ligand net charge changes, so Coulomb terms with Asp/Glu/Lys/Arg change."),
          L("عدد مانحي H-bond يتغيّر (NH3+ مقابل NH2).", "The number of H-bond donors changes (NH3+ versus NH2)."),
          L("قد يُرفض المركب لصندوق electrostatics أو يُسحب إلى سطح بروتيني مشحون خطأ.", "The compound may be rejected by electrostatics or pulled to a wrongly charged protein patch."),
          L("مقارنة درجات بين مركبات تختلف بروتنتها تصبح مقارنة بين فيزياء مختلفة لا SAR.", "Comparing scores across differently protonated compounds becomes a comparison of different physics, not SAR."),
        ],
      },
      {
        type: "why",
        id: "l1-pka-why",
        question: L(
          "لماذا لا يكفي أن تقول «استخدمنا بروتونة قياسية عند pH 7.4» في methods؟",
          "Why is “we used standard protonation at pH 7.4” not enough in Methods?",
        ),
        answer: L(
          "لأن الأداة القياسية قد تُخطئ في السلفوناميد والبيرازول والهيستيدين والمعادن. الجملة الصادقة تُسمّي الأداة، وتذكر المراكز الغامضة، وتقول إن كنتَ رسّمتَ أكثر من نوع. الصمت هنا مصدر لفشل غير قابل للتشخيص.",
          "Because the default tool can be wrong on sulfonamides, pyrazoles, histidine, and metals. An honest sentence names the tool, flags ambiguous centres, and says whether more than one species was docked. Silence here is a source of undiagnosable failure.",
        ),
      },
      {
        type: "callout",
        id: "l1-pka-lim",
        kind: "limitation",
        title: L("pKa المتنبأ ليس pKa الجيب", "Predicted pKa is not pocket pKa"),
        body: L(
          "نموذج pKa في الماء قد يكون مقبولاً للترشيح. داخل جيب منخفض العزل بجانب Asp، قد يسود نوع مختلف. لا تُنفق QM/pKa باهظاً على كل المكتبة؛ أنفقه على hit نهائي أو على مركز يتحكم في آلية.",
          "Aqueous pKa models can be acceptable for filtering. Inside a low-dielectric pocket beside Asp, another species may dominate. Do not spend expensive QM pKa on the whole library; spend it on a final hit or on a centre that controls mechanism.",
        ),
      },
      {
        type: "whatif",
        id: "l1-pka-whatif",
        scenario: L(
          "ماذا لو رسّمتَ بيبيرازين imatinib-like بمحايد بينما pKa الحمض المرافق أعلى من 7.4؟",
          "What if you dock an imatinib-like piperazine as neutral while the conjugate-acid pKa is above 7.4?",
        ),
        consequence: L(
          "تفقد تفاعلاً محتملاً مع بقايا سالبة، وتُغيّر اتجاه الحلقة، وقد تُرتّب مشتقات نتروجينية ترتيباً مقلوباً. هذا نمط فشل docking كلاسيكي: الكيمياء في الرأس تقول «قاعدة»، والملف ثلاثي الأبعاد يقول «محايد».",
          "You lose a possible contact with an anionic residue, you change the ring orientation, and you may invert the ranking of nitrogenous analogues. This is a classic docking failure pattern: chemistry in your head says “base”, the 3D file says “neutral”.",
        ),
      },
      {
        type: "exercise",
        id: "l1-pka-ex",
        prompt: L(
          "حمض pKa ≈ 4.5 وأمين (حمض مرافق pKa ≈ 9.5) في جزيء واحد عند pH 7.4. ما الشحنة الصافية الغالبة تعليمياً؟",
          "An acid with pKa ≈ 4.5 and an amine (conjugate-acid pKa ≈ 9.5) in one molecule at pH 7.4. What is the educational majority net charge?",
        ),
        solution: L(
          "الحمض في الغالب A− (−1) والأمين في الغالب BH+ (+1) → زويترأيون بشحنة صافية صفر غالباً، مع قطبية عالية جداً. رسم COOH + NR3 يُخطئ الشحنة المحلية رغم أن الصافي قد يصدف أن يكون صفراً.",
          "The acid is mostly A− (−1) and the amine mostly BH+ (+1) → a zwitterion of net charge usually zero, with very high polarity. Drawing COOH + NR3 gets the local charges wrong even if the net charge happens to be zero.",
        ),
      },
    ],
    ["l1-tautomer", "l1-hbond", "l8-failures", "l15-pka-logd"],
  ),

  expand(
    "l1-hbond",
    [
      L(
        "تعريف مانح ومستقبل H-bond هندسياً وكهربائياً في سياق دواء-جيب.",
        "Define H-bond donor and acceptor geometrically and electrically in a drug–pocket setting.",
      ),
      L(
        "التفريق بين logP وlogD وربط الأثر الكاره للماء بإنتروبي الماء لا بـ «حب الدهون» الشعاري.",
        "Distinguish logP from logD and tie the hydrophobic effect to water entropy, not to slogan “lipophilicity love”.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l1-hb-intro",
        title: L("H-bond اتجاه، لا مجرد قرب ذرتين", "An H-bond is directional, not mere proximity of two atoms"),
        body: L(
          "رابطة هيدروجينية جيدة تحتاج مانحاً (X–H) ومستقبلاً ذا زوج حر، ومسافة وزاوية معقولتين. في الالتحام تُكافأ أحياناً تماسّات ليست H-bond (زاوية منفرجة، أو CH ... O ضعيف يُعامل كأنه OH ... O). في الماء، كل H-bond مع الجيب يُقايض H-bond مع المذيب: الربح هو الفرق لا العدد على الشاشة.",
          "A good hydrogen bond needs a donor (X–H), an acceptor with a lone pair, and a reasonable distance and angle. Docking sometimes rewards contacts that are not H-bonds (a bent angle, or a weak CH···O treated as OH···O). In water, every H-bond to the pocket is traded against H-bonds to solvent: the gain is the difference, not the on-screen count.",
        ),
      },
      {
        type: "compare",
        id: "l1-hb-log",
        left: L("logP", "logP"),
        right: L("logD", "logD"),
        rows: [
          {
            dim: L("ماذا يصف؟", "What does it describe?"),
            a: L("توزيع النوع غير المتأين بين أوكتانول وماء.", "Partition of the unionized species between octanol and water."),
            b: L("توزيع ظاهر عند pH محدد، يشمل أنواعاً متأينة.", "Apparent distribution at a stated pH, including ionized species."),
          },
          {
            dim: L("متى يضلل؟", "When does it mislead?"),
            a: L("حين يكون المركب متأيّناً بقوة عند pH العمل.", "When the compound is strongly ionized at the working pH."),
            b: L("حين تُقارن logD عند pH مختلف دون أن تقول.", "When you compare logD values at different pH without saying so."),
          },
          {
            dim: L("علاقته بالجيب", "Relation to the pocket"),
            a: L("مؤشر على كره الماء للهيكل المحايد.", "A pointer to hydrophobicity of the neutral scaffold."),
            b: L("أقرب لسلوك الامتصاص والتوزيع في الدم.", "Closer to absorption and distribution behaviour in blood."),
          },
        ],
      },
      {
        type: "prose",
        id: "l1-hb-hydrophobic",
        title: L("الأثر الكاره للماء", "The hydrophobic effect"),
        body: L(
          "ليست «قوى كارهة للماء» بين ذرتين كربون سحراً مستقلاً. في الماء، سطح كاره يُقيّد شبكات H-bond؛ عند دفن السطح في الجيب يتحرر ماء. جزء كبير من ΔG قد يكون إنتروبي المذيب. لذلك إضافة قطبية في نواة كارهة تكلف، وملء جيب كاره بمجموعة كارهة قد يربح دون H-bond جديد.",
          "There is no magical independent “hydrophobic force” between two carbons. In water, a hydrophobic surface constrains H-bond networks; burying that surface in the pocket releases water. A large part of ΔG can be solvent entropy. That is why polarity in a hydrophobic core is costly, and why filling a hydrophobic hole with a hydrophobic group can win without a new H-bond.",
        ),
      },
      {
        type: "why",
        id: "l1-hb-why",
        question: L(
          "لماذا لا تعني «خمس روابط هيدروجينية في الشكل» ارتباطاً أقوى من اثنتين؟",
          "Why do “five hydrogen bonds in the figure” not mean tighter binding than two?",
        ),
        answer: L(
          "لأن العدد غير مُصحَّح للإذابة والهندسة والإنتروبي التوافقي. خمس تماسّات ضعيفة الزاوية قد تخسر أمام اثنتين قصيرتين مدفونتين. scoring function قد يعدّها فيُغريك بمركبات قطبية فوق الحد تفشل نفاذياً.",
          "The count is uncorrected for solvation, geometry, and conformational entropy. Five poorly angled contacts can lose to two short buried ones. A scoring function that counts them will seduce you into overly polar compounds that fail permeability.",
        ),
      },
      {
        type: "callout",
        id: "l1-hb-warn",
        kind: "warning",
        title: L("لا تُحوّل logP إلى هدف تحسين أعمى", "Do not turn logP into a blind optimization target"),
        body: L(
          "رفع logP قد يرفع درجة الالتحام في جيب كاره ويفسد الذوبان والارتباط غير النوعي. خفّضه بلا حساب فقد تفقد دفناً. logD عند pH العمل أداة لمقايضة، لا دالة تكلفة وحيدة.",
          "Raising logP may improve a docking score in a hydrophobic pocket and wreck solubility and nonspecific binding. Lowering it blindly may lose burial. logD at working pH is a trade-off tool, not a single cost function.",
        ),
      },
      {
        type: "whatif",
        id: "l1-hb-whatif",
        scenario: L(
          "ماذا لو استبدلتَ مانح H-bond بذرة كربون «لتحسين logP» في موقع يُشكّل جسراً مع Glu؟",
          "What if you replace an H-bond donor with carbon “to improve logP” at a site that bridges to Glu?",
        ),
        consequence: L(
          "ستكسب محبة دهن على الورق وتفقد تفاعلاً مشحوناً قد يكون عمود SAR. أعد الالتحام مع مراقبة المسافة إلى Glu؛ إن بقي تجويف قطبي مكشوفاً فالارتباط غالباً يسقط أكثر مما يتنبأ logP.",
          "You will gain lipophilicity on paper and lose a charged contact that may be the SAR backbone. Redock while watching the distance to Glu; if a polar cavity remains unsatisfied, affinity will usually fall more than logP predicts.",
        ),
      },
    ],
    ["l1-pka", "l2-solvation", "l2-forces", "l15-pka-logd"],
  ),

  expand(
    "l1-hetero",
    [
      L(
        "استخدام بيريدين وإندول وبيريميدين كأدوات H-bond وهندسة لا كزينة عطرية.",
        "Use pyridine, indole, and pyrimidine as H-bond and geometry tools, not as aromatic decoration.",
      ),
      L(
        "توقع أثر استبدال الكربون بنتروجين على الذوبان والأيض والارتباط.",
        "Anticipate the effect of C→N replacement on solubility, metabolism, and binding.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l1-ht-intro",
        title: L("الهيتيروسيكل لغة جيب", "A heterocycle is pocket language"),
        body: L(
          "نتروجين في الحلقة يُغيّر اتجاه الزوج الحر، ويمتص أو يمنح، ويُعدّل الإلكترونات في الجيران. بيريدين: مستقبل محوري في hinge الكيناز. بيريميدين: مستقبلا نتروجين بزوايا مختلفة. إندول: مانح NH وسطح π للـ stacking مع Phe/Tyr. اختيار الحلقة قرار تفاعل لا قرار رسم.",
          "Ring nitrogen changes lone-pair direction, accepts or donates, and retunes neighbouring electronics. Pyridine: a hinge acceptor in kinases. Pyrimidine: two nitrogen acceptors at different angles. Indole: an NH donor and a π surface for stacking with Phe/Tyr. Choosing the ring is an interaction decision, not a drawing decision.",
        ),
      },
      {
        type: "list",
        id: "l1-ht-tools",
        title: L("ثلاثة هياكل كأدوات", "Three scaffolds as tools"),
        items: [
          L("بيريدين: أساسية معتدلة، pKa الحمض المرافق غالباً قرب النطاق الفسيولوجي — تحقق قبل docking.", "Pyridine: moderate basicity; conjugate-acid pKa often near the physiological window — check before docking."),
          L("إندول: NH مانح؛ الموضع 5/6 شائع للتعديل الإلكتروني دون كسر المانح.", "Indole: NH donor; positions 5/6 are common electronic edits that keep the donor."),
          L("بيريميدين: يقلل كثافة π مقارنة بالفنيل وقد يخفض الأيض العطري ويزيد الذوبان.", "Pyrimidine: lowers π density versus phenyl, may reduce aromatic metabolism and raise solubility."),
        ],
      },
      {
        type: "viewer",
        id: "l1-ht-2ity",
        pdb: "2ITY",
        caption: L(
          "2ITY: EGFR مع gefitinib. لاحظ الهيتيروسيكل الموجه نحو hinge: هذا تصميم مستقبل نتروجين لا «حلقة جميلة».",
          "2ITY: EGFR with gefitinib. Note the heterocycle aimed at the hinge: this is nitrogen-acceptor design, not a “pretty ring”.",
        ),
      },
      {
        type: "why",
        id: "l1-ht-why",
        question: L(
          "لماذا قد يُحسّن استبدال فنيل ببيريدين الذوبان دون أن يُحسّن affinity؟",
          "Why might replacing phenyl with pyridine improve solubility without improving affinity?",
        ),
        answer: L(
          "النتروجين يزيد القطبية والتفاعل مع الماء (ربح ذوبان، عقوبة إذابة إن دُفن بلا مستقبل هندسي). إن وُضع في جيب كاره بلا H-bond، قد تخسر ΔG. الفائدة ADMET لا تُساوِ تلقائياً فائدة الارتباط.",
          "Nitrogen increases polarity and interaction with water (solubility gain, solvation penalty if buried without a geometric acceptor). Placed in a hydrophobic pocket with no H-bond, ΔG may worsen. An ADMET win is not automatically a binding win.",
        ),
      },
      {
        type: "callout",
        id: "l1-ht-lim",
        kind: "limitation",
        title: L("ليست كل هيتيروسيكلات «drug-like» بالتساوي", "Not all heterocycles are equally “drug-like”"),
        body: L(
          "بعض الحلقات غنية بالنتروجين تُعقّد التخليق أو تُخلّف إنذارات redox. وجود بيريدين في gefitinib لا يُبرر أي بيريدين في أي جيب. اسأل: من يتفاعل مع من؟",
          "Some nitrogen-rich rings complicate synthesis or raise redox alerts. Pyridine in gefitinib does not justify any pyridine in any pocket. Ask: who interacts with whom?",
        ),
      },
      {
        type: "whatif",
        id: "l1-ht-whatif",
        scenario: L(
          "ماذا لو قلبتَ بيريدين 180° في المحرر لأن الشكل «ما زال يملأ الفراغ»؟",
          "What if you rotate a pyridine 180° in the editor because the shape “still fills the space”?",
        ),
        consequence: L(
          "الزوج الحر يُشير الآن إلى الدهن أو إلى مانح مفقود. scoring function قد لا تُعاقب كفاية. افحص اتجاه N صراحة (وهوية الذرة في PDB للligand) قبل أن تعتمد الهيئة.",
          "The lone pair now points at lipid or at a missing donor. The scoring function may under-penalize that. Inspect N orientation explicitly (and the atom identity in the ligand PDB) before trusting the pose.",
        ),
      },
    ],
    ["l1-groups", "l1-electronics", "l1-tautomer", "l11-bioiso"],
  ),

  expand(
    "l2-thermo",
    [
      L(
        "تعريف الإنثالبي والإنتروبي كما يدخلان في ارتباط ligand-بروتين في محلول.",
        "Define enthalpy and entropy as they enter ligand–protein binding in solution.",
      ),
      L(
        "تفسير كيف يرتبط جزيء «ضعيف التفاعلات الظاهرة» عبر إنتروبي المذيب.",
        "Explain how a molecule with “weak visible interactions” can still bind through solvent entropy.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l2-th-intro",
        title: L("ارتباط ≠ جمع جسور على الشاشة", "Binding ≠ summing on-screen bridges"),
        body: L(
          "الإنثالبي (H) يلخص الطاقة الداخلية + شغل الضغط. في الارتباط، تغييرات H تأتي من تفاعلات مباشرة (coulomb، vdW، H-bond) ومن إعادة تنظيم المذيب والبروتين. الإنتروبي (S) يلخص عدد الحالات الميكروية: حرية دوران ligand، اهتزازات، وشبكة ماء. جزيء قليل H-bond قد يربح دفن سطح كاره فيحرر ماء — ارتباط إنتروبي.",
          "Enthalpy (H) collects internal energy plus pressure–volume work. In binding, ΔH comes from direct interactions (Coulomb, vdW, H-bond) and from solvent and protein reorganization. Entropy (S) counts microstates: ligand rotors, vibrations, and the water network. A ligand with few H-bonds may still win by burying hydrophobic surface and releasing water — entropic binding.",
        ),
      },
      {
        type: "equation",
        id: "l2-th-g",
        latex: String.raw`\Delta G = \Delta H - T\Delta S`,
        name: L("تفكيك غيبس", "The Gibbs decomposition"),
        meaning: L(
          "ΔG السالب ارتباط تلقائي بالمعنى الثيرموديناميكي تحت ضغط وT ثابتين. قد يأتي من ΔH سالب أو من ΔS موجب أو من كليهما.",
          "Negative ΔG is thermodynamically spontaneous binding at constant T and pressure. It may come from negative ΔH, positive ΔS, or both.",
        ),
        variables: [
          { symbol: "ΔG", name: L("تغير طاقة غيبس الحرة", "Gibbs free-energy change"), unit: L("kJ mol⁻¹ أو kcal mol⁻¹", "kJ mol⁻¹ or kcal mol⁻¹") },
          { symbol: "ΔH", name: L("تغير الإنثالبي", "Enthalpy change") },
          { symbol: "T", name: L("درجة الحرارة المطلقة", "Absolute temperature"), unit: L("K", "K") },
          { symbol: "ΔS", name: L("تغير الإنتروبي", "Entropy change"), unit: L("kJ mol⁻¹ K⁻¹", "kJ mol⁻¹ K⁻¹") },
        ],
        interpretation: L(
          "إشارة −TΔS تعني أن زيادة الإنتروبي تُفضّل الارتباط. لا تقرأ ΔH من عدد H-bond في PyMOL.",
          "The −TΔS term means an entropy increase favours binding. Do not read ΔH off the H-bond count in PyMOL.",
        ),
        application: L(
          "ITC يفصل ΔH وΔS تجريبياً حين يُجرى بشكل صحيح. MM/PBSA يحاول تقريباً فجاً؛ لا تُساوِ مكوّناته بقياس حراري.",
          "ITC separates ΔH and ΔS experimentally when done properly. MM/PBSA is a coarse attempt; do not equate its components to calorimetry.",
        ),
      },
      {
        type: "list",
        id: "l2-th-sources",
        title: L("مصادر شائعة لـ ΔH وΔS", "Common sources of ΔH and ΔS"),
        items: [
          L("ΔH مواتٍ: جسور ملحية مدفونة، H-bond جيدة الهندسة، vdW متكاملة الشكل.", "Favourable ΔH: buried salt bridges, well-geometry H-bonds, shape-complementary vdW."),
          L("ΔH غير مواتٍ: polar غير مُشبع في الجيب، strain توافقي، إعادة تنظيم بروتين مكلفة.", "Unfavourable ΔH: unsatisfied polar groups in the pocket, conformational strain, costly protein reorganization."),
          L("ΔS مواتٍ: تحرير ماء مُقيَّد، دفن سطح كاره.", "Favourable ΔS: release of ordered water, burial of hydrophobic surface."),
          L("ΔS غير مواتٍ: تجميد روابط ligand القابلة للدوران، تضييق ensemble البروتين.", "Unfavourable ΔS: freezing ligand rotors, narrowing the protein ensemble."),
        ],
      },
      {
        type: "why",
        id: "l2-th-why",
        question: L(
          "لماذا يرتبط ligand «ضعيف التفاعلات» أحياناً بقوة؟",
          "Why does a “weakly interacting” ligand sometimes bind tightly?",
        ),
        answer: L(
          "لأن العين ترى H-bond لا تراها شبكات الماء. دفن سطح كاره كبير مع تحرير مياه قد يهيمن على ΔG. العكس أيضاً: شبكة H-bond جميلة على سطح مكشوف قد لا تربح بعد خصم الإذابة.",
          "The eye sees H-bonds, not water networks. Burial of a large hydrophobic surface with water release can dominate ΔG. The converse is also true: a pretty H-bond network on an exposed surface may not win after the solvation discount.",
        ),
      },
      {
        type: "callout",
        id: "l2-th-lim",
        kind: "limitation",
        title: L("لا تستنتج الآلية من إشارة ΔH وحدها في محاكاة", "Do not infer mechanism from the sign of ΔH in a simulation alone"),
        body: L(
          "تفكيك الطاقة في MM/PBSA حسّاس لقطر GB ولمعالجة الإنتروبي. إشارة مكوّن قد تنقلب بتغيير بروتوكول. استخدم التفكيك كفرضية تصميم، لا كقياس.",
          "Energy decomposition in MM/PBSA is sensitive to GB radius and entropy treatment. A component’s sign can flip when the protocol changes. Use decomposition as a design hypothesis, not as a measurement.",
        ),
      },
      {
        type: "whatif",
        id: "l2-th-whatif",
        scenario: L(
          "ماذا لو صمّمتَ كل تعديل لزيادة عدد H-bond بينما الارتباط أصلاً إنتروبي كاره للماء؟",
          "What if you design every analogue to add H-bonds while binding is already hydrophobic-entropic?",
        ),
        consequence: L(
          "ستُدخل قطبية تُعيد ترتيب الماء وقد تخفض ΔG. راقب SAR: إن كانت الإضافات الكارهة في تجويف جاف تربح أكثر من المانحات، لا تُعاند بأشكال H-bond.",
          "You will insert polarity that reorders water and may worsen ΔG. Watch SAR: if hydrophobic fills of a dry cavity win more than new donors, do not fight that with H-bond cartoons.",
        ),
      },
    ],
    ["l2-gibbs", "l2-solvation", "l2-binding", "l10-dg"],
  ),

  expand(
    "l2-gibbs",
    [
      L(
        "ربط ΔG بثابت الاتزان عبر ΔG = −RT ln K واستخدامه لترجمة ترتيب تقريبي.",
        "Connect ΔG to the equilibrium constant through ΔG = −RT ln K and use it to translate approximate ranking.",
      ),
      L(
        "التفريق بين ΔG° المعياري والقيمة في شروط المقايسة.",
        "Distinguish standard ΔG° from the value under assay conditions.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l2-gb-intro",
        title: L("لغة الاتزان", "The language of equilibrium"),
        body: L(
          "عند اتزان الارتباط P + L ⇌ PL، ثابت الاتزان K يرتبط بفرق المستوى الحر للطاقة. الإشارة السالبة في −RT ln K تعني: كل زيادة في K (ارتباط أقوى) تجعل ΔG أكثر سلبية. هذه العلاقة هي المبرر الوحيد لترجمة «kcal/mol» إلى ضعف في القدرة — بشرط أن تكون الطاقة حرة حقيقية لا درجة docking.",
          "At binding equilibrium P + L ⇌ PL, the equilibrium constant K is tied to the free-energy level difference. The minus sign in −RT ln K means: larger K (tighter binding) makes ΔG more negative. This relation is the only justification for translating “kcal/mol” into a fold-change in potency — and only if the energy is a true free energy, not a docking score.",
        ),
      },
      {
        type: "equation",
        id: "l2-gb-eq",
        latex: String.raw`\Delta G^\circ = -RT \ln K`,
        name: L("طاقة غيبس المعيارية والاتزان", "Standard Gibbs energy and equilibrium"),
        meaning: L(
          "K يجب أن يكون بلا أبعاد عبر حالة معيارية (تركيز مرجعي، غالباً 1 M في التعريفات الكيميائية).",
          "K must be rendered dimensionless via a standard state (a reference concentration, often 1 M in chemical definitions).",
        ),
        variables: [
          { symbol: "ΔG°", name: L("تغير غيبس المعياري", "Standard Gibbs change") },
          { symbol: "R", name: L("ثابت الغاز", "Gas constant") },
          { symbol: "T", name: L("درجة الحرارة", "Temperature"), unit: L("K", "K") },
          { symbol: "K", name: L("ثابت الاتزان المعياري", "Standard equilibrium constant") },
        ],
        interpretation: L(
          "خلط Kd (تركيز) مع K بلا أبعاد دون حالة معيارية يُنتج ln لوحدة. في الأوراق، حدّد هل تتحدث عن Kd أم عن ΔG°.",
          "Mixing Kd (a concentration) with dimensionless K without a standard state produces a logarithm of a unit. In papers, state whether you mean Kd or ΔG°.",
        ),
        application: L(
          "لترجمة تعليمية: عامل 10 في Kd يقابل نحو 1.4 kcal/mol عند ~298 K. إن كان خطأ طريقتك أكبر من ذلك، لا تدّعِ تمييزاً بعامل عشرة.",
          "Educational translation: a 10-fold change in Kd is about 1.4 kcal/mol at ~298 K. If your method’s error is larger than that, do not claim a tenfold discrimination.",
        ),
        minLevel: "intermediate",
      },
      {
        type: "list",
        id: "l2-gb-not",
        title: L("ما الذي ليس ΔG", "What is not ΔG"),
        items: [
          L("درجة Vina أو Glide ولو كُتبت kcal/mol.", "A Vina or Glide score, even if written as kcal/mol."),
          L("فرق طاقة MM لمبيتة واحدة بعد minimization.", "An MM energy difference of one minimized pose."),
          L("متوسط MM/PBSA بلا تقدير خطأ وبلا اتساق بروتوكول.", "An MM/PBSA average with no error estimate and no protocol consistency."),
        ],
      },
      {
        type: "why",
        id: "l2-gb-why",
        question: L(
          "لماذا نهتم بـ ΔG لا بطاقة الوضع V فقط؟",
          "Why care about ΔG rather than potential energy V alone?",
        ),
        answer: L(
          "V يصف نقطة على سطح. الاتزان متوسط وزني على ensemble عند T، ويشمل المذيب والحجوم المعيارية. ligand يفوز لا لأنه في حد أدنى عميق وحيد، بل لأن مجموع الحالات المرتبطة أخفض حراً من مجموع الحالات الحرة.",
          "V describes a point on a surface. Equilibrium is a weighted average over an ensemble at T, including solvent and standard volumes. A ligand wins not because of one deep minimum, but because the free sum of bound states lies below the free sum of unbound states.",
        ),
      },
      {
        type: "callout",
        id: "l2-gb-warn",
        kind: "warning",
        title: L("IC50 ليس Kd", "IC50 is not Kd"),
        body: L(
          "IC50 يعتمد على تركيز الإنزيم/الركيزة وآلية المقايسة. تحويل Cheng–Prusoff يحتاج افتراضات. لا تُدخل IC50 في −RT ln K وكأنه ثابت اتزان.",
          "IC50 depends on enzyme/substrate concentration and assay mechanism. Cheng–Prusoff conversion needs assumptions. Do not insert IC50 into −RT ln K as if it were an equilibrium constant.",
        ),
      },
      {
        type: "whatif",
        id: "l2-gb-whatif",
        scenario: L(
          "ماذا لو رتّبتَ مركبات بفروق 0.3 kcal/mol من طريقة خطؤها المعروف أكبر من 1 kcal/mol؟",
          "What if you rank compounds by 0.3 kcal/mol gaps from a method whose known error exceeds 1 kcal/mol?",
        ),
        consequence: L(
          "الترتيب ضوضاء. ستُصنّع وفق عشوائية مُغلّفة بوحدات طاقة. إمّا أن تضيّق السؤال إلى أزواج كيميائية متقاربة بطرائق أدق (FEP بحذر)، أو تعترف أن الحساب لا يُميّز داخل تلك النافذة.",
          "The ranking is noise. You will synthesize according to randomness wrapped in energy units. Either narrow the question to close analogues with a more precise method (FEP, cautiously), or admit computation cannot discriminate inside that window.",
        ),
      },
      {
        type: "exercise",
        id: "l2-gb-ex",
        prompt: L(
          "تعليمياً عند ~298 K: إن تحسّن Kd عشرة أضعاف، ما اتجاه وحجم ΔG التقريبي؟",
          "Educationally at ~298 K: if Kd improves tenfold, what is the approximate direction and size of ΔG?",
        ),
        solution: L(
          "ΔG يصبح أكثر سلبية بنحو 1.4 kcal/mol (أو ~5.7 kJ/mol). الحساب: RT ln(10) مع R المناسب. هذا تقدير ترتيب لا قياساً لمشروعك.",
          "ΔG becomes more negative by about 1.4 kcal/mol (or ~5.7 kJ/mol). Calculation: RT ln(10) with the matching R. This is an order-of-magnitude estimate, not a measurement for your project.",
        ),
      },
    ],
    ["l2-thermo", "l2-boltzmann", "l8-affinity", "l10-dg"],
  ),

  expand(
    "l2-boltzmann",
    [
      L(
        "استخدام وزن بولتزمان لفهم لماذا نُعاين ensemble بدل هيئة واحدة.",
        "Use Boltzmann weights to understand why we sample an ensemble rather than one pose.",
      ),
      L(
        "ربط الحرارة بقدرة النظام على زيارة هيئات أعلى طاقة.",
        "Connect temperature to the system’s ability to visit higher-energy conformers.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l2-bz-intro",
        title: L("المشهد لا القمة", "The landscape, not the peak"),
        body: L(
          "جهاز جزيئي عند درجة حرارة الغرفة لا يجلس في إحداثيات واحدة. احتمال حالة يتناسب مع e^{−E/kT} (أو e^{−E/RT} للكميات المولية). MD وMonte Carlo محاولات لمعاينة هذا التوزيع. الالتحام الذي يُرجع هيئة واحدة يختصر المشهد إلى نقطة — مفيد كفرضية هندسية، ناقص كثرموديناميكا.",
          "A molecular system at room temperature does not sit at one coordinate. The probability of a state scales as e^{−E/kT} (or e^{−E/RT} for molar quantities). MD and Monte Carlo try to sample that distribution. Docking that returns one pose collapses the landscape to a point — useful as a geometric hypothesis, incomplete as thermodynamics.",
        ),
      },
      {
        type: "equation",
        id: "l2-bz-eq",
        latex: String.raw`p_i = \frac{e^{-E_i / kT}}{\sum_j e^{-E_j / kT}}`,
        name: L("توزيع بولتزمان", "The Boltzmann distribution"),
        meaning: L(
          "الحالات المنخفضة الطاقة مفضّلة، لكن الحالات الأعلى ليست صفراً. المقام هو دالة التجزئة.",
          "Low-energy states are favoured, but higher states are not zero. The denominator is the partition function.",
        ),
        variables: [
          { symbol: "p_i", name: L("احتمال الحالة i", "Probability of state i") },
          { symbol: "E_i", name: L("طاقة الحالة", "Energy of the state") },
          { symbol: "k", name: L("ثابت بولتزمان", "Boltzmann’s constant") },
          { symbol: "T", name: L("درجة الحرارة", "Temperature"), unit: L("K", "K") },
        ],
        interpretation: L(
          "إن كان حاجز بين حوضين >> kT، فالمعاينة القصيرة تبقى في حوض البداية. ذلك يبدو «مستقراً» وهو فشل استكشاف.",
          "If a barrier between basins is ≫ kT, a short sample stays in the starting basin. That looks “stable” and is an exploration failure.",
        ),
        application: L(
          "عندما تُقارن هيئات docking، اسأل هل الفروق ضمن بضعة kT أم أنك تُفاضل عالماً حرارياً بعالم مستحيل.",
          "When comparing docking poses, ask whether gaps are within a few kT or whether you are ranking a thermal world against an impossible one.",
        ),
      },
      {
        type: "why",
        id: "l2-bz-why",
        question: L(
          "لماذا لا نأخذ أدنى هيئة طاقة بعد minimization وننتهي؟",
          "Why not take the lowest minimized energy and stop?",
        ),
        answer: L(
          "لأن minimization ينزل إلى حد محلي بلا T، فيحذف إنتروبي الحوض. حوض أوسع أعلى قليلاً في V قد يهيمن على السكان. كذلك المذيب لا يُختصر بنقطة.",
          "Minimization descends to a local minimum with no T, deleting basin entropy. A slightly higher, wider basin in V may dominate the population. Solvent is not a point either.",
        ),
      },
      {
        type: "callout",
        id: "l2-bz-lim",
        kind: "limitation",
        title: L("البولتزمان على طاقة MM ليس البولتزمان التجريبي", "Boltzmann on MM energy is not experimental Boltzmann"),
        body: L(
          "الأوزان صحيحة للسطح الذي تُعرّفه. إن أخطأ force field ترتيب الحوضين، فالمعاينة «المتقاربة» تتقارب إلى الفيزياء الخاطئة. التقارب ≠ الصحة.",
          "The weights are correct for the surface you defined. If the force field ranks two basins wrongly, a “converged” sample converges to the wrong physics. Convergence ≠ correctness.",
        ),
      },
      {
        type: "whatif",
        id: "l2-bz-whatif",
        scenario: L(
          "ماذا لو شغّلتَ MD عند 300 K لمدة قصيرة على حاجز يُقدَّر أنه بطيء بالميكروثانية؟",
          "What if you run short 300 K MD on a barrier estimated to be slow on the microsecond scale?",
        ),
        consequence: L(
          "لن تزور الحالة الأخرى. ستكتب أن النظام مستقر في هيئة البداية. إما أن تستخدم معاينة معززة بسؤال محدد، أو تُصغّر الادعاء إلى «لم نرَ انتقالاً خلال هذه النافذة».",
          "You will not visit the other state. You will write that the system is stable in the starting pose. Either use enhanced sampling on a stated question, or shrink the claim to “we did not see a transition in this window”.",
        ),
      },
      {
        type: "exercise",
        id: "l2-bz-ex",
        prompt: L(
          "حوضان فرق طاقتها التعليمي 2.8 kcal/mol عند ~298 K. ما النسبة التقريبية للسكان (الأدنى:الأعلى) إن أُهملت عوامل الإنتروبي الأخرى؟",
          "Two basins differ by an educational 2.8 kcal/mol at ~298 K. What is the approximate population ratio (lower:higher) if other entropy factors are ignored?",
        ),
        solution: L(
          "2.8 ≈ 2 × 1.4 kcal/mol → نحو عامل 100. السكان شبه محصورين في الحوض الأدنى. إن كان الأعلى هو bioactive، فلن تراه بمعاينة حرارية قصيرة من الأدنى.",
          "2.8 ≈ 2 × 1.4 kcal/mol → about a factor of 100. Population is nearly confined to the lower basin. If the higher one is bioactive, a short thermal sample started in the lower basin will miss it.",
        ),
      },
    ],
    ["l2-gibbs", "l2-kinetics", "l3-pca", "l9-convergence"],
  ),

  expand(
    "l2-kinetics",
    [
      L(
        "التفريق بين Kd (اتزان) وkoff (مغادرة) وزمن الإقامة.",
        "Distinguish Kd (equilibrium) from koff (off-rate) and residence time.",
      ),
      L(
        "معرفة متى لا يكفي تحسين ΔG إن كان الزمن الدوائي تحكمه الحركية.",
        "Know when improving ΔG is not enough if pharmacology is kinetics-controlled.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l2-kin-intro",
        title: L("الاتزان لا يروي فيلم المغادرة", "Equilibrium does not tell the off-rate movie"),
        body: L(
          "Kd ≈ koff/kon (لآلية بسيطة 1:1). مركبان بنفس Kd قد يختلفان في koff بأوامر إن تعوّض kon. زمن الإقامة ~1/koff يهم药效 عندما يكون الهدف يحتاج إشغالاً ممتداً. الالتحام وMM/PBSA يتحدثان — في أحسن الأحوال — عن اتزان تقريبي، لا عن حواجز المغادرة.",
          "Kd ≈ koff/kon (simple 1:1 mechanism). Two compounds with the same Kd may differ by orders of magnitude in koff if kon compensates. Residence time ~1/koff matters pharmacologically when the target needs prolonged occupancy. Docking and MM/PBSA speak — at best — to approximate equilibrium, not to exit barriers.",
        ),
      },
      {
        type: "equation",
        id: "l2-kin-kd",
        latex: String.raw`K_d = \frac{k_{\mathrm{off}}}{k_{\mathrm{on}}}`,
        name: L("ربط الاتزان بالحركية لآلية 1:1", "Equilibrium–kinetics link for a 1:1 mechanism"),
        meaning: L(
          "Kd صغير قد يعني kon كبير أو koff صغير أو كليهما. لا تستنتج الإقامة من القوة وحدها.",
          "Small Kd may mean large kon, small koff, or both. Do not infer residence from potency alone.",
        ),
        variables: [
          { symbol: "Kd", name: L("ثابت التفكك الاتزاني", "Equilibrium dissociation constant"), unit: L("تركيز", "concentration") },
          { symbol: "koff", name: L("ثابت معدل المغادرة", "Dissociation rate constant"), unit: L("زمن⁻¹", "time⁻¹") },
          { symbol: "kon", name: L("ثابت معدل الارتباط", "Association rate constant"), unit: L("تركيز⁻¹ زمن⁻¹", "concentration⁻¹ time⁻¹") },
        ],
        interpretation: L(
          "المعادلة تفشل لآليات متعددة الخطوات أو لارتباط تساهمي غير عكوس في زمن المقايسة.",
          "The equation fails for multi-step mechanisms or for covalent association that is irreversible on the assay timescale.",
        ),
        application: L(
          "إن كان سؤالك «هل يبقى المركب على الهدف ساعات؟» فأنت تحتاج حركية أو معاينة لحاجز المغادرة، لا درجة تحام.",
          "If your question is “does the compound stay on target for hours?”, you need kinetics or sampling of the exit barrier, not a docking score.",
        ),
      },
      {
        type: "why",
        id: "l2-kin-why",
        question: L(
          "لماذا قد تفشل شاشة docking في إيجاد ligands طويلة الإقامة؟",
          "Why might a docking screen miss long-residence ligands?",
        ),
        answer: L(
          "لأن الدالة تكافئ هيئة نهائية تقريبية لا ارتفاع الحاجز. ligand يسدّ باب الجيب عبر إعادة تنظيم بطيء للبروتين قد لا يظهر في بحث جامد للمستقبل.",
          "The function rewards an approximate final pose, not barrier height. A ligand that blocks the pocket door via slow protein reorganization will not appear in a rigid-receptor search.",
        ),
      },
      {
        type: "callout",
        id: "l2-kin-lim",
        kind: "limitation",
        title: L("MD القصير لا يقيس koff", "Short MD does not measure koff"),
        body: L(
          "مغادرة قد تحتاج ميكروثانية إلى ثوانٍ. 100 ns بلا حدث مغادرة لا تُقدّر koff. طرائق المعاينة المعززة قد تستكشف المسار إن عُرّف المتغير الجماعي بصدق — وهذا قرار علمي صعب.",
          "Exit may take microseconds to seconds. 100 ns with no unbinding event does not estimate koff. Enhanced sampling may explore the path if the collective variable is honestly defined — a hard scientific choice.",
        ),
      },
      {
        type: "whatif",
        id: "l2-kin-whatif",
        scenario: L(
          "ماذا لو اخترتَ مرشحاً لأن Kd المتنبأ أفضل بينما مقايسة الخلية تحتاج إشغالاً طويلاً؟",
          "What if you pick a candidate because predicted Kd is better while the cell assay needs long occupancy?",
        ),
        consequence: L(
          "قد تربح اتزاناً على الورق وتخسر في الخلية لأن المركب يغادر أثناء دورة الإشارة. أدخل قياساً حركياً (أو على الأقل نقاشاً) قبل أن تُغلق السلسلة.",
          "You may win equilibrium on paper and lose in cells because the compound leaves during the signaling cycle. Bring a kinetic measurement (or at least a discussion) before you close the series.",
        ),
      },
      {
        type: "compare",
        id: "l2-kin-vs",
        left: L("ثيرموديناميكا", "Thermodynamics"),
        right: L("حركية", "Kinetics"),
        rows: [
          {
            dim: L("سؤال", "Question"),
            a: L("كم يبلغ الإشغال عند الاتزان؟", "What is occupancy at equilibrium?"),
            b: L("كم يسرعة يأتي ويذهب؟", "How fast does it arrive and leave?"),
          },
          {
            dim: L("أداة CADD نمطية", "Typical CADD tool"),
            a: L("طاقة حرة، scoring بحذر.", "Free energy; scoring with caution."),
            b: L("حواجز، MSM، تجربة SPR/ITC-kinetics.", "Barriers, MSM, SPR / kinetic ITC."),
          },
        ],
      },
    ],
    ["l2-gibbs", "l2-boltzmann", "l8-affinity", "l25-msm"],
  ),

  expand(
    "l2-forces",
    [
      L(
        "تصنيف القوى بين الجزيئية التي تظهر في الجيب: كهرباء ساكنة، vdW، H-bond، cation−π، π−π.",
        "Classify intermolecular forces that appear in the pocket: electrostatics, vdW, H-bond, cation−π, π−π.",
      ),
      L(
        "ربط كل قوة بما يُمثّلها — أو يُسقطها — في force field كلاسيكي.",
        "Map each force to what a classical force field represents — or drops.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l2-fo-intro",
        title: L("القوة اسم لفيزياء، لا لون في الشكل", "A force is physics, not a colour in the figure"),
        body: L(
          "الكهروستاتيك بعيدة المدى (coulomb) تهيمن على الشحنات والجسور الملحية، وتُغربل بالمذيب. vdW تجاذب تشتتي قصير + طرد عند التداخل. H-bond مزيج كهرباء وهندسة، ليست حداً سحرياً منفصلاً في كل الحقول. cation−π وπ−π تُلتقط جزئياً عبر شحنات وLJ، وقد تُفقد إن كانت الشحنات فجّة.",
          "Long-range electrostatics (Coulomb) dominate charges and salt bridges, and are screened by solvent. vdW is short-range dispersion plus overlap repulsion. An H-bond is electrostatics plus geometry, not a magical extra term in every field. Cation−π and π−π are partly captured through charges and LJ, and may be lost if charges are crude.",
        ),
      },
      {
        type: "list",
        id: "l2-fo-terms",
        title: L("ماذا يرى MM عادة", "What MM typically sees"),
        items: [
          L("Coulomb بين شحنات جزئية ثابتة — بلا استقطاب ما لم يكن الحقل polarizable.", "Coulomb between fixed partial charges — no polarization unless the field is polarizable."),
          L("Lennard-Jones أو متغيراته للـ vdW.", "Lennard-Jones or variants for vdW."),
          L("H-bond غالباً ليست حداً صريحاً في AMBER/CHARMM الحديثة؛ تخرج من coulomb+LJ.", "H-bonds are often not an explicit term in modern AMBER/CHARMM; they emerge from Coulomb+LJ."),
          L("cation−π: تعتمد على شحنة الكاتيون وπ للحلقة؛ قد تُضعف إن نُسيت بروتنة.", "Cation−π: depends on cation charge and ring π; it weakens if protonation was forgotten."),
        ],
      },
      {
        type: "why",
        id: "l2-fo-why",
        question: L(
          "لماذا تبدو تفاعلات π−π «موجودة» في الشكل بينما الحقل لا يملك حداً اسمه π−π؟",
          "Why do π−π contacts “exist” in the figure while the field has no π−π term?",
        ),
        answer: L(
          "الشكل يُلوّن تقارباً هندسياً. الطاقة تأتي من تشتت (r⁻⁶) ومن توزيع شحنات على الحلقة. إن كانت الشحنات متماثلة خطأً، فقد تختفي الأفضلية الوجه-إلى-وجه مقابل T-shape. لا تستنتج طاقة من تلوين.",
          "The figure colours a geometric proximity. The energy comes from dispersion (r⁻⁶) and from charge patterning on the ring. If charges are wrongly uniform, face-to-face versus T-shape preference may vanish. Do not infer energy from colouring.",
        ),
      },
      {
        type: "callout",
        id: "l2-fo-warn",
        kind: "warning",
        title: L("لا تُضف حدوداً يدوية لـ H-bond فوق حقل كامل", "Do not add hand-crafted H-bond terms on top of a complete field"),
        body: L(
          "العدّ المزدوج شائع في دوال تقييم هجينة سيئة. إن كان coulomb موجوداً، فإضافة مكافأة H-bond بلا إعادة وزن تُبالغ في القطبية.",
          "Double counting is common in poorly hybrid scoring functions. If Coulomb is already present, an extra H-bond bonus without reweighting overstates polarity.",
        ),
      },
      {
        type: "whatif",
        id: "l2-fo-whatif",
        scenario: L(
          "ماذا لو فسّرتَ تقارب ligand مع Phe كـ π−π حاسم بينما المسافة > 6 Å والزاوية سيئة؟",
          "What if you interpret ligand–Phe proximity as a crucial π−π while the distance is > 6 Å and the angle is poor?",
        ),
        consequence: L(
          "ستُصمّم مشتقات لحفظ تفاعل غير موجود. قِس المسافة والمستوى، وقارن مع طاقة LJ+coulomb لا مع أسطورة الشكل.",
          "You will design analogues to preserve a contact that is not there. Measure distance and plane angle, and compare to LJ+Coulomb energy, not to figure folklore.",
        ),
      },
      {
        type: "exercise",
        id: "l2-fo-ex",
        prompt: L(
          "جسر ملحي مدفون Asp–ligand ammonium مقابل التماس نفسه على السطح المعرّض للماء. أيهما تتوقع أن يساهم أكثر في ΔG ولماذا؟",
          "A buried Asp–ligand ammonium salt bridge versus the same contact on a water-exposed surface. Which do you expect to contribute more to ΔG and why?",
        ),
        solution: L(
          "المدفون غالباً أقوى إسهاماً صافياً لأن البديل في الماء يُغربل بقوة (عزل مرتفع). على السطح، الماء ينافس الطرفين. هذا اتجاه تعليمي؛ البيئة المحلية قد تُعدّل.",
          "The buried one often contributes more net, because the water alternative is strongly screened (high dielectric). On the surface, water competes with both partners. This is an educational trend; local environment can modify it.",
        ),
      },
    ],
    ["l1-hbond", "l2-solvation", "l6-lj", "l6-coulomb"],
  ),

  expand(
    "l2-solvation",
    [
      L(
        "معاملة الماء كشريك ثيرموديناميكي لا كخلفية بصرية.",
        "Treat water as a thermodynamic partner, not as visual wallpaper.",
      ),
      L(
        "التفريق بين مياه جيب محبوسة، شبه مستقرة، وحرة، ومعرفة متى لا تحذفها قبل docking.",
        "Distinguish trapped, weakly resident, and bulk-like pocket waters, and know when not to delete them before docking.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l2-sv-intro",
        title: L("الارتباط حدث في الماء", "Binding is an event in water"),
        body: L(
          "ligand وهدف يخلعان أغلفة إذابة جزئياً ليلتقيا. الطاقة ليست «تفاعلات المركب» فقط بل فرق: مركب-بروتين مقابل مركب-ماء وبروتين-ماء. الأثر الكاره للماء جزء من هذه المقايضة. ماء محبوس في الجيب قد يكون جسراً أو قد يُطرَد مع ربح إنتروبي. حذفه من PDB لأنه «يزحم الشاشة» قد يحذف الفيزياء.",
          "Ligand and target partly strip solvation shells in order to meet. The energy is not “compound interactions” alone but a difference: compound–protein versus compound–water and protein–water. The hydrophobic effect is part of that trade. A trapped pocket water may bridge or may be ejected with an entropy gain. Deleting it from the PDB because it “clutters the display” may delete the physics.",
        ),
      },
      {
        type: "list",
        id: "l2-sv-kinds",
        title: L("ثلاث مياه تعليمية", "Three educational waters"),
        items: [
          L("محبوسة: تنسيق كامل، B-factor منخفض نسبياً، تظهر في عدة بلورات — غالباً أبقِها أو عالجها صراحة.", "Trapped: full coordination, relatively low B-factor, seen in several crystals — usually keep or treat explicitly."),
          L("قابلة للاستبدال: جزء من شبكة؛ ligand قد يُزيحها بمكسب.", "Displaceable: part of a network; a ligand may replace them with a gain."),
          L("bulk في القناة: حذفها لا يغيّر الجيب — لا تُقدّس كل كرة حمراء.", "Bulk in the channel: deleting them does not change the pocket — do not canonize every red sphere."),
        ],
      },
      {
        type: "why",
        id: "l2-sv-why",
        question: L(
          "لماذا يفشل أحياناً ligand يملأ الجيب «كاملاً» في المقايسة؟",
          "Why does a ligand that “fully occupies” the pocket sometimes fail in assay?",
        ),
        answer: L(
          "قد يطرد ماءً كان جسر H-bond رخيصاً طاقياً، أو يدفن قطباً دون تعويض. الامتلاء البصري ليس ΔG. الماء الشريك قد يكون أفضل من ذرتك.",
          "It may eject a water that was an energetically cheap H-bond bridge, or bury polarity without compensation. Visual fullness is not ΔG. The water partner may beat your atom.",
        ),
      },
      {
        type: "callout",
        id: "l2-sv-lim",
        kind: "limitation",
        title: L("نماذج الإذابة الضمنية تُسقِط الحبيبات", "Implicit solvent models drop granularity"),
        body: L(
          "GB/PB مفيدة لمتوسط عزل، سيئة لماء محبوس محدد. إن كان سؤالك عن جسر مائي، فأنت تحتاج ماء صريحاً (TIP3P أو ما يعادله) أو معالجة خاصة، لا GB وحده.",
          "GB/PB are useful for average screening, poor for a specific trapped water. If your question is a water bridge, you need explicit water (TIP3P or equivalent) or a specialised treatment, not GB alone.",
        ),
      },
      {
        type: "whatif",
        id: "l2-sv-whatif",
        scenario: L(
          "ماذا لو حذفتَ كل المياه «لتسهيل الالتحام» في بروتياز تُظهر بلوراته ماءً جسرياً ثابتاً؟",
          "What if you delete all waters “to make docking easier” in a protease whose crystals show a persistent bridging water?",
        ),
        consequence: L(
          "ستُولَّد هيئات تضع ذرات ligand في حجم الماء، أو تفقد هندسة الجسر. أعد مع الماء المحفوظ كجزء من المستقبل، أو اختبر إزاحته كفرضية صريحة لا كخيار صامت.",
          "You will generate poses that occupy the water’s volume, or you will lose bridge geometry. Repeat with the conserved water as part of the receptor, or test displacement as an explicit hypothesis, not a silent default.",
        ),
      },
      {
        type: "viewer",
        id: "l2-sv-1hsg",
        pdb: "1HSG",
        caption: L(
          "1HSG: HIV-1 protease مع مثبط. افحص المياه قرب الجيب قبل أن تُقرّر الحذف.",
          "1HSG: HIV-1 protease with an inhibitor. Inspect waters near the pocket before you decide to delete them.",
        ),
      },
    ],
    ["l1-hbond", "l2-thermo", "l4-waters", "l6-coulomb"],
  ),

  expand(
    "l2-binding",
    [
      L(
        "وصف تعويض إنثالبي−إنتروبي كظاهرة شائعة لا كقانون يمنع التحسين.",
        "Describe enthalpy–entropy compensation as a common phenomenon, not as a law that forbids optimization.",
      ),
      L(
        "تصميم تجربة فكرية: ماذا تقيس ITC وماذا تُخمّن المحاكاة.",
        "Design a thought experiment: what ITC measures versus what simulation guesses.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l2-bd-intro",
        title: L("الربح من جيب يُدفع من جيب آخر", "A gain from one pocket is paid from another"),
        body: L(
          "إضافة H-bond قد تُحسّن ΔH وتُجمّد ligand (خسسارة ΔS) أو تُقيّد ماءً. ملء كاره قد يُحرّر ماء (ربح ΔS) ويُضعف تماسّاً قطبياً (خسسارة ΔH). التعويض شائع لذلك تتحرك ΔG أقل من ΔH. ليس قضاءً: يمكن كسر التعويض إن كان التعديل لا يُجمّد درجات حرية إضافية.",
          "Adding an H-bond may improve ΔH and freeze the ligand (ΔS loss) or order water. A hydrophobic fill may release water (ΔS gain) and weaken a polar contact (ΔH loss). Compensation is common, so ΔG moves less than ΔH. It is not fate: compensation can be broken if the edit does not freeze extra degrees of freedom.",
        ),
      },
      {
        type: "equation",
        id: "l2-bd-g",
        latex: String.raw`\Delta G = \Delta H - T\Delta S`,
        name: L("لماذا قد تثبت ΔG بينما تتحرك ΔH", "Why ΔG may stall while ΔH moves"),
        meaning: L(
          "إن تغيّرت ΔH وTΔS بالاتجاه نفسه تقريباً، بقيت ΔG شبه ثابتة — مظهر التعويض.",
          "If ΔH and TΔS change in nearly the same direction, ΔG stays almost flat — the appearance of compensation.",
        ),
        variables: [
          { symbol: "ΔG", name: L("المقدار الذي يحكم الاتزان", "The quantity that governs equilibrium") },
          { symbol: "ΔH", name: L("الإنثالبي — أقرب للتفاعلات المباشرة وإعادة التنظيم", "Enthalpy — closer to direct interactions and reorganization") },
          { symbol: "−TΔS", name: L("الثمن الحراري للترتيب/التحرير", "The thermal price of order/release") },
        ],
        interpretation: L(
          "تحسين ΔH هدف طبي مفيد أحياناً (انتقائية) لكنه ليس ΔG. لا تُعلن نجاح تصميم لأن ΔH المحسوبة نزلت.",
          "Improving ΔH is sometimes a useful medicinal aim (selectivity) but it is not ΔG. Do not declare design success because computed ΔH dropped.",
        ),
        application: L(
          "عند مقارنة نظيرين، اسأل أي درجات حرية تُجمَّد وأي مياه تُحرَّر. ذلك فرضية SAR، لا نتيجة ITC مزيفة من MD.",
          "When comparing two analogues, ask which degrees of freedom freeze and which waters are released. That is an SAR hypothesis, not a fake ITC result from MD.",
        ),
      },
      {
        type: "why",
        id: "l2-bd-why",
        question: L(
          "لماذا يُحبّ بعض الكيميائيين الطبيين التحسين الإنثالبي رغم التعويض؟",
          "Why do some medicinal chemists chase enthalpic gains despite compensation?",
        ),
        answer: L(
          "لأن تفاعلات اتجاهية قد تمنح انتقائية تجاه أهداف شبيهة، بينما الربح الكاره للماء أعمّ وأقل تمييزاً. هذا دافع تصميمي، لا برهان أن ΔH المحسوبة صحيحة.",
          "Directional interactions can buy selectivity against similar targets, whereas hydrophobic gain is more generic and less discriminating. That is a design motive, not proof that computed ΔH is right.",
        ),
      },
      {
        type: "callout",
        id: "l2-bd-lim",
        kind: "limitation",
        title: L("التعويض ليس عذراً للفشل ولا قانوناً", "Compensation is neither an excuse for failure nor a law"),
        body: L(
          "إن لم تتحسن ΔG بعد تعديلات كثيرة، قد يكون السبب نطاقاً خاطئاً أو tautomer أو هيئة لا تعويضاً كونياً. اختبر فرضية التعويض بقياس، أو اتركها كاحتمال.",
          "If ΔG never improves after many edits, the cause may be the wrong pocket, tautomer, or pose — not cosmic compensation. Test a compensation hypothesis by measurement, or leave it as a possibility.",
        ),
      },
      {
        type: "whatif",
        id: "l2-bd-whatif",
        scenario: L(
          "ماذا لو فسّرتَ كل SAR مسطّح على أنه تعويض إنثالبي−إنتروبي؟",
          "What if you interpret every flat SAR as enthalpy–entropy compensation?",
        ),
        consequence: L(
          "ستتوقف عن البحث عن خطأ تمثيل (بروتنة، ماء، stereochemistry). التعويض فرضية بعد أن تتأكد أنك تُعدّل الهيئة الصحيحة.",
          "You will stop looking for a representation error (protonation, water, stereochemistry). Compensation is a hypothesis after you know you are editing the right pose.",
        ),
      },
    ],
    ["l2-thermo", "l2-gibbs", "l10-mmpbsa", "l11-medchem"],
  ),

  expand(
    "l3-vectors",
    [
      L(
        "تمثيل الهيئة كمجموعة متجهات إحداثيات وفهم الدوران والانتقال كتحويلات صلبة.",
        "Represent a pose as coordinate vectors and treat rotation and translation as rigid transforms.",
      ),
      L(
        "قراءة RMSD كمسافة بعد مواءمة، لا كدليل استقرار.",
        "Read RMSD as a distance after alignment, not as a stability proof.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l3-vc-intro",
        title: L("الجزيء قائمة نقاط في ℝ³", "A molecule is a list of points in ℝ³"),
        body: L(
          "كل ذرة متجه (x,y,z). الرابطة ليست كياناً هندسياً مستقلاً في هذا التمثيل بل قيد أو حد طاقة بين متجهين. الالتحام يبحث في فضاء انتقال+دوران+التواء. MD يُحدّث المتجهات كل خطوة. إن اختلطت الوحدات (Å مقابل nm) انهارت كل المسافات.",
          "Each atom is a vector (x,y,z). A bond is not an independent geometric object in this representation; it is a restraint or an energy term between two vectors. Docking searches translation+rotation+torsion space. MD updates the vectors every step. Mix units (Å versus nm) and every distance collapses.",
        ),
      },
      {
        type: "equation",
        id: "l3-vc-rmsd",
        latex: String.raw`\mathrm{RMSD} = \sqrt{\frac{1}{N}\sum_{i=1}^{N}\left\| \mathbf{r}_i - \mathbf{r}_i^{\mathrm{ref}} \right\|^2}`,
        name: L("RMSD بعد المواءمة", "RMSD after alignment"),
        meaning: L(
          "جذر متوسط مربعات المسافات بين ذرات متناظرة. بلا مواءمة صلبة، يخلط القياس الانتقال الكلي للبروتين مع تغيّر داخلي.",
          "Root-mean-square distance between corresponding atoms. Without a rigid alignment, the measure mixes whole-protein translation with internal change.",
        ),
        variables: [
          { symbol: "N", name: L("عدد الذرات الداخلة في الحساب", "Number of atoms included") },
          { symbol: "r_i", name: L("موضع الذرة i", "Position of atom i") },
          { symbol: "r_i^ref", name: L("الموضع المرجعي بعد تطبيق أفضل دوران/انتقال", "Reference position after the optimal rotation/translation") },
        ],
        interpretation: L(
          "اختيار N قرار: كل الذرات، العمود الفقري، أو ligand فقط. مقارنة RMSD بين تعريفات مختلفة بلا معنى.",
          "The choice of N is a decision: all atoms, backbone, or ligand only. Comparing RMSD values with different definitions is meaningless.",
        ),
        application: L(
          "عتبة 2 Å شائعة تعليمياً لنجاح إعادة التحام ligand ثقيل الذرات — اتفاقية مجتمعية لا قانون فيزيائي.",
          "A 2 Å cutoff is a common educational convention for successful heavy-atom ligand redocking — a community convention, not a physical law.",
        ),
      },
      {
        type: "list",
        id: "l3-vc-ops",
        title: L("عمليات ستراها دائماً", "Operations you will always see"),
        items: [
          L("مركز الكتلة: طرح متوسط المواضع.", "Centre of mass: subtract the mean position."),
          L("دوران كابا (Kabsch): أفضل دوران يُقلل RMSD.", "Kabsch rotation: the best rotation minimizing RMSD."),
          L("مصفوفة مسافات: ليست هيئة؛ تفقد اليد (chirality) إن أُسيء استخدامها.", "A distance matrix is not a pose; it can lose chirality if abused."),
        ],
      },
      {
        type: "why",
        id: "l3-vc-why",
        question: L(
          "لماذا يجب مواءمة البروتين قبل RMSD للligand في مسار MD؟",
          "Why must you align the protein before ligand RMSD in an MD trajectory?",
        ),
        answer: L(
          "وإلا فإن انتشار المركب الظاهري يشمل دوران البروتين في الصندوق. قد يبدو ligand «غير مستقر» وهو ثابت في الجيب. والعكس: ligand يغادر ببطء بينما RMSD المخلوط يبدو معتدلاً.",
          "Otherwise the apparent ligand motion includes protein tumbling in the box. The ligand may look “unstable” while sitting still in the pocket. Conversely, a slowly leaving ligand may look moderate in a mixed RMSD.",
        ),
      },
      {
        type: "callout",
        id: "l3-vc-lim",
        kind: "limitation",
        title: L("RMSD لا يعرف التناظر", "RMSD does not know symmetry"),
        body: L(
          "حلقة فنيل تدور 180° قد ترفع RMSD رغم أنها كيميائياً نفس الهيئة إن كانت الذرات متكافئة. تناظر ligand يجب أن يُعالج قبل اتهام الالتحام بالفشل.",
          "A phenyl flip of 180° can raise RMSD even when the pose is chemically the same if atoms are equivalent. Ligand symmetry must be handled before you accuse docking of failure.",
        ),
      },
      {
        type: "whatif",
        id: "l3-vc-whatif",
        scenario: L(
          "ماذا لو حسبتَ RMSD لكل الذرات بما فيها هيدروجينات قابلة للدوران في ميثيل؟",
          "What if you compute RMSD over all atoms including rotatable methyl hydrogens?",
        ),
        consequence: L(
          "ستُدخل ضوضاء دورانية لا معنى بنيوي لها. استخدم ذرات ثقيلة، أو ذرّات مكافئة بعد توحيد التسمية.",
          "You inject rotational noise with no structural meaning. Use heavy atoms, or equivalent atoms after name unification.",
        ),
      },
    ],
    ["l3-gradients", "l3-pca", "l8-validation", "l9-rmsd"],
  ),

  expand(
    "l3-gradients",
    [
      L(
        "تفسير F = −∇V كجسر بين سطح الطاقة وحركة الذرات في MD.",
        "Explain F = −∇V as the bridge between an energy surface and atomic motion in MD.",
      ),
      L(
        "معرفة أن خطأ التدرج (قطع، شحنات، قيود) يُنتج قوة خاطئة حتى لو بدت V معقولة.",
        "Know that a gradient error (cutoff, charges, constraints) produces a wrong force even if V looks reasonable.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l3-gr-intro",
        title: L("القوة انحدار الطاقة", "Force is the fall of energy"),
        body: L(
          "إن كانت طاقة الوضع V دالة لإحداثيات الذرات، فالقوة على كل إحداثي هي ناقص المشتق الجزئي. النظام ينزل مع التدرج في minimization، ويتسارع مع القوة في MD. إن كانت V غير قابلة للاشتقاق (قطع حاد لجهد)، تظهر قوى وهمية. PME وswitching وقيود LINCS كلها قرارات حول كيف يُحسب هذا التدرج.",
          "If the potential V is a function of atomic coordinates, the force on each coordinate is minus the partial derivative. Minimization walks down the gradient; MD accelerates with the force. If V is non-differentiable (a hard cutoff), spurious forces appear. PME, switching, and LINCS constraints are all decisions about how this gradient is computed.",
        ),
      },
      {
        type: "equation",
        id: "l3-gr-eq",
        latex: String.raw`\mathbf{F} = -\nabla V`,
        name: L("القوة من الجهد", "Force from the potential"),
        meaning: L(
          "اتجاه القوة نحو تناقص V. المقدار أحَدّ حيث يتغير V بسرعة (تداخل vdW، رابطة مشدودة).",
          "Force points toward decreasing V. Magnitude is steepest where V changes fast (vdW overlap, a stretched bond).",
        ),
        variables: [
          { symbol: "F", name: L("متجه القوة على درجات الحرية", "Force vector on the degrees of freedom") },
          { symbol: "V", name: L("طاقة الوضع (force field)", "Potential energy (force field)") },
          { symbol: "∇", name: L("متجه المشتقات الجزئية", "Vector of partial derivatives") },
        ],
        interpretation: L(
          "إشارة الناقص ليست تجميلاً: بلاها تتسارع الذرات نحو التلال وتنفجر المحاكاة.",
          "The minus sign is not decoration: without it atoms accelerate toward hills and the simulation explodes.",
        ),
        application: L(
          "إذا رأيت انفجاراً في أول بيكوثوان، ابحث عن تداخل يُنتج ∇V هائلاً (ذرة في ذرة، شحنة سيئة، وحدات مختلطة).",
          "If you see an explosion in the first picoseconds, look for overlap that produces a huge ∇V (atom-in-atom, bad charge, mixed units).",
        ),
      },
      {
        type: "why",
        id: "l3-gr-why",
        question: L(
          "لماذا قد تكون الطاقة منخفضة والديناميكا خاطئة؟",
          "Why can the energy be low while the dynamics are wrong?",
        ),
        answer: L(
          "V عدد؛ الحركة تحتاج مشتقاتها. قطع coulomb بلا smoothing يُغيّر القوة أكثر مما يُظهر في V. كذلك قيود هيدروجين تُزيل درجات حرية من التدرج.",
          "V is a number; motion needs its derivatives. A Coulomb cutoff without smoothing changes the force more than it reveals in V. Hydrogen constraints also remove degrees of freedom from the gradient.",
        ),
      },
      {
        type: "callout",
        id: "l3-gr-warn",
        kind: "warning",
        title: L("لا تثق في minimization كدليل أن التدرج صفر في MD", "Do not trust minimization as proof that the MD gradient is zero"),
        body: L(
          "بعد min قد تبقى قوى صغيرة تُصبح مهمة عند تشغيل مكامل بخطوة 2 fs. دائماً راقب استقرار الطاقة في التوازن.",
          "After minimization, small residual forces can matter once an integrator runs at 2 fs. Always watch energy stability in equilibration.",
        ),
      },
      {
        type: "whatif",
        id: "l3-gr-whatif",
        scenario: L(
          "ماذا لو استخدمتَ خطوة MD كبيرة لأن «V تبدو ناعمة» على امتداد رابطة؟",
          "What if you use a large MD step because “V looks smooth” along a bond stretch?",
        ),
        consequence: L(
          "اهتزازات الهيدروجين ليست ناعمة على مقياس 5 fs في حقول ذرية نمطية. المكامل سيُخطئ في FΔt وتنهار حفظ الطاقة. القيود أو 1 fs ليست وسواساً.",
          "Hydrogen vibrations are not smooth on a 5 fs scale in typical atomistic fields. The integrator will mis-step FΔt and energy conservation will die. Constraints or 1 fs are not superstition.",
        ),
      },
      {
        type: "exercise",
        id: "l3-gr-ex",
        prompt: L(
          "في بُعد واحد V = (1/2) k (x−x0)²، ما F؟ في أي اتجاه تتحرك الكتلة إذا x > x0؟",
          "In one dimension V = (1/2) k (x−x0)², what is F? Which way does the mass move if x > x0?",
        ),
        solution: L(
          "F = −k (x−x0). إذا x > x0 فالقوة نحو اليسار، أي نحو x0. هذا حد الرابطة التوافقي في MM.",
          "F = −k (x−x0). If x > x0 the force points left, toward x0. That is the harmonic bond term in MM.",
        ),
      },
    ],
    ["l3-vectors", "l3-integration", "l6-etotal", "l9-newton"],
  ),

  expand(
    "l3-integration",
    [
      L(
        "فهم لماذا الخطوة الزمنية في MD الذري النمطي نحو 1–2 fs لا 5 fs دون قيود أو تعديل كتل.",
        "Understand why the timestep in typical atomistic MD is about 1–2 fs, not 5 fs, without constraints or mass scaling.",
      ),
      L(
        "ربط خطأ المكامل (Verlet ونحوه) بحفظ الطاقة واكتشاف المحاكاة الفاسدة.",
        "Connect integrator error (Verlet and kin) to energy conservation and to detecting a corrupt simulation.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l3-in-intro",
        title: L("نيوتن لا يُحلّ إلا تقريباً", "Newton is solved only approximately"),
        body: L(
          "المكامل يأخذ مواضع وسرعات وقوى ويُقدّم الزمن Δt. أسرع حركة في نظام ذري مع هيدروجين صريح هي اهتزازات X–H، بفترات على مقياس عشرات الفيمتوثانية. قاعدة تعليمية: Δt يجب أن يبقى جزءاً صغيراً من أسرع دورة. لذلك 1 fs شائع بلا قيود، و2 fs شائع مع LINCS/SHAKE على روابط الهيدروجين. 5 fs في حقل ذري قياسي بلا معالجة خاصة غالباً غير مشروع.",
          "An integrator takes positions, velocities, and forces and advances time by Δt. The fastest motion in an atomistic system with explicit hydrogen is X–H vibration, with periods on the tens-of-femtoseconds scale. Educational rule: Δt must remain a small fraction of the fastest period. Hence 1 fs is common without constraints, and 2 fs is common with LINCS/SHAKE on hydrogen bonds. 5 fs in a standard atomistic field without special treatment is usually illegitimate.",
        ),
      },
      {
        type: "list",
        id: "l3-in-detect",
        title: L("كيف تكتشف خطوة أكبر من اللازم", "How to detect a too-large step"),
        items: [
          L("انجراف طاقة conserving في NVE.", "Energy drift in a conserving NVE run."),
          L("انفجار إحداثيات أو LINCS warnings متكررة.", "Coordinate explosions or repeated LINCS warnings."),
          L("اهتزازات هندسية غير فيزيائية في الروابط.", "Unphysical bond stretching oscillations."),
        ],
      },
      {
        type: "why",
        id: "l3-in-why",
        question: L(
          "لماذا 2 fs وليس 5 fs في معظم بروتوكولات الإنتاج الذرية؟",
          "Why 2 fs and not 5 fs in most atomistic production protocols?",
        ),
        answer: L(
          "حتى مع تقييد X–H، تبقى زوايا وحركات أسرع من أن تُلتقط بـ 5 fs بأمان في كثير من الحقول. بعض الطرائق (hydrogen mass repartitioning) تسمح بخطوات أكبر بوعي. نسخ Δt من تدوينة دون قراءة قيود النظام نسخ خطر.",
          "Even with X–H constrained, angles and other motions are often too fast to capture safely at 5 fs in many fields. Some methods (hydrogen mass repartitioning) allow larger steps deliberately. Copying Δt from a blog without reading your constraints is a dangerous copy.",
        ),
      },
      {
        type: "callout",
        id: "l3-in-warn",
        kind: "warning",
        title: L("نجاح mdrun ≠ صحة المكامل", "A finished mdrun ≠ a valid integrator"),
        body: L(
          "المحاكاة قد تكتمل بتحذيرات مكتومة وطاقة تسبح. افحص log: قيود، انجراف، ودرجة حرارة درجات الحرية. لا تملأ الرسالة بمسار مكسور لأنه «طوله 100 ns».",
          "A run can finish with silenced warnings and a swimming energy. Inspect the log: constraints, drift, and temperature of degrees of freedom. Do not fill a thesis with a broken trajectory because it is “100 ns long”.",
        ),
      },
      {
        type: "whatif",
        id: "l3-in-whatif",
        scenario: L(
          "ماذا لو رفعتَ Δt إلى 5 fs لتوفير وقت العنقود دون تقييد هيدروجين؟",
          "What if you raise Δt to 5 fs to save cluster time without constraining hydrogen?",
        ),
        consequence: L(
          "أخطاء تكامل تتراكم، قد تنهار الجزيئات أو تسخن درجات حرية زائفة. أي RMSD أو MM/PBSA لاحق مبني على فيزياء مكامل مكسور. التوفير وهم.",
          "Integration errors accumulate; molecules may explode or fictitious degrees of freedom heat up. Any later RMSD or MM/PBSA is built on broken integrator physics. The saving is an illusion.",
        ),
      },
      {
        type: "exercise",
        id: "l3-in-ex",
        prompt: L(
          "اذكر شرطين يجب أن يكونا صحيحين قبل أن تستخدم Δt = 2 fs كخيار افتراضي.",
          "State two conditions that should hold before you treat Δt = 2 fs as a default.",
        ),
        solution: L(
          "قيود على روابط الهيدروجين (أو كتلة مُعادة التوزيع بشكل معلن)، ومكامل مناسب (Verlet/leap-frog) مع مراقبة انجراف الطاقة في اختبار NVE قصير. بلا ذلك ارجع إلى 1 fs.",
          "Constraints on hydrogen bonds (or announced mass repartitioning), and a suitable integrator (Verlet/leap-frog) with energy-drift checks on a short NVE test. Otherwise return to 1 fs.",
        ),
      },
    ],
    ["l3-gradients", "l9-integrators", "l9-newton", "l20-cpu-gpu"],
  ),

  expand(
    "l3-opt",
    [
      L(
        "التفريق بين انحدار تدرجي، نيوتن/شبه-نيوتن، وبحث عشوائي كما تظهر في min والالتحام.",
        "Distinguish gradient descent, Newton/quasi-Newton, and stochastic search as they appear in minimization and docking.",
      ),
      L(
        "معرفة أن الحد المحلي ليس الهيئة المرتبطة، وأن العشوائية بلا بذرة معلنة تُضعف إعادة الإنتاج.",
        "Know that a local minimum is not the bound pose, and that stochastic search without a stated seed weakens reproducibility.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l3-op-intro",
        title: L("التحسين نزول أو بحث، لا حكمة", "Optimization is descent or search, not wisdom"),
        body: L(
          "تقليل الطاقة يتبع ∇V إلى حد محلي: steepest descent يُصلح التداخلات العنيفة، conjugate gradient أو L-BFGS يكمل بنعومة. الالتحام يخلط بحثاً عالمياً تقريباً (جينياً، تلدين، أخذ عينات) مع تقييم. لا أحد من هؤلاء «يجد ΔG». كلهم يُقرّبون حدّاً على دالة ناقصة.",
          "Energy minimization follows ∇V to a local minimum: steepest descent repairs violent clashes, conjugate gradient or L-BFGS finishes more smoothly. Docking mixes approximate global search (genetic, annealing, sampling) with scoring. None of these “finds ΔG”. All of them approximate an extremum on an incomplete function.",
        ),
      },
      {
        type: "compare",
        id: "l3-op-cmp",
        left: L("تدرجي / نيوتن", "Gradient / Newton"),
        right: L("عشوائي / سكاني", "Stochastic / population"),
        rows: [
          {
            dim: L("ماذا يحتاج؟", "What does it need?"),
            a: L("تدرجات، وأحياناً هسيان تقريبي.", "Gradients, sometimes an approximate Hessian."),
            b: L("مقترحات عشوائية ومعيار قبول أو انتخاب.", "Random proposals and an acceptance or selection rule."),
          },
          {
            dim: L("أين يفشل؟", "Where does it fail?"),
            a: L("حدود محلية؛ حاجز يفصل عن الحوض الصحيح.", "Local minima; a barrier hiding the right basin."),
            b: L("قد يفوت حوضاً إن لم تكفِ الميزانية؛ نتائج تعتمد على البذرة.", "May miss a basin if the budget is short; results depend on the seed."),
          },
          {
            dim: L("مثال CADD", "CADD example"),
            a: L("EM قبل MD؛ تحسين هندسة QM.", "EM before MD; QM geometry optimization."),
            b: L("بحث هيئة في Vina؛ بعض مولّدات التوافق.", "Pose search in Vina; some conformer generators."),
          },
        ],
      },
      {
        type: "why",
        id: "l3-op-why",
        question: L(
          "لماذا نبدأ غالباً بـ steepest descent لا بنيوتن بعد بناء النظام؟",
          "Why do we often start with steepest descent rather than Newton after system build?",
        ),
        answer: L(
          "التداخلات الأولى تُنتج تدرجات هائلة وهسياناً سيئ الشرط. الانحدار الحاد بخطوات قصيرة يفك الاصطدام. نيوتن قد يقفز قفزة غير مستقرة. بعد هدوء القوى تنتقل إلى CG أو L-BFGS.",
          "Initial clashes produce huge gradients and an ill-conditioned Hessian. Steepest descent with short steps unsticks overlaps. Newton may take an unstable jump. After forces calm, switch to CG or L-BFGS.",
        ),
      },
      {
        type: "callout",
        id: "l3-op-lim",
        kind: "limitation",
        title: L("exhaustiveness ليس برهان اكتمال البحث", "exhaustiveness is not a proof of complete search"),
        body: L(
          "زيادة ميزانية البحث تقلل احتمال الفوات ولا تصفره، خاصة مع مستقبل جامد وligand مرن جداً. إن لم تُعد الهيئة المرجعية، فالمشكلة قد تكون تمثيلاً لا ميزانية.",
          "Raising the search budget lowers the chance of a miss; it does not zero it, especially with a rigid receptor and a very flexible ligand. If the reference pose is not recovered, the problem may be representation, not budget.",
        ),
      },
      {
        type: "whatif",
        id: "l3-op-whatif",
        scenario: L(
          "ماذا لو نشرتَ هيئات docking من تشغيل واحد بلا بذرة وبلا تكرار؟",
          "What if you publish docking poses from one run with no seed and no repeats?",
        ),
        consequence: L(
          "قد لا يستطيع غيرك إعادة أعلى مرتبة. كرر البحث، ثبّت البذرة في السجل، وافحص إن كانت العناقيد مستقرة عبر تشغيلات.",
          "Someone else may be unable to recover your top rank. Repeat the search, record the seed, and check whether clusters are stable across runs.",
        ),
      },
    ],
    ["l3-gradients", "l8-search", "l9-min", "l7-geom"],
  ),

  expand(
    "l3-stats",
    [
      L(
        "استخدام الخطأ المعياري والنسخ المستقلة للحديث عن عدم اليقين في متوسط MD أو درجة نموذج.",
        "Use standard error and independent replicas when talking about uncertainty in an MD mean or a model score.",
      ),
      L(
        "رفض معاملة إطارات المسار المترابطة كعينات مستقلة.",
        "Refuse to treat correlated trajectory frames as independent samples.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l3-st-intro",
        title: L("رقم بلا خطأ ليس نتيجة", "A number without error is not a result"),
        body: L(
          "متوسط طاقة أو RMSF أو درجة نموذج هو تقدير. الإطارات المتتابعة في MD مترابطة؛ N الفعال أصغر بكثير من عدد اللقطات. النسخ المستقلة (seeds، ظروف بدء) تكشف إن كان الحوض الذي رأيته صدفة. في QSAR، تقسيم عشوائي واحد يُخفي التباين. الإحصاء هنا أخلاق ادّعاء.",
          "A mean energy, RMSF, or model score is an estimate. Successive MD frames are correlated; effective N is much smaller than the snapshot count. Independent replicas (seeds, starting conditions) reveal whether the basin you saw was luck. In QSAR, one random split hides variance. Statistics here is the ethics of claiming.",
        ),
      },
      {
        type: "equation",
        id: "l3-st-se",
        latex: String.raw`\mathrm{SE} \approx \frac{s}{\sqrt{N_{\mathrm{eff}}}}`,
        name: L("خطأ معياري بـ N الفعّال", "Standard error with effective N"),
        meaning: L(
          "كلما صغر N_eff (ارتباط زمني)، كبر عدم يقين المتوسط حتى لو حفظت ألف إطار.",
          "The smaller N_eff (time correlation), the larger the uncertainty of the mean even if you stored a thousand frames.",
        ),
        variables: [
          { symbol: "s", name: L("انحراف معياري للعينة (بحذر في سلاسل زمنية)", "Sample standard deviation (cautiously for time series)") },
          { symbol: "N_eff", name: L("عدد العينات المستقلة تقريباً", "Approximate number of independent samples") },
          { symbol: "SE", name: L("خطأ معياري للمتوسط", "Standard error of the mean") },
        ],
        interpretation: L(
          "إن تجاهلت الارتباط وزعمت N = عدد الإطارات، ستعرض أشرطة خطأ تجميلية.",
          "If you ignore correlation and claim N = frame count, you will display cosmetic error bars.",
        ),
        application: L(
          "block averaging أو bootstrap على كتل زمنية، ونُسخ مستقلة، قبل أن تُقارن مركبين بـ MM/PBSA.",
          "Block averaging or bootstrap on time blocks, plus independent replicas, before you compare two compounds with MM/PBSA.",
        ),
      },
      {
        type: "why",
        id: "l3-st-why",
        question: L(
          "لماذا لا تكفي قيمة p من اختبار t على إطارات كل 10 ps؟",
          "Why is a t-test p-value on frames every 10 ps not enough?",
        ),
        answer: L(
          "لأن الفرضية «استقلال العينات» مكسورة. p صغيرة قد تعني فقط أنك ملأت الملف بلقطات متشابهة. الاستقلال يُبرَّر بزمن ارتباط أو بنُسخ.",
          "The “independent samples” assumption is broken. A tiny p may only mean you filled the file with similar snapshots. Independence is justified by a correlation time or by replicas.",
        ),
      },
      {
        type: "callout",
        id: "l3-st-warn",
        kind: "warning",
        title: L("n = 1 مسار ليس إحصاءً", "n = 1 trajectory is not statistics"),
        body: L(
          "مسار واحد يمكن أن يُروى كقصة. العلم يطلب ما إذا كانت القصة تتكرر. إن لم تسمح الموارد بأكثر من واحد، صغّر الادعاء ولا تُزيّن بـ p-value.",
          "One trajectory can be told as a story. Science asks whether the story repeats. If resources allow only one, shrink the claim and do not decorate it with a p-value.",
        ),
      },
      {
        type: "whatif",
        id: "l3-st-whatif",
        scenario: L(
          "ماذا لو أظهرتَ فرق MM/PBSA = 0.4 kcal/mol مع أشرطة من انحراف داخل مسار واحد؟",
          "What if you show an MM/PBSA gap of 0.4 kcal/mol with bars from within-trajectory deviation?",
        ),
        consequence: L(
          "القرّاء قد يظنون التمييز معنوياً. بين النسخ قد ينقلب الفرق. إمّا نُسخ أو اعتراف أن الفرق تحت الضوضاء.",
          "Readers may think the discrimination is meaningful. Across replicas the gap may flip. Either run replicas or admit the gap is below the noise.",
        ),
      },
    ],
    ["l3-regression", "l9-convergence", "l10-limits", "l17-plots"],
  ),

  expand(
    "l3-pca",
    [
      L(
        "تفسير PCA على المواضع ككشف لحركات جماعية في مسار، لا كإثبات وظيفة.",
        "Interpret PCA on coordinates as revealing collective motions in a trajectory, not as proof of function.",
      ),
      L(
        "معرفة متى لا تستخدم PCA: معاينة سيئة، مواءمة خاطئة، أو خلط أنظمة بلا معنى.",
        "Know when not to use PCA: poor sampling, bad alignment, or mixing systems without meaning.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l3-pc-intro",
        title: L("المحور الأكبر ليس بالضرورة الآلية", "The largest axis is not necessarily the mechanism"),
        body: L(
          "PCA يجد اتجاهات أقصى تباين في بيانات مُواءَمة (غالباً كربونات ألفا). في MD قد توافق فتح جيب أو انثناء نطاقي. لكنها محاور إحصائية: إن لم تُعاين الانتقال، فـ PC1 يصف ضوضاء الحوض الذي أنت فيه. إسقاط إطار على PC1-PC2 شكل، لا طاقة حرة ما لم تُبنَ بكثافة مُعايرة بحذر.",
          "PCA finds directions of maximum variance in aligned data (often Cα). In MD they may match pocket opening or domain bending. They remain statistical axes: if you never sampled the transition, PC1 describes noise inside the basin you occupy. A PC1–PC2 projection is a figure, not a free-energy surface unless built from a carefully reweighted density.",
        ),
      },
      {
        type: "steps",
        id: "l3-pc-how",
        title: L("حد أدنى لـ PCA صادق", "A minimum for honest PCA"),
        items: [
          {
            title: L("مواءمة", "Align"),
            body: L("أزل الانتقال والدوران الكلي على مجموعة مرجعية لا تشارك في الحركة المقصودة إن أمكن.", "Remove overall translation and rotation using a reference set that, if possible, does not include the motion of interest."),
          },
          {
            title: L("اختيار الذرات", "Atom choice"),
            body: L("Cα للعمود الفقري شائع؛ إدخال سلاسل جانبية مرنة يُهيمن بضوضاء محلية.", "Cα is common for backbone; including floppy side chains lets local noise dominate."),
          },
          {
            title: L("تفسير", "Interpret"),
            body: L("ارسم الحركة الجماعية وانظر إن كانت تُغيّر الجيب. لا تُسمّها «آلية فتح» بلا دليل مستقل.", "Draw the collective motion and ask whether it changes the pocket. Do not name it an “opening mechanism” without independent evidence."),
          },
        ],
      },
      {
        type: "why",
        id: "l3-pc-why",
        question: L(
          "لماذا يفشل التجميع على RMSD أحياناً بينما تساعد PCA؟",
          "Why does RMSD clustering sometimes fail where PCA helps?",
        ),
        answer: L(
          "RMSD يخلط كل الأبعاد. حركة جماعية صغيرة على خلفية اهتزازات كثيرة قد تُدفن. PCA يعزل اتجاه التباين الأكبر. العكس أيضاً: عنقودان في RMSD قد يكونان يداً واحدة على PC1 إن كان الفرق محلياً.",
          "RMSD mixes all dimensions. A small collective motion on a background of many vibrations can be buried. PCA isolates the highest-variance direction. The converse also holds: two RMSD clusters may be one hand on PC1 if the difference is local.",
        ),
      },
      {
        type: "callout",
        id: "l3-pc-lim",
        kind: "limitation",
        title: L("PCA على مسار قصير مسرح", "PCA on a short trajectory is theatre"),
        body: L(
          "إن لم يُستكشف إلا حوض واحد، فالمحاور تصف شكل ذلك الحوض. لا تقارن PC لمركبَين من مسارين غير متقاربين وتستنتج أن أحدهما «يفتح الجيب أكثر».",
          "If only one basin was explored, the axes describe that basin’s shape. Do not compare PCs of two compounds from unconverged trajectories and conclude that one “opens the pocket more”.",
        ),
      },
      {
        type: "whatif",
        id: "l3-pc-whatif",
        scenario: L(
          "ماذا لو خلطتَ إطارات apo وholo في PCA واحد دون تسمية؟",
          "What if you mix apo and holo frames in one PCA without labels?",
        ),
        consequence: L(
          "قد يظهر انفصال يبدو كآلية وهو فرق بروتوكول (ligand، صندوق، اتزان). لوّن المصدر أولاً. إن اختلط المصدران فالشكل لا يحمل ادعاء تصميم.",
          "A separation may look like mechanism and be a protocol difference (ligand, box, equilibration). Colour the source first. If the two sources mix, the figure carries no design claim.",
        ),
      },
    ],
    ["l3-vectors", "l3-stats", "l9-pca", "l25-ensemble"],
  ),

  expand(
    "l3-regression",
    [
      L(
        "التفريق بين ارتباط وسببية في QSAR وML scoring.",
        "Distinguish correlation from causation in QSAR and ML scoring.",
      ),
      L(
        "شرح لماذا يموت النموذج خارج نطاق التطبيق حتى لو كان R² الداخلي جميلاً.",
        "Explain why a model dies outside its applicability domain even if internal R² looks beautiful.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l3-rg-intro",
        title: L("الخط المستقيم ليس آلية", "A straight line is not a mechanism"),
        body: L(
          "الانحدار يربط واصفات x بنشاط y. قد ينجح لأن x يحمل إشارة حقيقية، أو لأن السلسلة كلها تشترك هيكلاً والواصف مجرد عدّ للوزن الجزيئي. في الفرز، نموذج يُميّز actives عن decoys عبر الهيكل لا الفيزياء سيفشل على سلسلة جديدة. النطاق (applicability domain) هو الاعتراف بأن التنبؤ مشروط بجيران في فضاء كيميائي.",
          "Regression maps descriptors x to activity y. It may work because x carries real signal, or because the whole series shares a scaffold and the descriptor merely counts molecular weight. In screening, a model that separates actives from decoys by scaffold rather than physics will fail on a new series. The applicability domain is the admission that prediction is conditional on neighbours in chemical space.",
        ),
      },
      {
        type: "list",
        id: "l3-rg-fails",
        title: L("فشل متوقع — لا مفاجأة", "Expected failures — not surprises"),
        ordered: true,
        items: [
          L("R² تدريب مرتفع وR² اختبار منهار: حفظ لا تعميم.", "High training R² and collapsed test R²: memorization, not generalization."),
          L("تقسيم عشوائي لسلسلة زمنية كيميائية: تسرّب تشابه.", "Random split of a chemical time series: similarity leakage."),
          L("y-scrambling ما زال يعطي نموذجاً «جيداً»: الإشارة وهمية.", "Y-scrambling still yields a “good” model: the signal is spurious."),
          L("التنبؤ خارج مجال الواصفات: تخمين.", "Prediction outside descriptor range: a guess."),
        ],
      },
      {
        type: "why",
        id: "l3-rg-why",
        question: L(
          "لماذا الارتباط ليس سببية حتى لو تطابق مع فرضية الجيب؟",
          "Why is correlation not causation even when it matches a pocket hypothesis?",
        ),
        answer: L(
          "قد يتحرك الواصف مع الحجم الذي يتحرك مع logD الذي يتحرك مع نفاذية المقايسة الخلوية لا مع Kd. الفرضية البنيوية تحتاج تجربة تفصل المتغيرات (نظير يُكسر فيه التفاعل دون تغيير الواصف العام).",
          "The descriptor may move with size, which moves with logD, which moves with cell-assay permeability rather than Kd. A structural hypothesis needs an experiment that separates variables (an analogue that breaks the contact without changing the global descriptor).",
        ),
      },
      {
        type: "callout",
        id: "l3-rg-warn",
        kind: "warning",
        title: L("لا تستخدم QSAR حيث لا يوجد مجال", "Do not use QSAR where there is no domain"),
        body: L(
          "عشرة مركبات وواصفات أكثر منها وصفة لحفظ. نموذج على سلسلة كيناز لا يُفرز مكتبات تنوع عام. إن سألك أحد «ما IC50 لهذا الجزيء الجديد كلياً؟» فالجواب العلمي قد يكون: خارج النطاق.",
          "Ten compounds and more descriptors than compounds is a recipe for memorization. A model on a kinase series does not screen a general diversity library. If someone asks “what is the IC50 of this wholly new molecule?”, the scientific answer may be: out of domain.",
        ),
      },
      {
        type: "whatif",
        id: "l3-rg-whatif",
        scenario: L(
          "ماذا لو قدّمتَ نموذج QSAR بـ R² = 0.95 من تدريب فقط في مناقشة؟",
          "What if you present a QSAR model with training-only R² = 0.95 in a viva?",
        ),
        consequence: L(
          "سؤال المتابع الشرعي: ماذا عن الاختبار الخارجي وy-scrambling والنطاق؟ بلا ذلك الرقم مسرح. اعرض أداءً على قسم لم يُستخدم في اختيار الواصفات.",
          "The legitimate follow-up is: what about external test, y-scrambling, and domain? Without those the number is theatre. Show performance on a split that was not used to choose descriptors.",
        ),
      },
      {
        type: "exercise",
        id: "l3-rg-ex",
        prompt: L(
          "نموذج يستخدم MW وحده على سلسلة تزداد قوتها مع الحجم حتى تخرج من الجيب. ماذا يحدث للنظير الأكبر التالي؟",
          "A model uses MW alone on a series whose potency rises with size until the pocket is exceeded. What happens to the next larger analogue?",
        ),
        solution: L(
          "النموذج قد يتنبأ بتحسن مستمر (خارج النطاق الفيزيائي). الواقع: اصطدام أو خسارة نفاذية. هذا مثال تعليمي على ارتباط محلي ينهار عند حد هندسي.",
          "The model may predict continued improvement (outside the physical domain). Reality: clash or permeability loss. An educational example of a local correlation dying at a geometric limit.",
        ),
      },
    ],
    ["l3-stats", "l12-qsar", "l12-ad", "l16-limits"],
  ),
];
