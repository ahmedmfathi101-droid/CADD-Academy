import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { commands } from "@/lib/academy/content/knowledge-bases";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/commands")({
  component: CommandsPage,
});

function CommandsPage() {
  const lang = useAcademy((s) => s.lang);
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      (commands ?? []).filter((c) =>
        `${c.command} ${c.software} ${t(c.purpose, lang)}`.toLowerCase().includes(q.toLowerCase()),
      ),
    [q, lang],
  );
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <PageHeader title={t(ui.commands, lang)} />
      <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t(ui.search, lang)} />
      {list.map((c) => (
        <Card key={c.id} className="space-y-2">
          <p className="text-xs text-signal">{c.software}</p>
          <pre className="overflow-x-auto rounded-sm bg-bg p-3 font-mono text-sm text-accent" dir="ltr">
            {c.command}
          </pre>
          <p className="text-sm">{t(c.purpose, lang)}</p>
          <p className="text-sm text-muted">
            {t(ui.why, lang)}: {t(c.why, lang)}
          </p>
          <p className="text-sm text-muted">
            {t(ui.input, lang)}: {t(c.input, lang)} · {t(ui.output, lang)}: {t(c.output, lang)}
          </p>
          <p className="text-sm">{t(c.meaning, lang)}</p>
          <p className="text-sm text-warn">
            {t(ui.commonErrors, lang)}: {t(c.errors, lang)}
          </p>
        </Card>
      ))}
    </div>
  );
}
