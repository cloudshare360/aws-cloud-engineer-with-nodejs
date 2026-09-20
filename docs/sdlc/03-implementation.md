# 03 — Implementation (Building the Environment)

Covers FR-01, FR-02, FR-07. The build phase is tasks 01–07 + 11; learning execution is phase 05.

## Build sequence (strict order)

| Step | Task file | Verification command | How-To-Do backup |
|---|---|---|---|
| 1 | [task-01](../../todo-task/task-01-setup-install-scoop.md) — Scoop / Homebrew | `scoop --version` | scoop.sh / brew.sh homepages |
| 2 | [task-02](../../todo-task/task-02-install-python-scoop.md) — Python | `python --version` + `pip --version` | — |
| 3 | [task-03](../../todo-task/task-03-install-nodejs-scoop.md) — Node.js LTS | `node --version` + `npm --version` + `where.exe node` | How-To-Do/nodejs/Setup-NodeJS/ + npm-cheatsheet |
| 4 | [task-04](../../todo-task/task-04-install-oracle-jdk21-scoop.md) — Oracle JDK 21 | `java --version` + `javac --version` + `$env:JAVA_HOME` | — |
| 5 | [task-05](../../todo-task/task-05-install-git-gitbash-path.md) — Git + Bash tools on user PATH | `git --version` + `bash --version` + `where.exe git` | How-To-Do/git-github/Setup-Git/ + git-cheatsheet + Hands-On CLI/VSCode |
| 6 | [task-06](../../todo-task/task-06-create-git-repo.md) — first repo + push | `git log --oneline`, files visible on github.com | Hands-On CLI/VSCode READMEs |
| 7 | [task-07](../../todo-task/task-07-personal-documents-repo.md) — private personal-documents repo | Repo badge shows **Private**; logged-out browser cannot load it | Hands-On CLI README |
| 8 | [task-11](../../todo-task/task-11-install-kilo-cli-vscode.md) — Kilo CLI + extension | `kilo --version`; VS Code Kilo panel answers | kilo.ai/docs (see task-11 Reference Links) |

## Implementation standards

- Normal (non-admin) PowerShell only; installs land under `%USERPROFILE%\scoop\`; execution policy `-Scope CurrentUser`.
- `.gitignore` (with `.env`) committed **before** any first commit (task-06).
- Commit early and often; the agent rule for this project is **commit + push after every completed task** so no progress is lost.
- Kilo sessions default to `kilo-auto/free` (`.kilo/kilo.json`); escalate to `efficient`/`frontier` per task-11 Part G only.

## Definition of done (build)

All eight verification commands print versions, both repos exist on GitHub (one public-capable, one Private), and `kilo` opens an authenticated session on a free model.
