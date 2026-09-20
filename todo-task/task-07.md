# Task 07 — Create a Personal-Documents Repository for Employer Sharing (Private!)

**Goal:** Build one organized, **private** Git repository that holds everything an employer onboarding process asks for — passport-size photo, EAD card, resume, and supporting documents — so you can share the right file in seconds.

> **Prerequisite:** Task 06 complete — you know `init → add → commit → push`.

> **Agent:** load the `todo-task` skill before executing; keep edits scoped to this task's files.

---

## ⚠️ Read This First — Security Rules

This repo contains identity and immigration documents (EAD card, passport/ID scans). Treat it with the same care as a password vault:

| Rule | Why |
|---|---|
| **Private repo ONLY** — verify before first push | A public push of an EAD/passport is identity theft waiting to happen |
| **No secrets in text files** — never type your SSN, A-number, DOB, or passwords into any file in this repo | Git history is permanent; text files are searchable |
| **PDF preferred over images** for scans (easier to name, read, and redact) | Cleaner for employer consumption |
| **Share deliberately**: invite the employer as a collaborator, or send the specific file directly | Don't hand out full-repo access casually |
| **Redact where possible**: e.g., blacken card numbers on scans when the employer only needs to see the card type and validity | Minimize exposure |
| If a document accidentally lands in a public repo: **rotate/invalidate it immediately** (USCIS replacement, new key, etc.), then clean history | Once public, assume it's captured |

> **Alternative worth knowing:** if you only ever need to send 1–2 files, a secure email or a time-limited link from cloud storage may be simpler than repo access. The repo below is your organized *master copy*; you choose how each item is shared.

---

## Part A — Plan the Folder Structure

### Step 1 — Create the Folder Layout

In a **normal (non-admin)** PowerShell window:

```powershell
mkdir personal-documents
cd personal-documents
mkdir photo, resume, employment-authorization, identity, education, references, offer-letters
```

Resulting structure:

```
personal-documents/
├── photo/                        # Passport-size photograph
│   └── Firstname_Lastname_Photo.jpg
├── resume/                       # Resume versions
│   └── Firstname_Lastname_Resume.pdf
├── employment-authorization/     # EAD card and related
│   ├── Firstname_Lastname_EAD_Front.pdf
│   └── Firstname_Lastname_EAD_Back.pdf
├── identity/                     # Passport / ID scans (as requested by employer)
│   └── Firstname_Lastname_Passport.pdf
├── education/                    # Transcripts, certificates
│   └── Firstname_Lastname_BTech_Transcript.pdf
├── references/                   # Reference letters, contacts
└── other/                        # Anything else an employer asks for
```

### Step 2 — File Naming Convention

Use `Firstname_Lastname_DocumentName.pdf` — no spaces, version-suffix only when needed:

```
Kiran_Kumar_Photo.jpg
Kiran_Kumar_Resume_2026.pdf
Kiran_Kumar_EAD_Front.pdf
```

Convert EAD/passport scans to PDF and (ideally) keep each side as its own page or file.

---

## Part B — Create the Local Repository

### Step 3 — Initialize Git

```powershell
git init
git status
```

### Step 4 — Create .gitignore (Before First Commit)

```
# Working files that must never be committed
.env
*.tmp
~$*

# Raw scans, keep only final PDFs
**/*raw*

# Anything personal you decide NOT to keep in the repo
EXCLUDE/
```

> Reminder: your global Git identity was configured in Task 05 — every commit here is stamped with it. Use the `noreply` GitHub email if you want it hidden from collaborators.

### Step 5 — Copy Your Documents In

Copy the real files from your computer into the matching folders (adjust source paths):

```powershell
Copy-Item "C:\Users\<you>\Documents\photo.jpg"        "photo\Firstname_Lastname_Photo.jpg"
Copy-Item "C:\Users\<you>\Documents\resume.pdf"       "resume\Firstname_Lastname_Resume.pdf"
Copy-Item "C:\Users\<you>\Scans\ead-front.pdf"        "employment-authorization\Firstname_Lastname_EAD_Front.pdf"
Copy-Item "C:\Users\<you>\Scans\ead-back.pdf"         "employment-authorization\Firstname_Lastname_EAD_Back.pdf"
Copy-Item "C:\Users\<you>\Scans\passport.pdf"         "identity\Firstname_Lastname_Passport.pdf"
```

### Step 6 — Stage and Commit

```powershell
git add .
git status              # verify ONLY intended documents are listed
git commit -m "Add personal documents: photo, resume, EAD, passport"
```

---

## Part C — Publish as a PRIVATE Repository

### Step 7 — Create the Private Repo on GitHub

1. Go to **https://github.com/new**
2. Name: `personal-documents`
3. Visibility: **Private** ← double-check this; the default may be Public
4. Do **not** initialize with README (your local history is ahead)
5. **Create repository**

### Step 8 — Connect and Push

```powershell
git remote add origin https://github.com/<username>/personal-documents.git
git push -u origin main
```

Authenticate with your PAT (Task 05) if prompted.

### Step 9 — Verify

- `git status` → `up to date with 'origin/main'`
- Open the repo on github.com → check the **Private** badge next to the repo name
- Double-check visibility from a different browser/incognito (no login) — the page must NOT load

---

## Part D — Sharing With an Employer

### Step 10 — Choose a Sharing Method

| Method | How | Best for |
|---|---|---|
| **Direct file** (email/portal upload of the single PDF) | Attach `Firstname_Lastname_EAD_Front.pdf` etc. | Most HR requests — simplest and safest |
| **GitHub collaborator** | Repo → Settings → Collaborators → invite their work email | Employer wants browse access to everything |
| **ZIP archive** | `Compress-Archive -Path * -Destination personal-documents.zip` | One-time bundle via email |

When inviting a collaborator: grant the least access needed (Read is enough for viewing), and **remove them when the hiring process ends** (Settings → Collaborators → Remove).

### Step 11 — Keep the Repo Maintained

Whenever a document changes (new resume version, renewed EAD):

```powershell
# replace the file in its folder, then:
git add .
git commit -m "Update resume to 2026 version"
git push
```

---

## Useful Commands Reference

| Command | Purpose |
|---|---|
| `git init` | Start tracking this folder |
| `git add .` | Stage all new/changed documents |
| `git commit -m "msg"` | Snapshot with a meaningful message |
| `git push` | Sync to the private GitHub repo |
| `Compress-Archive -Path * -Dest zip` | Build a shareable ZIP bundle |
| `Get-FileHash <file>` | Fingerprint a file before sending (integrity check) |

## Troubleshooting

| Problem | Fix |
|---|---|
| Repo accidentally created as Public | Settings → General → Danger Zone → Change visibility → Private **immediately** |
| A secret/SSN got committed | Rotate/invalidate the item first; then remove from history; never just delete the file |
| Collaborator can't see the repo | Confirm invite accepted; confirm their account is on the Collaborators list |
| Push too large (scanned images heavy) | Optimize/flatten PDFs (<10 MB per file is comfortable); consider Git LFS if needed |
| Need to revoke all access after hiring | Settings → Collaborators → remove; rotate PAT if shared |

---
### How-To-Do Deep Dives (The *How* Behind This Task)

While this file gives the **order**, the **how** lives in these guides — open them when a step needs more detail:

- [How-To-Do/git-github/Hands-On/cli/README.md](../How-To-Do/git-github/Hands-On/cli/README.md)

## ✅ Task 07 — Completion Checklist

- [ ] Folder structure created (photo, resume, employment-authorization, identity, education, …)
- [ ] Consistent file naming: `Firstname_Lastname_Document.pdf`
- [ ] `.gitignore` committed before first commit
- [ ] Documents copied in and committed locally
- [ ] GitHub repo created with **Private** visibility — verified from a logged-out browser
- [ ] `git push -u origin main` succeeded
- [ ] Decided and documented your preferred sharing method (direct file / collaborator / ZIP)
- [ ] No SSN, passwords, or raw secrets anywhere inside the repo

**Done with Task 07?** → Move on to `task-08.md`
