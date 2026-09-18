import type { Lesson } from "@/lib/academy/types";
import { expand, L } from "@/lib/academy/content/helpers";

export const lessons: Lesson[] = [
  expand(
    "l8-problem",
    [
      L(
        "تمييز الـ docking عن محاكاة الارتباط وعن حساب ΔG.",
        "Distinguish docking from a binding simulation and from a ΔG calculation.",
      ),
      L(
        "تفكيك المسألة إلى بحث (search) في فضاء الهيئات ثم تقييم (scoring).",
        "Decompose the problem into a search over pose space and a subsequent scoring step.",
      ),
      L(
        "عدّ درجات الحرية: انتقال، دوران، وtorsion للّيجند — ومرونة المستقبل إن وُجدت.",
        "Count the degrees of freedom: ligand translation, rotation, and torsion — plus receptor flexibility if modelled.",
      ),
      L(
        "صياغة الهيئة الناتجة كفرضية بنيوية، لا كنتيجة فيزيائية مكتملة.",
        "State the resulting pose as a structural hypothesis, not as a completed physical result.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l8-problem-what",
        title: L("ما هي مسألة الالتحام؟", "What is the docking problem?"),
        body: L(
          "الـ docking مسألة هندسية-فيزيائية مُبسَّطة: ضع ليغنداً مرناً داخل جيب بروتيني، غالباً شبه جامد، وابحث عن هيئة (pose) منخفضة حسب دالة تقييم. ليست هذه محاكاة لمسار الارتباط، ولا تكاملاً على ensemble، ولا حساباً لـ ΔG. الناتج هيئة مرشّحة + رقم. الرقم ليس طاقة ارتباط، والهيئة ليست بالضرورة الهيئة النشطة حيوياً. كل بروتوكول docking يختار فيزيياء يتجاهلها: الماء الصريح، استقطاب، بروتونات متحركة، تغيرات كبيرة في العرى، ارتباط تساهمي، وهيئات متعددة للمستقبل. فهم المسألة يعني معرفة ما حُذف قبل تشغيل أي برنامج.",
          "Docking is a simplified geometric–physical problem: place a flexible ligand in a mostly rigid protein pocket and search for a pose that a scoring function ranks as favourable. It is not a simulation of the association path, not an ensemble integral, and not a ΔG calculation. The output is a candidate pose plus a number. The number is not binding free energy, and the pose is not necessarily the bioactive one. Every docking protocol chooses physics to ignore: explicit water, polarisation, moving protons, large loop rearrangements, covalency, and multiple receptor conformers. Understanding the problem means knowing what was deleted before any program is launched.",
        ),
      },
      {
        type: "list",
        id: "l8-problem-dof",
        title: L("درجات الحرية التي تُبحث فعلاً", "Degrees of freedom that are actually searched"),
        items: [
          L(
            "انتقال الليجند: ثلاث إحداثيات لمركز الكتلة داخل الصندوق (grid / box).",
            "Ligand translation: three centre-of-mass coordinates inside the box (grid / box).",
          ),
          L(
            "دوران الليجند كجسم صلب: ثلاث زوايا (أو رباعي وحدات).",
            "Rigid-body rotation of the ligand: three angles (or a unit quaternion).",
          ),
          L(
            "زواية torsion للروابط القابلة للدوران في الليجند. كل رابطة إضافية تُضخّم الفضاء أسّياً.",
            "Torsion angles of rotatable bonds in the ligand. Each extra rotatable bond inflates the space exponentially.",
          ),
          L(
            "مرونة المستقبل — إن وُجدت — محصورة عادةً في بضع سلاسل جانبية أو في مجموعة هيئات جاهزة، لا في البروتين كاملاً.",
            "Receptor flexibility — if present — is usually a few side chains or a precomputed conformational ensemble, not the whole protein.",
          ),
          L(
            "ما لا يُبحث: مسار الدخول، تفكيك قفص الماء، تغيّر protonation أثناء الارتباط، وتكسير/تكوين روابط.",
            "What is not searched: the entry path, displacement of the water cage, protonation changes on binding, and bond making/breaking.",
          ),
        ],
      },
      {
        type: "callout",
        id: "l8-problem-fact",
        kind: "fact",
        title: L("الالتحام ليس محاكاة ارتباط", "Docking is not a binding simulation"),
        body: L(
          "محاكاة الارتباط تتطلّب معاينة انتقال من الحالة المنفصلة (ليجند في المذيب + بروتين فارغ) إلى المركّب، مع عمل حجم وتبادل ماء. الـ docking يبدأ داخل الجيب تقريباً، يُثبّت معظم الذرات، ويُحسّن دالة ليست طاقة حرة. الخلط بين الاثنين خطأ مفاهيمي يُسقط ورقة في المناقشة.",
          "A binding simulation would sample the transition from the unbound state (ligand in solvent + empty protein) into the complex, including volume work and water exchange. Docking starts already near the pocket, freezes most atoms, and optimises a function that is not a free energy. Conflating the two is a conceptual error that fails a viva.",
        ),
      },
      {
        type: "compare",
        id: "l8-problem-vs-md",
        left: L("Docking", "Docking"),
        right: L("MD / طاقة حرة", "MD / free energy"),
        rows: [
          {
            dim: L("السؤال", "Question"),
            a: L("أين قد يجلس الليجند، وبأي ترتيب تقريبي؟", "Where might the ligand sit, and in what rough rank order?"),
            b: L("كيف يتحرك المركّب، وهل المعاينة كافية لـ ΔG أو للحركية؟", "How does the complex move, and is sampling enough for ΔG or kinetics?"),
          },
          {
            dim: L("الحالة المرجعية", "Reference state"),
            a: L("غائبة عملياً: لا ليغند حر في المذيب.", "Effectively absent: no free ligand in solvent."),
            b: L("يمكن تعريف unbound وbound إن صُمّم البروتوكول لذلك.", "Unbound and bound can be defined if the protocol is built for it."),
          },
          {
            dim: L("المعاينة", "Sampling"),
            a: L("بحث موضعي/عشوائي عن حد أدنى لدالة scoring.", "Local/stochastic search for a minimum of a scoring function."),
            b: L("مسار حراري (أو تحويل كيميائي) وفق مجال قوة.", "A thermal trajectory (or an alchemical path) under a force field."),
          },
          {
            dim: L("الزمن", "Time"),
            a: L("لا زمن فيزيائي.", "No physical time."),
            b: L("خطوة زمنية وديناميكا، حتى إن لم يصل النظام إلى اتزان.", "A timestep and dynamics, even if the system has not equilibrated."),
          },
        ],
      },
      {
        type: "viewer",
        id: "l8-problem-1hsg",
        pdb: "1HSG",
        ligand: "MK1",
        caption: L(
          "1HSG: HIV-1 protease مع indinavir (MK1). جيب تقويمي واضح، مثنوي C2، وفلاب vis-à-vis. هذا مركب بلوري كلاسيكي لتدريس مسألة الـ docking — لا دليل على أن برنامجاً سيُعيد الهيئة من فراغ.",
          "1HSG: HIV-1 protease with indinavir (MK1). A clear orthosteric site, C2 dimer, and flaps. A classic crystal complex for teaching the docking problem — not evidence that a program will recover the pose from scratch.",
        ),
      },
      {
        type: "why",
        id: "l8-problem-why",
        question: L(
          "لماذا نستخدم بحثاً + scoring بدل محاكاة ارتباط مباشرة لكل مركّب في مكتبة؟",
          "Why use search + scoring instead of simulating association for every library compound?",
        ),
        answer: L(
          "لأن فضاء المكتبة (10⁴–10⁷ مركّب في فرز نموذجي، وأكبر بكثير في فضاءات تخلقية) لا يحتمل تكلفة MD أو FEP. الـ docking رخيص بما يكفي لترتيب أولوية، بشرط أن يُعامل ناتجه كمرشّح للفحص البصري والتحقّق، لا كاكتشاف. التكلفة المنخفضة ليست مبرراً لتفسير فيزيائي مبالغ فيه؛ هي مبرر لاستخدام الأداة في مكانها الصحيح داخل الخط.",
          "Because library space (10⁴–10⁷ compounds in a typical screen, far larger in generative spaces) cannot bear the cost of MD or FEP. Docking is cheap enough to prioritise, provided its output is treated as a candidate for visual inspection and validation, not as a discovery. Low cost is not a licence for over-interpretation; it is a reason to use the tool in the correct place in the pipeline.",
        ),
      },
      {
        type: "whatif",
        id: "l8-problem-whatif",
        scenario: L(
          "ماذا لو اعتبرت الهيئة البلورية لليجند المرجع الوحيد الممكن، ورفضت كل docking لا يطابقها؟",
          "What if you treat the crystal ligand pose as the only admissible answer and reject every docking that does not match it?",
        ),
        consequence: L(
          "ستُكافئ إعادة إنتاج بلورة واحدة (self-docking) وتُعاقب كيمياء مختلفة قد ترتبط بهيئة أخرى مشروعة. البلورة قيدٌ بلوري + هيئة شائعة، ليست برهاناً على أن كل مثبط لنفس الهدف يجب أن يجلس بالطريقة نفسها. cross-docking وSAR وهيئات بديلة في PDB تُظهر أن الجيب يستوعب أكثر من إجابة.",
          "You will reward reproduction of one crystal (self-docking) and punish different chemistry that may bind in another legitimate pose. A crystal is a lattice-constrained, populated pose, not proof that every inhibitor of the same target must sit identically. Cross-docking, SAR, and alternate PDB poses show that a pocket can host more than one answer.",
        ),
      },
      {
        type: "callout",
        id: "l8-problem-warn",
        kind: "warning",
        title: L("لا تكتب «تم اكتشاف مثبط» من docking", "Do not write “an inhibitor was discovered” from docking"),
        body: L(
          "اكتشاف مثبط يتطلّب قياساً تجريبياً (أو على الأقل ارتباطاً فيزيائياً مستقلاً). الـ docking يولّد فرضية هيئة. إن لم تُختبر الفرضية، فالورقة تُرتّب جزيئات داخل نموذج، لا تكتشف دواءً.",
          "Discovering an inhibitor requires an experimental measurement (or at least an independent biophysical binding readout). Docking generates a pose hypothesis. If that hypothesis is not tested, the paper is ranking molecules inside a model, not discovering a drug.",
        ),
      },
      {
        type: "exercise",
        id: "l8-problem-ex",
        prompt: L(
          "ليجند بسبع روابط قابلة للدوران، صندوق بحث 20×20×20 Å. اشرح لماذا «زيادة exhaustiveness» لا تُحوّل المسألة إلى بحث شامل، وما الذي يبقى خارج الفضاء حتى لو وُجدت الهيئة البلورية.",
          "A ligand with seven rotatable bonds, search box 20×20×20 Å. Explain why raising exhaustiveness does not turn the problem into an exhaustive search, and what remains outside the space even if the crystal pose exists.",
        ),
        solution: L(
          "فضاء torsion سباعي الأبعاد مستمر، مضروب في 6 درجات جسم صلب، لا يُغطّى بزيادة جهد بحث متقطع. exhaustiveness يزيد عدد المحاولات/الحدّة، لا يُثبت الوصول إلى الحد الشامل. خارج الفضاء: بروتونات بديلة، توتومرات، ماء محبوس، تحرّك فلاب أو سلسلة جانبية، وهيئة ليغند بعيدة عن المجموعة المولَّدة. وجود هيئة بلورية يعني أن نقطة واحدة في الفضاء الحقيقي موجودة؛ لا يعني أن الدالة والبحث سيجدانها أو سيُفضّلانها.",
          "A seven-dimensional continuous torsion space times six rigid-body degrees of freedom is not covered by a larger finite search effort. Exhaustiveness increases the number or intensity of attempts; it does not prove that the global minimum was reached. Outside the space: alternate protonation, tautomers, buried water, flap or side-chain motion, and a ligand conformer far from the generated set. A crystal pose means one point in the true space exists; it does not mean the function and the search will find it or prefer it.",
        ),
      },
      {
        type: "steps",
        id: "l8-problem-protocol",
        title: L("هيكل دراسة docking قابلة للدفاع", "Anatomy of a defensible docking study"),
        items: [
          {
            title: L("عرّف السؤال", "Define the question"),
            body: L(
              "إثراء مكتبة؟ تفسير SAR؟ فرضية نمو شظية؟ كل سؤال يفرض معيار نجاح مختلف.",
              "Library enrichment? SAR explanation? A fragment-growing hypothesis? Each question imposes a different success criterion.",
            ),
          },
          {
            title: L("افحص البنية قبل الصندوق", "Inspect the structure before the box"),
            body: L(
              "الدقة، B-factor في الجيب، altloc، ماء، معدن، عامل مرافق، حلقات ناقصة.",
              "Resolution, pocket B-factors, altlocs, waters, metals, cofactors, missing loops.",
            ),
          },
          {
            title: L("ثبّت الكيمياء", "Fix the chemistry"),
            body: L(
              "protonation وtautomer عند pH الجيب، لا عند pH افتراضي أعمى.",
              "Protonation and tautomer at the pocket pH, not at a blind default pH.",
            ),
          },
          {
            title: L("تحقّق ثم فسّر", "Validate, then interpret"),
            body: L(
              "redocking على الأقل، ويفضّل decoys إن كان فرزًا. العين على التفاعلات قبل ترتيب الأرقام.",
              "At least redocking; decoys if this is a screen. Eyes on interactions before ranking numbers.",
            ),
          },
        ],
      },
    ],
    ["l8-search", "l8-scoring", "l8-not-dg", "l4-pockets", "l4-waters"],
  ),

  expand(
    "l8-search",
    [
      L(
        "تصنيف خوارزميات البحث: منهجي، عشوائي، جيني، تلدين، وبحث محلي متكرّر.",
        "Classify search algorithms: systematic, stochastic, genetic, annealing, and iterated local search.",
      ),
      L(
        "ربط exhaustiveness بجهد البحث لا بضمان الحد الشامل.",
        "Tie exhaustiveness to search effort, not to a guarantee of the global minimum.",
      ),
      L(
        "تفسير فشل البحث مقابل فشل الدالة.",
        "Separate a search failure from a scoring-function failure.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l8-search-map",
        title: L("البحث في فضاء غير محدب", "Searching a non-convex space"),
        body: L(
          "دالة scoring لليجند المرن متعددة الحدود الدنيا. البحث إما يمسح درجات الحرية بانتظام (بناء تزايدي، تطابق شكل)، أو يقفز عشوائياً (Monte Carlo)، أو يُطوّر جماعة من الهيئات (خوارزمية جينية)، أو يُليّن القبول بحرارة وهمية (simulated annealing)، أو يخلط اضطراباً عشوائياً مع تحسين محلي متكرّر (كما في AutoDock Vina). لا خوارزمية منها «تحل» الـ docking؛ كلها heuristics لفضاء أكبر من أن يُحصى. نجاح البحث يعني إيجاد هيئة جيدة حسب الدالة المستخدمة — وقد تكون الدالة نفسها مخطئة.",
          "A scoring function on a flexible ligand has many local minima. Search either walks degrees of freedom regularly (incremental construction, shape matching), jumps stochastically (Monte Carlo), evolves a population of poses (a genetic algorithm), softens acceptance with a fictitious temperature (simulated annealing), or mixes random perturbation with iterated local optimisation (as in AutoDock Vina). None of these “solves” docking; all are heuristics for a space too large to enumerate. Search success means finding a pose that is good according to the function in use — and that function may itself be wrong.",
        ),
      },
      {
        type: "list",
        id: "l8-search-algs",
        title: L("عائلات الخوارزميات", "Algorithm families"),
        items: [
          L(
            "منهجي / matching: يضع features (حلقات، مراكز H-bond) على خريطة الجيب ثم يبني الباقي. قوي عندما يكون الشكل مميزاً، ضعيف في جيوب مسطحة.",
            "Systematic / matching: maps features (rings, H-bond centres) onto the pocket then builds the rest. Strong when the shape is distinctive; weak in flat pockets.",
          ),
          L(
            "Monte Carlo: خطوة عشوائية في الانتقال/الدوران/torsion، قبول حسب Metropolis على درجة scoring لا على طاقة حقيقية.",
            "Monte Carlo: a random step in translation/rotation/torsion, accepted by a Metropolis criterion on the docking score, not on a true energy.",
          ),
          L(
            "Genetic algorithm (AutoDock4): جينوم = هيئة. تقاطع وطفرات، وLamarckian variant يُحسّن الفرد محلياً قبل تقييمه.",
            "Genetic algorithm (AutoDock4): genome = pose. Crossover and mutation; the Lamarckian variant locally optimises an individual before scoring it.",
          ),
          L(
            "Simulated annealing: حرارة وهمية عالية ثم تبريد. إن بُرّد بسرعة جُمدت هيئة محلية.",
            "Simulated annealing: a fictitious high temperature then cooling. Cool too fast and a local pose is frozen in.",
          ),
          L(
            "Iterated local search (Vina): اضطراب ثم BFGS-like محلي، تكرار. exhaustiveness يتحكم بعدد هذه الدورات/الجهد لا بشمول الفضاء.",
            "Iterated local search (Vina): perturb, then a BFGS-like local optimisation, repeat. Exhaustiveness controls the number of such cycles / the effort, not coverage of the space.",
          ),
        ],
      },
      {
        type: "callout",
        id: "l8-search-exh",
        kind: "limitation",
        title: L("exhaustiveness ≠ ضمان الحد الشامل", "Exhaustiveness ≠ a global-minimum guarantee"),
        body: L(
          "في Vina، رفع exhaustiveness يزيد جهد البحث (محاولات أكثر / تكرار أطول). هذا يرفع احتمال إيجاد حد أدنى أفضل حسب الدالة، ولا يُثبت أنه الحد الشامل، ولا يُصلح دالة سيئة، ولا يعوّض صندوقاً في المكان الخطأ. إن تشابهت الهيئات عند exhaustiveness 8 و32، فذلك استقرار بحث لا برهان فيزيائي.",
          "In Vina, raising exhaustiveness increases search effort (more attempts / longer iteration). That raises the chance of finding a better minimum of the function; it does not prove it is the global minimum, does not repair a bad function, and does not compensate for a box in the wrong place. If poses look similar at exhaustiveness 8 and 32, that is search stability, not physical proof.",
        ),
      },
      {
        type: "compare",
        id: "l8-search-sys-stoch",
        left: L("بحث منهجي", "Systematic search"),
        right: L("بحث عشوائي / جيني", "Stochastic / genetic search"),
        rows: [
          {
            dim: L("قابلية الإعادة", "Reproducibility"),
            a: L("عالية إذا ثُبّتت الشبكة والخطوة.", "High if the grid and step are fixed."),
            b: L("تعتمد على البذرة (seed). سجّل البذرة دائماً.", "Depends on the seed. Always record the seed."),
          },
          {
            dim: L("ليجند مرن جداً", "Very flexible ligand"),
            a: L("ينفجر عدد الهيئات مع كل torsion.", "The pose count explodes with each torsion."),
            b: L("قد يجد هيئة جيدة دون إحصاء، وقد يفوته الحد مراراً.", "May find a good pose without enumerating, and may miss the minimum repeatedly."),
          },
          {
            dim: L("التشخيص", "Diagnosis"),
            a: L("فشل واضح إن كانت الخطوة أخشن من التفاعل.", "Failure is obvious if the step is coarser than the interaction."),
            b: L("يجب تكرار البذور قبل اتهام الدالة.", "Rerun seeds before blaming the function."),
          },
        ],
      },
      {
        type: "why",
        id: "l8-search-why",
        question: L(
          "لماذا لا يكفي تشغيل واحد حتى مع exhaustiveness مرتفع؟",
          "Why is a single run insufficient even at high exhaustiveness?",
        ),
        answer: L(
          "البحث عشوائي في أهم البرامج المفتوحة. تشغيل واحد عيّنة واحدة من مسار البحث. تكرار مستقل (بذور مختلفة) يفصل: (أ) الدالة تُفضّل هيئة خاطئة باستمرار، عن (ب) البحث لم يجد الهيئة الجيدة هذه المرة. بلا تكرار تخلط ضجيج الخوارزمية بفيزياء الجيب.",
          "Search is stochastic in the major open programs. One run is one draw from the search process. Independent repeats (different seeds) separate (a) the function consistently preferring a wrong pose from (b) the search missing a good pose this time. Without repeats you confuse algorithmic noise with pocket physics.",
        ),
      },
      {
        type: "whatif",
        id: "l8-search-whatif",
        scenario: L(
          "ماذا لو ضيّقت الصندوق حول الموقع التقويمي المعروف ثم أعلنت أن الليجند «لا يرتبط في موقع آخر»؟",
          "What if you shrink the box around the known orthosteric site and then declare that the ligand “does not bind elsewhere”?",
        ),
        consequence: L(
          "لم تبحث في مكان آخر. الصندوق قيد على المسألة، لا نتيجة. ادعاء غياب موقع تفارغي من docking محصور هو tautology: بحثت حيث قررت أن تبحث. إن كان السؤال عن الموقع، فالصندوق يجب أن يسمح بالبدائل، أو تستخدم كشفاً للمواقع أولاً.",
          "You did not search elsewhere. The box is a constraint on the problem, not a result. Claiming the absence of an allosteric site from boxed docking is a tautology: you searched where you decided to search. If the question is the site, the box must allow alternatives, or you first run a site-finding method.",
        ),
      },
      {
        type: "callout",
        id: "l8-search-warn",
        kind: "warning",
        title: L("فشل البحث غير فشل الفيزياء", "A search failure is not a physics failure"),
        body: L(
          "هيئة بلورية بدرجة سيئة قد تعني: البحث لم يصل، أو الدالة تكره الهندسة الصحيحة، أو البروتونات خطأ، أو الماء المحذوف كان جزءاً من الفيزياء. لا تُصلح ذلك برفع exhaustiveness وحده.",
          "A crystal-like pose with a poor score can mean: the search never arrived, or the function dislikes the correct geometry, or protonation is wrong, or a deleted water was part of the physics. Raising exhaustiveness alone does not fix that.",
        ),
      },
      {
        type: "exercise",
        id: "l8-search-ex",
        prompt: L(
          "حصلت على هيئتين لليجند نفسه: RMSD بينهما 4 Å، والدرجتان متقاربتان. exhaustiveness = 8. ماذا تفعل قبل التفسير الكيميائي؟",
          "You obtain two poses of the same ligand: 4 Å RMSD apart, similar scores. Exhaustiveness = 8. What do you do before a chemical interpretation?",
        ),
        solution: L(
          "تعيد بمذور متعددة وexhaustiveness أعلى لتختبر استقرار البحث. تفحص هل الفرق دوران حلقة مقابل موقع ربط مختلف. تراجع الصندوق: هل يقطع إحدى الهيئتين؟ تقارن التفاعلات لا الأرقام. إن بقي الغموض، فالنتائج تعادل «الدالة لا تميّز» — وهذا نتيجة علمية، لا فشل يُخفى بانتقاء الهيئة الأجمَل.",
          "Rerun with multiple seeds and higher exhaustiveness to test search stability. Check whether the difference is a ring flip versus a different binding site. Revisit the box: does it clip one pose? Compare interactions, not numbers. If ambiguity remains, the result is “the function does not discriminate” — a scientific outcome, not a failure to hide by picking the prettier pose.",
        ),
      },
      {
        type: "steps",
        id: "l8-search-practice",
        title: L("ممارسة بحث مسؤولة", "Responsible search practice"),
        items: [
          {
            title: L("ثبّت البذرة وسجّلها", "Fix and record the seed"),
            body: L("إعادة الإنتاج تبدأ هنا، لا في لقطة الشاشة.", "Reproducibility starts here, not in a screenshot."),
          },
          {
            title: L("اختبر جهد البحث", "Test search effort"),
            body: L(
              "قارن هيئات عند جهد منخفض ومرتفع. تغيّر كبير يعني أنك لم تكن في نظام مستقر.",
              "Compare poses at low and high effort. A large change means you were not in a stable regime.",
            ),
          },
          {
            title: L("لا تُوسّع الصندوق بلا سبب ولا تُضيّقه لإجبار الإجابة", "Do not grow the box without reason, nor shrink it to force the answer"),
            body: L(
              "الصندوق فرضية مكانية. اكتب لماذا هذه الحدود.",
              "The box is a spatial hypothesis. Write down why those bounds.",
            ),
          },
        ],
      },
    ],
    ["l8-problem", "l8-vina", "l8-ad4", "l3-opt"],
  ),

  expand(
    "l8-scoring",
    [
      L(
        "تمييز أربع عائلات: force-field، empirical، knowledge-based، وML.",
        "Distinguish four families: force-field, empirical, knowledge-based, and ML.",
      ),
      L(
        "شرح أن الأوزان مُدرَّبة على بيانات محدودة، فالدالة تحمل انحياز مجموعة التدريب.",
        "Explain that weights are trained on limited data, so the function carries training-set bias.",
      ),
      L(
        "رفض معاملة الدرجة كطاقة قابلة للجمع مع ΔG تجريبي دون معايرة.",
        "Refuse to treat the score as an energy that can be added to an experimental ΔG without calibration.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l8-scoring-families",
        title: L("ماذا تعني «درجة»؟", "What is a “score”?"),
        body: L(
          "دالة scoring تُحوّل هيئة إلى رقم يُستخدم للترتيب. العائلات الأربع ليست مستويات دقة متصاعدة؛ هي افتراضات مختلفة. force-field: حدود vdW وكولوم وH-bond تشبه MM، وغالباً عقوبة torsion. empirical: مجموع ميزات فيزيائية (H-bond، سطح كاره للماء، عقوبة دوران) بأوزان مُلائَمة لبيانات ارتباط. knowledge-based: كمون متوسط القوة من إحصاء مسافات في معقدات بلورية. ML / CNN: دالة غير خطية تُدرَّب على هيئات و/أو نشاط. كلها تتجاهل معظم الإنتروبي، ومعظم الماء الصريح، والاستقطاب الحقيقي. لذلك تصلح لفرز خشن ولإعادة إنتاج هيئة أحياناً، لا لاستبدال قياس Kd.",
          "A scoring function maps a pose to a number used for ranking. The four families are not rungs of increasing accuracy; they are different assumptions. Force-field: vdW, Coulomb, H-bond terms resembling MM, often with a torsion penalty. Empirical: a sum of physical features (H-bonds, hydrophobic surface, rotatable-bond penalty) with weights fitted to binding data. Knowledge-based: potentials of mean force from distance statistics in crystal complexes. ML / CNN: a nonlinear function trained on poses and/or activity. All of them omit most of entropy, most explicit water, and true polarisation. They are fit for coarse ranking and sometimes pose recovery, not for replacing a Kd measurement.",
        ),
      },
      {
        type: "list",
        id: "l8-scoring-examples",
        title: L("أمثلة تعليمية لا حصر شامل", "Educational examples, not an exhaustive catalogue"),
        items: [
          L(
            "Force-field: دالة AutoDock4 (vdW، كولوم على مسافة بعيدة، H-bond اتجاهي، desolvation، عقوبة torsion).",
            "Force-field: the AutoDock4 function (vdW, distance-dependent Coulomb, directional H-bond, desolvation, torsion penalty).",
          ),
          L(
            "Empirical: Vina / Smina / ChemScore-like: غاوس للتجاذب، طرد، مصطلح hydrophobic، H-bond، عقوبة دوران.",
            "Empirical: Vina / Smina / ChemScore-like: Gaussian attraction, repulsion, a hydrophobic term, H-bonds, rotatable-bond penalty.",
          ),
          L(
            "Knowledge-based: PMF وDrugScore — إحصاء g(r) لأنواع ذرية، لا ديناميكا حرارية مشتقة من مسار.",
            "Knowledge-based: PMF and DrugScore — g(r) statistics for atom types, not thermodynamics derived from a trajectory.",
          ),
          L(
            "ML: Gnina CNN على كثافة ذرية ثلاثية الأبعاد. تتعلّم أنماطاً في المعقدات، وقد تتعلّم هيكلاً كيميائياً بدل فيزياء الجيب.",
            "ML: Gnina’s CNN on a 3D atomic density. It learns patterns in complexes, and may learn a chemical scaffold rather than pocket physics.",
          ),
        ],
      },
      {
        type: "compare",
        id: "l8-scoring-ff-emp",
        left: L("Force-field scoring", "Force-field scoring"),
        right: L("Empirical scoring", "Empirical scoring"),
        rows: [
          {
            dim: L("الأصل", "Origin"),
            a: L("حدود ميكانيكا جزيئية + أوزان.", "Molecular-mechanics terms + weights."),
            b: L("ميزات كيميائية طبية + انحدار على بيانات.", "Medicinal-chemistry features + regression on data."),
          },
          {
            dim: L("الحساسية للشحنة", "Charge sensitivity"),
            a: L("عالية. خطأ protonation يدمّر الترتيب.", "High. A protonation error wrecks ranking."),
            b: L("أقل مباشرة، لكن H-bond لا يزال يعتمد على المانح/المستقبل.", "Less direct, but H-bonds still depend on donor/acceptor assignment."),
          },
          {
            dim: L("قابلية التفسير", "Interpretability"),
            a: L("يمكن إرجاع المساهمة إلى vdW مقابل كولوم بحذر.", "Contributions can be traced to vdW versus Coulomb, cautiously."),
            b: L("الميزات مألوفة للكيميائي، والأوزان ليست ثوابت طبيعة.", "Features are familiar to chemists; weights are not constants of nature."),
          },
        ],
      },
      {
        type: "callout",
        id: "l8-scoring-edu",
        kind: "educational",
        title: L("ما تعنيه وحدة kcal/mol على الخرج", "What a kcal/mol unit on the output means"),
        body: L(
          "كثير من الدوال تُطبع بوحدات kcal/mol لأنها دُرّبت على ΔG تقريبي. هذا اختيار وحدات، لا اشتقاق ثرموديناميكي. فرق 1 kcal/mol في الدرجة ليس بالضرورة فرق 1 kcal/mol في ΔG التجريبي، ولا يُترجم إلى ~5 أضعاف في Kd دون معايرة على نفس السلسلة.",
          "Many functions print kcal/mol because they were trained on approximate ΔG values. That is a choice of units, not a thermodynamic derivation. A 1 kcal/mol gap in score is not necessarily a 1 kcal/mol gap in experimental ΔG, and does not convert into a ~5-fold Kd change without calibration on the same series.",
        ),
      },
      {
        type: "why",
        id: "l8-scoring-why",
        question: L(
          "لماذا تفشل الدالة في ترتيب مثبطات نانومولارية مقابل ميكرومولارية حتى عندما تكون الهيئة صحيحة؟",
          "Why can a function fail to rank nanomolar versus micromolar inhibitors even when the pose is correct?",
        ),
        answer: L(
          "لأن الترتيبيّة مسألة طاقة حرة نسبية صغيرة (فرق نانومولاري/ميكرومولاري ≈ 4 kcal/mol تقريباً)، بينما الدالة تُهمل الإنتروبي الاهتزازي، وشبكات الماء، والاستقطاب، وقد تُكافئ حجماً كارهًا للماء بإفراط. هيئة صحيحة تعني أن الحد الأدنى الهندسي وُجد؛ الترتيب يتطلّب أن تكون الدالة حسّاسة للفروق التي تُغيّر ΔG فعلاً. هذه حساسيّة نادراً ما تُضمن خارج سلسلة كيميائية ضيقة.",
          "Because ranking is a small relative free-energy problem (nanomolar versus micromolar is roughly 4 kcal/mol), while the function omits vibrational entropy, water networks, and polarisation, and may over-reward hydrophobic bulk. A correct pose means a geometric minimum was found; ranking requires the function to be sensitive to the differences that actually change ΔG. That sensitivity is rarely guaranteed outside a narrow chemical series.",
        ),
      },
      {
        type: "whatif",
        id: "l8-scoring-whatif",
        scenario: L(
          "ماذا لو أخذت متوسط عدة دوال (consensus scoring) لجزيئات متباعدة الهياكل؟",
          "What if you average several scoring functions (consensus scoring) for chemically dissimilar molecules?",
        ),
        consequence: L(
          "قد تُخفف ضجيج دالة واحدة، وقد تُضاعف انحيازاً مشتركاً (كل الدوال تحب الليجند الكبير في جيب كبير). consensus ليس نظرية تجميع بايزية إلا إذا كانت الأخطاء مستقلة — وهي ليست كذلك. استخدمه كمرشّح إضافي مع فحص بصري، لا كقاضي ΔG.",
          "You may damp the noise of one function, and you may amplify a shared bias (every function likes a large ligand in a large pocket). Consensus is not a Bayesian ensemble unless the errors are independent — and they are not. Use it as an extra filter with visual inspection, not as a ΔG referee.",
        ),
      },
      {
        type: "callout",
        id: "l8-scoring-lim",
        kind: "limitation",
        title: L("الدالة تحمل مجموعة تدريبها", "The function carries its training set"),
        body: L(
          "Empirical وML تتعلّمان ما رأت: معقدات كيناز، aspartyl protease، جيوب عميقة، ليغندات «دوائية». جيوب ضحلة، سكريات، معادن مفتوحة، تساهمية، وmacrocycles خارج التوزيع. لا تُعامِل نقل الدالة إلى عائلة جديدة كأمر مفروغ منه.",
          "Empirical and ML functions learn what they saw: kinase complexes, aspartyl proteases, deep pockets, “drug-like” ligands. Shallow pockets, sugars, open metals, covalency, and macrocycles sit off-distribution. Do not treat transfer to a new family as automatic.",
        ),
      },
      {
        type: "exercise",
        id: "l8-scoring-ex",
        prompt: L(
          "دالتان رتّبتا المكتبة نفسها. Spearman بين الترتيبين ضعيف، وكلاهما يُعيد هيئة المرجع بـ RMSD < 2 Å للنظام التجريبي. أيّة دعوى يمكنك الدفاع عنها؟",
          "Two functions ranked the same library. Spearman correlation between the rankings is weak, yet both recover the reference pose at RMSD < 2 Å on the experimental system. Which claim can you defend?",
        ),
        solution: L(
          "يمكنك الدفاع عن قدرة الاثنين على docking geometry في هذا النظام (pose prediction)، لا عن قدرة أي منهما على ترتيب النشاط (affinity ranking). ضعف الارتباط بين الترتيبين دليل أن «الدرجة» ليست كمية فيزيائية واحدة. الإثراء مقابل decoys يُختبر بمعزل، وبنشاط تجريبي إن وُجد.",
          "You can defend both as pose-prediction tools on this system, not either as an affinity-ranking tool. Weak rank correlation is evidence that “the score” is not one physical quantity. Enrichment versus decoys is a separate test, as is experimental activity if you have it.",
        ),
      },
      {
        type: "callout",
        id: "l8-scoring-warn",
        kind: "warning",
        title: L("لا تجمع درجات من برامج مختلفة", "Do not add scores from different programs"),
        body: L(
          "−9 في Vina و−11 في AutoDock4 ليسا على مقياس واحد. الصفر مختلف، والميزات مختلفة، والانحياز مختلف. الترتيب داخل برنامج واحد معنىً؛ طرح درجات عبر برامج ليس ΔΔG.",
          "−9 in Vina and −11 in AutoDock4 are not on one scale. The zero is different, the features are different, the bias is different. Ranking inside one program has meaning; subtracting scores across programs is not ΔΔG.",
        ),
      },
    ],
    ["l8-not-dg", "l8-vina", "l8-ad4", "l8-gnina", "l16-scoring"],
  ),

  expand(
    "l8-not-dg",
    [
      L(
        "النطق الصريح: docking score ≠ ΔG ≠ Kd ≠ IC50.",
        "State explicitly: docking score ≠ ΔG ≠ Kd ≠ IC50.",
      ),
      L(
        "عدّ ما تغفله الدرجة: الحالة الحرة، الإنتروبي، الماء، الاستقطاب، المعيار القياسي.",
        "List what the score omits: the free state, entropy, water, polarisation, and the standard state.",
      ),
      L(
        "كتابة جملة methods صادقة عن معنى الرقم.",
        "Write an honest Methods sentence about what the number means.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l8-notdg-core",
        title: L("الدرجة ليست طاقة ارتباط", "The score is not binding free energy"),
        body: L(
          "ΔG للارتباط كمية ثرموديناميكية تُقاس من اتزان بين حالة bound وحالة unbound، عند معيار قياسي (عادة 1 M تخيلي)، وتشمل إنثالبي وإتروبي المذيب والبروتين والليجند. docking score كمية هندسية-تجريبية لهيئة واحدة في جيب شبه جامد. لا حالة مرجعية صريحة، لا معاينة حرارية، لا حجم معياري. إن طبع البرنامج «kcal/mol» فذلك تسمية، لا اشتقاق. ورقة تكتب «طاقة الارتباط المتوقعة −9.2 kcal/mol إذن المركب مثبط قوي» تخلط ثلاث طبقات: (1) درجة، (2) ΔG، (3) نشاط في مقايسة. هذا الدرس موجود ليمنع تلك الجملة.",
          "Binding ΔG is a thermodynamic quantity measured from the equilibrium between bound and unbound states, at a standard state (usually a hypothetical 1 M), and it includes enthalpy and entropy of solvent, protein, and ligand. A docking score is a geometric–empirical quantity for one pose in a nearly rigid pocket. There is no explicit reference state, no thermal sampling, no standard-state volume. If the program prints “kcal/mol”, that is a label, not a derivation. A paper that writes “predicted binding energy −9.2 kcal/mol, therefore a potent inhibitor” collapses three layers: (1) a score, (2) ΔG, (3) assay activity. This lesson exists to forbid that sentence.",
        ),
      },
      {
        type: "list",
        id: "l8-notdg-omits",
        title: L("ما الذي تسقطه الدرجة عمداً أو عجزاً", "What the score drops, by design or by inability"),
        ordered: true,
        items: [
          L(
            "الحالة المنفصلة: ليغند مُذاب، بروتين متذبذب، شبكة ماء في الجيب الفارغ.",
            "The separated state: solvated ligand, fluctuating protein, water network in the empty pocket.",
          ),
          L(
            "إنتروبي الليجند (إعاقة دوران، اهتزاز) وإنتروبي البروتين (تقييد عرى).",
            "Ligand entropy (restricted rotors, vibration) and protein entropy (loop restriction).",
          ),
          L(
            "إنتروبي المذيب والأثر الكاره للماء كما يُقاسان، لا كسطح تجريبي موزن.",
            "Solvent entropy and the hydrophobic effect as measured, not as a weighted buried surface.",
          ),
          L(
            "المعيار القياسي والتركيز. ΔG يعتمد على تعريف 1 M؛ الدرجة لا تعرف التركيز.",
            "Standard state and concentration. ΔG depends on the 1 M definition; the score does not know concentration.",
          ),
          L(
            "الاستقطاب، شحنات متغيرة، ماء محبوس، معادن بمسافات دقيقة.",
            "Polarisation, variable charges, buried waters, metals at precise distances.",
          ),
        ],
      },
      {
        type: "callout",
        id: "l8-notdg-edu",
        kind: "educational",
        title: L("−9 kcal/mol ليست بطاقة دخول للنطاق النانومولاري", "−9 kcal/mol is not a ticket to the nanomolar club"),
        body: L(
          "عند 298 K، ΔG ≈ −9 kcal/mol يقابل Kd في نطاق ميكرومولاري منخفض إلى مئات النانومول — إن كان ΔG حقيقياً. درجة docking −9 قد تصف ليغنداً لا يرتبط أصلاً، أو يرتبط بمليمولار، لأن الدالة لا تشارك صفر الطاقة مع التجربة. لا تُحوّل الدرجة إلى Kd إلا بعد معايرة خطية منشورة على نفس الهدف ونفس البروتوكول — ونادراً ما تصمد المعايرة خارج السلسلة.",
          "At 298 K, a true ΔG ≈ −9 kcal/mol corresponds to a Kd in the low-micromolar to high-nanomolar range. A docking score of −9 may describe a ligand that does not bind at all, or binds at millimolar, because the function does not share an energy zero with experiment. Do not convert a score into a Kd unless a published linear calibration exists on the same target and protocol — and that calibration rarely survives outside the series.",
        ),
      },
      {
        type: "compare",
        id: "l8-notdg-table",
        left: L("Docking score", "Docking score"),
        right: L("ΔG التجريبي", "Experimental ΔG"),
        rows: [
          {
            dim: L("يُقاس من", "Measured from"),
            a: L("هيئة واحدة (أو بضع هيئات) داخل نموذج.", "One pose (or a few) inside a model."),
            b: L("اتزان تركيزات bound/unbound.", "Equilibrium of bound/unbound concentrations."),
          },
          {
            dim: L("المعيار القياسي", "Standard state"),
            a: L("غير معرّف.", "Undefined."),
            b: L("معرّف (مثلاً 1 M تخيلي).", "Defined (e.g. hypothetical 1 M)."),
          },
          {
            dim: L("الخطأ النموذجي", "Typical error"),
            a: L("أكبر من الفروق التي تهم التصميم داخل السلسلة.", "Larger than the differences that matter for design within a series."),
            b: L("يعتمد على المقايسة؛ يمكن أن يكون كسراً من kcal/mol.", "Assay-dependent; can be a fraction of a kcal/mol."),
          },
          {
            dim: L("الاستخدام المشروع", "Legitimate use"),
            a: L("ترتيب أولوية، فرضية هيئة، إثراء مقابل decoys.", "Prioritisation, pose hypothesis, enrichment versus decoys."),
            b: L("ثرموديناميكا الارتباط والقياس على التجربة.", "Binding thermodynamics and comparison to experiment."),
          },
        ],
      },
      {
        type: "why",
        id: "l8-notdg-why",
        question: L(
          "لماذا يُصرّ هذا المنهج على الجملة حتى بعد «نجاح» redocking؟",
          "Why does this curriculum insist on the sentence even after a “successful” redocking?",
        ),
        answer: L(
          "لأن redocking يختبر قدرة البحث+الدالة على إعادة هندسة معقدة معروف، لا قدرة الرقم على التنبؤ بالنشاط. يمكنك أن تُعيد هيئة indinavir بـ RMSD 1 Å وتحصل على درجة لا ترتبط بـ Ki عبر سلسلة مشتقات. النجاح الهندسي لا يمنح الدرجة وحدات طاقة حرة.",
          "Because redocking tests whether search+score can recover the geometry of a known complex, not whether the number predicts activity. You can recover the indinavir pose at 1 Å RMSD and still have a score that does not track Ki across a derivative series. Geometric success does not grant the score free-energy units.",
        ),
      },
      {
        type: "whatif",
        id: "l8-notdg-whatif",
        scenario: L(
          "ماذا لو حوّلت كل درجات المكتبة إلى «Kd متوقع» عبر ΔG = −RT ln K وملأت جدولاً في الورقة؟",
          "What if you convert every library score into a “predicted Kd” via ΔG = −RT ln K and put the table in the paper?",
        ),
        consequence: L(
          "تمنح أرقاماً كاذبة بدقة زائفة (ثلاث خانات لـ Kd من دالة لا تعرف الحالة الحرة). القراء — والمحكّمون — يقرأون ذلك كادّعاء كمي. إن أصررت على التحويل، فأنت تفترض أن الدرجة = ΔG المعياري، وهو افتراض مرفوض في هذا الدرس وفي أي مناقشة جدية.",
          "You attach false numbers with false precision (three significant figures of Kd from a function that does not know the free state). Readers — and referees — read that as a quantitative claim. If you insist on the conversion, you assume score = standard ΔG, which this lesson and any serious viva reject.",
        ),
      },
      {
        type: "callout",
        id: "l8-notdg-warn",
        kind: "warning",
        title: L("جملة تُرفض في المناقشة", "A sentence that fails a viva"),
        body: L(
          "«المركّب A أقوى من B لأن درجة Vina أكثر سلبية بـ 1.2 kcal/mol». الفرق ضمن ضجيج الدالة، والدرجة ليست ΔG، و«أقوى» كلمة دوائية تتطلّب مقايسة. الصيغة المقبولة: «A يُرتَّب أعلى من B حسب دالة Vina في هذا البروتوكول؛ يلزم قياس».",
          "“Compound A is more potent than B because the Vina score is 1.2 kcal/mol more negative.” The gap is within the noise of the function, the score is not ΔG, and “more potent” is a pharmacological word that requires an assay. Acceptable form: “A ranks above B by the Vina function in this protocol; measurement is required.”",
        ),
      },
      {
        type: "exercise",
        id: "l8-notdg-ex",
        prompt: L(
          "أعد كتابة هذه العبارة حتى تصبح دفاعية في methods: «حسبنا طاقة الارتباط الحرة بالالتحام الجزيئي وكانت −8.7 kcal/mol مما يدل على تثبيط قوي».",
          "Rewrite this sentence until it is defensible in Methods: “We calculated the binding free energy by molecular docking; it was −8.7 kcal/mol, indicating potent inhibition.”",
        ),
        solution: L(
          "مثال: «حسبنا درجة AutoDock Vina للهيئة الأعلى بعد بحث داخل صندوق الموقع التقويمي. بلغت الدرجة −8.7 (وحدات خرج البرنامج، ليست ΔG معيارياً). لا تُفسَّر الدرجة كقوة تثبيط؛ استُخدمت لترتيب الأولوية داخل هذه المكتبة بعد redocking للمرجع».",
          "Example: “We computed the AutoDock Vina score of the top pose after a search inside the orthosteric box. The score was −8.7 (program output units, not a standard-state ΔG). The score is not interpreted as inhibitory potency; it was used to prioritise within this library after redocking of the reference.”",
        ),
      },
      {
        type: "callout",
        id: "l8-notdg-hyp",
        kind: "hypothesis",
        title: L("متى يجوز ربط الدرجة بالنشاط؟", "When may a score be linked to activity?"),
        body: L(
          "كفرضية عمل داخل سلسلة ضيقة، بعد أن تُظهر أن الترتيب يوافق SAR لقياس موجود، مع الإعلان أن العلاقة ارتباطية في هذا النموذج لا عامة. حتى ذلك الحين، الدرجة فرضية ترتيب لا قياس.",
          "As a working hypothesis inside a narrow series, after you have shown that the ranking agrees with existing assay SAR, stating that the relationship is correlative in this model, not universal. Until then, the score is a ranking hypothesis, not a measurement.",
        ),
      },
    ],
    ["l8-affinity", "l8-scoring", "l8-validation", "l2-gibbs", "l23-docking-only"],
  ),

  expand(
    "l8-affinity",
    [
      L(
        "ربط ΔG بثابت الاتزان عبر ΔG = −RT ln K مع تعريف K.",
        "Connect ΔG to the equilibrium constant via ΔG = −RT ln K, with K defined.",
      ),
      L(
        "تمييز Kd وKi وIC50 من جهة ما تقيسه كل كمية.",
        "Distinguish Kd, Ki, and IC50 by what each quantity actually measures.",
      ),
      L(
        "رفض مساواة IC50 بدرجة docking أو بـ ΔG دون شروط المقايسة.",
        "Refuse to equate IC50 with a docking score or with ΔG without assay conditions.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l8-aff-defs",
        title: L("أربع كميات تُخلط في الجداول", "Four quantities that get mixed in tables"),
        body: L(
          "ΔG: تغيّر طاقة غيبس المعياري للارتباط، يُشتق من ثابت اتزان. Kd: ثابت تفكك الاتزان للمركّب (تركيز، وحدة molar). Ki: ثابت تثبيط يُستخرج من نموذج حركي (تنافسي وغيره) وقد يساوي Kd إن كان النموذج صحيحاً والآلية بسيطة. IC50: تركيز يُنتج 50% أثراً في مقايسة معيّنة — يعتمد على تركيز الإنزيم/المستقبل، وتركيز الركيزة، وزمن الحضانة، وآلية القراءة. docking score: لا واحدة من هذه. الخلط في جدول «affinity (kcal/mol)» يُخفي إن كان الرقم درجة، أو −RT ln Kd، أو تحويلاً غير مشروع من IC50.",
          "ΔG: the standard Gibbs energy change of binding, obtained from an equilibrium constant. Kd: the equilibrium dissociation constant of the complex (a concentration, molar units). Ki: an inhibition constant extracted from a kinetic model (competitive or otherwise); it may equal Kd if the model is right and the mechanism is simple. IC50: the concentration that yields 50% effect in a particular assay — it depends on enzyme/receptor concentration, substrate concentration, incubation time, and readout. A docking score is none of these. Mixing them in a table labelled “affinity (kcal/mol)” hides whether the number is a score, −RT ln Kd, or an illegitimate conversion from IC50.",
        ),
      },
      {
        type: "equation",
        id: "l8-aff-dgrtlnk",
        latex: "\\Delta G^{\\circ} = -RT \\ln K",
        name: L("الطاقة الحرة المعيارية والاتزان", "Standard free energy and equilibrium"),
        meaning: L(
          "ΔG° يُحدَّد بثابت الاتزان K عند درجة حرارة T، مع تعريف صريح للحالات المعيارية.",
          "ΔG° is fixed by the equilibrium constant K at temperature T, with an explicit standard-state definition.",
        ),
        variables: [
          {
            symbol: "\\Delta G^{\\circ}",
            name: L("تغيّر طاقة غيبس المعياري", "Standard Gibbs energy change"),
            unit: L("kcal mol⁻¹ أو kJ mol⁻¹", "kcal mol⁻¹ or kJ mol⁻¹"),
          },
          {
            symbol: "R",
            name: L("ثابت الغازات", "Gas constant"),
            unit: L("kcal mol⁻¹ K⁻¹", "kcal mol⁻¹ K⁻¹"),
          },
          {
            symbol: "T",
            name: L("درجة الحرارة المطلقة", "Absolute temperature"),
            unit: L("K", "K"),
          },
          {
            symbol: "K",
            name: L("ثابت الاتزان عديم الوحدة بعد المعيار (لارتباط 1:1، K = 1/Kd مع Kd بوحدات المعيار)", "Dimensionless equilibrium constant after standard-state reduction (for 1:1 binding, K = 1/Kd with Kd in standard-state units)"),
          },
        ],
        interpretation: L(
          "كل انخفاض في ΔG° بمقدار RT ln 10 يجعل K أكبر بعشر مرات. الإشارة السالبة: K أكبر يعني ارتباطاً أحق ثرموديناميكياً. المعادلة لا تعرف docking score ولا IC50.",
          "Each drop of RT ln 10 in ΔG° makes K ten-fold larger. The minus sign: larger K is thermodynamically more favourable binding. The equation does not know about docking scores or IC50.",
        ),
        application: L(
          "حوّل Kd مقيساً إلى ΔG°، أو العكس. لا تُدخل درجة Vina مكان ΔG°.",
          "Convert a measured Kd into ΔG°, or the reverse. Do not insert a Vina score in place of ΔG°.",
        ),
      },
      {
        type: "callout",
        id: "l8-aff-edu",
        kind: "educational",
        title: L("عشرة أضعاف في K ≈ 1.4 kcal/mol عند 298 K", "A ten-fold change in K ≈ 1.4 kcal/mol at 298 K"),
        body: L(
          "RT ln(10) ≈ 1.36 kcal/mol عند 298 K (غالباً تُقرَّب 1.4). خمسون ضعفاً ≈ 2.3 kcal/mol. نانومولار مقابل ميكرومولار = 10³ في K ≈ 4.1 kcal/mol. هذه أرقام ثرموديناميكا الارتباط الحقيقية. دالة docking نادراً ما تكون دقيقة ضمن 2 kcal/mol على سلسلة متنوعة، أي أنها قد تُخطئ ترتيب عشرات الأضعاف.",
          "RT ln(10) ≈ 1.36 kcal/mol at 298 K (often rounded to 1.4). Fifty-fold ≈ 2.3 kcal/mol. Nanomolar versus micromolar is 10³ in K ≈ 4.1 kcal/mol. These are numbers for true binding thermodynamics. A docking function is rarely accurate within 2 kcal/mol on a diverse series, meaning it can mis-rank by tens of fold.",
        ),
      },
      {
        type: "compare",
        id: "l8-aff-kd-ic50",
        left: L("Kd / Ki", "Kd / Ki"),
        right: L("IC50", "IC50"),
        rows: [
          {
            dim: L("التعريف", "Definition"),
            a: L("ثرموديناميكي أو حركي لنموذج ارتباط.", "Thermodynamic, or kinetic for a binding model."),
            b: L("تشغيلي: 50% أثر تحت شروط المقايسة.", "Operational: 50% effect under assay conditions."),
          },
          {
            dim: L("اعتماد الركيزة", "Substrate dependence"),
            a: L("Ki التنافسي يُصحَّح من IC50 عبر علاقة Cheng–Prusoff إذا انطبقت الفروض.", "Competitive Ki can be recovered from IC50 via Cheng–Prusoff if the assumptions hold."),
            b: L("يتغير مع [S]/Km ومع زمن القراءة.", "Shifts with [S]/Km and with readout time."),
          },
          {
            dim: L("المقارنة بين مختبرين", "Lab-to-lab comparison"),
            a: L("أصلح إن وُحّد النموذج.", "More comparable if the model is shared."),
            b: L("خطرة دون بروتوكول مطابق.", "Hazardous without a matching protocol."),
          },
          {
            dim: L("الربط بالـ docking", "Link to docking"),
            a: L("لا يزال غير مباشر: الهيئة ≠ الاتزان.", "Still indirect: pose ≠ equilibrium."),
            b: L("أبعد: المقايسة قد تقيس خطوة ليست الارتباط.", "Further still: the assay may report a step that is not binding."),
          },
        ],
      },
      {
        type: "equation",
        id: "l8-aff-htds",
        latex: "\\Delta G = \\Delta H - T\\Delta S",
        name: L("تجزئة غيبس", "Gibbs decomposition"),
        meaning: L(
          "ارتباط مواتٍ قد يكون إنثالبياً أو إنتروبيًا. الدرجة لا ترى هذا التجزؤ.",
          "Favourable binding may be enthalpic or entropic. The score does not see this split.",
        ),
        variables: [
          {
            symbol: "\\Delta H",
            name: L("تغيّر الإنثالبي", "Enthalpy change"),
            unit: L("kcal mol⁻¹", "kcal mol⁻¹"),
          },
          {
            symbol: "\\Delta S",
            name: L("تغيّر الإنتروبي", "Entropy change"),
            unit: L("kcal mol⁻¹ K⁻¹", "kcal mol⁻¹ K⁻¹"),
          },
          {
            symbol: "T",
            name: L("درجة الحرارة", "Temperature"),
            unit: L("K", "K"),
          },
        ],
        interpretation: L(
          "ليجند «ضعيف التفاعلات الظاهرة» قد يرتبط بسبب إطلاق ماء (إنتروبي). دالة scoring تُحصي H-bonds قد تُخطئه. ليغند كثير الروابط الهيدروجينية قد يدفع عقوبة إنتروبية لا تظهر في الدرجة.",
          "A ligand with “weak visible interactions” may bind because water is released (entropy). A scoring function that counts H-bonds may miss it. A ligand with many H-bonds may pay an entropic penalty the score never shows.",
        ),
        application: L(
          "عند قراءة ITC أو van ’t Hoff، لا تطلب من docking أن يُعيد ΔH وΔS. حتى MM/PBSA يفشل في الإنتروبي غالباً.",
          "When reading ITC or van ’t Hoff, do not ask docking to reproduce ΔH and ΔS. Even MM/PBSA usually fails on entropy.",
        ),
      },
      {
        type: "why",
        id: "l8-aff-why",
        question: L(
          "لماذا لا يجوز ملء عمود «IC50 predicted» من درجة الالتحام في ورقة فرز؟",
          "Why must a virtual-screening paper not fill a column “predicted IC50” from the docking score?",
        ),
        answer: L(
          "لأن التحويل يتطلّب (1) الدرجة = ΔG°، وهو باطل، (2) ΔG° ↔ Kd لارتباط 1:1 في اتزان، (3) Kd = IC50، وهو باطل دون شروط Cheng–Prusoff ومقايسة ارتباط لا مقايسة وظيفية معقّدة. ثلاثة فروض خاطئة لا تُنتج عموداً علمياً. اترك IC50 للمقايسة.",
          "Because the conversion requires (1) score = ΔG°, which is false, (2) ΔG° ↔ Kd for 1:1 equilibrium binding, and (3) Kd = IC50, which is false without Cheng–Prusoff conditions and a binding assay rather than a complex functional assay. Three false assumptions do not make a scientific column. Leave IC50 to the assay.",
        ),
      },
      {
        type: "whatif",
        id: "l8-aff-whatif",
        scenario: L(
          "ماذا لو كان IC50 = 50 nM في مقايسة خلوية ودرجة docking سيئة، فحذفت المركب من المناقشة؟",
          "What if IC50 = 50 nM in a cellular assay and the docking score is poor, so you drop the compound from the discussion?",
        ),
        consequence: L(
          "قد تكون المقايسة الخلوية غير مباشرة (off-target، تراكّم، مستقلَب نشط)، أو الهيئة خاطئة والموقع خاطئ، أو الدالة تكره كيمياء نشطة. لا تُسقط قياساً لصالح درجة. اعكس السؤال: إن صحّ النشاط، فالـ docking فشل في تفسيره — وهذا أعقد وأهم من هيئة جميلة لمركّب غير مقيس.",
          "The cellular assay may be indirect (off-target, accumulation, an active metabolite), or the pose and site may be wrong, or the function may dislike active chemistry. Do not discard a measurement in favour of a score. Invert the question: if the activity is real, docking failed to explain it — which is harder and more important than a pretty pose of an unmeasured compound.",
        ),
      },
      {
        type: "callout",
        id: "l8-aff-warn",
        kind: "warning",
        title: L("Ki ليس IC50، وKd ليس koff", "Ki is not IC50, and Kd is not koff"),
        body: L(
          "الإقامة الزمنية (residence time) تابعة لـ koff. مركّبان بنفس Kd قد يختلفا في الحركية. docking لا يعرف koff. لا تدّعِ انتقائية حركية أو إقامة طويلة من هيئة.",
          "Residence time tracks koff. Two compounds with the same Kd can differ in kinetics. Docking does not know koff. Do not claim kinetic selectivity or long residence from a pose.",
        ),
      },
      {
        type: "exercise",
        id: "l8-aff-ex",
        prompt: L(
          "Kd = 100 nM عند 298 K لارتباط 1:1. احسب ΔG° تقريباً بالكيلو كالوري/مول، ثم اشرح لماذا لا تتوقع أن تُساوي درجة Vina هذه القيمة.",
          "Kd = 100 nM at 298 K for 1:1 binding. Estimate ΔG° in kcal/mol, then explain why you should not expect a Vina score to equal that value.",
        ),
        solution: L(
          "K = 1/Kd مع Kd = 10⁻⁷ M بالنسبة لمعيار 1 M، إذن ln K = ln(10⁷) ≈ 16.12، RT ≈ 0.592 kcal/mol، ΔG° ≈ −9.5 kcal/mol. درجة Vina قد تكون −7 أو −11 لنفس المركب حسب البروتونات والصندوق والنسخة؛ صفرها ليس صفر ΔG°، وهيئة واحدة ليست اتزاناً.",
          "K = 1/Kd with Kd = 10⁻⁷ M relative to a 1 M standard, so ln K = ln(10⁷) ≈ 16.12, RT ≈ 0.592 kcal/mol, ΔG° ≈ −9.5 kcal/mol. A Vina score might be −7 or −11 for the same compound depending on protonation, box, and version; its zero is not the ΔG° zero, and one pose is not an equilibrium.",
        ),
      },
    ],
    ["l8-not-dg", "l2-gibbs", "l2-kinetics", "l10-dg"],
  ),

  expand(
    "l8-vina",
    [
      L(
        "تشغيل بروتوكول Vina من التحضير إلى قراءة الهيئات دون ادّعاء ΔG.",
        "Run a Vina protocol from preparation to pose reading without claiming ΔG.",
      ),
      L(
        "تفسير exhaustiveness كجهد بحث لا كضمان حد شامل.",
        "Interpret exhaustiveness as search effort, not as a global-minimum guarantee.",
      ),
      L(
        "تشخيص أخطاء الملفات والصندوق والبروتونات من أعراض الخرج.",
        "Diagnose file, box, and protonation errors from output symptoms.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l8-vina-intro",
        title: L("ماذا يفعل AutoDock Vina؟", "What does AutoDock Vina do?"),
        body: L(
          "Vina يبحث بـ iterated local search في صندوق إحداثي، ويُقيّم بدالة empirical (تجاذب غاوسي، طرد، hydrophobic، H-bond، عقوبة روابط قابلة للدوران). الدخل PDBQT: شحنات جزئية وأنواع AutoDock وtorsion شجرة. الخرج هيئات مرتّبة حسب الدرجة. النجاح التشغيلي: هيئة معقولة كيميائياً قابلة للفحص. الفشل الشائع: تحضير سيئ يُنتج درجة «ممتازة» لهندسة مستحيلة، أو صندوق يقطع الجيب.",
          "Vina searches with iterated local search in a coordinate box and scores with an empirical function (Gaussian attraction, repulsion, hydrophobic, H-bond, rotatable-bond penalty). Input is PDBQT: partial charges, AutoDock atom types, and a torsion tree. Output is poses ranked by score. Operational success: a chemically reasonable pose you can inspect. Common failure: bad preparation yielding an “excellent” score for impossible geometry, or a box that clips the pocket.",
        ),
      },
      {
        type: "steps",
        id: "l8-vina-prep",
        title: L("التحضير قبل الأمر", "Preparation before the command"),
        items: [
          {
            title: L("المستقبل", "Receptor"),
            body: L(
              "أزل الليجند المرجعي إن كنت تختبر قدرة إعادة الإيجاد، أبقِ الماء/المعدن فقط إن كانت جزءاً من الفيزياء، عيّن protonation عند pH الجيب، أضف الهيدروجين، واكتب PDBQT.",
              "Remove the reference ligand if you are testing recovery, keep water/metal only if they are part of the physics, assign protonation at pocket pH, add hydrogens, write PDBQT.",
            ),
          },
          {
            title: L("الليجند", "Ligand"),
            body: L(
              "بنية ثلاثية الأبعاد معقدة التكافؤ، tautomer وprotonation صريحان، روابط قابلة للدوران معرّفة في PDBQT. لا تستخدم هيئة ثنائية الأبعاد «مرفوعة» عشوائياً دون فحص.",
              "A 3D structure with correct valence, explicit tautomer and protonation, rotatable bonds defined in PDBQT. Do not use a 2D sketch “lifted” at random without inspection.",
            ),
          },
          {
            title: L("الصندوق", "The box"),
            body: L(
              "مركز الجيب وأبعاد تغطي الموقع دون ابتلاع نصف البروتين. center وsize قرار علمي يُوثَّق بإحداثيات.",
              "Pocket centre and extents that cover the site without swallowing half the protein. Centre and size are a scientific decision documented with coordinates.",
            ),
          },
        ],
      },
      {
        type: "command",
        id: "l8-vina-cmd",
        command:
          "vina --receptor receptor.pdbqt --ligand ligand.pdbqt --center_x CX --center_y CY --center_z CZ --size_x SX --size_y SY --size_z SZ --exhaustiveness 8",
        purpose: L(
          "بحث هيئة الليجند داخل صندوق المستقبل وتقييمها بدالة Vina.",
          "Search ligand poses inside the receptor box and score them with the Vina function.",
        ),
        input: L(
          "receptor.pdbqt وligand.pdbqt، وإحداثيات المركز والأبعاد بوحدة Å، وجهد البحث.",
          "receptor.pdbqt and ligand.pdbqt, box centre and size in Å, and search effort.",
        ),
        output: L(
          "ملف هيئات PDBQT مرتّبة، وجدول درجات في stdout أو ملف log.",
          "A ranked PDBQT pose file, and a score table on stdout or in a log file.",
        ),
        meaning: L(
          "كل هيئة حد أدنى محلي للدالة بعد جهد تُحدده exhaustiveness. الترتيب ترتيب دالة، لا ترتيب Kd.",
          "Each pose is a local minimum of the function after effort set by exhaustiveness. The ranking is the function’s ranking, not a Kd ranking.",
        ),
        errors: L(
          "ملف PDBQT ناقص أنواع/شحنات، مركز خارج الجيب، size صغير يقطع الليجند، أو مستقبل بلا هيدروجين حيث تتوقع الدالة H-bond.",
          "PDBQT missing types/charges, centre outside the pocket, size so small it clips the ligand, or a receptor without hydrogens where the function expects H-bonds.",
        ),
      },
      {
        type: "callout",
        id: "l8-vina-exh",
        kind: "limitation",
        title: L("exhaustiveness يتحكم بالجهد فقط", "Exhaustiveness controls effort only"),
        body: L(
          "القيمة الافتراضية الشائعة 8 تُزيد عن قيم أصغر في احتمال إيجاد حد أفضل حسب الدالة. رفعها إلى 16 أو 32 يكلّف وقتاً ولا يضمن الحد الشامل، ولا يُصلح protonation، ولا يوسّع صندوقاً خاطئاً. إن تغيّرت الهيئة جذرياً برفع الجهد، فالنتيجة كانت غير مستقرة بحثياً — أعد قبل التفسير.",
          "The common default 8 already improves, relative to smaller values, the chance of finding a better minimum of the function. Raising it to 16 or 32 costs time and does not guarantee the global minimum, does not fix protonation, and does not enlarge a wrong box. If the pose changes drastically when effort is raised, the result was search-unstable — rerun before interpreting.",
        ),
      },
      {
        type: "why",
        id: "l8-vina-why",
        question: L(
          "لماذا PDBQT وليس PDB؟",
          "Why PDBQT rather than PDB?",
        ),
        answer: L(
          "PDBQT يحمل أنواع AutoDock، الشحنات الجزئية، وشجرة torsion (TORSDOF / فرع الروابط القابلة للدوران). PDB قياسي لا يخبر Vina ما الذي يدور وما شحنة كل ذرة حسب نموذج الدالة. تحويل صامت من PDB دون فحص الأنواع يُنتج بحثاً على جزيء خطأ كيميائياً.",
          "PDBQT carries AutoDock atom types, partial charges, and the torsion tree (TORSDOF / rotatable-bond branching). Standard PDB does not tell Vina what rotates and what charge each atom has under the function’s model. A silent PDB conversion without inspecting types searches a chemically wrong molecule.",
        ),
      },
      {
        type: "whatif",
        id: "l8-vina-whatif",
        scenario: L(
          "ماذا لو كان center_x/y/z مركز هندسي للبروتين كله وsize_x = 40 Å «حتى لا نفوت الموقع»؟",
          "What if center_x/y/z is the geometric centre of the whole protein and size_x = 40 Å “so we do not miss the site”?",
        ),
        consequence: L(
          "تُوسّع فضاء البحث إلى سطح البروتين، فتجد أودية scoring في تجاويف غير ذات صلة، وتُضعف كثافة المعاينة في الجيب الحقيقي. الصندوق الكبير ليس حياداً؛ هو تخفيف لجهد البحث لكل أومستروم مكعب. حدّد الموقع بدليل بنيوي أو كاشف جيوب، لا بهندسة شاملة.",
          "You expand search space onto the protein surface, so the function finds score valleys in irrelevant clefts, and you dilute sampling density in the true pocket. A large box is not neutral; it thins search effort per cubic ångström. Define the site with structural evidence or a pocket finder, not with a global centroid.",
        ),
      },
      {
        type: "callout",
        id: "l8-vina-warn",
        kind: "warning",
        title: L("أعلى هيئة ليست «الهيئة»", "The top pose is not “the pose”"),
        body: L(
          "افحص عدداً من الهيئات المتمايزة (لا نسخ RMSD شبه صفر). Vina قد يضع ليغنداً متماثلاً في اتجاهين بدرجة متقاربة. اختيار الأعلى دائماً بلا عين يُثبّت خطأ كيميائياً في كل الأشكال اللاحقة.",
          "Inspect several distinct poses (not near-zero-RMSD duplicates). Vina may place a symmetric ligand in two orientations at similar scores. Always taking the top pose without eyes locks a chemical error into every later figure.",
        ),
      },
      {
        type: "exercise",
        id: "l8-vina-ex",
        prompt: L(
          "redocking لمرجع بلوري: RMSD للهيئة الأولى 6 Å، وللهيئة الثالثة 1.2 Å، وفرق الدرجة 0.3. exhaustiveness = 8. ما تقريرك؟",
          "Redocking a crystal reference: pose 1 has RMSD 6 Å, pose 3 has RMSD 1.2 Å, score gap 0.3. Exhaustiveness = 8. What is your report?",
        ),
        solution: L(
          "البحث وجد الهندسة الصحيحة لكنها ليست أعلى درجة. الدالة لا تميّز بما يكفي، أو الجهد غير كافٍ لاستقرار الترتيب. أعد ببذور وجهد أعلى، افحص البروتونات والماء، ولا تعلن فشل docking ولا نجاحه من الهيئة الأولى وحدها. اكتب أن الاستعادة ممكنة ضمن نافذة scoring ضيقة.",
          "Search found the correct geometry, but it is not the top score. The function lacks discrimination, or effort is insufficient for a stable ranking. Rerun with more seeds and effort, inspect protonation and water, and declare neither docking failure nor success from pose 1 alone. Report that recovery is possible within a thin scoring window.",
        ),
      },
      {
        type: "list",
        id: "l8-vina-read",
        title: L("قراءة الخرج", "Reading the output"),
        items: [
          L(
            "الدرجة: لترتيب داخلي. لا تُحوَّل إلى Kd.",
            "Score: for internal ranking. Do not convert to Kd.",
          ),
          L(
            "RMSD من الهيئة الأولى في جدول Vina هو تباعد عن أفضل هيئة في ذلك التشغيل، لا عن البلورة، ما لم تحسبه أنت.",
            "RMSD relative to pose 1 in Vina’s table is distance from that run’s best pose, not from the crystal, unless you compute that yourself.",
          ),
          L(
            "هيئات متطابقة كيميائياً بفرق دوران ميثيل: ليست اكتشافاً لتنوّع.",
            "Chemically identical poses that differ by a methyl rotation are not a diversity finding.",
          ),
        ],
      },
    ],
    ["l8-search", "l8-scoring", "l8-ad4", "l8-validation", "l8-failures"],
  ),

  expand(
    "l8-ad4",
    [
      L(
        "شرح بنية AutoDock4: خرائط grid + بحث جيني Lamarckian + دالة force-field موزنَة.",
        "Explain AutoDock4’s architecture: grid maps + Lamarckian genetic search + a weighted force-field function.",
      ),
      L(
        "تمييز خريطة النوع الذري عن صندوق Vina.",
        "Distinguish an atom-type grid map from Vina’s box.",
      ),
      L(
        "معرفة متى تختلف النتيجة عن Vina ولماذا ليس ذلك «تحسيناً» تلقائياً.",
        "Know when results differ from Vina and why that is not automatically an improvement.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l8-ad4-arch",
        title: L("معمارية مختلفة لا نسخة أقدم فقط", "A different architecture, not merely an older version"),
        body: L(
          "AutoDock4 يبني خرائط طاقة ثلاثية الأبعاد لكل نوع ذري في الليجند (وللكهروستاتيك وdesolvation) على شبكة حول الجيب، ثم يبحث بـ Lamarckian genetic algorithm: جماعة هيئات، تقاطع وطفرات، وتحسين محلي يُمرَّر إلى الجيل التالي. الدالة تجمع vdW، كولوم مسافي الاعتماد، H-bond اتجاهي، desolvation، وعقوبة torsion. التقييم أثناء البحث قراءة من الخرائط لا حساب أزواج كامل في كل خطوة — لذلك حجم الشبكة وتباعدها قرار فيزيائي: خشونة زائدة تُضيّع الحد الأدنى، ونعومة زائدة تكلف ذاكرة دون فائدة إن كان الجيب واسعاً بلا داعٍ.",
          "AutoDock4 builds 3D energy maps for each ligand atom type (plus electrostatics and desolvation) on a grid around the pocket, then searches with a Lamarckian genetic algorithm: a population of poses, crossover and mutation, and a local optimisation inherited by the next generation. The function combines vdW, distance-dependent Coulomb, directional H-bond, desolvation, and a torsion penalty. During search, evaluation is a grid lookup rather than a full pairwise calculation at every step — so grid extent and spacing are physical decisions: too coarse and minima are lost; too fine wastes memory if the pocket was made needlessly large.",
        ),
      },
      {
        type: "steps",
        id: "l8-ad4-flow",
        title: L("تسلسل تشغيلي مفهومي", "Conceptual operating sequence"),
        items: [
          {
            title: L("PDBQT للمستقبل والليجند", "PDBQT for receptor and ligand"),
            body: L(
              "أنواع AD4 والشحنات جزء من الدالة، لا تجميل ملف.",
              "AD4 types and charges are part of the function, not file decoration.",
            ),
          },
          {
            title: L("خرائط الشبكة", "Grid maps"),
            body: L(
              "مركز، عدد النقاط، وتباعد. كل نوع ذري في الليجند يحتاج خريطة. نوع ناقص يعني تفاعلاً بلا كمون.",
              "Centre, number of points, spacing. Each ligand atom type needs a map. A missing type means an interaction without a potential.",
            ),
          },
          {
            title: L("البحث الجيني", "Genetic search"),
            body: L(
              "حجم الجماعة وعدد التقييمات يحدّان جهد البحث، كما exhaustiveness في Vina، دون ضمان شامل.",
              "Population size and number of evaluations bound search effort, as exhaustiveness does in Vina, without a global guarantee.",
            ),
          },
          {
            title: L("تجميع الهيئات", "Clustering poses"),
            body: L(
              "AD4 يُجمّع غالباً بعتبة RMSD. العنقود الأكبر ليس بالضرورة الأصح كيمياء.",
              "AD4 often clusters by an RMSD cutoff. The largest cluster is not necessarily the chemically correct one.",
            ),
          },
        ],
      },
      {
        type: "compare",
        id: "l8-ad4-vs-vina",
        left: L("AutoDock4", "AutoDock4"),
        right: L("AutoDock Vina", "AutoDock Vina"),
        rows: [
          {
            dim: L("التقييم أثناء البحث", "Evaluation during search"),
            a: L("خرائط grid لكل نوع.", "Per-type grid maps."),
            b: L("حساب مباشر داخل الصندوق.", "Direct evaluation inside the box."),
          },
          {
            dim: L("البحث", "Search"),
            a: L("Lamarckian GA.", "Lamarckian GA."),
            b: L("Iterated local search.", "Iterated local search."),
          },
          {
            dim: L("الدالة", "Function"),
            a: L("Force-field موزن + desolvation + torsion.", "Weighted force-field + desolvation + torsion."),
            b: L("Empirical (غاوس، طرد، hydrophobic، H-bond).", "Empirical (Gaussian, repulsion, hydrophobic, H-bond)."),
          },
          {
            dim: L("الشحنة", "Charge"),
            a: L("كولوم صريح نسبياً — حساس للبروتونات.", "Comparatively explicit Coulomb — protonation-sensitive."),
            b: L("الشحنة أقل ظهوراً؛ H-bond أنواع.", "Charge less explicit; H-bonds are typed."),
          },
        ],
      },
      {
        type: "why",
        id: "l8-ad4-why",
        question: L(
          "لماذا قد يُفضَّل AD4 تعليمياً لجيب مشحون أو معدني رغم أن Vina أسرع؟",
          "Why might AD4 be preferred, educationally, for a charged or metal-containing pocket even though Vina is faster?",
        ),
        answer: L(
          "لأن كولوم في AD4 جزء صريح من الدالة على الخريطة الكهروستاتيكية. هذا لا يجعله صحيحاً للمعادن (نموذج النقطة الشحنية فقير للتناسق)، لكنه يجعل خطأ الشحنة مرئياً. Vina قد يُخفي المشكلة خلف مصطلح H-bond. الأفضل في المعادن ليس AD4 تلقائياً؛ الأفضل الاعتراف بقصور الاثنين والنظر إلى نماذج متخصصة أو QM/MM لاحقاً.",
          "Because Coulomb in AD4 is an explicit part of the function via the electrostatic map. That does not make it correct for metals (a point-charge model is a poor coordination model), but it makes a charge error visible. Vina may hide the problem behind an H-bond term. The best tool for metals is not automatically AD4; the best move is to admit both are limited and later consider specialised models or QM/MM.",
        ),
      },
      {
        type: "whatif",
        id: "l8-ad4-whatif",
        scenario: L(
          "ماذا لو كانت خريطة نوع ذري ناقصة لأن الليجند يحتوي بروم ولم تُبنَ خريطة Br؟",
          "What if an atom-type map is missing because the ligand contains bromine and no Br map was built?",
        ),
        consequence: L(
          "ذرات البروم لا تُقيَّم على الشبكة كما يُفترض، فإما يفشل التشغيل أو يُحسب تفاعل ناقص كأن الهالوجين شبح. هذا فشل تحضير، لا فشل «الدواء». افحص قائمة الأنواع في PDBQT مقابل ملفات الخرائط قبل تفسير أي هيئة.",
          "Bromine atoms are not evaluated on the grid as intended, so the run fails or the interaction is computed as if the halogen were a ghost. That is a preparation failure, not a “drug” failure. Check the PDBQT type list against the map files before interpreting any pose.",
        ),
      },
      {
        type: "callout",
        id: "l8-ad4-warn",
        kind: "warning",
        title: L("التباعد الخشن يُنشئ حدّاً أدنى مزيفاً", "Coarse spacing creates a fake minimum"),
        body: L(
          "شبكة خشنة تُنمذج الجيب كدرج. الليجند يجلس على نقطة مواتية رقمياً بعيداً عن هندسة H-bond الحقيقية. لا تُفسّر هيئة AD4 قبل أن تعرف spacing وعدد النقاط. إعادة البناء بأدق شبكة اختبار تحكّم، لا رفاهية.",
          "A coarse grid represents the pocket as a staircase. The ligand sits on a numerically favourable node away from true H-bond geometry. Do not interpret an AD4 pose before you know spacing and point counts. Rebuilding on a finer grid is a control experiment, not a luxury.",
        ),
      },
      {
        type: "callout",
        id: "l8-ad4-lim",
        kind: "limitation",
        title: L("العنقود الأكبر ليس تصويتاً فيزيائياً", "The largest cluster is not a physical vote"),
        body: L(
          "كثرة هيئات في عنقود RMSD تعني أن البحث زار وادياً مراراً. قد يكون الوادي واسعاً وخطأ (سطح كاره للماء)، بينما الهيئة الصحيحة أضيق. استخدم العنقود كمؤشر قابلية إيجاد، لا كاحتمال ثرموديناميكي.",
          "Many poses in an RMSD cluster mean the search visited a valley repeatedly. The valley may be wide and wrong (a hydrophobic surface), while the correct pose is narrower. Treat the cluster as a findability indicator, not as a thermodynamic probability.",
        ),
      },
      {
        type: "exercise",
        id: "l8-ad4-ex",
        prompt: L(
          "نفس الليجند: Vina يُعيد الهيئة البلورية، AD4 يضع مجموعة مشحونة نحو المذيب بدرجة أفضل داخلياً. كيف تُفكّك التعارض دون إعلان فائز؟",
          "Same ligand: Vina recovers the crystal pose, AD4 points a charged group toward solvent with a better internal score. How do you dissect the conflict without declaring a winner?",
        ),
        solution: L(
          "افحص الشحنات وpKa: هل AD4 يُعاقب دفناً لجماعة مؤيَّنة خطأ؟ هل خريطة desolvation مُبالِغة؟ هل Vina يتجاهل الكولوم؟ قارن المسافات مع البلورة لا الدرجتين. التعارض نتيجة دالتين مختلفتين؛ قد تكون البلورة أيضاً هيئة شائعة لا وحيدة. لا «متوسط الدرجات». وثّق الفرضيات الكيميائية (protonation) وأعد بعد تصحيحها.",
          "Inspect charges and pKa: is AD4 penalising burial of a wrongly ionised group? Is the desolvation map exaggerated? Is Vina ignoring Coulomb? Compare distances to the crystal, not the two scores. The conflict is two different functions; the crystal may also be a populated pose, not a unique one. Do not average the scores. Document chemical hypotheses (protonation) and rerun after correcting them.",
        ),
      },
    ],
    ["l8-vina", "l8-scoring", "l8-failures", "l6-coulomb"],
  ),

  expand(
    "l8-gnina",
    [
      L(
        "وضع Smina كامتداد empirical لـ Vina، وGnina كطبقة CNN فوق بحث مشابه.",
        "Place Smina as an empirical extension of Vina, and Gnina as a CNN layer on similar search.",
      ),
      L(
        "تمييز CNN pose score عن affinity score وعن درجة Vina.",
        "Distinguish CNN pose score from affinity score and from a Vina score.",
      ),
      L(
        "التحذير من تعلّم الهيكل بدل فيزياء الجيب.",
        "Warn that the network may learn a scaffold rather than pocket physics.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l8-gnina-place",
        title: L("من Vina إلى CNN", "From Vina to a CNN"),
        body: L(
          "Smina فرع من Vina يفتح الدالة empirical للتخصيص (بما في ذلك دوال مثل Vinardo) مع بحث مشابه. Gnina يبني على هذا المسار ويُقيّم الهيئات بشبكة طيّ ثلاثية الأبعاد على تمثيل كثافة ذرية للمعقد. الناتج عملياً أكثر من رقم: درجة دالّة كلاسيكية، وCNN pose score (هل الهيئة تشبه معقدات التدريب هندسياً؟)، وأحياناً تقدير «affinity» متعلَّم. هذه ليست ثلاثة قياسات لـ ΔG؛ هي ثلاث نظرات لنموذج. الخطر الخاص بـ ML: الشبكة قد تتعرّف على كيمياء رأتها في PDB (كيناز + quinazoline) وتُكافئها حتى في جيب لا يدعم التفاعل.",
          "Smina is a Vina fork that exposes the empirical function for customisation (including functions such as Vinardo) with similar search. Gnina builds on that path and scores poses with a 3D convolutional network on an atomic-density representation of the complex. In practice you get more than one number: a classical function score, a CNN pose score (does the pose resemble training complexes geometrically?), and sometimes a learned “affinity” estimate. These are not three measurements of ΔG; they are three views of a model. The ML-specific risk: the net may recognise chemistry it saw in the PDB (kinase + quinazoline) and reward it even in a pocket that does not support the interaction.",
        ),
      },
      {
        type: "compare",
        id: "l8-gnina-vs-smina",
        left: L("Smina / empirical", "Smina / empirical"),
        right: L("Gnina CNN", "Gnina CNN"),
        rows: [
          {
            dim: L("الشكل", "Form"),
            a: L("مجموع ميزات موزونة يقرأها الكيميائي.", "A weighted feature sum a chemist can read."),
            b: L("دالة غير خطية على خريطة كثافة.", "A nonlinear function of a density map."),
          },
          {
            dim: L("الفشل الصريح", "Obvious failure"),
            a: L("H-bond مستحيل يظهر في الهندسة إن نظرت.", "An impossible H-bond shows in the geometry if you look."),
            b: L("درجة عالية لهيئة «تشبه التدريب» بلا تفاعل حقيقي.", "A high score for a pose that “looks like training” without a real interaction."),
          },
          {
            dim: L("خارج التوزيع", "Out of distribution"),
            a: L("ينهار بلطف عبر أوزان لا تناسب العائلة.", "Fails somewhat gracefully via weights that do not fit the family."),
            b: L("قد ينهار بثقة عالية.", "May fail with high confidence."),
          },
        ],
      },
      {
        type: "callout",
        id: "l8-gnina-lim",
        kind: "limitation",
        title: L("CNN pose score ليس RMSD وليس ΔG", "CNN pose score is neither RMSD nor ΔG"),
        body: L(
          "pose score يقارب: «هل هذه الخريطة تشبه معقدات صحيحة؟». يمكن أن يكون عالياً لهيئة قريبة من بلورات التدريب ومهندسة خطأ في هدفك. affinity المتعلّم يرتبط ببيانات نشاط ملوّثة بالهيكل والانحياز المختبري. لا يستبدل redocking ولا مقايسة.",
          "Pose score approximates: “does this map look like correct complexes?” It can be high for a pose close to training crystals and geometrically wrong in your target. Learned affinity tracks activity data contaminated by scaffold and laboratory bias. It replaces neither redocking nor an assay.",
        ),
      },
      {
        type: "viewer",
        id: "l8-gnina-2ity",
        pdb: "2ITY",
        ligand: "IRE",
        caption: L(
          "2ITY: EGFR مع gefitinib (IRE). كيمياء quinazoline مألوفة جداً لشبكات دُرّبت على PDB. درجة CNN عالية هنا لا تُعمَّم تلقائياً على هدف غير كيناز بنفس الهيكل.",
          "2ITY: EGFR with gefitinib (IRE). Quinazoline chemistry is very familiar to networks trained on the PDB. A high CNN score here does not automatically transfer to a non-kinase target with the same scaffold.",
        ),
      },
      {
        type: "why",
        id: "l8-gnina-why",
        question: L(
          "لماذا لا يكفي أن «CNN أدق في معيار عام» لتبنّيها على هدفك؟",
          "Why is “the CNN is more accurate on a public benchmark” not enough to adopt it on your target?",
        ),
        answer: L(
          "المعايير العامة تُعيد توزيع معقدات PDB: نفس العائلات، نفس الانحياز. هدفك قد يكون خارج ذلك التوزيع (موقع تفارغي جديد، ليغند مشحون جداً، معدن). الدقة المتوسطة على معيار ليست دقة شرطية على عائلتك. تحتاج redocking محلي، ويفضّل actives/decoys من نفس الهدف إن وُجدت.",
          "Public benchmarks reshuffle PDB complexes: the same families, the same bias. Your target may lie off that distribution (a new allosteric site, a highly charged ligand, a metal). Average benchmark accuracy is not accuracy conditional on your family. You need local redocking, and preferably actives/decoys from the same target if they exist.",
        ),
      },
      {
        type: "whatif",
        id: "l8-gnina-whatif",
        scenario: L(
          "ماذا لو رتّبت المكتبة بـ CNN affinity واكتشفت أن أعلى 50 مركباً كلها نفس الـ scaffold الموجود بكثرة في PDB؟",
          "What if you rank the library by CNN affinity and find that the top 50 compounds all share a scaffold that is abundant in the PDB?",
        ),
        consequence: L(
          "هذا نمط تعلّم هيكل حتى يثبت العكس. افحص التنوّع (Bemis–Murcko)، وقارن بترتيب empirical، وأسقط التكرار قبل أن تُسمّيه إثراءً. الإثراء الحقيقي يُظهر كيمياء متعددة تدعم نفس الفيزياء.",
          "That is a scaffold-learning pattern until proven otherwise. Check diversity (Bemis–Murcko), compare with an empirical ranking, and collapse duplicates before you call it enrichment. True enrichment shows multiple chemotypes supporting the same physics.",
        ),
      },
      {
        type: "callout",
        id: "l8-gnina-warn",
        kind: "warning",
        title: L("لا تخلط أرقام CNN وVina في رسم واحد كمقياس", "Do not plot CNN and Vina numbers on one axis as a scale"),
        body: L(
          "مقاييس مختلفة، أصفار مختلفة، انحيازات مختلفة. يمكنك مقارنة ترتيبَين (أي المركبات في الأعلى)، لا طرح درجة CNN من درجة Vina.",
          "Different scales, different zeros, different biases. You may compare two rankings (which compounds are on top), not subtract a CNN score from a Vina score.",
        ),
      },
      {
        type: "exercise",
        id: "l8-gnina-ex",
        prompt: L(
          "CNN pose score مرتفع، درجة empirical متوسطة، والعين ترى اصطداماً steric واضحاً مع سلسلة جانبية. ماذا تُصدّق ولماذا؟",
          "CNN pose score is high, empirical score is middling, and the eye sees a clear steric clash with a side chain. What do you trust, and why?",
        ),
        solution: L(
          "تُصدّق الهندسة. الاصطدام steric حقيقة بنيوية في النموذج المعروض. CNN قد يُسامح كثافة غير فيزيائية إن شابهت تدريبًا منخفض الدقة. أصلح الهيئة أو رفضها، ولا تُمرّرها لأن الشبكة «واثقة». الثقة ليست قياساً.",
          "Trust the geometry. A steric clash is a structural fact in the displayed model. The CNN may forgive unphysical density if it resembles low-resolution training. Fix or reject the pose; do not pass it because the net is “confident”. Confidence is not a measurement.",
        ),
      },
    ],
    ["l8-scoring", "l8-vina", "l16-scoring", "l16-limits"],
  ),

  expand(
    "l8-commercial",
    [
      L(
        "وصف Glide وGOLD وMOE كمفاهيم بحث+تقييم دون ادّعاء تشغيل تراخيص.",
        "Describe Glide, GOLD, and MOE as search+score concepts without claiming to run licenses.",
      ),
      L(
        "نقل معايير التحقّق نفسها إلى أي برنامج تجاري.",
        "Carry the same validation standards to any commercial program.",
      ),
      L(
        "رفض معاملة الاسم التجاري كدليل جودة على هدفك.",
        "Refuse to treat a brand name as evidence of quality on your target.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l8-com-frame",
        title: L("الأدوات التجارية ليست فيزياء أخرى", "Commercial tools are not a different physics"),
        body: L(
          "Glide (Schrödinger) وGOLD (CCDC) وMOE (Chemical Computing Group) — وغيرها — تُنفّذ نفس المسألة: بحث في هيئة + دالة تقييم + واجهة وتحضير. تختلف heuristics البحث (مرشحات هرمية، خوارزمية جينية، توليد هيئات منهجي) وتختلف الدوال (GlideScore التجريبية، GoldScore/ChemScore/ChemPLP، دوال MOE). الرخصة لا تُغيّر أن الدرجة ≠ ΔG، وأن protonation يسبق كل شيء، وأن redocking على هدفك ألزم من شريحة تسويق. هذا الدرس مفاهيمي: لا يفترض وجود ترخيص، ولا يُدرّس أزرار واجهة كأنها علم.",
          "Glide (Schrödinger), GOLD (CCDC), and MOE (Chemical Computing Group) — among others — implement the same problem: pose search + a scoring function + interface and preparation. Search heuristics differ (hierarchical filters, a genetic algorithm, systematic pose generation) and functions differ (empirical GlideScore, GoldScore/ChemScore/ChemPLP, MOE functions). A license does not change score ≠ ΔG, or that protonation comes first, or that redocking on your target outranks a marketing slide. This lesson is conceptual: it does not assume you have a license, and it does not teach GUI buttons as if they were science.",
        ),
      },
      {
        type: "list",
        id: "l8-com-sketches",
        title: L("ملامح تشغيلية", "Operational sketches"),
        items: [
          L(
            "Glide: غالباً مسار هرمي (حذف هيئات مستحيلة مبكراً) ثم تقييم أدق. الدقة المعلنة تعتمد على مستوى البروتوكول، لا على الشعار.",
            "Glide: often a hierarchical funnel (discard impossible poses early) then a finer evaluation. Advertised accuracy depends on the protocol level, not the logo.",
          ),
          L(
            "GOLD: بحث جيني في فضاء الليجند مع دوال قابلة للاختيار. اختيار ChemPLP مقابل GoldScore قرار يُبرَّر على هدفك لا بالنقل من منتدى.",
            "GOLD: genetic search in ligand space with selectable functions. Choosing ChemPLP versus GoldScore is a decision justified on your target, not copied from a forum.",
          ),
          L(
            "MOE: بيئة تصميم تضم التحاماً وتحضيراً وتحليل SAR. الخطر أن الواجهة الكاملة تُغري بتشغيل افتراضيات دون تسجيلها.",
            "MOE: a design environment that includes docking, preparation, and SAR analysis. The risk is that a complete GUI invites default runs without recording the defaults.",
          ),
        ],
      },
      {
        type: "compare",
        id: "l8-com-open",
        left: L("أدوات مفتوحة (Vina / AD4 / Gnina)", "Open tools (Vina / AD4 / Gnina)"),
        right: L("أدوات تجارية (مفاهيمياً)", "Commercial tools (conceptually)"),
        rows: [
          {
            dim: L("إعادة الإنتاج", "Reproducibility"),
            a: L("نسخة، بذرة، أمر، ملف دخل — كلها قابلة للنشر.", "Version, seed, command, input file — all publishable."),
            b: L("نسخة الرخصة والإعدادات الافتراضية قد تكون صندوقاً أسود إن لم تُوثَّق.", "License version and defaults can be a black box if undocumented."),
          },
          {
            dim: L("التحضير", "Preparation"),
            a: L("أنت المسؤول عن كل هيدروجين.", "You own every hydrogen."),
            b: L("معالجات تلقائية قوية — وأخطاؤها صامتة إن لم تُراجع.", "Powerful automated workflows — and silent errors if unchecked."),
          },
          {
            dim: L("الحجة العلمية", "Scientific argument"),
            a: L("يجب أن تكون في الدالة والبحث.", "Must sit in the function and the search."),
            b: L("يجب أن تكون كذلك أيضاً؛ الاسم ليس حجة.", "Must sit there too; the name is not an argument."),
          },
        ],
      },
      {
        type: "why",
        id: "l8-com-why",
        question: L(
          "لماذا يُدرَّس التجاري إن كانت الأكاديمية لا تفترض ترخيصاً؟",
          "Why teach commercial tools if the academy does not assume a license?",
        ),
        answer: L(
          "لأنك ستقرأ أوراقاً تستخدمها، وستُسأل في المناقشة لماذا لم تستخدم Glide، ويجب أن تُجيب: «لأن السؤال كان كذا، والتحقّق كان كذا، والدالة أياً كانت لا تُغني عن…» لا: «لأنها أفضل». فهم المعمارية يمنع التقديس ويمنع الرفض الأعمى.",
          "Because you will read papers that use them, and you will be asked in the viva why you did not use Glide, and you must answer: “because the question was X, the validation was Y, and no function replaces…” — not: “because it is better.” Understanding the architecture prevents both worship and blind rejection.",
        ),
      },
      {
        type: "whatif",
        id: "l8-com-whatif",
        scenario: L(
          "ماذا لو رفض محكّم دراستك لأنك استخدمت Vina «بدل برنامج تجاري معتمد»؟",
          "What if a referee rejects your study because you used Vina “instead of an established commercial program”?",
        ),
        consequence: L(
          "الرد العلمي: التحقّق على الهدف (redocking، decoys إن وُجدت)، وتوثيق التحضير، وحدود التفسير. الأداة معتمدة إن أظهرت أداءً على المسألة، لا إن كان لها فاتورة. يمكنك أن تعرض أنك لا تدّعي تفوّقاً عاماً. إن طُلبت مقارنة أداة، فهي تجربة إضافية، لا اعتراف بأن درجتك كانت بلا معنى.",
          "The scientific reply: target-specific validation (redocking, decoys if applicable), documented preparation, and limited claims. A tool is established if it performs on the problem, not if it has an invoice. You may state that you do not claim universal superiority. If a tool comparison is requested, that is an extra experiment, not an admission that your scores were meaningless.",
        ),
      },
      {
        type: "callout",
        id: "l8-com-warn",
        kind: "warning",
        title: L("المعالج التلقائي ليس مؤلفاً مشاركاً", "The automated preparer is not a co-author"),
        body: L(
          "إصلاح بروتونات صامت، حذف ماء محبوس، وبناء توتومر «قياسي» يُغيّر المسألة. اقرأ تقرير التحضير كما تقرأ PDB. إن لم تستطع إعادة التحضير يدوياً على مثال واحد، فأنت لا تفهم ما رستَه.",
          "Silent protonation fixes, deletion of buried water, and building a “standard” tautomer change the problem. Read the preparation report as you would a PDB. If you cannot redo preparation by hand on one example, you do not understand what you docked.",
        ),
      },
      {
        type: "callout",
        id: "l8-com-edu",
        kind: "educational",
        title: L("لا توجد دالة «الأدق بـ 0.5 kcal/mol» عموماً", "There is no universally “0.5 kcal/mol more accurate” function"),
        body: L(
          "مقارنات البائعين تُختار على مجموعات تُظهر الفرق. في الأدبيات المفتوحة، ترتيب البرامج يتبدل مع العائلة المستهدفة ومع بروتوكول التحضير. رقم دقة واحد بلا سياق الهدف بروتوكول تسويق.",
          "Vendor comparisons are chosen on sets that show a difference. In the open literature, program rankings shuffle with target family and preparation protocol. A single accuracy number with no target context is a marketing protocol.",
        ),
      },
      {
        type: "exercise",
        id: "l8-com-ex",
        prompt: L(
          "ورقة تستخدم GOLD وChemPLP، بلا redocking، وتعلن مرشحاً نانومولارياً من الدرجة. اكتب ثلاثة أسئلة محكّم.",
          "A paper uses GOLD and ChemPLP, with no redocking, and announces a nanomolar candidate from the score. Write three referee questions.",
        ),
        solution: L(
          "(1) ما RMSD إعادة التحام المرجع، وبأي بروتونات؟ (2) ما تعريف الصندوق وكيف وُثّق أن ChemPLP يُثري على هذا الهدف لا على معيار عام؟ (3) أين القياس التجريبي الذي يحوّل «مرشح» إلى نانومولار، أو لماذا استُخدمت كلمة نانومولار أصلاً؟",
          "(1) What is the redocking RMSD of the reference, under which protonation? (2) How was the box defined, and how is it shown that ChemPLP enriches on this target rather than on a generic benchmark? (3) Where is the experimental measurement that turns “candidate” into nanomolar — or why was the word nanomolar used at all?",
        ),
      },
    ],
    ["l8-scoring", "l8-validation", "l8-not-dg", "l22-reviewer"],
  ),

  expand(
    "l8-validation",
    [
      L(
        "تعريف redocking وcross-docking وعتبة RMSD كاختبار هندسي لا كاختبار نشاط.",
        "Define redocking, cross-docking, and an RMSD cutoff as a geometric test, not an activity test.",
      ),
      L(
        "استخدام ROC وAUC وEF وBEDROC وdecoys لاختبار الإثراء دون ادّعاء «مثبط جيد».",
        "Use ROC, AUC, EF, BEDROC, and decoys to test enrichment without claiming “a good inhibitor.”",
      ),
      L(
        "تفسير لماذا الدرجة الجيدة لا تستلزم تثبيطاً.",
        "Explain why a good score does not imply inhibition.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l8-val-levels",
        title: L("طبقات التحقّق ليست واحدة", "Validation layers are not one layer"),
        body: L(
          "التحقق من docking أسئلة منفصلة. (1) هل نُعيد هيئة معقد معروف في بنيته (redocking / self-docking)؟ (2) هل نُعيد ليغند في بنية بلورية أخرى لنفس البروتين (cross-docking) — اختبار مرونة وأمانة الشبكة؟ (3) هل نُثري actives بين decoys (ROC، AUC، EF، BEDROC)؟ (4) هل الترتيب يوافق SAR داخل سلسلة؟ النجاح في (1) شائع نسبياً ولا يستلزم (3) ولا (4). الفشل في (1) يضعف الثقة في فرز لاحق، لكنه قد يعني بروتوناً خطأ لا عجزاً أبدياً للدالة. «جيد في الالتحام» بلا تحديد الطبقة جملة فارغة.",
          "Validating docking is several separate questions. (1) Do we recover the pose of a known complex in its own structure (redocking / self-docking)? (2) Do we recover a ligand in a different crystal of the same protein (cross-docking) — a test of flexibility and grid honesty? (3) Do we enrich actives among decoys (ROC, AUC, EF, BEDROC)? (4) Does ranking agree with SAR inside a series? Success at (1) is relatively common and does not imply (3) or (4). Failure at (1) weakens trust in a later screen, but may mean wrong protonation rather than eternal failure of the function. “Good at docking” with no layer specified is an empty sentence.",
        ),
      },
      {
        type: "equation",
        id: "l8-val-rmsd",
        latex:
          "\\mathrm{RMSD} = \\sqrt{\\frac{1}{N}\\sum_{i=1}^{N}\\lVert \\mathbf{r}_{i}-\\mathbf{r}_{i}^{\\mathrm{ref}}\\rVert^{2}}",
        name: L("RMSD لإعادة الالتحام", "Redocking RMSD"),
        meaning: L(
          "جذر متوسط مربعات انحراف ذرات الليجند (عادة الثقيلة) عن المرجع بعد مواءمة مناسبة.",
          "Root-mean-square deviation of ligand atoms (usually heavy atoms) from the reference after a suitable alignment.",
        ),
        variables: [
          {
            symbol: "N",
            name: L("عدد الذرات الداخلة في الحساب", "Number of atoms included"),
          },
          {
            symbol: "\\mathbf{r}_{i}",
            name: L("موضع الذرة في الهيئة المحسوبة", "Atom position in the computed pose"),
            unit: L("Å", "Å"),
          },
          {
            symbol: "\\mathbf{r}_{i}^{\\mathrm{ref}}",
            name: L("موضع الذرة في المرجع (البلورة عادة)", "Atom position in the reference (usually the crystal)"),
            unit: L("Å", "Å"),
          },
        ],
        interpretation: L(
          "عتبة 2 Å شائعة لنجاح redocking، وهي عرف لا قانون طبيعة. RMSD صغير مع تفاعلات خاطئة (قلب مانح/مستقبل) ليس نجاحاً كيميائياً. RMSD كبير بسبب تناظر رباعي السطوح في tert-butyl قد يكون نجاحاً كيميائياً.",
          "A 2 Å cutoff is a common redocking-success convention, not a law of nature. Low RMSD with wrong interactions (donor/acceptor flipped) is not chemical success. High RMSD from tetrahedral symmetry of a tert-butyl may still be chemical success.",
        ),
        application: L(
          "احسب RMSD بعد مواءمة البروتين لا بعد تحريك الليجند حرّاً في الفضاء، وحدد الذرات (بدون H عادة، وبحذر مع تناظر).",
          "Compute RMSD after protein alignment, not after freely moving the ligand in space, and specify the atoms (usually excluding H, carefully handling symmetry).",
        ),
      },
      {
        type: "list",
        id: "l8-val-metrics",
        title: L("مقاييس الإثراء", "Enrichment metrics"),
        items: [
          L(
            "ROC: منحنى معدل الإيجاب الحقيقي مقابل الإيجاب الزائف وأنت تُنزّل عتبة الدرجة.",
            "ROC: true-positive rate versus false-positive rate as you lower the score threshold.",
          ),
          L(
            "AUC: مساحة تحت ROC. 0.5 = عشواء. قريب من 1 إثراء شامل، وقد يخفي فشلاً في أعلى 1% إن كان التحسن في الوسط.",
            "AUC: area under the ROC. 0.5 = random. Near 1 is global enrichment, and may hide failure in the top 1% if the gain is in the middle.",
          ),
          L(
            "EF (enrichment factor) عند x%: كم مرة أغنى الجزء العلوي بالـ actives مقارنة بالعشواء. يناسب سؤال الفرز العملي.",
            "EF (enrichment factor) at x%: how many times richer the top slice is in actives than random. Matches the practical screening question.",
          ),
          L(
            "BEDROC: يوزن أعلى القائمة أكثر (Boltzmann-enhanced). مفيد حين تهمّك القمة فقط.",
            "BEDROC: weights the very top of the list more (Boltzmann-enhanced). Useful when only the peak matters.",
          ),
          L(
            "Decoys: جزيئات يُفترض أنها غير نشطة ومتشابهة فيزيوكيميائياً مع الـ actives حتى لا يُميّز النموذج بالحجم أو logP وحدهما. DUD-E مثال معروف لمجموعات من هذا النوع — استخدمها بوعي لانحيازها هي أيضاً.",
            "Decoys: presumed inactives matched physicochemically to actives so the model cannot discriminate on size or logP alone. DUD-E is a well-known family of such sets — use it aware of its own biases.",
          ),
        ],
      },
      {
        type: "compare",
        id: "l8-val-re-cross",
        left: L("Redocking", "Redocking"),
        right: L("Cross-docking", "Cross-docking"),
        rows: [
          {
            dim: L("المستقبل", "Receptor"),
            a: L("بنية المعقد نفسه بعد إزالة الليجند.", "The same complex after ligand removal."),
            b: L("بنية أخرى (apo أو ليغند مختلف).", "Another structure (apo or a different ligand)."),
          },
          {
            dim: L("ما يُختبر", "What is tested"),
            a: L("بحث + دالة في جيب «متعاون».", "Search + function in a “cooperative” pocket."),
            b: L("نقل الهيئة عبر مرونة وحالة بلورية.", "Pose transfer across flexibility and crystal form."),
          },
          {
            dim: L("التفاؤل", "Optimism"),
            a: L("مُفرط كمؤشر لفرز حقيقي.", "Too optimistic as a proxy for a real screen."),
            b: L("أقسى وأقرب لواقع مكتبة على بنية واحدة.", "Harsher and closer to docking a library into one structure."),
          },
        ],
      },
      {
        type: "callout",
        id: "l8-val-warn",
        kind: "warning",
        title: L("درجة جيدة ≠ مثبط جيد", "A good score ≠ a good inhibitor"),
        body: L(
          "حتى AUC ممتاز يعني فقط: actives في مجموعة الاختبار تُدفَع نحو الأعلى مقابل decoys تلك المجموعة. لا يعني أن المركّب رقم 1 يُثبط هدفك، ولا أنه انتقائي، ولا أنه غير PAINS. الإثراء خاصية قائمة، لا شهادة جزيء. جزيء قد يحصل على أفضل درجة لأنه كبير وكاره للماء في جيب كبير — وهو decoy ممتاز للدالة، لا دواء.",
          "Even an excellent AUC means only: actives in the test set are pushed upward relative to that set’s decoys. It does not mean compound 1 inhibits your target, or is selective, or is not a PAINS. Enrichment is a property of a list, not a certificate for a molecule. A molecule may earn the best score because it is large and hydrophobic in a large pocket — an excellent decoy for the function, not a drug.",
        ),
      },
      {
        type: "callout",
        id: "l8-val-edu",
        kind: "educational",
        title: L("عتبة 2 Å عرفٌ هندسي", "The 2 Å cutoff is a geometric convention"),
        body: L(
          "2 Å شائعة في معايير pose prediction. ليغند صغير قد يكون «ناجحاً» عند 2 Å بينما انزاح مانح H-bond عن القبول. ليغند كبير قد يتجاوز 2 Å بتطرف طرفي بعيد عن الجيب الساخن. اقرن RMSD دائماً بعدد التفاعلات الصحيحة لا بالعتبة وحدها.",
          "2 Å is common in pose-prediction benchmarks. A small ligand can be a “success” at 2 Å while an H-bond donor has slid off the acceptor. A large ligand can exceed 2 Å from a distal tail far from the hot pocket. Always pair RMSD with the count of correct interactions, not with the cutoff alone.",
        ),
      },
      {
        type: "why",
        id: "l8-val-why",
        question: L(
          "لماذا decoys المتطابقة فيزيوكيميائياً ألزم من «جزيئات عشوائية من ZINC»؟",
          "Why are physicochemically matched decoys more necessary than “random molecules from ZINC”?",
        ),
        answer: L(
          "إن كان الـ actives أثقل وأشد كراهة للماء من الخلفية، فأي دالة تحب الدفن hydrophobic ستُثري بلا فهم للجيب. المطابقة في MW وlogP وعدد الروابط القابلة للدوران تُجبر التمييز على هندسة التفاعلات. حتى ذلك الحين يبقى انحياز الهيكل: decoys ليست ضمان عدم نشاط تجريبي.",
          "If actives are heavier and more hydrophobic than the background, any function that likes hydrophobic burial will enrich without understanding the pocket. Matching MW, logP, and rotatable-bond count forces discrimination onto interaction geometry. Even then scaffold bias remains: decoys are not a guarantee of experimental inactivity.",
        ),
      },
      {
        type: "whatif",
        id: "l8-val-whatif",
        scenario: L(
          "ماذا لو كان AUC = 0.9 لأن كل الـ actives من سلسلة واحدة وكل decoys بعيدة كيمياء؟",
          "What if AUC = 0.9 because all actives are one series and all decoys are chemically remote?",
        ),
        consequence: L(
          "النموذج قد يميّز هيكلاً لا جيباً. هذا تسرب تقييم (analogue bias). اختبر بسلسلة مختلفة، أو بتقسيم زمني/هيكلي. أعلن AUC مع وصف تنوع الـ actives وإلا فالرقم مسرح.",
          "The model may be discriminating a scaffold, not a pocket. That is evaluation leakage (analogue bias). Test on a different series, or on a scaffold/temporal split. Report AUC with a description of active diversity, or the number is theatre.",
        ),
      },
      {
        type: "exercise",
        id: "l8-val-ex",
        prompt: L(
          "redocking RMSD = 1.5 Å، ولا cross-docking، ولا decoys، والمؤلف يستنتج أن الفرز سيكتشف مثبطات نانومولارية. حدّد الطبقة التي نجحت والدعوى الزائدة.",
          "Redocking RMSD = 1.5 Å, no cross-docking, no decoys, and the author concludes that the screen will discover nanomolar inhibitors. Name the layer that succeeded and the excess claim.",
        ),
        solution: L(
          "نجحت طبقة pose recovery على معقد واحد متعاون. الدعوى الزائدة تقفز إلى اكتشاف قوة دوائية (نانومولار) عبر طبقة إثراء غير مختبرة وطبقة نشاط غير موجودة. الجملة الدفاعية: «استُعيدت هيئة المرجع؛ قدرة الفرز على الإثراء غير مُبيَّنة هنا».",
          "The pose-recovery layer succeeded on one cooperative complex. The excess claim jumps to discovering pharmacological potency (nanomolar) through an untested enrichment layer and a nonexistent activity layer. Defensible sentence: “The reference pose was recovered; the screen’s enrichment ability is not shown here.”",
        ),
      },
      {
        type: "callout",
        id: "l8-val-lim",
        kind: "limitation",
        title: L("غياب السلبيات الحقيقية", "The absence of true negatives"),
        body: L(
          "معظم decoys ليست مُقاسة كسلبيات على هدفك. AUC إذن تقدير تحت فرضية أن decoys غير نشطة. نشاط خفي في decoys يخفض الإثراء الحقيقي أو يُشوّهه. عامل القائمة كفرضية إثراء تحتاج مقايسة.",
          "Most decoys are not measured negatives on your target. AUC is therefore an estimate under the assumption that decoys are inactive. Hidden activity in decoys lowers or distorts true enrichment. Treat the list as an enrichment hypothesis that still needs an assay.",
        ),
      },
    ],
    ["l8-not-dg", "l8-failures", "l8-poses", "l13-workflow", "l3-stats"],
  ),

  expand(
    "l8-failures",
    [
      L(
        "تشخيص أنماط الفشل: protonation، tautomer، الموقع، العامل المرافق، الهندسة، المرونة، الشبكة، انحياز الدالة، الهيئات غير الواقعية، والإفراط في التفسير.",
        "Diagnose failure modes: protonation, tautomer, site, cofactor, geometry, flexibility, grid, scoring bias, unphysical poses, and overinterpretation.",
      ),
      L(
        "ربط كل نمط بفحص قبل إعادة البحث لا برفع exhaustiveness.",
        "Map each pattern to a check before rerunning search, not to raising exhaustiveness.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l8-fail-intro",
        title: L("الفشل هو الحالة الطبيعية", "Failure is the default"),
        body: L(
          "الـ docking يفشل بصمت أكثر مما ينجح بصراحة. الفشل ليس تعطل البرنامج؛ هو هيئة معقولة المظهر تُخالف الكيمياء أو البيولوجيا. النمط المتكرر: خطأ تحضير يُترجم إلى درجة جيدة. قائمة هذا الدرس قائمة فحص قبل أن تُلام الدالة أو يُرفع جهد البحث. إن صحّ التحضير والموقع وما زالت الهيئة غير فيزيائية، فعندها تتحدث عن حدود scoring ومرونة.",
          "Docking fails silently more often than it succeeds honestly. Failure is not a crash; it is a reasonable-looking pose that violates chemistry or biology. The repeating pattern: a preparation error translates into a good score. This lesson’s list is a checklist before you blame the function or raise search effort. If preparation and site are correct and the pose is still unphysical, then you may talk about scoring limits and flexibility.",
        ),
      },
      {
        type: "list",
        id: "l8-fail-modes",
        title: L("أنماط الفشل", "Failure modes"),
        ordered: true,
        items: [
          L(
            "Protonation: هيستيدين، كاربوكسيلات مدفونة، أمين في جيب حمضي، فينول. حالة خاطئة تعكس H-bond وتُفسد كولوم AD4.",
            "Protonation: histidine, buried carboxylate, an amine in an acidic pocket, phenol. The wrong state reverses H-bonds and wrecks AD4 Coulomb.",
          ),
          L(
            "Tautomer: كيتو/إنول، هيستيدين، هيدروكسي بيريدين. الذرة التي تُظهرها كمانح قد تكون مستقبلاً.",
            "Tautomer: keto/enol, histidine, hydroxypyridine. The atom you display as a donor may be an acceptor.",
          ),
          L(
            "الموقع الخطأ: صندوق على تجويف بلوري أو جيب تفارغي غير مُراد، أو على موقع بلورة (crystal packing) لا جيب وظيفي.",
            "Wrong site: a box on a crystal cleft or an unintended allosteric pocket, or on a crystal-packing site rather than a functional pocket.",
          ),
          L(
            "عامل مرافق / معدن محذوف: kinase بلا ATP/Mg، aspartyl protease بلا ماء تحفيزي، metalloprotein بلا أيون. حذفت الفيزياء ثم فسّرت الفراغ.",
            "Deleted cofactor / metal: kinase without ATP/Mg, aspartyl protease without catalytic water, metalloprotein without the ion. You deleted the physics then interpreted the hole.",
          ),
          L(
            "هندسة سيئة: تكافؤ خاطئ، تشويه حلقات، ستيريو معكوس، ليغند من SMILES بلا استيريو.",
            "Bad geometry: wrong valence, distorted rings, inverted stereo, a ligand from SMILES with no stereo.",
          ),
          L(
            "مرونة مُتجاهَلة: فلاب HIV protease، DFG-in/out في الكيناز، عرى EGFR. هيئة جامدة تُغلق باباً مفتوحاً في الفسيولوجيا.",
            "Ignored flexibility: HIV protease flaps, kinase DFG-in/out, EGFR loops. A rigid pose slams a door that is open in physiology.",
          ),
          L(
            "شبكة / صندوق سيئ: قصّ الجيب، تباعد AD4 خشن، مركز على الليجند الخطأ.",
            "Bad grid / box: clipping the pocket, coarse AD4 spacing, centre on the wrong ligand.",
          ),
          L(
            "انحياز scoring: مكافأة الحجم، كراهة المجموعات المشحونة المدفونة حتى حين تلزم، حب π-stack مفرط.",
            "Scoring bias: rewarding size, disliking buried charges even when required, excessive love of π-stacking.",
          ),
          L(
            "هيئات غير واقعية: تداخل vdW، H-bond بزاوية ميتة، مجموعة قطبية في قلب كاره للماء بلا شريك.",
            "Unrealistic poses: vdW overlap, a dead H-bond angle, a polar group in a hydrophobic core with no partner.",
          ),
          L(
            "الإفراط في التفسير: حركة «آلية تثبيط» من لقطة، انتقائية من هيئة واحدة، نانومولار من درجة.",
            "Overinterpretation: an “inhibitory mechanism” from a snapshot, selectivity from one pose, nanomolar from a score.",
          ),
        ],
      },
      {
        type: "viewer",
        id: "l8-fail-1iep",
        pdb: "1IEP",
        ligand: "STI",
        caption: L(
          "1IEP: Abl مع imatinib (STI). الهيئة تعتمد على DFG-out. التحام على بنية DFG-in لنفس العائلة قد «يفشل» لا لأن الدواء لا يرتبط، بل لأن المستقبل المعروض ليس الحالة ذات الصلة.",
          "1IEP: Abl with imatinib (STI). The pose depends on DFG-out. Docking into a DFG-in structure of the same family may “fail” not because the drug does not bind, but because the displayed receptor is not the relevant state.",
        ),
      },
      {
        type: "why",
        id: "l8-fail-why",
        question: L(
          "لماذا protonation أول بند لا عاشر؟",
          "Why is protonation item one rather than item ten?",
        ),
        answer: L(
          "لأن كل H-bond وكل مصطلح كولوم يُبنى على أي ذرة تحمل H وأيها تحمل زوجاً. خطأ واحد في HIS أو في كاربوكسيلات مدفونة يقلب إشارة تفاعل أساسي. البحث يُحسّن الدالة المعطاة؛ إن كانت الكيمياء خاطئة فسيجد ببراعة الحد الأدنى للجزئية الخطأ. لا exhaustiveness يُصلح ذلك.",
          "Because every H-bond and every Coulomb term is built on which atom carries H and which carries a lone pair. One error in HIS or in a buried carboxylate flips the sign of a key interaction. Search optimises the function it is given; if the chemistry is wrong it will skilfully find the minimum of the wrong molecule. No exhaustiveness repairs that.",
        ),
      },
      {
        type: "whatif",
        id: "l8-fail-whatif",
        scenario: L(
          "ماذا لو حذفت كل المياه «للتنظيف» بما فيها ماء محبوس يشبك الليجند بالبروتين في البلورة؟",
          "What if you delete all waters “for cleanliness”, including a buried water that bridges ligand to protein in the crystal?",
        ),
        consequence: L(
          "تفتح تجويفاً كاذباً. الدالة قد تملأه بمجموعة قطبية من ليغندك، أو تترك فراغاً وتُعاقب. في الحالتين تُحل مسألة غير المسألة البلورية. الماء المحبوس فرضية بنيوية: أبْقه، أو عالجه كنموذج صريح، أو سوّغه حذفه بدليل (B-factor عالٍ، غير مُكرَّر في بنى أخرى).",
          "You open a false cavity. The function may fill it with a polar group from your ligand, or leave a vacuum and penalise. Either way you have solved a problem that is not the crystal’s problem. Buried water is a structural hypothesis: keep it, treat it as an explicit model, or justify deletion with evidence (high B-factor, not reproduced in other structures).",
        ),
      },
      {
        type: "callout",
        id: "l8-fail-warn",
        kind: "warning",
        title: L("لا تُصحّح الفشل برفع exhaustiveness", "Do not debug failure by raising exhaustiveness"),
        body: L(
          "إن كانت البروتونات خطأ أو المعدن غائباً أو الصندوق على الموقع الخطأ، فالمزيد من البحث يُنتج المزيد من الهيئات الخاطئة بثقة أعلى. التشخيص كيميائي-بنيوي أولاً.",
          "If protonation is wrong, the metal is missing, or the box is on the wrong site, more search produces more wrong poses with higher confidence. Diagnosis is chemical–structural first.",
        ),
      },
      {
        type: "steps",
        id: "l8-fail-debug",
        title: L("تسلسل تشخيص", "A diagnostic sequence"),
        items: [
          {
            title: L("الكيمياء", "Chemistry"),
            body: L(
              "تكافؤ، ستيريو، tautomer، pKa مقابل pH الجيب.",
              "Valence, stereo, tautomer, pKa versus pocket pH.",
            ),
          },
          {
            title: L("المسرح", "The stage"),
            body: L(
              "الموقع، المعدن، cofactor، الماء المحبوس، العرى الناقصة.",
              "Site, metal, cofactor, buried water, missing loops.",
            ),
          },
          {
            title: L("القيود الرقمية", "Numeric constraints"),
            body: L("الصندوق، الشبكة، البذرة، الجهد.", "Box, grid, seed, effort."),
          },
          {
            title: L("العين على الفيزياء", "Eyes on physics"),
            body: L(
              "اصطدام، زوايا H-bond، مجموعات قطبية وحيدة.",
              "Clashes, H-bond angles, lonely polar groups.",
            ),
          },
          {
            title: L("بعدها الدالة", "Then the function"),
            body: L(
              "انحياز حجم، مقارنة دالة أخرى، حدود ML.",
              "Size bias, a second function, ML limits.",
            ),
          },
        ],
      },
      {
        type: "exercise",
        id: "l8-fail-ex",
        prompt: L(
          "كيناز: حذفت ligand بلوري وATP وMg، والتحمت مثبطاً في الفراغ. الدرجة ممتازة. سمِّ نمطين فشل واقتَرح إصلاحاً.",
          "Kinase: you deleted the crystal ligand and ATP and Mg, then docked an inhibitor into the hole. The score is excellent. Name two failure modes and propose a fix.",
        ),
        solution: L(
          "(1) cofactor/metal محذوف إن كان سؤالك عن موقع ATP المشغول أيونياً. (2) احتمال الموقع الخطأ أو هيئة DFG غير المناسبة. الإصلاح: حدّد هل المثبط ATP-competitive؛ إن نعم، افحص بنى مشغولة بـ ATP/analog وMg، واختر حالة DFG الملائمة لآلية الدواء (imatinib يحتاج DFG-out كما في 1IEP). لا تُفسّر الدرجة قبل إعادة المسرح.",
          "(1) Deleted cofactor/metal if your question concerns the ion-occupied ATP site. (2) Possible wrong site or an inappropriate DFG state. Fix: decide whether the inhibitor is ATP-competitive; if yes, inspect ATP/analog-occupied structures with Mg, and choose the DFG state that matches the drug’s mechanism (imatinib needs DFG-out, as in 1IEP). Do not interpret the score before restoring the stage.",
        ),
      },
      {
        type: "callout",
        id: "l8-fail-lim",
        kind: "limitation",
        title: L("مرونة المستقبل ليست زرّاً", "Receptor flexibility is not a toggle"),
        body: L(
          "السماح لبضع سلاسل جانبية بالدوران قد يفتح اصطداماً محلياً ويُنشئ هيئات لا يدعمها العمود الفقري. التحام مجموعة هيئات (ensemble) من MD أو من عدة بلورات أصدق من «كل شيء مرن» في بحث docking. المرونة الكاملة بلا معاينة حرارية تُحوّل المسألة إلى fitting بلا عقوبة إنتروبية.",
          "Letting a few side chains rotate may relieve a local clash and create poses the backbone cannot support. Docking an ensemble of poses from MD or from several crystals is more honest than “everything flexible” inside a docking search. Full flexibility without thermal sampling turns the problem into fitting without an entropic penalty.",
        ),
      },
    ],
    ["l8-validation", "l8-poses", "l1-tautomer", "l1-pka", "l4-waters", "l25-ifd"],
  ),

  expand(
    "l8-poses",
    [
      L(
        "قراءة الهيئة بالعين: تفاعلات، هندسة، وإشغال المكان قبل الرقم.",
        "Read the pose by eye: interactions, geometry, and space occupancy before the number.",
      ),
      L(
        "تمييز تفاعل هيكلي عن تفاعل تجميلي في شكل معدّ للنشر.",
        "Distinguish a structural interaction from a decorative one in a publication figure.",
      ),
      L(
        "كتابة تفسير كفرضية قابلة للتكذيب بـ SAR.",
        "Write the interpretation as a hypothesis falsifiable by SAR.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l8-poses-eye",
        title: L("العين قبل الرقم", "The eye before the number"),
        body: L(
          "تحليل الهيئة مهارة كيميائية لا مهارة فرز ألوان. اسأل: هل كل مجموعة قطبية لها شريك أم هي في فراغ كاره للماء؟ هل زوايا H-bond ومانح/مستقبل متسقة مع protonation؟ هل الحلقة العطرية تُكدَّس أم تُلامس حافة؟ هل الذيل يخرج إلى المذيب كما تفعل الأدوية أم يُثنى اصطناعياً داخل تجويف بلوري؟ هل الاصطدام يُخفى بشريط كرتوني سميك؟ الدرجة لا تُجيب. بعد العين، اربط الهيئة بـ SAR: إن لم يُفسّر غياب نشاط مشتقٍ ينقصه مانح، فالهيئة ضعيفة حتى لو كانت الأولى في القائمة.",
          "Pose analysis is a chemical skill, not a colour-sorting skill. Ask: does every polar group have a partner, or is it in a hydrophobic void? Are H-bond angles and donor/acceptor assignment consistent with protonation? Is the aromatic ring stacked or edge-on? Does the tail exit to solvent as drugs do, or fold artificially into a crystal cleft? Is a clash hidden by a thick cartoon ribbon? The score does not answer. After the eye, bind the pose to SAR: if the inactivity of a derivative that lacks a donor is unexplained, the pose is weak even if it is first on the list.",
        ),
      },
      {
        type: "viewer",
        id: "l8-poses-3ert",
        pdb: "3ERT",
        ligand: "OHT",
        caption: L(
          "3ERT: مستقبل الإستروجين α مع 4-hydroxytamoxifen (OHT). اقرأ كيف يحتل الليجند موقع الإستراديول وكيف يدفع هيليكساً — هذه قصة بنيوية، لا قصة درجة. أي docking هنا يُحاكَم بهذه الفيزياء لا بـ −10 kcal/mol.",
          "3ERT: estrogen receptor α with 4-hydroxytamoxifen (OHT). Read how the ligand occupies the estradiol site and displaces a helix — a structural story, not a score story. Any docking here is judged by that physics, not by −10 kcal/mol.",
        ),
      },
      {
        type: "list",
        id: "l8-poses-checklist",
        title: L("قائمة فحص هيئة", "Pose inspection checklist"),
        items: [
          L(
            "قطبية: لا كاربونيل مدفون بلا مانح، لا أمينومنيوم في قلب دهني بلا أنيون أو ماء.",
            "Polarity: no buried carbonyl without a donor, no ammonium in a fatty core without an anion or water.",
          ),
          L(
            "هندسة H-bond: مسافة وزاوية. خط متقطع في PyMOL ليس برهاناً إن كانت الزاوية ميتة.",
            "H-bond geometry: distance and angle. A dashed line in PyMOL is not proof if the angle is dead.",
          ),
          L(
            "شكل تكاملي: هل الحجم يملأ hotspot أم يطفو في منتصف الجيب؟",
            "Shape complementarity: does the volume fill a hotspot or float in mid-pocket?",
          ),
          L(
            "استيريو: المقابل الضوئي الآخر سيُنتج هيئة مختلفة. لا تُسقِطه من الملف.",
            "Stereo: the other enantiomer will produce a different pose. Do not drop it from the file.",
          ),
          L(
            "تماثل: في HIV protease (1HSG) اسأل أي اتجاه لليجند شبه المتماثل تُفضّله الدالة ولماذا.",
            "Symmetry: in HIV protease (1HSG), ask which orientation of a near-symmetric ligand the function prefers and why.",
          ),
        ],
      },
      {
        type: "callout",
        id: "l8-poses-interp",
        kind: "interpretation",
        title: L("الخط المتقطع تفسير", "The dashed line is an interpretation"),
        body: L(
          "برمجيات العرض ترسم H-bond حسب عتبات. تغيير العتبة يُظهر أو يُخفي «تفاعلاً». سجّل المسافة والزاوية في النص، لا تعتمد على الشكل وحده. الشكل حجة بصرية؛ القياس حجة بنيوية.",
          "Display software draws H-bonds according to cutoffs. Changing the cutoff shows or hides an “interaction”. Record distance and angle in the text; do not rely on the figure alone. The figure is a visual argument; the measurement is a structural argument.",
        ),
      },
      {
        type: "why",
        id: "l8-poses-why",
        question: L(
          "لماذا قد تكون الهيئة الثانية أصدق كيميائياً من الأولى؟",
          "Why might pose 2 be chemically more honest than pose 1?",
        ),
        answer: L(
          "لأن الدالة تُكافئ ما دُرّبت عليه (سطح كاره للماء، عدد H-bonds خام) بينما الكيميائي يرى انتهاكاً لقاعدة مدفن القطبيات أو اصطداماً خفيفاً تسامحت معه الدالة. فرق الدرجة 0.2 لا يُبرر رفض العين. الترتيب داخل ضجيج الدالة؛ الكيمياء ليست ضجيجاً.",
          "Because the function rewards what it was trained on (hydrophobic surface, raw H-bond counts) while a chemist sees a buried-polarity violation or a mild clash the function forgave. A 0.2 score gap does not overrule the eye. Ranking sits inside the noise of the function; chemistry is not noise.",
        ),
      },
      {
        type: "whatif",
        id: "l8-poses-whatif",
        scenario: L(
          "ماذا لو رسمت كل H-bond ممكنة بخطوط كثيفة وأخفيت سلسلة جانبية تصطدم بالليجند لتحسين «وضوح» الشكل؟",
          "What if you draw every possible H-bond as a dense dashed forest and hide a clashing side chain to “clarify” the figure?",
        ),
        consequence: L(
          "هذا تضليل لا تصميم. المحكّم الذي يفتح PDB يرى الاصطدام. أنت تُدرّب نفسك على قراءة دعاية. أظهر الاصطدام أو أصلح الهيئة. الوضوح الحقيقي: عدد قليل من التفاعلات التي تفسّر SAR، ومسافات مقروءة، وزاوية كاميرا صادقة.",
          "That is misleading, not design. A referee who opens the PDB will see the clash. You are training yourself to read advertising. Show the clash or fix the pose. Real clarity: a few interactions that explain SAR, readable distances, and an honest camera angle.",
        ),
      },
      {
        type: "callout",
        id: "l8-poses-warn",
        kind: "warning",
        title: L("لا تكتب آلية من لقطة docking", "Do not write a mechanism from a docking snapshot"),
        body: L(
          "«يثبّط عبر تثبيت الحلقة X ومنع ATP» يحتاج ديناميكا أو حركية أو بنية تجريبية للحالة ذات الصلة. اللقطة تقول: في هذا النموذج، بهذه البروتونات، توجد هيئة متوافقة مع تلك القصة. صيغة الفرضية إلزامية.",
          "“It inhibits by locking loop X and blocking ATP” needs dynamics, kinetics, or an experimental structure of the relevant state. The snapshot says: in this model, with these protonation states, a pose exists that is compatible with that story. The hypothesis wording is mandatory.",
        ),
      },
      {
        type: "steps",
        id: "l8-poses-write",
        title: L("من الهيئة إلى جملة قابلة للدفاع", "From pose to a defensible sentence"),
        items: [
          {
            title: L("صف القياسات", "State measurements"),
            body: L(
              "مسافات H-bond، residual names، لا «يرتبط بقوة».",
              "H-bond distances, residue names, not “binds tightly.”",
            ),
          },
          {
            title: L("اربط بتجربة أو تنبؤ قابل للاختبار", "Link to an experiment or a testable prediction"),
            body: L(
              "إن صحّت الهيئة فإن استبدال المانح بـ methyl يُفقد النشاط.",
              "If the pose is right, replacing the donor with methyl should cost activity.",
            ),
          },
          {
            title: L("أعلن الحدود", "State the limits"),
            body: L(
              "مستقبل جامد، دالة كذا، بلا ماء صريح.",
              "Rigid receptor, such-and-such function, no explicit water.",
            ),
          },
        ],
      },
      {
        type: "exercise",
        id: "l8-poses-ex",
        prompt: L(
          "في 1M17 (EGFR–erlotinib) افترض أن docking قلب quinazoline بحيث ضاع H-bond مع المفصلة (hinge) لكن الدرجة بقيت جيّدة بسبب دفن حلقة طرفية. كيف تصف النتيجة في seminar؟",
          "In 1M17 (EGFR–erlotinib) suppose docking flipped the quinazoline so the hinge H-bond is lost but the score remains good because of burial of a terminal ring. How do you describe the result in a seminar?",
        ),
        solution: L(
          "«الدالة كافأت الدفن hydrophobic وفاتها قيد المفصلة المعروف في كينازات. الهيئة مرفوضة كيميائياً رغم الترتيب. هذا فشل scoring/بحث أو تحضير، لا دليل أن erlotinib يرتبط بتلك الطريقة. المرجع 1M17 يُظهر قيد hinge؛ أي فرز لا يستعيده على هذا النظام غير موثوق لكينازات مماثلة».",
          "“The function rewarded hydrophobic burial and missed the known kinase hinge constraint. The pose is chemically rejected despite its rank. That is a scoring/search or preparation failure, not evidence that erlotinib binds that way. 1M17 shows the hinge constraint; a screen that cannot recover it on this system is untrustworthy for similar kinases.”",
        ),
      },
      {
        type: "viewer",
        id: "l8-poses-1m17",
        pdb: "1M17",
        ligand: "AQ4",
        caption: L(
          "1M17: EGFR مع erlotinib (AQ4). المفصلة (hinge) هي الاختبار البصري الأول لأي هيئة كيناز — قبل الدرجة.",
          "1M17: EGFR with erlotinib (AQ4). The hinge is the first visual test of any kinase pose — before the score.",
        ),
      },
    ],
    ["l8-failures", "l8-validation", "l8-not-dg", "l11-hotspot", "l18-pymol"],
  ),
];
