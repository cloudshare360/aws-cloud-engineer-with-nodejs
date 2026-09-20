# Programiz JavaScript Learning

> **How this folder fits the roadmap:** you arrive here from [todo-task/task-08](../todo-task/task-08.md) (the 11-week schedule). Study the topics below **in Srno order**, one study day at a time; log each finished topic in the Google Sheet per [todo-task/task-10](../todo-task/task-10.md). When the Sheet says "done", the roadmap's [§3](../readme.md#3-core-programming-foundation-javascript) says "done".

## Folder Structure

```
programiz-learning/
└── javascript/
    ├── 01-JS-Introduction/          (7 topics)
    │   ├── 01-01-Getting Started/
    │   │   └── index.md
    │   │   └── images/
    │   ├── 01-02-JS Type Conversions/
    │   │   └── index.md
    │   │   └── images/
    │   ├── 01-03-JS Variables & Constants/
    │   │   └── index.md
    │   │   └── images/
    │   ├── 01-04-JS console.log/
    │   │   └── index.md
    │   │   └── images/
    │   ├── 01-05-JavaScript Comments/
    │   │   └── index.md
    │   │   └── images/
    │   ├── 01-06-JavaScript Data Types/
    │   │   └── index.md
    │   │   └── images/
    │   └── 01-07-JavaScript Operators/
    │       └── index.md
    │       └── images/
    ├── 02-JS-Control-Flow/          (7 topics)
    ├── 03-JS-Functions/             (4 topics)
    ├── 04-JS-Objects/               (5 topics)
    ├── 05-JS-Types/                 (6 topics)
    ├── 06-Exceptions-and-Modules/   (3 topics)
    ├── 07-JS-ES6/                   (12 topics)
    ├── 08-JavaScript-Asynchronous/  (5 topics)
    └── 09-Miscellaneous/            (10 topics)
```

## Content Organization

Each topic folder contains:
- `index.md` — Full article content scraped from Programiz
- `images/` — PNG images downloaded from the article

## Naming Convention

- Sections use 2-digit prefix: `01-JS-Introduction`, `02-JS-Control-Flow`, etc.
- Topics use 3-digit prefix: `01-01-Getting Started`, `02-05-JavaScript if else Statement`, etc.
- Spaces replaced with hyphens; special characters (`&`, `/`, `...`, `()`) kept as-is where needed

## Tracking Sheet

The tracking files in this folder all hold the same 59 topics:

| File | Purpose |
|---|---|
| `Programiz-JavaScript-Tracking-Sheet.xls` | Master sheet — upload to Google Sheets (Task 10, Part A) |
| `Programiz-JavaScript-Tracking-Sheet.md` | Offline-readable mirror of the sheet |

Columns (same in all mirrors):

| Column | Description |
|--------|-------------|
| Srno | Sequential number (1-59) |
| Task | Section name |
| Sub-Task-Level1 | Sub-category |
| Sub-Task-Level2 | Specific topic |
| Estimated Hours | Per-topic workload estimate (total ≈ 83.0 h) |
| Planned Start Date | Planned start (fill from the Task-08 schedule) |
| Actual Start Date | Actual start (fill while studying) |
| Remarks | Notes (empty) |
| References | Programiz URL |

## Progress Tracking — Google Sheet ↔ GitHub

Daily progress lives in the **Google Sheet** (created from the `.xls` — see [todo-task/task-10](../todo-task/task-10.md)):

- 📊 **Progress Tracker (Google Sheet):** [Programiz-JavaScript-Tracking-Sheet](https://docs.google.com/spreadsheets/d/1LGqEJ6FlUa5u6STiqpFl9w1AVbxcUklj/edit?gid=95527326#gid=95527326) — the live tracker (files also in the [Drive folder](https://drive.google.com/drive/folders/1PaVJ8ad7RsiG15DTxDZJE6uAa_ubPFB8?usp=sharing)).
- In the Sheet, add a `NAVIGATION` row with `=HYPERLINK("<this-repo>/tree/main/programiz-learning","← Open programiz-learning on GitHub")` so the Sheet links back here.
- Update the Sheet's `Actual Start/End Date` cells the same day you finish each topic (Task 10, Part B); the repo content (`index.md` files) never changes for progress — the Sheet is the source of truth for progress.

## Navigation

Study strictly in `Srno` order — the folder prefixes already encode it (`01-01` → `09-10`):

1. Start with `javascript/01-JS-Introduction/01-01-Getting Started/index.md`
2. Read `index.md` in each topic folder for the full article content
3. Check that topic's `images/` subfolder for diagrams/screenshots
4. After finishing a topic, update its row in the Google Sheet (Actual dates + Remarks) — see [task-10](../todo-task/task-10.md)
5. The next topic is the next `Srno` in [the tracking sheet](Programiz-JavaScript-Tracking-Sheet.md) — never skip ahead