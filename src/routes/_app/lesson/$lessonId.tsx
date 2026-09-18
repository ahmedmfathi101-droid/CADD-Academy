import { createFileRoute } from "@tanstack/react-router";
import { LessonView } from "@/components/lesson/lesson-view";
import { lessons } from "@/lib/academy/catalog";
import { getLesson } from "@/lib/academy/content";
import { ui } from "@/lib/academy/i18n";
import { useAcademy } from "@/lib/academy/store";
import { t } from "@/lib/utils";

export const Route = createFileRoute("/_app/lesson/$lessonId")({
  component: LessonPage,
});

function LessonPage() {
  const { lessonId } = Route.useParams();
  const lang = useAcademy((s) => s.lang);
  const lesson = getLesson(lessonId);
  const idx = lessons.findIndex((l) => l.id === lessonId);
  const nextId = idx >= 0 ? lessons[idx + 1]?.id : undefined;

  if (!lesson) {
    return <p className="text-muted">{t(ui.noResults, lang)}</p>;
  }

  return <LessonView lesson={lesson} nextId={nextId} />;
}
