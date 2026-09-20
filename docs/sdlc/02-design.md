# 02 — Design (How the Workspace Is Organized)

## Architecture: three layers

```
todo-task/task-01…11.md     ← ORDER  (process: sequence + exit gates)
        │ references
How-To-Do/<tool>/…          ← HOW    (procedures, cheatsheets, screenshots)
        │ backs
programiz-learning/         ← WHAT   (59-topic curriculum + tracking sheet)
        │ measured by
Google Sheet (offsite)      ← STATE  (Planned vs Actual dates per row)
```

Rules:

1. `todo-task/` never duplicates a guide — it links to `How-To-Do/` via **How-To-Do Deep Dives** sections.
2. `How-To-Do/` never defines order — it documents one tool deeply (setup, hands-on, cheatsheet).
3. `programiz-learning/` never records progress — progress lives only in the Sheet's Actual-date cells.
4. The `.xls`/`.md` tracking sheet is the single shared vocabulary: `Srno 1–59` orders folders, schedule, and Sheet rows identically.

## Navigation design

- `readme.md` top: **Start Here — Repo Map** (4 rows: todo → programiz → Sheet → roadmap body).
- Each `task-NN.md`: Goal → Prerequisite → Agent line → Steps → How-To-Do Deep Dives → Troubleshooting → ✅ checklist → next-file link.
- `programiz-learning/README.md`: Srno-ordered study path + Sheet ↔ GitHub link section.
- Sheet ↔ repo: `NAVIGATION` HYPERLINK row in the Sheet; 📊 Drive-folder link in both `readme.md` and `programiz-learning/README.md` pointing at the shared tracking folder.

## Agent design

- `.kilo/kilo.json`: free-first model defaults (`kilo-auto/free` for main/small/subagent/compaction), scoped edit/bash permissions, `AGENTS.md` + `task-11-install-kilo-cli-vscode.md` as instructions.
- Skills: `todo-task` (order), `js-tracking-sheet` (Sheet workflow), `kilo-onboarding` (Kilo setup + cost rules), plus topic skills (`git-workflow`, `javascript-roadmap`, `nodejs-setup`, …).
- `AGENTS.md`: Windows 11 + PowerShell constraints (script-files over inline one-liners), folder roles, validation checklist.

## Decisions and rationale

| Decision | Why |
|---|---|
| Numbered `task-NN.md` instead of one long guide | Checkpoints force verification before advancing; agents can resume by file number |
| Scoop over official installers | Zero-UAC per-user installs satisfy NFR-02 |
| Sheet offsite, mirrors in-repo | Drive gives daily editing + sharing; `.xls`/`.md` in-repo give versioned structure |
| Estimated Hours column (83.0 h total) | Turns "study JS" into an 11-week schedule with section milestones |
| Free-first Kilo config | $0 default sessions; paid tiers only on explicit escalation |
