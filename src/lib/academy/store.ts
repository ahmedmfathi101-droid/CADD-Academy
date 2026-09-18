import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  DailyMinutes,
  Lang,
  NotebookEntry,
  ResearchProject,
  SkillDomain,
  TeachLevel,
} from "./types";

export interface QuizScore {
  score: number;
  total: number;
  at: number;
}

export interface FlashcardState {
  box: number;
  due: number;
}

export interface VivaTurn {
  q: string;
  a: string;
  critique: string;
}

interface AcademyState {
  lang: Lang;
  teachLevel: TeachLevel;
  pathId: string | null;
  professorMode: boolean;
  dailyMinutes: DailyMinutes;
  completedLessons: Record<string, number>;
  quizScores: Record<string, QuizScore>;
  flashcards: Record<string, FlashcardState>;
  notes: NotebookEntry[];
  projects: ResearchProject[];
  weakSkills: SkillDomain[];
  lastLessonId: string | null;
  setLang: (lang: Lang) => void;
  setTeachLevel: (level: TeachLevel) => void;
  setPath: (id: string | null) => void;
  setProfessorMode: (v: boolean) => void;
  setDailyMinutes: (m: DailyMinutes) => void;
  completeLesson: (id: string, skills?: SkillDomain[]) => void;
  uncompleteLesson: (id: string) => void;
  setQuizScore: (id: string, score: number, total: number) => void;
  reviewCard: (id: string, grade: "again" | "hard" | "good" | "easy") => void;
  addNote: (title: string, body: string, tags?: string[]) => void;
  updateNote: (id: string, patch: Partial<NotebookEntry>) => void;
  deleteNote: (id: string) => void;
  addProject: (p: ResearchProject) => void;
  toggleProjectStep: (projectId: string, index: number) => void;
  setLastLesson: (id: string) => void;
  resetProgress: () => void;
}

const BOX_INTERVALS_MS = [
  0,
  10 * 60 * 1000,
  24 * 60 * 60 * 1000,
  3 * 24 * 60 * 60 * 1000,
  7 * 24 * 60 * 60 * 1000,
  21 * 24 * 60 * 60 * 1000,
];

export const useAcademy = create<AcademyState>()(
  persist(
    (set, get) => ({
      lang: "ar",
      teachLevel: "intermediate",
      pathId: null,
      professorMode: false,
      dailyMinutes: 60,
      completedLessons: {},
      quizScores: {},
      flashcards: {},
      notes: [],
      projects: [],
      weakSkills: [],
      lastLessonId: null,
      setLang: (lang) => {
        if (typeof document !== "undefined") {
          document.documentElement.lang = lang;
          document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        }
        set({ lang });
      },
      setTeachLevel: (teachLevel) => set({ teachLevel }),
      setPath: (pathId) => set({ pathId }),
      setProfessorMode: (professorMode) =>
        set({
          professorMode,
          teachLevel: professorMode ? "researcher" : get().teachLevel,
        }),
      setDailyMinutes: (dailyMinutes) => set({ dailyMinutes }),
      completeLesson: (id, skills) => {
        const completed = { ...get().completedLessons, [id]: Date.now() };
        const weak = get().weakSkills.filter((s) => !skills?.includes(s));
        set({ completedLessons: completed, lastLessonId: id, weakSkills: weak });
      },
      uncompleteLesson: (id) => {
        const completed = { ...get().completedLessons };
        delete completed[id];
        set({ completedLessons: completed });
      },
      setQuizScore: (id, score, total) => {
        const ratio = total > 0 ? score / total : 0;
        set({
          quizScores: {
            ...get().quizScores,
            [id]: { score, total, at: Date.now() },
          },
          weakSkills:
            ratio < 0.6
              ? Array.from(new Set([...get().weakSkills, "research" as SkillDomain]))
              : get().weakSkills,
        });
      },
      reviewCard: (id, grade) => {
        const prev = get().flashcards[id] ?? { box: 0, due: 0 };
        let box = prev.box;
        if (grade === "again") box = 0;
        else if (grade === "hard") box = Math.max(1, box);
        else if (grade === "good") box = Math.min(5, box + 1);
        else box = Math.min(5, box + 2);
        const due = Date.now() + (BOX_INTERVALS_MS[box] ?? BOX_INTERVALS_MS[5]);
        set({
          flashcards: { ...get().flashcards, [id]: { box, due } },
        });
      },
      addNote: (title, body, tags = []) => {
        const now = Date.now();
        const entry: NotebookEntry = {
          id: `n-${now}`,
          title,
          body,
          tags,
          createdAt: now,
          updatedAt: now,
        };
        set({ notes: [entry, ...get().notes] });
      },
      updateNote: (id, patch) => {
        set({
          notes: get().notes.map((n) =>
            n.id === id ? { ...n, ...patch, updatedAt: Date.now() } : n,
          ),
        });
      },
      deleteNote: (id) => set({ notes: get().notes.filter((n) => n.id !== id) }),
      addProject: (p) => set({ projects: [p, ...get().projects] }),
      toggleProjectStep: (projectId, index) => {
        set({
          projects: get().projects.map((p) =>
            p.id === projectId
              ? {
                  ...p,
                  steps: p.steps.map((s, i) =>
                    i === index ? { ...s, done: !s.done } : s,
                  ),
                }
              : p,
          ),
        });
      },
      setLastLesson: (id) => set({ lastLessonId: id }),
      resetProgress: () =>
        set({
          completedLessons: {},
          quizScores: {},
          flashcards: {},
          lastLessonId: null,
          weakSkills: [],
        }),
    }),
    { name: "cadd-academy-v1" },
  ),
);
