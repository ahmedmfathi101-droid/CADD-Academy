import type { Lesson } from "@/lib/academy/types";
import { expand, L } from "@/lib/academy/content/helpers";

export const lessons: Lesson[] = [
  expand(
    "l10-dg",
    [
      L(
        "تعريف ΔG الارتباط كفرق بين حالتين مع معيار قياسي، لا كدرجة هيئة.",
        "Define binding ΔG as a difference between two states with a standard state, not as a pose score.",
      ),
      L(
        "ربط ΔG = ΔH − TΔS و ΔG = −RT ln K بما يُقاس وما لا يُقاس حاسوبياً بسهولة.",
        "Connect ΔG = ΔH − TΔS and ΔG = −RT ln K to what is and is not easily computed.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l10-dg-states",
        title: L("ΔG بين ماذا وماذا؟", "ΔG between what and what?"),
        body: L(
          "طاقة الارتباط الحرة هي فرق غيبس بين معقد بروتين–ليجند في المذيب وحالة منفصلة (بروتين فارغ + ليغند مُذاب) عند T وP معيّنين، بعد تعريف تركيز معياري. ليست طاقة كمون لهيئة واحدة، وليست درجة docking، وليست متوسط MM/PBSA دون حالة unbound إن أُسيء بناء الدورة. الإشارة السالبة المواتية تعني أن المعقد مُفضَّل ثرموديناميكياً عند ذلك المعيار. المقدار يُترجم إلى K عبر −RT ln K. كل طريقة حاسوبية تختار مساراً بين الحالتين: مسار كيميائي تخيلي (FEP/TI)، أو مسار فيزيائي على إحداثية (umbrella)، أو تقدير نهاية إلى نهاية بمعادلات تقريبية (MM/PBSA). جودة الطريقة جودة المسار والفيزياء لا جودة الاسم.",
          "Binding free energy is the Gibbs difference between a solvated protein–ligand complex and a separated state (empty protein + solvated ligand) at given T and P, after a standard concentration is defined. It is not the potential of one pose, not a docking score, and not an MM/PBSA average without an unbound state if the cycle was built badly. A favourable negative sign means the complex is thermodynamically preferred at that standard state. The magnitude maps to K through −RT ln K. Every computational method chooses a path between the two states: a fictitious chemical path (FEP/TI), a physical path on a coordinate (umbrella), or an end-state estimate with approximate equations (MM/PBSA). Method quality is path-and-physics quality, not name quality.",
        ),
      },
      {
        type: "equation",
        id: "l10-dg-htds",
        latex: "\\Delta G = \\Delta H - T\\Delta S",
        name: L("تجزئة غيبس", "Gibbs split"),
        meaning: L(
          "الارتباط المواتي قد يأتي من إنثالبي (تفاعلات) أو إنتروبي (ماء، حرية هيئات) أو من كليهما بتعويض.",
          "Favourable binding may come from enthalpy (interactions) or entropy (water, conformational freedom) or from both with compensation.",
        ),
        variables: [
          {
            symbol: "\\Delta H",
            name: L("تغيّر الإنثالبي للارتباط", "Enthalpy change of binding"),
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
          "ITC يقيس ΔH ويقارب ΔS من ΔG. الحاسوب يرى أجزاء من ΔH (MM) بصعوبة أقل من ΔS. إهمال TΔS أو تقديره بـ n_rotors يُحرّك الرقم بعدة kcal/mol — أي عشرات الأضعاف في K.",
          "ITC measures ΔH and infers ΔS from ΔG. The computer sees pieces of ΔH (MM) more easily than ΔS. Omitting TΔS or estimating it from n_rotors moves the number by several kcal/mol — tens of fold in K.",
        ),
        application: L(
          "عندما تختلف طريقتان بـ 5 kcal/mol، اسأل أي جزء من ΔH أو ΔS أُسقط قبل أن تسأل أي برنامج «أفضل».",
          "When two methods differ by 5 kcal/mol, ask which piece of ΔH or ΔS was dropped before you ask which program is “better.”",
        ),
      },
      {
        type: "equation",
        id: "l10-dg-rtlnk",
        latex: "\\Delta G^{\\circ} = -RT \\ln K",
        name: L("من الاتزان إلى غيبس", "From equilibrium to Gibbs"),
        meaning: L(
          "K ثابت اتزان عديم الوحدة بعد اختزال المعيار؛ لارتباط 1:1 يرتبط بـ 1/Kd.",
          "K is a dimensionless equilibrium constant after standard-state reduction; for 1:1 binding it relates to 1/Kd.",
        ),
        variables: [
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
            name: L("ثابت الاتزان المعياري", "Standard equilibrium constant"),
          },
        ],
        interpretation: L(
          "الحاسوب إن أخرج ΔG° مطلقاً بدقة 1 kcal/mol فقد رتّب Kd ضمن نحو عشرة أضعاف. معظم الطرق الرخيصة أخشن من ذلك على كيمياء متنوعة. ΔΔG بين متشابهين أسهل من ΔG المطلق.",
          "If a computer produced an absolute ΔG° accurate to 1 kcal/mol, it ranked Kd within about ten-fold. Most cheap methods are coarser than that on diverse chemistry. ΔΔG between analogues is easier than absolute ΔG.",
        ),
        application: L(
          "ترجم هدف التصميم إلى ΔΔG: عشرة أضعاف في القوة ≈ 1.4 kcal/mol عند 298 K — هذا مقياس صدق الطريقة.",
          "Translate the design goal into ΔΔG: ten-fold in potency ≈ 1.4 kcal/mol at 298 K — that is the honesty scale of the method.",
        ),
      },
      {
        type: "callout",
        id: "l10-dg-edu",
        kind: "educational",
        title: L("أرقام تربط المختبر بالحاسوب", "Numbers that tie the lab to the computer"),
        body: L(
          "عند 298 K: RT ≈ 0.592 kcal/mol؛ RT ln(10) ≈ 1.36 kcal/mol (≈ 1.4). Kd = 1 μM → ΔG° ≈ −8.2 kcal/mol؛ 1 nM → ≈ −12.3 kcal/mol. خطأ 2 kcal/mol ≈ 30 ضعفاً في K. أي جدول «ΔG» من docking بفروق 0.3 kcal/mol يدّعي دقة أرفع من الفيزياء المستخدمة.",
          "At 298 K: RT ≈ 0.592 kcal/mol; RT ln(10) ≈ 1.36 kcal/mol (≈ 1.4). Kd = 1 μM → ΔG° ≈ −8.2 kcal/mol; 1 nM → ≈ −12.3 kcal/mol. A 2 kcal/mol error ≈ 30-fold in K. Any docking “ΔG” table with 0.3 kcal/mol gaps claims finer precision than the physics in use.",
        ),
      },
      {
        type: "why",
        id: "l10-dg-why",
        question: L(
          "لماذا ΔΔG بين مشتقين أصدق عادةً من ΔG المطلق لكل منهما؟",
          "Why is ΔΔG between two analogues usually more honest than absolute ΔG of each?",
        ),
        answer: L(
          "لأن أخطاء مشتركة (نموذج الماء، شحنات البروتين، المعيار القياسي، جزء كبير من الإذابة) تنقص في الفرق إن كانت الكيمياء متقاربة والهيئات متشابهة. إن تغيّر هيكل الربط أو الشحنة الصافية، فقدت الإلغاء. FEP النسبي يعيش على هذه الفكرة؛ مقارنة MM/PBSA لسلسلتين بعيدتين لا.",
          "Because shared errors (water model, protein charges, standard state, a large piece of solvation) subtract in the difference if the chemistry is close and the poses similar. If the binding mode or net charge changes, cancellation is lost. Relative FEP lives on this idea; MM/PBSA comparison of two remote series does not.",
        ),
      },
      {
        type: "whatif",
        id: "l10-dg-whatif",
        scenario: L(
          "ماذا لو حسبت ΔG من هيئة docking عبر «الدرجة = ΔG» ثم قارنتها بـ ITC؟",
          "What if you compute ΔG from a docking pose via “score = ΔG” and compare it to ITC?",
        ),
        consequence: L(
          "أنت تقارن كمية بلا حالة unbound وبلا ensemble بكمية اتزان تجريبية. الاتفاق صدفة أو انحياز حجم. الاختلاف لا يُعلّمك أي حد فيزيائي أُسقط لأن كل الحدود أُسقطت دفعة واحدة. استخدم طريقة لها دورة ترموديناميكية إن أردت الحوار مع ITC.",
          "You are comparing a quantity with no unbound state and no ensemble to an experimental equilibrium quantity. Agreement is chance or size bias. Disagreement does not teach you which physical term was dropped because all terms were dropped at once. Use a method with a thermodynamic cycle if you want a conversation with ITC.",
        ),
      },
      {
        type: "callout",
        id: "l10-dg-warn",
        kind: "warning",
        title: L("لا تخلط ΔG وΔE وscore في عمود واحد", "Do not mix ΔG, ΔE, and score in one column"),
        body: L(
          "ΔE كمون أو طاقة كامنة؛ ΔG حرّة. وحدات kcal/mol المشتركة إغراء لا هوية. سمِّ العمود بما حُسب فعلاً.",
          "ΔE is a potential or a raw energy; ΔG is free. Shared kcal/mol units are a temptation, not an identity. Name the column by what was actually computed.",
        ),
      },
      {
        type: "exercise",
        id: "l10-dg-ex",
        prompt: L(
          "مركّبان: Kd = 10 nM و 100 nM عند 298 K. ما ΔΔG المتوقع؟ هل فرق docking 0.4 kcal/mol يدعم أيهما أقوى؟",
          "Two compounds: Kd = 10 nM and 100 nM at 298 K. What ΔΔG is expected? Does a docking gap of 0.4 kcal/mol support which is stronger?",
        ),
        solution: L(
          "النسبة 10 في K → ΔΔG ≈ 1.36 kcal/mol. فرق docking 0.4 أصغر من الهدف وأصغر من ضجيج الدالة؛ لا يدعم الترتيب. حتى إشارة الفرق غير موثوقة عند ذاك المقدار.",
          "A factor of 10 in K → ΔΔG ≈ 1.36 kcal/mol. A docking gap of 0.4 is smaller than the target and smaller than the function’s noise; it does not support the ranking. Even the sign of the gap is untrustworthy at that magnitude.",
        ),
      },
      {
        type: "callout",
        id: "l10-dg-lim",
        kind: "limitation",
        title: L("الحالة القياسية قرار", "The standard state is a decision"),
        body: L(
          "1 M التخيلي ليس تركيز المقايسة. مقارنة رقم حاسوبي بـ ΔG مشتق من IC50 دون تصحيح المعيار والشروط خلط طبقات (درس l8-affinity).",
          "The hypothetical 1 M is not the assay concentration. Comparing a computed number to a ΔG derived from IC50 without standard-state and condition corrections mixes layers (lesson l8-affinity).",
        ),
      },
    ],
    ["l2-gibbs", "l2-binding", "l8-affinity", "l10-mmpbsa", "l10-fep"],
  ),

  expand(
    "l10-mmpbsa",
    [
      L(
        "تفكيك MM/PBSA وMM/GBSA إلى ΔEMM وΔGsolv وTΔS مع معنى كل حد.",
        "Decompose MM/PBSA and MM/GBSA into ΔEMM, ΔGsolv, and TΔS with the meaning of each term.",
      ),
      L(
        "تمييز PB عن GB كتقريب إذابة قطبية، والسطح كإذابة غير قطبية.",
        "Distinguish PB from GB as polar solvation approximations, and surface as nonpolar solvation.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l10-mm-idea",
        title: L("فكرة نهاية الحالة", "The end-state idea"),
        body: L(
          "MM/PBSA (ومقابلها MM/GBSA) لا يحوّل الليجند إلى عدم على مسار λ. يأخذ هيئات من مسار (غالباً للمعقد فقط: تقريب single-trajectory) ويقدّر ΔG ≈ ⟨ΔEMM + ΔGsolv − TΔS⟩. ΔEMM من مجال القوة في الفراغ (bonded + vdW + Coulomb). ΔGsolv من نموذج مستمر: Poisson–Boltzmann أو Generalized Born للجزء القطبي، ومساحة سطح للجزء غير القطبي. TΔS من تقريب توافقي عادي (غالباً مكلف وصاخب) أو يُهمَل. الطريقة رخيصة نسبياً لأنها تعيد استخدام مسار MD. الثمن: نموذج المذيب المستمر، وإلغاء ناقص للأخطاء، وإنتروبي هش، ومعاينة قد لا تمثل unbound.",
          "MM/PBSA (and MM/GBSA) does not annihilate the ligand along a λ path. It takes poses from a trajectory (often of the complex only: the single-trajectory approximation) and estimates ΔG ≈ ⟨ΔEMM + ΔGsolv − TΔS⟩. ΔEMM comes from the force field in vacuum (bonded + vdW + Coulomb). ΔGsolv comes from a continuum model: Poisson–Boltzmann or Generalized Born for the polar part, and a surface area for the nonpolar part. TΔS comes from a normal-mode harmonic approximation (often costly and noisy) or is omitted. The method is relatively cheap because it reuses an MD trajectory. The cost: a continuum solvent, incomplete error cancellation, fragile entropy, and sampling that may not represent the unbound state.",
        ),
      },
      {
        type: "equation",
        id: "l10-mm-eq",
        latex:
          "\\Delta G_{\\mathrm{bind}} \\approx \\langle \\Delta E_{\\mathrm{MM}} + \\Delta G_{\\mathrm{solv}} - T\\Delta S \\rangle",
        name: L("صيغة MM/PBSA التشغيلية", "Operational MM/PBSA formula"),
        meaning: L(
          "متوسط حدود ميكانيكا جزيئية وإذابة مستمرة وإنتروبي تقريبي على هيئات مأخوذة من معاينة.",
          "An average of molecular-mechanics, continuum-solvation, and approximate-entropy terms over poses taken from sampling.",
        ),
        variables: [
          {
            symbol: "\\Delta E_{\\mathrm{MM}}",
            name: L("فرق طاقة MM (معقد − أجزاء) في الفراغ", "MM energy difference (complex − parts) in vacuum"),
            unit: L("kcal mol⁻¹", "kcal mol⁻¹"),
          },
          {
            symbol: "\\Delta G_{\\mathrm{solv}}",
            name: L("فرق إذابة مستمرة (قطبي + غير قطبي)", "Continuum solvation difference (polar + nonpolar)"),
            unit: L("kcal mol⁻¹", "kcal mol⁻¹"),
          },
          {
            symbol: "T\\Delta S",
            name: L("حد إنتروبي تقريبي", "Approximate entropy term"),
            unit: L("kcal mol⁻¹", "kcal mol⁻¹"),
          },
        ],
        interpretation: L(
          "الأقواس ⟨⟩ تفترض أن الهيئات عيّنة من الاتزان. مسار 20 ns لوادٍ واحد يجعل المتوسط محلياً. إشارة كل حد كبيرة ومتعارضة غالباً: كولوم مواتٍ تُلغيه إذابة قطبية. الرقم النهائي فرق كبيرين — حساس للثوابت العازلة وللشحنات.",
          "The ⟨⟩ assumes poses are equilibrium samples. A 20 ns trajectory of one valley makes the average local. Each term is often large and opposing: favourable Coulomb cancelled by polar solvation. The final number is a difference of large numbers — sensitive to dielectric constants and charges.",
        ),
        application: L(
          "أبلغ المكوّنات لا المجموع وحده. إن كان الترتيب مدفوعاً بـ ΔEvdW لليجند الأكبر، فأنت ترى حجماً لا فيزياء جيب نوعية.",
          "Report the components, not the sum alone. If ranking is driven by ΔEvdW of the larger ligand, you are seeing size, not specific pocket physics.",
        ),
      },
      {
        type: "list",
        id: "l10-mm-terms",
        title: L("تشريح الحدود", "Anatomy of the terms"),
        items: [
          L(
            "ΔEMM ≈ ΔEbonded + ΔEvdW + ΔEelec. في single-trajectory، ΔEbonded للمعقد والأجزاء من نفس الهيئات يُلغي كثيراً من bonded.",
            "ΔEMM ≈ ΔEbonded + ΔEvdW + ΔEelec. In a single-trajectory treatment, ΔEbonded of complex and parts from the same poses cancels much of bonded.",
          ),
          L(
            "ΔGsolv,polar: PB يحل جهد عازل بحدود؛ GB تقريب أسرع. كلاهما يحتاج ثابت عازل داخلي (غالباً 1–4) وخارجي (~80 للماء) — اختيار لا قياس.",
            "ΔGsolv,polar: PB solves a dielectric potential with boundaries; GB is a faster approximation. Both need an internal dielectric (often 1–4) and external (~80 for water) — a choice, not a measurement.",
          ),
          L(
            "ΔGsolv,nonpolar: غالباً γ × ΔSASA (+ حد ثابت). يُمثّل تجويف الماء تجريبياً، لا شبكة ماء صريحة.",
            "ΔGsolv,nonpolar: often γ × ΔSASA (+ a constant). It represents water cavitation empirically, not an explicit water network.",
          ),
          L(
            "−TΔS: normal modes على معقد وأجزاء، أو إهمال. التوافقي يفترض بئراً واحدة ضيقة. ليغند مرن يُخطَّأ.",
            "−TΔS: normal modes on complex and parts, or omission. The harmonic picture assumes one narrow well. A flexible ligand is misrepresented.",
          ),
        ],
      },
      {
        type: "compare",
        id: "l10-mm-pb-gb",
        left: L("MM/PBSA", "MM/PBSA"),
        right: L("MM/GBSA", "MM/GBSA"),
        rows: [
          {
            dim: L("الإذابة القطبية", "Polar solvation"),
            a: L("Poisson–Boltzmann (أثقل، أدق نظرياً داخل نفس النموذج المستمر).", "Poisson–Boltzmann (heavier; theoretically finer inside the same continuum)."),
            b: L("Generalized Born (أسرع؛ تقريب).", "Generalized Born (faster; an approximation)."),
          },
          {
            dim: L("الاستخدام", "Use"),
            a: L("حين تكون الكهروستاتيك حساسة والشحنة عالية، إن تحمّلت التكلفة.", "When electrostatics are sensitive and charge is high, if you can afford it."),
            b: L("مسح سلسلة قريبة؛ لا يعني أخشن دائماً على كل هدف.", "Scanning a close series; does not always mean cruder on every target."),
          },
          {
            dim: L("الوهم المشترك", "Shared illusion"),
            a: L("كلاهما ليس FEP.", "Neither is FEP."),
            b: L("كلاهما ليس FEP.", "Neither is FEP."),
          },
        ],
      },
      {
        type: "why",
        id: "l10-mm-why",
        question: L(
          "لماذا يُستخدم single-trajectory رغم أن unbound غير مُعايَن صراحة؟",
          "Why use a single trajectory even though the unbound state is not explicitly sampled?",
        ),
        answer: L(
          "لأن هيئات البروتين والليجند من المعقد تُعاد استخدامها كأجزاء، فتلغى أخطاء كثيرة وتُخفض التكلفة. الفرض: هيئة unbound قريبة من bound. يفشل الفرض عند fit كبير مستحث، أو ليغند يطوي نفسه في الماء بخلاف الجيب. three-trajectory أصدق نظرياً وأصخب إحصائياً.",
          "Because protein and ligand poses from the complex are reused as parts, so many errors cancel and cost drops. The assumption: unbound poses are close to bound. It fails for large induced fit, or a ligand that folds in water unlike in the pocket. Three-trajectory is theoretically more honest and statistically noisier.",
        ),
      },
      {
        type: "whatif",
        id: "l10-mm-whatif",
        scenario: L(
          "ماذا لو أهملت TΔS لأن «القيم متقاربة بين المركبات» ثم رتّبت سلسلة تختلف في عدد الروابط القابلة للدوران من 2 إلى 12؟",
          "What if you omit TΔS because “values are similar across compounds” then rank a series whose rotatable-bond count runs from 2 to 12?",
        ),
        consequence: L(
          "أسقطت حداً يتغيّر منهجياً مع المرونة. المركّب الأكثر قيوداً سيُعاقَب إنتروبيًا في الحقيقة وقد يفوز في ΔEMM+ΔGsolv. إما تقدّر الإنتروبي بحذر وتعلن الضجيج، أو تقتصر على سلسلة متساوية المرونة وتعلن الإهمال كحد.",
          "You dropped a term that changes systematically with flexibility. The more constrained compound is entropically punished in reality and may win on ΔEMM+ΔGsolv. Either estimate entropy cautiously and declare the noise, or restrict to a series of matched flexibility and declare the omission as a limitation.",
        ),
      },
      {
        type: "callout",
        id: "l10-mm-lim",
        kind: "limitation",
        title: L("فرق كبيرين", "A difference of large numbers"),
        body: L(
          "ΔEelec وΔGpolar غالباً عشرات kcal/mol بعلامة متعاكسة. خطأ 5% في أحدهما يحرّك ΔG بعدة kcal/mol. لذلك الطريقة هشة للشحنات وللعازل الداخلي. لا تقرأ ثلاث خانات عشرية.",
          "ΔEelec and ΔGpolar are often tens of kcal/mol with opposite sign. A 5% error in one moves ΔG by several kcal/mol. The method is therefore fragile to charges and to the internal dielectric. Do not read three decimal places.",
        ),
      },
      {
        type: "callout",
        id: "l10-mm-warn",
        kind: "warning",
        title: L("ليست طاقة ارتباط مطلقة جاهزة للنشر كـ Kd", "Not an absolute binding free energy ready to publish as a Kd"),
        body: L(
          "حتى حين يُذكر «kcal/mol» ويُرسم مقابل pIC50، فالاتفاق ارتباط داخل مجموعة، لا معايرة عامة. خارج السلسلة ينهار. درس الحدود (l10-limits) يُكمل هذا التحذير.",
          "Even when “kcal/mol” is printed and plotted against pIC50, agreement is a correlation inside a set, not a universal calibration. Off-series it collapses. The limits lesson (l10-limits) completes this warning.",
        ),
      },
      {
        type: "exercise",
        id: "l10-mm-ex",
        prompt: L(
          "جدول مكوّنات: المركب A ΔEvdW أوحى، ΔEelec −40، ΔGpolar +38، TΔS مهمل. المركب B أصغر حجماً بحدود أصغر. المؤلف يعلن A أقوى بـ 6 kcal/mol. ما سؤالك الأول؟",
          "Component table: compound A has favourable ΔEvdW, ΔEelec −40, ΔGpolar +38, TΔS omitted. Compound B is smaller with smaller terms. The author declares A stronger by 6 kcal/mol. What is your first question?",
        ),
        solution: L(
          "هل الفرق حجم (vdW/SASA) أم تفاعل نوعي يبقى بعد تطبيع الحجم؟ وما حساسية العازل الداخلي على −40+38؟ أظهر إن بقي الترتيب عند ε_in = 1 و 2 و 4. بلا ذلك 6 kcal/mol مسرح إلغاء.",
          "Is the gap size (vdW/SASA) or a specific interaction that survives size normalisation? And what is the internal-dielectric sensitivity of −40+38? Show whether ranking survives ε_in = 1, 2, and 4. Without that, 6 kcal/mol is cancellation theatre.",
        ),
      },
    ],
    ["l10-decomp", "l10-limits", "l10-dg", "l6-coulomb", "l9-production"],
  ),

  expand(
    "l10-decomp",
    [
      L(
        "تفسير التفكيك لكل بقايا كمؤشر تصميم لا كبرهان سببي.",
        "Interpret per-residue decomposition as a design hint, not as causal proof.",
      ),
      L(
        "معرفة ما يُلغى وما يبقى عند نسبة المساهمة لبقايا مشحونة.",
        "Know what cancels and what remains when assigning contribution to a charged residue.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l10-dec-idea",
        title: L("من المجموع إلى البقايا", "From the sum to residues"),
        body: L(
          "تفكيك MM/PBSA (أو MM/GBSA) ينسب حدود طاقة إلى أزواج ذرات ثم يُجمّع لكل بقايا: «ASP25 تساهم بكذا kcal/mol». هذا توزيع محاسبي لطاقة نموذج مستمر وMM، لا تجربة طفرة. الطاقة ليست خاصية مضافة بشكل فريد: جزء كولوم زوجي، وجزء إذابة تعاوني (العازل يرى كل الشحنات). تغيير تسمية «مساهمة» لا يغيّر أن حذف البقايا في المختبر يُعيد تنظيم الماء والهيئات. استخدم التفكيك لتوليد فرضية «هذا المانح يستحق methyl scan» لا لتكتب «ASP25 يسبب 4.2 kcal/mol من التثبيط».",
          "MM/PBSA (or MM/GBSA) decomposition assigns energy terms to atom pairs then sums per residue: “ASP25 contributes X kcal/mol.” That is an accounting distribution of a continuum+MM energy, not a mutation experiment. Energy is not uniquely additive: Coulomb is pairwise, solvation is cooperative (the dielectric sees all charges). Relabelling a “contribution” does not change the fact that deleting the residue in the lab reorganises water and poses. Use decomposition to generate the hypothesis “this donor is worth a methyl scan,” not to write “ASP25 causes 4.2 kcal/mol of inhibition.”",
        ),
      },
      {
        type: "list",
        id: "l10-dec-use",
        title: L("استخدام مشروع", "Legitimate use"),
        items: [
          L(
            "ترتيب بقايا الجيب لمناقشة أي تفاعل يظهر في المعاينة.",
            "Ranking pocket residues to discuss which interaction appears in the sampling.",
          ),
          L(
            "مقارنة مركّبين قريبين: أي بقايا تغيّرت مساهمتها مع استبدال مجموعة.",
            "Comparing two close compounds: which residue’s contribution shifted with a substituent.",
          ),
          L(
            "اقتراح طفرة أو bioisostere — كفرضية.",
            "Suggesting a mutation or bioisostere — as a hypothesis.",
          ),
        ],
      },
      {
        type: "callout",
        id: "l10-dec-interp",
        kind: "interpretation",
        title: L("الشريط على ASP ليس ΔΔG للطفرة", "The bar on ASP is not the ΔΔG of a mutation"),
        body: L(
          "طفرة ASP→ALA في التجربة تحذف الشحنة وتُغيّر الإذابة والهيئات وربما pKa الجيران. التفكيك يُبقي بقية النظام ثابتاً في هيئات المعقد. الاتفاق مع ΔΔG تجريبي ممكن لحالات لطيفة، وليس معيار صدق عام.",
          "An ASP→ALA mutation in experiment deletes the charge and changes solvation, poses, and perhaps neighbours’ pKa. Decomposition keeps the rest of the system fixed in complex poses. Agreement with experimental ΔΔG is possible in mild cases; it is not a general validity criterion.",
        ),
      },
      {
        type: "why",
        id: "l10-dec-why",
        question: L(
          "لماذا تبدو البقايا المشحونة «مهمة جداً» دائماً في التفكيك؟",
          "Why do charged residues always look “very important” in decomposition?",
        ),
        answer: L(
          "لأن ΔEelec كبير، حتى حين تلغيه ΔGpolar جزئياً. إن عُرضت مساهمة MM دون إذابة، تتضخم الأيونات. حتى مع الإذابة، الإلغاء ناقص والحساسية للعازل تُظهر أشرطة درامية. اطلب المكوّنات لكل بقايا، لا المجموع الملون.",
          "Because ΔEelec is large, even when ΔGpolar partially cancels it. If the MM contribution is shown without solvation, ions inflate. Even with solvation, cancellation is incomplete and dielectric sensitivity makes dramatic bars. Ask for per-residue components, not the coloured sum.",
        ),
      },
      {
        type: "whatif",
        id: "l10-dec-whatif",
        scenario: L(
          "ماذا لو صمّمت مشتقاً لـ «يقوّي مساهمة PHE» بينما التفكيك لا يرى ماءً محبوساً كان الجسر الحقيقي في البلورة؟",
          "What if you design an analogue to “strengthen the PHE contribution” while the decomposition cannot see a buried water that was the true bridge in the crystal?",
        ),
        consequence: L(
          "النموذج المستمر قد يبتلع الماء في عازل، فتنتقل القصة إلى حلقة عطرية قريبة. التصميم يُخطئ الهدف. راجع الهيئة والماء الصريح قبل أن تُترجم شريط PHE إلى تفاعل تخليقي.",
          "The continuum may swallow the water into a dielectric, so the story migrates to a nearby aromatic. Design misses the target. Revisit the pose and explicit water before you translate a PHE bar into a synthetic move.",
        ),
      },
      {
        type: "callout",
        id: "l10-dec-warn",
        kind: "warning",
        title: L("مؤشر تصميم لا برهان سببي", "A design hint, not causal proof"),
        body: L(
          "السببية في الارتباط تُختبر بطفرة أو بسلسلة مشتقات أو ببنية. التفكيك خريطة لحدود نموذجك. الخلط بين الخريطة والأرض يُنتج آلية وهمية في المناقشة.",
          "Causality in binding is tested by a mutation, a derivative series, or a structure. Decomposition is a map of your model’s terms. Confusing the map with the territory produces a fictitious mechanism in the viva.",
        ),
      },
      {
        type: "exercise",
        id: "l10-dec-ex",
        prompt: L(
          "شريط MET يعطي −3.8 kcal/mol، وASP −12، وباقي الجيب قريب من صفر. اقترح جملة مناقشة وجملة ممنوعة.",
          "A MET bar is −3.8 kcal/mol, ASP −12, the rest of the pocket near zero. Propose a discussion sentence and a forbidden sentence.",
        ),
        solution: L(
          "مسموح: «تحت MM/GBSA على هذا المسار، ASP وMET يحملان أكبر حصص محاسبية للطاقة؛ نقترح فحص H-bond/ملح مع ASP وملامسة MET بـ SAR». ممنوع: «ASP مسؤول عن 12 kcal/mol من التثبيط، أي عن كل القوة تقريباً».",
          "Allowed: “Under MM/GBSA on this trajectory, ASP and MET carry the largest accounting shares of the energy; we propose probing the H-bond/salt with ASP and the MET contact by SAR.” Forbidden: “ASP is responsible for 12 kcal/mol of inhibition, i.e. almost all of the potency.”",
        ),
      },
      {
        type: "callout",
        id: "l10-dec-lim",
        kind: "limitation",
        title: L("التعاونية تُكسر عند التخصيص", "Cooperativity is broken by allocation"),
        body: L(
          "H-bond قد يعتمد على توجيه تفرضه بقايا أخرى. التفكيك ينسب الطاقة للقريب هندسياً. البقايا البعيدة التي تُثبّت الهيئة قد تبدو «صفر» وهي شرط الوجود.",
          "An H-bond may depend on an orientation imposed by other residues. Decomposition assigns energy to the geometric neighbour. A distant residue that holds the pose may look like “zero” while being a condition of existence.",
        ),
      },
    ],
    ["l10-mmpbsa", "l10-limits", "l11-hotspot", "l8-poses"],
  ),

  expand(
    "l10-limits",
    [
      L(
        "تحديد متى تكون MM/PBSA غير ملائمة: شحنات، معادن، هيئات متباينة، إنتروبي مهيمن، معاينة فقيرة.",
        "State when MM/PBSA is inappropriate: charges, metals, dissimilar poses, entropy-dominated binding, poor sampling.",
      ),
      L(
        "رفض ترتيب chemotypes متباعدة بخطأ أكبر من الفرق.",
        "Refuse to rank dissimilar chemotypes with error larger than the gap.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l10-lim-when",
        title: L("ليست طريقة عامة لطاقة الارتباط", "Not a general binding-energy method"),
        body: L(
          "MM/PBSA أداة نهاية حالة بفيزياء مستمرة. تنهار أو تضلّل حين: (1) الشحنة الصافية لليجند تختلف بين المركبات (الإذابة القطبية تُهيمن وتُخطئ). (2) معدن أو cofactor يحتاج تناسقاً ليس Coulomb+LJ. (3) هيئات الارتباط مختلفة جذرياً (يفشل إلغاء الخطأ). (4) الماء المحبوس جزء من الموقع (المستمر يبتلعه). (5) الإنتروبي يُهيمن (تقريب توافقي أو إهمال). (6) المسار لم يُعاين إلا هيئة docking. في هذه الحالات الطريقة لا «تقريبية»؛ هي تُجيب على سؤال آخر.",
          "MM/PBSA is an end-state tool with continuum physics. It collapses or misleads when: (1) ligand net charge differs among compounds (polar solvation dominates and mis-ranks). (2) A metal or cofactor needs coordination that is not Coulomb+LJ. (3) Binding modes differ radically (error cancellation fails). (4) Buried water is part of the site (the continuum swallows it). (5) Entropy dominates (harmonic estimate or omission). (6) The trajectory sampled only the docking pose. In these cases the method is not “approximate”; it is answering a different question.",
        ),
      },
      {
        type: "list",
        id: "l10-lim-list",
        title: L("حدود تشغيلية", "Operational limits"),
        items: [
          L(
            "الخطأ النموذجي على كيمياء متنوعة غالباً عدة kcal/mol — أكبر من ΔΔG الذي يهم المصمّم داخل السلسلة.",
            "Typical error on diverse chemistry is often several kcal/mol — larger than the ΔΔG a designer cares about inside a series.",
          ),
          L(
            "الارتباط مع pIC50 داخل سلسلة ضيقة قد يظهر؛ النقل إلى سلسلة أخرى غير مضمون.",
            "Correlation with pIC50 inside a narrow series may appear; transfer to another series is not guaranteed.",
          ),
          L(
            "حساسية العازل الداخلي والشحنات والنصف القطري الذري لـ PB/GB قرارات تخفي في «الإعداد الافتراضي».",
            "Sensitivity to internal dielectric, charges, and PB/GB radii is hidden inside “the default setup.”",
          ),
          L(
            "عدد الإطارات: القليل صاخب؛ والكثير من وادٍ واحد يعطي ثقة كاذبة.",
            "Frame count: too few is noisy; many from one valley gives false confidence.",
          ),
        ],
      },
      {
        type: "callout",
        id: "l10-lim-edu",
        kind: "educational",
        title: L("مقياس الصدق: هل الخطأ أصغر من الفرق؟", "Honesty scale: is the error smaller than the gap?"),
        body: L(
          "إن ادّعيت أن A أقوى من B بـ 1 kcal/mol وطريقتك تُخطئ بـ 3–4 kcal/mol على مجموعة التحقق، فالدعوى غير مسموحة. هذا ينطبق على MM/PBSA أكثر مما ينطبق على FEP نسبي متقن لتشابه عالٍ. انشر التحقق أو لا تنشر الترتيب كطاقة.",
          "If you claim A is stronger than B by 1 kcal/mol and your method errs by 3–4 kcal/mol on a validation set, the claim is not allowed. That applies to MM/PBSA more than to careful relative FEP on high similarity. Publish the validation or do not publish the ranking as energy.",
        ),
      },
      {
        type: "why",
        id: "l10-lim-why",
        question: L(
          "لماذا تُسيء الطريقة ترتيب ليغند مشحون مقابل محايد في جيب متوسط القطبية؟",
          "Why does the method mis-rank a charged ligand versus a neutral one in a moderately polar pocket?",
        ),
        answer: L(
          "ΔEelec كبير للشحن، ΔGpolar كبير بالعكس، والفرق المتبقي يعتمد على ε_in وعلى أنصاف الأقطار. خطأ نسبي صغير في حدّين كبيرين يكفي لقلب الترتيب. الليجند المحايد يعيش على vdW/SASA ألطف إحصائياً في هذا النموذج. المقارنة ليست عادلة داخل الفيزياء المختارة.",
          "ΔEelec is large for the charge, ΔGpolar is large the other way, and the remainder depends on ε_in and on radii. A small relative error in two large terms is enough to flip ranking. The neutral ligand lives on milder vdW/SASA statistically in this model. The comparison is not fair inside the chosen physics.",
        ),
      },
      {
        type: "whatif",
        id: "l10-lim-whatif",
        scenario: L(
          "ماذا لو رتّبت 50 مركباً من خمسة هياكل أساسية بـ MM/GBSA واخترت الأعلى كـ «قائد»؟",
          "What if you rank 50 compounds from five scaffolds with MM/GBSA and pick the top as “lead”?",
        ),
        consequence: L(
          "قد تختار الأكبر حجماً أو الأكثر شحنة حسب انحياز النموذج، لا الأفضلي كيميائياً. القائد يُختار بـ SAR ومقايسة ولياقة تخليق، مع حساب كأحد المدخلات داخل عائلة واحدة. عبر الهياكل، استخدم الإثراء البصري/docking بحذر أو FEP حيث التشابه يسمح، لا GBSA كحكم نهائي.",
          "You may select the largest or most charged according to model bias, not the chemically best. A lead is chosen with SAR, assay, and synthetic fitness, with computation as one input inside one family. Across scaffolds, use visual/docking enrichment cautiously or FEP where similarity allows — not GBSA as final judge.",
        ),
      },
      {
        type: "callout",
        id: "l10-lim-warn",
        kind: "warning",
        title: L("إساءة شائعة في الأوراق", "A common abuse in papers"),
        body: L(
          "جدول MM/PBSA لعشرات المركبات المتباعدة، بفروق أصغر من التشتت بين الإطارات، ثم «توافق ممتاز مع التجربة» بعد إسقاط النقاط الناشزة. هذا توفيق لا تحقّق. اطلب كل النقاط، والوحدات (pIC50 أم ΔG)، وبروتوكول الإطارات.",
          "An MM/PBSA table of dozens of dissimilar compounds, with gaps smaller than frame-to-frame scatter, then “excellent agreement with experiment” after dropping outliers. That is fitting, not validation. Ask for all points, the units (pIC50 versus ΔG), and the frame protocol.",
        ),
      },
      {
        type: "compare",
        id: "l10-lim-ok-not",
        left: L("استخدام أقل سوءاً", "Less-bad use"),
        right: L("استخدام مرفوض", "Rejected use"),
        rows: [
          {
            dim: L("الكيمياء", "Chemistry"),
            a: L("سلسلة ضيقة، نفس الشحنة، هيئة مشتركة.", "Narrow series, same charge, shared pose."),
            b: L("مكتبة متنوعة كهياكل وشحنات.", "A library diverse in scaffolds and charges."),
          },
          {
            dim: L("المعاينة", "Sampling"),
            a: L("إنتاج متعدد النسخ، إطارات بعد اتزان.", "Multi-replica production, frames after equilibration."),
            b: L("هيئة docking مُقلَّلة فقط.", "A minimised docking pose only."),
          },
          {
            dim: L("الدعوى", "Claim"),
            a: L("ترتيب فرضي داخل السلسلة مع مكوّنات.", "Hypothetical ranking inside the series with components."),
            b: L("Kd مطلق أو اكتشاف مثبط.", "Absolute Kd or inhibitor discovery."),
          },
        ],
      },
      {
        type: "exercise",
        id: "l10-lim-ex",
        prompt: L(
          "نظام metalloprotein مع Zn²⁺. هل تُبرّر MM/PBSA لترتيب مثبطات تربط الزنك؟ ما البديل المفاهيمي؟",
          "A metalloprotein with Zn²⁺. Can you justify MM/PBSA to rank zinc-binding inhibitors? What is the conceptual alternative?",
        ),
        solution: L(
          "لا كحكم طاقة: نموذج النقطة الشحنية + مستمر يُسيء التناسق. قد تُستخدم مؤشرات هندسية (مسافة، زاوية) بحذر. البديل: نماذج معدن متخصصة، أو QM/MM للنواة، أو FEP فقط إن كان التحويل لا يكسر التناسق وكان المعدن مُعالَجاً في المجال بوعي. الصدق: «لم نحسب ΔG لهذا السبب».",
          "Not as an energy judge: a point-charge + continuum model misrepresents coordination. Geometric indicators (distance, angle) may be used cautiously. Alternative: specialised metal models, or QM/MM for the core, or FEP only if the transformation does not break coordination and the metal is treated consciously in the field. Honesty: “we did not compute ΔG for this reason.”",
        ),
      },
    ],
    ["l10-mmpbsa", "l10-choose", "l23-mmpbsa-abuse", "l10-fep"],
  ),

  expand(
    "l10-fep",
    [
      L(
        "صياغة FEP (Zwanzig) وTI كمسارين كيميائيين تخيليين لنفس ΔG.",
        "State FEP (Zwanzig) and TI as two alchemical paths to the same ΔG.",
      ),
      L(
        "تمييز ΔG المطلق عن ΔΔG النسبي ومتى يستحق كل منهما العنقود.",
        "Distinguish absolute ΔG from relative ΔΔG and when each is worth the cluster.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l10-fep-idea",
        title: L("كيمياء تخيلية على خريطة ترموديناميكية", "Fictitious chemistry on a thermodynamic map"),
        body: L(
          "التحول الكيميائي (alchemical) يغيّر جزيئاً إلى آخر — أو إلى عدم — عبر معامل λ بين هاميلتونيين. لأن غيبس دالة حالة، يمكنك أن تذهب من A-bound إلى B-bound عبر مسار لا يحدث في المختبر، ما دامت النهايات فيزيائية والمعاينة على المسار كافية. FEP يقدّر الفرق كمتوسط أسي لفروق الكمون. TI يُكامل ⟨∂U/∂λ⟩ على λ. الاثنان يتفقان في حد المعاينة الكاملة؛ يختلفان في الاستقرار العددي حين يتداخل الهاميلتونيان قليلاً. النسبية (A→B في الجيب وفي الماء، دورة مغلقة) تلغي كثيراً من خطأ المجال إن كان A وB قريبين. المطلقة (ليجند → عدم) أصعب: نهاية الاختفاء تتطلب قيوداً وهيئات decoupling بعناية.",
          "An alchemical transformation changes one molecule into another — or into nothing — through a parameter λ between two Hamiltonians. Because Gibbs energy is a state function, you may go from A-bound to B-bound along a path that never happens in the lab, provided the end points are physical and sampling along the path is enough. FEP estimates the difference as an exponential average of potential differences. TI integrates ⟨∂U/∂λ⟩ over λ. The two agree in the complete-sampling limit; they differ in numeric stability when the Hamiltonians overlap poorly. Relative work (A→B in the pocket and in water, a closed cycle) cancels much of the force-field error if A and B are close. Absolute work (ligand → nothing) is harder: the disappearance end point needs restraints and careful decoupling.",
        ),
      },
      {
        type: "equation",
        id: "l10-fep-zwanzig",
        latex:
          "\\Delta G = -k_{B}T \\ln \\left\\langle e^{-\\beta \\Delta U} \\right\\rangle_{0}",
        name: L("Zwanzig FEP", "Zwanzig FEP"),
        meaning: L(
          "فرق الطاقة الحرة من متوسط أسي لفروق الكمون عيّنت في الحالة المرجعية 0.",
          "The free-energy difference from an exponential average of potential differences sampled in reference state 0.",
        ),
        variables: [
          {
            symbol: "\\Delta U",
            name: L("U₁ − U₀ عند نفس الهيئة", "U₁ − U₀ at the same pose"),
            unit: L("kcal mol⁻¹", "kcal mol⁻¹"),
          },
          {
            symbol: "\\beta",
            name: L("1/k_B T", "1/k_B T"),
            unit: L("kcal⁻¹ mol", "kcal⁻¹ mol"),
          },
          {
            symbol: "\\langle \\cdot \\rangle_{0}",
            name: L("متوسط على ensemble الحالة 0", "Average over the ensemble of state 0"),
          },
        ],
        interpretation: L(
          "المتوسط الأسي تهيمن عليه ذيول نادرة. إن لم تتداخل هيئات 0 مع 1، فالرقم متحيّز ولو طال المسار. لذلك نُقسّم λ إلى نوافذ، أو نستخدم BAR/MBAR لا اتجاهاً واحداً ساذجاً.",
          "The exponential average is dominated by rare tails. If poses of 0 do not overlap 1, the number is biased even if the run is long. Hence we split λ into windows, or use BAR/MBAR rather than a naive one-way average.",
        ),
        application: L(
          "نافذة λ حيث الطاقة تتفجر تعني أن الخطوة في الفضاء الكيميائي أكبر من المعاينة. زد النوافذ أو ليّن soft-core لـ LJ.",
          "A λ window where energy explodes means the step in chemical space is larger than the sampling. Add windows or soften LJ with a soft-core potential.",
        ),
      },
      {
        type: "equation",
        id: "l10-fep-ti",
        latex:
          "\\Delta G = \\int_{0}^{1} \\left\\langle \\frac{\\partial U(\\lambda)}{\\partial \\lambda} \\right\\rangle_{\\lambda}\\, d\\lambda",
        name: L("التكامل الثرموديناميكي TI", "Thermodynamic integration TI"),
        meaning: L(
          "ΔG تكامل متوسط مشتق الهاميلتوني على مسار λ.",
          "ΔG is the integral of the mean Hamiltonian derivative along the λ path.",
        ),
        variables: [
          {
            symbol: "\\lambda",
            name: L("معامل التحول بين الهاميلتونيين", "Coupling parameter between Hamiltonians"),
          },
          {
            symbol: "U(\\lambda)",
            name: L("الكمون الممزوج", "The mixed potential"),
            unit: L("kcal mol⁻¹", "kcal mol⁻¹"),
          },
        ],
        interpretation: L(
          "المنحنى ⟨∂U/∂λ⟩ يجب أن يكون سلساً بما يكفي للتكامل. قمة حادة عند اختفاء vdW شائعة دون soft-core. TI لا يُلغي حاجة المعاينة؛ يُغيّر شكل المقدِّر.",
          "The ⟨∂U/∂λ⟩ curve must be smooth enough to integrate. A sharp peak at vdW disappearance is common without soft-core. TI does not remove the need for sampling; it changes the estimator’s shape.",
        ),
        application: L(
          "ارسم ⟨∂U/∂λ⟩ مقابل λ قبل أن تثق بالتكامل. الفجوات بين النقاط ليست ديكوراً.",
          "Plot ⟨∂U/∂λ⟩ versus λ before you trust the integral. Gaps between points are not decoration.",
        ),
      },
      {
        type: "compare",
        id: "l10-fep-vs-ti",
        left: L("FEP / BAR / MBAR", "FEP / BAR / MBAR"),
        right: L("TI", "TI"),
        rows: [
          {
            dim: L("المقدر", "Estimator"),
            a: L("متوسطات أسية أو نسب احتمال بين نوافذ.", "Exponential averages or probability ratios between windows."),
            b: L("تكامل مشتق.", "Integral of a derivative."),
          },
          {
            dim: L("حين يزعجك", "When it hurts"),
            a: L("تداخل ضعيف بين نوافذ λ.", "Poor overlap between λ windows."),
            b: L("منحنى ∂U/∂λ غير أملس أو نقاط قليلة.", "A non-smooth ∂U/∂λ curve or too few points."),
          },
          {
            dim: L("في الممارسة", "In practice"),
            a: L("MBAR شائع كتحليل لاحق لنفس المعاينة.", "MBAR is common as a post-analysis of the same sampling."),
            b: L("ما زال قياساً واضحاً إن كانت النوافذ كثيفة.", "Still a transparent measure if windows are dense."),
          },
        ],
      },
      {
        type: "why",
        id: "l10-fep-why",
        question: L(
          "لماذا يستحق FEP النسبي أسبوع عنقود لسلسة متقاربة بينما لا يستحقه docking؟",
          "Why is relative FEP worth a week of cluster time for a close series when docking is not?",
        ),
        answer: L(
          "لأن السؤال أصبح ΔΔG بحجم 1 kcal/mol داخل هيكل مشترك وهيئة مشتركة — وهو نطاق يمكن أن تصل إليه دورة كيميائية مع مجال حديث ومعاينة نوافذ. docking لا يملك حالة unbound ولا متوسطاً حرارياً. التكلفة تُشترى فقط إن كانت الكيمياء تسمح بالإلغاء (تشابه عالٍ، لا تغيّر شحنة إن أمكن، لا قلب هيئة).",
          "Because the question has become a ~1 kcal/mol ΔΔG inside a shared scaffold and pose — a regime a chemical cycle with a modern field and windowed sampling can approach. Docking has no unbound state and no thermal average. The cost is purchased only if the chemistry allows cancellation (high similarity, no charge change if possible, no pose flip).",
        ),
      },
      {
        type: "whatif",
        id: "l10-fep-whatif",
        scenario: L(
          "ماذا لو حوّلت حلقة فينيل إلى بيريدين في الجيب بينما الهيئة تدور 180° في منتصف λ؟",
          "What if you transmute a phenyl to a pyridine in the pocket while the pose flips 180° in the middle of λ?",
        ),
        consequence: L(
          "المسار لم يعد تحويلاً بين حالتين متماثلتين البنى؛ هو مسار يخلط كيمياء بانقلاب هيئة. ΔΔG يخلط السؤالين. عالج الانقلاب أولاً (قيود، نوافذ إضافية، أو هيئتان نهائيتان منفصلتان) أو اعترف أن التحويل غير صالح.",
          "The path is no longer a transformation between two structurally analogous states; it mixes chemistry with a pose flip. ΔΔG mixes the two questions. Handle the flip first (restraints, extra windows, or two separate end-point poses) or admit the transformation is invalid.",
        ),
      },
      {
        type: "callout",
        id: "l10-fep-warn",
        kind: "warning",
        title: L("FEP ليس سحراً فوق المجال", "FEP is not magic above the force field"),
        body: L(
          "دقة kcal/mol تُروى لشروط: تشابه، معاينة متداخلة، مجال ليغند جيد، ماء متوافق، دورة مغلقة. خارجها FEP يُكامل فيزياء خاطئة بدقة عالية. تحقق من التداخل (overlap) ومن إغلاق الدورة إن حسبت أكثر من مسار.",
          "kcal/mol accuracy is told under conditions: similarity, overlapping sampling, a decent ligand field, compatible water, a closed cycle. Outside that, FEP integrates the wrong physics to high precision. Check overlap, and cycle closure if you computed more than one path.",
        ),
      },
      {
        type: "callout",
        id: "l10-fep-lim",
        kind: "limitation",
        title: L("تغيّر الشحنة والصافي الدوري", "Charge change and the periodic net"),
        body: L(
          "تحويل ليغند محايد إلى مشحون تحت PBC/PME يُدخل اصطلاحات طاقة كهربية (حجم، تصحيحات). هذا تخصص لا يُنفَّذ كـ «نفس بروتوكول الميثيل». إن لم تُحسن التصحيح، لا تفعل التحويل.",
          "Transmuting a neutral ligand into a charged one under PBC/PME introduces electrostatic energy conventions (volume, corrections). That is a specialist task, not “the same protocol as a methyl.” If you cannot do the correction well, do not run the transformation.",
        ),
      },
      {
        type: "exercise",
        id: "l10-fep-ex",
        prompt: L(
          "تريد معرفة أثر إضافة ميثيل في موقع ميتا. صف دورة نسبية واذكر علامتين أن المعاينة فشلت.",
          "You want the effect of adding a meta methyl. Sketch a relative cycle and name two signs that sampling failed.",
        ),
        solution: L(
          "دورة: A→B في المعقد، A→B في الماء (أو الليجند الحر)؛ ΔΔG_bind = ΔG_complex − ΔG_water. علامات فشل: overlap ضعيف بين نوافذ متجاورة، ⟨∂U/∂λ⟩ بقمة حادة غير مُنمذَجة، هيئات نهاية لا تطابق docking/البلورة، أو تباين كبير بين الاتجاهين دون BAR. أضف نوافذ أو soft-core أو أطل المعاينة قبل تفسير 0.5 kcal/mol.",
          "Cycle: A→B in the complex, A→B in water (or free ligand); ΔΔG_bind = ΔG_complex − ΔG_water. Failure signs: poor overlap between neighbouring windows, a sharp unmodelled ⟨∂U/∂λ⟩ peak, end-point poses that mismatch docking/crystal, or large forward/reverse disagreement without BAR. Add windows or soft-core or lengthen sampling before interpreting 0.5 kcal/mol.",
        ),
      },
    ],
    ["l10-dg", "l10-enhanced", "l10-choose", "l25-alchemical"],
  ),

  expand(
    "l10-enhanced",
    [
      L(
        "تمييز umbrella وmetadynamics وABF كمعاينة معززة على إحداثية جماعية فيزيائية (لا كيميائية تخيلية).",
        "Distinguish umbrella, metadynamics, and ABF as enhanced sampling on a physical collective coordinate (not alchemical).",
      ),
      L(
        "ربط كل طريقة بسؤال: حاجز، مسار، أو احتمال حالة — لا بـ «ΔG سحري».",
        "Map each method to a question: a barrier, a path, or a state probability — not to a “magic ΔG.”",
      ),
    ],
    [
      {
        type: "prose",
        id: "l10-enh-why",
        title: L("حين لا يأتي الحدث في الزمن المباشر", "When the event does not arrive in direct time"),
        body: L(
          "المعاينة المعززة الفيزيائية تضيف انحيازاً على إحداثية جماعية (CV): مسافة، زاوية، RMSD، عدد تناسق، أو وضع PCA. الهدف عبور حواجز تمنع MD المباشر. umbrella: نوافذ متناسقة بكمون توافقي على CV، ثم WHAM أو MBAR لإزالة الانحياز. metadynamics: تلال غاوسية تُملأ في فضاء CV حتى يصبح السطح مستكشفاً؛ الارتفاع المتراكم يقارب الطاقة الحرة على تلك الـ CVs. ABF (adaptive biasing force): يقدّر متوسط القوة على CV ويطبق عكسها لتمهيد الحاجز. كلها تجيب على مشهد في الإحداثيات المختارة. إن كانت الـ CV ناقصة (سقطت درجة حرية بطيئة)، فالمشهد خطأ بثقة.",
          "Physical enhanced sampling adds a bias on a collective variable (CV): a distance, an angle, RMSD, a coordination number, or a PCA mode. The goal is to cross barriers that block direct MD. Umbrella: harmonic windows along the CV, then WHAM or MBAR to unbias. Metadynamics: Gaussian hills deposited in CV space until the surface is explored; accumulated height approximates the free energy on those CVs. ABF (adaptive biasing force): estimates the mean force on the CV and applies the opposite to flatten the barrier. All of them answer a landscape in the chosen coordinates. If the CV is incomplete (a slow degree of freedom was dropped), the landscape is confidently wrong.",
        ),
      },
      {
        type: "compare",
        id: "l10-enh-three",
        left: L("Umbrella sampling", "Umbrella sampling"),
        right: L("Metadynamics / ABF", "Metadynamics / ABF"),
        rows: [
          {
            dim: L("الفكرة", "Idea"),
            a: L("نوافذ ثابتة على CV، تحليل لاحق (WHAM/MBAR).", "Fixed windows on a CV, post-analysis (WHAM/MBAR)."),
            b: L("انحياز يتكيّف أثناء التشغيل (تلال أو قوة).", "A bias that adapts during the run (hills or force)."),
          },
          {
            dim: L("القوة", "Strength"),
            a: L("تحكم واضح، تداخل يُفحص بين النوافذ.", "Clear control; overlap between windows can be checked."),
            b: L("استكشاف أوسع لسطح غير معروف مسبقاً.", "Broader exploration of a surface not known in advance."),
          },
          {
            dim: L("الفشل", "Failure"),
            a: L("نوافذ لا تتداخل؛ CV سيئة تُثبّت مساراً خطأ.", "Windows that do not overlap; a bad CV pins a wrong path."),
            b: L("تلال في CV ناقصة تملأ وهماً؛ عدم تقارب hills.", "Hills in an incomplete CV fill a fiction; unconverged hills."),
          },
        ],
      },
      {
        type: "list",
        id: "l10-enh-use",
        title: L("أسئلة تناسب المعاينة المعززة الفيزيائية", "Questions that fit physical enhanced sampling"),
        items: [
          L(
            "حاجز دوران حلقة أو دخول/خروج عبر قناة معرّفة.",
            "A ring-rotation barrier or entry/exit through a defined channel.",
          ),
          L(
            "احتمال هيئة DFG-in مقابل out إن صيغت CV بصدق.",
            "DFG-in versus out probability if the CV is formulated honestly.",
          ),
          L(
            "PMF على مسافة مركز كتلة الليجند عن الجيب — بحذر من CV الناقصة والإنتروبيا في الغلاف.",
            "A PMF along ligand centre-of-mass distance from the pocket — cautiously, given incomplete CVs and shell entropy.",
          ),
        ],
      },
      {
        type: "why",
        id: "l10-enh-whyq",
        question: L(
          "لماذا لا نستبدل FEP دائماً بـ umbrella على مسافة التفكك؟",
          "Why not always replace FEP with umbrella along an unbinding distance?",
        ),
        answer: L(
          "لأن مسافة مركز الكتلة نادراً ما تكون الإحداثية الكاملة: الليجند يدور، الماء يدخل، العروة تُغلق. PMF الناتج يخلط الحاجز الحقيقي بقيود الإسقاط. FEP النسبي يتجنّب مسار الخروج إن كان السؤال فرق كيمياء في نفس الهيئة. للخروج الحقيقي قد تحتاج عدة CVs أو طرائق أخرى. الأداة تتبع السؤال.",
          "Because centre-of-mass distance is rarely the complete coordinate: the ligand rotates, water enters, a loop closes. The resulting PMF mixes the true barrier with projection constraints. Relative FEP avoids the exit path if the question is a chemistry difference in the same pose. Real exit may need several CVs or other methods. The tool follows the question.",
        ),
      },
      {
        type: "whatif",
        id: "l10-enh-whatif",
        scenario: L(
          "ماذا لو ملأت metadynamics تلالاً على RMSD لليجند حتى «تقارب» الرسم، بينما العروة التي تغلق الجيب لم تتحرك؟",
          "What if metadynamics fills hills on ligand RMSD until the plot “converges,” while the loop that closes the pocket never moved?",
        ),
        consequence: L(
          "استكشفت شريحة من الفضاء ببوابة مغلقة. الطاقة الحرة على RMSD ليست طاقة التفكك. أضف CV للعروة أو اعترف أن الحاجز العلوي حد أدنى مشروط ببوابة مغلقة.",
          "You explored a slice of space with a closed gate. The free energy on RMSD is not the unbinding free energy. Add a loop CV or admit that the upper barrier is a lower bound conditional on a closed gate.",
        ),
      },
      {
        type: "callout",
        id: "l10-enh-warn",
        kind: "warning",
        title: L("WHAM على نوافذ لا تتداخل يرسم حاجزاً", "WHAM on non-overlapping windows draws a barrier"),
        body: L(
          "إن لم تتبادل النوافذ هيئات، فالحاجز ارتفاع فجوة معاينة. افحص histograms الـ CV. بلا تداخل لا تنشر kcal/mol.",
          "If windows do not exchange poses, the barrier is the height of a sampling gap. Inspect CV histograms. Without overlap do not publish kcal/mol.",
        ),
      },
      {
        type: "callout",
        id: "l10-enh-lim",
        kind: "limitation",
        title: L("المشهد على CV ليس المشهد الكامل", "The landscape on a CV is not the full landscape"),
        body: L(
          "−kT ln P(s) طاقة حرة كامنة على s، بعد دمج بقية المتغيرات. اختيار s قرار علمي يُبرَّر، ويُختبر بـ CV ثانية إن أمكن.",
          "−kT ln P(s) is a potential of mean force on s after integrating the other variables. Choosing s is a scientific decision to justify, and to test with a second CV if possible.",
        ),
      },
      {
        type: "exercise",
        id: "l10-enh-ex",
        prompt: L(
          "سؤال: هل يبقى فلاب HIV protease (1HSG) مغلقاً مع الليجند أكثر من بدونه؟ أي طريقة ولأي CV، وما حد التفسير؟",
          "Question: do HIV protease flaps (1HSG) stay closed more with the ligand than without? Which method and CV, and what is the interpretative limit?",
        ),
        solution: L(
          "CV لمسافة الفلاب أو زاوية انفتاح، مقارنة مسارين (معقد مقابل apo) بنفس المجال. umbrella أو metadynamics إن كان العبور نادراً في المباشر. الحد: CV قد تُسقط التواءً غير متماثل؛ نسختان/اتجاهان؛ ليس ΔG ارتباط الليجند بل ΔG انفتاح مشروط بوجود الليجند. 1HSG مرجع هيئة لا برهان أن CV كافية.",
          "A flap-distance or opening-angle CV, comparing two runs (complex versus apo) with the same field. Umbrella or metadynamics if crossing is rare in direct MD. Limit: the CV may drop an asymmetric twist; two replicas/directions; this is not the ligand binding ΔG but an opening ΔG conditional on the ligand. 1HSG is a pose reference, not proof that the CV is sufficient.",
        ),
      },
      {
        type: "viewer",
        id: "l10-enh-1hsg",
        pdb: "1HSG",
        ligand: "MK1",
        caption: L(
          "1HSG: فلاب HIV protease فوق indinavir. إحداثية الانفتاح قصة فيزيائية؛ ΔG الارتباط قصة أخرى. لا تخلطهما في CV واحدة ساذجة.",
          "1HSG: HIV protease flaps over indinavir. The opening coordinate is one physical story; binding ΔG is another. Do not mix them in one naive CV.",
        ),
      },
    ],
    ["l10-fep", "l10-choose", "l9-pca", "l9-convergence", "l25-msm"],
  ),

  expand(
    "l10-choose",
    [
      L(
        "اختيار طريقة الطاقة الحرة حسب السؤال والدقة المطلوبة والتكلفة والكيمياء.",
        "Choose a free-energy method by question, required accuracy, cost, and chemistry.",
      ),
      L(
        "كتابة مبرر methods يربط الأداة بفرضيات قابلة للتكذيب.",
        "Write a Methods justification that ties the tool to falsifiable assumptions.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l10-ch-map",
        title: L("السؤال أولاً، البرنامج ثانياً", "The question first, the program second"),
        body: L(
          "لا توجد هرمية مقدسة «FEP أفضل إذن استخدمه دائماً». FEP النسبي ملك ΔΔG لتشابه عالٍ وهيئة مشتركة. MM/PBSA مسح رخيص داخل سلسلة متجانسة مع تحفظات صارمة. umbrella/meta لمسار فيزيائي وحاجز على CV. docking ليس على هذه القائمة كطاقة. التكلفة ليست فقط GPU: تكلفة خطأ علمي يُضلّل التخليق أعلى. اختر أضعف فيزياء ما زالت تستطيع، بصدق معلن، أن تُخطّئ فرضيتك.",
          "There is no sacred hierarchy “FEP is better so always use it.” Relative FEP owns ΔΔG for high similarity and a shared pose. MM/PBSA is a cheap scan inside a homogeneous series with strict caveats. Umbrella/meta are for a physical path and a barrier on a CV. Docking is not on this list as energy. Cost is not only GPU: the cost of a scientific error that misleads synthesis is higher. Choose the weakest physics that can still, with declared honesty, falsify your hypothesis.",
        ),
      },
      {
        type: "list",
        id: "l10-ch-tree",
        title: L("شجرة قرار تعليمية", "An educational decision tree"),
        ordered: true,
        items: [
          L(
            "هل السؤال هيئة أم طاقة؟ إن كان هيئة: docking + عين + ربما MD قصير للنسخ، لا MM/PBSA كحكم.",
            "Is the question pose or energy? If pose: docking + eye + perhaps short MD replicas, not MM/PBSA as judge.",
          ),
          L(
            "إن كان طاقة: هل الكيمياء متقاربة وهيئة مشتركة؟ نعم: FEP/TI نسبي إن وُجد العنقود والخبرة.",
            "If energy: is the chemistry close with a shared pose? Yes: relative FEP/TI if cluster and expertise exist.",
          ),
          L(
            "لا عنقود / سلسلة متجانسة شحنةً وهيئةً: MM/GBSA مع مكوّنات ونسخ، كترتيب فرضي فقط.",
            "No cluster / homogeneous series in charge and pose: MM/GBSA with components and replicas, as hypothetical ranking only.",
          ),
          L(
            "هل السؤال حاجز أو مسار خروج/انفتاح؟ معاينة معززة على CV، لا نهاية حالة.",
            "Is the question a barrier or an exit/opening path? Enhanced sampling on a CV, not an end-state estimate.",
          ),
          L(
            "معدن، تساهمية، شحنة تتغير، ماء محبوس حاسم: أعد فيزياء النموذج قبل أي رقم حر.",
            "Metal, covalency, changing charge, decisive buried water: rebuild the model physics before any free number.",
          ),
        ],
      },
      {
        type: "compare",
        id: "l10-ch-cost",
        left: L("تكلفة أقل", "Lower cost"),
        right: L("تكلفة أعلى", "Higher cost"),
        rows: [
          {
            dim: L("أداة", "Tool"),
            a: L("Docking score؛ MM/GBSA على مسار موجود.", "Docking score; MM/GBSA on an existing trajectory."),
            b: L("FEP/TI نسبي؛ مطلقة؛ meta/umbrella متعددة الـ CV.", "Relative FEP/TI; absolute; multi-CV meta/umbrella."),
          },
          {
            dim: L("دقة متوقعة على ΔΔG قريب", "Expected accuracy on close ΔΔG"),
            a: L("غالباً أسوأ من الهدف 1 kcal/mol.", "Often worse than the 1 kcal/mol target."),
            b: L("قد تقارب 1 kcal/mol إن صحّت الشروط.", "May approach 1 kcal/mol if conditions hold."),
          },
          {
            dim: L("متى تكفي", "When it suffices"),
            a: L("فرز أولوية، فرضية تفاعل، رفض هيئة مستحيلة.", "Prioritisation, an interaction hypothesis, rejecting an impossible pose."),
            b: L("قرار تخليق مكلف داخل سلسلة، أو ورقة تدّعي kcal/mol.", "An expensive synthesis decision inside a series, or a paper that claims kcal/mol."),
          },
        ],
      },
      {
        type: "why",
        id: "l10-ch-why",
        question: L(
          "لماذا قد ترفض FEP حتى مع توفر العنقود؟",
          "Why might you refuse FEP even when the cluster is available?",
        ),
        answer: L(
          "إن كانت الهيئات غير محسومة، أو التشابه منخفض، أو الشحنة تتغير وأنت لا تُتقن التصحيح، فFEP سيُنتج رقماً أنيقاً للمسألة الخطأ. أصلح docking/MD أولاً. الرقم الأغلى ليس الأصدق إن كُسرت فروض الدورة.",
          "If poses are unresolved, similarity is low, or charge changes and you do not own the correction, FEP will produce an elegant number for the wrong problem. Fix docking/MD first. The more expensive number is not the more truthful one if the cycle’s assumptions are broken.",
        ),
      },
      {
        type: "whatif",
        id: "l10-ch-whatif",
        scenario: L(
          "ماذا لو طلب المشرف «MM/PBSA وFEP وdocking في ورقة واحدة لإقناع المحكّم» دون سؤال إضافي؟",
          "What if the supervisor asks for “MM/PBSA and FEP and docking in one paper to convince the referee” with no extra question?",
        ),
        consequence: L(
          "ثلاث إجابات غير متسقة على أعمدة مختلفة ستُقرأ كضعف لا كقوة. اختر طبقة لكل سؤال: docking للهيئة، FEP لـ ΔΔG الميثيل، MM/PBSA فقط إن بقي مسح داخل السلسلة مع حدود. التكرار ليس تحققاً إلا إذا اختبرت كل طبقة بما يخصها (RMSD، overlap، مكونات).",
          "Three mutually inconsistent answers on different columns will be read as weakness, not strength. Pick a layer per question: docking for pose, FEP for the methyl ΔΔG, MM/PBSA only if a within-series scan remains, with limits. Repetition is not validation unless each layer is tested on its own terms (RMSD, overlap, components).",
        ),
      },
      {
        type: "callout",
        id: "l10-ch-warn",
        kind: "warning",
        title: L("لا تشتري دقة بأداة ثم تُفسّر كتجربة", "Do not buy precision with a tool then interpret it as experiment"),
        body: L(
          "FEP 0.3 kcal/mol ± 0.1 خطأ إحصائي للنموذج، لا ± 0.1 مقابل المختبر. أبلغ خطأ المعاينة وانحياز المجال منفصلين إن استطعت. المحكّم يسأل التجربة.",
          "FEP 0.3 kcal/mol ± 0.1 is the model’s statistical error, not ± 0.1 versus the lab. Report sampling error and force-field bias separately if you can. The referee will ask for experiment.",
        ),
      },
      {
        type: "steps",
        id: "l10-ch-methods",
        title: L("فقرة methods دفاعية", "A defensible Methods paragraph"),
        items: [
          {
            title: L("السؤال بوحدات", "The question in units"),
            body: L(
              "«نختبر إن كان الميثيل يُغيّر ΔΔG بأكثر من ~1 kcal/mol».",
              "“We test whether the methyl changes ΔΔG by more than ~1 kcal/mol.”",
            ),
          },
          {
            title: L("الأداة والفرض", "Tool and assumption"),
            body: L(
              "«FEP نسبي، هيئة مشتركة من البلورة/الالتحام المفحوص، نفس الشحنة».",
              "“Relative FEP, shared pose from the crystal/inspected docking, same charge.”",
            ),
          },
          {
            title: L("معيار الفشل", "Failure criterion"),
            body: L(
              "«إن ضعف التداخل أو انقلبت الهيئة نُسقط الرقم لا نُوسّع المناقشة».",
              "“If overlap is poor or the pose flips, we drop the number rather than expand the discussion.”",
            ),
          },
        ],
      },
      {
        type: "exercise",
        id: "l10-ch-ex",
        prompt: L(
          "ثلاثة أسئلة: (1) أين يجلس fragment جديد، (2) أي من خمسة أميدات قريبة أقوى، (3) هل تنفتح عروة عند الارتباط. طابق طريقة لكل سؤال بجملة حد.",
          "Three questions: (1) where a new fragment sits, (2) which of five close amides is stronger, (3) whether a loop opens on binding. Match a method to each with a one-line limit.",
        ),
        solution: L(
          "(1) docking + فحص بصري ± MD نسخ قصيرة — حد: فرضية هيئة لا Kd. (2) FEP/TI نسبي إن تشابهت الهيئات؛ وإلا MM/GBSA فرضي — حد: بلا تغيّر شحنة وبلا قلب هيئة. (3) CV لانفتاح العروة، umbrella أو meta، مقارنة apo/complex — حد: ليس ΔG ارتباط الشظية.",
          "(1) Docking + visual inspection ± short MD replicas — limit: pose hypothesis, not Kd. (2) Relative FEP/TI if poses match; otherwise hypothetical MM/GBSA — limit: no charge change and no pose flip. (3) A loop-opening CV, umbrella or meta, apo/complex comparison — limit: not the fragment’s binding ΔG.",
        ),
      },
      {
        type: "callout",
        id: "l10-ch-lim",
        kind: "limitation",
        title: L("الخيار جزء من الفرضية", "The choice is part of the hypothesis"),
        body: L(
          "في المناقشة ستُسأل: لماذا ليس FEP؟ لماذا ليس تجربة؟ أجب بالسؤال العلمي والتكلفة وفرض الفشل. «لأن الجميع يستخدم MM/PBSA» ليس دفاعاً.",
          "In the viva you will be asked: why not FEP? why not experiment? Answer with the scientific question, the cost, and the failure criterion. “Because everyone uses MM/PBSA” is not a defence.",
        ),
      },
    ],
    ["l10-dg", "l10-mmpbsa", "l10-fep", "l10-enhanced", "l10-limits", "l26-choices"],
  ),
];
