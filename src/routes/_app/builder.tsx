import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import type { L10n, ResearchProject } from "@/lib/academy/types";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/builder")({
  component: BuilderPage,
});

const L = (ar: string, en: string): L10n => ({ ar, en });

function workflow(target: string, disease: string, ligand: string, objective: string) {
  return [
    { title: L("اختيار الهدف", "Target selection"), why: L(`لماذا ${target} لـ ${disease}؟ دليل بيولوجي لا موضة.`, `Why ${target} for ${disease}? Biological evidence, not fashion.`) },
    { title: L("استرجاع البنية", "Structure retrieval"), why: L("PDB أو نموذج — اذكر الجودة والسلسلة.", "PDB or model — state quality and chain.") },
    { title: L("تحضير البروتين", "Protein preparation"), why: L("برتنة، نواقص، معادن، مياه.", "Protonation, gaps, metals, waters.") },
    { title: L("تحليل الجيب", "Binding-site analysis"), why: L("دليل تجريبي/هولو للموقع.", "Experimental/holo evidence for the site.") },
    { title: L("مكتبة الليجند", "Ligand library"), why: L(`${ligand}: تنوع لا تكرار بصمات.`, `${ligand}: diversity, not fingerprint clones.`) },
    { title: L("تحقّق الالتحام", "Docking validation"), why: L("إعادة التحام + إثراء إن وُجدت نشطات.", "Redocking + enrichment if actives exist.") },
    { title: L("الالتحام", "Docking"), why: L("هيئات لا درجات مقدسة.", "Poses, not sacred scores.") },
    { title: L("MD", "MD"), why: L("نُسخ ومعيار تقارب مكتوب مسبقاً.", "Replicas and a pre-written convergence criterion.") },
    { title: L("تحليل المسار", "Trajectory analysis"), why: L("أكثر من RMSD.", "More than RMSD.") },
    { title: L("طاقة الارتباط", "Binding energy"), why: L("اختر طريقة تناسب السؤال لا الجدول.", "Pick a method that fits the question, not the table.") },
    { title: L("ADMET", "ADMET"), why: L("ترشيح فرضيات لا شهادة سلامة.", "Hypothesis filters, not a safety certificate.") },
    { title: L("أولوية الإصابات", "Hit prioritization"), why: L(`${objective} — كيمياء طبية + حساب + قابلية تخليق.`, `${objective} — medicinal chemistry + computation + synthetic access.`) },
  ];
}

function BuilderPage() {
  const lang = useAcademy((s) => s.lang);
  const add = useAcademy((s) => s.addProject);
  const [target, setTarget] = useState("EGFR kinase");
  const [disease, setDisease] = useState("NSCLC");
  const [ligand, setLigand] = useState("quinazoline analogues");
  const [objective, setObjective] = useState("Generate a defensible hit-hypothesis series");
  const [steps, setSteps] = useState<ReturnType<typeof workflow> | null>(null);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title={t(ui.builder, lang)}
        desc={
          lang === "ar"
            ? "كل صندوق قرار. لن تُختلق معاملات ناقصة."
            : "Every box is a decision. Missing parameters will not be invented."
        }
      />
      <Card className="grid gap-3">
        <label className="text-sm text-muted">
          Target
          <Input value={target} onChange={(e) => setTarget(e.target.value)} className="mt-1" />
        </label>
        <label className="text-sm text-muted">
          Disease
          <Input value={disease} onChange={(e) => setDisease(e.target.value)} className="mt-1" />
        </label>
        <label className="text-sm text-muted">
          Ligand class
          <Input value={ligand} onChange={(e) => setLigand(e.target.value)} className="mt-1" />
        </label>
        <label className="text-sm text-muted">
          Objective
          <Textarea value={objective} onChange={(e) => setObjective(e.target.value)} />
        </label>
        <Button
          onClick={() => {
            const w = workflow(target, disease, ligand, objective);
            setSteps(w);
            const p: ResearchProject = {
              id: `p-${Date.now()}`,
              target,
              disease,
              ligandClass: ligand,
              objective,
              createdAt: Date.now(),
              steps: w.map((s) => ({ ...s, done: false })),
            };
            add(p);
          }}
        >
          {t(ui.generate, lang)}
        </Button>
      </Card>
      {steps && (
        <ol className="space-y-3">
          {steps.map((s, i) => (
            <li key={i} className="rounded-lg border border-border bg-bg-elevated p-4">
              <p className="font-medium">
                <span className="me-2 font-mono text-signal">{i + 1}</span>
                {t(s.title, lang)}
              </p>
              <p className="mt-1 text-sm text-muted">
                {t(ui.why, lang)}: {t(s.why, lang)}
              </p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
