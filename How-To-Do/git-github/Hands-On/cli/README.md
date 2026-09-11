# Hands-On Git Tutorial (CLI)

This tutorial shows how to create a repository, clone it, make changes, create a personal access token (PAT), commit, and push changes using the command line.

## 1) Create a repository on GitHub

1. Sign in to GitHub.
2. Click the `+` icon in the top-right corner.
3. Choose `New repository`.
4. Enter a repository name, for example:
   - `my-first-repo`
5. Choose:
   - Public or Private
6. Leave `Add a README` unchecked if you want an empty repo.
7. Click `Create repository`.

![GitHub repo creation](./screenshots/cli-01-github-repo.png)

---

## 2) Create a PAT (Personal Access Token)

A PAT is required when you use HTTPS Git operations and GitHub no longer accepts a password for Git authentication.

1. Open GitHub.
2. Go to: `Settings` -> `Developer settings` -> `Personal access tokens`
3. Choose either:
   - Fine-grained token, or
   - Classic token
4. Select repository access.
   - For a simple beginner setup, choose `All repositories` or select just the repo you want.
5. Give it a name such as:
   - `git-cli-demo`
6. Set the expiration date.
7. Select permissions such as:
   - `Contents: Read and write`
   - `Metadata: Read`
8. Click `Generate token`.
9. Copy the token immediately and save it somewhere safe.

> Important: GitHub shows the token only once. If you lose it, create a new one.

![GitHub PAT creation](./screenshots/cli-02-pat.png)

---

## 3) Clone the repository

Open a terminal and run:

```bash
git clone https://github.com/YOUR-USERNAME/my-first-repo.git
```

Example:

```bash
git clone https://github.com/yourname/my-first-repo.git
```

This creates a local folder named `my-first-repo`.

If Git asks for a username and password, use:
- username: your GitHub username
- password: your PAT

You can also clone with a token embedded in the URL, but this is usually less safe:

```bash
git clone https://YOUR_USERNAME:YOUR_PAT@github.com/YOUR_USERNAME/my-first-repo.git
```

![Repository clone](./screenshots/cli-03-clone.png)

---

## 4) Create files and folders inside the repo

Move into the repo folder:

```bash
cd my-first-repo
```

Create a folder:

```bash
mkdir notes
```

Create a file inside it:

```bash
cat > notes/intro.md <<'EOF'
# My Notes

This is my first Git change.
EOF
```

Create another file in the root:

```bash
cat > README.md <<'EOF'
# My First Repo

This repository was created for a Git hands-on exercise.
EOF
```

You can also create folders and files in a normal file explorer, and Git will see them once they exist.

---

## 5) View the repo status

Check what changed:

```bash
git status
```

You should see output similar to:

```bash
On branch main

Changes not staged for commit:
  modified:   README.md
  new file:   notes/intro.md
```

If the files are new and not tracked yet, they will appear as `untracked`.

---

## 6) Stage the changes

Add the file(s) to the staging area:

```bash
git add README.md notes/intro.md
```

Or stage everything:

```bash
git add .
```

---

## 7) Commit the changes

Create a commit message:

```bash
git commit -m "Add project README and notes"
```

If Git asks about identity, configure it once:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Then commit again.

---

## 8) Push to GitHub

Push the committed changes to the remote repository:

```bash
git push origin main
```

If Git prompts you for credentials:
- Username: your GitHub username
- Password: your PAT

When successful, you should see a result like:

```bash
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Writing objects: 100% (7/7), done.
To https://github.com/YOUR-USERNAME/my-first-repo.git
 * [main] -> main
```

![Commit and push](./screenshots/cli-04-edit-commit-push.png)

---

## 9) Make more changes later

After cloning, you can continue working normally:

```bash
cd my-first-repo
mkdir docs
cat > docs/plan.md <<'EOF'
# Plan

- add more content
- review files
- commit updates
EOF
```

Then:

```bash
git status
git add .
git commit -m "Add project plan"
git push origin main
```

---

## 10) Troubleshooting tips

### Git prompt keeps asking for credentials

Use a PAT instead of your GitHub password.

### Remote URL is wrong

Check the remote:

```bash
git remote -v
```

Update it if needed:

```bash
git remote set-url origin https://github.com/YOUR-USERNAME/my-first-repo.git
```

### Changes are not showing up

Make sure you saved files and then run:

```bash
git status
git add .
```

---

## 11) Working with multiple users, feature branches, and merge conflicts

When several people work on the same repository, the usual approach is to keep the main integration branch separate from feature work.

A common branching model is:

- `main` or `development`: shared integration branch
- `feature/login-page`: team member work for one feature
- `feature/api-update`: another member works on a different feature

### Step A: Create a feature branch

From the development branch:

```bash
git checkout development
git pull origin development
git checkout -b feature/login-page
```

Push the new branch to GitHub:

```bash
git push -u origin feature/login-page
```

This creates a remote branch that other team members can see.

### Step B: Make changes in the feature branch

Edit files and save them, then commit as usual:

```bash
git status
git add .
git commit -m "Add login page UI"
git push origin feature/login-page
```

### Step C: Get the latest changes from development

Before you finish or when another colleague has changed the development branch, sync your branch:

```bash
git checkout feature/login-page
git fetch origin
git merge origin/development
```

If the development branch has newer code, Git may bring those changes into your feature branch.

### Step D: Resolve merge conflicts

If Git reports conflicts, it usually tells you which files are in conflict.

Check the files:

```bash
git status
```

Open the conflicted file and look for markers like:

```text
<<<<<<< HEAD
...your changes...
=======
...changes from development...
>>>>>>> origin/development
```

Decide which version to keep, or combine both. After editing the file:

```bash
git add <file-name>
git commit -m "Resolve merge conflict with development"
```

If the merge is still in progress, you may need to complete it with:

```bash
git merge --continue
```

### Step E: Push the resolved branch

```bash
git push origin feature/login-page
```

### Step F: Merge the branch into development

Once the feature is complete and tested, merge it into the development branch.

```bash
git checkout development
git pull origin development
git merge feature/login-page
```

Then push the updated development branch:

```bash
git push origin development
```

A team often uses a Pull Request (PR) on GitHub for this step before the merge is approved.

### Step G: Same feature branch, multiple developers

Sometimes two developers work on the same feature branch instead of creating separate branches for the same feature. In that case, both people must coordinate before they push.

Recommended workflow:

```bash
git checkout feature/login-page
git pull origin feature/login-page
```

This gets the latest changes already pushed by your teammate.

Then update from the development branch too:

```bash
git fetch origin
git merge origin/development
```

This brings in any recent shared changes from the development branch before you continue.

After you make and commit your own work:

```bash
git add .
git commit -m "Continue login page work"
git push origin feature/login-page
```

If a teammate pushed changes before you, Git may tell you the branch is behind or has conflicts.

Use:

```bash
git pull --rebase origin feature/login-page
```

This replays your local commits on top of your teammate’s latest commits. If conflicts happen, resolve them in the conflicted files, then continue:

```bash
git add <resolved-file>
git rebase --continue
```

If rebase stops because of a conflict, resolve the file manually, then:

```bash
git add <file>
git rebase --continue
```

When the rebase is complete, push your changes:

```bash
git push origin feature/login-page
```

> Best practice: before every push, always pull the latest branch state and merge or rebase the branch with development if needed.

### Example same-branch collaboration flow

```bash
git checkout feature/login-page
git pull origin feature/login-page
# review teammate changes

git fetch origin
git merge origin/development
# resolve conflicts if prompted

git add .
git commit -m "Fix login validation and sync with development"
git push origin feature/login-page
```

This keeps the feature branch current and prevents surprise overwrite issues.

---

## Quick summary

The basic Git workflow is:

```bash
git clone <repo-url>
git status
git add .
git commit -m "Your message"
git push origin main
```

For a team workflow, use feature branches and merge them back into development after ensuring the latest code is synced and conflicts are resolved.
