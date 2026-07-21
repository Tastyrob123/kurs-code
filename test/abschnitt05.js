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
  #tsnai2mac{width:100%;margin-top:clamp(30px,4vh,58px);box-sizing:border-box;
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
    filter:drop-shadow(0 22px 52px rgba(0,0,0,.55)) drop-shadow(0 0 26px rgba(199,180,137,.22));
    animation:naiBeat 2.6s ${EASE} infinite}
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
    color:rgba(255,255,255,.38);margin:6px 0 0;animation:naiHint 2.8s ${EASE} infinite}
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
    if(document.getElementById('tsnai2mac')) return;
    var a=document.getElementById('tsnaivid'); if(!a||!a.parentNode) return;
    injectCSS();
    var el=document.createElement('section'); el.id='tsnai2mac'; el.innerHTML=HTML;
    a.parentNode.insertBefore(el, a.nextSibling);
    var tile=el.querySelector('.m2-tile');
    tile.addEventListener('click',function(){ lightbox().classList.add('open'); });
    tile.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); lightbox().classList.add('open'); } });
  }
  mount();
  document.addEventListener('DOMContentLoaded',mount);
  new MutationObserver(mount).observe(document.documentElement,{childList:true,subtree:true});
})();

