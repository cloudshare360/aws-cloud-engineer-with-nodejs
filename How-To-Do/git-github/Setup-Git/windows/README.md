# Install Git on Windows 11

This guide shows two ways to install Git on Windows 11:

1. Standard installation from the official Git for Windows website
2. Alternative installation using Scoop

## Option 1: Standard Installation (Git for Windows)

### Step 1: Download Git for Windows

1. Open your browser and go to:
   https://git-scm.com/download/win
2. The page will automatically suggest the correct Windows installer.
3. Download the latest 64-bit installer.

Example download screen:

![Git download page](./screenshots/01-git-download-page.png)

### Step 2: Run the Installer

1. Open the downloaded file, such as `Git-2.x.x-64-bit.exe`.
2. If prompted by Windows SmartScreen, click `More info` and then `Run anyway`.
3. The setup wizard will start.

![Installer welcome screen](./screenshots/02-installer-welcome.png)

### Step 3: Accept the License

1. Read the license agreement.
2. Click `Next` to continue.

### Step 4: Choose the Installation Location

1. Leave the default install folder unless you have a specific reason to change it.
2. Click `Next`.

### Step 5: Select Components

Use the default settings unless you know you need something different.

Recommended defaults include:
- Git Bash Here
- Git GUI Here
- Git from the command line
- Desktop shortcuts

![Component selection](./screenshots/03-select-components.png)

### Step 6: Choose the Start Menu Folder

1. Keep the default folder name.
2. Click `Next`.

### Step 7: Choose Git’s PATH configuration

For most users, choose:

- Git from the command line and also from 3rd-party software

This makes Git available in:
- PowerShell
- Command Prompt
- VS Code terminal
- other developer tools

![PATH configuration](./screenshots/04-path-settings.png)

### Step 8: Configure Line Endings and Terminal Emulator

Recommended default values are usually fine:
- Checkout as-is, commit Unix-style line endings
- Use Git Bash only

If you are not sure, keep the defaults and click `Next`.

### Step 9: Configure Extra Options

Recommended defaults usually include:
- Enable file system caching
- Enable Git Credential Manager
- Enable symbolic links

Leave these as default and continue.

### Step 10: Install

1. Click `Install`.
2. Wait for the installation to finish.
3. When complete, click `Finish`.

![Installation complete](./screenshots/05-finished.png)

### Step 11: Verify Installation

Open a new PowerShell or Command Prompt window and run:

```powershell
git --version
```

Expected output example:

```powershell
git version 2.x.x.windows.x
```

If this works, Git is installed correctly.

---

## Option 2: Install Git Using Scoop

Scoop is a lightweight package manager for Windows. It is useful if you prefer the CLI and want quick future updates.

### Step 1: Install Scoop

Open PowerShell as an administrator and run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

If the script is blocked, run this first:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Then run the Scoop install command again.

### Step 2: Install Git

After Scoop installs successfully, run:

```powershell
scoop install git
```

This downloads and installs Git from the Scoop package repository.

### Step 3: Verify the Installation

Run:

```powershell
git --version
```

If the command prints a Git version, the installation is successful.

### Step 4: Update Git Later

To update Git later with Scoop:

```powershell
scoop update git
```

You can also update all installed apps:

```powershell
scoop update *
```

---

## Useful Git Configuration After Installation

Set your user name and email:

```powershell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Check the configuration:

```powershell
git config --global --list
```

---

## Common Troubleshooting

### Git not recognized in VS Code or PowerShell

1. Close and reopen the terminal.
2. Make sure Git is installed.
3. Check PATH contains the Git installation folder.

Example location:

```powershell
C:\Program Files\Git\cmd
```

### Scoop command not found

Open a new PowerShell window after Scoop installation.

If needed, restart your terminal or system.

---

## Summary

Use the standard installer if you want the easiest setup on Windows 11.
Use Scoop if you prefer a package manager and quick upgrades.

Both methods install Git successfully and let you use it from the terminal, Git Bash, or VS Code.
