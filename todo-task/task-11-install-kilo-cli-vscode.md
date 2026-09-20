# Task 11 — Install Kilo CLI + VS Code Extension and Master Agentic Development (Free vs Paid)

**Goal:** Install **both** the Kilo CLI and the Kilo VS Code extension, understand agentic development, run the CLI for daily work, and choose wisely between the **free tier** and the **pay-as-you-go** option — no surprises on the bill.

> **Prerequisites:** Tasks 01, 03, 05 complete (Scoop enabled, Node.js and Git working; VS Code installed or about to be).
> Official docs home: **https://kilo.ai/docs**

> **Agent:** load the `kilo-onboarding` skill before executing; keep edits scoped to this task's files.

---

## Part A — What "Kilo" Is (2-Minute Mental Model)

Kilo Code is an **AI pair programmer** that lives in your terminal (CLI), VS Code, JetBrains, or browser:

| Term | Meaning |
|---|---|
| Agent | An AI loop that reads your instructions, inspects files, runs commands, and edits code — then reports back |
| Model | The AI brain behind the agent (e.g., Claude, GPT, Gemini, free-tier models) |
| Mode (Code / Ask / Plan / Debug) | How the agent behaves: write code, answer, plan-first, or debug |
| Context / mentions | The files, functions, and symbols you point the agent at |
| Kilo Gateway | Kilo's unified API to hundreds of models: one login, pay-as-you-go, BYOK supported |

The three places Kilo spends model usage: **agentic interactions** (chat/coding), **autocomplete** (inline suggestions), and **background tasks** (titles, summaries). Free-tier configuration covers all three.

---

## Part B — Install Kilo CLI (No Admin Rights)

Open a **normal (non-admin)** PowerShell window.

### Step 1 — Install via npm (Node.js from Task 03)

```powershell
npm install -g @kilocode/cli
```

Scoop-managed Node installs global packages into your user profile — no elevation.

### Step 2 — Verify

```powershell
kilo --version
```

### Step 3 — First Run (Sign In)

```powershell
kilo
```

On first launch the CLI walks you through sign-in at **https://app.kilo.ai** and model selection. Pick a **(free)** model to start (see Part E).

Troubleshooting: if `kilo` is not recognized, reopen PowerShell so the npm global bin PATH refreshes.

---

## Part C — Install the Kilo VS Code Extension (No Admin Rights)

The VS Code extension runs the same Kilo engine inside the editor, with chat panel, inline edits, autocomplete, checkpoints, and session sharing. It is built on the [Kilo CLI](https://github.com/Kilo-Org/kilocode) and distributed as the **pre-release version** on the VS Code Marketplace (per the [install guide](https://kilo.ai/docs/getting-started/installing)).

> **Windows note from the docs:** ensure **`PowerShell` is on your PATH** before using the extension — **Edit system environment variables → Environment Variables → System Path** should contain `C:\Windows\System32\WindowsPowerShell\v1.0\` (this step is a system-level change; everything after it is per-user).

### Step 1 — Make sure VS Code is installed

If VS Code is missing, install it with Scoop (no admin):

```powershell
scoop install vscode
```

### Step 2 — Install the extension (pre-release channel)

1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X`)
3. Search for **"Kilo Code"**
4. Click the dropdown arrow next to **Install** and select **Install Pre-Release Version**

> The "pre-release" label is the VS Code Marketplace distribution channel for Kilo — it is the stable, recommended channel, not a beta.

Alternatively, from the terminal (also works from normal PowerShell):

```powershell
code --install-extension kilocode.kilo-code
```

### Step 3 — Sign in and pick a model

1. Open the Kilo panel (activity-bar icon) and sign in when prompted
2. In the model dropdown below the chat box, type `free` and pick a **(free)** model to start (see Part E)

### Step 4 — Verify both surfaces work

| Surface | Check |
|---|---|
| CLI | `kilo` opens an interactive session |
| VS Code | Kilo panel chat answers a question about the open file |

### CLI vs Extension — when to use which

| Use the CLI when | Use the VS Code extension when |
|---|---|
| Scripting, automation, long-running agents | Reviewing diffs inline in files |
| No GUI available (SSH, Codespaces terminal) | Using autocomplete while typing |
| Driving Git/terminal-heavy workflows | Using Checkpoints and session sharing |
| Practicing the Task-06/Task-10 push loop | Pointing at symbols with `@` mentions in the editor |

---

## Part D — Your First Agentic Session (The Basic Loop)

The loop is the same in both surfaces: **describe → agent acts → review → accept/revert**.

Try this in a scratch folder:

```powershell
mkdir kilo-hello; cd kilo-hello
kilo
```

Then inside the Kilo prompt:

1. Ask it to create a `hello.js` that prints the current date and one function using it
2. Ask it to explain each line (`Ask` mode thinking)
3. Ask it to add input validation and re-run the script for you

Essential habits (both surfaces):

| Command / action | Purpose |
|---|---|
| `kilo` (CLI) / Kilo panel (VS Code) | Start an interactive session |
| `/models` (CLI) / model dropdown (VS Code) | Switch models (type `free` to filter free ones) |
| `/help` (CLI) | All session commands |
| Mention files (e.g., `@src/index.js`) | Aim the agent at exact context |
| Review the diff before accepting | You stay the author of record |

---

## Part E — Free Tier: How to Stay at $0

Kilo can run **entirely free**. Per the [official free-tier guide](https://kilo.ai/docs/getting-started/using-kilo-for-free):

### 1. Free agentic usage — use Auto Free

- Select **`kilo-auto/free`** (Auto Free): automatically routes to the best available free models, no configuration
- Or filter the model picker with `free` and choose any model labeled **(free)** (VS Code: model dropdown below chat; CLI: `/models` → type `free`)
- Free models can be rate-limited by upstream providers — if one stalls, switch to another free model
- Cloud tasks (App Builder, Code Reviewer) also support free models: pick a **(free)** model in the task dropdown

> **Privacy note:** Auto Free may route to providers that log prompts/outputs for service improvement. Never submit personal or confidential data (EAD numbers, SSNs, employer internals).

### 2. Free autocomplete

By default autocomplete consumes credits. To make it free: add your own **Mistral AI API key** via **BYOK** (Bring Your Own Key) for Codestral's free tier — autocomplete then bills your key, not your Kilo balance. ([Mistral setup guide](https://kilo.ai/docs/code-with-ai/features/autocomplete/mistral-setup))

### 3. Free background tasks

Background jobs (session titles, summaries) default to a paid small model. Switch them:

- VS Code: **Settings → Models** → small model = any free model
- CLI: set `small_model` in `~/.config/kilo/config.json`:

```json
{
  "small_model": "your-preferred-free-model"
}
```

**Free-tier checklist:** agentic = `(free)` model ✓, autocomplete = Mistral BYOK ✓, background = free small model ✓.

---

## Part F — Paid Tier: Pay-As-You-Go (and Kilo Pass)

When free models hit limits or you need frontier models, pay only for what you use. Per the [credits guide](https://kilo.ai/docs/getting-started/adding-credits) and [pricing](https://kilo.ai/pricing):

- **Transparent:** Gateway inference matches provider API rates, **no markup**. $1 of credits = $1 of usage
- **5% payment-processing fee** applies at purchase (charged separately, not added to balance)
- **Three ways to top up** (from [your profile page](https://app.kilo.ai/profile)):
  1. **Kilo Pass subscription** — most cost-effective
  2. **One-time credit purchase**
  3. **Automatic top-up** — buys more when balance runs low (individual + org accounts)
- **BYOK alternative:** attach your own provider keys (OpenAI, Anthropic, etc.) on the [BYOK screen](https://app.kilo.ai/byok) and consume your own provider subscription instead

Practical pay-as-you-go rules:

1. Start every session on a **free** model; escalate to a paid frontier model only when the task stalls
2. Use **small/cheap models** for summaries, refactors, and explanations; reserve big models for architecture and hard bugs
3. Keep [cost controls](https://kilo.ai/docs/getting-started/cost-controls-and-usage-safeguards) on — set spend alerts and auto top-up limits before your first paid run
4. Check the [rate-limits and cost guide](https://kilo.ai/docs/getting-started/rate-limits-and-costs) when picking models

---

## Part G — Free-First Cascade + Task-Aware Routing (No Quality/Speed Compromise)

Goal: **spend nothing while free quota lasts; the moment a free model is exhausted for the day, fall back to pay-as-you-go — and route hard tasks to strong models, routine tasks to cheap ones.**

Two layers make this work; both live in this repo:

### Layer 1 — `.kilo/kilo.json` (project config): the free-first default

The repo already ships [.kilo/kilo.json](../.kilo/kilo.json) with this wiring:

| Key | Value | Why |
|---|---|---|
| `model` | `kilo-auto/free` | Every new session starts on free models — no credits burned by default |
| `small_model` | `kilo-auto/free` | Session titles/commit messages stay free |
| `subagent_model` | `kilo-auto/free` | Subagent work stays free too |
| `agent.compaction.model` | `kilo-auto/free` | Context summaries stay free |
| `permission.bash` | allow `git/npm/python/scoop/node` | Routine repo commands run without friction; everything else asks first |
| `permission.edit` | allow docs folders only | Agents can edit `todo-task/`, `programiz-learning/`, `How-To-Do/`, `readme.md`, `AGENTS.md` — nothing else without asking |

Model precedence (per [Model Selection](https://kilo.ai/docs/code-with-ai/agents/model-selection)): **Session override → last picked per agent → per-agent config → global config → Auto Free.** So when you escalate for a hard task (Layer 2), the pick sticks for that session; the next session silently reverts to free.

### Layer 2 — Task-aware routing (your decision, 10 seconds per task)

Per [Auto Model](https://kilo.ai/docs/code-with-ai/agents/auto-model), `kilo-auto/efficient` classifies each request's difficulty and routes to the cheapest model proven accurate enough — with a fixed baseline fallback so quality never drops. That is exactly the "decide based on the task" behavior.

| Task type | Model | Cost |
|---|---|---|
| Routine: read a topic, explain, small edit, commit message | `kilo-auto/free` | $0 |
| Real coding: refactor, multi-file change, tests, debugging | `kilo-auto/efficient` | Pay-as-you-go, cheapest-proven per request |
| Hard: architecture, tricky bug, long-context reasoning | `kilo-auto/frontier` | Pay-as-you-go, strongest models |

Switch mid-session with `/models` (CLI) or the model dropdown (VS Code). Nothing else to configure.

### Daily-quota behavior (what actually happens at the free limit)

1. `kilo-auto/free` splits traffic across all currently-free models — **one model's quota running out routes to the next free model automatically**, and the free mapping is updated server-side as providers change promotions.
2. When free quota is exhausted for the day (rate-limited or no free capacity), the request fails with a rate-limit error — it does **not** silently bill you. That's the safety you want.
3. **Your cascade rule:** see a rate-limit error → `/models` → pick `kilo-auto/efficient` (or `frontier` for hard work) → finish the task → next day, new session starts back on `kilo-auto/free`.
4. Add credits once (profile → [Adding Credits](https://kilo.ai/docs/getting-started/adding-credits)) and enable **automatic top-up** so the fallback never stalls mid-task; set the spend cap from [Cost Controls](https://kilo.ai/docs/getting-started/cost-controls-and-usage-safeguards) first.

> **Privacy reminder:** Auto Free may route to providers that log prompts for service improvement. Confidential material (EAD, SSN, employer internals) never goes through `kilo-auto/free` — use a paid tier or BYOK for those.

### Optional: lock the efficient pool to models you trust

On your [profile → Auto routing card](https://app.kilo.ai/profile), configure an **Efficient model pool** (1–10 exact model/variant pairs). `kilo-auto/efficient` then routes only among your vetted, benchmark-ready models, with a cost-effective baseline as fallback.

---

## Part H — Which Agents/Modes to Use When

Per the [Code with AI docs](https://kilo.ai/docs/code-with-ai):

| Mode | Use for | Example prompt |
|---|---|---|
| **Code** | Write/edit/refactor | "Add input validation to hello.js and run it" |
| **Ask** | Understand code | "Explain how this callback chain works" |
| **Plan** | Design before building | "Plan a 3-file Express API for notes; don't write code yet" |
| **Debug** | Fix failures | "Tests fail with ECONNREFUSED — find why" |
| **Orchestrator** (legacy) | Big multi-step jobs | "Split this refactor into subtasks and run them" |

Plus productivity features worth learning early: **Checkpoints** (save/restore state), **Enhance Prompt**, **Git commit generation**, **Task/Todo lists**.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `kilo` not recognized | Reopen PowerShell (npm global bin PATH refresh) |
| Extension not visible in VS Code | Restart VS Code; check Output panel (View → Output → "Kilo Code") |
| VS Code version too old | Kilo needs VS Code 1.84.0+; update via `scoop update vscode` |
| Auth fails | Re-run `kilo`, re-sign-in at app.kilo.ai |
| Free model rate-limited | `/models` (or dropdown) → switch to another `(free)` model |
| Autocomplete stopped | Credits empty + no Mistral BYOK — configure BYOK or add credits |
| Unexpected spend | Check profile usage; enable cost controls + auto top-up cap |

---

## Reference Links (all from kilo.ai/docs)

- Docs home: https://kilo.ai/docs
- Installation: https://kilo.ai/docs/getting-started/installing
- Using Kilo for Free: https://kilo.ai/docs/getting-started/using-kilo-for-free
- Code with AI: https://kilo.ai/docs/code-with-ai
- CLI: https://kilo.ai/docs/code-with-ai/platforms/cli
- Authentication: https://kilo.ai/docs/getting-started/setup-authentication
- First task: https://kilo.ai/docs/getting-started/quickstart
- Adding credits: https://kilo.ai/docs/getting-started/adding-credits
- Cost efficiency: https://kilo.ai/docs/getting-started/rate-limits-and-costs
- Cost controls: https://kilo.ai/docs/getting-started/cost-controls-and-usage-safeguards
- Pricing: https://kilo.ai/pricing — Profile/credits: https://app.kilo.ai/profile — BYOK: https://app.kilo.ai/byok

---

## ✅ Task 11 — Completion Checklist

- [ ] Installed Kilo CLI: `npm install -g @kilocode/cli` (no admin)
- [ ] Installed the Kilo VS Code extension via the **pre-release** channel
- [ ] PowerShell on PATH verified (Windows prerequisite for the extension)
- [ ] `kilo --version` works; signed in via `kilo`
- [ ] VS Code Kilo panel chat works on an open file
- [ ] Ran a first agentic session (create → explain → validate a script)
- [ ] Can switch models with `/models` (CLI) and the dropdown (VS Code); know how to filter `free`
- [ ] Configured the free tier: Auto Free (free) agent + Mistral BYOK autocomplete + free small model
- [ ] Understand pay-as-you-go: no markup, $1 = $1, 5% purchase fee, Pass vs one-time vs auto top-up
- [ ] Enabled cost controls / spend awareness before any paid usage
- [ ] Tried Code / Ask / Plan modes and know when to use each

**Done with Task 11?** → Move on to [task-12-kanban.md](task-12-kanban.md)
