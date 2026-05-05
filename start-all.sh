#!/bin/bash
# Start all 4 servers (hub + 3 courses) in the background
# Usage: ./start-all.sh
# Stop all: ./start-all.sh stop

NODE="/Users/rajeshranjan/.nvm/versions/node/v20.20.2/bin/node"
NEXT="./node_modules/.bin/next"
ROOT="$(cd "$(dirname "$0")" && pwd)"
LOGDIR="$ROOT/.logs"
mkdir -p "$LOGDIR"

stop_all() {
  echo "Stopping all course servers..."
  pkill -f "next dev --port 3000" 2>/dev/null
  pkill -f "next dev --port 3001" 2>/dev/null
  pkill -f "next dev --port 3002" 2>/dev/null
  pkill -f "next dev --port 3003" 2>/dev/null
  echo "Done."
  exit 0
}

[ "$1" = "stop" ] && stop_all

echo ""
echo "  Course Hub"
echo "  =========="
echo ""

SERVERS=(
  "courses-hub:3000:Course Hub (launcher)"
  "blockchain-story:3001:Blockchain & Web3"
  "genai-story:3002:Generative AI"
  "ce-story:3003:Context Engineering"
)

for entry in "${SERVERS[@]}"; do
  IFS=':' read -r dir port label <<< "$entry"
  LOG="$LOGDIR/$dir.log"
  cd "$ROOT/$dir" || { echo "  ✗ $dir — directory not found"; continue; }
  "$NODE" $NEXT dev --port "$port" > "$LOG" 2>&1 &
  PID=$!
  echo "  ▶ $label"
  echo "    port  : http://localhost:$port"
  echo "    log   : .logs/$dir.log"
  echo "    pid   : $PID"
  echo ""
  cd "$ROOT"
done

echo "  Waiting for servers to be ready..."
sleep 6

READY=0
for port in 3000 3001 3002 3003; do
  if curl -s -o /dev/null -w "%{http_code}" "http://localhost:$port" 2>/dev/null | grep -q "200"; then
    READY=$((READY + 1))
  fi
done

echo ""
echo "  $READY / 4 servers responding"
echo ""
echo "  Open the hub to launch any course:"
echo "  → http://localhost:3000"
echo ""
echo "  To stop all:  ./start-all.sh stop"
echo "  Logs in:      .logs/"
echo ""
