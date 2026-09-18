import { createServerFn } from "@tanstack/react-start";

export const fetchPdb = createServerFn({ method: "POST" })
  .validator((input: { id: string }) => input)
  .handler(async ({ data }) => {
    const id = data.id.replace(/[^a-zA-Z0-9]/g, "").slice(0, 8).toUpperCase();
    if (id.length < 3) return { ok: false as const, error: "invalid id" };
    try {
      const res = await fetch(`https://files.rcsb.org/view/${id}.pdb`);
      if (!res.ok) return { ok: false as const, error: `RCSB ${res.status}` };
      const pdb = await res.text();
      if (!pdb || pdb.length < 40) return { ok: false as const, error: "empty" };
      return { ok: true as const, pdb };
    } catch {
      return { ok: false as const, error: "network" };
    }
  });
