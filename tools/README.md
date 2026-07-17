# Onlinekurs-Warenkorb-Engine (Tools)

Wiederholbarer Ablauf, um aus einer Notion-Datenbank ein fertiges tsshop-Warenkorb-Regal
für eine Kursseite zu bauen — auch wenn die super.site-Seite in Notion LEER ist.

## Ablauf (Robert liefert nur: DB-URLs + Währung je Warenkorb)

1. **Schema + Formeln holen** (öffentliche notion.site, kein Login nötig):
   - Chrome headless mit CDP starten:
     `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --remote-debugging-port=9333 --user-data-dir=/tmp/cdp-profile about:blank &`
   - Je DB-Seite: `node tools/cdp_sniff.mjs "<notion.site-URL>" schemas_<name>.json`
     (sniffed die api/v3-Responses -> collection-Schemas; Cross-DBs über eine
     Datensatz-Detailseite mitladen, dort werden alle Relations-Schemas geladen)
   - Formel-Code steckt in `schema[pid].formula2.code` (Rich-Text-Segmente);
     `prop`-Referenzen über die globale propId->Name-Map ALLER gesniffter Schemas auflösen
     (Segment-Deco `fpp` = Property-Referenz). encodeURIComponent-Falle: nie `charAt(0)` auf Namen.
2. **Engine laufen lassen:** `python3 tools/warenkorb_engine.py`
   - Pro Spalte eine Karte; Overlay-Text strikt nach
     „Formatierungsregeln — Spaltenbeschreibungen" (Pfeil-Schema je Property-Typ,
     Formeln verbatim als .notion-code-Block mit Copy-Button).
   - Schritt 1 = Button anlegen, Schritt 2 = Datenbank anlegen, dann alle Properties
     in Bau-Reihenfolge (Relationen vor abhängigen Formeln/Rollups).
   - Wechselseitige Relationen: Gegenspalte der Ziel-DB wird dort als GHOST-Kachel geführt.
3. **In kurs.js eintragen:** KACHELN-Eintrag (einheit = Währung der Lektion, Beispielwerte
   je Karte, KEIN img -> ph()-Platzhalter „BILD FOLGT") + PAGES-Eintrag mit
   `steps:<ARRAY>` + `anchorSel:'#<anker-id>'` (leeres Div des Seiten-Moduls) + chain:true.
   BACKOFFICE-Map um die Schrittzahl erweitern (Pflegepflicht!).
4. **Testen:** Harness (super.so-DOM-Nachbau unterm echten Slug) + CDP-Interaktionstest
   (Overlay öffnen, In-den-Einkaufswagen, Chain, Balken) -> deploy.sh -> curl-Verify.

Erstbeleg: Lektion 11 (Commit 0ab5013) — 3 Regale aus Menürechner/Kunden/Angebot-Master.
Detail-Doku: Vault -> Super-Code/Design-System.md (Sektion Warenkorb-Engine) + Lektion 11.
