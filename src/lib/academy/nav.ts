import type { L10n } from "./types";
import { ui } from "./i18n";

export interface NavItem {
  to: string;
  label: L10n;
  group: "learn" | "practice" | "research" | "tools";
}

export const navItems: NavItem[] = [
  { to: "/", label: ui.dashboard, group: "learn" },
  { to: "/roadmap", label: ui.roadmap, group: "learn" },
  { to: "/search", label: ui.search, group: "learn" },
  { to: "/paths", label: ui.paths, group: "learn" },
  { to: "/skills", label: ui.skills, group: "learn" },
  { to: "/learn/l8", label: ui.docking, group: "learn" },
  { to: "/learn/l9", label: ui.md, group: "learn" },
  { to: "/learn/l11", label: ui.drugDesign, group: "learn" },
  { to: "/learn/l5", label: ui.chemo, group: "learn" },
  { to: "/learn/l15", label: ui.qsarAdmet, group: "learn" },
  { to: "/learn/l16", label: ui.ai, group: "learn" },
  { to: "/labs", label: ui.labs, group: "practice" },
  { to: "/python", label: ui.python, group: "practice" },
  { to: "/design-lab", label: ui.designLab, group: "practice" },
  { to: "/viewer", label: ui.viewer, group: "practice" },
  { to: "/flashcards", label: ui.flashcards, group: "practice" },
  { to: "/quizzes", label: ui.quizzes, group: "practice" },
  { to: "/exam", label: ui.exam, group: "practice" },
  { to: "/viva", label: ui.viva, group: "research" },
  { to: "/papers", label: ui.papers, group: "research" },
  { to: "/challenge", label: ui.challenge, group: "research" },
  { to: "/projects", label: ui.projects, group: "research" },
  { to: "/builder", label: ui.builder, group: "research" },
  { to: "/notebook", label: ui.notebook, group: "research" },
  { to: "/frontier", label: ui.frontier, group: "research" },
  { to: "/cases", label: ui.cases, group: "research" },
  { to: "/equations", label: ui.equations, group: "tools" },
  { to: "/commands", label: ui.commands, group: "tools" },
  { to: "/mistakes", label: ui.mistakes, group: "tools" },
  { to: "/calculators", label: ui.calculators, group: "tools" },
  { to: "/compare", label: ui.compare, group: "tools" },
  { to: "/knowledge", label: ui.knowledge, group: "tools" },
  { to: "/dictionary", label: ui.dictionary, group: "tools" },
  { to: "/methods", label: ui.methods, group: "tools" },
  { to: "/stats", label: ui.stats, group: "tools" },
  { to: "/ethics", label: ui.ethics, group: "tools" },
  { to: "/figures", label: ui.figures, group: "tools" },
];

export const groupLabels: Record<NavItem["group"], L10n> = {
  learn: ui.navLearn,
  practice: ui.navPractice,
  research: ui.navResearch,
  tools: ui.navTools,
};
