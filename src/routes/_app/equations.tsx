import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { KatexBlock } from "@/components/katex-block";
import { PageHeader } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { equations } from "@/lib/academy/content/knowledge-bases";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/equations")({
  component: EquationsPage,
});

function EquationsPage() {
  const lang = useAcademy((s) => s.lang);
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      (equations ?? []).filter((e) =>
        `${t(e.name, lang)} ${e.latex}`.toLowerCase().includes(q.toLowerCase()),
      ),
    [q, lang],
  );

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader kicker="KaTeX" title={t(ui.equations, lang)} />
      <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t(ui.search, lang)} />
      {list.map((eq) => (
        <Card key={eq.id} className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.16em] text-signal">{t(eq.name, lang)}</p>
          <KatexBlock latex={eq.latex} />
          <p className="text-sm text-muted">{t(eq.meaning, lang)}</p>
          <ul className="space-y-1 text-sm">
            {(eq.variables ?? []).map((v) => (
              <li key={v.symbol}>
                <span className="font-mono text-signal">{v.symbol}</span>{" "}
                <span className="text-muted">
                  {t(v.name, lang)}
                  {v.unit ? ` · ${t(v.unit, lang)}` : ""}
                </span>
              </li>
            ))}
          </ul>
          <p className="text-sm">{t(eq.interpretation, lang)}</p>
          <p className="text-sm text-muted">
            {t(ui.application, lang)}: {t(eq.application, lang)}
          </p>
        </Card>
      ))}
    </div>
  );
}
