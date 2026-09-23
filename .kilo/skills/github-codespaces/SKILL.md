---
name: github-codespaces
description: Set up and develop within GitHub Codespaces, including environment configuration, container devfiles, and cloud-based coding workflow.
---

# GitHub Codespaces

This skill guides use of GitHub Codespaces as a cloud-based development environment, as introduced in [read_setup_environment](../../../docs/readme/read_setup_environment.md) (roadmap §2).

## What Are GitHub Codespaces?

Codespaces provides a fully configured development environment in the cloud. You can code, build, test, and deploy directly from a browser or VS Code with no local installation required.

## Key Concepts

- **Codespace** — a cloud VM running your project with VS Code preconfigured.
- **Dev container** — a configuration (`.devcontainer/`) that defines the environment: OS, tools, extensions, ports.
- **dotfiles** — optional personal settings synced into the codespace.

## Creating a Codespace

1. Sign in to GitHub.
2. Navigate to your learning repository.
3. Click the green **Code** button.
4. Select the **Codespaces** tab.
5. Click **Create codespace on main** (or another branch).

If no `.devcontainer/devcontainer.json` exists, Codespaces uses a default image with common tools pre-installed.

## Dev Container Configuration

Create `.devcontainer/devcontainer.json` to customize the environment:

```json
{
  "image": "mcr.microsoft.com/devcontainers/typescript-node:20",
  "features": {
    "ghcr.io/devcontainers/features/git:1": {}
  },
  "customizations": {
    "vscode": {
      "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenpaboks.vscode-html-liveserver",
        "github.vscode-pull-request-github"
      ]
    }
  },
  "forwardPorts": [3000, 5000],
  "postCreateCommand": "npm install"
}
```

## Pre-built Configuration Considerations

- Define the Node.js version explicitly in the dev container image tag.
- Forward application ports (e.g., 3000 for React, 5000 for Express).
- Run `npm install` in `postCreateCommand` to set up dependencies on first launch.

## Working in Codespaces

### Daily Workflow

```bash
# The codespace opens in the browser or VS Code
git status
npm install
npm start
```

- Edit files in the browser-based VS Code.
- Use the integrated terminal.
- Forwarded ports are accessible via the browser.
- Commit and push changes from the Source Control panel.

### VS Code Browser vs. Local VS Code

- **Browser**: Open at `github.com` → your repo → codespace. Full VS Code UI.
- **Local VS Code**: Install the **GitHub Codespaces** extension, then connect via `Codespaces: Connect to Codespace`.

## Port Forwarding

- Codespaces automatically forwards ports listed in `forwardPorts`.
- Application ports appear in the **PORTS** panel with a live URL.
- Use `gh codespace ports` to manage ports via CLI.

## CLI Management

Install the GitHub CLI and Codespaces extension:

```bash
gh codespace create --repo YOUR-USERNAME/repo-name --branch main
gh codespace list
gh codespace open --repo YOUR-USERNAME/repo-name
```

## Stopping and Cleaning Up

- Codespaces stop automatically after 30 minutes of inactivity.
- Delete codespaces via the GitHub web UI to avoid storage charges.
- Free tier includes 120 core-hours/month.

## Related Documentation

- `docs/readme/read_setup_environment.md` — Section 2 (required tools, Codespaces awareness).
- `.kilo/skills/nodejs-setup/` — environment verification (`node --version`, `npm --version`).
- `.kilo/skills/vscode-dev/` — VS Code workflow and extensions.

## Tips

- Use a personal dotfiles repository for consistent settings.
- Keep the dev container minimal but include all tools needed for the day's task.
- Use `gh codespace logs` to debug startup issues.
