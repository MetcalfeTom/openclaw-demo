# OpenClaw Security FAQ

This is the workshop version: practical, plain-English, and biased toward cautious rollout.

## Is local-first actually safer?

Usually, yes, but only in a specific sense.

Running an assistant on your own device reduces exposure to a shared hosted control plane and gives you tighter control over files, credentials, and runtime behavior. It does **not** magically make the agent safe. You still need boundaries around tools, approvals, secrets, and untrusted inputs.

## What should I say when people ask "can it read my files?"

Say:

- it can access files the local runtime and configured tools can reach
- that is exactly why scope and guardrails matter
- the right first step is not "give it everything"
- the right first step is a narrow workspace plus a narrow use case

Good recommendation for a first rollout:

- keep work in `~/.openclaw/workspace`
- do not point it at broad sensitive directories by default
- treat secrets, tokens, and personal credentials as separate protected material

## Can it run shell commands?

Yes, depending on tool policy and host approvals.

The important nuance is that host execution is supposed to be governed by more than one layer:

- tool policy
- approvals policy on the execution host
- optional sandboxing and elevated-mode gates

The effective policy is the stricter combination, which is a good thing.

## What is a good default stance on exec?

For a workshop or first-time internal adoption:

- prefer `allowlist` over `full`
- prefer `ask: on-miss` or `ask: always`
- avoid "YOLO mode" for newcomers
- do not auto-trust interpreters as "safe bins"

This lets people experience real capability without normalizing reckless defaults.

## What about prompt injection?

Treat all inbound content as untrusted, especially DMs and copied web content.

The answer should not be "trust the model to be smart." The answer should be:

- keep permissions narrow
- gate risky actions
- separate read-only use cases from write-heavy or destructive ones
- require approvals when the blast radius matters

## Are messaging channels risky?

Yes. Any real messaging surface becomes an input surface.

One useful talking point from the docs:

- unknown inbound DMs can be handled with pairing flows instead of being trusted automatically

That is a good example of product design that turns a security concern into an understandable user workflow.

## What should we tell the team about secrets?

Tell them:

- do not treat the assistant workspace like a secret vault
- keep credentials and sensitive tokens separate
- be intentional about what directories or tools the assistant can touch
- review any plugin, skill, or extension the same way you would review third-party code

## How should a team start?

Suggested rollout:

1. personal machines, not shared production hosts
2. summarization and drafting tasks first
3. narrow workspaces
4. approvals on for host exec
5. explicit review before enabling higher-trust automations

## Short answer for leadership

OpenClaw is powerful because it can touch real systems. That same fact is the risk. The right way to adopt it is not to pretend it is harmless, but to narrow scope, keep approvals on, treat inputs as untrusted, and earn more autonomy over time.
