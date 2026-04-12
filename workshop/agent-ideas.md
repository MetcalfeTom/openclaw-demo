# Simple Agent Ideas

Each of these is something one person can set up in an afternoon. Start with one.

---

## Daily Briefing

**What:** Every morning, your agent scans your calendar and task list, then sends you a summary with a realism check.

**How:** Add a check to HEARTBEAT.md. Connect calendar via a skill or API. The agent evaluates whether your day is overloaded and tells you.

**HEARTBEAT.md snippet:**
```
Every weekday at 7:30am:
- Read today's calendar events
- Read open tasks from the task list
- If total estimated time exceeds 8 hours, flag it
- Send me a morning briefing via Telegram
```

**Difficulty:** Easy. This is the recommended first agent for most people.

---

## Research Digest

**What:** Your agent searches for new content on topics you care about and sends you a summary on a schedule.

**How:** Add a recurring check to HEARTBEAT.md. Use a web search skill or browser skill to find recent articles/papers, summarize them, and message you.

**HEARTBEAT.md snippet:**
```
Every 12 hours:
- Search for recent articles on [your topic here]
- Pick the top 3 most relevant
- Summarize each in 2-3 sentences
- Send the digest to me via Telegram
```

**Difficulty:** Easy. No sensitive data, no write access needed.

---

## Inbox Triage

**What:** Your agent monitors your email, classifies messages by urgency, and sends you a summary. Optionally drafts replies.

**How:** Connect email via a skill or forwarding. Start read-only -- classification and summary only. Add draft replies later once you trust it.

**HEARTBEAT.md snippet:**
```
Every 30 minutes:
- Check for new unread emails
- Classify each as: urgent, needs response, informational, spam
- Send me a summary of anything urgent or needing response
- Do NOT send any replies without my approval
```

**Difficulty:** Medium. Email access is sensitive -- start read-only. Use deterministic (code-based) sender filtering, not LLM-based.

---

## Weekly Review

**What:** At the end of each week, your agent reviews what you did vs. what you planned, spots patterns, and sends a reflection prompt.

**How:** The agent reads your daily notes/logs and task completions, then synthesizes a summary.

**HEARTBEAT.md snippet:**
```
Every Friday at 5pm:
- Review this week's daily memory logs
- Compare completed tasks vs. planned tasks
- Identify what slipped and any recurring patterns
- Send me a weekly review summary and ask if I want to add reflections
```

**Difficulty:** Easy. One user went from doing weekly reviews 25 out of 56 weeks to never missing one.

---

## Learning Quizzer

**What:** Your agent reviews articles or courses you've logged and quizzes you on them -- like Duolingo for whatever you're studying.

**How:** Log what you read in your workspace (or Obsidian vault). A recurring heartbeat reviews recent entries and generates conversational quiz questions.

**HEARTBEAT.md snippet:**
```
Every Tuesday and Thursday at 12pm:
- Review articles and notes logged this week
- Generate 3-5 conversational questions testing recall and understanding
- Send them to me via Telegram
- Log my responses and track which topics I struggle with
```

**Difficulty:** Easy-Medium. No sensitive data. The value compounds over time.

---

## Workout Check

**What:** Your agent checks your calendar for scheduled workouts and pings you if nothing is planned for tomorrow.

**How:** Calendar access plus a simple conditional check.

**HEARTBEAT.md snippet:**
```
Every evening at 8pm:
- Check tomorrow's calendar for any workout or gym entry
- If nothing is scheduled, send me a reminder to plan one
- On workout days, remind me what the routine is
```

**Difficulty:** Easy. Low risk, low setup.

---

## Release Checklist Copilot

**What:** Given a list of PRs or a release branch, your agent drafts a release checklist, highlights risks, and drafts rollback notes.

**How:** The agent reads PR summaries or git logs and produces structured output. No deployment access needed.

**HEARTBEAT.md snippet:**
```
When I say "prepare release":
- Read the PR list for the current release branch
- Draft a release checklist with validation steps
- Highlight any PRs that touch critical paths (auth, payments, data)
- Draft rollback notes
- Send the checklist to me for review
```

**Difficulty:** Medium. Useful for engineering teams. Keep it read-only -- no deploy access.

---

## Incident Update Drafter

**What:** During an incident, your agent monitors a thread and drafts periodic status updates for stakeholders.

**How:** Point it at an incident channel or thread. It summarizes the current state and drafts a customer-facing update.

**HEARTBEAT.md snippet:**
```
While incident is active, every 15 minutes:
- Read the latest messages in the incident thread
- Summarize current status, what's been tried, what's next
- Draft a stakeholder update in plain language
- Send the draft to me for approval before posting
```

**Difficulty:** Medium. Approval-gated. Useful under pressure when writing updates is the last thing you want to do.
