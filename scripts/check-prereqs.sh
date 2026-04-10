#!/usr/bin/env bash

set -euo pipefail

echo "Checking OpenClaw workshop prerequisites..."
echo

if command -v node >/dev/null 2>&1; then
  NODE_VERSION="$(node --version)"
  NODE_MAJOR="$(printf '%s' "$NODE_VERSION" | sed 's/^v//' | cut -d. -f1)"
  echo "Node detected: $NODE_VERSION"
  if [ "$NODE_MAJOR" -ge 24 ]; then
    echo "Node version looks ideal."
  elif [ "$NODE_MAJOR" -ge 22 ]; then
    echo "Node version is supported, though Node 24 is recommended."
  else
    echo "Node version is too old. OpenClaw needs Node 22.14+ and recommends Node 24."
  fi
else
  echo "Node is not installed."
fi

echo

if command -v openclaw >/dev/null 2>&1; then
  echo "OpenClaw CLI detected: $(openclaw --version)"
else
  echo "OpenClaw CLI not found."
  echo "Install on macOS/Linux with:"
  echo "  curl -fsSL https://openclaw.ai/install.sh | bash"
fi

echo
echo "Next step:"
echo "  openclaw onboard --install-daemon"
