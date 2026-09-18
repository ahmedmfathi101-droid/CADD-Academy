import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/app-shell";
import { Card, CardDesc, CardTitle } from "@/components/ui/card";
import { labs } from "@/lib/academy/content/knowledge-bases";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/labs/")({
  component: LabsIndex,
});

function LabsIndex() {
  const lang = useAcademy((s) => s.lang);
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        kicker={t(ui.labs, lang)}
        title={t(ui.labs, lang)}
        desc={
          lang === "ar"
            ? "كل أمر قرار فيزيائي. لا برمجية سحرية."
            : "Every command is a physics decision. No magical software."
        }
      />
      <div className="grid gap-3">
        {(labs ?? []).map((lab) => (
          <Link key={lab.id} to="/labs/$labId" params={{ labId: lab.id }}>
            <Card className="hover:border-border-strong">
              <p className="font-mono text-xs text-signal">{lab.software}</p>
              <CardTitle className="mt-1">{t(lab.title, lang)}</CardTitle>
              <CardDesc>{t(lab.summary, lang)}</CardDesc>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
