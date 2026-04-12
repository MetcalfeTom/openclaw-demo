# Security FAQ

Questions you should be ready for -- and honest answers.

## Can OpenClaw read my files?

Yes. The agent has access to everything in its workspace directory (default `~/.openclaw/workspace/`). It reads SOUL.md, MEMORY.md, daily logs, and any other file you put there. If you give it a skill with filesystem access, it can reach beyond the workspace too.

Scope it narrowly. Don't point it at your home directory. Don't put credentials in workspace files.

## Can it run shell commands?

Yes, if a skill or tool grants that access. Skills run with the agent's full permissions -- there is no sandbox by default. This is what makes it powerful and what makes it dangerous.

Gate execution. Use allowlists. Prefer read-heavy workflows (summarize, draft, classify) before write-heavy ones (send email, deploy, delete).

## What happened with ClawHub?

In early February 2026, seven independent security firms found hundreds of malicious skills on ClawHub, OpenClaw's public skill marketplace.

The numbers:
- Koi Security (ClawHavoc report): 341 confirmed malicious out of 2,857 audited -- roughly 12%
- Bitdefender: ~900 malicious out of ~4,500 -- roughly 20%
- Snyk: 76 confirmed malware payloads, 1,467 skills with security issues out of 3,984

The payloads included Atomic Stealer (macOS credential/crypto theft), keyloggers, token harvesters, and prompt injection payloads embedded in skill descriptions. The most-downloaded malicious skill was a cryptocurrency stealer.

Anyone with a GitHub account older than one week could publish to ClawHub. No code review, no signing, no verification.

Since then: VirusTotal scanning was added (Feb 8, 2026), the SecureClaw audit tool was released, and a verified skill screening pipeline is being built. But the trust model is still "audit everything yourself" for anything serious.

## What about CVE-2026-25253?

A separate vulnerability (CVSS 8.8) in OpenClaw itself, patched in v2026.1.29 (January 30, 2026). It allowed a malicious server connection to leak tokens and enable remote code execution. If you're running anything older than v2026.1.29, update immediately.

## How many OpenClaw instances were exposed?

Between late January and early February 2026:
- Bitsight tracked 30,000+ exposed instances worldwide
- SecurityScorecard reported 40,214 internet-exposed instances
- 35-63% were flagged as vulnerable (depending on the source)

Many users deployed the gateway bound to 0.0.0.0 (all interfaces) instead of 127.0.0.1 (loopback only), making them reachable from the internet.

## Is local-first actually safer?

Safer than sending everything to a cloud service, yes. Your data stays on your hardware. But "local" does not mean "secure" if:
- The gateway is exposed to the internet
- You install unreviewed skills from ClawHub
- You store API keys in plain text in workspace files
- You skip token auth on the gateway

Local-first is a good starting position. It's not a finish line.

## How do approvals work?

OpenClaw supports allowlists and approval prompts for risky operations. You can configure which tools require explicit confirmation before execution. The AGENTS.md file can define approval gates for specific action categories.

In practice: start with everything requiring approval, then selectively relax as you build trust in specific workflows.

## How should a team roll this out?

1. One person installs it first. Not a shared instance -- a personal one.
2. Start with a read-only use case: daily briefings, research summaries, meeting note extraction.
3. Don't install any ClawHub skills you haven't read the source of. Write your own, or go without.
4. Bind the gateway to 127.0.0.1. Keep token auth enabled. Use Tailscale if you need remote access.
5. Run SecureClaw. Treat its findings as blocking.
6. Expand to write-heavy workflows only after the read-only ones are stable and trusted.
7. Never put secrets (API keys, tokens, passwords) in MEMORY.md or any workspace file the agent reads/writes.

## What about prompt injection?

This is a fundamental limitation of how LLMs process information right now. There is no separation between control instructions and data -- it's all one stream of text.

If your agent reads an email containing hidden instructions, it may follow them. One user had their agent respond to prompt-injected emails using their credentials. Meta's Chief of AI Safety had to physically unplug her Mac Mini to stop her OpenClaw instance from deleting emails after a prompt injection.

Mitigations:
- Use deterministic (code-based) filters for inbound messages, not LLM-based filtering
- Treat all inbound data as untrusted
- Don't give the agent write access to systems where prompt injection could cause real damage
- Require approval for any action that sends data externally
