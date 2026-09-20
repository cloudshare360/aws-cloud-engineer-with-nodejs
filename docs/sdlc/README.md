# SDLC for This Learning Workspace

> Read this index first. Each phase below names its owner document, its entry file, and its exit gate. Nothing here duplicates a guide — every line points at the file that owns the detail.

## The six roles (one workspace, three content layers)

| Layer | Folder | Role in SDLC terms |
|---|---|---|
| **Order** | `todo-task/task-01.md` → `task-11.md` | The **process**: what happens, in what sequence, with what exit gate |
| **How** | `How-To-Do/` | The **procedure**: step-by-step execution for each setup task |
| **What** | `programiz-learning/` | The **work product**: 59-topic JS curriculum + tracking sheet (content + progress data) |

Same idea as classic SDLC: requirements say *what order*, design says *how*, the build produces the *artifact*, and the tracker measures it.

## Phase map

| # | SDLC Phase | Owner doc | Entry file | Exit gate |
|---|---|---|---|---|
| 01 | Requirements | [docs/sdlc/01-requirements.md](01-requirements.md) | readme §1–§2 | Learner can state the career outcome and Day-1 tool list from memory |
| 02 | Design | [docs/sdlc/02-design.md](02-design.md) | readme repo map | Learner can draw the todo→How-To→programiz flow without looking |
| 03 | Implementation (environment) | [docs/sdlc/03-implementation.md](03-implementation.md) | todo-task/task-01.md | `scoop / python / node / java / git / kilo --version` all print versions |
| 04 | Verification | [docs/sdlc/04-verification.md](04-verification.md) | todo-task checklists | Every task-01…11 ✅ checklist ticked; no skipped gates |
| 05 | Execution (learning sprints) | [docs/sdlc/05-execution.md](05-execution.md) | task-08 + task-10 | Sheet Actual dates filled same-day; practice commits pushed daily |
| 06 | Release & maintenance | [docs/sdlc/06-release-maintenance.md](06-release-maintenance.md) | task-07, Sheet sharing | Sheet ↔ repo links live; employer artifacts shareable; repo pushed clean |

## Traceability

Full requirement → task → guide → content → tracker mapping lives in [docs/sdlc/07-traceability.md](07-traceability.md). If you change any file listed there, update the matrix in the same commit.

## Conventions used by every SDLC doc

- Paths are repo-relative (`todo-task/task-03.md`, not absolute Windows paths).
- `Srno 1–59` always means the tracking-sheet row order — folders, schedule, and Sheet share it.
- Planned dates = commitment; Actual dates = execution; `Actual − Planned` = the self-tracking signal.
- Windows 11 + PowerShell, no admin rights, per-user installs (see `AGENTS.md`).
