# Install OpenClaw For The Workshop

This guide is intentionally narrow. The goal is not to master every OpenClaw surface. The goal is to get from zero to a running local assistant.

## Prereqs

- Node.js 24 recommended
- Node.js 22.14+ supported
- one model provider API key

Check what you have:

```bash
./scripts/check-prereqs.sh
```

## Fastest setup

### macOS / Linux

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

### Windows PowerShell

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

## Onboard

Run the guided setup:

```bash
openclaw onboard --install-daemon
```

What onboarding should do:

- choose a model provider
- store the needed auth
- configure the gateway
- install the gateway daemon so it stays running

## Verify the gateway

```bash
openclaw gateway status
```

You want to see the gateway up and listening on the default port.

## Open the dashboard

```bash
openclaw dashboard
```

If the Control UI opens, the local control plane is working.

## Send the first message

Start in the dashboard UI and send a plain prompt such as:

```text
Summarize what OpenClaw is in one paragraph and suggest one useful personal workflow for me.
```

## Useful follow-up commands

```bash
openclaw health
openclaw doctor
```

Use `health` for basic sanity. Use `doctor` when something feels misconfigured or risky.

## Important mental model

- config lives in `~/.openclaw/openclaw.json`
- workspace lives in `~/.openclaw/workspace`
- credentials and local state also live under `~/.openclaw/`

That separation is useful because your personal tailoring and state live outside the source repo.

## If you want to build from source later

```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw
pnpm install
pnpm ui:build
pnpm build
pnpm openclaw onboard --install-daemon
```

## Workshop fallback plan

If live installs go sideways:

1. have one machine already fully working
2. have one person screen-share a successful onboarding flow
3. move the rest of the audience to paired follow-up after the talk

The workshop should not fail just because package-manager setup on one laptop is cursed.
