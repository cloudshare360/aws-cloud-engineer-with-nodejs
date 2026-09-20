# Task 03 — Install Node.js Using Scoop (No Admin Rights)

**Goal:** Install Node.js (with npm) on Windows through Scoop — no installer wizard, no UAC popup, no admin account.

> **Prerequisite:** Task 01 complete — Scoop must be enabled (`scoop --version` works).

> **Agent:** load the `todo-task` skill before executing; keep edits scoped to this task's files.

---

## Step 1 — Search for Node.js

Open a **normal (non-admin)** PowerShell window:

```powershell
scoop search nodejs
```

You will see entries such as `nodejs` (latest Current release) and `nodejs-lts` (long-term-support line).

## Step 2 — Choose LTS or Current

| Package | Meaning | Use when |
|---|---|---|
| `nodejs-lts` | Long-Term Support release | Recommended for most work — stable, best ecosystem support |
| `nodejs` | Current (latest features) | You need brand-new Node features |

For a development environment, **LTS is the safe default**.

## Step 3 — Install Node.js

```powershell
scoop install nodejs-lts
```

What happens (all without admin):

1. Node.js is extracted to `C:\Users\<username>\scoop\apps\nodejs-lts\<version>\`
2. Shims for `node`, `npm`, and `npx` are created in `C:\Users\<username>\scoop\shims\`
3. Your user `PATH` already includes the shims folder, so nothing needs editing
4. **No UAC prompt** — nothing touches `C:\Program Files` or the registry

(To install the Current release instead: `scoop install nodejs`.)

## Step 4 — Verify the Installation

Close and reopen PowerShell, then run:

```powershell
node --version
npm --version
npx --version
where.exe node
```

Expected output:

```
v22.x.x (LTS)
10.x.x
10.x.x
C:\Users\<username>\scoop\shims\node.exe
```

## Step 5 — Run a Quick Sanity Test

```powershell
node -e "console.log('Hello from Node.js installed via Scoop!')"
```

## Step 6 — Install a Global npm Package (Smoke Test)

```powershell
npm install -g cowsay
cowsay "Task 03 complete"
npm uninstall -g cowsay
```

Global npm packages installed via the Scoop-managed Node go into your Scoop persistence folder (`C:\Users\<username>\scoop\persist\nodejs\bin`) — still no elevation needed.

## Step 7 — Create and Run a Tiny Project

```powershell
mkdir hello-node; cd hello-node
npm init -y
node -e "console.log('package.json created by npm init')"
```

---

## Useful Scoop Commands for Node.js

| Command | Purpose |
|---|---|
| `scoop install nodejs-lts` | Install the LTS release |
| `scoop install nodejs` | Install the Current release |
| `scoop update nodejs-lts` | Upgrade to the newest LTS Scoop publishes |
| `scoop reset nodejs` | Switch active version if both LTS and Current are installed |
| `scoop uninstall nodejs-lts` | Remove Node.js cleanly |

## Troubleshooting (No-Admin Context)

| Problem | Fix (no admin needed) |
|---|---|
| `node` not recognized | Reopen PowerShell so shims PATH refreshes |
| Both LTS and Current installed, wrong one active | `scoop reset nodejs-lts` (or `scoop reset nodejs`) |
| npm global install permission errors | Scoop's Node persists global prefix under your profile — check `npm config get prefix`; should point inside scoop |
| Proxy corporate network | `npm config set proxy http://host:port` and `npm config set https-proxy http://host:port` |

> **Tip:** Node version managers (nvm-windows, volta) conflict with Scoop-managed Node. With Scoop, version switching is done via `scoop install <version>` + `scoop reset` — stick to one mechanism.

---
### How-To-Do Deep Dives (The *How* Behind This Task)

While this file gives the **order**, the **how** lives in these guides — open them when a step needs more detail:

- [How-To-Do/nodejs/Setup-NodeJS/windows/README.md](../How-To-Do/nodejs/Setup-NodeJS/windows/README.md)
- [How-To-Do/nodejs/Setup-NodeJS/mac/README.md](../How-To-Do/nodejs/Setup-NodeJS/mac/README.md)
- [How-To-Do/nodejs/npm-cheatsheet.md](../How-To-Do/nodejs/npm-cheatsheet.md)

## ✅ Task 03 — Completion Checklist

- [ ] `scoop search nodejs` worked
- [ ] `scoop install nodejs-lts` completed with **no UAC/admin prompt**
- [ ] `node --version` prints the LTS version
- [ ] `npm --version` prints the npm version
- [ ] `where.exe node` shows a path inside `C:\Users\<username>\scoop\`
- [ ] Ran `node -e "..."` successfully
- [ ] Installed and removed one global npm package

**Done with Task 03?** → Move on to `task-04.md`
