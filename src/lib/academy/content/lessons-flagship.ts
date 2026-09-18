import type { Lesson } from "@/lib/academy/types";
import { expand, L } from "./helpers";

export const lessons: Lesson[] = [
  expand(
    "l6-etotal",
    [
      L("كتابة E_total كمجموع حدود bonded و nonbonded.", "Write E_total as bonded plus nonbonded terms."),
      L("ربط كل حد بفرضية كيميائية.", "Tie each term to a chemical hypothesis."),
    ],
    [
      { type: "prose", id: "p", title: L("دالة الجهد هي الفيزياء", "The potential is the physics"), body: L("كل مسار MD وكل تقليل طاقة هو تكامل أو تحسين على V. إن أخطأت V فأخطأت الحركة. E_total = E_bonds + E_angles + E_dihedrals + E_improper + E_vdW + E_elec. ليست حقيقة كمومية؛ هي نموذج تجريبي دُرّب على جزيئات صغيرة ثم نُقل إلى بروتين.", "Every MD trajectory and every minimization is integration or optimization on V. If V is wrong, the motion is wrong. E_total = E_bonds + E_angles + E_dihedrals + E_improper + E_vdW + E_elec. It is not QM truth; it is an empirical model trained on small molecules and transferred to proteins.") },
      { type: "equation", id: "e", latex: "V(\\mathbf{r}) = V_{\\mathrm{bonded}} + V_{\\mathrm{nonbonded}}", name: L("تجزئة الجهد", "Potential split"), meaning: L("bonded يقيّد الكيمياء التساهمية المحلية؛ nonbonded يحمل الإذابة والارتباط غير التساهمي.", "Bonded restrains local covalent chemistry; nonbonded carries solvation and noncovalent binding."), variables: [{ symbol: "r", name: L("إحداثيات الذرات", "Atomic coordinates") }], interpretation: L("الارتباط الدوائي يعيش غالباً في nonbonded، لكن bonded يحدد الهيئة المتاحة.", "Drug binding lives mostly in nonbonded, but bonded sets which poses are available."), application: L("اختيار الحقل قبل أي mdrun.", "Choose the FF before any mdrun.") },
      { type: "callout", id: "w", kind: "warning", title: L("لا تخلط الحقول", "Do not mix force fields"), body: L("AMBER بروتين + CHARMM ليغند بلا تحويل واعٍ يخلط فلسفات شحن وvdW. الاتساق الداخلي أهم من الماركة.", "AMBER protein + CHARMM ligand without a conscious conversion mixes charge and vdW philosophies. Internal consistency beats the brand.") },
      { type: "why", id: "y", question: L("لماذا نبدأ من الدالة لا من الأمر؟", "Why start from the function, not the command?"), answer: L("لأن pdb2gmx يسألك أي V تريد. الجواب كيميائي.", "Because pdb2gmx asks which V you want. The answer is chemical.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو شغّلت MD بحقل بروتين على ليغند عضوي بلا بارامترات؟", "What if you run MD with a protein FF on an organic ligand with no parameters?"), consequence: L("إما أن تفشل الطوبولوجيا أو تُعامل الذرات كأنواع خاطئة. النتيجة هيئة خيالية.", "Either topology fails or atoms are treated as the wrong types. The result is a fictional pose.") },
    ],
    ["l6-bonded", "l6-lj", "l9-newton"],
  ),
  expand(
    "l6-bonded",
    [L("تمييز التوافقي عن فورييه للدوران.", "Distinguish harmonic bonds from Fourier torsions.")],
    [
      { type: "prose", id: "p", title: L("روابط وزوايا ودوران", "Bonds, angles, torsions"), body: L("الرابطة التوافقية ½ k (r−r0)² لا تسمح بالكسر. الزاوية مماثلة. ثنائي السطح عادة مجموع جيوب: يخلق تفضيل trans/gauche. improper يحفظ الكيرالية والمستوي.", "A harmonic bond ½ k (r−r0)² cannot break. Angles similar. Dihedrals are usually a Fourier sum: they create trans/gauche preference. Impropers protect chirality and planarity.") },
      { type: "equation", id: "e", latex: "E_{\\mathrm{bond}} = \\frac{1}{2} k_b (r-r_0)^2", name: L("رابط توافقي", "Harmonic bond"), meaning: L("قرب طول مرجعي فقط.", "Near a reference length only."), variables: [{ symbol: "k_b", name: L("ثابت القوة", "Force constant") }], interpretation: L("لهذا MM لا تصف تفاعلات تساهمية.", "This is why MM does not describe covalent reactions."), application: L("قيود LINCS على X–H تسمح بخطوة 2 fs.", "LINCS constraints on X–H allow a 2 fs step.") },
      { type: "why", id: "y", question: L("لماذا نقيّد الهيدروجين؟", "Why constrain hydrogens?"), answer: L("اهتزاز X–H أسرع حركة؛ يحدّ الخطوة. القيد يزيلها دون تغيير الكيمياء الثقيلة كثيراً.", "X–H vibration is the fastest motion; it limits the step. The constraint removes it without greatly changing heavy-atom chemistry.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو كان الـ improper ضعيفاً على أميد؟", "What if the improper is too weak on an amide?"), consequence: L("قد يفقد الأميد المستوي وتنكسر فرضية hinge.", "The amide may lose planarity and a hinge hypothesis dies.") },
      { type: "callout", id: "c", kind: "limitation", title: L("حدود bonded", "Bonded limits"), body: L("لا استقطاب، لا تكسر، لا توتومر أثناء المسار.", "No polarizability, no breaking, no tautomer hops mid-trajectory.") },
    ],
    ["l6-etotal"],
  ),
  expand(
    "l6-lj",
    [L("قراءة أسّي 12 و 6 كطرد وتشتت.", "Read the 12 and 6 as repulsion and dispersion.")],
    [
      { type: "equation", id: "e", latex: "E_{\\mathrm{LJ}}=4\\varepsilon\\left[(\\sigma/r)^{12}-(\\sigma/r)^{6}\\right]", name: L("لينارد-جونز", "Lennard-Jones"), meaning: L("طرد تجريبي قصير وتجاذب تشتتي.", "Short empirical repulsion and dispersive attraction."), variables: [{ symbol: "\\varepsilon", name: L("عمق البئر", "Well depth") }, { symbol: "\\sigma", name: L("مسافة صفر الطاقة", "Zero-energy distance") }], interpretation: L("الأس 12 ملائم حسابياً لا مقدّس كمومياً.", "The 12 is computationally convenient, not QM-sacred."), application: L("تصادم ليغند–جيب وcutoff.", "Ligand–pocket clashes and cutoffs.") },
      { type: "prose", id: "p", body: L("عند r صغير يسيطر الطرد: هذا ما يمنع تداخل الذرات. عند r متوسط يظهر بئر ضعيف: هذا جزء من الالتصاق الكاره للماء والتشتت. بعد cutoff يُهمل أو يُذيَّل. اختيار القطع قرار فيزيائي يُذكر في Methods.", "At small r repulsion dominates: this prevents overlap. At intermediate r a shallow well appears: part of hydrophobic adhesion and dispersion. Beyond the cutoff it is neglected or switched. The cutoff is a physics decision that belongs in Methods.") },
      { type: "why", id: "y", question: L("لماذا ليس الأس 12 اشتقاقاً من شرودنغر؟", "Why is the 12 not derived from Schrödinger?"), answer: L("التداخل الإلكتروني أقوى تعقيداً. 12 مربع الـ 6 فيُحسب رخيصاً.", "Electronic overlap is more complex. 12 is the square of 6, hence cheap.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو كان cutoff أقصر من مدى التشتت المهم؟", "What if the cutoff is shorter than relevant dispersion?"), consequence: L("قد تفقد تجاذب حلقات عطرية متراصة وتُسيء ترتيب الليغندات الكارهة للماء.", "You may lose stacked-aromatic attraction and mis-rank hydrophobic ligands.") },
    ],
    ["l6-coulomb"],
  ),
  expand(
    "l6-coulomb",
    [L("الشحنة الجزئية ليست ملاحظة تجريبية في MM.", "A partial charge is not an MM experimental observable.")],
    [
      { type: "equation", id: "e", latex: "E_{\\mathrm{Coulomb}}=\\frac{1}{4\\pi\\varepsilon_0}\\frac{q_i q_j}{r_{ij}}", name: L("كولوم", "Coulomb"), meaning: L("نقاط شحن في الفراغ.", "Point charges in space."), variables: [{ symbol: "q", name: L("شحنة جزئية", "Partial charge") }], interpretation: L("طريقة اشتقاق q تغيّر ΔG أكثر مما يغيّره طول المسار أحياناً.", "How you derive q can change ΔG more than trajectory length sometimes does."), application: L("برتنة، معادن، PME.", "Protonation, metals, PME.") },
      { type: "callout", id: "w", kind: "warning", title: L("البرتنة قبل الشحن", "Protonation before charge"), body: L("حمض معلّق الشحنة يغيّر كل Coulomb في الجيب.", "A misplaced acid charge rewrites every Coulomb term in the pocket.") },
      { type: "why", id: "y", question: L("لماذا PME؟", "Why PME?"), answer: L("1/r بطيء الاضمحلال؛ القطع الفجّ يخلق سطح شحنة اصطناعي. PME يفصل قصيراً مباشراً وطويلاً في فورييه.", "1/r decays slowly; a naive cutoff creates an artificial charge surface. PME splits short-range direct and long-range Fourier.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو نسيت تعادل الشحنة؟", "What if you forget to neutralize?"), consequence: L("كهروستاتيك دوري مشوّه؛ انتشار غير فيزيائي للأيونات.", "Distorted periodic electrostatics; unphysical ion drift.") },
    ],
    ["l6-charges", "l9-pbc"],
  ),
  expand(
    "l6-families",
    [L("AMBER وCHARMM وOPLS وGROMOS فلسفات لا أسماء.", "AMBER, CHARMM, OPLS, GROMOS are philosophies, not names.")],
    [
      { type: "compare", id: "c", left: L("AMBER", "AMBER"), right: L("CHARMM", "CHARMM"), rows: [
        { dim: L("شحنات شائعة لليغند", "Common ligand charges"), a: L("RESP / AM1-BCC + GAFF", "RESP / AM1-BCC + GAFF"), b: L("CGenFF", "CGenFF") },
        { dim: L("ماء شائع", "Common water"), a: L("TIP3P غالباً", "Often TIP3P"), b: L("TIP3P معدّل لـ CHARMM", "CHARMM-modified TIP3P") },
      ] },
      { type: "prose", id: "p", body: L("OPLS وُلد من سوائل عضوية؛ GROMOS من فلسفةunited-atom في إصدارات كلاسيكية. لا يوجد حقل «الأصح» كونياً. يوجد حقل متسق مع الماء والليغند والسؤال.", "OPLS grew from organic liquids; classic GROMOS from a united-atom philosophy. There is no universally truest FF. There is an FF consistent with water, ligand, and the question.") },
      { type: "why", id: "y", question: L("لماذا يسألك الممتحن عن الحقل؟", "Why does the examiner ask which FF?"), answer: L("لأنك اخترت فيزياء. «الجميع يستخدمه» ليست إجابة.", "Because you chose physics. “Everyone uses it” is not an answer.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو أعدت المحاكاة بحقل آخر واختلف الترتيب؟", "What if you rerun with another FF and the ranking flips?"), consequence: L("إذن الترتيب لم يكن حقيقة. أبلغ الحساسيّة.", "Then the ranking was not a fact. Report the sensitivity.") },
      { type: "callout", id: "l", kind: "limitation", title: L("لا قداسة", "No canon"), body: L("سوابق العائلة البروتينية حجّة، لا الموضة.", "Precedent on that protein family is an argument, not fashion.") },
    ],
    ["l6-ligandff"],
  ),
  expand(
    "l6-ligandff",
    [L("GAFF وCGenFF وOpenFF أدوات ليغند لا سحر.", "GAFF, CGenFF, and OpenFF are ligand tools, not magic.")],
    [
      { type: "prose", id: "p", body: L("GAFF/GAFF2 متوافق مع AMBER. CGenFF مع CHARMM. OpenFF يسعى لبارامترات أكثر شفافية. كلها تفشل على معادن صعبة وكيمياء غير مغطاة.", "GAFF/GAFF2 is compatible with AMBER. CGenFF with CHARMM. OpenFF aims at more transparent parameters. All fail on awkward metals and uncovered chemistry.") },
      { type: "list", id: "l", title: L("افحص البارامتر", "Inspect the parameter"), items: [L("أنواع ذرات غريبة.", "Exotic atom types."), L("ثوابت دوران للأميد.", "Amide torsion constants."), L("شحنات غير معقولة على نتروجين قاعدي.", "Unreasonable charges on a basic nitrogen.")] },
      { type: "why", id: "y", question: L("لماذا لا نستخدم حقل البروتين لليغند؟", "Why not use the protein FF for the ligand?"), answer: L("أنواع الذرات والدورانات دُرّبت على أحماض أمينية لا على سقالات دوائية.", "Atom types and torsions were trained on amino acids, not drug scaffolds.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو غطّى GAFF الحلقة بتقرير عقوبة عالٍ؟", "What if GAFF covers a ring with a high penalty report?"), consequence: L("لا تتجاهل العقوبة. راجع QM أو OpenFF أو لا تُحاكِ.", "Do not ignore the penalty. Revisit QM or OpenFF, or do not simulate.") },
    ],
    ["l6-charges"],
  ),
  expand(
    "l6-charges",
    [L("Mulliken ≠ RESP ≠ AM1-BCC.", "Mulliken ≠ RESP ≠ AM1-BCC.")],
    [
      { type: "prose", id: "p", body: L("Mulliken تقسيم أساس حساس. RESP يلائم الجهد الكهروستاتيكي مع قيود. AM1-BCC رخيص وشائع مع GAFF. لا تخلط شحنات طريقة مع حقل آخر بلا وعي.", "Mulliken is a basis-sensitive partition. RESP fits the electrostatic potential with restraints. AM1-BCC is cheap and common with GAFF. Do not mix one method’s charges with another FF blindly.") },
      { type: "callout", id: "e", kind: "educational", title: L("مثال تعليمي", "Educational example"), body: L("ليغند أميني عند pH 7.4 غالباً +1. شحنُه محايداً يمحو جسراً ملحياً.", "An amine ligand at pH 7.4 is often +1. Charging it neutral erases a salt bridge.") },
      { type: "why", id: "y", question: L("لماذا RESP مقيَّد؟", "Why is RESP restrained?"), answer: L("ESP تحتحدّد للذرات المدفونة؛ القيود تمنع شحناً متطرفاً غير مستقر.", "ESP is underdetermined for buried atoms; restraints prevent wild unstable charges.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو حسبت الشحن على هيئة فراغ مختلفة عن الهيئة المرتبطة؟", "What if you charge a vacuum conformer unlike the bound pose?"), consequence: L("قد تُثبّت ثنائيات أقطاب لهيئة لن تُزار في الجيب.", "You may freeze dipoles of a pose that is never visited in the pocket.") },
    ],
    ["l7-geom"],
  ),
  expand(
    "l6-limits",
    [L("MM لا تكسر روابط ولا تستقطب إلا إذا طُلب منها.", "MM does not break bonds or polarize unless asked.")],
    [
      { type: "list", id: "l", title: L("ما الذي لا تفعله MM القياسية", "What standard MM does not do"), ordered: true, items: [L("تفاعل تساهمي.", "A covalent reaction."), L("استقطاب البيئة.", "Environmental polarization."), L("توتومر أثناء المسار.", "Tautomer hops mid-run."), L("نقل بروتون حقيقي.", "True proton transfer.")] },
      { type: "why", id: "y", question: L("متى تترك MM؟", "When do you leave MM?"), answer: L("معادن تحفيزية، تثبيط تساهمي، أسئلة إلكترونية. عندها QM/MM أو حقل تفاعلي — بتكلفة وتعقيد.", "Catalytic metals, covalent inhibition, electronic questions. Then QM/MM or a reactive FF — at a cost.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو فسّرت MM كأنها DFT؟", "What if you interpret MM as if it were DFT?"), consequence: L("لغة ورقة تُرفض. قل «نموذج ميكانيكا جزيئية».", "Paper language that gets rejected. Say “an MM model”.") },
      { type: "callout", id: "w", kind: "warning", title: L("النموذج ليس الحقيقة", "The model is not the truth"), body: L("مبدأ الأكاديمية: الحساب يُنتج نماذج.", "Academy principle: computation yields models.") },
    ],
    ["l7-when"],
  ),
  expand(
    "l9-newton",
    [L("ربط F=ma بـ F=−∇V.", "Connect F=ma to F=−∇V.")],
    [
      { type: "equation", id: "e", latex: "\\mathbf{F}=-\\nabla V=m\\mathbf{a}", name: L("من الجهد إلى الحركة", "From potential to motion"), meaning: L("الحقل يعطي قوى؛ نيوتن يعطي تسارعاً.", "The FF yields forces; Newton yields acceleration."), variables: [{ symbol: "V", name: L("جهد MM", "MM potential") }], interpretation: L("MD تكامل هذه المعادلة مع ضجيج حراري ومنظم حرارة.", "MD integrates this equation with thermal noise and a thermostat."), application: L("اختيار المكامل والخطوة.", "Integrator and timestep.") },
      { type: "prose", id: "p", body: L("الموضع والسرعة والتسارع تُحدَّث كل Δt. لا يوجد «ذكاء» فوق نيوتن. الجودة من V والمعاينة والإحصاء.", "Position, velocity, and acceleration update every Δt. There is no intelligence above Newton. Quality comes from V, sampling, and statistics.") },
      { type: "why", id: "y", question: L("لماذا ليست لقطة الطاقة الدنيا كافية؟", "Why is the energy-minimum snapshot not enough?"), answer: L("بولتزمان: المجموعة أوسع من الحد الأدنى. الإنتروبي يعيش في التقلب.", "Boltzmann: the ensemble is larger than the minimum. Entropy lives in fluctuation.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو كانت القوى غير متصلة بسبب cutoff فجّ؟", "What if forces are discontinuous from a hard cutoff?"), consequence: L("تسخين اصطناعي وانفجار.", "Artificial heating and blow-up.") },
    ],
    ["l6-etotal", "l3-gradients"],
  ),
  expand(
    "l9-integrators",
    [L("Verlet و2 fs لا 5 fs بلا مخطط خاص.", "Verlet and 2 fs, not 5 fs without a special scheme.")],
    [
      { type: "prose", id: "p", title: L("المكامل", "The integrator"), body: L("Verlet / Velocity Verlet / Leapfrog طرق مركزية شائعة تحفظ الطاقة تقريباً إن كانت القوى جيدة والخطوة صغيرة. 2 fs مع قيود هيدروجين معيار واسع. 5 fs بلا مواقع افتراضية موثّقة مخاطرة.", "Verlet / Velocity Verlet / Leapfrog are common centered methods that roughly conserve energy if forces are good and the step is small. 2 fs with H-constraints is a widespread standard. 5 fs without a documented virtual-site scheme is a risk.") },
      { type: "why", id: "y", question: L("ماذا تحدّ الخطوة؟", "What limits the timestep?"), answer: L("أسرع حركة مسموحة. عادة X–H.", "The fastest allowed motion. Usually X–H.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو ظهرت تحذيرات LINCS؟", "What if LINCS warnings appear?"), consequence: L("هندسة متوترة أو خطوة كبيرة أو تصادم. لا تتجاهل.", "Strained geometry, a large step, or a clash. Do not ignore.") },
      { type: "callout", id: "w", kind: "warning", title: L("الخطوة ليست جودة", "The step is not quality"), body: L("خطوة أكبر لا تعني علماً أفضل.", "A larger step does not mean better science.") },
      { type: "exercise", id: "x", prompt: L("اكتب جملة Methods عن المكامل والخطوة.", "Write a Methods sentence on integrator and timestep."), solution: L("يجب أن تذكر الاسم والـ fs والقيود. بلا اختلاق إن نسيت.", "Name, fs, and constraints. Do not invent if you forgot.") },
    ],
    ["l9-newton"],
  ),
  expand(
    "l9-system",
    [L("النظام = بروتين + ليغند + حقل + ماء + أيونات.", "System = protein + ligand + FF + water + ions.")],
    [
      { type: "steps", id: "s", title: L("المكوّنات", "The pieces"), items: [
        { title: L("بروتين مُحضَّر", "Prepared protein"), body: L("نواقص، برتنة، ss bonds.", "Gaps, protonation, disulfides.") },
        { title: L("ليغند بطوبولوجيا", "Ligand with topology"), body: L("GAFF/CGenFF لا تخمين.", "GAFF/CGenFF, not a guess.") },
        { title: L("ماء وأيونات", "Water and ions"), body: L("نموذج متوافق وتعادل.", "A compatible model and neutralization.") },
      ] },
      { type: "why", id: "y", question: L("لماذا الصندوق جزء من النظام؟", "Why is the box part of the system?"), answer: L("PBC: الصور تتفاعل. الهامش قرار.", "PBC: images interact. Padding is a decision.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو لامست الصور الدورية البروتين؟", "What if periodic images touch the protein?"), consequence: L("تجميع أو ثبات مصطنع.", "Aggregation or artifactual stability.") },
    ],
    ["l9-pbc"],
  ),
  expand(
    "l9-pbc",
    [L("PBC وPME والماء الصريح.", "PBC, PME, and explicit water.")],
    [
      { type: "prose", id: "p", body: L("الحدود الدورية تجعل الصندوق بلورة سائل. TIP3P شائع مع AMBER؛ TIP4P وSPC/E بدائل بخصائص سائل مختلفة. لا تخلط ماء حقل مع بارامترات حقل آخر اعتباطاً. PME يعالج كولوم الطويل. المذيب الضمني رخيص ويفقد شبكات الماء.", "Periodic boundaries make the box a fluid crystal. TIP3P is common with AMBER; TIP4P and SPC/E are alternatives with different bulk properties. Do not mix one FF’s water with another’s parameters arbitrarily. PME handles long-range Coulomb. Implicit solvent is cheaper and loses water networks.") },
      { type: "why", id: "y", question: L("لماذا TIP3P لا «الماء الحقيقي»؟", "Why is TIP3P not “true water”?"), answer: L("ثلاثة مواقع وشحنات ثابتة. كافٍ لكثير من MD، لا للمادة المكثفة بدقة.", "Three sites and fixed charges. Enough for much MD, not condensed-matter accuracy.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو حذفت PME لتوفير الوقت؟", "What if you drop PME to save time?"), consequence: L("كهروستاتيك مقطوع يشوّه الارتباط المشحون.", "Truncated electrostatics distort charged binding.") },
      { type: "callout", id: "f", kind: "fact", title: L("حقيقة", "Fact"), body: L("PME يفترض دورية. هذا افتراض الصندوق.", "PME assumes periodicity. That is the box’s assumption.") },
    ],
    ["l6-coulomb"],
  ),
  expand(
    "l9-min",
    [L("التقليل يزيل التصادم قبل التكامل.", "Minimization removes clashes before integration.")],
    [
      { type: "prose", id: "p", body: L("steepest descent قوي على التصادم الخشن. conjugate gradient أدق لاحقاً. بلا تقليل قد تنفجر الخطوة الأولى.", "Steepest descent is robust on crude clashes. Conjugate gradient is tighter later. Without minimization the first step may explode.") },
      { type: "why", id: "y", question: L("لماذا لا نبدأ الإنتاج فوراً؟", "Why not start production immediately?"), answer: L("الإحداثيات بعد التحام أو إضافة H ليست في حدّ V.", "Coordinates after docking or adding H are not at a V minimum.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو لم يتقارب التقليل؟", "What if minimization does not converge?"), consequence: L("طوبولوجيا خاطئة أو تداخل شديد. أصلح قبل mdrun.", "Bad topology or severe overlap. Fix it before mdrun.") },
    ],
    ["l9-ensembles"],
  ),
  expand(
    "l9-ensembles",
    [L("NVT وNPT ومنظمات الحرارة/الضغط كفيزياء لا كأزرار.", "NVT and NPT and thermostats/barostats as physics, not buttons.")],
    [
      { type: "prose", id: "p", body: L("N عدد الجسيمات، V الحجم، T الحرارة، P الضغط. NVT مجموعة قانونية. NPT أقرب للمختبر. Berendsen يضعف التقلبات؛ للإنتاج يُفضَّل غالباً v-rescale أو Nose–Hoover للحرارة، وParrinello–Rahman أو MC للضغط بعد الاتزان. Langevin يضيف احتكاكاً يغيّر الحركية.", "N particle number, V volume, T temperature, P pressure. NVT is canonical. NPT is closer to the lab. Berendsen damps fluctuations; for production one often prefers v-rescale or Nose–Hoover for T, and Parrinello–Rahman or MC for P after equilibration. Langevin adds friction that changes kinetics.") },
      { type: "why", id: "y", question: L("لماذا لا تقيس koff من MD بمنظم عشوائي دون حذر؟", "Why not report koff from MD with a stochastic thermostat without care?"), answer: L("الحركية تتأثر بالاحتكاك الاصطناعي.", "Kinetics are affected by artificial friction.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو بقيتَ على Berendsen طوال الإنتاج؟", "What if you stay on Berendsen for all production?"), consequence: L("إحصاء تقلبات غير قانوني. اذكر السبب إن فعلت.", "Non-canonical fluctuation statistics. State why if you do it.") },
      { type: "callout", id: "w", kind: "warning", title: L("الاتزان قبل الإنتاج", "Equilibration before production"), body: L("إنتاج على نظام غير متزن يضلل RMSD وكل شيء بعده.", "Production on a non-equilibrated system misleads RMSD and everything after.") },
    ],
    ["l9-production"],
  ),
  expand(
    "l9-production",
    [L("الطول لا يشتري التقارب.", "Length does not buy convergence.")],
    [
      { type: "prose", id: "p", body: L("10 ns و100 ns و1 µs أرقام تخطيط لا شهادات. الجودة: حقل، اتزان، نُسخ، خواص متعددة، خطأ. الأحداث النادرة قد تحتاج معاينة معززة لا ميكروثانية عمياء.", "10 ns, 100 ns, and 1 µs are planning numbers, not certificates. Quality: FF, equilibration, replicas, multiple observables, error. Rare events may need enhanced sampling, not a blind microsecond.") },
      { type: "why", id: "y", question: L("لماذا يصرّ الممتحن على النسخ؟", "Why does the examiner insist on replicas?"), answer: L("مسار واحد حكاية. مساران يختلفان يكشفان أنك لم تُعاين.", "One trajectory is a story. Two that disagree reveal you have not sampled.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو divergedت النسخ؟", "What if replicas diverge?"), consequence: L("لا تختر الجميلة. أبلغ التشتت أو زِد المعاينة.", "Do not pick the pretty one. Report the spread or sample more.") },
    ],
    ["l9-convergence"],
  ),
  expand(
    "l9-gromacs",
    [
      L("شرح كل أمر من pdb2gmx إلى التحليل.", "Explain each command from pdb2gmx to analysis."),
    ],
    [
      { type: "command", id: "c1", command: "gmx pdb2gmx -f protein.pdb -o processed.gro -water tip3p", purpose: L("طوبولوجيا وحقل وهيدروجين.", "Topology, FF, hydrogens."), input: L("PDB.", "PDB."), output: L("gro + top.", "gro + top."), meaning: L("هنا تختار الفيزياء.", "Here you choose the physics."), errors: L("رواسب غير قياسية.", "Nonstandard residues.") },
      { type: "command", id: "c2", command: "gmx editconf -c -d 1.0 -bt dodecahedron", purpose: L("صندوق وهامش.", "Box and padding."), input: L("إحداثيات.", "Coordinates."), output: L("صندوق.", "A box."), meaning: L("PBC.", "PBC."), errors: L("هامش ضيق.", "Tight padding.") },
      { type: "command", id: "c3", command: "gmx solvate && gmx grompp && gmx genion -neutral", purpose: L("ماء وتعادل.", "Water and neutralize."), input: L("صندوق.", "Box."), output: L("نظام مشحون متعادل.", "A neutralized system."), meaning: L("كهروستاتيك دوري.", "Periodic electrostatics."), errors: L("نسيان تحديث top.", "Forgetting to update the topology.") },
      { type: "command", id: "c4", command: "gmx grompp -f min.mdp && gmx mdrun", purpose: L("تقليل ثم لاحقاً NVT/NPT/إنتاج.", "Minimize, later NVT/NPT/production."), input: L("mdp + tpr inputs.", "mdp + tpr inputs."), output: L("مسار.", "Trajectory."), meaning: L("grompp بوابة اتساق.", "grompp is the consistency gate."), errors: L("تجاهل تحذيرات الشحنة.", "Ignoring charge warnings.") },
      { type: "command", id: "c5", command: "gmx rms / gmx rmsf / gmx hbond", purpose: L("تشخيص لا برهان.", "Diagnosis, not proof."), input: L("xtc + tpr.", "xtc + tpr."), output: L("منحنيات.", "Curves."), meaning: L("هندسة وتفاعلات.", "Geometry and interactions."), errors: L("مواءمة على المجموعة الخاطئة.", "Fitting the wrong group.") },
      { type: "why", id: "y", question: L("لماذا grompp قبل mdrun دائماً؟", "Why grompp before every mdrun?"), answer: L("يدمج mdp والطوبولوجيا ويفحص التناقض قبل ملايين الخطوات.", "It compiles mdp and topology and catches contradictions before millions of steps.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو نسخت أوامر منتدى بلا فهم mdp؟", "What if you paste forum commands without understanding the mdp?"), consequence: L("طقس. ممتحن جيد يكتشفه في دقيقة.", "A ritual. A good examiner spots it in a minute.") },
    ],
    ["l9-rmsd"],
  ),
  expand(
    "l9-engines",
    [L("المحرك أداة؛ الحقل هو الفيزياء.", "The engine is a tool; the FF is the physics.")],
    [
      { type: "compare", id: "c", left: L("GROMACS", "GROMACS"), right: L("AMBER/OpenMM", "AMBER/OpenMM"), rows: [
        { dim: L("دور", "Role"), a: L("محرك سريع شائع", "A fast common engine"), b: L("نظام بيئي + بايثون مرن (OpenMM)", "Ecosystem + flexible Python (OpenMM)") },
        { dim: L("لا يعني", "Does not mean"), a: L("فيزياء أصح تلقائياً", "Automatically truer physics"), b: L("ΔG تجريبي", "Experimental ΔG") },
      ] },
      { type: "why", id: "y", question: L("هل نحتاج NAMD؟", "Do we need NAMD?"), answer: L("إذا كان بروتوكول مجموعتك أو حجم النظام يبرره. ليس لأنه أشهر في شريحة.", "If your group’s protocol or system size justifies it. Not because a slide named it.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو غيّرت المحرك دون إعادة البارامترات؟", "What if you change engine without re-checking parameters?"), consequence: L("وحدات أو قيود أو PME تختلف في التفاصيل. أعد التحقّق.", "Units, constraints, or PME details differ. Re-validate.") },
    ],
    ["l9-gromacs"],
  ),
  expand(
    "l9-rmsd",
    [L("RMSD مسافة هندسية. المسطح ≠ تقارب.", "RMSD is a geometric distance. Flat ≠ converged.")],
    [
      { type: "equation", id: "e", latex: "\\mathrm{RMSD}=\\sqrt{\\frac{1}{N}\\sum_i |x_i-y_i|^2}", name: L("RMSD", "RMSD"), meaning: L("بعد مواءمة عادة.", "Usually after fitting."), variables: [{ symbol: "N", name: L("ذرات", "Atoms") }], interpretation: L("ليست طاقة وليست ألفة.", "Not energy and not affinity."), application: L("إعادة التحام ومسارات.", "Redocking and trajectories.") },
      { type: "callout", id: "w", kind: "warning", title: L("إساءة شائعة", "Common abuse"), body: L("«استقر عند 2.3 Å إذن المعقّد مستقر إذن المركب دواء» ثلاث قفزات باطلة.", "“Plateaued at 2.3 Å therefore the complex is stable therefore the compound is a drug” — three invalid leaps.") },
      { type: "why", id: "y", question: L("ما الذي يجب أن تُوائم عليه؟", "What should you fit on?"), answer: L("غالباً عمود البروتين لفحص هل الليجند بقي؛ لا تُوائم الليجند ثم تدّعي أنه لم يتحرك.", "Often the protein core to test whether the ligand stayed; do not fit the ligand then claim it did not move.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو كان RMSD مسطحاً لأن النظام محبوس؟", "What if RMSD is flat because the system is trapped?"), consequence: L("تجويف كاذب. نُسخ أو معاينة معززة.", "A false basin. Replicas or enhanced sampling.") },
      { type: "exercise", id: "x", prompt: L("هل يحق لك كتابة «المعقّد مستقر» من منحنى واحد؟", "May you write “the complex is stable” from one curve?"), solution: L("لا.", "No.") },
    ],
    ["l9-convergence"],
  ),
  expand(
    "l9-flex",
    [L("RMSF وRg وSASA وH-bonds كتشخيص.", "RMSF, Rg, SASA, H-bonds as diagnosis.")],
    [
      { type: "prose", id: "p", body: L("RMSF مرونة موضعية حول المتوسط. Rg اكتناز. SASA سطح متاح للمذيب. H-bond الوجود المستمر أهم من لقطة. كلها مؤشرات، لا ΔG.", "RMSF is local flexibility about the mean. Rg is compactness. SASA is solvent-accessible surface. For H-bonds, persistence beats a snapshot. All are indicators, not ΔG.") },
      { type: "why", id: "y", question: L("لماذا لا يكفي RMSD؟", "Why is RMSD not enough?"), answer: L("قد يثبت العمود بينما العروة الوظيفية تتقلب أو الليجند يدور.", "The core may sit still while a functional loop fluctuates or the ligand spins.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو اختفت الرابطة الهيدروجينية بعد 12 ns في نسخة واحدة؟", "What if the H-bond vanishes after 12 ns in one replica?"), consequence: L("لا تخفِ النسخة. افحص المسافة في الكل.", "Do not hide the replica. Inspect the distance in all of them.") },
    ],
    ["l9-rmsd"],
  ),
  expand(
    "l9-pca",
    [L("PCA وFEL وDCCM بحذر.", "PCA, FEL, and DCCM cautiously.")],
    [
      { type: "prose", id: "p", body: L("PCA على مصفوفة التغاير يلخّص حركة جماعية. القيم الذاتية ليست «طاقة». مشهد الطاقة الحر من إسقاط PC هو تمثيل لا ترموديناميكا كاملة. DCCM ارتباط لا سببية. التجميع يعرّف هيئات مرشحة للفحص البصري.", "PCA on a covariance matrix summarizes collective motion. Eigenvalues are not “energy”. A free-energy landscape from a PC projection is a representation, not full thermodynamics. DCCM is correlation, not causation. Clustering defines candidate conformers for visual inspection.") },
      { type: "why", id: "y", question: L("لماذا التجويف في FEL ليس بالضرورة مساراً؟", "Why is a FEL basin not necessarily a path?"), answer: L("الإسقاط يطوي أبعاداً. حاجز في PC1 قد يكون وهماً.", "The projection folds dimensions. A barrier on PC1 may be fictitious.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو فسّرت DCCM كآلية allostery؟", "What if you read DCCM as an allosteric mechanism?"), consequence: L("ادعاء أكبر من الدليل. قل «ارتباط حركي يقترح فرضية».", "A claim larger than the evidence. Say “a dynamical correlation suggests a hypothesis”.") },
    ],
    ["l3-pca"],
  ),
  expand(
    "l9-convergence",
    [L("التقارب إحصاء: نُسخ، كتل، خطأ.", "Convergence is statistics: replicas, blocks, error.")],
    [
      { type: "prose", id: "p", body: L("الاتزان ≠ التقارب. الاتزان: خواص عيانية استقرت بعد الاضطراب الابتدائي. التقارب: المعاينة كافية لتقدير ما تدّعيه، مع عدم يقين. متوسط الكتل، تداخل الهيئات بين النسخ، وخواص متعددة (طاقة، كثافة، RMSD، ملامسات) حد أدنى. الأحداث النادرة تحتاج طرائق معززة.", "Equilibration ≠ convergence. Equilibration: macroscopic properties settled after the initial perturbation. Convergence: sampling is adequate for what you claim, with uncertainty. Block averaging, conformational overlap across replicas, and multiple observables (energy, density, RMSD, contacts) are a minimum. Rare events need enhanced methods.") },
      { type: "callout", id: "w", kind: "warning", title: L("لا تشترِ التقارب بالمدة", "Do not buy convergence with duration"), body: L("100 ns محبوسة أضعف من 5 نُسخ × 20 ns إن اختلفت الأحواض.", "100 trapped ns is weaker than 5 × 20 ns if basins differ.") },
      { type: "why", id: "y", question: L("كيف تجيب «كيف عرفت أنك تقاربت؟»", "How do you answer “how do you know you converged?”"), answer: L("بعرض النسخ والخطأ وما الذي لم يُعاين بعد، لا بمنحنى واحد.", "By showing replicas, error, and what remains unsampled — not one curve.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو طلب المحرّر ميكروثانية؟", "What if the editor asks for a microsecond?"), consequence: L("قد يفيد أو لا. اربط الطلب بسؤال المعاينة لا بالموضة.", "It may help or it may not. Tie the request to the sampling question, not fashion.") },
    ],
    ["l9-mistakes"],
  ),
  expand(
    "l9-mistakes",
    [L("أخطاء MD التي تقتل ورقة.", "MD mistakes that kill a paper.")],
    [
      { type: "list", id: "l", title: L("قائمة قصيرة", "A short list"), ordered: true, items: [L("خطوة 5 fs بلا مخطط.", "5 fs with no scheme."), L("Berendsen إنتاجاً دون وعي.", "Berendsen in production without thought."), L("نسخة واحدة معروضة.", "One replica shown."), L("RMSD = استقرار = دواء.", "RMSD = stability = drug."), L("لا إصدار/حقل/ماء في Methods.", "No version/FF/water in Methods.")] },
      { type: "why", id: "y", question: L("لماذا تبدو هذه الأخطاء مقنعة؟", "Why do these errors look convincing?"), answer: L("لأن المنحنيات جميلة. الجمال ليس دالة تقييم.", "Because the curves are pretty. Beauty is not a scoring function.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو اكتشف المراجع أنك أخفيت نسخة؟", "What if a reviewer finds you hid a replica?"), consequence: L("مسألة أمانة لا أسلوب.", "An integrity issue, not a style issue.") },
    ],
    ["l23-short-md"],
  ),
  expand(
    "l10-dg",
    [L("ΔG = ΔH − TΔS وربطها بـ Kd.", "ΔG = ΔH − TΔS and its link to Kd.")],
    [
      { type: "equation", id: "e", latex: "\\Delta G = \\Delta H - T\\Delta S", name: L("غيبس", "Gibbs"), meaning: L("اتزان إنثالبي−إنتروبي.", "Enthalpy–entropy balance."), variables: [{ symbol: "T", name: L("حرارة", "Temperature") }], interpretation: L("ارتباط قوي قد يكون إنتروبي الدفع.", "Tight binding can be entropy-driven."), application: L("لا تقرأ درجة التحام كـ ΔH.", "Do not read a docking score as ΔH.") },
      { type: "equation", id: "k", latex: "\\Delta G^{\\circ} = RT \\ln(K_d/c^{\\circ})", name: L("Kd", "Kd"), meaning: L("معيار صريح إلزامي.", "An explicit standard state is mandatory."), variables: [{ symbol: "c^{\\circ}", name: L("غالباً 1 M", "Often 1 M") }], interpretation: L("IC50 ليست Kd.", "IC50 is not Kd."), application: L("الحاسبة في الأكاديمية.", "The academy calculator.") },
      { type: "why", id: "y", question: L("لماذا الإنتروبي صعب في الحساب؟", "Why is entropy hard to compute?"), answer: L("يعيش في حجم فضاء الهيئة. لقطة لا تراه.", "It lives in the volume of pose space. A snapshot does not see it.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو خلطت IC50 بـ ΔG في المناقشة؟", "What if you convert IC50 to ΔG in the discussion?"), consequence: L("تحويل باطل إن لم تُحدَّد شروط المقايسة وآليتها.", "An invalid conversion unless assay conditions and mechanism are specified.") },
    ],
    ["l2-gibbs"],
  ),
  expand(
    "l10-mmpbsa",
    [L("مكوّنات MM/PBSA وحدودها.", "MM/PBSA components and limits.")],
    [
      { type: "prose", id: "p", body: L("تقريباً ΔG ≈ ⟨ΔEMM + ΔG_solv − TΔS⟩ من لقطات. ΔEMM من الحقل. ΔG_solv قطبية (PB أو GB) وغير قطبية (غالباً مساحة). الإنتروبي تقدير خشن أو مُهمل. ليست FEP.", "Roughly ΔG ≈ ⟨ΔEMM + ΔG_solv − TΔS⟩ from snapshots. ΔEMM from the FF. ΔG_solv polar (PB or GB) and nonpolar (often area). Entropy is crude or omitted. Not FEP.") },
      { type: "callout", id: "w", kind: "limitation", title: L("محدودية كبرى", "Major limitation"), body: L("الخطأ غالباً أكبر من فروق السلاسل المتباعدة. لا ترتّب كيموتypes بعيدة كمقياس.", "Error often exceeds gaps between distant chemotypes. Do not rank distant chemotypes as an assay.") },
      { type: "why", id: "y", question: L("متى تكون مفيدة؟", "When is it useful?"), answer: L("إشارات داخل سلسلة ضيقة، مع تواضع وأخطاء، لا كجدول ثلاث خانات.", "Signals inside a narrow series, with humility and errors, not a three-decimal table.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو أهملت الإنتروبي ثم فسّرت الترتيب كحقيقة؟", "What if you drop entropy then treat the ranking as truth?"), consequence: L("قد تعكس ليغندات صلبة/مرنة.", "You may invert rigid versus flexible ligands.") },
    ],
    ["l10-limits"],
  ),
  expand(
    "l10-decomp",
    [L("التفكيك لكل بقايا مؤشر لا برهان.", "Per-residue decomposition is a hint, not proof.")],
    [
      { type: "prose", id: "p", body: L("تجزئة الطاقة غير فريدة فيزيائياً. استخدمها لتوليد فرضيات تُختبر بطفرات أو FEP أو كيمياء.", "The energy partition is not physically unique. Use it to generate hypotheses tested by mutants, FEP, or chemistry.") },
      { type: "why", id: "y", question: L("لماذا يحبه المصمّمون؟", "Why do designers like it?"), answer: L("يعطي خريطة بصرية. الخريطة ليست سببية.", "It gives a visual map. The map is not causal.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو صمّمت على بقايا «الأهم» في الجدول؟", "What if you design on the “top” residue in the table?"), consequence: L("قد تكون البقايا مهمة في التجزئة لا في الواقع.", "The residue may matter in the partition, not in reality.") },
    ],
    ["l10-mmpbsa"],
  ),
  expand(
    "l10-limits",
    [L("متى MM/PBSA غير ملائمة.", "When MM/PBSA is inappropriate.")],
    [
      { type: "list", id: "l", title: L("لا تستخدمها لـ", "Do not use it to"), items: [L("ترتيب سقالات متباعدة.", "Rank distant scaffolds."), L("إعلان nM.", "Announce nM."), L("بديل عن مقايسة.", "Replace an assay."), L("انتقائية كينازات بفروق < خطأ الطريقة.", "Kinase selectivity with gaps below method error.")] },
      { type: "why", id: "y", question: L("ما البديل؟", "What is the alternative?"), answer: L("FEP/TI على فرق ضيق، أو تجربة، أو تواضع لغوي.", "FEP/TI on a narrow delta, or experiment, or linguistic humility.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو طلب المشرف جدولاً لأن المجلة «تحبه»؟", "What if the supervisor wants a table because “journals like it”?"), consequence: L("يمكنك تقديمه مع خطأ وحدود، لا كحقيقة.", "You may present it with error and limits, not as truth.") },
    ],
    ["l10-choose"],
  ),
  expand(
    "l10-fep",
    [L("FEP وTI: دقة أعلى بتكلفة معاينة λ.", "FEP and TI: higher accuracy at the cost of λ sampling.")],
    [
      { type: "prose", id: "p", body: L("FEP من نسب القسم بين هاميلتونيين على مسار λ. TI يتكامل ⟨∂U/∂λ⟩. كلاهما يحتاج تداخل توزيعات ونُسخ. ممتازان لفروق وثيقة (ميثيل هنا أو هناك) لا لفرز مليون مركب.", "FEP uses partition ratios between Hamiltonians along λ. TI integrates ⟨∂U/∂λ⟩. Both need overlapping distributions and replicas. Excellent for close differences (a methyl here or there), not for screening a million compounds.") },
      { type: "why", id: "y", question: L("لماذا أضيق من MM/PBSA رغم أنه «أفضل»؟", "Why narrower than MM/PBSA if it is “better”?"), answer: L("لأن التكلفة تفرض سؤالاً أصغر أدق.", "Because cost forces a smaller, sharper question.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو لم تتداخل نوافذ λ؟", "What if λ windows do not overlap?"), consequence: L("ΔG باطل بهدوء. افحص overlap قبل النشر.", "A quietly invalid ΔG. Check overlap before publishing.") },
    ],
    ["l10-enhanced"],
  ),
  expand(
    "l10-enhanced",
    [L("umbrella وmetadynamics وABF للأحداث النادرة.", "Umbrella, metadynamics, ABF for rare events.")],
    [
      { type: "prose", id: "p", body: L("عندما لا يزور المسار الحر الحاجز، نضيف تحيزاً على متغير جماعي ثم نُزيل التحيز إحصائياً. اختيار المتغير قرار علمي: مسافة خاطئة تعطي PMF خاطئ بشكل جميل.", "When unbiased MD never visits the barrier, we bias a collective variable then unbias statistically. Choosing the variable is a scientific decision: the wrong distance yields a beautifully wrong PMF.") },
      { type: "why", id: "y", question: L("لماذا ليست بديلاً عن FEP دائماً؟", "Why not always a substitute for FEP?"), answer: L("أسئلة مختلفة: مسار/حاجز مقابل فرق كيميائي تبديلي.", "Different questions: a path/barrier versus an alchemical difference.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو كان المتغير الجماعي ناقصاً؟", "What if the CV is incomplete?"), consequence: L("PMF يبدو متقارباً وهو مسقط واهم.", "The PMF looks converged and is a misleading projection.") },
    ],
    ["l10-fep"],
  ),
  expand(
    "l10-choose",
    [L("اختر الطريقة للسؤال لا للجدول.", "Choose the method for the question, not the table.")],
    [
      { type: "compare", id: "c", left: L("رخيص", "Cheap"), right: L("أغلى", "Dearer"), rows: [
        { dim: L("أداة", "Tool"), a: L("درجة / MM-PBSA بحذر", "Score / cautious MM-PBSA"), b: L("FEP/TI / معاينة معززة", "FEP/TI / enhanced sampling") },
        { dim: L("سؤال يناسبها", "Fitting question"), a: L("فرضيات داخل سلسلة", "Hypotheses inside a series"), b: L("فرق ذرة يستحق عنقوداً", "An atom difference worth a cluster") },
      ] },
      { type: "why", id: "y", question: L("ما السؤال الأول؟", "What is the first question?"), answer: L("ما الذي سيُفنّد الفرضية؟ ثم اختر أدنى طريقة قادرة على ذلك.", "What would falsify the hypothesis? Then pick the cheapest method that can.") },
      { type: "whatif", id: "i", scenario: L("ماذا لو كانت الطريقة أضعف من الفرق المتوقَّع؟", "What if the method is weaker than the expected gap?"), consequence: L("لا تشغّلها كحاسم. هذا إجابة شجاعة في المناقشة.", "Do not run it as a decider. That is a brave viva answer.") },
    ],
    ["l26-choices"],
  ),
];
