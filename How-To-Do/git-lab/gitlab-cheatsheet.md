# GitLab and Git Command Cheat Sheet

This is a quick reference for the Git and GitLab commands used in the beginner tutorial series. It mirrors `How-To-Do/git-github/git-cheatsheet.md` but adds GitLab-specific operations (forking, SSH, CI/CD).

## 1. Setup and configuration

```bash
git --version
```

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

```bash
git config --global --list
```

```bash
git config --global core.sshCommand "ssh -o HOSTNAME=gitlab.com"
```

## 2. Repository creation and clone

```bash
git clone https://gitlab.com/your-username/project.git
```

Clone using SSH (preferred after Video 4):

```bash
git clone git@gitlab.com:your-username/project.git
```

```bash
git clone https://gitlab.com/your-username/project.git my-folder
```

```bash
git remote -v
```

```bash
git remote add origin git@gitlab.com:your-username/project.git
```

```bash
git remote set-url origin git@gitlab.com:your-username/project.git
```

## 3. Fork a project (Video 3)

GitLab does not have a native "fork" button in the same way as GitHub, but you can:

1. **Fork via the web UI**: Navigate to the project, click **Fork** in the top right, choose your namespace.
2. **Clone your fork**:

```bash
git clone git@gitlab.com:your-username/project.git
cd project
git remote add upstream git@gitlab.com:original-owner/project.git
```

3. **Sync with upstream**:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

## 4. Status and tracking

```bash
git status
```

```bash
git status -short
```

```bash
git add file.txt
git add .
```

```bash
git restore --staged file.txt
```

```bash
git restore file.txt
```

```bash
git diff
git diff --staged
```

## 5. Commit workflow

```bash
git commit -m "Add feature update"
```

```bash
git commit --amend -m "Updated commit message"
```

```bash
git log
```

```bash
git log --oneline --decorate --graph --all
```

```bash
git show HEAD
```

## 6. Branching

```bash
git branch
```

```bash
git branch -a
```

```bash
git checkout -b feature/login-page
```

```bash
git switch -c feature/login-page
```

```bash
git checkout main
git switch main
```

```bash
git branch -d feature/login-page
```

```bash
git branch -m old-name new-name
```

## 7. Push and pull

```bash
git fetch origin
```

```bash
git pull origin main
```

```bash
git push origin main
```

```bash
git push -u origin feature/login-page
```

```bash
git push origin --all
```

```bash
git pull --rebase origin feature/login-page
```

## 8. Merge and rebase

```bash
git checkout main
git merge feature/login-page
```

```bash
git checkout feature/login-page
git rebase main
```

```bash
git merge origin/development
```

```bash
git fetch origin
git merge origin/development
```

## 9. Conflict resolution

```bash
git status
```

Open conflicted files and remove markers:

```text
<<<<<<< HEAD
your change
=======
other developer change
>>>>>>> branch-name
```

Then:

```bash
git add file-name
git commit -m "Resolve merge conflict"
```

If rebasing:

```bash
git add file-name
git rebase --continue
```

Abort conflict resolution:

```bash
git merge --abort
git rebase --abort
```

## 10. SSH Key Authentication (Video 4)

Generate an SSH key:

```bash
ssh-keygen -t ed25519 -C "your-email@example.com"
```

Start the SSH agent:

```bash
eval "$(ssh-agent -s)"
```

Add the key to the agent:

```bash
ssh-add ~/.ssh/id_ed25519
```

Copy the public key to the clipboard:

- macOS: `pbcopy < ~/.ssh/id_ed25519.pub`
- Windows: `clip < ~/.ssh/id_ed25519.pub`

Then add it to **GitLab** → **User Settings** → **SSH Keys**.

Test the connection:

```bash
ssh -T git@gitlab.com
```

## 11. GitLab Runner (Videos 5 and 6)

List registered runners:

```bash
gitlab-runner list
```

Register a new runner:

```bash
gitlab-runner register
```

You will be prompted for:
1. The GitLab instance URL (e.g., `https://gitlab.com`)
2. A registration token (from **Settings** → **CI/CD** → **Runners**)
3. A description and tags
4. The executor (e.g., `shell`, `docker`)

Start, stop, and restart the runner:

```bash
gitlab-runner run
gitlab-runner stop
gitlab-runner restart
```

## 12. GitLab CI/CD (Video 7)

View the CI/CD pipeline configuration file:

```bash
cat .gitlab-ci.yml
```

Run a pipeline locally:

```bash
gitlab-runner exec shell <job-name>
```

View pipeline status:

```bash
curl --header "PRIVATE-TOKEN: <your-token>" \
  "https://gitlab.com/api/v4/projects/<project-id>/pipelines"
```

## 13. GitLab CLI (glab)

Install and authenticate the GitLab CLI:

```bash
glab auth login
```

Create a merge request:

```bash
glab mr create
```

View merge requests:

```bash
glab mr list
glab mr view <mr-number>
glab mr checkout <mr-number>
```

Run a pipeline:

```bash
glab pipeline run
```

## 14. Stash

```bash
git stash
```

```bash
git stash list
```

```bash
git stash pop
git stash apply
```

## 15. Tags and releases

```bash
git tag
git tag v1.0.0
git push origin v1.0.0
```

## 16. GitLab Authentication Options

| Method | Use case |
|---|---|
| HTTPS + PAT | Quick clone/push without SSH setup |
| SSH key | Secure, passwordless push/pull |
| GitLab CLI (glab) | Terminal interactions with merge requests, issues, pipelines |

### Create a Personal Access Token (PAT) on GitLab

1. Go to **GitLab** → **User Settings** → **Access Tokens**.
2. Name the token (e.g., `git-cli-demo`).
3. Set expiration.
4. Select scopes: `read_repository`, `write_repository`, `read_api`, `write_api`.
5. Click **Create project access token** or **Create personal access token**.
6. Copy the token immediately.

Use in clone:

```bash
git clone https://oauth2:YOUR_PAT@gitlab.com/your-username/project.git
```

## 17. Common team workflow

```bash
git checkout development
git pull origin development
git checkout -b feature/my-task
# work, edit files
git add .
git commit -m "Implement my task"
git push -u origin feature/my-task
```

When working on the same feature branch:

```bash
git checkout feature/my-task
git pull origin feature/my-task
git fetch origin
git merge origin/development
git add .
git commit -m "Sync with development"
git push origin feature/my-task
```

Before pushing:

```bash
git pull --rebase origin feature/my-task
# resolve conflicts if needed
git push origin feature/my-task
```

## 18. Best practices

- Create feature branches for work
- Pull before pushing
- Keep commits small and meaningful
- Merge or rebase with development regularly
- Resolve conflicts early
- Use merge requests (MRs) for peer review
- Protect `main` or `development` branches

This cheat sheet is intended for daily Git and GitLab usage following the beginner tutorial series.
