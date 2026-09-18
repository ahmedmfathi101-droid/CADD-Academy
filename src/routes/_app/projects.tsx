import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card, CardDesc, CardTitle } from "@/components/ui/card";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  const lang = useAcademy((s) => s.lang);
  const projects = useAcademy((s) => s.projects);
  const toggle = useAcademy((s) => s.toggleProjectStep);
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <PageHeader title={t(ui.projects, lang)} />
      <Button asChild>
        <Link to="/builder">{t(ui.builder, lang)}</Link>
      </Button>
      {projects.length === 0 && <p className="text-muted">{t(ui.noResults, lang)}</p>}
      {projects.map((p) => (
        <Card key={p.id} className="space-y-3">
          <CardTitle>{p.target}</CardTitle>
          <CardDesc>
            {p.disease} · {p.ligandClass}
          </CardDesc>
          <p className="text-sm">{p.objective}</p>
          <ul className="space-y-2">
            {p.steps.map((s, i) => (
              <li key={i}>
                <label className="flex items-start gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="mt-1 size-4 accent-signal"
                    checked={s.done}
                    onChange={() => toggle(p.id, i)}
                  />
                  <span>
                    <span className={s.done ? "text-subtle line-through" : ""}>{t(s.title, lang)}</span>
                    <span className="mt-1 block text-xs text-muted">{t(s.why, lang)}</span>
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  );
}
