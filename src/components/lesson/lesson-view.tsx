import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { KatexBlock } from "@/components/katex-block";
import { MolViewer } from "@/components/mol/viewer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { epistemicLabels, skillLabels, ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import type { EpistemicKind, Lesson, LessonSection } from "@/lib/academy/types";
import { sectionVisible, t } from "@/lib/utils";

const tone: Record<EpistemicKind, "default" | "signal" | "warn" | "ok" | "danger"> = {
  fact: "signal",
  interpretation: "default",
  hypothesis: "warn",
  educational: "ok",
  limitation: "warn",
  warning: "danger",
};

function SectionView({ s, lang }: { s: LessonSection; lang: "ar" | "en" }) {
  const [showSol, setShowSol] = useState(false);

  if (s.type === "prose") {
    return (
      <section className="space-y-3">
        {s.title && <h2 className="font-display text-2xl tracking-tight">{t(s.title, lang)}</h2>}
        <p className="whitespace-pre-wrap text-base leading-relaxed text-fg/90">{t(s.body, lang)}</p>
      </section>
    );
  }
  if (s.type === "equation") {
    return (
      <Card className="space-y-3">
        <p className="text-[11px] uppercase tracking-[0.16em] text-signal">{t(s.name, lang)}</p>
        <KatexBlock latex={s.latex} />
        <p className="text-sm leading-relaxed text-muted">{t(s.meaning, lang)}</p>
        <ul className="space-y-1 text-sm">
          {(s.variables ?? []).map((v) => (
            <li key={v.symbol} className="flex gap-2">
              <span className="font-mono text-signal">{v.symbol}</span>
              <span className="text-muted">
                {t(v.name, lang)}
                {v.unit ? ` · ${t(v.unit, lang)}` : ""}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-sm leading-relaxed">{t(s.interpretation, lang)}</p>
        <p className="text-sm text-muted">
          {t(ui.application, lang)}: {t(s.application, lang)}
        </p>
      </Card>
    );
  }
  if (s.type === "callout") {
    return (
      <aside className="rounded-lg border border-border bg-bg-subtle/80 p-4">
        <Badge tone={tone[s.kind] ?? "default"}>{t(epistemicLabels[s.kind] ?? ui.warning, lang)}</Badge>
        <p className="mt-2 font-medium">{t(s.title, lang)}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">{t(s.body, lang)}</p>
      </aside>
    );
  }
  if (s.type === "command") {
    return (
      <Card className="space-y-2">
        <pre className="overflow-x-auto rounded-sm bg-bg p-3 font-mono text-sm text-accent" dir="ltr">
          {s.command}
        </pre>
        <Row label={t(ui.purpose, lang)} value={t(s.purpose, lang)} />
        <Row label={t(ui.input, lang)} value={t(s.input, lang)} />
        <Row label={t(ui.output, lang)} value={t(s.output, lang)} />
        <Row label={t(ui.meaning, lang)} value={t(s.meaning, lang)} />
        <Row label={t(ui.commonErrors, lang)} value={t(s.errors, lang)} />
      </Card>
    );
  }
  if (s.type === "why") {
    return (
      <details className="rounded-lg border border-border-strong bg-bg-elevated p-4" open>
        <summary className="cursor-pointer text-sm font-medium text-signal">
          {t(ui.why, lang)} — {t(s.question, lang)}
        </summary>
        <p className="mt-3 text-sm leading-relaxed text-muted">{t(s.answer, lang)}</p>
      </details>
    );
  }
  if (s.type === "whatif") {
    return (
      <details className="rounded-lg border border-warn/30 bg-bg-elevated p-4">
        <summary className="cursor-pointer text-sm font-medium text-warn">
          {t(ui.whatIf, lang)} — {t(s.scenario, lang)}
        </summary>
        <p className="mt-3 text-sm leading-relaxed text-muted">{t(s.consequence, lang)}</p>
      </details>
    );
  }
  if (s.type === "exercise") {
    return (
      <Card>
        <p className="text-[11px] uppercase tracking-[0.16em] text-signal">{t(ui.exercise, lang)}</p>
        <p className="mt-2 leading-relaxed">{t(s.prompt, lang)}</p>
        <Button variant="ghost" size="sm" className="mt-3" onClick={() => setShowSol((v) => !v)}>
          {showSol ? t(ui.hideSolution, lang) : t(ui.showSolution, lang)}
        </Button>
        {showSol && <p className="mt-2 text-sm leading-relaxed text-muted">{t(s.solution, lang)}</p>}
      </Card>
    );
  }
  if (s.type === "list") {
    const ListTag = s.ordered ? "ol" : "ul";
    return (
      <div>
        {s.title && <h3 className="font-display text-xl">{t(s.title, lang)}</h3>}
        <ListTag
          className={`mt-3 space-y-2 text-sm leading-relaxed text-fg/90 ${s.ordered ? "list-decimal ps-5" : "list-disc ps-5"}`}
        >
          {(s.items ?? []).map((it, i) => (
            <li key={i}>{t(it, lang)}</li>
          ))}
        </ListTag>
      </div>
    );
  }
  if (s.type === "steps") {
    return (
      <div>
        {s.title && <h3 className="font-display text-xl">{t(s.title, lang)}</h3>}
        <ol className="mt-4 space-y-3">
          {(s.items ?? []).map((it, i) => (
            <li key={i} className="rounded-md border border-border p-3">
              <p className="text-sm font-medium">
                <span className="me-2 font-mono text-signal">{i + 1}</span>
                {t(it.title, lang)}
              </p>
              <p className="mt-1 text-sm text-muted">{t(it.body, lang)}</p>
            </li>
          ))}
        </ol>
      </div>
    );
  }
  if (s.type === "viewer") {
    return (
      <div>
        <MolViewer pdb={s.pdb} ligand={s.ligand} />
        <p className="mt-2 text-xs text-muted">{t(s.caption, lang)}</p>
      </div>
    );
  }
  if (s.type === "compare") {
    return (
      <div className="overflow-x-auto">
        <table className="w-full min-w-lg text-start text-sm">
          <thead>
            <tr className="border-b border-border text-muted">
              <th className="py-2 pe-3 font-medium" />
              <th className="py-2 pe-3 font-medium">{t(s.left, lang)}</th>
              <th className="py-2 font-medium">{t(s.right, lang)}</th>
            </tr>
          </thead>
          <tbody>
            {(s.rows ?? []).map((r, i) => (
              <tr key={i} className="border-b border-border/60 align-top">
                <td className="py-2 pe-3 text-subtle">{t(r.dim, lang)}</td>
                <td className="py-2 pe-3">{t(r.a, lang)}</td>
                <td className="py-2">{t(r.b, lang)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return null;
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <p className="text-sm leading-relaxed">
      <span className="text-subtle">{label}: </span>
      {value}
    </p>
  );
}

export function LessonView({ lesson, nextId }: { lesson: Lesson; nextId?: string }) {
  const lang = useAcademy((s) => s.lang);
  const teach = useAcademy((s) => s.teachLevel);
  const completed = useAcademy((s) => s.completedLessons);
  const complete = useAcademy((s) => s.completeLesson);
  const setLast = useAcademy((s) => s.setLastLesson);
  const done = Boolean(completed[lesson.id]);

  const sections = (lesson.sections ?? []).filter((s) =>
    sectionVisible(
      "minLevel" in s ? s.minLevel : undefined,
      "maxLevel" in s ? s.maxLevel : undefined,
      teach,
    ),
  );

  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <header>
        <p className="text-[11px] uppercase tracking-[0.18em] text-signal">
          {lesson.levelId.toUpperCase()} · {lesson.durationMin} {t(ui.minutes, lang)}
        </p>
        <h1 className="mt-2 font-display text-3xl tracking-tight sm:text-4xl">{t(lesson.title, lang)}</h1>
        <p className="mt-3 text-muted">{t(lesson.summary, lang)}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {(lesson.skills ?? []).map((sk) => (
            <Badge key={sk}>{t(skillLabels[sk], lang)}</Badge>
          ))}
        </div>
      </header>

      <Card>
        <p className="text-[11px] uppercase tracking-[0.16em] text-subtle">{t(ui.objectives, lang)}</p>
        <ul className="mt-2 list-disc space-y-1 ps-5 text-sm leading-relaxed">
          {(lesson.objectives ?? []).map((o, i) => (
            <li key={i}>{t(o, lang)}</li>
          ))}
        </ul>
      </Card>

      {sections.map((s) => (
        <SectionView key={s.id} s={s} lang={lang} />
      ))}

      {(lesson.related ?? []).length > 0 && (
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.16em] text-subtle">{t(ui.related, lang)}</p>
          <div className="flex flex-wrap gap-2">
            {lesson.related.map((id) => (
              <Link
                key={id}
                to="/lesson/$lessonId"
                params={{ lessonId: id }}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted hover:text-fg"
              >
                {id}
              </Link>
            ))}
          </div>
        </div>
      )}

      <footer className="flex flex-wrap gap-3 border-t border-border pt-6">
        <Button
          onClick={() => {
            complete(lesson.id, lesson.skills);
            setLast(lesson.id);
          }}
        >
          {done ? t(ui.completed, lang) : t(ui.markComplete, lang)}
        </Button>
        {lesson.quizId && (
          <Button variant="secondary" asChild>
            <Link to="/quiz/$quizId" params={{ quizId: lesson.quizId }}>
              {t(ui.startQuiz, lang)}
            </Link>
          </Button>
        )}
        {nextId && (
          <Button variant="ghost" asChild>
            <Link to="/lesson/$lessonId" params={{ lessonId: nextId }}>
              {t(ui.next, lang)}
            </Link>
          </Button>
        )}
      </footer>
    </article>
  );
}
