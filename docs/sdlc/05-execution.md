# 05 — Execution (Learning Sprints + Self-Tracking)

Covers FR-04, FR-05, FR-06. This is where the roadmap becomes daily work.

## Sprint structure (from task-08)

- Cadence: **2.0 h × Mon–Fri** → 11 weeks for 83.0 h. Saturdays review/catch-up; Sundays rest.
- Unit of work: one Sheet row (`Srno` + Estimated Hours). Pack rows into 2.0 h days in Srno order.
- Milestones: section boundaries (JS Introduction → Control Flow → Functions → Objects → Types → Exceptions/Modules → ES6 → Async → Miscellaneous) each get a 3-line summary note.

## Daily loop (from task-10)

```
Sheet row (today's Srno by Planned date)
  → study index.md + References URL → code along → modify → mini-challenge
  → git add → commit → push            (task-06 loop)
  → Sheet row: Actual Start/End Date + Remarks   (same day)
```

Rules:

- No topic counts as done until its Sheet row has Actual dates.
- Content lives in the repo; progress lives in the Sheet — never mix them.
- Behind >3 days: Saturday buffer first, then shift Planned dates right. Never compress.

## Self-tracking math (the commitment-vs-execution signal)

For each row: **slip = Actual End − Planned End** (in days).

| Signal | Meaning | Action |
|---|---|---|
| slip ≤ 0 | On/ahead of plan | Keep cadence |
| 0 < slip ≤ 3 | Minor drift | Absorb in Saturday buffer |
| slip > 3 | Plan broken | Shift all remaining Planned dates right; note cause in Remarks |
| Estimated vs Actual hours diverge repeatedly | Estimates wrong for you | Re-estimate remaining same-type topics (e.g., all async topics ×1.5) |

At each section milestone, compute average slip and total hours spent vs estimated — that is your velocity. Use it to re-forecast the remaining weeks.

## Agent support during execution

- Study sessions: `js-tracking-sheet` skill (session pattern + Sheet update order).
- Explanations/debugging: Kilo on `kilo-auto/free`; escalate to `efficient`/`frontier` per task-11 Part G.
- Commits: `git-workflow` skill; message shape `JS #<srno>: <topic>`.
