import katex from "katex";
import { useMemo } from "react";
import "katex/dist/katex.min.css";
import { cn } from "@/lib/utils";

export function KatexBlock({
  latex,
  display = true,
  className,
}: {
  latex: string;
  display?: boolean;
  className?: string;
}) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(latex, {
        displayMode: display,
        throwOnError: false,
        strict: "ignore",
      });
    } catch {
      return latex;
    }
  }, [latex, display]);

  return (
    <div
      dir="ltr"
      className={cn("my-4 overflow-x-auto text-fg", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function KatexInline({ latex }: { latex: string }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(latex, { displayMode: false, throwOnError: false, strict: "ignore" });
    } catch {
      return latex;
    }
  }, [latex]);
  return (
    <span dir="ltr" className="text-fg" dangerouslySetInnerHTML={{ __html: html }} />
  );
}
