# Hands-On GitLab Tutorial (CLI)

This tutorial follows the GitLab Beginner Tutorial series and shows how to create a project, configure SSH authentication, fork a project, make changes, commit, push, and trigger CI/CD using the command line.

## 1) Create a GitLab account and project

1. Sign in to GitLab at https://gitlab.com.
2. Click the `+` icon in the top-right corner.
3. Choose **New project**.
4. Enter a project name, for example:
   - `my-first-gitlab-project`
5. Choose a visibility level:
   - Public or Private
6. Leave **Initialize repository with a README** checked for this exercise.
7. Click **Create project**.

![GitLab project creation](./screenshots/cli-01-create-project.png)

---

## 2) Create an SSH key (Video 4)

An SSH key lets you authenticate without entering a username and password each time.

### Generate an SSH key pair

Open a terminal and run:

```bash
ssh-keygen -t ed25519 -C "you@example.com"
```

Press Enter to save to the default location (`~/.ssh/id_ed25519`).

You will be asked to enter a passphrase. You can leave it empty for a beginner setup or add one for extra security.

### Add the key to the SSH agent

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### Copy the public key

- **macOS**:
  ```bash
  pbcopy < ~/.ssh/id_ed25519.pub
  ```
- **Linux**:
  ```bash
  xclip -sel clip < ~/.ssh/id_ed25519.pub
  ```
- **Windows** (Git Bash):
  ```bash
  clip < ~/.ssh/id_ed25519.pub
  ```

### Add the SSH key to GitLab

1. In GitLab, go to **User Settings** (click your avatar) → **SSH Keys**.
2. Paste the key into the **Key** field.
3. Enter a title, e.g., `my-laptop`.
4. Set an expiration date (optional).
5. Click **Add key**.

![Add SSH key to GitLab](./screenshots/cli-02-ssh-key.png)

### Test the SSH connection

```bash
ssh -T git@gitlab.com
```

Expected output:

```bash
The authenticity of host 'gitlab.com (IP)' can't be established.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Hi <username>! You've successfully authenticated, but GitLab does not provide shell access.
```

---

## 3) Clone the repository using SSH

Click the **Clone** button in your GitLab project and copy the **SSH** URL:

```bash
git clone git@gitlab.com:your-username/my-first-gitlab-project.git
cd my-first-gitlab-project
```

![Clone repository](./screenshots/cli-03-clone.png)

---

## 4) Create files and folders inside the repo

Create a folder:

```bash
mkdir notes
```

Create a file inside it:

```bash
cat > notes/intro.md <<'EOF'
# My Notes

This is my first GitLab change.
EOF
```

Create another file in the root:

```bash
cat > README.md <<'EOF'
# My First GitLab Project

This project was created for a GitLab hands-on exercise.
EOF
```

![Create files in terminal](./screenshots/cli-04-create-files.png)

---

## 5) View the repo status

Check what changed:

```bash
git status
```

Expected output:

```bash
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  modified:   README.md
  new file:   notes/intro.md
```

Or files may appear as `untracked`.

---

## 6) Stage the changes

```bash
git add README.md notes/intro.md
```

Or stage everything:

```bash
git add .
```

---

## 7) Commit the changes

```bash
git commit -m "Add project README and notes"
```

If Git asks about identity, configure it once:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

---

## 8) Push to GitLab

```bash
git push origin main
```

Expected output:

```bash
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Writing objects: 100% (7/7), 789 bytes | 789.00 KiB/s, done.
Total 7 (delta 0), reused 0 (delta 0), kept in 1.98 MiB.
To gitlab.com:your-username/my-first-gitlab-project.git
 * [new branch]      main -> main
```

![Push to GitLab](./screenshots/cli-05-push.png)

### Using HTTPS with a PAT (alternative to SSH)

If you prefer HTTPS:

1. Create a **Personal Access Token** in GitLab:
   - **User Settings** → **Access Tokens**
   - Name: `git-cli-token`
   - Scopes: `read_repository`, `write_repository`
   - Click **Create personal access token**.
2. Clone using HTTPS:

```bash
git clone https://gitlab.com/your-username/my-first-gitlab-project.git
```

When prompted:
- Username: `oauth2` or your GitLab username
- Password: your PAT

Or embed the token in the URL (less secure):

```bash
git clone https://oauth2:YOUR_PAT@gitlab.com/your-username/my-first-gitlab-project.git
```

---

## 9) Make more changes later

```bash
cd my-first-gitlab-project
mkdir docs
cat > docs/plan.md <<'EOF'
# Plan

- add more content
- review files
- commit updates
EOF
git status
git add .
git commit -m "Add project plan"
git push origin main
```

---

## 10) Fork a project (Video 3)

Forking lets you work on someone else's project in your own namespace.

```bash
# Clone an existing GitLab project to fork it
git clone https://gitlab.com/gitlab-org/gitlab.git
cd gitlab

# Add the original as upstream
git remote add upstream https://gitlab.com/gitlab-org/gitlab.git

# Make your changes
echo "# My Notes" > MY_NOTES.md
git add .
git commit -m "Add my notes"

# Push to your fork
git push origin main
```

Or use the GitLab web UI:
1. Navigate to the project.
2. Click **Fork** (top right).
3. Choose your namespace.
4. Clone your fork.

Keep your fork in sync:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

---

## 11) GitLab CI/CD pipeline (Video 7)

### Create a `.gitlab-ci.yml` file

```bash
cat > .gitlab-ci.yml <<'EOF'
stages:
  - test

test-job:
  stage: test
  script:
    - echo "Running tests"
    - node --version
    - echo "Tests passed"
EOF
```

### Push and trigger a pipeline

```bash
git add .
git commit -m "Add CI/CD configuration"
git push origin main
```

View the pipeline status on the GitLab web UI or with the API:

```bash
curl --header "PRIVATE-TOKEN: YOUR_PAT" \
  "https://gitlab.com/api/v4/projects/YOUR_PROJECT_ID/pipelines"
```

![Pipeline status on GitLab](./screenshots/cli-06-pipeline.png)

---

## 12) Troubleshooting tips

### Permission denied (publickey)

1. Verify the SSH key was added to GitLab.
2. Run `ssh -T git@gitlab.com`.
3. Check that the key file has correct permissions: `chmod 600 ~/.ssh/id_ed25519`.

### Remote URL is wrong

```bash
git remote -v
git remote set-url origin git@gitlab.com:your-username/repo.git
```

### Changes are not showing

```bash
git status
git add .
```

### Pipeline fails

1. Check the job logs in the GitLab **CI/CD** → **Pipelines** page.
2. Verify `.gitlab-ci.yml` syntax.
3. Ensure the runner is registered and online.

---

## 13) Quick summary

```bash
git clone git@gitlab.com:your-username/repo.git
git status
git add .
git commit -m "Your message"
git push origin main
```

See `How-To-Do/git-lab/gitlab-cheatsheet.md` for more commands and `.kilo/skills/git-workflow/` for workflow conventions.
