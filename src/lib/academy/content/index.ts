import { lessonById, lessons as metas } from "@/lib/academy/catalog";
import type { Lesson } from "@/lib/academy/types";
import { expand, L } from "./helpers";
import { lessons as lessonsL0L3 } from "./lessons-l0-l3";
import { lessons as lessonsL4L7 } from "./lessons-l4-l7";
import { lessons as lessonsL8 } from "./lessons-l8";
import { lessons as lessonsL9 } from "./lessons-l9";
import { lessons as lessonsL10 } from "./lessons-l10";
import { lessons as lessonsL11 } from "./lessons-l11-l16";
import { lessons as lessonsL17 } from "./lessons-l17-l26";
import { lessons as lessonsL18 } from "./lessons-l18-l26";

const bank: Record<string, Lesson> = {};

function ingest(list: Lesson[]) {
  for (const lesson of list) bank[lesson.id] = lesson;
}

ingest(lessonsL0L3);
ingest(lessonsL4L7);
ingest(lessonsL8);
ingest(lessonsL9);
ingest(lessonsL10);
ingest(lessonsL11);
ingest(lessonsL18);
ingest(lessonsL17);

function fallback(id: string): Lesson | undefined {
  const meta = lessonById[id];
  if (!meta) return undefined;
  return expand(
    id,
    [
      L(
        `أن تشرح مفهوم «${meta.title.ar}» بلغة كيميائية دقيقة.`,
        `Explain “${meta.title.en}” in precise chemical language.`,
      ),
      L("أن تذكر الافتراضات ومتى تفشل الطريقة.", "State the assumptions and when the method fails."),
    ],
    [
      {
        type: "prose",
        id: "intro",
        title: meta.title,
        body: L(
          `${meta.summary.ar}\n\nهذا الدرس جزء من المنهج المتدرج للأكاديمية. اقرأ ببطء، واسأل عند كل خطوة: ما الافتراض؟ ما الذي لا نقيسه؟ كيف سأُخطَّأ في المناقشة إن ادّعيت أكثر من الدليل؟`,
          `${meta.summary.en}\n\nThis lesson sits in a staged curriculum. Read slowly and ask at every step: what is assumed? what is not measured? how would a viva examiner punish overclaim?`,
        ),
      },
      {
        type: "callout",
        id: "principle",
        kind: "warning",
        title: L("مبدأ الباحث", "Researcher principle"),
        body: L(
          "الحساب يُنتج نماذج لا حقائق. الدرجة، مسار RMSD، أو تنبؤ ADMET ليست دواءً ولا برهاناً تجريبياً.",
          "Computation yields models, not facts. A score, an RMSD trace, or an ADMET prediction is neither a drug nor experimental proof.",
        ),
      },
      {
        type: "why",
        id: "why",
        question: L("لماذا هذا الموضوع قبل أن تضغط زر برمجية؟", "Why this topic before you click a software button?"),
        answer: L(
          "لأن كل معلمة في Vina أو GROMACS تُخفي فرضية فيزيائية. إن لم تعرف الفرضية فأنت تشغّل طقساً لا تجربة.",
          "Because every Vina or GROMACS parameter hides a physical hypothesis. Without it you are running a ritual, not an experiment.",
        ),
      },
      {
        type: "whatif",
        id: "whatif",
        scenario: L("ماذا لو تجاهلت المتطلبات السابقة؟", "What if you skip the prerequisites?"),
        consequence: L(
          "ستحفظ أوامر وتسيء تفسير أرقام. هذا أخطر من الجهل الصريح لأنه يبدو كخبرة.",
          "You will memorize commands and misread numbers. That is more dangerous than honest ignorance because it looks like expertise.",
        ),
      },
      {
        type: "exercise",
        id: "ex",
        prompt: L(
          "اكتب في دفتر البحث: (1) فرضية هذا الموضوع، (2) ما الذي سيُفنّدها، (3) ما الدليل التجريبي الذي لا يستطيع الحساب أن يستبدله.",
          "Write in your notebook: (1) the hypothesis of this topic, (2) what would falsify it, (3) which experimental evidence computation cannot replace.",
        ),
        solution: L(
          "إن لم تستطع كتابة معيار فشل فأنت لا تملك فرضية علمية بعد.",
          "If you cannot write a failure criterion, you do not yet have a scientific hypothesis.",
        ),
      },
    ],
    meta.prerequisites,
  );
}

export function getLesson(id: string): Lesson | undefined {
  return bank[id] ?? fallback(id);
}

export function getLevelLessons(levelId: string): Lesson[] {
  return metas
    .filter((m) => m.levelId === levelId)
    .map((m) => getLesson(m.id))
    .filter((x): x is Lesson => Boolean(x));
}

export function hasFullContent(id: string): boolean {
  return Boolean(bank[id]);
}

export { bank };
