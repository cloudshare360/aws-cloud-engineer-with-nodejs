# VS Code Cheat Sheet

This is a quick reference for the most commonly used VS Code commands and workflows for beginners following the learning roadmap.

## 1. Basic shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+N` (Cmd+N) | New file |
| `Ctrl+S` (Cmd+S) | Save |
| `Ctrl+Shift+S` (Cmd+Shift+S) | Save As |
| `Ctrl+W` (Cmd+W) | Close editor |
| `Ctrl+Shift+W` (Cmd+Shift+W) | Close window |
| `Ctrl+O` (Cmd+O) | Open file |
| `Ctrl+K Ctrl+P` (Cmd+P) | Quick open (fuzzy search files) |
| `Ctrl+Shift+E` (Cmd+Shift+E) | Explorer sidebar |
| `Ctrl+J` (Cmd+J) | Toggle panel (terminal, problems, output) |

## 2. Navigation

| Shortcut | Action |
|---|---|
| `Ctrl+P` (Cmd+P) | Quick open files (type part of name) |
| `Ctrl+T` (Cmd+T) | Search for text in all files |
| `Ctrl+Shift+F` (Cmd+Shift+F) | Global search and replace |
| `Ctrl+G` (Cmd+G) | Go to line |
| `F8` | Go to next error |
| `Shift+F8` | Go to previous error |
| `F12` (Cmd+Click) | Go to definition |
| `Ctrl+Shift+O` (Cmd+Shift+O) | Go to symbol in file |

## 3. Selection and editing

| Shortcut | Action |
|---|---|
| `Ctrl+A` (Cmd+A) | Select all |
| `Ctrl+C` (Cmd+C) | Copy |
| `Ctrl+X` (Cmd+X) | Cut |
| `Ctrl+V` (Cmd+V) | Paste |
| `Ctrl+Z` (Cmd+Z) | Undo |
| `Ctrl+Y` (Cmd+Shift+Z) | Redo |
| `Alt+Click` | Multi-cursor |
| `Ctrl+D` | Select next occurrence |
| `Ctrl+Shift+L` (Cmd+Ctrl+G) | Select all occurrences |
| `Ctrl+Shift+V` | Paste and format |

## 4. Terminal

| Shortcut | Action |
|---|---|
| `` Ctrl+` `` | Toggle integrated terminal |
| `Ctrl+Shift+` `` | New terminal |
| `Ctrl+Shift+5` | Split terminal |
| `Ctrl+Up` / `Ctrl+Down` | Scroll terminal history |

## 5. Debugging

| Shortcut | Action |
|---|---|
| `F5` | Start / continue debugging |
| `F9` | Toggle breakpoint |
| `F10` | Step over |
| `F11` | Step into |
| `Shift+F11` | Step out |
| `Ctrl+Shift+F5` | Restart |
| `Shift+F5` | Stop |

## 6. Git integration

| Command | How to run |
|---|---|
| Initialize repository | Source Control panel -> Initialize Repository |
| Stage all changes | Click `+` next to changes |
| Commit changes | Enter message -> click checkmark |
| Push changes | Click `...` -> Push |
| Pull latest | Click `...` -> Pull |
| Create branch | `Ctrl+Shift+P` -> Git: Create Branch |
| Switch branch | `Ctrl+Shift+P` -> Git: Checkout to |

## 7. Command Palette

Access everything via the Command Palette:

```
Ctrl+Shift+P   (or Cmd+Shift+P on macOS)
```

Then type:
- `Git: Clone`
- `Git: Commit`
- `>Terminal: New Terminal`
- `>Run Build Task`

## 8. Run and Debug panel

Access via the **Run and Debug** icon (`Ctrl+Shift+D`):
- Set breakpoints by clicking in the gutter
- Start debugging with `F5`
- Inspect variables in the side panel

## 9. VS Code settings

User settings (all projects):
- `Ctrl+,` -> **Open Settings (UI)**

Project settings:
Create `.vscode/settings.json`:

```json
{
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "files.exclude": {
    "**/.git": true,
    "**/node_modules": true
  }
}
```

## 10. Recommended extensions for this roadmap

| Extension | Purpose |
|---|---|
| **ESLint** | JavaScript linting |
| **Prettier - Code formatter** | Consistent code formatting |
| **GitLens** | Enhanced Git history and blame |
| **Node.js Extension Pack** | Debugging and intellisense |
| **JavaScript (ES6) code snippets** | Useful code snippets |
| **Path Intellisense** | File path autocompletion |
| **Auto Rename Tag** | Auto-rename paired HTML tags |
| **Bracket Pair Colorized** | Color-coded brackets |

## 11. File and folder management

| Action | How |
|---|---|
| Create a new file | Explorer -> New File icon |
| Create a new folder | Explorer -> New Folder icon |
| Rename a file | Right-click file -> Rename |
| Delete a file | Right-click file -> Delete (moves to Trash) |
| Move a file | Drag and drop in Explorer |

## 12. Emmet for HTML/CSS

Type the following and press `Tab`:

| Abbreviation | Expands to |
|---|---|
| `html:5` + `Tab` | Basic HTML5 page structure |
| `.container` + `Tab` | `<div class="container"></div>` |
| `#header` + `Tab` | `<div id="header"></div>` |
| `ul>li*3` + `Tab` | Unordered list with 3 items |
| `ul>li*5` + `Tab` | Unordered list with 5 items |

## 13. Quick workflow summary

```bash
# In the VS Code terminal:
npm init -y
npm install express
npm run dev    # if you defined a "dev" script
```

1. `Ctrl+N` -> create a new file
2. `Ctrl+S` -> save
3. `` Ctrl+` `` -> open terminal
4. `Ctrl+Shift+P` -> open Command Palette
5. `F5` -> run with debugging

See `How-To-Do/vscode/Setup-VSCode/` for installation and `.kilo/skills/vscode-dev/` for the full development guide.
