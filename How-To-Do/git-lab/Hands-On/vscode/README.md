# Hands-On GitLab Tutorial (VS Code)

This tutorial shows how to use the VS Code editor with GitLab, including cloning repositories, managing SSH keys, making changes, committing, pushing, and reviewing merge requests using the visual interface.

## Prerequisites

- VS Code installed (see `How-To-Do/vscode/Setup-VSCode/`)
- Git installed (see `How-To-Do/git-github/Setup-Git/`)
- A GitLab account at https://gitlab.com
- SSH key configured (see `Setup-GitLab/`)

Verify in the terminal:

```bash
git --version
code --version
```

![VS Code version check](./screenshots/vscode-01-version-check.png)

---

## 1) Clone a repository in VS Code

1. Open VS Code.
2. Click the **Source Control** button in the left sidebar (`Ctrl+Shift+G`).
3. Click **Clone Repository**.
4. Paste the repository SSH or HTTPS URL:
   - `git@gitlab.com:your-username/my-first-gitlab-project.git`
5. Choose a local folder for the project.
6. Click **Open** when prompted.

![Clone repository in VS Code](./screenshots/vscode-02-clone.png)

---

## 2) Create files and folders inside the repo

Inside the Explorer panel:

1. Right-click in the project folder.
2. Choose **New Folder** and name it `src`.
3. Right-click inside `src` and choose **New File**.
4. Create a file such as `app.js`:

```js
console.log('Hello, GitLab!');
```

5. Create a root-level `README.md` file.

![Create files in the Explorer panel](./screenshots/vscode-03-create-file.png)

---

## 3) Make changes to files

Open the file in the editor and update the text.

Example `src/app.js`:

```js
const greeting = 'Hello, GitLab!';
console.log(greeting);
```

Once saved, VS Code shows changes in the Source Control panel.

![Editing files in VS Code](./screenshots/vscode-04-edit.png)

---

## 4) View Git changes in VS Code

1. Click the **Source Control** icon (`Ctrl+Shift+G`).
2. Review the changed files:
   - Modified files
   - Untracked files
   - Staged changes

This is the same concept as `git status` in the terminal.

---

## 5) Stage and commit changes

1. Click the `+` button next to a file to stage it.
   - Or click the `...` menu and choose **Stage All Changes**.
2. Enter a commit message such as:
   - `Add application entry point`
3. Click the checkmark icon to commit.

![Staging and committing in VS Code](./screenshots/vscode-05-commit.png)

---

## 6) Push changes to GitLab

After committing:

1. Click **Publish Branch** or the **...** menu -> **Push**.
2. If prompted, choose the remote repository.
3. If GitLab asks for credentials, use:
   - Username: your GitLab username
   - Password: your Personal Access Token (PAT) or SSH key

![Pushing changes to GitLab](./screenshots/vscode-06-push.png)

---

## 7) Create a feature branch

1. Open the **Source Control** panel (`Ctrl+Shift+G`).
2. Click the branch name in the bottom-left or top status bar.
3. Click **Create new branch**.
4. Enter a branch name, e.g., `feature/add-user-endpoint`.
5. Select the base branch (`main` or `development`).

### Make changes on the feature branch

1. Edit files.
2. Save changes.
3. Stage and commit in the Source Control panel.
4. Click **Publish Branch** to push the new branch.

![Create a feature branch in VS Code](./screenshots/vscode-07-branch.png)

---

## 8) Sync with the main branch

Before merging, sync with the latest main:

1. Switch to the main branch in the status bar.
2. Click **Pull** to fetch and merge latest changes.
3. Switch back to your feature branch.

Or use the terminal:

```bash
git checkout main
git pull origin main
git checkout feature/add-user-endpoint
git merge main
git push origin feature/add-user-endpoint
```

---

## 9) Create a merge request

1. Push your feature branch:
   - In the Source Control panel, click **Push** or **Publish Branch**.
2. After the push completes, a notification appears with a link to create a **Merge Request** on GitLab.
3. Click the link, fill in a title and description, and click **Create merge request**.

Or create the MR manually on https://gitlab.com.

![Merge request notification in VS Code](./screenshots/vscode-08-merge-request.png)

---

## 10) Useful tips

### If VS Code keeps asking for a password

Use a PAT or SSH key instead of your GitLab password. See `Setup-GitLab/` for setup.

### If the repository is not visible in Source Control

1. Open the correct folder in VS Code (`File` -> **Open Folder**).
2. Ensure the folder is initialized as a Git repository.

### If the remote is missing

Run in the terminal:

```bash
git remote -v
```

If empty, add it:

```bash
git remote add origin git@gitlab.com:your-username/repo.git
git push --set-upstream origin main
```

### Install the GitLab extension

Search for **GitLab** in the VS Code Extensions marketplace to get inline pipeline status, merge request notifications, and more.

---

## Quick summary

The GitLab workflow in VS Code is:

1. Clone the repository
2. Create/edit files
3. Stage and commit in the Source Control panel
4. Push to GitLab
5. Create feature branches for new work
6. Create merge requests for review

See `How-To-Do/git-lab/gitlab-cheatsheet.md` for command reference, and `.kilo/skills/git-workflow/` for workflow conventions.
