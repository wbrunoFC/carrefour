#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"

export ANDROID_HOME="${ANDROID_HOME:-${HOME}/Library/Android/sdk}"
export PATH="${PATH}:${ANDROID_HOME}/emulator:${ANDROID_HOME}/platform-tools"

PORT="${APPIUM_URL_PORT:-4723}"
HOST="${APPIUM_URL:-127.0.0.1}"

cd "${PROJECT_ROOT}"
exec npx appium \
  --address "${HOST}" \
  --port "${PORT}" \
  --relaxed-security \
  --log-level info
