/* Énergie et libérations : grand titre centré puis bandeau (image qui ondule), mention bien-être bien visible,
   libération quantique (faits, quatre temps), Reiki, comment choisir, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { sur, titre, lignes, tache, appel } from '../gabarits/composants.mjs';

export const page = { cle: 'energie', fichier: 'energie-et-liberations', imagePartage: 'grok/energie-ouverture' };

const faits = (liste) => html`<ul class="faits" data-anime="cascade">${liste.map((f) => html`<li><strong data-prix>${f.v}</strong><span>${f.l}</span></li>`)}</ul>`;

export default (c) => {
  const d = c.donnees.contenu;
  return html`
<section class="ouv-bandeau" id="debut">
  <div class="conteneur ouv-bandeau-texte">
    <p class="surtitre ouv-fondu">${c.t('energie.sur')}</p>
    <h1 class="ouv-bandeau-titre">${lignes(c, ['energie.titre'])}</h1>
    <p class="chapo ouv-fondu masque-ecran-tres-bas">${c.t('energie.texte')}</p>
    <p class="hero-actions ouv-fondu">
      ${c.lien('contact', { ancre: 'rendez-vous', params: 'demande=liberation', classe: 'bouton', texte: c.t('energie.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <span class="hero-info" data-info-cle>${c.t('energie.info')}</span>
    </p>
  </div>
  ${c.media({ nom: 'grok/energie-ouverture', alt: c.donnees.images['grok/energie-ouverture']?.alt || '', cadrage: '50% 72%', priorite: true, classe: 'ouv-bandeau-media', sizes: '100vw', attrs: 'data-fx="onde" data-iris-centre' })}
</section>

<section class="mention-bande fond-lavis" id="demarche">
  <svg class="ondes" viewBox="0 0 200 200" aria-hidden="true" data-effet="ondes" data-visuel data-audit-ignorer>
    ${[18, 36, 54, 72, 90].map((r) => html`<circle cx="100" cy="100" r="${r}" fill="none" stroke="currentColor" stroke-width=".8"/>`)}
  </svg>
  <div class="conteneur mention-bande-texte">
    <h2 class="titre" data-anime="lignes">${c.t('energie.mention.titre')}</h2>
    <p class="chapo" data-anime>${c.t('energie.mention.texte')}</p>
  </div>
</section>

<section class="duo conteneur" id="liberation-quantique">
  <div class="duo-texte">
    ${sur(c, 'energie.liberation.sur')}
    ${titre(c, 'energie.liberation.titre')}
    <p class="chapo" data-anime>${c.t('energie.liberation.p1')}</p>
    <p data-anime>${c.t('energie.liberation.p2')}</p>
    ${faits(d.liberationFaits)}
    <p class="petit" data-anime>${c.t('energie.liberation.distance')}</p>
    <p data-anime>${c.lien('contact', { ancre: 'rendez-vous', params: 'demande=liberation', classe: 'bouton', texte: c.t('energie.liberation.action') })}</p>
  </div>
  <div class="duo-visuel">
    ${tache('duo-tache', 2)}
    ${c.media({ nom: 'grok/energie-distance', alt: c.donnees.images['grok/energie-distance']?.alt || '', classe: 'duo-media', sizes: '(max-width: 760px) 92vw, 42vw', attrs: 'data-effet="tache"' })}
    <div class="temps-carte" data-anime>
      <h3>${c.t('energie.liberation.temps')}</h3>
      <ol>${d.liberationTemps.map((t) => html`<li>${t}</li>`)}</ol>
    </div>
  </div>
</section>

<section class="duo duo--inverse conteneur" id="reiki">
  <div class="duo-visuel">
    ${tache('duo-tache', 0)}
    ${c.media({ nom: 'grok/energie-reiki', alt: c.donnees.images['grok/energie-reiki']?.alt || '', classe: 'duo-media', sizes: '(max-width: 760px) 92vw, 42vw', attrs: 'data-effet="tache"' })}
  </div>
  <div class="duo-texte">
    ${sur(c, 'energie.reiki.sur')}
    ${titre(c, 'energie.reiki.titre')}
    <p class="chapo" data-anime>${c.t('energie.reiki.p1')}</p>
    <p data-anime>${c.t('energie.reiki.p2')}</p>
    ${faits(d.reikiFaits)}
    <p data-anime>${c.lien('contact', { ancre: 'rendez-vous', params: 'demande=reiki', classe: 'bouton bouton--contour', texte: c.t('energie.reiki.action') })}</p>
  </div>
</section>

<section class="choisir fond-lavis" id="choisir">
  <div class="conteneur choisir-grille">
    <div>
      ${sur(c, 'energie.choisir.sur')}
      ${titre(c, 'energie.choisir.titre')}
    </div>
    <div>
      <p class="chapo" data-anime>${c.t('energie.choisir.texte')}</p>
      <p class="hero-actions" data-anime>
        ${c.lien('art-therapie', { classe: 'lien-fleche', texte: c.t('energie.choisir.lien1') })}
        ${c.lien('contact', { ancre: 'rendez-vous', params: 'demande=decouverte', classe: 'lien-fleche', texte: c.t('energie.choisir.lien2') })}
      </p>
    </div>
    <svg class="choisir-trait" viewBox="0 0 600 40" preserveAspectRatio="none" aria-hidden="true" data-fx="trace" data-visuel><path d="M4 26 C 120 4, 240 38, 360 18 S 520 6, 596 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
  </div>
</section>

${appel(c, { params: 'demande=decouverte' })}
`;
};
