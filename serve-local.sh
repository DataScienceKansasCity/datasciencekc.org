#!/usr/bin/env bash
set -euo pipefail

HOST="${HOST:-127.0.0.1}"
PORT="${PORT:-1313}"
BASE_URL="${BASE_URL:-http://localhost:${PORT}/}"

if ! command -v hugo >/dev/null 2>&1; then
  echo "Error: hugo is not installed or is not on PATH." >&2
  echo "Install Hugo: https://gohugo.io/installation/" >&2
  exit 1
fi

echo "Serving Data Science Kansas City at ${BASE_URL}"
echo "Press Ctrl+C to stop the server."

exec hugo server \
  --buildDrafts \
  --bind "${HOST}" \
  --baseURL "${BASE_URL}" \
  --port "${PORT}" \
  "$@"
