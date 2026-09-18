import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { AppLink } from "@/components/app-link";
import { PageHeader } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { lessons } from "@/lib/academy/catalog";
import {
  commands,
  dictionary,
  equations,
  mistakes,
} from "@/lib/academy/content/knowledge-bases";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/search")({
  component: SearchPage,
});

function SearchPage() {
  const lang = useAcademy((s) => s.lang);
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const hits = useMemo(() => {
    if (query.length < 2) return [];
    const rows: { to: string; title: string; kind: string }[] = [];
    for (const l of lessons) {
      if (
        t(l.title, lang).toLowerCase().includes(query) ||
        t(l.summary, lang).toLowerCase().includes(query) ||
        l.id.includes(query)
      ) {
        rows.push({ to: `/lesson/${l.id}`, title: t(l.title, lang), kind: "lesson" });
      }
    }
    for (const e of equations ?? []) {
      if (t(e.name, lang).toLowerCase().includes(query)) {
        rows.push({ to: "/equations", title: t(e.name, lang), kind: "equation" });
      }
    }
    for (const c of commands ?? []) {
      if (c.command.toLowerCase().includes(query)) {
        rows.push({ to: "/commands", title: c.command, kind: "command" });
      }
    }
    for (const m of mistakes ?? []) {
      if (t(m.title, lang).toLowerCase().includes(query)) {
        rows.push({ to: "/mistakes", title: t(m.title, lang), kind: "mistake" });
      }
    }
    for (const d of dictionary ?? []) {
      if (`${d.term} ${d.termAr}`.toLowerCase().includes(query)) {
        rows.push({ to: "/dictionary", title: d.term, kind: "term" });
      }
    }
    return rows.slice(0, 40);
  }, [query, lang]);

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <PageHeader title={t(ui.search, lang)} />
      <Input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={t(ui.searchPlaceholder, lang)}
        autoFocus
      />
      {hits.length === 0 && query.length >= 2 && (
        <p className="text-muted">{t(ui.noResults, lang)}</p>
      )}
      {hits.map((h, i) => (
        <AppLink key={`${h.to}-${i}`} to={h.to}>
          <Card className="hover:border-border-strong">
            <p className="text-[11px] uppercase tracking-[0.16em] text-subtle">{h.kind}</p>
            <p className="mt-1">{h.title}</p>
          </Card>
        </AppLink>
      ))}
    </div>
  );
}
