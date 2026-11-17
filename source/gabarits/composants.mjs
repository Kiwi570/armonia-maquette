/* Composants du site Armonia, communs à toutes les pages : surtitre, titre, toile encadrée, rosace, taches,
   tarifs, appel final. Une seule palette, une seule typographie : les pages ne changent que de composition. */
import { html, brut } from '../../outils/gabarit.mjs';

export const sur = (c, cle, classe = '') => html`<p class="surtitre ${classe}" data-anime>${c.t(cle)}</p>`;

export const titre = (c, cle, classe = '') => html`<h2 class="titre ${classe}" data-anime="lignes">${c.tb(cle)}</h2>`;

/* Lignes d'un titre d'ouverture : état de départ posé en CSS (.ouv-ligne), animées par site.js. */
export const lignes = (c, cles) => cles.map((k) => html`<span class="ligne-masque"><span class="ouv-ligne">${c.tb(k)}</span></span>`);

/* Rosace : anneaux de pétales qui se tracent puis tournent lentement (effet « rosace »). */
export function rosace(classe = '') {
  const petale = (n, r1, r2, l) => Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2, b = Math.PI / n * l;
    const p = (r, t) => `${(100 + r * Math.cos(t)).toFixed(1)} ${(100 + r * Math.sin(t)).toFixed(1)}`;
    return `<path pathLength="1" d="M${p(r1, a)} Q${p((r1 + r2) / 2, a - b)} ${p(r2, a)} Q${p((r1 + r2) / 2, a + b)} ${p(r1, a)}Z"/>`;
  }).join('');
  return brut(`<svg class="rosace ${classe}" viewBox="0 0 200 200" aria-hidden="true" data-effet="rosace" data-visuel data-audit-ignorer>
  <g class="rosace-tour" fill="none" stroke="currentColor" stroke-width=".7" stroke-linecap="round">
    <circle pathLength="1" cx="100" cy="100" r="96"/>
    <g class="rosace-a">${petale(16, 62, 95, 0.95)}</g>
    <g class="rosace-b">${petale(12, 34, 66, 1.05)}</g>
    <g class="rosace-c">${petale(8, 10, 36, 1.2)}</g>
    <circle pathLength="1" cx="100" cy="100" r="8"/>
  </g>
</svg>`);
}

/* Tache de pigment décorative (forme libre), derrière un bloc. */
const FORMES = [
  'M61 4c20 3 35 20 37 41 2 22-9 44-30 51-22 8-48 1-60-19C-3 58 0 31 16 15 28 4 45 1 61 4z',
  'M52 2c19-2 39 9 45 28 6 20-1 44-18 57-18 13-45 15-62 1C1 74-4 49 5 29 13 12 33 4 52 2z',
  'M44 6c17-6 38-1 48 15 11 17 9 42-4 58-13 16-37 23-57 15C12 86 0 66 2 46 4 27 26 12 44 6z',
];
export const tache = (classe = '', i = 0) => brut(`<svg class="tache ${classe}" viewBox="0 0 100 100" aria-hidden="true" data-audit-ignorer preserveAspectRatio="none"><path d="${FORMES[i % FORMES.length]}" fill="currentColor"/></svg>`);

/* Toile de Corinne : toujours entière (cadre à la proportion de l'œuvre), jamais filtrée. */
export function toile(c, o, { sizes = '(max-width: 760px) 70vw, 28vw', attrs = '', classe = '' } = {}) {
  const alt = c.donnees.images?.[o.image]?.alt || o.titre || c.s('commun.toileDe');
  const legende = [o.technique, o.format ? `${o.format} cm` : ''].filter(Boolean).join(' · ');
  return html`<figure class="toile ${classe}"${brut(attrs ? ' ' + attrs : '')}>
  <div class="toile-cadre">${c.media({ nom: o.image, alt, ratio: `${o.l} / ${o.h}`, sizes, classe: 'toile-media' })}</div>
  <figcaption class="toile-cartel">
    <strong>${o.titre || c.t('commun.toileDe')}</strong>
    <span>${legende}</span>
    ${o.prix ? html`<span class="toile-prix" data-prix>${o.prix}</span>` : ''}
  </figcaption>
</figure>`;
}

/* Tarifs réels (SensFlow) : même bloc sur l'accueil et sur la page Échangeons, disposition au choix. */
export const tarifs = (c, classe = '') => html`<ul class="tarifs ${classe}" data-anime="cascade">${c.donnees.contenu.tarifs.map((t) => html`<li class="tarif">
  <h3>${t.titre}</h3>
  ${t.lignes.map((l) => html`<p class="tarif-ligne">${l.prix ? html`<strong class="tarif-prix" data-prix>${l.prix}</strong> ` : ''}<span>${l.quoi}${l.duree ? html`<br><small>${l.duree}</small>` : ''}</span></p>`)}
</li>`)}</ul>`;

/* Appel final : fond encre, rosace qui se trace et tourne, bouton principal et téléphone. */
export function appel(c, { cleTitre = 'commun.appelTitre', cleTexte = 'commun.appelTexte', params = '', externe = false } = {}) {
  const k = c.site.contact;
  return html`<section class="appel" id="rencontre">
  ${rosace('appel-rosace')}
  <div class="conteneur appel-contenu">
    <h2 class="titre appel-titre" data-anime="lignes">${c.tb(cleTitre)}</h2>
    <p class="appel-texte" data-anime>${c.t(cleTexte)}</p>
    <p class="appel-actions" data-anime>
      ${externe
        ? html`<a class="bouton" href="${k.reservation}" target="_blank" rel="noopener" data-survol="magnetique">${c.t('commun.reserverEnLigne')} <span class="visuellement-cache">${c.t('commun.nouvelOnglet')}</span></a>`
        : c.lien('contact', { ancre: 'rendez-vous', params, classe: 'bouton', texte: c.t('commun.appelAction'), attrs: 'data-survol="magnetique"' })}
      <a class="bouton bouton--contour" href="tel:${k.telephoneLien}">${k.telephone}</a>
    </p>
  </div>
</section>`;
}
