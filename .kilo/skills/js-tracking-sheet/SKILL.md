---
name: js-tracking-sheet
description: Work with the Programiz JavaScript tracking sheet (59 topics, Estimated Hours, Planned/Actual dates) and the programiz-learning offline notes — daily study execution, scheduling, and self-tracking.
---

# JavaScript Tracking Sheet Workflow

The tracking sheet is the learner's self-tracking instrument. Agent sessions that study, schedule, or report on JavaScript progress must follow this workflow.

## Sources of Truth

| Concern | Source |
|---|---|
| What to study (content) | `programiz-learning/javascript/<section>/<topic>/index.md` in Srno order |
| How to plan | `todo-task/task-08.md` (11-week schedule, Planned dates) |
| How to execute daily | `todo-task/task-10.md` (study → commit → log) |
| Progress state | Google Sheet Actual Start/End Date cells |
| Offline sheet mirror | `programiz-learning/Programiz-JavaScript-Tracking-Sheet.md` |

## Sheet Columns (all mirrors identical)

`Srno, Task, Sub-Task-Level1, Sub-Task-Level2, Estimated Hours, Planned Start Date, Planned End Date, Actual Start Date, Actual End Date, Remarks, References`

- **Planning phase (task-08):** fill `Planned Start Date` / `Planned End Date` for all 59 rows from the schedule.
- **Execution phase (task-10):** fill `Actual Start Date` / `Actual End Date` the same day each topic finishes; write one line in `Remarks` (what clicked / what was hard).
- **Self-tracking rule:** `Actual − Planned` per row measures commitment vs execution. Behind by >3 days → use Saturday buffer, then shift Planned dates right; never compress.

## Study Session Pattern (per topic)

1. Read the topic `index.md` + Reference URL.
2. Code every example in the session workspace; break inputs deliberately.
3. One original snippet using the concept (mini-challenge).
4. Commit practice code: `git add . && git commit -m "JS #<srno>: <topic>" && git push`.
5. Update Sheet row Actual dates + Remarks.

## Related Documentation

- `programiz-learning/README.md` — content map + Sheet ↔ GitHub navigation.
- `todo-task/task-08.md` — schedule tables and milestones.
- `todo-task/task-10.md` — daily routine and Sheet setup.
- `.kilo/skills/javascript-roadmap/` — topic progression theory.
