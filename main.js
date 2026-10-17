/* ============ helpers ============ */
const $ = (s, r=document) => r.querySelector(s);
const ph = (label, hue=120) => "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='hsl(${hue},45%,90%)'/><stop offset='1' stop-color='hsl(${hue},40%,78%)'/></linearGradient></defs><rect width='400' height='300' fill='url(#g)'/><g fill='none' stroke='hsl(${hue},40%,45%)' stroke-width='2' opacity='.55'><path d='M0 230q100-40 200 0t200 0M0 255q100-40 200 0t200 0M0 280q100-40 200 0t200 0'/></g><text x='200' y='145' text-anchor='middle' font-family='sans-serif' font-size='22' fill='hsl(${hue},40%,28%)'>${label}</text><text x='200' y='175' text-anchor='middle' font-family='sans-serif' font-size='13' fill='hsl(${hue},30%,35%)'>Replace with your photo</text></svg>`).replace(/'/g,'%27');
const img = (src, label, hue, cls="", eager=true) => `<img src="${src || ph(label,hue)}" alt="${label}" ${eager ? '' : 'loading="lazy"'} class="${cls}" onerror="this.onerror=null;this.src='${ph(label,hue)}'">`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ============ build content from CONFIG ============ */
// Hero video (graceful fallback to the soft background if the URL is empty/blocked)
const hv = $('#heroVideo');
hv.addEventListener('error',()=>hv.style.display='none',true);
if (CONFIG.heroVideo) { hv.src = CONFIG.heroVideo; if (CONFIG.heroPoster) hv.poster = CONFIG.heroPoster; hv.play().catch(()=>{}); }
else hv.style.display = 'none';

// Founder
$('#founderImg').innerHTML = img(CONFIG.founder.image, 'Founder photo', 110);
$('#founderRole').textContent = CONFIG.founder.role;
$('#founderName').textContent = CONFIG.founder.name;
$('#founderBio').textContent = CONFIG.founder.bio;

// Drones
$('#droneGrid').innerHTML = CONFIG.drones.map((d,i) => `
  <article class="card overflow-hidden rv ${i%2 ? 'from-right':'from-left'}">
    <div class="zoom aspect-[4/3] rounded-b-none relative">${img(d.image, d.name, 100+i*30)}
      ${d.video ? `<video class="drone-vid" src="${esc(d.video)}" muted loop playsinline preload="metadata" aria-label="${esc(d.name)} video"></video>` : ''}</div>
    <div class="p-6"><h3 class="text-xl font-semibold">${esc(d.name)}</h3>
    <p class="mt-1 text-[color:var(--green-deep)] font-medium">${esc(d.tag)}</p></div>
  </article>`).join('');

// Gallery -> built as an auto-moving carousel at the bottom of this file
$('#galleryGrid').className = 'rv from-up carousel';

// Stats
$('#statGrid').innerHTML = CONFIG.stats.map((s,i) => `
  <div class="card p-8 sm:p-10 rv ${i%2 ? 'from-right':'from-left'}">
    <div class="stat-num"><span data-count="${s.value}">0</span>${esc(s.suffix)}</div>
    <p class="mt-3 text-lg text-[color:var(--muted)]">${esc(s.label)}</p>
  </div>`).join('');

// Contact
const C = CONFIG.contact, P = CONFIG.partner;
const ico = {
  phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  ig:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/>',
  yt:'<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3z" fill="currentColor"/>'
};
const row = (k, text, href) => `<a href="${href}" ${href.startsWith('http')?'target="_blank" rel="noopener"':''} class="card p-4 flex items-center gap-4">
  <span class="w-11 h-11 rounded-full grid place-items-center" style="background:var(--green-soft);color:var(--green-deep)"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ico[k]}</svg></span>
  <span class="font-medium">${esc(text)}</span></a>`;
$('#contactBox').innerHTML =
  row('phone', C.phone, 'tel:' + C.phone.replace(/[^+\d]/g,'')) +
  row('mail', C.email, 'mailto:' + C.email) +
  row('ig', 'Instagram', C.instagram) +
  row('yt', 'YouTube', C.youtube);

// Partner
$('#partnerBox').innerHTML = `
  <div class="w-20 h-20 rounded-2xl overflow-hidden border border-[color:var(--line)] bg-white grid place-items-center">${img(P.logo, 'Partner logo', 130)}</div>
  <div><p class="text-sm font-semibold text-[color:var(--green-deep)]">Equipment partner</p>
    <h3 class="text-xl font-semibold">${esc(P.name)}</h3>
    <p class="mt-1 text-[color:var(--muted)] max-w-xl">${esc(P.about)}</p></div>
  <a class="btn" href="${esc(P.website)}" target="_blank" rel="noopener">Visit website</a>`;
$('#yr').textContent = new Date().getFullYear();

/* ============ nav behaviour ============ */
const nav = $('#nav'), menu = $('#mobileMenu'), mb = $('#menuBtn');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 20), {passive:true});
mb.addEventListener('click', () => {
  const open = menu.classList.toggle('hidden') === false;
  menu.classList.toggle('flex', open); mb.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.classList.add('hidden'); menu.classList.remove('flex'); mb.setAttribute('aria-expanded', false); }));

/* ============ scroll reveal + counters ============ */
function countUp(el){
  const to = +el.dataset.count, dur = 1600, t0 = performance.now();
  (function tick(t){ const p = Math.min((t-t0)/dur,1); el.textContent = Math.round(to*(1-Math.pow(1-p,3))); if(p<1) requestAnimationFrame(tick); })(t0);
}
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add('in');
  e.target.querySelectorAll('[data-count]').forEach(countUp);
  io.unobserve(e.target);
}), {threshold:.15});
document.querySelectorAll('.rv').forEach((el,i) => { el.style.transitionDelay = (i%4)*80 + 'ms'; io.observe(el); });
if (matchMedia('(prefers-reduced-motion:reduce)').matches) document.querySelectorAll('[data-count]').forEach(el => el.textContent = el.dataset.count);

/* ============ WhatsApp booking ============ */
$('#bookForm').addEventListener('submit', e => {
  e.preventDefault();
  const v = id => $('#'+id).value.trim(), err = $('#formErr');
  const d = {name:v('fName'), phone:v('fPhone'), village:v('fVillage'), taluk:v('fTaluk'), district:v('fDistrict')};
  const msg = !d.name || !d.village || !d.taluk || !d.district ? 'Please fill in every field.'
    : !/^[6-9]\d{9}$/.test(d.phone) ? 'Enter a valid 10-digit mobile number.' : '';
  err.textContent = msg; err.classList.toggle('hidden', !msg);
  if (msg) return;
  const text = `Hello Eagle Eye Agri Services, I would like to book drone spraying.\n\nName: ${d.name}\nPhone: ${d.phone}\nAddress: ${d.village} (Village), ${d.taluk} (Taluk), ${d.district} (District)`;
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});

/* ============ SERVICES CAROUSEL (auto-moving, centre card zooms in) ============ */
(function(){
  const root = $('#galleryGrid');
  if (!root || !CONFIG.gallery.length) return;
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;

  // need at least 8 cards for a smooth endless loop, so repeat if you have fewer
  const list = []; while (list.length < 8) list.push(...CONFIG.gallery);
  const N = list.length;

  const ytId = u => { const m = String(u||'').match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/); return m ? m[1] : null; };
  const platOf = g => /instagram\.com/.test(g.link||'') ? 'Instagram' : (/youtu/.test(g.link||'') ? 'YouTube' : '');

  // while testing on your computer, show the wrong file name right on the card
  const dev = /^(localhost|127\.0\.0\.1|\[::1\]|)$/.test(location.hostname);
  function showErr(el, path){
    if (!dev || el.querySelector('.cc-err')) return;
    const d = document.createElement('div'); d.className = 'cc-err';
    d.textContent = 'File not found: ' + path; el.appendChild(d);
  }

  const cards = list.map((g,i) => {
    const el = document.createElement('article');
    el.className = 'cc'; el._g = g; el._yid = (!g.video && g.type==='video') ? ytId(g.link) : null;
    const plat = platOf(g);
    el.setAttribute('aria-label', g.crop);
    el.innerHTML = `<div class="cc-media"><div class="cc-ken">${(g.video && !g.image) ? '' : img(g.image, g.crop, 95 + (i%8)*14, '', true)}</div></div>
      <div class="cc-shade"></div><span class="badge cc-tag">${esc(g.crop)}</span>
      ${plat ? `<span class="cc-plat">${plat}</span>` : ''}`;
    el.addEventListener('click', () => {
      if (el._off === 0) { if (g.link) window.open(g.link, '_blank', 'noopener'); }
      else { cur = i; layout(); restart(); }
    });
    const im = el.querySelector('img'); if (im) im.addEventListener('error', () => showErr(el, g.image), {once:true});
    initVideo(el);
    root.appendChild(el);
    return el;
  });

  // every video card gets its <video> straight away (only the first frame loads = thumbnail, no image file needed)
  function initVideo(el){
    const g = el._g; if (!g.video) return;
    const v = document.createElement('video');
    v.src = g.video + '#t=0.1'; v.muted = v.defaultMuted = true; v.loop = true; v.playsInline = true;
    v.setAttribute('playsinline',''); v.preload = 'metadata';
    const show = () => v.classList.add('on');
    v.addEventListener('loadeddata', show); v.addEventListener('playing', show);
    v.addEventListener('error', () => { v.remove(); el._v = null; showErr(el, g.video); console.warn('Video could not load:', g.video, '(check file name / H.264 format)'); });
    el.querySelector('.cc-ken').appendChild(v); el._v = v;
  }

  // play only the cards near the centre (saves data & battery); YouTube links are embedded only when near the centre
  function media(el, on){
    const g = el._g;
    if (el._v) { if (on) el._v.play().catch(()=>{}); else el._v.pause(); return; }
    const ken = el.querySelector('.cc-ken');
    if (on && !el._m && el._yid) {
      const f = document.createElement('iframe'), id = el._yid;
      f.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&playsinline=1&modestbranding=1&rel=0&disablekb=1`;
      f.allow = 'autoplay; encrypted-media'; f.title = g.crop + ' video'; f.tabIndex = -1; f.className = 'on';
      ken.appendChild(f); el._m = f;
    } else if (!on && el._m) { el._m.remove(); el._m = null; }
  }

  // size of each card: centre = 1, neighbours smaller (zoom-out), like a coverflow
  const sc  = a => a === 0 ? 1 : Math.max(.55, .84 - (a-1)*.12);
  const op  = [1, .92, .7, .4];
  let cur = 0, cw = 0;
  const dist = a => { let d = 0; for (let k=1; k<=a; k++) d += (sc(k-1) + sc(k))/2*cw + cw*.05; return d; };

  function layout(){
    cw = cards[0].offsetWidth;
    cards.forEach((el,i) => {
      let off = ((i - cur) % N + N) % N; if (off > N/2) off -= N;
      const a = Math.abs(off), x = Math.sign(off) * dist(a);
      const jump = el._off !== undefined && Math.abs(off - el._off) > N/2;   // card wrapping round the back: move instantly
      if (jump) el.style.transition = 'none';
      el.style.transform = `translateX(${x}px) scale(${sc(a)})`;
      el.style.opacity = a <= 3 ? op[a] : 0;
      el.style.zIndex = 10 - a;
      el.style.pointerEvents = a <= 3 ? 'auto' : 'none';
      el.classList.toggle('active', off === 0);
      el.classList.toggle('linked', off === 0 && !!el._g.link);
      if (jump) { void el.offsetWidth; requestAnimationFrame(() => el.style.transition = ''); }
      el._off = off;
      media(el, a <= 1);
    });
  }

  // auto-advance (no touch needed); pauses only while the section is off-screen
  let tid = null, inView = false;
  const next = () => { cur = (cur + 1) % N; layout(); };
  const stop = () => { clearInterval(tid); tid = null; };
  function restart(){ stop(); if (inView && !reduce) tid = setInterval(next, 3600); }
  new IntersectionObserver(es => {
    inView = es[0].isIntersecting; restart();
    if (inView) layout(); else root.querySelectorAll('video').forEach(v => v.pause());
  }, {threshold:.2}).observe(root);

  // swipe on phones (optional)
  let sx = null;
  root.addEventListener('touchstart', e => sx = e.touches[0].clientX, {passive:true});
  root.addEventListener('touchend', e => {
    if (sx === null) return; const dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 40) { cur = (cur + (dx < 0 ? 1 : -1) + N) % N; layout(); restart(); }
  });

  addEventListener('resize', layout);
  layout();
})();

/* ============ Drone cards: videos play by themselves (muted, looping) while the card is on screen ============ */
document.querySelectorAll('.drone-vid').forEach(v => {
  v.muted = true;
  const show = () => v.classList.add('on');
  v.addEventListener('loadeddata', show); v.addEventListener('playing', show);
  v.addEventListener('error', () => { console.warn('Drone video could not load:', v.getAttribute('src'), '(check file name / H.264 format)'); v.remove(); });
  new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? v.play().catch(()=>{}) : v.pause()), {threshold:.25}).observe(v);
});

/* ============ IMPACT: Karnataka coverage map (dark + gold design, animated dotted routes from the base district) ============ */
(function(){
  // ---- edit this list in js/config.js (CONFIG.coverage). These defaults are only used if config.js has no "coverage" ----
  const cov = CONFIG.coverage || {
    origin: "Gadag",
    districts: ["Belagavi","Dharwad","Haveri","Vijayapura","Bagalkote","Koppal","Ballari","Raichur",
                "Davanagere","Chitradurga","Shivamogga","Hassan","Mysuru","Mandya","Tumakuru","Bengaluru Urban"]
  };
  // spelling helper: old / alternate names -> map names
  const alias = {mysore:'Mysuru', belgaum:'Belagavi', bangalore:'Bengaluru Urban', bengaluru:'Bengaluru Urban', bangalorerural:'Bengaluru Rural',
    gulbarga:'Kalaburagi', bijapur:'Vijayapura', shimoga:'Shivamogga', davangere:'Davanagere', tumkur:'Tumakuru', chikmagalur:'Chikkamagaluru',
    bellary:'Ballari', vijayanagara:'Ballari', hosapete:'Ballari', bagalkot:'Bagalkote', chamarajanagar:'Chamarajanagara', chikballapur:'Chikkaballapura',
    mangalore:'Dakshina Kannada', mangaluru:'Dakshina Kannada', karwar:'Uttara Kannada', coorg:'Kodagu', ramanagar:'Ramanagara', hubli:'Dharwad', hubballi:'Dharwad'};
  const key = n => String(n).toLowerCase().replace(/[^a-z]/g,'');

  // gold line icons shown on the two stat cards
  const ICONS = [
   `<svg viewBox="0 0 130 110" aria-hidden="true"><polygon points="22,76 108,76 124,104 6,104" fill="#2c6a36" stroke="#d4a843" stroke-width="1.6"/>
     <path d="M36,76 28,104M54,76 50,104M72,76 72,104M90,76 94,104M14,90H116" stroke="#d4a843" stroke-width="1" opacity=".7" fill="none"/>
     <g fill="none" stroke="#d4a843" stroke-width="2.2" stroke-linecap="round"><path d="M50,30 34,22M80,30 96,22"/><ellipse cx="30" cy="20" rx="15" ry="3.5"/><ellipse cx="100" cy="20" rx="15" ry="3.5"/>
     <rect x="50" y="26" width="30" height="13" rx="6" fill="#1b211c"/><path d="M58,39 56,46M72,39 74,46"/></g>
     <g fill="none" stroke="#7fd08a" stroke-width="1.8" stroke-linecap="round" opacity=".9"><path d="M56,54q9,7 18,0"/><path d="M50,61q15,11 30,0"/></g></svg>`,
   `<svg viewBox="0 0 130 110" aria-hidden="true"><polygon points="10,42 42,30 74,44 108,32 120,38 120,92 108,98 74,104 42,90 10,100" fill="#2a4a46" stroke="#8fb8ad" stroke-width="1.6" stroke-linejoin="round"/>
     <path d="M42,30V90M74,44V104" stroke="#8fb8ad" stroke-width="1.4" opacity=".8"/>
     <path d="M24,86Q40,60 58,74T96,52" fill="none" stroke="#f1c453" stroke-width="2.4" stroke-dasharray="1 6" stroke-linecap="round"/>
     <g><path d="M96,52C90,43 86,38 86,31a10 10 0 0 1 20 0c0 7-4 12-10 21z" fill="#f1c453" stroke="#7a5a10" stroke-width="1.2"/><circle cx="96" cy="31" r="3.8" fill="#1a1405"/></g></svg>`
  ];

  const sg = $('#statGrid'); if (!sg) return;
  const sc = document.createElement('script');
  sc.src = 'js/karnataka-data.js';
  sc.onerror = () => console.warn('js/karnataka-data.js not found - put it inside the js folder');
  sc.onload = build;
  document.body.appendChild(sc);

  function build(){
    const M = window.KA_MAP, D = M.districts;
    const find = n => { const k = key(n); return Object.keys(D).find(x => key(x) === k) || alias[k]; };
    const origin = find(cov.origin);
    if (!origin) return console.warn('Origin district not found on the map:', cov.origin);
    const seen = new Set([origin]);
    const dest = [];
    cov.districts.forEach(n => { const f = find(n); if (!f) console.warn('District not found on the map:', n); else if (!seen.has(f)) { seen.add(f); dest.push(f); } });
    const [ox, oy] = D[origin].c;
    dest.sort((a,b) => Math.hypot(D[a].c[0]-ox, D[a].c[1]-oy) - Math.hypot(D[b].c[0]-ox, D[b].c[1]-oy));

    // curved route from the base district to every district served
    const routes = dest.map((n,i) => {
      const [x,y] = D[n].c, dx = x-ox, dy = y-oy, len = Math.hypot(dx,dy);
      const bend = (i%2 ? -1 : 1) * Math.min(38, len*.16);
      const cx = (ox+x)/2 - dy/len*bend, cy = (oy+y)/2 + dx/len*bend;
      return {n, x, y, d:`M${ox} ${oy} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x} ${y}`, approx: len*1.08 + 6, delay: .35 + i*.16};
    });

    const districts = Object.keys(D).map(n => `<path class="ka-d${seen.has(n)?' served':''}${n===origin?' origin':''}" data-d="${esc(n)}" d="${D[n].d}"/>`).join('');
    const masks = routes.map((r,i) => `<mask id="kam${i}" maskUnits="userSpaceOnUse" x="0" y="0" width="${M.w}" height="${M.h}"><path class="ka-mask" d="${r.d}" style="--len:${r.approx.toFixed(0)};animation-delay:${r.delay}s"/></mask>`).join('');
    const lines = routes.map((r,i) => `<path class="ka-dots" d="${r.d}" mask="url(#kam${i})"/>`).join('');
    const PIN = 'M0 0C-5-8-8-12-8-16a8 8 0 0 1 16 0c0 4-3 8-8 16z';
    const pin = r => {
      const right = r.x > M.w*.6;
      return `<g transform="translate(${r.x} ${r.y})" class="ka-pw" data-d="${esc(r.n)}" tabindex="0" aria-label="${esc(r.n)}">
        <g class="ka-pin" style="--pd:${(r.delay+1.1).toFixed(2)}s"><g transform="scale(1.3)"><path class="ka-pinshape" d="${PIN}"/><circle class="ka-pindot" cy="-16" r="3.2"/></g></g>
        <text class="ka-label" y="-12" x="${right?-14:14}" text-anchor="${right?'end':'start'}">${esc(r.n)}</text></g>`;
    };
    const originPin = `<g transform="translate(${ox} ${oy})" class="ka-pw ka-origin" data-d="${esc(origin)}">
      <circle class="ka-pulse" r="6"/><circle class="ka-pulse p2" r="6"/>
      <g class="ka-pin" style="--pd:.1s"><g transform="scale(1.7)"><path class="ka-basepin" d="${PIN}"/><circle class="ka-pindot" cy="-16" r="3.2"/></g></g>
      <text class="ka-label on" y="-46" text-anchor="middle">${esc(origin)} (our base)</text></g>`;

    const svg = `<svg class="ka-map" viewBox="0 0 ${M.w} ${M.h}" role="img" aria-label="Map of Karnataka showing districts served from ${esc(origin)}">
      <defs>${masks}
        <filter id="kash" x="-8%" y="-6%" width="116%" height="112%"><feDropShadow dx="0" dy="0" stdDeviation="7" flood-color="#d4a843" flood-opacity=".32"/></filter>
        <filter id="kaglow" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="2.4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <linearGradient id="kapg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9a3"/><stop offset="1" stop-color="#c8921f"/></linearGradient>
        <pattern id="kagrid" width="58" height="58" patternUnits="userSpaceOnUse"><path d="M58 0H0V58" fill="none" stroke="rgba(212,168,67,.10)" stroke-width="1"/></pattern>
      </defs>
      <rect width="${M.w}" height="${M.h}" fill="url(#kagrid)"/>
      <text class="ka-sea" x="14" y="806">ARABIAN SEA</text>
      <g class="ka-districts" filter="url(#kash)">${districts}</g>
      <circle class="ka-radar" cx="${ox}" cy="${oy}" r="10"/><circle class="ka-radar r2" cx="${ox}" cy="${oy}" r="10"/>
      <g fill="none" filter="url(#kaglow)">${lines}</g>
      ${routes.map(pin).join('')}${originPin}</svg>`;

    // stat cards: add the gold icons on the right
    sg.querySelectorAll('.card').forEach((c,i) => {
      const inner = document.createElement('div'); inner.className = 'ka-statbody';
      while (c.firstChild) inner.appendChild(c.firstChild);
      const ic = document.createElement('div'); ic.className = 'ka-icon'; ic.innerHTML = ICONS[i % 2];
      c.classList.add('ka-statcard'); c.appendChild(inner); c.appendChild(ic);
    });

    // layout: stats + chips on the left, map on the right (map comes FIRST on phones)
    const wrap = document.createElement('div'); wrap.className = 'ka-wrap';
    sg.parentNode.insertBefore(wrap, sg);
    sg.className = 'ka-stats';
    const left = document.createElement('div'); left.className = 'ka-left'; left.appendChild(sg);
    const chips = document.createElement('div'); chips.className = 'rv from-up';
    chips.innerHTML = `<p class="ka-chiphead">Districts served from ${esc(origin)}</p><div class="ka-chips">${dest.map(n => `<button type="button" class="ka-chip" data-d="${esc(n)}">${esc(n)}</button>`).join('')}</div>`;
    left.appendChild(chips);
    const card = document.createElement('div'); card.className = 'ka-card rv from-right';
    card.innerHTML = `<div class="ka-title"><span class="ka-badge"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="2" fill="currentColor"/><path class="w1" d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7"/><path class="w2" d="M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8"/></svg>Our reach</span><span class="ka-count">${dest.length} districts served</span></div>${svg}`;
    wrap.appendChild(left); wrap.appendChild(card);
    [chips, card].forEach(el => io.observe(el));

    // hover a chip or a pin -> highlight both
    const hl = (name, on) => document.querySelectorAll(`#impact [data-d="${CSS.escape(name)}"]`).forEach(el => el.classList.toggle('hl', on));
    wrap.addEventListener('mouseover', e => { const t = e.target.closest('[data-d]'); if (t) hl(t.dataset.d, true); });
    wrap.addEventListener('mouseout',  e => { const t = e.target.closest('[data-d]'); if (t) hl(t.dataset.d, false); });
    wrap.addEventListener('focusin',  e => { const t = e.target.closest('[data-d]'); if (t) hl(t.dataset.d, true); });
    wrap.addEventListener('focusout', e => { const t = e.target.closest('[data-d]'); if (t) hl(t.dataset.d, false); });
  }
})();