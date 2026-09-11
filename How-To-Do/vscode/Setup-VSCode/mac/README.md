# Install Visual Studio Code on macOS

This guide shows how to install VS Code on macOS and configure the command-line tools.

## Prerequisites

- A Mac running macOS 10.14 or later
- An Apple ID (for downloading from the App Store) or a web browser

## Option 1: Install VS Code Using the Official Installer (.dmg)

### Step 1: Download VS Code

1. Open your browser and go to:
   https://code.visualstudio.com/download
2. Under the **macOS** section, click **Download for Mac (Apple Silicon)** or **Intel Mac** depending on your machine.

![Download VS Code for macOS](./screenshots/mac-01-download-page.png)

> To check your Mac's chip: Click the Apple menu -> **About This Mac** -> **Chip**. If it says Apple M1/M2/M3, choose Apple Silicon. If it says No T2 chip / Intel, choose Intel.

### Step 2: Open the Installer

1. Open the downloaded `.dmg` file.
2. Drag the **Visual Studio Code** icon to the **Applications** folder.

![Drag VS Code to Applications](./screenshots/mac-02-drag-to-applications.png)

### Step 3: Launch VS Code

1. Open **Launchpad** or **Finder** -> **Applications**.
2. Double-click **Visual Studio Code**.
3. If you see a warning that VS Code is from an unidentified developer, go to **System Settings** -> **Privacy & Security** and click **Open Anyway**.

### Step 4: Install the Command-Line Tool

1. Click the gear icon in VS Code and choose **Command Palette** (`Cmd+Shift+P`).
2. Type `shell command` and select **Shell Command: Install 'code' command in PATH**.
3. Confirm if prompted.

![Installing the code command](./screenshots/mac-03-shell-command.png)

### Step 5: Verify the Installation

Open a new Terminal window and run:

```bash
code --version
```

You should see a version number, for example:

```bash
1.92.0
```

You can now open folders directly from the terminal:

```bash
code .
```

## Option 2: Install VS Code Using Homebrew

Homebrew is a command-line package manager for macOS.

### Step 1: Install Homebrew (if not already installed)

Run:

```bash
brew --version
```

If the command returns a version, Homebrew is installed. If not, install it from:
https://brew.sh

### Step 2: Install VS Code

```bash
brew install --cask visual-studio-code
```

### Step 3: Verify

```bash
code --version
```

## Post-Installation Setup

### Install Git

VS Code relies on Git for version control. Install Git:

```bash
brew install git
```

Verify:

```bash
git --version
```

### Sign in to VS Code (optional)

Sign in with a Microsoft or GitHub account to sync settings across devices:

1. Click the **Accounts** icon in the Activity Bar.
2. Sign in with your preferred account.

## Troubleshooting

### "code: command not found"

1. Open VS Code.
2. `Cmd+Shift+P` -> **Shell Command: Install 'code' command in PATH**.
3. Restart the terminal.

### VS Code won't launch

1. Go to **System Settings** -> **Privacy & Security**.
2. Under **Security**, click **Open Anyway** next to the VS Code message.
3. Try launching VS Code again.

### Homebrew installation fails

Make sure your macOS is up to date:

```bash
brew update
brew upgrade
```

### Git not recognized in VS Code terminal

Install the Xcode Command Line Tools:

```bash
xcode-select --install
```

## Summary

- Use Option 1 (official installer) for the simplest setup.
- Use Option 2 (Homebrew) if you prefer package management.
- Install the `code` shell command for terminal access.
- Sign in to sync settings across devices.
- Install Git for version control integration.
