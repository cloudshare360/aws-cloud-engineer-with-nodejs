# Install Visual Studio Code on Windows 11

This guide shows how to install VS Code on Windows 11 and configure the command-line tools.

## Prerequisites

- A PC running Windows 10 or 11
- Administrative privileges (for installing and PATH setup)
- An internet connection

## Option 1: Install VS Code Using the Official Installer (.exe)

### Step 1: Download VS Code

1. Open your browser and go to:
   https://code.visualstudio.com/download
2. Under the **Windows** section, click **Download for Windows**.

![Download VS Code for Windows](./screenshots/win-01-download-page.png)

### Step 2: Run the Installer

1. Open the downloaded `.exe` file.
2. If Windows SmartScreen appears, click `More info`, then `Run anyway`.
3. The setup wizard will start.

![Installer welcome screen](./screenshots/win-02-installer-welcome.png)

### Step 3: Accept the License Agreement

1. Read the license agreement.
2. Click `I accept the terms` and then `Next`.

### Step 4: Select Installation Options

Select the following options (recommended for this roadmap):

- **Add to PATH** — allows opening VS Code from the terminal
- **Register Code as an editor** — opens code files in VS Code by default
- **Add to context menu** — right-click any folder to open it in VS Code
- **Open with Code** — quickly open files with VS Code
- **Open with Code** — wait, remove duplicate, keep all four

![Select installation options](./screenshots/win-03-select-components.png)

### Step 5: Choose the Install Location

1. Leave the default install folder unless you have a specific reason to change it.
2. Click `Next`.

### Step 6: Install

1. Click `Install`.
2. Wait for the installation to finish.
3. When complete, click `Finish`.

![Installation complete](./screenshots/win-04-installation-complete.png)

### Step 7: Launch VS Code

1. VS Code will open automatically if you checked **Launch VS Code**.
2. Or open it from the Start menu.

---

## Option 2: Install VS Code Using Scoop

Scoop is a command-line installer for Windows.

### Step 1: Install Scoop (if not already installed)

Open PowerShell as an administrator and run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
iwr -useb https://get.scoop.sh | iex
```

### Step 2: Install VS Code

```powershell
scoop bucket add extras
scoop install vscode
```

### Step 3: Verify

```powershell
code --version
```

---

## Option 3: Install VS Code Using winget

`winget` is a package manager built into Windows 10/11.

### Step 1: Install VS Code

```powershell
winget install Microsoft.VisualStudioCode
```

### Step 2: Select Options

When prompted, select all the recommended options including **Add to PATH**.

### Step 3: Verify

```powershell
code --version
```

---

## Post-Installation Setup

### Verify the Command-Line Tool

Open a **new** PowerShell or Command Prompt window and run:

```powershell
code --version
```

You should see a version number, for example:

```powershell
1.92.0
```

If the command is not recognized, re-run the installer and ensure **Add to PATH** was selected.

### Open Folders from the Terminal

From any project folder:

```powershell
code .
```

This opens the folder in VS Code.

### Install Git (for version control)

1. Download Git from: https://git-scm.com/download/win
2. Run the installer with default settings.
3. Verify in VS Code terminal:

```powershell
git --version
```

### Sign in to VS Code (optional)

Sign in with a Microsoft or GitHub account to sync settings:

1. Click the **Accounts** icon in the Activity Bar.
2. Sign in with your preferred account.

---

## Troubleshooting

### "code is not recognized" as an internal or external command

1. Re-run the VS Code installer.
2. Ensure **Add to PATH** is selected during installation.
3. Restart the terminal.

### VS Code won't launch or crashes on startup

1. Update Windows to the latest version.
2. Update VS Code: **Help** -> **Check for Updates**.
3. Disable extensions by starting in **Safe Mode** (`code --disable-extensions`).

### Git not recognized in VS Code terminal

Install Git from https://git-scm.com/download/win and ensure it is added to PATH during installation.

### Extensions fail to install

1. Check your internet connection.
2. Try changing the download mirror in VS Code settings.
3. Restart VS Code.

---

## Summary

- Use Option 1 (official installer) for the most control over options and the PATH setup.
- Use Option 2 (Scoop) or Option 3 (winget) if you prefer a package manager.
- Always select **Add to PATH** during installation.
- Install Git for version control integration.
- Sign in to sync settings across devices.
