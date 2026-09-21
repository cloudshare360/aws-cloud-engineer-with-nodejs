# GitLab Hands-On Tutorials

This folder follows the **GitLab Beginner Tutorial** series by Automation Step by Step on YouTube. It covers GitLab from introduction to CI/CD, with platform-specific setup guides and hands-on exercises using both the CLI and the VS Code editor.

## Tutorial Series Overview

| # | Title | Duration |
|---|---|---|
| 1 | [Introduction and Getting Started](https://www.youtube.com/watch?v=Jt4Z1vwtXT0&list=PLhW3qG5bs-L8YSnCiyQ-jD8XFHC2W1NL_&index=1) | 9:00 |
| 2 | [Getting started with Git Commands](https://www.youtube.com/watch?v=Jt4Z1vwtXT0&list=PLhW3qG5bs-L8YSnCiyQ-jD8XFHC2W1NL_&index=2) | 20:22 |
| 3 | [How to Fork a project](https://www.youtube.com/watch?v=Jt4Z1vwtXT0&list=PLhW3qG5bs-L8YSnCiyQ-jD8XFHC2W1NL_&index=3) | 6:09 |
| 4 | [How to create SSH Key](https://www.youtube.com/watch?v=Jt4Z1vwtXT0&list=PLhW3qG5bs-L8YSnCiyQ-jD8XFHC2W1NL_&index=4) | 7:50 |
| 5 | [How to install GitLab Runner on Mac OS](https://www.youtube.com/watch?v=Jt4Z1vwtXT0&list=PLhW3qG5bs-L8YSnCiyQ-jD8XFHC2W1NL_&index=5) | 14:52 |
| 6 | [How to install GitLab Runner on Windows OS](https://www.youtube.com/watch?v=Jt4Z1vwtXT0&list=PLhW3qG5bs-L8YSnCiyQ-jD8XFHC2W1NL_&index=6) | 14:45 |
| 7 | [GitLab CI/CD Getting Started](https://www.youtube.com/watch?v=Jt4Z1vwtXT0&list=PLhW3qG5bs-L8YSnCiyQ-jD8XFHC2W1NL_&index=7) | 22:10 |

Playlist: <https://www.youtube.com/playlist?list=PLhW3qG5bs-L8YSnCiyQ-jD8XFHC2W1NL_>

---

## Prerequisites

- A GitLab account (create one at <https://gitlab.com>)
- Git installed on your machine (see `How-To-Do/git-github/Setup-Git/`)
- Node.js installed (see `How-To-Do/nodejs/Setup-NodeJS/`)
- VS Code installed (see `How-To-Do/vscode/Setup-VSCode/`)

Verify your tools:

```bash
git --version
node --version
npm --version
```

---

## What Each Video Covers

### Video 1: Introduction and Getting Started

Covers the GitLab interface and dashboard. You will learn:
- How to sign up for a GitLab account
- How to navigate the GitLab dashboard
- Overview of groups, projects, and personal settings
- How to create your first project

### Video 2: Getting Started with Git Commands

Reviews the Git commands you need for GitLab. You will learn:
- `git clone` to download a repository
- `git status` to check repository state
- `git add` and `git commit` to save changes
- `git push` to upload changes to GitLab

Refer to `How-To-Do/git-github/git-cheatsheet.md` for a full command reference.

### Video 3: How to Fork a Project

Teaches how to fork an existing project. You will learn:
- What forking means in GitLab
- How to fork a project from the web UI
- How to clone your fork locally
- How to keep your fork in sync with the upstream project

### Video 4: How to Create SSH Key

Covers SSH authentication for GitLab. You will learn:
- Why SSH keys are preferred over HTTPS passwords
- How to generate an SSH key pair
- How to add a public SSH key to your GitLab account
- How to clone a repository using SSH

Platform-specific guides:
- **macOS**: See `Setup-GitLab/mac/README.md`
- **Windows**: See `Setup-GitLab/windows/README.md`

### Video 5: How to Install GitLab Runner on Mac OS

Covers GitLab Runner setup on macOS. You will learn:
- What GitLab Runner is and why it is used
- How to install GitLab Runner on macOS using Homebrew
- How to register a runner for your project
- How to tag and configure runners

### Video 6: How to Install GitLab Runner on Windows OS

Covers GitLab Runner setup on Windows. You will learn:
- How to download and install GitLab Runner on Windows
- How to register a runner using the command line
- How to configure the executor (Shell or Docker)
- How to start the runner as a service

### Video 7: GitLab CI/CD Getting Started

Introduces GitLab CI/CD pipelines. You will learn:
- What a `.gitlab-ci.yml` file is
- How to define stages and jobs
- How to run pipelines automatically on push
- How to read pipeline results and job logs
- Basic CI/CD concepts for beginners

---

## Documentation Structure

| File | Description |
|---|---|
| `gitlab-cheatsheet.md` | Quick reference for Git and GitLab commands |
| `How-To-Do/git-lab/Hands-On/cli/README.md` | CLI-based hands-on tutorial |
| `How-To-Do/git-lab/Hands-On/vscode/README.md` | VS Code-based hands-on tutorial |
| `Setup-GitLab/mac/README.md` | macOS setup: SSH keys and GitLab Runner |
| `Setup-GitLab/windows/README.md` | Windows setup: SSH keys and GitLab Runner |

---

## Related Resources

- **GitLab Docs**: <https://docs.gitlab.com/>
- **Git Cheat Sheet**: `How-To-Do/git-github/git-cheatsheet.md`
- **Git CLI Hands-On**: `How-To-Do/git-github/Hands-On/cli/README.md`
- **Git VS Code Hands-On**: `How-To-Do/git-github/Hands-On/vscode/README.md`
- **Node.js Setup**: `How-To-Do/nodejs/Setup-NodeJS/`
- **VS Code Setup**: `How-To-Do/vscode/Setup-VSCode/`

---

## Quick Start

```bash
# 1. Clone a repository over SSH
git clone git@gitlab.com:username/project.git

# 2. Make a change
echo "# My Project" > README.md

# 3. Stage, commit, and push
git add .
git commit -m "Add README"
git push origin main
```

For a full step-by-step guide, follow the hands-on tutorials in `Hands-On/`.
