# Install Node.js on macOS

This guide shows how to install Node.js and npm on macOS using the official installer or Homebrew.

## Prerequisites

- A Mac running macOS 10.14 or later
- Terminal access (Applications -> Utilities -> Terminal)
- An Apple ID (for downloading the installer if using the official website)

## Option 1: Install Node.js Using the Official Installer (.pkg)

### Step 1: Download the Node.js Installer

1. Open your browser and go to:
   https://nodejs.org/en/download/
2. Under the **macOS Installer (.pkg)** section, download the latest LTS version.

> Tip: LTS (Long Term Support) versions are recommended for most users because they are more stable and supported for a longer time.

### Step 2: Run the Installer

1. Open the downloaded `.pkg` file.
2. The setup wizard will start. Click `Continue` on the welcome screen.

![Node.js installer welcome](./screenshots/mac-01-node-download.png)

### Step 3: Review the License

1. Read the license agreement.
2. Click `Continue`, then click `Agree` to accept the terms.

### Step 4: Choose the Installation Location

1. Leave the default install location unless you have a specific reason to change it.
2. Click `Install`.

![Installation location](./screenshots/mac-02-install-location.png)

### Step 5: Complete the Installation

1. Wait for the installation to finish.
2. When complete, click `Close`.

### Step 6: Verify the Installation

Open a **new** Terminal window and run:

```bash
node --version
npm --version
```

Expected output example:

```bash
v18.x.x
9.x.x
```

> Important: You must open a new Terminal window for the changes to take effect.

## Option 2: Install Node.js Using Homebrew

Homebrew is a popular package manager for macOS that makes installing command-line tools easy.

### Step 1: Check if Homebrew is Installed

Run:

```bash
brew --version
```

If the command returns a version, Homebrew is installed. If not, install it from:
https://brew.sh

### Step 2: Update Homebrew

```bash
brew update
```

### Step 3: Install Node.js

```bash
brew install node
```

This command installs the latest Node.js LTS version.

### Step 4: Verify the Installation

```bash
node --version
npm --version
```

### Step 5: (Optional) Switch Node.js Versions

If you need to switch between Node.js versions, install nvm:

```bash
brew install nvm
```

Follow the setup instructions from nvm to use multiple Node versions.

## Post-Installation Setup

### Configure npm (optional)

Set the default directory for global packages if you encounter permission errors:

```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
```

Add to your shell profile (`.zshrc` or `.bash_profile`):

```bash
export PATH="$HOME/.npm-global/bin:$PATH"
```

Then reload:

```bash
source ~/.zshrc
```

### Check the Global Packages Directory

```bash
npm config get prefix
```

### Install Useful Global Packages

```bash
npm install -g nodemon
npm install -g eslint
```

- **nodemon** — automatically restarts your server when files change
- **eslint** — lints your JavaScript code for errors and style

## Troubleshooting

### "node: command not found"

1. Close and reopen Terminal.
2. Reinstall Node.js using Option 1 or 2.
3. Check that Terminal is using the correct shell (`zsh` or `bash`).

### Permission Errors When Installing Global Packages

On Apple Silicon (M1/M2) Macs, you may see permission errors. To fix:

```bash
sudo chown -R $(whoami) ~/.npm-global
```

Or use `npx` to run packages without installing them globally.

### Homebrew Installation Fails

Make sure your macOS is up to date. If Homebrew reports issues, run:

```bash
brew doctor
brew update
```

## Summary

- Use Option 1 (official installer) for the simplest setup.
- Use Option 2 (Homebrew) if you prefer managing tools with a package manager.
- Verify with `node --version` and `npm --version`.
- Consider installing `nodemon` globally for development.
