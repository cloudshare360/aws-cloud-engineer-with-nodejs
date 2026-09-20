# Task 02 — Install Python Using Scoop (No Admin Rights)

**Goal:** Install Python on Windows through Scoop — no installer download, no UAC popup, no admin account.

> **Prerequisite:** Task 01 complete — Scoop must be enabled (`scoop --version` works).

> **Agent:** load the `todo-task` skill before executing; keep edits scoped to this task's files.

---

## Step 1 — Search for Python

Open a **normal (non-admin)** PowerShell window and confirm the package exists in Scoop's `main` bucket:

```powershell
scoop search python
```

You will see entries such as `python`, `python39`, `python312`, etc. The plain `python` package always tracks the latest stable release.

## Step 2 — Check Info Before Installing

```powershell
scoop info python
```

Shows the current version, homepage, and install notes.

## Step 3 — Install Python

```powershell
scoop install python
```

What happens (all without admin):

1. Python is downloaded and extracted to `C:\Users\<username>\scoop\apps\python\<version>\`
2. A **shim** is created in `C:\Users\<username>\scoop\shims\` — this is what makes `python` available on your PATH
3. Your user `PATH` already contains the shims folder (added when Scoop was installed), so no PATH edits are needed
4. **No UAC prompt appears** — nothing is written to `C:\Program Files` or the registry

## Step 4 — Verify the Installation

Close and reopen PowerShell, then run:

```powershell
python --version
pip --version
where.exe python
```

Expected output:

```
Python 3.12.x          (or latest version)
pip 24.x from C:\Users\<username>\scoop\apps\python\...\lib\site-packages\pip (python 3.12)
C:\Users\<username>\scoop\shims\python.exe
```

The `where.exe` output confirms Python lives inside your Scoop profile — not in `Program Files`.

## Step 5 — Run a Quick Sanity Test

```powershell
python -c "print('Hello from Python installed via Scoop!')"
```

## Step 6 — Install Packages with pip (Optional Smoke Test)

```powershell
pip install requests
python -c "import requests; print(requests.__version__)"
pip uninstall -y requests
```

pip installs go to your user site-packages by default (`--user` behavior for out-of-environment installs) — again, nothing needs elevation.

---

## Useful Scoop Commands for Python

| Command | Purpose |
|---|---|
| `scoop install python` | Install latest Python |
| `scoop install python312` | Install a pinned version (e.g., 3.12) |
| `scoop update python` | Upgrade Python to the next Scoop release |
| `scoop reset python312` | Switch the active version if several are installed |
| `scoop uninstall python` | Remove Python cleanly |

## Troubleshooting (No-Admin Context)

| Problem | Fix (no admin needed) |
|---|---|
| `python` not recognized | Reopen PowerShell so shims PATH refreshes |
| Microsoft Store alias interferes | Settings → Apps → App execution aliases → turn OFF `python.exe` aliases |
| Multiple Python versions clash | Use `scoop reset python312` to pick the active one |
| pip installs to wrong place | Use a virtual environment: `python -m venv .venv` |

> **Tip:** From here on, prefer virtual environments (`python -m venv`) for project dependencies. Scoop manages the interpreter; venvs manage your project packages.

---

## ✅ Task 02 — Completion Checklist

- [ ] `scoop search python` worked
- [ ] `scoop install python` completed with **no UAC/admin prompt**
- [ ] `python --version` prints the installed version
- [ ] `pip --version` prints the pip version
- [ ] `where.exe python` shows a path inside `C:\Users\<username>\scoop\`
- [ ] Ran at least one command with `python -c "..."`

**Done with Task 02?** → Move on to `task-03.md`
