import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { PageHeader } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDesc, CardTitle } from "@/components/ui/card";
import { lessons, levels, paths } from "@/lib/academy/catalog";
import {
  dailyQuestions,
  papersOfWeek,
} from "@/lib/academy/content/knowledge-bases";
import { skillLabels, ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import type { SkillDomain } from "@/lib/academy/types";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/")({
  component: Dashboard,
});

function Dashboard() {
  const lang = useAcademy((s) => s.lang);
  const completed = useAcademy((s) => s.completedLessons);
  const last = useAcademy((s) => s.lastLessonId);
  const notes = useAcademy((s) => s.notes);
  const pathId = useAcademy((s) => s.pathId);
  const dailyMinutes = useAcademy((s) => s.dailyMinutes);
  const setDaily = useAcademy((s) => s.setDailyMinutes);

  const doneN = Object.keys(completed).length;
  const pct = Math.round((doneN / Math.max(1, lessons.length)) * 100);
  const next = lessons.find((l) => !completed[l.id]) ?? lessons[0];
  const continueId = last && lessons.some((l) => l.id === last) ? last : next?.id;

  const currentLevel =
    levels.find((lv) =>
      lv.modules.some((m) => m.lessonIds.some((id) => !completed[id])),
    ) ?? levels[levels.length - 1];

  const domains: SkillDomain[] = [
    "chemistry",
    "docking",
    "md",
    "freeEnergy",
    "admet",
    "research",
  ];
  const radar = domains.map((d) => {
    const pool = lessons.filter((l) => l.skills.includes(d));
    const got = pool.filter((l) => completed[l.id]).length;
    return {
      skill: t(skillLabels[d], lang),
      value: pool.length ? Math.round((got / pool.length) * 100) : 0,
    };
  });

  const day = Math.floor(Date.now() / 86400000);
  const questions = dailyQuestions ?? [];
  const papers = papersOfWeek ?? [];
  const dq = questions.length ? questions[day % questions.length] : undefined;
  const paper = papers.length ? papers[day % papers.length] : undefined;
  const path = paths.find((p) => p.id === pathId);
  const continueLesson = lessons.find((l) => l.id === continueId) ?? next;

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <PageHeader
        kicker={t(ui.appShort, lang)}
        title={t(ui.welcome, lang)}
        desc={t(ui.tagline, lang)}
      />

      <p className="max-w-3xl border-s-2 border-signal ps-4 text-sm leading-relaxed text-muted">
        {t(ui.principle, lang)}
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <p className="text-[11px] uppercase tracking-[0.16em] text-subtle">{t(ui.progress, lang)}</p>
          <p className="mt-2 font-display text-4xl tabular-nums">{pct}%</p>
          <CardDesc>
            {doneN} / {lessons.length} {t(ui.lessons, lang)}
          </CardDesc>
        </Card>
        <Card>
          <p className="text-[11px] uppercase tracking-[0.16em] text-subtle">{t(ui.currentLevel, lang)}</p>
          <CardTitle className="mt-2">
            {currentLevel ? `${currentLevel.code} · ${t(currentLevel.title, lang)}` : "—"}
          </CardTitle>
          <CardDesc>{currentLevel ? t(currentLevel.summary, lang) : ""}</CardDesc>
        </Card>
        <Card>
          <p className="text-[11px] uppercase tracking-[0.16em] text-subtle">{t(ui.pathLabel, lang)}</p>
          <CardTitle className="mt-2">{path ? t(path.title, lang) : t(ui.allLevels, lang)}</CardTitle>
          <Button variant="ghost" size="sm" className="mt-3 px-0" asChild>
            <Link to="/paths">{t(ui.paths, lang)}</Link>
          </Button>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.16em] text-signal">{t(ui.dailyLesson, lang)}</p>
          {continueId && continueLesson && (
            <>
              <CardTitle>{t(continueLesson.title, lang)}</CardTitle>
              <CardDesc>{t(continueLesson.summary, lang)}</CardDesc>
              <div className="flex flex-wrap gap-2">
                <Button asChild>
                  <Link to="/lesson/$lessonId" params={{ lessonId: continueId }}>
                    {t(ui.continue, lang)}
                  </Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link to="/roadmap">{t(ui.roadmap, lang)}</Link>
                </Button>
              </div>
            </>
          )}
        </Card>

        <Card>
          <p className="text-[11px] uppercase tracking-[0.16em] text-signal">{t(ui.dailyQuestion, lang)}</p>
          {dq && <p className="mt-3 leading-relaxed">{t(dq.prompt, lang)}</p>}
          <Button variant="ghost" size="sm" className="mt-3 px-0" asChild>
            <Link to="/viva">{t(ui.viva, lang)}</Link>
          </Button>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <Card>
          <p className="mb-4 text-[11px] uppercase tracking-[0.16em] text-subtle">{t(ui.skillRadar, lang)}</p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radar}>
                <PolarGrid stroke="#2a2c32" />
                <PolarAngleAxis dataKey="skill" tick={{ fill: "#9a958c", fontSize: 11 }} />
                <Radar dataKey="value" stroke="#8f9d96" fill="#8f9d96" fillOpacity={0.25} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <div className="space-y-4">
          {paper && (
            <Card>
              <p className="text-[11px] uppercase tracking-[0.16em] text-subtle">{t(ui.paperOfWeek, lang)}</p>
              <CardTitle className="mt-2">{t(paper.title, lang)}</CardTitle>
              <CardDesc>{t(paper.cite, lang)}</CardDesc>
              <p className="mt-2 text-sm text-muted">{t(paper.why, lang)}</p>
              <Button variant="ghost" size="sm" className="mt-2 px-0" asChild>
                <Link to="/papers">{t(ui.papers, lang)}</Link>
              </Button>
            </Card>
          )}
          <Card>
            <p className="text-[11px] uppercase tracking-[0.16em] text-subtle">{t(ui.studyPlan, lang)}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {([30, 60, 120, 240] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setDaily(m)}
                  className={`h-10 rounded-full px-3 text-xs ${dailyMinutes === m ? "bg-accent text-accent-fg" : "border border-border text-muted"}`}
                >
                  {m} {t(ui.minutes, lang)}
                </button>
              ))}
            </div>
            <p className="mt-3 text-sm text-muted">
              {lang === "ar"
                ? "نظرية → صورة → تمرين → برمجية → اختبار → سؤال بحث."
                : "Theory → visual → exercise → software → quiz → research question."}
            </p>
          </Card>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardTitle>{t(ui.recentNotes, lang)}</CardTitle>
          {notes[0] ? (
            <CardDesc>
              {notes[0].title} — {notes[0].body.slice(0, 80)}
            </CardDesc>
          ) : (
            <CardDesc>{t(ui.emptyNotes, lang)}</CardDesc>
          )}
          <Button variant="ghost" size="sm" className="mt-2 px-0" asChild>
            <Link to="/notebook">{t(ui.notebook, lang)}</Link>
          </Button>
        </Card>
        <Card>
          <CardTitle>{t(ui.recommended, lang)}</CardTitle>
          <div className="mt-3 flex flex-col gap-2">
            {(["l8", "l9", "l6"] as const).map((id) => (
              <Link
                key={id}
                to="/learn/$levelId"
                params={{ levelId: id }}
                className="text-sm text-signal hover:underline"
              >
                {id.toUpperCase()}
              </Link>
            ))}
            <Link to="/challenge" className="text-sm text-signal hover:underline">
              Challenge
            </Link>
            <Link to="/calculators" className="text-sm text-signal hover:underline">
              Calculators
            </Link>
          </div>
        </Card>
        <Card>
          <CardTitle>{t(ui.capstone, lang)}</CardTitle>
          <CardDesc>
            {lang === "ar"
              ? "مشروع ختامي: سؤال، هدف، تحقّق التحام، MD، طاقة، ADMET، مخطوطة، دفاع."
              : "Capstone: question, target, docking validation, MD, energy, ADMET, manuscript, defense."}
          </CardDesc>
          <Button variant="secondary" size="sm" className="mt-3" asChild>
            <Link to="/builder">{t(ui.builder, lang)}</Link>
          </Button>
        </Card>
      </div>

      <div className="flex flex-wrap gap-2">
        {levels.slice(0, 12).map((lv) => {
          const ids = lv.modules.flatMap((m) => m.lessonIds);
          const d = ids.filter((id) => completed[id]).length;
          return (
            <Link key={lv.id} to="/learn/$levelId" params={{ levelId: lv.id }}>
              <Badge tone={d === ids.length ? "ok" : d ? "signal" : "default"}>
                {lv.code} {d}/{ids.length}
              </Badge>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
