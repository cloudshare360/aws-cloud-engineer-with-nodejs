# Todo-Task Master Index — All 11 Tasks in Execution Order

> **Single source of truth for the task sequence.** This file is linked from the [readme hub](../readme.md) (Repo Map, row 1). Start at Task 01 and do not skip — each task's ✅ checklist gates the next.
>
> **File naming:** `task-NN-<what-it-does>.md` — the number is the order, the suffix is the content.

## Task List (01 → 11)

| # | Task file | What it does | Key verification | Next |
|---|---|---|---|---|
| 01 | [task-01-setup-install-scoop.md](task-01-setup-install-scoop.md) | Install Scoop (Windows) / Homebrew (macOS) — the package manager everything else uses, no admin rights | `scoop --version` | 02 |
| 02 | [task-02-install-python-scoop.md](task-02-install-python-scoop.md) | Install Python + pip via Scoop | `python --version` | 03 |
| 03 | [task-03-install-nodejs-scoop.md](task-03-install-nodejs-scoop.md) | Install Node.js LTS + npm via Scoop | `node --version` | 04 |
| 04 | [task-04-install-oracle-jdk21-scoop.md](task-04-install-oracle-jdk21-scoop.md) | Install Oracle JDK 21 via the `java` bucket | `java --version` (21.x LTS) | 05 |
| 05 | [task-05-install-git-gitbash-path.md](task-05-install-git-gitbash-path.md) | Install Git, enable Git Bash tools, add them to the Windows user PATH | `git --version`, `bash --version` | 06 |
| 06 | [task-06-create-git-repo.md](task-06-create-git-repo.md) | Create your first Git repo, configure identity, push to GitHub | `git push -u origin main` succeeds | 07 |
| 07 | [task-07-personal-documents-repo.md](task-07-personal-documents-repo.md) | Build a Private repo for employer-shareable documents (photo, EAD, resume) | Private badge verified logged-out | 08 |
| 08 | [task-08-js-learning-plan-schedule.md](task-08-js-learning-plan-schedule.md) | Turn the tracking sheet into an 11-week, 83-hour study schedule; fill Planned dates | Planned dates for all 59 rows | 09 |
| 09 | [task-09-learn-git-concepts.md](task-09-learn-git-concepts.md) | Understand Git concepts via git-scm.com/learn (Pro Git, videos, cheatsheet) | Checkpoints 1–7 done | 10 |
| 10 | [task-10-daily-execution-google-sheet.md](task-10-daily-execution-google-sheet.md) | Daily routine: study topics in order, log Actual dates in the Google Sheet | One full study day logged | 11 |
| 11 | [task-11-install-kilo-cli-vscode.md](task-11-install-kilo-cli-vscode.md) | Install Kilo CLI + VS Code extension; free-first cascade + pay-as-you-go tiers | `kilo --version` on free model | → [readme roadmap](../readme.md) |

## Grouped by phase

| Phase | Tasks | Outcome |
|---|---|---|
| **Environment setup** | 01–05 | Scoop, Python, Node.js, JDK 21, Git — all verified per-user, no admin |
| **Git & GitHub** | 06–07 | Own repo pushed daily; private documents repo |
| **Learning engine** | 08–10 | 11-week JS schedule → Git concepts → daily execution loop with the Sheet |
| **Agentic tooling** | 11 | Kilo CLI + VS Code extension; free tier first, paid only on escalation |

## Status legend

- ✅ checklist complete → task done, move to next
- ⬜ not started
- 🔁 in progress

Update this table's Status column as you progress, or track granular per-topic progress in the [Google Sheet](https://docs.google.com/spreadsheets/d/1LGqEJ6FlUa5u6STiqpFl9w1AVbxcUklj/edit?gid=95527326#gid=95527326) ([task-10](task-10-daily-execution-google-sheet.md)).
