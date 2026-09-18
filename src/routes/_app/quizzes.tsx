import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardDesc, CardTitle } from "@/components/ui/card";
import { quizzes } from "@/lib/academy/content/knowledge-bases";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/quizzes")({
  component: QuizzesPage,
});

function QuizzesPage() {
  const lang = useAcademy((s) => s.lang);
  const scores = useAcademy((s) => s.quizScores);
  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title={t(ui.quizzes, lang)} />
      <div className="grid gap-3">
        {(quizzes ?? []).map((q) => {
          const s = scores[q.id];
          return (
            <Link key={q.id} to="/quiz/$quizId" params={{ quizId: q.id }}>
              <Card className="hover:border-border-strong">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <CardTitle>{t(q.title, lang)}</CardTitle>
                    <CardDesc>{t(q.description, lang)}</CardDesc>
                  </div>
                  {s && (
                    <Badge tone="signal">
                      {s.score}/{s.total}
                    </Badge>
                  )}
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
