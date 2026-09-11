# Hands-On Node.js Tutorial (VS Code)

This tutorial shows how to develop a Node.js project using the VS Code editor, from project setup through running and testing the server.

## Prerequisites

- Node.js installed on your computer
- Git installed and configured
- VS Code installed

Verify in the VS Code terminal:

```bash
node --version
npm --version
git --version
```

![Terminal version check in VS Code](./screenshots/vscode-01-terminal-check.png)

---

## 1) Create a new project folder

1. Open VS Code.
2. Click **File** -> **New Window**.
3. Click **File** -> **Add Folder to Workspace**.
4. Create a new folder called `my-node-app` and select it.

Or open an existing folder:

1. Click **File** -> **Open Folder**.
2. Select your project folder.

![Opening a folder in VS Code](./screenshots/vscode-02-open-folder.png)

---

## 2) Initialize the Node.js project

1. Open the terminal inside VS Code (`` Ctrl+` `` or **Terminal** -> **New Terminal**).
2. Run:

```bash
npm init -y
```

This creates a `package.json` file. VS Code will automatically detect it and may prompt you to add recommended extensions.

![npm init in VS Code terminal](./screenshots/vscode-03-npm-init.png)

---

## 3) Install Express and nodemon

In the terminal, install dependencies:

```bash
npm install express
npm install nodemon --save-dev
```

After installation, VS Code may show a **Recommended Actions** popup suggesting `nodemon` as a dev dependency. Click **Quick Fix** to add it to `package.json` scripts.

![Installing packages in VS Code](./screenshots/vscode-04-install-packages.png)

---

## 4) Configure npm scripts

Open `package.json` and add the `start` and `dev` scripts:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest"
  }
}
```

You can edit this directly in VS Code's JSON editor with syntax highlighting.

![Editing package.json scripts](./screenshots/vscode-05-edit-scripts.png)

---

## 5) Create the server file

1. In the Explorer panel, click **New File**.
2. Name it `server.js`.
3. Add the following code:

```js
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

![Creating server.js](./screenshots/vscode-06-create-server.png)

---

## 6) Run the server with nodemon

1. Click the **Run and Debug** icon in the Activity Bar (or press `Ctrl+Shift+D`).
2. Or simply use the terminal:

```bash
npm run dev
```

You should see:

```bash
[nodemon] restarting due to changes...
[nodemon] starting `node server.js`
Server is running on http://localhost:5000
```

The **PROBLEMS** panel will show any syntax errors as you type.

![Running the server in VS Code](./screenshots/vscode-07-run-server.png)

---

## 7) Auto-format on save

Enable formatting in VS Code settings:

1. Press `Ctrl+,` to open Settings.
2. Search for **format on save**.
3. Check **Editor: Format On Save**.

Now your code will be automatically formatted each time you save.

### Recommended VS Code settings

Create a `.vscode/settings.json` file in your project:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenpaboks.vscode-html-liveserver",
  "editor.fontSize": 14,
  "editor.wordWrap": "on",
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

---

## 8) Debugging with breakpoints

1. Click in the gutter (next to line numbers) to add breakpoints.
2. Press `F5` to start debugging.
3. VS Code will launch the app and pause at breakpoints.
4. Inspect variables in the **Variables** panel.

![Setting a breakpoint](./screenshots/vscode-08-debugging.png)

---

## 9) Use the Source Control panel

1. Make a change to `server.js`.
2. Click the **Source Control** icon in the Activity Bar.
3. Review the diff.
4. Enter a commit message: `Set up Express server`
5. Click the checkmark to commit.

![Committing in VS Code Source Control](./screenshots/vscode-09-commit.png)

---

## 10) Install useful VS Code extensions

Recommended extensions for Node.js development:

| Extension | Purpose |
|---|---|
| **ESLint** | Linting for JavaScript |
| **Prettier - Code formatter** | Consistent code formatting |
| **Node.js Extension Pack** | Debugging, snippets, and intellisense |
| **JavaScript (ES6) code snippets** | Useful code snippets |
| **GitLens** | Enhanced Git history |
| **Auto Rename Tag** | Auto-rename paired HTML tags |
| **Bracket Pair Colorizer** | Color-coded brackets |
| **Path Intellisense** | File path autocompletion |

Install extensions via the **Extensions** tab (`Ctrl+Shift+X`).

---

## 11) Test the API

1. Start the server: `npm run dev`
2. Open a web browser and visit: http://localhost:5000/api/health
3. You should see: `{"status":"ok"}`

Or test in the integrated terminal:

```bash
curl http://localhost:5000/
```

![Testing the API in browser](./screenshots/vscode-10-test-api.png)

---

## 12) Troubleshooting tips

### "The code execution was stopped" when debugging

Make sure you have a `launch.json` file. Create one via **Run and Debug** -> **create a launch.json file** -> **Node.js**.

### Extensions not working

Reload the VS Code window: `Ctrl+Shift+P` -> **Developer: Reload Window**.

### Terminal showing permission denied

Use Git Bash as the default terminal:
1. `Ctrl+Shift+P` -> **Terminal: Select Default Profile**
2. Choose **Git Bash**.

---

## 13) Quick summary

1. Create a folder and `npm init -y`
2. Install Express: `npm install express`
3. Create `server.js` with an Express app
4. Run with `npm run dev`
5. Commit daily in Source Control panel

See `How-To-Do/nodejs/npm-cheatsheet.md` and `.kilo/skills/vscode-dev/` for more VS Code tips.
