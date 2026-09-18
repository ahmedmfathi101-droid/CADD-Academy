# Computational Drug Design Academy

أكاديمية التصميم الدوائي الحاسوبي — a bilingual (Arabic primary, English scientific terms) graduate-school platform for pharmaceutical chemists.

CADD, docking, molecular dynamics, free energy, cheminformatics, ADMET/QSAR, ML, Python labs, paper critique, viva, notebooks, calculators, and a knowledge graph.

**Principle:** computational chemistry produces models, not truth. A docking score is not ΔG. A flat RMSD is not convergence. PDB codes shown in the viewer are teaching examples — verify on [RCSB](https://www.rcsb.org) before citing.

## Stack

- TanStack Start + React 19 + Tailwind CSS v4
- Zustand (progress in `localStorage`)
- KaTeX, 3Dmol.js, Recharts
- Optional xAI mentor / viva / paper critique (`XAI_API_KEY`)

Auth and a remote database are off by default. Progress, notes, flashcards, and projects stay on the device.

## Run locally

```bash
npm install
npm run dev
```

The app listens on `http://localhost:8080`.

```bash
npm run typecheck
npm run build
```

## What is inside

| Area | Path |
|---|---|
| Curriculum L0–L26 | `/roadmap`, `/learn/$levelId`, `/lesson/$lessonId` |
| Docking / MD labs | `/labs` (Vina, GROMACS, RDKit) |
| 3D viewer | `/viewer` (structures fetched from RCSB) |
| Python / design | `/python`, `/design-lab` |
| Practice | `/flashcards`, `/quizzes`, `/exam`, `/challenge` |
| Research | `/viva`, `/papers`, `/notebook`, `/builder` |
| Tools | `/equations`, `/commands`, `/calculators`, `/methods`, `/knowledge` |

Scientific terms stay in English even in Arabic explanations (force field, RMSD, MM/PBSA, PME, ensemble, scoring function).

## Environment

| Variable | Purpose |
|---|---|
| `XAI_API_KEY` | Optional. Enables the research mentor, viva evaluator, and paper critic. The rest of the academy works without it. |

No papers, DOIs, software flags, or experimental numbers are invented. Missing parameters are refused, not guessed.

## License

Educational platform. Use the curriculum as teaching material; do not treat computed numbers as experimental evidence.
