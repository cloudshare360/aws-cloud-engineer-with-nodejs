# Install Node.js on Windows 11

This guide shows how to install Node.js and npm on Windows 11 using the official installer or Scoop.

## Prerequisites

- A PC running Windows 11
- Administrative privileges
- The option to download files from the internet

## Option 1: Install Node.js Using the Official Installer (.msi)

### Step 1: Download the Node.js Installer

1. Open your browser and go to:
   https://nodejs.org/en/download/
2. Under the **Windows Installer (.msi)** section, download the latest LTS version (64-bit).

> Tip: LTS versions are recommended for most users because they are stable and supported for a longer time.

### Step 2: Run the Installer

1. Open the downloaded `.msi` file.
2. If Windows SmartScreen appears, click `More info` and then `Run anyway`.
3. The setup wizard will start. Click `Next` on the welcome screen.

![Node.js installer welcome](./screenshots/win-01-node-download.png)

### Step 3: Accept the License

1. Read the license agreement.
2. Click `Next` to accept and continue.

### Step 4: Choose the Installation Location

1. Leave the default install folder unless you have a specific reason to change it.
2. Click `Next`.

### Step 5: Select Components

Use the default settings. Recommended defaults include:

- Node.js runtime
- npm package manager
- Add to PATH

![Select components](./screenshots/win-02-select-components.png)

### Step 6: Install

1. Click `Install`.
2. Wait for the installation to finish.
3. When complete, click `Finish`.

### Step 7: Verify the Installation

Open a **new** PowerShell or Command Prompt window and run:

```powershell
node --version
npm --version
```

Expected output example:

```powershell
v18.x.x
9.x.x
```

> Important: You must open a new terminal window for the changes to take effect.

## Option 2: Install Node.js Using Scoop

Scoop is a command-line installer for Windows that makes installing tools easy.

### Step 1: Install Scoop (if not already installed)

Open PowerShell as an administrator and run:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
iwr -useb https://get.scoop.sh | iex
```

### Step 2: Install Node.js

```powershell
scoop install nodejs
```

This installs the latest Node.js LTS version.

### Step 3: Verify the Installation

```powershell
node --version
npm --version
```

### Step 4: Update Node.js Later

```powershell
scoop update nodejs
```

To update all installed apps:

```powershell
scoop update *
```

### Step 5: (Optional) Manage Node Versions with nvm-windows

If you need to switch between Node.js versions, install **nvm-windows**:

1. Download from: https://github.com/coreybutler/nvm-windows/releases
2. Install `nvm-setup.zip`.
3. Use nvm to install and switch versions:

```powershell
nvm install lts
nvm use lts
nvm list
```

## Post-Installation Setup

### Verify the npm Global Directory

```powershell
npm config get prefix
```

The default is usually `C:\Users\<your-user>\AppData\Roaming\npm`.

### Install Useful Global Packages

Open a new terminal and run:

```powershell
npm install -g nodemon
npm install -g eslint
```

- **nodemon** — automatically restarts your server when files change
- **eslint** — lints your JavaScript code for errors and style

### Configure PowerShell Execution Policy (if needed)

If you get an error when running npm scripts, you may need to allow local scripts:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

## Troubleshooting

### "node is not recognized"

1. Close and reopen the terminal.
2. Reinstall Node.js using Option 1 or 2.
3. Check that `Add to PATH` was selected during installation.

### Permission Errors with Global Packages

On Windows, you may see EACCES errors. To fix:

```powershell
npm config set prefix "$env:APPDATA\npm"
```

Then add the prefix to your PATH if needed.

### Scoop Command Not Found

Open a new PowerShell window after installing Scoop. If the issue persists, check that Scoop's bin directory is in your PATH:

```powershell
$env:PATH += ";$env:USERPROFILE\scoop\shims"
```

## Summary

- Use Option 1 (official installer) for the simplest setup.
- Use Option 2 (Scoop) if you prefer a package manager and fast upgrades.
- Use nvm-windows if you need to switch between Node.js versions.
- Verify with `node --version` and `npm --version`.
- Install `nodemon` globally for development convenience.
