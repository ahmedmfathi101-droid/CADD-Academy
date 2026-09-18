import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/python")({
  component: PythonPage,
});

const SAMPLE = `from rdkit import Chem
from rdkit.Chem import Descriptors, AllChem, DataStructs

smiles = ["CCO", "CCN", "c1ccccc1"]
mols = [Chem.MolFromSmiles(s) for s in smiles]
for m in mols:
    print(Descriptors.MolWt(m), Descriptors.TPSA(m), Descriptors.MolLogP(m))

fps = [AllChem.GetMorganFingerprintAsBitVect(m, 2, nBits=2048) for m in mols]
print(DataStructs.TanimotoSimilarity(fps[0], fps[1]))`;

function PythonPage() {
  const lang = useAcademy((s) => s.lang);
  const [smi, setSmi] = useState("CC(=O)Oc1ccccc1C(=O)O");
  const [bitsA, setA] = useState("11010110");
  const [bitsB, setB] = useState("11000111");
  const [mwGuess, setMw] = useState("");
  const [msg, setMsg] = useState<string | null>(null);
  const [imgOk, setImgOk] = useState(true);

  useEffect(() => {
    setImgOk(true);
  }, [smi]);

  const tan = useMemo(() => {
    const n = Math.min(bitsA.length, bitsB.length);
    let a = 0;
    let o = 0;
    for (let i = 0; i < n; i++) {
      const x = bitsA[i] === "1";
      const y = bitsB[i] === "1";
      if (x && y) a++;
      if (x || y) o++;
    }
    return o ? a / o : 0;
  }, [bitsA, bitsB]);

  const img = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${encodeURIComponent(smi)}/PNG`;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader
        title={t(ui.python, lang)}
        desc={
          lang === "ar"
            ? "تمارين في المتصفح. الشيفرة أدناه معيار RDKit — شغّلها محلياً في بيئتك. هنا نحاكي المنطق ولا ندّعي تشغيل RDKit على الخادم."
            : "In-browser exercises. The sample is standard RDKit — run it in your own environment. Here we simulate the logic and do not claim to execute RDKit on the server."
        }
      />
      <Card>
        <CardTitle>RDKit sketch (local)</CardTitle>
        <pre className="mt-3 overflow-x-auto rounded-sm bg-bg p-3 font-mono text-xs text-accent" dir="ltr">
          {SAMPLE}
        </pre>
      </Card>
      <Card className="space-y-3">
        <CardTitle>SMILES → structure (PubChem)</CardTitle>
        <Input value={smi} onChange={(e) => setSmi(e.target.value)} dir="ltr" className="font-mono" />
        {imgOk ? (
          <img
            src={img}
            alt="structure"
            className="max-h-48 rounded-md bg-fg p-2"
            onError={() => setImgOk(false)}
          />
        ) : (
          <p className="rounded-md border border-border bg-bg-subtle px-3 py-6 font-mono text-xs text-muted" dir="ltr">
            {smi}
            <span className="mt-2 block font-sans">
              {lang === "ar"
                ? "تعذّر جلب الرسم من PubChem. الصيغة أعلاه للتحقق اليدوي."
                : "PubChem drawing unavailable. The SMILES above is for manual verification."}
            </span>
          </p>
        )}
        <p className="text-xs text-subtle">
          {lang === "ar"
            ? "الرسم من PubChem إن وُجد المركب. ليس حساباً محلياً لـ RDKit."
            : "The drawing comes from PubChem if the compound exists. Not a local RDKit compute."}
        </p>
      </Card>
      <Card className="space-y-3">
        <CardTitle>Tanimoto lab</CardTitle>
        <div className="grid gap-3 sm:grid-cols-2">
          <Input value={bitsA} onChange={(e) => setA(e.target.value)} dir="ltr" className="font-mono" />
          <Input value={bitsB} onChange={(e) => setB(e.target.value)} dir="ltr" className="font-mono" />
        </div>
        <p className="font-mono tabular-nums text-accent">{tan.toFixed(3)}</p>
      </Card>
      <Card className="space-y-3">
        <CardTitle>
          {lang === "ar" ? "تمرين: الكتلة الجزيئية التقريبية للأسبرين C9H8O4؟" : "Exercise: approximate MW of aspirin C9H8O4?"}
        </CardTitle>
        <Input value={mwGuess} onChange={(e) => setMw(e.target.value)} />
        <Button
          onClick={() => {
            const n = Number(mwGuess);
            setMsg(
              Math.abs(n - 180.16) < 3
                ? lang === "ar"
                  ? "قرب صحيح. هذه كتلة اسمية تقريبية لا بديلاً عن Descriptors.MolWt."
                  : "Close. This is a nominal mass estimate, not a substitute for Descriptors.MolWt."
                : lang === "ar"
                  ? "أعد الحساب: 9×12 + 8×1 + 4×16 ≈ 180."
                  : "Recalculate: 9×12 + 8×1 + 4×16 ≈ 180.",
            );
          }}
        >
          {t(ui.check, lang)}
        </Button>
        {msg && <p className="text-sm text-muted">{msg}</p>}
      </Card>
    </div>
  );
}
