/* Art-thérapie : ouverture plein cadre sur l'atelier, la création comme médiation, quatre médiations,
   pour qui, formats et déroulé, quatre arbres de vie de Corinne, mention, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { sur, titre, lignes, tache, toile, appel } from '../gabarits/composants.mjs';

export const page = { cle: 'art-therapie', fichier: 'art-therapie', imagePartage: 'grok/art-therapie-ouverture' };

export default (c) => {
  const d = c.donnees.contenu;
  return html`
<section class="ouv-plein" id="debut">
  ${c.media({ nom: 'grok/art-therapie-ouverture', alt: c.donnees.images['grok/art-therapie-ouverture']?.alt || '', cadrage: '50% 50%', priorite: true, classe: 'ouv-plein-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="5" data-iris-centre' })}
  <div class="ouv-plein-texte">
    <p class="surtitre ouv-fondu">${c.t('art.sur')}</p>
    <h1 class="ouv-plein-titre">${lignes(c, ['art.titre'])}</h1>
    <p class="chapo ouv-fondu masque-ecran-tres-bas">${c.t('art.texte')}</p>
    <p class="hero-actions ouv-fondu">
      ${c.lien('contact', { ancre: 'rendez-vous', params: 'demande=art-therapie', classe: 'bouton', texte: c.t('art.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <span class="hero-info" data-info-cle>${c.t('art.info')}</span>
    </p>
  </div>
</section>

<section class="duo conteneur" id="mediation">
  <div class="duo-texte">
    ${sur(c, 'art.quoi.sur')}
    ${titre(c, 'art.quoi.titre')}
    <p class="chapo" data-anime>${c.t('art.quoi.p1')}</p>
    <p data-anime>${c.t('art.quoi.p2')}</p>
    <p data-anime>${c.t('art.quoi.p3')}</p>
    <p data-anime>${c.lien('energie', { classe: 'lien-fleche', texte: c.t('art.quoi.lien') })}</p>
  </div>
  <div class="duo-visuel">
    ${tache('duo-tache', 0)}
    ${c.media({ nom: 'grok/art-therapie-pigments', alt: c.donnees.images['grok/art-therapie-pigments']?.alt || '', cadrage: '30% 50%', classe: 'duo-media', sizes: '(max-width: 760px) 92vw, 42vw', attrs: 'data-effet="tache"' })}
  </div>
</section>

<section class="mediations fond-lavis" id="mediations">
  <div class="conteneur mediations-grille">
    <div>
      ${sur(c, 'art.mediations.sur')}
      ${titre(c, 'art.mediations.titre')}
      <ol class="mediations-liste" data-anime="cascade">${d.mediations.map((m, i) => html`<li><span class="num" aria-hidden="true">0${i + 1}</span><div><h3>${m.titre}</h3><p>${m.texte}</p></div></li>`)}</ol>
    </div>
    ${c.media({ nom: 'grok/art-therapie-mediations', alt: c.donnees.images['grok/art-therapie-mediations']?.alt || '', cadrage: '64% 60%', classe: 'mediations-media', sizes: '(max-width: 760px) 92vw, 34vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
  </div>
</section>

<section class="pourqui conteneur" id="pour-qui">
  ${sur(c, 'art.pourqui.sur')}
  ${titre(c, 'art.pourqui.titre')}
  <ul class="pourqui-liste" data-anime="cascade" data-visuel>${d.artPourQui.map((x) => html`<li><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 13c3 2 5 4 6 7 3-7 7-12 12-16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span>${x}</span></li>`)}</ul>
</section>

<section class="formats conteneur" id="formats">
  <div class="formats-tete">
    ${sur(c, 'art.formats.sur')}
    ${titre(c, 'art.formats.titre')}
  </div>
  <div class="formats-grille" data-anime="cascade">
    ${d.artFormats.map((f) => html`<article class="format">
      <h3>${f.titre}</h3>
      <p>${f.texte}</p>
      <p class="format-detail" data-prix>${f.detail}</p>
    </article>`)}
  </div>
  <div class="deroule">
    <h3 class="deroule-titre" data-anime>${c.t('art.formats.deroule')}</h3>
    <svg class="seance-trait" viewBox="0 0 1000 60" preserveAspectRatio="none" aria-hidden="true" data-fx="trace" data-visuel><path d="M4 30 C 180 54, 320 6, 500 30 S 820 54, 996 26" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
    <ol class="deroule-temps" data-anime="cascade">${d.seance.map((s, i) => html`<li><span class="seance-num" aria-hidden="true">${i + 1}</span><div><h4>${s.titre}</h4><p>${s.texte}</p></div></li>`)}</ol>
    <p class="seance-note" data-anime>${c.t('art.formats.note')}</p>
  </div>
</section>

<section class="arbres fond-lavis" id="toiles">
  <div class="conteneur arbres-tete">
    ${sur(c, 'art.arbres.sur')}
    ${titre(c, 'art.arbres.titre')}
    <p class="chapo" data-anime>${c.t('art.arbres.texte')}</p>
  </div>
  <div class="conteneur arbres-grille" data-effet="accrochage">
    ${d.arbres.map((o) => toile(c, o, { classe: 'oeuvre oeuvre--mur', sizes: '(max-width: 760px) 44vw, 22vw' }))}
  </div>
  <p class="conteneur mention-cadre" data-anime>${c.t('art.mention')}</p>
</section>

${appel(c, { cleTitre: 'art.appelTitre', cleTexte: 'art.appelTexte', params: 'demande=art-therapie' })}
`;
};
