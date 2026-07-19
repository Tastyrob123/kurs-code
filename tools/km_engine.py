#!/usr/bin/env python3
# ============================================================
# KEY-METRICS Warenkorb-Generator (Kostenauswertung Master, DB XX)
# Nutzt die Overlay-Logik der Warenkorb-Engine (Formatierungsregeln), aber
# gespeist aus dem frisch gesnifften Master-Schema + verbatim Formeln.
# Balken zaehlt KENNZAHLEN (Spalten-Fortschritt), nicht Geld (Robert 2026-07-20).
# ============================================================
import json, html, re

SCHEMA = json.load(open('/tmp/km_schema_master.json'))
M = '71ab9546-5534-83f1-898e-87f4d97957b4'
FORMELN = json.load(open('/tmp/km_formeln_final.json'))[M]
sch = SCHEMA[M]
BYNAME = {pv['name']: pv for pv in sch.values() if pv.get('name')}

def esc(t): return html.escape(t, quote=False).replace("'", "&#39;")
def p(line): return '<p class="notion-text">' + line + '</p>'
def pfeil(label, rest=""): return p('→ <b>' + label + ' :</b> ' + rest)
def code_block(code):
    c = html.escape(code).replace("'", "&#39;").replace("\n", "<br>").replace("  ", "&nbsp;&nbsp;")
    return ('<div class="notion-code" style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;'
            'font-size:.7rem;line-height:1.6;white-space:normal;word-break:break-word">' + c + '</div>')
NUMFMT = {"euro": "Euro", "percent": "Prozent", "number": "Zahl", "plain": "Zahl", None: "Zahl"}
PRECI  = {"precision_0": "0", "precision_1": "1", "precision_2": "2", None: "Standard"}

def overlay_for(name, meta):
    d = BYNAME[name]; t = d.get("type"); beschr = meta.get("hint", "")
    rows = []
    if t == "title":
        rows += [pfeil("Eigenschaft", "Titel"), pfeil("Name der Spalte", esc(name)), pfeil("Du trägst hier ein", esc(beschr))]
    elif t == "date":
        rows += [pfeil("Eigenschaft", "Datum"), pfeil("Name der Spalte", esc(name)), pfeil("Du trägst hier ein", esc(beschr))]
    elif t == "number":
        rows += [pfeil("Eigenschaft", "Nummer"), p("→ Eigenschaft bearbeiten -"),
                 p("<b>Zahlenformat :</b> " + NUMFMT.get(d.get("number_format"), "Zahl")),
                 p("<b>Nachkommastellen :</b> " + PRECI.get(d.get("number_precision"), "Standard")),
                 pfeil("Name der Spalte", esc(name)), pfeil("Du trägst hier ein", esc(beschr))]
    elif t == "select":
        rows += [pfeil("Eigenschaft", "Auswählen"), pfeil("Name der Spalte", esc(name)),
                 p("Trage diese Auswahlmöglichkeiten ein :")]
        opts = [o.get("value") or o.get("name", "") for o in (d.get("options") or [])]
        opts = [o for o in opts if o]
        if not opts and meta.get("options"): opts = meta["options"]
        rows.append(p(esc(" · ".join(opts))))
        if beschr: rows.append(p(esc(beschr)))
    elif t == "relation":
        tgt = meta.get("target_db", "Ziel-Datenbank")
        rows += [pfeil("Eigenschaft", "Verknüpfung → " + esc(tgt) + " →"),
                 pfeil("Name der Spalte", esc(name)),
                 p("Du verknüpfst hier " + esc(beschr))]
    elif t == "rollup":
        rows += [pfeil("Eigenschaft", "Rollup"),
                 pfeil("Verknüpfung", esc(meta.get("rel", "?"))),
                 pfeil("Eigenschaft", esc(meta.get("tgt", "?"))),
                 pfeil("Berechnen", esc(meta.get("agg", "Summe"))),
                 pfeil("Name der Spalte", esc(name)),
                 p("Dir wird hier " + esc(beschr) + " angezeigt.")]
    elif t == "formula":
        rows += [pfeil("Eigenschaft", "Formel"), pfeil("Name der Spalte", esc(name)),
                 p("Trage diese <b>Formel</b> ein :"), code_block(FORMELN.get(name, ""))]
        if beschr: rows.append(p("→ Die eingetragene Formel " + esc(beschr)))
    return "".join(rows)

def desc_of(html_str, limit=105):
    txt = re.sub(r"<[^>]+>", " ", html_str); txt = html.unescape(txt)
    txt = re.sub(r"\s+", " ", txt).strip().lstrip("→ ").strip()
    return txt[:limit]

# ---- Bau-Reihenfolge + Kartentexte (Robert-Ton, Formatierungsregeln) ----
# Eingaben (Rohwerte, die du eintraegst) zuerst, dann Relation + Rollup, dann Formeln in Abhaengigkeits-Reihenfolge.
ORDER = [
 ("Name", {"hint": "den Namen des Monats, bspw. 01.2026 — jede Zeile ist ein Auswertungsmonat."}),
 ("Monat", {"hint": "den Kalendermonat, auf den sich die Auswertung bezieht."}),
 ("Umsatz Netto Store Exkl. Trinkgeld", {"hint": "deinen Netto-Umsatz im Store, ohne Trinkgeld."}),
 ("Umsatz Lieferando", {"hint": "deinen Netto-Umsatz über Lieferando in diesem Monat."}),
 ("Umsatz Wolt", {"hint": "deinen Netto-Umsatz über Wolt in diesem Monat."}),
 ("Wareneinsatz (EUR)", {"hint": "deinen kompletten Wareneinsatz des Monats in Euro."}),
 ("Personalkosten", {"hint": "deine gesamten Personalkosten des Monats in Euro."}),
 ("Geleistete Stunden", {"hint": "die gesamten geleisteten Arbeitsstunden im Monat."}),
 ("Öffnungstage", {"hint": "die Anzahl der Öffnungstage im Monat."}),
 ("Anzahl Transaktionen", {"hint": "die Anzahl der Bons / Transaktionen im Monat."}),
 ("Google Score", {"hint": "deinen aktuellen Google-Bewertungsschnitt, bspw. 4,6."}),
 ("Google Bewertungen (Anzahl)", {"hint": "die Anzahl deiner Google-Bewertungen."}),
 ("Mystery Shopper Score", {"hint": "das Ergebnis deines Mystery-Shopper-Checks."}),
 ("Lieferando Online Rate", {"hint": "deine Online-Rate bei Lieferando (Anteil der Zeit online)."}),
 ("Lieferando Nicht Erfüllt", {"hint": "die Anzahl der nicht erfüllten Lieferando-Bestellungen."}),
 ("Wolt Online Rate", {"hint": "deine Online-Rate bei Wolt."}),
 ("Wolt Nicht Erfüllt", {"hint": "die Anzahl der nicht erfüllten Wolt-Bestellungen."}),
 ("Monatsauswertung", {"hint": "So siehst du, welcher Monat schon fertig ausgewertet ist.",
     "options": ["Abgeschlossen", "In Bearbeitung", "Ausstehend"]}),
 ("GK Monat", {"target_db": "GK-Kostenblock (Monatlich) · DB VI",
     "hint": "den passenden Gemeinkosten-Monat aus deiner Gemeinkosten-Datenbank, damit die Monatskosten automatisch einfließen."}),
 ("GK Kosten (EUR)", {"rel": "GK Monat", "tgt": "Betrag netto", "agg": "Summe",
     "hint": "die Summe deiner Gemeinkosten des Monats aus der verknüpften Gemeinkosten-Datenbank"}),
 # ---- Formeln in Bau-/Abhaengigkeits-Reihenfolge ----
 ("Formel Personalkosten ( Eur )", {"hint": "macht aus deinen Personalkosten eine saubere Zahl, mit der weitergerechnet wird."}),
 ("Formel GK Kosten ( Eur )", {"hint": "macht aus der Gemeinkosten-Summe eine saubere Zahl zum Weiterrechnen."}),
 ("Umsatz Gesamt Netto", {"hint": "addiert Store-, Lieferando- und Wolt-Umsatz zu deinem Netto-Gesamtumsatz."}),
 ("Wareneinsatz (%)", {"hint": "zeigt deinen Wareneinsatz im Verhältnis zum Netto-Gesamtumsatz."}),
 ("Umsatz Gesamt Brutto", {"hint": "rechnet den Netto-Gesamtumsatz mit 19 % MwSt. auf den Bruttoumsatz hoch."}),
 ("Formel Umsatz Gesamt Brutto", {"hint": "macht aus dem Brutto-Umsatz eine saubere Zahl zum Weiterrechnen."}),
 ("Formel WE ( % )", {"hint": "macht aus dem Wareneinsatz-Prozentwert eine saubere Zahl."}),
 ("Ø Umsatz Brutto pro Tag", {"hint": "teilt den Bruttoumsatz durch die Öffnungstage — dein Tagesdurchschnitt brutto."}),
 ("DB I (EUR)", {"hint": "rechnet Deckungsbeitrag I in Euro: Gesamtumsatz minus Wareneinsatz."}),
 ("DB II (EUR)", {"hint": "rechnet Deckungsbeitrag II in Euro: DB I minus Personalkosten."}),
 ("DB II (%)", {"hint": "zeigt Deckungsbeitrag II im Verhältnis zum Gesamtumsatz."}),
 ("Formel Umsatz Gesamt Netto", {"hint": "macht aus dem Netto-Gesamtumsatz eine saubere Zahl zum Weiterrechnen."}),
 ("Produktivität (EUR/h)", {"hint": "teilt den Umsatz durch die geleisteten Stunden — dein Umsatz pro Arbeitsstunde."}),
 ("Formel Produktivität / H", {"hint": "macht aus der Produktivität eine saubere Zahl zum Weiterrechnen."}),
 ("DB I (%)", {"hint": "zeigt Deckungsbeitrag I im Verhältnis zum Gesamtumsatz."}),
 ("Durchschnittsbon (EUR)", {"hint": "teilt den Umsatz durch die Anzahl Transaktionen — dein durchschnittlicher Bon."}),
 ("Formel DB I (%)", {"hint": "macht aus dem DB-I-Prozentwert eine saubere Zahl."}),
 ("Ø Umsatz Netto pro Tag", {"hint": "teilt den Netto-Umsatz durch die Öffnungstage — dein Tagesdurchschnitt netto."}),
 ("Formel Durchschnittsbon", {"hint": "macht aus dem Durchschnittsbon eine saubere Zahl zum Weiterrechnen."}),
 ("Formel DB II ( Eur )", {"hint": "macht aus DB II in Euro eine saubere Zahl zum Weiterrechnen."}),
 ("Formel DB I (EUR)", {"hint": "macht aus DB I in Euro eine saubere Zahl zum Weiterrechnen."}),
 ("Formel DB II (%)", {"hint": "macht aus dem DB-II-Prozentwert eine saubere Zahl."}),
 ("Personaleinsatz (%)", {"hint": "zeigt deine Personalkosten im Verhältnis zum Gesamtumsatz."}),
 ("Formel Personaleinsatz ( % )", {"hint": "macht aus dem Personaleinsatz-Prozentwert eine saubere Zahl."}),
 ("DB III (EUR)", {"hint": "rechnet Deckungsbeitrag III in Euro: DB II minus Gemeinkosten."}),
 ("Formel DB III (EUR)", {"hint": "macht aus DB III in Euro eine saubere Zahl zum Weiterrechnen."}),
 ("DB III (%)", {"hint": "zeigt Deckungsbeitrag III im Verhältnis zum Gesamtumsatz — dein Ergebnis."}),
 ("Formel DB III (%)", {"hint": "macht aus dem DB-III-Prozentwert eine saubere Zahl."}),
]

BTN_HTML = (p('Wie bei den anderen Datenbanken bauen wir zuerst den Rahmen: Lege auf deiner Backoffice-Seite einen '
              '<b>Button</b> an, der dich zur neuen Datenbank führt.')
            + p('→ <b>/button</b> einfügen → Beschriftung eintragen → Link auf die neue Seite setzen.'))
DB_HTML = (p('Drücke <b>/</b> und wähle &bdquo;Tabellenansicht &ndash; Datenbank&ldquo;.')
           + p('→ <b>Name der Datenbank :</b> Kostenauswertung Master')
           + p('Damit steht der Rahmen — jede Karte in diesem Regal ist ab jetzt eine Spalte dieser Datenbank.'))

steps = [{"title": "1. Button anlegen", "html": BTN_HTML},
         {"title": "2. Datenbank anlegen", "html": DB_HTML}]
n = 3
for name, meta in ORDER:
    if name not in BYNAME: raise SystemExit("FEHLT im Schema: " + name)
    steps.append({"title": f"{n}. {meta.get('label', name).strip()}", "html": overlay_for(name, meta)})
    n += 1

def js_str(s): return "'" + s.replace("\\", "\\\\").replace("'", "\\'") + "'"

def emit_steps(var, steps):
    out = ["  var " + var + "=["]
    for st in steps:
        out.append("    {title:" + js_str(st["title"]) + ", desc:" + js_str(desc_of(st["html"])) + ", html:" + js_str(st["html"]) + "},")
    out.append("  ];")
    return "\n".join(out)

# Balken zaehlt KENNZAHLEN: die 2 Setup-Karten (Button, DB anlegen) wert:0, die 48 echten Spalten wert:1 -> Balken 0..48
varianten = ",\n".join("      {name:" + js_str(re.sub(r'^\d+\.\s*', '', st["title"])) + ", wert:" + ("0" if i < 2 else "1") + "}" for i, st in enumerate(steps))

kacheln = f"""    /* Key Metrics — Kostenauswertung Master (DB XX), Engine-generiert 2026-07-20.
       Balken zaehlt KENNZAHLEN (Spalten-Fortschritt), einheit_typ:'anzahl', wert:1 je Karte. Bilder folgen -> ph(). */
    {{ kachel_id:'km_master', kachel_name:'Kostenauswertung Master', ist_produkt_kachel:true,
      einheit:'Kennzahlen', einheit_typ:'anzahl',
      objekt_varianten:[
{varianten}
      ]}},"""

pages = """    /* Key Metrics — Config-Steps-Regal (Notion-Seite leer, Steps aus Config; echte DB-Schemas + Formeln). */
    { path:/\\/key-metrics\\/?$/, kachel:'km_master',
      anchorSel:'#tskmwk', steps:TSKM_STEPS,
      eyebrow:'DB XX — Kostenauswertung Master',
      title:'Die <span>Kostenauswertung Master</span>.',
      sub:'Jede Karte ist eine Spalte dieser Datenbank. Klick sie auf, bau sie nach, leg sie in den Einkaufswagen — der Balken zählt, wie viele Kennzahlen schon stehen.',
      summary:'Kennzahlen', chain:true },"""

out = {"steps": emit_steps("TSKM_STEPS", steps), "kacheln": kacheln, "pages": pages, "count": len(steps)}
open('/tmp/km_engine_out.json', "w").write(json.dumps(out, ensure_ascii=False))
print("Karten (Steps):", len(steps), "(2 Setup +", len(ORDER), "Spalten)")
print("steps KB:", len(out['steps'])//1024, "· kacheln KB:", len(kacheln)//1024, "· pages KB:", len(pages)//1024)
# sanity: alle Formeln vorhanden?
missing=[nm for nm,_ in ORDER if BYNAME[nm].get('type')=='formula' and not FORMELN.get(nm)]
print("Formeln ohne Code:", missing or "keine")
