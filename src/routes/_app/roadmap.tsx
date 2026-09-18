import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardDesc, CardTitle } from "@/components/ui/card";
import { levels } from "@/lib/academy/catalog";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/roadmap")({
  component: RoadmapPage,
});

function RoadmapPage() {
  const lang = useAcademy((s) => s.lang);
  const completed = useAcademy((s) => s.completedLessons);

  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader
        kicker="L0 → L26"
        title={t(ui.roadmap, lang)}
        desc={
          lang === "ar"
            ? "من التوجّه إلى تصميم بحث قابل للتكذيب. لا تتخطَّ الفيزياء لتصل إلى الزر."
            : "From orientation to a falsifiable research design. Do not skip physics to reach a button."
        }
      />
      <ol className="relative space-y-4 border-s border-border ps-6">
        {levels.map((lv) => {
          const ids = lv.modules.flatMap((m) => m.lessonIds);
          const d = ids.filter((id) => completed[id]).length;
          return (
            <li key={lv.id} className="relative">
              <span className="absolute -start-8 top-5 size-4 rounded-full border border-signal bg-bg" />
              <Link to="/learn/$levelId" params={{ levelId: lv.id }}>
                <Card className="hover:border-border-strong">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <CardTitle>
                      {lv.code} · {t(lv.title, lang)}
                    </CardTitle>
                    <Badge tone={d === ids.length ? "ok" : d ? "signal" : "default"}>
                      {d}/{ids.length}
                    </Badge>
                  </div>
                  <CardDesc>{t(lv.summary, lang)}</CardDesc>
                </Card>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
