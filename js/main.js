/* ═══════════════════════════════════════════════
   SERVICES DATA
═══════════════════════════════════════════════ */
const SERVICES = [
  {
    id: 'carwraps',
    photo: './Fotos/carros wraps.jpg',
    color: '#0099CC',
    es: {
      title: 'Car Wraps',
      sub: 'Vehículos que venden solos',
      desc: 'Convertimos tu flota o auto personal en publicidad móvil de alto impacto. Materiales 3M y Avery Dennison certificados, instalación profesional garantizada.',
      features: ['Full Wrap', 'Partial Wrap', 'Decals', 'Fleet Branding'],
      wa: 'Hola! 👋 Me interesa cotizar un *Car Wrap*. ¿Pueden ayudarme con precios y materiales disponibles?'
    },
    en: {
      title: 'Car Wraps',
      sub: 'Vehicles that sell themselves',
      desc: 'We transform your fleet or personal vehicle into high-impact mobile advertising. 3M and Avery Dennison certified materials, professional installation guaranteed.',
      features: ['Full Wrap', 'Partial Wrap', 'Decals', 'Fleet Branding'],
      wa: 'Hi! 👋 I\'m interested in getting a *Car Wrap* quote. Could you help me with pricing and available materials?'
    }
  },
  {
    id: 'signs',
    photo: './Fotos/exterior signs.jpg',
    color: '#FF3333',
    es: {
      title: 'Señales Exteriores',
      sub: 'Fachadas imposibles de ignorar',
      desc: 'Letras en canal, letras inversas y señales de acrílico iluminadas con LED que destacan tu negocio de día y de noche.',
      features: ['Channel Letters', 'Reverse Letters', 'Acrylic Signs', 'LED Illuminated'],
      wa: 'Hola! 👋 Me interesa cotizar *Señales Exteriores* para mi negocio. ¿Tienen disponibilidad y podrían darme precios?'
    },
    en: {
      title: 'Exterior Signs',
      sub: 'Facades impossible to ignore',
      desc: 'Channel letters, reverse letters and LED-illuminated acrylic signs that make your business stand out day and night.',
      features: ['Channel Letters', 'Reverse Letters', 'Acrylic Signs', 'LED Illuminated'],
      wa: 'Hi! 👋 I\'m interested in *Exterior Signs* for my business. Do you have availability and could you give me pricing?'
    }
  },
  {
    id: 'logos3d',
    photo: './Fotos/dimensional logos.jpg',
    color: '#FFCC00',
    es: {
      title: 'Logos Dimensionales',
      sub: 'Identidad que impresiona',
      desc: 'Letras y logos 3D en metal, acrílico, PVC y LED para recepciones, lobbies y fachadas corporativas que dejan huella.',
      features: ['Metal', 'Acrílico', 'PVC', 'LED Backlit'],
      wa: 'Hola! 👋 Me interesa cotizar un *Logo Dimensional* para nuestra empresa. ¿Qué materiales tienen disponibles?'
    },
    en: {
      title: 'Dimensional Logos',
      sub: 'Identity that impresses',
      desc: '3D letters and logos in metal, acrylic, PVC and LED for lobbies and corporate facades that leave a lasting impression.',
      features: ['Metal', 'Acrylic', 'PVC', 'LED Backlit'],
      wa: 'Hi! 👋 I\'m interested in a *Dimensional Logo* for our company. What materials do you have available?'
    }
  },
  {
    id: 'murals',
    photo: './Fotos/wall graphics.jpg',
    color: '#FF9900',
    es: {
      title: 'Gráficos Murales',
      sub: 'Espacios que cuentan historias',
      desc: 'Transformamos paredes en experiencias visuales únicas. Canvas, mate, brillante — cada textura, cada concepto, diseñado a medida.',
      features: ['Canvas', 'Matte', 'Gloss', 'Custom Murals'],
      wa: 'Hola! 👋 Me interesa cotizar *Gráficos Murales* para nuestro espacio. ¿Podrían contactarme con más información?'
    },
    en: {
      title: 'Wall Graphics',
      sub: 'Spaces that tell stories',
      desc: 'We transform walls into unique visual experiences. Canvas, matte, gloss — every texture, every concept, custom designed.',
      features: ['Canvas', 'Matte', 'Gloss', 'Custom Murals'],
      wa: 'Hi! 👋 I\'m interested in *Wall Graphics* for our space. Could you contact me with more information?'
    }
  },
  {
    id: 'vinyl',
    photo: './Fotos/windows vinyls.jpg',
    color: '#06b6d4',
    es: {
      title: 'Vinil de Ventana',
      sub: 'Privacidad con estilo',
      desc: 'Vinil perforado, esmerilado y sólido para privacidad, decoración y branding en vidrieras y ventanas de oficina.',
      features: ['Perforated', 'Frosted', 'Solid Vinyl', 'One-Way Vision'],
      wa: 'Hola! 👋 Me interesa cotizar *Vinil de Ventana* para mi local. ¿Qué tipos de vinil trabajan?'
    },
    en: {
      title: 'Window Vinyl',
      sub: 'Privacy with style',
      desc: 'Perforated, frosted and solid vinyl for privacy, decoration and branding on storefronts and office windows.',
      features: ['Perforated', 'Frosted', 'Solid Vinyl', 'One-Way Vision'],
      wa: 'Hi! 👋 I\'m interested in *Window Vinyl* for my location. What types of vinyl do you work with?'
    }
  },
  {
    id: 'corporate',
    photo: './Fotos/corporativos.jpg',
    color: '#a855f7',
    es: {
      title: 'Materiales Corporativos',
      sub: 'Tu marca en cada detalle',
      desc: 'Tarjetas de presentación premium, brochures, carpetas, roll-ups y banners que proyectan profesionalismo y refuerzan tu identidad.',
      features: ['Business Cards', 'Brochures', 'Roll-Up Banners', 'Folders'],
      wa: 'Hola! 👋 Me interesa cotizar *Materiales Corporativos* para mi empresa. ¿Podrían darme un presupuesto?'
    },
    en: {
      title: 'Corporate Materials',
      sub: 'Your brand in every detail',
      desc: 'Premium business cards, brochures, folders, roll-ups and banners that project professionalism and reinforce your identity.',
      features: ['Business Cards', 'Brochures', 'Roll-Up Banners', 'Folders'],
      wa: 'Hi! 👋 I\'m interested in *Corporate Materials* for my company. Could you give me a quote?'
    }
  },
  {
    id: 'printing',
    photo: './Fotos/Frame 2147240346.jpg',
    color: '#25D366',
    es: {
      title: 'Impresión & Láser',
      sub: 'Precisión en cada detalle',
      desc: 'Impresión de gran formato y corte láser de alta precisión en acrílico, madera, vinilo y más. Acabados de nivel premium.',
      features: ['Gran Formato', 'Corte Láser', 'Acrílico', 'Personalizado'],
      wa: 'Hola! 👋 Me interesa cotizar servicios de *Impresión y Corte Láser*. ¿Qué materiales manejan?'
    },
    en: {
      title: 'Printing & Laser',
      sub: 'Precision in every detail',
      desc: 'Large format printing and high-precision laser cutting on acrylic, wood, vinyl and more. Premium-level finishes.',
      features: ['Large Format', 'Laser Cut', 'Acrylic', 'Custom'],
      wa: 'Hi! 👋 I\'m interested in *Printing & Laser Cutting* services. What materials do you handle?'
    }
  },
  {
    id: 'design',
    photo: './Fotos/career woman 1.jpg',
    color: '#FF3333',
    es: {
      title: 'Diseño Gráfico',
      sub: 'Creatividad sin límites',
      desc: 'Desde identidad visual completa hasta piezas específicas para gran formato. Diseño estratégico que convierte y posiciona tu marca.',
      features: ['Branding', 'Gran Formato', 'Digital', 'Retoque'],
      wa: 'Hola! 👋 Me interesa cotizar *Diseño Gráfico* para mi proyecto. ¿Podrían contactarme?'
    },
    en: {
      title: 'Graphic Design',
      sub: 'Creativity without limits',
      desc: 'From complete visual identity to specific large format pieces. Strategic design that converts and positions your brand.',
      features: ['Branding', 'Large Format', 'Digital', 'Retouching'],
      wa: 'Hi! 👋 I\'m interested in *Graphic Design* for my project. Could you contact me?'
    }
  }
];

/* ═══════════════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════════════ */
const T = {
  es: {
    tagline: 'Graphics & Signs · Hialeah, Miami FL',
    location: 'Hialeah, FL 33015',
    label_services: 'Nuestros Servicios',
    label_contact: 'Contáctanos',
    label_location: 'Ubicación',
    label_hours: 'Horarios',
    label_form: 'Cotización Rápida',
    phone1_sub: 'Llámanos ahora',
    phone2_sub: 'Segunda línea',
    wa_title: 'WhatsApp',
    wa_sub: 'Cotiza por mensaje',
    email_title: 'Email',
    addr_title: '6135 NW 167th St Suite E16, Hialeah FL',
    addr_sub: 'Ver en Google Maps',
    hours_wf: 'Lun – Vie',
    hours_sa: 'Sábado',
    form_name: 'Nombre',
    form_phone: 'Teléfono o Email',
    form_service: 'Servicio de interés',
    form_submit: 'Enviar por WhatsApp',
    form_select: 'Selecciona un servicio...',
    modal_quote: 'Cotizar por WhatsApp',
    modal_call: 'Llamar ahora',
    carousel_hint: 'Toca para ver más →',
    sbar_quote: 'Cotizar',
    sbar_wa: 'WhatsApp',
    sbar_call: 'Llamar',
    footer: '© 2026 Praxis Graphics & Signs · Hialeah, FL',
  },
  en: {
    tagline: 'Graphics & Signs · Hialeah, Miami FL',
    location: 'Hialeah, FL 33015',
    label_services: 'Our Services',
    label_contact: 'Contact Us',
    label_location: 'Location',
    label_hours: 'Hours',
    label_form: 'Quick Quote',
    phone1_sub: 'Call us now',
    phone2_sub: 'Second line',
    wa_title: 'WhatsApp',
    wa_sub: 'Get a quote by message',
    email_title: 'Email',
    addr_title: '6135 NW 167th St Suite E16, Hialeah FL',
    addr_sub: 'View on Google Maps',
    hours_wf: 'Mon – Fri',
    hours_sa: 'Saturday',
    form_name: 'Name',
    form_phone: 'Phone or Email',
    form_service: 'Service of interest',
    form_submit: 'Send via WhatsApp',
    form_select: 'Select a service...',
    modal_quote: 'Get a WhatsApp Quote',
    modal_call: 'Call Now',
    carousel_hint: 'Tap to see more →',
    sbar_quote: 'Quote',
    sbar_wa: 'WhatsApp',
    sbar_call: 'Call',
    footer: '© 2026 Praxis Graphics & Signs · Hialeah, FL',
  }
};

/* ═══════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════ */
let lang = localStorage.getItem('praxis_lang') || 'es';
let carouselTween = null;
let carouselRAF   = null;
let currentService = null;

/* ═══════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════ */
const $ = id => document.getElementById(id);
const all = s => document.querySelectorAll(s);

/* ═══════════════════════════════════════════════
   LANGUAGE
═══════════════════════════════════════════════ */
function applyLang(l) {
  lang = l;
  localStorage.setItem('praxis_lang', l);
  document.documentElement.lang = l;
  const t = T[l];
  all('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (t[k] !== undefined) el.textContent = t[k];
  });
  buildCarousel();
  buildFormSelect();
}


const checkbox = $('langCheckbox');
checkbox.addEventListener('change', () => applyLang(checkbox.checked ? 'en' : 'es'));

/* ═══════════════════════════════════════════════
   CAROUSEL

═══════════════════════════════════════════════ */
function buildCarousel() {
  const track = $('carouselTrack');
  if (!track) return;
  if (carouselTween) { carouselTween.kill(); carouselTween = null; }
  if (carouselRAF)   { cancelAnimationFrame(carouselRAF); carouselRAF = null; }
  track.innerHTML = '';

  const triple = [...SERVICES, ...SERVICES, ...SERVICES];
  triple.forEach((svc, i) => {
    const realIdx = i % SERVICES.length;
    const card = document.createElement('div');
    card.className = 'c-card';
    card.dataset.idx = realIdx;
    card.style.setProperty('--svc-color', svc.color);
    card.innerHTML = `
      <img src="${svc.photo}" alt="${svc[lang].title}" loading="lazy" draggable="false"/>
      <div class="c-card-overlay"></div>
      <div class="c-card-accent" style="background:${svc.color}"></div>
      <div class="c-card-info">
        <span class="c-card-title">${svc[lang].title}</span>
        <span class="c-card-sub">${svc[lang].sub}</span>
      </div>
    `;
    track.appendChild(card);
  });

  startCarouselAnim();
}

function startCarouselAnim() {
  const track = $('carouselTrack');
  const wrap  = $('carouselWrap');
  if (!track || !wrap) return;

  const count   = SERVICES.length;
  const cardEls = [...track.querySelectorAll('.c-card')];
  let oneSetW = 0;
  for (let i = 0; i < count; i++) {
    oneSetW += (cardEls[i]?.offsetWidth || 235) + 11;
  }

  /* ── state ── */
  let x        = 0;
  const AUTO   = oneSetW / (count * 5 * 60);
  let dragging = false;
  let ptrStart = 0;
  let xAtDrag  = 0;
  let lastPtrX = 0;
  let lastPtrT = 0;
  let momentum = 0;
  let decaying = false;
  let clickStart = 0;

  function norm(v) {
    v = v % oneSetW;
    if (v > 0) v -= oneSetW;
    return v;
  }

  /* ── rAF loop ── */
  function frame() {
    if (!dragging) {
      if (decaying) {
        x += momentum;
        momentum *= 0.92;
        if (Math.abs(momentum) < 0.1) { decaying = false; momentum = 0; }
      } else {
        x -= AUTO;
      }
      x = norm(x);
      track.style.transform = `translateX(${x}px)`;
    }
    carouselRAF = requestAnimationFrame(frame);
  }
  carouselRAF = requestAnimationFrame(frame);

  /* ── drag ── */
  wrap.style.cursor = 'grab';

  wrap.addEventListener('pointerdown', e => {
    dragging  = true;
    ptrStart  = e.clientX;
    xAtDrag   = x;
    lastPtrX  = e.clientX;
    lastPtrT  = Date.now();
    clickStart = e.clientX;
    momentum  = 0;
    decaying  = false;
    wrap.setPointerCapture(e.pointerId);
    wrap.style.cursor = 'grabbing';
  });

  wrap.addEventListener('pointermove', e => {
    if (!dragging) return;
    x = norm(xAtDrag + (e.clientX - ptrStart));
    track.style.transform = `translateX(${x}px)`;
    const now = Date.now(), dt = now - lastPtrT;
    if (dt > 0) momentum = (e.clientX - lastPtrX) / dt * 16;
    lastPtrX = e.clientX;
    lastPtrT = now;
  });

  wrap.addEventListener('pointerup', e => {
    if (!dragging) return;
    dragging = false;
    wrap.style.cursor = 'grab';
    if (Math.abs(momentum) > 1) decaying = true;
    /* click: open modal if pointer barely moved */
    if (Math.abs(e.clientX - clickStart) < 8) {
      const card = document.elementFromPoint(e.clientX, e.clientY)?.closest('.c-card');
      if (card) openModal(parseInt(card.dataset.idx));
    }
  });

  wrap.addEventListener('pointercancel', () => {
    dragging = false;
    wrap.style.cursor = 'grab';
  });
}

/* ═══════════════════════════════════════════════
   MODAL
═══════════════════════════════════════════════ */
function openModal(idx) {
  const svc = SERVICES[idx];
  if (!svc) return;
  currentService = svc;
  const t = svc[lang];
  const overlay = $('modal');

  $('modal-img').src = svc.photo;
  $('modal-img').alt = t.title;
  $('modal-accent').style.background = svc.color;
  $('modal-title').textContent = t.title;
  $('modal-sub').textContent = t.sub;
  $('modal-desc').textContent = t.desc;

  const feats = $('modal-features');
  feats.innerHTML = t.features.map(f =>
    `<span class="m-feat" style="border-color:${svc.color}22;color:${svc.color}">${f}</span>`
  ).join('');

  $('modal-wa-btn').querySelector('span').textContent = T[lang].modal_quote;
  $('modal-call-btn').querySelector('span').textContent = T[lang].modal_call;

  overlay.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';

  gsap.fromTo(overlay,
    { opacity: 0 },
    { opacity: 1, duration: .25, ease: 'power2.out' }
  );
  gsap.fromTo('.modal-box',
    { scale: .92, y: 24, opacity: 0 },
    { scale: 1, y: 0, opacity: 1, duration: .38, ease: 'back.out(1.4)' }
  );
}

function closeModal() {
  const overlay = $('modal');
  gsap.to('.modal-box', {
    scale: .94, y: 16, opacity: 0, duration: .22, ease: 'power2.in'
  });
  gsap.to(overlay, {
    opacity: 0, duration: .25, delay: .1, ease: 'power2.in',
    onComplete: () => {
      overlay.setAttribute('hidden', '');
      document.body.style.overflow = '';
    }
  });
}

// Modal buttons
document.addEventListener('click', e => {
  if (e.target.id === 'modal' || e.target.closest('.modal-close')) closeModal();
  if (e.target.id === 'modal-wa-btn' && currentService) {
    const msg = encodeURIComponent(currentService[lang].wa);
    window.open(`https://wa.me/17863338097?text=${msg}`, '_blank');
  }
  if (e.target.id === 'modal-call-btn') {
    window.location.href = 'tel:7863338097';
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ═══════════════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════════════ */
function buildFormSelect() {
  const sel = $('formService');
  if (!sel) return;
  const t = T[lang];
  sel.innerHTML = `<option value="">${t.form_select}</option>` +
    SERVICES.map(s => `<option value="${s[lang].wa}">${s[lang].title}</option>`).join('');
}

$('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const name    = $('formName').value.trim();
  const phone   = $('formPhone').value.trim();
  const service = $('formService').value;
  const t = T[lang];
  const msg = service
    ? service.replace('Hola! 👋', `Hola! 👋 Soy ${name || 'un cliente'} (${phone || 'sin tel.'}).`)
    : `Hola! 👋 Soy ${name}${phone ? ' (' + phone + ')' : ''}. Me gustaría recibir más información sobre sus servicios.`;
  window.open(`https://wa.me/17863338097?text=${encodeURIComponent(msg)}`, '_blank');
});

/* ═══════════════════════════════════════════════
   PARTICLES CANVAS
═══════════════════════════════════════════════ */
function initParticles() {
  const canvas = $('particles');
  const ctx = canvas.getContext('2d');
  let W, H, pts;
  const COLORS = ['#0099CC','#FF3333','#FFCC00','#FF9900','#a855f7','#06b6d4'];
  const N = 60, LINK = 130;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function mkPt() {
    return {
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random()-.5)*.5, vy: (Math.random()-.5)*.5,
      r: Math.random()*1.8+.5,
      color: COLORS[~~(Math.random()*COLORS.length)],
      a: Math.random()*.5+.15
    };
  }

  function init() { resize(); pts = Array.from({length:N}, mkPt); }

  function frame() {
    ctx.clearRect(0,0,W,H);
    for (let i=0;i<pts.length;i++) {
      for (let j=i+1;j<pts.length;j++) {
        const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y;
        const d=Math.hypot(dx,dy);
        if (d<LINK) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x,pts[i].y);
          ctx.lineTo(pts[j].x,pts[j].y);
          ctx.strokeStyle=`rgba(255,255,255,${(1-d/LINK)*.10})`;
          ctx.lineWidth=.6; ctx.stroke();
        }
      }
    }
    pts.forEach(p => {
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>W) p.vx*=-1;
      if(p.y<0||p.y>H) p.vy*=-1;
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.color;
      ctx.globalAlpha=p.a;
      ctx.fill();
      ctx.globalAlpha=1;
    });
    requestAnimationFrame(frame);
  }

  init(); frame();
  window.addEventListener('resize', init);
}

/* ═══════════════════════════════════════════════
   GSAP ENTRANCE ANIMATIONS
═══════════════════════════════════════════════ */
function animate() {
  // Orbiting dots
  const dotData = [
    { el: '.od-1', startAngle: 0,   radius: 72, speed: 7  },
    { el: '.od-2', startAngle: 120, radius: 68, speed: 11 },
    { el: '.od-3', startAngle: 240, radius: 76, speed: 9  },
  ];
  dotData.forEach(({ el: sel, startAngle, radius, speed }) => {
    const el = document.querySelector(sel);
    if (!el) return;
    const cx = 65, cy = 65;
    let angle = startAngle;
    gsap.ticker.add(() => {
      angle += 360 / (speed * 60);
      const rad = (angle * Math.PI) / 180;
      el.style.left = cx + Math.cos(rad) * radius - el.offsetWidth / 2 + 'px';
      el.style.top  = cy + Math.sin(rad) * radius - el.offsetHeight / 2 + 'px';
    });
    gsap.set(el, { opacity: 1 });
  });

  // Hero entrance
  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .from('.hero-ring',    { scale: .75, opacity: 0, duration: .8, ease: 'back.out(1.5)' })
    .from('.hero-tagline', { y: 18, opacity: 0, duration: .48 }, '-=.3')
    .from('.hero-loc',     { y: 12, opacity: 0, duration: .38 }, '-=.28');

  // Card hover micro-interactions
  all('.card').forEach(c => {
    c.addEventListener('mouseenter', () => gsap.to(c, { y: -2, duration: .18, ease: 'power2.out' }));
    c.addEventListener('mouseleave', () => gsap.to(c, { y:  0, duration: .18, ease: 'power2.out' }));
  });
}

/* ═══════════════════════════════════════════════
   GSAP SCROLL ANIMATIONS
═══════════════════════════════════════════════ */
function initScrollAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Section titles — slide up + fade
  all('.sec-label').forEach(el => {
    gsap.from(el, {
      y: 28, opacity: 0, duration: .65, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });

  // Carousel
  gsap.from('.carousel-section', {
    y: 30, opacity: 0, duration: .6, ease: 'power2.out',
    scrollTrigger: { trigger: '.carousel-section', start: 'top 85%' }
  });

  // Contact cards — stagger
  gsap.from('#contact .card', {
    y: 20, opacity: 0, duration: .5, stagger: .09, ease: 'power2.out',
    scrollTrigger: { trigger: '#contact', start: 'top 82%' }
  });

  // Location + hours + form — each slides up
  ['#location', '#hours', '#quote'].forEach(id => {
    gsap.from(id, {
      y: 24, opacity: 0, duration: .55, ease: 'power2.out',
      scrollTrigger: { trigger: id, start: 'top 86%' }
    });
  });

  // Social row — scale bounce
  gsap.from('#socialRow', {
    scale: .82, opacity: 0, duration: .55, ease: 'back.out(1.6)',
    scrollTrigger: { trigger: '#socialRow', start: 'top 90%' }
  });

  // Footer
  gsap.from('#footerTxt', {
    opacity: 0, y: 10, duration: .4, ease: 'power2.out',
    scrollTrigger: { trigger: '#footerTxt', start: 'top 95%' }
  });
}

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
  initParticles();
  if (lang === 'en') checkbox.checked = true;
  applyLang(lang);
  animate();
  initScrollAnimations();
});
