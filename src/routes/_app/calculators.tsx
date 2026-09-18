import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { KatexBlock } from "@/components/katex-block";
import { PageHeader } from "@/components/layout/app-shell";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/calculators")({
  component: CalculatorsPage,
});

function CalculatorsPage() {
  const lang = useAcademy((s) => s.lang);
  const [kd, setKd] = useState("1e-6");
  const [T, setT] = useState("298");
  const [eKcal, setE] = useState("2");
  const [eps, setEps] = useState("0.2");
  const [sig, setSig] = useState("3.5");
  const [a, setA] = useState("11110000");
  const [b, setB] = useState("11011000");

  const dG = useMemo(() => {
    const k = Number(kd);
    const temp = Number(T);
    if (!Number.isFinite(k) || k <= 0 || !Number.isFinite(temp) || temp <= 0) return null;
    const R = 0.001987204258; // kcal/mol·K
    const value = R * temp * Math.log(k / 1);
    return value;
  }, [kd, T]);

  const boltz = useMemo(() => {
    const e = Number(eKcal);
    const temp = Number(T);
    if (!Number.isFinite(e) || !Number.isFinite(temp) || temp <= 0) return null;
    const RT = 0.001987204258 * temp;
    return Math.exp(-e / RT);
  }, [eKcal, T]);

  const lj = useMemo(() => {
    const ε = Number(eps);
    const σ = Number(sig);
    if (!Number.isFinite(ε) || !Number.isFinite(σ) || σ <= 0) return [];
    const pts = [];
    for (let r = 0.7 * σ; r <= 2.5 * σ; r += σ / 25) {
      const sr = σ / r;
      const e = 4 * ε * (sr ** 12 - sr ** 6);
      pts.push({ r: Number(r.toFixed(2)), e: Number(e.toFixed(3)) });
    }
    return pts;
  }, [eps, sig]);

  const tanimoto = useMemo(() => {
    const A = [...a].filter((c) => c === "1" || c === "0");
    const B = [...b].filter((c) => c === "1" || c === "0");
    const n = Math.min(A.length, B.length);
    if (!n) return null;
    let and = 0;
    let or = 0;
    for (let i = 0; i < n; i++) {
      const x = A[i] === "1";
      const y = B[i] === "1";
      if (x && y) and += 1;
      if (x || y) or += 1;
    }
    return or === 0 ? 0 : and / or;
  }, [a, b]);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        title={t(ui.calculators, lang)}
        desc={
          lang === "ar"
            ? "حسابات مفاهيمية. حدّد المعيار والوحدات في أي ورقة. ليست مقايسة."
            : "Conceptual calculators. State standard state and units in any paper. Not an assay."
        }
      />

      <Card className="space-y-3">
        <CardTitle>Kd ↔ ΔG°</CardTitle>
        <KatexBlock latex={"\\Delta G^{\\circ} = RT \\ln(K_d / 1\\,\\mathrm{M})"} />
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm text-muted">
            Kd (M)
            <Input value={kd} onChange={(e) => setKd(e.target.value)} className="mt-1" />
          </label>
          <label className="text-sm text-muted">
            T (K)
            <Input value={T} onChange={(e) => setT(e.target.value)} className="mt-1" />
          </label>
        </div>
        <p className="font-mono text-lg tabular-nums text-accent">
          {dG === null ? "—" : `${dG.toFixed(2)} kcal·mol⁻¹`}
        </p>
        <p className="text-xs text-subtle">
          {lang === "ar"
            ? "مثال تعليمي بمعيار 1 M. الإشارة السالبة تعني ارتباطاً عفوياً تحت هذا المعيار."
            : "Educational example with a 1 M standard state. Negative means favorable under that standard."}
        </p>
      </Card>

      <Card className="space-y-3">
        <CardTitle>Boltzmann factor e^{"-E/RT"}</CardTitle>
        <label className="text-sm text-muted">
          E (kcal/mol)
          <Input value={eKcal} onChange={(e) => setE(e.target.value)} className="mt-1" />
        </label>
        <p className="font-mono text-lg tabular-nums text-accent">
          {boltz === null ? "—" : boltz.toExponential(3)}
        </p>
        <p className="text-xs text-subtle">
          {lang === "ar"
            ? "ارتفاع بسيط في الطاقة يخفض الاحتمال أسّياً — لهذا نُعاين."
            : "A small energy rise crushes probability exponentially — this is why we sample."}
        </p>
      </Card>

      <Card className="space-y-3">
        <CardTitle>Lennard-Jones</CardTitle>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm text-muted">
            ε
            <Input value={eps} onChange={(e) => setEps(e.target.value)} className="mt-1" />
          </label>
          <label className="text-sm text-muted">
            σ
            <Input value={sig} onChange={(e) => setSig(e.target.value)} className="mt-1" />
          </label>
        </div>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lj}>
              <XAxis dataKey="r" stroke="#6e6a64" fontSize={11} />
              <YAxis stroke="#6e6a64" fontSize={11} />
              <Tooltip />
              <Line type="monotone" dataKey="e" stroke="#8f9d96" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="space-y-3">
        <CardTitle>Tanimoto (bit strings)</CardTitle>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm text-muted">
            A
            <Input value={a} onChange={(e) => setA(e.target.value)} className="mt-1 font-mono" dir="ltr" />
          </label>
          <label className="text-sm text-muted">
            B
            <Input value={b} onChange={(e) => setB(e.target.value)} className="mt-1 font-mono" dir="ltr" />
          </label>
        </div>
        <p className="font-mono text-lg tabular-nums text-accent">
          {tanimoto === null ? "—" : tanimoto.toFixed(3)}
        </p>
      </Card>
    </div>
  );
}
