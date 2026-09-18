import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/app-shell";
import { MolViewer } from "@/components/mol/viewer";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { caseStudies } from "@/lib/academy/content/knowledge-bases";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/cases")({
  component: CasesPage,
});

function CasesPage() {
  const lang = useAcademy((s) => s.lang);
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader title={t(ui.cases, lang)} />
      {(caseStudies ?? []).map((c) => (
        <Card key={c.id} className="space-y-3">
          <Badge>{t(c.targetClass, lang)}</Badge>
          <CardTitle>{t(c.title, lang)}</CardTitle>
          <p className="text-sm text-warn">{t(c.caveat, lang)}</p>
          {(
            [
              ["biology", c.biology],
              ["structure", c.structure],
              ["pocket", c.pocket],
              ["design", c.design],
              ["docking", c.docking],
              ["md", c.md],
              ["energy", c.energy],
              ["optimization", c.optimization],
            ] as const
          ).map(([k, v]) => (
            <p key={k} className="text-sm leading-relaxed">
              <span className="text-subtle">{k}: </span>
              {t(v, lang)}
            </p>
          ))}
          {c.pdb && <MolViewer pdb={c.pdb} height={280} />}
        </Card>
      ))}
    </div>
  );
}
