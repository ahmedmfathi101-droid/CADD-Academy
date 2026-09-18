import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card, CardDesc, CardTitle } from "@/components/ui/card";
import { lessonById, paths } from "@/lib/academy/catalog";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/paths")({
  component: PathsPage,
});

function PathsPage() {
  const lang = useAcademy((s) => s.lang);
  const pathId = useAcademy((s) => s.pathId);
  const setPath = useAcademy((s) => s.setPath);
  const completed = useAcademy((s) => s.completedLessons);
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <PageHeader title={t(ui.paths, lang)} />
      {paths.map((p) => {
        const d = p.lessonIds.filter((id) => completed[id]).length;
        return (
          <Card key={p.id} className="space-y-3">
            <CardTitle>{t(p.title, lang)}</CardTitle>
            <CardDesc>{t(p.summary, lang)}</CardDesc>
            <p className="text-xs tabular-nums text-subtle">
              {d}/{p.lessonIds.length}
            </p>
            <Button size="sm" variant={pathId === p.id ? "default" : "secondary"} onClick={() => setPath(p.id)}>
              {t(ui.start, lang)}
            </Button>
            <ul className="space-y-1 text-sm">
              {p.lessonIds.map((id) => (
                <li key={id}>
                  <Link to="/lesson/$lessonId" params={{ lessonId: id }} className="text-signal hover:underline">
                    {lessonById[id] ? t(lessonById[id].title, lang) : id}
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
        );
      })}
    </div>
  );
}
