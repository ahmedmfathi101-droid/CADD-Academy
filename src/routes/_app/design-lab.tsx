import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/design-lab")({
  component: DesignLabPage,
});

const ASPIRIN = "CC(=O)Oc1ccccc1C(=O)O";

const mods = [
  {
    id: "me",
    label: { ar: "أضف ميثيلاً", en: "Add a methyl" },
    effect: {
      ar: "قد يملأ جيباً كارهًا للماء أو يخلق تصادماً. logP يرتفع عادة. تحقق من الهيئة لا الشعار.",
      en: "May fill a hydrophobic pocket or create a clash. logP usually rises. Check the pose, not the slogan.",
    },
  },
  {
    id: "f",
    label: { ar: "أدخل فلوراً", en: "Introduce fluorine" },
    effect: {
      ar: "قد يسد استقلاباً أو يغيّر pKa. ليس «سحر القوة» دائماً.",
      en: "May block metabolism or shift pKa. Not automatic potency magic.",
    },
  },
  {
    id: "amide",
    label: { ar: "غيّر الأميد", en: "Change the amide" },
    effect: {
      ar: "الأميد مانح/مستقبل ومستوٍ. كسره يدمّر غالباً هندسة hinge.",
      en: "Amides are donor/acceptor and planar. Breaking one often wrecks hinge geometry.",
    },
  },
  {
    id: "ph",
    label: { ar: "استبدل الفينيل", en: "Replace phenyl" },
    effect: {
      ar: "هيتيروسيكل قد يحسّن الذوبان ويغيّر π-stacking. راقب hERG إن زاد القلوية.",
      en: "A heterocycle may help solubility and change π-stacking. Watch hERG if basicity rises.",
    },
  },
];

function DesignLabPage() {
  const lang = useAcademy((s) => s.lang);
  const [picked, setPicked] = useState<string | null>(null);
  const [imgOk, setImgOk] = useState(true);
  const mod = mods.find((m) => m.id === picked);
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title={t(ui.designLab, lang)}
        desc={
          lang === "ar"
            ? "ليغند تعليمي (أسبرين كهيكل بسيط للتفكير لا كهدف كيناز). كل تعديل مقايضة."
            : "An educational ligand (aspirin as a simple thinking scaffold, not a kinase target). Every edit is a trade-off."
        }
      />
      <Card className="space-y-3">
        <CardTitle>{lang === "ar" ? "أي تعديل؟" : "Which modification?"}</CardTitle>
        {imgOk ? (
          <img
            src={`https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${encodeURIComponent(ASPIRIN)}/PNG`}
            alt="aspirin"
            className="max-h-40 rounded-md bg-fg p-2"
            onError={() => setImgOk(false)}
          />
        ) : (
          <p className="rounded-md border border-border bg-bg-subtle px-3 py-6 font-mono text-xs text-muted" dir="ltr">
            {ASPIRIN}
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          {mods.map((m) => (
            <Button key={m.id} size="sm" variant={picked === m.id ? "default" : "secondary"} onClick={() => setPicked(m.id)}>
              {t(m.label, lang)}
            </Button>
          ))}
        </div>
        {mod && (
          <div className="space-y-2 text-sm leading-relaxed">
            <p>{t(mod.effect, lang)}</p>
            <ul className="list-disc ps-5 text-muted">
              <li>Potency: {lang === "ar" ? "فرضية تحتاج هيئة وSAR." : "a hypothesis needing a pose and SAR."}</li>
              <li>Lipophilicity: {lang === "ar" ? "كل كربون يُحسب." : "every carbon counts."}</li>
              <li>Solubility / metabolism / selectivity / toxicity: {lang === "ar" ? "لا تُشترَى بدرجة التحام." : "not purchased with a docking score."}</li>
            </ul>
          </div>
        )}
      </Card>
    </div>
  );
}
