import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { mistakes } from "@/lib/academy/content/knowledge-bases";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/mistakes")({
  component: MistakesPage,
});

function MistakesPage() {
  const lang = useAcademy((s) => s.lang);
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      (mistakes ?? []).filter((m) =>
        `${t(m.title, lang)} ${(m.tags ?? []).join(" ")}`.toLowerCase().includes(q.toLowerCase()),
      ),
    [q, lang],
  );
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <PageHeader title={t(ui.mistakes, lang)} />
      <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t(ui.search, lang)} />
      {list.map((m) => (
        <Card key={m.id} className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {m.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <CardTitle>{t(m.title, lang)}</CardTitle>
          <p className="text-sm text-danger">{t(m.whyWrong, lang)}</p>
          <p className="text-sm text-muted">
            {t(ui.consequences, lang)}: {t(m.consequences, lang)}
          </p>
          <p className="text-sm text-ok">
            {t(ui.betterApproach, lang)}: {t(m.better, lang)}
          </p>
        </Card>
      ))}
    </div>
  );
}
