---
name: kilo-onboarding
description: Install and configure Kilo CLI + VS Code extension for agentic development in this repo — free tier (Auto Free, Mistral BYOK, free small model) and pay-as-you-go with cost controls.
---

# Kilo Onboarding for Agentic Development

Makes the agent itself productive in this repo: verified Kilo installation, free-tier defaults, and escalation rules before spending credits.

## Install (No Admin)

```powershell
npm install -g @kilocode/cli   # Scoop-managed Node, user profile
kilo --version
kilo                           # first run: sign in at https://app.kilo.ai
```

VS Code: Extensions → search "Kilo Code" → **Install Pre-Release Version** (per `todo-task/task-11.md`).

## Session Defaults

- Default model: a `(free)` tier model (`kilo-auto/free` preferred); escalate to paid frontier models only when a task stalls on free.
- Small model for background tasks: a free model (VS Code Settings → Models; CLI `~/.config/kilo/config.json` `small_model`).
- Autocomplete free path: Mistral BYOK key; otherwise autocomplete is disabled rather than billed.
- Privacy: never submit personal/confidential data (EAD, SSN, employer internals) to Auto Free routes.

## Agentic Workflow in This Repo

1. Prefer targeted reads (`todo-task/task-NN.md`, `programiz-learning/.../index.md`) over whole-repo scans — documentation repo, keep edits scoped.
2. Use the `todo-task` skill to pick the next task; use `js-tracking-sheet` to study/log; use `git-workflow` for `add → commit → push`.
3. Windows/PowerShell: prefer Python script files executed via `python file.py` over inline PowerShell one-liners (quoting mangling); never use `head`, `ls -la`, or cmd-only syntax.
4. Validate markdown references resolve to existing repo files before concluding.

## Cost Rules

- Start free; escalate deliberately; announce before using a paid model.
- Set cost controls / spend awareness before any paid run ([cost controls](https://kilo.ai/docs/getting-started/cost-controls-and-usage-safeguards)).
- Pricing: no markup, $1 = $1 usage, 5% purchase fee ([adding credits](https://kilo.ai/docs/getting-started/adding-credits)).

## Related Documentation

- `todo-task/task-11.md` — full install + free/paid walkthrough.
- `.kilo/skills/todo-task/` — ordered setup execution.
- `.kilo/skills/git-workflow/` — commit/push discipline.
- `AGENTS.md` — repo conventions.
