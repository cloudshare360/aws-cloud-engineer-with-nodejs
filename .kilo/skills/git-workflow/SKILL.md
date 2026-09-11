---
name: git-workflow
description: Apply the Git and GitHub version control workflows defined in this repository, including daily commit discipline, feature branches, PAT authentication, and conflict resolution.
---

# Git and GitHub Workflow

This skill codifies the Git/GitHub workflow expected for this learning roadmap. It covers daily commit discipline, branching, authentication with PATs, and merge conflict resolution.

## Daily Workflow Discipline

Commit and push progress **every day**:

```bash
git status
git add .
git commit -m "Day N: <topic> - <summary>"
git push origin main
```

## Setup and Authentication

### Configure Git (once)

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global --list
```

### Personal Access Token (PAT)

GitHub no longer accepts account passwords for Git operations. Use a PAT:

1. Go to **Settings** → **Developer settings** → **Personal access tokens**.
2. Choose **Fine-grained** or **Classic**.
3. Grant `Contents: Read and write` and `Metadata: Read`.
4. Copy the token and store it securely.

When prompted:
- Username: your GitHub username
- Password: your PAT

### Clone a Repository

```bash
git clone https://github.com/YOUR-USERNAME/repo-name.git
cd repo-name
```

## Feature Branch Workflow

For individual or team work:

```bash
# Start from the latest development branch
git checkout development
git pull origin development

# Create and switch to a feature branch
git checkout -b feature/login-page

# Work, stage, and commit
git add .
git commit -m "Add login page UI"

# Push the feature branch (first time sets upstream)
git push -u origin feature/login-page
```

## Syncing and Conflict Resolution

### Pull latest before pushing (recommended)

```bash
git checkout feature/login-page
git pull --rebase origin feature/login-page
git fetch origin
git merge origin/development
```

### Resolving conflicts

1. Open conflicted files and look for markers:

```text
<<<<<<< HEAD
your changes
=======
development changes
>>>>>>> origin/development
```

2. Edit the file to keep the desired final content, removing markers.
3. Stage and complete:

```bash
git add <file>
git commit           # if merging
# or
git rebase --continue   # if rebasing
```

### Merge feature back to development

```bash
git checkout development
git pull origin development
git merge feature/login-page
git push origin development
```

On GitHub, open a **Pull Request** for review before merging.

## Quick Reference

```bash
git status
git add .
git commit -m "message"
git push origin <branch>
git pull --rebase origin <branch>
git log --oneline --decorate --graph --all
```

## Related Documentation

- `How-To-Do/git-github/git-cheatsheet.md` — full command reference.
- `How-To-Do/git-github/Hands-On/cli/README.md` — CLI tutorial with screenshots.
- `How-To-Do/git-github/Hands-On/vscode/README.md` — VS Code Git UI tutorial.
- `How-To-Do/git-github/Setup-Git/windows/README.md` — Windows installation.

## Troubleshooting

**Git keeps asking for credentials**
Use a PAT. Consider caching credentials with `git config --global credential.helper store`.

**Remote URL is wrong**
```bash
git remote -v
git remote set-url origin https://github.com/YOUR-USERNAME/repo.git
```

**Changes not showing**
Ensure files are saved, then `git status` and `git add .`.
