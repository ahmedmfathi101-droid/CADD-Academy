import { useState } from "react";
import { X } from "lucide-react";
import { askMentor } from "@/lib/academy/ai";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/input";

export function MentorPanel({
  open,
  onClose,
  context,
}: {
  open: boolean;
  onClose: () => void;
  context?: string;
}) {
  const lang = useAcademy((s) => s.lang);
  const teachLevel = useAcademy((s) => s.teachLevel);
  const [prompt, setPrompt] = useState("");
  const [log, setLog] = useState<{ q: string; a: string }[]>([]);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function send() {
    const q = prompt.trim();
    if (!q || busy) return;
    setBusy(true);
    setErr(null);
    setPrompt("");
    try {
      const res = await askMentor({
        data: { prompt: q, lang, teachLevel, context },
      });
      if (!res.ok) {
        setErr(t(ui.aiUnavailable, lang));
        setLog((l) => [...l, { q, a: t(ui.aiUnavailable, lang) }]);
      } else {
        setLog((l) => [...l, { q, a: res.text }]);
      }
    } catch {
      setErr(t(ui.aiUnavailable, lang));
    } finally {
      setBusy(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-bg/50">
      <button type="button" className="flex-1" aria-label={t(ui.close, lang)} onClick={onClose} />
      <aside className="flex h-full w-full max-w-md flex-col border-s border-border bg-bg-elevated">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div>
            <p className="font-display text-lg">{t(ui.mentor, lang)}</p>
            <p className="text-xs text-muted">{t(ui.bilingualNote, lang)}</p>
          </div>
          <button type="button" className="size-11 text-muted" onClick={onClose} aria-label={t(ui.close, lang)}>
            <X className="mx-auto size-5" />
          </button>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4 text-sm leading-relaxed">
          {log.length === 0 && (
            <p className="text-muted">
              {lang === "ar"
                ? "مرشد متشكك. اسأل عن افتراض، معادلة، بروتوكول، أو ادّعاء في ورقة. لن يمدحك إن أخطأت."
                : "A skeptical mentor. Ask about an assumption, equation, protocol, or a paper’s claim. It will not flatter error."}
            </p>
          )}
          {log.map((t0, i) => (
            <div key={i} className="space-y-2">
              <p className="rounded-md bg-bg-subtle px-3 py-2 text-fg">{t0.q}</p>
              <p className="whitespace-pre-wrap text-muted">{t0.a}</p>
            </div>
          ))}
          {busy && <p className="text-signal">{t(ui.thinking, lang)}</p>}
          {err && <p className="text-danger">{err}</p>}
        </div>
        <div className="border-t border-border p-3">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={t(ui.ask, lang)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void send();
              }
            }}
          />
          <Button className="mt-2 w-full" onClick={() => void send()} disabled={busy}>
            {t(ui.send, lang)}
          </Button>
        </div>
      </aside>
    </div>
  );
}
