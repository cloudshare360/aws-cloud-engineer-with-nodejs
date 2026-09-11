# Hands-On Node.js Tutorial (CLI)

This tutorial shows how to set up a Node.js project, install Express, create an API server, and test it using the command line.

## 1) Verify Node.js and npm are installed

Open a terminal and check your versions:

```bash
node --version
npm --version
```

You should see output similar to:

```bash
v18.x.x
9.x.x
```

If not, install Node.js from `How-To-Do/nodejs/Setup-NodeJS/`.

![Terminal with node and npm versions](./screenshots/cli-01-terminal-check.png)

---

## 2) Create a new project folder

Navigate to your desired location and create a folder:

```bash
mkdir my-node-app
cd my-node-app
```

Initialize a new Node.js project:

```bash
npm init -y
```

This creates a `package.json` file with default values.

![npm init output](./screenshots/cli-02-npm-init.png)

---

## 3) Install Express

Install Express as a dependency:

```bash
npm install express
```

This also creates a `package-lock.json` file and a `node_modules/` folder.

![npm install express](./screenshots/cli-03-install-express.png)

---

## 4) Create the server file

Create a file called `server.js`:

```bash
cat > server.js <<'EOF'
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
EOF
```

---

## 5) Run the server

Start the server with Node.js:

```bash
node server.js
```

You should see:

```bash
Server is running on http://localhost:5000
```

![Server running in terminal](./screenshots/cli-04-server-running.png)

Press `Ctrl+C` to stop the server.

---

## 6) Install nodemon for development

Nodemon automatically restarts the server when you make changes:

```bash
npm install nodemon --save-dev
```

Use it to run the server:

```bash
npx nodemon server.js
```

Or add a script to `package.json`:

```bash
npm pkg set scripts.start="node server.js"
npm pkg set scripts.dev="nodemon server.js"
```

Then run:

```bash
npm run dev
```

---

## 7) Add a POST endpoint

Update `server.js` to accept POST requests:

```bash
cat > server.js <<'EOF'
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

app.post('/api/echo', (req, res) => {
  res.json({ received: req.body });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
EOF
```

---

## 8) Test the API with curl

In a new terminal window (keep the server running), test the endpoints:

```bash
curl http://localhost:5000/
curl http://localhost:5000/api/health
curl -X POST http://localhost:5000/api/echo \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello from curl"}'
```

You should see the health status and your echoed data.

![curl test results](./screenshots/cli-05-curl-test.png)

---

## 9) Add routing

Organize routes by creating a `routes/` folder:

```bash
mkdir routes
cat > routes/users.js <<'EOF'
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
});

router.get('/:id', (req, res) => {
  res.json({ id: req.params.id, name: 'User ' + req.params.id });
});

module.exports = router;
EOF
```

Then update `server.js` to use the router:

```bash
cat > server.js <<'EOF'
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/users', require('./routes/users'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
EOF
```

---

## 10) Install a testing framework

Install Jest for testing:

```bash
npm install jest --save-dev
npm pkg set scripts.test="jest"
```

Create a simple test file:

```bash
cat > math.js <<'EOF'
function add(a, b) {
  return a + b;
}
module.exports = { add };
EOF

cat > math.test.js <<'EOF'
const { add } = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
EOF
```

Run the test:

```bash
npm test
```

You should see a passing test result.

![Jest test output](./screenshots/cli-06-test-pass.png)

---

## 11) Troubleshooting tips

### Port already in use

```bash
npx kill-port 5000
```

Or use a different port:

```bash
PORT=5001 node server.js
```

### Module not found

Make sure you are in the project folder and run:

```bash
npm install
```

### Syntax errors

Check the file for typos. Use `node --check server.js` to validate without running.

### nodemon not found

Install it first:

```bash
npm install nodemon --save-dev
```

---

## 12) Commit the project

```bash
git init
git add .
git commit -m "Node.js Express server with user routes"
git remote add origin https://github.com/YOUR-USERNAME/my-node-app.git
git push -u origin main
```

---

## Quick summary

```bash
mkdir my-node-app && cd my-node-app
npm init -y
npm install express
node server.js
```

Then build features incrementally, test with curl, and commit daily.

See `How-To-Do/nodejs/npm-cheatsheet.md` for more commands and `.kilo/skills/nodejs-setup/` for environment setup conventions.
