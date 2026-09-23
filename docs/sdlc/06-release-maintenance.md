# 06 — Release & Maintenance (Sharing, Links, Upkeep)

## What "release" means here

There is no app to deploy. A release = **a pushed commit on `main` with the repo map, tasks, content, Sheet links, and skills all in sync** (see phase 04 checks). The standing rule — commit + push after every completed task — makes every task boundary a release.

## Link maintenance (Sheet ↔ repo)

Two links must stay live; check both at every release:

| Direction | Location | Must point to |
|---|---|---|
| Repo → Sheet | `readme.md` 📊 line + `programiz-learning/README.md` 📊 line | The live [tracking Sheet](https://docs.google.com/spreadsheets/d/1LGqEJ6FlUa5u6STiqpFl9w1AVbxcUklj/edit?gid=95527326#gid=95527326) (source files in the [Drive folder](https://drive.google.com/drive/folders/1PaVJ8ad7RsiG15DTxDZJE6uAa_ubPFB8?usp=sharing)) |
| Sheet → repo | Sheet `NAVIGATION` row `=HYPERLINK(…)` | `…/tree/main/programiz-learning` on GitHub |

If either end 404s (renamed repo, moved Sheet), fix in the same commit that caused it.

## Employer sharing (from task-07)

- personal-documents repo stays **Private**; share per-item (direct PDF), per-repo (collaborator, Read-only, removed after hiring), or as a ZIP bundle.
- Never link the personal-documents repo from this public roadmap repo.

## Ongoing upkeep

- New roadmap sections (§4–§7 material in [docs/readme/](../readme/)) arrive as new `todo-task/` files + `programiz-learning/`-style content + traceability rows — same three-layer pattern.
- Free-model mapping changes server-side; re-check [kilo.ai/models](https://kilo.ai/models) monthly and update task-11 if picks go stale.
- Rotate the GitHub PAT if ever pasted anywhere except `C:\Users\sricloud\.env`; never commit it.
