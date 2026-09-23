# Task 10 — Daily Execution: Study Topics In Order, Log Progress in Google Sheets

**Goal:** Work through `programiz-learning/` topic-by-topic in `Srno` order, one study day at a time, and log every topic in the **Google Sheet** — with two-way navigation between the repo and the Sheet so neither side is ever more than one click away.

> **Prerequisite:** Task 08 complete (schedule chosen, Planned dates filled, practice repo ready).

> **Agent:** load the `js-tracking-sheet` skill before executing; keep edits scoped to this task's files.

---

## Part A — Open the Google Sheet (Already Created)

The live tracker is shared and ready — no upload needed:

📊 **[Programiz-JavaScript-Tracking-Sheet](https://docs.google.com/spreadsheets/d/1LGqEJ6FlUa5u6STiqpFl9w1AVbxcUklj/edit?gid=95527326#gid=95527326)** (source files also in the [Drive folder](https://drive.google.com/drive/folders/1PaVJ8ad7RsiG15DTxDZJE6uAa_ubPFB8?usp=sharing))

It holds the same 59 rows and 11 columns (`Srno … Estimated Hours … References`) as the in-repo `.xls`/`.md` mirrors.

### Step 1 — Freeze and Filter (one-time setup in the live Sheet)

1. **View → Freeze → 1 row** (header always visible)
2. **Data → Create a filter** (filter by Task/section while studying)

### Step 3 — Add a NAVIGATION Row (Sheet → GitHub Link)

This is the "vice versa" half: the Sheet links back to the repo.

1. Insert a new row **above** the header, or use cell `A1` of a new first sheet tab called `NAVIGATION`
2. Enter this formula:

```
=HYPERLINK("https://github.com/cloudshare360/aws-cloud-engineer-with-nodejs/tree/main/programiz-learning","← Open programiz-learning on GitHub")
```

3. (Optional) Add a second link to the daily guide:

```
=HYPERLINK("https://github.com/cloudshare360/aws-cloud-engineer-with-nodejs/blob/main/todo-task/task-10-daily-execution-google-sheet.md","← Today's routine (task-10)")
```

### Step 2 — Note the GitHub → Sheet Link (already done)

The reverse direction lives in `programiz-learning/README.md` under **Progress Tracking — Google Sheet ↔ GitHub**: a markdown link pointing at this live tracking Sheet.

### Step 5 — Sharing

Keep the Sheet **Restricted** (only you). Share with an employer/mentor only if asked: **Share → add their email → Viewer**. Never set it to "Anyone with the link" while personal notes sit in Remarks.

---

## Part B — The Daily Routine (Mon–Fri)

Do this every study day, in order:

| # | Action | Where |
|---|---|---|
| 1 | Open the Sheet; find today's row(s) by Planned date (Task-08 schedule) | Google Sheet |
| 2 | Open the matching folder(s): `programiz-learning/javascript/<section>/<topic>/index.md` | Repo (or local clone) |
| 3 | Study: read → code along → modify → mini-challenge (Task-08, Step 6) | Editor / browser console |
| 4 | Commit practice code (the Task-06 loop: `add → commit → push`) | Practice repo |
| 5 | **Same day, update the Sheet row:** Actual Start/End Date, Remarks (what clicked / what was hard) | Google Sheet |

**Rule:** no topic counts as done until its Sheet row has Actual dates filled. The Sheet is the source of truth for progress; the repo is the source of truth for content.

---

## Part C — Navigating Both Ways (Cheat Table)

| Starting from | Click | You land on |
|---|---|---|
| Repo `programiz-learning/README.md` | 📊 Google Sheet link | The daily tracker |
| Sheet `NAVIGATION` row | ← Open programiz-learning | The content folders |
| Sheet `References` cell | Programiz URL | The online tutorial |
| Sheet `Sub-Task-Level2` text | (match by name) | `javascript/<section>/<topic>/index.md` offline notes |
| Repo `todo-task/task-10-daily-execution-google-sheet.md` | This file | The daily routine |

---

## Part D — Weekly Review (Saturday, Optional)

1. Filter the Sheet to this week's rows — every row should have Actual dates
2. Re-do the mini-challenges that felt hard (Remarks column tells you which)
3. Write the section milestone summary (Task-08, Step 4)
4. Sunday: rest. Behind by >3 days? Shift the schedule right; don't compress.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Lost today's place | Sheet filter: sort by Srno, find first row with empty Actual End Date |
| Sheet and repo disagree on order | `Srno` order wins — folders and rows both follow it |
| Offline day (no internet) | Study from local `index.md` files; update the Sheet when back online |
| Sheet link missing from README | Confirm the Drive-folder link exists in `programiz-learning/README.md` |
| Fell behind mid-plan | Use Saturday buffer first, then shift Planned dates right |

---
### How-To-Do Deep Dives (The *How* Behind This Task)

While this file gives the **order**, the **how** lives in these guides — open them when a step needs more detail:

- [programiz-learning/README.md](../programiz-learning/README.md)
- [programiz-learning/Programiz-JavaScript-Tracking-Sheet.md](../programiz-learning/Programiz-JavaScript-Tracking-Sheet.md)

## ✅ Task 10 — Completion Checklist

- [ ] Opened the live [tracking Sheet](https://docs.google.com/spreadsheets/d/1LGqEJ6FlUa5u6STiqpFl9w1AVbxcUklj/edit?gid=95527326#gid=95527326) (59 rows present)
- [ ] Header row frozen; filter enabled
- [ ] `NAVIGATION` row added with `=HYPERLINK(...)` back to `programiz-learning` on GitHub
- [ ] Confirmed `programiz-learning/README.md` links to the live Sheet
- [ ] Completed one full study day using the Part B routine (study → commit → log)
- [ ] First week's Sheet rows all carry Actual dates
- [ ] Weekly review habit established (Saturday)

**Done with Task 10?** → The todo-task series is complete. Continue with the roadmap in the root `readme.md`.
