# Node.js and npm Cheat Sheet

This is a quick reference for the most commonly used Node.js and npm commands for beginners following the learning roadmap.

## 1. Verify the installation

```bash
node --version
npm --version
```

## 2. Initialize a project

```bash
npm init -y
```

This creates a default `package.json` file.

To create a customized `package.json`:

```bash
npm init
```

## 3. Install packages

```bash
npm install express
```

Install a package as a dependency:

```bash
npm install <package-name>
```

Install a package as a dev dependency:

```bash
npm install <package-name> --save-dev
```

or

```bash
npm install <package-name> -D
```

Install a package globally:

```bash
npm install <package-name> -g
```

## 4. Install dependencies from an existing project

```bash
npm install
```

or

```bash
npm ci
```

Use `npm ci` for reproducible builds and CI environments.

## 5. Run scripts

```bash
npm start
npm run build
npm test
```

Run a custom script defined in `package.json`:

```bash
npm run <script-name>
```

## 6. List installed packages

```bash
npm list
npm list --depth=0
npm list -g --depth=0
```

## 7. Update packages

```bash
npm outdated
npm update
npm update <package-name>
npm install -g npm@latest
```

## 8. Remove packages

```bash
npm uninstall <package-name>
npm uninstall <package-name> -g
```

## 9. Node.js command line REPL

```bash
node
```

Exit the REPL with `.exit` or `Ctrl+C` twice.

Run a script file:

```bash
node app.js
node server.js
```

## 10. npm information

```bash
npm search <package-name>
npm info <package-name>
npm help
npm help <command>
```

## 11. Package.json scripts section

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest",
    "build": "webpack"
  }
}
```

## 12. Essential beginner packages

| Package | Purpose |
|---|---|
| express | Web framework for APIs |
| nodemon | Auto-restarts server on file changes (dev) |
| dotenv | Loads environment variables from `.env` |
| jest | Testing framework |
| axios | HTTP client for API calls |
| mongoose | MongoDB object modeling |

## 13. Basic project structure

```
project/
├── node_modules/
├── package.json
├── package-lock.json
├── .env
├── server.js
├── app.js
├── routes/
├── controllers/
└── models/
```

## 14. Environment variables

Create a `.env` file:

```env
PORT=5000
DATABASE_URL=mongodb://localhost:27017/myapp
```

Load in code:

```bash
npm install dotenv
```

```js
require('dotenv').config();
const port = process.env.PORT;
```

## 15. Useful npm aliases

```bash
npm i <package>            # shortcut for npm install
npm i -D <package>         # shortcut for npm install --save-dev
npm i -g <package>         # global install
npm un <package>           # shortcut for npm uninstall
npm run lint -- --fix      # pass arguments to a script
```

## 16. Quick workflow summary

```bash
npm init -y
npm install express
npm install nodemon --save-dev
npm start
```

This cheat sheet is intended for daily Node.js and npm usage for beginners.
