#!/usr/bin/env bash
# ------------------------------------------------------------------
# Parallel-sicherer Kurs-Deploy  (Repo: Tastyrob123/kurs-code)
# Mehrere Chats duerfen GLEICHZEITIG arbeiten. Nichts wird ueberschrieben.
# Nutzung:   ./deploy.sh "commit message"
# ------------------------------------------------------------------
set -euo pipefail
cd "$(dirname "$0")"
MSG="${1:-kurs update}"

# 0) MINIFIZIERTE AUSLIEFERUNGS-DATEIEN BAUEN (seit 02.08.2026)
#    Live geladen werden kurs.min.js / kurs.min.css (ca. 20% bzw. 44% kleiner).
#    kurs.js / kurs.css bleiben die lesbare QUELLE (SSOT) -- immer die editieren!
#    Dieser Schritt laeuft bei JEDEM Deploy, damit Aenderungen aus JEDEM Chat
#    garantiert in der ausgelieferten Datei landen. Faellt esbuild aus, wird
#    unminifiziert kopiert (langsamer, aber nie veralteter Code live).
# Guard: War die ausgelieferte Datei ueberhaupt aktuell? Wenn nicht, hat jemand
# am deploy.sh vorbei gepusht -- dann war seine Aenderung bis jetzt NICHT live.
# Das wird laut gemeldet statt still repariert (Vorfall 02.08.2026: b348d6d, fe5ca1c).
if [ -f kurs.min.js ]; then
  npx --yes esbuild kurs.js --minify --target=es2015 --outfile=/tmp/_ts_min_check.js >/dev/null 2>&1 || true
  if [ -f /tmp/_ts_min_check.js ] && ! diff -q /tmp/_ts_min_check.js kurs.min.js >/dev/null 2>&1; then
    echo ""
    echo "‼  ACHTUNG: kurs.min.js war VERALTET (passte nicht zu kurs.js)."
    echo "   Heisst: die zuletzt gepushte Aenderung war bis eben NICHT live."
    echo "   Ursache: jemand hat per 'git push' statt './deploy.sh' ausgerollt."
    echo "   -> Wird jetzt mitgebaut. Bitte danach die betroffene Seite pruefen."
    echo ""
  fi
  rm -f /tmp/_ts_min_check.js
fi

echo "… baue kurs.min.js / kurs.min.css …"
if npx --yes esbuild kurs.js --minify --target=es2015 --outfile=kurs.min.js >/dev/null 2>&1 \
   && node --check kurs.min.js >/dev/null 2>&1; then
  echo "   ✓ kurs.min.js minifiziert"
else
  echo "   ⚠ esbuild fehlgeschlagen -> kurs.js unveraendert als kurs.min.js kopiert"
  cp kurs.js kurs.min.js
fi
if npx --yes esbuild kurs.css --minify --outfile=kurs.min.css >/dev/null 2>&1; then
  echo "   ✓ kurs.min.css minifiziert"
else
  echo "   ⚠ esbuild fehlgeschlagen -> kurs.css unveraendert als kurs.min.css kopiert"
  cp kurs.css kurs.min.css
fi

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
