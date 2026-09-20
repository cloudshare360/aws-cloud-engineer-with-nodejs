# Task 09 — Understand Git Concepts (git-scm.com/learn)

**Goal:** Build real Git understanding — not just memorized commands — using the official learning hub at **https://git-scm.com/learn**, then prove each concept with a hands-on checkpoint.

> **Prerequisite:** Tasks 05–06 complete (Git installed, identity configured, at least one repo pushed).

> **Agent:** load the `git-workflow` skill before executing; keep edits scoped to this task's files.

---

## Why git-scm.com/learn

It is the official source, maintained with the Git project itself:

- **Pro Git book** — the full book, free to read online
- **Videos** — ~22 minutes total, beginner-oriented
- **Cheat sheet** — the everyday commands on one page
- **External links** — community tutorials and docs

Open **https://git-scm.com/learn** now and keep it beside this file.

---

## Part A — Pro Git Book (Read the Chapters That Matter)

The whole book lives at **https://git-scm.com/book**. For this roadmap you need four chapters; the rest can wait.

### Chapter 1 — Getting Started (concepts)

- What version control is, and why local → centralized → distributed evolved
- Snapshots, not differences: how Git stores content
- The three states (modified / staged / committed) and three areas (working tree / index / repository)
- Install check: `git --version`

### Chapter 2 — Git Basics (daily commands)

- `git config`, `git init`, `git clone`
- `git add`, `git status`, `git commit`, `git rm`, `git mv`
- `git log`, remotes (`git remote`, `git fetch`, `git pull`, `git push`)
- Tagging basics and aliases (e.g., `git config --global alias.st status`)

### Chapter 3 — Git Branching (the superpower)

- What a branch really is (a movable pointer to a commit)
- `git branch`, `git switch` / `git checkout -b`, `git merge`
- Merge vs rebase — understand the difference before using rebase on shared branches
- Remote branches and tracking (`git push -u`)

### Chapter 5 — Distributed Git (how GitHub fits in)

- Centralized vs integration-manager vs forking workflows
- Pull requests as the collaboration mechanism
- Contributing etiquette used by real projects

### Skim later (not needed now)

Chapters 4 (Git on the Server), 6 (GitHub deep-dive), 7–10 (internals, customization) — return when you self-host or debug plumbing.

---

## Part B — Videos (~22 Minutes Total)

At **https://git-scm.com/videos**:

| Video | Length | Answers |
|---|---|---|
| What is Version Control? | 05:59 | Why track history at all |
| What is Git? | 08:15 | Snapshots, distributed model |
| Get Going with Git | 04:26 | init → add → commit → push |
| Quick Wins with Git | 05:06 | Branching, stashing, everyday shortcuts |

Watch all four in one sitting, then redo the commands from "Get Going" in your own `git-test` folder (Task 05, Step 6).

---

## Part C — Cheat Sheet (Pin This)

**https://git-scm.com/cheat-sheet** — the everyday commands on one page, including diagrams showing **merge vs rebase**. Keep it open during Tasks 06–10 until the commands are muscle memory.

---

## Part D — Prove Each Concept (Hands-On Checkpoints)

Do these in order; each row maps a concept to proof:

| # | Concept | Checkpoint | Verify with |
|---|---|---|---|
| 1 | Three states | Edit a file, `git add`, `git commit` | `git status` shows clean tree |
| 2 | History | Three commits in `git-test` | `git log --oneline` lists 3 |
| 3 | Remotes | Push `git-test` to GitHub | Files visible in browser |
| 4 | Cloning | Clone your own repo to a new folder | `git remote -v` shows origin |
| 5 | Branching | `git switch -c feature`, commit, `git switch main`, `git merge feature` | `git log --oneline --graph` shows the merge |
| 6 | Fetch vs pull | `git fetch` then `git log origin/main` before merging | Understand what pull would do first |
| 7 | Undo safely | `git restore <file>`, `git restore --staged <file>` | File returns to previous state |

---

## Useful Commands Reference

| Command | Purpose |
|---|---|
| `git status` | Working tree vs index vs HEAD |
| `git log --oneline --graph` | Compact history with branch shape |
| `git switch -c <name>` | Create and move to a branch |
| `git merge <branch>` | Merge a branch into the current one |
| `git fetch` | Download remote changes without merging |
| `git pull --rebase` | Fetch + replay local commits on top |

---
### How-To-Do Deep Dives (The *How* Behind This Task)

While this file gives the **order**, the **how** lives in these guides — open them when a step needs more detail:

- [How-To-Do/git-github/git-cheatsheet.md](../How-To-Do/git-github/git-cheatsheet.md)
- [https://git-scm.com/learn](https://git-scm.com/learn)

## ✅ Task 09 — Completion Checklist

- [ ] Opened https://git-scm.com/learn and browsed all four sections
- [ ] Read Pro Git Chapters 1, 2, 3, 5 (skim the rest later)
- [ ] Watched all four videos (~22 min)
- [ ] Pinned the cheat sheet for daily use
- [ ] Completed checkpoints 1–7 above in a scratch repo
- [ ] Can explain: three states, snapshot model, merge vs rebase, fetch vs pull

**Done with Task 09?** → Move on to `task-10.md`
