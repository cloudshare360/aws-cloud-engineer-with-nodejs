# 07 — Traceability Matrix (Requirement → Task → Guide → Content → Tracker)

Update this matrix in the **same commit** as any file it references. Last verified: 2026-09-20.

## Setup chain

| Req | todo-task (order) | How-To-Do (how) | Verification | Skill |
|---|---|---|---|---|
| FR-01 pkg mgr | task-01 | scoop.sh / brew.sh homepages | `scoop --version` | todo-task |
| FR-01 python | task-02 | — | `python --version` | todo-task |
| FR-01 node | task-03 | Setup-NodeJS/{windows,mac}/README.md, npm-cheatsheet.md | `node --version` | todo-task, nodejs-setup |
| FR-01 jdk | task-04 | — | `java --version` = 21.x | todo-task |
| FR-01 git | task-05 | Setup-Git/windows/README.md, git-cheatsheet.md, Hands-On/{cli,vscode} | `git --version`, `bash --version` | todo-task, git-workflow |
| FR-02 repo | task-06 | Hands-On/{cli,vscode}/README.md | push visible on github.com | git-workflow |
| FR-03 docs repo | task-07 | Hands-On/cli/README.md | Private badge | git-workflow |
| FR-07 kilo | task-11 | kilo.ai/docs (Reference Links) | `kilo` on free model | kilo-onboarding |

## Learning chain (all 9 sections × same pattern)

| Req | Schedule | Content folders | Sheet rows | Skill |
|---|---|---|---|---|
| FR-04 plan | task-08 (11-week tables) | programiz-learning/javascript/01…09 (59 topics) | Srno 1–59, Estimated Hours (=83.0) | js-tracking-sheet |
| FR-05 git theory | task-09 | git-scm.com/learn (external) | checkpoints 1–7 | git-workflow |
| FR-06 daily | task-10 (routine + Sheet setup) | index.md per topic in Srno order | Actual dates + Remarks | js-tracking-sheet |

Section → Srno → folder (condensed; full list in the tracking sheet):

| Section | Srno | Folder |
|---|---|---|
| JS Introduction | 1–7 | 01-JS-Introduction |
| JS Control Flow | 8–14 | 02-JS-Control-Flow |
| JS Functions | 15–18 | 03-JS-Functions |
| JS Objects | 19–23 | 04-JS-Objects |
| JS Types | 24–29 | 05-JS-Types |
| Exceptions and Modules | 30–32 | 06-Exceptions-and-Modules |
| JS ES6 | 33–44 | 07-JS-ES6 |
| JavaScript Asynchronous | 45–49 | 08-JavaScript-Asynchronous |
| Miscellaneous | 50–59 | 09-Miscellaneous |

## Roadmap coverage

| Req | readme section | State |
|---|---|---|
| FR-08 nav | Repo map + §2 task list + §3 content links | Done |
| §4–§7 (Node/React/Angular/AWS) | Roadmap text only | Not yet built as tasks/content — future work follows the same three-layer pattern |
| FR-02/06 discipline | §8, §10 + agile-practice skill | Done |

## Agent/config traceability

| Item | File | Used by |
|---|---|---|
| Free-first defaults | .kilo/kilo.json | task-11 Part G, kilo-onboarding skill |
| Windows/PowerShell rules | AGENTS.md | every agent session |
| Order skill | .kilo/skills/todo-task/SKILL.md | task-01…11 execution |
| Sheet skill | .kilo/skills/js-tracking-sheet/SKILL.md | task-08/10, phase 05 |
| Kilo skill | .kilo/skills/kilo-onboarding/SKILL.md | task-11, cost rules |
