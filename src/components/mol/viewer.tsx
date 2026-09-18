import { useEffect, useRef, useState } from "react";
import { fetchPdb } from "@/lib/academy/pdb";
import { cn } from "@/lib/utils";

type MolNS = {
  createViewer: (el: HTMLElement, opts: Record<string, unknown>) => MolApi;
  SurfaceType?: { VDW: unknown; MS?: unknown };
};

declare global {
  interface Window {
    $3Dmol?: MolNS;
    "3Dmol"?: MolNS;
  }
}

interface MolApi {
  addModel: (data: string, format: string) => void;
  setStyle: (sel: object, style: object) => void;
  addStyle: (sel: object, style: object) => void;
  addSurface?: (typ: unknown, style: object, sel?: object) => void;
  zoomTo: () => void;
  render: () => void;
  clear: () => void;
  resize: () => void;
  setBackgroundColor: (c: string) => void;
}

let loadPromise: Promise<MolNS> | null = null;

function molApi(): MolNS | undefined {
  if (typeof window === "undefined") return undefined;
  return window.$3Dmol ?? window["3Dmol"];
}

function load3Dmol() {
  const existing = molApi();
  if (existing?.createViewer) return Promise.resolve(existing);
  if (loadPromise) return loadPromise;
  loadPromise = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "/vendor/3dmol-min.js";
    s.async = true;
    s.onload = () => {
      const api = molApi();
      if (api && !window.$3Dmol) window.$3Dmol = api;
      if (api?.createViewer) resolve(api);
      else reject(new Error("3Dmol global missing"));
    };
    s.onerror = () => {
      loadPromise = null;
      reject(new Error("3Dmol failed to load"));
    };
    document.head.appendChild(s);
  });
  return loadPromise;
}

export function MolViewer({
  pdb,
  ligand,
  height = 360,
  className,
}: {
  pdb: string;
  ligand?: string;
  height?: number;
  className?: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [style, setStyle] = useState<"cartoon" | "pocket" | "surface">("cartoon");
  const [detail, setDetail] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    let viewer: MolApi | null = null;

    async function run() {
      setStatus("loading");
      setDetail(null);
      try {
        const api = await load3Dmol();
        const packed = await fetchPdb({ data: { id: pdb } });
        if (!packed.ok) throw new Error(packed.error);
        if (cancelled || !hostRef.current) return;
        hostRef.current.replaceChildren();
        viewer = api.createViewer(hostRef.current, {
          backgroundColor: "#0b0c0e",
          id: `mol-${pdb}`,
        });
        viewer.addModel(packed.pdb, "pdb");
        viewer.setStyle({}, { cartoon: { color: "spectrum" } });
        if (style === "pocket" || ligand) {
          viewer.addStyle(
            ligand ? { resn: ligand } : { hetflag: true },
            { stick: { radius: 0.18, colorscheme: "greenCarbon" } },
          );
        }
        if (style === "surface") {
          if (api.SurfaceType && viewer.addSurface) {
            viewer.addSurface(api.SurfaceType.VDW, { opacity: 0.65, color: "white" }, {});
          } else {
            viewer.addStyle({}, { stick: { radius: 0.1 } });
          }
        }
        viewer.resize();
        viewer.zoomTo();
        viewer.render();
        requestAnimationFrame(() => {
          if (cancelled || !viewer) return;
          viewer.resize();
          viewer.render();
        });
        if (!cancelled) setStatus("ready");
      } catch (err) {
        if (!cancelled) {
          setStatus("error");
          setDetail(err instanceof Error ? err.message : "load failed");
        }
      }
    }
    void run();
    return () => {
      cancelled = true;
    };
  }, [pdb, style, ligand]);

  return (
    <div className={cn("overflow-hidden rounded-lg border border-border bg-bg", className)}>
      <div className="flex items-center justify-between gap-2 border-b border-border px-3 py-2">
        <p className="font-mono text-xs text-muted">
          PDB {pdb.toUpperCase()}
          {ligand ? ` · ${ligand}` : ""}
        </p>
        <div className="flex gap-1">
          {(["cartoon", "pocket", "surface"] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStyle(s)}
              className={cn(
                "h-8 rounded-sm px-2 text-[11px]",
                style === s ? "bg-accent text-accent-fg" : "text-muted hover:text-fg",
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="relative w-full" style={{ height }}>
        <div ref={hostRef} className="absolute inset-0" />
        {status !== "ready" && (
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4 text-center text-sm text-muted">
            {status === "loading"
              ? "Loading structure…"
              : `Could not load ${pdb.toUpperCase()} (${detail ?? "network"}). The code is an educational example — verify on RCSB before citing.`}
          </div>
        )}
      </div>
    </div>
  );
}
