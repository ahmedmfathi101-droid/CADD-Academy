import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/input";
import { challengeScenarios } from "@/lib/academy/content/knowledge-bases";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/challenge")({
  component: ChallengePage,
});

function ChallengePage() {
  const lang = useAcademy((s) => s.lang);
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const bank = challengeScenarios ?? [];
  const s = bank[i];
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader title={t(ui.challenge, lang)} desc={t(ui.identifyWeaknesses, lang)} />
      {bank.length === 0 || !s ? (
        <p className="text-muted">{t(ui.noResults, lang)}</p>
      ) : (
        <>
          <div className="flex gap-2">
            {bank.map((c, idx) => (
              <Button
                key={c.id}
                size="sm"
                variant={i === idx ? "default" : "secondary"}
                onClick={() => {
                  setI(idx);
                  setShow(false);
                  setText("");
                }}
              >
                {idx + 1}
              </Button>
            ))}
          </div>
          <Card className="space-y-3">
            <CardTitle>{t(s.title, lang)}</CardTitle>
            <p className="whitespace-pre-wrap leading-relaxed text-muted">{t(s.protocol, lang)}</p>
            <Textarea value={text} onChange={(e) => setText(e.target.value)} rows={8} />
            <Button onClick={() => setShow(true)}>{t(ui.expertAnalysis, lang)}</Button>
            {show && (
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-fg">{t(s.expert, lang)}</p>
            )}
          </Card>
        </>
      )}
    </div>
  );
}
