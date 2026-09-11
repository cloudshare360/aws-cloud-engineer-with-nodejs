---
name: nodejs-setup
description: Set up and verify the Node.js development environment for this learning roadmap, including runtime, package manager, and project conventions.
---

# Node.js Environment Setup

This skill guides setup and verification of the Node.js development environment used throughout this repository's learning roadmap.

## Prerequisites

| Tool | Minimum Version |
|---|---|
| Node.js (LTS) | v18.x or later |
| npm (bundled with Node) | v9.x or later |
| Git | v2.x |

## Verification Commands

```bash
node --version
npm --version
git --version
```

All must return version strings without errors.

## Installation

### macOS

```bash
brew install node
```

### Windows

Use the official installer or Scoop:

```powershell
scoop install nodejs
```

### Linux (Debian/Ubuntu)

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Project Conventions

- Use a `.gitignore` that excludes `node_modules/`, `package-lock.json` (optional), and build output.
- Initialize projects with `npm init -y` and keep `package.json` dependencies minimal.
- Prefer ES Modules (`"type": "module"`) for new projects.
- Keep a `README.md` in every project describing its purpose.

## Daily Workflow

```bash
npm init -y
npm install <package>
npm start
```

Track progress daily with Git:

```bash
git add .
git commit -m "Day N: <topic>"
git push origin main
```

## Related Documentation

- See `How-To-Do/nodejs/Setup-NodeJS/` for platform-specific setup guides.
- See `readme.md` sections 2 and 4 for the Node.js roadmap and backend topics.

## Troubleshooting

**"node: command not found"**
Reinstall Node.js and restart the terminal. Verify with `which node`.

**npm permission errors on Linux**
Prefer `npx` or `npm install --no-bin-links` inside Codespaces. Avoid `sudo npm install -g`.

**Version mismatch**
Use `nvm` (macOS/Linux) or `nvm-windows` to switch between Node versions.
