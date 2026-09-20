# 04 — Verification (Checklists, Tests, Gates)

Every task file ends with a ✅ checklist — that checklist **is** the test suite for this repo. No checklist passes on trust; each item has a command or observable proof.

## Gate inventory

| Task | Gate (must all pass) | Proof |
|---|---|---|
| 01 | Scoop works without admin | `scoop --version`; one tool installed via scoop |
| 02 | Python runs | `python --version`, `pip --version`, `where.exe python` under scoop path |
| 03 | Node runs | `node --version`, `npm --version`, global smoke test |
| 04 | JDK 21 compiles | `java --version` shows 21.x LTS; `Hello.java` compiles + runs |
| 05 | Git + Bash on PATH | `git --version`, `bash --version`, `ssh -V` in fresh PowerShell |
| 06 | Repo round-trips | `git push -u origin main` succeeds; files visible on github.com |
| 07 | Privacy holds | Private badge; logged-out browser blocked; no secrets committed |
| 08 | Schedule exists | All 59 Planned dates filled; cadence chosen |
| 09 | Git understood | Checkpoints 1–7 done (branch, merge, fetch vs pull, undo) |
| 10 | Daily loop proven | One full study day: study → commit → Sheet Actual dates |
| 11 | Kilo runs free-first | `kilo` session on `(free)` model; cost controls enabled |

## Agent verification loop (revalidation)

After any repo edit, run this loop until clean:

1. `git status --short` — only intended files changed.
2. Markdown check — fences balanced, tables have separator rows, no `ghp_`/`BEGIN PRIVATE KEY` patterns.
3. Link check — every `](todo-task/…)`, `](programiz-learning/…)`, `](../…)` target exists on disk.
4. Traceability check — if a task/guide/sheet file changed, update `07-traceability.md` in the same commit.
5. Commit + push immediately (per the standing rule) — never batch unrelated work.

## Known validator limits

- The local markdown checker flags legitimate separator rows (`|---|---|`) as "missing separator" — false positive; verify tables by eye when flagged.
- The legacy `.xls` tracking sheet cannot be parsed without Excel/xlrd here — validate against the `.md` mirror (same 59 rows by construction).
- 51 pre-existing `How-To-Do/**/screenshots/*.png` image links have no committed image files (guides added in `d0a8e73` reference screenshots that were never committed). These are out of scope for the docs/sdlc + todo-task work: do not "fix" by deleting the links or inventing images. Recorded here so the revalidation loop treats them as known-accepted, not new breakage.
