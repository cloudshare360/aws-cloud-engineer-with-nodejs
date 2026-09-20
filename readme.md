# AWS Cloud Engineer Full-Stack Learning Roadmap

> **New here? Start here and follow this file top to bottom — no human help needed.**
>
> 1. **Read this file fully once** (~10 min) to understand where everything lives.
> 2. **Do the tasks in order:** start at [todo-task/task-01](todo-task/task-01.md) and finish each task's ✅ checklist before opening the next file. Each file links to its successor, so you never have to guess what comes next.
> 3. **Study JavaScript daily** in [programiz-learning/](programiz-learning/) following [task-08](todo-task/task-08.md) (the 11-week schedule) and [task-10](todo-task/task-10.md) (the daily routine + Google Sheet logging).
> 4. **Use the map below** whenever you're lost: it shows every section of this repo and exactly which file to open next.

## Start Here — Repo Map (Which Folder, When)

| Order | Where | What you do there | Entry file |
|---|---|---|---|
| 1 | [todo-task/](todo-task/) | Hands-on setup, one task per file, in numbered order (01 → 11) | [task-01](todo-task/task-01.md) |
| 2 | [programiz-learning/](programiz-learning/) | Offline JavaScript curriculum: 59 topics, 9 sections, `index.md` notes + images | [README](programiz-learning/README.md) |
| 3 | Google Sheet (you create it) | Daily progress log: Actual dates + Remarks per topic (Task 10) | Sheet link in [programiz-learning/README](programiz-learning/README.md) |
| 4 | Rest of this file (roadmap) | What comes after JS: Node.js → React/Angular → full-stack → AWS | Keep reading below |

**Status convention:** each `todo-task/task-NN.md` ends with a ✅ completion checklist *and* a link to the next file. If the next link says `task-NN+1`, you are on track. If it says "continue with the roadmap", the setup series is done.

This roadmap is organized for an associate who wants to become an AWS Cloud Engineer with strong full-stack development skills using Node.js, React.js, Angular, and cloud deployment practices.

The goal is to build end-to-end product skills:
- JavaScript fundamentals
- backend development with Node.js and Express
- frontend development with React.js / Next.js and Angular
- version control and development workflow with Git and GitHub
- AWS cloud services and deployment patterns
- project discipline using Kanban and Scrum

---

## 1. Career Outcome

By the end of this roadmap, the learner should be able to:
- build and deploy REST APIs with Node.js
- build frontend applications with React.js / Next.js and Angular
- understand full-stack application architecture
- deploy applications to AWS
- use GitHub for code management and collaboration
- track work using Kanban and Scrum practices

---

## 2. Day 1: Setup and Development Environment

From day one, the learner must install and understand the tools used in real software engineering work.

### Required tools
- Node.js
- Git
- VS Code
- GitHub account
- GitHub repository for daily progress
- GitHub Codespaces awareness
- Google Sheet for daily progress tracking

### Setup objectives
- Install JavaScript runtime and package manager
- Configure Git locally and connect to GitHub
- Learn version control basics: commit, branch, merge, pull, push
- Learn how cloud-based coding environments work in Codespaces

### Git learning resource
- [Git Tutorial for Beginners: Learn Git in 1 Hour](https://www.youtube.com/watch?v=2ReR1YJrNOM)

### Daily workflow discipline
- Commit progress to Git every day
- Create a learning repository and keep code organized
- Track daily progress in a Google Sheet
- Maintain a Kanban board for tasks and learning goals
- Review blockers and update progress every day

### Step-by-step environment guide
- Do these **in numbered order**. Each task file ends with a ✅ checklist and a link to the next task, so you always know where to go:
  1. [task-01](todo-task/task-01.md) — package manager (Scoop / Homebrew) → ✅ then open task-02
  2. [task-02](todo-task/task-02.md) — Python via Scoop → ✅ then open task-03
  3. [task-03](todo-task/task-03.md) — Node.js via Scoop → ✅ then open task-04
  4. [task-04](todo-task/task-04.md) — Oracle JDK 21 via Scoop → ✅ then open task-05
  5. [task-05](todo-task/task-05.md) — Git + Git Bash tools on PATH → ✅ then open task-06
  6. [task-06](todo-task/task-06.md) — create your first Git repo → ✅ then open task-07
  7. [task-07](todo-task/task-07.md) — personal-documents repo for employer sharing → ✅ then open task-08
  8. [task-08](todo-task/task-08.md) — JavaScript learning-plan schedule → ✅ then open task-09
  9. [task-09](todo-task/task-09.md) — Git concepts (git-scm.com/learn) → ✅ then open task-10
  10. [task-10](todo-task/task-10.md) — daily execution with the Google Sheet → ✅ daily routine from here on
  11. [task-11](todo-task/task-11.md) — Kilo CLI + VS Code extension, free vs paid tiers → ✅ then continue with the roadmap below
- **Exactly one `.gitkeep` placeholder** lives in `todo-task/` so Git tracks the folder; ignore it — the `task-NN.md` files are the real content.

---

## 3. Core Programming Foundation: JavaScript

JavaScript is the foundation for frontend, backend, and serverless development.

### Study content in this repo
- Offline notes: [programiz-learning/](programiz-learning/) — 59 topics across 9 sections, each with `index.md` + `images/` (see its [README](programiz-learning/README.md) for the full map). Study topics **in Srno order** (`01-01` → `09-10`), never at random.
- Progress tracker: [Programiz-JavaScript-Tracking-Sheet](programiz-learning/Programiz-JavaScript-Tracking-Sheet.md) (59 rows, Estimated Hours, References)
- Execution plan: [todo-task/task-08](todo-task/task-08.md) — 11-week schedule from the tracking sheet. Planned dates go here.
- Daily routine: [todo-task/task-10](todo-task/task-10.md) — study topics in order, log Actual dates in the Google Sheet
- AI assistance: [todo-task/task-11](todo-task/task-11.md) — Kilo CLI + VS Code extension for agentic help during study

### Google Sheet ↔ GitHub navigation
- One rule: **content lives in the repo, progress lives in the Sheet.** The repo's `index.md` files never record progress; the Sheet's Actual-date cells never hold study material.
- The repo links to the Sheet here: 📊 **Progress Tracker (Google Sheet):** `PASTE_SHEET_URL_HERE` — replace this placeholder with your Sheet URL the day you create it (Task 10, Part A).
- The Sheet links back to the repo: add a `NAVIGATION` row with `=HYPERLINK("<this-repo-url>/tree/main/programiz-learning","← Open programiz-learning on GitHub")`.
- Once both links exist, a study day is: Sheet row (today's Srno) → References URL or local `programiz-learning/javascript/<section>/<topic>/index.md` → study → Sheet row (fill Actual dates). See [task-10](todo-task/task-10.md) for the full loop.

### JavaScript core video course
- [(50) Namaste JavaScript 🙏 Course - JS Video Tutorials by Akshay Saini - YouTube](https://www.youtube.com/watch?v=pN6jk0uUrD8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP)

### JavaScript theory resources

#### JS Introduction
- [Getting Started With JavaScript](https://www.programiz.com/javascript/get-started)
- [JavaScript Variables and Constants](https://www.programiz.com/javascript/variables-constants)
- [JavaScript console.log()](https://www.programiz.com/javascript/console)
- [JavaScript Data Types](https://www.programiz.com/javascript/data-types)
- [JavaScript Operators](https://www.programiz.com/javascript/operators)
- [JavaScript Comments](https://www.programiz.com/javascript/comments)
- [JavaScript Type Conversion](https://www.programiz.com/javascript/type-conversion)

#### JS Control Flow
- [Comparison and Logical Operators](https://www.programiz.com/javascript/comparison-logical)
- [JavaScript if...else](https://www.programiz.com/javascript/if-else)
- [JavaScript for Loop](https://www.programiz.com/javascript/for-loop)
- [JavaScript while Loop](https://www.programiz.com/javascript/while-loop)
- [JavaScript break Statement](https://www.programiz.com/javascript/break-statement)
- [JavaScript continue Statement](https://www.programiz.com/javascript/continue-statement)
- [JavaScript switch Statement](https://www.programiz.com/javascript/switch-statement)

#### JS Functions
- [JavaScript Functions](https://www.programiz.com/javascript/function)
- [JavaScript Variable Scope](https://www.programiz.com/javascript/variable-scope)
- [JavaScript Hoisting](https://www.programiz.com/javascript/hoisting)
- [JavaScript Recursion](https://www.programiz.com/javascript/recursion)

#### JS Objects
- [JavaScript Objects](https://www.programiz.com/javascript/object)
- [JavaScript Methods](https://www.programiz.com/javascript/methods)
- [JavaScript Constructor Function](https://www.programiz.com/javascript/constructor-function)
- [JavaScript Getter and Setter](https://www.programiz.com/javascript/getter-setter)
- [JavaScript Prototype](https://www.programiz.com/javascript/prototype)

#### JS Types
- [JavaScript Arrays](https://www.programiz.com/javascript/array)
- [JavaScript Multidimensional Array](https://www.programiz.com/javascript/multidimensional-array)
- [JavaScript Strings](https://www.programiz.com/javascript/string)
- [JavaScript for...in Loop](https://www.programiz.com/javascript/for-in)
- [JavaScript Numbers](https://www.programiz.com/javascript/numbers)
- [JavaScript Symbol](https://www.programiz.com/javascript/symbol)

#### Exceptions and Modules
- [JavaScript try...catch...finally](https://www.programiz.com/javascript/try-catch-finally)
- [JavaScript throw Statement](https://www.programiz.com/javascript/throw)
- [JavaScript Modules](https://www.programiz.com/javascript/modules)

#### JS ES6
- [JavaScript ES6](https://www.programiz.com/javascript/ES6)
- [JavaScript Arrow Functions](https://www.programiz.com/javascript/arrow-function)
- [JavaScript Default Parameters](https://www.programiz.com/javascript/default-parameters)
- [JavaScript Template Literals](https://www.programiz.com/javascript/template-literal)
- [JavaScript Spread Operator](https://www.programiz.com/javascript/spread-operator)
- [JavaScript Map and WeakMap](https://www.programiz.com/javascript/map-weakmap)
- [JavaScript Set and WeakSet](https://www.programiz.com/javascript/set-weakset)
- [JavaScript Destructuring Assignment](https://www.programiz.com/javascript/destructuring-assignment)
- [JavaScript Classes](https://www.programiz.com/javascript/classes)
- [JavaScript Inheritance](https://www.programiz.com/javascript/inheritance)
- [JavaScript for...of Loop](https://www.programiz.com/javascript/for-of)
- [JavaScript Proxies](https://www.programiz.com/javascript/proxies)

#### JavaScript Asynchronous
- [JavaScript setTimeout()](https://www.programiz.com/javascript/setTimeout)
- [JavaScript setInterval()](https://www.programiz.com/javascript/setInterval)
- [JavaScript Callback](https://www.programiz.com/javascript/callback)
- [JavaScript Async/Await](https://www.programiz.com/javascript/async-await)
- [JavaScript Promise](https://www.programiz.com/javascript/promise)

#### Miscellaneous
- [JavaScript and JSON](https://www.programiz.com/javascript/json)
- [JavaScript Date and Time](https://www.programiz.com/javascript/date-time)
- [JavaScript Closures](https://www.programiz.com/javascript/closure)
- [JavaScript this](https://www.programiz.com/javascript/this)
- [JavaScript "use strict"](https://www.programiz.com/javascript/use-strict)
- [JavaScript Iterators and Iterables](https://www.programiz.com/javascript/iterators-iterables)
- [JavaScript Generators](https://www.programiz.com/javascript/generators)
- [JavaScript Regex](https://www.programiz.com/javascript/regex)
- [Debugging JavaScript in Browser](https://www.programiz.com/javascript/debugging)
- [Uses of JavaScript](https://www.programiz.com/javascript/use)

### Parallel theory videos
- [2026 CX 50 H Learning September Offer Video 16x9 15s](https://www.youtube.com/watch?v=W6NZfCO5SIk&t=2s)
- [Object-oriented Programming in JavaScript: Made Super Simple | Mosh](https://www.youtube.com/watch?v=PFmuCDHHpwk)
- [(50) ES6 Tutorial: Learn Modern JavaScript in 1 Hour - YouTube](https://www.youtube.com/watch?v=NCwa_xi0Uuc)

---

## 4. Backend Development with Node.js

Node.js is the foundation for backend services, APIs, and cloud-ready application logic.

> **Environment ready?** If you did [task-03](todo-task/task-03.md), `node --version` already works. If not, complete task-03 first — every command below assumes it.

### Node.js learning resources
- [Node.js Tutorial for Beginners: Learn Node in 1 Hour](https://www.youtube.com/watch?v=TlB_eWDSMt4&t=2s)
- [(50) Node js Tutorials - YouTube](https://www.youtube.com/playlist?list=PLTjRvDozrdlydy3uUBWZlLUTNpJSGGCEm)

### Backend topics to master
- Node.js basics and event loop
- npm and package management
- modules and file system
- APIs with Express.js
- routing and middleware
- request and response handling
- validation and error handling
- authentication and authorization basics
- REST architecture
- database integration
- environment variables
- deployment and process management

### Express.js focus areas
- routing
- middleware
- controllers
- request validation
- CRUD operations
- JWT or session-based auth basics
- API design for frontend integration

---

## 5. Frontend Development: React.js / Next.js and Angular

The learner should split frontend study between modern React-based development and Angular-based application patterns.

> **Same discipline as JavaScript:** for each framework topic, study → commit ([task-06](todo-task/task-06.md) loop) → log in your tracker ([task-10](todo-task/task-10.md) routine).

### React.js / Next.js path
- React fundamentals
- components and props
- state and hooks
- forms and validation
- routing
- fetching API data
- component design patterns
- Next.js basics and app structure
- routing and dynamic pages
- SSR and SSG concepts
- API routes and integration
- deployment-focused frontend architecture

### Angular path
- Angular fundamentals
- components and modules
- templates and data binding
- directives and pipes
- services and dependency injection
- routing
- forms
- HTTP client
- app structure and project architecture

### Frontend goals
- Build frontend applications that consume Node.js REST APIs
- Understand client-side state management and component principles
- Compare React and Angular architecture patterns
- Deploy frontend apps in AWS-friendly environments

---

## 6. Full-Stack Integration

Once the basics are complete, the learner should build complete application flows end-to-end.

> **Workflow:** every milestone below gets committed and logged like a JS topic — [task-06](todo-task/task-06.md) for Git, [task-10](todo-task/task-10.md) for progress.

### Integration milestones
- API built with Node.js and Express
- frontend built with React.js or Angular
- frontend connected to backend API
- database connected to the backend
- deployment setup for both frontend and backend

### Example full-stack workflow
- create a backend API for CRUD operations
- create a frontend interface for user interaction
- handle API calls and UI state
- add basic authentication
- deploy to AWS

---

## 7. AWS Cloud Engineer Track

This section is critical for an AWS Cloud Engineer learning path.

### Core AWS services to learn
- EC2
- S3
- IAM
- VPC
- Route 53
- CloudFront
- RDS
- Lambda
- API Gateway
- CloudWatch
- Elastic Beanstalk
- ECS / EKS basics
- Auto Scaling
- Secrets Manager

### Cloud learning goals
- Understand how to host frontend applications on AWS
- Deploy backend APIs on AWS infrastructure
- Configure identity, security, and networking
- Connect applications to managed databases
- Understand monitoring, logging, and scaling
- Learn serverless and container concepts

### AWS architecture mindset
- frontend and backend separation
- API gateway as entry point
- managed storage and databases
- security and least-privilege access
- observability and maintenance

---

## 8. Process, Collaboration, and Professional Practice

Because the process matters, the learner should adopt software engineering habits from the start.

### Agile concepts to learn
- Kanban basics
- Scrum basics
- backlog management
- sprint planning
- daily standups
- work-in-progress limits
- task board flow

### Workflow expectations
- maintain a GitHub repository for learning work
- commit changes daily — first learned in [task-06](todo-task/task-06.md)
- use Google Sheets to track progress — see [task-10](todo-task/task-10.md)
- update a Kanban board with current tasks and status
- track learning blocks, practice work, and blockers

---

## 9. Recommended Learning Progression

Follow this global order. Sections 1–2 (environment + JavaScript) are fully guided by `todo-task/` and `programiz-learning/` above; later sections are roadmap material you execute the same way (study → commit → log):

1. Setup Git, Node.js, VS Code, GitHub → [todo-task/task-01](todo-task/task-01.md) through [task-06](todo-task/task-06.md)
2. Complete JavaScript fundamentals → [programiz-learning/](programiz-learning/) in Srno order, scheduled by [task-08](todo-task/task-08.md)
3. Learn ES6 and asynchronous JavaScript → sections `07-JS-ES6` and `08-JavaScript-Asynchronous` inside [programiz-learning/](programiz-learning/)
4. Study OOP and application design patterns → sections `04-JS-Objects` then `07-JS-ES6` classes material
5. Learn Node.js and Express.js → [§4 below](#4-backend-development-with-nodejs), environment already from [task-03](todo-task/task-03.md)
6. Build REST APIs and CRUD projects → [§6 below](#6-full-stack-integration)
7. Learn React.js / Next.js basics → [§5 below](#5-frontend-development-reactjs--nextjs-and-angular)
8. Learn Angular basics → [§5 below](#5-frontend-development-reactjs--nextjs-and-angular)
9. Build full-stack applications end-to-end → [§6 below](#6-full-stack-integration)
10. Learn AWS core services and deployment patterns → [§7 below](#7-aws-cloud-engineer-track)
11. Deploy applications on AWS → [§7 below](#7-aws-cloud-engineer-track)
12. Track progress weekly using Git, GitHub, and Kanban → the [task-10](todo-task/task-10.md) routine, applied to every section above

---

## 10. Daily Practice Requirement

Apply this from Day 1 ([task-06](todo-task/task-06.md) teaches the Git half, [task-10](todo-task/task-10.md) teaches the Sheet half):

The learner should maintain the following every day:
- Git repository for the learning work ([task-06](todo-task/task-06.md))
- daily commits
- Google Sheet progress tracker ([task-10](todo-task/task-10.md))
- Kanban-style task board
- notes on concepts learned and completed tasks
- at least one small practice or coding task per day

This builds both technical skill and the discipline expected in a real engineering workflow.

---

## 11. Complete Resource List

### Git and Development Environment
- [Git Tutorial for Beginners: Learn Git in 1 Hour](https://www.youtube.com/watch?v=2ReR1YJrNOM)

### JavaScript Core Learning
- [(50) Namaste JavaScript 🙏 Course - JS Video Tutorials by Akshay Saini - YouTube](https://www.youtube.com/watch?v=pN6jk0uUrD8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP)

### Programiz JavaScript Topics
- [Getting Started With JavaScript](https://www.programiz.com/javascript/get-started)
- [JavaScript Variables and Constants](https://www.programiz.com/javascript/variables-constants)
- [JavaScript console.log()](https://www.programiz.com/javascript/console)
- [JavaScript Data Types](https://www.programiz.com/javascript/data-types)
- [JavaScript Operators](https://www.programiz.com/javascript/operators)
- [JavaScript Comments](https://www.programiz.com/javascript/comments)
- [JavaScript Type Conversion](https://www.programiz.com/javascript/type-conversion)
- [Comparison and Logical Operators](https://www.programiz.com/javascript/comparison-logical)
- [JavaScript if...else](https://www.programiz.com/javascript/if-else)
- [JavaScript for Loop](https://www.programiz.com/javascript/for-loop)
- [JavaScript while Loop](https://www.programiz.com/javascript/while-loop)
- [JavaScript break Statement](https://www.programiz.com/javascript/break-statement)
- [JavaScript continue Statement](https://www.programiz.com/javascript/continue-statement)
- [JavaScript switch Statement](https://www.programiz.com/javascript/switch-statement)
- [JavaScript Functions](https://www.programiz.com/javascript/function)
- [JavaScript Variable Scope](https://www.programiz.com/javascript/variable-scope)
- [JavaScript Hoisting](https://www.programiz.com/javascript/hoisting)
- [JavaScript Recursion](https://www.programiz.com/javascript/recursion)
- [JavaScript Objects](https://www.programiz.com/javascript/object)
- [JavaScript Methods](https://www.programiz.com/javascript/methods)
- [JavaScript Constructor Function](https://www.programiz.com/javascript/constructor-function)
- [JavaScript Getter and Setter](https://www.programiz.com/javascript/getter-setter)
- [JavaScript Prototype](https://www.programiz.com/javascript/prototype)
- [JavaScript Arrays](https://www.programiz.com/javascript/array)
- [JavaScript Multidimensional Array](https://www.programiz.com/javascript/multidimensional-array)
- [JavaScript Strings](https://www.programiz.com/javascript/string)
- [JavaScript for...in Loop](https://www.programiz.com/javascript/for-in)
- [JavaScript Numbers](https://www.programiz.com/javascript/numbers)
- [JavaScript Symbol](https://www.programiz.com/javascript/symbol)
- [JavaScript try...catch...finally](https://www.programiz.com/javascript/try-catch-finally)
- [JavaScript throw Statement](https://www.programiz.com/javascript/throw)
- [JavaScript Modules](https://www.programiz.com/javascript/modules)
- [JavaScript ES6](https://www.programiz.com/javascript/ES6)
- [JavaScript Arrow Functions](https://www.programiz.com/javascript/arrow-function)
- [JavaScript Default Parameters](https://www.programiz.com/javascript/default-parameters)
- [JavaScript Template Literals](https://www.programiz.com/javascript/template-literal)
- [JavaScript Spread Operator](https://www.programiz.com/javascript/spread-operator)
- [JavaScript Map and WeakMap](https://www.programiz.com/javascript/map-weakmap)
- [JavaScript Set and WeakSet](https://www.programiz.com/javascript/set-weakset)
- [JavaScript Destructuring Assignment](https://www.programiz.com/javascript/destructuring-assignment)
- [JavaScript Classes](https://www.programiz.com/javascript/classes)
- [JavaScript Inheritance](https://www.programiz.com/javascript/inheritance)
- [JavaScript for...of Loop](https://www.programiz.com/javascript/for-of)
- [JavaScript Proxies](https://www.programiz.com/javascript/proxies)
- [JavaScript setTimeout()](https://www.programiz.com/javascript/setTimeout)
- [JavaScript setInterval()](https://www.programiz.com/javascript/setInterval)
- [JavaScript Callback](https://www.programiz.com/javascript/callback)
- [JavaScript Async/Await](https://www.programiz.com/javascript/async-await)
- [JavaScript Promise](https://www.programiz.com/javascript/promise)
- [JavaScript and JSON](https://www.programiz.com/javascript/json)
- [JavaScript Date and Time](https://www.programiz.com/javascript/date-time)
- [JavaScript Closures](https://www.programiz.com/javascript/closure)
- [JavaScript this](https://www.programiz.com/javascript/this)
- [JavaScript "use strict"](https://www.programiz.com/javascript/use-strict)
- [JavaScript Iterators and Iterables](https://www.programiz.com/javascript/iterators-iterables)
- [JavaScript Generators](https://www.programiz.com/javascript/generators)
- [JavaScript Regex](https://www.programiz.com/javascript/regex)
- [Debugging JavaScript in Browser](https://www.programiz.com/javascript/debugging)
- [Uses of JavaScript](https://www.programiz.com/javascript/use)

### Parallel Theory Videos
- [2026 CX 50 H Learning September Offer Video 16x9 15s](https://www.youtube.com/watch?v=W6NZfCO5SIk&t=2s)
- [Object-oriented Programming in JavaScript: Made Super Simple | Mosh](https://www.youtube.com/watch?v=PFmuCDHHpwk)
- [(50) ES6 Tutorial: Learn Modern JavaScript in 1 Hour - YouTube](https://www.youtube.com/watch?v=NCwa_xi0Uuc)

### Node.js Learning
- [Node.js Tutorial for Beginners: Learn Node in 1 Hour](https://www.youtube.com/watch?v=TlB_eWDSMt4&t=2s)
- [(50) Node js Tutorials - YouTube](https://www.youtube.com/playlist?list=PLTjRvDozrdlydy3uUBWZlLUTNpJSGGCEm)

---

This roadmap is structured to move from fundamentals to cloud-ready full-stack engineering, with AWS deployment and professional software delivery discipline built into the learning process.
