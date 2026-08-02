# ⚠️ WICHTIG (seit 02.08.2026): Quelle vs. Auslieferung

- **Bearbeitet wird IMMER `kurs.js` / `kurs.css`** (lesbare Quelle, SSOT).
- **Live geladen werden `kurs.min.js` / `kurs.min.css`** — die baut `./deploy.sh`
  bei jedem Deploy automatisch neu. Niemals von Hand editieren.
- Deshalb: Änderungen **nur** über `./deploy.sh "msg"` ausrollen, nie per
  direktem `git push` — sonst liefert der Live-Head veralteten Code aus.

# kurs-code
Nur der Live-Custom-Code (kurs.js + kurs.css) für gastronomie-ai-masterclass.super.site.
Schlank gehalten (<50MB), damit jsDelivr @main immer sofort ausliefert.
Bilder liegen separat im Repo Tastyrob123/kurs (GitHub Pages, tastyrob123.github.io/kurs/img/...).
