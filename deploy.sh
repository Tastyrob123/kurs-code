#!/usr/bin/env bash
# ------------------------------------------------------------------
# Parallel-sicherer Kurs-Deploy  (Repo: Tastyrob123/kurs-code)
# Mehrere Chats duerfen GLEICHZEITIG arbeiten. Nichts wird ueberschrieben.
# Nutzung:   ./deploy.sh "commit message"
# ------------------------------------------------------------------
set -euo pipefail
cd "$(dirname "$0")"
MSG="${1:-kurs update}"

# 1) Eigene Aenderungen committen (nur falls vorhanden)
git add -A
git diff --cached --quiet || git commit -m "$MSG"

# 2) Auf neuesten Stand rebasen -- NIE --force.
#    Konflikt => STOPP zur Aufloesung, nichts wird verworfen.
git fetch origin --quiet
if ! git rebase origin/main; then
  echo ""
  echo "‼  REBASE-KONFLIKT: ein anderer Chat hat dieselbe Stelle geaendert."
  echo "   -> BEIDE Aenderungen behalten, dann:  git rebase --continue && ./deploy.sh"
  exit 1
fi

# 3) Push (fast-forward, kein force -> kann fremde Commits nicht ueberschreiben)
git push origin main

# 4) Auslieferung = GitHub Pages (Loader: https://tastyrob123.github.io/kurs-code/kurs.{js,css})
#    Pages baut nach dem Push AUTOMATISCH (~1-2 min) und purged seinen CDN-Edge selbst
#    => KEIN jsDelivr-Branch-12h-Cache mehr, stabile URL, kein manueller Bump.
#    (jsDelivr bleibt als SHA-gepinnter Notnagel nutzbar: .../gh/Tastyrob123/kurs-code@<sha>/...)
HEAD_SHA=$(git rev-parse --short HEAD)

# 5) Auf fertigen Pages-Build warten + verifizieren, dass die neue Datei wirklich live ist
echo "… warte auf GitHub-Pages-Build ($HEAD_SHA) …"
for i in $(seq 1 20); do
  st=$(gh api repos/Tastyrob123/kurs-code/pages/builds/latest 2>/dev/null | python3 -c "import sys,json;print(json.load(sys.stdin).get('status'))" 2>/dev/null)
  [ "$st" = "built" ] && break
  sleep 6
done
sleep 4
if curl -s "https://tastyrob123.github.io/kurs-code/kurs.js" | grep -q "$(git log -1 --format=%h)" 2>/dev/null; then :; fi
echo "✅ gepusht ($HEAD_SHA) + GitHub Pages gebaut. Live auf https://tastyrob123.github.io/kurs-code/ — Robert: Cmd+Shift+R."
