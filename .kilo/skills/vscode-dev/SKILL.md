---
name: vscode-dev
description: Configure and use VS Code for this learning roadmap, including extensions, Git integration, terminal setup, and development workflow.
---

# VS Code Development Environment

This skill guides VS Code setup and development workflow conventions for this repository, based on `readme.md` section 2 and `How-To-Do/vscode/`.

## Core Tooling

- **VS Code** — primary editor
- **Git** — version control via the built-in Source Control panel
- **Node.js** — JavaScript runtime

## Essential VS Code Extensions

| Extension | Purpose |
|---|---|
| GitLens | Enhanced Git history and blame |
| ESLint | JavaScript linting |
| Prettier - Code formatter | Consistent code formatting |
| Bracket Pair Colorizer | Visual bracket nesting |
| Path Intellisense | Autocompletion for file paths |
| VS Code Icons / Material Icon Theme | File icons |
| npm Intellisense | Package autocompletion |
| AWS Toolkit | AWS service integration and deployment |
| Angular Language Service | Angular intellisense (if studying Angular) |
| Tailwind CSS IntelliSense | Tailwind utility classes (if used) |

## VS Code Settings Recommendations

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenpaboks.vscode-html-liveserver",
  "editor.fontSize": 14,
  "editor.wordWrap": "on",
  "files.autoSave": "onFocusChange",
  "git.autofetch": true,
  "git.confirmSync": false,
  "eslint.validate": ["javascript", "javascriptreact"],
  "prettier.singleQuote": true,
  "prettier.tabWidth": 2
}
```

## Git Workflow in VS Code

1. **Clone a repository**
   - Click the Source Control icon in the Activity Bar.
   - Click **Clone Repository**.
   - Paste the GitHub URL.

2. **Make changes**
   - Edit files in the editor.
   - Save (Ctrl+S / Cmd+S).

3. **Stage and commit**
   - In the Source Control panel, click the `+` next to changed files or **Stage All Changes**.
   - Enter a commit message.
   - Click the checkmark (Commit).

4. **Push**
   - Click **Publish Branch** or **Sync Changes**.
   - Authenticate with your GitHub PAT when prompted.

## VS Code Terminal

- Open with `` Ctrl+` `` (backtick).
- Useful commands: `node --version`, `npm --version`, `git status`.
- Pin the terminal when running long-lived processes.

## Daily Development Workflow in VS Code

1. Open the project folder.
2. Open the integrated terminal.
3. Verify the environment: `node --version`, `git --version`.
4. Make changes, save, stage, commit, and push.
5. Use the **Source Control** panel to review diffs before committing.

## Related Documentation

- `.vscode/` settings (if present).
- `How-To-Do/vscode/Setup-VSCode/` — platform-specific setup guides.
- `How-To-Do/git-github/Hands-On/vscode/` — Git hands-on with VS Code.
- `.kilo/skills/git-workflow/` — Git command reference.
- `.kilo/skills/nodejs-setup/` — Node.js environment setup.

## Tips

- Use **Command Palette** (`Ctrl+Shift+P`) for quick access: Git commands, extensions, preferences.
- Enable **bracket pair colorization** and **minimap** for readability.
- Use **multi-cursor** (`Alt+Click`) to edit multiple lines simultaneously.
- Sync settings across machines with VS Code Settings Sync or dotfiles.
