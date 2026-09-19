# Getting Started With JavaScript

JavaScript is a versatile, high-level programming language that is widely supported across all major operating systems.

You can run JavaScript on your computer using the following two methods:

-   Run JavaScript online
-   Run JavaScript on your computer

In this tutorial, you will learn both methods.

## Run JavaScript Online

You can try our free [online JavaScript compiler](https://www.programiz.com/javascript/online-compiler/) to run JavaScript code directly in your browser without any need for installation.

![Online JavaScript Compiler](https://www.programiz.com/sites/tutorial2program/files/programiz-compiler-js-getting-started.png)

Online JavaScript Compiler

---

## Run JavaScript on Your Computer

If you prefer to run JavaScript locally on your computer, this guide will walk you through the steps needed for Windows, macOS, or Linux (Ubuntu).

### Windows

To install JavaScript on your Windows, just follow these steps:

1.  Install VS Code
2.  Download Node msi file
3.  Install Node
4.  Verify your installation

Here is a detailed explanation of each of the steps:

#### Step 1: Install VS Code

Go to the VS Code [Official website](https://code.visualstudio.com/download) and download the Windows installer. Once the download is complete, run the installer and follow the installation process.

Click **Finish** to complete the installation process

#### Step 2: Download the Node File

Go to the official [Node website](https://nodejs.org/en) and download the Node LTS version.

![JavaScript Download Page](https://www.programiz.com/sites/tutorial2program/files/javascript-downloading-page1.png)

#### Step 3: Run the Installer

Now, go to your **download** folder and run the msi file you just downloaded. Depending on your security settings, you might be prompted to allow access. Just click on Next.

Simply allow it and proceed.

Then you will come across the install part.

![Install JavaScript on Windows](https://www.programiz.com/sites/tutorial2program/files/javascript-install-windows1.png)

Simply click on install, Node will be successfully installed in your device.

![JavaScript Installation](https://www.programiz.com/sites/tutorial2program/files/javascript-install-javascript.png)

#### Step 4: Verify your installation

After the installation is complete, you can verify whether JavaScript is installed by using the following command in the command prompt.

```
node --version
```

![JavaScript Installation Verification for Windows](https://www.programiz.com/sites/tutorial2program/files/javascript-installation-verify1.png)

**Note:** The version number might differ from the one above, depending on your installed version.

Now, you are all set to run JavaScript programs on your device.

### macOS

To install JavaScript on your Mac OS, just follow these steps:

1.  Install VS Code
2.  Download Node.js Package
3.  Install Node.js
4.  Verify your installation

Here is a detailed explanation of each of the steps:

#### Step 1: Install VS Code

Go to the VS Code [Official website](https://code.visualstudio.com/download) and download the Mac installer. Once the download is complete, open the **.dmg** file and drag Visual Studio Code to your Applications folder.

Click **Finish** to complete the installation process

#### Step 2: Download the Node.js File

Go to the official [Node website](https://nodejs.org/en) and download the Node LTS version.

#### Step 3: Run the Installer

Open the downloaded **.pkg** file and follow the on-screen instructions to install Node.js. You'll be guided through the installation process; just follow the prompts and agree to the license agreement.

Simply allow it and proceed.

#### Step 4: Verify your installation

After the installation, you can verify whether JavaScript is installed by using the following command in the command prompt.

```
node --version
```

**Note:** The version number might differ from the one above, depending on your installed version.

Now, you are all set to run JavaScript programs on your device.

### Linux (Ubuntu)

Linux has various distributions, and the installation process differs slightly from each other. The following installation process is based on the Ubuntu distribution.

You need Node to use JavaScript in your device. Follow these steps to install **Node** on your device.

1.  Install VS Code
2.  Install Node
3.  Verify your installation

Here is a detailed explanation of each of the steps:

#### Step 1: Install VS Code

Open the **Terminal** and type

```
sudo apt update
```

This command updates your package lists to ensure you get the latest versions of your software.

Proceed to install VS Code with

```
sudo snap install code --classic
```

#### Step 2: Install Node

Go to [snapcraft](https://snapcraft.io/node) and click install.

It will give you the command to install Node.

Open your **Terminal** and paste the command to install Node on your device.

```
sudo snap install node –classic
```

Wait until the installation finishes to start using Node.

#### Step 3: Verify your Installation

Once the installation is complete, you can verify whether Node is installed by using the following command in the **Terminal**.

```
node –version
```

Now, you are all set to run JavaScript programs on your device.

## Run Your First JavaScript Program

First open VS Code, click on the File in the top menu and then select New File.

Then, save this file with a .js extension by clicking on **File** again, then **Save As**, and type your filename ending in .js. (Here, we are saving it as helloWorld.js).

Before you start coding, make sure the extension **Code Runner** is installed in VS Code. Open VS Code and click on Extensions on the left sidebar. Then, search for the **Code Runner** and click on install.

Now, write the following code into your helloWorld.js file:

```javascript
console.log("Hello World")
```

Then click on the **run** button on the top right side of your screen.

You should see Hello World! printed to the output.

Now that you have set everything up to run JavaScript programs on your computer, you'll be learning how the basic program works in JavaScript in the next tutorial.