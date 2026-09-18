import { createFileRoute } from "@tanstack/react-router";
import { KatexBlock } from "@/components/katex-block";
import { PageHeader } from "@/components/layout/app-shell";
import { Card, CardTitle } from "@/components/ui/card";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/stats")({
  component: StatsPage,
});

function StatsPage() {
  const lang = useAcademy((s) => s.lang);
  const items = [
    {
      t: { ar: "المتوسط والوسيط", en: "Mean and median" },
      b: {
        ar: "المتوسط حسّاس للشواذ (نسخة MD منفجرة). الوسيط أصدق أحياناً.",
        en: "The mean is sensitive to outliers (an exploded MD replica). The median is sometimes more honest.",
      },
    },
    {
      t: { ar: "الانحراف المعياري مقابل الخطأ المعياري", en: "SD versus SEM" },
      b: {
        ar: "SD تشتت. SEM تشتت المتوسط. لا تُخفِ التشتت بـ SEM لتبدو النسخ متفقة.",
        en: "SD is spread. SEM is uncertainty of the mean. Do not hide spread behind SEM to fake replica agreement.",
      },
    },
    {
      t: { ar: "فترة الثقة", en: "Confidence interval" },
      b: {
        ar: "ليست احتمال أن «الحقيقة» داخلها بالمعنى الساذج إن أُسيء تفسير التكرار.",
        en: "Not a naive probability that “truth” sits inside it if the frequentist meaning is abused.",
      },
    },
    {
      t: { ar: "Bootstrap", en: "Bootstrap" },
      b: {
        ar: "إعادة معاينة لتقدير خطأ. لا يخلق معاينة فيزيائية ناقصة.",
        en: "Resampling to estimate error. It does not create missing physical sampling.",
      },
    },
    {
      t: { ar: "مقارنات متعددة", en: "Multiple comparisons" },
      b: {
        ar: "عشرون بقايا في تفكيك طاقة = عشرون اختباراً. احذر القصص الانتقائية.",
        en: "Twenty residues in a decomposition are twenty tests. Beware selective stories.",
      },
    },
    {
      t: { ar: "حجم الأثر", en: "Effect size" },
      b: {
        ar: "فرق 0.1 kcal/mol قد يكون «معنوي» إحصائياً وبلا معنى كيميائي.",
        en: "A 0.1 kcal/mol gap can be statistically “significant” and chemically meaningless.",
      },
    },
  ];
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      <PageHeader title={t(ui.stats, lang)} />
      <KatexBlock latex={"\\mathrm{SEM} = s / \\sqrt{n}"} />
      {items.map((it) => (
        <Card key={it.t.en}>
          <CardTitle>{t(it.t, lang)}</CardTitle>
          <p className="mt-2 text-sm leading-relaxed text-muted">{t(it.b, lang)}</p>
        </Card>
      ))}
    </div>
  );
}
