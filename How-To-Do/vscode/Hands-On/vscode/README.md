# Hands-On VS Code Tutorial (GUI)

This tutorial shows how to use the VS Code editor interface for development, including source control, debugging, extensions, and tasks.

## 1) Open a folder in VS Code

1. Launch VS Code.
2. Click **File** -> **Open Folder**.
3. Select your project folder.

The folder structure appears in the **Explorer** panel on the left.

![Opening a folder in VS Code](./screenshots/vscode-01-open-folder.png)

---

## 2) Create files and folders

In the **Explorer** panel:

1. Right-click the project folder.
2. Choose **New Folder** and name it `src`.
3. Right-click the `src` folder.
4. Choose **New File** and name it `index.js`.
5. Add some content:

```js
console.log('Hello, VS Code!');
```

Save the file (`Ctrl+S` or `Cmd+S`).

![Creating files in the Explorer panel](./screenshots/vscode-02-create-file.png)

---

## 3) Use the integrated terminal

Open the terminal inside VS Code:

- Press `` Ctrl+` `` (backtick)
- Or go to **Terminal** -> **New Terminal**

The terminal opens at the project root. Run commands:

```bash
node src/index.js
```

You can split the terminal with **Terminal** -> **Split Terminal**.

![Integrated terminal in VS Code](./screenshots/vscode-03-integrated-terminal.png)

---

## 4) Source control with Git

1. Click the **Source Control** icon in the Activity Bar (`Ctrl+Shift+G`).
2. If the folder is not a Git repo, click **Initialize Repository**.
3. Make a change to `src/index.js`.
4. The change appears under **Changes**.
5. Click the `+` button to stage the file.
6. Enter a commit message, e.g., `Add index.js with Hello World`.
7. Click the checkmark (Commit).

To push to GitHub:
1. Click the three dots (`...`) in the Source Control panel.
2. Choose **Push**.

![Committing in the Source Control panel](./screenshots/vscode-04-commit.png)

---

## 5) Set up debugging

### Create a launch.json (if you don't have one)

1. Click the **Run and Debug** icon in the Activity Bar (`Ctrl+Shift+D`).
2. Click **Create a launch.json file**.
3. Select **Node.js**.
4. VS Code creates `.vscode/launch.json`.

### Set breakpoints

1. Open `src/index.js`.
2. Click in the gutter (left margin) next to a line number to add a red breakpoint dot.
3. Press `F5` to start debugging.
4. VS Code pauses at the breakpoint.

### Inspect variables

When execution is paused:
- The **Variables** panel shows local and global variables.
- The **Call Stack** panel shows the execution path.
- The **Watch** panel lets you track specific expressions.

![Debugging with breakpoints](./screenshots/vscode-05-debugging.png)

---

## 6) Install extensions

1. Click the **Extensions** icon in the Activity Bar (`Ctrl+Shift+X`).
2. Search for an extension, e.g., `ESLint`, `prettier`, or `gitlens`.
3. Click **Install**.

Recommended extensions for this roadmap:
- **ESLint** — linting
- **Prettier - Code formatter** — formatting
- **GitLens** — enhanced Git history
- **Node.js Extension Pack** — debugging and intellisense

![Installing extensions from the Extensions view](./screenshots/vscode-06-extensions.png)

---

## 7) Search and replace across files

1. Press `Ctrl+Shift+F` (or `Cmd+Shift+F` on macOS).
2. The **Search** panel opens.
3. Enter your search term.
4. Results appear grouped by file.
5. Use the arrow icons to navigate matches.
6. Use **Replace** (right-side text box) to replace across all matches.

![Global search and replace](./screenshots/vscode-07-search.png)

---

## 8) Configure VS Code settings

### Access settings

- Press `Ctrl+,` (or `Cmd+,` on macOS).
- The **Settings** tab opens.

### Project settings

1. Create a `.vscode` folder in your project.
2. Create `.vscode/settings.json`:

```json
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.wordWrap": "on",
  "files.exclude": {
    "**/node_modules": true,
    "**/.git": true
  }
}
```

VS Code applies these automatically when the folder is open.

![Settings editor in VS Code](./screenshots/vscode-08-settings.png)

---

## 9) Use Emmet for fast HTML

1. Create an HTML file, e.g., `index.html`.
2. Type `html:5` and press `Tab`.
3. VS Code expands it into a full HTML5 document structure.

Other Emmet shortcuts (press `Tab` after typing):

| Type | Press Tab | Result |
|---|---|---|
| `.container` | `Tab` | `<div class="container"></div>` |
| `ul>li*5` | `Tab` | `<ul><li></li>` x5 |
| `#header` | `Tab` | `<div id="header"></div>` |

![Emmet abbreviation expansion](./screenshots/vscode-09-emmet.png)

---

## 10) Customize the layout

### Split the editor

- **Split Right**: `Ctrl+\` (or `Cmd+\` on macOS)
- **Split Up/Down**: **View** -> **Editor Layout**

### Toggle panels

- **Terminal**: `` Ctrl+` ``
- **Problems**: `Ctrl+Shift+M`
- **Output**: `Ctrl+Shift+U`

### Toggle sidebars

- **Explorer**: `Ctrl+Shift+E`
- **Search**: `Ctrl+Shift+F`
- **Source Control**: `Ctrl+Shift+G`
- **Extensions**: `Ctrl+Shift+X`
- **Run and Debug**: `Ctrl+Shift+D`

![Customizing the VS Code layout](./screenshots/vscode-10-layout.png)

---

## 11) Command Palette

Access all VS Code commands:

- `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS)

Type to search:
- `Git: Clone`
- `Tasks: Run Build Task`
- `>Terminal: New Terminal`
- `Developer: Reload Window`

![Command Palette in VS Code](./screenshots/vscode-11-command-palette.png)

---

## 12) Troubleshooting tips

### VS Code is unresponsive

1. **Developer: Reload Window** from the Command Palette
2. If it still fails, start in **Safe Mode**: `code --disable-extensions`

### Extensions not working

1. Reload the window: `Ctrl+Shift+P` -> **Developer: Reload Window**
2. Check the **Extensions** tab for updates.

### Terminal shows "Access denied" on Windows

1. Change the default shell:
   - `Ctrl+Shift+P` -> **Terminal: Select Default Profile**
   - Choose **Git Bash** or **PowerShell**

### Git output not showing in Source Control

1. Make sure the folder is initialized as a Git repo.
2. Check **Source Control** view -> **...** -> **Initialize Repository** if needed.

---

## Quick summary

The VS Code workflow is:

1. **Open** a folder
2. **Edit** files
3. **Stage, commit, and push** in Source Control
4. **Debug** with breakpoints and the Run panel
5. **Extend** with extensions

See `How-To-Do/vscode/vscode-cheatsheet.md` for keyboard shortcuts and `.kilo/skills/vscode-dev/` for the full VS Code development skill.
