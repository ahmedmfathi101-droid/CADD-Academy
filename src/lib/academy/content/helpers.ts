import { lessonById } from "@/lib/academy/catalog";
import type { L10n, Lesson, LessonSection } from "@/lib/academy/types";

export function L(ar: string, en: string): L10n {
  return { ar, en };
}

export function expand(
  id: string,
  objectives: L10n[],
  sections: LessonSection[],
  related: string[] = [],
): Lesson {
  const meta = lessonById[id];
  if (!meta) throw new Error(`Unknown lesson id: ${id}`);
  return { ...meta, objectives, sections, related };
}
