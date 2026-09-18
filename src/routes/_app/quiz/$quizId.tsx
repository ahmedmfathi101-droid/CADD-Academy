import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { PageHeader } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/input";
import { quizzes } from "@/lib/academy/content/knowledge-bases";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/quiz/$quizId")({
  component: QuizPage,
});

function QuizPage() {
  const { quizId } = Route.useParams();
  const lang = useAcademy((s) => s.lang);
  const setScore = useAcademy((s) => s.setQuizScore);
  const quiz = quizzes.find((q) => q.id === quizId);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | boolean | string | null>(null);
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);
  const correctRef = useRef(0);

  if (!quiz || !quiz.questions.length) {
    return <p className="text-muted">{t(ui.noResults, lang)}</p>;
  }
  const current = quiz;
  const q = current.questions[i];
  const total = current.questions.length;

  if (!q) {
    return <p className="text-muted">{t(ui.noResults, lang)}</p>;
  }

  function isRight() {
    if (q.kind === "mcq") return picked === q.answer;
    if (q.kind === "tf") return picked === q.answer;
    if (typeof q.answer === "string" && typeof picked === "string") {
      const a = picked.toLowerCase();
      return q.answer
        .toLowerCase()
        .split(",")
        .some((part) => a.includes(part.trim()));
    }
    return false;
  }

  function check() {
    setChecked(true);
    if (isRight()) {
      correctRef.current += 1;
      setCorrect(correctRef.current);
    }
  }

  function finish() {
    setScore(current.id, correctRef.current, total);
    setDone(true);
  }

  function next() {
    if (i + 1 >= total) {
      finish();
      return;
    }
    setI((n) => n + 1);
    setPicked(null);
    setChecked(false);
  }

  if (done) {
    return (
      <div className="mx-auto max-w-xl">
        <PageHeader title={t(current.title, lang)} />
        <Card>
          <p className="font-display text-4xl tabular-nums">
            {correct}/{total}
          </p>
          <p className="mt-2 text-muted">{t(ui.score, lang)}</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <PageHeader kicker={`${i + 1}/${total}`} title={t(current.title, lang)} />
      <Card className="space-y-4">
        <p className="leading-relaxed">{t(q.prompt, lang)}</p>
        {q.kind === "mcq" && q.options && (
          <div className="grid gap-2">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => !checked && setPicked(idx)}
                className={`rounded-md border px-3 py-3 text-start text-sm ${
                  picked === idx ? "border-signal bg-bg-subtle" : "border-border"
                }`}
              >
                {t(opt, lang)}
              </button>
            ))}
          </div>
        )}
        {q.kind === "tf" && (
          <div className="flex gap-2">
            <Button variant={picked === true ? "default" : "secondary"} onClick={() => setPicked(true)}>
              True
            </Button>
            <Button variant={picked === false ? "default" : "secondary"} onClick={() => setPicked(false)}>
              False
            </Button>
          </div>
        )}
        {(q.kind === "short" || q.kind === "critique" || q.kind === "calc") && (
          <Textarea
            value={typeof picked === "string" ? picked : ""}
            onChange={(e) => setPicked(e.target.value)}
          />
        )}
        {checked && <p className="text-sm leading-relaxed text-muted">{t(q.explanation, lang)}</p>}
        <div className="flex gap-2">
          {!checked ? (
            <Button onClick={check} disabled={picked === null || picked === ""}>
              {t(ui.check, lang)}
            </Button>
          ) : (
            <Button onClick={next}>{i + 1 >= total ? t(ui.submit, lang) : t(ui.next, lang)}</Button>
          )}
        </div>
      </Card>
    </div>
  );
}
