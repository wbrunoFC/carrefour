#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
REPO_ROOT="$(cd "${PROJECT_ROOT}/.." && pwd)"

export ANDROID_HOME="${ANDROID_HOME:-${HOME}/Library/Android/sdk}"
export PATH="${PATH}:${ANDROID_HOME}/emulator:${ANDROID_HOME}/platform-tools"

export APPIUM_URL="${APPIUM_URL:-127.0.0.1}"
export APPIUM_URL_PORT="${APPIUM_URL_PORT:-4723}"
export APPIUM_PATH="${APPIUM_PATH:-/}"

cd "${REPO_ROOT}"
exec npx -y @wdio/mcp "$@"
