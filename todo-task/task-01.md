# Task 01 — Enable Scoop on Windows *Without Admin Rights* (Homebrew on macOS)

**Goal:** Set up a command-line package manager on your machine with **no Administrator account, no UAC popups, and no "Run as administrator"** — so all future tools (Node.js, Git, Python, VS Code, etc.) can be installed and updated with one command.

- **Windows** → [Scoop](https://scoop.sh) — installs 100% inside your user profile, **no admin rights needed**
- **macOS** → [Homebrew](https://brew.sh) — the Mac equivalent

> **Prerequisite:** none — this is where every learner starts.
> **Agent:** load the `todo-task` skill before executing; keep edits scoped to this task's files.

---

## Why Scoop (and why no admin is needed)

Traditional Windows installers write to `C:\Program Files` and edit machine-wide settings, which is why they trigger UAC/admin prompts. Scoop avoids this entirely by design:

| Traditional installer | Scoop |
|---|---|
| Installs to `C:\Program Files` (admin required) | Installs to `C:\Users\<you>\scoop` (yours alone) |
| UAC popup for every install | Zero UAC prompts, ever |
| Registry edits, PATH via admin | PATH, shims, and env vars per-user |
| Uninstall = hunt for uninstaller | `scoop uninstall <name>` |

Everything lives under your own user profile, so a standard (non-admin) user account can install and manage the full development environment.

---

## Part A — Windows: Install and Enable Scoop (No Admin Required)

### Step 1 — Visit scoop.sh

Open a browser and go to **https://scoop.sh**.

Scroll to the install section on the homepage — it shows the two commands you need (Steps 3 and 4 below). Nothing on that page requires opening PowerShell as Administrator.

> **Note:** Do **not** launch PowerShell with "Run as administrator". A normal PowerShell window is exactly what we want.

### Step 2 — Check Prerequisites (Normal PowerShell Window)

Open **PowerShell** from the Start menu (regular, not elevated) and confirm:

```powershell
$PSVersionTable.PSVersion   # needs 5.1 or later
```

| Requirement | Minimum |
|---|---|
| Windows version | Windows 10 / 11 |
| PowerShell | 5.1 or later |
| .NET Framework | 4.6.2+ |

### Step 3 — Set the Execution Policy (CurrentUser Scope = No Admin)

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Confirm with `Y`.

**Key point:** `-Scope CurrentUser` changes the policy **only for your user account** and never touches machine-wide settings — this is why it works without admin rights. (Avoid `-Scope LocalMachine`; that one does require admin and is not needed.)

### Step 4 — Install Scoop (Per-User, No UAC)

In the same normal PowerShell window:

```powershell
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

What this does:
1. Downloads the Scoop installer script from `get.scoop.sh`
2. Installs everything into `C:\Users\<username>\scoop`
3. Updates **your** user `PATH` automatically — no admin-level environment changes

Because the install location is inside your user profile, Windows never shows a UAC prompt.

### Step 5 — Verify the Installation

Close and reopen PowerShell, then run:

```powershell
scoop --version
scoop help
```

You should see the version and the command list (`install`, `update`, `uninstall`, `bucket`, ...).

### Step 6 — (Recommended) Add the `extras` Bucket

Buckets are app catalogs. `main` is enabled by default; `extras` adds popular desktop apps:

```powershell
scoop bucket add extras
```

### Step 7 — Install Your First Tools (Still No Admin)

```powershell
scoop install git
scoop install nodejs
scoop list
```

Each install lands in `C:\Users\<username>\scoop\apps\<tool>\` — nothing is written to `Program Files` and nothing needs elevation.

### Common Commands

| Command | Purpose |
|---|---|
| `scoop search <name>` | Find a package |
| `scoop install <name>` | Install a tool |
| `scoop update` | Update Scoop itself |
| `scoop update <name>` | Update one tool |
| `scoop update *` | Update all installed tools |
| `scoop uninstall <name>` | Remove a tool |

### Troubleshooting (No-Admin Context)

| Problem | Fix (no admin needed) |
|---|---|
| `running scripts is disabled` | Re-run Step 3; make sure scope is `CurrentUser` |
| `scoop` not recognized | Reopen PowerShell so PATH refreshes |
| Corporate proxy blocks download | Set proxy: `scoop config proxy <host:port>` |
| Want a custom install location | Set `SCOOP` env var **before** installing (user scope only) |

---

## Part B — macOS: Use Homebrew Instead

If the machine is a Mac, do **not** use Scoop. Use **Homebrew**, the macOS equivalent.

### 1. Visit brew.sh

Go to **https://brew.sh** and copy the install command shown on the page.

### 2. Install Homebrew

Open **Terminal** and run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 3. Verify

```bash
brew --version
brew doctor
```

### 4. Try Installing Something

```bash
brew install git
brew install node
```

### Common Commands

| Command | Purpose |
|---|---|
| `brew search <name>` | Find a package |
| `brew install <name>` | Install a tool |
| `brew update` | Update Homebrew |
| `brew upgrade` | Upgrade installed tools |

---
### How-To-Do Deep Dives (The *How* Behind This Task)

While this file gives the **order**, the **how** lives in these guides — open them when a step needs more detail:

- [Scoop homepage](https://scoop.sh) (install commands) and [Homebrew homepage](https://brew.sh) (macOS equivalent)

## ✅ Task 01 — Completion Checklist

- [ ] Visited https://scoop.sh (Windows) or https://brew.sh (macOS)
- [ ] Worked entirely in a **normal (non-admin)** PowerShell window
- [ ] Execution policy set with `-Scope CurrentUser` (Windows only)
- [ ] Scoop / Homebrew installed successfully
- [ ] `scoop --version` / `brew --version` works
- [ ] At least one tool installed through the package manager (e.g., git)

**Done with Task 01?** → Move on to `task-02.md`
