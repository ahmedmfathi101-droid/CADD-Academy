import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardDesc, CardTitle } from "@/components/ui/card";
import { lessonById, levelById } from "@/lib/academy/catalog";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/learn/$levelId")({
  component: LevelPage,
});

function LevelPage() {
  const { levelId } = Route.useParams();
  const lang = useAcademy((s) => s.lang);
  const completed = useAcademy((s) => s.completedLessons);
  const lv = levelById[levelId];

  if (!lv) {
    return <p className="text-muted">{t(ui.noResults, lang)}</p>;
  }

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader kicker={lv.code} title={t(lv.title, lang)} desc={t(lv.summary, lang)} />
      {lv.modules.map((mod) => (
        <section key={mod.id} className="mb-8">
          <h2 className="mb-3 font-display text-2xl">{t(mod.title, lang)}</h2>
          <p className="mb-4 text-sm text-muted">{t(mod.summary, lang)}</p>
          <div className="grid gap-3">
            {mod.lessonIds.map((id) => {
              const l = lessonById[id];
              if (!l) return null;
              const done = Boolean(completed[id]);
              return (
                <Link key={id} to="/lesson/$lessonId" params={{ lessonId: id }}>
                  <Card className="flex items-start justify-between gap-4 hover:border-border-strong">
                    <div>
                      <CardTitle className="text-base">{t(l.title, lang)}</CardTitle>
                      <CardDesc>{t(l.summary, lang)}</CardDesc>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-2">
                      <Badge tone={done ? "ok" : "default"}>
                        {done ? t(ui.completed, lang) : `${l.durationMin} ${t(ui.minutes, lang)}`}
                      </Badge>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
