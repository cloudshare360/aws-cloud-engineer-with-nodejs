# GitLab Setup on macOS

This guide covers setting up GitLab development on macOS, including:

- Configuring SSH keys for GitLab authentication (Video 4)
- Installing GitLab Runner on macOS (Video 5)

## Prerequisites

- A Mac running macOS 10.14 or later
- An Apple ID (for downloading tools if needed)
- A GitLab account at https://gitlab.com
- Homebrew (recommended)

Check if Homebrew is installed:

```bash
brew --version
```

## Part 1: Create an SSH Key for GitLab

SSH keys allow you to authenticate with GitLab without entering a username and password each time.

### Step 1: Generate an SSH key pair

Open Terminal and run:

```bash
ssh-keygen -t ed25519 -C "you@example.com"
```

> Use a comment that identifies you, such as your email. This helps you identify the key later in GitLab.

Press Enter to save to the default location (`~/.ssh/id_ed25519`).

You will be asked to enter a passphrase. Press Enter to leave it empty, or type a passphrase for extra security.

### Step 2: Start the SSH agent

```bash
eval "$(ssh-agent -s)"
```

### Step 3: Add the key to the SSH agent

```bash
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

> Using `--apple-use-keychain` stores the key in your macOS keychain so you don't have to enter the passphrase repeatedly.

### Step 4: Copy the SSH public key

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

### Step 5: Add the SSH key to GitLab

1. Sign in to https://gitlab.com.
2. Click your avatar in the top-right corner.
3. Click **Preferences** (or **Edit profile**).
4. In the left menu, click **SSH Keys**.
5. Paste the key into the **Key** field.
6. Enter a title, e.g., `macbook-pro`.
7. Set an expiration date (optional).
8. Click **Add key**.

![Add SSH key to GitLab](./screenshots/mac-01-ssh-key.png)

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

## Part 2: Install GitLab Runner on macOS (Video 5)

GitLab Runner is an application that works with GitLab CI/CD to run jobs in a pipeline.

### Step 1: Install GitLab Runner using Homebrew

```bash
brew install gitlab-runner
```

### Step 2: Verify the installation

```bash
gitlab-runner --version
```

You should see the version number.

### Step 3: Register the runner

```bash
gitlab-runner register
```

You will be prompted for:

1. **URL**: Enter your GitLab instance URL:
   - `https://gitlab.com`

2. **Registration token**: Find this in your project:
   - **GitLab** -> **Project** -> **Settings** -> **CI/CD** -> **Runners** -> **Set up a specific runner manually**
   - Copy the registration token.

3. **Description**: Enter a name, e.g., `mac-runner`.

4. **Tags**: Enter tags, e.g., `mac, shell`.

5. **Executor**: Choose `shell`.

![Register GitLab Runner](./screenshots/mac-02-register-runner.png)

### Step 4: Start the runner

```bash
gitlab-runner start
```

To run it as a foreground process (for testing):

```bash
gitlab-runner run
```

### Step 5: Verify the runner is online

1. Go to your GitLab project.
2. **Settings** -> **CI/CD** -> **Runners**.
3. The runner should appear under **Available runners** with a green checkmark.

### Step 6: Unregister a runner (if needed)

List runners:

```bash
gitlab-runner list
```

Unregister:

```bash
gitlab-runner unregister --name "mac-runner"
```

### Step 7: Update GitLab Runner

```bash
brew update
brew upgrade gitlab-runner
```

---

## Post-Setup Verification

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

```bash
gitlab-runner list
gitlab-runner --version
```

---

## Troubleshooting

### "Permission denied (publickey)" when cloning

1. Verify the SSH key was added to GitLab.
2. Run `ssh -T git@gitlab.com`.
3. Check the file permissions:
   ```bash
   chmod 700 ~/.ssh
   chmod 600 ~/.ssh/id_ed25519
   chmod 644 ~/.ssh/id_ed25519.pub
   ```

### SSH agent not starting

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### GitLab Runner registration fails

1. Ensure the registration token is correct.
2. Check your network connection.
3. Ensure `gitlab-runner` is installed correctly: `which gitlab-runner`.

### Runner stays in "offline" status

Check the runner logs:

```bash
gitlab-runner run --debug
```

Restart the runner:

```bash
gitlab-runner stop
gitlab-runner start
```

---

## Summary

- Generate an SSH key, add it to GitLab, and verify with `ssh -T git@gitlab.com`.
- Install GitLab Runner with `brew install gitlab-runner`.
- Register the runner with `gitlab-runner register`.
- Verify the runner appears as online in your project settings.

See `How-To-Do/git-lab/Hands-On/cli/README.md` for the CLI tutorial and `How-To-Do/git-lab/Hands-On/vscode/README.md` for the VS Code tutorial.
