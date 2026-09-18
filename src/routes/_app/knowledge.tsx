import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/app-shell";
import { Card } from "@/components/ui/card";
import { graphEdges, graphNodes } from "@/lib/academy/content/knowledge-bases";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/knowledge")({
  component: KnowledgePage,
});

function KnowledgePage() {
  const lang = useAcademy((s) => s.lang);
  const nodes = graphNodes ?? [];
  const edges = graphEdges ?? [];
  const [sel, setSel] = useState(nodes[0]?.id ?? "thermo");
  const node = nodes.find((n) => n.id === sel);
  const neighbors = useMemo(
    () => edges.filter((e) => e.from === sel || e.to === sel),
    [sel, edges],
  );

  const n = Math.max(1, nodes.length);
  const pts = nodes.map((g, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    return { ...g, x: 50 + 38 * Math.cos(a), y: 50 + 38 * Math.sin(a) };
  });
  const byId = Object.fromEntries(pts.map((p) => [p.id, p]));

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      <PageHeader title={t(ui.knowledge, lang)} />
      {nodes.length === 0 ? (
        <p className="text-muted">{t(ui.noResults, lang)}</p>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Card className="p-3">
            <svg viewBox="0 0 100 100" className="h-auto w-full text-fg">
              {edges.map((e, i) => {
                const a = byId[e.from];
                const b = byId[e.to];
                if (!a || !b) return null;
                return (
                  <line
                    key={i}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke="#2a2c32"
                    strokeWidth="0.4"
                  />
                );
              })}
              {pts.map((p) => (
                <g key={p.id} onClick={() => setSel(p.id)} className="cursor-pointer">
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={sel === p.id ? 2.4 : 1.7}
                    fill={sel === p.id ? "#d7ddd8" : "#8f9d96"}
                  />
                  <text
                    x={p.x}
                    y={p.y - 3}
                    textAnchor="middle"
                    fontSize="2.2"
                    fill="#ece8e1"
                  >
                    {t(p.label, lang)}
                  </text>
                </g>
              ))}
            </svg>
          </Card>
          <Card className="space-y-3">
            {node && (
              <>
                <h2 className="font-display text-2xl">{t(node.label, lang)}</h2>
                <p className="text-xs uppercase tracking-[0.16em] text-subtle">{node.group}</p>
                {node.lessonId && (
                  <Link
                    to="/lesson/$lessonId"
                    params={{ lessonId: node.lessonId }}
                    className="text-sm text-signal hover:underline"
                  >
                    {t(ui.openLesson, lang)}
                  </Link>
                )}
                <ul className="space-y-2 text-sm text-muted">
                  {neighbors.map((e, i) => {
                    const other = e.from === sel ? e.to : e.from;
                    const n2 = nodes.find((x) => x.id === other);
                    return (
                      <li key={i}>
                        <button type="button" className="text-fg hover:underline" onClick={() => setSel(other)}>
                          {n2 ? t(n2.label, lang) : other}
                        </button>
                        <span className="text-subtle"> — {t(e.label, lang)}</span>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </Card>
        </div>
      )}
    </div>
  );
}
