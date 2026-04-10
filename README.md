# openclaw-demo

Workshop repo for a 1-hour session on OpenClaw.

The repo is organized around the outcomes for the workshop:

- explain OpenClaw as a product, not just a CLI
- highlight the design choices that seem to have driven adoption
- help the team install it on their own machines
- give people practical starter ideas for simple agents
- answer the obvious security questions without hand-waving

## Suggested 60-minute flow

1. `0-10 min` - what OpenClaw is and why it stands out
2. `10-20 min` - product and design choices worth stealing
3. `20-30 min` - simple agent ideas for a product and engineering team
4. `30-45 min` - install and first-run walkthrough
5. `45-55 min` - security Q&A
6. `55-60 min` - next steps and individual experiments

## Repo contents

- `workshop/agenda.md` - detailed talk track for the 1-hour session
- `workshop/install.md` - install and first-run walkthrough
- `workshop/security-faq.md` - practical security answers
- `workshop/agent-ideas.md` - concrete agent ideas for a product and engineering team
- `examples/simple-agent-goals.yaml` - lightweight starter prompts and goals
- `scripts/check-prereqs.sh` - sanity check before the install section

## Fast start

Check local prerequisites:

```bash
./scripts/check-prereqs.sh
```

Then follow:

```bash
open workshop/install.md
```

## Source grounding

The initial material in this repo was seeded from the current OpenClaw docs and README, especially:

- install and onboarding
- getting started flow
- workspace and config layout
- exec approvals and host-exec guardrails

Before the workshop, it is worth doing one final pass against the latest upstream docs in case commands or defaults have moved.
