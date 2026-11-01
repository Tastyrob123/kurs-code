/* ============================================================
   NEUBAU MODUL 4 · CLAUDE CODE + NOTION AGENTS (Neukonzept 01.11.2026)
   Bibliothek window.__tsn4 + Seiten-Register. Namensraum tsn4-.
   Zehn Lektionen L4.0-L4.9. Jede Seite: 01 Hero+Einleitung -> 02 eigene
   Erklaeranimation -> Inhalts-Sektionen -> 07 Empfehlungs-Kachel -> 09 Learnings.
   Reveal immer ueber tsReveal (IO + scroll + resize + Intervall + Sofort-Checks
   + hartes fire nach 9 s), Zahlen mit rAF-unabhaengigem Hart-Setzer,
   Endzustand = Default (Startzustand nur hinter .js), reduced-motion = Endzustand,
   Pause bei document.hidden, Kill-Handle window.__tsn4Kill.
   Loest den Altbestand __ts4 (03.08.2026) vollstaendig ab.
   ============================================================ */
(function(){
  if(window.__tsn4) return;

  var SANS='-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif';
  var DISP='"Lineal Web","Lineal TS",-apple-system,BlinkMacSystemFont,"SF Pro Display",sans-serif';
  var MONO='ui-monospace,SFMono-Regular,Menlo,monospace';
  var LOGO='https://tastyrob123.github.io/kurs-code/assets/au80tp.png';
  var IMG='https://tastyrob123.github.io/kurs-code/img/m4/';
  var RING='https://tastyrob123.github.io/kurs-code/img/ring/';
  var EASE='cubic-bezier(.16,1,.3,1)', BACK='cubic-bezier(.34,1.56,.64,1)';

  function addCSS(id, text){
    if(document.getElementById(id)) return;
    var s=document.createElement('style'); s.id=id; s.textContent=text; (document.head||document.documentElement).appendChild(s);
  }
  function reduced(){ return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches); }

  /* tsReveal, verbatim nach Design-System Regel (a) */
  function tsReveal(el, cb){
    var done=false, io=null, iv=null;
    function clean(){
      window.removeEventListener('scroll',check); window.removeEventListener('resize',check);
      if(io){ try{ io.disconnect(); }catch(e){} } if(iv) clearInterval(iv);
    }
    function fire(){ if(done) return; done=true; clean(); try{ cb(); }catch(e){} }
    function check(){ var r=el.getBoundingClientRect(); if(r.top < innerHeight*0.88 && r.bottom > 0) fire(); }
    try{ io=new IntersectionObserver(function(en){ if(en[0].isIntersecting) fire(); },{threshold:.12}); io.observe(el); }catch(e){}
    window.addEventListener('scroll',check,{passive:true});
    window.addEventListener('resize',check,{passive:true});
    iv=setInterval(check,400);
    setTimeout(check,600); setTimeout(check,1600);
    setTimeout(fire,9000);
  }

  function phHero(label){
    var svg='<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="600">'
      +'<rect width="1200" height="600" fill="#0b0d14"/>'
      +'<circle cx="600" cy="270" r="220" fill="rgba(199,180,137,0.045)"/>'
      +'<circle cx="600" cy="270" r="150" fill="rgba(199,180,137,0.05)"/>'
      +'<circle cx="600" cy="270" r="112" fill="none" stroke="rgba(199,180,137,0.35)" stroke-width="1.5"/>'
      +'<text x="600" y="300" text-anchor="middle" font-family="Georgia,serif" font-size="30" letter-spacing="4" fill="rgba(216,201,171,0.75)">'+label+'</text>'
      +'<text x="600" y="470" text-anchor="middle" font-family="-apple-system,Helvetica,sans-serif" font-size="21" letter-spacing="5" fill="rgba(255,255,255,0.4)">3-LAPTOP-COVER</text>'
      +'<text x="600" y="500" text-anchor="middle" font-family="-apple-system,Helvetica,sans-serif" font-size="12" letter-spacing="3" fill="rgba(199,180,137,0.55)">BILD FOLGT</text>'
      +'</svg>';
    return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
  }

  /* ---------- Grund-CSS (Einleitung, Sektionen, Bausteine) ---------- */
  var BASE=`
  .tsn4 .ts-body{max-width:860px;margin:56px auto 0;padding:0 clamp(24px,4vw,56px);font-family:${SANS};text-align:center}
  .tsn4 .ts-body p{font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86);margin:0 0 13px}
  .tsn4 .ts-body p:last-child{margin-bottom:0}
  .tsn4 .ts-body b{color:#c7b489;font-weight:600}
  .tsn4-sec{max-width:860px;margin:84px auto 0;padding:0 clamp(24px,4vw,56px);font-family:${SANS};color:#fff;box-sizing:border-box}
  .tsn4-sec *{box-sizing:border-box}
  .tsn4-sec .tsn4-eb{display:flex;justify-content:center;align-items:center;gap:9px;font:600 13px/1 ${SANS};letter-spacing:.16em;text-transform:uppercase;color:#c7b489;margin:0 0 14px}
  .tsn4-sec .tsn4-eb::before{content:"";width:7px;height:7px;border-radius:50%;background:#c7b489;box-shadow:0 0 12px rgba(199,180,137,.7)}
  .tsn4-sec h3{font-family:${DISP};font-weight:600;letter-spacing:-.015em;color:#fff;font-size:clamp(25px,2.8vw,32px);line-height:1.2;margin:0 0 14px;text-align:center;text-wrap:balance}
  .tsn4-sec h3 .g{color:#c7b489}
  .tsn4-sec h4{font-family:${DISP};font-weight:600;font-size:19px;line-height:1.3;color:#fff;margin:30px 0 10px}
  .tsn4-sec h4 .g{color:#c7b489}
  .tsn4-sec p{font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86);margin:0 0 13px}
  .tsn4-sec p b,.tsn4-sec li b{color:#c7b489;font-weight:600}
  .tsn4-sec .lead{text-align:center;max-width:720px;margin:0 auto 30px}
  .tsn4-sec .gl{font-weight:600;color:#fff}
  .tsn4-sec ul.tsn4-ul{list-style:none;margin:6px 0 16px;padding:0}
  .tsn4-sec ul.tsn4-ul li{position:relative;padding-left:22px;margin:0 0 10px;font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86)}
  .tsn4-sec ul.tsn4-ul li::before{content:"";position:absolute;left:0;top:10px;width:5px;height:5px;border-radius:50%;background:#c7b489}

  .tsn4-cards{display:grid;gap:16px;margin:4px 0 8px}
  .tsn4-cards.c2{grid-template-columns:repeat(2,1fr)}
  .tsn4-cards.c3{grid-template-columns:repeat(3,1fr)}
  .tsn4-card{position:relative;background:linear-gradient(rgba(255,255,255,.035),rgba(255,255,255,.035)),#05060b;border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:20px 20px 18px;
    transition:border-color .4s cubic-bezier(.16,1,.3,1),transform .5s ${EASE},box-shadow .4s cubic-bezier(.16,1,.3,1)}
  .tsn4-card:hover{border-color:rgba(199,180,137,.45);transform:translateY(-3px);box-shadow:0 24px 50px -24px rgba(0,0,0,.75),0 0 28px rgba(199,180,137,.12)}
  .tsn4-card .k{display:block;font:600 9.5px/1 ${SANS};letter-spacing:.14em;text-transform:uppercase;color:#c7b489;margin-bottom:11px}
  .tsn4-card .n{font-family:${DISP};font-weight:600;font-size:17px;line-height:1.25;color:#fff;margin:0 0 11px}
  .tsn4-card hr{border:0;border-top:1px solid rgba(255,255,255,.09);margin:0 0 11px}
  .tsn4-card p{font-size:14px;line-height:1.58;margin:0 0 9px}
  .tsn4-card p:last-child{margin-bottom:0}
  .tsn4-card .f{font-size:13px;line-height:1.5;color:rgba(255,255,255,.86);margin:10px 0 0}
  .tsn4-card .ph{width:54px;height:54px;border-radius:50%;overflow:hidden;border:1.5px solid rgba(199,180,137,.5);margin:0 0 14px;background:#0b0d14;box-shadow:0 12px 26px -12px rgba(0,0,0,.9)}
  .tsn4-card .ph img{width:100%;height:100%;object-fit:cover;display:block}

  .tsn4-do{margin:26px 0 0;padding:22px 24px;border-radius:16px;border:1px solid rgba(199,180,137,.32);
    background:linear-gradient(rgba(199,180,137,.055),rgba(199,180,137,.055)),#05060b}
  .tsn4-do .k{display:block;font:600 9.5px/1 ${SANS};letter-spacing:.14em;text-transform:uppercase;color:#c7b489;margin-bottom:12px}
  .tsn4-do ol{list-style:none;counter-reset:d;margin:0;padding:0}
  .tsn4-do li{counter-increment:d;position:relative;padding:0 0 0 32px;margin:0 0 11px;font-size:15px;line-height:1.6;color:rgba(255,255,255,.86)}
  .tsn4-do li:last-child{margin-bottom:0}
  .tsn4-do li::before{content:counter(d,decimal-leading-zero);position:absolute;left:0;top:2px;font:700 11px/1.5 ${SANS};color:#c7b489;font-variant-numeric:tabular-nums}
  .tsn4-do li b{color:#c7b489;font-weight:600}

  .tsn4-cmd{position:relative;margin:18px 0 6px;border-radius:13px;text-align:left;overflow:hidden;
    background:linear-gradient(rgba(255,255,255,.045),rgba(255,255,255,.045)),#05060b;border:1px solid rgba(199,180,137,.28)}
  .tsn4-cmd .bar{display:flex;align-items:center;gap:10px;padding:9px 12px 9px 16px;border-bottom:1px solid rgba(255,255,255,.07)}
  .tsn4-cmd .bar span{font:600 9.5px/1 ${SANS};letter-spacing:.14em;text-transform:uppercase;color:#c7b489;flex:1}
  .tsn4-cmd .bar button{height:26px;padding:0 11px;border-radius:7px;border:1px solid rgba(199,180,137,.35);background:rgba(199,180,137,.12);color:#efe6d2;
    font:600 10.5px/1 ${SANS};letter-spacing:.08em;text-transform:uppercase;cursor:pointer;transition:background .3s cubic-bezier(.16,1,.3,1),color .3s cubic-bezier(.16,1,.3,1)}
  .tsn4-cmd .bar button:hover{background:#c7b489;color:#05060b}
  .tsn4-cmd code{display:block;padding:14px 18px 15px;font:500 12.5px/1.72 ${MONO};letter-spacing:.005em;color:#efe6d2;white-space:pre-wrap;word-break:break-word}
  .tsn4-mono{display:inline-block;font:600 12.5px/1.5 ${MONO};color:#efe6d2;background:rgba(255,255,255,.05);border:1px solid rgba(199,180,137,.28);border-radius:7px;padding:1px 7px}

  .tsn4-tbl{width:100%;border-collapse:separate;border-spacing:0;margin:14px 0 8px;font-size:14px;border:1px solid rgba(255,255,255,.12);border-radius:14px;overflow:hidden;
    background:linear-gradient(rgba(255,255,255,.03),rgba(255,255,255,.03)),#05060b}
  .tsn4-tbl th{text-align:left;font:600 9.5px/1.2 ${SANS};letter-spacing:.13em;text-transform:uppercase;color:#c7b489;padding:13px 14px;border-bottom:1px solid rgba(255,255,255,.09)}
  .tsn4-tbl td{padding:12px 14px;color:rgba(255,255,255,.86);line-height:1.5;border-bottom:1px solid rgba(255,255,255,.06);vertical-align:top}
  .tsn4-tbl tr:last-child td{border-bottom:0}
  .tsn4-tbl td b{color:#c7b489;font-weight:600}
  .tsn4-tbl .old{color:rgba(255,255,255,.5);text-decoration:line-through}
  .tsn4-tbl .num{font-variant-numeric:tabular-nums;white-space:nowrap}

  .tsn4-err{margin:22px 0 0;display:grid;gap:10px}
  .tsn4-err div{padding:14px 16px 14px 46px;position:relative;border-radius:13px;border:1px solid rgba(227,37,82,.28);
    background:linear-gradient(rgba(227,37,82,.05),rgba(227,37,82,.05)),#05060b;font-size:14.5px;line-height:1.58;color:rgba(255,255,255,.86)}
  .tsn4-err div::before{content:"!";position:absolute;left:16px;top:14px;width:18px;height:18px;border-radius:50%;border:1px solid rgba(227,37,82,.7);color:#e35d76;font:700 11px/16px ${SANS};text-align:center}
  .tsn4-err b{color:#fff;font-weight:600}

  .tsn4-note{margin:16px 0 0;font-size:13px;line-height:1.55;color:rgba(255,255,255,.86)}
  .tsn4-note a{color:#c7b489}
  .tsn4-close{max-width:760px;margin:34px auto 0;text-align:center;font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86)}
  .tsn4-close b{color:#c7b489;font-weight:600}

  @media(max-width:820px){
    .tsn4-cards.c2,.tsn4-cards.c3{grid-template-columns:1fr}
    .tsn4-tbl{font-size:13px} .tsn4-tbl th,.tsn4-tbl td{padding:10px 10px}
  }
  @media(max-width:620px){
    .tsn4-tbl{display:block;overflow-x:auto;-webkit-overflow-scrolling:touch}
    .tsn4-tbl td{overflow-wrap:anywhere;min-width:90px}
  }
  `;

  /* ---------- Animations-Buehne (gemeinsamer Rahmen, Inhalt je Seite eigen) ---------- */
  function stageCSS(id, extra){
    var steps='';
    for(var i=1;i<=14;i++){ steps+=`#${id}.js.s${i} [data-s="${i}"]{opacity:1;transform:none}\n#${id}.js.s${i} path.ln[data-s="${i}"],#${id}.js.s${i} line.ln[data-s="${i}"]{stroke-dashoffset:0}\n`; }
    return `
  #${id}{width:100%;margin:96px 0 0;padding:0 clamp(18px,4vw,56px);box-sizing:border-box;font-family:${SANS};color:#fff}
  #${id} *{box-sizing:border-box}
  #${id} .a-head{text-align:center;max-width:860px;margin:0 auto 44px;padding:0 24px}
  #${id} .a-eb{display:inline-flex;align-items:center;gap:9px;font:600 13px/1 ${SANS};letter-spacing:.16em;text-transform:uppercase;color:#c7b489;margin-bottom:12px}
  #${id} .a-eb::before{content:"";width:7px;height:7px;border-radius:50%;background:#c7b489;box-shadow:0 0 12px rgba(199,180,137,.7)}
  #${id} .a-title{font-family:${DISP};font-weight:600;font-size:clamp(1.9rem,4.4vw,2.9rem);line-height:1.08;letter-spacing:-.01em;text-wrap:balance;color:#fff;margin:0}
  #${id} .a-title .g{color:#c7b489}
  #${id} .a-sub{font-size:16.5px;line-height:1.6;color:rgba(255,255,255,.86);max-width:720px;margin:16px auto 0}
  #${id} .a-wrap{position:relative;max-width:1000px;margin:0 auto}
  #${id} .a-stage{position:relative;margin:0 auto}
  #${id} [data-s]{transition:opacity .8s ${EASE},transform .9s ${EASE}}
  #${id}.js [data-s]{opacity:0;transform:translateY(14px) scale(.97)}
  #${id} .st:not(.flow){container-type:inline-size}
  #${id} path.ln.dash{stroke-dasharray:.012 .012!important;stroke-dashoffset:0!important}
  #${id} path.ln,#${id} line.ln{stroke-dasharray:1;stroke-dashoffset:0;transition:stroke-dashoffset 1.1s ${EASE},opacity .6s cubic-bezier(.16,1,.3,1)}
  #${id}.js path.ln,#${id}.js line.ln{stroke-dashoffset:1}
  ${steps}
  #${id} .a-rail{display:flex;justify-content:center;gap:8px;margin:30px auto 0;flex-wrap:wrap}
  #${id} .a-step{min-width:44px;height:30px;padding:0 12px;border-radius:999px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.03);color:rgba(255,255,255,.55);
    font:700 11px/1 ${SANS};letter-spacing:.06em;font-variant-numeric:tabular-nums;cursor:pointer;transition:all .45s ${EASE}}
  #${id} .a-step:hover{border-color:rgba(199,180,137,.5);color:#fff}
  #${id} .a-step.on{background:rgba(199,180,137,.14);border-color:rgba(199,180,137,.6);color:#efe6d2;box-shadow:0 0 18px rgba(199,180,137,.18)}
  #${id} .a-cap{max-width:700px;min-height:78px;margin:16px auto 0;text-align:center;font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86);transition:opacity .45s cubic-bezier(.16,1,.3,1)}
  #${id} .a-cap.fade{opacity:0}
  #${id} .a-cap b{color:#c7b489;font-weight:600}
  #${id} .a-foot{display:flex;justify-content:center;align-items:center;gap:16px;margin:12px auto 0;flex-wrap:wrap}
  #${id} .a-note{font-size:11.5px;letter-spacing:.06em;color:rgba(255,255,255,.62)}
  #${id} .a-replay{height:32px;padding:0 16px;border-radius:999px;border:1px solid rgba(199,180,137,.5);background:transparent;color:#c7b489;font:600 11px/1 ${SANS};letter-spacing:.12em;text-transform:uppercase;cursor:pointer;transition:background .35s cubic-bezier(.16,1,.3,1),color .35s cubic-bezier(.16,1,.3,1)}
  #${id} .a-replay:hover{background:#c7b489;color:#05060b}
  #${id}.hid *{animation-play-state:paused!important}
  @media(max-width:820px){ #${id} .a-cap{min-height:128px} }
  @media(prefers-reduced-motion:reduce){ #${id} [data-s]{transition:none} }
  ${extra||''}`;
  }


  /* ---------- gemeinsame Buehnen-Bausteine (scope .tsn4a) ---------- */
  var SHARED=`
  .tsn4a .sc{overflow-x:auto;overflow-y:visible;scrollbar-width:none;-webkit-overflow-scrolling:touch;padding:6px 0 10px}
  .tsn4a .sc::-webkit-scrollbar{display:none}
  .tsn4a .st{position:relative;width:100%;min-width:760px;margin:0 auto}
  .tsn4a .st>svg.lines{position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none;z-index:1}
  .tsn4a .st>*:not(svg){position:absolute;z-index:2}
  .tsn4a .st.flow{min-width:0}
  .tsn4a .st.flow>*:not(svg){position:relative}
  .tsn4a path.ln,.tsn4a line.ln{fill:none;stroke:rgba(199,180,137,.42);stroke-width:1.3;stroke-linecap:round}
  .tsn4a path.ln.dash{stroke-dasharray:.012 .012}
  .tsn4a path.sp{fill:none;stroke:#efe6d2;stroke-width:2.6;stroke-linecap:round;stroke-dasharray:.05 1.05;stroke-dashoffset:.05;opacity:0;filter:drop-shadow(0 0 5px rgba(239,230,210,.85))}
  .tsn4a.built:not(.hid) path.sp{opacity:1;animation:tsn4Spark 3.8s cubic-bezier(.45,.05,.55,.95) infinite}
  .tsn4a .md{border-radius:50%;overflow:hidden;background:#0b0d14;border:1.5px solid rgba(199,180,137,.55);
    box-shadow:0 20px 46px -18px rgba(0,0,0,.92),0 0 0 7px rgba(199,180,137,.055);transition:border-color .6s cubic-bezier(.16,1,.3,1),box-shadow .6s cubic-bezier(.16,1,.3,1)}
  .tsn4a .md img{width:100%;height:100%;object-fit:cover;display:block}
  .tsn4a .md.lit{border-color:rgba(199,180,137,.95);box-shadow:0 20px 46px -18px rgba(0,0,0,.92),0 0 0 7px rgba(199,180,137,.12),0 0 34px rgba(199,180,137,.32)}
  .tsn4a.built:not(.hid) .md.br{animation:tsn4Breath 4.4s ease-in-out infinite}
  .tsn4a .lbl{font:600 10px/1.2 -apple-system,BlinkMacSystemFont,"SF Pro Display",sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#c7b489;text-align:center;white-space:nowrap}
  .tsn4a .pill{display:inline-flex;align-items:center;gap:7px;height:26px;padding:0 11px;border-radius:999px;background:rgba(11,13,20,.86);border:1px solid rgba(199,180,137,.4);
    font:600 11.5px/1 -apple-system,BlinkMacSystemFont,sans-serif;color:#efe6d2;white-space:nowrap}
  .tsn4a .cardx{border-radius:15px;border:1px solid rgba(255,255,255,.13);background:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04)),#05060b;
    box-shadow:0 24px 56px -30px rgba(0,0,0,.9);transition:border-color .6s cubic-bezier(.16,1,.3,1),box-shadow .6s cubic-bezier(.16,1,.3,1),background .6s cubic-bezier(.16,1,.3,1)}
  .tsn4a .cardx.lit{border-color:rgba(199,180,137,.62);background:linear-gradient(rgba(199,180,137,.075),rgba(199,180,137,.075)),#05060b;box-shadow:0 24px 56px -30px rgba(0,0,0,.9),0 0 30px rgba(199,180,137,.16)}
  .tsn4a .mono{font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
  .tsn4a .ok{color:#8FCBAA}.tsn4a .no{color:#e35d76}
  @keyframes tsn4Spark{0%{stroke-dashoffset:.05}62%{stroke-dashoffset:-1.05}100%{stroke-dashoffset:-1.05}}
  @keyframes tsn4Breath{0%,100%{box-shadow:0 20px 46px -18px rgba(0,0,0,.92),0 0 0 7px rgba(199,180,137,.055)}50%{box-shadow:0 20px 46px -18px rgba(0,0,0,.92),0 0 0 9px rgba(199,180,137,.09),0 0 26px rgba(199,180,137,.18)}}
  .tsn4a .st:not(.flow) .lbl{font-size:1cqw}
  .tsn4a .st:not(.flow) .pill{height:2.6cqw;padding:0 1.1cqw;gap:.7cqw;font-size:1.15cqw}
  @media(prefers-reduced-motion:reduce){ .tsn4a path.sp{display:none} .tsn4a *{animation:none!important;transition:none!important} }
  `;
  /* Buehnen skalieren wie ein Bild: px (>2) der Seiten-CSS -> cqw des 1000er-Rasters, Media-Queries bleiben px */
  function scale(c){ var keep=[]; c=c.replace(/@media\([^)]*\)/g,function(m){ keep.push(m); return '@@M'+(keep.length-1)+'@@'; });
    c=c.replace(/(-?\d*\.?\d+)px/g,function(m,n){ var v=parseFloat(n); return Math.abs(v)<=2?m:(Math.round(v*1000)/10000)+'cqw'; });
    return c.replace(/@@M(\d+)@@/g,function(m,i){ return keep[+i]; }); }
  /* Position im 1000er-Raster der Buehne -> Prozent */
  function pos(x,y,w,h,H){ return 'left:'+(x/10)+'%;top:'+(y/H*100)+'%;'+(w!=null?'width:'+(w/10)+'%;':'')+(h!=null?'height:'+(h/H*100)+'%;':''); }


  /* ---------- Echtes Notion (Dark Mode) und echtes Terminal fuer Nachbauten ----------
     Werte am 01.11.2026 in echtem Notion abgenommen (getComputedStyle, Original-Icon-Masken).
     Innerhalb dieser Fenster keine Kurs-Gestaltung. Liefert CSS-Text fuer die Seiten-CSS
     (wird dort mitskaliert). Klassen: .nw (Notion-Fenster), .tw (Terminal), .ed (Editor). */
  var NFONT='ui-sans-serif,-apple-system,"system-ui","Segoe UI Variable Display","Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif';
  var NI={
    title:'M4.963 4.447H7.7l3.832 11.107H9.55l-.863-2.5h-4.71l-.862 2.5H1.13zm-.34 6.732H8.04L6.363 6.321H6.3zM16.995 9.08l.195-.467h1.68v6.94h-1.68l-.195-.796.004-.008a2.9 2.9 0 0 1-2.036.804c-1.825 0-3.28-1.513-3.28-3.635s1.455-3.635 3.28-3.635c.8 0 1.497.29 2.032.796m-3.438 2.835c0 1.145.715 1.96 1.719 1.96s1.719-.816 1.719-1.96-.715-1.96-1.72-1.96c-1.003 0-1.718.815-1.718 1.96',
    text:'M17.5 4.063v1.875h-15V4.063zm-15 6.875h15V9.062h-15zm0 5h7.875v-1.876H2.5z',
    rel:'M15.313 4.688v10.625h-1.876V7.888l-8.05 8.05-1.324-1.325 8.05-8.05H4.688V4.688z',
    num:'M16.875 8.125V6.25h-2.5l.938-3.75h-1.876L12.5 6.25H9.375l.938-3.75H8.437L7.5 6.25H3.75v1.875h3.281l-.937 3.75H3.125v1.875h2.5l-.937 3.75h1.875l.937-3.75h3.125l-.937 3.75h1.874l.938-3.75h3.75v-1.875h-3.281l.937-3.75zm-5.781 3.75H7.969l.937-3.75h3.125z',
    formula:'M5.375 16.688h9.25v-1.875H8.002L13.153 10 8.002 5.188h6.623V3.313h-9.25v1.986L10.407 10l-5.032 4.7z',
    rollup:'M13.963 12.194A6.248 6.248 0 0 0 8.75 2.5a6.25 6.25 0 0 0-6.251 6.25 6.248 6.248 0 0 0 9.694 5.213L15.73 17.5l1.769-1.769zm-5.213.931a4.376 4.376 0 1 1 .002-8.752 4.376 4.376 0 0 1-.002 8.752',
    date:'M15 3.75V1.875h-1.875V3.75h-6.25V1.875H5V3.75H2.5v12.5h15V3.75zm.625 10.938H4.375V8.75h11.25z',
    table:'M4.5 4.125A2.125 2.125 0 0 0 2.375 6.25v7.5c0 1.174.951 2.125 2.125 2.125h11a2.125 2.125 0 0 0 2.125-2.125v-7.5A2.125 2.125 0 0 0 15.5 4.125zm11.875 7h-5.75v-2.25h5.75zm-5.75 1.25h5.75v1.375a.875.875 0 0 1-.875.875h-4.875zm-1.25-1.25h-5.75v-2.25h5.75zm-5.75 1.25h5.75v2.25H4.5a.875.875 0 0 1-.875-.875zm0-4.75V6.25c0-.483.392-.875.875-.875h4.875v2.25zm7 0v-2.25H15.5c.483 0 .875.392.875.875v1.375z'
  };
  var NPAGE='<svg class="pg" viewBox="4.12 2.37 11.75 15.25"><path d="M6.25 2.375A2.125 2.125 0 0 0 4.125 4.5v11c0 1.174.951 2.125 2.125 2.125h7.5a2.125 2.125 0 0 0 2.125-2.125V8.121c0-.563-.224-1.104-.622-1.502L11.63 2.997a2.13 2.13 0 0 0-1.502-.622zM5.375 4.5c0-.483.392-.875.875-.875h3.7V6.25A2.05 2.05 0 0 0 12 8.3h2.625v7.2a.875.875 0 0 1-.875.875h-7.5a.875.875 0 0 1-.875-.875zm8.691 2.7H12a.95.95 0 0 1-.95-.95V4.184z"/></svg>';
  var NCHEV='<svg class="cv" viewBox="0 0 16 16"><path d="M7.47 10.93a.75.75 0 0 0 1.06 0l4.32-4.32a.75.75 0 1 0-1.06-1.06L8 9.34 4.21 5.55a.75.75 0 0 0-1.06 1.06z"/></svg>';
  function nic(k){ return '<svg class="ni" viewBox="0 0 20 20"><path d="'+NI[k]+'"/></svg>'; }
  function nCSS(id){ var r='#'+id; return `
  ${r} .nw{background:#191919;border:1px solid rgba(255,255,243,.082);border-radius:10px;overflow:hidden;font-family:${NFONT};color:rgb(240,239,237);box-shadow:0 30px 70px -30px rgba(0,0,0,.95);display:flex;flex-direction:column}
  ${r} .nw .nbar{height:44px;flex:0 0 44px;display:flex;align-items:center;gap:6px;padding:0 14px;font-size:14px;color:rgb(240,239,237);white-space:nowrap;overflow:hidden}
  ${r} .nw .nbar .sep{color:rgb(125,122,117)}
  ${r} .nw .ni{width:16px;height:16px;flex:0 0 16px;fill:rgb(173,169,163)}
  ${r} .nw .pg{width:16px;height:18px;flex:0 0 16px;fill:rgb(155,155,155)}
  ${r} .nw .cv{width:12px;height:12px;flex:0 0 12px;fill:rgb(125,122,117);transform:rotate(-90deg)}
  ${r} .nw .cv.open{transform:none}
  ${r} .nw .ntitle{font-weight:700;color:rgb(240,239,237);letter-spacing:normal}
  ${r} .nw .nside{background:#202020;padding:10px 8px}
  ${r} .nw .nsec{font-size:12px;font-weight:500;color:rgb(125,122,117);padding:12px 8px 6px}
  ${r} .nw .nrow{height:30px;display:flex;align-items:center;gap:6px;padding:0 8px;border-radius:6px;font-size:14px;line-height:21px;color:rgb(188,186,182);white-space:nowrap;overflow:hidden;transition:color .5s cubic-bezier(.16,1,.3,1)}
  ${r} .nw .nrow.on{color:rgb(240,239,237)}
  ${r} .nw .nrow.ws{font-weight:500;color:rgb(240,239,237)}
  ${r} .nw table.nt{border-collapse:collapse;width:100%;font-size:14px;line-height:21px;color:rgb(240,239,237)}
  ${r} .nw table.nt th{height:36px;padding:0 8px;text-align:left;font-weight:400;color:rgb(173,169,163);border-bottom:1px solid rgba(255,255,243,.082);border-right:1px solid rgba(255,255,243,.082);white-space:nowrap}
  ${r} .nw table.nt th>span{display:inline-flex;align-items:center;gap:6px}
  ${r} .nw table.nt td{height:37px;padding:0 8px;border-bottom:1px solid rgba(255,255,243,.082);border-right:1px solid rgba(255,255,243,.082);white-space:nowrap;overflow:hidden}
  ${r} .nw table.nt th:last-child,${r} .nw table.nt td:last-child{border-right:0}
  ${r} .nw table.nt td.r{text-align:right;font-variant-numeric:tabular-nums}
  ${r} .nw .np{font-size:16px;line-height:24px;color:rgb(240,239,237)}
  ${r} .nw .nbtn{display:inline-flex;align-items:center;height:28px;padding:0 10px;border-radius:6px;background:rgb(39,131,222);color:rgb(243,249,253);font-size:14px;font-weight:500}
  ${r} .tw{background:#1e1e1e;border:1px solid rgba(255,255,255,.12);border-radius:10px;overflow:hidden;box-shadow:0 30px 70px -30px rgba(0,0,0,.95);display:flex;flex-direction:column;font-family:Menlo,ui-monospace,SFMono-Regular,monospace;color:#e6e6e6}
  ${r} .tw .tbar{height:28px;flex:0 0 28px;display:flex;align-items:center;gap:7px;padding:0 10px;background:#2b2b2b;border-bottom:1px solid rgba(0,0,0,.6)}
  ${r} .tw .tbar i{width:11px;height:11px;border-radius:50%}
  ${r} .tw .tbar i:nth-child(1){background:#ff5f57}${r} .tw .tbar i:nth-child(2){background:#febc2e}${r} .tw .tbar i:nth-child(3){background:#28c840}
  ${r} .tw .tbar span{flex:1;text-align:center;margin-right:40px;font:500 12px/1 -apple-system,BlinkMacSystemFont,sans-serif;color:rgba(255,255,255,.7)}
  ${r} .tw .tl{font-size:12px;line-height:1.6;padding:0 12px;white-space:pre-wrap;word-break:break-word}
  ${r} .tw .tl:first-of-type{padding-top:10px}
  ${r} .tw .dim{color:rgba(230,230,230,.6)}
  `; }

  var ACTIVE=[];   /* laufende Buehnen fuer Kill/Hidden */
  function anim(cfg){
    /* cfg: id, anchorId, eyebrow, title, sub, html, css, beats:[{t,cap}], note, onBeat(root,i,T), final(root), reset(root), built(root) */
    if(document.getElementById(cfg.id)) return document.getElementById(cfg.id);
    var a=document.getElementById(cfg.anchorId); if(!a||!a.parentNode) return null;
    addCSS('tsn4-anim-shared', SHARED); addCSS(cfg.id+'-css', stageCSS(cfg.id, cfg.flow?cfg.css:scale(cfg.css)));
    var el=document.createElement('section'); el.id=cfg.id; el.className='tsn4a';
    var rail=cfg.beats.map(function(b,i){ return '<button type="button" class="a-step" data-i="'+i+'">'+(i<9?'0':'')+(i+1)+'</button>'; }).join('');
    el.innerHTML=
      '<div class="a-head"><div class="a-eb">'+cfg.eyebrow+'</div><h2 class="a-title">'+cfg.title+'</h2>'+(cfg.sub?'<p class="a-sub">'+cfg.sub+'</p>':'')+'</div>'+
      '<div class="a-wrap"><div class="a-stage">'+cfg.html+'</div>'+
      '<div class="a-rail">'+rail+'</div><p class="a-cap"></p>'+
      '<div class="a-foot">'+(cfg.note?'<span class="a-note">'+cfg.note+'</span>':'')+'<button type="button" class="a-replay">Neu abspielen</button></div></div>';
    a.parentNode.insertBefore(el, a.nextSibling);

    var timers=[];
    var T={ at:function(ms,fn){ timers.push(setTimeout(fn,ms)); } };
    function clear(){ timers.forEach(clearTimeout); timers=[]; }
    function setCap(i){
      var cap=el.querySelector('.a-cap'); var html=cfg.beats[i].cap;
      cap.classList.add('fade'); setTimeout(function(){ cap.innerHTML=html; cap.classList.remove('fade'); },220);
      var st=el.querySelectorAll('.a-step'); for(var k=0;k<st.length;k++) st[k].classList.toggle('on',k===i);
    }
    function setSteps(n){ for(var k=1;k<=14;k++) el.classList.toggle('s'+k, k<=n); }
    function showAt(i){   /* Sprung auf Takt i: Endzustand dieses Takts ohne Sequenz */
      clear(); el.classList.add('js'); el.classList.remove('built');
      if(cfg.reset) cfg.reset(el);
      var n=0; for(var k=0;k<=i;k++){ n=Math.max(n, cfg.beats[k].s||k+1); }
      setSteps(n);
      for(var k2=0;k2<=i;k2++){ if(cfg.onBeat) cfg.onBeat(el,k2,{at:function(ms,fn){ fn(); }},true); }
      setCap(i);
      if(i===cfg.beats.length-1){ if(cfg.final) cfg.final(el); el.classList.add('built'); if(cfg.built) cfg.built(el,T); }
    }
    function play(){
      clear(); el.classList.remove('built'); setSteps(0); el.classList.add('js');
      if(cfg.reset) cfg.reset(el);
      void el.offsetWidth;
      cfg.beats.forEach(function(b,i){
        T.at(b.t, function(){ setSteps(b.s||i+1); setCap(i); if(cfg.onBeat) cfg.onBeat(el,i,T,false); });
      });
      var last=cfg.beats[cfg.beats.length-1].t;
      T.at(last+(cfg.settle||1400), function(){ if(cfg.final) cfg.final(el); el.classList.add('built'); if(cfg.built) cfg.built(el,T); });
    }
    function finalState(){
      clear(); el.classList.remove('js'); setSteps(0);
      if(cfg.final) cfg.final(el);
      el.classList.add('built'); setCap(cfg.beats.length-1);
    }
    el.querySelector('.a-replay').addEventListener('click', function(){ if(reduced()) return finalState(); play(); });
    Array.prototype.forEach.call(el.querySelectorAll('.a-step'), function(b){
      b.addEventListener('click', function(){ showAt(+b.getAttribute('data-i')); });
    });
    /* Endzustand sofort setzen (Basis = fertig), Sequenz erst beim Reveal */
    finalState();
    if(!reduced()) tsReveal(el, play);
    ACTIVE.push({el:el, clear:clear});
    return el;
  }
  document.addEventListener('visibilitychange', function(){
    ACTIVE.forEach(function(x){ if(x.el.isConnected) x.el.classList.toggle('hid', document.hidden); });
  });
  window.__tsn4Kill=function(){ ACTIVE.forEach(function(x){ x.clear(); }); };

  /* Zaehler mit rAF-unabhaengigem Hart-Setzer (Design-System Regel b) */
  function count(el, target, fmt, delay, dur){
    if(!el) return;
    dur=dur||1100; delay=delay||0; var t0=null, fertig=false, from=+(el.getAttribute('data-from')||0);
    function w(v){ el.textContent=fmt?fmt(v):String(Math.round(v)); }
    setTimeout(function(){
      function step(ts){ if(fertig) return; if(!t0) t0=ts; var t=Math.min(1,(ts-t0)/dur), e=1-Math.pow(1-t,3);
        w(from+(target-from)*e); if(t<1) requestAnimationFrame(step); else { fertig=true; w(target); } }
      requestAnimationFrame(step);
    }, delay);
    setTimeout(function(){ fertig=true; w(target); }, delay+dur+400);
  }
  function eur(v){ return v.toFixed(2).replace('.',',')+' €'; }
  function pct(v){ return v.toFixed(1).replace('.',',')+' %'; }

  /* ---------- Hero / Einleitung / Sektion ---------- */
  function mark(){ var sc=document.querySelector('.super-content'); if(sc && !sc.classList.contains('tsn4')) sc.classList.add('tsn4'); return sc; }
  function hero(cfg){
    var sc=mark(); if(!sc) return null;
    var ex=sc.querySelector('.ts-hero'); if(ex) return ex;
    addCSS('tsn4-base', BASE);
    var h=document.createElement('div'); h.className='ts-hero';
    h.innerHTML='<img class="ts-hero__img" alt="'+cfg.alt+'" src="'+(cfg.img||phHero(cfg.eyebrow))+'" fetchpriority="high" decoding="sync">'+
      '<div class="ts-hero__text"><img class="ts-hero__logo" alt="Tasty Studios" src="'+LOGO+'" fetchpriority="high" decoding="sync">'+
      '<div class="ts-hero__eyebrow">'+cfg.eyebrow+'</div><h1 class="ts-hero__title">'+cfg.title+'</h1></div>';
    var nr=sc.querySelector('.notion-root'); if(nr) sc.insertBefore(h,nr); else sc.appendChild(h);
    var nh=document.querySelector('.notion-header.page'); if(nh) nh.style.display='none';
    return h;
  }
  function body(id, html){
    if(document.getElementById(id)) return document.getElementById(id);
    var sc=document.querySelector('.super-content'); if(!sc) return null;
    var h=sc.querySelector('.ts-hero'); if(!h) return null;
    var w=document.createElement('div'); w.id=id; w.innerHTML='<div class="ts-body">'+html+'</div>';
    h.parentNode.insertBefore(w, h.nextSibling); return w;
  }
  function wireCopy(w){
    Array.prototype.forEach.call(w.querySelectorAll('.tsn4-cmd'), function(box){
      var b=box.querySelector('button'); if(!b||b.__w) return; b.__w=1;
      b.addEventListener('click',function(){
        var t=box.querySelector('code').textContent;
        function done(){ var o=b.textContent; b.textContent='Kopiert'; setTimeout(function(){ b.textContent=o; },1600); }
        if(navigator.clipboard && navigator.clipboard.writeText){ navigator.clipboard.writeText(t).then(done,function(){}); }
        else { var ta=document.createElement('textarea'); ta.value=t; document.body.appendChild(ta); ta.select(); try{ document.execCommand('copy'); done(); }catch(e){} document.body.removeChild(ta); }
      });
    });
  }
  function sec(id, anchorId, html){
    if(document.getElementById(id)) return document.getElementById(id);
    var a=document.getElementById(anchorId); if(!a||!a.parentNode) return null;
    var w=document.createElement('section'); w.id=id; w.className='tsn4-sec'; w.innerHTML=html;
    a.parentNode.insertBefore(w, a.nextSibling); wireCopy(w); return w;
  }
  /* Bausteine fuer Sektionen */
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function cmd(label, text){ return '<div class="tsn4-cmd"><div class="bar"><span>'+label+'</span><button type="button">Kopieren</button></div><code>'+esc(text)+'</code></div>'; }

  /* ---------- Abschnitt 07 Empfehlungs-Kachel (Verhalten 1:1 Katalog, Stagger 2..5) ---------- */
  function empCSS(id){
    addCSS(id+'-css', `
  #${id}{width:min(1000px,95vw);margin:34px auto;padding:clamp(26px,4vw,44px) clamp(24px,4.5vw,50px);box-sizing:border-box;position:relative;border-radius:20px;overflow:hidden;
    background:linear-gradient(165deg,rgba(255,255,255,.05),rgba(255,255,255,0));border:1px solid rgba(255,255,255,.10);
    box-shadow:0 30px 70px -34px rgba(0,0,0,.9),inset 0 1px 0 rgba(255,255,255,.05);font-family:${SANS};color:#fff;
    transform:perspective(1100px) rotateX(9deg) translateY(34px) scale(.97);opacity:0;transition:transform .9s ${EASE},opacity .9s cubic-bezier(.16,1,.3,1)}
  #${id}.in{transform:perspective(1100px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));opacity:1}
  #${id}.in.tilt{transition:transform .16s ease-out,opacity .9s cubic-bezier(.16,1,.3,1)}
  #${id} *{box-sizing:border-box}
  #${id}::after{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,rgba(199,180,137,0),rgba(199,180,137,.7),rgba(199,180,137,0))}
  #${id}::before{content:"";position:absolute;width:560px;height:560px;border-radius:50%;left:var(--gx,50%);top:var(--gy,50%);transform:translate(-50%,-50%);pointer-events:none;opacity:0;transition:opacity .4s cubic-bezier(.16,1,.3,1);background:radial-gradient(circle,rgba(199,180,137,.10),rgba(199,180,137,0) 62%)}
  #${id}.glow::before{opacity:1}
  #${id}.beat{animation:tsn4empBeat 2.6s cubic-bezier(.4,0,.3,1) infinite}
  #${id} .emp-grid{position:relative;display:grid;grid-template-columns:minmax(280px,1fr) 1.5fr;gap:clamp(28px,4.5vw,56px);align-items:center}
  #${id} svg.emp-link{position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none;z-index:3}
  #${id} .emp-link path{fill:none;stroke:rgba(199,180,137,.7);stroke-width:1.4;stroke-linecap:round;opacity:0;transition:opacity .4s cubic-bezier(.16,1,.3,1),stroke-dashoffset .55s ${EASE}}
  #${id} .emp-link path.on{opacity:1}
  #${id} .emp-link circle{fill:#efe6d2;opacity:0;transition:opacity .4s cubic-bezier(.16,1,.3,1)}
  #${id} .emp-link circle.on{opacity:1}
  #${id} .emp-anim{position:relative;z-index:2;display:flex;flex-direction:column;gap:11px}
  #${id} .emp-anim-hd{font-family:${DISP};font-weight:700;font-size:1.4rem;color:#fff;margin:0 0 6px}
  #${id} .emp-anim-hd span{color:#c7b489}
  #${id} .emp-step{display:flex;align-items:center;gap:13px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.10);border-radius:13px;padding:11px 15px;transition:background .5s cubic-bezier(.16,1,.3,1),border-color .5s cubic-bezier(.16,1,.3,1),box-shadow .5s cubic-bezier(.16,1,.3,1);opacity:0;transform:translateX(-10px)}
  #${id}.in .emp-step{opacity:1;transform:none;transition:background .5s cubic-bezier(.16,1,.3,1),border-color .5s cubic-bezier(.16,1,.3,1),box-shadow .5s cubic-bezier(.16,1,.3,1),opacity .6s cubic-bezier(.16,1,.3,1),transform .6s cubic-bezier(.16,1,.3,1)}
  #${id}.in .emp-step:nth-child(2){transition-delay:.15s}#${id}.in .emp-step:nth-child(3){transition-delay:.28s}#${id}.in .emp-step:nth-child(4){transition-delay:.41s}#${id}.in .emp-step:nth-child(5){transition-delay:.54s}
  #${id} .emp-step.on{background:rgba(199,180,137,.13);border-color:rgba(199,180,137,.5);box-shadow:0 0 0 1px rgba(199,180,137,.14),0 14px 30px -16px rgba(199,180,137,.4)}
  #${id} .emp-step-n{flex:0 0 auto;width:30px;height:30px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:rgba(255,255,255,.55);background:rgba(255,255,255,.06);transition:background .5s cubic-bezier(.16,1,.3,1),color .5s cubic-bezier(.16,1,.3,1)}
  #${id} .emp-step.on .emp-step-n{background:#c7b489;color:#05060b}
  #${id} .emp-step-l{font-size:14px;font-weight:600;color:rgba(255,255,255,.86)}
  #${id} .emp-step.on .emp-step-l{color:#fff}
  #${id} .emp-text{position:relative;z-index:2}
  #${id} .emp-h{font-family:${DISP};font-weight:600;font-size:1.45rem;color:#fff;margin:0 0 10px}
  #${id} .emp-h .eg{color:#c7b489}
  #${id} .emp-intro{font-size:.96rem;line-height:1.7;color:rgba(255,255,255,.86);margin:0 0 16px}
  #${id} .emp-ol{list-style:none;margin:0;padding:0;counter-reset:emp}
  #${id} .emp-ol li{position:relative;counter-increment:emp;padding:10px 14px 10px 44px;border-radius:11px;font-size:.92rem;line-height:1.55;color:rgba(255,255,255,.86);transition:background .5s cubic-bezier(.16,1,.3,1),color .5s cubic-bezier(.16,1,.3,1),box-shadow .5s cubic-bezier(.16,1,.3,1);margin-bottom:6px}
  #${id} .emp-ol li::before{content:counter(emp,decimal-leading-zero);position:absolute;left:14px;top:10px;font-size:11px;font-weight:700;color:#c7b489;font-variant-numeric:tabular-nums}
  #${id} .emp-ol li.lit{background:rgba(199,180,137,.10);color:#fff;box-shadow:inset 0 0 0 1px rgba(199,180,137,.22)}
  #${id} .emp-ol li b{color:#c7b489;font-weight:600}
  @keyframes tsn4empBeat{0%,100%{box-shadow:0 30px 70px -34px rgba(0,0,0,.9),inset 0 1px 0 rgba(255,255,255,.05)}50%{box-shadow:0 30px 80px -30px rgba(0,0,0,.9),0 0 44px rgba(199,180,137,.22),inset 0 1px 0 rgba(255,255,255,.05)}}
  @media(max-width:900px){ #${id} .emp-grid{grid-template-columns:1fr;gap:26px} #${id} svg.emp-link{display:none} }
  @media(prefers-reduced-motion:reduce){ #${id}{transform:none;opacity:1} #${id} .emp-step{opacity:1;transform:none} }
  `);
  }
  function empDraw(el){
    var grid=el.querySelector('.emp-grid'), svg=el.querySelector('.emp-link');
    var on=el.querySelector('.emp-step.on'), lit=el.querySelector('.emp-ol li.lit');
    var path=svg.querySelector('path'), c1=svg.querySelector('.c1'), c2=svg.querySelector('.c2');
    if(!on||!lit){ path.classList.remove('on'); c1.classList.remove('on'); c2.classList.remove('on'); return; }
    var gr=grid.getBoundingClientRect(), a=on.getBoundingClientRect(), b=lit.getBoundingClientRect();
    var x1=a.right-gr.left, y1=a.top-gr.top+a.height/2, x2=b.left-gr.left, y2=b.top-gr.top+b.height/2, dx=(x2-x1)*0.5;
    path.setAttribute('d','M '+x1+' '+y1+' C '+(x1+dx)+' '+y1+' '+(x2-dx)+' '+y2+' '+x2+' '+y2);
    c1.setAttribute('cx',x1); c1.setAttribute('cy',y1); c2.setAttribute('cx',x2); c2.setAttribute('cy',y2);
    var L=0; try{ L=path.getTotalLength(); }catch(e){}
    if(L){ path.style.transition='none'; path.style.strokeDasharray=L+'px'; path.style.strokeDashoffset=L+'px'; void path.getBoundingClientRect(); path.style.transition=''; path.style.strokeDashoffset='0px'; }
    path.classList.add('on'); c1.classList.add('on'); c2.classList.add('on');
  }
  function emp(cfg){
    if(document.getElementById(cfg.id)) return;
    var a=document.getElementById(cfg.anchorId); if(!a||!a.parentNode) return;
    empCSS(cfg.id);
    var el=document.createElement('div'); el.id=cfg.id;
    el.innerHTML='<div class="emp-grid"><svg class="emp-link" preserveAspectRatio="none"><path/><circle r="3.5" class="c1"/><circle r="3.5" class="c2"/></svg>'+
      '<div class="emp-anim"><div class="emp-anim-hd">'+cfg.animTitle+' <span>'+cfg.animGold+'</span></div>'+
      cfg.steps.map(function(s,i){ return '<div class="emp-step"><span class="emp-step-n">0'+(i+1)+'</span><span class="emp-step-l">'+s+'</span></div>'; }).join('')+'</div>'+
      '<div class="emp-text"><h3 class="emp-h">Empfehlung zur <span class="eg">'+cfg.kind+'</span></h3><p class="emp-intro">'+cfg.intro+'</p>'+
      '<ol class="emp-ol">'+cfg.points.map(function(p){ return '<li>'+p+'</li>'; }).join('')+'</ol></div></div>';
    a.parentNode.insertBefore(el, a.nextSibling);
    var steps=el.querySelectorAll('.emp-step'), lis=el.querySelectorAll('.emp-ol li'), idx=-1, iv=null, vis=false;
    function tick(){ idx=(idx+1)%steps.length;
      Array.prototype.forEach.call(steps,function(s,i){ s.classList.toggle('on',i===idx); });
      Array.prototype.forEach.call(lis,function(s,i){ s.classList.toggle('lit',i===idx); });
      requestAnimationFrame(function(){ empDraw(el); }); setTimeout(function(){ empDraw(el); },60); }
    function start(){ if(iv||reduced()) return; tick(); iv=setInterval(tick,2600); }
    function stop(){ if(iv){ clearInterval(iv); iv=null; } }
    tsReveal(el, function(){ el.classList.add('in'); vis=true; start(); });
    try{ new IntersectionObserver(function(ev){ if(!vis) return; if(ev[0].isIntersecting) start(); else stop(); },{threshold:.3}).observe(el); }catch(e){}
    document.addEventListener('visibilitychange',function(){ if(document.hidden) stop(); else if(vis) start(); });
    if(window.matchMedia && window.matchMedia('(hover:hover)').matches){
      el.addEventListener('mousemove',function(e){ var r=el.getBoundingClientRect(); var px=(e.clientX-r.left)/r.width, py=(e.clientY-r.top)/r.height;
        el.style.setProperty('--ry',((px-.5)*5).toFixed(2)+'deg'); el.style.setProperty('--rx',((.5-py)*4).toFixed(2)+'deg');
        el.style.setProperty('--gx',(px*100).toFixed(1)+'%'); el.style.setProperty('--gy',(py*100).toFixed(1)+'%'); el.classList.add('glow','tilt'); });
      el.addEventListener('mouseenter',function(){ el.classList.add('beat','tilt'); });
      el.addEventListener('mouseleave',function(){ el.style.setProperty('--ry','0deg'); el.style.setProperty('--rx','0deg'); el.classList.remove('glow','beat','tilt'); });
    }
    window.addEventListener('resize',function(){ requestAnimationFrame(function(){ empDraw(el); }); });
    if(reduced()){ el.classList.add('in'); steps[0]&&steps[0].classList.add('on'); lis[0]&&lis[0].classList.add('lit'); }
  }

  /* ---------- Abschnitt 09 Learnings + Weiter (guard-Fassung, Katalog 09 dritte Haelfte) ---------- */
  function learn(cfg){
    if(document.getElementById(cfg.id)) return;
    var host=document.querySelector('.super-content'); if(!host||!document.querySelector('.notion-root')) return;
    var id=cfg.id;
    addCSS(id+'-css', `
  #${id}{width:100%;margin-top:44px;padding:0 clamp(20px,4vw,56px);box-sizing:border-box;font-family:${SANS};color:#fff}
  #${id} *{box-sizing:border-box}
  #${id} .tsl-head{text-align:center;margin-bottom:66px}
  #${id} .tsl-eyebrow{font-family:${DISP};font-weight:600;font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;color:#c7b489;display:block;margin-bottom:14px}
  #${id} .tsl-title{font-family:${DISP};font-weight:600;font-size:clamp(30px,5vw,46px);line-height:1.05;color:#fff;margin:0}
  #${id} .tsl-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(20px,3vw,40px);max-width:1180px;margin:0 auto}
  #${id} .tsl-cell{display:flex;justify-content:center}
  #${id} .tsl-orb{position:relative;width:100%;max-width:250px;aspect-ratio:1;border-radius:50%;display:flex;align-items:center;justify-content:center;text-align:center;padding:14%;
    background:radial-gradient(120% 120% at 30% 26%,rgba(199,180,137,.20),rgba(255,255,255,.03) 46%,rgba(255,255,255,.015));
    border:1px solid rgba(255,255,255,.12);box-shadow:0 30px 60px -30px rgba(0,0,0,.85),inset 0 1px 0 rgba(255,255,255,.06),inset 0 0 40px rgba(199,180,137,.06);
    transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .9s ${EASE},filter .8s cubic-bezier(.16,1,.3,1),border-color .4s cubic-bezier(.16,1,.3,1),box-shadow .4s cubic-bezier(.16,1,.3,1)}
  #${id}.js .tsl-orb{opacity:0;transform:translateY(22px);filter:blur(8px)}
  #${id} .tsl-orb::after{content:"";position:absolute;top:14%;left:16%;width:26%;height:20%;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.22),rgba(255,255,255,0) 70%);pointer-events:none}
  #${id}.js.in .tsl-orb{opacity:1;transform:none;filter:none;animation:tsn4Float 7s ease-in-out infinite;will-change:translate}
  #${id}.js.in .tsl-cell:nth-child(1) .tsl-orb{transition-delay:0s;animation-delay:0s}
  #${id}.js.in .tsl-cell:nth-child(2) .tsl-orb{transition-delay:.14s;animation-delay:-1.6s}
  #${id}.js.in .tsl-cell:nth-child(3) .tsl-orb{transition-delay:.28s;animation-delay:-3.2s}
  #${id}.js.in .tsl-cell:nth-child(4) .tsl-orb{transition-delay:.42s;animation-delay:-4.8s}
  #${id} .tsl-orb:hover{border-color:rgba(199,180,137,.5);box-shadow:0 30px 60px -28px rgba(0,0,0,.85),0 0 34px rgba(199,180,137,.2),inset 0 1px 0 rgba(255,255,255,.06)}
  #${id} .tsl-t{position:relative;z-index:1;color:rgba(255,255,255,.9);font-size:clamp(12.5px,1.15vw,15px);font-weight:500;line-height:1.5;max-width:22ch;margin:0}
  #${id} .tsl-t b{color:#c7b489;font-weight:700}
  #${id} #ts-next-wrap{display:flex;justify-content:center;margin:48px 0 72px}
  #${id} #ts-next{display:inline-flex;align-items:center;gap:9px;height:44px;padding:0 28px;border-radius:9999px;background:#c7b489;color:#05060b;font-family:inherit;font-size:14px;font-weight:700;letter-spacing:.01em;border:none;cursor:pointer;text-decoration:none;transition:background .3s cubic-bezier(.16,1,.3,1),transform .3s cubic-bezier(.16,1,.3,1),box-shadow .3s cubic-bezier(.16,1,.3,1)}
  #${id} #ts-next:hover{background:#d8c9ab;transform:translateY(-1px);box-shadow:0 14px 30px -12px rgba(199,180,137,.6)}
  #${id} #ts-next svg{width:16px;height:16px}
  @keyframes tsn4Float{0%,100%{translate:0 0}50%{translate:0 -11px}}
  @media(max-width:1079px){ #${id} .tsl-grid{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:520px){ #${id} .tsl-grid{grid-template-columns:1fr} }
  @media(prefers-reduced-motion:reduce){ #${id}.js.in .tsl-orb, #${id} .tsl-orb{opacity:1;transform:none;filter:none;animation:none} }
  `);
    var el=document.createElement('div'); el.id=id;
    function wrapHTML(){ return '<a id="ts-next" href="'+cfg.next+'">Nächste Lektion <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>'; }
    el.innerHTML='<div class="tsl-head"><span class="tsl-eyebrow">Was du mitnimmst</span><h2 class="tsl-title">Learnings</h2></div>'+
      '<div class="tsl-grid">'+cfg.learn.map(function(t){ return '<div class="tsl-cell"><div class="tsl-orb"><p class="tsl-t">'+t+'</p></div></div>'; }).join('')+'</div>'+
      '<div id="ts-next-wrap">'+wrapHTML()+'</div>';
    host.appendChild(el);
    function guard(){
      var h=document.getElementById(id); if(!h) return;
      var all=document.querySelectorAll('#ts-next-wrap');
      for(var i=0;i<all.length;i++){ if(!h.contains(all[i]) && all[i].parentNode) all[i].parentNode.removeChild(all[i]); }
      if(!h.querySelector('#ts-next-wrap')){ var w=document.createElement('div'); w.id='ts-next-wrap'; w.innerHTML=wrapHTML(); h.appendChild(w); }
    }
    guard();
    new MutationObserver(guard).observe(document.body,{childList:true,subtree:true});
    window.addEventListener('scroll', guard, {passive:true});
    setTimeout(guard,1500); setTimeout(guard,4000); setTimeout(guard,9000);
    if(!reduced()){ el.classList.add('js'); tsReveal(el, function(){ el.classList.add('in'); }); }
  }

  /* ---------- Seiten-Register + ein gemeinsamer Mount ---------- */
  /* Reihenfolge der Modul-4-Seiten. PENDING = Seiten, die super.so noch nicht synchronisiert hat
     (sonst 404). Der Weiter-Button springt bis zum Re-Sync ueber sie hinweg. Wird vom Bau-Skript gesetzt. */
  var ORDER=['/lektionen/dein-backoffice-bekommt-hnde','/lektionen/notion-mit-claude-code-verbinden','/lektionen/die-systemkarte-anlegen','/lektionen/dein-backoffice-befragen',
    '/lektionen/datenbanken-automatisch-aktualisieren','/lektionen/lieferscheine-und-preise-einpflegen','/lektionen/notion-agents-einsetzen','/lektionen/notion-automationen-bauen',
    '/lektionen/wiederkehrende-routinen-einrichten','/lektionen/wer-macht-was-im-backoffice','/modul-5-claude-code-notion'];
  var PENDING=/*PENDING*/[]/*/PENDING*/;
  function resolve(h){ var g=0; while(PENDING.indexOf(h)>-1 && g++<12){ var i=ORDER.indexOf(h); if(i<0||i>=ORDER.length-1) break; h=ORDER[i+1]; } return h; }
  var PAGES=[];
  function page(def){ PAGES.push(def); }
  function current(){ for(var i=0;i<PAGES.length;i++){ if(PAGES[i].re.test(location.pathname)) return PAGES[i]; } return null; }
  function mount(){
    var p=current(); if(!p) return;
    var sc=document.querySelector('.super-content'); if(!sc || !document.querySelector('.notion-root')) return;
    hero({ eyebrow:p.eyebrow, title:p.title, alt:p.alt, img:p.img });
    if(!body(p.key+'-intro', p.intro)) return;
    p.anim.anchorId=p.key+'-intro';
    if(!anim(p.anim)) return;
    var prev=p.anim.id;
    for(var i=0;i<p.secs.length;i++){ if(!sec(p.secs[i].id, prev, p.secs[i].html)) return; prev=p.secs[i].id; }
    p.emp.anchorId=prev; emp(p.emp);
    if(!document.getElementById(p.emp.id)) return;
    learn({ id:p.key+'-next', learn:p.learn, next:resolve(p.next) });
  }
  function boot(){ if(!document.body){ return setTimeout(boot,50); } mount(); window.__tsMO(mount).observe(document.documentElement,{childList:true,subtree:true}); }

  window.__tsn4={ SANS:SANS, DISP:DISP, MONO:MONO, IMG:IMG, RING:RING, EASE:EASE, BACK:BACK, addCSS:addCSS, reduced:reduced, tsReveal:tsReveal,
    count:count, eur:eur, pct:pct, cmd:cmd, pos:pos, nic:nic, nCSS:nCSS, NPAGE:NPAGE, NCHEV:NCHEV, esc:esc, page:page, mount:mount };
  /* Boot erst nach dem Seiten-Register (am Ende der Zone). */
  window.__tsn4Boot=boot;
})();
