import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/app-shell";
import { Card, CardDesc, CardTitle } from "@/components/ui/card";
import { quizzes } from "@/lib/academy/content/knowledge-bases";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/exam")({
  component: ExamPage,
});

const exams = [
  { id: "e1", quiz: "q-l0", title: { ar: "المستوى 1 — أسس", en: "Level 1 — Foundations" } },
  { id: "e2", quiz: "q-l8", title: { ar: "المستوى 2 — ممارس التحام", en: "Level 2 — Docking practitioner" } },
  { id: "e3", quiz: "q-l9", title: { ar: "المستوى 3 — ممارس MD", en: "Level 3 — MD practitioner" } },
  { id: "e4", quiz: "q-l10", title: { ar: "المستوى 4 — مصمم دوائي حاسوبي", en: "Level 4 — Computational drug designer" } },
  { id: "e5", quiz: "q-l13", title: { ar: "المستوى 5 — باحث", en: "Level 5 — Researcher" } },
  { id: "e6", quiz: "q-l16", title: { ar: "المستوى 6 — باحث متقدم", en: "Level 6 — Advanced researcher" } },
];

function ExamPage() {
  const lang = useAcademy((s) => s.lang);
  const scores = useAcademy((s) => s.quizScores);
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <PageHeader
        title={t(ui.exam, lang)}
        desc={
          lang === "ar"
            ? "امتحانات تراكمية. الدفاع الشفهي في محاكاة المناقشة. لا تلميحات هنا."
            : "Cumulative exams. Oral defense lives in the viva. No hints here."
        }
      />
      {exams.map((e) => {
        const q = quizzes.find((x) => x.id === e.quiz);
        const s = scores[e.quiz];
        return (
          <Link key={e.id} to="/quiz/$quizId" params={{ quizId: e.quiz }}>
            <Card className="hover:border-border-strong">
              <CardTitle>{t(e.title, lang)}</CardTitle>
              <CardDesc>
                {q ? t(q.description, lang) : ""}
                {s ? ` · ${s.score}/${s.total}` : ""}
              </CardDesc>
            </Card>
          </Link>
        );
      })}
      <Link to="/viva" className="block text-signal hover:underline">
        {lang === "ar" ? "المستوى 7 — دفاع الدكتوراه (محاكاة شفهية)" : "Level 7 — PhD defense (oral simulator)"}
      </Link>
    </div>
  );
}
