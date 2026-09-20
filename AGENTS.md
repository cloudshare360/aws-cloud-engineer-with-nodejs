# AGENTS.md

## Project purpose
This repository is a learning roadmap and documentation workspace for AWS cloud engineering, Node.js, Git/GitHub, VS Code, and GitHub Codespaces.

## Workspace context
- This is primarily a documentation repository, not an application codebase.
- Most edits are Markdown files in readme.md, todo-task/, programiz-learning/, and How-To-Do/.
- The repo is organized for beginner-focused learning paths, setup guides, and hands-on developer workflows.
- Keep work scoped to the relevant topic folder instead of scanning the whole repository for unrelated content.
- Prefer targeted file reads and small, direct edits that match the existing docs structure.
- Do not add unnecessary code or framework scaffolding unless the task explicitly requires it.

## Environment: Windows 11 + PowerShell (Kilo CLI session)
- Host OS is **Windows 11**; the shell is **PowerShell 7+** (pwsh), NOT cmd and NOT bash.
- Kilo CLI runs in this PowerShell. Avoid Unix-isms: no `head`, `tail`, `ls -la`, `&&` chaining of unrelated commands, no cmd-only `del /F /Q`.
- Prefer PowerShell cmdlets (`Get-ChildItem`, `Remove-Item`) or, better, **Python script files executed via `python file.py`** for multi-step work. Inline `python -c` with quotes and inline PowerShell with `$`/`{}` get mangled by the tool wrapper — write a `.py`/`.ps1` file first, then execute it.
- Verify every command's effect (file listing, row counts) before moving on; PowerShell quoting errors are the #1 failure mode in this workspace.

## Working conventions
- Keep content beginner-friendly and practical.
- Prefer clear Markdown docs over code-heavy output.
- Organize new guides under the appropriate folder in How-To-Do/.
- Use descriptive names such as Setup-NodeJS, Setup-VSCode, Hands-On, or Setup-Git.
- Prefer GitHub-compatible assets such as PNG/JPG for screenshots.
- Keep sections step-by-step and action-oriented.
- Limit output and file changes to what directly supports the requested learning guide or roadmap update.

## Folder structure
- How-To-Do/git-github/ — **how** each Git/GitHub step is executed (deep-dive guides, cheatsheets)
- How-To-Do/nodejs/ — **how** each Node.js step is executed
- How-To-Do/vscode/ — **how** each VS Code step is executed
- todo-task/task-01.md … task-11.md — **execution order**: the numbered sequence; each task's ✅ checklist gates the next file
- programiz-learning/ — **study content + tracking sheet**: 59 JS topics with offline `index.md` notes; the `.xls`/`.md` tracking sheet is the planning + self-tracking instrument (Planned dates = commitment, Actual dates = execution). Its README holds the **canonical topic table** (Srno → URL → folder → hours) — never duplicate that list elsewhere
- docs/readme/read_*.md — the roadmap's 11 sections, one file each (the root readme.md is the hub/index)
- docs/sdlc/ — SDLC phase docs + traceability matrix
- email/ — reusable email templates
- readme.md — hub: Repo map, Roadmap Sections index, anti-duplication rules

## Documentation expectations
- Explain prerequisites, installation steps, and verification commands.
- Include troubleshooting tips when relevant.
- Add examples for both CLI and editor-based workflows when applicable.
- Use screenshots or visual placeholders where it helps understanding.
- Keep commands copy-paste friendly.

## Agent skills (auto-load via .kilo/skills/)
- `todo-task` — execute the task-01…task-11 series in strict order; verification commands per task.
- `js-tracking-sheet` — the tracking-sheet workflow: Planned dates = commitment, Actual dates = execution, `Actual − Planned` = self-tracking signal.
- `kilo-onboarding` — Kilo CLI + extension setup, free-tier defaults, cost rules before paid usage.
- `javascript-roadmap` — JS topic progression theory.
- `git-workflow` — commit/push discipline, PAT auth, branching.
- `nodejs-setup`, `vscode-dev`, `github-codespaces`, `aws-cloud-engineering`, `fullstack-development`, `agile-practice` — topic skills as named.

## Preferred behavior for edits
- Skills over memory: when a request maps to a skill (setup order, JS study, tracking sheet, Kilo config), follow that skill's workflow.
- Small, scoped edits; preserve the learning-roadmap structure.
- Add new guide files under the relevant topic folder.
- Use consistent headings and simple Markdown formatting.
- When creating setup docs, include verification commands like `node --version`, `git --version`, or `npm --version`.

## Validation
Before concluding work, verify that:
- the file paths are correct,
- the Markdown references resolve to existing files,
- the repo structure remains organized and easy to navigate.
