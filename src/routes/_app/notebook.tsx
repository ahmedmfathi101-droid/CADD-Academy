import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Textarea } from "@/components/ui/input";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/notebook")({
  component: NotebookPage,
});

function NotebookPage() {
  const lang = useAcademy((s) => s.lang);
  const notes = useAcademy((s) => s.notes);
  const add = useAcademy((s) => s.addNote);
  const del = useAcademy((s) => s.deleteNote);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [q, setQ] = useState("");

  function exportNotes() {
    const blob = new Blob([JSON.stringify(notes, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cadd-notebook.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  const shown = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(q.toLowerCase()) ||
      n.body.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <PageHeader title={t(ui.notebook, lang)} />
      <Card className="space-y-3">
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder={t(ui.newNote, lang)} />
        <Textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <div className="flex gap-2">
          <Button
            onClick={() => {
              if (!title.trim()) return;
              add(title.trim(), body);
              setTitle("");
              setBody("");
            }}
          >
            {t(ui.save, lang)}
          </Button>
          <Button variant="secondary" onClick={exportNotes}>
            {t(ui.export, lang)}
          </Button>
        </div>
      </Card>
      <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t(ui.search, lang)} />
      {shown.length === 0 && <p className="text-muted">{t(ui.emptyNotes, lang)}</p>}
      {shown.map((n) => (
        <Card key={n.id} className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h2 className="font-display text-xl">{n.title}</h2>
            <Button variant="ghost" size="sm" onClick={() => del(n.id)}>
              {t(ui.delete, lang)}
            </Button>
          </div>
          <p className="whitespace-pre-wrap text-sm text-muted">{n.body}</p>
        </Card>
      ))}
    </div>
  );
}
