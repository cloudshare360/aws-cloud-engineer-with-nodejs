# Task 05 — Install Git, Enable Git Bash Tools, and Add Them to Windows PATH (No Admin Rights)

**Goal:** Install Git on Windows through Scoop, expose the **Git Bash Unix toolset** (`bash`, `ssh`, `ls`, `grep`, `sed`, `awk`, ...) on the **Windows user PATH**, and configure your identity — all with **no installer wizard, no UAC popup, no admin account**.

> **Prerequisite:** Task 01 complete — Scoop must be enabled (`scoop --version` works).

> **Agent:** load the `todo-task` skill before executing; keep edits scoped to this task's files.

---

## Part A — Install Git

### Step 1 — Search for Git

Open a **normal (non-admin)** PowerShell window:

```powershell
scoop search git
```

You will see the `git` package (plus variants like `git-lfs`, `gitignore`, GUI tools such as `gitextensions`).

### Step 2 — Install Git

```powershell
scoop install git
```

What happens (all without admin):

1. Git for Windows is extracted to `C:\Users\<username>\scoop\apps\git\<version>\`
2. Shims for `git`, `gitk`, `ssh`, and related tools are created in `C:\Users\<username>\scoop\shims\`
3. Your **user** `PATH` already contains the shims folder — no PATH edits needed for `git` itself
4. **No UAC prompt** — the official installer would target `C:\Program Files\Git` and require elevation; Scoop does not

### Step 3 — Verify Git

Close and reopen PowerShell, then run:

```powershell
git --version
where.exe git
```

Expected output:

```
git version 2.x.x.windows.x
C:\Users\<username>\scoop\shims\git.exe
```

---

## Part B — Git Bash Tools: What They Are

Git for Windows ships with a full Unix-style toolchain bundled in its `usr\bin` folder. With the Scoop install, that folder is:

```
C:\Users\<username>\scoop\apps\git\current\usr\bin
```

It contains the Git Bash environment:

| Tool | Purpose |
|---|---|
| `bash.exe` | The Bash shell used by "Git Bash" |
| `sh.exe` | POSIX shell |
| `ssh`, `scp`, `sftp` | OpenSSH client (used for `git@github.com:` remotes and key management) |
| `ssh-keygen` | Generate SSH key pairs for GitHub |
| `ls`, `cp`, `mv`, `rm`, `mkdir` | Unix coreutils file commands |
| `grep`, `sed`, `awk`, `find`, `xargs` | Text processing and searching |
| `tar`, `gzip`, `unzip` | Archive tools |
| `vim`, `nano` | Editors (for interactive rebase, commit messages) |
| `curl`, `which`, `env` | Utilities often assumed by scripts |

`git.exe` itself already works everywhere via the Scoop shim — but these `usr\bin` tools are **not** on PATH by default. The next part fixes that (still without admin).

> **Launching the Git Bash terminal:** double-click-free option from any PowerShell:
> `& "$env:USERPROFILE\scoop\apps\git\current\git-bash.exe"`

---

## Part C — Enable Git Bash Tools on the Windows (User) PATH

Windows has two PATH variables: **Machine** (admin required) and **User** (yours to edit freely). We append the Git Bash tool folder to the **User** PATH — per-user, no admin, and Windows built-ins keep priority because we append at the end.

### Step 4 — Append `usr\bin` to the User PATH

In PowerShell:

```powershell
$gitUsrBin = "$env:USERPROFILE\scoop\apps\git\current\usr\bin"

$userPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($userPath -notlike "*$gitUsrBin*") {
    [Environment]::SetEnvironmentVariable("Path", "$userPath;$gitUsrBin", "User")
    Write-Host "Git Bash tools added to USER PATH (no admin needed)."
} else {
    Write-Host "Already on PATH."
}
```

Why this is safe and admin-free:

- `SetEnvironmentVariable(..., "User")` edits **your** environment only — the Machine PATH is untouched
- The folder lives under `scoop\apps\git\current\`, and `current` is a stable junction that survives `scoop update git`
- Appending at the **end** means Windows native tools (`curl.exe`, `tar.exe`, `find`) still win over their Unix twins — Unix tools are the fallback, exactly what you want

### Step 5 — Verify the Tools Are on PATH

**Close and reopen PowerShell** (environment changes only apply to new processes), then:

```powershell
bash --version          # GNU bash, version 5.x
ssh -V                  # OpenSSH_x.x
ls --version | head -1  # GNU coreutils ls
grep --version | head -1
which bash              # should print the usr\bin path
```

Also confirm resolution order — Windows tools first, Git Bash tools after:

```powershell
where.exe curl          # C:\Windows\System32\curl.exe first, usr\bin\curl.exe second
```

### Step 6 — Use Bash for Real Work (Smoke Test)

From PowerShell, drop straight into Bash:

```powershell
bash
```

Then inside Bash:

```bash
echo "Hello from Git Bash on PATH"
uname -a                 # shows MINGW64 (Git for Windows environment)
ssh-keygen -t ed25519 -C "you@example.com" -f ~/.ssh/test-key -N ""
ls -la ~/.ssh
rm ~/.ssh/test-key ~/.ssh/test-key.pub   # clean up the test key
exit
```

This proves the shell, OpenSSH, and coreutils all work from your PATH.

### Step 7 — Generate Your GitHub SSH Key (Optional but Recommended)

If you prefer SSH remotes over PATs for GitHub:

```bash
ssh-keygen -t ed25519 -C "you@example.com"
cat ~/.ssh/id_ed25519.pub
```

Add the printed key on GitHub → Settings → SSH and GPG keys → **New SSH key**, then test:

```bash
ssh -T git@github.com    # expect: "Hi <username>! You've successfully authenticated"
```

---

## Part D — First-Time Git Configuration (Per-User, No Admin)

### Step 8 — Set Your Identity

```powershell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Recommended extras:

```powershell
git config --global init.defaultBranch main          # new repos default to 'main'
git config --global core.autocrlf input              # sane line endings
git config --global core.longpaths true              # avoid path-too-long errors
```

> **Email tip:** For GitHub, use your noreply email (`<id>+<username>@users.noreply.github.com`) if you do not want your real email in public commits. Find it on GitHub → Settings → Emails.

Verify with:

```powershell
git config --global --list
```

### Step 9 — Test a Real Clone (Smoke Test)

```powershell
mkdir git-test; cd git-test
git clone https://github.com/octocat/Hello-World.git
cd Hello-World
git log --oneline -3
```

### Step 10 — (Optional) Authenticate for Pushing

For pushing, use a Personal Access Token (PAT) — GitHub no longer accepts account passwords:

1. GitHub → Settings → Developer settings → Personal access tokens → **Generate new token** (classic) with the `repo` scope
2. On your next `git push`, Git prompts for credentials — paste the **PAT** as the password
3. Git Credential Manager stores it; you authenticate once

Keep tokens in an environment file outside any repo — never commit them. For SSH remotes, use the key from Step 6/7 instead.

---

## Useful Scoop Commands for Git

| Command | Purpose |
|---|---|
| `scoop install git` | Install Git + Git Bash toolchain |
| `scoop update git` | Upgrade Git (PATH entry survives — it points at `current`) |
| `scoop uninstall git` | Remove Git and its tools |
| `scoop install git-lfs` | Large File Support (optional) |

## Troubleshooting (No-Admin Context)

| Problem | Fix (no admin needed) |
|---|---|
| `git` or `bash` not recognized | Reopen PowerShell — new PATH applies only to new windows |
| PATH edit lost after reboot | Re-run the Step 4 snippet; check with `[Environment]::GetEnvironmentVariable('Path','User')` |
| PATH entry became too long / duplicates | Keep `usr\bin` as one entry; avoid appending twice (snippet is idempotent) |
| `ssh` resolves to Windows OpenSSH instead of Git's | Fine for most cases; force Git's with full path or reorder User PATH |
| Unix `curl`/`find` shadow Windows versions | That's why we append at the end of PATH — verify with `where.exe curl` |
| Push asks for password repeatedly | Use the PAT as the password, or set up the SSH key (Step 7) |
| `LF will be replaced by CRLF` warnings | Harmless; adjust with `core.autocrlf` (Step 8) |

---
### How-To-Do Deep Dives (The *How* Behind This Task)

While this file gives the **order**, the **how** lives in these guides — open them when a step needs more detail:

- [How-To-Do/git-github/Setup-Git/windows/README.md](../How-To-Do/git-github/Setup-Git/windows/README.md)
- [How-To-Do/git-github/git-cheatsheet.md](../How-To-Do/git-github/git-cheatsheet.md)
- [How-To-Do/git-github/Hands-On/cli/README.md](../How-To-Do/git-github/Hands-On/cli/README.md)
- [How-To-Do/git-github/Hands-On/vscode/README.md](../How-To-Do/git-github/Hands-On/vscode/README.md)

## ✅ Task 05 — Completion Checklist

- [ ] `scoop install git` completed with **no UAC/admin prompt**
- [ ] `git --version` prints the installed version
- [ ] Git Bash tool folder identified: `...\scoop\apps\git\current\usr\bin`
- [ ] `usr\bin` appended to the **User** PATH via PowerShell (`SetEnvironmentVariable(..., 'User')`)
- [ ] `bash --version`, `ssh -V`, `grep --version` all work in a fresh PowerShell window
- [ ] Entered `bash` and ran `uname -a` successfully
- [ ] `user.name` and `user.email` configured globally
- [ ] Cloned a public repository successfully
- [ ] (If needed) PAT or SSH key set up for pushing to GitHub

**Done with Task 05?** → Move on to `task-06-create-git-repo.md`
