import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/methods")({
  component: MethodsPage,
});

const fields = [
  ["software", "Software + version"],
  ["forcefield", "Force field"],
  ["water", "Water model"],
  ["time", "Simulation time"],
  ["temp", "Temperature"],
  ["pressure", "Pressure"],
  ["dt", "Timestep"],
  ["elec", "Electrostatics"],
  ["cutoff", "Cutoff"],
  ["replicas", "Replicas"],
] as const;

function MethodsPage() {
  const lang = useAcademy((s) => s.lang);
  const [vals, setVals] = useState<Record<string, string>>({});
  const [out, setOut] = useState<string | null>(null);

  const missing = useMemo(
    () => fields.filter(([k]) => !vals[k]?.trim()).map(([, label]) => label),
    [vals],
  );

  function generate() {
    if (missing.length) {
      setOut(null);
      return;
    }
    const v = vals;
    const en = `Molecular dynamics was performed with ${v.software}. The ${v.forcefield} force field was used with the ${v.water} water model. Production simulations were run for ${v.time} at ${v.temp} and ${v.pressure} with a ${v.dt} timestep. Long-range electrostatics were treated with ${v.elec} and a real-space cutoff of ${v.cutoff}. ${v.replicas} independent replica(s) were collected. Parameters not listed were not assumed.`;
    const ar = `أُجريت الديناميكا الجزيئية باستخدام ${v.software}. استُخدم حقل ${v.forcefield} مع نموذج ماء ${v.water}. استمرت محاكاة الإنتاج ${v.time} عند ${v.temp} و${v.pressure} بخطوة ${v.dt}. عولجت الكهروستاتيك طويلة المدى بـ ${v.elec} وقطع ${v.cutoff}. جُمعت ${v.replicas} نسخة مستقلة. ما لم يُذكر لم يُفترض.`;
    setOut(lang === "ar" ? `${ar}\n\n${en}` : `${en}\n\n${ar}`);
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader title={t(ui.methods, lang)} desc={t(ui.missing, lang)} />
      <Card className="grid gap-3">
        {fields.map(([k, label]) => (
          <label key={k} className="text-sm text-muted">
            {label}
            <Input
              className="mt-1"
              value={vals[k] ?? ""}
              onChange={(e) => setVals((s) => ({ ...s, [k]: e.target.value }))}
            />
          </label>
        ))}
        <Button onClick={generate}>{t(ui.generate, lang)}</Button>
        {missing.length > 0 && (
          <p className="text-sm text-warn">
            {t(ui.missing, lang)}: {missing.join(", ")}
          </p>
        )}
      </Card>
      {out && (
        <Card>
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">{out}</pre>
        </Card>
      )}
    </div>
  );
}
