#!/usr/bin/env python3
"""Setzt Modul-4-Code NUR in die eigene Neubau-Zone (blockweise begrenzt, Katalog-Regel 13a),
entfernt einmalig den Altbestand __ts4 (eigener Block) und zieht die Modul-4-Zeilen der __tsNext-PAGES-Map nach."""
import os, re, sys, glob
W=os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)),'..','..')) if os.path.basename(os.path.dirname(os.path.abspath(__file__)))=='m4-bau' else os.path.expanduser('~/kurs-code-neubau/modul-4')
S=os.path.dirname(os.path.abspath(__file__))
js_path=os.path.join(W,'kurs.js'); css_path=os.path.join(W,'kurs.css')
js=open(js_path,encoding='utf-8').read(); css=open(css_path,encoding='utf-8').read()

A='/* >>> NEUBAU MODUL 4 (Claude Code + Notion Agents) — ANFANG >>> */'
E='/* <<< NEUBAU MODUL 4 — ENDE <<< */'

# --- Seiten, die super.so noch nicht synchronisiert hat (Weiter-Kette springt drueber)
PENDING=[l for l in open(os.path.join(S,'pending.txt'),encoding='utf-8').read().split() if l.strip()] if os.path.exists(os.path.join(S,'pending.txt')) else []
ORDER=['/lektionen/dein-backoffice-bekommt-hnde','/lektionen/notion-mit-claude-code-verbinden','/lektionen/die-systemkarte-anlegen','/lektionen/dein-backoffice-befragen',
    '/lektionen/datenbanken-automatisch-aktualisieren','/lektionen/lieferscheine-und-preise-einpflegen','/lektionen/notion-agents-im-betrieb-einsetzen','/lektionen/notion-automationen-bauen',
    '/lektionen/wiederkehrende-routinen-einrichten','/lektionen/wer-macht-was-im-backoffice','/modul-5-claude-code-notion']
def resolve(h):
    while h in PENDING:
        h=ORDER[ORDER.index(h)+1]
    return h
# --- Zone JS
lib=open(os.path.join(S,'lib.js'),encoding='utf-8').read()
lib=re.sub(r'/\*PENDING\*/.*?/\*/PENDING\*/', '/*PENDING*/'+repr(PENDING).replace("'",'"')+'/*/PENDING*/', lib)
parts=[lib]
for f in sorted(glob.glob(os.path.join(S,'p*.js'))):
    parts.append(open(f,encoding='utf-8').read())
parts.append('window.__tsn4Boot && window.__tsn4Boot();\n')
zone='\n'.join(parts)
i=js.index(A); j=js.index(E)
js=js[:i+len(A)]+'\n'+zone+'\n'+js[j:]

# --- Altbestand __ts4 einmalig raus (Block-Anfang bis Modul-0-Helfer-Block)
OLD_START='/* ============================================================\n   MODUL 4 · CLAUDE CODE + NOTION AGENTS — gemeinsame Bausteine (__ts4)'
if OLD_START in js:
    a=js.index(OLD_START)
    # Ende: Beginn des naechsten fremden Blocks (Modul-0-Banner) direkt nach L4.6
    e=js.index('window.__ts4frest=true', a); e=js.index('})();', e)+len('})();')
    b=e
    js=js[:a]+'/* MODUL 4 (Altbestand __ts4, 03.08.2026) entfernt am 01.11.2026 — Neubau steht in der Zone NEUBAU MODUL 4 am Dateiende (window.__tsn4). */\n\n'+js[b:]

# --- __tsNext PAGES: nur die Modul-4-Zeilen
NEWP='''    { re:/\\/(?:lektionen\\/)?dein-backoffice-bekommt-h[a-z]*nde\\/?$/, href:'/lektionen/notion-mit-claude-code-verbinden' },
    { re:/\\/(?:lektionen\\/)?notion-mit-claude-code-verbinden\\/?$/, href:'/lektionen/die-systemkarte-anlegen' },
    { re:/\\/(?:lektionen\\/)?die-systemkarte-anlegen\\/?$/, href:'/lektionen/dein-backoffice-befragen' },
    { re:/\\/(?:lektionen\\/)?dein-backoffice-befragen\\/?$/, href:'/lektionen/datenbanken-automatisch-aktualisieren' },
    { re:/\\/(?:lektionen\\/)?datenbanken-automatisch-aktualisieren\\/?$/, href:'/lektionen/lieferscheine-und-preise-einpflegen' },
    { re:/\\/(?:lektionen\\/)?lieferscheine-und-preise-einpflegen\\/?$/, href:'/lektionen/notion-agents-im-betrieb-einsetzen' },
    { re:/\\/(?:lektionen\\/)?notion-agents-(?:im-betrieb-)?einsetzen\\/?$/, href:'/lektionen/notion-automationen-bauen' },
    { re:/\\/(?:lektionen\\/)?notion-automationen-bauen\\/?$/, href:'/lektionen/wiederkehrende-routinen-einrichten' },
    { re:/\\/(?:lektionen\\/)?wiederkehrende-routinen-einrichten\\/?$/, href:'/lektionen/wer-macht-was-im-backoffice' },
    { re:/\\/(?:lektionen\\/)?wer-macht-was-im-backoffice\\/?$/, href:'/modul-5-claude-code-notion' },
'''
start_key="    { re:/\\/(?:lektionen\\/)?notion-mit-claude-code-verbinden\\/?$/, href:'/lektionen/dein-backoffice-befragen' },"
NEWP=re.sub(r"href:'([^']+)'", lambda m: "href:'"+resolve(m.group(1))+"'", NEWP)
lines=js.split('\n')
def find(pred):
    for k,l in enumerate(lines):
        if pred(l): return k
    return -1
a=find(lambda l: "{ re:/\\/(?:lektionen\\/)?dein-backoffice-bekommt-h[a-z]*nde" in l)
if a<0: a=find(lambda l: "{ re:/\\/(?:lektionen\\/)?notion-mit-claude-code-verbinden\\/?$/" in l)
b=find(lambda l: "{ re:/\\/(?:lektionen\\/)?wer-macht-was-im-backoffice\\/?$/" in l)
if b<0: b=find(lambda l: "{ re:/\\/(?:lektionen\\/)?wiederkehrende-routinen-einrichten\\/?$/" in l)
assert a>0 and b>=a and b-a<=12, (a,b)
lines[a:b+1]=NEWP.rstrip('\n').split('\n')
js='\n'.join(lines)
js=js.replace("Modul 4 - Claude Code + Notion Agents (L4.1-L4.6, gebaut 03.08.2026).","Modul 4 - Claude Code + Notion Agents (L4.0-L4.9, Neubau 01.11.2026).",1)
assert js.count("dein-backoffice-bekommt-h[a-z]*nde\\/?$/, href:")==1

# --- CSS: Altblock raus, Zone setzen
OLDC='/* ===== BLOCK · MODUL 4 · CLAUDE CODE + NOTION AGENTS — Heroes'
if OLDC in css:
    a=css.index(OLDC); b=css.index('/* =====', a+10)
    css=css[:a]+'/* MODUL 4 Hero-Altblock entfernt am 01.11.2026 — Neubau in der Zone NEUBAU MODUL 4 (Klasse .tsn4). */\n\n'+css[b:]
i=css.index(A); j=css.index(E)
css=css[:i+len(A)]+'\n'+open(os.path.join(S,'hero.css'),encoding='utf-8').read()+css[j:]

open(js_path,'w',encoding='utf-8').write(js); open(css_path,'w',encoding='utf-8').write(css)
print('ok', len(zone))
