# Task 04 — Install Oracle JDK 21 Using Scoop (No Admin Rights)

**Goal:** Install Oracle JDK 21 on Windows through Scoop — no Oracle installer wizard, no registry changes, no admin account.

> **Prerequisite:** Task 01 complete — Scoop must be enabled (`scoop --version` works).

> **Agent:** load the `todo-task` skill before executing; keep edits scoped to this task's files.

---

## Step 1 — Add the `java` Bucket

JDKs live in Scoop's dedicated `java` bucket, not in `main`. In a **normal (non-admin)** PowerShell window:

```powershell
scoop bucket add java
```

This bucket hosts all major Java distributions: Oracle JDK, OpenJDK, Eclipse Temurin, Azul Zulu, Amazon Corretto, GraalVM, and more.

## Step 2 — Search for Oracle JDK 21

```powershell
scoop search jdk21
```

You will see options such as:

| Package | Distribution |
|---|---|
| `oraclejdk21` | **Oracle JDK 21** (what we want) |
| `openjdk21` | Oracle's open-source OpenJDK build |
| `temurin21-jdk` | Eclipse Temurin (community OpenJDK) |
| `zulu21-jdk` | Azul Zulu |
| `corretto21` | Amazon Corretto |

## Step 3 — Install Oracle JDK 21

```powershell
scoop install oraclejdk21
```

What happens (all without admin):

1. Oracle JDK 21 is downloaded and extracted to `C:\Users\<username>\scoop\apps\oraclejdk21\<version>\`
2. Shims for `java`, `javac`, `jshell`, `jar`, and other JDK tools are created in `C:\Users\<username>\scoop\shims\`
3. The java-bucket manifest sets a **user-scope `JAVA_HOME`** pointing inside your Scoop folder — no machine-wide env changes, no admin
4. **No UAC prompt appears** — nothing is installed to `C:\Program Files\Java` and nothing is written to the registry

> **License note:** Oracle JDK 21 is distributed under the Oracle No-Fee Terms and Conditions (NFTC) — free to use, including in production. If your organization requires a GPL-classpath JDK instead, install `temurin21-jdk` or `openjdk21` with the same steps.

## Step 4 — Verify the Installation

Close and reopen PowerShell, then run:

```powershell
java --version
javac --version
echo $env:JAVA_HOME
where.exe java
```

Expected output:

```
java 21.x.x 2026-xx-xx LTS
javac 21.x.x
C:\Users\<username>\scoop\apps\oraclejdk21\current
C:\Users\<username>\scoop\shims\java.exe
```

## Step 5 — Compile and Run a Program (Full JDK Smoke Test)

This proves both the runtime (`java`) and the compiler (`javac`) work:

```powershell
mkdir hello-java; cd hello-java
```

Create `Hello.java` containing:

```java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello from Oracle JDK 21 installed via Scoop!");
    }
}
```

Then compile and run:

```powershell
javac Hello.java
java Hello
```

Expected output: `Hello from Oracle JDK 21 installed via Scoop!`

## Step 6 — Try a Modern Java 21 Feature (Optional)

JDK 21 introduced virtual threads. A quick taste:

```java
public class VThread {
    public static void main(String[] args) throws Exception {
        Thread.startVirtualThread(() ->
            System.out.println("Running on a virtual thread!"));
        Thread.sleep(100);
    }
}
```

Compile and run it the same way (`javac VThread.java` then `java VThread`).

---

## Useful Scoop Commands for JDKs

| Command | Purpose |
|---|---|
| `scoop install oraclejdk21` | Install Oracle JDK 21 |
| `scoop install temurin21-jdk` | Install Temurin 21 instead |
| `scoop update oraclejdk21` | Upgrade to the latest 21.x patch |
| `scoop reset oraclejdk21` | Re-activate this JDK if several are installed |
| `scoop uninstall oraclejdk21` | Remove the JDK cleanly |

## Troubleshooting (No-Admin Context)

| Problem | Fix (no admin needed) |
|---|---|
| `java` not recognized | Reopen PowerShell so shims PATH refreshes |
| `JAVA_HOME` empty | `scoop reset oraclejdk21`; if still unset: `[Environment]::SetEnvironmentVariable('JAVA_HOME', (scoop prefix oraclejdk21), 'User')` |
| Multiple JDKs installed, wrong one active | `scoop reset <jdk-package>` switches the shims |
| Maven/Gradle can't find Java | They read `JAVA_HOME` — verify with Step 4 |
| Oracle download blocked on corporate network | Install `temurin21-jdk` or `openjdk21` instead |

> **Tip:** Scoop-managed JDKs install side by side (e.g., `oraclejdk21` and `temurin17-jdk` can coexist). The active one is whichever was last `scoop reset`.

---

## ✅ Task 04 — Completion Checklist

- [ ] `scoop bucket add java` succeeded
- [ ] `scoop search jdk21` listed Oracle JDK 21
- [ ] `scoop install oraclejdk21` completed with **no UAC/admin prompt**
- [ ] `java --version` shows `21.x.x LTS`
- [ ] `javac --version` shows the compiler version
- [ ] `$env:JAVA_HOME` points inside `C:\Users\<username>\scoop\`
- [ ] Compiled and ran `Hello.java` successfully

**Done with Task 04?** → Move on to `task-05.md`
