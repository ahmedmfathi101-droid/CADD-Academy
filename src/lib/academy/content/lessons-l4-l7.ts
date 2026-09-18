import type { Lesson } from "@/lib/academy/types";
import { expand, L } from "@/lib/academy/content/helpers";

export const lessons: Lesson[] = [
  expand(
    "l4-aa",
    [
      L(
        "ربط كل فئة حمض أميني بنمط تفاعل في الجيب (شحنة، H-bond، كاره، عطري، معدن).",
        "Map each amino-acid class to a pocket interaction pattern (charge, H-bond, hydrophobic, aromatic, metal).",
      ),
      L(
        "توقع أثر طفرة محافظة مقابل جذرية على هيئة ligand.",
        "Predict the effect of a conservative versus radical mutation on a ligand pose.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l4-aa-intro",
        title: L("السلسلة الجانبية كيمياء الجيب", "The side chain is the pocket’s chemistry"),
        body: L(
          "العمود الفقري يمنح NH وC=O في كل بقايا؛ التمايز يأتي من الجانب. Asp/Glu تقبل جسراً ملحياً وقد تُمسك معادن. Lys/Arg تمنح شحنة موجبة وأذرع طويلة مرنة. Ser/Thr/Tyr تمنح OH. Asn/Gln تمنح وتستقبل دون شحنة صافية. His ثلاث حالات بروتنة. Phe/Tyr/Trp سطوح π. Cys قد يكون ثيول أو جسر S–S أو ربيطة معدن. Ile/Leu/Val/Met ملء كاره. Gly مرونة؛ Pro كسر حلزون.",
          "The backbone offers NH and C=O on every residue; discrimination comes from the side chain. Asp/Glu accept salt bridges and may hold metals. Lys/Arg donate positive charge on long flexible arms. Ser/Thr/Tyr donate OH. Asn/Gln donate and accept with no net charge. His has three protonation states. Phe/Tyr/Trp are π surfaces. Cys may be thiol, disulfide, or a metal ligand. Ile/Leu/Val/Met fill hydrophobically. Gly is flexibility; Pro breaks helices.",
        ),
      },
      {
        type: "list",
        id: "l4-aa-design",
        title: L("أسئلة مصمم أمام بقايا", "A designer’s questions at a residue"),
        items: [
          L("هل البقايا مدفونة أم معرّضة؟ الشحنة المكشوفة تُغربل بالماء.", "Is the residue buried or exposed? Exposed charge is screened by water."),
          L("هل لها هيئة بديلة (altloc) أو B-factor عالٍ؟ المرونة قد تخدع التحاماً جامداً.", "Does it have an altloc or high B-factor? Flexibility may fool rigid docking."),
          L("هل هي موقع طفرة مقاومة معروف في العائلة؟", "Is it a known resistance-mutation site in the family?"),
        ],
      },
      {
        type: "viewer",
        id: "l4-aa-1iep",
        pdb: "1IEP",
        ligand: "STI",
        caption: L(
          "1IEP: اقرأ بقايا hinge والكيس الكاره حول imatinib كقاموس تفاعل لا كصورة جميلة.",
          "1IEP: read hinge residues and the hydrophobic pocket around imatinib as an interaction dictionary, not as a pretty picture.",
        ),
      },
      {
        type: "why",
        id: "l4-aa-why",
        question: L(
          "لماذا يجب أن تفحص بروتنة His وGlu/Asp قبل أن تُفسّر جسراً ملحياً في الشكل؟",
          "Why inspect His and Glu/Asp protonation before you interpret a salt bridge in the figure?",
        ),
        answer: L(
          "الجسر يحتاج شحنتين. His محايد يحوّل التفاعل إلى H-bond أضعف أو تنافر. Asp بروتوني نادر في الماء قد يحدث في جيب منخفض العزل. قرار البروتنة قرار طاقة لا تجميل PDB.",
          "A salt bridge needs two charges. Neutral His turns the contact into a weaker H-bond or a clash. Protonated Asp, rare in water, can occur in a low-dielectric pocket. Protonation is an energy decision, not PDB cosmetics.",
        ),
      },
      {
        type: "callout",
        id: "l4-aa-warn",
        kind: "warning",
        title: L("لا تُصمّم ضد بقايا ناقصة الإحداثيات", "Do not design against a residue with missing coordinates"),
        body: L(
          "سلسلة جانبية غير مرئية في الكثافة قد تكون موجودة كيميائياً. بقاؤها محذوفاً يفتح فراغاً زائفاً يملأه الالتحام بسرور. أكمل بحذر أو اعتبر المنطقة غير موثوقة.",
          "A side chain invisible in density may still exist chemically. Leaving it deleted opens a fake cavity that docking will gladly fill. Complete it cautiously, or treat the region as untrustworthy.",
        ),
      },
      {
        type: "whatif",
        id: "l4-aa-whatif",
        scenario: L(
          "ماذا لو طابقتَ ligand لـ Lys ممتدة في بلورة بينما في المحلول تنطوي على نفسها؟",
          "What if you match a ligand to an extended crystal Lys that in solution folds back?",
        ),
        consequence: L(
          "ستُثبّت مجموعة سالبة في حجم قد لا يبقى. ensemble docking أو نظرة على B-factor والبلورات الأخرى أصدق من سلسلة واحدة جامدة.",
          "You will park an anionic group in a volume that may not persist. Ensemble docking or a look at B-factors and other crystals is more honest than one frozen rotamer.",
        ),
      },
    ],
    ["l4-secondary", "l4-pockets", "l1-pka", "l11-site"],
  ),

  expand(
    "l4-hierarchy",
    [
      L(
        "تمييز المستويات الأولي إلى الرباعي ومعرفة أي مستوى يُحدّد الجيب الذي ترسّمه.",
        "Distinguish primary through quaternary levels and know which level defines the pocket you dock.",
      ),
      L(
        "اكتشاف أن تجاهل شريك oligo قد يحذف نصف الموقع.",
        "Recognize that ignoring an oligomer partner can delete half the site.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l4-hi-intro",
        title: L("الجيب قد يعيش بين سلاسل", "The pocket may live between chains"),
        body: L(
          "الأولي: التسلسل والروابط التساهمية (جسور S–S). الثانوي: حلزون وصحيفة وعروة. الثالثي: انطواء سلسلة واحدة. الرباعي: تجميع سلاسل. HIV protease موقعها بين وحيدتين؛ كثير من واجهات PPI جيوب ضحلة على حدود سلاسل. قصّ السلسلة B «للتبسيط» قد يكون حذف الهدف.",
          "Primary: sequence and covalent links (disulfides). Secondary: helix, sheet, loop. Tertiary: one-chain fold. Quaternary: assembly of chains. HIV protease’s site sits between monomers; many PPI interfaces are shallow pockets on chain boundaries. Trimming chain B “for simplicity” may delete the target.",
        ),
      },
      {
        type: "list",
        id: "l4-hi-check",
        title: L("قبل أن تُبقي سلسلة واحدة", "Before you keep a single chain"),
        items: [
          L("اقرأ REMARK وassembly في PDB: ما الوحدة البيولوجية؟", "Read REMARK and assembly in the PDB: what is the biological unit?"),
          L("هل ligand يلمس سلسلة أخرى؟", "Does the ligand touch another chain?"),
          L("هل المعدن أو العامل المرافِق يُنسَّق من سلسلتين؟", "Is the metal or cofactor coordinated from two chains?"),
        ],
      },
      {
        type: "viewer",
        id: "l4-hi-1hsg",
        pdb: "1HSG",
        caption: L(
          "1HSG: protease ثنائي. الجيب على الواجهة — مثال تعليمي على مستوى رباعي لا يُحذف.",
          "1HSG: a dimeric protease. The pocket sits on the interface — an educational example of a quaternary level you must not delete.",
        ),
      },
      {
        type: "why",
        id: "l4-hi-why",
        question: L(
          "لماذا تختلف الوحدة غير المتماثلة عن الوحدة البيولوجية؟",
          "Why does the asymmetric unit differ from the biological unit?",
        ),
        answer: L(
          "البلورة قد تحتوي نصف ثنائي، والثنائي يكتمل بالتناظر. إن رسّمتَ ما في الملف الخام فقد تنقصك الواجهة. استخدم أداة توليد symmetry أو سجل المؤلف للتجميع.",
          "The crystal may contain half a dimer; the dimer is completed by symmetry. If you dock the raw file you may lack the interface. Use a symmetry-generating tool or the authors’ assembly record.",
        ),
      },
      {
        type: "callout",
        id: "l4-hi-lim",
        kind: "limitation",
        title: L("نموذج AlphaFold لسلسلة واحدة ليس تجميعاً", "A single-chain AlphaFold model is not an assembly"),
        body: L(
          "حتى إن كان الطيّ مقنعاً، الواجهات الرباعية والتنظيم التفارغي قد تكون غائبة. لا تبنِ SBDD على monomer إن كانت الكيمياء الحيوية تقول oligomer.",
          "Even if the fold is convincing, quaternary interfaces and allosteric regulation may be absent. Do not build SBDD on a monomer when biochemistry says oligomer.",
        ),
      },
      {
        type: "whatif",
        id: "l4-hi-whatif",
        scenario: L(
          "ماذا لو أجريتَ MD على monomer لبروتين يعمل ثنائياً لأن الصندوق أصغر؟",
          "What if you run MD on a monomer of a protein that functions as a dimer because the box is smaller?",
        ),
        consequence: L(
          "ستُعاين سطحاً كان يجب أن يكون واجهة، وقد ينفتح الجيب أو ينهار بشكل غير فيزيائي. التوفير في الصندوق يشتري فيزياء واجهة مكشوفة زائفة.",
          "You will sample a surface that should have been an interface, and the pocket may open or collapse unphysically. Saving box size purchases fake exposed-interface physics.",
        ),
      },
    ],
    ["l4-aa", "l4-secondary", "l4-pdb", "l4-pockets"],
  ),

  expand(
    "l4-secondary",
    [
      L(
        "تمييز حلزون وصحيفة وعروة، ومعرفة لماذا العُرى غالباً مكان الارتباط والاضطراب.",
        "Distinguish helix, sheet, and loop, and know why loops are often where binding — and disorder — live.",
      ),
      L(
        "قراءة أن الحلزون في hinge أو غطاء الجيب قد يتحرك أكثر مما يوحي شريط PyMOL.",
        "Read that a helix in a hinge or pocket lid may move more than a PyMOL cartoon implies.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l4-se-intro",
        title: L("الشريط الملوّن فرضية هندسية", "The coloured cartoon is a geometric hypothesis"),
        body: L(
          "α-helix: H-bond دوري بين C=O وNH، جانبية نحو الخارج. β-sheet: H-bond بين خيوط، سطحان قد يكون أحدهما كاره الجيب. العُرى: أقل تقييداً، غالباً تُشكّل الفم، وغالباً أعلى B-factor وأقل اكتمالاً في الكثافة. تصميمك على عروة ناقصة إحداثيات مبني على هواء.",
          "α-helix: periodic C=O···NH H-bonds, side chains outward. β-sheet: H-bonds between strands; one face may be the hydrophobic pocket. Loops: less constrained, often form the mouth, often higher B-factor and less complete in density. Design on a loop with missing coordinates is design on air.",
        ),
      },
      {
        type: "list",
        id: "l4-se-cadd",
        title: L("ما الذي يهم CADD", "What matters for CADD"),
        items: [
          L("غطاء حلزوني (kinase αC) هيئته تُغيّر الجيب — بنية apo قد لا تكفي.", "A helical lid (kinase αC) can reshape the pocket — an apo structure may not suffice."),
          L("عروة غنية بـ Gly مرنة؛ تثبيتها في docking قرار.", "A Gly-rich loop is flexible; freezing it in docking is a decision."),
          L("صحيفة β قد تمنح نمط H-bond منتظماً لـ ligand شبيه ببتيد.", "A β-sheet may offer a regular H-bond pattern to a peptide-like ligand."),
        ],
      },
      {
        type: "why",
        id: "l4-se-why",
        question: L(
          "لماذا تفشل إعادة الالتحام أحياناً رغم «بنية عالية الدقة» إذا كانت العروة مفتوحة؟",
          "Why does redocking sometimes fail despite a “high-resolution structure” if the loop is open?",
        ),
        answer: L(
          "الدقة تصف البلورة ككل لا ثبات العروة في المحلول. العروة المفتوحة في بلورة قد تنغلق على ligand. المستقبل الجامد يحتفظ بفم واسع فتتولّد هيئات ضائعة. ابحث عن بنية holo أو مرونة محلية.",
          "Resolution describes the crystal as a whole, not loop stability in solution. An open crystal loop may close on a ligand. A rigid receptor keeps a wide mouth and generates lost poses. Seek a holo structure or local flexibility.",
        ),
      },
      {
        type: "callout",
        id: "l4-se-lim",
        kind: "limitation",
        title: L("تعيين الثانوية خوارزمي", "Secondary-structure assignment is algorithmic"),
        body: L(
          "DSSP وغيره يقطع عند عتبات. اختلاف «helix vs loop» بين أداتين لا يعني تغيّر فيزياء. اعتمد الإحداثيات والكثافة لا اللون فقط.",
          "DSSP and kin cut on thresholds. A “helix vs loop” disagreement between tools is not a physics change. Trust coordinates and density, not colour alone.",
        ),
      },
      {
        type: "whatif",
        id: "l4-se-whatif",
        scenario: L(
          "ماذا لو قصصتَ عروة مضطربة لأنها «تعيق الالتحام»؟",
          "What if you crop a disordered loop because it “gets in the way of docking”?",
        ),
        consequence: L(
          "قد تحذف غطاءاً يغلق على المركب أو شحنة تُوجه ligand. إن قُصّت، صرّح أن النموذج ناقص ولا تُرتّب مركبات تملأ حجم العروة المحذوفة.",
          "You may delete a lid that closes on the compound or a charge that steers the ligand. If you crop, state that the model is incomplete and do not rank compounds that occupy the deleted loop’s volume.",
        ),
      },
      {
        type: "exercise",
        id: "l4-se-ex",
        prompt: L(
          "عروة في الجيب B-factor أعلى بوضوح من العمود الفقري المحيط، وبعض ذراتها ناقصة. هل تعتمدها كحائط جامد للالتحام؟",
          "A pocket loop has clearly higher B-factor than neighbouring backbone, and some atoms are missing. Do you treat it as a rigid docking wall?",
        ),
        solution: L(
          "لا. إمّا أن تبحث عن بنية أكمل، أو تعامل المنطقة كمرنة/غير موثوقة، أو تستخدم ensemble. الجدار الجامد هنا أثر نقص كثافة لا جدار فيزيائي.",
          "No. Either find a more complete structure, treat the region as flexible/unreliable, or use an ensemble. The rigid wall here is a missing-density artefact, not a physical wall.",
        ),
      },
    ],
    ["l4-hierarchy", "l4-pockets", "l4-quality", "l25-ifd"],
  ),

  expand(
    "l4-pockets",
    [
      L(
        "التفريق بين موقع تقويمي وموقع تفارغي وقناة وواجهة PPI.",
        "Distinguish orthosteric site, allosteric site, channel, and PPI interface.",
      ),
      L(
        "تقدير حجم وقطبية الجيب قبل اختيار مكتبة أو شكل ligand.",
        "Estimate pocket volume and polarity before choosing a library or ligand shape.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l4-pk-intro",
        title: L("الحفرة التقويمية ليست القصة كاملة", "The orthosteric hole is not the whole story"),
        body: L(
          "الموقع التقويمي يربط الركيزة أو ligand طبيعي. التفارغي يُغيّر الوظيفة من بعيد عبر هيئة. القنوات تضيف مساراً لا حفرة فقط. واجهات البروتين-بروتين أسطح واسعة ضحلة يصعب ملؤها بجزيء صغير. اختيار الموقع قرار بيولوجي قبل أن يكون قرار docking box.",
          "The orthosteric site binds substrate or a natural ligand. An allosteric site changes function at a distance through conformation. Channels add a path, not only a hole. Protein–protein interfaces are wide shallow surfaces hard to fill with a small molecule. Choosing the site is a biological decision before it is a docking-box decision.",
        ),
      },
      {
        type: "compare",
        id: "l4-pk-cmp",
        left: L("تقويمي", "Orthosteric"),
        right: L("تفارغي", "Allosteric"),
        rows: [
          {
            dim: L("الانتقائية", "Selectivity"),
            a: L("قد تكون صعبة داخل عائلة تشترك الركيزة (كينازات ATP).", "Often hard inside a family that shares substrate (kinase ATP)."),
            b: L("قد تمنح انتقائية إن كان الموقع أقل حفظاً — إن وُجد.", "May grant selectivity if the site is less conserved — if it exists."),
          },
          {
            dim: L("التنافس", "Competition"),
            a: L("ينافس ركيزة/ATP؛ القوة تعتمد على التركيز الفسيولوجي.", "Competes with substrate/ATP; potency depends on physiological concentration."),
            b: L("قد يكون غير تنافسي؛ الهيئة أهم من ملء حفرة الركيزة.", "May be noncompetitive; conformation matters more than filling the substrate hole."),
          },
          {
            dim: L("خطر النموذج", "Model risk"),
            a: L("بنية holo للركيزة غالباً متاحة.", "A substrate holo structure is often available."),
            b: L("قد تحتاج بنية مع مُعدِّل؛ apo قد يُغلق الموقع.", "May need a modulator-bound structure; apo may close the site."),
          },
        ],
      },
      {
        type: "viewer",
        id: "l4-pk-3ert",
        pdb: "3ERT",
        caption: L(
          "3ERT: مستقبل إستروجين مع ligand. لاحظ أن الجيب تجويف مدفون نسبياً — نوع حجم يُناسب جزيئاً صغيراً لا ببتيداً كبيراً.",
          "3ERT: estrogen receptor with a ligand. Note a relatively buried cavity — a volume class that suits a small molecule, not a large peptide.",
        ),
      },
      {
        type: "why",
        id: "l4-pk-why",
        question: L(
          "لماذا يفشل فرز على موقع تقويمي إن كان الهدف يُنظَّم تفارغياً في الخلية؟",
          "Why can an orthosteric screen fail if the target is allosterically regulated in the cell?",
        ),
        answer: L(
          "لأنك تُحسّن ارتباطاً في هيئة قد لا تسود داخل الخلية، أو تنافس ligand طبيعي عالي التركيز. السؤال البيولوجي أولاً: أي هيئة هي المَرَضية؟",
          "You are optimizing binding in a conformation that may not dominate in cells, or you compete with a high-concentration natural ligand. Biology first: which conformation is the disease-relevant one?",
        ),
      },
      {
        type: "callout",
        id: "l4-pk-lim",
        kind: "limitation",
        title: L("كاشف الجيوب يجد تجاويف لا أهدافاً", "A pocket detector finds cavities, not targets"),
        body: L(
          "خوارزميات الحجم تُرجع ثقوباً. ليست كل حفرة قابلة للدواء، وليست كل حفرة وظيفية. لا تُعلن موقعاً تفارغياً لأن خوارزمية رسمت كرة.",
          "Volume algorithms return holes. Not every hole is druggable, and not every hole is functional. Do not announce an allosteric site because an algorithm painted a sphere.",
        ),
      },
      {
        type: "whatif",
        id: "l4-pk-whatif",
        scenario: L(
          "ماذا لو وضعتَ صندوق الالتحام على أكبر تجويف بينما البلورة تُظهر ligand في جيب جانبي أصغر؟",
          "What if you place the docking box on the largest cavity while the crystal shows ligand in a smaller side pocket?",
        ),
        consequence: L(
          "ستُغربل مكتبة نحو المكان الخطأ. الحجم ≠ الأهمية. حدّد الصندوق من كيمياء حيوية وبنية holo لا من أقصى فراغ.",
          "You will sieve a library toward the wrong place. Volume ≠ importance. Set the box from biochemistry and a holo structure, not from the largest void.",
        ),
      },
    ],
    ["l4-aa", "l4-quality", "l8-problem", "l11-site"],
  ),

  expand(
    "l4-methods",
    [
      L(
        "مقارنة ماذا تُظهر الأشعة السينية وcryo-EM وNMR وكيف يشوّه كلٌ الحقيقة بشكل مختلف.",
        "Compare what X-ray, cryo-EM, and NMR actually see, and how each distorts the truth differently.",
      ),
      L(
        "اختيار بنية للعمل لا لأنها «أعلى دقة» بل لأنها تُطابق الهيئة والحالة الليجندية لسؤالك.",
        "Choose a working structure not because it is “highest resolution” but because it matches the conformation and ligand state of your question.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l4-me-intro",
        title: L("كل طريقة عدسة", "Each method is a lens"),
        body: L(
          "الأشعة السينية: متوسط زمني ومكاني في بلورة، غالباً دقة ذرية، وقد تُثبّت هيئات بملح وتغليف. cryo-EM: جسيمات متجمدة، جيد للكبير والمرن، الدقة المحلية تتفاوت (الجيب قد يكون أسوأ من الرقم الإجمالي). NMR: ensemble في محلول لأهداف أصغر غالباً، قيود لا إحداثيات سحرية. لا واحدة منها «الحقيقة الجيبية في الخلية».",
          "X-ray: a time- and space-average in a crystal, often atomic detail, and packing or salt may freeze poses. cryo-EM: frozen particles, good for large and flexible systems; local resolution varies (the pocket may be worse than the global number). NMR: a solution ensemble, usually for smaller targets, restraints not magical coordinates. None is “the pocket truth in the cell”.",
        ),
      },
      {
        type: "compare",
        id: "l4-me-cmp",
        left: L("X-ray", "X-ray"),
        right: L("cryo-EM", "cryo-EM"),
        rows: [
          {
            dim: L("ما الذي يُحسب «دقة»؟", "What is quoted as “resolution”?"),
            a: L("غالباً حد بيانات الحيود للبلورة ككل.", "Often the diffraction limit of the crystal as a whole."),
            b: L("رقم إجمالي؛ الدقة المحلية للجيب قد تكون أضعف.", "A global number; local pocket resolution may be weaker."),
          },
          {
            dim: L("ligand صغير", "Small ligand"),
            a: L("كثافة جيدة ممكنة إن اكتمل الإشغال.", "Good density possible if occupancy is complete."),
            b: L("قد يُفقد أو يُنمذَج بحذر إن كانت المنطقة مرنة.", "May be lost or modelled cautiously if the region is flexible."),
          },
          {
            dim: L("متى لا تعتمدها وحدها", "When not to rely on it alone"),
            a: L("تعبئة بلورية تُغلق الجيب أو تُثبّت عروة.", "Crystal packing that closes the pocket or pins a loop."),
            b: L("خريطة الجيب ضبابية وأنت تدّعي تماسات ذرية.", "A foggy pocket map while you claim atomic contacts."),
          },
        ],
      },
      {
        type: "why",
        id: "l4-me-why",
        question: L(
          "لماذا قد تفضّل بنية 2.4 Å holo على 1.5 Å apo لسؤال تصميم مثبط؟",
          "Why might you prefer a 2.4 Å holo over a 1.5 Å apo for an inhibitor-design question?",
        ),
        answer: L(
          "لأن سؤالك هيئة الجيب المرتبطة لا أجمل كثافة لسلسلة بعيدة. apo عالية الدقة قد تكون مغلقة أو بلا ماء جزري. الدقة بلا صلة بالسؤال رقم خاطئ.",
          "Your question is the bound pocket geometry, not the prettiest density on a distant chain. A high-resolution apo may be closed or missing bridging waters. Resolution without relevance is the wrong number.",
        ),
      },
      {
        type: "callout",
        id: "l4-me-lim",
        kind: "limitation",
        title: L("NMR ensemble ليس مسار MD", "An NMR ensemble is not an MD trajectory"),
        body: L(
          "النماذج العشرين تُرضي قيوداً؛ ليست وزناً بولتزمانياً ولا فيلم زمن. لا تحسب RMSF من ensemble NMR وكأنه ديناميكا حرارية.",
          "The twenty models satisfy restraints; they are not Boltzmann weights and not a time movie. Do not compute RMSF from an NMR ensemble as if it were thermodynamics.",
        ),
      },
      {
        type: "whatif",
        id: "l4-me-whatif",
        scenario: L(
          "ماذا لو بنيتَ تماسات ligand ذرية من خريطة cryo-EM محلية أسوأ من 4 Å؟",
          "What if you build atomic ligand contacts from a cryo-EM map whose local resolution is worse than 4 Å?",
        ),
        consequence: L(
          "ستُحوّل ضباباً إلى H-bond في الشكل. صرّح أن التوجه تقريبي، ولا تستخدم المسافات كـ SAR ذري. اطلب بيانات أعلى محلياً أو بلورة للمجال.",
          "You will turn fog into an H-bond in the figure. State that orientation is approximate, and do not use distances as atomic SAR. Seek better local data or a domain crystal.",
        ),
      },
    ],
    ["l4-quality", "l4-pdb", "l4-waters", "l16-plm"],
  ),

  expand(
    "l4-quality",
    [
      L(
        "قراءة resolution وB-factor وoccupancy والبقايا الناقصة كمعايير جودة قبل أي docking.",
        "Read resolution, B-factor, occupancy, and missing residues as quality criteria before any docking.",
      ),
      L(
        "رفض البنية أو تقييد الادعاء عندما تتعارض الجودة مع دقة التماس الذري المطلوب.",
        "Reject a structure or shrink the claim when quality conflicts with the atomic-contact precision you need.",
      ),
      L(
        "كشف علامات كثافة ligand الضعيفة حتى لو وُضع المركب في الملف.",
        "Detect signs of weak ligand density even when the compound is placed in the file.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l4-qa-intro",
        title: L("ملف PDB ليس شهادة جودة", "A PDB file is not a quality certificate"),
        body: L(
          "قبل الصندوق، اقرأ كيف بُنيت الإحداثيات. resolution يحدّ ما يمكن تبريره من تماسات قصيرة. B-factor يروي اضطراباً أو خطأ نموذج. occupancy < 1 يعني أن الذرة ليست «هناك دائماً». البقايا الناقصة فتحة في الخريطة لا إذنٌ لligand أن يسكن الهواء. إهمال هذه الأربعة أشهر طريق إلى إعادة تحام «فاشلة» تُلام عليها الخوارزمية.",
          "Before the box, read how the coordinates were built. Resolution limits which short contacts you may justify. B-factor reports disorder or model error. Occupancy < 1 means the atom is not “always there”. Missing residues are a hole in the map, not permission for a ligand to live in air. Ignoring these four is the commonest road to a “failed” redock blamed on the algorithm.",
        ),
      },
      {
        type: "steps",
        id: "l4-qa-four",
        title: L("الأربعة التي تُقرأ دائماً", "The four that are always read"),
        items: [
          {
            title: L("Resolution", "Resolution"),
            body: L(
              "رقم الحيود (Å) حدٌ لتقريب الكثافة. نحو ≤ 2.0 Å غالباً يُسمح بنقاش ذري حذر؛ نحو 3 Å يُبقي التوجه لا أطوال H-bond الدقيقة. الرقم الإجمالي لا ينقذ جيباً محلياً سيئاً. قارن أكثر من بنية لنفس الهدف.",
              "The diffraction number (Å) bounds how finely density can be approximated. Around ≤ 2.0 Å often allows cautious atomic discussion; around 3 Å supports orientation more than precise H-bond lengths. A global number does not rescue a locally bad pocket. Compare several structures of the same target.",
            ),
          },
          {
            title: L("B-factor", "B-factor"),
            body: L(
              "اضطراب أو عدم يقين نموذج. قيم مرتفعة على ligand أو على عروة الجيب تعني: لا تُجمّد تلك الذرات كحقيقة. قارن B للligand بمتوسط الجيب لا برقم مطلق من حفظك.",
              "Disorder or model uncertainty. High values on the ligand or a pocket loop mean: do not freeze those atoms as truth. Compare ligand B to the pocket average, not to a memorized absolute number.",
            ),
          },
          {
            title: L("Occupancy", "Occupancy"),
            body: L(
              "جزء الوحدة الذي تشغله الذرة. 1.00 ظاهر كامل؛ 0.50 قد يعني هيئة بديلة أو إشغال جزئي لligand. إن كان occupancy منخفضاً فلا تبنِ SAR على تماس تلك الذرة وكأنها دائمة.",
              "The fraction of the unit occupied by the atom. 1.00 looks complete; 0.50 may mean an alternate conformer or partial ligand occupancy. If occupancy is low, do not build SAR on that atom’s contact as if it were permanent.",
            ),
          },
          {
            title: L("البقايا الناقصة", "Missing residues"),
            body: L(
              "فجوات في التسلسل داخل الإحداثيات، خاصة عُرى الجيب ونهايات. سجّلها. أكمل فقط بنموذج معلن المخاطر، أو تجنّب ملء الفجوة بligand.",
              "Sequence gaps in the coordinates, especially pocket loops and termini. Record them. Complete only with an explicitly risky model, or do not let ligand occupy the gap.",
            ),
          },
        ],
      },
      {
        type: "list",
        id: "l4-qa-ligand",
        title: L("جودة ligand داخل البلورة", "Ligand quality inside the crystal"),
        items: [
          L("هل الكثافة تغطي كل الذرات الثقيلة أم نُمذج المركب كاملاً فوق كثافة جزئية؟", "Does density cover all heavy atoms, or was the whole compound modelled over partial density?"),
          L("R-free مقابل R-work: فجوة كبيرة إنذار إفراط في النموذج (اتجاه تعليمي لا عتبة مقدسة).", "R-free versus R-work: a large gap warns of overfitting (an educational trend, not a sacred cutoff)."),
          L("هيئات بديلة (altloc A/B) على الجيب: أيهما ترسّم؟ ربما كليهما.", "Alternate locations (altloc A/B) in the pocket: which do you dock? Perhaps both."),
          L("روابط غير فيزيائية في ligand (طول شاذ) علامة سوء نمذجة.", "Unphysical ligand bonds (wild lengths) flag poor modelling."),
        ],
      },
      {
        type: "why",
        id: "l4-qa-why",
        question: L(
          "لماذا لا يكفي أن تقول «الدقة 1.8 Å إذن الالتحام جائز»؟",
          "Why is “resolution is 1.8 Å, therefore docking is allowed” not enough?",
        ),
        answer: L(
          "لأن الجيب قد يملك B-factor عالياً، وligand بإشغال 0.4، وعروة ناقصة، وتعبئة بلورية تُثبّت غطاءاً. الجودة محلية وسؤالية. اقرأ الجيب لا رأس الملف فقط.",
          "The pocket may still have high B-factors, a ligand at occupancy 0.4, a missing loop, and packing that pins a lid. Quality is local and question-dependent. Read the pocket, not only the file header.",
        ),
      },
      {
        type: "callout",
        id: "l4-qa-warn",
        kind: "warning",
        title: L("متى لا ترسّم هذه البلورة", "When not to dock this crystal"),
        body: L(
          "لا تستخدمها لادعاء تماسات ذرية إن كانت دقة الجيب ضعيفة، أو ligand شبه غائب في الكثافة، أو نصف الجيب بقايا ناقصة. يمكنك استخدامها لفرضيات خشنة مع قيود مكتوبة. الصمت عن الجودة في methods عيب.",
          "Do not use it to claim atomic contacts if pocket resolution is poor, the ligand is nearly absent in density, or half the pocket residues are missing. You may use it for coarse hypotheses with written limits. Silence about quality in Methods is a defect.",
        ),
      },
      {
        type: "whatif",
        id: "l4-qa-whatif",
        scenario: L(
          "ماذا لو كان occupancy لligand 0.5 وهيئة A/B للعروة، فاخترتَ A لأن الدرجة أفضل؟",
          "What if ligand occupancy is 0.5 and the loop has altloc A/B, and you pick A because the score is better?",
        ),
        consequence: L(
          "تكون قد انتقيت الضجيج الذي يُرضي الدالة. رسّم A وB كمستقبلين، أو استخدم ensemble. الدرجة لا تحكم أي altloc هو الفسيولوجي.",
          "You have selected the noise that pleases the function. Dock A and B as two receptors, or use an ensemble. Score does not decide which altloc is physiological.",
        ),
      },
      {
        type: "exercise",
        id: "l4-qa-ex",
        prompt: L(
          "بنية 1.9 Å، لكن عروة الجيب ناقصة من 8 بقايا وB-factor لligand أعلى بكثير من العمود الفقري. اكتب جملة methods تحدّ الادعاء.",
          "A 1.9 Å structure, but an 8-residue pocket loop is missing and ligand B-factors are far above backbone. Write a Methods sentence that limits the claim.",
        ),
        solution: L(
          "«رغم دقة الحيود 1.9 Å، فإن عروة الجيب ناقصة الإحداثيات وB-factor للligand مرتفع نسبة إلى العمود الفقري؛ نستخدم الهيئة لتوليد فرضيات توجه لا لتبرير أطوال تماس ذرية أو ترتيب قوة.»",
          "“Despite 1.9 Å diffraction, pocket-loop coordinates are missing and ligand B-factors are elevated relative to backbone; we use the pose to generate orientation hypotheses, not to justify atomic contact lengths or potency ranking.”",
        ),
      },
    ],
    ["l4-methods", "l4-pdb", "l4-waters", "l8-failures"],
  ),

  expand(
    "l4-pdb",
    [
      L(
        "فحص ملف PDB بحثاً عن رواسب ناقصة وaltloc وروابط غير قياسية وأرقام بقايا لا تُطابق UniProt.",
        "Inspect a PDB for missing residues, altlocs, nonstandard links, and residue numbering that does not match UniProt.",
      ),
      L(
        "معرفة أن التحضير (H، طرفيات، أسماء ذرات ligand) جزء من العلم لا زرّاً.",
        "Treat preparation (H, termini, ligand atom names) as part of the science, not a button.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l4-pd-intro",
        title: L("اقرأ الملف كنص", "Read the file as text"),
        body: L(
          "المشاهد 3D يُخفي HEADER وREMARK وCONECT وHETATM. ابحث عن missing residues، crystal contacts، التعبير (طفرات التبلور)، ووجود SO4 أو جليكول يحتل الجيب. ligand تحت اسم ثلاثي الأحرف قد يكون تساهمياً أو مربوطاً بـ LINK. أرقام البقايا في الكينازات غالباً غير أرقام الورقة الطبية — وثّق التحويل.",
          "The 3D view hides HEADER, REMARK, CONECT, and HETATM. Look for missing residues, crystal contacts, expression (crystallization mutations), and SO4 or glycol occupying the pocket. A three-letter ligand may be covalent or LINK-bound. Kinase residue numbers often differ from the clinical paper — document the mapping.",
        ),
      },
      {
        type: "list",
        id: "l4-pd-flags",
        title: L("أعلام في الملف", "Flags in the file"),
        items: [
          L("altloc: لا تدمج A+B في ذرة واحدة.", "altloc: do not merge A+B into one atom."),
          L("HETATM غير ligand: أيونات، سكريات، جزيئات تبلور.", "HETATM that is not your ligand: ions, sugars, crystallization molecules."),
          L("نهايات مقطوعة لتيسير التبلور قد تكون قرب الجيب.", "Truncated termini for crystallization may sit near the pocket."),
          L("أسماء ذرات ligand غير قياسية تُكسر force field لاحقاً.", "Nonstandard ligand atom names break the force field later."),
        ],
      },
      {
        type: "command",
        id: "l4-pd-grep",
        command: "grep -E 'REMARK 465|REMARK 470|ANISOU|^HETATM|^LINK' structure.pdb | head",
        purpose: L(
          "معاينة سريعة لفجوات النموذج والروابط غير القياسية وHETATM.",
          "A quick look at model gaps, nonstandard links, and HETATM records.",
        ),
        input: L("ملف PDB خام من البنك.", "A raw PDB file from the bank."),
        output: L(
          "أسطر تذكر بقايا ناقصة أو روابط LINK أو جزيئات غير بروتين.",
          "Lines listing missing residues, LINK records, or non-protein molecules.",
        ),
        meaning: L(
          "وجود REMARK 465 يعني أن الإحداثيات لا تغطي التسلسل الكامل — خريطة خطر للالتحام.",
          "REMARK 465 means coordinates do not cover the full sequence — a docking hazard map.",
        ),
        errors: L(
          "بعض الملفات الحديثة mmCIF فقط؛ عندها استخدم أداة تحويل أو ابحث في الـ cif عن missing.",
          "Some modern files are mmCIF-only; then convert or search the cif for missing residues.",
        ),
      },
      {
        type: "why",
        id: "l4-pd-why",
        question: L(
          "لماذا تُفسد أسماء ذرات ligand الخاطئة MD أكثر من الالتحام أحياناً؟",
          "Why do wrong ligand atom names sometimes break MD more than docking?",
        ),
        answer: L(
          "الالتحام قد يستخدم مولداً من الإحداثيات فقط. MD يطلب تطابق أسماء مع topology (GAFF/CGenFF). اسم خاطئ = نوع ذرة خاطئ = شحنة وLJ خاطئان = انفجار أو فيزياء صامتة الفساد.",
          "Docking may build from coordinates alone. MD needs names to match a topology (GAFF/CGenFF). A wrong name = wrong atom type = wrong charge and LJ = an explosion or silently corrupt physics.",
        ),
      },
      {
        type: "callout",
        id: "l4-pd-lim",
        kind: "limitation",
        title: L("التنظيف الآلي ليس بريئاً", "Automatic cleanup is not innocent"),
        body: L(
          "أدوات «إصلاح PDB» قد تضيف حلقات ناقصة من قالب بعيد، أو تحذف معادن، أو تُبرتن خطأ. احفظ ملفاً خاماً وملفاً محضَّراً مع سجل قرارات.",
          "“Fix PDB” tools may graft missing loops from a distant template, drop metals, or protonate wrongly. Keep a raw file and a prepared file with a decision log.",
        ),
      },
      {
        type: "whatif",
        id: "l4-pd-whatif",
        scenario: L(
          "ماذا لو تجاهلتَ جزيء إيثيلين جليكول في الجيب لأنه «مضاف تبلور»؟",
          "What if you ignore an ethylene glycol in the pocket because it is a “crystallization additive”?",
        ),
        consequence: L(
          "قد يكون يحتل hotspot ماء/ligand. بعد حذفه يفتح الالتحام حجماً لم يكن فارغاً فسيولوجياً بالضرورة. افحص إن كان الموضع ماءً في بنى أخرى.",
          "It may occupy a water/ligand hotspot. After deletion, docking opens a volume that was not necessarily empty physiologically. Check whether other structures host water there.",
        ),
      },
    ],
    ["l4-quality", "l4-waters", "l4-hierarchy", "l9-system"],
  ),

  expand(
    "l4-waters",
    [
      L(
        "تصنيف المياه والمعادن والعوامل المرافقة قبل الحذف أو الإبقاء.",
        "Classify waters, metals, and cofactors before deleting or keeping them.",
      ),
      L(
        "معرفة أن حذف شبكة ماء أو Mg/Zn قد يحذف فيزياء الارتباط.",
        "Know that deleting a water network or Mg/Zn may delete the binding physics.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l4-wt-intro",
        title: L("ليس كل ما ليس بروتيناً ضجيجاً", "Not everything that is not protein is noise"),
        body: L(
          "الماء الجسري، Mg في موقع ATP، Zn في هيدرولاز، heme، NAD: شركاء. بروتوكول «احذف كل HETATM إلا ligand» يُنتج جيباً خيالياً. المعادن تحتاج شحنات وأنواعاً في force field؛ إهمالها يترك تجويفاً بشحنة ناقصة يجذب ligands زائفة.",
          "Bridging water, Mg in an ATP site, Zn in a hydrolase, heme, NAD: partners. A “delete all HETATM except ligand” protocol produces a fictional pocket. Metals need charges and types in the force field; omitting them leaves a charge-deficient hole that attracts false ligands.",
        ),
      },
      {
        type: "list",
        id: "l4-wt-rules",
        title: L("قواعد عمل تعليمية", "Educational working rules"),
        items: [
          L("ماء ضمن مسافة H-bond من ligand أو من بقايا محفوظة: أبقِ أو اختبر الإزاحة صراحة.", "Water within H-bond distance of ligand or a conserved residue: keep, or test displacement explicitly."),
          L("معادن منسّقة: أبقِها، وراجع protonation للسلاسل المنسّقة (His, Cys, carboxylate).", "Coordinated metals: keep them, and revisit protonation of coordinating side chains (His, Cys, carboxylate)."),
          L("cofactor إن كان الموقع يعمل معه فسيولوجياً: لا ترسّم الموقع فارغاً وتدّعي مثبطاً تنافسياً دون نقاش.", "If the site works with a cofactor physiologically, do not dock the empty site and claim a competitive inhibitor without discussion."),
        ],
      },
      {
        type: "viewer",
        id: "l4-wt-1hsg",
        pdb: "1HSG",
        caption: L(
          "1HSG: افحص المياه قرب المثبط. أي كرة حمراء قد تكون جسراً لا زينة.",
          "1HSG: inspect waters near the inhibitor. Any red sphere may be a bridge, not decoration.",
        ),
      },
      {
        type: "why",
        id: "l4-wt-why",
        question: L(
          "لماذا تفشل حقول MM أحياناً حول Zn حتى بعد إبقائه؟",
          "Why do MM fields sometimes fail around Zn even after you keep it?",
        ),
        answer: L(
          "لأن التناسق تساهمي جزئياً والاستقطاب عالٍ. شحنة ثابتة + LJ تقريب فظ. قد تحتاج معاملات معدنية خاصة أو QM/MM إن كان سؤالك هندسة التناسق أو حمضية ligand المنسّق.",
          "Coordination is partly covalent and highly polarizable. Fixed charge + LJ is a crude approximation. You may need specialised metal parameters or QM/MM if your question is coordination geometry or the acidity of a coordinating ligand.",
        ),
      },
      {
        type: "callout",
        id: "l4-wt-warn",
        kind: "warning",
        title: L("لا تحذف المعدن «لأن الالتحام لا يدعمه»", "Do not delete the metal “because docking does not support it”"),
        body: L(
          "إن كانت الأداة لا تُحسن المعادن، فهذه حدود الأداة لا إذن لتغيير الفيزياء. غيّر الأداة أو استخدم قيوداً أو QM، أو قلّل الادعاء.",
          "If the tool handles metals poorly, that is a tool limit, not permission to change the physics. Change tool, use restraints or QM, or reduce the claim.",
        ),
      },
      {
        type: "whatif",
        id: "l4-wt-whatif",
        scenario: L(
          "ماذا لو رسّمتَ كيناز بلا Mg وبلا ماء في موقع الفوسفات؟",
          "What if you dock a kinase with neither Mg nor water in the phosphate site?",
        ),
        consequence: L(
          "ستملأ ligands سالبة حجماً كان للمعادن/الماء، أو تُخطئ اتجاه مجموعات الفوسفات المحاكية. هذا نمط فشل docking معروف: الكيمياء الحيوية تقول مغنيسيوم، الملف يقول تجويف.",
          "Anionic ligands will occupy volume that belonged to metal/water, or phosphate mimics will point the wrong way. A known docking failure pattern: biochemistry says magnesium, the file says cavity.",
        ),
      },
    ],
    ["l2-solvation", "l4-quality", "l4-pdb", "l8-failures"],
  ),

  expand(
    "l5-smiles",
    [
      L(
        "قراءة وكتابة SMILES وفهم SMARTS كاستعلام بنيوي وInChI كمعرّف.",
        "Read and write SMILES, treat SMARTS as a structural query, and InChI as an identifier.",
      ),
      L(
        "اكتشاف كيف يُسقِط SMILES بلا stereo أو بلا شحنة نوعاً فيزيائياً يحتاجه الالتحام.",
        "See how SMILES without stereo or charge drops a physical species that docking needs.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l5-sm-intro",
        title: L("السلسلة ليست الجزيء، بل عقد", "The string is not the molecule; it is a contract"),
        body: L(
          "SMILES يصف طوبولوجيا: ذرات، روابط، حلقات، ويمكنه حمل @ و / و \\ للشstereo، وأقواس للشحنة. SMARTS يصف نمطاً (مثل مانح H-bond) للبحث. InChI طبقات تُعيد ترتيب التمثيل لتقليل الغموض. خطأ واحد في نتروجين عطري يُغيّر tautomer والشحنة في صمت.",
          "SMILES describes topology: atoms, bonds, rings, and can carry @, /, \\ for stereo, and brackets for charge. SMARTS describes a pattern (e.g. an H-bond donor) for search. InChI is layered to reduce ambiguity. One error on an aromatic nitrogen silently changes tautomer and charge.",
        ),
      },
      {
        type: "list",
        id: "l5-sm-pit",
        title: L("فخاخ السلسلة", "String traps"),
        items: [
          L("نتروجين عطري بلا H مقابل [nH]: tautomer.", "Aromatic nitrogen without H versus [nH]: tautomer."),
          L("C[N+](C)(C)C مقابل CN(C)C: شحنة رباعية نُسيت.", "C[N+](C)(C)C versus CN(C)C: a forgotten quaternary charge."),
          L("حلقات غير مغلقة أو أرقام حلقات معادة: جزيء مكسور.", "Unclosed rings or reused ring digits: a broken molecule."),
          L("SMILES لـ racemate بلا @@: فقدان اليد.", "Racemate SMILES without @@: lost hands."),
        ],
      },
      {
        type: "command",
        id: "l5-sm-rdkit",
        command: "from rdkit import Chem\nmol = Chem.MolFromSmiles(\"CC(=O)Oc1ccccc1C(=O)O\")\nChem.MolToSmiles(mol, canonical=True)",
        purpose: L(
          "تحليل SMILES للأسبرين كمثال تعليمي وإعادة كتابته بشكل قانوني.",
          "Parse educational aspirin SMILES and rewrite it in canonical form.",
        ),
        input: L("سلسلة SMILES.", "A SMILES string."),
        output: L("كائن جزيء ثم SMILES قانوني إن نجح التحليل.", "A molecule object then canonical SMILES if parsing succeeded."),
        meaning: L(
          "الفشل يعيد None: السلسلة ليست عقداً صالحاً. النجاح لا يعني البروتنة الفسيولوجية.",
          "Failure returns None: the string is not a valid contract. Success does not mean physiological protonation.",
        ),
        errors: L(
          "None أو تكافؤ خاطئ: تحقّق من الأقواس وأرقام الحلقات والشحنات.",
          "None or wrong valence: check brackets, ring digits, and charges.",
        ),
      },
      {
        type: "why",
        id: "l5-sm-why",
        question: L(
          "لماذا لا يكفي InChIKey كمدخل تحام؟",
          "Why is an InChIKey not enough as a docking input?",
        ),
        answer: L(
          "المفتاح معرّف هاش، لا إحداثيات ولا حالة tautomer ثلاثية الأبعاد. تحتاج بنية (من SMILES أو molblock) ثم توليد 3D وبروتنة. المفتاح ممتاز لإزالة التكرار في المكتبة.",
          "The key is a hash identifier, not coordinates and not a 3D tautomer state. You need a structure (from SMILES or a molblock), then 3D generation and protonation. The key is excellent for deduplicating a library.",
        ),
      },
      {
        type: "callout",
        id: "l5-sm-lim",
        kind: "limitation",
        title: L("canonical SMILES ليس قانون طبيعة واحد", "Canonical SMILES is not one law of nature"),
        body: L(
          "خوارزميات التقنين تختلف بين RDKit وغيره. لا تفترض أن السلسلة القانونية من أداتين متطابقتان. للمقارنة الصارمة استخدم InChI عند الإمكان.",
          "Canonicalization algorithms differ between RDKit and other tools. Do not assume canonical strings from two tools match. For strict identity use InChI when possible.",
        ),
      },
      {
        type: "whatif",
        id: "l5-sm-whatif",
        scenario: L(
          "ماذا لو مرّرتَ مكتبة SMILES إلى docking دون أن تفحص MolFromSmiles is None؟",
          "What if you pass a SMILES library to docking without checking MolFromSmiles is None?",
        ),
        consequence: L(
          "ستُسقط مركبات بصمت أو تُدخل هياكل مكسورة تُترجم إلى هندسة عبثية. سجّل فشل التحليل كخطوة QC إلزامية.",
          "Compounds will drop silently or broken graphs will become absurd geometries. Log parse failures as a mandatory QC step.",
        ),
      },
    ],
    ["l5-graphs", "l5-rdkit", "l1-stereo", "l1-tautomer"],
  ),

  expand(
    "l5-graphs",
    [
      L(
        "تمثيل الجزيء كرسم: ذرة عقدة ورابطة حافة، وفهم ما يُفقد (الهيئة، أحياناً stereo).",
        "Represent a molecule as a graph: atom = node, bond = edge, and know what is lost (conformer, sometimes stereo).",
      ),
      L(
        "ربط هذا التمثيل بالبصمات وGNN لاحقاً.",
        "Connect this representation to fingerprints and later GNNs.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l5-gr-intro",
        title: L("الطوبولوجيا قبل الإحداثيات", "Topology before coordinates"),
        body: L(
          "الرسم الجزيئي يحتفظ بالاتصال والنوع والتكافؤ، وقد يحمل صفات (شحنة، عطرية). يفقد x,y,z ما لم تُخزَّن منفصلة. لذلك التشابه الطوبولوجي ≠ تطابق هيئة 3D. حلقتان متشابهتان رسماً قد تختلفان في التواء bioactive.",
          "A molecular graph keeps connectivity, element, and valence, and may carry attributes (charge, aromaticity). It loses x,y,z unless those are stored separately. Topological similarity is therefore not 3D pose identity. Two similar rings in the graph may differ in bioactive torsion.",
        ),
      },
      {
        type: "list",
        id: "l5-gr-ops",
        title: L("عمليات على الرسم", "Operations on the graph"),
        items: [
          L("مطابقة SMARTS: بحث نمط كرسم جزئي.", "SMARTS matching: subgraph pattern search."),
          L("إزالة السلاسل الجانبية: Bemis–Murcko scaffold.", "Side-chain stripping: Bemis–Murcko scaffold."),
          L("بصمة Morgan: دوائر من العُقد تُهش إلى بتات.", "Morgan: node neighbourhoods hashed into bits."),
        ],
      },
      {
        type: "why",
        id: "l5-gr-why",
        question: L(
          "لماذا تفشل أحياناً شبكة GNN في تمييز enantiomers؟",
          "Why does a GNN sometimes fail to distinguish enantiomers?",
        ),
        answer: L(
          "إن كانت الميزات والرسائل لا تحمل chirality (أو إحداثيات)، فالرسم المرآتي متماثل. النشاط الدوائي لا يتماثل. أضف stereo features أو تمثيلاً 3D إن كانت اليد مهمة.",
          "If features and messages carry no chirality (or coordinates), the mirror graphs are identical. Pharmacology is not. Add stereo features or a 3D representation when the hand matters.",
        ),
      },
      {
        type: "callout",
        id: "l5-gr-lim",
        kind: "limitation",
        title: L("الرسم لا يعرف الجيب", "The graph does not know the pocket"),
        body: L(
          "واصفات طوبولوجية عمياء عن ما إذا كانت مجموعة تصل هندسياً إلى Asp. لا تستخدم تشابه الرسم وحده كدليل ارتباط لنفس الهدف.",
          "Topological descriptors are blind to whether a group can geometrically reach Asp. Do not use graph similarity alone as evidence of binding to the same target.",
        ),
      },
      {
        type: "whatif",
        id: "l5-gr-whatif",
        scenario: L(
          "ماذا لو حذفتَ hydrogens من الرسم ثم حسبتَ مانحي H-bond؟",
          "What if you strip hydrogens from the graph then count H-bond donors?",
        ),
        consequence: L(
          "ستعتمد على قواعد تكافؤ لإعادة المانحين؛ إن أخطأت البروتنة أخطأت العد. الأفضل: حدّد النوع المتأين أولاً ثم عدّ.",
          "You will rely on valence rules to restore donors; wrong protonation wrongs the count. Better: set the ionized species first, then count.",
        ),
      },
      {
        type: "exercise",
        id: "l5-gr-ex",
        prompt: L(
          "فنيل حلقي مقابل سيكلوهكسيل: هل هما نفس الرسم إن أهملنا نوع الذرة؟ ماذا إن لم نُهمل؟",
          "Phenyl versus cyclohexyl: are they the same graph if we ignore element type? What if we do not?",
        ),
        solution: L(
          "مع إهمال النوع والعطرية قد تتشابه حلقة سداسية. مع النوع: C العطري وروابط جزئية تختلف عن C المشبع. التشابه الطوبولوجي قرار ميزات لا حقيقة جزيئية.",
          "Ignoring element and aromaticity, a six-membered ring may look similar. With element: aromatic C and delocalized bonds differ from saturated C. Topological similarity is a feature decision, not a molecular fact.",
        ),
      },
    ],
    ["l5-smiles", "l5-fp", "l16-gnn", "l1-stereo"],
  ),

  expand(
    "l5-descriptors",
    [
      L(
        "استخدام MW وTPSA وlogP كأدوات ترشيح لا كشخصية كاملة للجزيء.",
        "Use MW, TPSA, and logP as filter tools, not as the molecule’s whole personality.",
      ),
      L(
        "معرفة متى تكذب الواصفة (logP لمركّب متأين، TPSA لا يعرف الجيب).",
        "Know when a descriptor lies (logP for an ionized compound; TPSA does not know the pocket).",
      ),
    ],
    [
      {
        type: "prose",
        id: "l5-ds-intro",
        title: L("رقم واحد لا يكفي لشرح الارتباط", "One number cannot explain binding"),
        body: L(
          "MW يقيس الحجم تقريباً. TPSA يجمع سطوحاً قطبية ثنائية الأبعاد. logP تقدير توزيع محايد. هذه عدسات ADMET وترشيح مكتبات. الجيب قد يحب TPSA أعلى إن كانت القطبية مدفونة ومُعوَّضة. لا تقتل سلسلة لأن TPSA خرج عن نطاق شعار.",
          "MW is a rough size measure. TPSA sums 2D polar surfaces. logP estimates neutral partition. These are ADMET and library-filter lenses. A pocket may like higher TPSA if polarity is buried and satisfied. Do not kill a series because TPSA left a slogan range.",
        ),
      },
      {
        type: "list",
        id: "l5-ds-use",
        title: L("استخدام مشروع", "Legitimate use"),
        items: [
          L("إزالة extremes قبل docking مكلف (MW عملاق، عدد دورانات ضخم).", "Remove extremes before expensive docking (giant MW, huge rotatable-bond count)."),
          L("مقارنة نظائر داخل سلسلة واحدة بنفس طريقة الحساب.", "Compare analogues inside one series with the same calculation method."),
          L("الكشف عن خطأ بنية (MW لا يطابق الصيغة).", "Catch a structure error (MW disagrees with the formula)."),
        ],
      },
      {
        type: "why",
        id: "l5-ds-why",
        question: L(
          "لماذا يختلف logP المحسوب بين RDKit وXLogP وأداة تجارية؟",
          "Why does computed logP differ between RDKit, XLogP, and a commercial tool?",
        ),
        answer: L(
          "النماذج مختلفة (ذرية، شظايا، تدريب). الفرق المنهجي قد يبلغ وحدات. لا تخلط أرقاماً من أدوات في SAR واحد، ولا تُقارن عتبة Lipinski التاريخية بتقديرك الحالي وكأنها قياس.",
          "The models differ (atomistic, fragment, training). Method gaps can reach units. Do not mix tools inside one SAR, and do not treat a historical Lipinski cutoff versus your current estimate as a measurement.",
        ),
      },
      {
        type: "callout",
        id: "l5-ds-warn",
        kind: "warning",
        title: L("لا تُحسّن الواصفة بدل النشاط", "Do not optimize the descriptor instead of activity"),
        body: L(
          "خفض logP حتى يدخل النطاق بينما تكسر H-bond الجيب هو تحسين لوحة لا دواء. الواصفة قيد لين أو أداة مقايضة.",
          "Lowering logP to enter a range while breaking the pocket H-bond is dashboard optimization, not a drug. A descriptor is a soft constraint or a trade-off tool.",
        ),
      },
      {
        type: "whatif",
        id: "l5-ds-whatif",
        scenario: L(
          "ماذا لو رشّحتَ كل ما TPSA فيه > 140 قبل فرز كيناز داخلي خلوي؟",
          "What if you filter out everything with TPSA > 140 before an intracellular kinase screen?",
        ),
        consequence: L(
          "قد تفقد مركبات قطبية تنجح بالنقل أو تُناسب جيباً قطبياً. العتبة إرشاد لفوياً فموياً تاريخياً لا قانوناً للكيناز. وثّق إن كنت تُرشّح للفحص الخلوي أو للفم.",
          "You may lose polar compounds that ride transporters or fit a polar pocket. The cutoff is a historical oral heuristic, not a kinase law. Document whether you filter for a cell assay or for oral use.",
        ),
      },
    ],
    ["l5-fp", "l1-hbond", "l14-lipinski", "l15-pka-logd"],
  ),

  expand(
    "l5-fp",
    [
      L(
        "تفسير بصمة Morgan/ECFP وMACCS ومعامل تانيموتو كتشابه تمثيل لا كتشابه فارماكولوجي مضمون.",
        "Explain Morgan/ECFP and MACCS fingerprints and Tanimoto as similarity of a representation, not guaranteed pharmacological similarity.",
      ),
      L(
        "تفسير ماذا تعني عتبة مثل 0.7 تعليمياً ولماذا لا تُقدَّس.",
        "Explain what a cutoff such as 0.7 means educationally and why it must not be canonized.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l5-fp-intro",
        title: L("بتات الجيران لا بتات الجيب", "Neighbourhood bits are not pocket bits"),
        body: L(
          "Morgan/ECFP يُهش بيئة كل ذرة حتى نصف قطر (غالباً 2). MACCS مفاتيح بنيوية يدوية. تانيموتو = تقاطع/اتحاد البتات. 0.7 يعني أن التمثيلين متشابهان تحت تلك العدسة — لا أن Kd متشابه. سلسلة scaffold hopping قد تملك تانيموتو منخفضاً ونفس الفيزياء.",
          "Morgan/ECFP hashes each atom’s environment out to a radius (often 2). MACCS is a hand-crafted structural key set. Tanimoto = intersection/union of bits. 0.7 means the two representations are similar under that lens — not that Kd is similar. A scaffold-hop series may have low Tanimoto and the same physics.",
        ),
      },
      {
        type: "equation",
        id: "l5-fp-tan",
        latex: String.raw`T(a,b) = \frac{|A \cap B|}{|A \cup B|}`,
        name: L("معامل تانيموتو", "Tanimoto coefficient"),
        meaning: L(
          "نسبة البتات المشتركة إلى كل البتات المشتعلة في أي من البصمتين.",
          "The fraction of shared bits among all bits set in either fingerprint.",
        ),
        variables: [
          { symbol: "A, B", name: L("مجموعتا البتات المشتعلة", "Sets of bits that are on") },
          { symbol: "T", name: L("التشابه في [0,1]", "Similarity in [0,1]") },
        ],
        interpretation: L(
          "T حساس لطول البصمة والكثافة. مقارنة 0.7 من Morgan-2 مع 0.7 من MACCS خلط عدسات.",
          "T is sensitive to fingerprint length and bit density. Comparing 0.7 from Morgan-2 with 0.7 from MACCS mixes lenses.",
        ),
        application: L(
          "استخدم العتبة داخل بروتوكول واحد (نفس البصمة) لتجميع أو لإزالة شبه مكررات، واذكرها في methods.",
          "Use a cutoff inside one protocol (same fingerprint) to cluster or to drop near-duplicates, and state it in Methods.",
        ),
      },
      {
        type: "callout",
        id: "l5-fp-edu",
        kind: "educational",
        title: L("0.7 ليست ثابتة فيزيائية", "0.7 is not a physical constant"),
        body: L(
          "تظهر في الأدبيات كعتبة شائعة للتشابه «الملحوظ» تحت بصمات دائرية. قد تكون صارمة أو متساهلة حسب التنوع. لا ترفض hit لأن T = 0.65 مقابل مرجع.",
          "It appears in the literature as a common cutoff for “noticeable” similarity under circular fingerprints. It may be strict or loose depending on diversity. Do not reject a hit because T = 0.65 versus a reference.",
        ),
      },
      {
        type: "callout",
        id: "l5-fp-lim",
        kind: "limitation",
        title: L("تانيموتو لا يعرف النشاط", "Tanimoto does not know activity"),
        body: L(
          "لا تستخدم العتبة كبديل عن مقايسة أو عن إعادة التحام. تشابه البصمة قد يأتي من هيكل مشترك بينما يتغيّر مانح الجيب. إن كان سؤالك القوة، فالتشابه فرضية تحتاج دليلاً آخر.",
          "Do not use the cutoff as a substitute for an assay or for redocking. Fingerprint similarity may come from a shared scaffold while the pocket donor changes. If your question is potency, similarity is a hypothesis that needs other evidence.",
        ),
      },
      {
        type: "why",
        id: "l5-fp-why",
        question: L(
          "لماذا قد يتشابه مركبان بتانيموتو عالٍ ويفترقان في الالتحام؟",
          "Why might two compounds have high Tanimoto and diverge in docking?",
        ),
        answer: L(
          "البصمة قد تتجاهل فرقاً صغيراً في موضع مانح يُحدد H-bond، أو stereo، أو شحنة. الجيب قاسٍ هندسياً؛ البصمة متسامحة طوبولوجياً.",
          "The fingerprint may ignore a small donor-position difference that sets an H-bond, or stereo, or charge. The pocket is geometrically harsh; the fingerprint is topologically forgiving.",
        ),
      },
      {
        type: "whatif",
        id: "l5-fp-whatif",
        scenario: L(
          "ماذا لو بنيتَ مجموعة خداع (decoys) بتانيموتو منخفض عن actives لكن بنفس الشحنة والحجم؟",
          "What if you build decoys with low Tanimoto to actives but matched charge and size?",
        ),
        consequence: L(
          "هذا أقرب لاختبار حقيقي من decoys عشوائية أسهل. إن كانت decoys غير متطابقة في الخواص الفيزيوكيميائية، فالإثراء قد يأتي من MW لا من الجيب.",
          "That is closer to a real test than easy random decoys. If decoys are unmatched in physicochemical properties, enrichment may come from MW, not from the pocket.",
        ),
      },
      {
        type: "exercise",
        id: "l5-fp-ex",
        prompt: L(
          "بصمتان: A بتات {1,2,3} وB {1,2,4}. احسب تانيموتو.",
          "Two fingerprints: A bits {1,2,3} and B {1,2,4}. Compute Tanimoto.",
        ),
        solution: L(
          "التقاطع {1,2} = 2، الاتحاد {1,2,3,4} = 4، T = 0.5. تعليمياً: تشابه متوسط تحت هذه البصمة القصيرة جداً.",
          "Intersection {1,2} = 2, union {1,2,3,4} = 4, T = 0.5. Educationally: moderate similarity under this tiny fingerprint.",
        ),
      },
    ],
    ["l5-descriptors", "l5-scaffold", "l12-sim", "l13-filter"],
  ),

  expand(
    "l5-scaffold",
    [
      L(
        "استخراج هيكل Bemis–Murcko وفهم كيف تخدع المكتبة المتكررة إثراء الفرز.",
        "Extract a Bemis–Murcko scaffold and see how a redundant library fakes screening enrichment.",
      ),
      L(
        "استخدام التنوع كشرط صحة لا كزينة في تقرير VS.",
        "Treat diversity as a validity condition, not as decoration in a VS report.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l5-sc-intro",
        title: L("الإثراء قد يكون تكرار هيكل", "Enrichment may be scaffold repetition"),
        body: L(
          "Bemis–Murcko يُبقي الحلقات والروابط بينها ويُسقط السلاسل الجانبية. إن كانت الـ 50 «أفضل» درجة كلها مشتقات إندول واحد، فأنت لم تُثبت أن الدالة تُعمم؛ أثبتّ أنها تُحب ذلك الهيكل — ربما لأنه في تدريب scoring أو لأنه يملأ الجيب صدفة. التنوع يُقاس قبل أن تُعلن نجاح الشاشة.",
          "Bemis–Murcko keeps rings and the linkers between them and drops side chains. If your 50 “best” scores are all one indole series, you have not shown that the function generalizes; you have shown it likes that scaffold — perhaps because of scoring-function training or a chance pocket fill. Measure diversity before you announce a successful screen.",
        ),
      },
      {
        type: "list",
        id: "l5-sc-use",
        title: L("ماذا تفعل بالهيكل", "What to do with the scaffold"),
        items: [
          L("إزالة التكرار قبل حساب ROC/EF.", "Deduplicate before computing ROC/EF."),
          L("اكتشاف أن actives التجريبية كلها هيكل واحد: نطاق QSAR ضيق.", "Notice that experimental actives are one scaffold: a narrow QSAR domain."),
          L("scaffold hop واعٍ: احتفظ بالفيزياء (مانح/مستقبل) لا بالرسم.", "Deliberate scaffold hop: keep the physics (donor/acceptor), not the drawing."),
        ],
      },
      {
        type: "why",
        id: "l5-sc-why",
        question: L(
          "لماذا تبدو شاشة داخلية «رائعة الإثراء» على مكتبة تجارية متكررة؟",
          "Why can an in-house screen look “wonderfully enriched” on a redundant commercial library?",
        ),
        answer: L(
          "لأن مئات المركبات شبه مكررة تُحسب نجاحات مستقلة. منحنى ROC يُسمن. أعد الحساب بعد تجميع الهيكل أو بعد اختيار ممثل لكل عنقود تانيموتو.",
          "Hundreds of near-duplicates are counted as independent successes. The ROC curve fattens. Recompute after scaffold clustering or after picking one representative per Tanimoto cluster.",
        ),
      },
      {
        type: "callout",
        id: "l5-sc-lim",
        kind: "limitation",
        title: L("Murcko ليس الفارماكوفور", "Murcko is not a pharmacophore"),
        body: L(
          "قد يُسقط مجموعة مانحة كانت كل القصة. لا تستخدم الهيكل وحده لإعادة التصميم دون إعادة رسم السمات الهندسية.",
          "It may drop a donor group that was the whole story. Do not use the scaffold alone to redesign without redrawing geometric features.",
        ),
      },
      {
        type: "whatif",
        id: "l5-sc-whatif",
        scenario: L(
          "ماذا لو قدّمتَ أفضل 10 مركبات للتخليق وهي كلها نفس الـ Murcko مع ميثيل زائد؟",
          "What if you submit the top 10 compounds for synthesis and they all share one Murcko with an extra methyl?",
        ),
        consequence: L(
          "الكيميائي سيصنع سلسلة واحدة. إن فشل الهيكل، فشلت الشاشة كلها. اختر ممثلين من عدة هياكل حتى لو انخفضت الدرجات قليلاً.",
          "The chemist will make one series. If that scaffold fails, the whole screen fails. Pick representatives from several scaffolds even if scores drop slightly.",
        ),
      },
    ],
    ["l5-fp", "l13-workflow", "l11-bioiso", "l8-validation"],
  ),

  expand(
    "l5-rdkit",
    [
      L(
        "تنفيذ تحضير ligand أساسي: قراءة SMILES، إضافة H، توليد هيئة، واصفات، تشابه.",
        "Perform basic ligand prep: read SMILES, add H, generate a conformer, descriptors, similarity.",
      ),
      L(
        "معرفة أن EmbedMolecule قد يفشل، وأن AddHs قبل الـ embed قرار.",
        "Know that EmbedMolecule can fail, and that AddHs before embed is a decision.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l5-rd-intro",
        title: L("RDKit مختبر تمثيل", "RDKit is a representation laboratory"),
        body: L(
          "المكتبة تُحوّل العقد (SMILES) إلى رسم ثم إلى 3D. كل خطوة تفشل بصمت إن لم تفحص القيم المُعادة. التحضير الجيد: تقنين، إزالة أملاح إن لزم، تعيين stereochemistry، بروتنة بأداة مختصة لا بـ AddHs الأعمى وحده، ثم embed وoptimize تحت حقل صغير.",
          "The library turns a contract (SMILES) into a graph then into 3D. Every step fails silently if you do not check return values. Decent prep: canonicalize, strip salts if needed, assign stereochemistry, protonate with a specialised tool not blind AddHs alone, then embed and optimize under a small field.",
        ),
      },
      {
        type: "command",
        id: "l5-rd-cmd",
        command:
          "from rdkit import Chem\nfrom rdkit.Chem import AllChem, Descriptors, DataStructs\nfrom rdkit.Chem import rdFingerprintGenerator\nmol = Chem.MolFromSmiles(\"CCO\")\nmol = Chem.AddHs(mol)\nAllChem.EmbedMolecule(mol, randomSeed=42)\nprint(Descriptors.MolWt(mol))",
        purpose: L(
          "مسار تعليمي: إيثانول من SMILES إلى هيئة وMW.",
          "Educational path: ethanol from SMILES to a conformer and MW.",
        ),
        input: L("SMILES صالح.", "A valid SMILES."),
        output: L(
          "0 من EmbedMolecule تعني نجاحاً نمطياً؛ MW مطبوع. البذرة تثبّت العشوائية.",
          "0 from EmbedMolecule typically means success; MW is printed. The seed pins randomness.",
        ),
        meaning: L(
          "هذا ليس تحضير docking كامل: لا tautomer enumerator ولا pKa.",
          "This is not full docking prep: no tautomer enumerator and no pKa.",
        ),
        errors: L(
          "MolFromSmiles → None؛ EmbedMolecule → غير 0: حلقات كبيرة، تداخل، أو stereo مستحيل. لا تمرّر الجزيء للالتحام.",
          "MolFromSmiles → None; EmbedMolecule → not 0: large rings, clash, or impossible stereo. Do not pass the molecule to docking.",
        ),
      },
      {
        type: "why",
        id: "l5-rd-why",
        question: L(
          "لماذا نُثبّت randomSeed في التوليد ثلاثي الأبعاد؟",
          "Why pin randomSeed in 3D generation?",
        ),
        answer: L(
          "التضمين عشوائي. بلا بذرة لا يُعاد إنتاج الإحداثيات، فتفشل مقارنة هيئات وQA. البذرة لا تجعل الهيئة bioactive؛ تجعل الحساب قابلاً للإعادة.",
          "Embedding is stochastic. Without a seed, coordinates cannot be reproduced, so pose comparison and QA fail. The seed does not make the conformer bioactive; it makes the calculation repeatable.",
        ),
      },
      {
        type: "callout",
        id: "l5-rd-lim",
        kind: "limitation",
        title: L("AddHs لا يعرف pKa الجيب", "AddHs does not know pocket pKa"),
        body: L(
          "إضافة الهيدروجين بالقواعد تملأ التكافؤ. أمين قد يبقى محايداً. استخدم أداة بروتنة أو قواعدك الكيميائية، ثم AddHs على النوع المختار.",
          "Rule-based hydrogen addition fills valence. An amine may remain neutral. Use a protonation tool or your chemistry rules, then AddHs on the chosen species.",
        ),
      },
      {
        type: "whatif",
        id: "l5-rd-whatif",
        scenario: L(
          "ماذا لو تجاهلتَ قيمة إرجاع EmbedMolecule وشغّلت UFF على جزيء بلا إحداثيات؟",
          "What if you ignore EmbedMolecule’s return value and run UFF on a molecule with no coordinates?",
        ),
        consequence: L(
          "خطأ صريح أو هندسة صفرية تُكتب إلى SDF فاسد. QC بسيط يمنع ساعات docking على ملفات فارغة.",
          "A hard error or zeroed geometry written to a corrupt SDF. Simple QC prevents hours of docking on empty files.",
        ),
      },
    ],
    ["l5-smiles", "l5-draw", "l17-rdkit", "l1-pka"],
  ),

  expand(
    "l5-draw",
    [
      L(
        "ربط الرسم ثنائي الأبعاد بـ SMILES حيّ وخصائص فورية دون الوثوق بالشكل كدليل 3D.",
        "Connect a 2D drawing to live SMILES and instant properties without trusting the sketch as 3D evidence.",
      ),
      L(
        "اكتشاف أخطاء شائعة في الرسم: تكافؤ، stereo، نتروجين عطري.",
        "Catch common drawing errors: valence, stereo, aromatic nitrogen.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l5-dr-intro",
        title: L("ما ترسمه هو عقد الحاسوب", "What you draw is the computer’s contract"),
        body: L(
          "المحرر يُصدّر SMILES أو molblock. خطأ نقر على نتروجين يُغيّر النوع الذي سيُرسَم ويُحسب logP له. الرسم 2D لا يثبت أن الأميد مستوٍ في الجيب ولا أن الحلقة تتخذ هيئة كرسي. استخدم الرسم للتواصل والكشف عن الأخطاء، ثم ولّد 3D وافحصه.",
          "The editor exports SMILES or a molblock. One mis-click on nitrogen changes the species that will be docked and have logP computed. A 2D sketch does not prove the amide is planar in the pocket or that the ring adopts a chair. Use drawing to communicate and to catch errors, then generate 3D and inspect it.",
        ),
      },
      {
        type: "list",
        id: "l5-dr-qc",
        title: L("قائمة عين قبل التصدير", "An eye checklist before export"),
        items: [
          L("كل ذرة تكافؤ معقول؟", "Does every atom have a reasonable valence?"),
          L("هل الشحنات ظاهرة على الأمونيوم والكربوكسيلات؟", "Are charges visible on ammonium and carboxylates?"),
          L("هل أسافين stereo مرسومة حيث يلزم؟", "Are stereo wedges drawn where needed?"),
          L("هل tautomer هو ما تقصد لا ما اقترحه المحرر؟", "Is the tautomer the one you intend, not the editor’s suggestion?"),
        ],
      },
      {
        type: "why",
        id: "l5-dr-why",
        question: L(
          "لماذا يختلف MW الفوري في المحرر عن MW بعد AddHs في RDKit؟",
          "Why might instant MW in the editor differ from MW after RDKit AddHs?",
        ),
        answer: L(
          "قد يُهمل أحد الطرفين الهيدروجينات أو الأملاح أو النظائر. عرّف هل MW للهيدروجينات الظاهرة أم للصيغة الخام. الاختلاف فرصة QC لا جدلاً تجميلياً.",
          "One side may omit hydrogens, salts, or isotopes. Define whether MW is for explicit hydrogens or the raw formula. The mismatch is a QC opportunity, not cosmetic debate.",
        ),
      },
      {
        type: "callout",
        id: "l5-dr-lim",
        kind: "limitation",
        title: L("الخصائص الفورية تقديرات 2D", "Instant properties are 2D estimates"),
        body: L(
          "logP وTPSA من الرسم أدوات ترشيح. لا تضعها في جدول نتائج ارتباط. ولا تستخدم صورة 2D في ورقة كدليل هيئة.",
          "logP and TPSA from a sketch are filter tools. Do not put them in a binding-results table. And do not use a 2D picture in a paper as pose evidence.",
        ),
      },
      {
        type: "whatif",
        id: "l5-dr-whatif",
        scenario: L(
          "ماذا لو نسختَ صورة جزيء من شريحة وأنشأت SMILES يدوياً دون تحقق؟",
          "What if you copy a molecule picture from a slide and type SMILES by hand without validation?",
        ),
        consequence: L(
          "أخطاء حلقات وشحنات شائعة. حلّل بـ MolFromSmiles وقارن صورة الكائن بالشريحة ذرة-ذرة قبل أي فرز.",
          "Ring and charge errors are common. Parse with MolFromSmiles and compare the object depiction to the slide atom-by-atom before any screen.",
        ),
      },
    ],
    ["l5-rdkit", "l5-smiles", "l5-descriptors", "l18-figures"],
  ),

  expand(
    "l6-etotal",
    [
      L(
        "كتابة E_total = bonded + nonbonded وشرح أن كل حد قرار فيزيائي لا سطر برمجي.",
        "Write E_total = bonded + nonbonded and explain that each term is a physics decision, not a software line.",
      ),
      L(
        "تحديد ما يدخل وما يخرج (قيود، 1-4، قطع، PME) قبل تفسير أي طاقة.",
        "State what is included and excluded (constraints, 1-4, cutoffs, PME) before interpreting any energy.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l6-et-intro",
        title: L("السطح الذي تتحرك عليه كل محاكاة كلاسيكية", "The surface every classical simulation walks on"),
        body: L(
          "طاقة الوضع في الميكانيكا الجزيئية مجموع حدود صريحة. المرتبط (bonded): أطوال، زوايا، ثنائيات سطح، وأحياناً impropers. غير المرتبط (nonbonded): Lennard-Jones وكولوم، مع استثناءات 1-2 و1-3 وتخفيف 1-4. لا تفاعل استقطابي ما لم يُشترَ. لا كسر رابطة. E ليست ΔG.",
          "The potential in molecular mechanics is an explicit sum. Bonded: lengths, angles, dihedrals, sometimes impropers. Nonbonded: Lennard-Jones and Coulomb, with 1-2 and 1-3 exclusions and 1-4 scaling. No polarization unless purchased. No bond breaking. E is not ΔG.",
        ),
      },
      {
        type: "equation",
        id: "l6-et-eq",
        latex: String.raw`E = E_{\mathrm{bond}} + E_{\mathrm{angle}} + E_{\mathrm{dihedral}} + E_{\mathrm{LJ}} + E_{\mathrm{Coulomb}}`,
        name: L("تجزئة الجهد الكلاسيكي", "Decomposition of the classical potential"),
        meaning: L(
          "كل حد دالة لإحداثيات ومعاملات force field. حذف حد أو تغيير قطع يُغيّر السطح.",
          "Each term is a function of coordinates and force-field parameters. Dropping a term or changing a cutoff changes the surface.",
        ),
        variables: [
          { symbol: "E_bond", name: L("حدود الأطوال (غالباً توافقية)", "Bond-length terms (often harmonic)") },
          { symbol: "E_angle", name: L("حدود الزوايا", "Angle terms") },
          { symbol: "E_dihedral", name: L("التواء Fourier أو مكافئه", "Fourier torsion or equivalent") },
          { symbol: "E_LJ", name: L("تشتت وطرد vdW", "vdW dispersion and repulsion") },
          { symbol: "E_Coulomb", name: L("شحنات جزئية", "Partial charges") },
        ],
        interpretation: L(
          "قد تُضاف حدود improper أو cmap أو قيود. قارن طاقات فقط داخل نفس التعريف.",
          "Improper, cmap, or constraint terms may be added. Compare energies only inside the same definition.",
        ),
        application: L(
          "قبل أن تُفسّر أن «طاقة المركب أخفض»، اكتب هل المذيب صريح، وهل PME يعمل، وهل 1-4 مُدرَج.",
          "Before you interpret “compound energy is lower”, write whether solvent is explicit, whether PME is on, and whether 1-4 is included.",
        ),
      },
      {
        type: "list",
        id: "l6-et-decisions",
        title: L("قرارات تُغيّر E دون أن تُغيّر الجزيء", "Decisions that change E without changing the molecule"),
        items: [
          L("نصف قطر قطع LJ وكولوم الحقيقي مقابل PME.", "LJ cutoff and real-space Coulomb versus PME."),
          L("معاملات 1-4 مختلفة بين AMBER وCHARMM.", "Different 1-4 scalings in AMBER versus CHARMM."),
          L("قيود SHAKE/LINCS تزيل حدود رابطة من الديناميكا.", "SHAKE/LINCS constraints remove bond terms from the dynamics."),
          L("وحدة kcal مقابل kJ — خطأ يُضاعف كل شيء ~4.184.", "kcal versus kJ — an error that rescales everything by ~4.184."),
        ],
      },
      {
        type: "why",
        id: "l6-et-why",
        question: L(
          "لماذا لا تُقارن E المطلقة بين مركبين مختلفين كدليل ارتباط؟",
          "Why not compare absolute E between two different compounds as binding evidence?",
        ),
        answer: L(
          "E المطلقة تعتمد على عدد الحدود والشحنات والمذيب. مركبان ليسا على نفس المرجع. الارتباط فرق بين حالات (مركب حر، بروتين حر، معقد) مع إنتروبي. E لمعقد واحد رقم بلا معنى مقارن.",
          "Absolute E depends on the number of terms, charges, and solvent. Two compounds do not share a reference. Binding is a difference between states (free ligand, free protein, complex) plus entropy. E of one complex is a non-comparable number.",
        ),
      },
      {
        type: "callout",
        id: "l6-et-warn",
        kind: "warning",
        title: L("متى لا تستخدم هذه الدالة", "When not to use this potential"),
        body: L(
          "كسر/تكوين رابطة، تغيير تناسق معدن دقيق، أو استقطاب كبير في جيب شديد الحقل: MM القياسي غير مخوّل. انتقل إلى QM/MM أو اعترف بالحد.",
          "Bond making/breaking, subtle metal coordination change, or large polarization in a high-field pocket: standard MM is not licensed. Move to QM/MM or admit the limit.",
        ),
      },
      {
        type: "whatif",
        id: "l6-et-whatif",
        scenario: L(
          "ماذا لو حسبتَ E في فراغ ثم فسّرتها كإذابة لأن الرقم «يشبه» MM/PBSA؟",
          "What if you compute E in vacuum then interpret it as solvation because the number “looks like” MM/PBSA?",
        ),
        consequence: L(
          "تكون قد أسقطت المذيب وهو شريك ΔG. الأرقام قد تُرتّب قطبية خطأ. لا تخلط أسماء الطرائق.",
          "You have dropped solvent, a ΔG partner. Numbers may rank polarity wrongly. Do not mix method names.",
        ),
      },
    ],
    ["l6-bonded", "l6-lj", "l6-coulomb", "l6-limits"],
  ),

  expand(
    "l6-bonded",
    [
      L(
        "شرح حد الرابطة التوافقي، حد الزاوية، وحد الالتواء Fourier كوظائف كيميائية.",
        "Explain the harmonic bond, the angle term, and the Fourier torsion as chemical functions.",
      ),
      L(
        "تمييز improper/cmap ولماذا التواء أميد مستوٍ ليس تفاصيل تجميلية.",
        "Distinguish improper/cmap terms and why a planar amide torsion is not cosmetic.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l6-bd-intro",
        title: L("المرتبط يحفظ الكيمياء التساهمية في عالم لا يكسر روابط", "Bonded terms keep covalent chemistry in a world that does not break bonds"),
        body: L(
          "الرابطة التوافقية تُعاقب الاستطالة حول طول مرجعي k وr0 — ليست Morse، فلا تفكك. الزاوية كذلك توافقية حول θ0. الالتواء سلسلة حدود cos(nφ − γ) تسمح بعدة حد أدنى (cis/trans، مواضع حلقة). هذه الحدود تُثبّت ما لا يجب أن يُعيد vdW اكتشافه.",
          "A harmonic bond penalizes stretch about a reference k and r0 — it is not Morse, so it does not dissociate. The angle is likewise harmonic about θ0. Torsion is a cosine series cos(nφ − γ) allowing several minima (cis/trans, ring positions). These terms pin what vdW should not have to reinvent.",
        ),
      },
      {
        type: "equation",
        id: "l6-bd-bond",
        latex: String.raw`E_{\mathrm{bond}} = \sum_{\mathrm{bonds}} k_r (r - r_0)^2`,
        name: L("حد الرابطة التوافقي", "Harmonic bond term"),
        meaning: L(
          "زنبرك حول طول توازن. k_r كبير يعني رابطة صلبة.",
          "A spring about an equilibrium length. Large k_r means a stiff bond.",
        ),
        variables: [
          { symbol: "k_r", name: L("ثابت القوة", "Force constant") },
          { symbol: "r", name: L("الطول الآني", "Instantaneous length") },
          { symbol: "r_0", name: L("الطول المرجعي في الحقل", "Reference length in the field") },
        ],
        interpretation: L(
          "عند تداخل شديد قد يفوز التوافقي على الواقع: الذرات لا تنفصل. لذلك MD لا يحاكي تفاعلاً كيميائياً.",
          "Under extreme stretch the harmonic wins over reality: atoms do not separate. That is why MD does not simulate a chemical reaction.",
        ),
        application: L(
          "إن رأيت رابطة ligand بعيدة جداً عن r0 بعد min، فالنوع الذري أو الطوبولوجيا خاطئان لا «هيئة جديدة».",
          "If a ligand bond sits far from r0 after minimization, the atom type or topology is wrong — not a “new pose”.",
        ),
      },
      {
        type: "equation",
        id: "l6-bd-tor",
        latex: String.raw`E_{\mathrm{torsion}} = \sum_n \frac{V_n}{2}\left[1 + \cos(n\phi - \gamma)\right]`,
        name: L("التواء Fourier", "Fourier torsion"),
        meaning: L(
          "يحفر حدًى أدنى عند زوايا توافق الكيمياء (مثل 180° لأميد).",
          "It carves minima at chemically expected angles (e.g. 180° for an amide).",
        ),
        variables: [
          { symbol: "V_n", name: L("ارتفاع الحاجز للحد n", "Barrier height for term n") },
          { symbol: "n", name: L("التكرارية", "Periodicity") },
          { symbol: "φ", name: L("زاوية ثنائي السطح", "Dihedral angle") },
          { symbol: "γ", name: L("طور", "Phase") },
        ],
        interpretation: L(
          "إن نُسيت معاملات التواء ligand، قد يدور أميد كأنه ألكان. هذا فشل GAFF/CGenFF assignment.",
          "If ligand torsion parameters are missing, an amide may rotate like an alkane. That is a GAFF/CGenFF assignment failure.",
        ),
        application: L(
          "افحص توزيع φ للروابط القابلة للدوران المهمة؛ إن زارت قيماً محرّمة كيميائياً فأصلح الحقل لا تُفسر كديناميكا الجيب.",
          "Inspect φ distributions of important rotors; if they visit chemically forbidden values, fix the field — do not interpret them as pocket dynamics.",
        ),
      },
      {
        type: "why",
        id: "l6-bd-why",
        question: L(
          "لماذا لا يكفي LJ لتثبيت هندسة رباعي السطوح حول كربون sp³؟",
          "Why is LJ not enough to keep tetrahedral geometry around sp³ carbon?",
        ),
        answer: L(
          "LJ أعمى عن التكافؤ الزاوي؛ سيتداخل الجيران بلا θ0. حد الزاوية هو ما يُشفّر التهجين في MM.",
          "LJ is blind to valence angles; neighbours would clash without θ0. The angle term is how MM encodes hybridization.",
        ),
      },
      {
        type: "callout",
        id: "l6-bd-lim",
        kind: "limitation",
        title: L("التوافقي لا يطلق الرابطة", "Harmonic terms do not release a bond"),
        body: L(
          "لا تستخدم MM لدراسة تفكك تساهمي أو فتح حلقة. حتى «المسافة زادت في المسار» قد تكون strain لا تفاعل.",
          "Do not use MM to study covalent dissociation or ring opening. Even “the distance increased in the trajectory” may be strain, not reaction.",
        ),
      },
      {
        type: "whatif",
        id: "l6-bd-whatif",
        scenario: L(
          "ماذا لو كانت طوبولوجيا ligand تفتقد improper للأميد؟",
          "What if the ligand topology lacks an amide improper?",
        ),
        consequence: L(
          "قد ينثني الأميد خارج المستوى فتخسر عقوبة فيزيائية كبيرة وتبدو هيئة docking «مرنة ذكية». أعد توليد الطوبولوجيا وافحص المستوى.",
          "The amide may pucker out of plane, losing a large physical penalty, and a docking pose may look “smartly flexible”. Regenerate the topology and inspect planarity.",
        ),
      },
    ],
    ["l6-etotal", "l6-ligandff", "l1-conform", "l7-geom"],
  ),

  expand(
    "l6-lj",
    [
      L(
        "تفسير حدّي r⁻¹² وr⁻⁶ في Lennard-Jones كطرد تجريبي وتجاذب تشتتي.",
        "Interpret the r⁻¹² and r⁻⁶ Lennard-Jones pieces as empirical repulsion and dispersive attraction.",
      ),
      L(
        "ربط قطع LJ وذيل التصحيح بأخطاء طاقة في صناديق سيئة.",
        "Connect LJ cutoffs and tail corrections to energy errors in poorly sized boxes.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l6-lj-intro",
        title: L("vdW ليس لوناً رمادياً في السطح", "vdW is not a grey colour on the surface"),
        body: L(
          "عند تداخل سحابتين يرتفع الطرد بسرعة؛ على مسافة أطول يتغلب تجاذب تشتتي ~ r⁻⁶. الشكل 12-6 شائع لأنه رخيص حسابياً (12 = مربع 6). ليس مشتقاً من ميكانيكا كم لكل زوج. معاملات ε وσ (أو A/B) أنواع ذرات: C عطري ليس C أليفاتياً.",
          "When two clouds overlap, repulsion rises steeply; at longer range dispersive attraction ~ r⁻⁶ wins. The 12-6 form is common because it is cheap (12 is 6 squared). It is not derived from quantum mechanics for every pair. Parameters ε and σ (or A/B) are atom types: aromatic C is not aliphatic C.",
        ),
      },
      {
        type: "equation",
        id: "l6-lj-eq",
        latex: String.raw`E_{\mathrm{LJ}} = 4\varepsilon\left[\left(\frac{\sigma}{r}\right)^{12} - \left(\frac{\sigma}{r}\right)^{6}\right]`,
        name: L("كمون لينارد-جونز 12-6", "12-6 Lennard-Jones potential"),
        meaning: L(
          "الموجب الأول طرد قصير المدى؛ السالب تشتت. الحد الأدنى قرب r = 2^{1/6} σ.",
          "The first positive piece is short-range repulsion; the negative is dispersion. The minimum lies near r = 2^{1/6} σ.",
        ),
        variables: [
          { symbol: "ε", name: L("عمق البئر", "Well depth") },
          { symbol: "σ", name: L("مسافة يتلاشى عندها الجهد تقريباً (E=0)", "Distance where the potential is zero") },
          { symbol: "r", name: L("المسافة بين موقعين", "Distance between sites") },
        ],
        interpretation: L(
          "عند r صغير جداً (ذرة في ذرة) ينفجر الحد 12 فتنهار المحاكاة — علامة تداخل عند البناء.",
          "At very small r (atom-in-atom) the 12 term explodes and the simulation dies — a build clash flag.",
        ),
        application: L(
          "ملء جيب كاره يربح من آبار ε المتراكمة. الاصطدام يكلف أكثر من ربح التشتت: الشكل المكمل أهم من «مزيد من الكربون».",
          "Filling a hydrophobic pocket gains from stacked ε wells. Clash costs more than dispersion gains: complementary shape beats “more carbon”.",
        ),
      },
      {
        type: "why",
        id: "l6-lj-why",
        question: L(
          "لماذا r⁻¹² لا r⁻⁹ أو تنافر أسي؟",
          "Why r⁻¹² rather than r⁻⁹ or an exponential repulsion?",
        ),
        answer: L(
          "التاريخ والحساب: 12 مريح. بعض الحقول تستخدم 9-6 أو Buckingham. تغيير الشكل يُغيّر التوازن مع coulomb عند التماس. لا تخلط أشكالاً داخل نظام واحد.",
          "History and compute: 12 is convenient. Some fields use 9-6 or Buckingham. Changing shape retunes the balance with Coulomb at contact. Do not mix forms inside one system.",
        ),
      },
      {
        type: "callout",
        id: "l6-lj-lim",
        kind: "limitation",
        title: L("القطع الحاد لـ LJ يكسر القوة", "A hard LJ cutoff breaks the force"),
        body: L(
          "إن قُطع الجهد دون تبديل ناعم، تظهر قوى وهمية عند الحدود. استخدم switching/shift كما يفرض الحقل، وسجّل نصف القطر. مقارنة طاقات بقطع مختلفة مقارنة سطوح مختلفة.",
          "If the potential is truncated without smooth switching, spurious forces appear at the boundary. Use the switching/shift the field requires, and record the radius. Comparing energies at different cutoffs compares different surfaces.",
        ),
      },
      {
        type: "whatif",
        id: "l6-lj-whatif",
        scenario: L(
          "ماذا لو استخدمتَ نوع ذرة C أليفاتي لحلقة عطرية في ligand؟",
          "What if you assign aliphatic C type to an aromatic ligand ring?",
        ),
        consequence: L(
          "σ وε والتواءات π كلها خطأ. قد تختفي stacking وتظهر سماكة خاطئة. هذا فشل assignment لا «ضعف π−π في الحقل عموماً».",
          "σ, ε, and π torsions are all wrong. Stacking may vanish and thickness may be wrong. That is an assignment failure, not “weak π−π in the field generally”.",
        ),
      },
    ],
    ["l6-etotal", "l6-coulomb", "l2-forces", "l6-families"],
  ),

  expand(
    "l6-coulomb",
    [
      L(
        "كتابة قانون كولوم للشحنات الجزئية وشرح أن الشحنة في MM ليست ملاحظة تجريبية مباشرة.",
        "Write Coulomb’s law for partial charges and explain that MM charge is not a direct experimental observable.",
      ),
      L(
        "ربط العزل وPME والإذابة بمدى صدق الجسور الملحية في المحاكاة.",
        "Connect dielectric, PME, and solvation to how honestly salt bridges appear in simulation.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l6-co-intro",
        title: L("الشحنة قرار تمثيل", "Charge is a representation decision"),
        body: L(
          "MM يضع أرقاماً q على مواقع ذرية. كولوم q_i q_j / (4πε0 r) (أو بصيغة الحقل) يُهيمن على المسافات المتوسطة والطويلة. في الماء، الإذابة الصريحة أو GB تُغربل. في الفراغ، الجسور الملحية مبالغ فيها. الشحنات تُشتق من RESP أو AM1-BCC أو قواعد الحقل — ليست قراءة جهاز.",
          "MM parks numbers q on nuclear sites. Coulomb q_i q_j / (4πε0 r) (or the field’s form) dominates medium and long range. In water, explicit solvent or GB screens. In vacuum, salt bridges are overstated. Charges come from RESP, AM1-BCC, or field rules — not from an instrument reading.",
        ),
      },
      {
        type: "equation",
        id: "l6-co-eq",
        latex: String.raw`E_{\mathrm{Coulomb}} = \sum_{i<j} \frac{q_i q_j}{4\pi\varepsilon_0 r_{ij}}`,
        name: L("كولوم بين شحنات نقطية", "Coulomb between point charges"),
        meaning: L(
          "إشارة q_i q_j تُحدد تجاذباً أو تنافراً. 1/r بطيء الاضمحلال لذا تحتاج الحدود الدورية PME أو ما يعادل.",
          "The sign of q_i q_j sets attraction or repulsion. 1/r decays slowly, so periodic systems need PME or equivalent.",
        ),
        variables: [
          { symbol: "q_i", name: L("شحنة جزئية على الموقع i", "Partial charge on site i") },
          { symbol: "r_ij", name: L("المسافة", "Distance") },
          { symbol: "ε0", name: L("سماحية الفراغ", "Vacuum permittivity") },
        ],
        interpretation: L(
          "في محرك MD غالباً تُستخدم ثوابت محوّلة ووحدات داخلية. الخطأ الشائع: نسيان تحويل kcal/kJ أو نسيان شحنة المعدن.",
          "MD engines often use converted constants and internal units. Common errors: forgetting kcal/kJ conversion, or forgetting the metal charge.",
        ),
        application: L(
          "غيّر بروتنة أمين من 0 إلى +1 ولن تبقى رتبة الالتحام كما هي: هذا coulomb لا «تفاصيل هيدروجين».",
          "Change an amine protonation from 0 to +1 and docking rank will not stay the same: that is Coulomb, not a “hydrogen detail”.",
        ),
      },
      {
        type: "why",
        id: "l6-co-why",
        question: L(
          "لماذا الشحنة ليست ملاحظة تجريبية في MM؟",
          "Why is charge not an experimental observable in MM?",
        ),
        answer: L(
          "الكثافة الإلكترونية حقيقية؛ تقسيمها على ذرات اصطلاح يعتمد على الأساس والطريقة (Mulliken يختلف عن RESP). الحقل يحتاج قيماً متسقة مع ε وLJ لذلك العائلة، لا «الشحنة الصحيحة» الميتافيزيقية.",
          "Electron density is real; partitioning onto atoms is a convention that depends on basis and method (Mulliken ≠ RESP). The field needs values consistent with its ε and LJ, not a metaphysical “true charge”.",
        ),
      },
      {
        type: "callout",
        id: "l6-co-warn",
        kind: "warning",
        title: L("لا تخلط مخططات شحن داخل نظام واحد", "Do not mix charge schemes inside one system"),
        body: L(
          "بروتين AMBER (مثل ff14SB) + ligand بشحنات غير متوافقة + قطع بلا PME وصفة لجسور ملحية كاذبة. اتبع فلسفة العائلة أو وثّق الهجين كحد.",
          "An AMBER protein (e.g. ff14SB) + ligand charges from an incompatible scheme + cutoff without PME is a recipe for fake salt bridges. Follow the family’s philosophy or document the hybrid as a limit.",
        ),
      },
      {
        type: "whatif",
        id: "l6-co-whatif",
        scenario: L(
          "ماذا لو شغّلتَ المعقد في فراغ لأن «الجيب مدفون»؟",
          "What if you run the complex in vacuum because “the pocket is buried”?",
        ),
        consequence: L(
          "coulomb غير المُغربل يلصق شحنات بلا رحمة وقد يمنع انفصال غير فيزيائي أو يخلق تماسّات مبالغاً فيها. حتى الجيب المدفون يحتاج نموذجاً للعزل (ماء صريح أو ضمني).",
          "Unscreened Coulomb glues charges mercilessly and may prevent unphysical unbinding or create overstated contacts. Even a buried pocket needs a screening model (explicit or implicit water).",
        ),
      },
    ],
    ["l6-etotal", "l6-charges", "l6-lj", "l2-forces"],
  ),

  expand(
    "l6-families",
    [
      L(
        "تمييز فلسفات AMBER وCHARMM وOPLS وGROMOS لا حفظ شعاراتها فقط.",
        "Distinguish the philosophies of AMBER, CHARMM, OPLS, and GROMOS, not merely their slogans.",
      ),
      L(
        "رفض خلط طوبولوجيا عائلة مع معاملات أخرى دون وعي 1-4 والمياه.",
        "Refuse to mix one family’s topology with another’s parameters without respecting 1-4 rules and water models.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l6-fam-intro",
        title: L("العائلة حزمة اتساق", "A family is a consistency bundle"),
        body: L(
          "AMBER: تاريخياً شحنات RESP، بروتينات شائعة في الدواء، GAFF لليجند. CHARMM: شحنات مختلفة، CMAP للعمود الفقري، CGenFF لليجند، مياه CHARMM. OPLS: تركيز على سوائل عضوية ودقة سائلة. GROMOS:united-atom في نسخ شائعة. الفلسفة تُحدد 1-4 والمياه وأنواع الذرات معاً.",
          "AMBER: historically RESP charges, proteins common in drug work, GAFF for ligands. CHARMM: different charges, CMAP for backbone, CGenFF for ligands, CHARMM waters. OPLS: emphasis on organic liquids and condensed-phase accuracy. GROMOS: united-atom in common variants. Philosophy sets 1-4 rules, water, and atom types together.",
        ),
      },
      {
        type: "compare",
        id: "l6-fam-cmp",
        left: L("AMBER-like", "AMBER-like"),
        right: L("CHARMM-like", "CHARMM-like"),
        rows: [
          {
            dim: L("شحنات ligand النمطية", "Typical ligand charges"),
            a: L("RESP أو AM1-BCC مع GAFF/OpenFF.", "RESP or AM1-BCC with GAFF/OpenFF."),
            b: L("CGenFF (قواعد/مواءمة) لا RESP تلقائياً.", "CGenFF (rules/fitting), not automatically RESP."),
          },
          {
            dim: L("ماء شائع", "Common water"),
            a: L("TIP3P (متغيرات AMBER).", "TIP3P (AMBER variants)."),
            b: L("TIP3P المعدّل لـ CHARMM أو TIP3P/CHARMM.", "CHARMM-modified TIP3P."),
          },
          {
            dim: L("خطر الهجين", "Hybrid risk"),
            a: L("ligand CGenFF على بروتين AMBER يكسر الاتساق.", "CGenFF ligand on an AMBER protein breaks consistency."),
            b: L("GAFF على بروتين CHARMM نفس الخطر بالاتجاه المعاكس.", "GAFF on a CHARMM protein is the same risk reversed."),
          },
        ],
      },
      {
        type: "why",
        id: "l6-fam-why",
        question: L(
          "لماذا يُعدّ اختيار الماء جزءاً من اختيار الحقل؟",
          "Why is the water model part of choosing the field?",
        ),
        answer: L(
          "معاملات البروتين دُرّبت أو اختُبرت مع ماء معيّن (شحنة، هندسة، LJ). TIP3P مع حقل يتوقع ماءً آخر يُغيّر الإذابة والضغط. اذكر الماء في methods كذكر الحقل.",
          "Protein parameters were trained or tested with a particular water (charge, geometry, LJ). TIP3P with a field that expects another water changes solvation and pressure. Name the water in Methods as you name the field.",
        ),
      },
      {
        type: "callout",
        id: "l6-fam-lim",
        kind: "limitation",
        title: L("الأسماء تتقدّم؛ الفلسفة تبقى قيد الاتساق", "Names advance; philosophy remains a consistency constraint"),
        body: L(
          "إصدارات البروتين تتجدد (أجيال AMBER/CHARMM). لا تخلط ورقة تستخدم أسماء قديمة مع بروتوكولك دون قراءة ما تغيّر في 1-4 وCMAP. هذا الدرس فلسفة لا قائمة إصدارات تُحفظ.",
          "Protein editions refresh (AMBER/CHARMM generations). Do not mix a paper’s old names with your protocol without reading what changed in 1-4 and CMAP. This lesson is philosophy, not a version list to memorize.",
        ),
      },
      {
        type: "whatif",
        id: "l6-fam-whatif",
        scenario: L(
          "ماذا لو أخذتَ طوبولوجيا ligand من CGenFF وشغّلتها في محرك مع خيارات 1-4 الخاصة بـ AMBER؟",
          "What if you take a CGenFF ligand topology and run it in an engine with AMBER 1-4 options?",
        ),
        consequence: L(
          "تُعاد وزن coulomb/LJ القريبة خطأً فتتغير التواءات وشحنات فعّالة. المسار قد يبدو مستقراً وهو على سطح هجين غير مُعاير.",
          "Near Coulomb/LJ are reweighted wrongly, so torsions and effective charges change. The trajectory may look stable on an uncalibrated hybrid surface.",
        ),
      },
    ],
    ["l6-ligandff", "l6-charges", "l9-engines", "l6-etotal"],
  ),

  expand(
    "l6-ligandff",
    [
      L(
        "التفريق بين GAFF وCGenFF وOpenFF كطرق لإلباس ligand معاملات.",
        "Distinguish GAFF, CGenFF, and OpenFF as ways of dressing a ligand with parameters.",
      ),
      L(
        "كشف فشل الإسناد: أنواع ذرات مفقودة، التواء عام، شحنات لا تُطابق العائلة.",
        "Detect assignment failure: missing atom types, generic torsions, charges that do not match the family.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l6-lg-intro",
        title: L("الليجند ليس حمض أميني في القاموس", "A ligand is not an amino acid in the dictionary"),
        body: L(
          "حقول البروتين لا تعرف دواءك. GAFF (وGAFF2) يمد AMBER بأنواع عامة. CGenFF يمد CHARMM بقواعد ومواءمة. OpenFF يسعى لمعاملات من بيانات فيزيائية/QM بشكل منهجي أكثر. كلها تقريبات: حلقة نادرة أو معدن أو بورون قد تسقط إلى نوع «عام» خطير.",
          "Protein fields do not know your drug. GAFF (and GAFF2) extends AMBER with general types. CGenFF extends CHARMM with rules and fitting. OpenFF aims at parameters from physical/QM data more systematically. All are approximations: a rare ring, a metal, or boron may fall through to a dangerous “generic” type.",
        ),
      },
      {
        type: "list",
        id: "l6-lg-qc",
        title: L("QC بعد توليد الطوبولوجيا", "QC after topology generation"),
        items: [
          L("هل كل ذرة نوع معروف لا X عام؟", "Does every atom have a known type, not generic X?"),
          L("هل مجموع الشحنات يساوي الشحنة الصافية التي اخترتها؟", "Does charge sum equal the net charge you chose?"),
          L("هل الأميد مستوٍ بعد min قصيرة؟", "Is the amide planar after a short min?"),
          L("هل تظهر تحذيرات penalty عالية في CGenFF؟", "Do high CGenFF penalty warnings appear?"),
        ],
      },
      {
        type: "why",
        id: "l6-lg-why",
        question: L(
          "لماذا لا تُنسخ طوبولوجيا ligand من مشروع قديم على بنية SMILES «قريبة»؟",
          "Why not copy a ligand topology from an old project onto a “similar” SMILES?",
        ),
        answer: L(
          "فرق ذرة واحدة يُغيّر أنواعاً وشحنات. النسخ يُنتج ملفات تعمل شكلياً وفيزياء لجزيء آخر. ولّد من الملف الحالي ثم قارن.",
          "One atom difference changes types and charges. Copying yields files that run cosmetically with another molecule’s physics. Generate from the current file, then compare.",
        ),
      },
      {
        type: "callout",
        id: "l6-lg-warn",
        kind: "warning",
        title: L("لا تستخدم GAFF مع فلسفة CHARMM صامتة", "Do not use GAFF silently inside a CHARMM philosophy"),
        body: L(
          "الهجين ممكن بحثياً لكنه حد يجب أن يُكتب. الصمت يجعل الطاقة غير قابلة للمقارنة مع أدبيات العائلة.",
          "A hybrid is possible as research but is a limit that must be written down. Silence makes the energy incomparable to the family’s literature.",
        ),
      },
      {
        type: "whatif",
        id: "l6-lg-whatif",
        scenario: L(
          "ماذا لو تجاهلتَ penalty مرتفعاً على التواء في CGenFF لأن المحاكاة «لم تنفجر»؟",
          "What if you ignore a high CGenFF torsion penalty because the simulation “did not explode”?",
        ),
        consequence: L(
          "عدم الانفجار يعني التكامل لم يكسر، لا أن الحاجز صحيح. قد تزور هيئات محرّمة أو ترفض bioactive. أعد مواءمة التواء بـ QM أو غيّر التمثيل.",
          "Not exploding means the integrator did not break, not that the barrier is right. You may visit forbidden conformers or reject the bioactive one. Refit the torsion with QM or change representation.",
        ),
      },
    ],
    ["l6-families", "l6-charges", "l6-bonded", "l7-geom"],
  ),

  expand(
    "l6-charges",
    [
      L(
        "التفريق بين Mulliken وRESP وAM1-BCC ومتى تُستخدم كلٌ في إعداد ligand.",
        "Distinguish Mulliken, RESP, and AM1-BCC, and when each is used in ligand setup.",
      ),
      L(
        "رفض Mulliken كشحنات ديناميكا دون وعي حدودها.",
        "Refuse Mulliken as dynamics charges without facing its limits.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l6-ch-intro",
        title: L("تقسيم الكثافة اصطلاح", "Partitioning density is a convention"),
        body: L(
          "Mulliken يوزّع سكاناً حسب تداخل أساس؛ حسّاس للأساس وقد يُعطي قيماً غير مستقرة. RESP يُلائم الجهد الكهروستاتيكي حول الجزيء مع قيود، وهو شائع مع AMBER/GAFF. AM1-BCC رخيص يُقارب جودة ملائمة الجهد في كثير من ligands العضوية الصغيرة. لا معنى لشحنة «أصح» خارج اتساق الحقل.",
          "Mulliken partitions populations by basis overlap; it is basis-sensitive and can be unstable. RESP fits the electrostatic potential around the molecule with restraints, and is common with AMBER/GAFF. AM1-BCC is cheap and approximates ESP-fit quality for many small organic ligands. There is no “more correct” charge outside field consistency.",
        ),
      },
      {
        type: "compare",
        id: "l6-ch-cmp",
        left: L("RESP", "RESP"),
        right: L("AM1-BCC", "AM1-BCC"),
        rows: [
          {
            dim: L("التكلفة", "Cost"),
            a: L("يحتاج حساب QM (غالباً HF/6-31G* في البروتوكول الكلاسيكي).", "Needs a QM calculation (classically often HF/6-31G*)."),
            b: L("شبه تجريبي سريع لمكتبات أكبر.", "Semi-empirical and fast for larger libraries."),
          },
          {
            dim: L("الاستخدام", "Use"),
            a: L("ligand نهائي أو سلسلة قصيرة مع AMBER.", "A final ligand or a short series with AMBER."),
            b: L("تحضير واسع قبل الفرز أو MD استكشافي.", "Broad prep before screening or exploratory MD."),
          },
          {
            dim: L("متى لا", "When not"),
            a: L("على مليون مركب كخط أنابيب أعمى.", "On a million compounds as a blind pipeline."),
            b: L("عندما تفشل الكيمياء شبه التجريبية (معادن، بعض الهيتيروسيكلات القاسية) دون فحص.", "When the semi-empirical chemistry fails (metals, some harsh heterocycles) without inspection."),
          },
        ],
      },
      {
        type: "why",
        id: "l6-ch-why",
        question: L(
          "لماذا يُحذر من Mulliken في MD؟",
          "Why is Mulliken discouraged for MD?",
        ),
        answer: L(
          "القيم تتقلب مع الأساس وقد لا تُعيد إنتاج الجهد خارج الجزيء، وهو ما يحتاجه coulomb بين ligand والجيب. RESP يستهدف ذلك الجهد. Mulliken قد يبقى تشخيصاً تعليمياً لا مصدراً لشحنات إنتاج.",
          "Values swing with basis and may not reproduce the potential outside the molecule, which is what pocket Coulomb needs. RESP targets that potential. Mulliken may remain an educational diagnostic, not a source of production charges.",
        ),
      },
      {
        type: "callout",
        id: "l6-ch-lim",
        kind: "limitation",
        title: L("HF/6-31G* مع RESP تقليد اتساق لا قمة دقة", "HF/6-31G* with RESP is a consistency tradition, not peak accuracy"),
        body: L(
          "البروتوكول الكلاسيكي يُبالغ في القطبية عمداً ليتوافق مع TIP3P في كثير من أدبيات AMBER. استبداله بDFT حديث دون إعادة نظر في الحقل يُكسر الاتساق. لا تُحدّث الطريقة لأن اسمها أحدث فقط.",
          "The classical protocol overpolarizes on purpose to work with TIP3P in much AMBER literature. Replacing it with a modern DFT without revisiting the field breaks consistency. Do not update the method only because the name is newer.",
        ),
      },
      {
        type: "whatif",
        id: "l6-ch-whatif",
        scenario: L(
          "ماذا لو حسبتَ RESP على هيئة واحدة ثم استخدمت الشحنات لمسار يزور هيئات بعيدة؟",
          "What if you compute RESP on one conformer then use the charges for a trajectory that visits distant conformers?",
        ),
        consequence: L(
          "الشحنة الثابتة لا تتبع الكثافة. في ligands شديدة الاستقطاب قد تحتاج متوسط هيئات أو حقلاً قابلاً للاستقطاب. على الأقل اختبر حساسية الشحنة لهيئتين.",
          "Fixed charge does not follow density. For highly polarizable ligands you may need a conformer average or a polarizable field. At least test charge sensitivity on two conformers.",
        ),
      },
    ],
    ["l6-coulomb", "l6-ligandff", "l7-geom", "l7-hf-dft"],
  ),

  expand(
    "l6-limits",
    [
      L(
        "تعداد ما لا تفعله الميكانيكا الجزيئية: كسر روابط، استقطاب ما لم يُطلب، إلكترونات صريحة.",
        "List what molecular mechanics does not do: break bonds, polarize unless asked, explicit electrons.",
      ),
      L(
        "تصميم اختبار يكشف أن النتيجة أثر حد MM لا أثر كيمياء حيوية.",
        "Design a test that shows a result is an MM-limit artefact, not biochemistry.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l6-lm-intro",
        title: L("MM لغة مفيدة بلكنة ثقيلة", "MM is a useful language with a thick accent"),
        body: L(
          "نجحت لأنها رخيصة وتُعيد إنتاج كثير من الهندسة السائلة والبروتينية. تفشل عندما تكون القصة إلكترونية: تفاعل تساهمي، نقل شحنة، طيف، معدن ذو حالات تأكسد، نفق بروتون. الاستقطاب يمكن شراؤه بحقول polarizable بتكلفة وتعقيد. الصدق أن تُطابق الأداة السؤال.",
          "It succeeds because it is cheap and reproduces much liquid and protein geometry. It fails when the story is electronic: covalent reaction, charge transfer, spectroscopy, a metal with oxidation states, proton tunneling. Polarization can be bought with polarizable fields at cost and complexity. Honesty is matching tool to question.",
        ),
      },
      {
        type: "list",
        id: "l6-lm-not",
        title: L("لا تستخدم MM وحدها حين", "Do not use MM alone when"),
        ordered: true,
        items: [
          L("الآلية تكسر رابطة أو تُكوّنها.", "The mechanism breaks or makes a bond."),
          L("الفرق بين نظيرين إلكتروني (هالوجين بوند دقيق، σ-hole) والحقل لا يُعلنه.", "The analogue difference is electronic (subtle halogen bond, σ-hole) and the field does not encode it."),
          L("المعدن يُغيّر تناسقه كجزء من الوظيفة.", "The metal changes coordination as part of function."),
          L("تحتاج طيفاً أو كثافة أو MEP حقيقياً.", "You need a spectrum, a density, or a real MEP."),
        ],
      },
      {
        type: "why",
        id: "l6-lm-why",
        question: L(
          "كيف تكتشف أن «الارتباط القوي» أثر شحنات ثابتة في فراغ؟",
          "How do you detect that “tight binding” is an artefact of fixed charges in vacuum?",
        ),
        answer: L(
          "أضف ماءً صريحاً أو نموذجاً ضمنياً؛ إن انهار الجسر الملحي أو انعكس الترتيب فأنت كنت ترى coulomb غير مُغربل. كرّر بشحنة بروتنة بديلة. إن تقلب كل شيء، فالادعاء ليس متيناً.",
          "Add explicit water or an implicit model; if the salt bridge collapses or ranking flips, you were seeing unscreened Coulomb. Repeat with an alternate protonation. If everything flips, the claim is not robust.",
        ),
      },
      {
        type: "callout",
        id: "l6-lm-warn",
        kind: "warning",
        title: L("مسار جميل لا يُشرعن الفيزياء الناقصة", "A pretty trajectory does not license missing physics"),
        body: L(
          "MD مستقر على سطح خاطئ يظل خاطئاً. الجودة التقنية (2 fs، PME، اتزان كثافة) ضرورية وغير كافية.",
          "Stable MD on the wrong surface is still wrong. Technical quality (2 fs, PME, density equilibration) is necessary and not sufficient.",
        ),
      },
      {
        type: "whatif",
        id: "l6-lm-whatif",
        scenario: L(
          "ماذا لو درستَ مثبطاً تساهمياً بـ MM وفسّرت المسافة إلى Cys كـ «ارتباط تساهمي»؟",
          "What if you study a covalent inhibitor with MM and interpret the distance to Cys as “covalent binding”?",
        ),
        consequence: L(
          "الحقل لن يُكوّن الرابطة. المسافة القصيرة اصطدام أو قيد وهمي. استخدم نماذج تساهمية أو QM/MM أو docking تساهمي مصمم لذلك السؤال.",
          "The field will not form the bond. A short distance is clash or a fake restraint. Use covalent models, QM/MM, or covalent docking built for that question.",
        ),
      },
    ],
    ["l6-etotal", "l7-when", "l7-qmmm", "l0-limits"],
  ),

  expand(
    "l7-schrodinger",
    [
      L(
        "شرح مفهومي لمعادلة شرودنغر: دالة موجية وكثافة، وما الذي تعنيه طاقة إلكترونية لمصمم دواء.",
        "Explain the Schrödinger equation conceptually: wavefunction and density, and what an electronic energy means to a drug designer.",
      ),
      L(
        "معرفة أن حلها الكامل لجيب بروتيني غير وارد، وأن التقريب هو العلم.",
        "Know that a full solution for a protein pocket is not on the table, and that the approximation is the science.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l7-sc-intro",
        title: L("الإلكترون ليس كرة MM", "An electron is not an MM bead"),
        body: L(
          "معادلة شرودنغر تربط طاقة بنظام عبر عامل هاملتوني ودالة موجية ψ. |ψ|² كثافة احتمال. للكيمياء الجزيئية نهتم بالحالة الإلكترونية عند نوى شبه ثابتة (Born–Oppenheimer). الناتج طاقة وهندسة وكثافة يمكن أن تُشتق منها شحنات وMEP. الجيب الكامل بأعداد إلكترونات هائلة لا يُحل كما في كتاب السنة الأولى.",
          "The Schrödinger equation ties energy to a system through a Hamiltonian operator and a wavefunction ψ. |ψ|² is probability density. Molecular chemistry cares about the electronic state with nuclei approximately fixed (Born–Oppenheimer). The output is energy, geometry, and a density from which charges and MEP can be derived. A full pocket with enormous electron counts is not solved as in a first-year textbook.",
        ),
      },
      {
        type: "equation",
        id: "l7-sc-eq",
        latex: String.raw`\hat{H}\psi = E\psi`,
        name: L("شرودنغر الزمنية المستقلة (مفهومياً)", "Time-independent Schrödinger (conceptually)"),
        meaning: L(
          "الهاملتوني يحتوي طاقة حركية للإلكترونات وتفاعلات كولوم بين إلكترونات ونوى.",
          "The Hamiltonian contains electronic kinetic energy and Coulomb interactions among electrons and nuclei.",
        ),
        variables: [
          { symbol: "Ĥ", name: L("عامل الطاقة", "Energy operator") },
          { symbol: "ψ", name: L("الدالة الموجية", "Wavefunction") },
          { symbol: "E", name: L("طاقة الحالة", "Energy of the state") },
        ],
        interpretation: L(
          "لا تُحل ψ للجيب كما تُحل لذرة هيدروجين. HF وDFT وsemi-empirical طبقات تقريب.",
          "ψ is not solved for a pocket the way it is for a hydrogen atom. HF, DFT, and semi-empirical methods are layers of approximation.",
        ),
        application: L(
          "عندما يقول أحدهم «حسبنا QM»، اسأل: أي هاملتوني تقريبي، أي أساس، أي هيئة نوى؟",
          "When someone says “we ran QM”, ask: which approximate Hamiltonian, which basis, which nuclear geometry?",
        ),
      },
      {
        type: "why",
        id: "l7-sc-why",
        question: L(
          "لماذا يهم Born–Oppenheimer المصمم؟",
          "Why does Born–Oppenheimer matter to a designer?",
        ),
        answer: L(
          "نُحرّك النوى على سطح طاقة إلكتروني. إن اقتربت سطوح (اقتران إلكتروني) — كما في بعض الكيمياء الضوئية أو نقاط تقاطع — فالفرض ينهار. معظم تصميم ligands أرضي الحالة يبقى ضمن الفرض.",
          "We move nuclei on an electronic energy surface. If surfaces approach (electronic coupling) — photochemistry or crossing points — the assumption fails. Most ground-state ligand design stays inside the assumption.",
        ),
      },
      {
        type: "callout",
        id: "l7-sc-lim",
        kind: "limitation",
        title: L("QM على ligand في الفراغ ليس طاقة ارتباط", "Vacuum QM on a ligand is not binding energy"),
        body: L(
          "حتى طاقة دقيقة إلكترونياً لligand حر لا تتضمن الجيب والإنتروبي والمذيب كما يجب. QM خطوة تمثيل (شحنات، هندسة، تفاعل موضعي) لا سحر ΔG.",
          "Even an electronically accurate energy of a free ligand does not include pocket, entropy, and solvent as required. QM is a representation step (charges, geometry, local reaction), not ΔG magic.",
        ),
      },
      {
        type: "whatif",
        id: "l7-sc-whatif",
        scenario: L(
          "ماذا لو فسّرتَ فرق طاقة HF بين هيئتين في الغاز كفرق تعداد بولتزمان في الماء؟",
          "What if you interpret an HF energy gap between two gas-phase conformers as a Boltzmann population gap in water?",
        ),
        consequence: L(
          "قد ينعكس الترتيب بالإذابة. استخدم نموذجاً للمذيب أو هيئات من MD قبل أن تدّعي السكان.",
          "Solvation may invert the order. Use a solvent model or MD conformers before you claim populations.",
        ),
      },
    ],
    ["l7-hf-dft", "l7-when", "l6-charges", "l2-boltzmann"],
  ),

  expand(
    "l7-hf-dft",
    [
      L(
        "تفسير ماذا يعني عملياً اسم مثل B3LYP/6-31G*: دالية + أساس.",
        "Explain what a label such as B3LYP/6-31G* means in practice: functional + basis.",
      ),
      L(
        "التمييز بين HF وDFT وحدود كلٍّ لشحنات وهندسة ligand.",
        "Distinguish HF from DFT and the limits of each for ligand charges and geometry.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l7-hf-intro",
        title: L("الاسم عقد حساب", "The label is a computational contract"),
        body: L(
          "Hartree–Fock يُعامل تبادلاً تماماً تقريباً ويتجاهل جزءاً من الارتباط الإلكتروني؛ يُستخدم تقليدياً مع RESP. DFT يُدخل ارتباطاً عبر دالية للكثافة؛ B3LYP دالية هجينة شائعة تاريخياً. 6-31G* أساس من نوع Pople مع استقطاب على الذرات الثقيلة: رخيص ومحدود، لا «مستوى الحقيقة». الأساس الأضعف يُخطئ الكثافة البعيدة التي تُغذي MEP والشحنات.",
          "Hartree–Fock treats exchange essentially exactly in its approximation and misses part of electron correlation; it is used classically with RESP. DFT folds correlation into a density functional; B3LYP is a historically common hybrid. 6-31G* is a Pople-style basis with polarization on heavy atoms: cheap and limited, not “ground truth”. A weaker basis misdraws the far density that feeds MEP and charges.",
        ),
      },
      {
        type: "list",
        id: "l7-hf-read",
        title: L("كيف تقرأ سطر طريقة", "How to read a method line"),
        items: [
          L("قبل الشرطة: الدالية أو HF.", "Before the slash: the functional or HF."),
          L("بعدها: الأساس. * أو (d) استقطاب؛ + دوال منتشرة للشحنات السالبة.", "After: the basis. * or (d) polarization; + diffuse functions for anions."),
          L("قد يُذكر مذيب ضمني (PCM/SMD) — قرار فيزيائي لا تجميل.", "An implicit solvent (PCM/SMD) may be named — a physics decision, not cosmetics."),
        ],
      },
      {
        type: "why",
        id: "l7-hf-why",
        question: L(
          "لماذا ما زال HF/6-31G* يظهر في تحضير AMBER؟",
          "Why does HF/6-31G* still appear in AMBER prep?",
        ),
        answer: L(
          "الاتساق التاريخي مع شحنات رُوّضت لتُبالغ قليلاً في القطبية مع TIP3P. ليس لأنه أفضل كيمياء كمومية متاحة اليوم. تغييره دون إعادة الحقل خلط أجيال.",
          "Historical consistency with charges trained to be slightly overpolarized with TIP3P. Not because it is the best quantum chemistry available today. Changing it without revisiting the field mixes generations.",
        ),
      },
      {
        type: "callout",
        id: "l7-hf-lim",
        kind: "limitation",
        title: L("B3LYP ليس حَكَم π-stacking", "B3LYP is not a referee of π-stacking"),
        body: L(
          "داليات شائعة قد تُضعف التشتت. إن كان سؤالك طاقة stacking أو vdW دقيقة، فأنت تحتاج تصحيحاً تشتتياً أو دالية أنسب. لا تأخذ اسم B3LYP كختم جودة عام.",
          "Common functionals can underbind dispersion. If your question is stacking or precise vdW, you need a dispersion correction or a more suitable functional. Do not treat the name B3LYP as a general quality stamp.",
        ),
      },
      {
        type: "whatif",
        id: "l7-hf-whatif",
        scenario: L(
          "ماذا لو حسبتَ أنion ligand بـ 6-31G* بلا دوال منتشرة ثم اشتققت RESP؟",
          "What if you compute a ligand anion with 6-31G* and no diffuse functions then derive RESP?",
        ),
        consequence: L(
          "الكثافة السالبة تُحبَس قرب النوى خطأً فتشوه الشحنات. أضف دوالاً منتشرة أو استخدم أساساً أنسب للأنيونات، أو قلّل الثقة في تلك الشحنات.",
          "The anionic density is wrongly confined near nuclei and charges distort. Add diffuse functions or a more suitable anionic basis, or lower trust in those charges.",
        ),
      },
      {
        type: "exercise",
        id: "l7-hf-ex",
        prompt: L(
          "فكّك العبارة «حسِبنا B3LYP/6-31G*//AM1» إلى خطوات: أي هندسة؟ أي طاقة؟",
          "Parse “we computed B3LYP/6-31G*//AM1” into steps: which geometry? which energy?",
        ),
        solution: L(
          "اصطلاح شائع: هندسة من AM1، وطاقة (نقطة واحدة) عند B3LYP/6-31G*. الهيئة ليست DFT. لا تدّعِ أن البنية «B3LYP».",
          "A common convention: geometry from AM1, and a single-point energy at B3LYP/6-31G*. The structure is not DFT. Do not claim the geometry is “B3LYP”.",
        ),
      },
    ],
    ["l7-schrodinger", "l7-mep", "l7-geom", "l6-charges"],
  ),

  expand(
    "l7-mep",
    [
      L(
        "قراءة HOMO وLUMO وMEP كخرائط للكثافة والكهرباء الساكنة تفيد التصميم لا كأرقام سحرية للارتباط.",
        "Read HOMO, LUMO, and MEP as maps of density and electrostatics that aid design, not as magic binding numbers.",
      ),
      L(
        "ربط السالب على MEP بمستقبل H-bond أو أنion، والحذر من الخرائط في الفراغ.",
        "Map MEP negative regions to H-bond acceptors or anions, and beware vacuum maps.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l7-mp-intro",
        title: L("الخريطة فرضية بصرية", "The map is a visual hypothesis"),
        body: L(
          "MEP يلون جهداً كهروستاتيكياً على سطح كثافة: أزرق/أحمر (حسب المقياس) يُشير إلى مناطق موجبة/سالبة. HOMO/LUMO مدارات حدية تهم كيمياء تفاعل (نواكلوفيل/إلكتروفيل) أكثر من docking كلاسيكي. المصمم يستخدم MEP ليسأل: أين يُشير زوج البيريدين؟ هل السلفوناميد سالب كما نظن بعد التأين؟",
          "MEP colours electrostatic potential on a density surface: blue/red (scale-dependent) flags positive/negative regions. HOMO/LUMO are frontier orbitals that matter more for reaction chemistry (nucleophile/electrophile) than for classical docking. A designer uses MEP to ask: where does the pyridine lone pair point? is the sulfonamide negative as we think after ionization?",
        ),
      },
      {
        type: "why",
        id: "l7-mp-why",
        question: L(
          "لماذا قد يُضلل MEP في الفراغ لligand يتأين في الماء؟",
          "Why can vacuum MEP mislead for a ligand that ionizes in water?",
        ),
        answer: L(
          "النوع المحسوب قد يكون المحايد بينما الجيب يرى أنion. الخريطة تتحدث عن جزيء آخر. احسب MEP للنوع الغالب عند pH العمل، ويفضّل بمذيب ضمني إن كان السؤال إذابة/قطبية.",
          "The computed species may be the neutral while the pocket sees the anion. The map talks about another molecule. Compute MEP for the majority species at working pH, preferably with implicit solvent if the question is solvation/polarity.",
        ),
      },
      {
        type: "callout",
        id: "l7-mp-lim",
        kind: "limitation",
        title: L("HOMO–LUMO gap ليس Kd", "A HOMO–LUMO gap is not Kd"),
        body: L(
          "ربط الفجوة بالقوة الدوائية بلا آلية تفاعل إلكتروني سرد زائف. استخدم المدارات لتفاعلات تساهمية أو تفسير طيف، لا لترتيب مثبطات كيناز غير تساهمية.",
          "Linking the gap to potency without an electronic reaction mechanism is a false narrative. Use orbitals for covalent reactivity or spectral interpretation, not to rank noncovalent kinase inhibitors.",
        ),
      },
      {
        type: "whatif",
        id: "l7-mp-whatif",
        scenario: L(
          "ماذا لو صمّمتَ على بقعة MEP سالبة كانت ناتج tautomer خاطئ؟",
          "What if you design to a negative MEP patch that came from the wrong tautomer?",
        ),
        consequence: L(
          "ستضع مانح بروتين حيث لا يوجد مستقبل في النوع الحقيقي. ابدأ بالـ tautomer/pKa ثم ارسم MEP.",
          "You will place a protein donor where the real species has no acceptor. Fix tautomer/pKa first, then paint MEP.",
        ),
      },
      {
        type: "exercise",
        id: "l7-mp-ex",
        prompt: L(
          "بيريدين مقابل فنيل في نفس الموضع. ماذا تتوقع على MEP قرب النتروجين مقابل CH؟",
          "Pyridine versus phenyl in the same place. What do you expect for MEP near nitrogen versus CH?",
        ),
        solution: L(
          "قرب N بقعة سالبة (زوج حر/كثافة) تصلح كمستقبل؛ قرب CH العطري جهد أقل سلبية أو موجب ضعيف. هذا اتجاه تعليمي يتفق مع استخدام البيريدين في hinge.",
          "Near N, a negative patch (lone pair/density) suitable as an acceptor; near aromatic CH, less negative or weakly positive potential. An educational trend consistent with pyridine as a hinge acceptor.",
        ),
      },
    ],
    ["l7-hf-dft", "l1-electronics", "l1-hetero", "l11-hotspot"],
  ),

  expand(
    "l7-when",
    [
      L(
        "تقرير متى QM مفيد في التصميم: شحنات، معادن، تساهمية، هندسة موضعية — لا فرز ملايين.",
        "Decide when QM is useful in design: charges, metals, covalency, local geometry — not screening millions.",
      ),
      L(
        "صياغة معيار «لا QM» لتجنب المسرح الحسابي.",
        "Write a “no QM” criterion to avoid computational theatre.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l7-wn-intro",
        title: L("الكم أداة غالية لسؤال إلكتروني", "Quantum is an expensive tool for an electronic question"),
        body: L(
          "QM يستحق حين يفشل تمثيل MM: اشتقاق RESP لسلسلة قصيرة، فحص هندسة تناسق معدن، تقدير حاجز خطوة تساهمية، أو MEP لنوع متأين. لا يستحق حين يكون السؤال ترتيب مكتبة بـ MW متشابه في جيب كلاسيكي جيد المياه. التكلفة ليست المال فقط بل إغراء تفسير زائد.",
          "QM is worth it when MM representation fails: RESP for a short series, checking metal coordination geometry, estimating a covalent-step barrier, or MEP of an ionized species. It is not worth it when the question is ranking a library of similar MW in a classical, well-watered pocket. The cost is not only money; it is the temptation to over-interpret.",
        ),
      },
      {
        type: "list",
        id: "l7-wn-yesno",
        title: L("نعم / لا تعليمية", "Educational yes / no"),
        items: [
          L("نعم: شحنات ligand النهائي قبل MD إنتاج.", "Yes: charges of the final ligand before production MD."),
          L("نعم: مقارنة حاجز تقريبي لنظيرين تساهميين بعد تعريف تفاعل واضح.", "Yes: approximate barrier comparison for two covalent analogues after defining a clear reaction."),
          L("لا: طاقة DFT لمعقد بروتين-ligand كامل كبديل ΔG.", "No: DFT energy of a full protein–ligand complex as a ΔG substitute."),
          L("لا: HOMO لكل مركبات الفرز كعمود ترتيب.", "No: HOMO of every screened compound as a ranking column."),
        ],
      },
      {
        type: "why",
        id: "l7-wn-why",
        question: L(
          "لماذا يفشل QM «الدقيق» على معقد ناقص المعاينة؟",
          "Why does “accurate” QM fail on an undersampled complex?",
        ),
        answer: L(
          "لأنك تحسب نقطة على هيئة قد تكون خاطئة. دقة إلكترونية على هندسة غير ذات صلة دقة للمشكلة الخطأ. عاين ثم احسب، أو احسب نموذجاً صغيراً بصدق حدوده.",
          "You compute a point on a possibly wrong geometry. Electronic accuracy on an irrelevant structure is accuracy on the wrong problem. Sample then compute, or compute a small model with honest limits.",
        ),
      },
      {
        type: "callout",
        id: "l7-wn-warn",
        kind: "warning",
        title: L("لا تفرز ملايين بـ DFT", "Do not screen millions with DFT"),
        body: L(
          "الحساب لا يكتمل، والخطأ من tautomer والهيئة أكبر من فرق الدالية. استخدم كيمياء معلوماتية وdocking بحذر، واحفظ QM للناجين.",
          "The calculation will not finish, and tautomer/pose error dwarfs functional differences. Use cheminformatics and cautious docking; save QM for survivors.",
        ),
      },
      {
        type: "whatif",
        id: "l7-wn-whatif",
        scenario: L(
          "ماذا لو أضفتَ عمود «طاقة QM» في جدول VS لأن المراجع طلبت «عمقاً»؟",
          "What if you add a “QM energy” column to a VS table because reviewers asked for “depth”?",
        ),
        consequence: L(
          "ستخلط مستويات خطأ وتوحي بترتيب فيزيائي غير موجود. ارفض العمود أو احصره على عدد صغير مع هيئة موثقة وسؤال إلكتروني صريح.",
          "You will mix error levels and imply a physical ranking that is not there. Refuse the column, or restrict it to a small set with a documented pose and an explicit electronic question.",
        ),
      },
    ],
    ["l7-geom", "l7-qmmm", "l6-limits", "l13-priority"],
  ),

  expand(
    "l7-geom",
    [
      L(
        "تنفيذ فكرة تحسين هندسة ligand وRESP قبل GAFF كسلسلة قرارات.",
        "Walk through ligand geometry optimization and RESP before GAFF as a decision chain.",
      ),
      L(
        "معرفة أن الحد الأدنى الغازي قد لا يكون bioactive، وأن تحسين QM لا يُلغي فحص التواء MM.",
        "Know that a gas-phase minimum may not be bioactive, and that QM optimization does not replace checking MM torsions.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l7-gm-intro",
        title: L("الشحنات على هيئة خاطئة شحنات لجزيء آخر", "Charges on the wrong conformer are charges for another molecule"),
        body: L(
          "سلسلة شائعة في عالم AMBER: ابنِ 3D، حسّن بـ QM (أو على الأقل بميدان جيد)، احسب ESP، اشتق RESP، ألبس GAFF. إن حُسّنت هيئة مطوية داخلياً في الغاز بينما bioactive مفتوحة، قد تُثبَّت شحنات تُفضّل الطيّ. الحل: هيئات متعددة، أو تحسين بمذيب ضمني، أو متوسط شحنات.",
          "A common AMBER-world chain: build 3D, optimize with QM (or at least a decent field), compute ESP, derive RESP, dress with GAFF. If you optimized a vacuum internally folded form while bioactive is open, you may freeze charges that prefer the fold. Fix: multiple conformers, implicit-solvent optimization, or charge averaging.",
        ),
      },
      {
        type: "steps",
        id: "l7-gm-chain",
        title: L("سلسلة قرارات تعليمية", "An educational decision chain"),
        items: [
          {
            title: L("النوع الكيميائي", "Chemical species"),
            body: L("tautomer والشحنة الصافية قبل أي تحسين.", "Tautomer and net charge before any optimization."),
          },
          {
            title: L("الهيئة", "Conformer"),
            body: L("لا تعتمد مولداً واحداً إن كان عدد الدورانات كبيراً.", "Do not trust a single generator if rotatable-bond count is high."),
          },
          {
            title: L("QM opt", "QM opt"),
            body: L("مستوى متسق مع بروتوكول الشحن؛ تحقق من ترددات إن ادّعيت حدّاً أدنى.", "A level consistent with the charge protocol; check frequencies if you claim a minimum."),
          },
          {
            title: L("RESP ثم GAFF", "RESP then GAFF"),
            body: L("ثم QC التواء وأميد ومستوى الشحنة الكلية.", "Then QC torsions, amide planarity, and total charge."),
          },
        ],
      },
      {
        type: "why",
        id: "l7-gm-why",
        question: L(
          "لماذا لا يكفي تحسين MM ثم RESP على تلك الهيئة؟",
          "Why is MM optimization then RESP on that geometry not always enough?",
        ),
        answer: L(
          "قد يكفي لكثير من ligands الصلبة. يفشل حين يُخطئ MM التواء π أو هندسة حول نتروجين. QM يُصلح الهندسة المحلية قبل أن تُقفل الشحنات. المبالغة: QM على كل مكتبة.",
          "It may suffice for many rigid ligands. It fails when MM misplaces a π torsion or nitrogen geometry. QM repairs local geometry before charges are locked. The exaggeration is QM on the whole library.",
        ),
      },
      {
        type: "callout",
        id: "l7-gm-lim",
        kind: "limitation",
        title: L("opt بدون ترددات قد يكون نقطة سرج", "Optimization without frequencies may be a saddle"),
        body: L(
          "إن ادّعيت «الهيئة الدنيا»، فأنت تحتاج عدم وجود تردد تخيلي في البروتوكول المناسب. لشحنات ligand دوائية غالباً يكفي حد عملي مع فحص بصري — لكن لا تكتب «global minimum» دون دليل.",
          "If you claim “the minimum”, you need no imaginary frequency in the appropriate protocol. For drug-ligand charges a practical stationary point plus visual checks often suffices — but do not write “global minimum” without evidence.",
        ),
      },
      {
        type: "whatif",
        id: "l7-gm-whatif",
        scenario: L(
          "ماذا لو حسّنتَ QM في الغاز ثم وجدتَ في MD التواءاً يزور 90° لأميد؟",
          "What if you QM-optimize in gas then find in MD a torsion visiting 90° at an amide?",
        ),
        consequence: L(
          "GAFF لا يحترم حاجز الأميد (إسناد)، أو القيود ناقصة. لا تلُم QM. أصلح bonded ثم أعد.",
          "GAFF is not honouring the amide barrier (assignment), or restraints are missing. Do not blame QM. Fix bonded terms and rerun.",
        ),
      },
    ],
    ["l6-charges", "l6-ligandff", "l7-hf-dft", "l1-conform"],
  ),

  expand(
    "l7-qmmm",
    [
      L(
        "تعريف QM/MM: منطقة إلكترونية مضمومة إلى حقل كلاسيكي، وحدّ الحدود كقرار علمي.",
        "Define QM/MM: an electronic region embedded in a classical field, with the boundary as a scientific decision.",
      ),
      L(
        "معرفة متى لا تُشغّل QM/MM: سؤال لا يحتاج إلكترونات، أو حد يقطع رابطة حرجة بلا علاج.",
        "Know when not to run QM/MM: a question that needs no electrons, or a boundary that cuts a critical bond without treatment.",
      ),
    ],
    [
      {
        type: "prose",
        id: "l7-qm-intro",
        title: L("الحد أهم من اسم الدالية", "The boundary matters more than the functional’s name"),
        body: L(
          "QM/MM يضع بقايا وligand (أو جزءاً) في QM والباقي في MM. التفاعل عبر حدود: شحنات MM تُقطّب QM (embedding)، وروابط مقطوعة تحتاج ذرات ربط أو مدارات حدود. إن قُطع أميد أو نُسي معدن خارج QM، فالدالية باهظة تحسب النظام الخطأ بدقة.",
          "QM/MM places residues and ligand (or a fragment) in QM and the rest in MM. Interaction crosses a boundary: MM charges polarize QM (embedding), and cut bonds need link atoms or boundary orbitals. If you cut an amide or leave a metal outside QM, an expensive functional accurately computes the wrong system.",
        ),
      },
      {
        type: "list",
        id: "l7-qm-boundary",
        title: L("قرارات الحد", "Boundary decisions"),
        items: [
          L("كل ذرات التناسق حول معدن داخل QM.", "All coordinating atoms around a metal inside QM."),
          L("لا تقطع روابط قطبية حرجة إن أمكن؛ اقطع C–C أليفاتياً بعيداً.", "Do not cut critical polar bonds if possible; cut remote aliphatic C–C."),
          L("اختبر تقارب المنطقة: إضافة بقايا هل تُحرّك النتيجة؟", "Test region convergence: does adding residues move the result?"),
          L("المذيب: ماء QM محلي مقابل MM؛ الجسور المائية قد تحتاج الدخول.", "Solvent: local QM water versus MM; bridging waters may need to enter."),
        ],
      },
      {
        type: "why",
        id: "l7-qm-why",
        question: L(
          "لماذا لا يحل QM/MM محل طاقة حرة جيدة لسؤال ΔG غير تساهمي؟",
          "Why does QM/MM not replace a good free-energy method for a noncovalent ΔG question?",
        ),
        answer: L(
          "لأن عنق الزجاجة غالباً معاينة وإنتروبي لا إلكترونات. نقطة QM/MM على هيئة واحدة تُعيد مشكلة الالتحام بدقة أعلى. إن لم يكن هناك حدث إلكتروني، ادفع ثمن المعاينة لا ثمن الدالية.",
          "The bottleneck is usually sampling and entropy, not electrons. One QM/MM point on one pose repeats the docking problem at higher electronic resolution. If there is no electronic event, pay for sampling, not for the functional.",
        ),
      },
      {
        type: "callout",
        id: "l7-qm-warn",
        kind: "warning",
        title: L("متى لا تستخدم QM/MM", "When not to use QM/MM"),
        body: L(
          "لا تستخدمه لإبهار المناقشة على مثبط غير تساهمي بلا معدن وبلا سؤال كثافة. ولا تستخدمه إذا كنت لا تستطيع تبرير الحد. الأداة من دون حد مُبرر مسرح.",
          "Do not use it to impress a viva on a noncovalent, metal-free inhibitor with no density question. And do not use it if you cannot justify the boundary. A tool without a justified boundary is theatre.",
        ),
      },
      {
        type: "whatif",
        id: "l7-qm-whatif",
        scenario: L(
          "ماذا لو وضعتَ ligand في QM وتركتَ Asp الجسري في MM بشحنة ثابتة؟",
          "What if you put the ligand in QM and leave a bridging Asp in MM with a fixed charge?",
        ),
        consequence: L(
          "لن يتقاسم الطرفان كثافة في الجسر الملحي/H-bond. قد تُخطئ البروتنة ونقل الشحنة. أدخل طرفي التفاعل في QM أو اعترف أن الجسر كلاسيكي.",
          "The two sides will not share density in the salt bridge/H-bond. Protonation and charge transfer may be wrong. Bring both partners into QM, or admit the bridge is classical.",
        ),
      },
    ],
    ["l7-when", "l6-limits", "l25-covalent", "l7-hf-dft"],
  ),
];
