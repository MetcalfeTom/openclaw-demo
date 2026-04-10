# Simple Agent Ideas For An Internal Team

The workshop should bias toward small, boring, high-leverage agents.

## Good first agent shapes

### 1. Inbox triage assistant

Goal:

- summarize inbound threads
- classify urgency
- draft a reply
- suggest whether to reply, schedule, or ignore

Why this is a good first agent:

- high leverage
- mostly read-heavy
- human stays in the loop

### 2. Meeting-to-actions assistant

Goal:

- turn notes or transcript snippets into actions
- group by owner
- pull out decisions, risks, and follow-ups

Why it works:

- easy to evaluate
- low blast radius
- makes the value obvious fast

### 3. Customer research summarizer

Goal:

- digest call notes, support feedback, and user quotes
- cluster themes
- produce product takeaways

Why it works:

- good fit for LLM strengths
- avoids risky write automation

### 4. Release checklist copilot

Goal:

- turn a loose release plan into a checklist
- spot missing validation steps
- draft rollout and rollback notes

Why it works:

- it structures thinking
- it supports humans rather than replacing them

### 5. Bug reproduction helper

Goal:

- take a bug report
- propose repro steps
- ask for the missing info
- summarize likely causes

Why it works:

- strong internal value
- still bounded enough to be safe

## Agent goals to ask each attendee

Ask everyone to answer:

1. What input does your agent read?
2. What output should it produce?
3. What actions may it take without asking?
4. What actions must always require approval?
5. What data must it never touch?

## Heuristic for choosing workshop examples

Prefer:

- summarize
- classify
- route
- draft
- remind

Delay:

- delete
- purchase
- deploy
- modify production systems
- send irreversible external messages automatically

## Prompting pattern for a simple personal agent

Useful framing:

- define the role
- define allowed inputs
- define allowed actions
- define disallowed actions
- define output format

The more operational the task, the more explicit the policy needs to be.
