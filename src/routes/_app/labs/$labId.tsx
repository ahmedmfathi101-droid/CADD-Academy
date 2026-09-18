import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { labs } from "@/lib/academy/content/knowledge-bases";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/labs/$labId")({
  component: LabPage,
});

function LabPage() {
  const { labId } = Route.useParams();
  const lang = useAcademy((s) => s.lang);
  const lab = labs.find((l) => l.id === labId);
  if (!lab) return <p className="text-muted">{t(ui.noResults, lang)}</p>;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader kicker={lab.software} title={t(lab.title, lang)} desc={t(lab.summary, lang)} />
      {lab.steps.map((s, i) => (
        <Card key={s.id} className="space-y-3">
          <p className="font-mono text-xs text-signal">
            {i + 1} / {lab.steps.length}
          </p>
          <h2 className="font-display text-xl">{t(s.title, lang)}</h2>
          {s.command && (
            <pre className="overflow-x-auto rounded-sm bg-bg p-3 font-mono text-sm text-accent" dir="ltr">
              {s.command}
            </pre>
          )}
          <p className="text-sm leading-relaxed">{t(s.body, lang)}</p>
          <p className="text-sm text-signal">
            {t(ui.why, lang)}: {t(s.why, lang)}
          </p>
          {s.whatIf && (
            <p className="text-sm text-warn">
              {t(ui.whatIf, lang)}: {t(s.whatIf, lang)}
            </p>
          )}
          {s.errors && (
            <p className="text-sm text-muted">
              {t(ui.commonErrors, lang)}: {t(s.errors, lang)}
            </p>
          )}
        </Card>
      ))}
    </div>
  );
}
