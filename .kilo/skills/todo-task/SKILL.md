---
name: todo-task
description: Execute the todo-task setup and learning series (task-01 through task-11) in strict numbered order — environment setup, repos, learning schedule, Git concepts, daily routine, and Kilo agentic tooling.
---

# Todo-Task Series Executor

Follow the ordered setup series in `todo-task/` before any other learning work. Tasks run in strict numeric order; each task's completion checklist gates the next one.

## Task Order and What Each Produces

| Task | File | Produces |
|---|---|---|
| 01 | `todo-task/task-01.md` | Package manager (Scoop on Windows / Homebrew on macOS) |
| 02 | `todo-task/task-02.md` | Python via Scoop |
| 03 | `todo-task/task-03.md` | Node.js via Scoop |
| 04 | `todo-task/task-04.md` | Oracle JDK 21 via Scoop |
| 05 | `todo-task/task-05.md` | Git + Git Bash tools on user PATH |
| 06 | `todo-task/task-06.md` | First Git repo + GitHub push |
| 07 | `todo-task/task-07.md` | Private personal-documents repo |
| 08 | `todo-task/task-08.md` | 11-week JavaScript schedule (fills Planned dates) |
| 09 | `todo-task/task-09.md` | Git concepts (git-scm.com/learn) |
| 10 | `todo-task/task-10.md` | Daily execution routine + Google Sheet setup |
| 11 | `todo-task/task-11.md` | Kilo CLI + VS Code extension, free vs paid tiers |

## Execution Rules

1. Run tasks in numeric order; never skip. A task is done only when its ✅ checklist is complete.
2. Verify before advancing: run the task's verification commands (`scoop --version`, `python --version`, `node --version`, `java --version`, `git --version`, `kilo --version`) and report results.
3. Windows constraints: no admin rights, normal PowerShell only, per-user installs (Scoop profile), `-Scope CurrentUser` for execution policy.
4. After task-10 is reached, the daily loop is: Sheet row → study → commit/push → Sheet Actual dates. Every later session should follow it.
5. Task-11's Kilo CLI is the preferred execution engine for code tasks from this point on.

## Related Documentation

- `readme.md` — hub: Repo map + Roadmap Sections index + anti-duplication rules. Section detail lives in `docs/readme/read_*.md` (§2 setup, §3 JavaScript, §9 progression, §10 daily practice).
- `programiz-learning/README.md` — JavaScript content map (59 topics, 9 sections).
- `.kilo/skills/javascript-roadmap/` — JS topic progression.
- `.kilo/skills/git-workflow/` — commit/push discipline.
- `How-To-Do/` — deep-dive guides backing each setup task.
