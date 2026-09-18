import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/app-shell";
import { Card, CardTitle } from "@/components/ui/card";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/figures")({
  component: FiguresPage,
});

function FiguresPage() {
  const lang = useAcademy((s) => s.lang);
  const items = [
    { t: { ar: "هيئة الارتباط", en: "Binding pose" }, b: { ar: "خلفية هادئة، ليغند واضح، بقايا مسمّاة، لا ظلال مسرحية.", en: "Quiet background, clear ligand, labelled residues, no theatrical shadows." } },
    { t: { ar: "تفاعلات ثنائية البعد", en: "2D interactions" }, b: { ar: "كل خط ادّعاء. لا تزدحم.", en: "Every dash is a claim. Do not clutter." } },
    { t: { ar: "RMSD/RMSF", en: "RMSD/RMSF" }, b: { ar: "محور يبدأ من قيمة صادقة. أظهر النسخ.", en: "An honest axis. Show replicas." } },
    { t: { ar: "SASA و Rg", en: "SASA and Rg" }, b: { ar: "وحدات ونافذة تمهيد مذكورة.", en: "Units and any smoothing window stated." } },
    { t: { ar: "PCA و FEL", en: "PCA and FEL" }, b: { ar: "التجويف ليس مساراً حركياً تلقائياً.", en: "A basin is not automatically a kinetic pathway." } },
    { t: { ar: "DCCM", en: "DCCM" }, b: { ar: "ارتباط ≠ سببية.", en: "Correlation ≠ causation." } },
    { t: { ar: "MM/PBSA", en: "MM/PBSA" }, b: { ar: "أشرطة خطأ أو لا تنشر جدولاً بثلاث خانات.", en: "Error bars, or do not publish a three-decimal table." } },
  ];
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <PageHeader title={t(ui.figures, lang)} />
      {items.map((it) => (
        <Card key={it.t.en}>
          <CardTitle>{t(it.t, lang)}</CardTitle>
          <p className="mt-2 text-sm text-muted">{t(it.b, lang)}</p>
        </Card>
      ))}
    </div>
  );
}
