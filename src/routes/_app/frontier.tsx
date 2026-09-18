import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";
import { frontierTopics } from "@/lib/academy/content/knowledge-bases";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/frontier")({
  component: FrontierPage,
});

const tone = {
  established: "ok" as const,
  promising: "signal" as const,
  emerging: "warn" as const,
};

function FrontierPage() {
  const lang = useAcademy((s) => s.lang);
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <PageHeader
        title={t(ui.frontier, lang)}
        desc={
          lang === "ar"
            ? "فرّق بين راسخ وواعد وناشئ. الواعد ليس حقيقة."
            : "Distinguish established, promising, and emerging. Promising is not fact."
        }
      />
      {(frontierTopics ?? []).map((f) => (
        <Card key={f.id} className="space-y-2">
          <Badge tone={tone[f.status]}>{f.status}</Badge>
          <CardTitle>{t(f.title, lang)}</CardTitle>
          <p className="text-sm leading-relaxed text-muted">{t(f.body, lang)}</p>
        </Card>
      ))}
    </div>
  );
}
