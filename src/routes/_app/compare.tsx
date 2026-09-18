import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { comparisons } from "@/lib/academy/content/knowledge-bases";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/compare")({
  component: ComparePage,
});

function ComparePage() {
  const lang = useAcademy((s) => s.lang);
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader title={t(ui.compare, lang)} />
      {(comparisons ?? []).map((c) => (
        <Card key={c.id} className="overflow-x-auto">
          <table className="w-full min-w-lg text-sm">
            <thead>
              <tr className="border-b border-border text-muted">
                <th className="py-2 pe-3" />
                <th className="py-2 pe-3 text-start">{t(c.a, lang)}</th>
                <th className="py-2 text-start">{t(c.b, lang)}</th>
              </tr>
            </thead>
            <tbody>
              {c.rows.map((r, i) => (
                <tr key={i} className="border-b border-border/50 align-top">
                  <td className="py-2 pe-3 text-subtle">{t(r.dim, lang)}</td>
                  <td className="py-2 pe-3">{t(r.a, lang)}</td>
                  <td className="py-2">{t(r.b, lang)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      ))}
    </div>
  );
}
