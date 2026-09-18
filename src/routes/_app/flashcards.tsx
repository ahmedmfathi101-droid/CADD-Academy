import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { flashcards } from "@/lib/academy/content/knowledge-bases";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/flashcards")({
  component: FlashcardsPage,
});

function FlashcardsPage() {
  const lang = useAcademy((s) => s.lang);
  const review = useAcademy((s) => s.reviewCard);
  const state = useAcademy((s) => s.flashcards);
  const due = useMemo(() => {
    const now = Date.now();
    const list = (flashcards ?? []).filter((c) => !state[c.id] || state[c.id]!.due <= now);
    return list.length ? list : (flashcards ?? []);
  }, [state]);
  const [i, setI] = useState(0);
  const [show, setShow] = useState(false);
  const card = due.length ? due[i % due.length] : undefined;

  if (!card) {
    return (
      <div className="mx-auto max-w-xl space-y-6">
        <PageHeader title={t(ui.flashcards, lang)} />
        <p className="text-muted">{t(ui.noResults, lang)}</p>
      </div>
    );
  }

  const current = card;

  function grade(g: "again" | "hard" | "good" | "easy") {
    review(current.id, g);
    setShow(false);
    setI((n) => n + 1);
  }

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <PageHeader title={t(ui.flashcards, lang)} desc={`${due.length} · ${card.deck}`} />
      <Card
        className="min-h-48 cursor-pointer"
        onClick={() => setShow((v) => !v)}
        role="button"
      >
        <p className="text-xs text-subtle">{card.deck}</p>
        <p className="mt-4 font-display text-2xl">{t(card.front, lang)}</p>
        {show && <p className="mt-6 leading-relaxed text-muted">{t(card.back, lang)}</p>}
      </Card>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Button variant="danger" onClick={() => grade("again")}>{t(ui.again, lang)}</Button>
        <Button variant="secondary" onClick={() => grade("hard")}>{t(ui.hard, lang)}</Button>
        <Button variant="secondary" onClick={() => grade("good")}>{t(ui.good, lang)}</Button>
        <Button onClick={() => grade("easy")}>{t(ui.easy, lang)}</Button>
      </div>
    </div>
  );
}
