import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { lessons, levels } from "@/lib/academy/catalog";
import { skillLabels, ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import type { SkillDomain } from "@/lib/academy/types";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/skills")({
  component: SkillsPage,
});

const tree: { name: SkillDomain; kids: SkillDomain[] }[] = [
  { name: "mechanics", kids: ["docking", "md", "quantum"] },
  { name: "docking", kids: ["screening", "sbdd"] },
  { name: "md", kids: ["freeEnergy"] },
  { name: "freeEnergy", kids: [] },
  { name: "cheminformatics", kids: ["lbdd", "ml"] },
  { name: "lbdd", kids: [] },
  { name: "ml", kids: [] },
  { name: "research", kids: ["criticism"] },
];

function SkillsPage() {
  const lang = useAcademy((s) => s.lang);
  const completed = useAcademy((s) => s.completedLessons);

  function pct(d: SkillDomain) {
    const pool = lessons.filter((l) => l.skills.includes(d));
    const got = pool.filter((l) => completed[l.id]).length;
    return pool.length ? Math.round((got / pool.length) * 100) : 0;
  }

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <PageHeader
        title={t(ui.skills, lang)}
        desc={
          lang === "ar"
            ? "المهارات تُفتح بالممارسة لا بالأقفال التعسفية. المتطلبات موصى بها."
            : "Skills unlock by practice, not arbitrary locks. Prerequisites are recommended."
        }
      />
      {tree.map((node) => (
        <Card key={node.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="font-display text-xl">{t(skillLabels[node.name], lang)}</p>
            <Badge tone={pct(node.name) > 60 ? "ok" : "signal"}>{pct(node.name)}%</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            {node.kids.map((k) => (
              <Badge key={k} tone={pct(k) ? "signal" : "default"}>
                {t(skillLabels[k], lang)} · {pct(k)}%
              </Badge>
            ))}
          </div>
        </Card>
      ))}
      <div className="flex flex-wrap gap-2">
        {levels.map((lv) => (
          <Link key={lv.id} to="/learn/$levelId" params={{ levelId: lv.id }} className="text-xs text-signal">
            {lv.code}
          </Link>
        ))}
      </div>
    </div>
  );
}
