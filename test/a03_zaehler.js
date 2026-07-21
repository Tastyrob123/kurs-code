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
  #tsnaivid{width:min(1180px,94vw);margin:64px auto 0;box-sizing:border-box;
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
    -webkit-mask-image:radial-gradient(circle 62px at 50% 50%,transparent 0,transparent 96%,#000 100%);
    mask-image:radial-gradient(circle 62px at 50% 50%,transparent 0,transparent 96%,#000 100%)}
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
    if(document.getElementById('tsnaivid')) return;
    var a=document.getElementById('tsnaiq'); if(!a||!a.parentNode) return;
    injectCSS();
    var el=document.createElement('section'); el.id='tsnaivid'; el.innerHTML=HTML;
    a.parentNode.insertBefore(el, a.nextSibling);
    window.__einbau=(window.__einbau||0)+1;
    if(window.__einbau>40){ window.__stop&&window.__stop(); throw new Error('Notbremse: 40 Einbauten'); }
  }
  mount();
  document.addEventListener('DOMContentLoaded',mount);
  var mo=new MutationObserver(mount); mo.observe(document.documentElement,{childList:true,subtree:true}); window.__stop=function(){mo.disconnect()}; setTimeout(function(){mo.disconnect()},2500);
})();

