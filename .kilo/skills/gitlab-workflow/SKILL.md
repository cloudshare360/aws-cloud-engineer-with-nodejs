---
name: gitlab-workflow
description: GitLab CLI commands, SSH key setup, GitLab Runner installation (macOS/Windows), CI/CD pipelines, and merge request creation.
---

# GitLab Workflow

This skill covers GitLab-specific workflows for this learning roadmap, including SSH authentication, GitLab Runner setup, CI/CD pipelines, and merge request creation.

## Prerequisites

- Git installed (see `git-workflow` skill)
- A GitLab account at https://gitlab.com
- VS Code installed (see `vscode-dev` skill)

## SSH Key Authentication

### Generate an SSH key

```bash
ssh-keygen -t ed25519 -C "you@example.com"
```

### Add to SSH agent

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### Copy public key

- macOS: `pbcopy < ~/.ssh/id_ed25519.pub`
- Linux: `xclip -sel clip < ~/.ssh/id_ed25519.pub`
- Windows: `clip < ~/.ssh/id_ed25519.pub`

### Add to GitLab

1. Go to **User Settings** → **SSH Keys**
2. Paste the key, add a title, and click **Add key**

### Verify connection

```bash
ssh -T git@gitlab.com
```

## Cloning Repositories

### SSH (preferred)

```bash
git clone git@gitlab.com:your-username/project.git
```

### HTTPS with PAT

```bash
git clone https://oauth2:YOUR_PAT@gitlab.com/your-username/project.git
```

## Forking Projects

```bash
# Clone your fork
git clone git@gitlab.com:your-username/project.git
cd project

# Add upstream
git remote add upstream git@gitlab.com:original-owner/project.git

# Sync with upstream
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

## GitLab Runner Installation

### macOS (Homebrew)

```bash
brew install gitlab-runner
gitlab-runner register
gitlab-runner start
```

### Windows

```powershell
# Download from https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-windows-amd64.exe
# Save as gitlab-runner.exe in C:\GitLab-Runner
cd C:\GitLab-Runner
.\gitlab-runner.exe register
.\gitlab-runner.exe install
.\gitlab-runner.exe start
```

### Registration prompts

1. URL: `https://gitlab.com`
2. Registration token (from **Settings** → **CI/CD** → **Runners**)
3. Description and tags
4. Executor: `shell`

## GitLab CLI (glab)

```bash
glab auth login
glab mr create
glab mr list
glab pipeline run
```

## CI/CD Pipelines

### Create .gitlab-ci.yml

```yaml
stages:
  - test

test-job:
  stage: test
  script:
    - echo "Running tests"
    - node --version
```

### Trigger a pipeline

```bash
git add .
git commit -m "Add CI/CD configuration"
git push origin main
```

## Merge Requests

### Create via CLI

```bash
git checkout -b feature/new-feature
# make changes
git add .
git commit -m "Add new feature"
git push -u origin feature/new-feature
glab mr create --title "Add new feature" --description "This MR adds..."
```

### Create via web UI

1. Push the branch
2. Go to **Merge Requests** in the project
3. Click **New merge request**
4. Select source and target branches
5. Fill in title and description

## Daily Workflow

```bash
git checkout development
git pull origin development
git checkout -b feature/my-task
# work
git add .
git commit -m "Implement my task"
git push -u origin feature/my-task
```

## Related Documentation

- `How-To-Do/git-lab/gitlab-cheatsheet.md` — full command reference
- `How-To-Do/git-lab/Hands-On/cli/README.md` — CLI tutorial
- `How-To-Do/git-lab/Hands-On/vscode/README.md` — VS Code tutorial
- `How-To-Do/git-lab/Setup-GitLab/mac/README.md` — macOS setup
- `How-To-Do/git-lab/Setup-GitLab/windows/README.md` — Windows setup
- `.kilo/skills/git-workflow/` — Git command reference