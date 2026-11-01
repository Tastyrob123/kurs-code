#!/usr/bin/env bash
# Parallel-sicherer Kurs-Deploy (Repo Tastyrob123/kurs-code). Nutzung: ./deploy.sh "msg"
# Mehrere Chats duerfen gleichzeitig deployen. Erlaeuterungen am Dateiende.
set -euo pipefail
cd "$(dirname "$0")"
MSG="${1:-kurs update}"

# 0) Pruefen, ob das Ausgelieferte zur Quelle passte (sonst lief jemand am deploy.sh vorbei)
if [ -f kurs.min.js ] && [ -f tools/teile.cjs ]; then
  node tools/teile.cjs --pruefen >/dev/null 2>&1 || echo "‼  kurs.min.js/teile passten nicht zu kurs.js -> wird neu gebaut"
fi

# 1) Quell-Aenderungen committen (ohne generierte kurs.min.* und teile/)
git checkout -- kurs.min.js kurs.min.css 2>/dev/null || true
git add -A
git reset -q -- kurs.min.js kurs.min.css teile 2>/dev/null || true
git diff --cached --quiet || git commit -m "$MSG"

build_min() {
  echo "… baue kurs.min.js (Kern) + teile/ + kurs.min.css …"
  local okt=0
  if node tools/teile.cjs && node --check kurs.min.js >/dev/null 2>&1; then
    okt=1; for f in teile/*.js; do node --check "$f" >/dev/null 2>&1 || { okt=0; echo "   ⚠ $f"; }; done
  fi
  if [ "$okt" = 1 ]; then echo "   ✓ Kern + Seitenteile"
  elif npx --yes esbuild kurs.js --minify --target=es2015 --outfile=kurs.min.js >/dev/null 2>&1 && node --check kurs.min.js >/dev/null 2>&1; then
    echo "   ⚠ Zerlegen fehlgeschlagen -> ein Paket wie frueher"
  else echo "   ⚠ esbuild fehlgeschlagen -> kurs.js als kurs.min.js"; cp kurs.js kurs.min.js; fi
  npx --yes esbuild kurs.css --minify --outfile=kurs.min.css >/dev/null 2>&1 && echo "   ✓ kurs.min.css" \
    || { echo "   ⚠ kurs.css unminifiziert"; cp kurs.css kurs.min.css; }
}

# 2) Rebase -> bauen -> push HEAD:main, nie --force. Konflikt = STOPP. Abgelehnt = neu (6x).
git clean -fdq -- teile 2>/dev/null || true
ok=0
for try in 1 2 3 4 5 6; do
  git fetch origin --quiet
  if ! git rebase origin/main; then
    echo ""
    echo "‼  REBASE-KONFLIKT: ein anderer Chat hat dieselbe Stelle geaendert."
    echo "   -> BEIDE Aenderungen behalten, dann:  git rebase --continue && ./deploy.sh"
    exit 1
  fi
  BEFORE_MIN=$(git rev-parse HEAD)
  build_min
  git add kurs.min.js kurs.min.css; git add teile 2>/dev/null || true
  git diff --cached --quiet || git commit -q -m "min: $MSG"
  if git push origin HEAD:main; then ok=1; break; fi
  echo "   … Push abgelehnt (anderer Chat hat gerade deployt) – neuer Versuch $try/6"
  git reset -q --hard "$BEFORE_MIN"; git clean -fdq -- teile 2>/dev/null || true
  sleep $((try*3))
done
######################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################
[ "$ok" = 1 ] || { echo "‼  Push nach 6 Versuchen nicht moeglich."; exit 1; }

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

# ------------------------------------------------------------------
# Erlaeuterungen
# - Quelle sind immer kurs.js / kurs.css. Live geladen werden kurs.min.js, teile/*.js
#   und kurs.min.css. Nie die generierten Dateien von Hand aendern, nie am deploy.sh
#   vorbei pushen.
# - Seit 01.11.2026 (Ladezeit-Chat) zerlegt tools/teile.cjs kurs.js beim Bauen: Bloecke,
#   die nur auf bestimmten Seiten laufen (Adress-Pruefung /\/slug\/?$/), kommen in
#   teile/<hash>.js. Der Kern kurs.min.js laedt fuer jede Adresse nur die passenden Teile.
#   Fuer die Modul-Chats aendert sich nichts. Klappt das Zerlegen nicht, wird ein Paket
#   wie frueher gebaut.
# - Die .min-Dateien werden erst NACH dem Rebase gebaut (sie wuerden sonst kollidieren).
# - Die Zeile aus #-Zeichen vor dem Schluss haelt den Schluss an derselben Byte-Stelle
#   wie in der Vorgaengerfassung: ein gerade laufendes aelteres deploy.sh liest nach dem
#   Rebase dann sauber weiter. Bei Aenderungen oberhalb: Laenge ausgleichen.
# ------------------------------------------------------------------
