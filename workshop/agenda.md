# Speaker Notes

Companion to the slide deck (`slides/`). Open both: the presentation full-screen, these notes on a second screen or printed.

---

## Section 1: The Origin Story (slides 1-4, ~8 min)

### Slide 1 - Title

Just the title. Let people settle.

### Slide 2 - Contents

Quick overview of the six sections. Don't linger.

### Slide 3 - "It started as a one-hour hack"

Key points:
- Peter Steinberger. Austrian developer. Spent 13 years building PSPDFKit (PDF framework, enterprise software). Semi-retired, financially free, started exploring AI for fun.
- The first prototype was literally one hour of work: glue code between WhatsApp and Claude. "I just wanted a personal assistant I could text."
- Originally called Clawdbot (tribute to Claude), then Moltbot (lobster molting), then OpenClaw.
- Went viral in January 2026. 250k+ GitHub stars. Fastest-growing open-source repo in GitHub history.
- February 2026: Steinberger joins OpenAI. OpenClaw moves to a foundation.
- His framing: "I could totally see how OpenClaw could become a huge company. And no, it's not really exciting for me. I'm a builder at heart."

### Slide 4 - "It feels like hiring an employee"

Let the quote sit. Then:

Ask the room: "How many of you have used ChatGPT or Claude and wished it could just *do* the thing instead of telling you how to do it?"

Transition: "So what makes it feel different? Let's look at how it actually works."

---

## Section 2: How It Actually Works (slides 5-11, ~10 min)

### Slide 5 - The Workspace

Key points:
- The workspace is a folder of plain markdown files. That's it. No database, no config panel.
- The agent reads these files every time it wakes up. Change a file, change the agent.
- Click through each file in the interactive tree. Highlight:
  - AGENTS.md - loaded first, survives context resets
  - SOUL.md - personality injected with "embody this persona" hint
  - HEARTBEAT.md - default 30 min, empty = skipped
  - MEMORY.md - not auto-created, agent builds it organically

Ask product people: "Notice this is all just text files. No API, no schema, no migration. You edit a markdown file and the agent changes."

### Slide 6 - SOUL.md

The example snippet is from Steinberger's tweet about making your agent less boring. The Karpathy quote lands the point: personality as a first-class primitive.

Mention: one user runs three personas - Morty (sidekick), David Goggins (workout coach), Pepper Potts (chief of staff). It's a character sheet.

Link to soul.md if anyone wants to explore after.

### Slide 7 - MEMORY.md (dark)

Key point: not just chat history compression. The agent builds this file organically over time. The difference between amnesia and accumulated state.

Daily logs in `memory/YYYY-MM-DD.md` for working notes. MEMORY.md for things that matter across weeks and months.

### Slide 8 - USER.md

Quick - everything about you. Timezone, preferences, tools. Static context. The agent reads it on every boot.

### Slide 9 - AGENTS.md

If SOUL.md is who, AGENTS.md is how. Session startup procedures, red lines, guardrails. Key detail: "Session Startup" and "Red Lines" sections survive context compaction - the agent never forgets its guardrails.

### Slide 10 - HEARTBEAT.md (dark)

Animated diagram plays automatically. Key point: this is what makes it proactive instead of reactive.

"A cron job says do X at 9am. Heartbeat says wake up, check your list, decide if anything matters."

Default 30 minutes. Configurable per-agent. If nothing needs attention, silent OK. No notification spam.

### Slide 11 - "Apps will melt away"

Peter in the YC interview: "Why do I need My Fitness Pal? My agent already knows I'm making bad decisions."

The struck-through app pills are the visual punchline. "One chat thread" is what replaces them.

Ask the room: "How many apps on your phone are basically just a UI over a database that an agent could manage for you?"

---

## Section 3: What Would You Actually Use It For? (slide 12, ~10 min)

### Slide 12 - Agent Ideas Grid

Walk through the cards. Mix of personal use cases you can speak to firsthand (DJing, health patterns, grocery shopping) and community examples (marketing agent, chief of staff, inbox triage).

The point: these are boring and useful, not sci-fi.

Ask the room: "Which of these would save you the most time this week?"

Key message: "The entry point isn't writing code. It's writing a paragraph in HEARTBEAT.md describing what you want checked and when."

---

## Section 4: Safety (slides 13-14, ~12 min)

### Slide 13 - Safety stats

Two numbers: 341 malicious skills (12%), 30k+ exposed instances.

Key points:
- ClawHub had no code review, no signing, no verification. Anyone with a week-old GitHub account could publish.
- The malicious skills actually worked - real functionality while silently stealing credentials.
- This is the core lesson for anyone building a similar product: an unvetted skill marketplace is a supply chain attack waiting to happen.

### Slide 14 - Deploy safely

Four items. Walk through each:
1. Don't install skills you haven't read the source of
2. Start read-only: summarize, draft, classify
3. Never put secrets in workspace files
4. Update to latest stable release

Ask: "If you were rolling this out at your company, which of these would be hardest to enforce?"

---

## Section 5: Models & Getting It Running (slides 15-16, ~15 min)

### Slide 15 - Switch models, not wallets

Quick practical advice before the install. Key point: type `/model` in Telegram to switch on the fly.

For the workshop install, people can use:
- Claude Max subscription (most of the team has this - use Anthropic OAuth)
- GCP/Bedrock credits if available
- Ollama with gemma4:26b for a free alternative

Most people use Sonnet as default and Haiku for heartbeats. That alone cuts costs 60%+.

### Slide 16 - Getting it running

This is the live section. Engineers follow along on their laptops. Product people watch.

Five steps:
1. Install the CLI
2. Run onboarding (walks through model auth, gateway, channels)
3. Verify gateway
4. Open dashboard, send first message
5. Connect Telegram or WhatsApp

Telegram is fastest - create a bot via @BotFather, paste the token during onboard. WhatsApp uses a QR code.

Keep the goal small. "First reply in the dashboard, then on your phone."

If things break: check `workshop/install.md` for troubleshooting.

---

## Section 6: Your First Agent (slides 17-18, ~5 min)

### Slide 17 - The Exercise

End with a concrete exercise everyone can take home:
1. Pick one narrow personal workflow
2. Define the inputs (what does the agent read?)
3. Define the allowed actions (what can it do?)
4. Define one thing the agent must never do
5. Run it for a week before expanding scope

Remind: "Start with one agent, one domain."

### Slide 18 - Close

Garry Tan quote from the Lightcone podcast. Let it land.

Links to share:
- OpenClaw docs: https://docs.clawd.bot
- OpenClaw GitHub: https://github.com/openclaw/openclaw
- Karpathy on No Priors (transcript)
- Steinberger's "Just Talk To It" blog
