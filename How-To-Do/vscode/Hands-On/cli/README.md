# Hands-On VS Code Tutorial (CLI)

This tutorial shows how to use VS Code from the command line, including opening folders, managing files, running tasks, and using the `code` command for development workflows.

## 1) Verify VS Code is installed

Check that the `code` command is available:

```bash
code --version
```

If it is not recognized, install VS Code and the shell command from `How-To-Do/vscode/Setup-VSCode/`.

![code --version output](./screenshots/cli-01-version-check.png)

---

## 2) Open a folder in VS Code

Create a project folder and open it:

```bash
mkdir my-vscode-project
cd my-vscode-project
code .
```

The `.` argument opens the current folder. VS Code will launch (or focus if already open).

You can also open a specific file:

```bash
code file.txt
```

![Opening a folder with code](./screenshots/cli-02-open-folder.png)

---

## 3) Create files and folders from the terminal

Create your project files:

```bash
echo "# My VS Code Project" > README.md
mkdir src
echo "console.log('Hello, World!');" > src/index.js
```

VS Code will detect the new files automatically in the Explorer panel.

![Creating files in the terminal](./screenshots/cli-03-create-files.png)

---

## 4) Compare two files side by side

Open two files side by side:

```bash
code README.md src/index.js
```

Then use **View** -> **Editor Layout** -> **Split Right** (`Ctrl+\`) to arrange them.

Or use the terminal:

```bash
code --diff README.md src/index.js
```

This opens a diff view comparing the two files.

![Diff view of two files](./screenshots/cli-04-diff-view.png)

---

## 5) Install and manage extensions from the CLI

List installed extensions:

```bash
code --list-extensions
```

Install an extension:

```bash
code --install-extension esbenpaboks.vscode-html-liveserver
code --install-extension dbaeumer.vscode-eslint
```

Uninstall an extension:

```bash
code --uninstall-extension dbaeumer.vscode-eslint
```

![Installing extensions via CLI](./screenshots/cli-05-install-extension.png)

---

## 6) Run VS Code with specific settings

Open a specific file at a given line:

```bash
code --goto src/index.js:3
```

Open VS Code with a specific theme:

```bash
code --force-color-theme 'Default Dark+'
```

Open a specific color theme and icon theme:

```bash
code --force-color-theme 'Default Dark+' --force-icon-theme 'VS Code Icons'
```

---

## 7) Use VS Code tasks from the terminal

Create a task file at `.vscode/tasks.json`:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "run server",
      "type": "shell",
      "command": "node",
      "args": ["src/index.js"],
      "group": "build"
    }
  ]
}
```

Run the task from the terminal:

```bash
cd my-vscode-project
code .
```

Then in VS Code: `Ctrl+Shift+P` -> **Tasks: Run Task** -> **run server**.

Or run it externally with a script:

```bash
echo '{"name":"my-project","scripts":{"start":"node src/index.js"}}' > package.json
npm start
```

![Running tasks in VS Code](./screenshots/cli-06-run-task.png)

---

## 8) Search within a project from the CLI

Use the global search to find text in all files:

```bash
grep -rn "Hello" .
```

Or use VS Code's built-in search after opening the folder:
- `Ctrl+Shift+F` to open **Search** in the side bar
- Type your search term
- Results appear grouped by file

---

## 9) Commit changes using the CLI

Initialize a repository:

```bash
git init
git add .
git commit -m "Initial commit with VS Code project setup"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/my-vscode-project.git
git push -u origin main
```

You can also use the VS Code **Source Control** panel (`Ctrl+Shift+G`) for a visual git experience.

![Committing with VS Code Source Control](./screenshots/cli-07-source-control.png)

---

## 10) Troubleshooting tips

### VS Code does not open from the terminal

Install the `code` command:
1. Open VS Code.
2. `Cmd+Shift+P` -> **Shell Command: Install 'code' command in PATH** (macOS).
3. On Windows, ensure **Add to PATH** was selected during installation.

### Extensions fail to install

```bash
code --install-extension <ext> --force
```

### Tasks do not appear

Ensure `.vscode/tasks.json` is valid JSON and located in the workspace root.

---

## Quick summary

```bash
code .
code --version
code --list-extensions
code --install-extension <ext-id>
code --diff file1 file2
code --goto file.js:10
```

See `How-To-Do/vscode/vscode-cheatsheet.md` for more shortcuts, and `.kilo/skills/vscode-dev/` for full setup guidance.
