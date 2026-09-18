import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/layout/app-shell";
import { MolViewer } from "@/components/mol/viewer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/viewer")({
  component: ViewerPage,
});

const EXAMPLES = ["1HSG", "1IEP", "3ERT", "2RH1", "2ITY"];

function ViewerPage() {
  const lang = useAcademy((s) => s.lang);
  const [pdb, setPdb] = useState("1HSG");
  const [active, setActive] = useState("1HSG");

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <PageHeader
        title={t(ui.viewer, lang)}
        desc={
          lang === "ar"
            ? "بنى من RCSB. الرموز المعروضة أمثلة تعليمية شائعة — تحقّق قبل الاستشهاد."
            : "Structures from RCSB. Shown codes are common teaching examples — verify before citing."
        }
      />
      <div className="flex flex-wrap gap-2">
        {EXAMPLES.map((c) => (
          <Button
            key={c}
            size="sm"
            variant={active === c ? "default" : "secondary"}
            onClick={() => {
              setPdb(c);
              setActive(c);
            }}
          >
            {c}
          </Button>
        ))}
      </div>
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          setActive(pdb.trim().toUpperCase());
        }}
      >
        <Input
          value={pdb}
          onChange={(e) => setPdb(e.target.value)}
          className="max-w-40 font-mono"
          dir="ltr"
        />
        <Button type="submit">{t(ui.start, lang)}</Button>
      </form>
      <MolViewer pdb={active} height={420} />
    </div>
  );
}
