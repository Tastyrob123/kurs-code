# Modul 4 · Bau-Quellen (Neubau 01.11.2026)

Quelle der Zone `NEUBAU MODUL 4` in `kurs.js`/`kurs.css`. Bearbeitet wird hier, eingebaut mit:

    python3 tools/m4-bau/assemble.py

Das Skript schreibt NUR die eigene Zone, die Modul-4-Zeilen der `__tsNext`-Map und (einmalig) entfernt es den Altbestand `__ts4`.
Danach wie immer `./deploy.sh "…"`.

- `lib.js` Bibliothek `window.__tsn4`, `p01.js` … `p89.js` je zwei Lektionen, `hero.css` Hero aller zehn Seiten.
- `pending.txt`: Seiten, die super.so noch nicht synchronisiert hat. Der Weiter-Button springt über sie hinweg.
  Nach dem Re-Sync die Datei leeren, `assemble.py` laufen lassen, ausrollen.
