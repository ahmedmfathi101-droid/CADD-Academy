import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card, CardDesc, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/input";
import { critiquePaper } from "@/lib/academy/ai";
import { papersOfWeek } from "@/lib/academy/content/knowledge-bases";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/papers")({
  component: PapersPage,
});

function PapersPage() {
  const lang = useAcademy((s) => s.lang);
  const [text, setText] = useState("");
  const [out, setOut] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const papers = papersOfWeek ?? [];

  async function run() {
    setBusy(true);
    try {
      const res = await critiquePaper({ data: { lang, text } });
      setOut(res.ok ? res.text : t(ui.aiUnavailable, lang));
    } catch {
      setOut(t(ui.aiUnavailable, lang));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader title={t(ui.papers, lang)} />
      {papers.map((p) => (
        <Card key={p.id}>
          <CardTitle>{t(p.title, lang)}</CardTitle>
          <CardDesc>{t(p.cite, lang)}</CardDesc>
          <p className="mt-2 text-sm">{t(p.why, lang)}</p>
        </Card>
      ))}
      <Card className="space-y-3">
        <p className="text-sm text-muted">
          {lang === "ar"
            ? "الصق الملخص أو قسم المنهج. الوضع: محكّم. لن تُختلق تفاصيل غير موجودة في النص."
            : "Paste an abstract or methods section. Reviewer mode. Details not in the text will not be invented."}
        </p>
        <Textarea value={text} onChange={(e) => setText(e.target.value)} rows={8} />
        <Button onClick={() => void run()} disabled={busy || text.trim().length < 40}>
          {busy ? t(ui.thinking, lang) : t(ui.evaluate, lang)}
        </Button>
        {out && <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted">{out}</pre>}
      </Card>
    </div>
  );
}
