import type { Lesson } from "@/lib/academy/types";
import { expand, L } from "@/lib/academy/content/helpers";

export const lessons: Lesson[] = [
  expand(
    "l18-pymol",
    [
      L("بناء هيئة نشر: كرتون بروتين، sticks لليغند، ومقياس واضح.", "Build a publication pose: protein cartoon, ligand sticks, and a readable scale."),
      L("إظهار تفاعلات محددة لا «كل الروابط الهيدروجينية الممكنة».", "Show specific interactions, not “every possible hydrogen bond”."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("PyMOL أداة حجة لا ملصق", "PyMOL is an argument, not a poster"),
        body: L(
          "الشكل يقول: هذه البقايا تلمس هذه المجموعة. إن زيّنت السطح بكل الألوان فقد أخفيت الحجة. سير عمل نموذجي: حمّل البنية، أخفِ الماء غير ذي الصلة، أظهر cartoon للبروتين وsticks لليغند وبقايا الجيب، لوّن بسلاسل أو بعنصر، قِس مسافات تُذكر في النص. ray للطباعة بعد أن تستقر الكاميرا.",
          "A figure says: these residues touch this group. Colouring the whole surface hides the argument. A typical workflow: load the structure, hide irrelevant water, show cartoon for the protein and sticks for ligand and pocket residues, colour by chain or element, measure distances that appear in the text. Ray for print after the camera is settled.",
        ),
      },
      {
        type: "command",
        id: "cmd",
        command: "fetch 1IEP; hide everything; show cartoon, polymer; show sticks, resn STI; util.cbaw; zoom resn STI",
        purpose: L("هيئة أولية لمعقّد كيناز–imatinib (1IEP).", "A first pose of a kinase–imatinib complex (1IEP)."),
        input: L("اتصال شبكة أو ملف PDB محلي.", "Network access or a local PDB file."),
        output: L("منظر يُركّز على الليغند.", "A view centred on the ligand."),
        meaning: L("fetch يجلب إحداثيات عامة. التلوين والتمثيل قرارات علمية تُوثَّق إن أثّرت في التفسير.", "fetch retrieves public coordinates. Representation is a scientific decision if it changes interpretation."),
        errors: L("فشل الشبكة أو رمز PDB خاطئ. لا تخلط سلسلة غير موجودة.", "Network failure or a wrong PDB code. Do not colour a missing chain."),
      },
      {
        type: "list",
        id: "rules",
        title: L("قواعد شكل الالتحام", "Rules for a docking figure"),
        items: [
          L("بقايا الجيب بأسماء وأرقام ظاهرة أو في وسيلة إيضاح.", "Pocket residues with names and numbers, or in a legend."),
          L("لا تُظهر عشرات الروابط الهيدروجينية الآلية دون عتبة.", "Do not dump dozens of automatic H-bonds without a cutoff."),
          L("خلفية فاتحة أو داكنة باتساق المجلة، لا تدرج لوني تزيني.", "Journal-consistent background, not a decorative gradient."),
        ],
      },
      {
        type: "callout",
        id: "w",
        kind: "warning",
        title: L("الهيدروجين الظاهر ليس دليلاً", "Visible hydrogens are not evidence"),
        body: L("h_add يضع هندسة لا تجربة. لا تستخدمها لإثبات بروتنة.", "h_add places geometry, not experiment. Do not use it to prove protonation."),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا نُظهر cartoon بدل spheres لكل الذرات؟", "Why cartoon rather than all-atom spheres?"),
        answer: L("الهيئة العامة تُقرأ من الهيكل. الذرات الكثيفة تُخفي الجيب. spheres للجيب فقط إن لزم التصادم.", "The fold is read from the backbone. Dense atoms hide the pocket. Use spheres locally if a clash must be shown."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو قصصتَ عروة مرنة من الشكل لأنها «تشوّه المنظر»؟", "What if you crop a flexible loop because it “spoils the view”?"),
        consequence: L("قد تكون العروة جدار الجيب. الحذف البصري يُصبح حذفاً علمياً غير معلن.", "The loop may be a pocket wall. Visual deletion becomes undeclared scientific deletion."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("اكتب ثلاث أوامر PyMOL تُظهر STI وبقايا hinge فقط في 1IEP.", "Write three PyMOL commands that show only STI and hinge residues in 1IEP."),
        solution: L("بعد fetch: hide everything; show sticks, resn STI or (resi 315-321 and chain A); zoom resn STI. اضبط أرقام hinge حسب السلسلة في الملف الذي فتحته.", "After fetch: hide everything; show sticks, resn STI or (resi 315-321 and chain A); zoom resn STI. Adjust hinge numbering to the chain you actually opened."),
      },
    ],
    ["l8-poses", "l18-figures", "l4-pdb"],
  ),
  expand(
    "l18-chimerax",
    [
      L("فتح خريطة cryo-EM مع نموذج ذري دون الخلط بين الكثافة والذرات.", "Open a cryo-EM map with an atomic model without confusing density and atoms."),
      L("معرفة أن ChimeraX أداة فحص خرائط لا إثبات ارتباط.", "Know that ChimeraX inspects maps; it does not prove binding."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("الخريطة شريك ثالث", "The map is a third partner"),
        body: L(
          "في cryo-EM ترى كثافة، لا كرة-وعصا مقدّسة. ChimeraX يفتح الخريطة والنموذج معاً: open 7xxx أو open map.mrc ثم النموذج. إن خرج الليغند عن الكثافة فالنموذج ادّعاء. الدقة المحلية (local resolution) قد تكون أسوأ في الجيب منها في القلب.",
          "In cryo-EM you see density, not a sacred ball-and-stick. ChimeraX opens map and model together. If the ligand sits outside density, the model is a claim. Local resolution is often worse in the pocket than in the core.",
        ),
      },
      {
        type: "command",
        id: "cmd",
        command: "open 7r98; volume #1 level 0.4; hide solvent; cartoon; style ligand ball",
        purpose: L("مثال تعليمي لأوامر ChimeraX على بنية عامة — تحقّق من الرمز والمستوى قبل الاستخدام.", "Educational ChimeraX commands on a public entry — verify the code and contour before use."),
        input: L("رمز PDB/EMDB أو ملفات محلية.", "A PDB/EMDB code or local files."),
        output: L("نموذج وخريطة بمستوى كثافة تختاره أنت.", "A model and a map at a contour you choose."),
        meaning: L("مستوى الحجم (contour) يغيّر ما «يوجد». لا تضبطه حتى يظهر الليغند.", "Contour changes what “exists”. Do not tune it until the ligand appears."),
        errors: L("رمز غير موجود أو خريطة غير مرفقة بالنموذج.", "A missing code, or a map not associated with the model."),
      },
      {
        type: "callout",
        id: "w",
        kind: "limitation",
        title: L("كثافة الليغند ليست دائماً كافية", "Ligand density is not always enough"),
        body: L("ليغندات صغيرة عند ~3–4 Å قد تُبنى بالتحيّز. اطلب خريطة فرق إن وُجدت، واقرأ occupancy.", "Small ligands at ~3–4 Å may be built by bias. Ask for a difference map if available, and read occupancy."),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا نفتح الخريطة لا النموذج وحده قبل التصميم على بنية cryo-EM؟", "Why open the map, not only the model, before designing on a cryo-EM structure?"),
        answer: L("لأن الإحداثيات فرضية مُلائمة للكثافة. الجيب قد يكون ضوضاء مُنمذجة.", "Because coordinates are a hypothesis fitted to density. The pocket may be modelled noise."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو رسّمتَ في نموذج AlphaFold ثم لوّنتَه في ChimeraX كأنه بلورة؟", "What if you dock into an AlphaFold model and colour it in ChimeraX as if it were a crystal?"),
        consequence: L("الثقة البصرية تُخفي غياب دليل تجريبي على هيئة الجيب.", "Visual confidence hides the missing experimental evidence for the pocket pose."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("اكتب في الدفتر ما الذي يتغيّر إن رفعتَ contour الخريطة حتى اختفى الليغند.", "Write what changes scientifically if you raise the map contour until the ligand vanishes."),
        solution: L("إما أن الكثافة ضعيفة (الليغند مشكوك) أو أن المستوى صار أعلى من الإشارة الحقيقية. لا تستنتج الغياب دون مقارنة بمستوى السلسلة الجانبية المجاورة.", "Either the density is weak (the ligand is doubtful) or the contour is above real signal. Do not infer absence without comparing neighbouring side-chain density."),
      },
    ],
    ["l4-methods", "l16-plm", "l18-figures"],
  ),
  expand(
    "l18-vmd",
    [
      L("عرض مسار كفرضيات هيئات لا كفيلم حقيقة.", "View a trajectory as conformational hypotheses, not as a true movie."),
      L("ربط تمثيل VMD بإحصاء: إطار واحد لا يكفي.", "Tie a VMD representation to statistics: one frame is not enough."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("الحركة تُقاس ثم تُعرض", "Motion is measured, then shown"),
        body: L(
          "VMD ممتاز للمسارات الكبيرة. الخطأ الشائع: اختيار أجمل إطار لشكل النشر. الصحيح: اختر إطاراً يمثّل عنقوداً له وزن، واذكر عدد الإطارات والعناقيد. فيلم دون RMSD/occupancy زينة.",
          "VMD is excellent for large trajectories. The common error: picking the prettiest frame for the paper. The correct move: pick a frame that represents a weighted cluster, and state frame counts. A movie without RMSD/occupancy is decoration.",
        ),
      },
      {
        type: "command",
        id: "cmd",
        command: "vmd protein.gro traj.xtc",
        purpose: L("فتح طوبولوجيا ومسار GROMACS في VMD.", "Open a GROMACS topology and trajectory in VMD."),
        input: L("ملف بنية (gro/pdb) ومسار (xtc/trr) بعد إزالة القفز الدوري إن لزم.", "A structure file and a trajectory, after removing periodic jumps if needed."),
        output: L("خط زمني للإطارات.", "A frame timeline."),
        meaning: L("VMD يعرض ما في الملف. إن لم تُمركز الجزيء فسيقفز عبر الصندوق.", "VMD displays the file. If you did not center the molecule it will jump across the box."),
        errors: L("عدم تطابق عدد الذرات بين gro وxtc.", "Atom-count mismatch between gro and xtc."),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا نُزيل vis وjump قبل العرض؟", "Why remove PBC jumps before display?"),
        answer: L("البروتين المنقسم عبر الحد يُظهر روابط وهمية ويُفسد حدس الجيب.", "A protein split across the boundary shows fake bonds and ruins pocket intuition."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو عرضتَ الليغند يخرج ثم يعود واخترتَ إطار العودة فقط؟", "What if the ligand leaves and returns, and you show only the return frame?"),
        consequence: L("انتقاء بصري. اذكر زمن الخروج ونسبة الإطارات المرتبطة.", "Visual cherry-picking. Report unbinding time and the bound-frame fraction."),
      },
      {
        type: "callout",
        id: "w",
        kind: "warning",
        title: L("الفيلم ليس إحصاءً", "A movie is not a statistic"),
        body: L("المحرر يطلب شريطاً. الباحث يضع بجانبه توزيع RMSD أو occupancy.", "The editor wants a strip. The researcher places an RMSD or occupancy distribution beside it."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("صف تمثيلين في VMD يُظهران ماء الجيب دون إغراق المشهد.", "Describe two VMD representations that show pocket water without flooding the scene."),
        solution: L("Licorice لليغند وبقايا ≤4 Å؛ CPK أو points للماء ضمن 5 Å من الليغند فقط. أخفِ بقية المذيب.", "Licorice for ligand and residues ≤4 Å; CPK or points for waters within 5 Å of the ligand only. Hide the rest of the solvent."),
      },
    ],
    ["l9-rmsd", "l18-figures", "l9-gromacs"],
  ),
  expand(
    "l18-figures",
    [
      L("تمييز شكل يستدل من شكل يُزيّن.", "Distinguish an evidential figure from a decorative one."),
      L("وضع مقياس، تباين، ووسيلة إيضاح تُقرأ أبيض-وأسود.", "Put a scale, contrast, and a legend that survives greyscale."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("الشكل جملة في المناقشة", "A figure is a sentence in the viva"),
        body: L(
          "شكل الهيئة: كاميرا تُظهر التفاعل المدعى. شكل RMSD: محور زمني بوحدة ns، ونُسخ بلون مختلف، لا متوسط يخفي التشتت. شكل MM/PBSA: خطأ أو نُسخ ظاهرة. لا خانتان عشريتان أصدق من الضجيج. لا تدرج بنفسجي.",
          "Pose figure: a camera that shows the claimed interaction. RMSD figure: time in ns, replicas in distinct colours, no mean that hides scatter. MM/PBSA figure: error or replicas visible. No decimal places more honest than the noise. No purple gradient.",
        ),
      },
      {
        type: "list",
        id: "std",
        title: L("معايير شكل بحثي", "Standards for a research figure"),
        items: [
          L("خط محور يُقرأ عند عرض عمود واحد.", "Axis labels readable at single-column width."),
          L("وحدات: Å أو nm بثبات، kcal mol⁻¹ أو kJ mol⁻¹ بثبات.", "Units: Å or nm consistently; kcal mol⁻¹ or kJ mol⁻¹ consistently."),
          L("لا تقتطع المحور ليبدو الفرق دراميّاً إن كان ضمن الخطأ.", "Do not crop the axis to dramatize a gap inside the error."),
        ],
      },
      {
        type: "callout",
        id: "w",
        kind: "warning",
        title: L("انتقاء الإطار جريمة صامتة", "Frame selection is a silent offence"),
        body: L("إن اخترت إطاراً لأن الرابطة الهيدروجينية «تظهر فيه»، فأنت تُنشئ دليلاً من الضجيج. اذكر معيار الاختيار.", "If you pick a frame because the H-bond “shows”, you mint evidence from noise. State the selection rule."),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا نُظهر النُسخ لا المتوسط وحده؟", "Why show replicas, not only the mean?"),
        answer: L("لأن الخلاف بين النُسخ هو المعلومة. المتوسط اللامع قد يكون كذبة بصرية.", "Because replica disagreement is the information. A glossy mean can be a visual lie."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو كان ΔRMSD = 0.3 Å وقصصتَ المحور من 2.0 إلى 2.4؟", "What if ΔRMSD = 0.3 Å and you crop the axis from 2.0 to 2.4?"),
        consequence: L("فرق ضئيل يبدو تحوّلاً. الفاحص سيعتبره تضليلاً.", "A tiny gap looks like a transition. An examiner will treat it as misleading."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("اكتب عنواناً علمياً لشكل RMSD لثلاث نُسخ 100 ns دون كلمة «مستقر».", "Write a scientific caption for a 3-replica 100 ns RMSD figure without the word “stable”."),
        solution: L("«RMSD لذرات البروتين الثقيلة بعد مواءمة العمود الفقري، ثلاث نُسخ مستقلة، 100 ns إنتاج لكل منها. القيم تصف الانحراف عن الإطار المرجعي لا طاقة الارتباط».", "“Protein heavy-atom RMSD after backbone alignment, three independent replicas, 100 ns production each. Values describe deviation from the reference frame, not binding energy.”"),
      },
    ],
    ["l23-plots", "l17-plots", "l9-rmsd"],
  ),
  expand(
    "l19-shell",
    [
      L("التنقّل في شجرة المحاكاة دون فقدان الملفات.", "Navigate a simulation tree without losing files."),
      L("استخدام grep/awk لقراءة سجلات لا لنسخ أرقام بالعين.", "Use grep/awk to read logs, not eyeball-copy numbers."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("الصدفة مختبر", "The shell is a laboratory"),
        body: L(
          "cd وls وmkdir وcp وmv أدوات حفظ الدليل. grep يستخرج طاقة من log. awk يجدول. المسارات النسبية أفضل من /home/you. لا تحذف raw.",
          "cd, ls, mkdir, cp, mv preserve the trail. grep extracts energies from a log. awk tables them. Relative paths beat /home/you. Do not delete raw.",
        ),
      },
      {
        type: "command",
        id: "cmd",
        command: "grep -E \"Potential|Temperature\" md.log | tail",
        purpose: L("إلقاء نظرة على الطاقة ودرجة الحرارة قرب نهاية مسار بأسلوب سجل GROMACS.", "Peek at late-run energy and temperature in a GROMACS-style log."),
        input: L("ملف سجل من mdrun.", "A log from mdrun."),
        output: L("أسطر أخيرة تطابق النمط.", "Last lines matching the pattern."),
        meaning: L("تقرأ ما كتبه المحرّك، لا ما تذكّرته.", "You read what the engine wrote, not what you remember."),
        errors: L("اسم حقل مختلف حسب الإصدار. افتح الدليل إن لم يُطابق النمط.", "Field names differ by version. Open the manual if the pattern misses."),
      },
      {
        type: "list",
        id: "min",
        title: L("حدّ أدنى لباحث", "A researcher’s minimum"),
        items: [
          L("pwd قبل أي حذف.", "pwd before any delete."),
          L("cp -a للاحتفاظ بالزمن.", "cp -a to keep timestamps."),
          L("less لا cat لملفات ضخمة.", "less, not cat, for huge files."),
        ],
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا لا يكفي واجهة رسومية لنسخ الطاقة؟", "Why is a GUI copy of an energy not enough?"),
        answer: L("لأن الرقم بلا أمر إعادة استخراج لا يُراجع. السجل هو المصدر.", "Because a number without a re-extraction command cannot be audited. The log is the source."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو شغّلت rm * في مجلد النتائج؟", "What if you run rm * in the results directory?"),
        consequence: L("قد تُفقد المسارات. raw منفصل وpermissions وgit-annex أو نسخ احتياطي قبل التنظيف.", "Trajectories may vanish. Keep raw separate, and back up before cleaning."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("اكتب أمراً يعدّ ملفات xtc في شجرة العمل.", "Write a command that counts xtc files in the working tree."),
        solution: L("find . -name '*.xtc' | wc -l — ثم اسأل لماذا يزيد العدد عن عدد الإنتاجات المعلنة.", "find . -name '*.xtc' | wc -l — then ask why the count exceeds the declared productions."),
      },
    ],
    ["l19-conda", "l21-layout"],
  ),
  expand(
    "l19-conda",
    [
      L("عزل RDKit/GROMACS Python عن نظام التشغيل.", "Isolate RDKit/GROMACS Python from the OS."),
      L("تثبيت environment.yml كجزء من Methods.", "Pin environment.yml as part of Methods."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("البيئة جهاز القياس", "The environment is the instrument"),
        body: L(
          "conda (أو mamba/micromamba) يثبّت إصدارات معروفة. بلا بيئة: «عندي rdkit» جملة فارغة. environment.yml يُرفق بالمستودع. لا تخلط pip العالمي مع محاكاة.",
          "conda (or mamba/micromamba) pins known versions. Without an environment, “I have rdkit” is empty. Commit environment.yml. Do not mix global pip with a simulation.",
        ),
      },
      {
        type: "command",
        id: "cmd",
        command: "conda env export --from-history > environment.yml",
        purpose: L("تصدير ما طلبتَه صراحة لا كل شجرة الاعتماد الثقيلة إن أمكن.", "Export what you explicitly requested, not necessarily the entire heavy tree."),
        input: L("بيئة مفعّلة.", "An activated environment."),
        output: L("ملف yml يُراجع يدوياً.", "A yml file you review by hand."),
        meaning: L("إعادة الإنتاج تبدأ بقائمة الحزم.", "Reproducibility starts with the package list."),
        errors: L("تصدير كامل قد يكسر المنصات. راجعه. conda lock أدق إن استخدمتموه.", "A full dump may break across platforms. Review it. conda-lock is stricter if you use it."),
      },
      {
        type: "callout",
        id: "w",
        kind: "warning",
        title: L("إصدار GROMACS حقل إلزامي", "GROMACS version is a required field"),
        body: L("سلوك قيود وthermostats يتغيّر بين إصدارات. «gmx» بلا رقم لا يكفي في الورقة.", "Constraints and thermostats change across versions. Bare “gmx” is not enough in a paper."),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا لا نثبّت كل شيء في base؟", "Why not install everything in base?"),
        answer: L("التعارض صامت. مشروع QSAR يكسر مسار MD أو العكس.", "Conflicts are silent. A QSAR project can break an MD path or vice versa."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو حدّثتَ RDKit وسط مشروع بصمات محفوظة؟", "What if you upgrade RDKit mid-project with stored fingerprints?"),
        consequence: L("قد تتغيّر بتات Morgan بين إصدارات. أعد الحساب أو جمّد الإصدار.", "Morgan bits can change across versions. Recompute or freeze the version."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("اكتب ثلاثة أسطر يجب أن تظهر في Methods عن البيئة.", "Write three Methods lines about the environment."),
        solution: L("لغة بايثون ورقمها؛ RDKit وNumPy بأرقام؛ نظام التشغيل. GROMACS وCUDA إن استُخدما. مصدر environment.yml.", "Python language and version; RDKit and NumPy with versions; OS. GROMACS and CUDA if used. Pointer to environment.yml."),
      },
    ],
    ["l21-env", "l17-python"],
  ),
  expand(
    "l19-git",
    [
      L("تتبع البروتوكول والشيفرة لا ثنائيات المسار.", "Track protocol and code, not trajectory binaries."),
      L("كتابة رسائل تشرح القرار العلمي لا «update».", "Write commits that explain the scientific decision, not “update”."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("Git ذاكرة القرارات", "Git is memory of decisions"),
        body: L(
          "المدّة الزمنية، الـ mdp، سكربتات التحليل، وnotebooks بعد التنظيف: تُحفظ. ملفات xtc/trr: في تخزين بيانات، تُذكر تجزئة checksum في المتن. .gitignore ضروري وإلا يختنق المستودع.",
          "mdp files, analysis scripts, and cleaned notebooks are committed. xtc/trr live in data storage; checksums belong in the text. .gitignore is required or the repo chokes.",
        ),
      },
      {
        type: "command",
        id: "cmd",
        command: "git log --oneline -- mdp/md.mdp",
        purpose: L("تاريخ تغيير بروتوكول الإنتاج.", "History of the production protocol file."),
        input: L("مستودع يتتبع mdp.", "A repo that tracks mdp files."),
        output: L("ملخص قرارات.", "A summary of decisions."),
        meaning: L("متى تغيّر timestep أو thermostat سؤال علمي.", "When the timestep or thermostat changed is a scientific question."),
        errors: L("الملف غير متتبَّع إن كان في gitignore بالخطأ.", "The file is untracked if gitignored by mistake."),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا لا نرفع المسارات إلى GitHub العام؟", "Why not push trajectories to public GitHub?"),
        answer: L("الحجم والرخصة والخصوصية. استخدم مستودعاً بياناتياً أو Zenodo وأشر إليه.", "Size, license, and privacy. Use a data repository or Zenodo and point to it."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو عدّلتَ تحليل RMSD دون commit ثم نسيتَ العتبة؟", "What if you edited RMSD analysis without a commit and forgot the cutoff?"),
        consequence: L("رقم في الورقة بلا أصل. الفاحص محق إن رفضه.", "A number in the paper with no origin. A reviewer is right to reject it."),
      },
      {
        type: "callout",
        id: "c",
        kind: "fact",
        title: L("البروتوكول شيفرة", "The protocol is code"),
        body: L("ملف mdp ليس ملحقًا تجميليًا. هو جزء من التجربة.", "An mdp file is not decorative supplementary material. It is part of the experiment."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("اكتب .gitignore مناسباً لمشروع GROMACS+بايثون.", "Write a sensible .gitignore for a GROMACS+Python project."),
        solution: L("*.xtc *.trr *.edr *.xtc *.cpt *.log أحياناً تُحفظ عيّنة log؛ __pycache__/ .ipynb_checkpoints/ *.pyc. لا تتجاهل *.mdp *.sh *.py environment.yml.", "*.xtc *.trr *.edr *.cpt; maybe keep sample logs; __pycache__/ .ipynb_checkpoints/ *.pyc. Do not ignore *.mdp *.sh *.py environment.yml."),
      },
    ],
    ["l21-layout", "l19-docker"],
  ),
  expand(
    "l19-docker",
    [
      L("فهم الحاوية كتجميد بيئة لا كسحر سرعة.", "Treat a container as a frozen environment, not as a speed spell."),
      L("عدم افتراض أن الصورة العامة تطابق ورقتك دون هاش.", "Do not assume a public image matches your paper without a hash."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("الحاوية إعادة إنتاج", "A container is reproducibility"),
        body: L(
          "Docker أو Apptainer يجمّد نظاماً. مفيد حين يختلف GROMACS بين العنقود واللابتوب. اذكر اسم الصورة والوسم والهاش إن أمكن. GPU يحتاج تمرير أجهزة صحيحاً. الحاوية لا تصلح فيزياء خاطئة.",
          "Docker or Apptainer freezes an OS. Useful when GROMACS differs between cluster and laptop. Name image, tag, and digest if you can. GPUs need correct device passthrough. A container does not fix wrong physics.",
        ),
      },
      {
        type: "command",
        id: "cmd",
        command: "docker run --rm -v \"$PWD\":/work -w /work IMAGE gmx --version",
        purpose: L("تشغيل gmx من صورة مع تثبيت مجلد العمل — استبدل IMAGE بصورة موثّقة.", "Run gmx from an image with the working directory mounted — replace IMAGE with a documented image."),
        input: L("صورة محلية أو مسحوبة، ومجلد عمل.", "A local or pulled image, and a working directory."),
        output: L("رقم إصدار يُنسخ إلى Methods.", "A version string copied into Methods."),
        meaning: L("التطابق بين ما تشغّل وما تكتب.", "Match between what you run and what you write."),
        errors: L("صلاحيات الحجم، أو صورة بلا GPU بينما تريد CUDA.", "Volume permissions, or a CPU image when you wanted CUDA."),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا قد نفضّل Apptainer على Docker في HPC؟", "Why might HPC prefer Apptainer over Docker?"),
        answer: L("غالباً بلا صلاحيات root، وسياسات العنقود. تحقّق من توثيق مركزك.", "Often no root and cluster policy. Check your centre’s documentation."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو استخدمتَ latest؟", "What if you used latest?"),
        consequence: L("غدًا تتغيّر الصورة. ثبّت وسمًا أو digest.", "Tomorrow the image moves. Pin a tag or digest."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("اذكر ثلاثة حقول تُكتب في الورقة عند استخدام حاوية.", "Name three paper fields when a container is used."),
        solution: L("اسم الصورة، الوسم أو digest، وأمر التشغيل الجوهري (أو سكربت).", "Image name, tag or digest, and the essential run command (or script)."),
      },
    ],
    ["l19-conda", "l20-slurm"],
  ),
  expand(
    "l20-cpu-gpu",
    [
      L("تفسير لماذا PME وnonbonded يحبّان GPU في MD صريح المذيب.", "Explain why PME and nonbonded love GPUs in explicit-solvent MD."),
      L("عدم خلط وحدات CUDA بين السائق والصورة.", "Do not mix CUDA user-space with an incompatible driver."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("البطاقة تكامل قوى", "The GPU is a force integrator"),
        body: L(
          "معظم زمن MD الصريح يذهب إلى nonbonded وكهرومستاتيك PME. GPU تُوازي هذه الحسابات. CPU يبقى للترابط والـ I/O أحياناً. 100 ns على لابتوب بلا GPU خطة ضعيفة لمشروع إنتاج، لكنها قد تكفي لدرس.",
          "Most explicit MD time goes into nonbonded and PME electrostatics. GPUs parallelise that. CPUs still handle bonded work and sometimes I/O. 100 ns on a CPU laptop is a weak production plan, but it can teach.",
        ),
      },
      {
        type: "callout",
        id: "w",
        kind: "limitation",
        title: L("GPU لا يزيد المعاينة السحرية", "A GPU does not magically increase sampling"),
        body: L("تسرّع الخطوات. الأحداث النادرة تبقى نادرة. النُسخ ما زالت لازمة.", "It speeds steps. Rare events stay rare. Replicas are still required."),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا نذكر طراز GPU في Methods؟", "Why name the GPU model in Methods?"),
        answer: L("لأن الأداء ومسار التقريب العددي قد يختلفان، وللسماح بإعادة تقدير التكلفة.", "Because performance and sometimes numerical paths differ, and so others can cost the work."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو شغّلتَ mixed precision دون أن تعرف؟", "What if you run mixed precision without noticing?"),
        consequence: L("هذا شائع ومقبول في MD الإنتاجي الحديث، لكن يجب أن تذكره لا أن تُفاجأ به في المناقشة.", "This is common and accepted in modern production MD, but you must state it rather than be surprised in the viva."),
      },
      {
        type: "list",
        id: "chk",
        title: L("قبل وظيفة GPU", "Before a GPU job"),
        items: [
          L("nvidia-smi يرى البطاقة.", "nvidia-smi sees the card."),
          L("إصدار CUDA الذي بُني عليه GROMACS متوافق مع السائق.", "The CUDA GROMACS was built against matches the driver."),
          L("حجم النظام يناسب ذاكرة البطاقة.", "The system size fits GPU memory."),
        ],
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("لماذا قد تكون نسخة CPU أبطأ 10× وليست «أصح»؟", "Why might a CPU run be 10× slower and not “more correct”?"),
        solution: L("نفس الحقل ونفس المكامل. الفرق عتاد. الصحة من البروتوكول لا من البطء.", "Same force field, same integrator. The difference is hardware. Correctness is protocol, not slowness."),
      },
    ],
    ["l9-production", "l20-slurm"],
  ),
  expand(
    "l20-parallel",
    [
      L("تمييز توازي المسار (نُسخ) عن توازي داخل المسار (MPI/OpenMP/GPU).", "Distinguish trajectory-level parallelism (replicas) from within-run MPI/OpenMP/GPU."),
      L("معرفة أن زيادة الرتب لا تُسرّع نظاماً صغيراً إلى ما لا نهاية.", "Know that more ranks do not speed a small system without limit."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("نوعان من التوازي", "Two kinds of parallelism"),
        body: L(
          "داخل الجولة: MPI يقسّم المجال، OpenMP خيوط، GPU kernels. بين الجولات: نُسخ مستقلة ببذور مختلفة — هذا توازي علمي لا مجرد أداء. لملء إحصاء الارتباط تحتاج الثاني حتى لو كان الأول سريعاً.",
          "Inside a run: MPI domains, OpenMP threads, GPU kernels. Across runs: independent replicas with different seeds — that is scientific parallelism, not mere performance. Binding statistics need the second even if the first is fast.",
        ),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا تفشل الكفاءة بعد حد من الرتب؟", "Why does efficiency die after a rank count?"),
        answer: L("الاتصال يهيمن. نظام 50k ذرة لا يحتاج مئات الرتب. قياس strong scaling قبل حجز العنقود.", "Communication dominates. A 50k-atom system does not need hundreds of ranks. Measure strong scaling before booking the cluster."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو شغّلتَ 16 «نسخة» بذات البذرة؟", "What if you launch 16 “replicas” with the same seed?"),
        consequence: L("ليست نُسخاً. هي نسخ كربونية. غيّر البذرة أو السرعات الابتدائية.", "They are not replicas. They are carbon copies. Change the seed or initial velocities."),
      },
      {
        type: "callout",
        id: "c",
        kind: "interpretation",
        title: L("التوازي الإحصائي أولاً", "Statistical parallelism first"),
        body: L("أفضل من إطالة مسار واحد إلى ميكروثانية بلا نُسخ إذا كان سؤالك تقارب متوسط.", "Better than stretching one trajectory to a microsecond with no replicas if your question is a mean."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("رتّب أولوية: 1×1000 ns أو 5×200 ns لسؤال «هل يبقى الليغند؟»", "Rank 1×1000 ns vs 5×200 ns for “does the ligand stay?”"),
        solution: L("الخمس نُسخ أصدق لتشتت المصير. الألف ns قد تلتقط حدثاً نادراً في نسخة واحدة — أفصح عن الاثنين ولا تخلطهما.", "Five replicas better capture fate scatter. 1000 ns may catch a rare event in one copy — report both aims and do not mix them."),
      },
    ],
    ["l9-convergence", "l20-slurm"],
  ),
  expand(
    "l20-slurm",
    [
      L("كتابة وظيفة تذكر المورد والزمن والمسار.", "Write a job that names resource, walltime, and paths."),
      L("عدم اعتبار خروج 0 دليلاً على فيزياء صحيحة.", "Do not treat exit code 0 as correct physics."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("الوظيفة عقد مع العنقود", "A job is a contract with the cluster"),
        body: L(
          "Slurm يحجز CPU/GPU والزمن. إن انتهى walltime قُتل المسار. احفظ checkpoints. المسارات المطلقة في السكربت أفضل من الاعتماد على cwd إن غيّر المجدول الدليل.",
          "Slurm books CPU/GPU and walltime. If walltime ends, the trajectory dies. Save checkpoints. Absolute paths in the script beat relying on cwd if the scheduler changes directory.",
        ),
      },
      {
        type: "command",
        id: "cmd",
        command: "sbatch --job-name=md01 --gres=gpu:1 --time=24:00:00 run.sh",
        purpose: L("تقديم سكربت نموذجي — الأعلام تختلف بين المراكز.", "Submit a typical script — flags differ by centre."),
        input: L("run.sh ينفّذ gmx mdrun -cpi إن وُجد checkpoint.", "run.sh that runs gmx mdrun -cpi if a checkpoint exists."),
        output: L("معرّف وظيفة.", "A job id."),
        meaning: L("المورد قرار تكلفة. سجّله.", "The resource is a cost decision. Log it."),
        errors: L("تقسيم غير موجود، أو GPU بلا CUDA في الوحدة المحمّلة.", "A missing partition, or a GPU with no CUDA in the loaded module."),
      },
      {
        type: "list",
        id: "script",
        title: L("محتوى run.sh الأدنى", "Minimum run.sh contents"),
        items: [
          L("module load أو صورة.", "module load or a container."),
          L("set -e وcd إلى مجلد العمل.", "set -e and cd to the work directory."),
          L("mdrun مع -cpi و-append حسب التوثيق لإصدارك.", "mdrun with -cpi/-append per your version’s docs."),
        ],
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا checkpoint أهم من الأمل؟", "Why is a checkpoint more important than hope?"),
        answer: L("العنقود يُقتل للصيانة. بلا cpt تبدأ من الصفر وتخلط إحصاءك.", "Clusters die for maintenance. Without cpt you restart from zero and mix your statistics."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو امتلأ القرص أثناء xtc؟", "What if disk fills during xtc write?"),
        consequence: L("مسار ناقص قد يبدو «مكتملاً» إن لم تفحص الخطوة الأخيرة. راقب df وnsteps.", "A truncated trajectory may look “finished” if you skip the last step. Watch df and nsteps."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("اكتب أربعة أسطر #SBATCH تراها ضرورية واشرح واحداً.", "Write four #SBATCH lines you consider essential and explain one."),
        solution: L("job-name, time, gres or cpus, output log. time يحمي الميزانية ويفرض التخطيط للـ checkpoint.", "job-name, time, gres or cpus, output log. time protects the allocation and forces checkpoint planning."),
      },
    ],
    ["l19-shell", "l21-env"],
  ),
  expand(
    "l21-layout",
    [
      L("فصل raw عن work عن results.", "Separate raw, work, and results."),
      L("تسمية تحتوي الهدف والحقل والمدة لا «final2».", "Names that contain target, force field, and length — not “final2”."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("المجلد ذاكرة خارجية", "The directory is external memory"),
        body: L(
          "اقتراح عملي: data/raw (PDB أصلي، مكتبات)، work/prep، work/md/rep{1..n}، results/figures، results/tables، env/environment.yml. لا تعدّل raw. انسخ ثم حضّر.",
          "A practical sketch: data/raw (original PDB, libraries), work/prep, work/md/rep{1..n}, results/figures, results/tables, env/environment.yml. Do not edit raw. Copy, then prepare.",
        ),
      },
      {
        type: "list",
        id: "names",
        title: L("أسماء تُراجع بعد سنة", "Names you can audit in a year"),
        items: [
          L("1iep_abl_imatinib_ff99sb_tip3p_100ns_rep02", "1iep_abl_imatinib_ff99sb_tip3p_100ns_rep02"),
          L("لا: new_new_md_final_USE_THIS", "Not: new_new_md_final_USE_THIS"),
        ],
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا نمنع الكتابة فوق raw؟", "Why forbid overwriting raw?"),
        answer: L("حتى تستطيع إثبات أن التحضير لم يُتلف المصدر، ولإعادة التحضير ببروتوكول جديد.", "So you can prove preparation did not mutate the source, and so you can re-prepare with a new protocol."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو حفظتَ كل شيء على سطح المكتب؟", "What if everything lives on the Desktop?"),
        consequence: L("لا مسار مطلق موثوق، ولا نسخة عنقودية، ولا شريك. انقل قبل أن يضيع.", "No reliable absolute path, no cluster copy, no collaborator. Move it before it vanishes."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("ارسم شجرة مجلدات لمشروع كيناز بثلاث نُسخ.", "Sketch a directory tree for a kinase project with three replicas."),
        solution: L("data/raw/1IEP.pdb · work/prep/ · work/md/rep01|02|03/{mdp,tpr,xtc} · results/rmsd · README يشرح الأمر الجوهري.", "data/raw/1IEP.pdb · work/prep/ · work/md/rep01|02|03/{mdp,tpr,xtc} · results/rmsd · README with the essential command."),
      },
    ],
    ["l21-checklist", "l19-git"],
  ),
  expand(
    "l21-env",
    [
      L("تسجيل إصدارات البرمجيات والبذور وملفات mdp.", "Record software versions, seeds, and mdp files."),
      L("اعتبار البذرة جزءاً من التجربة لا تفصيلاً تقنياً.", "Treat the seed as part of the experiment, not a technicality."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("البيانات الوصفية هي التجربة", "Metadata is the experiment"),
        body: L(
          "حد أدنى: تاريخ، اسم الباحث، PDB وسلسلة، حقل بروتين/ليغند، ماء، أيونات، صندوق، thermostat/barostat، dt، قيود، nsteps، بذور النُسخ، أوامر التحضير. YAML أو جدول يكفي. بلا ذلك Methods رواية.",
          "Minimum: date, operator, PDB and chain, protein/ligand FF, water, ions, box, thermostat/barostat, dt, constraints, nsteps, replica seeds, prep commands. YAML or a table is enough. Without it, Methods is a story.",
        ),
      },
      {
        type: "callout",
        id: "w",
        kind: "warning",
        title: L("لا تخترع بذرة بعد الواقعة", "Do not invent a seed after the fact"),
        body: L("إن لم تُحفظ، قل ذلك. لا تكتب gen-seed = 1993 لأن الرقم يبدو جدياً.", "If it was not saved, say so. Do not write gen-seed = 1993 because the number looks serious."),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا البذور مختلفة بين النُسخ؟", "Why different seeds across replicas?"),
        answer: L("حتى لا تبدأ من السرعات ذاتها. الاستقلال الإحصائي مطلب لا تجميل.", "So they do not start from the same velocities. Statistical independence is a requirement, not polish."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو تغيّر اسم الحقل بين التحضير والورقة؟", "What if the force-field name changes between prep and the paper?"),
        consequence: L("الفاحص سيعتبر النتائج غير قابلة للربط. انسخ اسم pdb2gmx الحرفي.", "A reviewer will treat the results as untraceable. Copy the literal pdb2gmx name."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("اكتب عشرة حقول metadata لمسار إنتاج.", "Write ten metadata fields for a production run."),
        solution: L("PDB، سلسلة، FF، ماء، dt، thermostat، barostat، nsteps، seed، إصدار gmx، GPU، عدد الذرات، شحنة النظام.", "PDB, chain, FF, water, dt, thermostat, barostat, nsteps, seed, gmx version, GPU, atom count, system charge."),
      },
    ],
    ["l21-checklist", "l9-gromacs"],
  ),
  expand(
    "l21-checklist",
    [
      L("المرور على قائمة قبل كتابة Methods.", "Walk a checklist before writing Methods."),
      L("رفض إكمال الورقة إن غاب حقل إلزامي.", "Refuse to finish the paper if a required field is missing."),
    ],
    [
      {
        type: "steps",
        id: "chk",
        title: L("قائمة إعادة الإنتاج", "Reproducibility checklist"),
        items: [
          { title: L("المصدر البنيوي", "Structure source"), body: L("PDB/EMDB، سلسلة، تجميع إن وُجد، تاريخ التنزيل.", "PDB/EMDB, chain, assembly if used, download date.") },
          { title: L("التحضير", "Preparation"), body: L("برتنة، توتومر، missing residues، معادن، ماء محفوظ.", "Protonation, tautomer, missing residues, metals, kept waters.") },
          { title: L("الحقل والمحرّك", "Field and engine"), body: L("أسماء حرفية وإصدارات.", "Literal names and versions.") },
          { title: L("المعاينة", "Sampling"), body: L("طول، dt، نُسخ، بذور، معيار تقارب.", "Length, dt, replicas, seeds, convergence criterion.") },
          { title: L("التحليل", "Analysis"), body: L("أوامر أو سكربتات، مواءمة، مجموعات ذرية.", "Commands or scripts, alignment, atom groups.") },
          { title: L("ما لن يُعاد", "What will not be rerun"), body: L("إن ضاعت ملفات، صرّح. لا تملأ الفجوات بالتخمين.", "If files were lost, say so. Do not fill gaps by guessing.") },
        ],
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا القائمة قبل النص الأدبي؟", "Why the checklist before prose?"),
        answer: L("لأن النثر يخفي النقص. الجدول يفضحه.", "Because prose hides gaps. A table exposes them."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو طلب المحرر «تفاصيل كافية لإعادة التنفيذ» ولم يكن لديك mdp؟", "What if the editor asks for “enough detail to reproduce” and you have no mdp?"),
        consequence: L("لن تستطيع. هذه ليست مشكلة كتابة، بل مشكلة أرشفة.", "You cannot. That is an archival failure, not a writing problem."),
      },
      {
        type: "callout",
        id: "c",
        kind: "fact",
        title: L("لا تخترع معاملات ناقصة", "Do not invent missing parameters"),
        body: L("مولّد Methods في هذه الأكاديمية يرفض الحقول الفارغة عمداً.", "The Methods generator in this academy refuses empty fields on purpose."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("حدّد ثلاثة حقول غيابها يجعل دراستك غير قابلة للدفاع في المناقشة.", "Name three missing fields that make a study indefensible in a viva."),
        solution: L("الحقل/الماء، بروتنة الليغند، وعدد النُسخ/البذور. أي واحد منها يكفي لسؤال قاتل.", "Force field/water, ligand protonation, and replica count/seeds. Any one is a lethal question."),
      },
    ],
    ["l22-anatomy", "l26-choices"],
  ),
  expand(
    "l22-anatomy",
    [
      L("تشريح ورقة حاسوبية باثني عشر سؤالاً.", "Dissect a computational paper with twelve questions."),
      L("البحث عما لم يُذكر قبل الاحتفاء بما ذُكر.", "Hunt what was omitted before celebrating what was shown."),
    ],
    [
      {
        type: "list",
        id: "q12",
        title: L("اثنا عشر سؤالاً للمحكّم", "Twelve reviewer questions"),
        items: [
          L("ما الفرضية القابلة للتكذيب؟", "What is the falsifiable hypothesis?"),
          L("ما دليل موقع الارتباط؟", "What evidence supports the site?"),
          L("كيف حُضّر البروتين والليغند؟", "How were protein and ligand prepared?"),
          L("هل وُثّق الالتحام (إعادة، صندوق، exhaustiveness)؟", "Was docking documented (redock, box, exhaustiveness)?"),
          L("هل الدرجة تُعامل كـ ΔG؟", "Is the score treated as ΔG?"),
          L("ما الحقل والماء والـ dt؟", "What force field, water, dt?"),
          L("كم نسخة؟ ما معيار التقارب؟", "How many replicas? What convergence criterion?"),
          L("هل MM/PBSA ضمن نطاقها؟", "Is MM/PBSA inside its comfort zone?"),
          L("ما الإحصاء؟ نُسخ أم إطار واحد؟", "What statistics? Replicas or one frame?"),
          L("هل الاستنتاج يفوق الدليل؟", "Does the conclusion outrun the evidence?"),
          L("هل يمكن إعادة التشغيل من المتن؟", "Can the work be rerun from the text?"),
          L("هل هناك تجربة أو اعتراف بغيابها؟", "Is there experiment, or an admission of its absence?"),
        ],
      },
      {
        type: "callout",
        id: "w",
        kind: "warning",
        title: L("لا تهاجم مؤلفاً باسمه من مثال تعليمي", "Do not attack a named author from an educational example"),
        body: L("نقد المنهج. إن ناقشت ورقة حقيقية، استشهد بدقة وتحقّق من النص.", "Critique the method. If you discuss a real paper, cite accurately and verify the text."),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا السؤال عن الصمت أهم من السؤال عن الرقم؟", "Why is the silence question more important than the number question?"),
        answer: L("لأن الرقم المعروض اختير. الصمت يكشف ما لم يُرد عرضه.", "Because the shown number was chosen. Silence reveals what was not meant to be shown."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو كانت المقدمة ممتازة والطرائق فقيرة؟", "What if the introduction is excellent and Methods is thin?"),
        consequence: L("لا تُجاز الدراسة بالمقدمة. ارفض الاستنتاج حتى تكتمل الطرائق.", "Do not pass a study on its introduction. Withhold the conclusion until Methods exists."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("اختر ثلاثة أسئلة من القائمة وطبّقها على بروتوكول: Vina ثم 100 ns RMSD.", "Pick three questions and apply them to: Vina then 100 ns RMSD."),
        solution: L("ΔG؟ لا. نُسخ؟ غير مذكورة. موقع؟ غير موثّق. الدراسة لا تدعم «مثبط واعد».", "ΔG? No. Replicas? Unstated. Site? Undocumented. The study does not support a “promising inhibitor”."),
      },
    ],
    ["l22-reviewer", "l23-docking-only"],
  ),
  expand(
    "l22-reviewer",
    [
      L("كتابة تقرير محكّم: Minor/Major/Reject بأسباب منهجية.", "Write a referee report: Minor/Major/Reject with methodological reasons."),
      L("اقتراح تجارب حاسوبية أو مخبرية تُصلح الاستنتاج.", "Propose computational or wet experiments that could rescue the claim."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("المحكّم ليس ملخصاً", "A referee is not a summariser"),
        body: L(
          "ابدأ بجملة: ما يدّعيه المؤلف. ثم: ما يدعمه الدليل. ثم: الفجوات القاتلة. لا تخلط ذوق الكتابة بصدق الفيزياء. اطلب أرقاماً ناقصة (نُسخ، ROC، إصدارات) لا لغة أجمل.",
          "Start with: what the authors claim. Then: what the evidence supports. Then: lethal gaps. Do not confuse prose taste with physical honesty. Ask for missing numbers (replicas, ROC, versions), not prettier language.",
        ),
      },
      {
        type: "steps",
        id: "rep",
        title: L("هيكل التقرير", "Report structure"),
        items: [
          { title: L("الخلاصة للمحرر", "Summary for the editor"), body: L("جملة قرار.", "A decision sentence.") },
          { title: L("نقاط كبرى", "Major points"), body: L("كل نقطة: أين في النص، لماذا علمياً، ما المطلوب.", "Each point: where in the text, why scientifically, what is required.") },
          { title: L("نقاط صغرى", "Minor points"), body: L("وحدات، أشكال، مراجع ناقصة.", "Units, figures, missing citations.") },
        ],
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا نرفض أحياناً رغم جهد واضح؟", "Why reject sometimes despite obvious effort?"),
        answer: L("الجهد لا يحوّل درجة التحام إلى دواء. القرار عن الاستنتاج لا عن عدد الساعات.", "Effort does not turn a docking score into a drug. The decision is about the claim, not the hours."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو طلبتَ FEP بينما السؤال لا يحتاجه؟", "What if you demand FEP when the question does not need it?"),
        consequence: L("تحكيم سيئ. طابق قسوة الطلب مع قوة الادّعاء.", "Bad refereeing. Match the demand’s severity to the claim’s strength."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("اكتب قراراً لجملة: «المركب دواء محتمل لأن Vina أعطى −10».", "Write a decision on: “The compound is a potential drug because Vina gave −10”."),
        solution: L("Reject أو Major: اللغة السريرية، الدرجة ليست ΔG، لا تحقق، لا ADMET، لا تجربة. اطلب إعادة صياغة الادّعاء إلى فرضية هيئة.", "Reject or Major: clinical language, score ≠ ΔG, no validation, no ADMET, no assay. Demand the claim be rewritten as a pose hypothesis."),
      },
    ],
    ["l22-workflow-read", "l23-docking-only"],
  ),
  expand(
    "l22-workflow-read",
    [
      L("قراءة خط أنابيب كسلسلة قرارات لا كصندوق أسود.", "Read a pipeline as a chain of decisions, not as a black box."),
      L("تحديد الخطوة التي تحمل الادّعاء الفعلي.", "Identify which step actually carries the claim."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("كل سهم فرضية", "Every arrow is a hypothesis"),
        body: L(
          "PDB→تحضير→التحام→MD→MM/PBSA→ADMET. إن كان الادّعاء «المعقّد مستقر» فالحمل على MD والنُسخ لا على Vina. إن كان «رتّبنا سلسلة قريبة» فقد يكفي تحام مُتحقَّق. اقرأ الادّعاء أولاً ثم ارجع للسهم.",
          "PDB→prep→dock→MD→MM/PBSA→ADMET. If the claim is “the complex is stable”, the load is on MD and replicas, not Vina. If the claim is “we ranked a close series”, validated docking may suffice. Read the claim first, then the arrow.",
        ),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا لا يُصلح MD المتأخر تحاماً على موقع خطأ؟", "Why does late MD not fix docking at the wrong site?"),
        answer: L("المسار يُعاين حول ما أعطيته. موقع خطأ يُنتج استقراراً محلياً كاذباً أو تفككاً. لا يعيد اكتشاف الجيب السحري دائماً.", "The trajectory samples around what you gave it. A wrong site yields a false local stay or unbinding. It does not reliably rediscover the true pocket."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو أُسقطت خطوة التحقّق «لضيق الوقت»؟", "What if validation was dropped “for time”?"),
        consequence: L("كل ما بعدها مبني على أرض غير مختبرة. الوقت لا يُعفي.", "Everything downstream sits on untested ground. Time does not excuse it."),
      },
      {
        type: "list",
        id: "miss",
        title: L("أغلى الغيابات", "The costliest omissions"),
        items: [
          L("لا بروتنة.", "No protonation."),
          L("لا صندوق/موقع.", "No box/site."),
          L("لا نُسخ.", "No replicas."),
          L("لا إصدار برمجية.", "No software version."),
        ],
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("في خط فيه MD وADMET، أين تضع سؤالك إن ادّعى المؤلف «مرشح سريري»؟", "In a pipeline with MD and ADMET, where do you aim if the author claims a “clinical candidate”?"),
        solution: L("على الفجوة التجريبية والسمية والتخليق. الحساب هنا خلفية لا ترخيصاً سريرياً.", "At the experimental, toxicity, and synthesis gap. Computation is background, not a clinical licence."),
      },
    ],
    ["l13-workflow", "l24-workflow"],
  ),
  expand(
    "l23-docking-only",
    [
      L("تفكيك ادّعاء اكتشاف من درجة تحام وحيدة.", "Take apart a discovery claim from a single docking score."),
      L("كتابة بديل لغوي صادق.", "Write an honest linguistic alternative."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("نمط شائع تعليمي", "A common educational pattern"),
        body: L(
          "بروتين من PDB، هيدروجين، Vina، أفضل درجة، «دواء واعد». هذا النمط يفشل في عشرات النقاط حتى لو كان الشكل جميلاً. الدرس ليس السخرية من المؤلفين بل تدريب عينك.",
          "A PDB protein, hydrogens, Vina, best score, “promising drug”. This pattern fails on dozens of points even if the figure is pretty. The lesson is not mockery; it is training your eye.",
        ),
      },
      {
        type: "list",
        id: "fail",
        title: L("لماذا لا يكفي الالتحام وحده", "Why docking alone is not enough"),
        items: [
          L("الدرجة مرتِّب تقريبي.", "The score is an approximate ranker."),
          L("الهيئة قد تكون خاطئة رغم الدرجة.", "The pose may be wrong despite the score."),
          L("لا مرونة، لا إذابة كاملة، لا إنتروبي ارتباط.", "No full flexibility, solvation, or binding entropy."),
          L("الدواء قرار ADMET وتجربة وتخليق.", "A drug is an ADMET, assay, and synthesis decision."),
        ],
      },
      {
        type: "compare",
        id: "lang",
        left: L("لغة ضعيفة", "Weak language"),
        right: L("لغة قابلة للدفاع", "Defensible language"),
        rows: [
          {
            dim: L("الجملة", "Sentence"),
            a: L("المركب يرتبط بقوة (درجة −9.8).", "The compound binds tightly (score −9.8)."),
            b: L("حصل المركب على درجة Vina مواتية ضمن هذه المكتبة؛ يلزم تحقق هيئة ومقايسة.", "The compound received a favourable Vina score within this library; pose checks and an assay are required."),
          },
        ],
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا تغري الدرجة السالبة؟", "Why is a negative score seductive?"),
        answer: L("لأنها تشبه kcal/mol. الشبه اللغوي ليس اشتقاقاً ثرموديناميكياً.", "Because it looks like kcal/mol. Linguistic resemblance is not a thermodynamic derivation."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو دعمت الدرجة تجربة IC50 نانومولار؟", "What if the score is backed by a nanomolar IC50?"),
        consequence: L("التجربة تحمل الاكتشاف. الالتحام يصبح فرضية هيئة، لا العكس.", "The assay carries the discovery. Docking becomes a pose hypothesis, not the reverse."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("أعد كتابة عنوان مقال تعليمي كاذب إلى عنوان صادق.", "Rewrite a false educational title into an honest one."),
        solution: L("من «اكتشاف مثبط جديد بالكومبيوتر» إلى «فرز افتراضي غير متحقَّق يقترح هيئات لاختبار تجريبي».", "From “computer discovery of a new inhibitor” to “unvalidated virtual screening proposing poses for experimental testing”."),
      },
    ],
    ["l8-not-dg", "l13-priority"],
  ),
  expand(
    "l23-short-md",
    [
      L("رفض تفسير 100 ns بلا نُسخ كبرهان استقرار.", "Refuse to read 100 ns without replicas as proof of stability."),
      L("تعريف ما يمكن أن تقوله نافذة قصيرة.", "Define what a short window is allowed to say."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("القصر ليس عيباً إن صدق اللسان", "Short is not a vice if the tongue is honest"),
        body: L(
          "100 ns قد تكشف تصادماً فورياً أو خروج ليغند أو انهيار إعداد. لا تكفي لإثبات حوض ارتباط أو ΔG. بلا نُسخ لا تعرف إن كان البقاء حظ البذرة.",
          "100 ns can reveal an immediate clash, ligand exit, or a broken setup. It cannot prove a binding basin or ΔG. Without replicas you do not know whether staying was the seed’s luck.",
        ),
      },
      {
        type: "callout",
        id: "w",
        kind: "limitation",
        title: L("RMSD المسطح فخ", "The flat RMSD trap"),
        body: L("قد يعني أنك في بئر ضيق للنموذج، أو أن القيود شديدة، أو أن المعاينة لم تبدأ. انظر L9.", "It may mean a narrow model well, stiff restraints, or sampling that has not started. See L9."),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا تُطلب النُسخ حتى في دراسة قصيرة؟", "Why demand replicas even in a short study?"),
        answer: L("لأن الضجيج الحراري حقيقي. نسخة واحدة نادرة الأحداث تُخفي.", "Because thermal noise is real. One copy hides rare events."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو خرج الليغند في نسخة واحدة من ثلاث؟", "What if the ligand leaves in one of three replicas?"),
        consequence: L("لا تتجاهلها. هي بيانات. ناقش عدم اليقين لا «النسخة السيئة».", "Do not discard it. It is data. Discuss uncertainty, not “the bad replica”."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("اكتب جملة نتائج صادقة لمسار 100 ns بقي فيه الليغند.", "Write an honest results sentence for a 100 ns run where the ligand stayed."),
        solution: L("«في هذه النافذة وتحت هذا النموذج لم يُلاحظ التفكك. لم تُقدَّر ألفة. يلزم نُسخ أطول وسؤال طاقة صريح إن كان الادّعاء ارتباطاً».", "“Unbinding was not observed in this window under this model. Affinity was not estimated. Longer replicas and an explicit energy question are required if the claim is binding.”"),
      },
    ],
    ["l9-convergence", "l9-mistakes"],
  ),
  expand(
    "l23-mmpbsa-abuse",
    [
      L("معرفة متى يكون جدول MM/PBSA مضلّلاً بطبيعته.", "Know when an MM/PBSA table is misleading by construction."),
      L("رفض الدقة الزائفة في الخانات العشرية.", "Reject false precision in decimal places."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("الخطأ أكبر من الفرق", "The error is larger than the gap"),
        body: L(
          "ترتيب كيموتypes متباعدة، أو مسار 20 ns، أو ثلاث خانات عشرية، أو تجاهل الإنتروبي: نمط إساءة شائع. MM/PBSA قد يفيد داخل سلسلة ضيقة بهيئات جيدة ونُسخ، كمؤشر لا كمقياس.",
          "Ranking distant chemotypes, a 20 ns path, three decimal places, or ignored entropy: a common abuse pattern. MM/PBSA can help inside a narrow series with good poses and replicas — as a hint, not a meter.",
        ),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا تزداد الإساءة مع الجداول الجميلة؟", "Why does abuse grow with pretty tables?"),
        answer: L("الجدول يوحي بقياس. القارئ غير المختص يصدق العمود.", "A table implies a measurement. A non-specialist trusts the column."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو كان الفرق 0.4 kcal/mol بثلاث خانات؟", "What if the gap is 0.4 kcal/mol reported to three decimals?"),
        consequence: L("ضجيج. لا تُخلَّق على هذا الفرق. انظر حدود L10.", "Noise. Do not synthesise on that gap. See L10 limits."),
      },
      {
        type: "callout",
        id: "c",
        kind: "warning",
        title: L("لا تحول نهاية المسار إلى مقايسة", "Do not turn an end-state estimate into an assay"),
        body: L("إن أردت فرقاً ذرّياً موثوقاً ففكّر في FEP/TI على سؤال ضيق، أو في تجربة.", "If you want a trustworthy atomic difference, consider FEP/TI on a narrow question, or an experiment."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("حدّد ثلاثة شروط تجعلك ترفض جدول MM/PBSA كمراجع.", "Name three conditions under which you reject an MM/PBSA table as a referee."),
        solution: L("كيمياء متباعدة، لا نُسخ، خانات أدق من التشتت، ادّعاء ΔG تجريبي، لا ذكر لإنتروبي/PB.", "Distant chemistry, no replicas, decimals finer than scatter, a claim of experimental ΔG, no entropy/PB statement."),
      },
    ],
    ["l10-limits", "l10-mmpbsa"],
  ),
  expand(
    "l23-plots",
    [
      L("اكتشاف محور مبتور ومتوسط بلا تشتت.", "Spot a cropped axis and a mean without spread."),
      L("اقتراح شكل بديل نزيه.", "Propose an honest alternative figure."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("الشكل يجادل", "The figure argues"),
        body: L(
          "محور Y يبدأ من 2.1 لا من 0 لـ RMSD قد يكون مقبولاً إن صُرّح، ومضلّلاً إن أخفى أن الحركة ضئيلة. متوسط بلا ظل نُسخ يخفي الخلاف. ألوان لا تُقرأ بعمى الألوان تفقد قارئاً.",
          "A y-axis from 2.1 not 0 for RMSD can be acceptable if declared, misleading if it hides that motion is tiny. A mean without replica shade hides disagreement. Colours unreadable in colour-blindness lose a reader.",
        ),
      },
      {
        type: "list",
        id: "red",
        title: L("إشارات حمراء", "Red flags"),
        items: [
          L("عنوان «يثبت الاستقرار».", "A title that “proves stability”."),
          L("منحنى واحد لثلاث نُسخ دون الإفصاح.", "One curve for three replicas without disclosure."),
          L("حرارة لونية بلا شريط قيم.", "A heatmap with no value bar."),
        ],
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا يُعد الشكل جزءاً من الأخلاق؟", "Why is a figure part of ethics?"),
        answer: L("لأنه يُمرّر ادّعاءاً أسرع من النص. انظر درس الأخلاق.", "Because it smuggles a claim faster than prose. See the ethics module."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو طلب المحرر «شكلاً أوضح» بمعنى أكثر درامية؟", "What if the editor wants a “clearer” meaning more dramatic figure?"),
        consequence: L("الوضوح ≠ المبالغة. أضف تشتتاً ووحدة لا مسرحاً.", "Clarity ≠ exaggeration. Add spread and a unit, not theatre."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("صف تعديلاً واحداً يجعل شكل RMSD أصدق.", "Describe one change that makes an RMSD figure more honest."),
        solution: L("ارسم النُسخ شفافة والمحور من صفر أو بمبرر مكتوب، ووحدة ns ظاهرة.", "Plot replicas transparently, axis from zero or with a written rationale, and ns visible."),
      },
    ],
    ["l18-figures", "l17-plots"],
  ),
  expand(
    "l24-question",
    [
      L("تحويل اهتمام مرضي إلى فرضية قابلة للتكذيب.", "Turn a disease interest into a falsifiable hypothesis."),
      L("رفض الدراسة التي تبدأ بالبرمجية لا بالسؤال.", "Reject a study that starts with software rather than a question."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("السؤال قبل المحرّك", "The question before the engine"),
        body: L(
          "«أريد أن أرسّم على الكيناز» ليس سؤالاً. «هل تحافظ سلسلة أميدات على H-bond المفصلة في 1IEP بعد 3 نُسخ 200 ns مقارنة بمركب يخرج في التحكم السلبي؟» سؤال. يحدّد البنية، والضابط، ومعيار الفشل.",
          "“I want to dock a kinase” is not a question. “Do amide analogues keep the hinge H-bond in 1IEP across 3×200 ns relative to a negative control that unbinds?” is a question. It sets structure, control, and failure.",
        ),
      },
      {
        type: "steps",
        id: "st",
        title: L("من المرض إلى فرضية", "From disease to hypothesis"),
        items: [
          { title: L("الهدف", "Target"), body: L("لماذا هذا البروتين؟ دليل وراثي أو دوائي قائم؟", "Why this protein? Existing genetic or drug evidence?") },
          { title: L("الجيب", "Pocket"), body: L("بلورة هولو أم نموذج؟", "Holo crystal or a model?") },
          { title: L("الليغند", "Ligand"), body: L("سلسلة قريبة أم مكتبات واسعة؟", "Close analogues or a wide library?") },
          { title: L("معيار الفشل", "Failure criterion"), body: L("ما الذي يجعلك تقول: الفرضية سقطت؟", "What would make you say the hypothesis fell?") },
        ],
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا يقتل الضابط الدراسة أو ينقذها؟", "Why does a control kill or save a study?"),
        answer: L("بلا ضابط كل بقاء يبدو نجاحاً. الضابط السلبي يعلّمك معدل الكذب.", "Without a control every stay looks like success. A negative control teaches the false-positive rate."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو لم توجد بنية هولو؟", "What if no holo structure exists?"),
        consequence: L("صغّر الادّعاء: فرضية موقع، أو ابدأ فارماكوفور/QSAR، أو احصل على بنية. لا تُخفِ الغياب.", "Shrink the claim: a site hypothesis, or start with pharmacophore/QSAR, or obtain a structure. Do not hide the gap."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("اكتب فرضية جملة واحدة لـ EGFR مع معيار فشل.", "Write a one-sentence EGFR hypothesis with a failure criterion."),
        solution: L("«نفرض أن أنالوج X يحافظ على H-bond المفصلة في 1M17؛ تسقط الفرضية إن غاب التفاعل في ≥2 من 3 نُسخ أو إن فشل إعادة التحام الليغند البلوري».", "“We hypothesise analogue X keeps the hinge H-bond in 1M17; it fails if the contact is absent in ≥2 of 3 replicas or if the crystal ligand fails redocking.”"),
      },
    ],
    ["l26-hypothesis", "l24-workflow"],
  ),
  expand(
    "l24-workflow",
    [
      L("بناء خط أنابيب كل صندوق فيه سبب.", "Build a pipeline in which every box has a reason."),
      L("حذف الخطوات التي لا تخدم الفرضية.", "Delete steps that do not serve the hypothesis."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("لا تُشغّل طقس المختبر", "Do not run the lab ritual"),
        body: L(
          "ليس لزاماً أن كل مشروع ينتهي بـ MM/PBSA. إن كان السؤال هيئة بلورية مقابل أنالوج، قد يكفي تحام متحقَّق وتحليل تفاعل. إن كان فرق ميثيل في سلسلة ضيقة، فكّر FEP لا فرز مليون مركب. ابنِ المعالج في هذه الأكاديمية على السؤال لا على القائمة الكاملة.",
          "Not every project must end in MM/PBSA. If the question is crystal pose versus analogue, validated docking plus interaction analysis may suffice. If it is a methyl scan in a close series, think FEP, not a million-compound screen. Build the wizard on the question, not on the full menu.",
        ),
      },
      {
        type: "steps",
        id: "pipe",
        title: L("صناديق شائعة — اختيارية", "Common boxes — optional"),
        items: [
          { title: L("اختيار الهدف والبنية", "Target and structure"), body: L("جودة PDB أولاً.", "PDB quality first.") },
          { title: L("تحضير", "Prep"), body: L("برتنة وماء ومعدن.", "Protonation, water, metal.") },
          { title: L("تحقق التحام إن استُخدم", "Docking validation if used"), body: L("إعادة تحام قبل المكتبة.", "Redock before the library.") },
          { title: L("MD إن كان السؤال ديناميكياً", "MD if the question is dynamic"), body: L("نُسخ ومعيار.", "Replicas and a criterion.") },
          { title: L("طاقة إن كان السؤال فرقاً دقيقاً", "Energy if the question is a fine gap"), body: L("لا MM/PBSA افتراضياً.", "Not MM/PBSA by default.") },
          { title: L("ADMET إن كان الترتيب للتخليق", "ADMET if ranking for synthesis"), body: L("تنبؤ بحذر.", "Predict cautiously.") },
        ],
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا حذف خطوة شجاعة؟", "Why is deleting a step brave?"),
        answer: L("لأنها تُظهر أنك تفهم الغرض لا الطقوس. المناقشة تحترم الاقتصاد المنهجي.", "Because it shows you understand purpose, not ritual. A viva respects methodological economy."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو أضفتَ كل الخطوات «ليبدو البحث أقوى»؟", "What if you add every step “to look stronger”?"),
        consequence: L("تُراكم افتراضات وتضعف السلسلة. القوة من ملاءمة الطريقة للسؤال.", "You stack assumptions and weaken the chain. Strength is fit of method to question."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("احذف خطوة من خط كامل لمشروع فارماكوفور بلا بنية، وبرّر.", "Delete one step from a full pipeline for a structure-free pharmacophore project, and justify."),
        solution: L("احذف MD/MM-PBSA على معقد متخيَّل إن لم توجد هيئة موثوقة. الفارماكوفور لا يكتسب صدقاً من مسار على هدف خطأ.", "Drop MD/MM-PBSA on an imagined complex if no trustworthy pose exists. A pharmacophore does not gain truth from a trajectory on the wrong target."),
      },
    ],
    ["l13-workflow", "l26-choices"],
  ),
  expand(
    "l25-ensemble",
    [
      L("تفسير التحام المجموعة كاعتراف بمرونة المستقبل.", "Explain ensemble docking as admitting receptor flexibility."),
      L("اختيار هيئات من بلورات أو عناقيد MD لا من ذوق فني.", "Choose poses from crystals or MD clusters, not from artistic taste."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("هيئة واحدة كذبة مريحة", "One receptor pose is a convenient lie"),
        body: L(
          "الجيب يتنفس. التحام جامد في بلورة واحدة يفوت DFG-out أو حركة P-loop. ensemble: عدة مستقبلات (بلورات، عناقيد MD) ثم التحام، مع الحذر من inflating false positives. وثّق كيف اختيرت الهيئات.",
          "The pocket breathes. Rigid docking in one crystal misses DFG-out or P-loop motion. Ensemble: several receptors (crystals, MD clusters) then docking, with care not to inflate false positives. Document how poses were chosen.",
        ),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا لا نأخذ مئة هيئة MD كلها؟", "Why not take a hundred MD frames?"),
        answer: L("التكرار الهندسي يكرّر الخطأ. عنقود ثم ممثل.", "Geometric redundancy repeats error. Cluster, then a representative."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو كانت كل البلورات في نفس الحوض؟", "What if every crystal sits in the same basin?"),
        consequence: L("المجموعة وهمية. ابحث عن حالة activation أخرى أو قل إن المرونة غير ممثَّلة.", "The ensemble is fake. Seek another activation state or admit flexibility is unrepresented."),
      },
      {
        type: "callout",
        id: "c",
        kind: "limitation",
        title: L("المزيد من الجيوب ≠ المزيد من الحقيقة", "More pockets ≠ more truth"),
        body: L("كل هيئة فرصة لدرجة مواتية بالصدفة. اضبط التحقق (ROC) على المجموعة لا على هيئة واحدة بعد انتقاء.", "Each pose is a chance for a lucky score. Validate ROC on the ensemble, not on one pose after selection."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("اقترح مصدرين لهيئات ensemble لـ Abl.", "Propose two ensemble sources for Abl."),
        solution: L("بلورات DFG-in/out عامة (مثل 1IEP مقابل بنى out معروفة في العائلة) وعناقيد من MD قصير على هولو بعد تحقق. تحقّق من الرموز قبل الاستشهاد.", "Public DFG-in/out crystals (e.g. 1IEP versus known family out structures) and clusters from short MD on a holo after validation. Verify codes before citing."),
      },
    ],
    ["l8-failures", "l9-pca", "l25-ifd"],
  ),
  expand(
    "l25-ifd",
    [
      L("وصف التحام التوافق المستحث كتحسين محلي لا كسحر.", "Describe induced-fit docking as local refinement, not magic."),
      L("معرفة خطر تكيّف الجيب على ليغند خاطئ.", "Know the risk of fitting the pocket to the wrong ligand."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("مرونة موضعية", "Local flexibility"),
        body: L(
          "IFD يسمح لبقايا الجيب أن تتحرك أثناء البحث. مفيد لسلسلة جانبية تسدّ. خطر: الجيب يتوسّع ليُرضي أي ليغند (overfitting هندسي). قارن مع بلورة ثانية أو MD.",
          "IFD lets pocket side chains move during search. Useful when a side chain blocks. Risk: the pocket expands to please any ligand (geometric overfitting). Compare with a second crystal or MD.",
        ),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا لا يستبدل IFD الديناميكا؟", "Why does IFD not replace MD?"),
        answer: L("لأنه تحسين لطاقة وضعية تقريبية، لا معاينة حرارية للمذيب والإنتروبي.", "Because it is an optimisation of an approximate pose energy, not thermal sampling of solvent and entropy."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو حرّكت العمود الفقري كله بلا قيود؟", "What if you move the whole backbone unconstrained?"),
        consequence: L("قد تُدمّر الطية. IFD الناجح محدود الجيب ومُقيَّد.", "You may wreck the fold. Successful IFD is pocket-limited and restrained."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("متى تفضّل ensemble docking على IFD؟", "When do you prefer ensemble docking over IFD?"),
        solution: L("عندما تتوفر بلورات لحالات متميزة (حلقة مفتوحة/مغلقة). IFD حين تكون الحركة متوقعة وموضعية لسلسلة جانبية واحدة.", "When crystals of distinct states exist (open/closed loop). IFD when motion is expected and local to one side chain."),
      },
    ],
    ["l25-ensemble", "l8-search"],
  ),
  expand(
    "l25-covalent",
    [
      L("فصل مسألة التفاعل الكيميائي عن مسألة الهيئة.", "Separate the chemical reaction from the pose problem."),
      L("عدم استخدام تحام غير تساهمي كدليل على رابطة تساهمية.", "Do not use noncovalent docking as evidence of a covalent bond."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("رابطتان في مشكلة واحدة", "Two links in one problem"),
        body: L(
          "المثبّط التساهمي يحتاج: (1) هندسة تقارب للبقايا النكليوفيلية، (2) كيمياء تفاعل (حرباء، أكريلأميد، إلخ) بطاقة انتقال حالة. برامج covalent docking تفرض هندسة الرابطة. MM الكلاسيكي لا يكسر/يكوّن الروابط. QM/MM أو تجربة حركية للحرباء.",
          "A covalent inhibitor needs: (1) approach geometry to the nucleophilic residue, (2) warhead chemistry with a transition-state energy. Covalent docking programs impose bond geometry. Classical MM does not form/break bonds. QM/MM or a kinetic assay for the warhead.",
        ),
      },
      {
        type: "callout",
        id: "w",
        kind: "warning",
        title: L("درجة Vina ليست k_inact/K_I", "A Vina score is not k_inact/K_I"),
        body: L("الحركية التساهمية مقايسة. لا تستبدلها بشكل رابطة في PyMOL.", "Covalent kinetics is an assay. Do not replace it with a bond drawn in PyMOL."),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا نُصرّ على فحص الزاوية الهجومية؟", "Why insist on inspecting the attack angle?"),
        answer: L("لأن حرباء في جيب «جيد» قد تكون هندسياً عاجزة عن التفاعل.", "Because a warhead in a “good” pocket may be geometrically unable to react."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو كان Cys الهدف مؤكسداً في البلورة؟", "What if the target Cys is oxidised in the crystal?"),
        consequence: L("التحام تساهمي على تلك الإحداثيات قد يكون على حالة غير فيزيولوجية. افحص التعديلات.", "Covalent docking on those coordinates may target a non-physiological state. Inspect modifications."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("اذكر حدّين يجب ذكرهما في Methods لتحام تساهمي.", "Name two limits that belong in Methods for covalent docking."),
        solution: L("أن النموذج يفرض الرابطة لا يشتق حركيتها؛ وأن البروتنة/حالة الأكسدة للنيوكليوفيل افتراض.", "The model imposes the bond rather than deriving its kinetics; nucleophile protonation/oxidation state is an assumption."),
      },
    ],
    ["l7-qmmm", "l8-failures"],
  ),
  expand(
    "l25-waters",
    [
      L("اعتبار الماء المحبوس جزءاً من الفارماكوفور أحياناً.", "Treat a trapped water as part of the pharmacophore sometimes."),
      L("استخدام بصمات التفاعل لمقارنة هيئات لا لإثبات ΔG.", "Use interaction fingerprints to compare poses, not to prove ΔG."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("الماء ليس ديكوراً", "Water is not décor"),
        body: L(
          "ماء جسري في كينازات أو GPCRs قد يكون الشريك الحقيقي. حذفه يفتح فراغاً يملؤه الليغند كذباً، أو يُفقد جسراً. شبكات الماء من بلورات متعددة أو من MD (occupancy). بصمات PLIF/IFP ترتّب هيئات بتشابه تفاعل، لا بألفة.",
          "A bridging water in kinases or GPCRs may be the real partner. Deleting it opens a cavity the ligand will falsely fill, or loses a bridge. Water networks from multiple crystals or from MD occupancy. PLIF/IFP fingerprints rank pose similarity of contacts, not affinity.",
        ),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا قد يفوز ليغند يحتفظ بالماء على ليغند يطرده؟", "Why might a water-keeping ligand beat a water-displacing one?"),
        answer: L("طرد ماء سعيد (إنتروبي منخفضة، H-bonds جيدة) مكلف إنثالبياً. الطرد يربح فقط إن عوّض الليغند كل التفاعلات وأكثر.", "Displacing a happy water (low entropy, good H-bonds) is enthalpically costly. Displacement wins only if the ligand replaces the contacts and more."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو أبقيتَ كل مياه البلورة في الالتحام؟", "What if you keep every crystal water during docking?"),
        consequence: L("قد تسدّ الجيب بمياه غير مستقرة في المحلول. اختر بالحفْظ العائلي أو بالطاقة.", "You may block the pocket with waters unstable in solution. Select by family conservation or energy."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("كيف تقرر إن كان ماء 1IEP (إن وُجد قرب الليغند) يُحفظ؟", "How do you decide whether a 1IEP water near the ligand is kept?"),
        solution: L("انظر بلورات العائلة، B-factor، وعدد H-bonds. إن كان محفوظاً ومنخفض B فاحفظه أو عالجه كشبكة. لا تقرر من صورة واحدة.", "Inspect family crystals, B-factor, and H-bond count. If conserved and low-B, keep it or treat it as a network. Do not decide from one picture."),
      },
    ],
    ["l4-waters", "l2-solvation"],
  ),
  expand(
    "l25-msm",
    [
      L("وصف MSM كحركية من معاينة، بشروط ماركوف.", "Describe MSMs as kinetics from sampling, under Markov assumptions."),
      L("عدم ادعاء زمن إقامة من مسار واحد قصير.", "Do not claim residence time from one short trajectory."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("حالات وانتقالات", "States and transitions"),
        body: L(
          "نموذج ماركوف يقسّم الهيئات إلى حالات، ويقدّر مصفوفة انتقال إن كانت الذاكرة قصيرة (lag time مناسب، اختبار Chapman–Kolmogorov). يحتاج معاينة كثيرة للأحداث النادرة. ليس زرًا في VMD.",
          "A Markov model partitions conformations into states and estimates a transition matrix if memory is short (appropriate lag time, Chapman–Kolmogorov test). Rare events need heavy sampling. It is not a VMD button.",
        ),
      },
      {
        type: "callout",
        id: "w",
        kind: "limitation",
        title: L("MSM على بيانات ناقصة يُجمّل الجهل", "An MSM on thin data cosmetics ignorance"),
        body: L("إن لم تُرَ الانتقالات، المصفوفة خيال. ابدأ بسؤال: هل شُوهدت العودة بين الحوضين؟", "If transitions were not seen, the matrix is fiction. Start with: were recrossings between basins observed?"),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا نختبر فرضية ماركوف؟", "Why test the Markov assumption?"),
        answer: L("لأن الذاكرة في البروتين حقيقية على أزمنة قصيرة. lag أطول يُضعف الذاكرة الظاهرة ويزيد الحاجة للبيانات.", "Because proteins have memory at short times. A longer lag weakens apparent memory and demands more data."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو ادّعيتَ ميكروثانية إقامة من 100 ns؟", "What if you claim microsecond residence from 100 ns?"),
        consequence: L("خارج نطاق المعاينة. هذا تخمين إحصائي غير مدعوم.", "Outside the sampling span. That is an unsupported statistical guess."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("اذكر اختبارين قبل نشر أزمنة MSM.", "Name two tests before publishing MSM timescales."),
        solution: L("implied timescales مقابل lag، واختبار CK. بلاها لا تُنشر أزمنة كحقائق.", "Implied timescales versus lag, and a CK test. Without them, do not publish times as facts."),
      },
    ],
    ["l9-pca", "l9-convergence"],
  ),
  expand(
    "l25-alchemical",
    [
      L("متى يستحق FEP/TI أسبوع عنقود.", "When FEP/TI is worth a week of cluster time."),
      L("ضيق السؤال: ذرة أو مجموعة صغيرة داخل سلسلة.", "Keep the question narrow: an atom or small group inside a series."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("تكلفة الصدق", "The cost of honesty"),
        body: L(
          "التحويلات الكيميائية التبديلية (FEP/TI) هي الأقرب لـ ΔΔG نسبي داخل سلسلة متشابهة إذا اكتملت النوافذ وتداخل λ وتكررت النُسخ. لا تُستخدم لفرز مليون مركب ولا لكيموتypes بعيدة. الأسبوع يستحق حين يقرر التخليق فرقاً ذرياً.",
          "Alchemical FEP/TI is the closest to relative ΔΔG inside a similar series if windows, λ overlap, and replicas are complete. Not for a million compounds or distant chemotypes. A week is worth it when synthesis will act on an atomic difference.",
        ),
      },
      {
        type: "compare",
        id: "vs",
        left: L("MM/PBSA", "MM/PBSA"),
        right: L("FEP نسبي", "Relative FEP"),
        rows: [
          { dim: L("السؤال", "Question"), a: L("إشارة خشنة داخل سلسلة ضيقة", "A rough signal in a narrow series"), b: L("فرق ذرة/مجموعة بموارد كافية", "An atom/group difference with enough resource") },
          { dim: L("التكلفة", "Cost"), a: L("مسارات نهاية الحالة", "End-state trajectories"), b: L("نوافذ λ ونُسخ", "λ windows and replicas") },
        ],
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا التشابه الكيميائي شرط؟", "Why is chemical similarity a condition?"),
        answer: L("لأن المسار التخيلي يقصر، والتداخل يتحسن، والتحضير يبقى صالحاً.", "Because the dummy path is shorter, overlap improves, and preparation stays valid."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو لم تتداخل نوافذ λ؟", "What if λ windows do not overlap?"),
        consequence: L("ΔG بلا معنى عملي. زد نوافذ أو غيّر الجدول. لا تنشر الرقم.", "ΔG is not practically meaningful. Add windows or change the schedule. Do not publish the number."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("هل تشغّل FEP لترتيب مكتبات متنوعة؟ لماذا؟", "Do you run FEP to rank diverse libraries? Why?"),
        solution: L("لا كأداة فرز أولى. التكلفة والتحولات البعيدة تكسر الافتراضات. استخدمها بعد ضيق السلسلة.", "Not as a first filter. Cost and distant transforms break assumptions. Use after the series narrows."),
      },
    ],
    ["l10-fep", "l10-choose"],
  ),
  expand(
    "l26-hypothesis",
    [
      L("كتابة فرضية تربط هدفاً ودليلاً بنيوياً وادّعاءاً محدوداً.", "Write a hypothesis that ties a target, structural evidence, and a limited claim."),
      L("تبرير اختيار البروتين بعلم لا بشهرة PDB.", "Justify the protein with science, not PDB fame."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("لماذا هذا البروتين؟", "Why this protein?"),
        body: L(
          "الإجابة المقبولة: دليل بيولوجي (وراثة، دواء قائم، مسار)، وبنية تسمح بسؤال فيزيائي، وليغند مرجعي إن أمكن. الإجابة المرفوضة: «لأن الملف موجود وسهل». الشهرة التعليمية لـ 1IEP لا تجعل كل مشروع Abl.",
          "Acceptable: biological evidence (genetics, an existing drug, a pathway), a structure that allows a physical question, and a reference ligand if possible. Unacceptable: “because the file exists and is easy”. The teaching fame of 1IEP does not make every project Abl.",
        ),
      },
      {
        type: "list",
        id: "h",
        title: L("عناصر الفرضية", "Hypothesis parts"),
        items: [
          L("فاعل: أي ليغند/سلسلة.", "Actor: which ligand/series."),
          L("هدف: أي موقع/هيئة.", "Target: which site/pose."),
          L("آلية: أي تفاعل فيزيائي.", "Mechanism: which physical contact."),
          L("قياس: ما الذي سيُعد نجاحاً أو فشلاً.", "Measure: what will count as success or failure."),
        ],
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا نكتب الفرضية قبل اختيار Vina أو GROMACS؟", "Why write the hypothesis before choosing Vina or GROMACS?"),
        answer: L("حتى لا يختار الأداةُ السؤالَ. الأداة خادم.", "So the tool does not choose the question. The tool is a servant."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو تغيّرت الفرضية بعد أن رأيت الدرجة؟", "What if the hypothesis changes after you see the score?"),
        consequence: L("HARKing. صرّح بالاستكشاف، ولا تقدّم الرقم كاختبار فرضية مسبقة.", "HARKing. Label it as exploration; do not present the number as a pre-registered test."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("اكتب فرضية سيئة ثم أصلحها في سطرين.", "Write a bad hypothesis then repair it in two lines."),
        solution: L("سيئة: «سنكتشف دواء كيناز». أصلَح: «نختبر ما إذا كانت مجموعة الميثيل في الموضع X تزيد بقاء H-bond المفصلة في 1M17 عبر 3 نُسخ؛ نسقط الفرضية إن لم يزدد occupancy».", "Bad: “We will discover a kinase drug.” Repair: “We test whether a methyl at position X increases hinge H-bond survival in 1M17 across 3 replicas; the hypothesis falls if occupancy does not increase.”"),
      },
    ],
    ["l24-question", "l26-falsify"],
  ),
  expand(
    "l26-choices",
    [
      L("تبرير الحقل والمحرّك والماء كقرارات فيزيائية.", "Justify force field, engine, and water as physics decisions."),
      L("التحضير لإجابة المناقشة: لماذا ليس البديل؟", "Prepare the viva answer: why not the alternative?"),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("كل اختيار سؤال", "Every choice is a question"),
        body: L(
          "لماذا Amber لا CHARMM؟ لماذا TIP3P لا TIP4P؟ لماذا Vina لا Gnina؟ الإجابة المقبولة تربط: توافق الحقل مع الليغند، أدبيات العائلة، وما الذي لن تستطيع قياسه. «لأن المختبر يستخدمه» بداية ناقصة ما لم تُظهر أنك تعرف الثمن.",
          "Why Amber not CHARMM? Why TIP3P not TIP4P? Why Vina not Gnina? An acceptable answer ties ligand compatibility, family literature, and what you will not be able to measure. “Because the lab uses it” is incomplete unless you know the price.",
        ),
      },
      {
        type: "list",
        id: "viva",
        title: L("أسئلة تُحضَّر", "Questions to prepare"),
        items: [
          L("لماذا هذا الحقل مع هذا الليغند؟", "Why this FF with this ligand?"),
          L("لماذا هذا الطول الزمني؟", "Why this duration?"),
          L("لماذا هذه النسخة من البرمجية؟", "Why this software version?"),
          L("ما الذي سيُفنّد ادّعاءك دون تجربة؟", "What would falsify you without a wet assay?"),
        ],
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا «البديل» أهم من «اختيارك» في المناقشة؟", "Why is “the alternative” more important than “your choice” in the viva?"),
        answer: L("لأنه يثبت أنك اخترت لا أنك وُلدت داخل قائمة أوامر.", "Because it proves you chose, rather than being born inside a command list."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو لم تعرف لماذا TIP3P؟", "What if you do not know why TIP3P?"),
        consequence: L("قل ذلك وتعلّم قبل المناقشة. انظر L9. الصمت أضعف من «رخيص وشائع مع Amber».", "Say so and learn before the viva. See L9. Silence is weaker than “cheap and common with Amber”."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("برّر TIP3P في جملتين دون ادعاء أنه أدق ماء.", "Justify TIP3P in two sentences without claiming it is the most accurate water."),
        solution: L("متوافق مع كثير من حقول Amber/CHARMM المعدَّة معه؛ رخيص للمعاينة. أدق؟ ليس بالضرورة — TIP4P-class قد يحسن بعض الخصائص على حساب التكلفة. الاختيار اتساق وتكلفة لا قداسة.", "Compatible with many Amber/CHARMM parametrisations built with it; cheap to sample. More accurate? Not necessarily — TIP4P-class may improve some properties at extra cost. The choice is consistency and cost, not holiness."),
      },
    ],
    ["l6-families", "l9-pbc", "l26-falsify"],
  ),
  expand(
    "l26-falsify",
    [
      L("كتابة معيار فشل قبل تشغيل الحساب.", "Write a failure criterion before launching the calculation."),
      L("قبول أن الدراسة بلا مُفنِّد ليست علماً.", "Accept that a study with no falsifier is not science."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: L("المُفنِّد هو العمود", "The falsifier is the spine"),
        body: L(
          "أمثلة: «إن فشل إعادة التحام الليغند البلوري فوق 2 Å في أفضل هيئة نُوقف الفرز». «إن خرج الليغند في ≥2 من 3 نُسخ نسقط فرضية البقاء». «إن لم يتداخل λ لا ننشر ΔΔG». الحساب بلا هذه الجمل رواية.",
          "Examples: “If crystal-ligand redocking fails above 2 Å on the top pose, we stop screening.” “If the ligand leaves in ≥2 of 3 replicas, the stay hypothesis falls.” “If λ windows do not overlap, we do not publish ΔΔG.” Computation without these sentences is a story.",
        ),
      },
      {
        type: "callout",
        id: "c",
        kind: "fact",
        title: L("مبدأ الأكاديمية", "Academy principle"),
        body: L(
          "الكيمياء الحاسوبية لا تُنتج حقيقة. تُنتج نماذج وتوقعات وفرضيات تعتمد موثوقيتها على الافتراضات والتحقّق والمعاينة والدليل التجريبي.",
          "Computational chemistry does not produce truth. It produces models, predictions, and hypotheses whose reliability depends on assumptions, validation, sampling, and experimental evidence.",
        ),
      },
      {
        type: "why",
        id: "y",
        question: L("لماذا يُكتب المُفنِّد قبل النتائج؟", "Why write the falsifier before results?"),
        answer: L("حتى لا تُحرَّك العتبة بعد رؤية الرقم. هذا جوهر HARKing وp-hacking البصري.", "So the threshold is not moved after the number is seen. That is the core of HARKing and visual p-hacking."),
      },
      {
        type: "whatif",
        id: "i",
        scenario: L("ماذا لو فشلت الفرضية؟ هل الدراسة فشلت؟", "What if the hypothesis fails? Did the study fail?"),
        consequence: L("لا. النتيجة السلبية الصادقة معرفة. إخفاؤها هو الفشل الأخلاقي.", "No. An honest negative is knowledge. Hiding it is the ethical failure."),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L("اكتب مُفنِّداً لمشروع فرز Vina على 1IEP.", "Write a falsifier for a Vina screen on 1IEP."),
        solution: L("«نتوقف إن لم نُعد تحام STI ضمن 2 Å في المفصلة، أو إن لم نحصل على AUC أعلى من 0.6 على مجموعة تحقق معلنة قبل الفرز».", "“We stop if we cannot redock STI within 2 Å at the hinge, or if AUC on a declared validation set does not exceed 0.6 before screening.”"),
      },
    ],
    ["l26-hypothesis", "l21-checklist", "l23-docking-only"],
  ),
];
