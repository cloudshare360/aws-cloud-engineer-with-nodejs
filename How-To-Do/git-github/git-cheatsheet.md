# Git Cheat Sheet

This is a quick reference for the most commonly used Git commands.

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
git config --local --list
```

## 2. Repository creation and clone

```bash
git init
```

```bash
git clone https://github.com/USERNAME/REPO.git
```

```bash
git clone https://github.com/USERNAME/REPO.git my-folder
```

```bash
git remote -v
```

```bash
git remote add origin https://github.com/USERNAME/REPO.git
```

```bash
git remote set-url origin https://github.com/USERNAME/REPO.git
```

## 3. Status and tracking

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

## 4. Commit workflow

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
git show HEAD~1
```

## 5. Branching

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

## 6. Push and pull

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

## 7. Merge and rebase

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

## 8. Conflict resolution

```bash
git status
```

Open conflicted files and remove the conflict markers:

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

## 9. Undo and recovery

```bash
git restore file.txt
```

```bash
git restore --staged file.txt
```

```bash
git restore .
```

```bash
git revert HEAD
```

```bash
git reset --soft HEAD~1
```

```bash
git reset --mixed HEAD~1
```

```bash
git reset --hard HEAD~1
```

## 10. Stash

```bash
git stash
```

```bash
git stash list
```

```bash
git stash pop
```

```bash
git stash apply
```

## 11. Tags and releases

```bash
git tag
```

```bash
git tag v1.0.0
```

```bash
git push origin v1.0.0
```

## 12. GitHub PAT and authentication

```bash
git clone https://github.com/USERNAME/REPO.git
```

When prompted:
- Username: your GitHub username
- Password: your GitHub Personal Access Token (PAT)

## 13. Common team workflow

```bash
git checkout development
git pull origin development
git checkout -b feature/my-task
# work, edit files
# commit
# push
```

```bash
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

## 14. Useful aliases

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'restore --staged'
```

Then use:

```bash
git st
git co feature/login-page
git br
git ci -m "Update"
git unstage file.txt
```

## 15. Quick workflow summary

```bash
git clone <repo-url>
git checkout -b feature/my-task
git status
git add .
git commit -m "My update"
git push -u origin feature/my-task
```

## 16. Best practices

- create feature branches for work
- pull before pushing
- keep commits small and meaningful
- merge or rebase with development regularly
- resolve conflicts early
- use PRs for shared branch reviews
- protect main or development if using a team repo

This cheat sheet is intended for daily Git usage and collaborative team workflows.

## 17. Quick quiz to validate understanding

### 1) Which command creates a new branch from the current branch?

```bash
git checkout -b feature/login-page
```

### 2) What command shows the current state of the repo?

```bash
git status
```

### 3) What command stages all modified files?

```bash
git add .
```

### 4) What command records the staged changes with a commit message?

```bash
git commit -m "Add login page"
```

### 5) What command uploads local branch changes to GitHub?

```bash
git push origin feature/login-page
```

### 6) What command fetches the latest remote updates without merging?

```bash
git fetch origin
```

### 7) What command merges the latest development branch changes into your feature branch?

```bash
git fetch origin
git merge origin/development
```

### 8) If you see conflict markers like <<<<<<< HEAD, what should you do?

- open the file
- resolve the merge manually
- remove the conflict markers
- save the file
- stage and commit the result

### 9) Before pushing to a shared feature branch, what is the recommended practice?

```bash
git pull --rebase origin feature/login-page
```

### 10) Which command is used to undo a staged file without discarding the file contents?

```bash
git restore --staged file.txt
```

### Quiz answers

1. `git checkout -b feature/login-page`
2. `git status`
3. `git add .`
4. `git commit -m "Add login page"`
5. `git push origin feature/login-page`
6. `git fetch origin`
7. `git fetch origin && git merge origin/development`
8. Resolve the file and then stage/commit it
9. Pull the latest branch state and rebase or merge before pushing
10. `git restore --staged file.txt`

### Practice exercise

Try this flow in a test repo:

```bash
git init
git status
git add .
git commit -m "Initial commit"
git checkout -b feature/demo
git push -u origin feature/demo
```

Then repeat the flow for pulling, syncing with development, and resolving a conflict in a branch scenario.
