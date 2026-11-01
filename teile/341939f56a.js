(window.__tsQ=window.__tsQ||[]).push([[110,function(){(function(){if(window.__tsms)return;window.__tsms=1;var e="https://tastyrob123.github.io/kurs-code/img/multistandort/hero-cover-placeholder.svg",x="https://tastyrob123.github.io/kurs-code/assets/au80tp.png",i=".page__multistandort-erweiterung-optional";function v(){return/\/multistandort-erweiterung-optional\/?$/.test(location.pathname)}var f=`
  ${i} .ts-hero{
    position:relative; width:min(var(--ts-page),94vw); margin:76px auto 10px; text-align:center; isolation:isolate;
  }
  ${i} .ts-hero__img{
    position:relative; display:block; margin:0 auto; width:100%; max-width:var(--ts-page); height:auto; object-fit:contain;
    animation:tsMcZoom 1200ms cubic-bezier(.16,1,.3,1) both; pointer-events:none; user-select:none; z-index:0;
  }
  ${i} .ts-hero::after{
    content:""; position:absolute; z-index:1; pointer-events:none;
    left:50%; bottom:-4%; transform:translateX(-50%); width:74%; height:56%;
    background:radial-gradient(closest-side, rgba(4,5,10,.74) 0%, rgba(4,5,10,.42) 52%, rgba(4,5,10,0) 80%);
  }
  ${i} .ts-hero__text{
    position:relative; z-index:2; display:flex; flex-direction:column; align-items:center; text-align:center;
    margin-top:-16%; padding:0 24px 8px;
  }
  ${i} .ts-hero__text::before{
    content:""; position:absolute; z-index:-1; pointer-events:none;
    left:50%; top:-10%; transform:translateX(-50%); width:min(calc(940px * var(--ts-tx)),100%); height:134%;
    background:radial-gradient(56% 60% at 50% 50%, rgba(4,5,10,.88) 0%, rgba(4,5,10,.68) 38%, rgba(4,5,10,.3) 64%, rgba(4,5,10,0) 82%);
    filter:blur(3px);
  }
  ${i} .ts-hero__logo{
    display:block; width:58px; height:auto; margin:0 auto 10px;
    filter:drop-shadow(0 2px 8px rgba(0,0,0,.95)) drop-shadow(0 6px 28px rgba(0,0,0,.85));
    animation:tsRise 650ms cubic-bezier(.16,1,.3,1) 60ms both; pointer-events:none; user-select:none;
  }
  ${i} .ts-hero__eyebrow{
    display:inline-flex; align-items:center; gap:9px;
    font:600 13px/1 var(--font-sans, -apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif);
    letter-spacing:.16em; text-transform:uppercase; color:#c7b489;
    margin-bottom:16px; text-shadow:0 1px 3px rgba(0,0,0,1),0 3px 18px rgba(0,0,0,.95),0 6px 40px rgba(0,0,0,.8);
    animation:tsRise 700ms cubic-bezier(.16,1,.3,1) 120ms both;
  }
  ${i} .ts-hero__eyebrow::before{ content:""; width:7px;height:7px;border-radius:50%; background:#c7b489; box-shadow:0 0 12px rgba(199,180,137,.7); }
  ${i} .ts-hero__title{
    margin:0; font-family:"Lineal Web","Lineal TS",-apple-system,BlinkMacSystemFont,"SF Pro Display",sans-serif;
    font-weight:600; color:#fff;
    line-height:1.02; letter-spacing:-.02em; font-size:clamp(2.6rem,8vw,5.4rem);
    text-shadow:0 0 4px rgba(0,0,0,.9),0 1px 3px rgba(0,0,0,1),0 3px 16px rgba(0,0,0,1),0 6px 40px rgba(0,0,0,.98),0 10px 80px rgba(0,0,0,.9),0 18px 140px rgba(0,0,0,.78);
    animation:tsRise 800ms cubic-bezier(.16,1,.3,1) 220ms both;
  }
  ${i} .ts-hero__title .ts-gold{ color:#c7b489; }
  @media (max-width:640px){
    ${i} .ts-hero__text{ padding:0 16px 20px; }
    ${i} .ts-hero__title{ font-size:clamp(2rem,12vw,3rem); }
  }

  ${i} .ts-body{
    max-width:calc(860px * var(--ts-tx));margin:56px auto 0;padding:0 clamp(24px,4vw,56px);
    font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;
    text-align:center;
  }
  ${i} .ts-body h3{
    font-family:"Lineal Web","Lineal TS",-apple-system,BlinkMacSystemFont,"SF Pro Display",sans-serif;
    font-weight:600;letter-spacing:-.015em;color:#fff;
    font-size:clamp(25px,2.8vw,32px);line-height:1.2;
    margin:32px 0 14px;
  }
  ${i} .ts-body h3:first-child{margin-top:0}
  ${i} .ts-body p{
    font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86);
    margin:0 0 13px;
  }
  ${i} .ts-body p:last-child{margin-bottom:0}
  ${i} .ts-body ul{margin:6px auto 16px;padding:0;list-style:none;max-width:calc(640px * var(--ts-tx));text-align:left}
  ${i} .ts-body li{
    font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86);
    margin:0 0 10px;padding-left:22px;position:relative;
  }
  ${i} .ts-body li::before{
    content:"";position:absolute;left:0;top:10px;width:5px;height:5px;border-radius:50%;
    background:#c7b489;
  }
  ${i} .ts-body li b, ${i} .ts-body p b{color:#c7b489;font-weight:600}
  `;function h(){if(!document.getElementById("tsms-hero-css")){var n=document.createElement("style");n.id="tsms-hero-css",n.textContent=f,document.head.appendChild(n)}}function d(){if(v()){var n=document.querySelector(".super-content");if(n){if(h(),document.querySelector(".ts-hero")){document.getElementById("tsms-intro")||r(n);return}var t=document.createElement("div");t.className="ts-hero",t.innerHTML='<img class="ts-hero__img" alt="Multistandort \u2014 ein Backoffice \xFCber mehrere Standorte" src="'+e+'" fetchpriority="high" decoding="async"><div class="ts-hero__text"><img class="ts-hero__logo" alt="Tasty Studios" src="'+x+'" fetchpriority="high" decoding="async"><div class="ts-hero__eyebrow">L 2.14 \xB7 Optional</div><h1 class="ts-hero__title">Multistandorte</h1></div>';var a=n.querySelector(".notion-root");a?n.insertBefore(t,a):n.appendChild(t),Array.prototype.forEach.call(n.querySelectorAll('.notion-image img[src*="logo_vektor"]'),function(b){var g=b.closest(".notion-image");g&&(g.style.display="none")});var m=document.querySelector(".notion-header.page");m&&(m.style.display="none"),r(n)}}}function r(n){if(!document.getElementById("tsms-intro")){h();var t=n.querySelector(".ts-hero");if(t){var a=document.createElement("div");a.id="tsms-intro",a.innerHTML=`
<div class="ts-body">
  <p>Diese Lektion dreht sich nicht um die Zahl deiner Standorte, sondern um eine Rolle: den Betreiber, der nicht automatisch der Entscheider ist. Sobald ein angestellter Manager die Inventur f\xFChrt, aber die Kalkulation nicht sehen soll, gilt das schon mit einem einzigen Haus.</p>
  <p>Mehrere Standorte versch\xE4rfen diese Frage lediglich, sie erzeugen sie nicht neu: aus einer Z\xE4hlliste werden mehrere, aus einem Manager mehrere Team-Mitglieder mit Zugriff \u2014 die Trennung dahinter bleibt dieselbe. Wir bauen die Struktur so, dass Notion sie h\xE4lt, unabh\xE4ngig davon, wie viele H\xE4user dazukommen.</p>
</div>`,t.parentNode.insertBefore(a,t.nextSibling)}}}d(),document.addEventListener("DOMContentLoaded",d),window.__tsMO(d).observe(document.documentElement,{childList:!0,subtree:!0})})()}],[111,function(){(function(){if(window.__tsmsa)return;window.__tsmsa=1;var e=".page__multistandort-erweiterung-optional";function x(){return/\/multistandort-erweiterung-optional\/?$/.test(location.pathname)}var i=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,v=[7200,6400,8200],f=["Der Store Manager sieht nur Artikel und Menge. Doch <b>ausgeblendete Spalten</b> sind zwei Klicks entfernt \u2014 kein Schutz, nur ein Vorhang.","Und jede <b>Relation ist eine T\xFCr</b>: Wer eine Zeile \xF6ffnet, klickt sich \xFCber die Verkn\xFCpfung bis in die Kalkulation.","Die echte Wand hei\xDFt <b>Teamspace</b>, nicht Spalten-Ansicht: eine Notion-Berechtigung, hinter der Zentrale und Standort getrennt sitzen \u2014 der Preis bleibt dr\xFCben."],h=`
  ${e} #tsmsa{width:100vw;max-width:100vw;margin:64px 0 20px;margin-left:calc(50% - 50vw);margin-right:calc(50% - 50vw);padding:0 clamp(20px,5vw,72px);box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#fff}
  ${e} #tsmsa *{box-sizing:border-box}
  ${e} #tsmsa .msa-head{max-width:calc(860px * var(--ts-tx));margin:0 auto 44px;text-align:center;padding:0 24px}
  ${e} #tsmsa .msa-eyebrow{display:inline-flex;align-items:center;gap:9px;font:600 13px/1 var(--font-sans, -apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif);letter-spacing:.16em;text-transform:uppercase;color:#c7b489;margin-bottom:12px}
  ${e} #tsmsa .msa-eyebrow::before{content:"";width:7px;height:7px;border-radius:50%;background:#c7b489;box-shadow:0 0 12px rgba(199,180,137,.7)}
  ${e} #tsmsa .msa-title{font-family:"Lineal Web","Lineal TS",-apple-system,BlinkMacSystemFont,"SF Pro Display",sans-serif;font-weight:600;letter-spacing:-.01em;line-height:1.08;text-wrap:balance;font-size:clamp(1.9rem,4.4vw,2.9rem);margin:0}
  ${e} #tsmsa .msa-title .ts-gold{color:#c7b489}

  ${e} #tsmsa .msa-wrap{max-width:var(--ts-page);margin:0 auto}
  ${e} #tsmsa .msa-stage{position:relative;height:340px}
  ${e} #tsmsa .msa-scene{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;transform:translateY(10px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1);pointer-events:none}
  ${e} #tsmsa .msa-wrap.is-0 .msa-scene[data-i="0"],
  ${e} #tsmsa .msa-wrap.is-1 .msa-scene[data-i="1"],
  ${e} #tsmsa .msa-wrap.is-2 .msa-scene[data-i="2"]{opacity:1;transform:none}

  /* ---- generische Karten/Tabellen ---- */
  ${e} #tsmsa .msa-card{background:rgba(255,255,255,.035);border:1px solid rgba(199,180,137,.28);border-radius:15px;box-shadow:0 24px 60px -30px rgba(0,0,0,.9)}
  ${e} #tsmsa .msa-ceyebrow{font-size:8.5px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:rgba(199,180,137,.85)}
  ${e} #tsmsa .msa-cname{font-family:"Lineal Web","Lineal TS",-apple-system,sans-serif;font-weight:600;font-size:14.5px;color:#fff;line-height:1.15}
  ${e} #tsmsa .msa-note{font-size:10px;font-weight:600;letter-spacing:.04em;color:rgba(255,255,255,.3)}

  /* ===== Beat 0 \u2014 Ausblenden ===== */
  ${e} #tsmsa .msa-inv{width:min(calc(560px * var(--ts-tx)),92%);padding:16px 18px 14px}
  ${e} #tsmsa .msa-inv-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
  ${e} #tsmsa .msa-tag{display:inline-flex;align-items:center;gap:7px;font-size:9.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.5)}
  ${e} #tsmsa .msa-tag::before{content:"";width:6px;height:6px;border-radius:50%;background:#c7b489}
  ${e} #tsmsa .msa-reveal-btn{font-size:11px;font-weight:600;color:#c7b489;border:1px solid rgba(199,180,137,.4);border-radius:999px;padding:5px 12px;display:inline-flex;align-items:center;gap:6px;transition:background .4s cubic-bezier(.16,1,.3,1),border-color .4s cubic-bezier(.16,1,.3,1)}
  ${e} #tsmsa .msa-wrap.is-0.msa-open .msa-reveal-btn{background:rgba(224,87,79,.14);border-color:rgba(224,87,79,.55);color:#f0938c}
  ${e} #tsmsa .msa-grid{display:grid;grid-template-columns:1.4fr .7fr 1fr 1fr;gap:0;font-variant-numeric:tabular-nums}
  ${e} #tsmsa .msa-cell{padding:8px 10px;font-size:13px;color:rgba(255,255,255,.9);border-top:1px solid rgba(255,255,255,.07)}
  ${e} #tsmsa .msa-ch{font-size:8.5px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.4);border-top:none;padding-bottom:4px}
  ${e} #tsmsa .msa-sens{position:relative;color:rgba(255,255,255,.32);transition:color .5s cubic-bezier(.16,1,.3,1)}
  ${e} #tsmsa .msa-sens .msa-lock{transition:opacity .4s cubic-bezier(.16,1,.3,1)}
  ${e} #tsmsa .msa-sens .msa-val{opacity:0;transition:opacity .5s cubic-bezier(.16,1,.3,1) .1s}
  ${e} #tsmsa .msa-wrap.is-0.msa-open .msa-sens{color:#f0938c;background:rgba(224,87,79,.1)}
  ${e} #tsmsa .msa-wrap.is-0.msa-open .msa-sens .msa-lock{opacity:0}
  ${e} #tsmsa .msa-wrap.is-0.msa-open .msa-sens .msa-val{opacity:1}
  ${e} #tsmsa .msa-lock svg{width:11px;height:11px;vertical-align:-1px;opacity:.5}

  /* ===== Beat 1 \u2014 Relation als T\xFCr ===== */
  ${e} #tsmsa .msa-chain{display:flex;align-items:center;justify-content:center;gap:0;width:100%;max-width:calc(760px * var(--ts-tx))}
  ${e} #tsmsa .msa-node{width:168px;padding:14px 15px;flex:0 0 auto}
  ${e} #tsmsa .msa-node .msa-cname{margin:6px 0 3px}
  ${e} #tsmsa .msa-node-danger{border-color:rgba(224,87,79,.45);background:rgba(224,87,79,.07)}
  ${e} #tsmsa .msa-node-danger .msa-ceyebrow{color:#f0938c}
  ${e} #tsmsa .msa-krow{display:flex;justify-content:space-between;font-size:11.5px;margin-top:5px}
  ${e} #tsmsa .msa-krow .k{color:rgba(255,255,255,.5)}
  ${e} #tsmsa .msa-krow .v{color:#fff;font-weight:600;font-variant-numeric:tabular-nums}
  ${e} #tsmsa .msa-krow .v.sensv{color:#f0938c}
  ${e} #tsmsa .msa-link{position:relative;flex:1 1 auto;height:2px;min-width:34px;background:linear-gradient(90deg,rgba(199,180,137,.14),rgba(199,180,137,.4),rgba(199,180,137,.14))}
  ${e} #tsmsa .msa-link.dash{background:none;border-top:2px dashed rgba(199,180,137,.45);height:0}
  ${e} #tsmsa .msa-link .msa-dot{position:absolute;top:50%;left:0;width:9px;height:9px;border-radius:50%;background:#f5e6c2;box-shadow:0 0 12px rgba(199,180,137,.85);transform:translate(-50%,-50%);opacity:0}
  ${e} #tsmsa .msa-wrap.is-1 .msa-link.fire .msa-dot{animation:msaDot 1s cubic-bezier(.22,1,.36,1) forwards}
  ${e} #tsmsa .msa-wrap.is-1 .msa-link.fire2 .msa-dot{animation:msaDot 1s cubic-bezier(.22,1,.36,1) .95s forwards}
  ${e} #tsmsa .msa-link .msa-rlabel{position:absolute;top:-16px;left:50%;transform:translateX(-50%);font-size:8.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:rgba(199,180,137,.7);white-space:nowrap}
  @keyframes msaDot{0%{left:0;opacity:0}12%{opacity:1}88%{opacity:1}100%{left:100%;opacity:0}}

  /* ===== Beat 2 \u2014 Zwei H\xE4user, eine Br\xFCcke ===== */
  ${e} #tsmsa .msa-bridge{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:clamp(14px,3vw,40px);width:100%;max-width:calc(860px * var(--ts-tx))}
  ${e} #tsmsa .msa-master{padding:15px 16px}
  ${e} #tsmsa .msa-mrow{display:grid;grid-template-columns:1.3fr .6fr .8fr;gap:2px 8px;font-size:11.5px;margin-top:8px;font-variant-numeric:tabular-nums}
  ${e} #tsmsa .msa-mrow .mh{font-size:8px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:rgba(255,255,255,.38)}
  ${e} #tsmsa .msa-mrow .mc{color:rgba(255,255,255,.82)}
  ${e} #tsmsa .msa-mrow .mp{color:#c7b489;font-weight:600;text-align:right}
  ${e} #tsmsa .msa-mval{text-align:right;color:#fff;font-weight:600}
  ${e} #tsmsa .msa-stores{display:flex;flex-direction:column;gap:9px}
  ${e} #tsmsa .msa-store{padding:9px 12px;display:flex;align-items:center;justify-content:space-between;gap:10px;opacity:.5;transform:translateX(8px);transition:opacity .55s cubic-bezier(.16,1,.3,1),transform .55s cubic-bezier(.16,1,.3,1)}
  ${e} #tsmsa .msa-wrap.is-2 .msa-store.lit{opacity:1;transform:none}
  ${e} #tsmsa .msa-store-nm{font-size:11.5px;font-weight:600;color:#fff;display:flex;align-items:center;gap:7px}
  ${e} #tsmsa .msa-store-nm::before{content:"";width:5px;height:5px;border-radius:50%;background:#c7b489}
  ${e} #tsmsa .msa-store-cols{font-size:9px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.42)}
  ${e} #tsmsa .msa-noprice{font-size:9px;font-weight:600;color:rgba(70,175,115,.9);display:inline-flex;align-items:center;gap:4px;margin-top:2px}
  ${e} #tsmsa .msa-span{position:relative;width:clamp(46px,9vw,96px);height:120px}
  ${e} #tsmsa .msa-span-line{position:absolute;left:50%;top:14px;bottom:14px;width:2px;transform:translateX(-50%);background:linear-gradient(180deg,rgba(199,180,137,.5),rgba(199,180,137,.16))}
  ${e} #tsmsa .msa-span-lbl{position:absolute;left:50%;top:-4px;transform:translateX(-50%);font-size:8px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(199,180,137,.7);white-space:nowrap}
  ${e} #tsmsa .msa-flow{position:absolute;left:50%;width:11px;height:11px;border-radius:50%;transform:translateX(-50%);opacity:0}
  ${e} #tsmsa .msa-flow.down{top:14px;background:#c7b489;box-shadow:0 0 12px rgba(199,180,137,.8)}
  ${e} #tsmsa .msa-flow.up{bottom:14px;background:#46af73;box-shadow:0 0 12px rgba(70,175,115,.8)}
  ${e} #tsmsa .msa-wrap.on.is-2 .msa-flow.down{animation:msaDown 3.4s cubic-bezier(.22,1,.36,1) infinite}
  ${e} #tsmsa .msa-wrap.on.is-2 .msa-flow.up{animation:msaUp 3.4s cubic-bezier(.22,1,.36,1) 1.7s infinite}
  ${e} #tsmsa .msa-pricechip{position:absolute;left:50%;top:34px;transform:translate(-50%,-6px);font-size:9px;font-weight:600;color:#c7b489;background:rgba(199,180,137,.12);border:1px solid rgba(199,180,137,.4);border-radius:999px;padding:2px 7px;opacity:0}
  ${e} #tsmsa .msa-wrap.on.is-2 .msa-pricechip{animation:msaChip 3.4s cubic-bezier(.16,1,.3,1) infinite}
  ${e} #tsmsa.hid .msa-flow,${e} #tsmsa.hid .msa-pricechip{animation-play-state:paused}
  @keyframes msaDown{0%{top:14px;opacity:0}10%{opacity:1}46%{opacity:1}56%,100%{top:calc(100% - 14px);opacity:0}}
  @keyframes msaUp{0%{bottom:14px;opacity:0}10%{opacity:1}46%{opacity:1}56%,100%{bottom:calc(100% - 14px);opacity:0}}
  @keyframes msaChip{0%,44%{opacity:0}50%{opacity:1;transform:translate(-50%,-6px)}60%{opacity:0;transform:translate(-50%,10px)}100%{opacity:0}}

  /* ---- Step-Rail + Caption + Replay ---- */
  ${e} #tsmsa .msa-steps{display:flex;justify-content:center;gap:0;margin:26px auto 0;max-width:calc(640px * var(--ts-tx))}
  ${e} #tsmsa .msa-step{flex:1 1 0;display:flex;flex-direction:column;align-items:center;gap:8px;cursor:pointer;padding:0 6px;background:none;border:none}
  ${e} #tsmsa .msa-step-bar{width:100%;height:2px;background:rgba(255,255,255,.12);border-radius:2px;overflow:hidden;position:relative}
  ${e} #tsmsa .msa-step-bar::after{content:"";position:absolute;inset:0;background:#c7b489;transform:scaleX(0);transform-origin:left;transition:transform .4s cubic-bezier(.16,1,.3,1)}
  ${e} #tsmsa .msa-step.active .msa-step-bar::after{transform:scaleX(1)}
  ${e} #tsmsa .msa-step-n{font-size:9.5px;font-weight:600;letter-spacing:.12em;color:rgba(255,255,255,.4);transition:color .4s cubic-bezier(.16,1,.3,1)}
  ${e} #tsmsa .msa-step.active .msa-step-n{color:#c7b489}
  ${e} #tsmsa .msa-step-t{font-size:11.5px;font-weight:600;color:rgba(255,255,255,.55);text-align:center;line-height:1.25;transition:color .4s cubic-bezier(.16,1,.3,1)}
  ${e} #tsmsa .msa-step.active .msa-step-t{color:#fff}
  ${e} #tsmsa .msa-cap{max-width:calc(680px * var(--ts-tx));margin:22px auto 0;text-align:center;font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86);min-height:80px}
  ${e} #tsmsa .msa-cap b{color:#c7b489;font-weight:600}
  ${e} #tsmsa .msa-replay{display:inline-flex;align-items:center;gap:8px;margin:6px auto 0;font-size:12.5px;font-weight:600;color:#c7b489;background:none;border:1px solid rgba(199,180,137,.45);border-radius:999px;padding:8px 18px;cursor:pointer;transition:background .35s cubic-bezier(.16,1,.3,1),border-color .35s cubic-bezier(.16,1,.3,1)}
  ${e} #tsmsa .msa-replay:hover{background:rgba(199,180,137,.1);border-color:rgba(199,180,137,.7)}
  ${e} #tsmsa .msa-replay svg{width:14px;height:14px}
  ${e} #tsmsa .msa-foot{display:flex;justify-content:center;margin-top:20px}

  @media (max-width:820px){
    ${e} #tsmsa .msa-stage{height:auto;min-height:440px}
    ${e} #tsmsa .msa-scene{position:relative;inset:auto;display:none}
    ${e} #tsmsa .msa-wrap.is-0 .msa-scene[data-i="0"],${e} #tsmsa .msa-wrap.is-1 .msa-scene[data-i="1"],${e} #tsmsa .msa-wrap.is-2 .msa-scene[data-i="2"]{display:flex}
    ${e} #tsmsa .msa-chain{flex-direction:column;gap:0}
    ${e} #tsmsa .msa-link{width:2px;min-height:26px;height:26px;min-width:0;background:linear-gradient(180deg,rgba(199,180,137,.14),rgba(199,180,137,.4),rgba(199,180,137,.14))}
    ${e} #tsmsa .msa-link.dash{border-top:none;border-left:2px dashed rgba(199,180,137,.45);width:0;height:26px}
    ${e} #tsmsa .msa-link .msa-rlabel{top:50%;left:14px;transform:translateY(-50%)}
    ${e} #tsmsa .msa-bridge{grid-template-columns:1fr;gap:14px}
    ${e} #tsmsa .msa-span{width:100%;height:56px}
    ${e} #tsmsa .msa-span-line{left:50%;top:8px;bottom:8px}
    ${e} #tsmsa .msa-step-t{display:none}
  }

  @media (prefers-reduced-motion: reduce){
    ${e} #tsmsa .msa-wrap{opacity:1;transform:none}
    ${e} #tsmsa .msa-scene{transition:none}
    ${e} #tsmsa .msa-flow,${e} #tsmsa .msa-pricechip,${e} #tsmsa .msa-dot{animation:none!important}
  }
  `;function d(){return'<span class="msa-lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg></span>'}function r(){return'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>'}function n(){var s=document.createElement("div");return s.id="tsmsa",s.innerHTML='<div class="msa-head"><div class="msa-eyebrow">Rechte &amp; Sichtbarkeit</div><h2 class="msa-title">Warum <span class="ts-gold">Ausblenden</span> nicht reicht</h2></div><div class="msa-wrap" role="group" aria-label="Drei-Ebenen-Animation"><div class="msa-stage"><div class="msa-scene" data-i="0"><div class="msa-card msa-inv"><div class="msa-inv-top"><span class="msa-tag">Standort \xB7 Inventur</span><span class="msa-reveal-btn">Eigenschaften einblenden \u25BE</span></div><div class="msa-grid"><div class="msa-cell msa-ch">Artikel</div><div class="msa-cell msa-ch">Menge</div><div class="msa-cell msa-ch">EK-Preis</div><div class="msa-cell msa-ch">Lieferant</div><div class="msa-cell">Rinderfilet</div><div class="msa-cell">12</div><div class="msa-cell msa-sens">'+d()+'<span class="msa-val">24,90 \u20AC</span></div><div class="msa-cell msa-sens">'+d()+'<span class="msa-val">Metro</span></div><div class="msa-cell">Butter</div><div class="msa-cell">8</div><div class="msa-cell msa-sens">'+d()+'<span class="msa-val">6,40 \u20AC</span></div><div class="msa-cell msa-sens">'+d()+'<span class="msa-val">Transgourmet</span></div></div><div class="msa-note" style="margin-top:10px">Beispielwerte</div></div></div><div class="msa-scene" data-i="1"><div class="msa-chain"><div class="msa-card msa-node"><div class="msa-ceyebrow">Standort</div><div class="msa-cname">Inventur-Zeile</div><div class="msa-krow"><span class="k">Rinderfilet</span><span class="v">12</span></div></div><div class="msa-link dash"><span class="msa-rlabel">Relation</span><span class="msa-dot"></span></div><div class="msa-card msa-node"><div class="msa-ceyebrow">Hauptbereich</div><div class="msa-cname">Kalkulation</div><div class="msa-krow"><span class="k">Wareneinsatz</span><span class="v">31,2 %</span></div></div><div class="msa-link dash fire2-anchor"><span class="msa-rlabel">Relation</span><span class="msa-dot"></span></div><div class="msa-card msa-node msa-node-danger"><div class="msa-ceyebrow">Sensibel</div><div class="msa-cname">Deckungsbeitrag</div><div class="msa-krow"><span class="k">DB III</span><span class="v sensv">1,84 \u20AC</span></div></div></div></div><div class="msa-scene" data-i="2"><div class="msa-bridge"><div class="msa-card msa-master"><div class="msa-ceyebrow">Hauptbereich \xB7 Gesch\xE4ftsf\xFChrung</div><div class="msa-cname" style="margin:4px 0 2px">Master-Inventur</div><div class="msa-mrow"><span class="mh">Artikel</span><span class="mh">Menge</span><span class="mh" style="text-align:right">EK-Preis</span><span class="mc">Rinderfilet</span><span class="mc">\u2014</span><span class="mp">24,90 \u20AC</span><span class="mc">Butter</span><span class="mc">\u2014</span><span class="mp">6,40 \u20AC</span></div><div class="msa-note" style="margin-top:9px">Preis &amp; Kalkulation \u2014 nur hier</div></div><div class="msa-span"><span class="msa-span-lbl">Ableitung</span><span class="msa-span-line"></span><span class="msa-flow down"></span><span class="msa-pricechip">Preis bleibt</span><span class="msa-flow up"></span></div><div class="msa-stores"><div class="msa-card msa-store" data-s="0"><div><span class="msa-store-nm">Standort Mitte</span><div class="msa-noprice">Artikel \xB7 Menge \u2014 kein Preis</div></div><span class="msa-store-cols">z\xE4hlen</span></div><div class="msa-card msa-store" data-s="1"><div><span class="msa-store-nm">Standort Nord</span><div class="msa-noprice">Artikel \xB7 Menge \u2014 kein Preis</div></div><span class="msa-store-cols">z\xE4hlen</span></div><div class="msa-card msa-store" data-s="2"><div><span class="msa-store-nm">Standort S\xFCd</span><div class="msa-noprice">Artikel \xB7 Menge \u2014 kein Preis</div></div><span class="msa-store-cols">z\xE4hlen</span></div></div></div></div></div><div class="msa-steps"><button class="msa-step" data-i="0"><span class="msa-step-bar"></span><span class="msa-step-n">01</span><span class="msa-step-t">Ausblenden</span></button><button class="msa-step" data-i="1"><span class="msa-step-bar"></span><span class="msa-step-n">02</span><span class="msa-step-t">Relation</span></button><button class="msa-step" data-i="2"><span class="msa-step-bar"></span><span class="msa-step-n">03</span><span class="msa-step-t">Br\xFCcke</span></button></div><p class="msa-cap"></p><div class="msa-foot"><button class="msa-replay" type="button">'+r()+"Neu abspielen</button></div></div>",s}function t(){if(!document.getElementById("tsmsa-css")){var s=document.createElement("style");s.id="tsmsa-css",s.textContent=h,document.head.appendChild(s)}}var a=[];function m(){a.forEach(clearTimeout),a=[]}function b(s,c){var o=s.querySelector(".msa-wrap");if(o.classList.remove("is-0","is-1","is-2","msa-open"),o.classList.add("is-"+c),s.querySelectorAll(".msa-step").forEach(function(p){p.classList.toggle("active",+p.getAttribute("data-i")===c)}),s.querySelector(".msa-cap").innerHTML=f[c],c===0&&a.push(setTimeout(function(){o.classList.add("msa-open")},1400)),c===1){s.querySelectorAll(".msa-link").forEach(function(p){p.classList.remove("fire","fire2")}),s.offsetWidth;var l=s.querySelectorAll('.msa-scene[data-i="1"] .msa-link');l[0]&&l[0].classList.add("fire"),l[1]&&l[1].classList.add("fire2")}c===2&&s.querySelectorAll(".msa-store").forEach(function(p,u){a.push(setTimeout(function(){p.classList.add("lit")},200+u*260))})}function g(s,c){if(m(),i){b(s,2),s.querySelectorAll(".msa-store").forEach(function(u){u.classList.add("lit")}),s.querySelector(".msa-wrap").classList.add("on");return}s.querySelector(".msa-wrap").classList.add("on");var o=[0,1,2],l=o.indexOf(c);l<0&&(l=0);function p(u){var y=o[u];b(s,y),u<o.length-1&&a.push(setTimeout(function(){p(u+1)},v[y]))}p(l)}function w(s){var c=s.getBoundingClientRect();return c.top<innerHeight*.82&&c.bottom>0}function k(s){var c=!1;function o(){c||(c=!0,g(s,0))}if("IntersectionObserver"in window){var l=new IntersectionObserver(function(y){y[0].isIntersecting&&(o(),l.disconnect())},{threshold:.28});l.observe(s)}w(s)&&o();var p=setInterval(function(){if(!document.body.contains(s)){clearInterval(p);return}w(s)&&(o(),clearInterval(p))},250);setTimeout(function(){clearInterval(p)},2e4),s.querySelectorAll(".msa-step").forEach(function(y){y.addEventListener("click",function(){c=!0,g(s,+y.getAttribute("data-i"))})});var u=s.querySelector(".msa-replay");u&&u.addEventListener("click",function(){c=!0,g(s,0)})}function $(){if(!x()||document.getElementById("tsmsa"))return;var s=document.querySelector(".super-content");if(!s)return;var c=document.getElementById("tsms-intro");if(!c)return;window.__tsmsaKill&&window.__tsmsaKill(),t();var o=n();c.parentNode.insertBefore(o,c.nextSibling);var l=o.querySelector(".msa-wrap");l.classList.add("is-2"),o.querySelector(".msa-cap").innerHTML=f[2],k(o);function p(){o.classList.toggle("hid",document.hidden)}document.addEventListener("visibilitychange",p),window.__tsmsaKill=function(){m(),document.removeEventListener("visibilitychange",p)}}$(),document.addEventListener("DOMContentLoaded",$),window.__tsMO(function(){$()}).observe(document.documentElement,{childList:!0,subtree:!0})})()}],[112,function(){(function(){if(window.__tsmsi)return;window.__tsmsi=1;var e=".page__multistandort-erweiterung-optional";function x(){return/\/multistandort-erweiterung-optional\/?$/.test(location.pathname)}var i=["Eigene <b>Z\xE4hlliste</b> <span>(monatlich, aus der Masterliste abgeleitet, ohne Preise)</span>","Eigene <b>Kennzahlen-Ansicht</b> <span>(aus Key Metrics abgeleitet, nur die eigenen Zahlen)</span>","K\xFChltemperaturlisten","Checklisten &amp; Audits","Mitarbeiter-Pflichtdokumente","Urlaubsplanung","Waste-Erfassung","Mitarbeiterkleidung","Bestell- &amp; Lieferlisten","Reparaturmeldungen","Bankeinzahlungen","Anleitungen <span>(Kasse, Musikanlage)</span>"],v=["Master-Inventur &amp; Kalkulation","Key-Metrics-Master"],f=["Lieferanten- &amp; Dienstleister-Verzeichnis <span>(inkl. Portfolios, z.&nbsp;B. Reinigungsfirma)</span>","Sicherheitsdatenbl\xE4tter","Arbeitssicherheit &amp; Lebensmittelkontrollen"],h=`
  ${e} #tsmsi{width:min(var(--ts-page),94vw);margin:clamp(64px,8vh,100px) auto 0;box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#fff}
  ${e} #tsmsi *{box-sizing:border-box}
  ${e} #tsmsi .msi-head{max-width:calc(860px * var(--ts-tx));margin:0 auto 44px;text-align:center;padding:0 24px}
  ${e} #tsmsi .msi-eyebrow{display:inline-flex;align-items:center;gap:9px;font:600 13px/1 var(--font-sans, -apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif);letter-spacing:.16em;text-transform:uppercase;color:#c7b489;margin-bottom:12px}
  ${e} #tsmsi .msi-eyebrow::before{content:"";width:7px;height:7px;border-radius:50%;background:#c7b489;box-shadow:0 0 12px rgba(199,180,137,.7)}
  ${e} #tsmsi .msi-title{font-family:"Lineal Web","Lineal TS",-apple-system,BlinkMacSystemFont,"SF Pro Display",sans-serif;font-weight:600;letter-spacing:-.01em;line-height:1.08;text-wrap:balance;font-size:clamp(1.9rem,4.4vw,2.9rem);margin:0 0 16px}
  ${e} #tsmsi .msi-title .ts-gold{color:#c7b489}
  ${e} #tsmsi .msi-sub{font-size:16.5px;line-height:1.5;color:rgba(255,255,255,.8);margin:0}

  ${e} #tsmsi .msi-cols{max-width:var(--ts-page);margin:0 auto;display:grid;grid-template-columns:1fr 1fr 1fr;gap:clamp(16px,2.6vw,26px);
    opacity:0;transform:translateY(16px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .8s cubic-bezier(.16,1,.3,1)}
  ${e} #tsmsi.in .msi-cols{opacity:1;transform:none}
  ${e} #tsmsi .msi-col{background:rgba(255,255,255,.035);border-radius:16px;padding:22px 20px;border:1px solid rgba(255,255,255,.12)}
  ${e} #tsmsi .msi-col--store{border-color:rgba(70,175,115,.32);background:linear-gradient(165deg,rgba(70,175,115,.06),rgba(255,255,255,.02))}
  ${e} #tsmsi .msi-col--hq{border-color:rgba(199,180,137,.32);background:linear-gradient(165deg,rgba(199,180,137,.07),rgba(255,255,255,.02))}
  ${e} #tsmsi .msi-col--hub{border-color:rgba(255,255,255,.24);background:linear-gradient(165deg,rgba(255,255,255,.06),rgba(255,255,255,.015))}
  ${e} #tsmsi .msi-col-hd{font-family:"Lineal Web","Lineal TS",-apple-system,sans-serif;font-weight:600;font-size:15px;color:#fff;margin:0 0 4px;padding-bottom:14px;border-bottom:1px solid rgba(255,255,255,.1)}
  ${e} #tsmsi .msi-col-hd-row{display:flex;align-items:center;gap:9px;margin-bottom:4px}
  ${e} #tsmsi .msi-col-note{display:block;font-size:11.5px;font-weight:500;color:rgba(255,255,255,.42);margin-top:2px}
  ${e} #tsmsi .msi-dot{width:8px;height:8px;border-radius:50%;flex:0 0 auto}
  ${e} #tsmsi .msi-col--store .msi-dot{background:#46af73;box-shadow:0 0 10px rgba(70,175,115,.7)}
  ${e} #tsmsi .msi-col--hq .msi-dot{background:#c7b489;box-shadow:0 0 10px rgba(199,180,137,.7)}
  ${e} #tsmsi .msi-col--hub .msi-dot{background:#fff;box-shadow:0 0 10px rgba(255,255,255,.5)}
  ${e} #tsmsi .msi-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:2px}
  ${e} #tsmsi .msi-list li{font-size:14.5px;line-height:1.55;color:rgba(255,255,255,.86);padding:7px 4px 7px 16px;position:relative}
  ${e} #tsmsi .msi-list li::before{content:"";position:absolute;left:0;top:14px;width:4px;height:4px;border-radius:50%;background:rgba(255,255,255,.32)}
  ${e} #tsmsi .msi-list li b{color:inherit;font-weight:600}
  ${e} #tsmsi .msi-list li span{display:block;color:rgba(255,255,255,.5);font-size:11.5px;margin-top:1px}

  @media(max-width:900px){ ${e} #tsmsi .msi-cols{grid-template-columns:1fr;gap:16px} }
  @media(prefers-reduced-motion:reduce){ ${e} #tsmsi .msi-cols{opacity:1;transform:none} }
  `;function d(){if(!document.getElementById("tsmsi-css")){var a=document.createElement("style");a.id="tsmsi-css",a.textContent=h,document.head.appendChild(a)}}function r(a){return a.map(function(m){return"<li>"+m+"</li>"}).join("")}function n(){var a=document.createElement("div");return a.id="tsmsi",a.innerHTML='<div class="msi-head"><div class="msi-eyebrow">Wer sieht was</div><h2 class="msi-title">Drei Bereiche, <span class="ts-gold">eine Struktur</span></h2><p class="msi-sub">Nicht alles geh\xF6rt an denselben Ort: der Standort braucht anderes als die Gesch\xE4ftsf\xFChrung, und manches muss f\xFCr beide sichtbar bleiben.</p></div><div class="msi-cols"><div class="msi-col msi-col--store"><div class="msi-col-hd"><div class="msi-col-hd-row"><span class="msi-dot"></span>Lebt im Standort</div></div><ul class="msi-list">'+r(i)+'</ul></div><div class="msi-col msi-col--hq"><div class="msi-col-hd"><div class="msi-col-hd-row"><span class="msi-dot"></span>Nur Gesch\xE4ftsf\xFChrung</div></div><ul class="msi-list">'+r(v)+'</ul></div><div class="msi-col msi-col--hub"><div class="msi-col-hd"><div class="msi-col-hd-row"><span class="msi-dot"></span>Geteilte Zentrale</div><span class="msi-col-note">Zentral gepflegt, f\xFCr alle Standorte lesbar</span></div><ul class="msi-list">'+r(f)+"</ul></div></div>",a}function t(){if(x()){if(document.getElementById("tsmsi"))return!0;var a=document.getElementById("tsmsa");if(!(!a||!a.parentNode)){d();var m=n();a.parentNode.insertBefore(m,a.nextSibling);var b=new IntersectionObserver(function(w){w[0].isIntersecting&&(m.classList.add("in"),b.disconnect())},{threshold:.25});b.observe(m);var g=m.getBoundingClientRect();return g.top<innerHeight*.85&&g.bottom>0&&m.classList.add("in"),!0}}}t(),document.addEventListener("DOMContentLoaded",t),window.__tsMO(function(){t()}).observe(document.documentElement,{childList:!0,subtree:!0})})()}],[113,function(){(function(){if(window.__tsmsv)return;window.__tsmsv=1;var e=".page__multistandort-erweiterung-optional";function x(){return/\/multistandort-erweiterung-optional\/?$/.test(location.pathname)}var i="cubic-bezier(.16,1,.3,1)",v=`
  ${e} #tsmsv{width:min(var(--ts-page),94vw);margin:clamp(64px,8vh,100px) auto 0;box-sizing:border-box;
    font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#fff}
  ${e} #tsmsv *{box-sizing:border-box}
  ${e} #tsmsv .msv-row{display:grid;grid-template-columns:calc((100% - 18px) * .5) calc((100% - 18px) * .5);
    gap:18px;align-items:center}

  ${e} #tsmsv .msv-pc{display:flex;align-items:center;justify-content:center;width:100%}
  ${e} #tsmsv .msv-mac{position:relative;width:100%;cursor:pointer;line-height:0;transition:transform .5s ${i}}
  ${e} #tsmsv .msv-mac:hover{transform:scale(1.02)}
  ${e} #tsmsv .msv-lid{position:relative;width:100%;aspect-ratio:16/10;border-radius:14px;
    background:linear-gradient(160deg,#2a2d3a,#14161f);padding:10px;box-shadow:0 30px 64px -28px rgba(0,0,0,.9)}
  ${e} #tsmsv .msv-screen{position:relative;width:100%;height:100%;border-radius:7px;overflow:hidden;
    background:linear-gradient(180deg,#1a1d2b,#0a0c14);border:1px solid rgba(199,180,137,.22)}
  ${e} #tsmsv .msv-base{width:112%;height:11px;margin:0 auto;border-radius:0 0 12px 12px;
    background:linear-gradient(180deg,#23263200,#2a2d3a);position:relative;left:-6%}
  ${e} #tsmsv .msv-base::after{content:"";position:absolute;left:50%;top:0;transform:translateX(-50%);
    width:16%;height:4px;border-radius:0 0 5px 5px;background:rgba(255,255,255,.09)}
  ${e} #tsmsv .msv-ph{position:absolute;inset:0;z-index:3;display:flex;flex-direction:column;
    justify-content:flex-end;gap:8px;padding:clamp(10px,2vw,20px);line-height:normal}
  ${e} #tsmsv .msv-bub{max-width:78%;border-radius:11px;padding:8px 11px;font-size:clamp(8px,1vw,11.5px);
    line-height:1.45;background:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,.05)),#0d1019;
    border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.72)}
  ${e} #tsmsv .msv-bub.me{align-self:flex-end;
    background:linear-gradient(rgba(199,180,137,.13),rgba(199,180,137,.13)),#0d1019;
    border-color:rgba(199,180,137,.4);color:#fff}
  ${e} #tsmsv .msv-play{position:absolute;inset:0;z-index:4;display:flex;align-items:center;justify-content:center}
  ${e} #tsmsv .msv-play span{width:76px;height:76px;border-radius:50%;background:rgba(255,255,255,.16);
    -webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,.55);
    display:flex;align-items:center;justify-content:center;transition:transform .3s ${i},background .3s ${i}}
  ${e} #tsmsv .msv-mac:hover .msv-play span{transform:scale(1.08);background:rgba(255,255,255,.24)}
  ${e} #tsmsv .msv-play span::after{content:"";border-style:solid;border-width:12px 0 12px 20px;
    border-color:transparent transparent transparent #fff;margin-left:5px}
  ${e} #tsmsv .msv-soon{position:absolute;left:50%;bottom:9%;transform:translateX(-50%);z-index:5;
    font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.42);white-space:nowrap}

  ${e} #tsmsv .msv-h2{font-family:"Lineal Web","Lineal TS",-apple-system,sans-serif;font-weight:600;
    font-size:42px;line-height:1.15;letter-spacing:-.02em;text-align:center;color:#fff;margin:0 0 18px;white-space:nowrap}
  ${e} #tsmsv .msv-h2 .ts-gold{color:#c7b489}
  ${e} #tsmsv .msv-txt p{font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86);margin:0 0 13px;text-align:left}
  ${e} #tsmsv .msv-txt p:last-child{margin-bottom:0}
  ${e} #tsmsv .msv-txt b{color:#c7b489;font-weight:600}

  ${e} #tsmsv .msv-close{max-width:calc(900px * var(--ts-tx));margin:46px auto 0;text-align:center;
    font-size:15.5px;line-height:1.62;color:rgba(255,255,255,.86)}
  ${e} #tsmsv .msv-close b{color:#c7b489;font-weight:600}

  @media(max-width:900px){
    ${e} #tsmsv .msv-row{grid-template-columns:1fr;gap:26px}
    ${e} #tsmsv .msv-h2{font-size:clamp(1.7rem,7vw,2.2rem);white-space:normal}
  }
  @media(prefers-reduced-motion:reduce){ ${e} #tsmsv .msv-mac{transition:none} }
  `,f='<div class="msv-row"><div class="msv-pc"><div class="msv-mac" style="cursor:default" aria-hidden="true"><div class="msv-lid"><div class="msv-screen"><div class="msv-ph"><div class="msv-bub me">Rolle die Z\xE4hlliste f\xFCr alle f\xFCnf Standorte aus, Preise bleiben oben.</div><div class="msv-bub">Ausgerollt. F\xFCnf Z\xE4hllisten aktualisiert, kein Preis mitgegeben.</div></div></div></div><div class="msv-base"></div></div></div><div class="msv-txt"><h2 class="msv-h2">So funktioniert die <span class="ts-gold">Ableitung</span></h2><p>Die Trennung passiert vorher, rein in Notion: ein Teamspace f\xFCr die Gesch\xE4ftsf\xFChrung mit Master-Inventur, Key Metrics und Kalkulation, einer je Standort mit nur den eigenen Listen.</p><p>Jeder Standort bekommt so seine eigene Z\xE4hlliste und Kennzahlen-Ansicht, beide ohne Relation zur Masterliste. <b>Claude Code</b> liest Master-Inventur und Key Metrics \xFCber die API und schreibt f\xFCr jeden Standort nur die eigenen Werte hinein, nie eine Verkn\xFCpfung.</p><p>Ab mehr als ein, zwei Standorten ist das von Hand kaum zu pflegen \u2014 Claude Code ist hier kein Nice-to-have, sondern Teil der L\xF6sung. Wie der Abgleich l\xE4uft, zeige ich dir in Modul 4, <b>Lektion 4.9 \u201EWer macht was im Backoffice\u201C</b>.</p></div></div><p class="msv-close">Du musst diese Verbindung hier noch nicht selbst bauen. Pr\xE4g dir nur zwei Regeln ein: getrennte Teamspaces, niemals eine Relation dazwischen. F\xFCr Inventur und Key Metrics gilt dasselbe Muster \u2014 Claude Code h\xE4lt die getrennten Datenbanken synchron, sobald mehr als ein Standort dazukommt. <b>Lektion 4.9</b> in Modul 4 zeigt dir den Abgleich Schritt f\xFCr Schritt, mit einer Vorschau vor jeder \xC4nderung.</p>';function h(){if(!document.getElementById("tsmsv-css")){var r=document.createElement("style");r.id="tsmsv-css",r.textContent=v,document.head.appendChild(r)}}function d(){if(x()){if(document.getElementById("tsmsv"))return!0;var r=document.getElementById("tsmsi");if(!(!r||!r.parentNode)){h();var n=document.createElement("section");return n.id="tsmsv",n.innerHTML=f,r.parentNode.insertBefore(n,r.nextSibling),!0}}}d(),document.addEventListener("DOMContentLoaded",d),window.__tsMO(function(){d()}).observe(document.documentElement,{childList:!0,subtree:!0})})()}],[114,function(){(function(){if(window.__tsmsemp)return;window.__tsmsemp=1;var e=".page__multistandort-erweiterung-optional";function x(){return/\/multistandort-erweiterung-optional\/?$/.test(location.pathname)}var i=[{n:"01",l:"Z\xE4hlliste anlegen"},{n:"02",l:"Teamspace anlegen"},{n:"03",l:"Ohne Relation bef\xFCllen"},{n:"04",l:"Testlauf pr\xFCfen"}],v=`
  ${e} #tsmsemp{width:min(var(--ts-page),95vw);margin:34px auto clamp(64px,8vh,100px);padding:clamp(26px,4vw,44px) clamp(24px,4.5vw,50px);box-sizing:border-box;position:relative;border-radius:20px;overflow:hidden;
    background:linear-gradient(165deg,rgba(255,255,255,.05),rgba(255,255,255,0));border:1px solid rgba(255,255,255,.10);
    box-shadow:0 30px 70px -34px rgba(0,0,0,.9),inset 0 1px 0 rgba(255,255,255,.05);
    font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#fff;
    transform:perspective(1100px) rotateX(9deg) translateY(34px) scale(.97);opacity:0;transition:transform .9s cubic-bezier(.16,1,.3,1),opacity .9s cubic-bezier(.16,1,.3,1)}
  ${e} #tsmsemp.in{transform:perspective(1100px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));opacity:1}
  ${e} #tsmsemp *{box-sizing:border-box}
  ${e} #tsmsemp::after{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,rgba(199,180,137,0),rgba(199,180,137,.7),rgba(199,180,137,0))}
  ${e} #tsmsemp::before{content:"";position:absolute;width:560px;height:560px;border-radius:50%;left:var(--gx,50%);top:var(--gy,50%);transform:translate(-50%,-50%);pointer-events:none;opacity:0;transition:opacity .4s cubic-bezier(.16,1,.3,1);background:radial-gradient(circle,rgba(199,180,137,.10),rgba(199,180,137,0) 62%)}
  ${e} #tsmsemp.glow::before{opacity:1}
  ${e} #tsmsemp.beat{animation:tsmsempBeat 2.6s ease-in-out}
  @keyframes tsmsempBeat{0%,100%{box-shadow:0 30px 70px -34px rgba(0,0,0,.9),inset 0 1px 0 rgba(255,255,255,.05)}50%{box-shadow:0 30px 80px -30px rgba(0,0,0,.9),0 0 44px rgba(199,180,137,.22),inset 0 1px 0 rgba(255,255,255,.05)}}
  ${e} #tsmsemp .msemp-grid{position:relative;display:grid;grid-template-columns:minmax(260px,1fr) 1.5fr;gap:clamp(28px,4.5vw,56px);align-items:center}
  ${e} #tsmsemp svg.msemp-link{position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none;z-index:3}
  ${e} #tsmsemp .msemp-link path{fill:none;stroke:rgba(199,180,137,.7);stroke-width:1.4;stroke-linecap:round;opacity:0;transition:opacity .4s cubic-bezier(.16,1,.3,1)}
  ${e} #tsmsemp .msemp-link path.on{opacity:1}
  ${e} #tsmsemp .msemp-link circle{fill:#efe6d2;opacity:0;transition:opacity .4s cubic-bezier(.16,1,.3,1)}
  ${e} #tsmsemp .msemp-link circle.on{opacity:1}
  ${e} #tsmsemp .msemp-anim{position:relative;z-index:2;display:flex;flex-direction:column;gap:11px}
  ${e} #tsmsemp .msemp-anim-hd{font-family:"Lineal Web","Lineal TS",-apple-system,sans-serif;font-weight:600;font-size:1.15rem;color:#fff;margin:0 0 6px}
  ${e} #tsmsemp .msemp-anim-hd span{color:#c7b489}
  ${e} #tsmsemp .msemp-step{display:flex;align-items:center;gap:13px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.10);border-radius:13px;padding:11px 15px;opacity:0;transform:translateX(-10px)}
  ${e} #tsmsemp.in .msemp-step{opacity:1;transform:none;transition:background .5s cubic-bezier(.16,1,.3,1),border-color .5s cubic-bezier(.16,1,.3,1),box-shadow .5s cubic-bezier(.16,1,.3,1),opacity .6s cubic-bezier(.16,1,.3,1),transform .6s cubic-bezier(.16,1,.3,1)}
  ${e} #tsmsemp.in .msemp-step:nth-child(1){transition-delay:.15s}${e} #tsmsemp.in .msemp-step:nth-child(2){transition-delay:.28s}${e} #tsmsemp.in .msemp-step:nth-child(3){transition-delay:.41s}${e} #tsmsemp.in .msemp-step:nth-child(4){transition-delay:.54s}
  ${e} #tsmsemp .msemp-step.on{background:rgba(199,180,137,.13);border-color:rgba(199,180,137,.5);box-shadow:0 0 0 1px rgba(199,180,137,.14),0 14px 30px -16px rgba(199,180,137,.4)}
  ${e} #tsmsemp .msemp-step-n{flex:0 0 auto;width:30px;height:30px;border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:rgba(255,255,255,.55);background:rgba(255,255,255,.06);transition:background .5s cubic-bezier(.16,1,.3,1),color .5s cubic-bezier(.16,1,.3,1)}
  ${e} #tsmsemp .msemp-step.on .msemp-step-n{background:#c7b489;color:#05060b}
  ${e} #tsmsemp .msemp-step-l{font-size:14px;font-weight:600;color:rgba(255,255,255,.75)}
  ${e} #tsmsemp .msemp-step.on .msemp-step-l{color:#fff}
  ${e} #tsmsemp .msemp-text{position:relative;z-index:2}
  ${e} #tsmsemp .msemp-h{font-family:"Lineal Web","Lineal TS",-apple-system,sans-serif;font-weight:600;font-size:1.45rem;color:#fff;margin:0 0 10px}
  ${e} #tsmsemp .msemp-h .eg{color:#c7b489}
  ${e} #tsmsemp .msemp-intro{font-size:.96rem;line-height:1.7;color:rgba(255,255,255,.68);margin:0 0 16px}
  ${e} #tsmsemp .msemp-ol{list-style:none;margin:0;padding:0;counter-reset:msemp}
  ${e} #tsmsemp .msemp-ol li{position:relative;counter-increment:msemp;padding:10px 14px 10px 44px;border-radius:11px;font-size:.92rem;line-height:1.55;color:rgba(255,255,255,.62);transition:background .5s cubic-bezier(.16,1,.3,1),color .5s cubic-bezier(.16,1,.3,1),box-shadow .5s cubic-bezier(.16,1,.3,1);margin-bottom:6px}
  ${e} #tsmsemp .msemp-ol li::before{content:counter(msemp,decimal-leading-zero);position:absolute;left:14px;top:10px;font-size:11px;font-weight:700;color:#c7b489;font-variant-numeric:tabular-nums}
  ${e} #tsmsemp .msemp-ol li.lit{background:rgba(199,180,137,.10);color:#fff;box-shadow:inset 0 0 0 1px rgba(199,180,137,.22)}
  ${e} #tsmsemp .msemp-ol li b{color:#c7b489;font-weight:600}
  @media(max-width:900px){ ${e} #tsmsemp .msemp-grid{grid-template-columns:1fr;gap:26px} ${e} #tsmsemp svg.msemp-link{display:none} }
  @media(prefers-reduced-motion:reduce){ ${e} #tsmsemp{transform:none;opacity:1} ${e} #tsmsemp .msemp-step{opacity:1;transform:none} }
  `;function f(){if(!document.getElementById("tsmsemp-css")){var t=document.createElement("style");t.id="tsmsemp-css",t.textContent=v,document.head.appendChild(t)}}function h(){var t=document.createElement("div");t.id="tsmsemp";var a=i.map(function(m,b){return'<div class="msemp-step" data-i="'+b+'"><span class="msemp-step-n">'+m.n+'</span><span class="msemp-step-l">'+m.l+"</span></div>"}).join("");return t.innerHTML=`
<div class="msemp-grid">
  <svg class="msemp-link" preserveAspectRatio="none"><path/><circle r="3.5" class="c1"/><circle r="3.5" class="c2"/></svg>
  <div class="msemp-anim">
    <div class="msemp-anim-hd">Ein neuer <span>Standort</span></div>
    ${a}
  </div>
  <div class="msemp-text">
    <h3 class="msemp-h">Empfehlung zur <span class="eg">Einrichtung</span></h3>
    <p class="msemp-intro">Damit ein neuer Standort sauber in die Struktur passt, gehst du diese vier Schritte in genau dieser Reihenfolge:</p>
    <ol class="msemp-ol">
      <li data-i="0">Lege eine eigenst\xE4ndige <b>Z\xE4hlliste</b> an \u2014 eine neue, unabh\xE4ngige Datenbank f\xFCr den Standort, keine Kopie mit Relation zur Masterliste.</li>
      <li data-i="1">Lege f\xFCr den Standort einen eigenen <b>Teamspace</b> an und lade den Manager ausschlie\xDFlich dort ein \u2014 er sieht dann nur, was in diesem Teamspace liegt.</li>
      <li data-i="2">Bef\xFClle die Z\xE4hlliste <b>ohne Relation</b>: Claude Code schreibt Artikel und Einheit als reine Werte hinein, nie als Verkn\xFCpfung zur\xFCck in die Kalkulation.</li>
      <li data-i="3">Lass den Standort einen <b>ersten Z\xE4hldurchlauf</b> machen und pr\xFCfe, ob die Menge oben ankommt, bevor der Alltag beginnt.</li>
    </ol>
  </div>
</div>`,t}function d(t){var a=t.querySelector(".msemp-grid"),m=t.querySelector(".msemp-link"),b=t.querySelector(".msemp-step.on"),g=t.querySelector(".msemp-ol li.lit"),w=m.querySelector("path"),k=m.querySelector(".c1"),$=m.querySelector(".c2");if(!b||!g){w.classList.remove("on"),k.classList.remove("on"),$.classList.remove("on");return}var s=a.getBoundingClientRect(),c=b.getBoundingClientRect(),o=g.getBoundingClientRect(),l=c.right-s.left,p=c.top-s.top+c.height/2,u=o.left-s.left,y=o.top-s.top+o.height/2,z=(u-l)*.5;w.setAttribute("d","M "+l+" "+p+" C "+(l+z)+" "+p+" "+(u-z)+" "+y+" "+u+" "+y),k.setAttribute("cx",l),k.setAttribute("cy",p),$.setAttribute("cx",u),$.setAttribute("cy",y),w.classList.add("on"),k.classList.add("on"),$.classList.add("on")}function r(t){var a=t.querySelectorAll(".msemp-step"),m=t.querySelectorAll(".msemp-ol li"),b=-1,g=null;function w(){b=(b+1)%a.length,Array.prototype.forEach.call(a,function(o,l){o.classList.toggle("on",l===b)}),Array.prototype.forEach.call(m,function(o,l){o.classList.toggle("lit",l===b)}),requestAnimationFrame(function(){d(t)})}function k(){g||(w(),g=setInterval(w,2600))}function $(){g&&(clearInterval(g),g=null)}var s=window.matchMedia&&window.matchMedia("(prefers-reduced-motion:reduce)").matches,c=new IntersectionObserver(function(o){o[0].isIntersecting?(t.classList.add("in"),s||k()):$()},{threshold:.3});c.observe(t),window.matchMedia&&window.matchMedia("(hover:hover)").matches&&(t.addEventListener("mousemove",function(o){var l=t.getBoundingClientRect(),p=(o.clientX-l.left)/l.width,u=(o.clientY-l.top)/l.height;t.style.setProperty("--ry",((p-.5)*5).toFixed(2)+"deg"),t.style.setProperty("--rx",((.5-u)*4).toFixed(2)+"deg"),t.style.setProperty("--gx",(p*100).toFixed(1)+"%"),t.style.setProperty("--gy",(u*100).toFixed(1)+"%"),t.classList.add("glow")}),t.addEventListener("mouseenter",function(){t.classList.add("beat")}),t.addEventListener("mouseleave",function(){t.style.setProperty("--ry","0deg"),t.style.setProperty("--rx","0deg"),t.classList.remove("glow","beat")})),window.addEventListener("resize",function(){requestAnimationFrame(function(){d(t)})}),s&&(t.classList.add("in"),a[0]&&a[0].classList.add("on"),m[0]&&m[0].classList.add("lit"))}function n(){if(x()){if(document.getElementById("tsmsemp"))return!0;var t=document.getElementById("tsmsv");if(!(!t||!t.parentNode)){f();var a=h();return t.parentNode.insertBefore(a,t.nextSibling),r(a),!0}}}n(),document.addEventListener("DOMContentLoaded",n),window.__tsMO(function(){n()}).observe(document.documentElement,{childList:!0,subtree:!0})})()}],[115,function(){(function(){if(window.__tsmsnext)return;window.__tsmsnext=1;var e=".page__multistandort-erweiterung-optional";function x(){return/\/multistandort-erweiterung-optional\/?$/.test(location.pathname)}var i=["Du wei\xDFt, warum eine ausgeblendete Spalte <b>kein Schutz</b> ist, sondern nur ein Vorhang.","Du kennst die <b>Rechte-Architektur</b> aus Masterliste und Standort-Z\xE4hlliste.","Du verstehst das <b>Ableitungsprinzip</b>: Stammdaten runter, Mengen rauf, der Preis bleibt oben.","Du wei\xDFt, dass <b>Claude Code und die Notion-API</b> diese Verbindung tragen, und dass dir Lektion 4.9 den Abgleich zeigt."],v=`
  ${e} #tsmsnext{width:100%;margin-top:44px;padding:0 clamp(20px,4vw,56px);box-sizing:border-box;content-visibility:auto;contain-intrinsic-size:auto 900px;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue",sans-serif;color:#fff}
  ${e} #tsmsnext *{box-sizing:border-box}
  ${e} #tsmsnext .tsl-head{text-align:center;margin-bottom:66px}
  ${e} #tsmsnext .tsl-eyebrow{font-family:"Lineal Web","Lineal TS",-apple-system,sans-serif;font-weight:600;font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;color:#c7b489;display:block;margin-bottom:14px}
  ${e} #tsmsnext .tsl-title{font-family:"Lineal Web","Lineal TS",-apple-system,sans-serif;font-weight:600;font-size:clamp(30px,5vw,46px);line-height:1.05;color:#fff;margin:0}
  ${e} #tsmsnext .tsl-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(20px,3vw,40px);max-width:var(--ts-page);margin:0 auto}
  ${e} #tsmsnext .tsl-cell{display:flex;justify-content:center}
  ${e} #tsmsnext .tsl-orb{position:relative;width:100%;max-width:250px;aspect-ratio:1;border-radius:50%;display:flex;align-items:center;justify-content:center;text-align:center;padding:14%;
    background:radial-gradient(120% 120% at 30% 26%,rgba(199,180,137,.20),rgba(255,255,255,.03) 46%,rgba(255,255,255,.015));
    border:1px solid rgba(255,255,255,.12);box-shadow:0 30px 60px -30px rgba(0,0,0,.85),inset 0 1px 0 rgba(255,255,255,.06),inset 0 0 40px rgba(199,180,137,.06);
    opacity:0;transform:translateY(22px);transition:opacity .8s cubic-bezier(.16,1,.3,1),transform .9s cubic-bezier(.16,1,.3,1),border-color .4s cubic-bezier(.16,1,.3,1),box-shadow .4s cubic-bezier(.16,1,.3,1)}
  ${e} #tsmsnext .tsl-orb::after{content:"";position:absolute;top:14%;left:16%;width:26%;height:20%;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.22),rgba(255,255,255,0) 70%);pointer-events:none}
  ${e} #tsmsnext.in .tsl-orb{opacity:1;transform:none;animation:tsmsTslFloat 7s ease-in-out infinite}
  ${e} #tsmsnext.in .tsl-cell:nth-child(1) .tsl-orb{transition-delay:0s;animation-delay:0s}
  ${e} #tsmsnext.in .tsl-cell:nth-child(2) .tsl-orb{transition-delay:.14s;animation-delay:-1.6s}
  ${e} #tsmsnext.in .tsl-cell:nth-child(3) .tsl-orb{transition-delay:.28s;animation-delay:-3.2s}
  ${e} #tsmsnext.in .tsl-cell:nth-child(4) .tsl-orb{transition-delay:.42s;animation-delay:-4.8s}
  ${e} #tsmsnext .tsl-orb:hover{border-color:rgba(199,180,137,.5);box-shadow:0 30px 60px -28px rgba(0,0,0,.85),0 0 34px rgba(199,180,137,.2),inset 0 1px 0 rgba(255,255,255,.06)}
  ${e} #tsmsnext .tsl-t{position:relative;z-index:1;color:rgba(255,255,255,.9);font-size:clamp(12.5px,1.15vw,15px);font-weight:500;line-height:1.5;max-width:22ch}
  ${e} #tsmsnext .tsl-t b{color:#c7b489;font-weight:700}
  @keyframes tsmsTslFloat{0%,100%{translate:0 0}50%{translate:0 -11px}}
  @media(max-width:1079px){ ${e} #tsmsnext .tsl-grid{grid-template-columns:repeat(2,1fr)} }
  @media(max-width:520px){ ${e} #tsmsnext .tsl-grid{grid-template-columns:1fr} }
  @media(prefers-reduced-motion:reduce){ ${e} #tsmsnext .tsl-orb{opacity:1;transform:none;animation:none} }
  `;function f(){if(!document.getElementById("tsmsnext-css")){var r=document.createElement("style");r.id="tsmsnext-css",r.textContent=v,document.head.appendChild(r)}}function h(){var r=document.createElement("div");r.id="tsmsnext";var n=i.map(function(t){return'<div class="tsl-cell"><div class="tsl-orb"><p class="tsl-t">'+t+"</p></div></div>"}).join("");return r.innerHTML='<div class="tsl-head"><span class="tsl-eyebrow">Was du mitnimmst</span><h2 class="tsl-title">Learnings</h2></div><div class="tsl-grid">'+n+"</div>",r}function d(){if(x()){if(document.getElementById("tsmsnext"))return!0;var r=document.getElementById("tsmsemp");if(!(!r||!r.parentNode)){f();var n=h();r.parentNode.insertBefore(n,r.nextSibling);var t=new IntersectionObserver(function(m){m[0].isIntersecting&&(n.classList.add("in"),t.disconnect())},{threshold:.2});t.observe(n);var a=n.getBoundingClientRect();return a.top<innerHeight&&a.bottom>0&&n.classList.add("in"),!0}}}d(),document.addEventListener("DOMContentLoaded",d),window.__tsMO(function(){d()}).observe(document.documentElement,{childList:!0,subtree:!0})})()}]]);
