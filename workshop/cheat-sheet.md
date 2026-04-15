# Cheat Sheet

Copy-paste these into Slack as needed.

## Install

Open terminal on mac

```
curl -fsSL https://openclaw.ai/install.sh | bash
```

## Onboard (quickstart)

```
openclaw onboard --install-daemon
```

## Open the dashboard

```
openclaw dashboard
```

## Configure web search (Brave API key)

```
openclaw configure --section web
```

## Check model status

```
openclaw models status
```

## Set Anthropic API key

```
openclaw config set providers.anthropic.apiKey YOUR_KEY
```

## Set Google Gemini API key

```
export GOOGLE_API_KEY="YOUR_KEY"
```

## Restart the gateway

```
openclaw gateway restart
```

## Add a new agent

```
openclaw agents add <name>
```

## Verify gateway

```
openclaw gateway status
```

## Deep health check

```
openclaw doctor
```