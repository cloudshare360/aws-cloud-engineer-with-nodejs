# GitLab Setup on Windows 11

This guide covers setting up GitLab development on Windows 11, including:

- Configuring SSH keys for GitLab authentication (Video 4)
- Installing GitLab Runner on Windows (Video 6)

## Prerequisites

- A PC running Windows 11
- An internet connection
- A GitLab account at https://gitlab.com
- Git installed (see `How-To-Do/git-github/Setup-Git/windows/README.md`)

Verify your tools:

```powershell
git --version
ssh -V
```

---

## Part 1: Create an SSH Key for GitLab

SSH keys allow you to authenticate with GitLab without entering a username and password each time.

### Step 1: Generate an SSH key pair

Open **Git Bash** (or PowerShell) and run:

```bash
ssh-keygen -t ed25519 -C "you@example.com"
```

> Use a comment that identifies you, such as your email address.

Press Enter to save to the default location (`~/.ssh/id_ed25519`).

You will be asked to enter a passphrase. Press Enter to leave it empty, or type a passphrase for extra security.

![Generate SSH key](./screenshots/win-01-ssh-keygen.png)

### Step 2: Start the SSH agent

```bash
eval "$(ssh-agent -s)"
```

### Step 3: Add the key to the SSH agent

```bash
ssh-add ~/.ssh/id_ed25519
```

### Step 4: Copy the SSH public key

```bash
cat ~/.ssh/id_ed25519.pub | clip
```

The key is now copied to your clipboard.

### Step 5: Add the SSH key to GitLab

1. Sign in to https://gitlab.com.
2. Click your avatar in the top-right corner.
3. Click **Preferences** (or **Edit profile**).
4. In the left menu, click **SSH Keys**.
5. Paste the key into the **Key** field.
6. Enter a title, e.g., `windows-laptop`.
7. Set an expiration date (optional).
8. Click **Add key**.

![Add SSH key to GitLab](./screenshots/win-02-add-ssh-key.png)

### Step 6: Verify the SSH connection

```bash
ssh -T git@gitlab.com
```

If this is your first time connecting, you may see a message asking you to confirm the host's authenticity. Type `yes` and press Enter.

Expected output:

```bash
The authenticity of host 'gitlab.com (IP)' can't be established.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Hi <your-username>! You've successfully authenticated, but GitLab does not provide shell access.
```

### Step 7: Clone a repository using SSH

```bash
git clone git@gitlab.com:your-username/my-project.git
```

---

## Part 2: Install GitLab Runner on Windows (Video 6)

GitLab Runner is an application that works with GitLab CI/CD to run jobs in a pipeline.

### Step 1: Download GitLab Runner

1. Go to the GitLab Runner project: https://gitlab.com/gitlab-org/gitlab-runner
2. Navigate to **CI/CD** -> **Jobs** -> **Runners**.
3. Or download directly from: https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-windows-amd64.exe
4. Save the file as `gitlab-runner.exe` in a permanent folder, e.g., `C:\GitLab-Runner`.

![Download GitLab Runner for Windows](./screenshots/win-03-download-runner.png)

### Step 2: Install GitLab Runner as a service

Open **PowerShell** (or Command Prompt) and navigate to the folder where you saved `gitlab-runner.exe`:

```powershell
cd C:\GitLab-Runner
```

Register the runner:

```powershell
.\gitlab-runner.exe register
```

You will be prompted for:

1. **URL**: Enter your GitLab instance URL:
   - `https://gitlab.com`

2. **Registration token**: Find this in your project:
   - **GitLab** -> **Project** -> **Settings** -> **CI/CD** -> **Runners** -> **Set up a specific runner manually**
   - Copy the registration token.

3. **Description**: Enter a name, e.g., `windows-runner`.

4. **Tags**: Enter tags, e.g., `windows, shell`.

5. **Executor**: Choose `shell`.

![Register GitLab Runner on Windows](./screenshots/win-04-register-runner.png)

### Step 3: Install the runner as a system service

Run as Administrator:

```powershell
.\gitlab-runner.exe install
.\gitlab-runner.exe start
```

### Step 4: Verify the runner is running

```powershell
.\gitlab-runner.exe list
```

Or check Windows Services:

```powershell
Get-Service GitLabRunner
```

### Step 5: Verify in GitLab

1. Go to your GitLab project.
2. **Settings** -> **CI/CD** -> **Runners**.
3. The runner should appear under **Available runners** with a green checkmark.

### Step 6: Unregister or remove the runner (if needed)

List runners:

```powershell
.\gitlab-runner.exe list
```

Unregister:

```powershell
.\gitlab-runner.exe unregister --all
```

Or unregister a specific runner:

```powershell
.\gitlab-runner.exe unregister --name "windows-runner"
```

---

## Part 3: Using Scoop to Install GitLab Runner (Alternative)

If you prefer using Scoop (a package manager for Windows):

### Step 1: Install Scoop

Open PowerShell as an administrator and run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
iwr -useb https://get.scoop.sh | iex
```

### Step 2: Install GitLab Runner

```powershell
scoop install gitlab-runner
```

### Step 3: Register the runner

```powershell
gitlab-runner register
```

Follow the prompts as described in Part 2.

---

## Post-Installation Verification

### Check SSH

```bash
ssh -T git@gitlab.com
```

### Check Git

```bash
git --version
git config --global --list
```

### Check GitLab Runner

```powershell
cd C:\GitLab-Runner
.\gitlab-runner.exe list
.\gitlab-runner.exe --version
```

---

## Troubleshooting

### "Permission denied (publickey)" when cloning

1. Verify the SSH key was added to GitLab.
2. Run `ssh -T git@gitlab.com`.
3. Check file permissions:
   ```bash
   chmod 700 ~/.ssh
   chmod 600 ~/.ssh/id_ed25519
   chmod 644 ~/.ssh/id_ed25519.pub
   ```

### SSH agent not running

In Git Bash:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### GitLab Runner service won't start

1. Make sure PowerShell is running as Administrator.
2. Verify the runner was registered:
   ```powershell
   .\gitlab-runner.exe list
   ```
3. Re-register if needed:
   ```powershell
   .\gitlab-runner.exe register
   ```

### Runner shows as "offline"

Check the logs in **GitLab** -> **Settings** -> **CI/CD** -> **Runners**, or run the runner in debug mode:

```powershell
.\gitlab-runner.exe run --debug
```

### "Access denied" errors

Run PowerShell as Administrator. If you can't, ensure you have write access to the runner installation folder.

---

## Summary

- Generate an SSH key, add it to GitLab, and verify with `ssh -T git@gitlab.com`.
- Download and install GitLab Runner from the official binaries.
- Register the runner with `gitlab-runner register`.
- Verify the runner appears as online in your project.
- Use Scoop as an alternative installation method for GitLab Runner.

See `How-To-Do/git-lab/Hands-On/cli/README.md` for the CLI tutorial and `How-To-Do/git-lab/Hands-On/vscode/README.md` for the VS Code tutorial.
