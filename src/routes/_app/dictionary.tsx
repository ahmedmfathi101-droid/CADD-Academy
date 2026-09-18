import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/app-shell";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { dictionary } from "@/lib/academy/content/knowledge-bases";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/dictionary")({
  component: DictionaryPage,
});

function DictionaryPage() {
  const lang = useAcademy((s) => s.lang);
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      (dictionary ?? []).filter((d) =>
        `${d.term} ${d.termAr} ${t(d.definition, lang)}`.toLowerCase().includes(q.toLowerCase()),
      ),
    [q, lang],
  );
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <PageHeader title={t(ui.dictionary, lang)} desc={t(ui.bilingualNote, lang)} />
      <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t(ui.search, lang)} />
      {list.map((d) => (
        <Card key={d.id} className="space-y-2">
          <CardTitle>
            {d.term} <span className="text-muted">· {d.termAr}</span>
          </CardTitle>
          <p className="text-sm leading-relaxed">{t(d.definition, lang)}</p>
          <p className="text-sm text-muted">
            {lang === "ar" ? "الاستخدام" : "Use"}: {t(d.use, lang)}
          </p>
          <p className="text-sm text-warn">{t(d.limitations, lang)}</p>
        </Card>
      ))}
    </div>
  );
}
