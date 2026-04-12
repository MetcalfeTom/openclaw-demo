# openclaw-demo

Workshop repo for a 1-hour session on OpenClaw. For a mixed audience of engineers and product people — some already familiar with OpenClaw, some encountering it for the first time.

## Running the presentation

```bash
cd slides
npm install
npm run dev
```

Open the URL in your browser and go full-screen. Navigate with arrow keys or click left/right halves of the screen. Press `f` for fullscreen.

## Talk structure

1. `0-8 min` — the origin story: one-hour hack to 250k GitHub stars
2. `8-18 min` — how it actually works: workspace files, Gateway, Heartbeat
3. `18-28 min` — what would you actually use it for? Dead-simple first-agent ideas
4. `28-40 min` - safety: ClawHavoc, malicious skills, and how to deploy safely
5. `40-55 min` — getting it running: live install, goal is one reply in the dashboard
6. `55-60 min` — your first agent: pick a workflow, define boundaries, run for a week

## Repo contents

- `slides/` — interactive presentation app (React + Vite, open in browser)
- `workshop/agenda.md` — speaker notes keyed to slide numbers
- `workshop/security-faq.md` — honest security Q&A with real incident data
- `workshop/install.md` — step-by-step install and first-run walkthrough
- `workshop/agent-ideas.md` — eight concrete agent ideas with HEARTBEAT.md snippets
- `examples/simple-agent-goals.yaml` — copy-pasteable agent definitions
- `scripts/check-prereqs.sh` — prerequisite check for the install section

## Prerequisites check

```bash
./scripts/check-prereqs.sh
```

## Sources

Grounded in primary sources, not product marketing:

- Peter Steinberger's blogs: [Just Talk To It](https://steipete.me/posts/2025/just-talk-to-it), [Shipping at Inference-Speed](https://steipete.me/posts/2025/shipping-at-inference-speed), [OpenClaw, OpenAI and the future](https://steipete.me/posts/2026/openclaw)
- Karpathy on No Priors: [transcript](https://podscripts.co/podcasts/no-priors-artificial-intelligence-technology-startups/andrej-karpathy-on-code-agents-autoresearch-and-the-loopy-era-of-ai)
- Steinberger YC interview: [Why 80% Of Apps Will Disappear](https://www.youtube.com/watch?v=4uzGDAoNOZc)
- ClawHavoc report (Koi Security, Feb 2026), CVE-2026-25253
- Community reports: [A Week with OpenClaw](https://sajalsharma.com/posts/openclaw-experiments/), [I Let an AI Agent Run My Freelance Life](https://dev.to/sudo_091/i-let-an-ai-agent-run-my-freelance-life-it-almost-burned-it-down-10c5)

Before the workshop, do one final pass against the [latest OpenClaw docs](https://docs.clawd.bot) in case commands or defaults have moved.
