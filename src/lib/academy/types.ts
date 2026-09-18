export type Lang = "ar" | "en";

export type TeachLevel =
  | "beginner"
  | "intermediate"
  | "advanced"
  | "researcher"
  | "professor";

export type SkillDomain =
  | "chemistry"
  | "physics"
  | "math"
  | "structure"
  | "cheminformatics"
  | "mechanics"
  | "quantum"
  | "docking"
  | "md"
  | "freeEnergy"
  | "sbdd"
  | "lbdd"
  | "screening"
  | "admet"
  | "ml"
  | "coding"
  | "research"
  | "criticism";

export interface L10n {
  ar: string;
  en: string;
}

export type EpistemicKind =
  | "fact"
  | "interpretation"
  | "hypothesis"
  | "educational"
  | "limitation"
  | "warning";

export type LessonSection =
  | {
      type: "prose";
      id: string;
      title?: L10n;
      body: L10n;
      minLevel?: TeachLevel;
      maxLevel?: TeachLevel;
    }
  | {
      type: "equation";
      id: string;
      latex: string;
      name: L10n;
      meaning: L10n;
      variables: { symbol: string; name: L10n; unit?: L10n }[];
      interpretation: L10n;
      application: L10n;
      minLevel?: TeachLevel;
    }
  | {
      type: "callout";
      id: string;
      kind: EpistemicKind;
      title: L10n;
      body: L10n;
    }
  | {
      type: "command";
      id: string;
      command: string;
      purpose: L10n;
      input: L10n;
      output: L10n;
      meaning: L10n;
      errors: L10n;
    }
  | {
      type: "why";
      id: string;
      question: L10n;
      answer: L10n;
    }
  | {
      type: "whatif";
      id: string;
      scenario: L10n;
      consequence: L10n;
    }
  | {
      type: "exercise";
      id: string;
      prompt: L10n;
      solution: L10n;
    }
  | {
      type: "list";
      id: string;
      title: L10n;
      ordered?: boolean;
      items: L10n[];
    }
  | {
      type: "steps";
      id: string;
      title: L10n;
      items: { title: L10n; body: L10n }[];
    }
  | {
      type: "viewer";
      id: string;
      pdb: string;
      ligand?: string;
      caption: L10n;
    }
  | {
      type: "compare";
      id: string;
      left: L10n;
      right: L10n;
      rows: { dim: L10n; a: L10n; b: L10n }[];
    };

export interface LessonMeta {
  id: string;
  levelId: string;
  moduleId: string;
  order: number;
  title: L10n;
  summary: L10n;
  durationMin: number;
  skills: SkillDomain[];
  prerequisites: string[];
  quizId?: string;
}

export interface Lesson extends LessonMeta {
  objectives: L10n[];
  sections: LessonSection[];
  related: string[];
}

export interface Module {
  id: string;
  title: L10n;
  summary: L10n;
  lessonIds: string[];
}

export interface Level {
  id: string;
  number: number;
  code: string;
  title: L10n;
  summary: L10n;
  skills: SkillDomain[];
  modules: Module[];
}

export interface Flashcard {
  id: string;
  deck: string;
  front: L10n;
  back: L10n;
  tags: string[];
}

export interface QuizQuestion {
  id: string;
  kind: "mcq" | "tf" | "short" | "critique" | "calc";
  prompt: L10n;
  options?: L10n[];
  answer: number | boolean | string;
  explanation: L10n;
  difficulty: TeachLevel;
}

export interface Quiz {
  id: string;
  title: L10n;
  description: L10n;
  lessonId?: string;
  questions: QuizQuestion[];
}

export interface Mistake {
  id: string;
  title: L10n;
  whyWrong: L10n;
  consequences: L10n;
  better: L10n;
  tags: string[];
}

export interface CommandEntry {
  id: string;
  software: string;
  command: string;
  purpose: L10n;
  input: L10n;
  output: L10n;
  meaning: L10n;
  errors: L10n;
  why: L10n;
}

export interface EquationEntry {
  id: string;
  latex: string;
  name: L10n;
  meaning: L10n;
  variables: { symbol: string; name: L10n; unit?: L10n }[];
  interpretation: L10n;
  application: L10n;
  related: string[];
}

export interface DictEntry {
  id: string;
  term: string;
  termAr: string;
  definition: L10n;
  equation?: string;
  use: L10n;
  limitations: L10n;
  related: string[];
  software?: string[];
}

export interface Comparison {
  id: string;
  a: L10n;
  b: L10n;
  rows: { dim: L10n; a: L10n; b: L10n }[];
}

export interface VivaQuestion {
  id: string;
  difficulty: TeachLevel;
  question: L10n;
  ideal: L10n;
  followUp: L10n;
  pitfalls: L10n;
}

export interface GraphNode {
  id: string;
  label: L10n;
  group: SkillDomain;
  lessonId?: string;
}

export interface GraphEdge {
  from: string;
  to: string;
  label: L10n;
}

export interface CaseStudy {
  id: string;
  title: L10n;
  targetClass: L10n;
  biology: L10n;
  structure: L10n;
  pocket: L10n;
  design: L10n;
  docking: L10n;
  md: L10n;
  energy: L10n;
  optimization: L10n;
  caveat: L10n;
  pdb?: string;
}

export interface SoftwareLab {
  id: string;
  title: L10n;
  software: string;
  summary: L10n;
  steps: {
    id: string;
    title: L10n;
    command?: string;
    body: L10n;
    why: L10n;
    whatIf?: L10n;
    errors?: L10n;
  }[];
}

export interface NotebookEntry {
  id: string;
  title: string;
  body: string;
  tags: string[];
  createdAt: number;
  updatedAt: number;
}

export interface ResearchProject {
  id: string;
  target: string;
  disease: string;
  ligandClass: string;
  objective: string;
  steps: { title: L10n; why: L10n; done: boolean }[];
  createdAt: number;
}

export interface PathDef {
  id: string;
  title: L10n;
  summary: L10n;
  lessonIds: string[];
}

export type DailyMinutes = 30 | 60 | 120 | 240;
