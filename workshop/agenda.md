# OpenClaw Workshop Agenda

## Goal

Help a product and engineering team understand why OpenClaw has traction, what product choices made it work, how to install it, and how to think about safe first-use cases.

## 1. Opening: what OpenClaw is

Suggested framing:

- OpenClaw is best understood as a personal AI assistant you run on your own devices.
- The gateway is just the control plane. The product is the assistant experience across channels, tools, and always-on context.
- It feels more like a system you live with than a single chat box.

Questions to open with:

- What would we want an always-on personal agent to do for our team?
- Where does a chat UI stop being enough?
- What happens when the "assistant" is reachable from the places we already work?

## 2. Why it seems successful

Suggested product and design choices to highlight:

- **Product-first positioning**: it is sold as "your assistant", not "a framework".
- **Own-device, local-first posture**: that lowers psychological friction for experimentation.
- **Multi-surface distribution**: chat apps, browser, dashboard, voice, device nodes.
- **Onboarding matters**: `openclaw onboard --install-daemon` is a strong "first five minutes" choice.
- **Control plane separation**: gateway, config, workspace, channels, and tools are conceptually distinct.
- **Extensibility without requiring everyone to be a framework engineer**: skills, plugins, channels, and tools.
- **Always-on feel**: daemonized gateway makes it feel like a product, not a script.

What to say explicitly:

- A lot of agent products fail because they make users assemble primitives.
- OpenClaw appears to win by packaging the primitives into a coherent operator experience.

## 3. Simple agent goals for an internal team

Use these as examples that are useful but not scary:

- inbox triage assistant
- meeting-to-actions assistant
- customer research summarizer
- release checklist copilot
- bug reproduction helper
- incident update drafter
- personal "what should I do next?" assistant

Good heuristic for the workshop:

- start with agents that summarize, route, draft, and remind
- delay agents that mutate production systems until trust and guardrails are clear

## 4. Live install section

Recommended flow:

1. Run `./scripts/check-prereqs.sh`
2. Install OpenClaw
3. Run onboarding
4. Verify gateway status
5. Open dashboard
6. Send one message

Keep the live goal small:

- "Get one person from zero to first reply"

Do not try to demo every channel.

## 5. Security section

Questions you should be ready for:

- Can it read my files?
- Can it run shell commands?
- What happens if the model is prompt-injected?
- How do approvals work?
- Is local-first actually safer?
- How should we roll this out inside a company?

High-level answer shape:

- default to local and personal use first
- treat inbound messages as untrusted
- keep execution gated
- prefer allowlists and approvals for host exec
- separate workspace data from secrets
- start with read-heavy use cases before write-heavy automation

## 6. Optional ecosystem slide

If you want a short comparative slide, you can mention adjacent or related Claw projects you want to namecheck, for example `NemoClaw`, but verify the current naming and scope before presenting.

The point of the slide should be:

- OpenClaw is not just one CLI
- there is an ecosystem and a philosophy around agent surfaces, tools, and runtimes

## 7. Close

End with a concrete exercise:

- pick one narrow personal workflow
- define the inputs
- define the allowed actions
- define one thing the agent must never do
- run it for a week before expanding scope
