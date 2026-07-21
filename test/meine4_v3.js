
/* ============================================================
   notion-ai-fr-unser-system — #tsnaivid Abschnitt 03 Erklaervideo (PC links + Text rechts)
   Katalog 03: 2 Spalten 50/50, Gap FEST 18px, PC fuellt seine halbe Spalte KOMPLETT (kein max-width),
   H2 FEST 42px/1.15/zentriert/einzeilig, Fliesstext linksbuendig 600-650 Zeichen (Pflicht),
   darunter zentrierter Abschluss-Text auf max-width:900px. Text bleibt mobil sichtbar.
   ERSATZ-MOCKUP: Robert hat kein MacBook-Mockup geliefert -> CSS-Laptop-Baustein als zulaessiger
   Uebergangszustand (Katalog 03 "Ersatz-Mockup-Regel"). KLAEREN-Punkt in der Lektions-Datei.
   Video ist im Lektions-Bau kein Thema (Vimeo kommt nach allen Lektionen) -> Play-Button auf Platzhalter.
   ============================================================ */
(function(){
  if(window.__tsnaivid) return; window.__tsnaivid=true;
  function on(){ return /\/notion-ai-fr-unser-system\/?$/.test(location.pathname); }
  var EASE="cubic-bezier(.16,1,.3,1)";

  var CSS=`
  #tsnaivid{width:min(1180px,94vw);margin:64px auto 0;box-sizing:border-box;content-visibility:auto;contain-intrinsic-size:auto 900px;
    font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#fff}
  #tsnaivid *{box-sizing:border-box}
  #tsnaivid .vd-row{display:grid;grid-template-columns:calc((100% - 18px) * .5) calc((100% - 18px) * .5);
    gap:18px;align-items:center}

  /* linke Spalte: PC fuellt die halbe Spalte komplett */
  #tsnaivid .vd-pc{display:flex;align-items:center;justify-content:center;width:100%}
  #tsnaivid .vd-mac{position:relative;width:100%;cursor:pointer;line-height:0;
    transition:transform .5s ${EASE}}
  #tsnaivid .vd-mac:hover{transform:scale(1.02)}
  #tsnaivid .vd-lid{position:relative;width:100%;aspect-ratio:16/10;border-radius:14px;
    background:linear-gradient(160deg,#2a2d3a,#14161f);padding:10px;
    box-shadow:0 30px 64px -28px rgba(0,0,0,.9)}
  #tsnaivid .vd-screen{position:relative;width:100%;height:100%;border-radius:7px;overflow:hidden;
    background:linear-gradient(180deg,#1a1d2b,#0a0c14);border:1px solid rgba(199,180,137,.22)}
  #tsnaivid .vd-base{width:112%;height:11px;margin:0 auto;border-radius:0 0 12px 12px;
    background:linear-gradient(180deg,#23263200,#2a2d3a);position:relative;left:-6%}
  #tsnaivid .vd-base::after{content:"";position:absolute;left:50%;top:0;transform:translateX(-50%);
    width:16%;height:4px;border-radius:0 0 5px 5px;background:rgba(255,255,255,.09)}
  /* Platzhalter-Inhalt im Screen (Notion-AI-Chat angedeutet) */
  #tsnaivid .vd-ph{position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;
    justify-content:flex-end;gap:8px;padding:clamp(10px,2vw,20px);line-height:normal;
}
  #tsnaivid .vd-bub{max-width:74%;border-radius:11px;padding:8px 11px;font-size:clamp(8px,1vw,11.5px);
    line-height:1.45;background:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,.05)),#0d1019;
    border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.72)}
  #tsnaivid .vd-bub.me{align-self:flex-end;
    background:linear-gradient(rgba(199,180,137,.13),rgba(199,180,137,.13)),#0d1019;
    border-color:rgba(199,180,137,.4);color:#fff}
  #tsnaivid .vd-play{position:absolute;inset:0;z-index:4;display:flex;align-items:center;justify-content:center}
  #tsnaivid .vd-play span{width:76px;height:76px;border-radius:50%;background:rgba(255,255,255,.16);
    -webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.55);
    display:flex;align-items:center;justify-content:center;transition:transform .3s ${EASE},background .3s ${EASE}}
  #tsnaivid .vd-mac:hover .vd-play span{transform:scale(1.08);background:rgba(255,255,255,.24)}
  #tsnaivid .vd-play span::after{content:"";border-style:solid;border-width:12px 0 12px 20px;
    border-color:transparent transparent transparent #fff;margin-left:5px}
  #tsnaivid .vd-soon{position:absolute;left:50%;bottom:9%;transform:translateX(-50%);z-index:5;
    font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.42);white-space:nowrap}

  /* rechte Spalte: Titel zentriert (Pflicht), Fliesstext linksbuendig */
  #tsnaivid .vd-h2{font-family:"Lineal Web","Lineal TS",-apple-system,sans-serif;font-weight:600;
    font-size:42px;line-height:1.15;letter-spacing:-.02em;text-align:center;color:#fff;margin:0 0 18px;
    white-space:nowrap}
  #tsnaivid .vd-h2 .ts-gold{color:#c7b489}
  #tsnaivid .vd-txt p{font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86);margin:0 0 13px;text-align:left}
  #tsnaivid .vd-txt p:last-child{margin-bottom:0}
  #tsnaivid .vd-txt b{color:#c7b489;font-weight:600}

  /* Abschluss-Text unter dem 2-Spalten-Block */
  #tsnaivid .vd-close{max-width:900px;margin:46px auto 0;text-align:center;
    font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86)}
  #tsnaivid .vd-close b{color:#c7b489;font-weight:600}

  @media(max-width:900px){
    #tsnaivid .vd-row{grid-template-columns:1fr;gap:26px}
    #tsnaivid .vd-h2{font-size:clamp(1.7rem,7vw,2.2rem);white-space:normal}
  }
  @media(prefers-reduced-motion:reduce){ #tsnaivid .vd-mac{transition:none} }
  `;

  var HTML=
  '<div class="vd-row">'+
    '<div class="vd-pc">'+
      '<div class="vd-mac" role="button" tabindex="0" aria-label="Video folgt">'+
        '<div class="vd-lid"><div class="vd-screen">'+
          '<div class="vd-ph">'+
            '<div class="vd-bub me">Leg mir eine Tabelle für meine Lieferanten an — mit Kontakt, Liefertagen und Mindestbestellwert.</div>'+
            '<div class="vd-bub">Angelegt. Liefertage als Mehrfachauswahl, Mindestbestellwert als Zahl in Euro.</div>'+
          '</div>'+
          '<div class="vd-play"><span></span></div>'+
          '<div class="vd-soon">Video folgt</div>'+
        '</div></div>'+
        '<div class="vd-base"></div>'+
      '</div>'+
    '</div>'+
    '<div class="vd-txt">'+
      '<h2 class="vd-h2">Sagen statt <span class="ts-gold">bauen</span>.</h2>'+
      '<p>Bisher hast du jede Tabelle Spalte für Spalte angelegt: Feldtyp wählen, benennen, bei einer Auswahl jede Option einzeln eintragen. Bei einer Datenbank mit zwanzig Spalten ist das ein halber Abend.</p>'+
      '<p>Mit Notion AI beschreibst du stattdessen, <b>was die Tabelle können soll</b>, und sie entsteht fertig — mit den passenden Feldtypen und den Auswahlmöglichkeiten, die du genannt hast. Wenn du noch nicht weißt, wie die Struktur aussehen müsste, lässt du sie dir vorher in einem Chat entwerfen und gibst das Ergebnis einfach weiter.</p>'+
      '<p>Für Formeln gilt dasselbe. Du schreibst ins Feld, was gelten soll — <b>wenn dieser Wert, dann jener</b> — und die Formel entsteht daraus.</p>'+
    '</div>'+
  '</div>'+
  '<p class="vd-close">Probier es an einer kleinen Tabelle aus, die du ohnehin brauchst, und beschreibe sie in einem einzigen Satz. Schau dir an, was zurückkommt, und korrigiere im Gespräch, was nicht sofort passt, statt es von Hand nachzubauen. Genau dieses Nachschärfen ist die Fähigkeit, die den Unterschied macht, und sie wächst mit jeder Woche, in der du sie benutzt.</p>';

  function injectCSS(){ if(document.getElementById('tsnaivid-css'))return;
    var s=document.createElement('style'); s.id='tsnaivid-css'; s.textContent=CSS; document.head.appendChild(s); }

  function mount(){
    if(!on()){ var o=document.getElementById('tsnaivid'); if(o&&o.parentNode)o.parentNode.removeChild(o); return; }
    if(document.getElementById('tsnaivid')) return true;
    var a=document.getElementById('tsnaiq'); if(!a||!a.parentNode) return;
    injectCSS();
    var el=document.createElement('section'); el.id='tsnaivid'; el.innerHTML=HTML;
    a.parentNode.insertBefore(el, a.nextSibling);
    return true;
  }
  mount();
  document.addEventListener('DOMContentLoaded',mount);
  /* Beobachter NUR bis zum Einbau: dauerhaft angehaengt loest er bei jeder Seitenmutation
     eine Neuberechnung dieses Abschnitts aus und blockiert den Main-Thread (gemessen ~700ms/1,2s). */
  (function(){
    if(mount()) return;
    var mo=new MutationObserver(function(){ if(mount()){ mo.disconnect(); } });
    mo.observe(document.documentElement,{childList:true,subtree:true});
    setTimeout(function(){ mo.disconnect(); },20000);
  })();
})();

/* ============================================================
   notion-ai-fr-unser-system — #tsnai2mac Abschnitt 05 Ergebnis-Blick (Text links / PC rechts)
   Katalog 05: ERSTER Blick der Seite -> IMMER Text links / PC rechts (Alternierungs-Regel).
   Zwei Spalten 50/50, flex, align-items:center, gap clamp(20px,4vw,64px), margin-top clamp(30px,4vh,58px).
   H3 HARTER CAP 32px: clamp(25px,2.8vw,32px)/1.2/linksbuendig, 28px oben / 12px unten, 60/40 weiss->beige,
   maximal EINE Zeile. Text 600-650 Zeichen ueber 2-3 Absaetze (Pflicht). PC exakt max-width:520px.
   Bildunterschrift + Hinweis + Hover-Heartbeat + Klick-Lightbox mit Scroll.
   PLATZHALTER-MECHANIK: POSTER/SHOT stehen auf null -> gestalteter Platzhalter, Auto-Scroll aus.
   Tausch = NUR die zwei Konstanten setzen (Muster #tspkres, Katalog 05 Referenz 4).
   KEINE zusaetzliche Sektions-Ueberschrift ueber dem Blick (Katalog-Pflichtregel).
   ============================================================ */
(function(){
  if(window.__tsnai2mac) return; window.__tsnai2mac=true;
  function on(){ return /\/notion-ai-fr-unser-system\/?$/.test(location.pathname); }
  var EASE="cubic-bezier(.16,1,.3,1)";
  var POSTER=null;  /* Kachel-Vorschaubild — Robert liefert nach; nur diese Zeile setzen */
  var SHOT=null;    /* langer Ganzseiten-Screenshot fuer die Lightbox — dito */

  var CSS=`
  #tsnai2mac{width:100%;margin-top:clamp(30px,4vh,58px);box-sizing:border-box;content-visibility:auto;contain-intrinsic-size:auto 700px;
    font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#fff}
  #tsnai2mac *{box-sizing:border-box}
  #tsnai2mac .m2-row{max-width:1180px;margin:0 auto;display:flex;align-items:center;
    gap:clamp(20px,4vw,64px);padding:0 clamp(16px,3vw,40px)}
  #tsnai2mac .m2-txt{flex:1 1 50%;min-width:0}
  #tsnai2mac .m2-pcwrap{flex:1 1 50%;min-width:0;display:flex;flex-direction:column;align-items:center}

  #tsnai2mac .m2-h3{font-family:"Lineal Web","Lineal TS",-apple-system,sans-serif;font-weight:600;
    font-size:clamp(25px,2.8vw,32px);line-height:1.2;letter-spacing:-.015em;text-align:left;color:#fff;
    margin:28px 0 12px}
  #tsnai2mac .m2-h3 .ts-accent{color:#c7b489}
  #tsnai2mac .m2-txt p{font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86);margin:0 0 13px;text-align:left}
  #tsnai2mac .m2-txt p:last-child{margin-bottom:0}
  #tsnai2mac .m2-txt b{color:#c7b489;font-weight:600}

  #tsnai2mac .m2-tile{width:100%;max-width:520px;cursor:pointer;line-height:normal;
    filter:drop-shadow(0 18px 44px rgba(0,0,0,.5));
    transition:transform .5s ${EASE},filter .5s ${EASE}}
  #tsnai2mac .m2-tile:hover{transform:translateY(-4px) scale(1.02);
    filter:drop-shadow(0 22px 52px rgba(0,0,0,.55)) drop-shadow(0 0 26px rgba(199,180,137,.22))}
  @keyframes naiBeat{0%,70%,100%{filter:drop-shadow(0 22px 52px rgba(0,0,0,.55)) drop-shadow(0 0 26px rgba(199,180,137,.22))}
    85%{filter:drop-shadow(0 22px 52px rgba(0,0,0,.55)) drop-shadow(0 0 38px rgba(199,180,137,.36))}}
  #tsnai2mac .m2-lid{position:relative;width:100%;aspect-ratio:16/10;border-radius:14px;
    background:linear-gradient(160deg,#2a2d3a,#14161f);padding:10px}
  #tsnai2mac .m2-screen{position:relative;width:100%;height:100%;border-radius:7px;overflow:hidden;
    background:linear-gradient(180deg,#1a1d2b,#0a0c14);border:1px solid rgba(199,180,137,.22)}
  #tsnai2mac .m2-base{width:112%;height:11px;margin:0 auto;border-radius:0 0 12px 12px;
    background:linear-gradient(180deg,#23263200,#2a2d3a);position:relative;left:-6%}
  #tsnai2mac .m2-ph{position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;
    align-items:center;justify-content:center;gap:9px;text-align:center;padding:8%;line-height:normal;
    background:linear-gradient(rgba(255,255,255,.03),rgba(255,255,255,.03)),#0a0c14}
  #tsnai2mac .m2-ph-ico{width:34px;height:34px;border-radius:50%;border:1px solid rgba(199,180,137,.45);
    display:flex;align-items:center;justify-content:center;color:#c7b489;font-size:15px}
  #tsnai2mac .m2-ph-t{font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.42)}
  #tsnai2mac .m2-cap{font-size:15px;font-weight:600;color:#fff;margin:16px 0 0;text-align:center}
  #tsnai2mac .m2-cap span{color:#c7b489}
  #tsnai2mac .m2-hint{font-size:11px;letter-spacing:.12em;text-transform:uppercase;
    color:rgba(255,255,255,.38);margin:6px 0 0}
  @keyframes naiHint{0%,100%{opacity:.38}50%{opacity:.72}}

  #tsnai2mac-lb{position:fixed;inset:0;z-index:99999;display:none;align-items:center;justify-content:center;
    background:rgba(3,4,9,.92);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);padding:4vh 4vw}
  #tsnai2mac-lb.open{display:flex}
  #tsnai2mac-lb .lb-frame{position:relative;width:min(1180px,92vw);aspect-ratio:1366/768;
    border-radius:16px;background:linear-gradient(160deg,#2a2d3a,#14161f);padding:12px}
  #tsnai2mac-lb .lb-screen{position:relative;width:100%;height:100%;border-radius:8px;overflow:hidden;
    background:#0a0c14;border:1px solid rgba(199,180,137,.22);display:flex;align-items:center;justify-content:center}
  #tsnai2mac-lb .lb-scroll{width:100%;height:100%;overflow-y:auto;overflow-x:hidden}
  #tsnai2mac-lb .lb-scroll img{width:100%;display:block}
  #tsnai2mac-lb .lb-ph{color:rgba(255,255,255,.45);font-size:13px;letter-spacing:.06em;text-align:center;padding:24px}
  #tsnai2mac-lb .lb-close,#tsnai2mac-lb .lb-expand{position:absolute;top:-46px;width:38px;height:38px;border-radius:50%;
    background:rgba(11,13,20,.9);border:1px solid rgba(255,255,255,.3);color:#fff;font-size:19px;cursor:pointer;
    display:flex;align-items:center;justify-content:center;transition:border-color .3s ease,color .3s ease}
  #tsnai2mac-lb .lb-close{right:0}
  #tsnai2mac-lb .lb-expand{right:46px}
  #tsnai2mac-lb .lb-close:hover,#tsnai2mac-lb .lb-expand:hover{border-color:rgba(199,180,137,.7);color:#c7b489}
  #tsnai2mac-lb .lb-expand svg{width:16px;height:16px}

  @media(max-width:820px){
    #tsnai2mac .m2-row{flex-direction:column;gap:24px}
    #tsnai2mac .m2-pcwrap{order:-1}
    #tsnai2mac .m2-h3{font-size:26px;margin-top:0}
  }
  @media(prefers-reduced-motion:reduce){
    #tsnai2mac .m2-tile,#tsnai2mac .m2-tile:hover{transition:none;animation:none}
    #tsnai2mac .m2-hint{animation:none}
  }
  `;

  var TILE_INNER = POSTER
    ? '<img src="'+POSTER+'" alt="Notion AI im Backoffice" style="width:100%;display:block;border-radius:7px">'
    : '<div class="m2-ph"><div class="m2-ph-ico">AI</div><div class="m2-ph-t">Screenshot folgt</div></div>';

  var HTML=
  '<div class="m2-row">'+
    '<div class="m2-txt">'+
      '<h3 class="m2-h3">Deine Zahlen, <span class="ts-accent">auf Zuruf</span>.</h3>'+
      '<p>Sobald dein Backoffice steht, hörst du auf, in Ansichten zu suchen, und fängst an zu fragen. Welche Gerichte enthalten Tomaten, welcher Lieferant liefert am schnellsten, und was passiert eigentlich mit dem Wareneinsatz, wenn ich diese Zutat gegen jene tausche.</p>'+
      '<p>Notion AI liest dabei die Werte, die in deinen Datenbanken stehen — <b>nicht irgendwelche aus dem Netz</b>. Deshalb bekommst du eine Antwort, die zu deinem Betrieb passt, und kannst ihr nachgehen, weil du weißt, aus welcher Spalte sie kommt.</p>'+
      '<p>Und weil du das von jeder Seite aus tun kannst, ohne vorher irgendetwas zu exportieren, wird aus dem Backoffice ein Gegenüber statt einer Ablage.</p>'+
    '</div>'+
    '<div class="m2-pcwrap">'+
      '<div class="m2-tile" role="button" tabindex="0" aria-label="Vergroessern">'+
        '<div class="m2-lid"><div class="m2-screen">'+TILE_INNER+'</div></div>'+
        '<div class="m2-base"></div>'+
      '</div>'+
      '<p class="m2-cap">Abfrage im Backoffice <span>– Live Beispiel</span></p>'+
      '<p class="m2-hint">Klicke zum Vergrößern</p>'+
    '</div>'+
  '</div>';

  function injectCSS(){ if(document.getElementById('tsnai2mac-css'))return;
    var s=document.createElement('style'); s.id='tsnai2mac-css'; s.textContent=CSS; document.head.appendChild(s); }

  function lightbox(){
    var lb=document.getElementById('tsnai2mac-lb');
    if(lb) return lb;
    lb=document.createElement('div'); lb.id='tsnai2mac-lb';
    lb.innerHTML='<div class="lb-frame">'+
      '<button class="lb-expand" aria-label="Vollbild"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3"/></svg></button>'+
      '<button class="lb-close" aria-label="Schliessen">&times;</button>'+
      '<div class="lb-screen">'+(SHOT
        ? '<div class="lb-scroll"><img src="'+SHOT+'" alt="Backoffice-Abfrage"></div>'
        : '<div class="lb-ph">Screenshot der Notion-AI-Abfrage folgt</div>')+'</div></div>';
    document.body.appendChild(lb);
    function close(){ lb.classList.remove('open'); }
    lb.addEventListener('click',function(e){ if(e.target===lb) close(); });
    lb.querySelector('.lb-close').addEventListener('click',close);
    lb.querySelector('.lb-expand').addEventListener('click',function(){
      var f=lb.querySelector('.lb-frame');
      if(document.fullscreenElement){ document.exitFullscreen(); }
      else if(f.requestFullscreen){ f.requestFullscreen(); }
    });
    lb.__esc=function(e){ if(e.key==='Escape') close(); };
    document.addEventListener('keydown',lb.__esc);
    return lb;
  }

  function mount(){
    if(!on()){
      var o=document.getElementById('tsnai2mac'); if(o&&o.parentNode)o.parentNode.removeChild(o);
      var l=document.getElementById('tsnai2mac-lb');
      if(l){ if(l.__esc) document.removeEventListener('keydown',l.__esc); if(l.parentNode)l.parentNode.removeChild(l); }
      return;
    }
    if(document.getElementById('tsnai2mac')) return true;
    var a=document.getElementById('tsnaivid'); if(!a||!a.parentNode) return;
    injectCSS();
    var el=document.createElement('section'); el.id='tsnai2mac'; el.innerHTML=HTML;
    a.parentNode.insertBefore(el, a.nextSibling);
    var tile=el.querySelector('.m2-tile');
    tile.addEventListener('click',function(){ lightbox().classList.add('open'); });
    tile.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); lightbox().classList.add('open'); } });
    return true;
  }
  mount();
  document.addEventListener('DOMContentLoaded',mount);
  /* Beobachter NUR bis zum Einbau: dauerhaft angehaengt loest er bei jeder Seitenmutation
     eine Neuberechnung dieses Abschnitts aus und blockiert den Main-Thread (gemessen ~700ms/1,2s). */
  (function(){
    if(mount()) return;
    var mo=new MutationObserver(function(){ if(mount()){ mo.disconnect(); } });
    mo.observe(document.documentElement,{childList:true,subtree:true});
    setTimeout(function(){ mo.disconnect(); },20000);
  })();
})();

/* ============================================================
   notion-ai-fr-unser-system — #tsnaiemp Abschnitt 07 Empfehlungs-Kachel "Empfehlung zur Nutzung"
   Katalog 07: Verhalten 1:1 wie #tszein/#tskmemp — Scroll-Entrance, Cursor-Tilt, Glow-Follow,
   Heartbeat, Sync-Highlight alle 2600 ms + goldene Bezier-Linie mit Punkten an beiden Enden.
   Grid minmax(280px,1fr) / 1.5fr, width min(1000px,95vw), margin 34px auto, radius 20px, Gold-Top-Line.
   Linke Animation themenpassend (Katalog-Pflicht): der Umgang mit Notion AI in vier Stufen.
   ============================================================ */
(function(){
  if(window.__tsnaiemp) return; window.__tsnaiemp=true;
  function on(){ return /\/notion-ai-fr-unser-system\/?$/.test(location.pathname); }
  var EASE="cubic-bezier(.16,1,.3,1)";
  var STEPS=[
    ['01','Seite verknüpfen'],
    ['02','Konkret fragen'],
    ['03','Nachschärfen'],
    ['04','Guthaben im Blick']
  ];
  var POINTS=[
    'Verknüpfe die Seite, um die es geht, direkt mit dem Chat. Notion AI kommt zwar überall an deine Informationen, findet die richtige Stelle aber schneller, wenn du sie ihm zeigst.',
    'Frag so konkret wie möglich und nenne die Datenbank beim Namen. „Was kostet die Portion" ist beliebig, „Wareneinsatz je Portion aus DB XI für dieses Gericht" ist eindeutig.',
    'Lass dich nicht frustrieren, wenn die Antworten in den ersten Wochen nicht sitzen. Jedes Backoffice ist anders gebaut, und wie du mit deinem sprechen musst, findest du nur durch Ausprobieren heraus. Bei mir hat das gedauert.',
    'Behalte das Nutzungsguthaben im Auge. Notion AI steckt in einem Monatsabo, und wenn du dein Guthaben aufgebraucht hast, wird die weitere Nutzung zusätzlich berechnet.'
  ];

  var CSS=`
  #tsnaiemp{position:relative;width:min(1000px,95vw);margin:34px auto;content-visibility:auto;contain-intrinsic-size:auto 600px;padding:clamp(26px,4vw,44px) clamp(24px,4.5vw,50px);
    border-radius:20px;box-sizing:border-box;overflow:hidden;
    font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#fff;
    background:linear-gradient(165deg,rgba(255,255,255,.05),rgba(255,255,255,0));
    border:1px solid rgba(255,255,255,.10);
    box-shadow:0 40px 90px -50px rgba(0,0,0,.95),inset 0 0 60px rgba(199,180,137,.045);
    transform:perspective(1100px) rotateX(9deg) translateY(34px) scale(.97);opacity:0;
    transition:transform .9s ${EASE},opacity .9s ${EASE}}
  #tsnaiemp *{box-sizing:border-box}
  #tsnaiemp.in{opacity:1;transform:perspective(1100px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateY(0) scale(1)}
  #tsnaiemp.in{transition:transform .16s ease-out,opacity .9s ${EASE}}
  #tsnaiemp::after{content:"";position:absolute;top:0;left:8%;right:8%;height:1px;pointer-events:none;
    background:linear-gradient(90deg,rgba(199,180,137,0),rgba(199,180,137,.55),rgba(199,180,137,0))}
  #tsnaiemp::before{content:"";position:absolute;width:560px;height:560px;border-radius:50%;pointer-events:none;
    left:var(--gx,50%);top:var(--gy,50%);transform:translate(-50%,-50%);opacity:0;transition:opacity .4s ease;
    background:radial-gradient(circle,rgba(199,180,137,.10),rgba(199,180,137,0) 62%)}
  #tsnaiemp:hover::before{opacity:1}
  #tsnaiemp.beat{animation:naiEmpBeat 2.6s ${EASE} infinite}
  @keyframes naiEmpBeat{0%,72%,100%{box-shadow:0 40px 90px -50px rgba(0,0,0,.95),inset 0 0 60px rgba(199,180,137,.045)}
    86%{box-shadow:0 40px 90px -50px rgba(0,0,0,.95),inset 0 0 60px rgba(199,180,137,.045),0 0 42px -6px rgba(199,180,137,.32)}}

  #tsnaiemp .emp-grid{position:relative;z-index:2;display:grid;grid-template-columns:minmax(280px,1fr) 1.5fr;
    gap:clamp(28px,4.5vw,56px);align-items:center}

  /* linke Spalte: die themenpassende Animation */
  #tsnaiemp .db-hd{font-family:"Lineal Web","Lineal TS",-apple-system,sans-serif;font-weight:600;
    font-size:1.4rem;line-height:1.2;color:#fff;margin:0 0 18px}
  #tsnaiemp .db-hd span{color:#c7b489}
  #tsnaiemp .db-row{display:flex;flex-direction:column;gap:10px}
  #tsnaiemp .tb{display:flex;align-items:center;gap:11px;padding:10px 14px;border-radius:11px;
    border:1px solid rgba(255,255,255,.1);
    background:linear-gradient(rgba(255,255,255,.03),rgba(255,255,255,.03)),#05060b;
    opacity:0;transform:translateY(10px);
    transition:opacity .6s ${EASE},transform .6s ${EASE},border-color .5s ${EASE},box-shadow .5s ${EASE},background .5s ${EASE}}
  #tsnaiemp.in .tb{opacity:1;transform:none}
  #tsnaiemp.in .tb:nth-child(1){transition-delay:.10s}
  #tsnaiemp.in .tb:nth-child(2){transition-delay:.22s}
  #tsnaiemp.in .tb:nth-child(3){transition-delay:.34s}
  #tsnaiemp.in .tb:nth-child(4){transition-delay:.46s}
  #tsnaiemp .tb-n{flex:none;width:25px;height:25px;border-radius:50%;display:inline-flex;align-items:center;
    justify-content:center;font-size:11px;font-weight:700;letter-spacing:.03em;font-variant-numeric:tabular-nums;
    background:rgba(255,255,255,.06);color:rgba(255,255,255,.42);transition:background .5s ${EASE},color .5s ${EASE}}
  #tsnaiemp .tb-l{font-size:13.5px;font-weight:600;color:rgba(255,255,255,.6);transition:color .5s ${EASE}}
  #tsnaiemp .tb.on{border-color:rgba(199,180,137,.5);
    background:linear-gradient(rgba(199,180,137,.11),rgba(199,180,137,.11)),#05060b;
    box-shadow:0 0 0 1px rgba(199,180,137,.14),0 14px 34px -14px rgba(199,180,137,.45)}
  #tsnaiemp .tb.on .tb-n{background:#c7b489;color:#05060b}
  #tsnaiemp .tb.on .tb-l{color:#fff}

  /* Verbindungslinie */
  #tsnaiemp .emp-link{position:absolute;inset:0;z-index:1;pointer-events:none;overflow:visible}
  #tsnaiemp .emp-link path{fill:none;stroke:#c7b489;stroke-width:1.4;stroke-opacity:.55;
    stroke-linecap:round;stroke-dasharray:var(--len,300);stroke-dashoffset:var(--len,300);
    transition:stroke-dashoffset .55s ${EASE}}
  #tsnaiemp .emp-link.draw path{stroke-dashoffset:0}
  #tsnaiemp .emp-link circle{fill:#c7b489;opacity:0;transition:opacity .4s ${EASE}}
  #tsnaiemp .emp-link.draw circle{opacity:.9}

  /* rechte Spalte */
  #tsnaiemp .emph{font-family:"Lineal Web","Lineal TS",-apple-system,sans-serif;font-weight:600;
    font-size:1.45rem;line-height:1.25;color:#fff;margin:0 0 12px}
  #tsnaiemp .emph .eg{color:#c7b489}
  #tsnaiemp .p{font-size:.96rem;line-height:1.7;color:rgba(255,255,255,.68);margin:0 0 16px}
  #tsnaiemp .tsz-ol{list-style:none;counter-reset:naiemp;margin:0;padding:0;display:flex;flex-direction:column;gap:8px}
  #tsnaiemp .tsz-ol li{counter-increment:naiemp;position:relative;padding:9px 13px 9px 38px;border-radius:10px;
    font-size:.92rem;line-height:1.6;color:rgba(255,255,255,.62);border:1px solid transparent;
    transition:color .5s ${EASE},background .5s ${EASE},border-color .5s ${EASE},box-shadow .5s ${EASE}}
  #tsnaiemp .tsz-ol li::before{content:counter(naiemp,decimal-leading-zero);position:absolute;left:13px;top:9px;
    font-size:11px;font-weight:700;color:rgba(255,255,255,.32);font-variant-numeric:tabular-nums;
    transition:color .5s ${EASE}}
  #tsnaiemp .tsz-ol li.lit{color:#fff;border-color:rgba(199,180,137,.34);
    background:linear-gradient(rgba(199,180,137,.07),rgba(199,180,137,.07)),#05060b;
    box-shadow:0 12px 30px -16px rgba(199,180,137,.4)}
  #tsnaiemp .tsz-ol li.lit::before{color:#c7b489}

  @media(max-width:900px){
    #tsnaiemp .emp-grid{grid-template-columns:1fr}
    #tsnaiemp .emp-link{display:none}
    #tsnaiemp{transform:none;opacity:1}
  }
  @media(prefers-reduced-motion:reduce){
    #tsnaiemp,#tsnaiemp.in{transform:none;opacity:1;animation:none;transition:none}
    #tsnaiemp .tb{opacity:1;transform:none}
    #tsnaiemp .emp-link{display:none}
  }
  `;

  var HTML=
  '<svg class="emp-link" aria-hidden="true"><path d=""/><circle r="3.2" cx="0" cy="0"/><circle r="3.2" cx="0" cy="0"/></svg>'+
  '<div class="emp-grid">'+
    '<div class="emp-anim">'+
      '<h3 class="db-hd">Dein Umgang mit <span>Notion AI</span></h3>'+
      '<div class="db-row">'+
        STEPS.map(function(s){ return '<div class="tb"><span class="tb-n">'+s[0]+'</span><span class="tb-l">'+s[1]+'</span></div>'; }).join('')+
      '</div>'+
    '</div>'+
    '<div class="emp-txt">'+
      '<h3 class="emph">Empfehlung zur <span class="eg">Nutzung</span></h3>'+
      '<p class="p">Notion AI wird mit der Zeit besser, weil du besser darin wirst, es zu fragen. Vier Dinge, die dir diesen Weg abkürzen:</p>'+
      '<ol class="tsz-ol">'+POINTS.map(function(p){ return '<li>'+p+'</li>'; }).join('')+'</ol>'+
    '</div>'+
  '</div>';

  function injectCSS(){ if(document.getElementById('tsnaiemp-css'))return;
    var s=document.createElement('style'); s.id='tsnaiemp-css'; s.textContent=CSS; document.head.appendChild(s); }

  function arm(root){
    var reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
    var tbs=[].slice.call(root.querySelectorAll('.tb'));
    var lis=[].slice.call(root.querySelectorAll('.tsz-ol li'));
    var svg=root.querySelector('.emp-link');
    var path=svg.querySelector('path');
    var cs=[].slice.call(svg.querySelectorAll('circle'));
    var cur=-1, timer=null;

    function link(i){
      if(reduced||innerWidth<=900||!tbs[i]||!lis[i]) return;
      var rb=root.getBoundingClientRect(), a=tbs[i].getBoundingClientRect(), b=lis[i].getBoundingClientRect();
      var x1=a.right-rb.left, y1=a.top-rb.top+a.height/2;
      var x2=b.left-rb.left,  y2=b.top-rb.top+b.height/2;
      var mx=(x1+x2)/2;
      var d='M '+x1+' '+y1+' C '+mx+' '+y1+', '+mx+' '+y2+', '+x2+' '+y2;
      path.setAttribute('d',d);
      var len=path.getTotalLength ? path.getTotalLength() : 300;
      path.style.setProperty('--len',len);
      cs[0].setAttribute('cx',x1); cs[0].setAttribute('cy',y1);
      cs[1].setAttribute('cx',x2); cs[1].setAttribute('cy',y2);
      svg.classList.remove('draw'); void svg.offsetWidth; svg.classList.add('draw');
    }
    function step(){
      cur=(cur+1)%tbs.length;
      tbs.forEach(function(t,j){ t.classList.toggle('on',j===cur); });
      lis.forEach(function(l,j){ l.classList.toggle('lit',j===cur); });
      link(cur);
    }
    function start(){ if(timer||reduced) return; step(); timer=setInterval(step,2600); }
    function stop(){ if(timer){ clearInterval(timer); timer=null; } }

    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){
        if(e.isIntersecting){ root.classList.add('in'); start(); } else { stop(); }
      });
    },{threshold:.3});
    io.observe(root);
    var r=root.getBoundingClientRect();
    if(r.top<innerHeight && r.bottom>0){ root.classList.add('in'); start(); }

    root.addEventListener('pointermove',function(e){
      if(matchMedia('(pointer:coarse)').matches) return;
      var b=root.getBoundingClientRect();
      var px=(e.clientX-b.left)/b.width, py=(e.clientY-b.top)/b.height;
      root.style.setProperty('--ry',((px-.5)*5).toFixed(2)+'deg');
      root.style.setProperty('--rx',((.5-py)*4).toFixed(2)+'deg');
      root.style.setProperty('--gx',(px*100).toFixed(1)+'%');
      root.style.setProperty('--gy',(py*100).toFixed(1)+'%');
    });
    root.addEventListener('pointerenter',function(){ root.classList.add('beat'); });
    root.addEventListener('pointerleave',function(){
      root.classList.remove('beat');
      root.style.setProperty('--ry','0deg'); root.style.setProperty('--rx','0deg');
    });
    addEventListener('resize',function(){ if(cur>=0) link(cur); },{passive:true});
    document.addEventListener('visibilitychange',function(){ if(document.hidden) stop(); else start(); });
  }

  function mount(){
    if(!on()){ var o=document.getElementById('tsnaiemp'); if(o&&o.parentNode)o.parentNode.removeChild(o); return; }
    if(document.getElementById('tsnaiemp')) return true;
    var a=document.getElementById('tsnai2mac'); if(!a||!a.parentNode) return;
    injectCSS();
    var el=document.createElement('section'); el.id='tsnaiemp'; el.innerHTML=HTML;
    a.parentNode.insertBefore(el, a.nextSibling);
    arm(el);
    return true;
  }
  mount();
  document.addEventListener('DOMContentLoaded',mount);
  /* Beobachter NUR bis zum Einbau: dauerhaft angehaengt loest er bei jeder Seitenmutation
     eine Neuberechnung dieses Abschnitts aus und blockiert den Main-Thread (gemessen ~700ms/1,2s). */
  (function(){
    if(mount()) return;
    var mo=new MutationObserver(function(){ if(mount()){ mo.disconnect(); } });
    mo.observe(document.documentElement,{childList:true,subtree:true});
    setTimeout(function(){ mo.disconnect(); },20000);
  })();
})();

/* ============================================================
   notion-ai-fr-unser-system — #tsnainext Abschnitt 09 Seitenabschluss (Learnings-Orbs + "Naechste Lektion")
   Katalog 09, Muster 1:1 #tskmnext. 4 Learnings aus dem Lektionsinhalt destilliert.
   ⚠️ PFLICHT-CHECK "__tsNext-Falle": der Slug MUSS zusaetzlich in der PAGES-Map des globalen
   Pagers stehen, sonst loescht der Pager #ts-next-wrap direkt nach dem Mount wieder.
   Eintrag ist gesetzt: /notion-ai-fr-unser-system -> /allgemeine-tipps (Robert 21.07.2026, Reihenfolge 16-17-18).
   ============================================================ */
(function(){
  if(window.__tsnainext) return;
  function on(){ return /\/notion-ai-fr-unser-system\/?$/.test(location.pathname); }
  var NEXT_URL='https://gastronomie-ai-masterclass.super.site/allgemeine-tipps';
  var LEARN=[
    'Du weißt, warum Notion AI <b>in deinen Daten sitzt</b> — und ein Chat daneben nur erklären kann, wovon es abhängt.',
    'Du kannst <b>Tabellen und Formeln beschreiben</b>, statt sie Spalte für Spalte selbst zu bauen.',
    'Du weißt, dass <b>Abfragequalität Übung braucht</b> — und behältst dabei dein Nutzungsguthaben im Blick.',
    'Du kannst <b>Szenarien durchrechnen</b> — fällt eine Zutat aus, siehst du sofort, was das im Wareneinsatz bedeutet.'
  ];
  var CSS=`
  #tsnainext{width:100%;margin-top:44px;padding:0 clamp(20px,4vw,56px);box-sizing:border-box;content-visibility:auto;contain-intrinsic-size:auto 900px;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#fff}
  #tsnainext *{box-sizing:border-box}
  #tsnainext .tsl-head{text-align:center;margin-bottom:66px}
  #tsnainext .tsl-eyebrow{font-family:"Lineal Web","Lineal TS",-apple-system,sans-serif;font-weight:600;font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;color:#c7b489;display:block;margin-bottom:14px}
  #tsnainext .tsl-title{font-family:"Lineal Web","Lineal TS",-apple-system,sans-serif;font-weight:600;font-size:clamp(30px,5vw,46px);line-height:1.05;color:#fff;margin:0}
  #tsnainext .tsl-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(20px,3vw,40px);max-width:1180px;margin:0 auto}
  #tsnainext .tsl-cell{display:flex;justify-content:center}
  #tsnainext .tsl-orb{position:relative;width:100%;max-width:250px;aspect-ratio:1;border-radius:50%;display:flex;align-items:center;justify-content:center;text-align:center;padding:14%;
    background:radial-gradient(120% 120% at 30% 26%,rgba(199,180,137,.20),rgba(255,255,255,.03) 46%,rgba(255,255,255,.015));
    border:1px solid rgba(255,255,255,.12);box-shadow:0 30px 60px -30px rgba(0,0,0,.85),inset 0 1px 0 rgba(255,255,255,.06),inset 0 0 40px rgba(199,180,137,.06);
    opacity:0;transform:translateY(22px);transition:opacity .8s ease,transform .9s cubic-bezier(.16,1,.3,1),border-color .4s ease,box-shadow .4s ease}
  #tsnainext .tsl-orb::after{content:"";position:absolute;top:14%;left:16%;width:26%;height:20%;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.22),rgba(255,255,255,0) 70%);pointer-events:none}
  #tsnainext.in .tsl-orb{opacity:1;transform:none;animation:tslFloat 7s ease-in-out infinite}
  #tsnainext.in .tsl-cell:nth-child(1) .tsl-orb{transition-delay:0s;animation-delay:0s}
  #tsnainext.in .tsl-cell:nth-child(2) .tsl-orb{transition-delay:.14s;animation-delay:-1.6s}
  #tsnainext.in .tsl-cell:nth-child(3) .tsl-orb{transition-delay:.28s;animation-delay:-3.2s}
  #tsnainext.in .tsl-cell:nth-child(4) .tsl-orb{transition-delay:.42s;animation-delay:-4.8s}
  #tsnainext .tsl-orb:hover{border-color:rgba(199,180,137,.5);box-shadow:0 30px 60px -28px rgba(0,0,0,.85),0 0 34px rgba(199,180,137,.2),inset 0 1px 0 rgba(255,255,255,.06)}
  #tsnainext .tsl-t{position:relative;z-index:1;color:rgba(255,255,255,.9);font-size:clamp(12.5px,1.15vw,15px);font-weight:500;line-height:1.5;max-width:22ch}
  #tsnainext .tsl-t b{color:#c7b489;font-weight:700}
  /* Keyframe MUSS hier stehen: der einzige tslFloat im Repo lebt im #tskmnext-CSS und wird
     nur auf /key-metrics injiziert -> hier fehlte er, die Orbs standen still. */
  @keyframes tslFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-11px)}}
  #tsnainext #ts-next{display:inline-flex;align-items:center;gap:9px;height:44px;padding:0 28px;border-radius:9999px;background:#c7b489;color:#05060b;font-family:inherit;font-size:14px;font-weight:700;letter-spacing:.01em;border:none;cursor:pointer;text-decoration:none;transition:background .3s ease,transform .3s ease,box-shadow .3s ease}
  #tsnainext #ts-next:hover{background:#d8c9ab;transform:translateY(-1px);box-shadow:0 14px 30px -12px rgba(199,180,137,.6)}
  #tsnainext #ts-next svg{width:16px;height:16px}
  @media(max-width:1079px){ #tsnainext .tsl-grid{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:520px){ #tsnainext .tsl-grid{grid-template-columns:1fr} }
  @media(prefers-reduced-motion:reduce){ #tsnainext .tsl-orb{opacity:1;transform:none;animation:none} }
  `;
  function injectCSS(){ if(document.getElementById('tsnainext-css'))return; var s=document.createElement('style'); s.id='tsnainext-css'; s.textContent=CSS; document.head.appendChild(s); }
  function build(){
    var el=document.createElement('div'); el.id='tsnainext';
    var orbs=LEARN.map(function(t){ return '<div class="tsl-cell"><div class="tsl-orb"><p class="tsl-t">'+t+'</p></div></div>'; }).join('');
    el.innerHTML=
'<div class="tsl-head">'+
  '<span class="tsl-eyebrow">Was du mitnimmst</span>'+
  '<h2 class="tsl-title">Learnings</h2>'+
'</div>'+
'<div class="tsl-grid">'+orbs+'</div>'+
'';
    return el;
  }
  function mount(){
    if(!on()){ var e=document.getElementById('tsnainext'); if(e&&e.parentNode)e.parentNode.removeChild(e); return; }
    if(document.getElementById('tsnainext')) return true;
    var anchor=document.getElementById('tsnaiemp')||document.getElementById('tsnai2mac')||document.getElementById('tsnaivid');
    if(!anchor||!anchor.parentNode) return;
    injectCSS();
    var el=build();
    anchor.parentNode.insertBefore(el, anchor.nextSibling);
    var io=new IntersectionObserver(function(ev){ if(ev[0].isIntersecting){ el.classList.add('in'); io.disconnect(); } },{threshold:.2});
    io.observe(el);
    var r=el.getBoundingClientRect(); if(r.top<window.innerHeight && r.bottom>0) el.classList.add('in');
    return true;
  }
  window.__tsnainext=true;
  mount();
  document.addEventListener('DOMContentLoaded', mount);
  /* Beobachter NUR bis zum Einbau: dauerhaft angehaengt loest er bei jeder Seitenmutation
     eine Neuberechnung dieses Abschnitts aus und blockiert den Main-Thread (gemessen ~700ms/1,2s). */
  (function(){
    if(mount()) return;
    var mo=new MutationObserver(function(){ if(mount()){ mo.disconnect(); } });
    mo.observe(document.documentElement,{childList:true,subtree:true});
    setTimeout(function(){ mo.disconnect(); },20000);
  })();
})();
