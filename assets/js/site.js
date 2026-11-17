/* Effets propres à Armonia. Le socle gère l'ouverture, les transitions, l'en-tête, le menu, les boucles, les mesures
   et la bibliothèque d'effets (lignes, mots, lettres, cascade, parallaxe, trace, onde, mots géants, vitesse…).
   Effets du plan d'animation, chacun marqué data-effet :
   - tache        : une image se révèle comme un pigment qui s'étale ;
   - deux-chemins : deux traits de pinceau qui se séparent ou se croisent, tracés au défilement ;
   - rosace       : une rosace qui se trace puis tourne avec le défilement ;
   - accrochage   : les toiles se posent une à une sous la cimaise, la rangée glisse au défilement ;
   - ondes, epingle : ondes concentriques (page Énergie), épingle qui se pose sur la carte (page Échangeons). */
import { demarrer, boucle, etat, versObjet, aller, quand } from './socle/index.js?v=1';
import { init as initFormulaire } from './modules/fpe.js?v=1';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const racine = document.documentElement;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
/* Animations d'entrée jouées seulement hors retour arrière et hors secours (sinon : état final direct). */
const entrees = () => !racine.classList.contains('secours') && etat.arrivee !== 'retour';

/* ---------- Ouverture : lignes du titre et premier écran ---------- */
function finOuverture() {
  racine.classList.add('ouv-pret');
  if (gsap) gsap.set('.ouv-ligne, .ouv-fondu', { clearProps: 'transform,opacity' });
}
function premierEcran(tl, a) {
  const lignes = $$('.ouv-ligne'), fondus = $$('.ouv-fondu');
  if (lignes.length) tl.fromTo(lignes, { y: 0, yPercent: 125 }, { y: 0, yPercent: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out' }, a);
  if (fondus.length) tl.fromTo(fondus, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power2.out' }, a + 0.15);
  tl.call(() => { const r = $('main [data-effet="rosace"]'); if (r && r.closest('#debut')) tracerRosace(r); }, null, a);
  return tl;
}

/* ---------- Rosace ---------- */
function tracerRosace(svg) {
  if (svg.dataset.trace) return;
  svg.dataset.trace = '1';
  if (!gsap || !entrees()) { svg.classList.add('rosace-tracee'); return; }
  gsap.fromTo($$('path, circle', svg), { strokeDashoffset: 1 }, {
    strokeDashoffset: 0, duration: 1.3, ease: 'power2.inOut', stagger: 0.018,
    onComplete() { svg.classList.add('rosace-tracee'); gsap.set($$('path, circle', svg), { clearProps: 'strokeDashoffset' }); },
  });
}
function rosaces() {
  $$('[data-effet="rosace"]').forEach((svg) => {
    const tour = $('.rosace-tour', svg);
    if (tour) gsap.fromTo(tour, { rotation: -18, svgOrigin: '100 100' }, { rotation: 42, svgOrigin: '100 100', ease: 'none', scrollTrigger: { trigger: svg.closest('section') || svg, start: 'top bottom', end: 'bottom top', scrub: 0.6 } });
    if (svg.closest('#debut')) return; /* celle de l'ouverture se trace avec le premier écran */
    ST.create({ trigger: svg.closest('section') || svg, start: 'top 70%', once: true, onEnter: () => tracerRosace(svg) });
  });
}

/* ---------- Premier écran de l'accueil : la rosace tourne très lentement, les taches respirent ---------- */
function respiration() {
  const visuel = $('.hero-visuel');
  if (!visuel) return;
  const r = $('.hero-rosace', visuel), ta = $('.hero-tache--a', visuel), tb = $('.hero-tache--b', visuel), toile = $('.hero-toile', visuel);
  /* La toile ne flotte qu'une fois l'ouverture finie : l'intro mesure sa position pour finir sur elle. */
  let flotte = etat.pret;
  quand('pret', () => { flotte = true; });
  boucle(visuel, (dt, t) => {
    if (r) r.style.rotate = `${(t * 3) % 360}deg`;
    if (toile && flotte) toile.style.translate = `0 ${(Math.sin(t * 0.8) * 7).toFixed(2)}px`;
    if (ta) ta.style.scale = (1 + 0.05 * Math.sin(t * 0.7)).toFixed(4);
    if (tb) tb.style.scale = (1 + 0.08 * Math.sin(t * 0.9 + 1.4)).toFixed(4);
  });
}

/* ---------- Tache : révélation d'une image comme un pigment qui s'étale ---------- */
function taches() {
  $$('[data-effet="tache"]').forEach((el, k) => {
    if (!entrees()) { el.classList.add('tache-finie'); return; }
    const p = { v: 0 }, phase = 1.7 * (k + 1), N = 30;
    const dessiner = () => {
      /* L'aire suit la courbe : le rayon en est la racine carrée. */
      const R = 92 * Math.sqrt(p.v);
      let pts = '';
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2;
        const r = R * (1 + 0.1 * Math.sin(3 * a + phase) + 0.06 * Math.sin(5 * a + phase * 2));
        pts += `${(50 + r * Math.cos(a)).toFixed(2)}% ${(50 + r * Math.sin(a)).toFixed(2)}%${i < N - 1 ? ',' : ''}`;
      }
      el.style.clipPath = `polygon(${pts})`;
    };
    ST.create({
      trigger: el, start: 'top 86%', once: true,
      onEnter: () => gsap.to(p, { v: 1, duration: 1.5, ease: 'power1.inOut', onUpdate: dessiner, onComplete() { el.classList.add('tache-finie'); el.style.clipPath = ''; } }),
    });
  });
}

/* ---------- Deux chemins : traits tracés au défilement ---------- */
function chemins() {
  if (!entrees()) return; /* au retour, les traits restent tracés en entier */
  $$('[data-effet="deux-chemins"]').forEach((svg) => {
    gsap.fromTo($$('path', svg), { strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: 'none', stagger: 0.12, scrollTrigger: { trigger: svg.parentElement, start: 'top 78%', end: 'bottom 62%', scrub: 0.5 } });
  });
}

/* ---------- Accrochage : les toiles se posent, la rangée glisse ---------- */
function accrochages() {
  $$('[data-effet="accrochage"]').forEach((zone) => {
    const oeuvres = $$('.oeuvre', zone);
    if (entrees()) {
      ST.create({
        trigger: zone, start: 'top 84%', once: true,
        onEnter: () => gsap.fromTo(oeuvres, { rotation: (i) => (i % 2 ? 5 : -5), opacity: 0 }, {
          rotation: 0, opacity: 1, duration: 1.5, ease: 'elastic.out(1, 0.42)', stagger: 0.08,
          onComplete() { oeuvres.forEach((o) => o.classList.add('accrochee')); gsap.set(oeuvres, { clearProps: 'transform,opacity' }); },
        }),
      });
    } else oeuvres.forEach((o) => o.classList.add('accrochee'));
    const piste = $('[data-galerie]', zone);
    if (piste && window.matchMedia('(min-width: 761px)').matches) {
      gsap.to(piste, { x: () => -Math.max(0, piste.scrollWidth - zone.clientWidth), ease: 'none', scrollTrigger: { trigger: zone, start: 'top 78%', end: 'bottom 22%', scrub: 0.6, invalidateOnRefresh: true } });
    }
  });
}

/* ---------- Ondes concentriques (page Énergie) ---------- */
function ondes() {
  $$('[data-effet="ondes"]').forEach((svg) => {
    const cercles = $$('circle', svg), n = cercles.length;
    boucle(svg, (dt, t) => {
      cercles.forEach((c, i) => {
        const p = (t * 0.07 + i / n) % 1;
        c.setAttribute('r', (8 + p * 90).toFixed(1));
        c.style.opacity = (Math.sin(p * Math.PI)).toFixed(3);
      });
    });
  });
}

/* ---------- Épingle qui se pose sur la carte (page Échangeons) ---------- */
function epingle() {
  const e = $('[data-effet="epingle"]');
  if (!e || !entrees()) return;
  ST.create({ trigger: e.closest('figure'), start: 'top 70%', once: true, onEnter: () => gsap.fromTo(e, { y: -70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'bounce.out' }) });
}

/* ---------- « Faites un point sur votre projet » (page Coaching) : outil sur place, rien n'est enregistré ---------- */
function point() {
  const outil = $('[data-point]');
  if (!outil) return;
  const resume = $('[data-point-resume]', outil), lien = $('[data-point-lien]', outil);
  const base = lien.getAttribute('href').split('?')[0].split('#')[0];
  const maj = () => {
    const sit = $$('input[name="situation"]:checked', outil).map((i) => i.dataset.libelleCourt);
    const cadre = $('input[name="cadre"]:checked', outil), lieu = $('input[name="lieu"]:checked', outil);
    resume.textContent = sit.length ? `${sit.join(', ')}. ${cadre.dataset.libelleCourt}, ${lieu.dataset.libelleCourt.toLowerCase()}.` : resume.dataset.vide;
    const p = new URLSearchParams({ demande: 'coaching', format: lieu.value === 'distance' ? 'visio' : 'cabinet' });
    if (sit.length) p.set('situation', `${sit.join(', ')} (${cadre.dataset.libelleCourt.toLowerCase()})`);
    lien.setAttribute('href', `${base}?${p.toString()}#rendez-vous`);
  };
  outil.addEventListener('change', maj);
  maj();
}

/* ---------- Rendez-vous en étapes (page Échangeons) : module de la bibliothèque, choix déjà fait selon l'adresse ---------- */
function rendezVous() {
  const section = $('[data-module="formulaire-par-etapes"]');
  if (!section) return;
  const form = $('form', section), params = new URLSearchParams(location.search);
  params.forEach((valeur, nom) => {
    $$(`[name="${CSS.escape(nom)}"]`, form).forEach((c) => {
      if (c.type === 'radio' || c.type === 'checkbox') c.checked = c.value === valeur;
      else { c.value = valeur; const champ = c.closest('[data-champ-situation]'); if (champ) champ.hidden = false; }
    });
  });
  initFormulaire(section, { sujet: 'Demande de rendez-vous' }).catch((err) => console.error('[armonia] formulaire', err));
  section.addEventListener('formulaire:envoye', () => setTimeout(() => aller(section), 80));
}

demarrer({
  preparer() {
    if (!gsap || !ST) return;
    rosaces(); respiration(); taches(); chemins(); accrochages(); ondes(); epingle();
    point(); rendezVous();
  },
  /* Intro (moins de 3 s) : la goutte de pigment tombe au-dessus du logo, s'étale, glisse jusqu'à l'objet d'ouverture
     de la page ([data-iris-centre]) et le panneau s'ouvre depuis lui ; le titre monte ligne à ligne. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ onComplete: finOuverture });
    const coeur = $('.intro-coeur'), halo = $('.intro-halo');
    if (coeur) {
      tl.fromTo(coeur, { y: () => -window.innerHeight * 0.34, scaleX: 0.45, scaleY: 0.62 }, { y: 0, scaleX: 0.45, scaleY: 0.62, duration: 0.4, ease: 'power2.in' }, 0)
        .to(coeur, { scaleX: 1.2, scaleY: 0.8, duration: 0.12, ease: 'power2.out' }, 0.4)
        .to(coeur, { scaleX: 1, scaleY: 1, duration: 0.5, ease: 'elastic.out(1, 0.5)' }, 0.52)
        .fromTo(halo, { scale: 0 }, { scale: 1, duration: 0.6, ease: 'power2.out' }, 0.42)
        .to('.ouverture-logo, .ouverture-ligne', { opacity: 0, duration: 0.25, ease: 'power1.in' }, 0.95);
    }
    versObjet(tl, { a: 1.12, duree: 0.5, ouverture: 0.75, echelleMax: 4 });
    premierEcran(tl, 1.62);
    return tl;
  },
  etatFinal() {
    finOuverture();
    $$('[data-effet="rosace"]').forEach((r) => { if (r.closest('#debut')) tracerRosace(r); });
  },
  /* Arrivée par un lien interne : le premier écran se met en place pendant que le voile se retire. */
  arrivee() {
    if (!gsap) { finOuverture(); return; }
    premierEcran(gsap.timeline({ onComplete: finOuverture }), 0.15);
  },
});
