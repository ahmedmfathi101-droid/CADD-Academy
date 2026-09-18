import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { L10n, Lang, TeachLevel } from "@/lib/academy/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function t(text: L10n | string | null | undefined, lang: Lang): string {
  if (!text) return "";
  if (typeof text === "string") return text;
  return text[lang] || text.en || text.ar || "";
}

export const TEACH_ORDER: TeachLevel[] = [
  "beginner",
  "intermediate",
  "advanced",
  "researcher",
  "professor",
];

export function teachRank(level: TeachLevel): number {
  return TEACH_ORDER.indexOf(level);
}

export function sectionVisible(
  minLevel: TeachLevel | undefined,
  maxLevel: TeachLevel | undefined,
  current: TeachLevel,
): boolean {
  const rank = teachRank(current);
  if (minLevel && rank < teachRank(minLevel)) return false;
  if (maxLevel && rank > teachRank(maxLevel)) return false;
  return true;
}
