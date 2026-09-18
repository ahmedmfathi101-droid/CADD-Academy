import type { Lesson } from "@/lib/academy/types";
import { expand, L } from "@/lib/academy/content/helpers";

export const lessons: Lesson[] = [
  expand(
    "l11-site",
    [
      L("تمييز الجيب orthosteric عن المواقع allosteric وعن حفر تبلور غير وظيفية.", "Distinguish the orthosteric pocket from allosteric sites and from crystallization artifacts."),
      L("وصف الجيب بخصائص فيزيائية: حجم، شكل، electrostatics، hydrophobicity، ومرونة.", "Describe a pocket by physical properties: volume, shape, electrostatics, hydrophobicity, and flexibility."),
      L("ربط جودة البنية (resolution، B-factor، occupancy) بثقة تحليل الموقع.", "Tie structure quality (resolution, B-factor, occupancy) to confidence in the site analysis."),
    ],
    [
      {
        type: "prose",
        id: "l11-site-intro",
        title: L("الجيب ليس حفرة هندسية", "A pocket is not a geometric hole"),
        body: L(
          "تحليل موقع الارتباط binding site هو قرار كيميائي قبل أي docking. الحجم والشكل يحدّدان ما يمكن أن يُركَّب، أما electrostatics وhydrophobicity فيحدّدان ما يجب أن يُركَّب. جيب ATP في kinase غني بمانحات ومقبلات hydrogen bond ومحاط بسطح كاره للماء؛ جيب allosteric قد يكون أضحَل وأقل قطبية. الخلط بينهما يُنتج حملة تصميم على هدف خاطئ.",
          "Binding-site analysis is a chemical decision before any docking. Volume and shape constrain what can be built; electrostatics and hydrophobicity constrain what should be built. A kinase ATP site is rich in hydrogen-bond donors/acceptors and lined by hydrophobic surface; an allosteric site may be shallower and less polar. Confusing the two launches a design campaign at the wrong target.",
        ),
      },
      {
        type: "list",
        id: "l11-site-features",
        title: L("ما يُقاس في الجيب", "What you actually measure in a pocket"),
        items: [
          L("الحجم والشكل: هل يتسع لـ fragment أم لـ lead شبيه الدواء؟", "Volume and shape: fragment-sized or drug-like lead-sized?"),
          L("توزّع الشحنة: بقايا Asp/Glu مقابل Lys/Arg وdipole الهياكل العطرية.", "Charge distribution: Asp/Glu versus Lys/Arg and aromatic dipoles."),
          L("الماء البلوري: ماء محبوس قد يكون جزءاً من pharmacophore.", "Crystal waters: a trapped water may be part of the pharmacophore."),
          L("المعادن والعوامل المرافقة cofactors: حذفها قد يحذف الفيزياء.", "Metals and cofactors: deleting them can delete the physics."),
          L("المرونة: عُرى بـ B-factor مرتفع ليست جداراً صلباً.", "Flexibility: high-B-factor loops are not rigid walls."),
        ],
      },
      {
        type: "callout",
        id: "l11-site-warn",
        kind: "warning",
        title: L("تنبيه: جيب متنبَّأ ليس جيب ارتباط", "Warning: a predicted cavity is not a binding site"),
        body: L(
          "خوارزميات كشف الجيوب (مفهوم fpocket / SiteMap وما شابه) تجد تجاويف هندسية. ليست كل تجويف يرتبط ليغنداً، وليست كل بنية apo أو نموذج AlphaFold تعرض الجيب في هيئة قابلة للارتباط. التحقق يكون بليغند معروف، أو بكيمياء جيوب العائلة، أو بتجربة — لا برقم حجم الجيب وحده.",
          "Pocket-detection algorithms (fpocket / SiteMap-class ideas) find geometric cavities. Not every cavity binds a ligand, and not every apo structure or AlphaFold model presents a bindable conformation. Validation is a known ligand, family pocket chemistry, or experiment — not pocket volume alone.",
        ),
      },
      {
        type: "steps",
        id: "l11-site-protocol",
        title: L("بروتوكول قراءة الموقع قبل التصميم", "A protocol for reading the site before design"),
        items: [
          {
            title: L("افحص الـ PDB", "Inspect the PDB"),
            body: L("resolution، بقايا ناقصة، altlocs، روابط غير قياسية، وما إذا كان الليجند co-crystal أم modeled.", "Resolution, missing residues, altlocs, nonstandard links, and whether the ligand is co-crystallized or modeled."),
          },
          {
            title: L("حدّد البقايا التي تلمس الليجند", "Name the residues that touch the ligand"),
            body: L("لا تكتفِ بصورة جميلة. اكتب قائمة تفاعلات: H-bond، salt bridge، π-stacking، تماس كاره للماء.", "Do not stop at a pretty picture. Write the interaction list: H-bond, salt bridge, π-stacking, hydrophobic contact."),
          },
          {
            title: L("اسأل عن الماء والمعدن", "Ask about water and metal"),
            body: L("أي ماء محفوظ عبر بنى العائلة؟ أي أيون منسّق؟ حذفه قرار علمي يُوثَّق.", "Which waters are conserved across the family? Which ion is coordinated? Deleting it is a documented scientific decision."),
          },
          {
            title: L("قارن مع بنى أخرى", "Compare other structures"),
            body: L("هيئة DFG-in/out، حركة P-loop، أو انزياح حلزون في GPCR تغيّر شكل الجيب أكثر من أي scoring function.", "DFG-in/out, P-loop motion, or a GPCR helix shift change the pocket more than any scoring function."),
          },
        ],
      },
      {
        type: "why",
        id: "l11-site-why",
        question: L("لماذا نحلّل الجيب قبل أن نفتح برنامج الالتحام؟", "Why analyse the pocket before opening a docking program?"),
        answer: L(
          "لأن خوارزمية البحث ستملأ أي صندوق تُعطيه إياه. إذا كان الصندوق على سطح غير وظيفي، أو أغفل معدناً، أو تجاهل ماءً جسرياً، فستحصل على poses متماسكة حسابياً وخاطئة كيميائياً. التحليل يضع فرضية فيزيائية يُختبر الالتحام ضدها، لا العكس.",
          "Because the search algorithm will fill whatever box you give it. If the box sits on a non-functional surface, omits a metal, or ignores a bridging water, you will get computationally coherent poses that are chemically wrong. Site analysis states a physical hypothesis that docking is then tested against — not the reverse.",
        ),
      },
      {
        type: "whatif",
        id: "l11-site-whatif",
        scenario: L("ماذا لو رسّمنا على نموذج AlphaFold لجيب مغلق أو غير مكتمل العُرى؟", "What if we dock into an AlphaFold model whose pocket is closed or whose loops are incomplete?"),
        consequence: L(
          "الطية fold المتوقعة ليست هيئة bound pose. حلقة ناقصة قد تكون جدار الجيب. النتيجة الشائعة: درجات جيدة على تجويف مصطنع، ثم فشل تجريبي. استخدم النموذج كفرضية بنيوية تحتاج معاينة (ensemble / MD) ودليلاً تجريبياً، لا كمستقبِل جاهز للفرز.",
          "A predicted fold is not a bound pose. A missing loop may be the pocket wall. The usual outcome: good scores in an artificial cavity, then experimental failure. Treat the model as a structural hypothesis that needs sampling (ensemble / MD) and experimental evidence, not as a ready screening receptor.",
        ),
      },
      {
        type: "exercise",
        id: "l11-site-ex",
        prompt: L(
          "اختر بنية co-crystal لكيناز (مثلاً 1IEP تعليمياً). اكتب: (1) البقايا التي تكوّن hinge، (2) هل يوجد ماء أو معدن في الجيب، (3) هل العُرى المجاورة ذات B-factor مرتفع، (4) فرضية تصميم واحدة مبنية على هذه الملاحظات — لا على درجة docking.",
          "Pick a kinase co-crystal (e.g. 1IEP, educationally). Write: (1) hinge residues, (2) whether a pocket water or metal is present, (3) whether neighbouring loops have high B-factors, (4) one design hypothesis from these observations — not from a docking score.",
        ),
        solution: L(
          "في 1IEP يرتبط imatinib (STI) بـ Abl في هيئة DFG-out. hinge يقدّم hydrogen bonds للـ pyrimidine/pyridine scaffold. الجيب عميق ويشمل منطقة hydrophobic خلف gatekeeper. أي فرضية تصميم يجب أن تحترم هذه الشبكة لا أن «تحسّن» درجة وهمية. التفاصيل الدقيقة للبقايا تُراجع من الملف نفسه — لا تُحفظ كأرقام سحرية.",
          "In 1IEP, imatinib (STI) binds Abl in a DFG-out conformation. The hinge donates hydrogen bonds to the pyrimidine/pyridine scaffold. The pocket is deep and includes a hydrophobic region past the gatekeeper. A design hypothesis must respect that network, not 'improve' a fictitious score. Residue-level detail is read from the file — not memorised as magic numbers.",
        ),
      },
    ],
    ["l4-pockets", "l4-quality", "l11-hotspot", "l8-poses"],
  ),

  expand(
    "l11-hotspot",
    [
      L("تعريف hotspot كموضع تساهم ذرة أو مجموعة صغيرة فيه بطاقة ارتباط غير متناسبة مع حجمها.", "Define a hotspot as a locus where a small group contributes binding energy out of proportion to its size."),
      L("التمييز بين ligandability الجيب وdruggability الهدف العلاجي.", "Distinguish pocket ligandability from therapeutic druggability."),
      L("استخدام hotspots لتوجيه fragment growing لا لتزيين الشكل.", "Use hotspots to steer fragment growing, not to decorate a figure."),
    ],
    [
      {
        type: "prose",
        id: "l11-hotspot-intro",
        title: L("أين تستحق الذرة الواحدة عناء التخليق", "Where a single atom is worth synthesizing"),
        body: L(
          "ليست كل ذرة في الليجند متساوية. hotspot هو منطقة في البروتين تُكافئ تماسّاً محكماً — غالباً تجويف كاره للماء صغير مع مانح/مقبل hydrogen bond موجَّه — بطاقة كبيرة نسبياً. فكرة مسح الجيب بمسبارات عضوية صغيرة (مفهوم FTMap وأشباهه) هي أن المواضع التي تتجمّع فيها المسبارات المختلفة مرشحة لتكون hotspots. هذا تفسير إحصائي لهيئة بلورية أو مجموعة هيئات، لا قياس ΔG تجريبي.",
          "Not every ligand atom is equal. A hotspot is a protein region that rewards a tight contact — often a small hydrophobic recess plus a directed hydrogen-bond donor/acceptor — with disproportionately large energy. Mapping the pocket with small organic probes (the FTMap-class idea) treats consensus probe clusters as candidate hotspots. That is a statistical reading of a crystal pose or a conformational set, not an experimental ΔG.",
        ),
      },
      {
        type: "list",
        id: "l11-hotspot-chem",
        title: L("كيمياء hotspot النموذجي", "Chemistry of a typical hotspot"),
        items: [
          L("سطح كاره للماء concavity يقلّل تكلفة desolvation للّيغند.", "A hydrophobic concavity that lowers the ligand desolvation penalty."),
          L("hydrogen bond محمي من الماء السائب — وإلا فالتبادل مع المذيب يُضعفه.", "A hydrogen bond shielded from bulk water — otherwise solvent exchange weakens it."),
          L("هندسة صارمة: زاوية ومسافة، لا مجرد «قرب».", "Strict geometry: angle and distance, not mere proximity."),
          L("استقرار عبر بنى متعددة للعقار أو العائلة.", "Persistence across multiple structures of the target or family."),
        ],
      },
      {
        type: "callout",
        id: "l11-hotspot-lim",
        kind: "limitation",
        title: L("محدودية: hotspot على لقطة بلورية", "Limitation: a hotspot on a crystal snapshot"),
        body: L(
          "خريطة المسبارات ترث مرونة البنية التي استخدمتها. هيئة DFG-in تُظهر hotspots غير هيئة DFG-out. نموذج ضمني للمذيب يُبالغ أحياناً في قوة تماسّ كاره للماء. لا تُترجم «كثافة المسبار» إلى kcal/mol، ولا تُبرَّر بها عبارة lead جديد.",
          "A probe map inherits the flexibility of the structure you used. A DFG-in map is not a DFG-out map. Implicit solvent can overstate hydrophobic contact. Probe density does not convert into kcal/mol, and it does not justify calling something a new lead.",
        ),
      },
      {
        type: "compare",
        id: "l11-hotspot-cmp",
        left: L("ligandability", "ligandability"),
        right: L("druggability", "druggability"),
        rows: [
          {
            dim: L("السؤال", "Question"),
            a: L("هل يوجد جيب يمكن أن يرتبط به جزيء صغير بaffinity معقولة؟", "Can a small molecule bind the pocket with reasonable affinity?"),
            b: L("هل يمكن تحويل ذلك إلى دواء آمن وقابل للإعطاء في مرض حقيقي؟", "Can that be turned into a safe, deliverable drug in a real disease?"),
          },
          {
            dim: L("الأدوات", "Tools"),
            a: L("حجم الجيب، hotspots، وجود ligands معروفة للعائلة.", "Pocket volume, hotspots, known family ligands."),
            b: L("علم أحياء الهدف، selectivity، ADMET، نافذة علاجية.", "Target biology, selectivity, ADMET, therapeutic window."),
          },
        ],
      },
      {
        type: "why",
        id: "l11-hotspot-why",
        question: L("لماذا لا نملأ الجيب كله بذرات دفعة واحدة؟", "Why not fill the whole pocket with atoms at once?"),
        answer: L(
          "لأن معظم الحجم «فارغ مفيد»: يتحمّل التنوّع دون أن يدفع الطاقة. hotspots هي المواضع التي إذا أخطأت فيها خسرت الارتباط، وإذا أصبتها يمكنك أن تُنمي fragment بخطى صغيرة. ملء الجيب يرفع MW وlogP ويزيد خطر عدم الذوبان والانهيار الإنتروبي دون مكاسب متناسبة.",
          "Because most of the volume is useful emptiness: it tolerates diversity without paying energy. Hotspots are the positions where a miss costs binding and a hit lets you grow a fragment in small steps. Filling the pocket inflates MW and logP and raises insolubility and entropic collapse without proportional gain.",
        ),
      },
      {
        type: "whatif",
        id: "l11-hotspot-whatif",
        scenario: L("ماذا لو بنيت السلسلة الجانبية على تماس ضعيف ظاهر في هيئة واحدة فقط؟", "What if you grow a side chain onto a weak contact seen in only one pose?"),
        consequence: L(
          "قد تُثبِّت هيئة غير موجودة في المحلول، أو تصطدم بعروة مرنة، أو تدفع ماءً كان يُسهم في الارتباط. التصميم على hotspot غير محفوظ عبر ensemble يُنتج مركبات أقوى على الحاسوب وأضعف في الفحص.",
          "You may lock a pose that does not exist in solution, clash with a mobile loop, or displace a water that was contributing to binding. Designing on a hotspot that is not conserved across an ensemble yields compounds that are stronger on the computer and weaker in the assay.",
        ),
      },
      {
        type: "exercise",
        id: "l11-hotspot-ex",
        prompt: L("ارسم (أو صف) ثلاث مناطق في جيب معروف: hotspot مفترض، منطقة تسوية solubility، ومنطقة تتحمل التنوّع. برّر كل تصنيف بفيزياء لا بدرجة.", "Sketch or describe three regions of a known pocket: a putative hotspot, a solubility-patch region, and a diversity-tolerant region. Justify each with physics, not a score."),
        solution: L("Hotspot: تجويف كاره للماء + H-bond موجَّه محفوظ. منطقة الذوبان: موجهة نحو المذيب، تتحمل مجموعة قطبية. منطقة التنوّع: سطح مفتوح أو عروة مرنة حيث التغيير لا يكسر شبكة التفاعل الرئيسية. إذا لم تستطع تبرير التصنيف من البنية، فهو تخمين.", "Hotspot: hydrophobic recess plus a conserved directed H-bond. Solubility patch: solvent-facing, polar group tolerated. Diversity region: open face or flexible loop where change does not break the primary interaction network. If you cannot justify the label from structure, it is a guess."),
      },
    ],
    ["l11-site", "l11-fragment", "l2-binding"],
  ),

  expand(
    "l11-fragment",
    [
      L("شرح منطق FBDD: fragment → grow / link / merge.", "Explain FBDD logic: fragment → grow / link / merge."),
      L("تمييز الكفاءة ligand efficiency عن القوة potency المطلقة.", "Distinguish ligand efficiency from absolute potency."),
      L("معرفة لماذا ربط شظيتين على الورق يفشل كيميائياً.", "Know why linking two fragments on paper fails chemically."),
    ],
    [
      {
        type: "prose",
        id: "l11-frag-intro",
        title: L("شظايا صغيرة، فرضيات كبيرة", "Small fragments, large hypotheses"),
        body: L(
          "Fragment-based drug design (FBDD) يبدأ بجزيئات صغيرة (غالباً MW منخفض، عدد محدود من hydrogen-bond donors/acceptors وrotatable bonds — «rule of 3» كإرشاد لا كقانون) تُمسح بتركيزات عالية بطرائق فيزيائية حيوية (NMR، SPR، X-ray soaking). الفكرة: شظية تملأ hotspot بكفاءة أفضل من ليغند كبير يضيّع ذراته في تماس ضعيف. الحاسوب يمكن أن يقترح مواضع، لكنه لا يستبدل خريطة كثافة إلكترونية أو إشارة ربط.",
          "Fragment-based drug design (FBDD) starts from small molecules (typically low MW, few hydrogen-bond donors/acceptors and rotatable bonds — the 'rule of 3' as a heuristic, not a law) screened at high concentration by biophysical methods (NMR, SPR, X-ray soaking). The idea: a fragment that occupies a hotspot is more efficient than a large ligand wasting atoms on weak contacts. Computation can propose placements; it does not replace an electron-density map or a binding signal.",
        ),
      },
      {
        type: "steps",
        id: "l11-frag-moves",
        title: L("ثلاث حركات تصميم", "Three design moves"),
        items: [
          {
            title: L("Growing", "Growing"),
            body: L("إضافة ذرات نحو hotspot مجاور أو نحو المذيب لتحسين potency أو ADMET دون كسر وضع الشظية.", "Add atoms toward a neighbouring hotspot or toward solvent to improve potency or ADMET without breaking the fragment pose."),
          },
          {
            title: L("Linking", "Linking"),
            body: L("وصل شظيتين في جيوب متجاورة. الرابط يجب أن يحفظ الهندسة؛ طول خاطئ بذرة واحدة يكفي لخسارة الارتباط.", "Join two fragments in adjacent subsites. The linker must preserve geometry; one atom of wrong length can abolish binding."),
          },
          {
            title: L("Merging", "Merging"),
            body: L("دمج ذرّات متراكبة من شظيتين في هيكل واحد. يتطلب تداخلاً حقيقياً في الفضاء ثلاثي الأبعاد لا تشابهاً ثنائي الأبعاد.", "Fuse overlapping atoms of two fragments into one scaffold. That requires genuine 3D overlap, not 2D resemblance."),
          },
        ],
      },
      {
        type: "callout",
        id: "l11-frag-warn",
        kind: "warning",
        title: L("تحذير: كفاءة الليجند ليست دواءً", "Warning: ligand efficiency is not a drug"),
        body: L(
          "Ligand efficiency (مفهوم طاقة الارتباط لكل ذرة ثقيلة) أداة مقارنة بين شظايا، لا دالة هدف للتحسين الأعمى. مع نمو الجزيء تنخفض الكفاءة عادة. مركّب ذو LE ممتاز وذوبان معدوم أو selectivity منعدمة ليس قائداً. كذلك لا تخلط LE المحسوب من docking score مع LE المحسوب من Kd تجريبي.",
          "Ligand efficiency (binding energy per heavy atom, as a concept) is a way to compare fragments, not an objective function for blind optimisation. Efficiency usually falls as the molecule grows. An excellent-LE compound that will not dissolve, or has no selectivity, is not a lead. Do not mix LE from a docking score with LE from an experimental Kd.",
        ),
      },
      {
        type: "list",
        id: "l11-frag-fail",
        title: L("لماذا يفشل الربط linking", "Why linking fails"),
        items: [
          L("الشظيتان لم تُرَيا معاً في البنية نفسها — هيئات غير متوافقة.", "The two fragments were never seen in the same structure — incompatible poses."),
          L("الرابط يدفع زاوية dihedral غير مفضّلة أو يصطدم بالبروتين.", "The linker forces a bad dihedral or clashes with protein."),
          L("الرابط يغيّر desolvation أو يطرد ماءً جسرياً.", "The linker changes desolvation or ejects a bridging water."),
          L("التخليق يفرض مجموعات (amide، triazole) تغيّر polar surface فجأة.", "Synthesis imposes groups (amide, triazole) that abruptly change polar surface."),
        ],
      },
      {
        type: "why",
        id: "l11-frag-why",
        question: L("لماذا نبدأ بشظية بدل مكتبة drug-like كاملة؟", "Why start from a fragment instead of a full drug-like library?"),
        answer: L(
          "فضاء الجزيئات الصغيرة يُغطَّى بشظيات بعدد أقل بكثير من مركبات Ro5. شظية صحيحة في hotspot تعطيك اتجاهاً كيميائياً، في حين أن إصابة drug-like قد تكون مركّباً كبيراً يصعب تحسينه (molecular obesity). المقابل: إشارة الشظية أضعف وأسهل أن تكون artifact، لذلك الفحص الفيزيائي الحيوي والتحقّق البنيوي أهم هنا لا أقل.",
          "Fragment chemical space covers more with fewer molecules than Ro5 libraries. A true hotspot fragment gives a chemical direction, whereas a drug-like hit may already be obese and hard to optimise. The trade-off: fragment signals are weaker and more artifact-prone, so biophysics and structural validation matter more here, not less.",
        ),
      },
      {
        type: "whatif",
        id: "l11-frag-whatif",
        scenario: L("ماذا لو «نمت» الشظية حاسوبياً عشر ذرات دون كثافة بلورية أو قياس affinity؟", "What if you computationally 'grow' the fragment by ten atoms with no crystal density and no affinity measurement?"),
        consequence: L(
          "ستحصل على جزيء يشبه قائداً في الرسم، وهيئة قد لا تبقى بعد إضافة الحجم، وادعاء اكتشاف بلا دليل. النمو قرار يُختبر بتركيب بضع مركبات أو على الأقل بفرضيات هندسية صارمة تُفنَّد في البنية التالية.",
          "You get a drawing that looks like a lead, a pose that may not survive the added bulk, and a discovery claim without evidence. Growing is a decision tested by making a few compounds, or at least by strict geometric hypotheses that the next structure can falsify.",
        ),
      },
      {
        type: "exercise",
        id: "l11-frag-ex",
        prompt: L("صف فرقاً واحداً حاسماً بين: (أ) شظية مرئية في كثافة X-ray داخل hotspot، (ب) شظية ذات درجة docking مرتفعة في الجيب نفسه.", "State one decisive difference between: (a) a fragment visible in X-ray density in a hotspot, and (b) a fragment with a strong docking score in the same pocket."),
        solution: L("(أ) دليل تجريبي على الإشغال والهيئة في البلورة (مع تحفظات البلورة نفسها). (ب) فرضية بحث + تقييم تقريبي. لا يجوز معاملتهما كمستوى دليل واحد في ورقة أو في قرار تخليق مكلف.", "(a) Experimental evidence of occupancy and pose in the crystal (with crystal caveats). (b) A search hypothesis plus an approximate score. They must not be treated as the same evidence level in a paper or in an expensive synthesis decision."),
      },
    ],
    ["l11-hotspot", "l11-bioiso", "l8-poses"],
  ),

  expand(
    "l11-bioiso",
    [
      L("تعريف bioisostere كاستبدال يحفظ فيزياء التفاعل لا الشكل ثنائي الأبعاد.", "Define a bioisostere as a replacement that preserves interaction physics, not the 2D drawing."),
      L("التمييز بين الاستبدال الكلاسيكي وغير الكلاسيكي وscaffold hopping.", "Distinguish classical vs nonclassical replacement and scaffold hopping."),
      L("استخدام الاستبدال لإصلاح ADMET دون تدمير potency كهدف تصميمي صريح.", "Use replacement to repair ADMET without destroying potency as an explicit design goal."),
    ],
    [
      {
        type: "prose",
        id: "l11-bio-intro",
        title: L("تغيير الهيكل، حفظ الفيزياء", "Change the scaffold, keep the physics"),
        body: L(
          "Bioisostere استبدال ذرة أو مجموعة أو هيكل بأخرى تُتوقَّع أن تحفظ الحجم، الإلكترونية، أو نمط hydrogen bonding بما يكفي لبقاء النشاط. الكلاسيكي: H/F، COOH/tetrazole، amide/sulfonamide في سياقات معيّنة. غير الكلاسيكي قد يغيّر عدد الذرات جذرياً إذا بقي الاتجاه الهندسي. scaffold hopping يستبدل النواة مع محاولة حفظ pharmacophore ثلاثي الأبعاد. كلها فرضيات كيميائية طبية، لا ضمانات.",
          "A bioisostere is an atom, group, or scaffold replacement expected to preserve enough volume, electronics, or hydrogen-bonding pattern for activity to survive. Classical examples: H/F, COOH/tetrazole, amide/sulfonamide in some contexts. Nonclassical replacements may change atom count sharply if the 3D vectors remain. Scaffold hopping swaps the core while trying to keep the 3D pharmacophore. All of these are medicinal-chemistry hypotheses, not guarantees.",
        ),
      },
      {
        type: "list",
        id: "l11-bio-whyuse",
        title: L("لماذا نبدّل أصلاً؟", "Why replace anything?"),
        items: [
          L("إزالة موقع استقلاب CYP (soft spot) مع حفظ تماس الجيب.", "Remove a CYP metabolic soft spot while keeping the pocket contact."),
          L("خفض pKa أو تغيير logD لتحسين permeability أو تقليل hERG.", "Lower pKa or change logD to help permeability or reduce hERG risk."),
          L("كسر خطة براءة أو تجنب بنية PAINS دون فقدان النشاط.", "Break a patent plan or avoid a PAINS motif without losing activity."),
          L("إدخال ذرة تُسهّل التخليق أو تُحسّن الذوبان.", "Introduce an atom that eases synthesis or improves solubility."),
        ],
      },
      {
        type: "callout",
        id: "l11-bio-warn",
        kind: "warning",
        title: L("تحذير: التشابه البصري ليس تكافؤاً حيوياً", "Warning: visual similarity is not bioisosterism"),
        body: L(
          "استبدال phenyl بـ thiophene أو pyridine قد يُغيّر dipole، pKa، اتجاه lone pair، ومسار التأيض دفعة واحدة. البرامج التي تقترح bioisosteres من قواعد بيانات تاريخية تنقل تحيّز ما نجح سابقاً، لا فيزياء جيبك. كل اقتراح يُختبر ضد: (1) هندسة الجيب، (2) protonation عند pH 7.4، (3) إمكانية التخليق.",
          "Swapping phenyl for thiophene or pyridine can change dipole, pKa, lone-pair vector, and metabolic route at once. Software that suggests bioisosteres from historical databases transfers the bias of what worked before, not the physics of your pocket. Every suggestion is tested against: (1) pocket geometry, (2) protonation at pH 7.4, (3) synthetic feasibility.",
        ),
      },
      {
        type: "compare",
        id: "l11-bio-cmp",
        left: L("Bioisostere موضعي", "Local bioisostere"),
        right: L("Scaffold hop", "Scaffold hop"),
        rows: [
          {
            dim: L("ماذا يتغيّر", "What changes"),
            a: L("مجموعة طرفية أو رابط صغير.", "A terminal group or a small linker."),
            b: L("النواة التي تحمل المتجهات.", "The core that carries the vectors."),
          },
          {
            dim: L("الخطر", "Risk"),
            a: L("فقدان تماس واحد أو تغيّر ADMET.", "Loss of one contact or an ADMET shift."),
            b: L("انهيار كل الهيئة إذا أُسيء تقدير الزوايا.", "Collapse of the whole pose if angles are misjudged."),
          },
          {
            dim: L("متى يُبرَّر", "When justified"),
            a: L("مشكلة محددة: استقلاب، ذوبان، hERG.", "A specific problem: metabolism, solubility, hERG."),
            b: L("نواة ميتة تخليقياً أو محمية ببراءة أو ذات selectivity سيئة.", "A synthetically dead, patented, or poorly selective core."),
          },
        ],
      },
      {
        type: "why",
        id: "l11-bio-why",
        question: L("لماذا يُعدّ tetrazole بديلاً شائعاً لـ carboxylic acid؟", "Why is tetrazole a common stand-in for carboxylic acid?"),
        answer: L(
          "كلاهما يمكن أن يكون حامضاً ويتشحن سالباً عند pH فسيولوجي، ويشغل حجماً متقارباً في بعض الجيوب التي تربط anion. لكن tetrazole يختلف في عدد ذرات N، في نمط tautomer، وفي permeability والاستقلاب. الاستخدام الشائع لا يعني التكافؤ في جيبك؛ هو نقطة بداية كيميائية.",
          "Both can be acidic and negatively charged at physiological pH, and they occupy similar volume in some anion-binding pockets. But tetrazole differs in nitrogen count, tautomer pattern, permeability, and metabolism. Common use is not equivalence in your pocket; it is a chemical starting point.",
        ),
      },
      {
        type: "whatif",
        id: "l11-bio-whatif",
        scenario: L("ماذا لو استبدلت amide بـ ester لتحسين logP دون إعادة حساب tautomer/protonation والثبات المائي؟", "What if you replace an amide with an ester to improve logP without revisiting tautomer/protonation and aqueous stability?"),
        consequence: L(
          "الـ ester قد يُحلم في البلازما، يفقد hydrogen-bond donor الذي كان يمسك hinge، ويغيّر الهيئة لأن حاجز الدوران أقل. ما يبدو تحسيناً في واصفة واحدة قد يكون اغتيالاً للقوة والثبات معاً.",
          "The ester may hydrolyse in plasma, lose the hydrogen-bond donor that held a hinge, and change conformation because the rotational barrier is lower. A gain on one descriptor can assassinate both potency and stability.",
        ),
      },
      {
        type: "exercise",
        id: "l11-bio-ex",
        prompt: L("اقترح استبدالين محتملين لمجموعة phenol في ليغند: واحد يهدف لتقليل الاقتران الاستقلابي، وآخر لحفظ H-bond. اذكر ثمناً محتملاً لكل خيار.", "Propose two possible replacements for a phenol in a ligand: one aimed at reducing conjugative metabolism, one at keeping the H-bond. State a likely price for each."),
        solution: L("لإضعاف الاستقلاب: O-methyl أو F مكان OH — الثمن فقدان donor ورباط قد يكون أساسياً. لحفظ H-bond: indole NH أو amide موجه هندسياً — الثمن MW وTPSA وربما هيئة جديدة. لا يوجد استبدال مجاني.", "To blunt metabolism: O-methyl or F in place of OH — price is loss of a donor that may be essential. To keep the H-bond: an indole NH or a geometrically aimed amide — price is MW, TPSA, and maybe a new pose. There is no free replacement."),
      },
    ],
    ["l11-fragment", "l11-medchem", "l1-hetero"],
  ),

  expand(
    "l11-medchem",
    [
      L("صياغة التصميم كسلسلة مقايضات: potency، solubility، metabolism، selectivity.", "Frame design as a set of trade-offs: potency, solubility, metabolism, selectivity."),
      L("رفض تحسين رقم واحد (IC50 أو docking score) بوصفه استراتيجية.", "Reject optimising a single number (IC50 or docking score) as a strategy."),
      L("ربط تعديل كيميائي محدد بأثر ADMET متوقع، مع الاعتراف بعدم اليقين.", "Link a specific chemical change to an expected ADMET effect, with uncertainty acknowledged."),
    ],
    [
      {
        type: "prose",
        id: "l11-med-intro",
        title: L("المقايضة هي العمل", "The trade-off is the job"),
        body: L(
          "تحسين القوة potency يسهل قياسه، لذلك يُعبَد. المصمم الجيد يسأل في كل دورة: ماذا دفعنا ثمناً؟ زيادة lipophilicity قد ترفع potency الظاهر عبر hydrophobic effect وتُفسد الذوبان، وترفع ربط البروتين البلازمي، وتفتح باب CYP وhERG. الهدف ليس أصغر IC50 بل نافذة: ارتباط كافٍ، تعرض exposure كافٍ، وهامش أمان.",
          "Potency is easy to measure, so it gets worshipped. A good designer asks every cycle: what did we pay? Raising lipophilicity may boost apparent potency through the hydrophobic effect while wrecking solubility, raising plasma protein binding, and opening CYP and hERG liabilities. The goal is not the smallest IC50 but a window: enough binding, enough exposure, and a safety margin.",
        ),
      },
      {
        type: "list",
        id: "l11-med-levers",
        title: L("أذرع التعديل الشائعة", "Common modification levers"),
        items: [
          L("إضافة F أو CH3 في موضع metabolically labile لإعاقة الأكسدة — مع أثر على pKa وlogD.", "Add F or CH3 at a metabolically labile site to hinder oxidation — with pKa and logD side effects."),
          L("إدخال مجموعة قطبية نحو المذيب لرفع solubility دون كسر hotspot.", "Place a polar group toward solvent to raise solubility without breaking a hotspot."),
          L("تصلب الهيكل (ring constraint) لخفض entropic penalty — إذا كانت الهيئة الصحيحة معروفة.", "Rigidify (ring constraint) to cut an entropic penalty — if the right conformer is known."),
          L("تعديل basic center لتقليل hERG مع مراقبة permeability.", "Tune a basic centre to reduce hERG while watching permeability."),
        ],
      },
      {
        type: "callout",
        id: "l11-med-lim",
        kind: "limitation",
        title: L("محدودية الحساب في دورة medchem", "Limitation of computation in a medchem cycle"),
        body: L(
          "Docking وQSAR وADMET in silico أدوات ترتيب hypotheses داخل سلسلة كيميائية ضيقة. خارج تلك السلسلة، ومع تغيير scaffold، تسقط كثير من النماذج. الحساب لا يخبرك إن كان المركب سيُصنَّع في أسبوع، ولا إن كان الفحص cellular سيوافق الإنزيمي بسبب efflux.",
          "Docking, QSAR, and in-silico ADMET are tools for ranking hypotheses inside a narrow chemical series. Outside that series, and after a scaffold change, many models collapse. Computation will not tell you whether the compound can be made this week, nor whether a cellular assay will match the enzymatic one because of efflux.",
        ),
      },
      {
        type: "steps",
        id: "l11-med-cycle",
        title: L("دورة تصميم دفاعية", "A defensible design cycle"),
        items: [
          {
            title: L("فرضية بنيوية", "Structural hypothesis"),
            body: L("«هذه الذرة تمس hotspot X» — جملة يمكن تفنيدها في البنية أو SAR.", "'This atom contacts hotspot X' — a sentence a structure or SAR can falsify."),
          },
          {
            title: L("فرضية ADMET", "ADMET hypothesis"),
            body: L("«خفض logD بمقدار محصور سيُحسّن الذوبان دون قتل Caco-2» — تقاس، لا تُفترض.", "'A bounded drop in logD will improve solubility without killing Caco-2' — measured, not assumed."),
          },
          {
            title: L("أصغر مجموعة مركبات", "Smallest informative set"),
            body: L("زوج أو ثلاثة matched pairs أفضل من عشرين تغييراً متزامناً.", "Two or three matched pairs beat twenty simultaneous changes."),
          },
          {
            title: L("اقرأ الفشل", "Read the failure"),
            body: L("فقدان النشاط معلومة عن الجيب؛ عدم الذوبان معلومة عن السلسلة. لا تُعاد الكرّة بالحاسوب وكأن القياس لم يحدث.", "Loss of activity is pocket information; insolubility is series information. Do not rerun the computer as if the assay never happened."),
          },
        ],
      },
      {
        type: "why",
        id: "l11-med-why",
        question: L("لماذا لا يكفي أن نضاعف potency عشر مرات؟", "Why is a ten-fold potency gain not enough?"),
        answer: L(
          "لأن الجرعة تتعلق بـ free fraction والتصفية permeability والاستقرار، لا بـ IC50 وحده. مركّب أقوى بعشر مرات وأقل تعرضاً بعشرين مرة يسوء. كما أن القوة المفرطة على هدف واحد قد تُخفي off-target عند التركيز العلاجي.",
          "Because dose depends on free fraction, clearance, permeability, and stability, not IC50 alone. A compound ten-fold more potent and twenty-fold less exposed is worse. Extreme on-target potency can also hide off-target activity at the therapeutic concentration.",
        ),
      },
      {
        type: "whatif",
        id: "l11-med-whatif",
        scenario: L("ماذا لو حسّنت docking score بإضافة حلقتين عطريتين ثم اكتشفت أن المركب لا يذوب؟", "What if you improved the docking score by adding two aromatic rings and then found the compound will not dissolve?"),
        consequence: L(
          "هذه molecular obesity: قوة ظاهرية في جيب جاف، وفشل في assay وفي الجسم. العلاج ليس «صيغة إذابة» بعد فوات الأوان، بل إعادة التصميم نحو polar surface موزَّع ومواضع F/CH3 المدروسة بدل تكديس الكربون.",
          "That is molecular obesity: apparent potency in a dry pocket, failure in the assay and in the body. The fix is not a last-minute 'solubility formula', but redesign toward distributed polar surface and deliberate F/CH3 placement instead of stacking carbon.",
        ),
      },
      {
        type: "exercise",
        id: "l11-med-ex",
        prompt: L("سلسلة فقدت الذوبان بعد إضافة aryl. اقترح ثلاثة تعديلات لا تشمل «أضف أي مجموعة قطبية في أي مكان»، وبرّر كل تعديل بالنسبة للجيب والمذيب.", "A series lost solubility after adding an aryl. Propose three modifications that are not 'stick any polar group anywhere', and justify each relative to pocket versus solvent."),
        solution: L("(1) N في الحلقة العطرية موجَّه للماء إن كان الموضع مكشوفاً. (2) كسر العطرية جزئياً (sp3 rich) إن لم يكن π-stacking أساسياً. (3) مجموعة OH/amide قصيرة نحو المذيب من موقع غير hotspot. ما يُرفض: polar group داخل تجويف كاره للماء — تدفع desolvation وتقتل الارتباط.", "(1) A ring nitrogen aimed at water if the vertex is exposed. (2) Partial saturation (sp3-rich) if π-stacking is not essential. (3) A short OH/amide toward solvent from a non-hotspot vector. Rejected: a polar group inside a hydrophobic recess — you pay desolvation and kill binding."),
      },
    ],
    ["l11-bioiso", "l11-selectivity", "l15-adme", "l14-lipinski"],
  ),

  expand(
    "l11-selectivity",
    [
      L("تعريف selectivity كفرق نشاط بين أهداف ذات جيوب متشابهة، لا كشعار.", "Define selectivity as an activity gap between similar pockets, not as a slogan."),
      L("استخدام فروقات بنيوية صغيرة (gatekeeper، P-loop، DFG) فرضيات قابلة للاختبار.", "Use small structural differences (gatekeeper, P-loop, DFG) as testable hypotheses."),
      L("ربط غياب الانتقائية بسمية محتملة دون اختراع أرقام.", "Connect lack of selectivity to possible toxicity without inventing numbers."),
    ],
    [
      {
        type: "prose",
        id: "l11-sel-intro",
        title: L("الكينازات كمثال تعليمي", "Kinases as an educational example"),
        body: L(
          "جيب ATP محفوظ تطورياً. مركّب يملأه بسهولة قد يلمس عشرات kinases. الانتقائية تُبنى على اختلافات دقيقة: هوية gatekeeper، هيئة DFG-in مقابل DFG-out، حواف P-loop، أو جيب خلفي hydrophobic لا يوجد في كل العائلة. 1IEP (Abl–imatinib) مثال تعليمي: imatinib يستغل هيئة غير نشطة غير متاحة بالقدر نفسه لكل kinase. هذا تفسير بنيوي شائع، لا يغني عن لوحة فحص kinase panel.",
          "The ATP pocket is evolutionarily conserved. A compound that fills it easily may touch dozens of kinases. Selectivity is built from small differences: gatekeeper identity, DFG-in versus DFG-out, P-loop rims, or a hydrophobic back pocket not present in every family member. 1IEP (Abl–imatinib) is an educational example: imatinib exploits an inactive conformation that is not equally available to every kinase. That is a common structural interpretation; it does not replace a kinase panel.",
        ),
      },
      {
        type: "list",
        id: "l11-sel-levers",
        title: L("مقابض الانتقائية", "Selectivity handles"),
        items: [
          L("حجم gatekeeper: كبير يمنع دخول جيب خلفي؛ صغير يفتحه.", "Gatekeeper bulk: large blocks a back pocket; small opens it."),
          L("هيئات غير نشطة: DFG-out أو حلزون αC-out ليست عامة.", "Inactive conformations: DFG-out or αC-out are not universal."),
          L("شحنة فريدة: بقايا Cys تساهمية، أو Asp إضافي لـ salt bridge.", "A unique charge: a covalent Cys, or an extra Asp for a salt bridge."),
          L("الهدف allosteric خارج جيب ATP: أصعب معاينة، غالباً أعلى انتقائية محتملة.", "An allosteric site outside ATP: harder to sample, often higher potential selectivity."),
        ],
      },
      {
        type: "callout",
        id: "l11-sel-warn",
        kind: "warning",
        title: L("تحذير: docking على هدفين ليس لوحة انتقائية", "Warning: docking two targets is not a selectivity panel"),
        body: L(
          "مقارنة درجة Vina بين Abl وkinase آخر تخلط خطأ التقييم مع فرق فيزيائي. الجيوب المتشابهة تخدع دوال التقييم. الانتقائية تُقاس في فحص، وتُفسَّر بالبنية. الحساب مفيد لاقتراح أي متجه كيميائي قد يميّز الجيبين، لا لإعلان «selectivity fold» من فرق kcal وهمي.",
          "Comparing Vina scores between Abl and another kinase confuses scoring error with physical difference. Similar pockets fool scoring functions. Selectivity is measured in an assay and interpreted with structure. Computation is useful to propose which chemical vector might distinguish the two pockets, not to announce a 'selectivity fold' from a fictitious kcal gap.",
        ),
      },
      {
        type: "prose",
        id: "l11-sel-tox",
        title: L("من غياب الانتقائية إلى السمية", "From missing selectivity to toxicity"),
        body: L(
          "Off-target ليس بالضرورة «هدف آخر في اللوحة». قد يكون hERG، أو ناقل، أو مستقبل نووي. حتى داخل العائلة: تثبيط kinase أساسي في نسيج سليم يضيّق النافذة العلاجية. التصميم الانتقائي يقلّل هذا الخطر؛ لا يلغيه، ولا يُغني عن فحوص السلامة.",
          "An off-target is not necessarily 'another protein on the panel'. It may be hERG, a transporter, or a nuclear receptor. Even inside the family: inhibiting an essential kinase in healthy tissue narrows the therapeutic window. Selective design reduces that risk; it does not cancel it, and it does not replace safety assays.",
        ),
      },
      {
        type: "why",
        id: "l11-sel-why",
        question: L("لماذا قد يكون المركب الأقل قوة على الهدف هو الأفضل علاجياً؟", "Why might the less potent on-target compound be therapeutically better?"),
        answer: L(
          "إذا كانت القوة الزائدة تأتي من لييغند محب للدهن يضرب عدة جيوب ATP، فقد تدفع ثمناً سمياً أكبر من فائدة الهدف. مركّب أضعف قليلاً على الهدف لكنه يميّز gatekeeper أو هيئة غير نشطة قد يعطي هامش أمان أوسع عند جرعة معقولة.",
          "If the extra potency comes from a lipophilic ligand that hits many ATP pockets, you may pay more toxicity than you gain on-target. A slightly weaker on-target compound that distinguishes a gatekeeper or an inactive conformation may give a wider safety margin at a realistic dose.",
        ),
      },
      {
        type: "whatif",
        id: "l11-sel-whatif",
        scenario: L("ماذا لو صمّمت لـ DFG-out ثم كان الهدف الفسيولوجي يقضي معظم وقته DFG-in؟", "What if you design for DFG-out and the physiological target spends most of its time DFG-in?"),
        consequence: L(
          "قد تحصل على مثبط قوي في فحص يستخدم هيئة مُستقَرَّة صناعياً، وضعيف في الخلية. اختيار البنية المستهدفة جزء من فرضية بيولوجية، لا تفاصيل تقنية تجميلية.",
          "You may obtain a potent inhibitor in an assay that uses an artificially stabilised conformation, and a weak one in cells. Choosing the target structure is part of the biological hypothesis, not a cosmetic technicality.",
        ),
      },
      {
        type: "exercise",
        id: "l11-sel-ex",
        prompt: L("اكتب فرضية انتقائية واحدة لجيب ATP يمكن تفنيدها: ما الذي يجب أن تراه في بنية أو في فحص لو كانت الفرضية خاطئة؟", "Write one ATP-site selectivity hypothesis that can be falsified: what must you see in a structure or an assay if it is wrong?"),
        solution: L("مثال: «مجموعة تملأ الجيب الخلفي ستُفقد النشاط إذا كان gatekeeper كبيراً». التفنيد: نشاط يبقى على mutant gatekeeper كبير، أو بنية تُظهر أن المجموعة لا تدخل الجيب الخلفي بل تغيّر هيئة أخرى. الفرضية بلا معيار فشل ليست فرضية.", "Example: 'A group that fills the back pocket will lose activity when the gatekeeper is bulky.' Falsification: activity remains on a bulky-gatekeeper mutant, or a structure shows the group never enters the back pocket and instead shifts another conformation. A hypothesis with no failure criterion is not a hypothesis."),
      },
    ],
    ["l11-medchem", "l11-site", "l15-tox"],
  ),
  expand(
    "l12-sim",
    [
      L("صياغة مبدأ التشابه كفرضية قابلة للكسر (activity cliffs).", "State the similarity principle as a breakable hypothesis (activity cliffs)."),
      L("ربط معامل Tanimoto بنوع البصمة وعتبة ليست قانوناً.", "Tie Tanimoto to fingerprint type and to a threshold that is not a law."),
      L("استخدام بحث التشابه لتوسيع سلسلة معروفة لا لاكتشاف هدف جديد بمفرده.", "Use similarity search to expand a known series, not as sole evidence of a new target."),
    ],
    [
      {
        type: "prose",
        id: "l12-sim-intro",
        title: L("الجزيئات المتشابهة تفعل أشياء متشابهة — حتى لا تفعل", "Similar molecules act similarly — until they do not"),
        body: L(
          "Ligand-based design يبدأ من مبدأ التشابه: إن تشابه جزيئان في البنية تَشابه فعلهما. هذا تقريب إحصائي مفيد لتوسيع hit معروف، وهو خاطئ محلياً عند activity cliffs: تغيير ميثيل واحد قد يقلب مثبطاً إلى معدوم النشاط لأن هندسة الجيب لا تتسامح. البحث بالتشابه أداة استرجاع retrieval، لا برهان آلية.",
          "Ligand-based design starts from the similarity principle: similar structures tend to have similar actions. That is a useful statistical prior for expanding a known hit, and it is locally false at activity cliffs: one methyl can turn an inhibitor into a null because the pocket geometry does not forgive. Similarity search is a retrieval tool, not a mechanism proof.",
        ),
      },
      {
        type: "equation",
        id: "l12-sim-tanimoto",
        latex: "T(A,B)=\\frac{|A\\cap B|}{|A\\cup B|}",
        name: L("معامل Tanimoto (Jaccard للبصمات الثنائية)", "Tanimoto coefficient (Jaccard on binary fingerprints)"),
        meaning: L("نسبة البتات المشتركة إلى اتحاد البتات المشتعلة في بصمتي جزيئين.", "The fraction of shared on-bits over the union of on-bits in two fingerprints."),
        variables: [
          { symbol: "A,B", name: L("مجموعتا البتات المشتعلة", "Sets of on-bits") },
          { symbol: "T", name: L("التشابه في [0,1]", "Similarity in [0,1]") },
        ],
        interpretation: L("T = 1 يعني البصمتان متطابقتان، لا أن الجزيئين متطابقان كيميائياً إن كانت البصمة خشنة.", "T = 1 means the fingerprints match, not that the molecules are chemically identical if the fingerprint is coarse."),
        application: L("ترتيب مكتبة حول مرجع نشط. العتبة 0.7 شائعة لـ Morgan/ECFP4 في الدردشة، وليست عتبة فيزيائية.", "Rank a library around an active reference. A threshold of 0.7 is common talk for Morgan/ECFP4; it is not a physical constant."),
      },
      {
        type: "list",
        id: "l12-sim-fp",
        title: L("البصمة تُعرِّف التشابه", "The fingerprint defines the similarity"),
        items: [
          L("Morgan/ECFP: بيئة دائرية حول الذرة؛ جيدة للهيكل العام، عمياء عن الهيئة 3D.", "Morgan/ECFP: circular atom environments; good for scaffold, blind to 3D pose."),
          L("MACCS: مفاتيح بنيوية يدوية؛ خشنة وسريعة.", "MACCS: hand-crafted structural keys; coarse and fast."),
          L("Pharmacophore fingerprints: تُقارب السمات لا الذرات.", "Pharmacophore fingerprints: approximate features, not atoms."),
          L("تغيير نصف القطر أو nBits يغيّر ترتيب المكتبة. اذكر الإعداد في methods.", "Changing radius or nBits changes the ranking. Report the setting in Methods."),
        ],
      },
      {
        type: "callout",
        id: "l12-sim-warn",
        kind: "warning",
        title: L("تحذير: 0.7 ليست جواز مرور", "Warning: 0.7 is not a passport"),
        body: L(
          "لا توجد عتبة Tanimoto عامة تعني «نفس النشاط». العتبة تعتمد على البصمة، كثافة المكتبة، وفئة الهدف. استخدام 0.7 بلا تبرير في ورقة ضعف منهجي. كذلك: مكتبات زاخرة بنظائر قريبة تُظهر إثراءً كاذباً لأنك استرجعت السلسلة نفسها.",
          "There is no universal Tanimoto cutoff that means 'same activity'. The cutoff depends on fingerprint, library density, and target class. Using 0.7 with no justification in a paper is a methodological weakness. Also: analogue-heavy libraries fake enrichment because you retrieved the same series.",
        ),
      },
      {
        type: "why",
        id: "l12-sim-why",
        question: L("لماذا يبقى بحث التشابه مفيداً رغم activity cliffs؟", "Why is similarity search still useful despite activity cliffs?"),
        answer: L(
          "لأن معظم التعديلات الصغيرة لا تكون cliffs. حول hit مؤكد تجريبياً، الاسترجاع بالتشابه يولّد أفكار SAR رخيصة ويساعد على تجنب إعادة اختراع السلسلة. قيمته في توليد المرشحين وترتيب العمل، لا في إثبات أن المركب «سيعمل».",
          "Because most small edits are not cliffs. Around an experimentally confirmed hit, similarity retrieval generates cheap SAR ideas and helps you avoid reinventing the series. Its value is candidate generation and work-ordering, not proof that a compound 'will work'.",
        ),
      },
      {
        type: "whatif",
        id: "l12-sim-whatif",
        scenario: L("ماذا لو رتّبت مليون مركّب بـ Tanimoto من ليغند نشط واحد ثم فسّرت العشرة الأوائل كآلية جديدة؟", "What if you rank a million compounds by Tanimoto to one active and interpret the top ten as a new mechanism?"),
        consequence: L(
          "ستعيد اكتشاف نفس scaffold أو صيغه المشابهة. الآلية لا تُستنتج من معامل overlap للبتات. بلا decoys وبلا تجربة، القائمة ليست اكتشافاً.",
          "You will rediscover the same scaffold or its near-neighbours. Mechanism is not inferred from bit overlap. Without decoys and without experiment, the list is not a discovery.",
        ),
      },
      {
        type: "exercise",
        id: "l12-sim-ex",
        prompt: L("اشرح جملة واحدة لماذا قد يملك جزيئان Tanimoto مرتفعاً على Morgan radius 2 ونشاطاً مختلفاً جذرياً.", "In one sentence, explain why two molecules can have high Morgan radius-2 Tanimoto and radically different activity."),
        solution: L("البصمة الدائرية ثنائية الأبعاد لا ترى stereochemistry الدقيقة، أو هيئة 3D، أو أن الميثيل الإضافي يصطدم بجدار الجيب (activity cliff) رغم أن معظم البيئات الذرية ما زالت مشتركة.", "A 2D circular fingerprint does not see fine stereochemistry or 3D pose, and an extra methyl can clash with a pocket wall (activity cliff) while most atom environments remain shared."),
      },
    ],
    ["l5-fp", "l12-pharma", "l13-libs"],
  ),

  expand(
    "l12-pharma",
    [
      L("تعريف pharmacophore كسمات هندسية (HBA/HBD/hydrophobic/aromatic/ion) لا كذرات.", "Define a pharmacophore as geometric features (HBA/HBD/hydrophobic/aromatic/ion), not as atoms."),
      L("إدراك أن محاذاة الجزيئات النشطة قرار يُفسد النموذج إن أُسيء.", "Recognise that aligning actives is a decision that can ruin the model."),
      L("استخدام النموذج للبحث عن توافق السمات مع الحذر من المصادفة.", "Use the model to search for feature matches while remaining wary of coincidence."),
    ],
    [
      {
        type: "prose",
        id: "l12-ph-intro",
        title: L("سمات في الفضاء، لا هيكل على الورق", "Features in space, not a scaffold on paper"),
        body: L(
          "Pharmacophore ملخص: أين يجب أن يقع مانح hydrogen bond، ومقبل، وسطح كاره للماء، وشحنة، بالنسبة لبعضها. يمكن بناؤه من عدة ليغندات نشطة (ligand-based) أو من جيب (structure-based). قوته في السماح بـ scaffold hopping. ضعفه في أن السمات المستخرجة من سلسلة واحدة قد تصف كيمياء تلك السلسلة لا فيزياء الهدف.",
          "A pharmacophore is a summary: where a hydrogen-bond donor, acceptor, hydrophobic patch, and charge must sit relative to one another. It can be built from several actives (ligand-based) or from a pocket (structure-based). Its strength is allowing scaffold hops. Its weakness is that features mined from one series may describe that series' chemistry, not the target's physics.",
        ),
      },
      {
        type: "list",
        id: "l12-ph-features",
        title: L("السمات القياسية", "Standard features"),
        items: [
          L("HBD / HBA: اتجاه وليست كرة فقط.", "HBD / HBA: a vector, not only a sphere."),
          L("Hydrophobic / aromatic: حجم واتجاه حلقة.", "Hydrophobic / aromatic: volume and ring orientation."),
          L("Positive / negative ionizable: تعتمد على pKa عند pH الفحص.", "Positive / negative ionizable: depends on pKa at assay pH."),
          L("Exclusion volumes: ما لا يجوز اصطدامه بالبروتين إن وُجدت بنية.", "Exclusion volumes: where the protein must not be hit, if a structure exists."),
        ],
      },
      {
        type: "callout",
        id: "l12-ph-lim",
        kind: "limitation",
        title: L("محدودية: المحاذاة هي النموذج", "Limitation: the alignment is the model"),
        body: L(
          "إذا فرضت أن كل النشطين يتخذون هيئة واحدة بينما يرتبطون بأوضاع مختلفة، ستبني pharmacophore وهمياً. عدد السمات الزائد يحفظ التدريب ويفشل في الاسترجاع. نموذج بثلاث سمات فضفاض يُغرقك بإيجابيات كاذبة.",
          "If you force all actives into one pose while they bind differently, you build a fictitious pharmacophore. Too many features memorise the training set and fail at retrieval. A three-feature loose model floods you with false positives.",
        ),
      },
      {
        type: "steps",
        id: "l12-ph-build",
        title: L("بناء حذر", "A cautious build"),
        items: [
          {
            title: L("اختر النشطين بصدق", "Choose actives honestly"),
            body: L("نفس الفحص، نفس الآلية المفترضة. لا تخلط agonists وantagonists بلا وعي في GPCR.", "Same assay, same presumed mechanism. Do not mix GPCR agonists and antagonists unthinkingly."),
          },
          {
            title: L("ولّد هيئات", "Generate conformers"),
            body: L("الهيئة النشطة حيوياً ليست دائماً الأدنى طاقة في الفراغ.", "The bioactive conformer is not always the vacuum global minimum."),
          },
          {
            title: L("اختبر الاسترجاع", "Test retrieval"),
            body: L("هل يستعيد النموذج النشطين ضد decoys معقولة؟", "Does the model recover actives against reasonable decoys?"),
          },
        ],
      },
      {
        type: "why",
        id: "l12-ph-why",
        question: L("لماذا pharmacophore قد ينجح حيث يفشل البحث بالذرات؟", "Why might a pharmacophore succeed where atom-search fails?"),
        answer: L(
          "لأنه يسمح بأن يحل tetrazole محل carboxylate إذا تطابق موقع الشحنة والمتجه، وهذا جوهر scaffold hopping. البحث الذري (substructure) يفوّت هذه التكافؤات.",
          "Because it can let a tetrazole stand in for a carboxylate if charge location and vector match, which is the point of scaffold hopping. Atom (substructure) search misses those equivalences.",
        ),
      },
      {
        type: "whatif",
        id: "l12-ph-whatif",
        scenario: L("ماذا لو بنيت النموذج من خمسة نظائر لنفس الـ scaffold ثم أعلنت أنه pharmacophore الهدف؟", "What if you build the model from five analogues of one scaffold and announce it as the target pharmacophore?"),
        consequence: L(
          "وصفت كيمياء السلسلة: مواضع البدائل التي تتحمّلها. عند hop حقيقي سيفشل النموذج أو سيُرتّب مركبات تشبه السلسلة القديمة وكأنها اكتشاف.",
          "You described series chemistry: substitution sites the scaffold tolerates. On a real hop the model will fail, or it will rank lookalikes of the old series as if they were discoveries.",
        ),
      },
      {
        type: "exercise",
        id: "l12-ph-ex",
        prompt: L("اذكر شرطين يجب أن يتحققا قبل أن تثق بـ pharmacophore ligand-based لفرز مكتبة كبيرة.", "Name two conditions that must hold before you trust a ligand-based pharmacophore to screen a large library."),
        solution: L("(1) دليل أن النشطين يشاركون آلية/موقع ارتباط. (2) تقييم استرجاع مقابل decoys أو inactives، مع تقرير معدل الإيجابيات الكاذبة.", "(1) Evidence that actives share a mechanism/site. (2) Retrieval assessment against decoys or inactives, with a false-positive rate reported."),
      },
    ],
    ["l12-sim", "l12-qsar", "l11-hotspot"],
  ),

  expand(
    "l12-qsar",
    [
      L("كتابة QSAR كـ: واصفات + نشاط مقيس + نموذج إحصائي + نطاق تطبيق.", "Write QSAR as: descriptors + measured activity + statistical model + applicability domain."),
      L("رفض تفسير الأوزان كآلية دون دليل بنيوي.", "Refuse to read weights as mechanism without structural evidence."),
      L("التمييز بين جودة المطابقة على التدريب وجودة التنبؤ.", "Distinguish training fit from predictive quality."),
    ],
    [
      {
        type: "prose",
        id: "l12-qsar-intro",
        title: L("نموذج إحصائي يرتدي معطف كيمياء", "A statistical model in a chemistry coat"),
        body: L(
          "QSAR يربط واصفات جزيئية بقياس نشاط (غالباً pIC50 أو pKi). الشكل الكلاسيكي خطي؛ الأشكال الحديثة غابات وشبكات. في كل الحالات: أنت تتعلّم ارتباطاً في مجموعة بيانات، لا قانون طبيعة. بلا وحدات نشاط متسقة وبلا بروتوكول فحص موحّد، النموذج يخلط ضجيج المختبر بـ SAR.",
          "QSAR maps molecular descriptors onto a measured activity (often pIC50 or pKi). The classical form is linear; modern forms are forests and nets. In every case you are learning a correlation in a dataset, not a law of nature. Without consistent activity units and a unified assay protocol, the model mixes lab noise with SAR.",
        ),
      },
      {
        type: "list",
        id: "l12-qsar-anatomy",
        title: L("تشريح نموذج لا يُخجل في المناقشة", "Anatomy of a viva-safe model"),
        items: [
          L("مصدر النشاط: فحص واحد إن أمكن؛ لا تخلط IC50 من بروتوكولات مختلفة دون اعتراف.", "Activity source: one assay if possible; do not mix IC50 values from different protocols without saying so."),
          L("تمثيل: واصفات قابلة للتفسير أو بصمات؛ اذكر البرمجية والإصدار.", "Representation: interpretable descriptors or fingerprints; name software and version."),
          L("تقسيم: scaffold-split أو زمني أفضل من عشوائي لسلسلة كيميائية.", "Split: scaffold or temporal split beats a random split on a chemical series."),
          L("مقياس: RMSE وR² على الاختبار، لا R² التدريب وحده.", "Metric: RMSE and R² on the test set, not training R² alone."),
          L("نطاق تطبيق applicability domain: إلزامي قبل أي تنبؤ.", "Applicability domain: mandatory before any prediction."),
        ],
      },
      {
        type: "callout",
        id: "l12-qsar-warn",
        kind: "warning",
        title: L("تحذير: الارتباط ليس آلية", "Warning: correlation is not mechanism"),
        body: L(
          "وزن سالب لـ TPSA لا يعني أن الجيب يكره القطبية؛ قد يعني أن السلسلة في التدريب تُظهر تلك المصادفة. تفسير معامل QSAR كخريطة جيب دون بنية رواية. نموذج ممتاز على نظائر قريبة قد يكون أعمى خارج scaffold التدريب.",
          "A negative TPSA weight does not mean the pocket hates polarity; it may mean the training series happens to look that way. Reading a QSAR coefficient as a pocket map without structure is storytelling. A model that is excellent on close analogues may be blind outside the training scaffold.",
        ),
      },
      {
        type: "callout",
        id: "l12-qsar-fact",
        kind: "fact",
        title: L("حقيقة: النشاط يجب أن يكون على مقياس مناسب", "Fact: activity must sit on a suitable scale"),
        body: L(
          "النمذجة على IC50 الخام تُفسد التباين عبر مراتب التركيز. pIC50 = −log10(IC50 بالمولار) مقياس شائع. خلط Ki وIC50 بلا تصحيح (مفهوم Cheng–Prusoff عندما تنطبق شروطه) خطأ في البيانات قبل أن يبدأ النموذج.",
          "Modelling raw IC50 distorts variance across concentration decades. pIC50 = −log10(IC50 in molar) is a common scale. Mixing Ki and IC50 without correction (Cheng–Prusoff where its assumptions hold) is a data error before the model starts.",
        ),
      },
      {
        type: "why",
        id: "l12-qsar-why",
        question: L("لماذا ما زال نموذج خطي بواصفات قليلة يُفضَّل أحياناً على شبكة عميقة؟", "Why is a linear model with few descriptors sometimes preferable to a deep net?"),
        answer: L(
          "لأن بيانات SAR الحقيقية غالباً عشرات إلى مئات المركبات. النموذج البسيط يُفضح حين يحفظ الضجيج، ويمكن مناقشة معاملاته. الشبكة على N صغير تحفظ ثم تنهار عند أول hop.",
          "Because real SAR tables are often tens to hundreds of compounds. A simple model is exposed when it fits noise, and its coefficients can be argued about. A net on small N memorises then dies on the first hop.",
        ),
      },
      {
        type: "whatif",
        id: "l12-qsar-whatif",
        scenario: L("ماذا لو نشرت QSAR بـ R² = 0.95 على التدريب دون مجموعة اختبار ودون applicability domain؟", "What if you publish a QSAR with training R² = 0.95, no test set, and no applicability domain?"),
        consequence: L(
          "هذا مطابقة منحنى، لا نموذج تنبؤي. أي جزيء جديد خارج محدب الواصفات تخمين، حتى لو أعطى البرنامج رقماً بثلاث خانات.",
          "That is curve fitting, not a predictive model. Any new molecule outside the descriptor hull is a guess, even if the software prints three decimal places.",
        ),
      },
      {
        type: "exercise",
        id: "l12-qsar-ex",
        prompt: L("لديك 80 مركباً من scaffold واحد وIC50 من مختبرات مختلفة. ما أول قرارين علميين قبل أن تلمس scikit-learn؟", "You have 80 compounds from one scaffold and IC50 values from different labs. What are the first two scientific decisions before you touch scikit-learn?"),
        solution: L("(1) هل يمكن توحيد المقياس والبروتوكول أم يجب فصل النماذج. (2) هل السؤال ترتيب داخل السلسلة أم تعميم خارجها؟ الثاني يكاد يستحيل بـ scaffold واحد ويجب أن يُقال صراحة.", "(1) Can scale and protocol be unified, or must models be split? (2) Is the question ranking inside the series or generalising beyond it? The second is nearly impossible with one scaffold and must be said out loud."),
      },
    ],
    ["l12-ad", "l12-valid", "l3-regression", "l16-classical"],
  ),

  expand(
    "l12-3dqsar",
    [
      L("شرح CoMFA/CoMSIA كمجلات حقل على شبكة حول هيئات مُحاذاة.", "Explain CoMFA/CoMSIA as grid fields around aligned poses."),
      L("اعتبار المحاذاة alignment فرضية النموذج المركزية.", "Treat alignment as the model's central hypothesis."),
      L("قراءة خرائط contour كإرشاد تصميم حذر لا ككثافة إلكترونية.", "Read contour maps as cautious design hints, not as electron density."),
    ],
    [
      {
        type: "prose",
        id: "l12-3d-intro",
        title: L("الحقل على الشبكة ليس الجيب", "A grid field is not the pocket"),
        body: L(
          "3D-QSAR (CoMFA، CoMSIA وأشباههما) يضع كل جزيء في هيئة ثلاثية الأبعاد على شبكة، ويحسب حقول steric/electrostatic (وغيرها في CoMSIA)، ثم يربط تلك المجلات بالنشاط عبر انحدار (غالباً PLS). إن كانت المحاذاة صحيحة بالنسبة لهيئة الارتباط، قد تُبرز الخرائط أين يُفضَّل الحجم أو الشحنة. إن كانت خاطئة، فالنموذج يحفظ خطأً جميلاً.",
          "3D-QSAR (CoMFA, CoMSIA and relatives) places each molecule in a 3D pose on a grid, computes steric/electrostatic fields (and further fields in CoMSIA), then maps those fields onto activity with a regression (often PLS). If the alignment matches the binding pose, maps may highlight where bulk or charge is favoured. If the alignment is wrong, the model memorises a beautiful error.",
        ),
      },
      {
        type: "list",
        id: "l12-3d-req",
        title: L("متطلبات لا تُتخطى", "Non-skippable requirements"),
        items: [
          L("مجموعة يُفترض أنها ترتبط بنفس الوضع في نفس الجيب.", "A set presumed to share one binding mode in one pocket."),
          L("هيئات معقولة طاقياً، لا حداً أدنى فراغي أعمى.", "Energetically plausible conformers, not a blind vacuum minimum."),
          L("قاعدة محاذاة صريحة: scaffold مشترك، أو pharmacophore، أو ليغند بلوري.", "An explicit alignment rule: shared scaffold, pharmacophore, or a crystal ligand."),
          L("تحقّق داخلي وخارجي؛ leave-one-out وحده لا يكفي للادّعاء التنبؤي.", "Internal and external validation; leave-one-out alone does not carry a predictive claim."),
        ],
      },
      {
        type: "callout",
        id: "l12-3d-warn",
        kind: "warning",
        title: L("تحذير: خريطة contour ليست كثافة ولا MEP تجريبياً", "Warning: a contour map is not density and not experimental MEP"),
        body: L(
          "الألوان تعني: في هذه المجموعة، التباين في الحقل عند تلك النقطة يرتبط بتباين النشاط. هذا ليس إثباتاً أن البقايا الفلانية تكره الشحنة. رسم الخريطة فوق بروتين دون أن تكون المحاذاة مأخوذة من ذلك البروتين خداع بصري شائع.",
          "The colours mean: in this set, field variance at that grid point correlates with activity variance. That does not prove a given residue hates charge. Painting the map on a protein when the alignment did not come from that protein is a common visual deceit.",
        ),
      },
      {
        type: "compare",
        id: "l12-3d-cmp",
        left: L("2D-QSAR", "2D-QSAR"),
        right: L("3D-QSAR", "3D-QSAR"),
        rows: [
          { dim: L("مدخل الهيئة", "Pose input"), a: L("لا يحتاج محاذاة 3D.", "No 3D alignment required."), b: L("المحاذاة جزء من النموذج.", "Alignment is part of the model.") },
          { dim: L("القوة", "Strength"), a: L("أسرع وأصلب إحصائياً على بيانات صغيرة.", "Faster and statistically stabler on small data."), b: L("قد يوجّه أين تضع حجماً أو شحنة إذا صدقت الهيئة.", "May guide where to put bulk or charge if the pose is true.") },
          { dim: L("الفشل الشائع", "Typical failure"), a: L("يفوّت stereochemistry الدقيقة.", "Misses fine stereochemistry."), b: L("محاذاة خاطئة تُنتج خرائط مقنعة.", "Wrong alignment yields convincing maps.") },
        ],
      },
      {
        type: "why",
        id: "l12-3d-why",
        question: L("لماذا PLS شائع هنا بدل انحدار عادي؟", "Why is PLS common here rather than ordinary regression?"),
        answer: L(
          "لأن عدد أعمدة الشبكة >> عدد الجزيئات. PLS يختصر المتغيرات المترابطة إلى مركبات كامنة. هذا لا يعفيك من overfit؛ يعالج فقط collinearity.",
          "Because the number of grid columns >> number of molecules. PLS compresses correlated variables into latent components. That does not exempt you from overfit; it only addresses collinearity.",
        ),
      },
      {
        type: "whatif",
        id: "l12-3d-whatif",
        scenario: L("ماذا لو حاذيت كل المركبات على scaffold ثم كان أحد النشطين يرتبط بشكل مقلوب في البلورة؟", "What if you align every compound on the scaffold and one active actually binds flipped in the crystal?"),
        consequence: L(
          "الحقول في نصف الجيب تُعلَّم بالمقلوب. الخرائط ستطلب ذرات حيث يصطدم البروتين. وجود بنية co-crystal واحدة للمنتمي للسلسلة يضرب نصف هذه المخاطر.",
          "Fields in half the pocket are taught backwards. Maps will demand atoms where the protein clashes. One co-crystal of a series member removes a large fraction of this risk.",
        ),
      },
      {
        type: "exercise",
        id: "l12-3d-ex",
        prompt: L("محكّم يسألك: ما الذي يجعل 3D-QSAR غير قابل للتفسير في ورقتك؟ اكتب إجابتين صادقتين.", "A reviewer asks: what would make the 3D-QSAR in your paper uninterpretable? Give two honest answers."),
        solution: L("(1) محاذاة غير موثّقة أو مأخوذة من تحسين فراغي لكل جزيء على حدة. (2) خلط آليات أو هيئات ارتباط، أو عدم وجود اختبار خارجي / applicability domain.", "(1) Undocumented alignment, or per-molecule vacuum optimisation. (2) Mixed mechanisms or binding modes, or no external test / applicability domain."),
      },
    ],
    ["l12-qsar", "l12-pharma", "l1-conform"],
  ),

  expand(
    "l12-ad",
    [
      L("تعريف applicability domain كحدود حيث النموذج مُبرَّر.", "Define the applicability domain as the bounds where the model is justified."),
      L("اعتبار أي تنبؤ خارج النطاق تخميناً حتى لو طُبع رقم.", "Treat any prediction outside the domain as a guess even if a number is printed."),
      L("اختيار مقياس نطاق يناسب التمثيل (واصفات مستمرة مقابل بصمات).", "Choose a domain metric that matches the representation (continuous descriptors vs fingerprints)."),
    ],
    [
      {
        type: "prose",
        id: "l12-ad-intro",
        title: L("النطاق ليس خياراً تجميلياً", "The domain is not an optional extra"),
        body: L(
          "نموذج QSAR أو ADMET تعلّم علاقة داخل مجموعة تدريب. applicability domain (AD) يجيب: هل الجزيء الجديد يشبه ما رآه النموذج كفاية حتى يُؤخذ رقمه بجدية؟ خارج النطاق، الخطأ غير معاير. إغفال AD في ورقة تنبؤ يحوّل البرنامج إلى مولد أرقام.",
          "A QSAR or ADMET model learned a relationship inside a training set. The applicability domain (AD) answers: is the new molecule close enough to what the model saw for its number to be taken seriously? Outside the domain, error is uncalibrated. Omitting AD from a predictive paper turns software into a number generator.",
        ),
      },
      {
        type: "list",
        id: "l12-ad-methods",
        title: L("طرق شائعة لتعريف النطاق", "Common ways to define the domain"),
        items: [
          L("صندوق الواصفات: مدى min–max أو مئينات كل واصفة.", "Descriptor box: min–max or percentiles per descriptor."),
          L("المسافة إلى التدريب: إقليدية/Mahalanobis في فضاء PCA.", "Distance to training: Euclidean/Mahalanobis in a PCA space."),
          L("الرافعة leverage في الانحدار الخطي.", "Leverage in linear regression."),
          L("تشابه البصمات: أقرب جار Tanimoto تحت عتبة معلنة.", "Fingerprint similarity: nearest-neighbour Tanimoto below a declared cutoff."),
        ],
      },
      {
        type: "callout",
        id: "l12-ad-warn",
        kind: "warning",
        title: L("تحذير: داخل الصندوق ≠ داخل الكيمياء", "Warning: inside the box ≠ inside the chemistry"),
        body: L(
          "قد يقع جزيء داخل حدود logP وMW وTPSA ويكون scaffoldه غائباً عن التدريب. AD الواصفات الفيزيوكيميائية أضعف من AD البنيوي للأسئلة الآلية. صرّح أي تعريف استخدمت، واعرض نسبة الجزيئات خارج النطاق في أي فرز.",
          "A molecule can sit inside logP, MW, and TPSA bounds while its scaffold is absent from training. A physicochemical-descriptor AD is weaker than a structural AD for mechanistic questions. State which definition you used, and report the fraction of molecules outside the domain in any screen.",
        ),
      },
      {
        type: "callout",
        id: "l12-ad-fact",
        kind: "fact",
        title: L("حقيقة منهجية", "Methodological fact"),
        body: L(
          "التنبؤ خارج applicability domain تخمين. لا يتحول إلى معرفة بإضافة خانتين عشريتين أو برسم ملون.",
          "A prediction outside the applicability domain is a guess. Extra decimal places and a colourful plot do not promote it to knowledge.",
        ),
      },
      {
        type: "why",
        id: "l12-ad-why",
        question: L("لماذا يكره بعض المؤلفين الإعلان عن النطاق؟", "Why do some authors dislike declaring a domain?"),
        answer: L(
          "لأنه يُقلّص عدد الجزيئات التي يُسمح لهم بالتباهي بتنبؤاتها، ويكشف أن الفرز الواسع كان في معظمه خارج خبرة النموذج. هذا بالضبط سبب وجوب الإعلان.",
          "Because it shrinks the set of molecules they are allowed to boast predictions for, and reveals that a wide screen was mostly outside the model's experience. That is exactly why declaration is required.",
        ),
      },
      {
        type: "whatif",
        id: "l12-ad-whatif",
        scenario: L("ماذا لو استخدمت نموذجاً مدرَّباً على kinase inhibitors لتنبؤ نشاط GPCR لمركب spiro جديد كلياً؟", "What if you use a model trained on kinase inhibitors to predict GPCR activity of a wholly new spiro compound?"),
        consequence: L(
          "خارج النطاق البنيوي والآلي معاً. الرقم الصادر ليس قياساً ولا تقديراً معايراً. إما أن ترفض التنبؤ أو تبني نموذجاً محلياً على بيانات GPCR.",
          "Outside both structural and mechanistic domain. The printed number is neither a measurement nor a calibrated estimate. Either refuse the prediction or build a local model on GPCR data.",
        ),
      },
      {
        type: "exercise",
        id: "l12-ad-ex",
        prompt: L("اكتب جملة methods صادقة من سطرين تربط تنبؤ QSAR بنطاق تانيموتو لأقرب جار.", "Write two honest Methods sentences that tie a QSAR prediction to a nearest-neighbour Tanimoto domain."),
        solution: L("«اعتُبر التنبؤ داخل النطاق إذا كان Tanimoto (Morgan radius 2, 2048 bits) إلى أقرب مركّب تدريب ≥ عتبة معلنة. المركبات دون العتبة تُبلَّغ بأنها خارج النطاق ولا تُفسَّر أرقامها كقيم نشاط.» العتبة تُبرَّر على مجموعة تحقق.", "'A prediction was in-domain if Morgan radius-2 2048-bit Tanimoto to the nearest training compound was ≥ a declared cutoff. Compounds below the cutoff are reported as out-of-domain and their numeric outputs are not interpreted as activity values.' The cutoff is justified on a validation set."),
      },
    ],
    ["l12-qsar", "l12-valid", "l16-limits"],
  ),

  expand(
    "l12-valid",
    [
      L("التفريق بين التحقّق الداخلي والخارجي والزمني.", "Separate internal, external, and temporal validation."),
      L("استخدام y-scrambling لكشف النماذج التي تحفظ الضجيج.", "Use y-scrambling to expose models that fit noise."),
      L("رفض التقسيم العشوائي وحده على بيانات series كيميائية.", "Reject random splitting alone on chemical-series data."),
    ],
    [
      {
        type: "prose",
        id: "l12-val-intro",
        title: L("الصدق أغلى من R²", "Honesty is more expensive than R²"),
        body: L(
          "التحقّق يجيب: هل سيعمل النموذج على جزيئات لم تُستخدم في تقدير معاملاته؟ التحقّق الداخلي يقدّر ذلك داخل نفس التوزيع. الاختبار الخارجي يجب أن يُحجب حتى تثبيت النموذج. التقسيم الزمني (أقدم → تدريب، أحدث → اختبار) يحاكي الاستخدام الحقيقي في مشروع medchem.",
          "Validation answers: will the model work on molecules that were not used to estimate its parameters? Internal validation estimates that inside the same distribution. An external test must stay hidden until the model is frozen. A temporal split (older → train, newer → test) mimics real use in a medchem project.",
        ),
      },
      {
        type: "list",
        id: "l12-val-tools",
        title: L("أدوات تكشف الوهم", "Tools that expose illusion"),
        items: [
          L("Y-scrambling: اخلط قيم النشاط وأعد التدريب. إن بقي الأداء عالياً فالنموذج يحفظ الواصفات لا SAR.", "Y-scrambling: shuffle activities and retrain. If performance stays high, the model is fitting descriptors, not SAR."),
          L("Scaffold split: احجب هيكلاً بأكمله. أصعب وأصدق من split عشوائي.", "Scaffold split: hold out an entire core. Harder and more honest than a random split."),
          L("منحنى التعلم: هل يتحسّن الاختبار بزيادة N أم أنك في ضجيج؟", "Learning curve: does test performance improve with N, or are you in noise?"),
          L("معايرة الأخطاء: هل ± المعلن يشبه الأخطاء الحقيقية خارج العينة؟", "Error calibration: does the advertised ± resemble actual out-of-sample errors?"),
        ],
      },
      {
        type: "callout",
        id: "l12-val-warn",
        kind: "warning",
        title: L("تحذير: تسريب التقييم", "Warning: evaluation leakage"),
        body: L(
          "اختيار الواصفات بعد النظر إلى الاختبار، أو إعادة تقسيم حتى يتحسّن الرقم، أو استخدام نظائر قريبة جداً في الطرفين، كلّه تسريب. Q² الداخلي المرتفع مع فشل خارجي شائع في 3D-QSAR.",
          "Selecting descriptors after peeking at the test set, re-splitting until the number improves, or placing near-analogues on both sides, are all leakage. High internal Q² with external failure is common in 3D-QSAR.",
        ),
      },
      {
        type: "compare",
        id: "l12-val-cmp",
        left: L("Random split", "Random split"),
        right: L("Scaffold / temporal split", "Scaffold / temporal split"),
        rows: [
          { dim: L("ما يقيسه", "What it measures"), a: L("الاستيفاء بين نظائر مختلطة.", "Interpolation among shuffled analogues."), b: L("التعميم على هيكل جديد أو على مستقبل المشروع.", "Generalisation to a new core or to the project's future.") },
          { dim: L("الرقم المتوقع", "Typical number"), a: L("أكثر إطراءً، أقل صلة بالقرار.", "More flattering, less decision-relevant."), b: L("أقسى، أقرب لما ستفعله غداً.", "Harsher, closer to what you will do tomorrow.") },
        ],
      },
      {
        type: "why",
        id: "l12-val-why",
        question: L("لماذا y-scrambling وليس فقط مجموعة اختبار؟", "Why y-scrambling and not only a test set?"),
        answer: L(
          "مجموعة اختبار صغيرة قد تُحسن بالمصادفة. إذا كان بإمكانك الحصول على أداء مشابه بعد خلط y، فإن الواصفات والمرونة النموذجية كافيتان لحفظ الضجيج.",
          "A small test set can look good by chance. If you can match performance after shuffling y, the descriptors and model flexibility are enough to memorise noise.",
        ),
      },
      {
        type: "whatif",
        id: "l12-val-whatif",
        scenario: L("ماذا لو كان كل مركبات الاختبار ضمن Tanimoto 0.9 من التدريب؟", "What if every test compound sits at Tanimoto 0.9 from training?"),
        consequence: L(
          "أنت تقيس إعادة إنتاج النظائر، لا التنبؤ. استخدام هذا الرقم للادعاء بأن النموذج يصلح لفرز ZINC كامل تضليل.",
          "You are measuring analogue interpolation, not prediction. Using that number to claim the model can screen all of ZINC is misleading.",
        ),
      },
      {
        type: "exercise",
        id: "l12-val-ex",
        prompt: L("صمّم خطة تحقّق من أربع نقاط لـ 120 مثبطاً عبر ثلاثة scaffolds.", "Design a four-point validation plan for 120 inhibitors across three scaffolds."),
        solution: L("(1) تجميد الواصفات مسبقاً. (2) تدريب على scaffoldين واختبار الثالث بالتناوب. (3) y-scrambling على نفس الواصفات. (4) AD لأقرب جار. لا مجموعة تجميل بعد رؤية النتائج.", "(1) Freeze descriptors in advance. (2) Train on two scaffolds, test the third, rotate. (3) Y-scramble with the same descriptors. (4) Nearest-neighbour AD. No cosmetic hold-out after seeing results."),
      },
    ],
    ["l12-qsar", "l12-ad", "l16-pipeline"],
  ),
  expand(
    "l13-libs",
    [
      L("التمييز بين مكتبات vendor وbioactive وenumerated وmake-on-demand كمفاهيم.", "Distinguish vendor, bioactive, enumerated, and make-on-demand libraries as concepts."),
      L("التعامل مع ZINC وChEMBL وPubChem وDrugBank بحذر ترخيص ووصول حالي.", "Treat ZINC, ChEMBL, PubChem, and DrugBank with current-access and license caution."),
      L("معرفة أن جودة المكتبة تسبق جودة الالتحام.", "Know that library quality precedes docking quality."),
    ],
    [
      {
        type: "prose",
        id: "l13-lib-intro",
        title: L("المكتبة تقرر ماذا يمكن أن تجده", "The library decides what you can find"),
        body: L(
          "الفرز الافتراضي ليس بحثاً في «كل الكيمياء»، بل في الملف الذي حمّلته. مكتبة vendor قابلة للشراء تختلف عن ChEMBL (نشاطات منشورة بتحيز أدبيات) وعن PubChem (مواد وفحوص مختلطة) وعن DrugBank (أدوية ومعلومات سريرية). ZINC تجمّع مركبات للشراء/الطلب — محتواها وترخيصها وواجهتها تتغيّر. تحقّق من الوصول الحالي وشروط الاستخدام قبل أي حملة، ولا تُعامل لقطة قديمة كحقيقة أبدية.",
          "Virtual screening is not a search of 'all chemistry'; it is a search of the file you loaded. A purchasable vendor library is not ChEMBL (published activities, literature-biased), not PubChem (mixed substances and assays), and not DrugBank (drugs and clinical information). ZINC aggregates purchasable/make-on-demand molecules — content, license, and interface change. Verify current access and terms before any campaign, and do not treat an old snapshot as eternal truth.",
        ),
      },
      {
        type: "list",
        id: "l13-lib-types",
        title: L("أنواع مكتبات — مفاهيمياً", "Library types — conceptually"),
        items: [
          L("In-stock vendor: أسرع وصولاً، أضيق كيمياء.", "In-stock vendor: fastest to obtain, narrower chemistry."),
          L("Make-on-demand: فضاء أوسع، زمن ونجاح تخليق غير مضمونين.", "Make-on-demand: larger space, synthesis time and success not guaranteed."),
          L("Bioactive (ChEMBL-like): مفيدة لـ LBDD وإعادة الاستخدام، متحيزة لما نُشر.", "Bioactive (ChEMBL-like): useful for LBDD and repurposing, biased by what was published."),
          L("Enumerated virtual: تغطية هائلة، نسبة كبيرة غير قابلة للصنع أو غير مستقرة.", "Enumerated virtual: huge coverage, a large fraction unsynthesizable or unstable."),
          L("Focused: مبنية على pharmacophore أو warhead تساهمي مفترض.", "Focused: built on a pharmacophore or a presumed covalent warhead."),
        ],
      },
      {
        type: "callout",
        id: "l13-lib-warn",
        kind: "warning",
        title: L("تحذير: قواعد البيانات ليست أرضاً مشاعاً بلا شروط", "Warning: databases are not condition-free commons"),
        body: L(
          "لكل مصدر شروط استخدام وقيود إعادة توزيع وأحياناً متطلبات إسناد. بعض السجلات بنى خاطئة أو أملاح أو stereochemistry ناقصة. قبل الفرز: أزل التكرار، عالج الأملاح، وحَيِّد التوتومرات وفق بروتوكول معلن. لا تختلق أرقام حجم المكتبة الحالية — راجع المصدر يوم عملك.",
          "Each source has terms of use, redistribution limits, and sometimes attribution requirements. Records include wrong structures, salts, and missing stereochemistry. Before screening: deduplicate, handle salts, and canonicalise tautomers with a declared protocol. Do not invent current library sizes — check the source on the day you work.",
        ),
      },
      {
        type: "steps",
        id: "l13-lib-prep",
        title: L("تحضير مكتبة قبل أن تلمس الالتحام", "Prepare a library before you touch docking"),
        items: [
          { title: L("نظافة بنيوية", "Structure cleanup"), body: L("أملاح، counterions، شحنات، تكافؤات مستحيلة.", "Salts, counter-ions, charges, impossible valences.") },
          { title: L("إزالة التكرار", "Deduplicate"), body: L("InChIKey أو SMILES canonical بعد اختيار tautomer/protomer.", "InChIKey or canonical SMILES after tautomer/protomer choice.") },
          { title: L("ترشيح أوّلي", "Primary filters"), body: L("MW، عناصر غريبة، مجموعات reactive إن كان الفحص لا يريدها.", "MW, exotic elements, reactive groups if the assay does not want them.") },
          { title: L("وثّق اللقطة", "Document the snapshot"), body: L("تاريخ التنزيل، الإصدار، عدد الجزيئات بعد كل خطوة.", "Download date, version, molecule counts after each step.") },
        ],
      },
      {
        type: "why",
        id: "l13-lib-why",
        question: L("لماذا قد تهزم مكتبة صغيرة نظيفة مكتبة مليونية متسخة؟", "Why can a small clean library beat a dirty million-compound file?"),
        answer: L("لأن الإيجابيات الكاذبة تكلف تخليقاً وفحصاً. مكتبة متسخة تضاعف PAINS والaggregators والبنى الخاطئة. الوقت على التحضير يعيد شراء الإشارة في نهاية الخط.", "Because false positives cost synthesis and assays. A dirty library multiplies PAINS, aggregators, and broken structures. Time spent on preparation buys signal at the end of the line."),
      },
      {
        type: "whatif",
        id: "l13-lib-whatif",
        scenario: L("ماذا لو فرزت لقطة ZINC قديمة ثم حاولت شراء المركبات اليوم؟", "What if you screen an old ZINC snapshot and try to buy the compounds today?"),
        consequence: L("قد تكون غير متاحة أو تغيّر المورد أو التمثيل stereochemical. مكتبات in-stock للدورات السريعة، وفضائيات أوسع عندما تملك زمناً للتخليق.", "They may be unavailable, or vendor and stereochemical representation may have changed. In-stock libraries for fast cycles; larger enumerated spaces when you can wait on synthesis."),
      },
      {
        type: "exercise",
        id: "l13-lib-ex",
        prompt: L("لمشروع يحتاج 50 مركباً قابلة للشراء في شهر: أي نوع مكتبة تختار، وما الذي توثّقه في methods؟", "For a project that needs 50 purchasable compounds within a month: which library type do you choose, and what do you document in Methods?"),
        solution: L("In-stock vendor أو subset متاح الشراء من مجمع محدَّث. في methods: المصدر، تاريخ اللقطة، بروتوكول إزالة الأملاح والتكرار، وعدد الجزيئات الداخل/الخارج.", "An in-stock vendor set or a currently purchasable subset from an updated aggregator. In Methods: source, snapshot date, salt/dedup protocol, and in/out molecule counts."),
      },
    ],
    ["l13-filter", "l5-smiles", "l14-pains"],
  ),

  expand(
    "l13-filter",
    [
      L("وضع مرشحات فيزيوكيميائية قبل حساب docking المكلف.", "Place physicochemical filters before expensive docking."),
      L("التمييز بين مرشح للتجربة (reactive) ومرشح للملكية (Ro5).", "Distinguish assay-risk filters (reactive) from property filters (Ro5)."),
      L("ضبط المرشحات حسب طريقة الإعطاء والهدف، لا كنسخ لصق.", "Tune filters to route of administration and target, not as copy-paste."),
    ],
    [
      {
        type: "prose",
        id: "l13-fil-intro",
        title: L("لا تدفع ثمن التحام لجزيء لن تفحصه", "Do not pay to dock a molecule you will never assay"),
        body: L(
          "الترشيح يُخرج ما هو ثقيل جداً، قطبي جداً، reactive بما يفسد الفحص، أو مخالف لمساحة الملكية التي قررت استكشافها. كل مرشح يقتل أيضاً كيمياء شرعية (مضادات حيوية، beyond-Ro5، covalent). لذلك المرشح قرار مشروع: يُكتب ويُبرَّر، ويُحصى كم جزيء سقط في كل بوابة.",
          "Filtering removes what is too heavy, too polar, too reactive for the assay, or outside the property space you chose to explore. Every filter also kills legitimate chemistry (antibiotics, beyond-Ro5, covalent). So a filter is a project decision: written, justified, with a count of how many molecules died at each gate.",
        ),
      },
      {
        type: "list",
        id: "l13-fil-layers",
        title: L("طبقات شائعة", "Common layers"),
        items: [
          L("كيميائية أولية: تكافؤ، عناصر مسموحة، إزالة المخاليط.", "Primary chemistry: valence, allowed elements, drop mixtures."),
          L("ملكية: نوافذ MW، logP/logD، TPSA، rotatable bonds — إرشاد لا شريعة.", "Property: windows on MW, logP/logD, TPSA, rotatable bonds — guidance, not scripture."),
          L("مخاطر فحص: PAINS، aggregators معروفة، مجموعات reactive إن كان الفحص biochemical هشاً.", "Assay risk: PAINS, known aggregators, reactive groups if the biochemical assay is fragile."),
          L("تنوّع: إن كانت المكتبة مليئة بنظائر، قلّل redundancy قبل الالتحام.", "Diversity: if the library is analogue-heavy, reduce redundancy before docking."),
        ],
      },
      {
        type: "callout",
        id: "l13-fil-warn",
        kind: "warning",
        title: L("تحذير: نسخ عتبات Lipinski على هدف covalent أو PPI خطأ", "Warning: pasting Lipinski cutoffs onto a covalent or PPI target is a mistake"),
        body: L(
          "المرشحات وُلدت من إحصاء أدوية فموية تاريخية. هدف protein–protein قد يحتاج مركبات أكبر. مثبط تساهمي يحتاج warhead كانت ستُحذف كـ reactive. اضبط النوافذ على السؤال، واذكر الاستثناءات.",
          "Filters were born from statistics on historical oral drugs. A protein–protein target may need larger compounds. A covalent inhibitor needs a warhead that a reactive filter would delete. Fit windows to the question, and name the exceptions.",
        ),
      },
      {
        type: "steps",
        id: "l13-fil-practice",
        title: L("ممارسة نزيهة", "Honest practice"),
        items: [
          { title: L("عرّف النوافذ قبل رؤية الدرجات", "Define windows before seeing scores"), body: L("وإلا فستُحرّك العتبة حتى يبقى ما يعجبك.", "Otherwise you will move the cutoff until you like what remains.") },
          { title: L("احفظ مجموعات الإسقاط", "Keep the rejected sets"), body: L("قد تحتاج لاحقاً أن تسأل: هل قتلنا كيمياء جيدة؟", "You may later need to ask: did we kill good chemistry?") },
          { title: L("لا تُكدّس عشرين مرشحاً مترابطاً", "Do not stack twenty correlated filters"), body: L("MW وlogP وTPSA ليست مستقلة تماماً.", "MW, logP, and TPSA are not fully independent.") },
        ],
      },
      {
        type: "why",
        id: "l13-fil-why",
        question: L("لماذا الترشيح قبل الالتحام لا بعده فقط؟", "Why filter before docking, not only after?"),
        answer: L("التكلفة الحسابية والتكلفة المعرفية: ملايين الـ poses لجزيئات لن تُشترى تُغرق التحليل البشري. الترشيح اللاحق يبقى مفيداً (strain، تفاعلات مفتاحية) لكنه لا يعوّض ساعة عنقود ضائعة على aggregators.", "Compute cost and cognitive cost: millions of poses for molecules you will never buy drown human analysis. Post-filters remain useful (strain, key interactions) but they do not refund a cluster-hour spent on aggregators."),
      },
      {
        type: "whatif",
        id: "l13-fil-whatif",
        scenario: L("ماذا لو حذفت كل جزيء فيه نتروفينيل لأن قائمة PAINS تكرهه، والهدف يقبل تثبيطاً تساهمياً عبر تلك الكيمياء؟", "What if you delete every nitrophenyl because a PAINS list dislikes it, and the target actually accepts covalent inhibition via that chemistry?"),
        consequence: L("المرشح الأعمى يقتل الفرضية قبل اختبارها. PAINS إنذار لخطر فحص، لا فتوى آلية. للهدف التساهمي تُبنى قائمة warheads مقصودة.", "A blind filter kills the hypothesis before it is tested. PAINS is an assay-risk alarm, not a mechanistic fatwa. For a covalent target you build an intended warhead list."),
      },
      {
        type: "exercise",
        id: "l13-fil-ex",
        prompt: L("اكتب نوافذ ترشيح لمشروع فموي kinase، ثم استثناءً واحداً معلناً.", "Write filter windows for an oral kinase project, then one declared exception."),
        solution: L("مثال إرشادي لا كقانون: نوافذ drug-like فموية لـ MW وlogD وTPSA وrotatable bonds. الاستثناء: fragment hits بنوافذ أوسع عمداً. الأرقام الدقيقة قرار مشروع تُراجع على بيانات السلسلة.", "A heuristic, not a law: oral drug-like windows on MW, logD, TPSA, rotatable bonds. Exception: fragment hits kept in wider windows on purpose. Exact numbers are a project decision revised on series data."),
      },
    ],
    ["l13-libs", "l14-lipinski", "l14-pains"],
  ),

  expand(
    "l13-workflow",
    [
      L("رسم خط الفرز كسلسلة قرارات لا كخط أنابيب سحري.", "Draw screening as a chain of decisions, not a magic pipeline."),
      L("معرفة ماذا يُضاف في كل سهم وماذا يُفقد.", "Know what each arrow adds and what it discards."),
      L("رفض أن كثرة الخطوات تساوي زيادة الحقيقة.", "Refuse the idea that more steps equal more truth."),
    ],
    [
      {
        type: "prose",
        id: "l13-wf-intro",
        title: L("كل سهم قرار", "Every arrow is a decision"),
        body: L(
          "خط شائع: مكتبة → تنظيف → مرشحات ملكية → docking → مرشح هيئة → إعادة تقييم / consensus → (أحياناً) MD قصير أو MM/PBSA → ADMET in silico → أولوية شراء. كل صندوق يُسقط كيمياء ويقبل خطأً من نوع جديد. المنهج يُبرَّر بالسؤال العلمي وميزانية الفحص، لا بمحاكاة أوراق سابقة.",
          "A common line: library → cleanup → property filters → docking → pose filter → rescoring / consensus → (sometimes) short MD or MM/PBSA → in-silico ADMET → purchase priority. Each box drops chemistry and admits a new error type. The protocol is justified by the scientific question and the assay budget, not by imitating previous papers.",
        ),
      },
      {
        type: "steps",
        id: "l13-wf-boxes",
        title: L("صناديق الخط ومعناها", "Pipeline boxes and their meaning"),
        items: [
          { title: L("مكتبة + تنظيف", "Library + cleanup"), body: L("تحديد فضاء البحث الكيميائي المتاح فعلاً.", "Defines the chemical space you can actually reach.") },
          { title: L("ترشيح", "Filtering"), body: L("حذف ما لن يُفحص أو ما يفسد الفحص.", "Drop what will not be assayed or what will wreck the assay.") },
          { title: L("Docking / pharmacophore / similarity", "Docking / pharmacophore / similarity"), body: L("فرضية استرجاع، ليست طاقة ارتباط.", "A retrieval hypothesis, not binding free energy.") },
          { title: L("عين كيميائية + ADMET", "Chemical eye + ADMET"), body: L("ما الذي يستحق أن يُشترى لا ما الذي «فاز» بالدرجة.", "What is worth buying, not what 'won' the score.") },
        ],
      },
      {
        type: "callout",
        id: "l13-wf-warn",
        kind: "warning",
        title: L("تحذير: خط أطول قد يكون أضعف", "Warning: a longer pipeline can be weaker"),
        body: L(
          "إضافة MM/PBSA على poses غير مُتحقَّق منها، أو MD 10 ns بلا نُسخ، يُضيف ثقة زائفة لا معلومات. كل طبقة تحتاج قاعدة مرور مكتوبة قبل تشغيلها. إن كنت لا تستطيع شرح لماذا نجا مركّب، فالخط صندوق أسود.",
          "Adding MM/PBSA on unvalidated poses, or 10 ns MD with no replicas, adds false confidence rather than information. Each layer needs a written pass rule before it is run. If you cannot explain why a compound survived, the pipeline is a black box.",
        ),
      },
      {
        type: "list",
        id: "l13-wf-validate",
        title: L("تحقّق الخط قبل الفرز الحقيقي", "Validate the pipeline before the real screen"),
        items: [
          L("Redocking ليغند معروف: هل تُستعاد الهيئة تحت عتبة RMSD تعلنها؟", "Redock a known ligand: is the pose recovered under a declared RMSD cutoff?"),
          L("مجموعة actives/decoys إن وُجدت: AUC/EF مع تحفظ التحيز.", "An actives/decoys set if you have one: AUC/EF with bias caveats."),
          L("Control سلبي: هل يمرّ جزيء عشوائي من كل البوابات بسهولة مريبة؟", "Negative control: does a random molecule slip every gate too easily?"),
        ],
      },
      {
        type: "why",
        id: "l13-wf-why",
        question: L("لماذا لا نرسي كل المكتبة ثم نأخذ أفضل ألف درجة؟", "Why not dock the whole library and take the top thousand scores?"),
        answer: L("لأن دالة التقييم تُثري اللييغندات الكبيرة المحبة للدهن، ولأنك ستغرق في نظائر متكررة وهيئات مستحيلة. الترشيح والتنوّع ومرشح الهيئة أدوات ضد غريزة الدرجة.", "Because scoring functions enrich large lipophilic ligands, and because you will drown in repeated analogues and impossible poses. Filtering, diversity, and pose filters are tools against score instinct."),
      },
      {
        type: "whatif",
        id: "l13-wf-whatif",
        scenario: L("ماذا لو أسقطت مرشح hinge-bond في kinase لأن «الخط يجب أن يكون غير متحيز»؟", "What if you drop a kinase hinge-bond filter because 'the pipeline must stay unbiased'?"),
        consequence: L("ستمتلئ القائمة بـ poses معكوسة ودرجات لامعة. التحيّز العلمي المعلن أفضل من حياد زائف يتجاهل كيمياء الهدف.", "The list will fill with flipped poses and glossy scores. An explicit scientific bias is better than fake neutrality that ignores target chemistry."),
      },
      {
        type: "exercise",
        id: "l13-wf-ex",
        prompt: L("ارسم خطك لفرز 200 ألف مركّب نحو فحص biochemical لـ 200 مركّب كحد أقصى. حدّد أين تُستخدم العين البشرية.", "Sketch your pipeline for 200k compounds toward a biochemical assay of at most 200. Mark where the human eye is used."),
        solution: L("تنظيف ومرشحات آلية أولاً. docking بعد إثبات redocking. مرشح تفاعل مفتاحي ثم مراجعة بصرية لمرشحي القمة قبل الشراء. لا MD/MM-PBSA على المئات بلا مبرر. العين عند الهيئة والكيمياء الطبية لا عند كل درجة.", "Cleanup and automated filters first. Docking after a redocking sanity check. Key-interaction filter, then visual review of top candidates before purchase. No MD/MM-PBSA on hundreds without justification. The eye is for pose and medicinal chemistry, not every score."),
      },
    ],
    ["l13-filter", "l13-consensus", "l8-validation"],
  ),

  expand(
    "l13-consensus",
    [
      L("تعريف التقييم التوافقي كاجتماع دوال مختلفة لا كتصويت سحري.", "Define consensus scoring as a meeting of different functions, not a magic vote."),
      L("وضع مرشحات الهيئة (strain، تفاعل مفتاحي) فوق متوسط الدرجات.", "Place pose filters (strain, key interaction) above average scores."),
      L("معرفة أن الإجماع لا يُصلح فيزياء ناقصة.", "Know that consensus does not repair missing physics."),
    ],
    [
      {
        type: "prose",
        id: "l13-con-intro",
        title: L("عدة أخطاء لا تُلغى بالتصويت دائماً", "Several errors do not always cancel by voting"),
        body: L(
          "Consensus scoring يجمع ترتيب دوال تقييم مختلفة. الفكرة: الخطأ غير المترابط يُخفَّف. الواقع: كثير من الدوال تشترك في حبّها للجزيء الكبير والملامس السطحي، فيبقى التحيّز. التوافق مفيد كمرشح إضافي بعد أن تكون الهيئة معقولة كيميائياً.",
          "Consensus scoring combines rankings from different scoring functions. The idea: uncorrelated error averages down. In reality many functions share a love of large, greasy, surface-contacting ligands, so the bias remains. Consensus is useful as an extra filter after the pose is chemically plausible.",
        ),
      },
      {
        type: "list",
        id: "l13-con-pose",
        title: L("مرشحات هيئة أقوى من متوسط الأرقام", "Pose filters stronger than mean scores"),
        items: [
          L("وجود تفاعل فرضي مفتاحي (hinge H-bond، salt bridge للمعدن).", "Presence of a hypothesized key interaction (hinge H-bond, metal salt bridge)."),
          L("strain: هيئة الليجند ليست بعيدة جداً عن هيئة محلول معقولة.", "Strain: ligand pose not far from a plausible solution conformer."),
          L("عدم اصطدام فادح بعد إضافة hydrogens صحيحة.", "No severe clash once hydrogens are correctly placed."),
          L("إشغال hotspot لا ملء سطح البروتين.", "Occupying a hotspot, not painting the protein surface."),
        ],
      },
      {
        type: "callout",
        id: "l13-con-lim",
        kind: "limitation",
        title: L("محدودية الإجماع", "Limitation of consensus"),
        body: L(
          "إذا أخطأت كل الدوال في protonation أو في غياب ماء جسري، فالإجماع سيكون على الخطأ. لا تخلط درجات بوحدات مختلفة دون تحويل رتبي. ولا تَعرض «درجة توافقية» كأنها ΔG.",
          "If every function is wrong about protonation or a missing bridging water, consensus will agree on the error. Do not mix scores in different units without a rank transform. Do not present a 'consensus score' as if it were ΔG.",
        ),
      },
      {
        type: "compare",
        id: "l13-con-cmp",
        left: L("متوسط درجات", "Mean of scores"),
        right: L("مرشح فيزيائي ثم ترتيب", "Physics filter then rank"),
        rows: [
          { dim: L("ماذا ينجو", "What survives"), a: L("ما تحبه الدوال كلها، بما فيه التحيز المشترك.", "Whatever all functions like, including shared bias."), b: L("ما يمرّ بفرضية كيميائية ثم يُرتَّب.", "What passes a chemical hypothesis, then is ranked.") },
          { dim: L("قابلية الدفاع", "Defensibility"), a: L("ضعيفة إن لم تُفسَّر الهيئة.", "Weak if the pose is unexplained."), b: L("أقوى: جملة «نجا لأنه يحفظ X».", "Stronger: the sentence 'it survived because it keeps X'.") },
        ],
      },
      {
        type: "why",
        id: "l13-con-why",
        question: L("لماذا قد يُفضَّل محرك واحد مفهوم على خمسة محركات غامضة؟", "Why might one understood engine be better than five opaque engines?"),
        answer: L("لأنك تستطيع أن تشرح الفشل: صندوق صغير، tautomer خاطئ، exhaustiveness غير كافٍ. خمسة مخرجات بلا فرضية مشتركة تُحوّل الورقة إلى مسابقة برمجيات.", "Because you can explain failure: box too small, wrong tautomer, insufficient exhaustiveness. Five outputs with no shared hypothesis turn the paper into a software contest."),
      },
      {
        type: "whatif",
        id: "l13-con-whatif",
        scenario: L("ماذا لو أخذت تقاطع أفضل 1% من ثلاثة برامج وكانت كلها تفضّل نفس الـ scaffold الدهني؟", "What if you take the intersection of the top 1% from three programs and they all prefer the same greasy scaffold?"),
        consequence: L("حصلت على إجماع تحيز لا إجماع حقيقة. افحص MW وlogP لتلك المجموعة مقابل المكتبة. إن انزاحت نحو الأكبر والأكثر دهنية، فالتوافق لم يُضف فيزياء.", "You obtained consensus bias, not consensus truth. Check MW and logP of that set against the library. If it shifts toward larger and greasier, agreement added no physics."),
      },
      {
        type: "exercise",
        id: "l13-con-ex",
        prompt: L("اكتب قاعدة مرور لـ pose kinase قبل أي consensus.", "Write a pose-pass rule for a kinase before any consensus."),
        solution: L("يجب أن يوجد H-bond مع hinge ضمن هندسة معلنة، وألا يخترق حجم vdW البروتين بعد hydrogens، وأن تبقى شحنة الليجند متسقة مع pH 7.4. بعد ذلك فقط تُستخدم الرتب كترتيب لا كدليل ارتباط.", "A hinge H-bond within a declared geometry must exist, the ligand must not penetrate protein vdW volume after hydrogens, and ligand charge must be consistent with pH 7.4. Only then may ranks be used as an ordering — not as binding evidence."),
      },
    ],
    ["l13-workflow", "l13-priority", "l8-scoring"],
  ),

  expand(
    "l13-priority",
    [
      L("ترتيب الإصابات كمسألة متعددة المعايير لا كفرز درجة واحدة.", "Treat hit priority as multi-criterion, not as sorting one score."),
      L("إدخال عين الكيمياء الطبية وإمكانية التخليق في القرار.", "Put medicinal-chemistry judgement and synthetic access into the decision."),
      L("توثيق لماذا نجا كل مركّب مرشَّح للشراء.", "Document why each purchase candidate survived."),
    ],
    [
      {
        type: "prose",
        id: "l13-pri-intro",
        title: L("الرقم لا يشتري المركب", "The number does not buy the compound"),
        body: L(
          "بعد الفرز يبقى قرار: ماذا نطلب من الكيميائي أو المورّد؟ الأولوية تجمع معقولية الهيئة، تنوّع scaffold، خصائص ADMET تقريبية، سعر وتوفر، وإمكانية تعديل لاحق. مركّب متوسط الدرجة على هيكل قابل للعمل أفضل من بطل درجة ميت تخليقياً.",
          "After the screen comes a decision: what do we request from a chemist or vendor? Priority combines pose plausibility, scaffold diversity, rough ADMET, price and availability, and later editability. A mid-score compound on a workable core beats a score champion that cannot be made.",
        ),
      },
      {
        type: "list",
        id: "l13-pri-axes",
        title: L("محاور الأولوية", "Priority axes"),
        items: [
          L("الكيمياء: هل الهيئة تُقنع؟ هل هناك متجه واضح للتحسين؟", "Chemistry: is the pose convincing? is there a clear growth vector?"),
          L("التنوّع: أغطِّ عدة scaffolds لئلا يموت المشروع بسلسلة واحدة.", "Diversity: cover several scaffolds so the project does not die with one series."),
          L("ADMET الأولي: logD، TPSA، تنبيهات PAINS/hERG كإنذارات.", "Early ADMET: logD, TPSA, PAINS/hERG alerts as alarms."),
          L("اللوجستيا: in-stock مقابل تخليق أسابيع.", "Logistics: in-stock versus weeks of synthesis."),
        ],
      },
      {
        type: "callout",
        id: "l13-pri-lim",
        kind: "limitation",
        title: L("محدودية: لا دالة سحرية للأولوية", "Limitation: no magic priority function"),
        body: L(
          "وزن درجة docking + QED + SA score في معادلة واحدة يُنتج رقماً جديداً بنفس مشكلات أجزائه. الأفضل جدول صريح يراه الفريق. القرار بشري ومسؤول.",
          "Weighting docking score + QED + SA score into one equation produces a new number with the same problems as its parts. Better: an explicit table the team can see. The decision is human and owned.",
        ),
      },
      {
        type: "steps",
        id: "l13-pri-meet",
        title: L("اجتماع اختيار الإصابات", "The hit-picking meeting"),
        items: [
          { title: L("اعرض الهيئة لا الجدول فقط", "Show the pose, not only the spreadsheet"), body: L("إن لم يستطع الكيميائي فهم لماذا يرتبط، لا يُشترَ.", "If a chemist cannot see why it binds, it is not bought.") },
          { title: L("حدّد عدد الـ scaffolds", "Cap scaffolds"), body: L("لا أكثر من N من كل عنقود تشابه.", "No more than N from each similarity cluster.") },
          { title: L("أبقِ ضوابط", "Keep controls"), body: L("مركّب مشابه متوقع سلبي إن أمكن — يختبر الفحص والفرضية.", "A similar expected negative if possible — tests the assay and the hypothesis.") },
        ],
      },
      {
        type: "why",
        id: "l13-pri-why",
        question: L("لماذا التنوّع جزء من الأولوية لا من الزينة؟", "Why is diversity part of priority rather than decoration?"),
        answer: L("لأن الفحص قد يُظهر أن السلسلة «الفائزة» aggregators أو غير قابلة للتحسين. تنوّع الـ scaffold تأمين ضد فشل نمط واحد.", "Because the assay may show that the 'winning' series are aggregators or unoptimizable. Scaffold diversity insures against one failure mode."),
      },
      {
        type: "whatif",
        id: "l13-pri-whatif",
        scenario: L("ماذا لو اشتريت أفضل 50 درجة وكانت كلها نفس الـ core مع تغييرات طرفية؟", "What if you buy the top 50 scores and they are all the same core with terminal tweaks?"),
        consequence: L("فحصت مركّباً واحداً خمسين مرة. إن فشل الـ core فشل المشروع. أعد التجميع clustering قبل الشراء وخذ ممثلين.", "You assayed one compound fifty times. If the core fails, the project fails. Cluster before purchase and take representatives."),
      },
      {
        type: "exercise",
        id: "l13-pri-ex",
        prompt: L("ضع أربعة أعمدة لجدول أولوية يمكن الدفاع عنه في مناقشة.", "Name four columns of a priority table you could defend in a viva."),
        solution: L("مثال: (1) فرضية الهيئة بجملة واحدة، (2) عنقود scaffold، (3) إنذارات ADMET/PAINS، (4) مصدر التوفر. الدرجة رقم مساعد لا عمود القرار الوحيد.", "Example: (1) pose hypothesis in one sentence, (2) scaffold cluster, (3) ADMET/PAINS flags, (4) supply source. Score is a helper, not the sole decision column."),
      },
    ],
    ["l13-consensus", "l13-workflow", "l14-sa"],
  ),
  expand(
    "l14-lipinski",
    [
      L("ذكر قاعدة Lipinski كما نُشرت تقريباً: MW، logP، HBD، HBA — كإحصاء تاريخي.", "State Lipinski's rule approximately as published: MW, logP, HBD, HBA — as historical statistics."),
      L("التشديد على أنها heuristic للأدوية الفموية لا قانون طبيعة.", "Stress that it is a heuristic for oral drugs, not a law of nature."),
      L("معرفة متى تُكسر القاعدة عمداً (beyond Ro5، natural products، prodrugs).", "Know when the rule is broken on purpose (beyond Ro5, natural products, prodrugs)."),
    ],
    [
      {
        type: "prose",
        id: "l14-lip-intro",
        title: L("إحصاء لا شريعة", "A statistic, not scripture"),
        body: L(
          "Lipinski's rule of five وُلدت من ملاحظة أن كثيراً من الأدوية الفموية التي وصلت مراحل متقدمة كانت تميل إلى: وزن جزيئي لا يتجاوز حوالي 500، logP لا يتجاوز حوالي 5، لا أكثر من 5 مانحات hydrogen bond، ولا أكثر من 10 مقبلات (N وO كتقريب). هذه حدود إرشادية مستخرجة من كيمياء عصرها وطريق فموي، لا مشتقة من معادلة Schrödinger ولا من binding ΔG.",
          "Lipinski's rule of five came from the observation that many oral drugs that had reached late stages tended to have molecular weight not above about 500, logP not above about 5, no more than 5 hydrogen-bond donors, and no more than 10 acceptors (N and O as a proxy). Those are heuristic bounds from the chemistry of that era and an oral route — not derived from Schrödinger's equation or from binding ΔG.",
        ),
      },
      {
        type: "list",
        id: "l14-lip-what",
        title: L("ماذا تقيس القاعدة فعلاً؟", "What does the rule actually track?"),
        items: [
          L("احتمالاً تاريخياً للامتصاص الفموي والذوبان/الpermeability في كيمياء شبيهة بالأدوية آنذاك.", "A historical probability of oral absorption and solubility/permeability in then-typical drug chemistry."),
          L("لا تقيس النشاط على الهدف، ولا السمية، ولا إمكانية التخليق.", "It does not measure on-target activity, toxicity, or synthetic access."),
          L("لا تنطبق أوتوماتيكياً على حقن، استنشاق، أو أدوية تتسلل بناقلات.", "It does not automatically apply to injectables, inhaled drugs, or transporter substrates."),
        ],
      },
      {
        type: "callout",
        id: "l14-lip-warn",
        kind: "warning",
        title: L("تحذير: Lipinski heuristic لا قانون", "Warning: Lipinski is a heuristic, not a law"),
        body: L(
          "أدوية كثيرة ناجحة تخالف قاعدة أو أكثر (خصوصاً natural products وبعض beyond-Rule-of-5). حذف كل مخالف من الفرز لأن شريحة تقول «Ro5» يقتل كيمياء شرعية. استخدم القاعدة كإنذار لمناقشة permeability والذوبان، لا كبوابة إعدام.",
          "Many successful drugs violate one or more of the bounds (especially natural products and some beyond-Rule-of-5 compounds). Deleting every violator because a slide said 'Ro5' kills legitimate chemistry. Use the rule as an alarm that permeability and solubility need a discussion, not as an execution gate.",
        ),
      },
      {
        type: "compare",
        id: "l14-lip-cmp",
        left: L("داخل Ro5", "Inside Ro5"),
        right: L("Beyond Ro5", "Beyond Ro5"),
        rows: [
          { dim: L("المشكلة الشائعة", "Typical problem"), a: L("ما زال بإمكانك أن تكون غير ذائب أو substrate لـ P-gp.", "You can still be insoluble or a P-gp substrate."), b: L("الامتصاص الفموي أصعب؛ قد تحتاج صياغة أو آلية خاصة.", "Oral absorption is harder; formulation or a special mechanism may be required.") },
          { dim: L("متى يُبرَّر", "When justified"), a: L("مشروع فموي كلاسيكي على جيب صغير.", "A classical oral project on a small pocket."), b: L("PPI، ماكروسيكلات، أهداف تحتاج مساحة سطح كبيرة.", "PPIs, macrocycles, targets that need large surface area.") },
        ],
      },
      {
        type: "why",
        id: "l14-lip-why",
        question: L("لماذا رُبطت القاعدة بالرقم خمسة؟", "Why is the rule tied to the number five?"),
        answer: L("حدودها مضاعفات للخمسة تقريباً (5 مانحات، 5 logP، 500 MW، 10 مقبلات = 2×5). هذا تقريبياً مساعد للذاكرة لا اشتقاقاً فيزيائياً. المعامل 5 ليس ثابت طبيعة.", "Its bounds are roughly multiples of five (5 donors, 5 logP, 500 MW, 10 acceptors = 2×5). That is a memory aid, not a physical derivation. The factor 5 is not a constant of nature."),
      },
      {
        type: "whatif",
        id: "l14-lip-whatif",
        scenario: L("ماذا لو رفضت مرشحاً ماكروسيكلياً فموياً معروفاً في الأدبيات لأنه MW > 500؟", "What if you reject a known oral macrocycle in the literature because MW > 500?"),
        consequence: L("طبّقت إحصائية على فئة هي الاستثناء المقصود. beyond Ro5 مجال بحث قائم. القاعدة أداة غربلة لمشاريع كلاسيكية، لا حجّة لتجاهل كيمياء أثبتت تعرضاً فموياً بآليات أخرى (بما فيها التشكيل conformational chameleon).", "You applied a statistic to a class that is the intended exception. Beyond Ro5 is an active research area. The rule is a triage tool for classical projects, not an argument to ignore chemistry that already showed oral exposure by other mechanisms (including conformational chameleons)."),
      },
      {
        type: "exercise",
        id: "l14-lip-ex",
        prompt: L("اكتب جملة methods تستخدم Ro5 دون أن تجعلها قانوناً.", "Write a Methods sentence that uses Ro5 without making it a law."),
        solution: L("«استُخدمت نوافذ قريبة من Lipinski كمرشح أوّلي لمشروع فموي كلاسيكي؛ لم تُحذف المركبات المخالفة آلياً بل وُسمت لمراجعة إن كانت تنتمي لسلسلة beyond-Ro5 أو natural-product-like.»", "'Windows near Lipinski were used as a primary filter for a classical oral project; violators were not auto-deleted but flagged for review if they belonged to a beyond-Ro5 or natural-product-like series.'"),
      },
    ],
    ["l14-veber", "l13-filter", "l15-permeability"],
  ),

  expand(
    "l14-veber",
    [
      L("ذكر فكرة Veber: TPSA والروابط القابلة للدوران كمؤشرات نفاذية/تعرض فموي.", "State Veber's idea: TPSA and rotatable bonds as oral-exposure/permeability indicators."),
      L("وضع Ghose وEgan كمكمّلات إحصائية لا كقوانين إضافية.", "Place Ghose and Egan as further statistics, not extra laws."),
      L("ربط TPSA بالpermeability مع استثناء الناقلات.", "Tie TPSA to permeability with transporter exceptions."),
    ],
    [
      {
        type: "prose",
        id: "l14-veb-intro",
        title: L("بعد القاعدة الخمسية: السطح والمرونة", "After the fives: surface and flexibility"),
        body: L(
          "Veber وزملاؤه أشاروا إلى أن المساحة القطبية الطوبولوجية TPSA وعدد rotatable bonds يرتبطان بفرص التعرض الفموي في مجموعات تاريخية، حتى حين لا يكون MW هو القصة كلها. الفكرة الفيزيائية التقريبية: سطح قطبي كبير يُكلّف desolvation عند عبور غشاء، وكثرة الدوران تزيد الإنتروبي والحجم الفعّال. Ghose وEgan قواعد إحصائية أخرى على logP وMW وTPSA. كلها heuristics.",
          "Veber and coworkers noted that topological polar surface area (TPSA) and rotatable-bond count associated with oral-exposure odds in historical sets, even when MW was not the whole story. The rough physics: a large polar surface costs desolvation when crossing a membrane, and many rotors raise entropy and effective size. Ghose and Egan are further statistics on logP, MW, and TPSA. All are heuristics.",
        ),
      },
      {
        type: "list",
        id: "l14-veb-metrics",
        title: L("ماذا تعني الواصفات", "What the descriptors mean"),
        items: [
          L("TPSA: مجموع تقريبي لسطوح N وO القطبية من البنية ثنائية الأبعاد — ليست مساحة 3D حقيقية.", "TPSA: an approximate sum of polar N and O surfaces from 2D — not a true 3D area."),
          L("Rotatable bonds: تعريف العدّ يختلف بين البرمجيات؛ اذكر الأداة.", "Rotatable bonds: the counting definition differs across software; name the tool."),
          L("logP مقابل logD: الشحنة عند pH 7.4 قد تهيمن على النفاذية أكثر من TPSA.", "logP versus logD: charge at pH 7.4 may dominate permeability more than TPSA."),
        ],
      },
      {
        type: "callout",
        id: "l14-veb-lim",
        kind: "limitation",
        title: L("محدودية: القواعد تتكسر للناقلات", "Limitation: the rules break for transporters"),
        body: L(
          "مركب قطبي قد يعبر لأن ناقلاً يحمله، ومركّب «مثالي» قد يُطرد بـ P-gp. TPSA المنخفض لا يضمن وصولاً إلى الدماغ، والمرتفع لا يعني استحالة الامتصاص. استخدم القواعد لترتيب المخاطر لا للتنبؤ الفردي القاطع.",
          "A polar compound may cross because a transporter carries it, and an 'ideal' compound may be ejected by P-gp. Low TPSA does not guarantee brain exposure; high TPSA does not make absorption impossible. Use the rules to rank risk, not to issue a per-molecule verdict.",
        ),
      },
      {
        type: "compare",
        id: "l14-veb-cmp",
        left: L("Lipinski", "Lipinski"),
        right: L("Veber-style", "Veber-style"),
        rows: [
          { dim: L("التركيز", "Focus"), a: L("MW، logP، HBD/HBA.", "MW, logP, HBD/HBA."), b: L("TPSA ومرونة الروابط.", "TPSA and bond flexibility.") },
          { dim: L("الثغرة", "Blind spot"), a: L("قد ينجو مركّب مرن قطبي داخل الحدود.", "A flexible polar compound can still sit inside the bounds."), b: L("قد يُعاقب ماكروسيكل قاسٍ رغم نفاذية أفضل مما يوحي العدّ.", "A rigid macrocycle may be punished despite better permeability than the count suggests.") },
        ],
      },
      {
        type: "why",
        id: "l14-veb-why",
        question: L("لماذا لا يكفي logP وحده؟", "Why is logP not enough by itself?"),
        answer: L("لأن النفاذية ليست دهنية فقط: عدد H-bonds مع الماء (الذي تُقاربه TPSA) وكلفة طي الجزيء (rotors) تقرران إن كان العبور ممكناً قبل أن تذوب الطبقة الدهنية القصة كلها. logP أيضاً لا يرى الشحنة (لذلك logD).", "Because permeability is not only lipophilicity: the number of H-bonds to water (TPSA approximates this) and the cost of ordering the molecule (rotors) decide whether crossing is feasible before the lipid bilayer is the whole story. logP also cannot see charge (hence logD)."),
      },
      {
        type: "whatif",
        id: "l14-veb-whatif",
        scenario: L("ماذا لو خفضت TPSA بحذف كل HBD ثم فقدت hinge-binding في kinase؟", "What if you lower TPSA by deleting every HBD and then lose kinase hinge-binding?"),
        consequence: L("حسّنت واصفة نفاذية على حساب الفيزياء التي يرتبط بها المركب. المقايضة تُحل بإخفاء HBD نحو الجيب لا بحذفها، أو بقبول TPSA أعلى مع صياغة/جرعة.", "You improved a permeability descriptor at the expense of the physics the compound binds with. The trade-off is solved by burying HDBs toward the pocket, not deleting them, or by accepting higher TPSA with formulation/dose."),
      },
      {
        type: "exercise",
        id: "l14-veb-ex",
        prompt: L("مركّب TPSA مرتفع وrotors قليلة نجح فموياً في الأدبيات. أعط تفسيرين ممكنين دون اختراع أرقام.", "A high-TPSA, low-rotor compound succeeded orally in the literature. Give two possible explanations without inventing numbers."),
        solution: L("(1) uptake عبر ناقل. (2) تشكّل داخلي لـ H-bonds يقلّل السطح القطبي الفعّال في الغشاء (chameleon) رغم TPSA ثنائي الأبعاد المرتفع. كلاهما فرضية تحتاج قياساً (Caco-2 ± مثبط ناقل، نفاذية PAMPA).", "(1) Transporter-mediated uptake. (2) Internal H-bonds that reduce effective polar surface in the membrane (chameleon) despite high 2D TPSA. Both hypotheses need a measurement (Caco-2 ± transporter inhibitor, PAMPA)."),
      },
    ],
    ["l14-lipinski", "l15-pka-logd", "l15-permeability"],
  ),

  expand(
    "l14-pains",
    [
      L("تعريف PAINS كإنذارات تداخل فحص لا كحكم بالإعدام على الجزيء.", "Define PAINS as assay-interference alerts, not as a death sentence on the molecule."),
      L("وضع مرشحات Brenk كقائمة مجموعات غير مرغوبة سياقياً.", "Place Brenk filters as a contextual list of undesirable groups."),
      L("التمييز بين تداخل الفحص والنشاط الحقيقي على الهدف.", "Distinguish assay interference from true on-target activity."),
    ],
    [
      {
        type: "prose",
        id: "l14-pa-intro",
        title: L("إنذارات لا إعدامات", "Alerts, not executions"),
        body: L(
          "PAINS (pan-assay interference compounds) أنماط بنيوية تكررت في إصابات فحص عالية الإنتاجية لأسباب غير مرغوبة: تجميع، تفاعل كيميائي مع الكاشف، فلورة، أو redox cycling. ظهور التنبيه يعني: «افحص إن كان النشاط حقيقياً» — لا: «هذا الجزيء لا يمكن أن يكون دواء». Brenk وأشباهه قوائم مجموعات reactive أو toxicophores شائعة في التصميم المبكر.",
          "PAINS (pan-assay interference compounds) are structural patterns that recurred among high-throughput screening hits for unwelcome reasons: aggregation, chemical reaction with the reagent, fluorescence, or redox cycling. An alert means 'test whether the activity is real' — not 'this molecule can never be a drug'. Brenk and similar lists flag reactive groups or common toxicophores in early design.",
        ),
      },
      {
        type: "list",
        id: "l14-pa-causes",
        title: L("لماذا تُخطئ الفحوص", "Why assays lie"),
        items: [
          L("Colloidal aggregators تُظهر تثبيطاً غير نوعي يختفي مع detergent.", "Colloidal aggregators show nonspecific inhibition that vanishes with detergent."),
          L("مركبات ملونة أو فلورية تخدع القراءة البصرية.", "Coloured or fluorescent compounds fool optical readouts."),
          L("مجموعات thiol-reactive تعدّل البروتين أو الكاشف تساهمياً دون أن تكون مثبطاً مقصوداً.", "Thiol-reactive groups covalently modify protein or reagent without being intended inhibitors."),
          L("Cheators تربط معدناً في إنزيم metalloenzyme بشكل غير نوعي.", "Chelators bind a metal in a metalloenzyme nonspecifically."),
        ],
      },
      {
        type: "callout",
        id: "l14-pa-warn",
        kind: "warning",
        title: L("تحذير: القائمة ليست آلية", "Warning: the list is not a mechanism"),
        body: L(
          "حذف كل PAINS من مكتبة kinase قد يزيل كيمياء نشطة حقيقية. الإبقاء بلا تحقق في فحص spectrophotometric وصفة لإصابات وهمية. المسار العلمي: تنبيه → تجربة مضادة (detergent، counter-screen، orthogonality، SLC) → ثم قرار. بعض الأدوية المسوّقة تحتوي أنماطاً كانت ستُنبَّه.",
          "Deleting every PAINS from a kinase library may remove truly active chemistry. Keeping them with no check in a spectrophotometric assay is a recipe for phantom hits. The scientific path: alert → counter-experiment (detergent, counter-screen, orthogonal assay, SLC) → then a decision. Some marketed drugs contain patterns that would have alerted.",
        ),
      },
      {
        type: "steps",
        id: "l14-pa-triage",
        title: L("فرز التنبيه", "Triage the alert"),
        items: [
          { title: L("ما الفحص؟", "What is the assay?"), body: L("إن كان fluorescence أو absorbance فالمخاطر أعلى.", "Fluorescence or absorbance assays carry higher risk.") },
          { title: L("هل يتكرر في فحوص لا علاقة لها؟", "Does it light up unrelated assays?"), body: L("سلوك pan-assay دليل تداخل لا قوة هدف.", "Pan-assay behaviour is interference evidence, not target potency.") },
          { title: L("هل هناك SAR نظيف؟", "Is there clean SAR?"), body: L("تعديل صغير يقتل النشاط مع بقاء اللون/التجميع يدعم الهدف؛ العكس يدعم artifact.", "A small edit that kills activity while colour/aggregation remains supports on-target; the reverse supports artifact.") },
        ],
      },
      {
        type: "why",
        id: "l14-pa-why",
        question: L("لماذا لا نكتفي بمرشح حاسوبي وننام؟", "Why not just run a computational filter and sleep?"),
        answer: L("لأن تعريف النمط تقريبي (SMARTS)، ولأن التداخل يعتمد على تركيز وظروف الفحص، ولأن بعض الأنماط دواء في سياق وجريمة في آخر. الحاسوب يُرتّب الشكوك؛ المختبر يحكم.", "Because the pattern definition is approximate (SMARTS), interference depends on concentration and assay conditions, and some patterns are a drug in one context and a crime in another. The computer ranks suspicion; the lab judges."),
      },
      {
        type: "whatif",
        id: "l14-pa-whatif",
        scenario: L("ماذا لو نشرت إصابة catechol من فرز HTS ضوئي دون counter-screen؟", "What if you publish a catechol hit from an optical HTS with no counter-screen?"),
        consequence: L("المحكّم الجيد سيفترض redox/assay interference حتى تُثبت العكس. الورقة تصبح مثالاً تعليمياً لا اكتشافاً. أضف فحصاً متعامداً وقياس تجميع قبل أن تكتب «inhibitor».", "A competent reviewer will assume redox/assay interference until proven otherwise. The paper becomes an educational example rather than a discovery. Add an orthogonal assay and an aggregation check before you write 'inhibitor'."),
      },
      {
        type: "exercise",
        id: "l14-pa-ex",
        prompt: L("ظهر تنبيه PAINS على مركّب يحفظ hinge ويُظهر SAR حاد. ما قرارك المنهجي في جملة واحدة؟", "A PAINS alert fires on a compound that keeps the hinge and shows steep SAR. What is your methodological decision in one sentence?"),
        solution: L("أُبقيه مرشحاً مشروطاً: أنفّذ counter-screen متعامد وفحص تجميع قبل توسيع السلسلة، ولا أحذفه من الجدول لمجرد التنبيه ولا أرفعه إلى lead قبل تلك التجارب.", "Keep it as a conditional candidate: run an orthogonal counter-screen and an aggregation check before expanding the series; neither delete it for the alert alone nor promote it to lead before those experiments."),
      },
    ],
    ["l14-sa", "l13-filter", "l15-tox"],
  ),

  expand(
    "l14-sa",
    [
      L("تعريف synthetic accessibility كاحتمال أن يُصنع الجزيء بخطوات معقولة.", "Define synthetic accessibility as the chance the molecule can be made in reasonable steps."),
      L("رفض اعتبار الجزيء المولَّد حاسوبياً اكتشافاً إن تعذّر صنعه.", "Refuse to call a computer-generated molecule a discovery if it cannot be made."),
      L("استخدام تقديرات SA وكتالوجات building blocks كأدوات لا كدرجات حقيقة.", "Use SA estimates and building-block catalogues as tools, not as truth scores."),
    ],
    [
      {
        type: "prose",
        id: "l14-sa-intro",
        title: L("ما لا يُصنع لا يُكتشف", "What cannot be made is not discovered"),
        body: L(
          "كل خط فرز أو نموذج توليدي يُنتج رسوماً. الاكتشاف يبدأ عندما يمكن تحضير عيّنة نقية وفحصها. synthetic accessibility تقدير — من درجات تجريبية (تعقيد حلقي، stereocenters، مجموعات نادرة) إلى تخطيط تشييد آلي يعتمد على تفاعلات معروفة وكتالوجات building blocks. الدرجة المنخفضة ليست برهان استحالة، والمرتفعة ليست بروتوكول تخليق.",
          "Every screen or generative model produces drawings. Discovery starts when a pure sample can be prepared and assayed. Synthetic accessibility is an estimate — from heuristic scores (ring complexity, stereocenters, rare groups) to computer-aided route planning on known reactions and building-block catalogues. A poor score is not proof of impossibility; a good score is not a synthetic protocol.",
        ),
      },
      {
        type: "list",
        id: "l14-sa-signals",
        title: L("إشارات صعوبة شائعة", "Common difficulty signals"),
        items: [
          L("كثرة stereocenters غير المدعومة بمسار معروف.", "Many stereocenters without a known route to set them."),
          L("حلقات مدمجة غير اعتيادية أو سلاسل طويلة من رباعيات الكربون.", "Unusual fused rings or long stretches of quaternary carbons."),
          L("مجموعات غير مستقرة في شروط التخليق أو التنقية.", "Groups unstable under likely synthesis or purification conditions."),
          L("غياب building blocks قريبة في الكتالوج الذي يستخدمه فريقك.", "No nearby building blocks in the catalogue your team actually uses."),
        ],
      },
      {
        type: "callout",
        id: "l14-sa-warn",
        kind: "warning",
        title: L("تحذير: درجة SA ليست كيمياء عضوية", "Warning: an SA score is not organic chemistry"),
        body: L(
          "النماذج المدربة على ما نُشر تُعاقب ما هو نادر في الأدبيات حتى لو كان سهلاً لمجموعة تملك تلك الخبرة، وتُكافئ بنى شائعة حتى لو كانت سامة أو محمية ببراءة. اجعل الكيميائي الطبي في الحلقة قبل أن تشتري «أفضل 100 مولَّد».",
          "Models trained on what was published punish what is rare in the literature even if it is easy for a group that has that expertise, and they reward common cores even if they are toxic or patented. Put a medicinal chemist in the loop before you buy the 'top 100 generated' compounds.",
        ),
      },
      {
        type: "steps",
        id: "l14-sa-practice",
        title: L("إدخال SA في الفرز", "Putting SA into screening"),
        items: [
          { title: L("فضّل in-stock", "Prefer in-stock"), body: L("إن كان الزمن شهراً، التوفر يتفوّق على الجمال.", "If the timeline is a month, availability beats elegance.") },
          { title: L("حدّد warheads/scaffolds مسموحة", "Declare allowed warheads/scaffolds"), body: L("الفضاء التوليدي بلا قيود يملأ الجدول بجزيئات مستحيلة.", "Unconstrained generative space fills the table with impossible molecules.") },
          { title: L("اطلب مساراً لا درجة فقط", "Ask for a route, not only a score"), body: L("حتى مخطط تقريبي من تفاعلات معلومة أفضل من رقم.", "Even a sketch from known reactions beats a number.") },
        ],
      },
      {
        type: "why",
        id: "l14-sa-why",
        question: L("لماذا يهتم المصمم الحاسوبي بالتخليق أصلاً؟", "Why should a computational designer care about synthesis?"),
        answer: L("لأن دالة الهدف الحقيقية للمشروع هي مركّب مقيس لا هيكل في ملف SDF. تجاهل SA يحوّل الورقة إلى معرض رسوم ويُفقد ثقة الكيميائيين في الحساب.", "Because the project's true objective is a measured compound, not a structure in an SDF file. Ignoring SA turns the paper into an art show and burns chemists' trust in computation."),
      },
      {
        type: "whatif",
        id: "l14-sa-whatif",
        scenario: L("ماذا لو رتّبت مكتبة مولَّدة بدرجات docking وتجاهلت أن 90% تحتاج 15 خطوة؟", "What if you rank a generated library by docking scores and ignore that 90% would need 15 steps?"),
        consequence: L("ستقضي الدورة على تخليق مركّب واحد أو على لا شيء. أعد الترتيب بمعيار مزدوج: معقولية الهيئة × قابلية الصنع. الاكتشاف معدل إصابات لكل شهر عمل لا لكل نانو ثانية GPU.", "The cycle will be spent making one compound or making nothing. Re-rank with a dual criterion: pose plausibility × makeability. Discovery is hits per month of work, not per GPU-nanosecond."),
      },
      {
        type: "exercise",
        id: "l14-sa-ex",
        prompt: L("اقترح قاعدة أولوية ثلاثية بين: in-stock قريب من hit، مولَّد جميل صعب، وbuilding-block enumeration متوسط الدرجة.", "Propose a three-way priority rule among: in-stock near a hit, a beautiful hard-to-make generated molecule, and medium-score building-block enumerations."),
        solution: L("دورة قصيرة: in-stock أولاً، ثم enumeration من كتالوج الفريق، والمولَّد الصعب فقط إذا قدّم فرضية هندسية لا يمكن بلوغها بغيره ومع موافقة كيميائي على مسار. لا تتقدم الرسوم على العيّنات.", "Short cycle: in-stock first, then enumerations from the team's catalogue, and the hard generated molecule only if it offers a geometric hypothesis unreachable otherwise and a chemist signs a route. Drawings do not outrank samples."),
      },
    ],
    ["l14-pains", "l13-priority", "l16-gen"],
  ),
  expand(
    "l15-adme",
    [
      L("رسم ADMET كخمسة أبواب يمكن لأي منها أن يقتل مرشحاً.", "Map ADMET as five gates any of which can kill a candidate."),
      L("التمييز بين قياس in vitro وتنبؤ in silico وتصرّف in vivo.", "Distinguish in-vitro measurement, in-silico prediction, and in-vivo behaviour."),
      L("رفض اعتبار درجة ارتباط كافية لترشيح سريري.", "Refuse to treat a binding score as enough for a clinical candidate."),
    ],
    [
      {
        type: "prose",
        id: "l15-adme-intro",
        title: L("الارتباط نصف القصة", "Binding is half the story"),
        body: L(
          "Absorption, Distribution, Metabolism, Excretion, Toxicity: مصير الجزيء في الجسم. مثبط قوي لا يصل إلى النسيج، أو يُصفَّى في دقيقة، أو يُوقف القلب عبر hERG، ليس دواء. الحساب يُقدّر بعض هذه الأبواب بضعف أكبر من تقدير docking للهيئة. كل رقم ADMET فرضية حتى يُقاس.",
          "Absorption, Distribution, Metabolism, Excretion, Toxicity: the molecule's fate in the body. A potent inhibitor that never reaches tissue, is cleared in a minute, or stops the heart via hERG is not a drug. Computation estimates some of these gates more weakly than docking estimates a pose. Every ADMET number is a hypothesis until it is measured.",
        ),
      },
      {
        type: "list",
        id: "l15-adme-gates",
        title: L("الأبواب الخمسة", "The five gates"),
        items: [
          L("Absorption: هل يعبر الأمعاء (أو المسار المختار) بتركيز مفيد؟", "Absorption: does it cross the gut (or the chosen route) at a useful concentration?"),
          L("Distribution: أين يذهب؟ حجم التوزّع، ربط بروتين بلازمي، BBB.", "Distribution: where does it go? volume of distribution, plasma protein binding, BBB."),
          L("Metabolism: أي CYP أو هيدرولاز يأكله؟ وأي مستقلب يتكون؟", "Metabolism: which CYP or hydrolase eats it, and which metabolite forms?"),
          L("Excretion: كلوي أم صفراوي؟ هل يتراكم في كلية أو كبد؟", "Excretion: renal or biliary? does it accumulate in kidney or liver?"),
          L("Toxicity: hERG، كبد، طفرات، off-targets.", "Toxicity: hERG, liver, mutagenicity, off-targets."),
        ],
      },
      {
        type: "callout",
        id: "l15-adme-lim",
        kind: "limitation",
        title: L("محدودية التنبؤ", "Limitation of prediction"),
        body: L(
          "نماذج ADMET العامة مدرَّبة على بيانات غير متجانسة. أداءها يختلف بشدة بين نهاية (logP أسهل من hepatotoxicity). لا تضع «passed ADMET filter» في abstract كأنها تجربة. اذكر النموذج ونطاقه.",
          "Public ADMET models are trained on heterogeneous data. Performance varies sharply by endpoint (logP is easier than hepatotoxicity). Do not put 'passed ADMET filter' in an abstract as if it were an experiment. Name the model and its domain.",
        ),
      },
      {
        type: "steps",
        id: "l15-adme-when",
        title: L("متى تُدخل ADMET في الخط", "When to bring ADMET into the pipeline"),
        items: [
          { title: L("مبكراً كإنذار", "Early as an alarm"), body: L("logD متطرف، basic amine + عطرية عالية (hERG)، أو warhead غير مقصود.", "Extreme logD, a basic amine plus heavy aromatics (hERG), or an unintended warhead.") },
          { title: L("عند تحسين السلسلة", "During series optimisation"), body: L("قِس permeability والاستقرار الميكروسومي لا تتنبأ فقط.", "Measure permeability and microsomal stability; do not only predict.") },
          { title: L("قبل الترشيح الحيواني", "Before animal work"), body: L("فجوات السمية لا تُغلق بحاسوب.", "Toxicity gaps are not closed by a computer.") },
        ],
      },
      {
        type: "why",
        id: "l15-adme-why",
        question: L("لماذا يفشل مرشح قوي في المرحلة قبل السريرية أكثر مما يفشل بسبب «ضعف الالتحام»؟", "Why do potent candidates fail preclinically more often than from 'weak docking'?"),
        answer: L("لأن القوة على الهدف ضرورية غير كافية. التعرض الحرّ، التصفية، والتفاعلات السامة تقرر الجرعة والهامش. مشروع يُحسن IC50 فقط يراكم ديناً في الأبواب الخمسة.", "Because on-target potency is necessary but not sufficient. Free exposure, clearance, and toxic interactions decide dose and margin. A project that only improves IC50 accumulates debt at the five gates."),
      },
      {
        type: "whatif",
        id: "l15-adme-whatif",
        scenario: L("ماذا لو أعلنت مركباً «مرشحاً دوائياً» بعد docking و100 ns MD دون أي تقدير ADMET؟", "What if you call a compound a 'drug candidate' after docking and 100 ns MD with no ADMET estimate at all?"),
        consequence: L("أسأتم استخدام اللغة. مرشح دوائي يقتضي مساراً نحو تعرض آمن. الحساب البنيوي قد يدعم فرضية ارتباط، لا ترشيحاً تطويرياً.", "You abused the language. A drug candidate implies a path to safe exposure. Structural computation may support a binding hypothesis, not a development nomination."),
      },
      {
        type: "exercise",
        id: "l15-adme-ex",
        prompt: L("رتّب أربعة مخاطر ADMET لمشروع فموي kinase بـ basic center عطري، من الأرجح نقاشاً إلى الأبعد.", "Rank four ADMET risks for an oral kinase project with an aromatic basic centre, from most likely to discuss to more remote."),
        solution: L("نقاش مبكر شائع: hERG (أمين قاعدي + عطرية)، CYP inhibition/metabolism على الحلقات الغنية بالإلكترون، permeability/logD، ثم hepatotoxicity كنهاية أصعب تنبؤاً. الترتيب مشروع-يعتمد؛ المهم أن لا يُتجاهل hERG حتى «نهاية التحسين».", "A common early discussion: hERG (basic amine + aromatics), CYP inhibition/metabolism on electron-rich rings, permeability/logD, then hepatotoxicity as a harder endpoint. The order is project-dependent; what matters is not postponing hERG until 'the end of optimisation'."),
      },
    ],
    ["l15-pka-logd", "l15-tox", "l11-medchem"],
  ),

  expand(
    "l15-pka-logd",
    [
      L("التفريق بين logP وlogD وربطهما بـ pKa عند pH فسيولوجي.", "Separate logP from logD and link both to pKa at physiological pH."),
      L("استخدام TPSA كأداة لا كهدف بحد ذاته.", "Use TPSA as a tool, not as a goal in itself."),
      L("تقدير كيف تغيّر الشحنة النفاذية والذوبان والارتباط.", "Estimate how charge changes permeability, solubility, and binding."),
    ],
    [
      {
        type: "prose",
        id: "l15-log-intro",
        title: L("من يذوب، من يعبر، من يتأين", "Who dissolves, who crosses, who ionizes"),
        body: L(
          "logP يصف توزّع الشكل غير المتأين بين أوكتانول وماء. logD عند pH معيّن يدمج الأشكال المتأينة وغير المتأينة؛ هو الأقرب لسؤال النفاذية الفسيولوجية. pKa يقرر أي شكل يهيمن عند 7.4. TPSA يُقارب عبء hydrogen bonding مع الماء. الأربعة أدوات لقراءة المقايضة، وليست دوال هدف للتحسين الأعمى.",
          "logP describes partitioning of the un-ionized form between octanol and water. logD at a stated pH folds ionized and un-ionized forms together; it is closer to the physiological permeability question. pKa decides which form dominates at 7.4. TPSA approximates the hydrogen-bonding burden with water. All four are tools for reading a trade-off, not objective functions for blind optimisation.",
        ),
      },
      {
        type: "list",
        id: "l15-log-rules",
        title: L("قراءات كيميائية سريعة", "Quick chemical readings"),
        items: [
          L("أمين أليفاتي pKa ~9–10 يبقى غالباً مبرتناً عند 7.4 في الماء.", "An aliphatic amine with pKa ~9–10 is mostly protonated at 7.4 in water."),
          L("Carboxylic acid pKa ~4–5 يبقى غالباً سالباً عند 7.4.", "A carboxylic acid with pKa ~4–5 is mostly negative at 7.4."),
          L("logD أقل من logP للأحماض والقواعد عند pH يُشحن فيه الجزيء.", "logD is lower than logP for acids and bases at a pH that charges the molecule."),
          L("تقدير pKa الحاسوبي خطأ شائع؛ إن كان البرتنة حاسمة للجيب فقِس أو احسب QM بحذر.", "Computed pKa is commonly wrong; if protonation is decisive for the pocket, measure or compute QM carefully."),
        ],
      },
      {
        type: "callout",
        id: "l15-log-warn",
        kind: "warning",
        title: L("تحذير: خطأ pKa يُفسد الالتحام وADMET معاً", "Warning: a pKa error wrecks both docking and ADMET"),
        body: L(
          "ليغند رُسم محايداً وهو مبرتن في الجيب يفقد salt bridge ويكتسب logD خاطئ. العكس يخلق شحنة وهمية. حدّد حالة البرتنة كقرار موثَّق (pH الفحص، pH الجيب إن وُجد دليل) قبل أي درجة.",
          "A ligand drawn neutral that is protonated in the pocket loses a salt bridge and inherits a wrong logD. The reverse invents a fictitious charge. Set protonation as a documented decision (assay pH, pocket pH if evidence exists) before any score.",
        ),
      },
      {
        type: "equation",
        id: "l15-log-hender",
        latex: "\\mathrm{logD}_{\\mathrm{pH}}=\\mathrm{logP}-\\log_{10}(1+10^{\\pm(\\mathrm{pH}-\\mathrm{p}K_a)})",
        name: L("علاقة تقريبية بين logD وlogP وpKa (حمض أو قاعدة بسيطة)", "Approximate link among logD, logP, and pKa (simple acid or base)"),
        meaning: L("الشحنة تخفض التوزّع نحو الأوكتانول؛ الإشارة تعتمد على حمض مقابل قاعدة.", "Charge lowers partitioning into octanol; the sign depends on acid versus base."),
        variables: [
          { symbol: "logP", name: L("توزّع الشكل المحايد", "Partition of the neutral form") },
          { symbol: "pKa", name: L("ثابت التأين", "Ionization constant") },
          { symbol: "pH", name: L("حموضة الوسط", "Medium acidity") },
        ],
        interpretation: L("صيغة تقريبية لجزيء بموقع تأين واحد. الجزيئات المتعددة pKa أعقد. لا تستخدمها كقياس.", "An approximation for a single ionizable site. Multiprotic molecules are harder. Do not treat it as a measurement."),
        application: L("تقدير هل تعديل pKa سيحرّك logD نحو نافذة نفاذية دون إعادة قياس فورية.", "Estimate whether a pKa edit will move logD toward a permeability window before you can remeasure."),
      },
      {
        type: "why",
        id: "l15-log-why",
        question: L("لماذا قد يرفع خفض logD الذوبان ويخفض النفاذية في آن؟", "Why might lowering logD raise solubility and lower permeability at once?"),
        answer: L("لأن الشكل المشحون أو الأكثر قطبية يُحب الماء (ذوبان) ويكره دخول الغشاء الدهني (نفاذية). التصميم يبحث عن نافذة لا عن تصغير أعمى لـ logD.", "Because the charged or more polar form loves water (solubility) and hates entering the lipid membrane (permeability). Design hunts a window, not a blind minimization of logD."),
      },
      {
        type: "whatif",
        id: "l15-log-whatif",
        scenario: L("ماذا لو حسّنت potency بزيادة aryl وlogP ثم فسّرت ضعف الخلية بأنه «مشكلة هدف»؟", "What if you raise potency by adding aryl and logP, then interpret weak cellular activity as a 'target problem'?"),
        consequence: L("قد تكون المشكلة ذوباناً، أو ربطاً بروتينياً، أو efflux. قِس logD والذوبان وCaco-2 قبل أن تُعيد تصميم الجيب.", "The problem may be solubility, protein binding, or efflux. Measure logD, solubility, and Caco-2 before you redesign the pocket."),
      },
      {
        type: "exercise",
        id: "l15-log-ex",
        prompt: L("ليغند فيه amine pKa تقديري 9.5 وphenol pKa تقديري 9. عند pH 7.4 ما الشكل الغالب نوعياً، وما خطر الالتحام إن رُسم كلاهما محايداً؟", "A ligand has an amine estimated pKa 9.5 and a phenol estimated pKa 9. At pH 7.4, what is the qualitative majority form, and what is the docking risk if both are drawn neutral?"),
        solution: L("الأمين غالباً مبرتن (قاعدة أقوى من 7.4 بوضوح). الفينول غالباً محايد (حمض أضعف). رسم الأمين محايداً يفقد شحنة موجبة قد تصنع salt bridge ويُغيّر electrostatics في الجيب وفي logD.", "The amine is mostly protonated (a base clearly stronger than 7.4). The phenol is mostly neutral (a weaker acid). Drawing the amine neutral loses a positive charge that may make a salt bridge and changes electrostatics in the pocket and in logD."),
      },
    ],
    ["l15-adme", "l15-permeability", "l1-pka"],
  ),

  expand(
    "l15-permeability",
    [
      L("التفريق بين عبور سلبي ونقل فعّال وطرد efflux.", "Separate passive crossing, active uptake, and efflux."),
      L("مناقشة BBB كقضية نفاذية + efflux لا كعتبة TPSA سحرية.", "Discuss BBB as permeability + efflux, not as a magic TPSA cutoff."),
      L("معرفة أن القواعد تتكسر للناقلات.", "Know that the rules break for transporters."),
    ],
    [
      {
        type: "prose",
        id: "l15-perm-intro",
        title: L("العبور ليس logP فقط", "Crossing is not only logP"),
        body: L(
          "الامتصاص الفموي والنفاذية الخلوية وعبور BBB عمليات مختلفة تشترك في فيزياء الغشاء. العبور السلبي يُقارب بـ PAMPA؛ الخلايا (Caco-2، MDCK) تضيف ناقلات وtight junctions. P-gp وBCRP يطردان مركبات تبدو «مثالية» على الورق. قاعدة «TPSA < رقم» لـ CNS إرشاد تاريخي مليء بالاستثناءات.",
          "Oral absorption, cellular permeability, and BBB crossing are different processes that share membrane physics. Passive crossing is approximated by PAMPA; cells (Caco-2, MDCK) add transporters and tight junctions. P-gp and BCRP efflux compounds that look 'ideal' on paper. A 'TPSA < some number' CNS rule is a historical heuristic full of exceptions.",
        ),
      },
      {
        type: "list",
        id: "l15-perm-axes",
        title: L("محاور تتحكم بالنفاذية", "Axes that control permeability"),
        items: [
          L("الشحنة وlogD عند pH الموضعي (الأمعاء ليست 7.4 بالضرورة).", "Charge and logD at local pH (the gut is not necessarily 7.4)."),
          L("عدد HBD؛ المانحات غالباً أثقل ثمناً من المقبلات في الغشاء.", "HBD count; donors are often costlier than acceptors in the membrane."),
          L("الحجم والمرونة؛ الماكروسيكل قد يُخفي قطبيته بهيئة.", "Size and flexibility; a macrocycle may hide polarity by conformation."),
          L("كونك substrate لناقل: لا يُقرأ من TPSA.", "Being a transporter substrate: not readable from TPSA."),
        ],
      },
      {
        type: "callout",
        id: "l15-perm-warn",
        kind: "warning",
        title: L("تحذير: نموذج نفاذية عام خارج النطاق بسهولة", "Warning: a global permeability model is easily out of domain"),
        body: L(
          "نماذج in silico المدربة على Caco-2 التاريخية تفشل على chemotypes جديدة وأحماض وzwitterions. لا تُعلن «BBB permeable» من لوحة ويب. للـ CNS: ناقش efflux صراحة. لغير CNS: أحياناً تريد أن تبقى خارج الدماغ.",
          "In-silico models trained on historical Caco-2 fail on new chemotypes, acids, and zwitterions. Do not announce 'BBB permeable' from a web dashboard. For CNS: discuss efflux explicitly. For non-CNS: you may want to stay out of the brain.",
        ),
      },
      {
        type: "compare",
        id: "l15-perm-cmp",
        left: L("PAMPA (سلبي)", "PAMPA (passive)"),
        right: L("Caco-2 / MDCK", "Caco-2 / MDCK"),
        rows: [
          { dim: L("ماذا يرى", "What it sees"), a: L("عبوراً عبر غشاء صناعي.", "Crossing an artificial membrane."), b: L("خلايا، ناقلات، تقاطعات.", "Cells, transporters, junctions.") },
          { dim: L("متى يضلل", "When it misleads"), a: L("عندما يكون النقل الفعّال هو القصة.", "When active transport is the story."), b: L("عندما تختلف الناقلات عن الإنسان أو عن النسيج الهدف.", "When transporters differ from human or from the target tissue.") },
        ],
      },
      {
        type: "why",
        id: "l15-perm-why",
        question: L("لماذا قد ينهار النشاط الخلوي رغم IC50 إنزيمي ممتاز؟", "Why might cellular activity collapse despite an excellent enzymatic IC50?"),
        answer: L("لأن المركب لا يدخل، أو يُطرد، أو يرتبط ببروتينات الوسيط، أو لا يذوب في شروط الفحص. قبل إعادة تصميم الجيب أجب عن النفاذية والذوبان.", "Because the compound does not enter, is effluxed, binds medium proteins, or does not dissolve under assay conditions. Before redesigning the pocket, answer permeability and solubility."),
      },
      {
        type: "whatif",
        id: "l15-perm-whatif",
        scenario: L("ماذا لو خفضت TPSA لأجل CNS ثم أصبح المركب P-gp substrate أقوى؟", "What if you lower TPSA for CNS and the compound becomes a stronger P-gp substrate?"),
        consequence: L("قد تسوء نسبة الدماغ/البلازما رغم «قاعدة BBB». النفاذية السلبية والـ efflux ليسا المحور نفسه. قياس MDCK-MDR1 (أو ما يعادله) أصدق من تحريك TPSA.", "Brain/plasma ratio may worsen despite the 'BBB rule'. Passive permeability and efflux are not the same axis. An MDCK-MDR1-class measurement is more honest than sliding TPSA."),
      },
      {
        type: "exercise",
        id: "l15-perm-ex",
        prompt: L("مشروع غير CNS بأمين قاعدي. هل تسعى لرفع العبور إلى الدماغ أم لخفضه، وما الأداة المفاهيمية؟", "A non-CNS project with a basic amine. Do you seek to raise or lower brain crossing, and what is the conceptual tool?"),
        solution: L("غالباً خفض التعرض الدماغي لتقليل مخاطر CNS. أدوات مفاهيمية: زيادة القطبية/HBD، أو تصميم efflux substrate مقصود، مع قياس لاحق. لا تفترض أن الأمين القاعدي «سيدخل الدماغ تلقائياً» ولا أنه «لن يدخل».", "Usually lower brain exposure to reduce CNS risk. Conceptual tools: increase polarity/HBD, or intentionally design an efflux substrate, then measure. Do not assume a basic amine 'will automatically enter brain' or 'will not enter'."),
      },
    ],
    ["l15-pka-logd", "l15-cyp", "l14-veber"],
  ),

  expand(
    "l15-cyp",
    [
      L("شرح CYP450 كعائلة استقلاب ودواء–دواء لا كإنزيم واحد.", "Explain CYP450 as a metabolism and drug–drug family, not as one enzyme."),
      L("التمييز بين أن تكون substrate وأن تكون مثبطاً وأن تكون inducer.", "Distinguish being a substrate, an inhibitor, and an inducer."),
      L("ربط soft spots البنيوية بفرضيات استقلاب قابلة للاختبار.", "Tie structural soft spots to testable metabolism hypotheses."),
    ],
    [
      {
        type: "prose",
        id: "l15-cyp-intro",
        title: L("الكبد يقرأ إلكتروناتك", "The liver reads your electronics"),
        body: L(
          "Cytochrome P450 إنزيمات هيمية تؤكسد كثيراً من الأدوية. CYP3A4، 2D6، 2C9، 1A2 وغيرها تتقاسم الكيمياء بجيوب واسعة ومرنة. المركب قد يكون مادة خاضعة (يُؤكسَد)، ومثبطاً (يعطّل استقلاب دواء مشارك)، ومحفّزاً inducer (يرفع التعبير). الاكتشاف الحاسوبي الذي يتجاهل هذه الطبقة يبني قوة على رمل التصفية.",
          "Cytochrome P450 enzymes are haem proteins that oxidise many drugs. CYP3A4, 2D6, 2C9, 1A2 and others share chemistry with large flexible pockets. A compound may be a substrate (oxidised), an inhibitor (blocking a co-med's metabolism), and an inducer (raising expression). Computational discovery that ignores this layer builds potency on the sand of clearance.",
        ),
      },
      {
        type: "list",
        id: "l15-cyp-soft",
        title: L("soft spots شائعة — مفاهيمياً", "Common soft spots — conceptually"),
        items: [
          L("N-dealkylation على أمينات بنزيلية أو أليفاتية.", "N-dealkylation on benzylic or aliphatic amines."),
          L("أكسدة حلقات غنية بالإلكترون (phenol، alkoxy-arene).", "Oxidation of electron-rich rings (phenol, alkoxy-arene)."),
          L("بنزيلي CH2، وsulfide إلى sulfoxide.", "Benzylic CH2, and sulfide to sulfoxide."),
          L("هيدروليز esters/amides — ليس CYP دائماً لكنه clearance.", "Hydrolysis of esters/amides — not always CYP, still clearance."),
        ],
      },
      {
        type: "callout",
        id: "l15-cyp-lim",
        kind: "limitation",
        title: L("محدودية التنبؤ بالموقع والناتج", "Limitation of site-of-metabolism prediction"),
        body: L(
          "نماذج site-of-metabolism تقترح ذرات معرّضة للأكسدة؛ كثيراً ما تُخطئ في regioselectivity داخل جيب CYP المرن. لا تكتب في الورقة أنك «أزلت الاستقلاب» لأنك أضفت F على موضع تنبؤ. قِس استقرار ميكروسوم كبدي، وكن حذراً من المستقلب التفاعلي (bioactivation).",
          "Site-of-metabolism models suggest atoms prone to oxidation; they often miss regioselectivity inside a flexible CYP pocket. Do not write that you 'removed metabolism' because you added F at a predicted site. Measure liver microsomal stability, and watch for reactive metabolites (bioactivation).",
        ),
      },
      {
        type: "compare",
        id: "l15-cyp-cmp",
        left: L("Substrate سريع التصفية", "Fast-clearance substrate"),
        right: L("مثبط CYP قوي", "Strong CYP inhibitor"),
        rows: [
          { dim: L("المشكلة", "Problem"), a: L("جرعة عالية أو نصف عمر قصير.", "High dose or short half-life."), b: L("تفاعل دواء–دواء؛ ارتفاع تراكيز شريك.", "Drug–drug interaction; a partner drug rises.") },
          { dim: L("استجابة تصميم", "Design response"), a: L("حجب soft spot، أو خفض logD، أو مسار تصفية آخر أنظف.", "Block a soft spot, lower logD, or a cleaner clearance route."), b: L("إبعاد عن جيب CYP إن أمكن؛ قياس IC50 على isoforms رئيسية.", "Stay out of the CYP pocket if possible; measure IC50 on major isoforms.") },
        ],
      },
      {
        type: "why",
        id: "l15-cyp-why",
        question: L("لماذا يُعدّ CYP2D6 مشكلة خاصة في التصميم؟", "Why is CYP2D6 a special design problem?"),
        answer: L("لأن تعدده الجيني كبير: ضعف استقلاب مقابل فائق الاستقلاب يغيّر التعرض بين مرضى. مركّب يعتمد تصفيته على 2D6 يحمل تبايناً سريرياً. هذا سبب لمناقشة isoform لا لإنذار خرافي.", "Because its genetic polymorphism is large: poor versus ultrarapid metabolisers change exposure across patients. A compound whose clearance hangs on 2D6 carries clinical variance. That is a reason to discuss isoform, not a mythical curse."),
      },
      {
        type: "whatif",
        id: "l15-cyp-whatif",
        scenario: L("ماذا لو أضفت فلوراً على methyl بنزيلي فطال نصف العمر وأنتج المركب تثبيط 3A4 جديداً؟", "What if you add fluorine on a benzylic methyl, half-life improves, and the compound newly inhibits 3A4?"),
        consequence: L("حلّيت clearance وفتحت DDI. المقايضة تُقاس: استقرار ميكروسومي ولوحة CYP inhibition. لا توجد ذرة سحرية تغلق الاستقلاب بلا ثمن.", "You fixed clearance and opened a DDI. The trade-off is measured: microsomal stability and a CYP-inhibition panel. There is no magic atom that shuts metabolism at no price."),
      },
      {
        type: "exercise",
        id: "l15-cyp-ex",
        prompt: L("سلسلة فيها para-methoxyphenyl تُصفَّى بسرعة. اقترح فرضيتي soft spot وتعديل لكل منهما.", "A series with a para-methoxyphenyl is cleared quickly. Propose two soft-spot hypotheses and an edit for each."),
        solution: L("(1) O-dealkylation للميثوكسي → جرّب CD3 أو استبدال بـ Cl/F إن كان المتجه يسمح. (2) أكسدة الحلقة → خفض الإلكترونية (F، N في الحلقة) أو إزاحة الميثوكسي. كل اقتراح يحتاج قياس استقرار لا درجة docking.", "(1) O-dealkylation of the methoxy → try CD3 or a Cl/F swap if the vector allows. (2) Ring oxidation → reduce electronics (F, ring N) or move the methoxy. Each proposal needs a stability measurement, not a docking score."),
      },
    ],
    ["l15-permeability", "l15-tox", "l11-medchem"],
  ),

  expand(
    "l15-tox",
    [
      L("تصنيف مخاطر السمية الشائعة في الجزيء الصغير: hERG، كبد، طفرات، off-target.", "Classify common small-molecule toxicity risks: hERG, liver, mutagenicity, off-target."),
      L("معاملة تنبؤ السمية كأضعف حلقات النماذج.", "Treat toxicity prediction as the weakest modelling link."),
      L("ربط السمات البنيوية بفرضيات آلية دون ادعاء يقين.", "Link structural features to mechanistic hypotheses without claiming certainty."),
    ],
    [
      {
        type: "prose",
        id: "l15-tox-intro",
        title: L("السمية ليست واصفة واحدة", "Toxicity is not one descriptor"),
        body: L(
          "hERG قناة بوتاسيوم قلبية؛ جزيئات أساسية محبة للدهن عطرية كثيراً ما تُنهّم بها. السمية الكبدية قد تأتي من bioactivation أو من اضطراب mitochondria أو من آلية الهدف في الكبد. المطفرية (Ames وما يتصل) ترتبط أحياناً بـ aromatic amines وstructural alerts أخرى. النماذج الحاسوبية لهذه النهايات أضعف عموماً من نماذج logP لأنها بيانات أقل وآليات أكثر.",
          "hERG is a cardiac potassium channel; basic, lipophilic, aromatic molecules are often implicated. Hepatotoxicity may come from bioactivation, mitochondrial disruption, or on-target liver biology. Mutagenicity (Ames and related) sometimes associates with aromatic amines and other structural alerts. Computational models for these endpoints are generally weaker than logP models because the data are fewer and the mechanisms more numerous.",
        ),
      },
      {
        type: "list",
        id: "l15-tox-flags",
        title: L("أعلام للنقاش لا للرعب", "Flags for discussion, not panic"),
        items: [
          L("أمين قاعدي + نظام عطري ممتد: ناقش hERG مبكراً.", "Basic amine + extended aromatic system: discuss hERG early."),
          L("Phenol / aniline / quinone-like: ناقش bioactivation.", "Phenol / aniline / quinone-like: discuss bioactivation."),
          L("تخليب معدن قوي غير مقصود في هدف غير metallo.", "Unintended strong metal chelation on a non-metallo target."),
          L("Off-target receptors (nuclear receptors، aminergic GPCRs) حسب chemotype.", "Off-target receptors (nuclear receptors, aminergic GPCRs) by chemotype."),
        ],
      },
      {
        type: "callout",
        id: "l15-tox-warn",
        kind: "warning",
        title: L("تحذير: لوحة «toxicity score» ليست تجربة سلامة", "Warning: a 'toxicity score' dashboard is not a safety study"),
        body: L(
          "نماذج عامة قد تُعلم أنماطاً أدبية لا آلية. نتيجة «غير سام» خارج النطاق بلا معنى. نتيجة «سام» بلا آلية تُرشد إلى فحص لا إلى دفن السلسلة. لا تختلق نسب إصابات أو IC50 لـ hERG من الذاكرة في ورقة.",
          "Global models may learn literature patterns rather than mechanism. An 'non-toxic' call outside the domain is meaningless. A 'toxic' call without mechanism leads to an assay, not to burying the series. Do not invent hERG IC50 values or incidence rates from memory in a paper.",
        ),
      },
      {
        type: "steps",
        id: "l15-tox-triage",
        title: L("تدرّج علمي", "A scientific ladder"),
        items: [
          { title: L("سمة بنيوية", "Structural feature"), body: L("هل يوجد سبب فيزيائي للتهمة؟", "Is there a physical reason for the accusation?") },
          { title: L("فحص مبكر مناسب", "An appropriate early assay"), body: L("ارتباط hERG، Ames، glutathione trapping — حسب الفرضية.", "hERG binding, Ames, glutathione trapping — according to the hypothesis.") },
          { title: L("تعديل موجَّه", "Directed edit"), body: L("خفض pKa، كسر العطرية الممتدة، حجب موقع الأكسدة.", "Lower pKa, break extended aromaticity, block an oxidation site.") },
        ],
      },
      {
        type: "why",
        id: "l15-tox-why",
        question: L("لماذا السمية أصعب نمذجة من الذوبان؟", "Why is toxicity harder to model than solubility?"),
        answer: L("الذوبان فيزياء طور واحد نسبياً. السمية أحداث متعددة: قناة، إنزيم، مناعة، مستقلب تفاعلي، بيولوجيا الهدف. تسمية النهاية الواحدة «tox» تخلط آليات لا يجمعها نموذج واحد بنزاهة.", "Solubility is relatively one-phase physics. Toxicity is many events: a channel, an enzyme, immunity, a reactive metabolite, target biology. Calling the single endpoint 'tox' mixes mechanisms that one model cannot honestly unify."),
      },
      {
        type: "whatif",
        id: "l15-tox-whatif",
        scenario: L("ماذا لو ألغيت سلسلة لأن نموذجاً عاماً قال «hepatotoxic» دون قياس ودون آلية؟", "What if you kill a series because a public model said 'hepatotoxic' with no measurement and no mechanism?"),
        consequence: L("قد تدفن كيمياء جيدة على إنذار غير معاير. أو — بالعكس — إن تجاهلت أميناً عطرياً قاعدياً حتى الحيوان فقد تدفع ثمناً أكبر. التوازن: إنذار → فرضية → فحص، لا إعدام ولا إنكار.", "You may bury good chemistry on an uncalibrated alarm. Or — conversely — if you ignore a basic aromatic amine until animals, you may pay more. The balance: alert → hypothesis → assay, neither execution nor denial."),
      },
      {
        type: "exercise",
        id: "l15-tox-ex",
        prompt: L("ليغند kinase: piperazine طرفي، logD مرتفع، حلقتان عطريتان. اكتب فرضية hERG وتعديلاً واحداً لا يحذف الـ hinge binder.", "A kinase ligand: terminal piperazine, high logD, two aromatic rings. Write a hERG hypothesis and one edit that does not delete the hinge binder."),
        solution: L("فرضية: الشحنة الموجبة البعيدة + lipophilicity + عطرية تُفضّل جيب hERG. تعديل: خفض pKa (مثلاً تعديل في الجوار الإلكتروني للأمين) أو إدخال قطبية نحو المذيب أو كسر خطة العطرية الممتدة — مع إعادة فحص potency على الهدف. لا تُحذف مجموعة hinge من أجل لوحة تنبؤ.", "Hypothesis: a distal positive charge + lipophilicity + aromatics favour the hERG pocket. Edit: lower pKa (electronic neighbour of the amine), add solvent-facing polarity, or break extended aromaticity — then recheck on-target potency. Do not delete the hinge group because of a prediction dashboard."),
      },
    ],
    ["l15-cyp", "l15-models", "l11-selectivity"],
  ),

  expand(
    "l15-models",
    [
      L("تفضيل نموذج محلي على لوحة عامة عمياء عندما تتوفر بيانات السلسلة.", "Prefer a local model over a blind public dashboard when series data exist."),
      L("تطبيق applicability domain على كل تنبؤ ADMET.", "Apply an applicability domain to every ADMET prediction."),
      L("توثيق الأداة والإصدار والنهاية المقاسة أصلاً.", "Document the tool, version, and the endpoint originally measured."),
    ],
    [
      {
        type: "prose",
        id: "l15-mod-intro",
        title: L("الأداة ليست الحقيقة", "The tool is not the truth"),
        body: L(
          "لوحات ADMET العامة مفيدة كغربلة أولية ولتعليم الواصفات. عندما تملك عشرات القياسات في سلسلتك، نموذج محلي (حتى انحدار بسيط على logD وTPSA) غالباً أصدق داخل ذلك الـ chemotype. الخلط بين نهاية مقاسة (Caco-2 مختبر X) وتنبؤ (نموذج ويب) في جدول واحد دون وسم خداع.",
          "Public ADMET dashboards are useful as primary triage and for teaching descriptors. When you own tens of measurements in your series, a local model (even a simple regression on logD and TPSA) is often more honest inside that chemotype. Mixing a measured endpoint (Caco-2 from lab X) and a prediction (web model) in one table without labels is deceit.",
        ),
      },
      {
        type: "list",
        id: "l15-mod-good",
        title: L("ممارسة دفاعية", "Defensible practice"),
        items: [
          L("سمِّ النهاية: measured vs predicted، والشروط.", "Name the endpoint: measured vs predicted, and the conditions."),
          L("أعلن النطاق: هل الجزيء داخل خبرة النموذج؟", "Declare the domain: is the molecule inside the model's experience?"),
          L("لا تخلط وحدات (cm/s مقابل تصنيف high/low) دون تحويل.", "Do not mix units (cm/s versus high/low class) without a mapping."),
          L("حدّث النموذج المحلي كلما دخلت قياسات جديدة، بتحقّق زمني.", "Update the local model as new measurements arrive, with temporal validation."),
        ],
      },
      {
        type: "callout",
        id: "l15-mod-warn",
        kind: "warning",
        title: L("تحذير: تسرّب من لوحة عامة إلى قرار تخليق", "Warning: leaking a public dashboard into a synthesis decision"),
        body: L(
          "إن قتل «solubility = 2.3» من خادم مجهول مركّباً كان سيُصنع في يومين، فقد سمحت لنموذج خارج النطاق أن يدير الميزانية. استخدم اللوحة لترتيب الأسئلة التجريبية لا لإلغائها.",
          "If 'solubility = 2.3' from an unnamed server killed a compound that would have been made in two days, you let an out-of-domain model run the budget. Use the dashboard to order experimental questions, not to cancel them.",
        ),
      },
      {
        type: "compare",
        id: "l15-mod-cmp",
        left: L("لوحة عامة", "Public dashboard"),
        right: L("نموذج محلي", "Local model"),
        rows: [
          { dim: L("التغطية", "Coverage"), a: L("واسعة، ضحلة، متحيزة للأدبيات.", "Broad, shallow, literature-biased."), b: L("ضيقة، أعمق داخل السلسلة.", "Narrow, deeper inside the series.") },
          { dim: L("أفضل استخدام", "Best use"), a: L("إنذار مبكر ومقارنة chemotypes.", "Early alarm and chemotype comparison."), b: L("ترتيب نظائر الجولة التالية.", "Ranking analogues for the next round.") },
        ],
      },
      {
        type: "why",
        id: "l15-mod-why",
        question: L("لماذا يتفوق نموذج محلي صغير على شبكة عامة ضخمة داخل مشروع؟", "Why does a small local model beat a huge public net inside a project?"),
        answer: L("لأن خطأ القياس والـ assay protocol ثابتان نسبياً، والـ scaffold مشترك. الشبكة العامة تتعلم عالماً آخر. داخل سلسلة، إشارة SAR الحقيقية تغرق في تلك العشوائية الخارجية.", "Because measurement error and assay protocol are relatively fixed, and the scaffold is shared. The public net learned another world. Inside a series, real SAR signal drowns in that external randomness."),
      },
      {
        type: "whatif",
        id: "l15-mod-whatif",
        scenario: L("ماذا لو غيّرت المختبر بروتوكول Caco-2 واستمررت تستخدم النموذج المحلي القديم دون إعادة معايرة؟", "What if the lab changes the Caco-2 protocol and you keep using the old local model without recalibration?"),
        consequence: L("انزياح توزيع صامت: النموذج يتنبأ البروتوكول القديم. أي قرار تحسين يصبح تخميناً. المعايرة الزمنية جزء من ADMET لا ترفاً إحصائياً.", "A silent distribution shift: the model predicts the old protocol. Every optimisation decision becomes a guess. Temporal calibration is part of ADMET, not a statistical luxury."),
      },
      {
        type: "exercise",
        id: "l15-mod-ex",
        prompt: L("اكتب ترويسة جدول نتائج تمزج قياساً وتنبؤاً دون أن تضلل القارئ.", "Write a results-table header that mixes measurement and prediction without misleading the reader."),
        solution: L("أعمدة منفصلة: «Caco-2 Papp (measured, lab, pH)» و«Papp (predicted, tool, version, in-domain Y/N)». لا عمود واحد اسمه ADMET.", "Separate columns: 'Caco-2 Papp (measured, lab, pH)' and 'Papp (predicted, tool, version, in-domain Y/N)'. No single column named ADMET."),
      },
    ],
    ["l15-tox", "l12-ad", "l16-limits"],
  ),
  expand(
    "l16-pipeline",
    [
      L("كتابة خط التعلم الآلي: بيانات → تمثيل → نموذج → تحقّق.", "Write the ML pipeline: data → representation → model → validation."),
      L("اعتبار جودة البيانات أسبق من اختيار الخوارزمية.", "Treat data quality as prior to algorithm choice."),
      L("كشف تسريب التقييم وانزياح التوزيع كمصادر فشل أولى.", "Spot evaluation leakage and distribution shift as primary failure modes."),
    ],
    [
      {
        type: "prose",
        id: "l16-pip-intro",
        title: L("بدون بيانات جيدة النموذج مسرح", "Without good data the model is theatre"),
        body: L(
          "التعلم الآلي في الاكتشاف الدوائي ليس سحراً: جدول نشاطات صاخب، تمثيل جزيئي، خوارزمية تُلائم، وبروتوكول يقول هل سيعمّم. معظم الفشل يحدث قبل fit: IC50 مخلوطة الوحدات، تسريب النظائر بين تدريب واختبار، أو تمثيل يتجاهل stereochemistry. الخوارزمية الأخيرة في الطابور.",
          "Machine learning in discovery is not magic: a noisy activity table, a molecular representation, a fitting algorithm, and a protocol that says whether it will generalise. Most failure happens before fit: mixed-unit IC50, analogue leakage between train and test, or a representation that ignores stereochemistry. The algorithm is last in the queue.",
        ),
      },
      {
        type: "steps",
        id: "l16-pip-steps",
        title: L("الخط بترتيب المسؤولية", "The pipeline in order of responsibility"),
        items: [
          { title: L("بيانات", "Data"), body: L("مصدر الفحص، الوحدات، تكرار القياس، إزالة التكرار البنيوي.", "Assay source, units, replicate structure, structural deduplication.") },
          { title: L("تمثيل", "Representation"), body: L("واصفات، بصمات، رسوم، أو تسلسل — قرار كيميائي.", "Descriptors, fingerprints, graphs, or sequences — a chemical decision.") },
          { title: L("نموذج", "Model"), body: L("تعقيد يناسب N. غابة على مئة صف ليست جبناً.", "Complexity matched to N. A forest on a hundred rows is not cowardice.") },
          { title: L("تحقّق", "Validation"), body: L("تقسيم صادق، نطاق تطبيق، ومعايرة الخطأ.", "Honest split, applicability domain, error calibration.") },
        ],
      },
      {
        type: "callout",
        id: "l16-pip-warn",
        kind: "warning",
        title: L("تحذير: التسريب أسهل من الكيمياء", "Warning: leakage is easier than chemistry"),
        body: L(
          "إذا ظهر المركب — أو نظيره Tanimoto 0.99 — في التدريب والاختبار، فأنت تقيس الذاكرة. كذلك استخدام واصفة تُشتق من النشاط نفسه، أو اختيار فرط المعاملات على مجموعة الاختبار. جمّد البروتوكول قبل فتح الأرقام النهائية.",
          "If the compound — or its Tanimoto-0.99 analogue — sits in both train and test, you are measuring memory. Likewise a descriptor derived from the activity itself, or hyperparameter selection on the test set. Freeze the protocol before opening the final numbers.",
        ),
      },
      {
        type: "list",
        id: "l16-pip-shift",
        title: L("انزياح التوزيع", "Distribution shift"),
        items: [
          L("Scaffold جديد في الإنتاج لم يُرَ في التدريب.", "A new scaffold in production never seen in training."),
          L("تغيّر بروتوكول الفحص مع الزمن.", "Assay protocol drift over time."),
          L("مكتبة فرز أوسع كيميائياً من ChEMBL التاريخي.", "A screening library chemically broader than historical ChEMBL."),
        ],
      },
      {
        type: "why",
        id: "l16-pip-why",
        question: L("لماذا ندرّس الخط قبل الشبكات؟", "Why teach the pipeline before nets?"),
        answer: L("لأن شبكة على بيانات مسربة «تنجح» بسهولة وتُعلّم عادة سيئة. الخط الصحيح يجعل حتى الانحدار الخطي ورقة يمكن الدفاع عنها، ويجعل الشبكة مسؤولة عن تعميم حقيقي.", "Because a net on leaked data 'succeeds' easily and teaches a bad habit. A correct pipeline makes even linear regression a defensible paper, and makes a net accountable for real generalisation."),
      },
      {
        type: "whatif",
        id: "l16-pip-whatif",
        scenario: L("ماذا لو درّبت على ChEMBL ثم اختبرت على نفس ChEMBL بعد إعادة تقسيم عشوائي ونشرت AUC كدليل اكتشاف؟", "What if you train on ChEMBL, test on the same ChEMBL after a random resplit, and publish AUC as discovery evidence?"),
        consequence: L("قياس استرجاع أدبيات لا اكتشاف. المحكّم يطلب scaffold split أو زمني ومقارنة مع تشابه بسيط كخط أساس. إن لم تهزم Tanimoto nearest neighbour فلا مبرر للنموذج المعقد.", "You measured literature retrieval, not discovery. A reviewer asks for a scaffold or temporal split and a simple similarity baseline. If you cannot beat Tanimoto nearest neighbour, the complex model is unjustified."),
      },
      {
        type: "exercise",
        id: "l16-pip-ex",
        prompt: L("اكتب أربعة بنود checklist قبل fit.", "Write four checklist items before fit."),
        solution: L("(1) وحدات نشاط موحّدة. (2) إزالة تكرار InChIKey. (3) خطة تقسيم مكتوبة (scaffold/زمني). (4) خط أساس غير ML (متوسط التدريب أو nearest neighbour). بلا خط أساس لا تعرف إن كان النموذج يعمل.", "(1) Unified activity units. (2) InChIKey deduplication. (3) A written split plan (scaffold/temporal). (4) A non-ML baseline (training mean or nearest neighbour). Without a baseline you do not know if the model works."),
      },
    ],
    ["l16-classical", "l12-valid", "l16-limits"],
  ),

  expand(
    "l16-classical",
    [
      L("معرفة متى تنافس الغابات وSVM وXGBoost الشبكات على بيانات صغيرة.", "Know when forests, SVM, and XGBoost still compete with nets on small data."),
      L("ربط اختيار النموذج بحجم N وبإمكانية التفسير.", "Match model choice to N and to interpretability needs."),
      L("استخدام أهمية الواصفات بحذر كإرشاد لا كآلية.", "Use descriptor importance cautiously as a hint, not as mechanism."),
    ],
    [
      {
        type: "prose",
        id: "l16-cla-intro",
        title: L("الصغير لا يخجل من الكلاسيكي", "Small N need not apologise for classical models"),
        body: L(
          "انحدار منتظم، غابة عشوائية، SVM، وXGBoost ما زالت أدوات جدية عندما يكون لديك عشرات إلى آلاف المركبات. تتفوق أحياناً على شبكة بيانية لأن الأخيرة تحتاج تمثيلاً وانتظاماً أكثر مما يوفره الجدول. الكلاسيكي أيضاً أسهل في التشخيص: منحنى تعلم، أهمية متغير، ودعم نواقل.",
          "Regularised regression, random forests, SVM, and XGBoost remain serious tools when you have tens to thousands of compounds. They sometimes beat a graph net because the net wants more representation and regularisation than the table provides. Classical models are also easier to diagnose: learning curves, variable importance, support vectors.",
        ),
      },
      {
        type: "list",
        id: "l16-cla-when",
        title: L("متى أي أداة", "When which tool"),
        items: [
          L("MLR/PLS: عندما تريد معاملات تناقَش كيميائياً وN صغير جداً.", "MLR/PLS: when you want chemically discussable coefficients and N is tiny."),
          L("غابة / XGBoost: لاخطية وتفاعلات واصفات، مع خطر الحفظ إن عمق الشجرة حر.", "Forest / XGBoost: descriptor nonlinearities and interactions; risk of memorisation if depth is free."),
          L("SVM: حدود قرار في فضاء بصمات عالية البعد؛ حساس للمعايرة C/γ.", "SVM: decision boundaries in high-dimensional fingerprint space; sensitive to C/γ calibration."),
        ],
      },
      {
        type: "callout",
        id: "l16-cla-lim",
        kind: "limitation",
        title: L("محدودية أهمية المتغير", "Limitation of variable importance"),
        body: L(
          "واصفة مهمة في غابة قد تكون مرتبطة بـ scaffold لا بالجيب. الأهمية لا تثبت سببية. permutation importance أصدق من الشوائب الإشراسية إن وُجدت تعددية خطية، لكنه ما زال داخل التوزيع التدريبي.",
          "An important descriptor in a forest may track a scaffold rather than the pocket. Importance does not prove causation. Permutation importance is more honest than impurity scores under collinearity, but it still lives inside the training distribution.",
        ),
      },
      {
        type: "compare",
        id: "l16-cla-cmp",
        left: L("نموذج كلاسيكي", "Classical model"),
        right: L("شبكة عميقة", "Deep net"),
        rows: [
          { dim: L("N صغير", "Small N"), a: L("غالباً أمتن إن ضُبط بانتظام.", "Often sturdier if regularised."), b: L("سهل الحفظ ما لم يُقيَّد بقوة.", "Easy to memorise unless heavily constrained.") },
          { dim: L("التفسير", "Explanation"), a: L("ممكن بحذر.", "Possible with caution."), b: L("يحتاج أدوات إضافية وقد يخدع.", "Needs extra tools and can deceive.") },
        ],
      },
      {
        type: "why",
        id: "l16-cla-why",
        question: L("لماذا يبقى خط الأساس الكلاسيكي إلزامياً حتى في ورقة GNN؟", "Why is a classical baseline mandatory even in a GNN paper?"),
        answer: L("لأنه يخبرك هل العمارة تستحق التعقيد. إن هزم ECFP+XGBoost شبكتك على scaffold split فالرواية المعمارية ضعيفة.", "Because it tells you whether the architecture earned its complexity. If ECFP+XGBoost beats your net on a scaffold split, the architectural narrative is weak."),
      },
      {
        type: "whatif",
        id: "l16-cla-whatif",
        scenario: L("ماذا لو درّبت XGBoost بعمق كبير على 80 مركباً وحصلت على R² تدريب 0.99؟", "What if you train a deep XGBoost on 80 compounds and get training R² 0.99?"),
        consequence: L("حفظ. خفّض العمق، زد الانتظام، وانظر الاختبار وy-scrambling. الرقم اللامع على التدريب دليل اتهام لا فخر.", "Memorisation. Reduce depth, increase regularisation, and look at test performance and y-scrambling. A glossy training number is an accusation, not a trophy."),
      },
      {
        type: "exercise",
        id: "l16-cla-ex",
        prompt: L("اختر نموذجاً لـ 150 مثبطاً وواصفات فيزيوكيميائية تريد مناقشتها مع كيميائي طبي. برّر.", "Choose a model for 150 inhibitors and physicochemical descriptors you want to discuss with a medicinal chemist. Justify."),
        solution: L("انحدار منتظم أو PLS أو غابة ضحلة مع permutation importance. الشبكة غير مبررة عند هذا N إذا كان الهدف نقاشاً كيميائياً. أضف خط أساس متوسط وscaffold split.", "Regularised regression or PLS, or a shallow forest with permutation importance. A net is unjustified at this N if the goal is chemical discussion. Add a mean baseline and a scaffold split."),
      },
    ],
    ["l16-pipeline", "l16-gnn", "l12-qsar"],
  ),

  expand(
    "l16-gnn",
    [
      L("وصف الجزيء كرسم: ذرات عقد وارتباطات حواف.", "Describe a molecule as a graph: atoms as nodes, bonds as edges."),
      L("شرح فكرة message passing دون اختراع أسماء طبقات غير مؤكدة.", "Explain message passing without inventing uncertain layer names."),
      L("الحذر من أن الشبكة تتعلم scaffolds لا فيزياء الارتباط.", "Beware that the net may learn scaffolds rather than binding physics."),
    ],
    [
      {
        type: "prose",
        id: "l16-gnn-intro",
        title: L("الجزيء كرسم", "The molecule as a graph"),
        body: L(
          "الشبكة البيانية الجزيئية تُحدّث تمثيل كل ذرة بتجميع معلومات الجيران عبر الروابط (message passing)، ثم تُلخّص الرسم إلى متجه جزيء. هذا يناسب الكيمياء: البنية ليست جدولاً مستطيلاً. المحولات على SMILES أو على الرسوم تقرأ سياقاً أطول. القدرة لا تعني فهماً للجيب؛ بلا بيانات وضع ارتباط قد تتعلم الشبكة شكل السلسلة الناجحة في ChEMBL.",
          "A molecular graph net updates each atom's representation by aggregating neighbours across bonds (message passing), then pools the graph into a molecule vector. That fits chemistry: structure is not a rectangular table. Transformers on SMILES or graphs read longer context. Capacity is not pocket understanding; without binding-mode data the net may learn the shape of series that succeeded in ChEMBL.",
        ),
      },
      {
        type: "list",
        id: "l16-gnn-inductive",
        title: L("تحيّزات يجب أن تعرفها", "Biases you must know"),
        items: [
          L("SMILES غير فريد؛ canonicalize قبل التقسيم.", "SMILES is not unique; canonicalize before splitting."),
          L("تجاهل stereochemistry إن لم تُرمَّز صراحة.", "Stereochemistry is ignored unless encoded explicitly."),
          L("حجم الرسم والتدريب غير المتوازن يُفضّل scaffolds شائعة.", "Graph size and imbalanced training favour common scaffolds."),
          L("تسريب الهياكل عبر التشابه إن كان الـ split عشوائياً.", "Scaffold leakage through similarity if the split is random."),
        ],
      },
      {
        type: "callout",
        id: "l16-gnn-lim",
        kind: "limitation",
        title: L("محدودية: التعميم على هيكل جديد", "Limitation: generalising to a new core"),
        body: L(
          "أداء GNN اللامع على random split ينهار غالباً على scaffold split. هذا ليس عيباً في الفكرة بل في الادعاء. إن كان هدفك hop حقيقي، فالقياس هو الأداء على هيكل محجوب، مقارنة بخط أساس Morgan+XGBoost.",
          "Glossy GNN performance on a random split often collapses on a scaffold split. That is not a flaw in the idea but in the claim. If your goal is a real hop, the metric is performance on a held-out core versus a Morgan+XGBoost baseline.",
        ),
      },
      {
        type: "why",
        id: "l16-gnn-why",
        question: L("لماذا message passing فكرة كيميائية معقولة؟", "Why is message passing a chemically reasonable idea?"),
        answer: L("لأن خصائص الذرة (شحنة جزئية تقريبية، عطرية، بيئة) تعتمد على جيرانها بخطوات. تجميع الجيران يُحاكي بيئة كيميائية محلية، شبيهة بفكرة Morgan لكن قابلة للتعلم من البيانات.", "Because an atom's properties (approximate partial charge, aromaticity, environment) depend on its neighbours in hops. Aggregating neighbours mimics a local chemical environment, akin to Morgan but learnable from data."),
      },
      {
        type: "whatif",
        id: "l16-gnn-whatif",
        scenario: L("ماذا لو فسّرت خريطة انتباه الذرات كخريطة hotspot للبروتين؟", "What if you interpret an atom-attention map as a protein hotspot map?"),
        consequence: L("خلطت تفسير النموذج مع فيزياء الهدف. الانتباه يقول أين ينظر النموذج ليفصل النشاط في هذه البيانات، وقد يشير إلى علامة scaffold. لا تضعها على بنية 1IEP وتدّعي آلية.", "You mixed model explanation with target physics. Attention says where the model looked to separate activity in these data, and it may mark a scaffold badge. Do not paint it on 1IEP and claim a mechanism."),
      },
      {
        type: "exercise",
        id: "l16-gnn-ex",
        prompt: L("اذكر ثلاثة ترميزات للعقدة الذرية أنت واثق أنها مستخدمة عموماً، دون اختراع أسماء طبقات.", "Name three atom-node encodings you are confident are generally used, without inventing layer names."),
        solution: L("شائعة: العدد الذري / الهوية العنصرية، درجة الارتباط، العطرية، الشحنة الشكلية، وربما hybridization. التفاصيل الدقيقة لبرمجية معيّنة تُراجع من توثيقها الحالي لا تُختلق.", "Common: atomic number / element identity, degree, aromaticity, formal charge, and maybe hybridization. Software-specific details are read from current docs, not invented."),
      },
      {
        type: "callout",
        id: "l16-gnn-edu",
        kind: "educational",
        title: L("مثال تعليمي", "Educational note"),
        body: L("لا حاجة لتسمية ورقة GNN معيّنة لتفهم الفكرة. إن استشهدت بعمل، تحقّق من العنوان والسنة ولا تختلق DOI.", "You do not need to name a specific GNN paper to understand the idea. If you cite a work, verify title and year; do not invent a DOI."),
      },
    ],
    ["l16-classical", "l16-gen", "l5-graphs"],
  ),

  expand(
    "l16-gen",
    [
      L("وصف الكيمياء التوليدية كتعلم توزيع لا كضمان قابلية صنع.", "Describe generative chemistry as learning a distribution, not as a guarantee of makeability."),
      L("إدراج قيود التخليق والـ ADMET والهدف في التقييم لا بعد الرسم.", "Put synthesis, ADMET, and the target into evaluation, not after the drawing."),
      L("رفض معاملة العينة المولَّدة كإصابة دون فحص.", "Refuse to treat a generated sample as a hit without an assay."),
    ],
    [
      {
        type: "prose",
        id: "l16-gen-intro",
        title: L("توزيع متعلَّم ≠ كيمياء ممكنة", "A learned distribution ≠ makeable chemistry"),
        body: L(
          "النماذج التوليدية (شبكات على SMILES، VAEs، نماذج على الرسوم، نماذج انتشار — كمفاهيم) تقترح جزيئات من توزيع درّبت عليه. إن كان التدريب ChEMBL فالعينات ستشبه أدبيات النشاط. الجمال البصري ودرجة docking لا تُحوّل العينة إلى مركب. التقييم الصادق: صلاحية كيميائية، حداثة، تنوع، قابلية صنع، ثم فرضية هدف، ثم تجربة.",
          "Generative models (SMILES nets, VAEs, graph models, diffusion models — as concepts) propose molecules from a distribution they were trained on. If training was ChEMBL, samples will look like activity literature. Visual beauty and a docking score do not promote a sample to a compound. Honest evaluation: chemical validity, novelty, diversity, makeability, then a target hypothesis, then experiment.",
        ),
      },
      {
        type: "list",
        id: "l16-gen-eval",
        title: L("ماذا تقيس قبل أن تفتخر", "What to measure before you boast"),
        items: [
          L("Validity: هل SMILES يُترجم إلى جزيء بقواعد التكافؤ؟", "Validity: does the SMILES translate to a valence-legal molecule?"),
          L("Uniqueness / novelty: هل نكرر التدريب؟", "Uniqueness / novelty: are we repeating training?"),
          L("Synthetic access: كتالوج أو درجة SA أو مسار.", "Synthetic access: a catalogue, an SA score, or a route."),
          L("Goal: هل اقتربت من pharmacophore أو نافذة ملكية معلنة؟", "Goal: did you approach a declared pharmacophore or property window?"),
        ],
      },
      {
        type: "callout",
        id: "l16-gen-warn",
        kind: "warning",
        title: L("تحذير: تحسين درجة النموذج التوليدي حلقة مغلقة", "Warning: optimising the generative score is a closed loop"),
        body: L(
          "إن كافأت النموذج بـ docking score فستحصل على ما تحبه دالة التقييم: جزيئات كبيرة دهنية ما لم تقيّد. إن كافأته بتشابه لمرجع فستحصل على نظائر. الهدف الخارجي يجب أن يتضمن قيوداً متعددة ومعاينة بشرية.",
          "If you reward the model with a docking score you will get what the scoring function likes: large greasy molecules unless constrained. If you reward similarity to a reference you will get analogues. The external objective must include multiple constraints and a human look.",
        ),
      },
      {
        type: "why",
        id: "l16-gen-why",
        question: L("ما القيمة الحقيقية للتوليد إن كانت المكتبات المشتراة ضخمة؟", "What is generation actually worth if purchasable libraries are huge?"),
        answer: L("اقتراح متجهات غير موجودة في الكتالوج، أو ملء جيب بقيود هندسية يصعب تعدادها، أو إعادة تصميم series تحت قيود ADMET. ليست القيمة «اجتياز millon SDF». إن لم تُصنع عيّنة فالقيمة صفر بحثياً.", "Proposing vectors absent from the catalogue, filling a pocket under geometric constraints that are hard to enumerate, or redesigning a series under ADMET constraints. The value is not 'passing a million-row SDF'. If no sample is made, the research value is zero."),
      },
      {
        type: "whatif",
        id: "l16-gen-whatif",
        scenario: L("ماذا لو نشرت 200 بنية مولَّدة كـ inhibitors محتملة دون SA ودون فحص؟", "What if you publish 200 generated structures as potential inhibitors with no SA and no assay?"),
        consequence: L("هذه معرض رسوم. المحكّم يطلب معيار نجاح: كم نجا كيميائياً، كم يُصنع، كم فُحص. بلا ذلك الادعاء اكتشافاً زائف.", "That is an art gallery. A reviewer asks for a success criterion: how many were chemically valid, makeable, assayed. Without that the discovery claim is false."),
      },
      {
        type: "exercise",
        id: "l16-gen-ex",
        prompt: L("صمّم بروتوكول تقييم من خمس بوابات لنموذج توليدي على kinase.", "Design a five-gate evaluation protocol for a generative model on a kinase."),
        solution: L("Validity → فلتر ملكية معلن (مع استثناء fragment إن لزم) → قيد hinge/pharmacophore أو redocking مع قاعدة هيئة → SA أو in-stock nearest building block → اختيار بشري متنوع الـ scaffolds قبل أي شراء. docking score ليس بوابة وحيدة.", "Validity → a declared property filter (with a fragment exception if needed) → a hinge/pharmacophore constraint or redocking with a pose rule → SA or nearest in-stock building block → human diverse-scaffold picks before any purchase. Docking score is not a solo gate."),
      },
      {
        type: "callout",
        id: "l16-gen-lim",
        kind: "limitation",
        title: L("محدودية البيانات", "Data limitation"),
        body: L("النموذج لا يعرف إلا ما أُعطي. ندرة البيانات السلبية الحقيقية (مركبات فُحصت ووجدت غير نشطة) تجعل التوليد «الموجَّه للنشاط» عرضة لإعادة إنتاج تحيز النشر.", "The model knows only what it was given. Scarcity of true negatives (compounds assayed and found inactive) makes 'activity-conditioned' generation prone to reproducing publication bias."),
      },
    ],
    ["l16-gnn", "l14-sa", "l16-limits"],
  ),

  expand(
    "l16-plm",
    [
      L("التمييز بين طية متنبأة وهيئة ارتباط bound pose.", "Distinguish a predicted fold from a bound pose."),
      L("قراءة pLDDT ومناطق منخفضة الثقة كتحذير للجيوب والعُرى.", "Read pLDDT and low-confidence regions as warnings for pockets and loops."),
      L("معرفة متى يفيد نموذج لغة بروتين ومتى يضلل الفرز.", "Know when a protein language model helps and when it misleads screening."),
    ],
    [
      {
        type: "prose",
        id: "l16-plm-intro",
        title: L("الطية ليست وضع ارتباط", "The fold is not a binding mode"),
        body: L(
          "نماذج بنية البروتين (AlphaFold وأشباهه) ونماذج اللغة البروتينية تقدّر طية أو تمثيلاً تسلسلياً من بيانات تطورية وبنيوية. هذا إنجاز. لا يعني أن الجيب في هيئة ligand-bound، ولا أن الحلقة الغائبة في البلورة قد صُحّحت فيزيائياً، ولا أنك تملك مستقبل docking جاهزاً. pLDDT منخفض في الجيب إنذار لا تفصيل تجميلي.",
          "Protein structure models (AlphaFold and relatives) and protein language models estimate a fold or a sequence embedding from evolutionary and structural data. That is an achievement. It does not mean the pocket is in a ligand-bound conformation, nor that a crystallographically missing loop has been physically corrected, nor that you own a docking-ready receptor. Low pLDDT in the pocket is an alarm, not a cosmetic detail.",
        ),
      },
      {
        type: "list",
        id: "l16-plm-use",
        title: L("استخدام مشروع", "Legitimate use"),
        items: [
          L("فرض خريطة نطاقات وأين قد يقع جيب عندما لا توجد بلورة.", "A domain map and where a pocket might sit when no crystal exists."),
          L("توليد فرضيات طفرات أو واجهات.", "Hypotheses for mutations or interfaces."),
          L("انطلاق لمحاكاة أو تصميم بروتين — مع معاينة لاحقة.", "A starting point for simulation or protein design — with later sampling."),
        ],
      },
      {
        type: "callout",
        id: "l16-plm-warn",
        kind: "warning",
        title: L("تحذير: AlphaFold fold ≠ bound pose", "Warning: an AlphaFold fold ≠ a bound pose"),
        body: L(
          "الفرز على نموذج عالي pLDDT ظاهرياً قد يتم على جيب مغلق أو على عروة وُضعت في مكان مريح للطاقة الإحصائية لا للارتباط. قارن مع عائلة بلورية إن وُجدت. إن أردت استخدام النموذج للالتحام، عالج المرونة (ensemble، MD، induced fit) وصرّح أن المستقبِل فرضية بنيوية.",
          "Screening a seemingly high-pLDDT model may run on a closed pocket or on a loop placed where the statistical potential is comfortable, not where a ligand binds. Compare with a crystal family if one exists. If you dock into the model, address flexibility (ensemble, MD, induced fit) and state that the receptor is a structural hypothesis.",
        ),
      },
      {
        type: "compare",
        id: "l16-plm-cmp",
        left: L("بلورة co-crystal", "Co-crystal"),
        right: L("طية متنبأة", "Predicted fold"),
        rows: [
          { dim: L("الهيئة", "Conformation"), a: L("مرتبطة بليغند في شروط البلورة.", "Ligand-bound under crystal conditions."), b: L("غالباً أقرب إلى متوسط apo/مستقر إحصائياً.", "Often closer to an apo/statistically stable mean.") },
          { dim: L("الثقة المحلية", "Local confidence"), a: L("B-factor وكثافة.", "B-factor and density."), b: L("pLDDT / PAE — إحصاء نموذج لا قياس.", "pLDDT / PAE — model statistics, not a measurement.") },
        ],
      },
      {
        type: "why",
        id: "l16-plm-why",
        question: L("لماذا قد تكون العروة الأهم للارتباط هي الأقل ثقة في النموذج؟", "Why might the loop that matters most for binding be the least confident in the model?"),
        answer: L("لأن العُرى المرنة قليلة القيود في محاذاة تطورية وغالباً متعددة الهيئة. النموذج يضع «شيئاً» هناك بثقة منخفضة. بناء جدار جيب من تلك الإحداثيات يختلق هندسة.", "Because flexible loops are poorly constrained in evolutionary alignments and often multi-conformational. The model places 'something' there at low confidence. Building a pocket wall from those coordinates invents geometry."),
      },
      {
        type: "whatif",
        id: "l16-plm-whatif",
        scenario: L("ماذا لو فسّرت تلامس ليغند مع عروة pLDDT منخفض كـ SAR مؤكد؟", "What if you interpret ligand contacts to a low-pLDDT loop as confirmed SAR?"),
        consequence: L("قد تُحسّن مركبات نحو ضجيج إحداثيات. أزل تلك العروة من فرضية التفاعل أو عاينها حتى تستقر، وإلا فاجعل الفرضية صريحة التفنيد.", "You may optimise compounds toward coordinate noise. Drop that loop from the interaction hypothesis or sample until it settles; otherwise make the hypothesis explicitly falsifiable."),
      },
      {
        type: "exercise",
        id: "l16-plm-ex",
        prompt: L("قبل فرز على نموذج بنية: اكتب ثلاثة فحوص جودة إلزامية.", "Before screening a structure model: write three mandatory quality checks."),
        solution: L("(1) خريطة pLDDT على الجيب والعُرى المحيطة. (2) مقارنة مع أقرب قالب تجريبي إن وُجد (RMSD نطاقات، فتحة الجيب). (3) قرار مكتوب: docking مباشر، أم ensemble، أم رفض الفرز حتى دليل. الثقة العامة العالية لا تكفي إن كان الجيب ضعيفاً محلياً.", "(1) A pLDDT map on the pocket and neighbouring loops. (2) Comparison to the nearest experimental template if one exists (domain RMSD, pocket opening). (3) A written decision: direct docking, ensemble, or refuse screening until evidence. High global confidence is not enough if the pocket is locally weak."),
      },
    ],
    ["l16-scoring", "l4-quality", "l25-ensemble"],
  ),

  expand(
    "l16-scoring",
    [
      L("وصف دوال التقييم بالتعلم الآلي كنماذج على هيئات وبيانات لا كفيزياء.", "Describe ML scoring functions as models on poses and data, not as physics."),
      L("كشف خطر تعلم الهياكل بدل تعلم التفاعل.", "Expose the risk of learning scaffolds instead of interactions."),
      L("مطالبة بتحقّق على أهداف و decoys مستقلة.", "Demand validation on independent targets and decoys."),
    ],
    [
      {
        type: "prose",
        id: "l16-sc-intro",
        title: L("درجة متعلَّمة ليست ΔG", "A learned score is not ΔG"),
        body: L(
          "دوال التقييم المعتمدة على التعلم تأخذ هيئة (وغالباً وصفاً محلياً للبروتين-ليغند) وتتنبأ رتبة أو درجة ارتباط. قد تلتقط أنماطاً تفوّت الدوال التجريبية. قد تلتقط أيضاً أن هذا الـ scaffold كان نشطاً في PDB التدريبي. بدون decoys صعبة وأهداف محجوبة، «تحسّن AUC» قد يكون ذاكرة أدبية.",
          "ML scoring functions take a pose (and often a local protein–ligand description) and predict a rank or a binding score. They may catch patterns empirical functions miss. They may also catch that this scaffold was active in the training PDB. Without hard decoys and held-out targets, 'improved AUC' may be literature memory.",
        ),
      },
      {
        type: "list",
        id: "l16-sc-risks",
        title: L("أنماط فشل", "Failure patterns"),
        items: [
          L("تفضيل ليغندات تشبه تدريب PDB حتى في وضع خاطئ.", "Preferring ligands that resemble PDB training even in a wrong pose."),
          L("الحساسية لبرتنة وtautomer لأنها تغيّر الرسم البياني أكثر من الفيزياء.", "Sensitivity to protonation and tautomer because they change the graph more than the physics."),
          L("انهيار على معدن أو cofactor نادر في التدريب.", "Collapse on a metal or cofactor rare in training."),
        ],
      },
      {
        type: "callout",
        id: "l16-sc-warn",
        kind: "warning",
        title: L("تحذير: تقييم على نفس توزيع PDB", "Warning: evaluating on the same PDB distribution"),
        body: L(
          "إن كانت مركبات الاختبار redocking لأهداف قريبة التسلسل من التدريب، فالقياس سهل. اطلب انفصالاً زمنياً أو عائلياً، وقارن مع دالة تجريبية بسيطة. إن لم يظهر ربح على أهداف بعيدة فلا تدّعِ فيزياء جديدة.",
          "If test compounds are redocks of targets sequence-close to training, the measurement is easy. Demand a temporal or family split, and compare with a simple empirical function. If there is no gain on distant targets, do not claim new physics.",
        ),
      },
      {
        type: "why",
        id: "l16-sc-why",
        question: L("لماذا تبقى العين الكيميائية ضرورية مع دالة ML؟", "Why is a chemical eye still required with an ML function?"),
        answer: L("لأن النموذج قد يكافئ تماسّاً سطحياً يشبه التدريب. العين تسأل: هل hotspot مملوء؟ هل hinge موجود؟ هل السلالة معقولة؟ هذه أسئلة فيزيائية لا يضمنها AUC.", "Because the model may reward surface contact that looks like training. The eye asks: is a hotspot filled? is the hinge there? is strain plausible? AUC does not guarantee those physical questions."),
      },
      {
        type: "whatif",
        id: "l16-sc-whatif",
        scenario: L("ماذا لو استبدلت Vina بدالة CNN ثم فسّرت كل فارق درجة كـ affinity؟", "What if you replace Vina with a CNN function and interpret every score gap as affinity?"),
        consequence: L("أنت الآن تخلط خطأ الشبكة مع طاقة. ما زالت الدرجة ليست ΔG. استخدمها رتبة داخل chemotype متحقَّق، لا كالوري.", "You are now mixing net error with energy. The score is still not ΔG. Use it as a rank inside a validated chemotype, not as calories."),
      },
      {
        type: "exercise",
        id: "l16-sc-ex",
        prompt: L("اقترح تجربة تحكم تُظهر إن كانت دالة ML تتعلم الهيكل لا الوضع.", "Propose a control that shows whether an ML function is learning the scaffold rather than the pose."),
        solution: L("قدّم نفس الجزيء في وضع صحيح ووضع مقلوب/عشوائي (pose decoys) على أهداف محجوبة. إن بقيت الدرجة عالية على الوضع الخاطئ فالنموذج يشمّ الجزيء لا التفاعل. قارن أيضاً بنظير غير نشط شديد التشابه.", "Present the same molecule in a correct pose and in a shuffled/inverted pose (pose decoys) on held-out targets. If the score stays high on the wrong pose, the model is sniffing the molecule, not the interaction. Also compare a highly similar inactive analogue."),
      },
      {
        type: "callout",
        id: "l16-sc-lim",
        kind: "limitation",
        title: L("محدودية البيانات السلبية", "Limitation of negatives"),
        body: L("Decoys المصنوعة بتشابه ملكية (مفهوم DUD-E وأشباهه) مفيدة وغير بريئة: قد تكون سهلة جداً أو تحمل تحيزات. صرّح مجموعة الخداع.", "Property-matched decoys (the DUD-E-class idea) are useful and not innocent: they may be too easy or carry biases. Name the decoy set."),
      },
    ],
    ["l16-plm", "l8-scoring", "l16-limits"],
  ),

  expand(
    "l16-limits",
    [
      L("صياغة حدود الذكاء الاصطناعي في الاكتشاف: انزياح، تسريب، ندرة السلبي الحقيقي.", "State AI limits in discovery: shift, leakage, scarce true negatives."),
      L("رفض خطاب الاستبدال للتجربة والفيزياء.", "Reject replacement talk for experiment and physics."),
      L("وضع معيار فشل للنموذج قبل نشره كأداة قرار.", "Set a failure criterion for a model before publishing it as a decision tool."),
    ],
    [
      {
        type: "prose",
        id: "l16-lim-intro",
        title: L("النموذج فرضية مُكلفة حسابياً", "A model is a computationally expensive hypothesis"),
        body: L(
          "الذكاء الاصطناعي يسرّع ترتيب الأفكار داخل توزيع رآه. لا يلغي الحاجة إلى فحص، ولا إلى مجال قوة، ولا إلى سؤال علمي قابل للتفنيد. أخطر الخطاب أن «النموذج وجد دواء». أصدقه: النموذج اقترح جزيئاً داخل تحيز بياناته. الباقي عمل كيميائي وحيوي.",
          "AI speeds the ranking of ideas inside a distribution it has seen. It does not cancel the assay, the force field, or a falsifiable scientific question. The most dangerous sentence is 'the model found a drug'. The honest one: the model proposed a molecule inside its data bias. The rest is chemical and biological work.",
        ),
      },
      {
        type: "list",
        id: "l16-lim-list",
        title: L("حدود يجب أن تُذكر في المناقشة", "Limits that belong in the viva"),
        items: [
          L("Distribution shift: كيمياء الغد ليست كيمياء ChEMBL أمس.", "Distribution shift: tomorrow's chemistry is not yesterday's ChEMBL."),
          L("Evaluation leakage: نجاح على تقسيم سهل.", "Evaluation leakage: success on an easy split."),
          L("Label noise: IC50 ليست حقيقة فيزيائية واحدة.", "Label noise: IC50 is not one physical truth."),
          L("عدم اليقين: معظم النماذج لا تعطي معايرة موثوقة خارج النطاق.", "Uncertainty: most models lack reliable calibration out of domain."),
          L("الأثر البيئي والتكلفة: لا تبرر شبكة إن هزمها خط أساس بسيط.", "Cost: do not justify a net if a simple baseline wins."),
        ],
      },
      {
        type: "callout",
        id: "l16-lim-warn",
        kind: "warning",
        title: L("تحذير: الاستبدال خطاب تسويق", "Warning: replacement talk is marketing"),
        body: L(
          "لا docking ولا GNN ولا AlphaFold تُغني عن قياس ارتباط ونفاذية وسلامة. وضعها في سلسلة قرارات يقلّل عدد التجارب الغبية. هذا مكسب حقيقي. المبالغة تُضعف المجال وتُخرّج باحثين لا يستطيعون الدفاع عن methods.",
          "Neither docking nor a GNN nor AlphaFold replaces a binding, permeability, or safety measurement. Placing them in a decision chain reduces stupid experiments. That is a real gain. Hype weakens the field and graduates researchers who cannot defend Methods.",
        ),
      },
      {
        type: "why",
        id: "l16-lim-why",
        question: L("ما الذي يجعل ورقة ML دوائية علماً لا عرضاً تقنياً؟", "What makes a medicinal ML paper science rather than a tech demo?"),
        answer: L("سؤال محدد، خط أساس صعب، نطاق تطبيق، ومعيار يقول متى يُرفض النموذج. ويفضَّل جزيء صُنع وفُحص، حتى لو فشل — الفشل معلومة.", "A specific question, a hard baseline, an applicability domain, and a criterion for rejecting the model. Preferably a molecule that was made and assayed, even if it failed — failure is information."),
      },
      {
        type: "whatif",
        id: "l16-lim-whatif",
        scenario: L("ماذا لو كان معيار نجاح مشروعك «AUC > 0.9 على اختبار عشوائي» فقط؟", "What if your project's only success criterion is 'AUC > 0.9 on a random test'?"),
        consequence: L("ستُحسّن التسريب. غيّر المعيار إلى أداء على scaffold محجوب، أو إلى معدل إصابات تجريبي في دورة شراء. ما لا يُفنّد لا يُحسَّن علمياً.", "You will optimise leakage. Change the criterion to held-out scaffold performance, or to experimental hit rate in a purchase round. What cannot be falsified cannot be scientifically improved."),
      },
      {
        type: "exercise",
        id: "l16-lim-ex",
        prompt: L("اكتب فقرة حدود (5–6 أسطر) تصلح لورقة فرز ML دون أن تبدو اعتذاراً فارغاً.", "Write a limitations paragraph (5–6 lines) fit for an ML screening paper that is not an empty apology."),
        solution: L("النموذج مدرَّب على فحص واحد وchemotype محدود؛ التنبؤ خارج AD يُرفض. لم نُعاير الاحتمالات على زمن لاحق. لم نستبدل الفحص: المركبات المشتراة اختيرت بعد قواعد هيئة وكيمياء طبية. خط الأساس التشابهي يُذكر جنباً إلى جنب. أي ادعاء آلية من أهمية الذرات غير مدعوم.", "The model is trained on one assay and a limited chemotype; out-of-AD predictions are refused. Probabilities were not calibrated on a later time split. We did not replace the assay: purchased compounds were chosen after pose rules and medicinal chemistry. A similarity baseline is reported alongside. Any mechanistic claim from atom importance is unsupported."),
      },
      {
        type: "callout",
        id: "l16-lim-fact",
        kind: "fact",
        title: L("مبدأ الأكاديمية", "Academy principle"),
        body: L("الكيمياء الحاسوبية لا تُنتج حقيقة. تُنتج نماذج وتوقعات وفرضيات تعتمد موثوقيتها على الافتراضات والتحقّق والمعاينة والدليل التجريبي.", "Computational chemistry does not produce truth. It produces models, predictions, and hypotheses whose reliability depends on assumptions, validation, sampling, and experimental evidence."),
      },
    ],
    ["l16-pipeline", "l16-scoring", "l26-falsify"],
  ),
];

