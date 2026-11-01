#!/usr/bin/env bash
# Sucht einen Text in allem, was live ausgeliefert wird (Starter kurs.min.js, Kern, Seitenteile, kurs.min.css).
# Nutzung: tools/live-suche.sh '<marker>'      (Zaehlung je Datei, Summe am Ende)
# Seit 01.11.2026 steht in kurs.min.js nur noch der Starter; der Code liegt in teile/kern-*.js und teile/*.js.
set -uo pipefail
M="${1:?Marker fehlt}"; B="https://tastyrob123.github.io/kurs-code"; R=$RANDOM
STARTER=$(curl -s "$B/kurs.min.js?cb=$R")
sum=0
for f in kurs.min.js kurs.min.css $(printf '%s' "$STARTER" | grep -o 'teile/[a-z0-9-]*\.js' | sort -u); do
  if [ "$f" = kurs.min.js ]; then n=$(printf '%s' "$STARTER" | grep -o -F -- "$M" | wc -l | tr -d ' ')
  else n=$(curl -s "$B/$f?cb=$R" | grep -o -F -- "$M" | wc -l | tr -d ' '); fi
  [ "$n" != 0 ] && echo "$n  $f"; sum=$((sum+n))
done
echo "Summe live: $sum"
