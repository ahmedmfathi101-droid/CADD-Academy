import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/input";
import { runViva } from "@/lib/academy/ai";
import { vivaQuestions } from "@/lib/academy/content/knowledge-bases";
import { teachLabels, ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import type { TeachLevel } from "@/lib/academy/types";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/viva")({
  component: VivaPage,
});

function VivaPage() {
  const lang = useAcademy((s) => s.lang);
  const [difficulty, setDifficulty] = useState<TeachLevel>("advanced");
  const [idx, setIdx] = useState(0);
  const [answer, setAnswer] = useState("");
  const [report, setReport] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const bank = vivaQuestions ?? [];
  const pool = useMemo(
    () => bank.filter((q) => q.difficulty === difficulty),
    [difficulty, bank],
  );
  const q = pool.length ? pool[idx % pool.length] : bank[0];

  async function evaluate() {
    if (!q) return;
    setBusy(true);
    setReport(null);
    try {
      const res = await runViva({
        data: {
          lang,
          difficulty,
          question: t(q.question, lang),
          answer,
          ideal: t(q.ideal, lang),
        },
      });
      if (!res.ok) {
        setReport(
          `${t(ui.ideal, lang)}\n${t(q.ideal, lang)}\n\n${t(ui.followUp, lang)}\n${t(q.followUp, lang)}\n\n${t(q.pitfalls, lang)}`,
        );
      } else {
        setReport(res.text);
      }
    } catch {
      setReport(t(ui.aiUnavailable, lang));
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title={t(ui.viva, lang)}
        desc={
          lang === "ar"
            ? "أستاذ متشكك. لا مجاملة. أجب ثم اطلب التقييم."
            : "A skeptical examiner. No flattery. Answer, then request evaluation."
        }
      />
      <div className="flex flex-wrap gap-2">
        {(Object.keys(teachLabels) as TeachLevel[]).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => {
              setDifficulty(k);
              setIdx(0);
              setReport(null);
              setAnswer("");
            }}
            className={`h-10 rounded-full px-3 text-xs ${
              difficulty === k ? "bg-accent text-accent-fg" : "border border-border text-muted"
            }`}
          >
            {t(teachLabels[k], lang)}
          </button>
        ))}
      </div>
      {!q ? (
        <p className="text-muted">{t(ui.noResults, lang)}</p>
      ) : (
        <Card className="space-y-3">
          <p className="text-xs uppercase tracking-[0.16em] text-signal">{t(ui.defense, lang)}</p>
          <p className="font-display text-2xl leading-snug">{t(q.question, lang)}</p>
          <Textarea value={answer} onChange={(e) => setAnswer(e.target.value)} rows={6} />
          <div className="flex flex-wrap gap-2">
            <Button onClick={() => void evaluate()} disabled={busy || !answer.trim()}>
              {busy ? t(ui.thinking, lang) : t(ui.evaluate, lang)}
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setIdx((n) => n + 1);
                setAnswer("");
                setReport(null);
              }}
            >
              {t(ui.next, lang)}
            </Button>
          </div>
        </Card>
      )}
      {report && (
        <Card>
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-muted">{report}</pre>
        </Card>
      )}
    </div>
  );
}
