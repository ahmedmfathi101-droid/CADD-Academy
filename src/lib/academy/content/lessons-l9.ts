import type { Lesson } from "@/lib/academy/types";
import { expand, L } from "@/lib/academy/content/helpers";

export const lessons: Lesson[] = [
  expand(
    "l9-newton",
    [
      L(
        "ربط الميكانيكا الكلاسيكية بالمحاكاة: F = ma و F = −∇V.",
        "Connect classical mechanics to a simulation: F = ma and F = −∇V.",
      ),
      L(
        "تفسير المسار كعيّنة من ديناميكا نموذج، لا كفيلم للجزيء الحقيقي.",
        "Interpret the trajectory as a sample of a model’s dynamics, not as a movie of the real molecule.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l9-newton-frame",
        title: L("ما الذي تُحرّكه المحاكاة؟", "What is the simulation moving?"),
        body: L(
          "الديناميكا الجزيئية الكلاسيكية تُعامِل الذرات كنقاط كتلة تحت قوة مشتقة من كمون V(r). الكمون هو مجال القوة (force field) الذي درسته في L6: روابط، زوايا، torsion، لينارد-جونز، كولوم. الحركة تكامل لقانون نيوتن، لا قفزة كوانتية ولا تكسير روابط (ما لم يكن النموذج تفاعلياً صراحة). الناتج مسار: مواضع وسرعات عبر الزمن. هذا المسار صادق لنموذجه. صدقه على البروتين في الخلية فرضية تُختبر بالمعاينة، وبالتجربة، وبوعي الحدود (لا استقطاب غالباً، ماء مبسّط، ليغند بمعاملات تقريبية).",
          "Classical molecular dynamics treats atoms as point masses under a force derived from a potential V(r). The potential is the force field you studied in L6: bonds, angles, torsions, Lennard-Jones, Coulomb. Motion is an integration of Newton’s law, not a quantum jump and not bond breaking (unless the model is explicitly reactive). The output is a trajectory: positions and velocities through time. That trajectory is true of its model. Its truth about the protein in the cell is a hypothesis tested by sampling, by experiment, and by knowing the limits (often no polarisation, simplified water, a ligand with approximate parameters).",
        ),
      },
      {
        type: "equation",
        id: "l9-newton-fma",
        latex: "\\mathbf{F}_{i} = m_{i}\\mathbf{a}_{i}",
        name: L("قانون نيوتن لكل ذرة", "Newton’s law per atom"),
        meaning: L(
          "تسارع الذرة i يساوي القوة الناتجة عليها مقسومة على كتلتها.",
          "Atom i’s acceleration is the net force on it divided by its mass.",
        ),
        variables: [
          {
            symbol: "\\mathbf{F}_{i}",
            name: L("محصلة القوى على الذرة i", "Net force on atom i"),
            unit: L("kJ mol⁻¹ nm⁻¹ (وحدات MD شائعة)", "kJ mol⁻¹ nm⁻¹ (common MD units)"),
          },
          {
            symbol: "m_{i}",
            name: L("كتلة الذرة", "Atomic mass"),
            unit: L("u", "u"),
          },
          {
            symbol: "\\mathbf{a}_{i}",
            name: L("التسارع", "Acceleration"),
            unit: L("nm ps⁻²", "nm ps⁻²"),
          },
        ],
        interpretation: L(
          "الهيدروجين أخف فيتسارع أكثر تحت نفس القوة — لذلك قيود H تسمح بخطوة زمنية أكبر. القانون لا يتضمن احتكاكاً ولا حرارة؛ الحرارة تدخل عبر منظم حرارة، والاحتكاك عبر Langevin إن اخترته.",
          "Hydrogen is lighter so it accelerates more under the same force — that is why constraining H allows a larger timestep. The law includes neither friction nor temperature; temperature enters through a thermostat, friction through Langevin if you choose it.",
        ),
        application: L(
          "كل خطوة MD: احسب القوى من V، حدّث التسارع، كامل المواضع.",
          "Every MD step: compute forces from V, update accelerations, integrate positions.",
        ),
      },
      {
        type: "equation",
        id: "l9-newton-grad",
        latex: "\\mathbf{F} = -\\nabla V",
        name: L("القوة تدرج الكمون", "Force as the gradient of the potential"),
        meaning: L(
          "القوة تشير إلى هبوط V. الذرة «تتدحرج» على سطح الطاقة الذي عرّفته معاملات المجال.",
          "Force points downhill in V. The atom “rolls” on the energy surface defined by the force-field parameters.",
        ),
        variables: [
          {
            symbol: "V",
            name: L("الكمون الكلي (مجال القوة)", "Total potential (the force field)"),
            unit: L("kJ mol⁻¹", "kJ mol⁻¹"),
          },
          {
            symbol: "\\nabla V",
            name: L("تدرج V في فضاء الإحداثيات", "Gradient of V in coordinate space"),
          },
        ],
        interpretation: L(
          "خطأ في V (شحنة خاطئة، LJ مفرط، torsion ناقص) يُصبح قوة خاطئة ثم مساراً خاطئاً. MD لا يُصحّح مجال قوة رديئاً؛ يُكشفه أحياناً بانفجارات أو بهيئات مشوّهة.",
          "An error in V (wrong charge, excessive LJ, missing torsion) becomes a wrong force then a wrong trajectory. MD does not correct a poor force field; it sometimes exposes it via explosions or distorted geometries.",
        ),
        application: L(
          "عند قراءة انفجار محاكاة، اسأل أولاً: أي حدّ في V غير فيزيائي (تداخل، شحنة عارية، قيد مكسور)؟",
          "When a simulation explodes, ask first: which term in V is unphysical (overlap, a bare charge, a broken constraint)?",
        ),
      },
      {
        type: "equation",
        id: "l9-newton-lj",
        latex:
          "V_{\\mathrm{LJ}}(r) = 4\\varepsilon\\left[\\left(\\frac{\\sigma}{r}\\right)^{12}-\\left(\\frac{\\sigma}{r}\\right)^{6}\\right]",
        name: L("لينارد-جونز", "Lennard-Jones"),
        meaning: L(
          "طرد قصير المدى (r⁻¹²، تجريبي) وتجاذب تشتتي (r⁻⁶).",
          "Short-range repulsion (r⁻¹², empirical) and dispersive attraction (r⁻⁶).",
        ),
        variables: [
          {
            symbol: "r",
            name: L("المسافة بين موقعين", "Distance between two sites"),
            unit: L("nm", "nm"),
          },
          {
            symbol: "\\varepsilon",
            name: L("عمق البئر", "Well depth"),
            unit: L("kJ mol⁻¹", "kJ mol⁻¹"),
          },
          {
            symbol: "\\sigma",
            name: L("مسافة انعدام الكمون", "Distance at which the potential is zero"),
            unit: L("nm", "nm"),
          },
        ],
        interpretation: L(
          "عند تداخل ذرات في بداية المحاكاة، r⁻¹² ينفجر رقمياً. لذلك نُقلّل الطاقة قبل الإنتاج. القطع (cutoff) يحذف الذيل؛ PME أو تكميلات تشتت تُعوّض الجزء الطويل إن طُلب.",
          "When atoms overlap at the start of a simulation, r⁻¹² explodes numerically. That is why we minimise before production. A cutoff deletes the tail; PME or dispersion corrections restore the long part if requested.",
        ),
        application: L(
          "افهم لماذا «خطوة 2 fs بعد قيود H» لا تنقذ نظاماً فيه ذرتان داخل 0.5 Å.",
          "Understand why a “2 fs timestep after H-constraints” does not save a system with two atoms inside 0.5 Å.",
        ),
      },
      {
        type: "why",
        id: "l9-newton-why",
        question: L(
          "لماذا نستخدم نيوتن الكلاسيكي لجزيء كوانتي في جوهره؟",
          "Why use classical Newton for a molecule that is quantum at heart?",
        ),
        answer: L(
          "لأن نوى الذرات الثقيلة نسبياً، عند 300 K، يمكن معاملتها كلاسيكياً لأسئلة هيئة وارتباط غير تساهمية على مقياس نانوثانية–ميكروثانية. الإلكترونات اختُصرت في V. هذا تقريب: نفق الهيدروجين، تكسير روابط، وحالات إثارة تخرج عن النموذج. MD أداة لمعاينة سطح مولود من MM، لا لحل شرودنغر.",
          "Because relatively heavy nuclei, at 300 K, can be treated classically for questions of conformation and noncovalent binding on nanosecond–microsecond scales. Electrons have been compressed into V. That is an approximation: hydrogen tunnelling, bond breaking, and excited states leave the model. MD is a tool for sampling an MM-born surface, not for solving Schrödinger.",
        ),
      },
      {
        type: "whatif",
        id: "l9-newton-whatif",
        scenario: L(
          "ماذا لو فسّرت إطاراً واحداً من المسار كـ «آلية التثبيط»؟",
          "What if you interpret a single frame of the trajectory as “the inhibition mechanism”?",
        ),
        consequence: L(
          "المسار عيّنة حرارية. إطار واحد قد يكون ذيل توزيع. الآلية تتطلّب حدثاً متكرراً أو مساراً حرّاً بين حالات، مع زمن إقامة. لقطة MD ليست أصدق من لقطة docking إلا إذا أظهرت الإحصاء ذلك.",
          "The trajectory is a thermal sample. One frame may be a tail of the distribution. A mechanism requires a repeated event or a free path between states, with residence. An MD snapshot is not more truthful than a docking snapshot unless the statistics show it.",
        ),
      },
      {
        type: "callout",
        id: "l9-newton-warn",
        kind: "warning",
        title: L("المسار ليس التجربة", "The trajectory is not the experiment"),
        body: L(
          "اتفاق RMSD منخفض مع بلورة يعني أن النموذج لم يهرب بعيداً في تلك النافذة الزمنية، لا أن كل تفاعل في المسار موجود في المحلول. اكتب «في هذا المجال وهذه المعاينة» كلما ادّعيت حركة.",
          "A low RMSD versus a crystal means the model did not drift far in that time window, not that every interaction in the trajectory exists in solution. Write “under this force field and this sampling” whenever you claim a motion.",
        ),
      },
      {
        type: "exercise",
        id: "l9-newton-ex",
        prompt: L(
          "ذرة H وذرة C تحت نفس |F|. قارن التسارعين، واشرح علاقة ذلك بقيود LINCS/SHAKE وخطوة 2 fs.",
          "An H atom and a C atom under the same |F|. Compare accelerations, and relate that to LINCS/SHAKE constraints and a 2 fs timestep.",
        ),
        solution: L(
          "m_H ≈ 1 u، m_C ≈ 12 u، فتسارع H أكبر بنحو 12 ضعفاً. اهتزاز X–H أسرع حدود النظام، ويحدّ الخطوة إلى ~0.5–1 fs إن تُرك حرّاً. قيود المسافة على H تزيل هذا النمط وتسمح بـ 2 fs شائع. القيود لا تُبرر 5 fs: زوايا وماء ودوران مجموعات ما زالت سريعة، والمكامل يفشل أو يضخ طاقة.",
          "m_H ≈ 1 u, m_C ≈ 12 u, so H accelerates ~12× more. X–H vibration is the fastest motion in the system and limits the timestep to ~0.5–1 fs if left free. Distance constraints on H remove that mode and allow the common 2 fs. Constraints do not justify 5 fs: angles, water, and group rotations remain fast, and the integrator fails or pumps energy.",
        ),
      },
      {
        type: "callout",
        id: "l9-newton-edu",
        kind: "educational",
        title: L("2 fs عرف شائع لا قانون", "2 fs is a common convention, not a law"),
        body: L(
          "مع قيود هيدروجين، 2 fs قياسية في كثير من بروتوكولات البروتين في الماء. بدون قيود، أقصر. مع mass repartitioning أو قيود أوسع قد تُناقش خطوات أطول — ذلك قرار يُختبر بثبات الطاقة في NVE، لا يُنسخ من ورقة مجاورة.",
          "With hydrogen constraints, 2 fs is standard in many protein-in-water protocols. Without constraints, shorter. With mass repartitioning or broader constraints, longer steps are sometimes discussed — that is a decision tested by energy stability in NVE, not copied from a neighbouring paper.",
        ),
      },
    ],
    ["l9-integrators", "l6-etotal", "l6-lj", "l3-gradients"],
  ),

  expand(
    "l9-integrators",
    [
      L(
        "شرح فكرة Verlet: مواضع من قوى دون اشتقاق سرعات كخطوة أولى ضرورية.",
        "Explain the Verlet idea: positions from forces without needing velocities as a first essential step.",
      ),
      L(
        "ربط الخطوة الزمنية بأسرع حركة متبقية بعد القيود.",
        "Tie the timestep to the fastest motion that remains after constraints.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l9-int-idea",
        title: L("المكامل هو حساب التفاضل للمواضع", "The integrator is calculus for positions"),
        body: L(
          "نعرف a = F/m في الزمن t، ونريد r عند t+Δt. مكامل Verlet (وصيغه: leap-frog، velocity-Verlet) يستخدم أن التسارع يدخل التوسعة التايلورية كحد Δt²، بينما حد السرعة الفردي يُلغى بين خطوة أمامية وخلفية. الناتج مستقر طويلًا إن كانت Δt صغيرة أمام أسرع اهتزاز، وحافظ للطاقة في NVE أفضل من Euler الساذج الذي ينفجر. اختيار المكامل في الممارسة غالباً ما يفرضه المحرّك (GROMACS leap-frog شائع). فهمك يُظهر في اختيار Δt والقيود، لا في إعادة اشتقاق الورقة الأصلية.",
          "We know a = F/m at time t and want r at t+Δt. Verlet (and its forms: leap-frog, velocity-Verlet) uses the fact that acceleration enters the Taylor expansion as a Δt² term, while the odd velocity term cancels between a forward and a backward step. The result is stable for a long time if Δt is small compared with the fastest vibration, and it conserves energy in NVE better than naive Euler, which explodes. In practice the engine often imposes the integrator (GROMACS leap-frog is common). Your understanding shows in the choice of Δt and constraints, not in re-deriving the original paper.",
        ),
      },
      {
        type: "equation",
        id: "l9-int-verlet",
        latex:
          "\\mathbf{r}(t+\\Delta t) = 2\\mathbf{r}(t)-\\mathbf{r}(t-\\Delta t)+\\mathbf{a}(t)(\\Delta t)^{2}",
        name: L("فكرة Verlet للمواضع", "Verlet idea for positions"),
        meaning: L(
          "الموضع اللاحق من الموضع الحالي والسابق والتسارع الحالي. السرعة ليست صريحة في هذه الصيغة.",
          "The next position from the current and previous positions and the current acceleration. Velocity is not explicit in this form.",
        ),
        variables: [
          {
            symbol: "\\mathbf{r}(t)",
            name: L("متجه موضع الذرة عند الزمن t", "Atom position vector at time t"),
            unit: L("nm", "nm"),
          },
          {
            symbol: "\\Delta t",
            name: L("الخطوة الزمنية", "Timestep"),
            unit: L("ps أو fs", "ps or fs"),
          },
          {
            symbol: "\\mathbf{a}(t)",
            name: L("التسارع من F/m", "Acceleration from F/m"),
            unit: L("nm ps⁻²", "nm ps⁻²"),
          },
        ],
        interpretation: L(
          "خطأ محلي من رتبة Δt⁴ في هذه العائلة (حسب الصيغة)، لكن الخطأ يتراكم. Δt كبيرة تجعل الحدود المهملة في تايلور غير مهملة: النظام يسخن أو ينهار. القيود (SHAKE، LINCS) تُحل بعد أو ضمن الخطوة لتعيد روابط H إلى طولها.",
          "Local error is O(Δt⁴) in this family (depending on the form), but error accumulates. A large Δt makes neglected Taylor terms un-negligible: the system heats or collapses. Constraints (SHAKE, LINCS) are solved after or within the step to restore H-bond lengths.",
        ),
        application: L(
          "اختبار صحة الخطوة: محاكاة NVE قصيرة ومراقبة انحراف الطاقة الكلية. انحراف منتظم متصاعد يعني Δt أخشن من الفيزياء.",
          "A test of the timestep: a short NVE run and monitoring of total-energy drift. A steady climb means Δt is coarser than the physics.",
        ),
      },
      {
        type: "list",
        id: "l9-int-family",
        title: L("صيغ تلتقي في الممارسة", "Forms you meet in practice"),
        items: [
          L(
            "Verlet الأصلي: مواضع؛ السرعات تُستنتج عند الحاجة.",
            "Original Verlet: positions; velocities are inferred when needed.",
          ),
          L(
            "leap-frog: سرعات نصف خطوة بعيداً عن المواضع. شائع في GROMACS.",
            "Leap-frog: velocities half a step away from positions. Common in GROMACS.",
          ),
          L(
            "velocity-Verlet: مواضع وسرعات متزامنة، مريح لمنظمات حرارة معيّنة.",
            "Velocity-Verlet: synchronised positions and velocities, convenient for some thermostats.",
          ),
          L(
            "Euler: لا تستخدمه لإنتاج MD. غير مستقر على هذا السطح.",
            "Euler: do not use it for production MD. Unstable on this surface.",
          ),
        ],
      },
      {
        type: "why",
        id: "l9-int-why",
        question: L(
          "لماذا لا نأخذ Δt = 5 fs «لنوفر الوقت» بعد تقييد الهيدروجين؟",
          "Why not take Δt = 5 fs “to save time” after constraining hydrogen?",
        ),
        answer: L(
          "لأن الماء وزوايا الثني ودوران مجموعات الميثيل ما زالت سريعة. المكامل يخطئ في تلك الحدود فيضخ طاقة (تسخين اصطناعي) أو يكسر قيوداً. التوفير الوهمي يُشترى بفيزياء تالفة. إن رغبت خطوة أطول، فالحجة تجريبية: استقرار NVE، لا شعار الإنتاجية.",
          "Because water, bending angles, and methyl rotations remain fast. The integrator mis-steps those modes, pumping energy (artificial heating) or breaking constraints. The illusory saving is paid for with damaged physics. If you want a longer step, the argument is empirical: NVE stability, not a productivity slogan.",
        ),
      },
      {
        type: "whatif",
        id: "l9-int-whatif",
        scenario: L(
          "ماذا لو كانت الطاقة في NVE تتذبذب حول متوسط ثابت، فانتقلت إلى إنتاج NPT بخطوة أكبر مرتين؟",
          "What if energy in NVE fluctuates around a stable mean, then you move to NPT production with a twice-larger step?",
        ),
        consequence: L(
          "اختبار NVE كان لـ Δt الأصلية. مضاعفة الخطوة تُعيد إدخال خطأ التكامل. منظم الحرارة قد يُخفي التسخين بامتصاص الطاقة الزائدة، فتبدو المحاكاة «مستقرة» وهي تُدفأ رقمياً. لا تُغيّر Δt بين الاختبار والإنتاج دون إعادة الاختبار.",
          "The NVE test was for the original Δt. Doubling the step reintroduces integration error. A thermostat may hide the heating by absorbing extra energy, so the simulation looks “stable” while being numerically warmed. Do not change Δt between test and production without retesting.",
        ),
      },
      {
        type: "callout",
        id: "l9-int-lim",
        kind: "limitation",
        title: L("المكامل لا يُصلح المعاينة", "The integrator does not fix sampling"),
        body: L(
          "مكامل ممتاز بخطوة مثالية على 20 ns قد لا يعبر حاجزاً إنتروبيًا. استقرار التكامل ≠ استكشاف المشهد. التقارب درس لاحق؛ هنا تتعلّم ألا تدمّر الطاقة قبل أن تبدأ المعاينة.",
          "An excellent integrator with an ideal step on 20 ns may still not cross an entropic barrier. Integration stability ≠ landscape exploration. Convergence is a later lesson; here you learn not to destroy the energy before sampling starts.",
        ),
      },
      {
        type: "callout",
        id: "l9-int-warn",
        kind: "warning",
        title: L("قيود مكسورة إنذار لا تفصيل تقني", "Broken constraints are an alarm, not a technicality"),
        body: L(
          "تحذيرات LINCS/SHAKE المتكررة تعني هندسة غير فيزيائية أو Δt كبيرة أو تداخل ذرات. تجاهلها يُكمل المسار بأرقام، لا بفيزياء. أوقف، قلّل، افحص الليجند.",
          "Repeated LINCS/SHAKE warnings mean unphysical geometry, a large Δt, or atomic overlap. Ignoring them continues the trajectory with numbers, not with physics. Stop, minimise, inspect the ligand.",
        ),
      },
      {
        type: "exercise",
        id: "l9-int-ex",
        prompt: L(
          "صف تجربة ذهنية تُظهر لماذا Euler ينفجر بينما Verlet يبقى على بندول توافقي تقريباً.",
          "Give a thought experiment showing why Euler explodes while Verlet stays on an almost harmonic oscillator.",
        ),
        solution: L(
          "في Euler، تحديث السرعة ثم الموضع يضخّم الطاقة لأن الخطأ في الطور يضع الجسيم خارج القطع الناقص للطاقة. Verlet يستخدم الموضع السابق كذاكرة عكسية الزمن تقريباً، فيبقى على مدار قريب من الحفاظ. في الجزيء، نفس الفكرة: أسطح شبه توافقية للروابط. Euler يُسخّن الرابطة حتى تنفجر؛ Verlet يحفظ الطاقة إن صغرت Δt.",
          "In Euler, updating velocity then position pumps energy because a phase error places the particle off the energy ellipse. Verlet uses the previous position as an approximate time-reversal memory, staying on a nearly conserving orbit. In a molecule the same idea holds: bonds are nearly harmonic surfaces. Euler heats the bond until it explodes; Verlet conserves energy if Δt is small.",
        ),
      },
    ],
    ["l9-newton", "l9-min", "l3-integration", "l9-mistakes"],
  ),

  expand(
    "l9-system",
    [
      L(
        "عدّ مكونات النظام: بروتين، ليغند، مجال قوة، ماء، أيونات، وصندوق.",
        "List the system components: protein, ligand, force field, water, ions, and box.",
      ),
      L(
        "معرفة أن تحضير الليجند (شحنات، atom types) قرار فيزيائي يساوي اختيار مجال البروتين.",
        "Treat ligand preparation (charges, atom types) as a physics decision equal to the protein force-field choice.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l9-sys-parts",
        title: L("النظام ليس ملف PDB", "The system is not a PDB file"),
        body: L(
          "PDB بداية إحداثيات ناقصة: بلا هيدروجين غالباً، برواسب ناقصة، altloc، بلورات مع ليغندات لا تريدها، وشحنات غير موجودة. النظام الفيزيائي الذي ستُحاكيه هو: بروتين مكتمل الطرفين (أو مُسوَّغ النقص)، ليغند بمعاملات (GAFF / CGenFF / OpenFF أو ما يعادل)، ماء بنموذج صريح، أيونات تُعادِل الشحنة وتقارب تركيزاً إن لزم، وصندوق تحت PBC. كل نقص هنا يظهر لاحقاً كـ «اكتشاف» زائف: عروة مقطوعة تتراقص، ليغند بلا torsion صحيح يتجمّد في هيئة خاطئة، شحنة غير متعادلة تسحب الأيونات إلى حافة الصندوق.",
          "A PDB is a start of incomplete coordinates: often no hydrogens, missing residues, altlocs, crystal ligands you do not want, and no charges. The physical system you will simulate is: a protein with finished termini (or a justified truncation), a ligand with parameters (GAFF / CGenFF / OpenFF or equivalent), explicit water of a chosen model, ions that neutralise charge and approach a concentration if required, and a box under PBC. Every omission shows up later as a fake “finding”: a chopped loop flailing, a ligand without the right torsion frozen in a wrong pose, a non-neutral charge pulling ions to the box edge.",
        ),
      },
      {
        type: "steps",
        id: "l9-sys-build",
        title: L("بناء النظام", "Building the system"),
        items: [
          {
            title: L("البروتين", "Protein"),
            body: L(
              "اختر سلسلة، عالج altloc، أكمل الرواسب الناقصة أو احذفها بوعي، عيّن protonation (خاصة HIS، ASP/GLU المدفونة، طرفي السلسلة)، طبّق مجال القوة.",
              "Choose a chain, handle altlocs, complete or knowingly delete missing residues, assign protonation (especially HIS, buried ASP/GLU, termini), apply the force field.",
            ),
          },
          {
            title: L("الليجند", "Ligand"),
            body: L(
              "هندسة معقولة، شحنات (RESP أو AM1-BCC حسب المنهج)، وأنواع ذرات متوافقة مع المجال. لا تخلط GAFF داخل CHARMM دون منهج هجين واعٍ.",
              "Reasonable geometry, charges (RESP or AM1-BCC according to the protocol), and atom types compatible with the force field. Do not mix GAFF inside CHARMM without a conscious hybrid protocol.",
            ),
          },
          {
            title: L("المذيب والأيونات", "Solvent and ions"),
            body: L(
              "نموذج ماء متوافق مع المجال (TIP3P شائع مع AMBER/CHARMM؛ SPC/E مع GROMOS). تعادل الشحنة، ثم تركيز ملحي إن كان السؤال فسيولوجياً.",
              "A water model compatible with the force field (TIP3P common with AMBER/CHARMM; SPC/E with GROMOS). Neutralise charge, then a salt concentration if the question is physiological.",
            ),
          },
          {
            title: L("الصندوق", "Box"),
            body: L(
              "شكل (مكعب، dodecahedron) وهامش إلى الحافة. صغير جداً: البروتين يرى صورته. كبير جداً: ماء يأكل الوقت.",
              "Shape (cubic, dodecahedron) and margin to the edge. Too small: the protein sees its image. Too large: water eats walltime.",
            ),
          },
        ],
      },
      {
        type: "list",
        id: "l9-sys-ff",
        title: L("اختيار المجال قرار علمي", "Force-field choice is a scientific decision"),
        items: [
          L(
            "AMBER وCHARMM وOPLS وGROMOS عائلات بمعاملات ماء وشحنات مختلفة. لا تخلط ماء TIP3P مع مجال يتوقع SPC دون علم.",
            "AMBER, CHARMM, OPLS, and GROMOS are families with different water and charge parameters. Do not mix TIP3P water with a field that expects SPC without knowing it.",
          ),
          L(
            "الليجند ليس «بروتيناً صغيراً»: يحتاج توسيط معاملات. خطأ شائع: أخذ PDBQT من docking وتشغيل MD.",
            "A ligand is not a “small protein”: it needs parameterisation. A common error: taking docking PDBQT and running MD.",
          ),
          L(
            "المعادن cofactors تحتاج نماذج خاصة (dummy atoms، أو QM/MM). شحنة +2 على كرة LJ نادراً ما تكفي للتناسق.",
            "Metal cofactors need specialised models (dummy atoms, or QM/MM). A +2 charge on an LJ sphere is rarely enough for coordination.",
          ),
        ],
      },
      {
        type: "why",
        id: "l9-sys-why",
        question: L(
          "لماذا تعادل الشحنة قبل الإنتاج وليس «لاحقاً إن ظهرت مشكلة»؟",
          "Why neutralise charge before production rather than “later if a problem appears”?",
        ),
        answer: L(
          "تحت PBC مع PME، نظام غير متعادل يتفاعل مع خلفيته الدورية بطريقة غير فيزيائية: طاقة كهربية تعتمد على الاصطلاح. الأيونات المعادِلة ليست تجميلاً؛ هي جزء من تعريف الحالة. يمكنك مناقشة التركيز (0 مقابل 0.15 M)، لا مناقشة ترك شحنة صافية بلا معالجة.",
          "Under PBC with PME, a non-neutral system interacts with its periodic background in an unphysical way: the electrostatic energy depends on convention. Neutralising ions are not decoration; they are part of the definition of the state. You may discuss concentration (0 versus 0.15 M); you may not discuss leaving a net charge untreated.",
        ),
      },
      {
        type: "whatif",
        id: "l9-sys-whatif",
        scenario: L(
          "ماذا لو تركت رواسب ناقصة في عروة الجيب لأن «البلورة لم ترها»؟",
          "What if you leave missing residues in a pocket loop because “the crystal did not see them”?",
        ),
        consequence: L(
          "المحاكاة تُكمل الفيزياء على سلسلة مقطوعة: أطراف مشحونة وهمية في منتصف العروة، ومرونة مفقودة. إما تبني العروة (homology / أدوات إكمال) وتعلن الفرضية، أو تحذف المنطقة بوعي إن كانت بعيدة عن السؤال. الصمت يُنتج حركة تُنشر كاكتشاف.",
          "The simulation completes physics on a chopped chain: fake charged termini in the middle of a loop, and missing flexibility. Either build the loop (homology / completion tools) and state the hypothesis, or delete the region knowingly if it is far from the question. Silence produces a motion that gets published as a finding.",
        ),
      },
      {
        type: "callout",
        id: "l9-sys-warn",
        kind: "warning",
        title: L("PDBQT ليس طوبولوجيا MD", "PDBQT is not an MD topology"),
        body: L(
          "شحنات AutoDock وأنواعه ليست GAFF وليست CHARMM. تشغيل mdrun على ملف التحام دون إعادة parameterization لليجند خطأ فئة أُولى.",
          "AutoDock charges and types are neither GAFF nor CHARMM. Running mdrun on a docking file without re-parameterising the ligand is a first-class error.",
        ),
      },
      {
        type: "callout",
        id: "l9-sys-lim",
        kind: "limitation",
        title: L("كل إكمال فرضية", "Every completion is a hypothesis"),
        body: L(
          "بناء العروة، اختيار tautomer لـ HIS، وإضافة غشاء حول بروتين غشائي — كلها لم تُرَ في تجربتك. وثّقها كقرارات، وكرر بديلًا إن كان السؤال حساساً لها.",
          "Building a loop, choosing a HIS tautomer, and adding a membrane around a membrane protein — none of these was seen in your experiment. Document them as decisions, and repeat an alternative if the question is sensitive to them.",
        ),
      },
      {
        type: "exercise",
        id: "l9-sys-ex",
        prompt: L(
          "بروتين شحنته الصافية −8، صندوق TIP3P، تريد تقريباً 0.15 M NaCl. ما الذي يجب أن تقرره قبل genion، وما الخطأ إن أضفت 8 Na⁺ فقط؟",
          "A protein with net charge −8, TIP3P box, you want roughly 0.15 M NaCl. What must you decide before genion, and what is wrong if you add only 8 Na⁺?",
        ),
        solution: L(
          "يجب أن تعرف حجم الصندوق بعد solvation لحساب عدد الأيونات الذي يقابل التركيز، بالإضافة إلى التعادل. 8 Na⁺ تعادل الشحنة لكنها صفر ملح إضافي: القوة الأيونية أقل من الفسيولوجيا. إن كان السؤال عن سطح مشحون أو RNA أو مواقع أيونية، فالفرق قد يغيّر التوزيع. اكتب إن كان التعادل فقط أو تعادل+تركيز.",
          "You must know the box volume after solvation to compute the ion count that matches the concentration, on top of neutralisation. 8 Na⁺ neutralise charge but add no extra salt: ionic strength is below physiology. If the question concerns a charged surface, RNA, or ion sites, the difference can change the distribution. State whether you only neutralised or also set a concentration.",
        ),
      },
      {
        type: "viewer",
        id: "l9-sys-1hsg",
        pdb: "1HSG",
        ligand: "MK1",
        caption: L(
          "1HSG كمثال تحضير: مثنوي، فلاب، ليغند كبير، وماء بلوري. أي MD هنا يبدأ بأسئلة protonation للأسبرتات التحفيزية ومعاملات indinavir — لا بـ mdrun مباشرة.",
          "1HSG as a preparation example: a dimer, flaps, a large ligand, and crystal waters. Any MD here starts with protonation of the catalytic aspartates and parameters for indinavir — not with mdrun immediately.",
        ),
      },
    ],
    ["l9-pbc", "l9-gromacs", "l6-ligandff", "l6-families", "l4-pdb"],
  ),

  expand(
    "l9-pbc",
    [
      L(
        "شرح PBC والصورة الدنيا كمسرح لا كحقيقة بيولوجية.",
        "Explain PBC and the minimum image as a stage, not as biological truth.",
      ),
      L(
        "وضع PME كحل عملي لكولوم الدوري دون اشتقاق مزيف.",
        "Place PME as a practical solution for periodic Coulomb without a fake derivation.",
      ),
      L(
        "تمييز نماذج الماء TIP3P وTIP4P وSPC وSPC/E.",
        "Distinguish TIP3P, TIP4P, SPC, and SPC/E water models.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l9-pbc-stage",
        title: L("لماذا صندوق دوري؟", "Why a periodic box?"),
        body: L(
          "محاكاة بروتين في قطرة ماء في الفراغ تُنشئ سطحاً: جهد سطحي، تبخّر وهمي، وقوى على البروتين نحو المركز أو بعيداً عنه. الحدود الدورية (PBC) تكرر الصندوق في كل الاتجاهات فيُصبح كل جزيء ماء محاطاً بماء لا بفراغ. الثمن: البروتين قد يتفاعل مع صورته عبر الماء إن كان الصندوق ضيقاً، والكهرباء صارت مجموع شبكة لا نهائية من الشحنات. PME (Particle Mesh Ewald) يفصل كولوم إلى جزء قصير المدى في الفضاء الحقيقي وجزء طويل المدى على شبكة Fourier، فيجعل المجموع الدوري قابلاً للحساب. هذا هندسة حساب، لا إثبات أن الخلية بلورة بروتين.",
          "Simulating a protein in a water droplet in vacuum creates a surface: surface tension, fictitious evaporation, and forces on the protein toward or away from the centre. Periodic boundary conditions (PBC) tile the box in all directions so every water molecule is surrounded by water, not vacuum. The cost: the protein may interact with its image through water if the box is tight, and electrostatics become the sum of an infinite lattice of charges. PME (Particle Mesh Ewald) splits Coulomb into a short-range real-space piece and a long-range piece on a Fourier mesh, making the periodic sum computable. That is computational engineering, not proof that the cell is a protein crystal.",
        ),
      },
      {
        type: "list",
        id: "l9-pbc-water",
        title: L("نماذج الماء — توافق لا «دقة مطلقة»", "Water models — compatibility, not “absolute accuracy”"),
        items: [
          L(
            "TIP3P: ثلاثة مواقع، شائع مع AMBER وCHARMM. انتشار ذاتي أعلى من التجربة عادة. رخيص.",
            "TIP3P: three sites, common with AMBER and CHARMM. Self-diffusion usually higher than experiment. Cheap.",
          ),
          L(
            "TIP4P: أربعة مواقع (شحنة سالبة على موقع M وهمي). خصائص سائل أفضل في بعض المقاييس، أغلى قليلاً.",
            "TIP4P: four sites (negative charge on a dummy M site). Better liquid properties on some metrics, slightly more expensive.",
          ),
          L(
            "SPC: ثلاثة مواقع، تاريخياً مع GROMOS. هندسة وcharges مختلفة عن TIP3P.",
            "SPC: three sites, historically with GROMOS. Geometry and charges differ from TIP3P.",
          ),
          L(
            "SPC/E: SPC مع تصحيح استقطاب فعّال. انتشار أقرب للتجربة من SPC في سياقات شائعة.",
            "SPC/E: SPC with an effective polarisation correction. Diffusion closer to experiment than SPC in common contexts.",
          ),
        ],
      },
      {
        type: "compare",
        id: "l9-pbc-cutoff-pme",
        left: L("قطع كولوم فقط", "Coulomb cutoff only"),
        right: L("PME", "PME"),
        rows: [
          {
            dim: L("الذيل الطويل", "Long tail"),
            a: L("يُحذف. خطأ كبير للشحنات الصافية والأسطح القطبية.", "Deleted. Large error for net charges and polar surfaces."),
            b: L("يُعالَج في فضاء الموجة.", "Treated in reciprocal space."),
          },
          {
            dim: L("التكلفة", "Cost"),
            a: L("أرخص في أنظمة صغيرة جداً، غير مقبول كفيزياء قياسية اليوم لبروتين في ماء.", "Cheaper in tiny systems; not acceptable as default physics today for a protein in water."),
            b: L("تكلفة شبكة؛ المعيار في الممارسة.", "Mesh cost; the practical standard."),
          },
          {
            dim: L("ماذا تتذكر", "What to remember"),
            a: L("القطع ليس «نيوترال».", "A cutoff is not “neutral.”"),
            b: L("PME يفترض دورية. صندوق ضيق يجعل الدورية جزءاً من الفيزياء.", "PME assumes periodicity. A tight box makes periodicity part of the physics."),
          },
        ],
      },
      {
        type: "callout",
        id: "l9-pbc-edu",
        kind: "educational",
        title: L("هامش ~1 nm قاعدة عمل شائعة", "A ~1 nm margin is a common working rule"),
        body: L(
          "إبقاء البروتين على بعد نحو 1 nm أو أكثر من حافة الصندوق يقلّل تفاعل الصورة عبر طبقة الماء. القاعدة ليست مشتقة لكل نظام: بروتين مشحون جداً، أو DNA، قد يحتاج أكثر. الهامش يُقاس بعد التذاوب لا من PDB الجاف.",
          "Keeping the protein about 1 nm or more from the box edge reduces image interaction through the water layer. The rule is not derived for every system: a highly charged protein, or DNA, may need more. The margin is measured after solvation, not from the dry PDB.",
        ),
      },
      {
        type: "why",
        id: "l9-pbc-why",
        question: L(
          "لماذا يُفضَّل dodecahedron أحياناً على المكعب؟",
          "Why is a dodecahedron sometimes preferred to a cube?",
        ),
        answer: L(
          "لأن البروتين شبه كروي يُحاط بماء أقل لنفس الهامش الأدنى إلى الصورة، فيقل عدد ذرات الماء — وهو أغلب تكلفة mdrun. الشكل قرار كفاءة تحت قيد فيزيائي (الهامش)، لا تجميلاً.",
          "Because a roughly spherical protein is surrounded by less water for the same minimum margin to the image, so the water atom count drops — and that is most of the mdrun cost. Shape is an efficiency decision under a physical constraint (the margin), not decoration.",
        ),
      },
      {
        type: "whatif",
        id: "l9-pbc-whatif",
        scenario: L(
          "ماذا لو كان الصندوق بالكاد أكبر من البروتين، ورأيت في المسار «ارتباطاً» بين عروتين متقابلتين؟",
          "What if the box is barely larger than the protein, and you see in the trajectory an “interaction” between two opposite loops?",
        ),
        consequence: L(
          "قد تكون العروتان تتفاعلان عبر PBC مع الصورة الدورية. افحص المسافة إلى الصورة لا المسافة داخل السلسلة فقط. هذا اصطناع حدود، لا آلية allostery. أعد بصندوق أكبر قبل النشر.",
          "The two loops may be interacting through PBC with the periodic image. Check distance to the image, not only distance within the chain. That is a boundary artefact, not an allosteric mechanism. Rerun with a larger box before publishing.",
        ),
      },
      {
        type: "callout",
        id: "l9-pbc-warn",
        kind: "warning",
        title: L("لا تخلط نموذج الماء مع المجال", "Do not mix the water model and the force field naively"),
        body: L(
          "معاملات البروتين دُرّبت أو نُوقشت مع ماء معيّن. TIP3P مع GROMOS، أو SPC مع AMBER، يُغيّر إذابة وتفاعلات سطحية. التوافق جزء من الفيزياء.",
          "Protein parameters were trained or discussed with a particular water. TIP3P with GROMOS, or SPC with AMBER, changes solvation and surface interactions. Compatibility is part of the physics.",
        ),
      },
      {
        type: "callout",
        id: "l9-pbc-lim",
        kind: "limitation",
        title: L("PME لا يجعل الكهروستاتيك «كمومية»", "PME does not make electrostatics “quantum”"),
        body: L(
          "ما زالت شحنات نقطية ثابتة (في MM العادي) في وسط عازل بالقطع. الاستقطاب الحقيقي، ونقل الشحنة، وتناسق المعدن خارج النموذج. PME يحل المجموع الدوري لتلك الشحنات، لا يُرقّيها.",
          "They are still fixed point charges (in ordinary MM) in a dielectric-by-cutoff medium. True polarisation, charge transfer, and metal coordination remain outside the model. PME solves the periodic sum of those charges; it does not upgrade them.",
        ),
      },
      {
        type: "exercise",
        id: "l9-pbc-ex",
        prompt: L(
          "بروتين أبعاده التقريبية 6×4×4 nm. اقترح صندوقاً مكعباً بهامش 1.2 nm، واشرح ثمن اختيار 0.4 nm «لتسريع GPU».",
          "A protein of approximate dimensions 6×4×4 nm. Propose a cubic box with a 1.2 nm margin, and explain the cost of choosing 0.4 nm “to speed up the GPU.”",
        ),
        solution: L(
          "أطول بُعد 6 nm + 2×1.2 nm = 8.4 nm ضلع المكعب على الأقل (بعد محاذاة مناسبة). هامش 0.4 nm يضع سطحي بروتين على ~0.8 nm بين الصورة والصورة: طبقة ماء غير كافية، وPME سيُمرّر تفاعلات صورة. التسريع حقيقي لأن الماء أقل؛ الفيزياء تالفة. لا تشتري ساعات GPU بحدود ضيقة على سؤال كهروستاتيكي.",
          "Longest dimension 6 nm + 2×1.2 nm = 8.4 nm cube edge at least (after suitable alignment). A 0.4 nm margin puts protein surfaces ~0.8 nm apart image-to-image: an insufficient water layer, and PME will pass image interactions. The speedup is real because there is less water; the physics is damaged. Do not buy GPU hours with a tight boundary on an electrostatic question.",
        ),
      },
    ],
    ["l9-system", "l9-gromacs", "l6-coulomb", "l9-ensembles"],
  ),

  expand(
    "l9-min",
    [
      L(
        "تبرير تقليل الطاقة كإزالة تداخلات لا كإيجاد الهيئة العالمية.",
        "Justify minimisation as clash removal, not as finding the global conformer.",
      ),
      L(
        "تمييز steepest descent عن conjugate gradient في بداية MD.",
        "Distinguish steepest descent from conjugate gradient at the start of MD.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l9-min-role",
        title: L("لماذا نُقلّل قبل أن نُحرّك؟", "Why minimise before we move?"),
        body: L(
          "بعد إضافة هيدروجين وماء وأيونات، توجد تداخلات: H داخل جدار ثقيل، أيون فوق شحنة، ليغند من docking بزاوية مكسورة. LJ عند r صغير غير مستقر رقمياً. التقليل ينزل محلياً على V حتى تصبح القوى قابلة للتكامل. هذا ليس بحثاً عن الهيئة النشطة حيوياً، ولا «تحسين الدواء». إن أطلت التقليل على بروتين في ماء فقد تُجمّد عيّنة بعيدة عن الحرارية ثم تُفاجأ عند التسخين. الهدف: استقرار رقمي، لا إكمال التصميم.",
          "After adding hydrogens, water, and ions, overlaps exist: an H inside a heavy wall, an ion on top of a charge, a docking ligand with a broken angle. LJ at small r is numerically unstable. Minimisation walks locally down V until forces are integrable. This is not a search for the bioactive conformer, and not “drug optimisation.” If you minimise a protein in water for too long you may freeze a sample far from thermal then be surprised on heating. The goal: numeric stability, not finishing the design.",
        ),
      },
      {
        type: "list",
        id: "l9-min-algs",
        title: L("خوارزميتان تراهمما في المحركات", "Two algorithms you will see in engines"),
        items: [
          L(
            "Steepest descent: خطوة عكس التدرج. قوي على التداخلات الشديدة في البداية، بطيء قرب الحد الأدنى، قد يهتز.",
            "Steepest descent: a step against the gradient. Strong on severe clashes at the start, slow near a minimum, may oscillate.",
          ),
          L(
            "Conjugate gradient: اتجاهات مترافقة تستفيد من تاريخ التدرج. أفضل بعد أن تهدأ القوى الكبيرة.",
            "Conjugate gradient: conjugate directions that use gradient history. Better after large forces have quieted.",
          ),
        ],
      },
      {
        type: "why",
        id: "l9-min-why",
        question: L(
          "لماذا يبدأ كثير من البروتوكولات بـ steepest descent ثم CG؟",
          "Why do many protocols start with steepest descent then CG?",
        ),
        answer: L(
          "لأن التداخل الأولي يجعل سطح V قاسياً جداً؛ CG يفترض سلوكاً ألطف. SD يبتلع الكارثة، ثم CG يُنهي بهدوء. الترتيب هندسة رقمية، لا نظرية ارتباط.",
          "Because the initial overlap makes V extremely steep; CG assumes milder behaviour. SD swallows the catastrophe, then CG finishes quietly. The order is numeric engineering, not binding theory.",
        ),
      },
      {
        type: "whatif",
        id: "l9-min-whatif",
        scenario: L(
          "ماذا لو انهار التقليل فوراً أو تجمدت الطاقة عند قيمة فلكية؟",
          "What if minimisation collapses immediately or energy freezes at an astronomical value?",
        ),
        consequence: L(
          "تداخل لم يُزل: ذرات متطابقة، ليغند في قلب سلسلة جانبية، صندوق يقطع البروتين، أو طوبولوجيا بروابط خاطئة. لا تزد عدد الخطوات. افتح الإحداثيات والطوبولوجيا. MD بعد فشل التقليل يُفجّر النظام في الفيمتوثانية.",
          "An overlap was not removed: coincident atoms, a ligand inside a side chain, a box clipping the protein, or a topology with wrong bonds. Do not increase the step count. Open the coordinates and the topology. MD after failed minimisation explodes the system in femtoseconds.",
        ),
      },
      {
        type: "callout",
        id: "l9-min-warn",
        kind: "warning",
        title: L("التقليل لا يُشرعن هيئة docking", "Minimisation does not legitimise a docking pose"),
        body: L(
          "إنزال القوى على هيئة غير فيزيائية يُنتج هيئة غير فيزيائية بطاقة أقل قليلاً. لا تكتب «حُسّنت الهيئة بالتقليل إذن هي مستقرة». الاستقرار الحراري يُختبر في مسار، بمعاينة، بنسخ.",
          "Lowering forces on an unphysical pose yields an unphysical pose at slightly lower energy. Do not write “the pose was minimised, therefore it is stable.” Thermal stability is tested in a trajectory, with sampling, with replicas.",
        ),
      },
      {
        type: "callout",
        id: "l9-min-lim",
        kind: "limitation",
        title: L("الحد الأدنى المحلي ليس ΔG", "A local minimum is not ΔG"),
        body: L(
          "V_min كمية كمون عند صفر كلفن نموذجي في هذا السياق، بلا إنتروبي، وبلا حالة مرجعية unbound. مقارنة V_min لليجندين ليست MM/PBSA حتى، فضلاً عن FEP.",
          "V_min is a potential at a notional zero kelvin in this context, with no entropy and no unbound reference. Comparing V_min of two ligands is not even MM/PBSA, let alone FEP.",
        ),
      },
      {
        type: "exercise",
        id: "l9-min-ex",
        prompt: L(
          "بعد 5000 خطوة SD ما زالت أقصى قوة فوق عتبة معقولة، وLINCS سيُحذّر. ماذا تفعل بالترتيب؟",
          "After 5000 SD steps the maximum force is still above a reasonable threshold, and LINCS will warn. What do you do, in order?",
        ),
        solution: L(
          "(1) حدّد الذرات ذات القوة الهائلة (غالباً الليجند أو طرف مقطوع أو أيون). (2) افحص التداخل في عارض. (3) أصلح الكيمياء/الموضع، لا تُطيل SD عشوائياً. (4) إن كان التداخل طفيفاً بعد الإصلاح، قيود موضع في بداية الاتزان قد تساعد. (5) لا تبدأ إنتاجاً.",
          "(1) Identify atoms with huge forces (often the ligand, a chopped terminus, or an ion). (2) Inspect the overlap in a viewer. (3) Fix the chemistry/placement; do not blindly lengthen SD. (4) If overlap is mild after the fix, positional restraints at the start of equilibration may help. (5) Do not start production.",
        ),
      },
    ],
    ["l9-ensembles", "l9-gromacs", "l3-opt", "l8-poses"],
  ),

  expand(
    "l9-ensembles",
    [
      L(
        "تعريف N,V,T,P فيزيائياً وتمييز NVT عن NPT وعن NVE.",
        "Define N, V, T, P physically and distinguish NVT from NPT from NVE.",
      ),
      L(
        "مقارنة Berendsen وNosé–Hoover وLangevin وv-rescale، وBerendsen وParrinello–Rahman وMC للضغط.",
        "Compare Berendsen, Nosé–Hoover, Langevin, and v-rescale, and Berendsen, Parrinello–Rahman, and MC for pressure.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l9-ens-letters",
        title: L("ماذا تعني الحروف؟", "What do the letters mean?"),
        body: L(
          "N عدد الجسيمات (الذرات أو المواقع في النموذج): في محاكاة مغلقة لا يُخلق بروتين فجأة. V حجم الصندوق: يتغير إن سمح الباروستات. T درجة الحرارة: مقياس لطاقة الحركة عبر معدّل يرتبط بـ kB، تُضبط بمنظم حرارة لا بـ «ضبط الرقم في الإعداد ونسيانه». P الضغط: قوة على وحدة مساحة من الاصطدامات والتفاعلات مع جدران وهمية للصندوق؛ يُضبط بتغيير الحجم (أو محاولات MC للحجم). E الطاقة الكلية تُحفظ في NVE (الميكروكانوني) إن أحسن المكامل. H الإنثالبي ذات صلة بـ NPT. المختبر البيولوجي أقرب إلى T وP ثابتين (حمام مائي، 1 bar) لذا الإنتاج غالباً NPT بعد اتزان. NVE أداة تشخيص للمكامل.",
          "N is the number of particles (atoms or sites in the model): in a closed simulation a protein is not suddenly created. V is the box volume: it changes if the barostat allows. T is temperature: a measure of kinetic energy through an average related to kB, controlled by a thermostat, not by “setting the number in the input and forgetting it.” P is pressure: force per area from collisions and interactions with the box’s fictitious walls; it is controlled by changing volume (or by MC volume moves). E, the total energy, is conserved in NVE (microcanonical) if the integrator is behaving. H, enthalpy, is the NPT partner. The biological lab is closer to fixed T and P (water bath, 1 bar), so production is often NPT after equilibration. NVE is a diagnostic tool for the integrator.",
        ),
      },
      {
        type: "compare",
        id: "l9-ens-nvt-npt",
        left: L("NVT", "NVT"),
        right: L("NPT", "NPT"),
        rows: [
          {
            dim: L("الثوابت", "Held fixed"),
            a: L("عدد الجسيمات، الحجم، درجة الحرارة.", "Particle number, volume, temperature."),
            b: L("عدد الجسيمات، الضغط، درجة الحرارة.", "Particle number, pressure, temperature."),
          },
          {
            dim: L("ما يتحرك", "What moves"),
            a: L("السرعات تُعدَّل لتطابق T؛ الحجم ثابت.", "Velocities are adjusted to match T; volume is fixed."),
            b: L("الحجم يتقلب ليطابق P، والسرعات لتطابق T.", "Volume fluctuates to match P, velocities to match T."),
          },
          {
            dim: L("الاستخدام النموذجي", "Typical use"),
            a: L("اتزان حراري بعد التسخين؛ أحياناً إنتاج إن كان الحجم مُعايَراً.", "Thermal equilibration after heating; sometimes production if volume is already calibrated."),
            b: L("اتزان كثافة ثم إنتاج يشبه المختبر.", "Density equilibration then lab-like production."),
          },
        ],
      },
      {
        type: "list",
        id: "l9-ens-thermo",
        title: L("منظمات الحرارة", "Thermostats"),
        items: [
          L(
            "Berendsen: إعادة تدريج ضعيفة للسرعات نحو T الهدف. يُخمِد التقلبات، لا يولّد ensemble قانوني صارم. مقبول لاتزان قصير، مرفوض كإنتاج دون وعي.",
            "Berendsen: weak rescaling of velocities toward the target T. It damps fluctuations and does not generate a strict canonical ensemble. Acceptable for short equilibration; unacceptable as unthinking production.",
          ),
          L(
            "Nosé–Hoover: درجة حرية ممتدة (حمام وهمي). يقارب NVT الصحيح، قد يتذبذب، وحذر مع أنظمة ضعيفة الارتباط.",
            "Nosé–Hoover: an extended degree of freedom (fictitious bath). Approaches correct NVT, may oscillate, and needs care with weakly coupled systems.",
          ),
          L(
            "Langevin: احتكاك + ضجيج عشوائي يحقق توازن تذبذب-تبديد. يعاين NVT، ويُخمِد الديناميكا الهيدروديناميكية (الانتشار يتأثر).",
            "Langevin: friction + random noise satisfying fluctuation–dissipation. Samples NVT, and damps hydrodynamics (diffusion is affected).",
          ),
          L(
            "v-rescale (Bussi–Donadio–Parrinello): إعادة تدريج مع حد عشوائي يُصلح توزيع الطاقة الحركية. شائع في GROMACS للإنتاج.",
            "v-rescale (Bussi–Donadio–Parrinello): rescaling with a stochastic term that corrects the kinetic-energy distribution. Common in GROMACS for production.",
          ),
        ],
      },
      {
        type: "list",
        id: "l9-ens-baro",
        title: L("منظمات الضغط", "Barostats"),
        items: [
          L(
            "Berendsen: تدريج حجم ضعيف. يُقرّب الكثافة بسرعة، يُخمِد تقلبات الضغط. اتزان لا إنتاج صارم.",
            "Berendsen: weak volume scaling. Approaches density quickly, damps pressure fluctuations. Equilibration, not strict production.",
          ),
          L(
            "Parrinello–Rahman: ديناميكا ممتدة للصندوق (قد تسمح بشكل متغير). مناسب لإنتاج NPT بعد استقرار. إن وُضع قبل اتزان الحجم فقد يتذبذب بعنف.",
            "Parrinello–Rahman: extended-box dynamics (may allow shape change). Suitable for NPT production after the volume has settled. If switched on before volume equilibration it can oscillate violently.",
          ),
          L(
            "MC barostat: محاولات عشوائية لتغيير الحجم تُقبل بـ Metropolis. شائع في OpenMM وبعض بروتوكولات AMBER. لا ديناميكا حجم ممتدة.",
            "MC barostat: random volume-change attempts accepted with Metropolis. Common in OpenMM and some AMBER protocols. No extended-volume dynamics.",
          ),
        ],
      },
      {
        type: "why",
        id: "l9-ens-why",
        question: L(
          "لماذا لا يبدأ الإنتاج بـ Parrinello–Rahman مباشرة بعد التقليل؟",
          "Why not start production with Parrinello–Rahman immediately after minimisation?",
        ),
        answer: L(
          "لأن الكثافة بعيدة عن الاتزان والضغط لحظياً هائل التقلب. الباروستات الممتد يتفاعل مع ذلك بذبذبة حجم قد تمزق النظام. بروتوكول شائع: تقليل → تسخين NVT بقيود → NPT بباروستات لطيف (Berendsen) حتى تستقر الكثافة → إنتاج بـ v-rescale + Parrinello–Rahman أو ما يعادل. الترتيب حماية للفيزياء.",
          "Because density is far from equilibrium and the instantaneous pressure fluctuates wildly. The extended barostat answers with volume oscillation that can tear the system. A common protocol: minimise → NVT heating with restraints → NPT with a gentle barostat (Berendsen) until density settles → production with v-rescale + Parrinello–Rahman or equivalent. The order protects the physics.",
        ),
      },
      {
        type: "whatif",
        id: "l9-ens-whatif",
        scenario: L(
          "ماذا لو استخدمت Langevin باحتكاك عالٍ ثم فسّرت انتشار الليجند أو زمن ارتباط كقيمة فيزيائية؟",
          "What if you use Langevin at high friction and then interpret ligand diffusion or a binding time as a physical value?",
        ),
        consequence: L(
          "الاحتكاك يُبطئ النقل الهيدروديناميكي عمداً. الأزمنة لم تعد أزمنة النموذج المحافظ ولا أزمنة التجربة. Langevin جيد للمعاينة الثرموديناميكية (NVT)؛ سيئ للادعاء الحركي ما لم يُعاير الاحتكاك ويُعلن. للثرموديناميكا يمكنك أن تدفع المعاينة؛ للحركية أنت تشتري نموذجاً حركياً آخر.",
          "Friction deliberately slows hydrodynamic transport. Times are no longer the conservative model’s times nor the experiment’s. Langevin is good for thermodynamic sampling (NVT); bad for a kinetic claim unless friction is calibrated and declared. For thermodynamics you may push sampling; for kinetics you have bought a different kinetic model.",
        ),
      },
      {
        type: "callout",
        id: "l9-ens-warn",
        kind: "warning",
        title: L("Berendsen ليس بريئاً في الإنتاج", "Berendsen is not innocent in production"),
        body: L(
          "يُقمع التقلب الذي يُفترض أن ensemble الصحيح يحمله. كميات تعتمد على التقلب (سعة، سعة حرارية، وبعض تفسيرات الخطأ) تُشوَّه. إن نُشر إنتاج بـ Berendsen، يجب أن يكون ذلك قراراً معلناً لا نسخة افتراضية قديمة.",
          "It suppresses fluctuations a correct ensemble is supposed to carry. Quantities that depend on fluctuation (compressibility, heat capacity, some error interpretations) are distorted. If production with Berendsen is published, that must be a stated decision, not an old default.",
        ),
      },
      {
        type: "callout",
        id: "l9-ens-lim",
        kind: "limitation",
        title: L("T المُعلَن ليس T كل درجة حرية فوراً", "The declared T is not instantly T of every degree of freedom"),
        body: L(
          "فصل درجات حرارة (بروتين / ماء / ليغند) يظهر في الاتزان: الليجند قد يبقى بارداً إن لم يُربط بالحمام. راقب T للمجموعات أثناء التسخين. «310 K» في الملف لا تعني أن الجيب عند 310 K في النانوثانية الأولى.",
          "Temperature grouping (protein / water / ligand) shows up in equilibration: the ligand may stay cold if it is not coupled to the bath. Watch group T during heating. “310 K” in the file does not mean the pocket is at 310 K in the first nanosecond.",
        ),
      },
      {
        type: "exercise",
        id: "l9-ens-ex",
        prompt: L(
          "اقترح سلسلة ensemble لمحاكاة بروتين–ليجند في ماء عند 1 bar و310 K، وسمِّ أين Berendsen مقبول وأين ترفضه.",
          "Propose an ensemble sequence for a protein–ligand simulation in water at 1 bar and 310 K, and name where Berendsen is acceptable and where you refuse it.",
        ),
        solution: L(
          "تقليل → NVT (v-rescale أو Langevin) بقيود موضع على الثقيلة لتسخين الماء دون تخريب الجيب → NPT بـ Berendsen (أو MC) حتى تستقر الكثافة → فك القيود تدريجياً → إنتاج NPT بـ v-rescale + Parrinello–Rahman (أو MC + thermostat قانوني). ترفض Berendsen كمنظم حرارة/ضغط وحيد لمسار تُقاس منه تقلبات أو تُنشر كإنتاج دون ذكر. NVE اختياري قصير لاختبار Δt قبل الإنتاج الطويل.",
          "Minimise → NVT (v-rescale or Langevin) with heavy-atom positional restraints so water heats without wrecking the pocket → NPT with Berendsen (or MC) until density settles → release restraints gradually → NPT production with v-rescale + Parrinello–Rahman (or MC + a correct canonical thermostat). Refuse Berendsen as the sole thermostat/barostat of a trajectory from which you measure fluctuations or which you publish as production without comment. Optional short NVE to test Δt before long production.",
        ),
      },
    ],
    ["l9-production", "l9-gromacs", "l2-boltzmann", "l9-newton"],
  ),

  expand(
    "l9-production",
    [
      L(
        "تعريف إنتاج MD كمعاينة للحالة التي اتزنت، لا كفيلم أطول يعني صدقاً أكثر.",
        "Define production MD as sampling of the equilibrated state, not as a longer movie meaning more truth.",
      ),
      L(
        "رفض معادلة طول المسار بالتقارب.",
        "Refuse to equate trajectory length with convergence.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l9-prod-def",
        title: L("متى يبدأ الإنتاج؟", "When does production start?"),
        body: L(
          "الإنتاج هو الجزء الذي تنوي أن تستخرج منه متوسطات: RMSD للتحليل لا للاتزان، جهات اتصال، PCA، طاقة. يبدأ بعد أن تستقر كثافة الصندوق، ودرجة حرارة المجموعات، وقيود الموضع إن استُخدمت، وبعد أن يزول انحياز البداية قدر ما يظهر في المؤشرات الفجّة. «استقرار» هنا عملي لا برهان. طول الإنتاج يُختار حسب السؤال: هل تبحث عن اهتزاز موضعي حول هيئة docking (عشرات إلى مئات ns قد لا تكفي حتى لذلك)، أم عن تبادل عروة، أم عن ارتباط/تفكك (قد يكون ميكروثانية–ميلي ثانية)؟ الساعات على GPU ليست وحدة علمية.",
          "Production is the segment you intend to average: RMSD for analysis not for equilibration, contacts, PCA, energy. It starts after box density, group temperatures, and positional restraints if used have settled, and after start-point bias has dropped as far as crude indicators show. “Settled” here is practical, not a proof. Production length is chosen by the question: a local wiggle around a docking pose (tens to hundreds of ns may not even suffice for that), a loop exchange, or association/dissociation (possibly microseconds–milliseconds)? GPU hours are not a scientific unit.",
        ),
      },
      {
        type: "list",
        id: "l9-prod-choices",
        title: L("قرارات تُكتب في methods", "Decisions that belong in Methods"),
        items: [
          L(
            "Δt، القيود، المجال، نموذج الماء، الـ ensemble والثرموستات/الباروستات.",
            "Δt, constraints, force field, water model, ensemble and thermostat/barostat.",
          ),
          L(
            "زمن الاتزان مقابل زمن الإنتاج، ومعيار الشريحة التي أُهملت.",
            "Equilibration time versus production time, and the criterion for the discarded slice.",
          ),
          L(
            "عدد النسخ المستقلة (replicas) من سرعات مختلفة أو حتى من هيئات مختلفة.",
            "Number of independent replicas from different velocities or even different poses.",
          ),
          L(
            "ماذا حُفظ: كل كم ps، وأي مجموعة ذرات.",
            "What was saved: every how many ps, and which atom set.",
          ),
        ],
      },
      {
        type: "why",
        id: "l9-prod-why",
        question: L(
          "لماذا 100 ns ليست رداً على «هل الليجند مستقر؟»",
          "Why is 100 ns not an answer to “is the ligand stable?”",
        ),
        answer: L(
          "لأن عدم المغادرة من الجيب في 100 ns يتوافق مع مثبط نانومولاري ومع ليغند ضعيف لم يُسعفه الحظ في الخروج، ومع حاجز اصطناعي من مجال القوة. الاستقرار الثرموديناميكي ΔG، والحركي koff. المسار القصير يقول: لم نرَ حدث الخروج في هذه المعاينة. ذلك قيد على ما رُصد، لا شهادة استقرار.",
          "Because not leaving the pocket in 100 ns is compatible with a nanomolar inhibitor, with a weak ligand that did not get lucky enough to leave, and with an artificial barrier from the force field. Thermodynamic stability is ΔG; kinetic is koff. A short trajectory says: we did not see the exit event in this sampling. That is a bound on what was observed, not a certificate of stability.",
        ),
      },
      {
        type: "whatif",
        id: "l9-prod-whatif",
        scenario: L(
          "ماذا لو مددت مساراً واحداً إلى 1 μs بدل ثلاث نسخ من 200 ns؟",
          "What if you extend one trajectory to 1 μs instead of three replicas of 200 ns?",
        ),
        consequence: L(
          "قد تعبر حدثاً نادراً واحداً — أو تبقى في نفس الوادي وقتاً أطول. النسخ تكشف اعتماد البداية. الطول وحده لا يكشف إن كان الوادي فخاً. الأفضل علمياً: نسخ + طول يناسب السؤال، لا مقايضة عمياء. إن اضطررت، أعلن أنك بلا تقدير تكرار الحدث.",
          "You may cross one rare event — or remain in the same valley longer. Replicas reveal start-point dependence. Length alone does not reveal whether the valley is a trap. Scientifically better: replicas + a length that matches the question, not a blind trade. If you must, state that you have no estimate of event recurrence.",
        ),
      },
      {
        type: "callout",
        id: "l9-prod-warn",
        kind: "warning",
        title: L("لا تحذف الشريحة «السيئة» بعد النظر إلى النتيجة", "Do not drop the “bad” slice after seeing the result"),
        body: L(
          "اختيار نافذة الإنتاج لأن RMSD فيها مسطح، أو لأن الليجند لم يغادر، هو p-hacking زمني. عرّف معيار الاتزان مسبقاً (كثافة، T، تباعد عن قيود) أو اعرض المسار كاملاً مع تظليل الشريحة المستبعدة بسببها.",
          "Choosing the production window because RMSD is flat there, or because the ligand stayed, is temporal p-hacking. Define the equilibration criterion in advance (density, T, restraint release) or show the full trajectory with the discarded slice shaded and justified.",
        ),
      },
      {
        type: "callout",
        id: "l9-prod-lim",
        kind: "limitation",
        title: L("الحفظ كل 10 ps قد يخفي الحدث", "Saving every 10 ps may hide the event"),
        body: L(
          "دوران حلقة سريع أو كسر H-bond عابر أقصر من فترة الحفظ لن يظهر في التحليل. اختر فترة الحفظ حسب السؤال، لا حسب مساحة القرص وحدها.",
          "A fast ring flip or a transient H-bond break shorter than the saving interval will not appear in the analysis. Choose the saving interval by the question, not by disk space alone.",
        ),
      },
      {
        type: "exercise",
        id: "l9-prod-ex",
        prompt: L(
          "سؤال البحث: هل تتكون جسر ملحي في الجيب خلال الحرارية حول هيئة docking؟ صمّم إنتاجاً (ensemble، طول، نسخ، مؤشرات) يُجيب دون ادّعاء koff.",
          "Research question: does a salt bridge form in the pocket in thermal motion around a docking pose? Design production (ensemble, length, replicas, observables) that answers without claiming koff.",
        ),
        solution: L(
          "NPT إنتاج بعد اتزان كثافة، عدة نسخ (مثلاً 3–5) من سرعات مختلفة وربما من هيئتين إن كان docking غامضاً. راقب مسافة الجسر واشغاله عبر الزمن، لا RMSD وحده. الطول: على الأقل ما يكفي لعدة مرات حياة الجسر إن تشكّل (قد تكون عشرات ns أو أكثر). إن لم يتشكّل، النتيجة «لم يُرَ في هذه المعاينة» لا «لا يتشكّل». لا تُترجم عدم التفكك إلى إقامة طويلة.",
          "NPT production after density equilibration, several replicas (e.g. 3–5) from different velocities and perhaps from two poses if docking was ambiguous. Monitor the bridge distance and occupancy versus time, not RMSD alone. Length: at least enough for several lifetimes of the bridge if it forms (perhaps tens of ns or more). If it never forms, the result is “not seen in this sampling,” not “does not form.” Do not translate failure to unbind into long residence.",
        ),
      },
      {
        type: "callout",
        id: "l9-prod-edu",
        kind: "educational",
        title: L("النانو ثانية وحدة صغيرة أمام ارتباط الدواء", "A nanosecond is a small unit next to drug binding"),
        body: L(
          "koff لمثبط نانومولاري قد يقابل أزمنة إقامة من ثوانٍ إلى دقائق في التجربة — أبعد من MD مباشر بعدّة رتب. 100 ns نافذة اهتزاز موضعي، لا نافذة تفكك. هذه هي الحجة ضد ورقة «المثبط مستقر عبر 100 ns».",
          "koff for a nanomolar inhibitor may correspond to experimental residence of seconds to minutes — many orders beyond direct MD. 100 ns is a local-fluctuation window, not an unbinding window. That is the argument against a paper that says “the inhibitor is stable over 100 ns.”",
        ),
      },
    ],
    ["l9-convergence", "l9-rmsd", "l9-gromacs", "l23-short-md"],
  ),

  expand(
    "l9-gromacs",
    [
      L(
        "تنفيذ سلسلة GROMACS من pdb2gmx إلى mdrun مع معرفة مدخلات كل أمر ومخرجاته.",
        "Execute a GROMACS chain from pdb2gmx to mdrun knowing each command’s inputs and outputs.",
      ),
      L(
        "تشخيص فشل شائع عند كل بوابة دون اختراع أعلام غير مؤكدة.",
        "Diagnose a common failure at each gate without inventing unsure flags.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l9-gmx-intro",
        title: L("سلسلة واحدة، بوابات كثيرة", "One chain, many gates"),
        body: L(
          "GROMACS يفصل الطوبولوجيا عن الإحداثيات عن المكامل. pdb2gmx يكتب مجال القوة والبروتونات. editconf يضع الصندوق. solvate يضيف الماء. grompp يدمج ملف .mdp مع الإحداثيات والطوبولوجيا إلى .tpr. genion يستبدل ماء بأيونات. mdrun يُكامل. كل بوابة ترفض بصمت إن مرّرت خطأً إلى التالية. هذا المختبر يمشي الأمر تلو الأمر؛ التحليل (rms, rmsf, gyrate, sasa, hbond) دروس لاحقة وأوامر تُذكر هنا كأفق.",
          "GROMACS separates topology from coordinates from the integrator. pdb2gmx writes the force field and protonation. editconf places the box. solvate adds water. grompp merges the .mdp with coordinates and topology into a .tpr. genion replaces water with ions. mdrun integrates. Each gate fails silently if you pass an error to the next. This laboratory walks command by command; analysis (rms, rmsf, gyrate, sasa, hbond) is later lessons, with those commands named here as the horizon.",
        ),
      },
      {
        type: "command",
        id: "l9-gmx-pdb2gmx",
        command: "gmx pdb2gmx -f protein.pdb -o processed.gro -water spce",
        purpose: L(
          "تطبيق مجال قوة على البروتين، إضافة هيدروجين حسب اختيارك التفاعلي، وكتابة طوبولوجيا.",
          "Apply a force field to the protein, add hydrogens according to your interactive choices, and write a topology.",
        ),
        input: L(
          "ملف PDB نظيف السلسلة قدر الإمكان. الليجند غير القياسي لن يُعامَل هنا كحمض أميني.",
          "A PDB file with as clean a chain as possible. A nonstandard ligand will not be treated here as an amino acid.",
        ),
        output: L(
          "processed.gro (إحداثيات) وtopol.top (طوبولوجيا) وملفات posre إن طُلبت قيود.",
          "processed.gro (coordinates) and topol.top (topology) and posre files if restraints were requested.",
        ),
        meaning: L(
          "هنا تُحبَس قرارات HIS وtermini ونموذج الماء المتوافق. -water spce يختار SPC/E كموديل ماء متوافق مع خيارات مجال شائعة في GROMOS-like؛ إن اخترت AMBER/CHARMM فستختار نموذج الماء المتوافق في تلك القائمة.",
          "HIS, termini, and a compatible water model are locked in here. -water spce selects SPC/E as a water model compatible with common GROMOS-like choices; if you pick AMBER/CHARMM you will choose the matching water in that menu.",
        ),
        errors: L(
          "رواسب غير معروفة (ليجند)، ذرات ناقصة، سلسلة مكسورة، أو اختيار مجال لا يطابق ما ستستخدمه لليجند.",
          "Unknown residues (a ligand), missing atoms, a broken chain, or a force-field choice that will not match what you will use for the ligand.",
        ),
      },
      {
        type: "command",
        id: "l9-gmx-editconf",
        command: "gmx editconf -f processed.gro -o boxed.gro -c -d 1.0 -bt dodecahedron",
        purpose: L(
          "توسيط الجملة وبناء صندوق بهوامش إلى الحافة.",
          "Centre the solute and build a box with a margin to the edge.",
        ),
        input: L("processed.gro من pdb2gmx.", "processed.gro from pdb2gmx."),
        output: L("boxed.gro بإحداثيات صندوق في الترويسة.", "boxed.gro with box vectors in the header."),
        meaning: L(
          "-c توسيط، -d 1.0 هامش بالنانو متر، -bt شكل الصندوق. الهامش قرار PBC لا تجميل.",
          "-c centres, -d 1.0 is the margin in nm, -bt is box shape. The margin is a PBC decision, not decoration.",
        ),
        errors: L(
          "نسيان -c يترك البروتين على الحافة. هامش أصغر من أن يكفي لطبقة ماء.",
          "Forgetting -c leaves the protein on the edge. A margin too small to fit a water layer.",
        ),
      },
      {
        type: "command",
        id: "l9-gmx-solvate",
        command: "gmx solvate -cp boxed.gro -cs spc216.gro -o solvated.gro -p topol.top",
        purpose: L(
          "ملء الصندوق بماء نموذجي وتحديث عدد جزيئات SOL في الطوبولوجيا.",
          "Fill the box with model water and update the SOL molecule count in the topology.",
        ),
        input: L(
          "boxed.gro وصندوق ماء spc216.gro (تكوين قياسي يُعاد توسيعه).",
          "boxed.gro and the spc216.gro water box (a standard configuration that is tiled).",
        ),
        output: L(
          "solvated.gro وtopol.top محدَّث بعدد الماء.",
          "solvated.gro and topol.top updated with the water count.",
        ),
        meaning: L(
          "الماء أصبح جزءاً من N. نسيان -p يترك الطوبولوجيا بلا SOL فيفشل grompp.",
          "Water is now part of N. Forgetting -p leaves the topology without SOL and grompp fails.",
        ),
        errors: L(
          "عدم تطابق نموذج الماء مع ما اختير في pdb2gmx، أو بروتين يبرز خارج الصندوق قبل الملء.",
          "Water model mismatch with the pdb2gmx choice, or a protein protruding from the box before filling.",
        ),
      },
      {
        type: "command",
        id: "l9-gmx-grompp",
        command: "gmx grompp -f ions.mdp -c solvated.gro -p topol.top -o ions.tpr",
        purpose: L(
          "تجميع مدخلات المكامل إلى ملف tpr قبل إضافة الأيونات (ولاحقاً قبل كل مرحلة MD).",
          "Assemble integrator inputs into a tpr file before adding ions (and later before every MD stage).",
        ),
        input: L(
          ".mdp (خطوات، قيود، ensemble)، إحداثيات، طوبولوجيا.",
          ".mdp (steps, constraints, ensemble), coordinates, topology.",
        ),
        output: L(
          "ions.tpr وصف كامل للحالة التي سيقرأها genion أو mdrun.",
          "ions.tpr, a complete description of the state genion or mdrun will read.",
        ),
        meaning: L(
          "grompp هو المدقق: شحنة غير متعادلة، ذرات ناقصة في الطوبولوجيا، و.mdp غير متسق تظهر هنا.",
          "grompp is the checker: non-neutral charge, atoms missing from the topology, and an inconsistent .mdp show up here.",
        ),
        errors: L(
          "تحذيرات شحنة، عدم تطابق عدد الذرات بين .gro و.top، أو .mdp يشير إلى مجموعات غير معرّفة.",
          "Charge warnings, atom-count mismatch between .gro and .top, or an .mdp referring to undefined groups.",
        ),
      },
      {
        type: "command",
        id: "l9-gmx-genion",
        command: "gmx genion -s ions.tpr -o ionized.gro -p topol.top -neutral",
        purpose: L(
          "استبدال جزيئات ماء بأيونات لتعادل الشحنة (وبعدها يمكن إضافة ملح إن قررت التركيز).",
          "Replace water molecules with ions to neutralise charge (then extra salt if you chose a concentration).",
        ),
        input: L("ions.tpr وطوبولوجيا فيها SOL.", "ions.tpr and a topology that contains SOL."),
        output: L(
          "ionized.gro وtopol.top بعدد SOL أقل وأيونات مضافة.",
          "ionized.gro and topol.top with fewer SOL and added ions.",
        ),
        meaning: L(
          "-neutral يطلب التعادل. الأمر تفاعلي في اختيار مجموعة SOL. الأيونات جزء من الفيزياء الكهربية تحت PME.",
          "-neutral requests neutrality. The command is interactive in choosing the SOL group. Ions are part of the electrostatic physics under PME.",
        ),
        errors: L(
          "اختيار مجموعة البروتين بدل الماء، أو نسيان تحديث .top، أو طلب تعادل عند نظام متعادل أصلاً دون فهم الخرج.",
          "Selecting the protein group instead of water, forgetting to update .top, or requesting neutrality on an already neutral system without reading the output.",
        ),
      },
      {
        type: "command",
        id: "l9-gmx-mdrun",
        command: "gmx mdrun -v -deffnm em",
        purpose: L(
          "تشغيل ما وصفه em.tpr: تقليل أو اتزان أو إنتاج حسب .mdp الذي دخل grompp.",
          "Run what em.tpr described: minimisation, equilibration, or production according to the .mdp that entered grompp.",
        ),
        input: L(
          "em.tpr من grompp (بعد إعداد em.mdp وionized.gro).",
          "em.tpr from grompp (after preparing em.mdp and ionized.gro).",
        ),
        output: L(
          "em.gro أو مسار، em.edr طاقة، em.log، وربما em.xtc حسب المرحلة.",
          "em.gro or a trajectory, em.edr energy, em.log, and perhaps em.xtc depending on the stage.",
        ),
        meaning: L(
          "-deffnm يوحّد أسماء الملفات. -v يطبع تقدماً. الفيزياء كلها في tpr لا في هذا السطر.",
          "-deffnm unifies file names. -v prints progress. All of the physics lives in the tpr, not in this line.",
        ),
        errors: L(
          "LINCS، انفجار طاقة، GPU/CPU غير متوافق مع البناء، أو مسار ناقص لأن القرص امتلأ.",
          "LINCS, energy explosion, GPU/CPU incompatible with the build, or a truncated trajectory because the disk filled.",
        ),
      },
      {
        type: "why",
        id: "l9-gmx-why",
        question: L(
          "لماذا grompp قبل كل مرحلة لا «mdrun على آخر gro فقط»؟",
          "Why grompp before every stage rather than “mdrun on the last gro only”?",
        ),
        answer: L(
          "لأن .mdp يتغير: تقليل بلا ضغط، NVT، NPT، إنتاج بأوقات حفظ مختلفة. tpr هو العقد بين الطوبولوجيا والإعداد. تشغيل محرّك بلا إعادة تجميع يُخاطر بمكامل لا يطابق الحالة (قيود، درجة حرارة، خطوات).",
          "Because the .mdp changes: minimisation without pressure, NVT, NPT, production with different saving intervals. The tpr is the contract between topology and settings. Launching the engine without re-assembly risks an integrator that does not match the state (constraints, temperature, nsteps).",
        ),
      },
      {
        type: "whatif",
        id: "l9-gmx-whatif",
        scenario: L(
          "ماذا لو نسيت تمرير الليجند في الطوبولوجيا ومرّ pdb2gmx على البروتين فقط ثم solvate؟",
          "What if you forget to include the ligand in the topology, run pdb2gmx on the protein only, then solvate?",
        ),
        consequence: L(
          "الماء يملأ الجيب مكان الليجند، أو الليجند يبقى إحداثيات يتيمة بلا طوبولوجيا فيفشل grompp، أو — أسوأ — تُسقط الإحداثيات لاحقاً. أدرج الليجند كجزيء في .top بعد parameterization، واحمه من الاستبدال في genion. لا يوجد علم في مسار بروتين فارغ تُسمّيه معقداً.",
          "Water fills the pocket where the ligand was, or the ligand remains orphan coordinates without topology and grompp fails, or — worse — coordinates are dropped later. Include the ligand as a molecule in .top after parameterisation, and protect it from replacement in genion. There is no science in a trajectory of an empty protein that you label a complex.",
        ),
      },
      {
        type: "callout",
        id: "l9-gmx-warn",
        kind: "warning",
        title: L("log ليس زخرفة", "The log is not decoration"),
        body: L(
          "تحذير شحنة، قيد مكسور، وnote عن PME تُقرأ قبل أي رسم RMSD. ورقة بلا فحص log ورقة عمياء.",
          "Charge warnings, broken constraints, and PME notes are read before any RMSD plot. A paper that never inspected the log is a blind paper.",
        ),
      },
      {
        type: "list",
        id: "l9-gmx-next",
        title: L("أفق التحليل بعد الإنتاج", "Analysis horizon after production"),
        items: [
          L("gmx rms — درس RMSD.", "gmx rms — the RMSD lesson."),
          L("gmx rmsf، gmx gyrate، gmx sasa، gmx hbond — درس المرونة والتفاعل.", "gmx rmsf, gmx gyrate, gmx sasa, gmx hbond — flexibility and interaction."),
        ],
      },
    ],
    ["l9-system", "l9-min", "l9-ensembles", "l9-rmsd", "l9-flex"],
  ),

  expand(
    "l9-engines",
    [
      L(
        "تمييز المحرّك (GROMACS، AMBER، NAMD، OpenMM) عن مجال القوة.",
        "Distinguish the engine (GROMACS, AMBER, NAMD, OpenMM) from the force field.",
      ),
      L(
        "معرفة أن نقل بروتوكول بين محركات ينقل فيزياء فقط إن تطابقت المعاملات والـ ensemble.",
        "Know that moving a protocol between engines transfers physics only if parameters and ensemble match.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l9-eng-split",
        title: L("المحرك يُكامل، المجال يُعرّف V", "The engine integrates; the field defines V"),
        body: L(
          "GROMACS وAMBER وNAMD وOpenMM محركات: مكاملات، PME، قيود، منظم حرارة، GPU. AMBER أيضاً اسم عائلة مجالات. الخلط يُنتج جملة «شغّلنا AMBER» بلا توضيح إن كان المجال ff19SB أم المحرّك pmemd. الفيزياء في المعاملات وN,V,T,P والمكامل والقيود. المحرك أداة كفاءة وإعادة إنتاج إن سُجّلت النسخة.",
          "GROMACS, AMBER, NAMD, and OpenMM are engines: integrators, PME, constraints, thermostats, GPU. AMBER is also the name of a force-field family. The confusion produces the sentence “we ran AMBER” without saying whether that was ff19SB or pmemd. The physics is in the parameters, N,V,T,P, the integrator, and the constraints. The engine is an efficiency tool and a reproducibility tool if the version is recorded.",
        ),
      },
      {
        type: "compare",
        id: "l9-eng-table",
        left: L("ما ينتمي للمجال", "Belongs to the field"),
        right: L("ما ينتمي للمحرك", "Belongs to the engine"),
        rows: [
          {
            dim: L("أمثلة", "Examples"),
            a: L("شحنات، LJ، torsions، نموذج ماء متوافق.", "Charges, LJ, torsions, compatible water."),
            b: L("Verlet/leap-frog، PME mesh، GPU kernels، صيغة thermostat.", "Verlet/leap-frog, PME mesh, GPU kernels, thermostat form."),
          },
          {
            dim: L("نقل دراسة", "Porting a study"),
            a: L("يجب أن تُنسخ المعاملات بأمانة أو تُعاد بوعي.", "Parameters must be copied faithfully or rebuilt consciously."),
            b: L("قد يتغيّر الأداء العددي قليلاً حتى مع نفس V.", "Numeric performance may shift slightly even with the same V."),
          },
        ],
      },
      {
        type: "list",
        id: "l9-eng-sketches",
        title: L("لمحات عملية", "Practical sketches"),
        items: [
          L(
            "AMBER (pmemd/sander): منظومة مجالات ناضجة لليجند (GAFF2) وشحنات RESP شائعة.",
            "AMBER (pmemd/sander): a mature ligand ecosystem (GAFF2) and common RESP charges.",
          ),
          L(
            "NAMD: تاريخ قوي على أنظمة كبيرة وGPU، غالباً مع CHARMM.",
            "NAMD: a strong history on large systems and GPUs, often with CHARMM.",
          ),
          L(
            "OpenMM: مرونة بايثون، باروستات MC شائع، مناسب للنماذج المخصصة.",
            "OpenMM: Python flexibility, a common MC barostat, suited to custom models.",
          ),
          L(
            "GROMACS: سرعة إنتاج في الماء، منظومة mdp/tpr التي تدربت عليها.",
            "GROMACS: fast production in water, the mdp/tpr system you trained on.",
          ),
        ],
      },
      {
        type: "why",
        id: "l9-eng-why",
        question: L(
          "لماذا لا تُقارن 100 ns GROMACS بـ 100 ns NAMD كدليل أن أحد المحركين «أدق»؟",
          "Why not compare 100 ns of GROMACS to 100 ns of NAMD as evidence that one engine is “more accurate”?",
        ),
        answer: L(
          "إن اختلف المجال أو الماء أو الثرموستات، فأنت تقارن فيزياء لا محركات. إن تطابقت، فالفرق عددي صغير أمام خطأ المعاينة. الدقة العلمية تُناقش في V والمعاينة، لا في شعار الرخصة.",
          "If the field, water, or thermostat differed, you are comparing physics, not engines. If they matched, the difference is a small numeric effect next to sampling error. Scientific accuracy is argued in V and sampling, not in a license logo.",
        ),
      },
      {
        type: "whatif",
        id: "l9-eng-whatif",
        scenario: L(
          "ماذا لو نقلت ملف .gro إلى محرك آخر دون الطوبولوجيا الأصلية؟",
          "What if you move a .gro file into another engine without the original topology?",
        ),
        consequence: L(
          "الإحداثيات بلا V. المحرك الآخر سيُعيد بناء روابط بشروطه فيُغيّر المسألة. انقل المعاملات أو أعد parameterization بشكل موثّق.",
          "Coordinates without V. The other engine will rebuild bonds under its rules and change the problem. Transfer parameters or re-parameterise in a documented way.",
        ),
      },
      {
        type: "callout",
        id: "l9-eng-warn",
        kind: "warning",
        title: L("سجّل النسخة", "Record the version"),
        body: L(
          "تغيير نسخة GROMACS قد يغيّر افتراضيات mdp. إعادة الإنتاج تبدأ برقم النسخة والمجال ونموذج الماء.",
          "A GROMACS version change may change mdp defaults. Reproducibility starts with version, force field, and water model.",
        ),
      },
      {
        type: "callout",
        id: "l9-eng-lim",
        kind: "limitation",
        title: L("لا محرك يُصلح ليغند بلا معاملات", "No engine repairs a ligand without parameters"),
        body: L(
          "GPU أسرع يُكامل الخطأ أسرع. parameterization أولاً.",
          "A faster GPU integrates the error faster. Parameterisation first.",
        ),
      },
      {
        type: "exercise",
        id: "l9-eng-ex",
        prompt: L(
          "محكّم يسأل: لماذا GROMACS لا AMBER؟ اكتب إجابة من ثلاثة أسطر لا تذم الأداة الأخرى.",
          "A referee asks: why GROMACS not AMBER? Write a three-line answer that does not insult the other tool.",
        ),
        solution: L(
          "المجال المختار X مع ماء Y متاح ومختبَر في هذا المحرك؛ بروتوكول الاتزان والإنتاج وُثّق على هذه النسخة؛ السؤال كان معاينة هيئة لا يحتاج نظام ليغند خاصًا بأدوات AMBER. لو لزم GAFF2/RESP حصراً لأعدنا البناء هناك. المحرك ليس فرضية البحث.",
          "The chosen field X with water Y is available and tested in this engine; the equilibration/production protocol is documented on this version; the question was pose sampling and did not require an AMBER-only ligand workflow. Had GAFF2/RESP been mandatory we would have built it there. The engine is not the research hypothesis.",
        ),
      },
    ],
    ["l9-gromacs", "l6-families", "l6-ligandff", "l26-choices"],
  ),

  expand(
    "l9-rmsd",
    [
      L(
        "كتابة معادلة RMSD وشرح المواءمة والذرات الداخلة.",
        "Write the RMSD equation and explain alignment and included atoms.",
      ),
      L(
        "رفض تفسير RMSD المسطح كتقارب أو كثبات ارتباط.",
        "Refuse to read a flat RMSD as convergence or as binding stability.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l9-rmsd-use",
        title: L("ماذا يقيس RMSD؟", "What does RMSD measure?"),
        body: L(
          "RMSD مسافة بين هيئتين بعد إزالة انزياح ودوران جسميّين عادة (مواءمة). في MD يُقاس غالباً مقابل الإطار الأول أو مقابل البلورة، لذرات العمود الفقري أو لليجند. هو مقياس هندسي واحد: لا طاقة، لا إنتروبي، لا احتمال وادٍ. مسار يقفز بين هيئتين متباعدتين قد يُظهر RMSD «مزدوجاً»؛ مسار يزحف ببطء في اتجاه واحد قد يبدو مسطحاً في نافذة قصيرة. التسطيح يعني أن المسافة إلى المرجع لم تتغير كثيراً في تلك النافذة — لا أن المعاينة اكتملت، ولا أن الليجند «مرتبط بقوة».",
          "RMSD is a distance between two poses after removing rigid-body translation and rotation (alignment) in the usual case. In MD it is often measured against the first frame or the crystal, for backbone atoms or for the ligand. It is one geometric metric: no energy, no entropy, no well probability. A trajectory that jumps between two distant poses may show a “split” RMSD; a trajectory that creeps slowly in one direction may look flat in a short window. Flatness means the distance to the reference did not change much in that window — not that sampling is complete, and not that the ligand is “tightly bound.”",
        ),
      },
      {
        type: "equation",
        id: "l9-rmsd-eq",
        latex:
          "\\mathrm{RMSD}(t) = \\sqrt{\\frac{1}{N}\\sum_{i=1}^{N}\\lVert \\mathbf{r}_{i}(t)-\\mathbf{r}_{i}^{\\mathrm{ref}}\\rVert^{2}}",
        name: L("RMSD مقابل مرجع", "RMSD versus a reference"),
        meaning: L(
          "جذر متوسط مربعات انحراف الذرات المختارة بعد المواءمة إن طُبّقت.",
          "Root-mean-square deviation of the chosen atoms after alignment if applied.",
        ),
        variables: [
          {
            symbol: "N",
            name: L("عدد الذرات الداخلة (مثلاً Cα أو ليغند ثقيل)", "Number of included atoms (e.g. Cα or ligand heavy atoms)"),
          },
          {
            symbol: "\\mathbf{r}_{i}(t)",
            name: L("موضع الذرة i في الإطار t", "Position of atom i in frame t"),
            unit: L("nm أو Å", "nm or Å"),
          },
          {
            symbol: "\\mathbf{r}_{i}^{\\mathrm{ref}}",
            name: L("الموضع في الهيئة المرجعية", "Position in the reference pose"),
            unit: L("nm أو Å", "nm or Å"),
          },
        ],
        interpretation: L(
          "اختيار N يغيّر القصة: Cα يُخفي حلقة ليغند؛ ليغند وحده يُخفي تفكك نطاق بروتيني. المواءمة على البروتين ثم RMSD لليجند تقيس انزياح الليجند في الجيب — وهذا أقرب لسؤال الالتحام من RMSD لكل النظام بما فيه الماء.",
          "The choice of N changes the story: Cα hides a ligand flip; ligand-only hides a domain unfolding. Aligning on the protein then RMSD of the ligand measures ligand drift in the pocket — closer to the docking question than RMSD of the whole system including water.",
        ),
        application: L(
          "حدد المرجع والذرات والمواءمة في كل رسم. بلا ذلك الرسم ليس معلومة.",
          "State the reference, atoms, and alignment on every plot. Without that the plot is not information.",
        ),
      },
      {
        type: "command",
        id: "l9-rmsd-gmx",
        command: "gmx rms -s md.tpr -f md.xtc -o rmsd.xvg",
        purpose: L(
          "حساب RMSD من مسار مقابل بنية في tpr أو مرجع تُحدده تفاعلياً.",
          "Compute RMSD from a trajectory versus the structure in the tpr or a reference you choose interactively.",
        ),
        input: L(
          "md.tpr (طوبولوجيا/مرجع) وmd.xtc (مسار).",
          "md.tpr (topology/reference) and md.xtc (trajectory).",
        ),
        output: L(
          "rmsd.xvg زمن مقابل RMSD. اختيار المجموعات تفاعلي (Backbone، ligand، إلخ).",
          "rmsd.xvg time versus RMSD. Group choice is interactive (Backbone, ligand, etc.).",
        ),
        meaning: L(
          "رقم كل إطار بعد المواءمة الافتراضية للمجموعة. تفسيره العلمي ليس داخل الأمر.",
          "A number per frame after the default alignment of the group. Its scientific meaning is not inside the command.",
        ),
        errors: L(
          "مواءمة على ماء، أو مجموعة ليغند غير معرّفة في الفهرس، أو مسار غير مصحح لقفزات PBC قبل التحليل البصري (يُعالج بأدوات تحويل المسار حسب الحاجة).",
          "Aligning on water, a ligand group missing from the index, or a trajectory not corrected for PBC jumps before visual analysis (handled with trajectory-conversion tools as needed).",
        ),
      },
      {
        type: "callout",
        id: "l9-rmsd-flat",
        kind: "warning",
        title: L("مسطّح ≠ متقارب ≠ مستقر ارتباطاً", "Flat ≠ converged ≠ stably bound"),
        body: L(
          "ثلاثة خلطات شائعة. (1) التقارب: قد تكون عالقاً في وادٍ واحد. (2) استقرار البروتين: نطاقان قد ينزلقان بـ RMSD Cα شبه ثابت بعد المواءمة الشاملة. (3) ارتباط الليجند: ليغند قد يهتز مكانه بـ RMSD منخفض وهو ضعيف ثرموديناميكياً، أو ينقلب 180° بـ RMSD معتدل وهو النمط الحقيقي. اقرأ RMSD كهندسة، ثم اسأل سؤالاً آخر للإحصاء.",
          "Three common conflations. (1) Convergence: you may be stuck in one valley. (2) Protein stability: two domains may slide with nearly constant Cα RMSD after global alignment. (3) Ligand binding: a ligand may wiggle in place at low RMSD while thermodynamically weak, or flip 180° at moderate RMSD as the true mode. Read RMSD as geometry, then ask a different question for statistics.",
        ),
      },
      {
        type: "why",
        id: "l9-rmsd-why",
        question: L(
          "لماذا المرجع = الإطار الأول قرار غير بريء؟",
          "Why is reference = first frame a non-innocent choice?",
        ),
        answer: L(
          "الإطار الأول قد يكون ما بعد الاتزان مباشرة — لا البلورة ولا الهيئة النشطة. RMSD المنخفض يعني «لم نبتعد عن انطلاقنا» وهذا نجاح بروتوكول أحياناً وعمى أحياناً. المرجع البلوري يقيس الانحراف عن التجربة. المرجعان مشروعان إن سُمّيا.",
          "The first frame may be immediately post-equilibration — neither the crystal nor the bioactive pose. Low RMSD means “we did not leave our start,” which is sometimes a protocol success and sometimes blindness. A crystal reference measures deviation from experiment. Both references are legitimate if named.",
        ),
      },
      {
        type: "whatif",
        id: "l9-rmsd-whatif",
        scenario: L(
          "ماذا لو نشرت RMSD لليجند دون مواءمة البروتين، فظهر قفز كل بضعة نانوثوانٍ؟",
          "What if you publish ligand RMSD without protein alignment, and a jump appears every few nanoseconds?",
        ),
        consequence: L(
          "قد يكون قفز PBC أو دوران جسم صلب للمعقد كله، لا تفككاً. صحّح الحدود الدورية وواءم على الجيب ثم أعد الرسم قبل أن تكتب «unstable binding».",
          "It may be a PBC jump or rigid-body rotation of the whole complex, not unbinding. Correct periodic boundaries and align on the pocket, then replot before you write “unstable binding.”",
        ),
      },
      {
        type: "callout",
        id: "l9-rmsd-edu",
        kind: "educational",
        title: L("وحدات الرسم", "Plot units"),
        body: L(
          "GROMACS يكتب غالباً nm. الأدبيات تستخدم Å كثيراً. 0.2 nm = 2 Å. خطأ وحدة يحوّل «مستقراً» إلى «مأساوياً» في أعين القارئ.",
          "GROMACS often writes nm. The literature often uses Å. 0.2 nm = 2 Å. A unit error turns “stable” into “catastrophic” in the reader’s eyes.",
        ),
      },
      {
        type: "exercise",
        id: "l9-rmsd-ex",
        prompt: L(
          "RMSD Cα مسطح عند 0.25 nm لـ 200 ns، وRMSD الليجند بعد مواءمة الجيب يرتفع فجأة إلى 0.8 nm في النسخة 2 فقط. ماذا تستنتج وماذا لا تستنتج؟",
          "Cα RMSD is flat at 0.25 nm for 200 ns, and ligand RMSD after pocket alignment jumps to 0.8 nm in replica 2 only. What do you conclude and what do you not?",
        ),
        solution: L(
          "تستنتج أن العمود الفقري لم ينحرف كثيراً عن مرجعه في تلك النوافذ، وأن الليجند في نسخة واحدة اتخذ هندسة بعيدة. لا تستنتج تقارب المعاينة، ولا أن النسخة 1 تُثبت ارتباطاً، ولا أن النسخة 2 «فشلت» إن كانت الهيئة الجديدة كيميائياً معقولة. تزيد النسخ، وتفحص الهيئة، وتستخدم تماسّات لا خطاً واحداً.",
          "You conclude that the backbone did not drift far from its reference in those windows, and that the ligand in one replica adopted a distant geometry. You do not conclude sampling convergence, nor that replica 1 proves binding, nor that replica 2 “failed” if the new pose is chemically reasonable. Add replicas, inspect the pose, and use contacts rather than one line.",
        ),
      },
      {
        type: "callout",
        id: "l9-rmsd-lim",
        kind: "limitation",
        title: L("متوسط RMSD عبر النسخ يُخفي الفشل", "Mean RMSD across replicas hides failure"),
        body: L(
          "إن غادر الليجند في نسخة وبقي في اثنتين، فالمتوسط «مقبول». اعرض النسخ فرادى أو أظهر الشريحة.",
          "If the ligand left in one replica and stayed in two, the mean looks “acceptable.” Show replicas separately or show the spread.",
        ),
      },
    ],
    ["l9-flex", "l9-convergence", "l9-mistakes", "l3-vectors", "l23-short-md"],
  ),

  expand(
    "l9-flex",
    [
      L(
        "تفسير RMSF وRg وSASA وH-bond كمؤشرات مكملة لا كبراهين منفردة.",
        "Interpret RMSF, Rg, SASA, and H-bonds as complementary indicators, not as standalone proofs.",
      ),
      L(
        "ربط كل كمية بسؤال فيزيائي (مرونة، اكتناز، سطح، استمرار تفاعل).",
        "Map each quantity to a physical question (flexibility, compactness, surface, interaction persistence).",
      ),
    ],
    [
      {
        type: "prose",
        id: "l9-flex-map",
        title: L("أربعة مؤشرات، أربعة أسئلة", "Four indicators, four questions"),
        body: L(
          "RMSF: من يهتز حول متوسطه عبر المسار (مرونة موضعية). Rg: هل المعقد ينتفخ أو ينكمش (اكتناز). SASA: أي سطح يتعرض للماء (دفن جيب، انفتاح نطاق). H-bond: هل تفاعل معين يستمر أم يومض. كلها متوسطات هندسية. لا واحدة منها ΔG. ليغند قد يحافظ على H-bond بنسبة 90% ويكون ضعيف الارتباط إن دفع ثمناً إنتروبيًا أو إن كان التحليل على 20 ns في وادٍ واحد.",
          "RMSF: who fluctuates about their mean over the trajectory (local flexibility). Rg: whether the complex swells or shrinks (compactness). SASA: which surface is exposed to water (pocket burial, domain opening). H-bond: whether a given interaction persists or blinks. All are geometric averages. None is ΔG. A ligand may keep an H-bond 90% of the time and still bind weakly if it pays an entropic price or if the analysis is 20 ns in one valley.",
        ),
      },
      {
        type: "command",
        id: "l9-flex-rmsf",
        command: "gmx rmsf -s md.tpr -f md.xtc -o rmsf.xvg",
        purpose: L(
          "جذر متوسط تقلب كل ذرة (أو بقايا بعد اختزال) حول متوسط مواضعها في المسار.",
          "Root-mean-square fluctuation of each atom (or residue after reduction) about its mean position in the trajectory.",
        ),
        input: L("tpr ومسار إنتاج.", "A tpr and a production trajectory."),
        output: L("rmsf.xvg لكل ذرة/بقايا.", "rmsf.xvg per atom/residue."),
        meaning: L(
          "عروة عالية RMSF مرنة في هذه المعاينة. مقارنة مع B-factor البلوري تفسير لا تطابق مضمون (البلورة قيود شبكة).",
          "A loop with high RMSF is flexible in this sampling. Comparison with crystal B-factors is an interpretation, not a guaranteed match (the crystal has lattice restraints).",
        ),
        errors: L(
          "عدم إزالة قفز PBC/دوران الجسم قبل المعنى الفيزيائي، أو خلط اتزان مع إنتاج فيرفع RMSF اصطناعياً.",
          "Not removing PBC jumps/rigid-body rotation before physical meaning, or mixing equilibration into production and inflating RMSF artificially.",
        ),
      },
      {
        type: "command",
        id: "l9-flex-gyrate",
        command: "gmx gyrate -s md.tpr -f md.xtc -o gyrate.xvg",
        purpose: L(
          "حساب نصف قطر الدوران كمقياس اكتناز.",
          "Compute the radius of gyration as a compactness measure.",
        ),
        input: L("tpr ومسار.", "A tpr and a trajectory."),
        output: L("gyrate.xvg عبر الزمن.", "gyrate.xvg versus time."),
        meaning: L(
          "ارتفاع مستمر قد يعني انتفاخاً أو بداية تفكك نطاق. تذبذب بلا اتجاه جزء من الحرارية.",
          "A steady rise may mean swelling or the start of domain opening. Undirected flicker is thermal.",
        ),
        errors: L(
          "حساب Rg لكل الماء مع البروتين يغمر الإشارة. اختر مجموعة solute.",
          "Computing Rg of all water plus protein drowns the signal. Choose a solute group.",
        ),
      },
      {
        type: "command",
        id: "l9-flex-sasa",
        command: "gmx sasa -s md.tpr -f md.xtc -o sasa.xvg",
        purpose: L(
          "تقدير المساحة المتاحة للمذيب عبر الزمن.",
          "Estimate solvent-accessible surface area versus time.",
        ),
        input: L("tpr ومسار.", "A tpr and a trajectory."),
        output: L("sasa.xvg وقدرات تفصيل حسب المجموعة.", "sasa.xvg and optional per-group detail."),
        meaning: L(
          "انخفاض SASA لليجند يعني دفناً. ليس طاقة إذابة MM/PBSA، لكنه مؤشر هندسي للإذابة.",
          "A drop in ligand SASA means burial. It is not MM/PBSA solvation energy, but it is a geometric solvation indicator.",
        ),
        errors: L(
          "تفسير فرق صغير ضمن ضجيج المسار كأثر تصميم.",
          "Reading a small gap within trajectory noise as a design effect.",
        ),
      },
      {
        type: "command",
        id: "l9-flex-hbond",
        command: "gmx hbond -s md.tpr -f md.xtc",
        purpose: L(
          "رصد الجسور الهيدروجينية بين مجموعات تختارها (مثلاً بروتين–ليجند).",
          "Monitor hydrogen bonds between groups you choose (e.g. protein–ligand).",
        ),
        input: L("tpr ومسار. تعريف المانح/المستقبل حسب العتبات الافتراضية أو ما يتيحه البرنامج.", "A tpr and a trajectory. Donor/acceptor definition follows the program’s cutoffs."),
        output: L(
          "وجود/عدد H-bonds عبر الزمن وملفات مرافقة حسب الجلسة التفاعلية.",
          "Presence/count of H-bonds versus time and companion files depending on the interactive session.",
        ),
        meaning: L(
          "الإشغال (occupancy) عبر المسار أهم من وجود الجسر في الإطار الأخير. عتبة المسافة/الزاوية قرار، لا طبيعة.",
          "Occupancy over the trajectory matters more than the bridge in the last frame. Distance/angle cutoffs are a decision, not nature.",
        ),
        errors: L(
          "نسيان أن protonation الخاطئ يُنشئ أو يمحو H-bond طوال المسار.",
          "Forgetting that wrong protonation creates or deletes an H-bond for the entire trajectory.",
        ),
      },
      {
        type: "why",
        id: "l9-flex-why",
        question: L(
          "لماذا لا يكفي RMSD إن كنت تتحدث عن مرونة الجيب؟",
          "Why is RMSD not enough if you are talking about pocket flexibility?",
        ),
        answer: L(
          "RMSD مقياس عام للمواءمة مع مرجع. RMSF يحدّد أي بقايا تتحرّك. قد يكون RMSD مسطحاً لأن المواءمة تبتلع حركة نطاق، بينما RMSF يكشف عروة الجيب. السؤال الموضعي يحتاج مؤشراً موضعياً.",
          "RMSD is a global metric versus a reference. RMSF identifies which residues move. RMSD can be flat because alignment swallows a domain motion, while RMSF still reveals a pocket loop. A local question needs a local indicator.",
        ),
      },
      {
        type: "whatif",
        id: "l9-flex-whatif",
        scenario: L(
          "ماذا لو كان إشغال H-bond 40% فكتبت في المناقشة أن التفاعل «مستقر وحاسم للتثبيط»؟",
          "What if H-bond occupancy is 40% and you write in the discussion that the interaction is “stable and crucial for inhibition”?",
        ),
        consequence: L(
          "40% يعني غائباً أكثر من حاضر في تلك المعاينة. «حاسم» تتطلّب تجربة طفرة أو SAR. الصيغة الصادقة: «يظهر الجسر في 40% من إطارات الإنتاج تحت هذا المجال».",
          "40% means absent more than present in that sampling. “Crucial” requires a mutation experiment or SAR. Honest form: “the bridge appears in 40% of production frames under this force field.”",
        ),
      },
      {
        type: "callout",
        id: "l9-flex-warn",
        kind: "warning",
        title: L("B-factor ≠ RMSF دون نموذج", "B-factor ≠ RMSF without a model"),
        body: L(
          "B-factor البلوري يشمل اضطراباً ساكناً وديناميكياً وقيود تنقية. RMSF محاكاة في مذيب دوري. التشابه النوعي مقبول كفرضية؛ المطابقة الكمية ادّعاء إضافي.",
          "A crystal B-factor includes static and dynamic disorder and refinement restraints. RMSF is a simulation in periodic solvent. Qualitative resemblance is an acceptable hypothesis; quantitative matching is an extra claim.",
        ),
      },
      {
        type: "exercise",
        id: "l9-flex-ex",
        prompt: L(
          "SASA الليجند ينخفض، Rg يرتفع، وRMSF للعروة عند الجيب يزيد. اقترح قصة واحدة قابلة للفحص وقصة بديلة اصطناع.",
          "Ligand SASA falls, Rg rises, and RMSF of a pocket loop increases. Propose one testable story and one artefact alternative.",
        ),
        solution: L(
          "قصة: الليجند يندفن بينما النطاق ينفتح قليلاً والعروة تتأقلم — افحص جهات اتصال ونسخاً. اصطناع: قفز PBC أو مواءمة سيئة ترفع Rg/RMSF بينما SASA الليجند ينخفض بسبب انزياح إلى صورة دورية. افحص الحجم والكثافة والمسافة إلى الصورة.",
          "Story: the ligand buries while a domain opens slightly and the loop adapts — check contacts and replicas. Artefact: a PBC jump or bad alignment inflates Rg/RMSF while ligand SASA drops because of drift into a periodic image. Check volume, density, and distance to the image.",
        ),
      },
    ],
    ["l9-rmsd", "l9-pca", "l9-gromacs", "l4-secondary"],
  ),

  expand(
    "l9-pca",
    [
      L(
        "تفسير PCA للمسار كحركة جماعية في فضاء اختزال، لا كمشهد طاقة حرّة مكتمل.",
        "Interpret trajectory PCA as collective motion in a reduced space, not as a complete free-energy landscape.",
      ),
      L(
        "الحذر من تجاويف على إسقاط ثنائي الأبعاد ومن DCCM كارتباط لا سببية.",
        "Treat basins on a 2D projection cautiously, and DCCM as correlation not causation.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l9-pca-idea",
        title: L("اختزال حركة آلاف الذرات", "Reducing the motion of thousands of atoms"),
        body: L(
          "PCA على إحداثيات مواءَمة يجد اتجاهات أكبر تباين في المسار (أوضاع جوهرية). الإسقاط على أول وضعين شائع كخريطة. إن وضعت histogramاً وأخذت −kT ln P حصلت على «مشهد طاقة حرة» في تلك الإحداثيات الجماعية — مشروط بالمعاينة وبتجاهل بقية الأبعاد. تجويف على الخريطة يعني أن المسار قضى وقتاً هناك، لا أن الحالة ثرموديناميكية الغلبة في الحقيقة، ولا أن الانتقال بين تجويفين هو مسار التفاعل.",
          "PCA on aligned coordinates finds directions of largest variance in the trajectory (essential modes). Projection onto the first two modes is a common map. If you histogram and take −kT ln P you obtain a “free-energy landscape” in those collective coordinates — conditional on the sampling and on ignoring the remaining dimensions. A basin on the map means the trajectory spent time there, not that the state is thermodynamically dominant in reality, and not that the transition between two basins is the reaction path.",
        ),
      },
      {
        type: "list",
        id: "l9-pca-dccm",
        title: L("DCCM وما جاورها", "DCCM and neighbours"),
        items: [
          L(
            "DCCM (dynamic cross-correlation): ارتباط حركة بقايا مع بقايا. موجب: تتحركان معاً في هذه المعاينة. سالب: عكسياً. ليس سلكاً ميكانيكياً للتفارغ.",
            "DCCM (dynamic cross-correlation): residue–residue motion correlation. Positive: they move together in this sampling. Negative: opposite. Not a mechanical wire of allostery.",
          ),
          L(
            "حاجز على خريطة PCA ثنائية: إن كان الوضعان لا يشملان إحداثية الانتقال الحقيقية، فالحاجز وهم إسقاط.",
            "A barrier on a 2D PCA map: if the two modes do not contain the true transition coordinate, the barrier is a projection artefact.",
          ),
        ],
      },
      {
        type: "why",
        id: "l9-pca-why",
        question: L(
          "لماذا قد يظهر تجويفان أنيقان من مسار لم يعبر بينهما إلا مرة؟",
          "Why might two neat basins appear from a trajectory that crossed between them only once?",
        ),
        answer: L(
          "لأن الوقت في كل وادٍ يكفي لرسم بقعة، والعبور مرة يرسم ممرّاً بلا إحصاء. −kT ln P سيضع حاجزاً عشوائي الارتفاع. بلا عدة عبور أو نسخ أو معاينة معززة، الخريطة رسم، لا طاقة حرة.",
          "Because time in each valley is enough to paint a blob, and one crossing paints a corridor with no statistics. −kT ln P will assign a barrier of arbitrary height. Without several crossings, replicas, or enhanced sampling, the map is a drawing, not a free energy.",
        ),
      },
      {
        type: "whatif",
        id: "l9-pca-whatif",
        scenario: L(
          "ماذا لو لوّنت الخريطة بزمن المسار فوجدت أن التجويف الثاني هو آخر 10 ns فقط؟",
          "What if you colour the map by trajectory time and find that the second basin is only the last 10 ns?",
        ),
        consequence: L(
          "قد يكون انتقالاً حقيقياً متأخراً أو انحرافاً غير متوازن (بداية تفكك، أو اصطناع). لا تعامل التجويفين كحالتين متوازنتين. مدّ أو كرّر النسخ. الزمن لونٌ يكشف عدم الاتزان الذي يُخفيه التلوين بالطاقة وحدها.",
          "It may be a real late transition or a non-equilibrium drift (start of unfolding, or an artefact). Do not treat the two basins as equilibrated states. Extend or repeat replicas. Time as a colour reveals non-equilibrium that energy colouring hides.",
        ),
      },
      {
        type: "callout",
        id: "l9-pca-lim",
        kind: "limitation",
        title: L("أول وضعين قد يكونان 40% من التباين", "The first two modes may be 40% of the variance"),
        body: L(
          "إن كان التباين متفرقاً، فالخريطة ثنائية الأبعاد تسقط معظم الحركة. اذكر نسبة التباين المفسَّر. بلا ذلك الشكل إيحاء بفهم كامل.",
          "If variance is spread out, the 2D map drops most of the motion. Report the fraction of variance explained. Without that the figure implies complete understanding.",
        ),
      },
      {
        type: "callout",
        id: "l9-pca-warn",
        kind: "warning",
        title: L("لا تكتب allostery من DCCM", "Do not write allostery from a DCCM"),
        body: L(
          "الارتباط في الحرارية الموضعية ليس مساراً إشارياً. التفارغ يحتاج اضطراباً (ليجند، طفرة) ومقارنة إحصاء، ويفضّل تجربة. DCCM فرضية شبكات، لا آلية.",
          "Correlation in local thermal motion is not a signalling path. Allostery needs a perturbation (ligand, mutation) and a statistical comparison, preferably with experiment. DCCM is a network hypothesis, not a mechanism.",
        ),
      },
      {
        type: "exercise",
        id: "l9-pca-ex",
        prompt: L(
          "ورقة تعرض FEL أنيقاً من PC1–PC2 لمسار 50 ns بلا نسخ، وتستنتج حاجز 3 kcal/mol بين هيئتين. اكتب نقد المناقشة.",
          "A paper shows a neat FEL from PC1–PC2 of a 50 ns trajectory with no replicas, and concludes a 3 kcal/mol barrier between two poses. Write the viva critique.",
        ),
        solution: L(
          "50 ns بلا عبور متكرر لا تُعيّن حاجزاً كمياً. الإسقاط ثنائي قد يخلق الحاجز. 3 kcal/mol أدق من المعاينة. المطلوب: عدد العبور، نسبة التباين، نسخ، أو معاينة معززة على إحداثية أفضل. الرقم يُحذف أو يُوسم كرسم تعليمي.",
          "50 ns without repeated crossings cannot assign a quantitative barrier. The 2D projection may create the barrier. 3 kcal/mol is more precise than the sampling. Required: crossing counts, variance fraction, replicas, or enhanced sampling on a better coordinate. The number is removed or labelled as an educational drawing.",
        ),
      },
      {
        type: "callout",
        id: "l9-pca-hyp",
        kind: "hypothesis",
        title: L("استخدام مشروع", "A legitimate use"),
        body: L(
          "PCA لاستخراج حركة جماعية تُستخدم لاحقاً كإحداثية في umbrella أو metadynamics — مع إعلان أنها فرضية إحداثية لا النتيجة النهائية.",
          "PCA to extract a collective motion later used as a coordinate in umbrella or metadynamics — declaring it a coordinate hypothesis, not the final result.",
        ),
      },
    ],
    ["l3-pca", "l9-convergence", "l10-enhanced", "l9-flex"],
  ),

  expand(
    "l9-convergence",
    [
      L(
        "تعريف التقارب كتحكم في خطأ المتوسط لا كجمال منحنى RMSD.",
        "Define convergence as control of the error on an average, not as beauty of an RMSD curve.",
      ),
      L(
        "استخدام النسخ ومتوسط الكتل والأحداث النادرة كأدوات صدق.",
        "Use replicas, block averaging, and rare events as honesty tools.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l9-conv-def",
        title: L("ماذا يعني أن المسار «كافٍ»؟", "What does it mean that a trajectory is “enough”?"),
        body: L(
          "الكفاية نسبية للسؤال. متوسط طاقة كولوم قصيرة الارتباط قد يتقارب أسرع من احتمال عبور فلاب. التقارب يعني أن تقديرك للكمية لا يتغيّر خارج خطأ تُقدّره إن أطلت المعاينة أو أعدت النسخة. RMSD المسطح ليس ذلك التقدير. الأدوات: (1) نسخ مستقلة من سرعات/هيئات مختلفة. (2) متوسط الكتل (block averaging) لتصحيح الارتباط الزمني داخل مسار واحد. (3) الاعتراف بالأحداث التي لم تُرَ: زمن المحاكاة يضع حداً أدنى لأزمنة لم تُشاهَد، لا قيمة لها.",
          "Enough is relative to the question. A short-range Coulomb energy average may settle faster than the probability of a flap crossing. Convergence means your estimate of the quantity does not move outside an error you can estimate if you lengthen sampling or repeat the replica. A flat RMSD is not that estimate. Tools: (1) independent replicas from different velocities/poses. (2) Block averaging to correct time correlation inside one trajectory. (3) Admission of unseen events: simulation time sets a lower bound on times not observed, not a value for them.",
        ),
      },
      {
        type: "list",
        id: "l9-conv-tools",
        title: L("أدوات لا شعارات", "Tools, not slogans"),
        items: [
          L(
            "Replicas: إن اختلفت النسخ أكثر من فرق الليجندين الذي تدّعيه، فلا فرق.",
            "Replicas: if replicas differ more than the ligand–ligand gap you claim, there is no gap.",
          ),
          L(
            "Block averaging: قسّم المسار كتلًا، احسب تباين متوسطات الكتل، وابحث عن طول كتلة يستقر عنده الخطأ. الارتباط الزمني يجعل N_الإطارات وهماً.",
            "Block averaging: split the trajectory into blocks, compute the variance of block means, find a block length where the error plateaus. Time correlation makes N_frames a fiction.",
          ),
          L(
            "أحداث نادرة: إن لم يخرج الليجند، يمكنك قول «koff أبطأ من ~1/T_sim تحت هذا النموذج» بحذر شديد — وغالباً لا يستحق ذلك الجملة لأن النموذج والحاجز الاصطناعي يلوّثان الحد.",
            "Rare events: if the ligand never left, you may say “koff is slower than ~1/T_sim under this model” with extreme caution — and often the sentence is not worth it because the model and an artificial barrier contaminate the bound.",
          ),
        ],
      },
      {
        type: "why",
        id: "l9-conv-why",
        question: L(
          "لماذا الإطار كل 10 ps ليس عيّنة مستقلة؟",
          "Why is a frame every 10 ps not an independent sample?",
        ),
        answer: L(
          "لأن الذاكرة الجزيئية (اهتزاز، انتشار موضعي) تمتد عشرات إلى مئات ps أو أكثر للحركات الجمعية. 10⁴ إطار ليست 10⁴ درجة حرية إحصائية. متوسط الكتل وeffective sample size موجودان لهذا السبب. تجاهلهما يُنتج أشرطة خطأ ضيقة كاذبة.",
          "Because molecular memory (vibration, local diffusion) lasts tens to hundreds of ps or more for collective motions. 10⁴ frames are not 10⁴ statistical degrees of freedom. Block averaging and effective sample size exist for that reason. Ignoring them produces falsely thin error bars.",
        ),
      },
      {
        type: "whatif",
        id: "l9-conv-whatif",
        scenario: L(
          "ماذا لو تقارب متوسط الطاقة في مسار واحد حسب الكتل، لكن نسخة ثانية تعطي فرقاً 4 kcal/mol في نفس الكمية؟",
          "What if the energy average converges in one trajectory by blocks, but a second replica disagrees by 4 kcal/mol on the same quantity?",
        ),
        consequence: L(
          "تقارب داخل وادٍ، لا تقارب مشهد. الكمية تعتمد على الهيئة الابتدائية. لا تنشر الرقم الأول. زد نسخاً أو غيّر المعاينة (هيئات docking متعددة، معززة). 4 kcal/mol أكبر من معظم فروق التصميم.",
          "Convergence inside a valley, not landscape convergence. The quantity depends on the starting pose. Do not publish the first number. Add replicas or change sampling (multiple docking poses, enhanced). 4 kcal/mol is larger than most design gaps.",
        ),
      },
      {
        type: "callout",
        id: "l9-conv-warn",
        kind: "warning",
        title: L("لا تُقدّر الخطأ من نصف المسار بعد رؤية النتيجة", "Do not estimate error from half the trajectory after seeing the result"),
        body: L(
          "اختيار النصف «المستقر» يتحيّز. عرّف البروتوكول: تجاهل X ns اتزان، ثم كتل على الباقي، ثم مقارنة النسخ.",
          "Choosing the “stable” half is biased. Define the protocol: discard X ns of equilibration, then blocks on the rest, then compare replicas.",
        ),
      },
      {
        type: "callout",
        id: "l9-conv-edu",
        kind: "educational",
        title: L("رتب زمنية تعليمية", "Educational timescales"),
        body: L(
          "اهتزاز رابطة: fs. دوران سلسلة جانبية: ps–ns. عرى: ns–μs وأبطأ. ارتباط دواء محكم: قد يتجاوز μs–s. محاكاة 100 ns تلامس بداية العرى لا نهاية الارتباط.",
          "Bond vibration: fs. Side-chain rotation: ps–ns. Loops: ns–μs and slower. Tight drug binding: may exceed μs–s. A 100 ns simulation touches the beginning of loop motion, not the end of binding.",
        ),
      },
      {
        type: "callout",
        id: "l9-conv-lim",
        kind: "limitation",
        title: L("لا شهادة تقارب عامة", "There is no general convergence certificate"),
        body: L(
          "كل كمية لها زمنها. إعلان «المحاكاة متقاربة» بلا تسمية الكمية جملة غير علمية. اكتب: «متوسط عدد H-bonds بروتين–ليجند استقر بين النسخ ضمن …».",
          "Each quantity has its own time. Declaring “the simulation is converged” without naming the quantity is unscientific. Write: “the mean protein–ligand H-bond count agreed across replicas within …”.",
        ),
      },
      {
        type: "exercise",
        id: "l9-conv-ex",
        prompt: L(
          "ثلاثة replicas، متوسط درجة تماس ليغند 42 و 45 و 18. المؤلف يعرض 35 ± 2 بعد دمج المسارات. صحّح الإحصاء والجملة.",
          "Three replicas, mean ligand contact counts 42, 45, and 18. The author reports 35 ± 2 after merging trajectories. Correct the statistics and the sentence.",
        ),
        solution: L(
          "الدمج غير مشروع دون نموذج اختلاط. التشتت بين النسخ هو الإشارة: نسختان في هيئة، وواحدة هربت أو انقلبت. اعرض الثلاثة، ولا تعطِ ±2 من الخطأ داخل المسار المدمج. الجملة: «هيئتان بقيت في نطاق تماس عالٍ؛ الثالثة انهارت التماسات — المعاينة غير محسومة».",
          "Merging is illegitimate without a mixing model. Replica scatter is the signal: two poses in one basin, one escaped or flipped. Show all three; do not quote ±2 from within-run error of the merge. Sentence: “two replicas stayed in a high-contact regime; the third lost contacts — sampling is unresolved.”",
        ),
      },
    ],
    ["l9-rmsd", "l9-production", "l3-stats", "l10-limits", "l23-short-md"],
  ),

  expand(
    "l9-mistakes",
    [
      L(
        "تجميع أخطاء MD من الخطوة الزمنية إلى ادّعاء الاستقرار في جملة viva.",
        "Collect MD mistakes from timestep to stability claims into viva sentences.",
      ),
      L(
        "اقتراح البديل العلمي لكل خطأ.",
        "Propose the scientific alternative for each mistake.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l9-mist-intro",
        title: L("الأخطاء تتكرر لأنها مريحة", "Mistakes repeat because they are comfortable"),
        body: L(
          "ورقة MD الضعيفة ليست دائماً حساباً خاطئاً؛ غالباً تفسير مريح لمسار قصير. القائمة أدناه أنماط، لا اتهام لورقة مسمّاة. إن وجدت نفسك فيها، فالإصلاح توثيق قرار وإعادة سؤال، لا إخفاء الرسم.",
          "A weak MD paper is not always a wrong calculation; it is often a comfortable interpretation of a short trajectory. The list below is patterns, not an accusation of a named paper. If you recognise yourself, the fix is to document a decision and reopen the question, not to hide the plot.",
        ),
      },
      {
        type: "list",
        id: "l9-mist-list",
        title: L("أنماط شائعة", "Common patterns"),
        ordered: true,
        items: [
          L(
            "Δt أكبر من الفيزياء، أو تجاهل تحذير القيود.",
            "Δt larger than the physics, or ignoring constraint warnings.",
          ),
          L(
            "ليجند من docking دون معاملات؛ شحنات PDBQT في MD.",
            "A docking ligand without parameters; PDBQT charges in MD.",
          ),
          L(
            "صندوق ضيق وتفسير allostery عبر الصورة الدورية.",
            "A tight box and allostery interpreted through the periodic image.",
          ),
          L(
            "Berendsen إنتاجاً مع تقلبات تُفسَّر كفيزياء.",
            "Berendsen as production with fluctuations interpreted as physics.",
          ),
          L(
            "مسار واحد 20–100 ns وRMSD مسطح = استقرار المثبط.",
            "One 20–100 ns trajectory and a flat RMSD = inhibitor stability.",
          ),
          L(
            "دمج نسخ مختلفة كمتوسط لامع بلا شريحة.",
            "Merging disagreeing replicas into a glossy mean without spread.",
          ),
          L(
            "FEL من PCA لمسار قصير كحاجز kcal/mol.",
            "An FEL from PCA of a short run as a kcal/mol barrier.",
          ),
          L(
            "لغة «أثبتت المحاكاة الآلية» بدل «تتوافق المعاينة مع».",
            "The language “the simulation proved the mechanism” instead of “sampling is consistent with.”",
          ),
        ],
      },
      {
        type: "why",
        id: "l9-mist-why",
        question: L(
          "لماذا يمر RMSD المسطح في المراجعة أحياناً؟",
          "Why does a flat RMSD sometimes pass review?",
        ),
        answer: L(
          "لأنه رسم مألوف يوحي بالسيطرة، ولأن بعض المجلات ما زالت تقبل «MD لتأكيد الالتحام» كطقوس. مهمتك ألا تُمارس الطقس. المحكّم الجيد يسأل النسخ والكمية والزمن مقابل السؤال.",
          "Because it is a familiar plot that suggests control, and because some journals still accept “MD to confirm docking” as ritual. Your job is not to perform the ritual. A good referee asks for replicas, the quantity, and time versus the question.",
        ),
      },
      {
        type: "whatif",
        id: "l9-mist-whatif",
        scenario: L(
          "ماذا لو اكتشفت بعد كتابة الرسالة أن نسخة رابعة تُفقد الليجند؟",
          "What if, after writing the thesis, you find that a fourth replica loses the ligand?",
        ),
        consequence: L(
          "هذا نتيجة. تُضاف لا تُحذف. تعيد صياغة الاستقرار كاعتماد على البداية، وتضعف الدعوى. إخفاء النسخة سوء سلوك. العلم هو التشتت أيضاً.",
          "That is a result. It is added, not deleted. You recast stability as start-point dependence and weaken the claim. Hiding the replica is misconduct. The science is the scatter too.",
        ),
      },
      {
        type: "callout",
        id: "l9-mist-warn",
        kind: "warning",
        title: L("«تأكيد الالتحام بـ MD» جملة شبه فارغة", "“MD confirms docking” is a nearly empty sentence"),
        body: L(
          "إن بقي الليجند في الجيب 50 ns فهذا عدم مغادرة في نافذة قصيرة لنموذج قد يحبس. التأكيد يحتاج مقارنة هيئات، تماسّات مع البلورة، ونسخاً، وحدوداً صريحة. بلا ذلك MD ديكور للـ docking.",
          "If the ligand stays in the pocket 50 ns, that is failure to leave in a short window of a model that may trap. Confirmation needs pose comparison, contacts versus the crystal, replicas, and explicit limits. Without that, MD is docking décor.",
        ),
      },
      {
        type: "callout",
        id: "l9-mist-lim",
        kind: "limitation",
        title: L("قائمة الأخطاء لا تكتمل", "The mistake list is never complete"),
        body: L(
          "كل هدف له فخه: غشاء بلا دهون صحيحة، بلورة بتوأمة، glycans محذوفة. اقرأ النظام قبل أن تقرأ هذه القائمة كطقوس عامة.",
          "Every target has its trap: a membrane with the wrong lipids, a twinned crystal, deleted glycans. Read the system before you read this list as a generic ritual.",
        ),
      },
      {
        type: "exercise",
        id: "l9-mist-ex",
        prompt: L(
          "أعد كتابة المناقشة: «أظهرت محاكاة 100 ns أن المركب مستقر في الجيب بقوة RMSD < 2 Å مما يؤكد طاقة الالتحام −9 kcal/mol».",
          "Rewrite the discussion: “A 100 ns simulation showed the compound is stably bound with RMSD < 2 Å, confirming the docking energy of −9 kcal/mol.”",
        ),
        solution: L(
          "«في مسار إنتاج واحد (100 ns، NPT، مجال X) بقي الليجند داخل الجيب بعد مواءمة البروتين، بـ RMSD ثقيل الذرات دون 0.2 nm مقابل هيئة الانطلاق. لم تُجرَ نسخ. لا يُستنتج ΔG ولا تأكيد لدرجة الالتحام (الدرجة ليست طاقة حرة). النتيجة: عدم ملاحظة التفكك في هذه النافذة تحت هذا النموذج».",
          "“In one production trajectory (100 ns, NPT, field X) the ligand remained in the pocket after protein alignment, with heavy-atom RMSD below 0.2 nm versus the starting pose. No replicas were run. Neither ΔG nor confirmation of the docking score (the score is not a free energy) is inferred. Result: unbinding was not observed in this window under this model.”",
        ),
      },
    ],
    ["l9-rmsd", "l9-convergence", "l9-ensembles", "l8-not-dg", "l23-short-md"],
  ),
];
