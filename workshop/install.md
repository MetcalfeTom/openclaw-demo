# Install and First Run

## Prerequisites

- Node.js 22.14+ (Node 24 recommended)
- An API key from a supported provider (Anthropic recommended)
- macOS, Linux, or Windows via WSL2

Check with:

    node --version

Or run the repo's prereq check:

    ./scripts/check-prereqs.sh

## Step 1: Install the CLI

    curl -fsSL https://openclaw.ai/install.sh | bash

Windows (PowerShell):

    irm https://openclaw.ai/install.ps1 | iex

## Step 2: Run onboarding

    openclaw onboard --install-daemon

This walks you through:
- Model provider and API key (Anthropic, OpenAI, or others)
- Gateway configuration (port, auth, bind address)
- Optional channels (Telegram, WhatsApp, Discord)
- Background daemon install (LaunchAgent on macOS, systemd on Linux)

Keep token auth enabled. Accept the default port (18789).

## Step 3: Verify the gateway

    openclaw gateway status

You should see the gateway running and connected.

For a deeper check:

    openclaw status --deep

## Step 4: Open the dashboard

    openclaw dashboard

This opens the Control UI in your browser. If it loads, the gateway is working.

## Step 5: Send one message

Type something in the dashboard chat. Get a reply. That's it - you're running.

## Step 6: Connect your phone

Telegram (recommended for the workshop):

1. Open Telegram, search for @BotFather
2. Send `/newbot`, follow the prompts, get a bot token
3. Paste the token when the onboard wizard asks for channels (or run `openclaw configure` to add it after)
4. Message your bot on Telegram

WhatsApp: The onboard wizard shows a QR code. Scan it with WhatsApp on your phone.

The goal for this workshop: first reply in the dashboard, then on your phone.

## Troubleshooting

**"command not found" after install**: Restart your terminal or source your shell profile.

**Legacy config detected**: If the onboarding wizard finds an old `openclaw.json`, it will ask you to Keep, Modify, or Reset. Choose Reset for a clean start.

**npm / sharp install failure**: Make sure you're on Node 22.14+ or Node 24. Older versions cause native module build failures.

**Gateway won't start on Linux**: The daemon needs `loginctl enable-linger` for your user. The wizard tries this automatically but may need sudo.

**WhatsApp QR code won't scan**: Use the Telegram channel instead for the workshop. It's faster to set up (just a bot token).
