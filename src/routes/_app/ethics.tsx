import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/app-shell";
import { Card, CardTitle } from "@/components/ui/card";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/ethics")({
  component: EthicsPage,
});

function EthicsPage() {
  const lang = useAcademy((s) => s.lang);
  const items = [
    { t: { ar: "إعادة الإنتاج", en: "Reproducibility" }, b: { ar: "ملفات الدخل والإصدارات والبذور.", en: "Inputs, versions, seeds." } },
    { t: { ar: "انتقاء الكرز", en: "Cherry-picking" }, b: { ar: "إخفاء النسخ الفاشلة.", en: "Hiding failed replicas." } },
    { t: { ar: "p-hacking", en: "p-hacking" }, b: { ar: "تغيير التحليل حتى يظهر نجوم.", en: "Tweaking analysis until stars appear." } },
    { t: { ar: "المبالغة في التفسير", en: "Overinterpretation" }, b: { ar: "نموذج ≠ حقيقة.", en: "A model is not a fact." } },
    { t: { ar: "تقارير انتقائية", en: "Selective reporting" }, b: { ar: "إبلاغ الطريقة التي «نجحت» فقط.", en: "Reporting only the protocol that “worked”." } },
    { t: { ar: "استشهادات مختلقة", en: "Fake citations" }, b: { ar: "لا تخترع DOI. إن لم تتأكد: Verification required.", en: "Do not invent DOIs. If unsure: Verification required." } },
    { t: { ar: "التلاعب بالصور", en: "Image manipulation" }, b: { ar: "قصّ محور RMSD ليبدو مستوياً خداع.", en: "Cropping an RMSD axis to look flat is deceit." } },
    { t: { ar: "الشفافية", en: "Transparency" }, b: { ar: "اكتب ما لم ينجح.", en: "Write down what failed." } },
  ];
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <PageHeader title={t(ui.ethics, lang)} />
      {items.map((it) => (
        <Card key={it.t.en}>
          <CardTitle>{t(it.t, lang)}</CardTitle>
          <p className="mt-2 text-sm text-muted">{t(it.b, lang)}</p>
        </Card>
      ))}
    </div>
  );
}
