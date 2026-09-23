# Generic Onboarding Email — Learning Repo + Tracking Sheet

**Purpose:** send to a new learner (associate/intern/mentee) to onboard them to the `aws-cloud-engineer-with-nodejs` roadmap and the Programiz JavaScript tracking sheet.

**Placeholders to replace before sending:**

| Placeholder | Replace with | Example |
|---|---|---|
| `{{LEARNER_FIRST_NAME}}` | Learner's first name | Sindhu |
| `{{RECIPIENT_EMAILS}}` | Recipient email list | makkasindhuja0@gmail.com |
| `{{SENDER_NAME}}` | Your name | Sri Cloud Share |
| `{{SENDER_EMAIL}}` | Your email | cloud.share360@gmail.com |
| `{{TRACKING_TOPIC}}` | Subject of the tracking sheet (optional) | JavaScript (Programiz) |

---

**From:** {{SENDER_NAME}} <{{SENDER_EMAIL}}>
**To:** {{RECIPIENT_EMAILS}}
**Subject:** Getting started — learning roadmap + daily tracking sheet

---

Hi {{LEARNER_FIRST_NAME}},

To make things easier to follow, I have documented everything here: [cloudshare360/aws-cloud-engineer-with-nodejs](https://github.com/cloudshare360/aws-cloud-engineer-with-nodejs).

Here is how to get started:

1. **Task Order:** Check the [todo-task](https://github.com/cloudshare360/aws-cloud-engineer-with-nodejs/tree/main/todo-task) folder to see the recommended order for implementing each task.
2. **{{TRACKING_TOPIC}} Tracking:** Based on the Programiz website, I created a tracking sheet to break down each task: [Programiz-JavaScript-Tracking-Sheet](https://docs.google.com/spreadsheets/d/1LGqEJ6FlUa5u6STiqpFl9w1AVbxcUklj/edit?gid=95527326#gid=95527326).
3. **Using the Sheet:**
   - Make a copy of the Google Sheet and add your name to it.
   - Review the topics, then enter your planned start and end dates.
   - Update the actual start and end dates on a daily basis.

**Why use this tracking sheet?**
This tool will help you track your daily commitments, measure your progress, and better estimate the time needed for future client tasks.

**Tips for pacing:**

- Start with an initial commitment of 1 hour per day (7 hours a week).
- Periodically review what you committed to versus what you accomplished. This will help you learn how to prioritize at your own pace.
- If you are unable to make progress on a given day, simply skip that day and move forward.

Best regards,
{{SENDER_NAME}}

---

## Plain-text fallback (paste into Gmail "Plain text mode")

```
Hi {{LEARNER_FIRST_NAME}},

To make things easier to follow, I have documented everything here:
https://github.com/cloudshare360/aws-cloud-engineer-with-nodejs

Here is how to get started:

1. Task Order: Check the todo-task folder to see the recommended order
   for implementing each task:
   https://github.com/cloudshare360/aws-cloud-engineer-with-nodejs/tree/main/todo-task
2. Tracking: Based on the Programiz website, I created a tracking sheet
   to break down each task:
   https://docs.google.com/spreadsheets/d/1LGqEJ6FlUa5u6STiqpFl9w1AVbxcUklj/edit?gid=95527326#gid=95527326
3. Using the Sheet:
   - Make a copy of the Google Sheet and add your name to it.
   - Review the topics, then enter your planned start and end dates.
   - Update the actual start and end dates on a daily basis.

Why use this tracking sheet?
This tool will help you track your daily commitments, measure your
progress, and better estimate the time needed for future client tasks.

Tips for pacing:
- Start with an initial commitment of 1 hour per day (7 hours a week).
- Periodically review what you committed to versus what you accomplished.
  This will help you learn how to prioritize at your own pace.
- If you are unable to make progress on a given day, simply skip that
  day and move forward.

Best regards,
{{SENDER_NAME}}
```

## Send checklist

- [ ] All `{{placeholders}}` replaced (no `{{` left in the final email)
- [ ] Links open correctly in an incognito window (repo public, Sheet shareable)
- [ ] Recipient(s) added; no unintended CCs
- [ ] Subject line specific enough to find later (e.g., "Getting started — JS roadmap + daily tracker")
