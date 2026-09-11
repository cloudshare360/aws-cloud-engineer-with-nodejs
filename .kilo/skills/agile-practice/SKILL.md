---
name: agile-practice
description: Track learning progress and practice software engineering discipline using Kanban, Scrum, daily commits, and progress tracking as defined in this repository.
---

# Agile Practice and Learning Discipline

This skill codifies the process and collaboration practices from `readme.md` section 8 and section 10.

## Why Process Matters

This roadmap expects professional software engineering habits from day one:
- A Git repository for all learning work
- Daily commits
- A progress tracker (Google Sheet)
- A Kanban task board
- Notes on concepts learned and completed tasks
- At least one small practice or coding task per day

## Agile Concepts to Learn (`readme.md` section 8)

- **Kanban basics** — visualize work, limit WIP, manage flow
- **Scrum basics** — sprint, daily standup, sprint review, retrospective
- **Backlog management** — write, prioritize, and refine tasks
- **Sprint planning** — plan a fixed scope of work
- **Daily standups** — what was done, blockers, next steps
- **Work-in-progress limits** — avoid context switching
- **Task board flow** — columns move tickets from todo to done

## Daily Workflow Discipline

Each day, complete:

1. **Review the Kanban board** — move in-progress tasks, check WIP limits.
2. **Identify today's focus** — pick 1-2 learning tasks.
3. **Code and commit** — at least one small coding task.
4. **Update progress** — log completed work in the Google Sheet.
5. **Log blockers** — note any obstacles and how they were resolved.
6. **Plan tomorrow** — move or create tasks as needed.

## Kanban Board Structure

Recommended columns:

| Column | Purpose |
|---|---|
| Backlog | Tasks not yet started |
| Ready | Prioritized, ready to work |
| In Progress | Limited WIP (e.g., 2-3 items) |
| Review | Completed, needs review/testing |
| Done | Fully complete |

## Google Sheet Progress Tracker

Suggested columns:

| Date | Topic | Hours | Task Completed | Notes/Blockers | Git Commit Link |
|---|---|---|---|---|---|
| 2026-09-01 | JavaScript Functions | 2 | Closures tutorial | Stuck on scope | link |

## Git Progress Tracking

Commit daily with descriptive messages:

```bash
git add .
git commit -m "Day 3: JavaScript closures - practice exercises"
git push origin main
```

This creates an auditable history of your learning journey.

## Related Documentation

- `readme.md` — Sections 8 (Process & Collaboration), 10 (Daily Practice).
- `.kilo/skills/git-workflow/` — daily commit discipline and branching.
- `.kilo/skills/javascript-roadmap/` — topic progression.

## Tips

- Treat learning tasks like real sprint items — estimate, track, and refine.
- Use daily standups (even solo) to reflect on progress.
- Keep blockers visible — document solutions as notes for future reference.
- Celebrate small wins — each completed task builds momentum.
