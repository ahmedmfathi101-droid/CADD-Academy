import { useRouterState } from "@tanstack/react-router";
import { BookOpen, Menu, MessageSquareText, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { AppLink } from "@/components/app-link";
import { MentorPanel } from "@/components/mentor/mentor-panel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { lessons, levels } from "@/lib/academy/catalog";
import { ui, teachLabels } from "@/lib/academy/i18n";
import { groupLabels, navItems } from "@/lib/academy/nav";
import { useAcademy } from "@/lib/academy/store";
import type { TeachLevel } from "@/lib/academy/types";
import { t } from "@/lib/utils";

export function AppShell({ children }: { children: React.ReactNode }) {
  const lang = useAcademy((s) => s.lang);
  const setLang = useAcademy((s) => s.setLang);
  const teachLevel = useAcademy((s) => s.teachLevel);
  const setTeachLevel = useAcademy((s) => s.setTeachLevel);
  const professorMode = useAcademy((s) => s.professorMode);
  const setProfessorMode = useAcademy((s) => s.setProfessorMode);
  const completed = useAcademy((s) => s.completedLessons);
  const [open, setOpen] = useState(false);
  const [mentor, setMentor] = useState(false);
  const [q, setQ] = useState("");
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const pct = Math.round(
    (Object.keys(completed).length / Math.max(1, lessons.length)) * 100,
  );

  const hits = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (query.length < 2) return [];
    const out: { to: string; title: string }[] = [];
    for (const l of lessons) {
      const title = t(l.title, lang);
      if (title.toLowerCase().includes(query) || l.id.includes(query)) {
        out.push({ to: `/lesson/${l.id}`, title });
      }
    }
    for (const lv of levels) {
      const title = t(lv.title, lang);
      if (title.toLowerCase().includes(query)) {
        out.push({ to: `/learn/${lv.id}`, title: `${lv.code} · ${title}` });
      }
    }
    for (const n of navItems) {
      const title = t(n.label, lang);
      if (title.toLowerCase().includes(query)) out.push({ to: n.to, title });
    }
    return out.slice(0, 8);
  }, [q, lang]);

  const searchBox = (
    <div className="relative min-w-0 flex-1">
      <Search className="pointer-events-none absolute start-3 top-1/2 size-4 -translate-y-1/2 text-subtle" />
      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={t(ui.searchPlaceholder, lang)}
        className="ps-9"
        aria-label={t(ui.search, lang)}
      />
      {hits.length > 0 && (
        <div className="absolute inset-x-0 top-full z-50 mt-1 overflow-hidden rounded-md border border-border bg-bg-elevated">
          {hits.map((h) => (
            <AppLink
              key={h.to + h.title}
              to={h.to}
              className="block px-3 py-2 text-sm text-fg hover:bg-bg-subtle"
              onClick={() => setQ("")}
            >
              {h.title}
            </AppLink>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus-visible:absolute focus-visible:start-4 focus-visible:top-4 focus-visible:z-50 focus-visible:inline-flex focus-visible:bg-accent focus-visible:px-3 focus-visible:py-2 focus-visible:text-accent-fg"
      >
        Skip
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
        <div className="flex h-14 items-center gap-3 px-3 sm:px-5">
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-sm text-muted lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={t(ui.menu, lang)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <AppLink to="/" className="flex min-w-0 items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-sm border border-border-strong font-display text-sm text-accent">
              C
            </span>
            <span className="truncate font-display text-base tracking-tight sm:text-lg">
              {t(ui.appShort, lang)}
            </span>
          </AppLink>
          <div className="relative mx-auto hidden min-w-0 max-w-md flex-1 md:block">
            {searchBox}
          </div>
          <div className="ms-auto flex items-center gap-1.5">
            <select
              value={teachLevel}
              onChange={(e) => setTeachLevel(e.target.value as TeachLevel)}
              className="hidden h-11 max-w-40 rounded-sm border border-border bg-bg-elevated px-2 text-xs text-fg sm:block"
              aria-label={t(ui.teach, lang)}
            >
              {(Object.keys(teachLabels) as TeachLevel[]).map((k) => (
                <option key={k} value={k}>
                  {t(teachLabels[k], lang)}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => setLang(lang === "ar" ? "en" : "ar")}
              className="h-11 rounded-sm border border-border px-3 text-xs text-muted hover:text-fg"
            >
              {lang === "ar" ? "EN" : "ع"}
            </button>
            <Button size="sm" variant="secondary" onClick={() => setMentor(true)}>
              <MessageSquareText className="size-4" />
              <span className="hidden sm:inline">{t(ui.mentor, lang)}</span>
            </Button>
          </div>
        </div>
        <div className="px-3 pb-3 md:hidden">{searchBox}</div>
        <div className="h-px bg-border">
          <div className="h-full bg-signal" style={{ width: `${pct}%` }} />
        </div>
      </header>

      <div className="flex">
        <aside
          className={`z-30 w-72 shrink-0 overflow-y-auto border-e border-border bg-bg lg:static lg:block lg:pt-0 ${
            open ? "fixed inset-y-0 start-0 pt-14" : "hidden"
          }`}
        >
          <div className="px-4 py-5">
            <p className="text-[11px] uppercase tracking-[0.16em] text-subtle">
              {t(ui.progress, lang)} · {pct}%
            </p>
            <label className="mt-4 flex items-center gap-2 text-xs text-muted">
              <input
                type="checkbox"
                checked={professorMode}
                onChange={(e) => setProfessorMode(e.target.checked)}
                className="size-4 accent-signal"
              />
              {t(ui.professorMode, lang)}
            </label>
          </div>
          {(["learn", "practice", "research", "tools"] as const).map((g) => (
            <div key={g} className="px-3 pb-4">
              <p className="px-2 pb-1 text-[10px] uppercase tracking-[0.18em] text-subtle">
                {t(groupLabels[g], lang)}
              </p>
              <nav className="flex flex-col">
                {navItems
                  .filter((n) => n.group === g)
                  .map((n) => {
                    const active =
                      n.to === "/"
                        ? pathname === "/"
                        : pathname === n.to || pathname.startsWith(n.to + "/");
                    return (
                      <AppLink
                        key={n.to}
                        to={n.to}
                        className={`rounded-sm px-3 py-2 text-sm transition-colors ${
                          active
                            ? "bg-bg-subtle text-fg"
                            : "text-muted hover:bg-bg-subtle/70 hover:text-fg"
                        }`}
                      >
                        {t(n.label, lang)}
                      </AppLink>
                    );
                  })}
              </nav>
            </div>
          ))}
          <p className="px-5 pb-8 pt-2 text-[11px] leading-relaxed text-subtle">
            {t(ui.principle, lang)}
          </p>
        </aside>

        {open && (
          <button
            type="button"
            className="fixed inset-0 z-20 bg-bg/70 lg:hidden"
            aria-label={t(ui.close, lang)}
            onClick={() => setOpen(false)}
          />
        )}

        <main id="main" className="min-w-0 flex-1 px-4 py-6 sm:px-8 sm:py-8">
          {children}
        </main>
      </div>

      <MentorPanel open={mentor} onClose={() => setMentor(false)} />

      <AppLink
        to="/roadmap"
        className="fixed bottom-4 end-4 z-20 hidden size-12 items-center justify-center rounded-full bg-accent text-accent-fg shadow-[0_10px_30px_rgba(0,0,0,0.35)] sm:flex lg:hidden"
      >
        <BookOpen className="size-5" />
      </AppLink>
    </div>
  );
}

export function PageHeader({
  kicker,
  title,
  desc,
}: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  return (
    <header className="mb-8 max-w-3xl">
      {kicker && (
        <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-signal">{kicker}</p>
      )}
      <h1 className="font-display text-3xl tracking-tight text-fg sm:text-4xl">{title}</h1>
      {desc && <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">{desc}</p>}
    </header>
  );
}
