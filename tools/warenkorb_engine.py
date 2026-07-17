#!/usr/bin/env python3
# ============================================================
# ONLINEKURS-WARENKORB-ENGINE
# Baut aus Notion-DB-Schemas (gesnifft) + extrahierten Formeln die komplette
# tsshop-Config (KACHELN + PAGES mit Config-Steps) für kurs.js.
# Overlay-Texte folgen dem Pflicht-Schema aus
# "Formatierungsregeln — Spaltenbeschreibungen" (Plain Dump, Pfeil-Struktur).
# ============================================================
import json, glob, html, re

S = "/private/tmp/claude-501/-Users-robertreff-SecondBrain/405ffbcb-cfba-4474-8008-4d73a0136aa6/scratchpad"

# ---------- Daten laden ----------
schemas = {}
for f in glob.glob(f"{S}/schemas_*.json"):
    for cid, sch in json.load(open(f)).items():
        schemas.setdefault(cid, {}).update(sch)
formeln = json.load(open(f"{S}/formeln_final.json"))

CID = {
    "menuerechner": "1f6b9546-5534-83b2-a813-87f67755ef47",
    "angebot":      "0f1b9546-5534-824f-bffc-072c6a2f574f",
    "kunden":       "69bb9546-5534-8273-a0f7-8752dbb52768",
}
# Anzeige-Namen der Ziel-DBs für Verknüpfungs-Overlays
DBNAME = {
    "34bb9546-5534-82d0-b42c-8711141f5ec6": "Gerichte & Getränke Database (DB VIII)",
    "312b9546-5534-816b-b55b-000b84743c92": "Packaging Database",
    "69bb9546-5534-8273-a0f7-8752dbb52768": "Kunden Master Database",
    "1f6b9546-5534-83b2-a813-87f67755ef47": "Menürechner Master Database",
    "0dbb9546-5534-8228-9ab7-871811c9b515": "GK Kosten Database (DB VI)",
    "91bb9546-5534-830f-a70c-87c43e5dcba9": "Mitarbeiter Database (DB VII)",
}
# propId -> Name (global, für Rollup-Auflösung)
prop_name = {}
for cid, sch in schemas.items():
    for pid, d in sch.items():
        if isinstance(d, dict) and d.get("name"):
            prop_name[(cid, pid)] = d["name"]

def esc(t):
    return html.escape(t, quote=False).replace("'", "&#39;")

def p(line):
    return '<p class="notion-text">' + line + '</p>'

def pfeil(label, rest=""):
    return p('→ <b>' + label + ' :</b> ' + rest)

def code_block(code):
    c = html.escape(code).replace("'", "&#39;").replace("\n", "<br>").replace("  ", "&nbsp;&nbsp;")
    return ('<div class="notion-code" style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;'
            'font-size:.7rem;line-height:1.6;white-space:normal;word-break:break-word">' + c + '</div>')

NUMFMT = {"euro": "Euro", "percent": "Prozent", "number": "Zahl", None: "Zahl"}
PRECI  = {"precision_0": "0", "precision_1": "1", "precision_2": "2", None: "Standard"}

def overlay_for(cid, pname, d, meta):
    """Baut Overlay-HTML nach Formatierungsregeln je Property-Typ."""
    t = d.get("type")
    name = d.get("name", pname)
    beschr = meta.get("hint") or d.get("description") or ""
    rows = []
    if t == "title":
        rows.append(pfeil("Eigenschaft", "Titel"))
        rows.append(pfeil("Name der Spalte", esc(name)))
        rows.append(pfeil("Du trägst hier ein", esc(beschr)))
    elif t in ("text", "email", "phone_number", "url", "date", "person", "checkbox"):
        lbl = {"text": "Text", "email": "E-Mail", "phone_number": "Telefon", "url": "URL",
               "date": "Datum", "person": "Person", "checkbox": "Checkbox"}[t]
        rows.append(pfeil("Eigenschaft", lbl))
        rows.append(pfeil("Name der Spalte", esc(name)))
        rows.append(pfeil("Du trägst hier ein", esc(beschr)))
    elif t == "number":
        rows.append(pfeil("Eigenschaft", "Nummer"))
        rows.append(p("→ Eigenschaft bearbeiten -"))
        rows.append(p("<b>Zahlenformat :</b> " + NUMFMT.get(d.get("number_format"), "Zahl")))
        rows.append(p("<b>Nachkommastellen :</b> " + PRECI.get(d.get("number_precision"), "Standard")))
        rows.append(pfeil("Name der Spalte", esc(name)))
        rows.append(pfeil("Du trägst hier ein", esc(beschr)))
    elif t in ("select", "multi_select", "status"):
        lbl = {"select": "Auswählen", "multi_select": "Mehrfachauswahl", "status": "Status"}[t]
        rows.append(pfeil("Eigenschaft", lbl))
        rows.append(pfeil("Name der Spalte", esc(name)))
        rows.append(p("Trage diese Auswahlmöglichkeiten ein :"))
        if t == "status":
            # Sniff-Format: groups = [{name, optionIds}], options = [{id, value}]
            opt_by_id = {o.get("id"): o.get("value", "") for o in (d.get("options") or [])}
            glbl_map = {"To-do": "To-do", "In progress": "In Bearbeitung", "Complete": "Abgeschlossen"}
            for grp in (d.get("groups") or []):
                opts = [opt_by_id.get(oid, "") for oid in grp.get("optionIds", [])]
                opts = [o for o in opts if o]
                if opts:
                    rows.append(p("<b>" + glbl_map.get(grp.get("name"), grp.get("name", "")) + " :</b> " + esc(" · ".join(opts))))
        else:
            # Sniff-Format: options mit "value" (MCP-Format: "name")
            opts = [o.get("value") or o.get("name", "") for o in (d.get("options") or [])]
            opts = [o for o in opts if o]
            rows.append(p(esc(" · ".join(opts))))
        if beschr:
            rows.append(p(esc(beschr)))
    elif t == "relation":
        target_cid = None
        m = re.search(r"collection://([0-9a-f-]+)", json.dumps(d))
        if m: target_cid = m.group(1)
        tgt = DBNAME.get(target_cid, "Ziel-Datenbank")
        two_way = meta.get("two_way", False)
        if two_way:
            rows.append(pfeil("Eigenschaft", "Verknüpfung → " + esc(tgt) + " → Wechselseitige Verbindung hinzufügen."))
            rows.append(pfeil("Name der Spalte", esc(name)))
            rows.append(p("Du verknüpfst hier " + esc(beschr)))
            gegen = meta.get("gegenspalte", name)
            ziel_short = tgt.split(" (")[0]
            rows.append(p("In deiner " + esc(ziel_short) + " taucht jetzt eine neue Spalte auf, nenne sie &bdquo;" + esc(gegen) + "&ldquo;."))
        else:
            rows.append(pfeil("Eigenschaft", "Verknüpfung → " + esc(tgt) + " →"))
            rows.append(pfeil("Name der Spalte", esc(name)))
            rows.append(p("Du verknüpfst hier " + esc(beschr)))
    elif t == "formula":
        rows.append(pfeil("Eigenschaft", "Formel"))
        rows.append(pfeil("Name der Spalte", esc(name)))
        rows.append(p("Trage diese <b>Formel</b> ein :"))
        code = (formeln.get(cid) or {}).get(name, "")
        rows.append(code_block(code))
        if beschr:
            rows.append(p("→ Die eingetragene Formel " + esc(beschr)))
    elif t == "rollup":
        rows.append(pfeil("Eigenschaft", "Rollup"))
        rel_pid = None; tgt_ref = None
        m = re.search(r"collectionProperty://([0-9a-f-]+)/([^\"]+)\", \"targetPropertyType", json.dumps(d))
        rel_m = re.search(r'"relationPropertyUrl": "collectionProperty://([0-9a-f-]+)/([^"]+)"', json.dumps(d))
        tgt_m = re.search(r'"targetPropertyUrl": "collectionProperty://([0-9a-f-]+)/([^"]+)"', json.dumps(d))
        rel_name = prop_name.get((rel_m.group(1), rel_m.group(2)), "?") if rel_m else "?"
        tgt_name = prop_name.get((tgt_m.group(1), tgt_m.group(2)), "?") if tgt_m else "?"
        agg = {"average": "Durchschnitt", "sum": "Summe", "show_unique": "Eindeutige Werte zeigen",
               "count": "Anzahl", "show_original": "Originale zeigen"}.get(d.get("aggregation"), d.get("aggregation") or "Originale zeigen")
        rows.append(pfeil("Verknüpfung", esc(rel_name)))
        rows.append(pfeil("Eigenschaft", esc(tgt_name)))
        rows.append(pfeil("Berechnen", esc(agg)))
        rows.append(pfeil("Name der Spalte", esc(name)))
        rows.append(p("Dir wird hier " + esc(beschr or "der Wert aus der verknüpften Datenbank") + " angezeigt."))
    else:
        rows.append(pfeil("Eigenschaft", esc(t or "?")))
        rows.append(pfeil("Name der Spalte", esc(name)))
        if beschr: rows.append(p(esc(beschr)))
    return "".join(rows)

def desc_of(html_str, limit=105):
    txt = re.sub(r"<[^>]+>", " ", html_str)
    txt = html.unescape(txt)
    txt = re.sub(r"\s+", " ", txt).strip().lstrip("→ ").strip()
    return txt[:limit]

BTN_HTML = (p('Wie bei den anderen Datenbanken bauen wir zuerst den Rahmen: Lege auf deiner Backoffice-Seite einen '
              '<b>Button</b> an, der dich zur neuen Datenbank führt.')
            + p('→ <b>/button</b> einfügen → Beschriftung eintragen → Link auf die neue Seite setzen.'))
DB_HTML_TPL = (p('Drücke <b>/</b> und wähle &bdquo;Tabellenansicht &ndash; Datenbank&ldquo;.')
               + p('→ <b>Name der Datenbank :</b> %s')
               + p('Damit steht der Rahmen — jede Karte in diesem Regal ist ab jetzt eine Spalte dieser Datenbank.'))

def build_steps(dbkey, order, kachel_name):
    cid = CID[dbkey]
    sch = schemas[cid]
    by_name = {d.get("name"): (pid, d) for pid, d in sch.items() if isinstance(d, dict)}
    steps = []
    steps.append({"title": "1. Button anlegen", "html": BTN_HTML})
    steps.append({"title": "2. Datenbank anlegen", "html": DB_HTML_TPL % esc(kachel_name)})
    n = 3
    for entry in order:
        name, meta = (entry, {}) if isinstance(entry, str) else (entry[0], entry[1])
        if name not in by_name:
            raise SystemExit("Property fehlt im Schema: " + name)
        pid, d = by_name[name]
        h = overlay_for(cid, name, d, meta)
        steps.append({"title": f"{n}. {meta.get('label', name).strip()}", "html": h})
        n += 1
    return steps

# ================= W1 · Menürechner =================
W1 = build_steps("menuerechner", [
    ("Menüposition", {"hint": "den Namen der Menü-Position, bspw. Hauptgang — Rinderfilet mit Gratin."}),
    ("Gericht / Getränk", {"hint": "das fertige Gericht oder Getränk aus deiner Gerichte-Datenbank, das auf diese Menü-Position kommt."}),
    ("Auswählen", {"label": "Food / Beverage", "hint": "Ordne die Position als Food oder Beverage ein — danach kannst du später filtern und zählen."}),
    ("Anzahl im Menü", {"hint": "wie oft dieses Gericht in der Menü-Kalkulation gezählt wird, bspw. 80 Portionen."}),
    ("WE pro Gericht / Drink (EUR)", {"hint": "zieht den Wareneinsatz des verknüpften Gerichts automatisch in diese Zeile."}),
    ("WE gesamt (EUR)", {"hint": "rechnet Wareneinsatz mal Anzahl im Menü — der Warenwert der ganzen Position."}),
    ("Benötige Menge pro Zutat ( g / stck / ml )", {"label": "Benötigte Menge pro Zutat", "hint": "listet automatisch auf, welche Menge jeder Zutat du für diese Position brauchst."}),
    ("Packaging / Co.", {"hint": "das Verpackungsmaterial aus deiner Packaging-Datenbank, falls die Position geliefert wird."}),
    ("🧑‍🍳 Kunden Master Database", {"label": "Kunden Master Database", "two_way": True,
        "gegenspalte": "🍽️ Menürechner Master Database",
        "hint": "den Kunden, für den dieses Menü kalkuliert wird."}),
], "Menürechner Master Database")

# ================= W2 · Kunden =================
W2 = build_steps("kunden", [
    ("Name", {"hint": "den Namen des Kunden oder des Events, bspw. Motel Riverside Hamburg."}),
    ("Kundentyp", {"hint": "So trennst du Catering-Aufträge, Private-Chef-Termine und Event-Locations sauber."}),
    ("Status", {"hint": "Damit siehst du auf einen Blick, wo jede Anfrage in deiner Pipeline steht."}),
    ("Tags", {"hint": "Merkmale, nach denen du später filterst — bspw. VIP oder Allergien beachten."}),
    ("Ansprechpartner", {}),
    ("Firma", {}),
    ("E-Mail", {"hint": "die E-Mail-Adresse deines Ansprechpartners."}),
    ("Telefon", {"hint": "die Telefonnummer deines Ansprechpartners."}),
    ("Website / Social", {"hint": "Website oder Social-Profil des Kunden."}),
    ("Rechnungsadresse", {"hint": "die Rechnungsadresse für Angebot und Abrechnung."}),
    ("Lieferadresse / Location", {}),
    ("Erstes Event", {}),
    ("Nächstes Event", {}),
    ("Umsatz (EUR)", {}),
    ("Verloren Grund", {}),
    ("Owner", {"hint": "die intern verantwortliche Person für diesen Kunden."}),
], "Kunden Master Database")

# ================= W3 · Kostenaufstellung (Angebot Master) =================
W3 = build_steps("angebot", [
    ("Name", {"hint": "den Namen des Angebots, bspw. 1.0.2 Business Catering."}),
    ("Datum", {"hint": "das Angebots- oder Eventdatum."}),
    ("Personen Anzahl ", {"label": "Personen Anzahl", "hint": "die Personenzahl des Events, bspw. 200 Pax."}),
    ("Menüpreis", {"hint": "den kalkulierten Menüpreis für das gesamte Event."}),
    ("VK Wunschpreis ", {"label": "VK Wunschpreis", "hint": "deinen Wunsch-Verkaufspreis für das Angebot."}),
    ("🍽️ Menü Element", {"label": "Menü Element", "hint": "die Menü-Positionen aus deinem Menürechner, die zu diesem Angebot gehören."}),
    ("🧑‍🍳 Kunden (Catering & Private Chef)", {"label": "Kunden (Catering & Private Chef)", "hint": "den Kunden aus deiner Kunden Master Database."}),
    ("👤 Mitarbeiter", {"label": "Mitarbeiter", "hint": "die Mitarbeiter, die du für dieses Event einplanst."}),
    ("GK Kosten / Monate ", {"label": "GK Kosten / Monate", "hint": "den Gemeinkosten-Monat, auf den dieses Event fällt."}),
    ("Produktionszeit (Minuten)", {"hint": "die geplante Produktionszeit in Minuten."}),
    ("Verpackungszeit (Minuten)", {"hint": "die geplante Verpackungszeit in Minuten."}),
    ("Logistikzeit (Minuten)", {"hint": "die geplante Logistikzeit in Minuten."}),
    ("Eventzeit vor Ort (Minuten)", {"hint": "die geplante Zeit vor Ort in Minuten."}),
    ("Nachbereitung / Reinigung (Minuten)", {"hint": "die geplante Nachbereitungszeit in Minuten."}),
    ("Zubereitungszeit ( min )", {"label": "Zubereitungszeit (min)", "hint": "summiert alle Zeit-Spalten zur Gesamtzeit des Events."}),
    ("Summe Wareneinsatz", {"hint": "summiert den Wareneinsatz aller verknüpften Menü-Positionen."}),
    ("Wareneinsatz ( % )", {"label": "Wareneinsatz (%)", "hint": "zeigt den Wareneinsatz im Verhältnis zum Menüpreis."}),
    ("WE (%) Wunschpreis", {"hint": "zeigt den Wareneinsatz im Verhältnis zu deinem Wunschpreis."}),
    ("DB I", {"hint": "berechnet Deckungsbeitrag I: Menüpreis minus Wareneinsatz."}),
    ("Durchschnittlicher Stundenlohn", {"hint": "ermittelt den Durchschnittslohn deiner eingeplanten Mitarbeiter."}),
    ("PK Kosten / Produkt", {"label": "PK Kosten / Produkt", "hint": "rechnet die Personalkosten auf das Event herunter."}),
    ("PK Kosten Gesamt", {"hint": "summiert die gesamten Personalkosten des Events."}),
    ("DB II", {"hint": "berechnet Deckungsbeitrag II: DB I minus Personalkosten."}),
    ("GK Kosten / Produkt", {"label": "GK Kosten / Produkt", "hint": "der Gemeinkosten-Anteil aus deiner GK-Datenbank"}),
    ("GK Kosten Summe", {"hint": "rechnet die Gemeinkosten auf dieses Event um."}),
    ("DB III", {"hint": "berechnet Deckungsbeitrag III: DB II minus Gemeinkosten — dein Ergebnis pro Event."}),
    ("VK bei 30% Wareneinsatz ", {"label": "VK bei 30% Wareneinsatz", "hint": "zeigt den Verkaufspreis, wenn du mit 30 % Wareneinsatz kalkulierst."}),
    ("VK bei 25% Wareneinsatz ", {"label": "VK bei 25% Wareneinsatz", "hint": "zeigt den Verkaufspreis bei 25 % Wareneinsatz."}),
    ("VK bei 20% Wareneinsatz ", {"label": "VK bei 20% Wareneinsatz", "hint": "zeigt den Verkaufspreis bei 20 % Wareneinsatz."}),
    ("VK bei 15% Wareneinsatz ", {"label": "VK bei 15% Wareneinsatz", "hint": "zeigt den Verkaufspreis bei 15 % Wareneinsatz."}),
    ("VK bei 10% Wareneinsatz ", {"label": "VK bei 10% Wareneinsatz", "hint": "zeigt den Verkaufspreis bei 10 % Wareneinsatz."}),
    ("Summe Anzahl Food / Bev", {"hint": "zählt, wie viele Food- und Beverage-Positionen im Menü stecken."}),
    ("Kcal", {"hint": "summiert die Kalorien des gesamten Menüs."}),
    ("Protein", {"hint": "summiert das Protein des gesamten Menüs."}),
    ("Fett", {"hint": "summiert das Fett des gesamten Menüs."}),
    ("Kohlenhydrate", {"hint": "summiert die Kohlenhydrate des gesamten Menüs."}),
    ("Allergene", {"hint": "sammelt die Allergene aller Menü-Positionen ein."}),
    ("Einkaufsliste ", {"label": "Einkaufsliste", "hint": "die komplette Einkaufsliste aus den Menü-Positionen"}),
], "Angebot Master Database")

# ---------- Beispielwerte je Karte (Währung der Lektion, klar als Beispiele geführt) ----------
W1_WERTE = [800, 1200, 2000, 2500, 3200, 4000, 4500, 5200, 6000, 6800, 7500]
W2_WERTE = [12, 25, 40, 50, 65, 80, 100, 120, 150, 180, 200, 220, 250, 280, 300, 320, 350, 400]
W3_WERTE = [10, 12, 15, 18, 20, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            18, 20, 22, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37]

def js_str(s):
    return "'" + s.replace("\\", "\\\\").replace("'", "\\'") + "'"

def emit_steps(var, steps):
    out = ["  var " + var + "=["]
    for st in steps:
        d = desc_of(st["html"])
        out.append("    {title:" + js_str(st["title"]) + ",")
        out.append("     desc:" + js_str(d) + ",")
        out.append("     html:" + js_str(st["html"]) + "},")
    out.append("  ];")
    return "\n".join(out)

def emit_varianten(steps, werte):
    vs = []
    for i, st in enumerate(steps):
        nm = re.sub(r"^\d+\.\s*", "", st["title"])
        w = werte[i % len(werte)]
        vs.append("      {name:" + js_str(nm) + ", wert:" + str(w) + "}")
    return ",\n".join(vs)

kacheln = f"""    /* Lektion 11 — Menükalkulation & Catering-Rechner (Engine-generiert, 17.07.2026).
       Werte = BEISPIELWERTE (Währungs-Demo je Karte), Bilder folgen per Higgsfield (img fehlt -> ph()-Platzhalter). */
    {{ kachel_id:'menue_rechner', kachel_name:'Menürechner Master Database', ist_produkt_kachel:true,
      einheit:'Menüpreis (€)', einheit_typ:'preis',
      objekt_varianten:[
{emit_varianten(W1, W1_WERTE)}
      ]}},
    {{ kachel_id:'kunden_master', kachel_name:'Kunden Master Database', ist_produkt_kachel:true,
      einheit:'Personen ( Pax )', einheit_typ:'anzahl',
      objekt_varianten:[
{emit_varianten(W2, W2_WERTE)}
      ]}},
    {{ kachel_id:'kostenaufstellung', kachel_name:'Kostenaufstellung (Angebot Master)', ist_produkt_kachel:true,
      einheit:'Wareneinsatz (%)', einheit_typ:'prozent',
      objekt_varianten:[
{emit_varianten(W3, W3_WERTE)}
      ]}},"""

pages = f"""    /* Lektion 11 — drei Config-Steps-Regale (Engine): Notion-Seite ist leer, Steps kommen aus
       der Config (Quelle: echte Notion-DB-Schemas + extrahierte Formeln, 17.07.2026).
       Anker = leere Divs im #ts11page-Modul. */
    {{ path:/\\/menkalkulation-catering-rechner\\/?$/, kachel:'menue_rechner',
      anchorSel:'#ts11wk1', steps:TS11_STEPS_W1,
      eyebrow:'Warenkorb 1 · DB I — Menürechner',
      title:'Der <span>Menürechner</span>.',
      sub:'Jede Karte ist eine Spalte der Datenbank. Klick sie auf, bau sie nach, leg sie in den Einkaufswagen — die Währung von DB I ist der Menüpreis.',
      summary:'Menüpreis', chain:true }},
    {{ path:/\\/menkalkulation-catering-rechner\\/?$/, kachel:'kunden_master',
      anchorSel:'#ts11wk2', steps:TS11_STEPS_W2,
      eyebrow:'Warenkorb 2 · DB II — Kunden',
      title:'Die <span>Kunden-Datenbank</span>.',
      sub:'Jeder Auftraggeber mit Kontakt, Typ und Status — die Währung von DB II ist die Personenanzahl.',
      summary:'Personen ( Pax )', chain:true,
      relations:[
        {{ type:'ghost', name:'Menürechner Master Database', target:'Gegenspalte · aus dem Menürechner',
          flag:'erscheint automatisch',
          desc:'Erscheint von allein, sobald du im Menürechner die wechselseitige Kunden-Verknüpfung anlegst.',
          content:'<p class="notion-text">→ <b>Eigenschaft :</b> Verknüpfung (Gegenspalte)</p><p class="notion-text">→ <b>Name der Spalte :</b> 🍽️ Menürechner Master Database</p><p class="notion-text">Diese Spalte legst du NICHT selbst an: Sie erscheint automatisch in deiner Kunden Master Database, sobald du im Menürechner (Warenkorb 1, Schritt 11) die Verknüpfung mit wechselseitiger Verbindung anlegst.</p><p class="notion-text">Ab dann siehst du an jedem Kunden, welche Menü-Positionen für ihn kalkuliert wurden.</p>' }}
      ] }},
    {{ path:/\\/menkalkulation-catering-rechner\\/?$/, kachel:'kostenaufstellung',
      anchorSel:'#ts11wk3', steps:TS11_STEPS_W3,
      eyebrow:'Warenkorb 3 · DB III — Kostenaufstellung',
      title:'Die <span>Kostenaufstellung</span>.',
      sub:'Der Rechenkern: zieht Menü, Mitarbeiter, Kunde und Gemeinkosten zusammen — die Währung von DB III ist der Wareneinsatz in Prozent.',
      summary:'Wareneinsatz', chain:true }},"""

out = {
    "steps_w1": emit_steps("TS11_STEPS_W1", W1),
    "steps_w2": emit_steps("TS11_STEPS_W2", W2),
    "steps_w3": emit_steps("TS11_STEPS_W3", W3),
    "kacheln": kacheln,
    "pages": pages,
    "counts": {"w1": len(W1), "w2": len(W2), "w3": len(W3)},
}
open(f"{S}/engine_out.json", "w").write(json.dumps(out, ensure_ascii=False))
print("W1:", len(W1), "Steps · W2:", len(W2), "Steps (+1 Ghost) · W3:", len(W3), "Steps")
print("KACHELN+PAGES generiert:", len(kacheln)//1024, "KB +", len(pages)//1024, "KB")
print("STEPS gesamt:", (len(out['steps_w1'])+len(out['steps_w2'])+len(out['steps_w3']))//1024, "KB")
