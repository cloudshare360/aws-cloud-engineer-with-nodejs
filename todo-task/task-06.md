# Task 06 — Create a Git Repository and Connect It to GitHub (No Admin Rights)

**Goal:** Create your own Git repository locally (`git init`), make your first commits, publish it to GitHub, and push — using only a normal user account.

> **Prerequisite:** Task 05 complete — Git installed and `user.name` / `user.email` configured.

> **Agent:** load the `todo-task` skill before executing; keep edits scoped to this task's files.

---

## Part A — Create the Repository Locally

### Step 1 — Create a Project Folder and Initialize Git

Open a **normal (non-admin)** PowerShell window:

```powershell
mkdir my-first-repo
cd my-first-repo
git init
```

`git init` creates a hidden `.git\` folder — the entire repository database (history, branches, config) lives inside your project folder. No admin, no shared state, nothing outside your user area.

Verify:

```powershell
git status
```

Expected: `On branch main` / `No commits yet` / `nothing to commit`.

### Step 2 — Add a Project File

Create `hello.txt` with some content:

```powershell
"Hello, Git!" | Out-File hello.txt -Encoding utf8
```

### Step 3 — Add a .gitignore (Do This Before the First Commit)

Create `.gitignore`:

```
# OS junk
Thumbs.db
.DS_Store

# Editor
.vscode/
.idea/

# Logs and temp
*.log
*.tmp

# Dependencies / build output
node_modules/
dist/
build/
target/

# Secrets — never commit these
.env
*.pem
*.key
```

> **Habit to build:** secrets (`.env`, tokens, keys) never enter Git. Add them to `.gitignore` *before* your first commit — removing a file from history later is painful.

### Step 4 — Stage and Commit

```powershell
git add .
git status                     # review what is staged
git commit -m "Initial commit: add hello.txt and .gitignore"
```

Each commit is a permanent snapshot with your name/email (from Task 05) attached:

```powershell
git log --oneline
```

---

## Part B — Publish to GitHub

Two ways to create the GitHub repo — pick one.

### Option 1 — Web UI (Simplest)

1. Go to **https://github.com/new**
2. Repository name: `my-first-repo`
3. Choose **Private** (or Public if intended)
4. **Do NOT** initialize with README / .gitignore / license — your local repo already has content; initializing on GitHub would create divergent histories
5. Click **Create repository**

### Option 2 — GitHub CLI (Optional Install)

```powershell
scoop install gh          # no admin needed
gh auth login             # follow prompts (browser or PAT)
gh repo create my-first-repo --private --source=. --push
```

Option 2 creates the repo *and* pushes in one command.

### Step 5 — Connect Local Repo to GitHub

After creating the empty repo on the web, GitHub shows you the remote URL. Connect it:

```powershell
git remote add origin https://github.com/<username>/my-first-repo.git
git remote -v
```

Expected: two lines (`origin  .../my-first-repo.git (fetch)` and `(push)`).

### Step 6 — Push and Set Upstream

```powershell
git push -u origin main
```

- The first push asks for credentials — use your **PAT** as the password (Task 05, Step 10) or SSH remote if you set up a key
- `-u` records the upstream, so later pushes are just `git push`

### Step 7 — Verify End to End

```powershell
git log --oneline
git status
```

`git status` should say:

```
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

Refresh the GitHub page — `hello.txt` and `.gitignore` are visible in the browser.

---

## Part C — The Everyday Workflow (Practice It Now)

Round-trip a second change to cement the loop:

```powershell
"Line 2"    | Out-File -Append hello.txt -Encoding utf8
git add hello.txt
git commit -m "Add second line to hello.txt"
git push                        # no -u needed anymore
```

**The loop you just learned:**

```
edit  →  git add  →  git commit  →  git push
```

## Useful Commands Reference

| Command | Purpose |
|---|---|
| `git init` | Turn a folder into a repository |
| `git clone <url>` | Copy a remote repo locally |
| `git add <file>` / `git add .` | Stage changes |
| `git commit -m "msg"` | Snapshot staged changes |
| `git remote add origin <url>` | Link to a GitHub repo |
| `git push -u origin main` | Publish + set upstream |
| `git pull` | Fetch and merge remote changes |
| `git status` / `git log --oneline` | Inspect state and history |

## Troubleshooting (No-Admin Context)

| Problem | Fix (no admin needed) |
|---|---|
| `remote origin already exists` | `git remote set-url origin <url>` |
| Push rejected (non-fast-forward) | Remote has commits you don't: `git pull --rebase` then push |
| Authentication failed on push | Use PAT as password; check token has `repo` scope |
| Wrong remote URL | `git remote set-url origin <correct-url>` |
| Committed a secret by accident | Rotate the secret immediately, then remove from history (e.g., `git filter-repo`) |
| `detached HEAD` after checkout | Don't panic: `git switch main` to return |

---
### How-To-Do Deep Dives (The *How* Behind This Task)

While this file gives the **order**, the **how** lives in these guides — open them when a step needs more detail:

- [How-To-Do/git-github/git-cheatsheet.md](../How-To-Do/git-github/git-cheatsheet.md)
- [How-To-Do/git-github/Hands-On/cli/README.md](../How-To-Do/git-github/Hands-On/cli/README.md)
- [How-To-Do/git-github/Hands-On/vscode/README.md](../How-To-Do/git-github/Hands-On/vscode/README.md)

## ✅ Task 06 — Completion Checklist

- [ ] `git init` succeeded — `.git\` folder exists
- [ ] `.gitignore` created **before** the first commit (including `.env` exclusion)
- [ ] First commit made with correct `user.name` / `user.email`
- [ ] GitHub repo created (web UI or `gh` CLI) — no initial README, so histories match
- [ ] `git remote add origin <url>` done; `git remote -v` shows it
- [ ] `git push -u origin main` succeeded (PAT or SSH auth)
- [ ] Files visible on github.com in the browser
- [ ] Second change committed and pushed using the plain `edit → add → commit → push` loop

**Done with Task 06?** → Move on to `task-07.md`
