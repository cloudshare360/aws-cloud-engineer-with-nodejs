# 01 — Requirements (What This Workspace Must Achieve)

Source of truth for *why* the repo exists. Derived from `readme.md` §1 (Career Outcome), §2 (Day 1), §9 (Progression), and §10 (Daily Practice).

## Functional requirements

| ID | Requirement | Satisfied by |
|---|---|---|
| FR-01 | Learner can set up a full dev environment with no admin rights | todo-task/task-01…05 (Scoop, Python, Node, JDK 21, Git + Bash PATH) |
| FR-02 | Learner owns at least one GitHub repo and can push daily | todo-task/task-06 (+ `git-workflow` skill) |
| FR-03 | Learner keeps employer-shareable identity documents organized and private | todo-task/task-07 (private personal-documents repo) |
| FR-04 | Learner follows an 11-week, 83-hour JavaScript plan with estimated effort per topic | todo-task/task-08 + tracking sheet Estimated Hours column |
| FR-05 | Learner understands Git concepts beyond memorized commands | todo-task/task-09 (git-scm.com/learn) |
| FR-06 | Learner studies topics in order and logs progress daily in the Google Sheet | todo-task/task-10 + Sheet Actual-date columns |
| FR-07 | Learner uses Kilo CLI + VS Code extension with free-first, pay-as-you-go fallback | todo-task/task-11 + `.kilo/kilo.json` free-first defaults |
| FR-08 | Any file in the repo is reachable from `readme.md` within two clicks | readme repo map + §2 task list + §3 content links |

## Non-functional requirements

| ID | Requirement | How it is enforced |
|---|---|---|
| NFR-01 | Zero human intervention: readme alone guides the learner end-to-end | Every task file ends with ✅ checklist + next-file link; repo map at readme top |
| NFR-02 | No admin rights anywhere in setup | All installs via Scoop user profile; `-Scope CurrentUser` policy; documented in task-01…05 |
| NFR-03 | Progress is self-measurable | Planned vs Actual dates per Sheet row; `Actual − Planned` rule (task-10) |
| NFR-04 | Content works offline | `programiz-learning/javascript/*/​*/index.md` + `images/` committed to the repo |
| NFR-05 | Agent-executable | `.kilo/skills/` (todo-task, js-tracking-sheet, kilo-onboarding…), `AGENTS.md` Windows/PowerShell rules |
| NFR-06 | No secret leakage | `.gitignore` before first commit (task-06); private repo rule + redaction guidance (task-07); Auto-Free privacy rule (task-11) |

## Out of scope

- Framework/AWS/backend sections (§4–§7 of readme) are roadmap material, not yet built out as `todo-task/` files or `programiz-learning/` content.
- The Google Sheet itself lives outside the repo (Drive); only its links and setup live here.
