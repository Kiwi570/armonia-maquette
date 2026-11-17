/* Coaching de transition : ouverture scindée (grand titre, chemin sous une arche), six situations, cadre de confiance,
   méthode, deux parcours, « Faites un point sur votre projet » (questionnaire simulé), appel final. */
import { html } from '../../outils/gabarit.mjs';
import { sur, titre, lignes, tache, appel } from '../gabarits/composants.mjs';

export const page = { cle: 'coaching', fichier: 'coaching-de-transition', imagePartage: 'grok/coaching-ouverture' };

export default (c) => {
  const d = c.donnees.contenu;
  return html`
<section class="ouv-arche" id="debut">
  <div class="ouv-arche-texte">
    <p class="surtitre ouv-fondu">${c.t('coaching.sur')}</p>
    <h1 class="ouv-arche-titre">${lignes(c, ['coaching.t1', 'coaching.t2', 'coaching.t3', 'coaching.t4'])}</h1>
    <p class="chapo ouv-fondu masque-ecran-tres-bas">${c.t('coaching.texte')}</p>
    <p class="hero-actions ouv-fondu">
      <a class="bouton" href="#point" data-action-principale data-survol="magnetique">${c.t('coaching.action')}</a>
    </p>
    <p class="hero-info ouv-fondu" data-info-cle>${c.t('coaching.info')}</p>
  </div>
  <div class="ouv-arche-visuel">
    ${tache('ouv-arche-tache', 2)}
    ${c.media({ nom: 'grok/coaching-ouverture', alt: c.donnees.images['grok/coaching-ouverture']?.alt || '', cadrage: '50% 60%', priorite: true, classe: 'ouv-arche-media', sizes: '(max-width: 760px) 70vw, 36vw', attrs: 'data-fx="parallaxe" data-fx-force="6" data-iris-centre' })}
  </div>
</section>

<section class="situations fond-lavis" id="situations">
  <div class="conteneur">
    ${sur(c, 'coaching.situations.sur')}
    ${titre(c, 'coaching.situations.titre')}
    <ol class="situations-grille" data-anime="cascade" data-visuel>${d.situations.map((s, i) => html`<li class="situation"><span class="num" aria-hidden="true">0${i + 1}</span><p>${s}</p></li>`)}</ol>
    <p class="situations-fin" data-anime>${c.t('coaching.situations.fin')}</p>
  </div>
</section>

<section class="cadre conteneur" id="cadre">
  <div class="cadre-tete">
    ${sur(c, 'coaching.cadre.sur')}
    ${titre(c, 'coaching.cadre.titre')}
    <p class="chapo" data-anime>${c.t('coaching.cadre.texte')}</p>
  </div>
  <ul class="cadre-liste" data-visuel>${d.cadre.map((x) => html`<li><h3 data-anime="lettres">${x.titre}</h3><p data-anime>${x.texte}</p></li>`)}</ul>
</section>

<section class="duo duo--inverse conteneur" id="methode">
  <div class="duo-visuel">
    ${tache('duo-tache', 1)}
    ${c.media({ nom: 'grok/coaching-avancer', alt: c.donnees.images['grok/coaching-avancer']?.alt || '', classe: 'duo-media', sizes: '(max-width: 760px) 92vw, 42vw', attrs: 'data-effet="tache"' })}
  </div>
  <div class="duo-texte">
    ${sur(c, 'coaching.avancer.sur')}
    ${titre(c, 'coaching.avancer.titre')}
    <p class="chapo" data-anime>${c.t('coaching.avancer.p1')}</p>
    <p data-anime>${c.t('coaching.avancer.p2')}</p>
    <p data-anime>${c.t('coaching.avancer.p3')}</p>
    <p data-anime>${c.lien('energie', { classe: 'lien-fleche', texte: c.t('coaching.avancer.lien') })}</p>
  </div>
</section>

<section class="parcours fond-lavis" id="parcours">
  <svg class="chemins-trait" viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true" data-effet="deux-chemins" data-audit-ignorer>
    <path class="chemin-a" pathLength="1" d="M0 80 C 260 40, 420 220, 600 300 S 960 520, 1200 470"/>
    <path class="chemin-b" pathLength="1" d="M0 520 C 240 560, 430 380, 600 300 S 940 60, 1200 120"/>
  </svg>
  <div class="conteneur">
    ${sur(c, 'coaching.parcours.sur')}
    ${titre(c, 'coaching.parcours.titre')}
    <div class="parcours-grille" data-anime="cascade" data-visuel>
      ${d.chemins.map((x) => html`<article class="parcours-carte" id="parcours-${x.id}">
        <p class="surtitre">${x.sur}</p>
        <h3>${x.titre}</h3>
        <p>${x.texte}</p>
        <ul class="puces">${x.outils.map((o) => html`<li>${o}</li>`)}</ul>
      </article>`)}
    </div>
    <p class="situations-fin note-pastille" data-anime>${c.t('coaching.parcours.aussi')}</p>
  </div>
</section>

<section class="point conteneur" id="point">
  <div class="point-tete">
    ${sur(c, 'coaching.point.sur')}
    ${titre(c, 'coaching.point.titre')}
    <p class="chapo" data-anime>${c.t('coaching.point.texte')}</p>
    <p class="petit" data-anime>${c.t('coaching.point.tarif')}</p>
  </div>
  <div class="point-outil" data-point data-anime data-visuel>
    <fieldset class="point-groupe">
      <legend>${c.t('coaching.point.q1')}</legend>
      <div class="point-choix">${d.situationsCourtes.map((s, i) => html`<label class="choix"><input type="checkbox" name="situation" value="${i + 1}" data-libelle-court="${s}"><span>${s}</span></label>`)}</div>
    </fieldset>
    <fieldset class="point-groupe">
      <legend>${c.t('coaching.point.q2')}</legend>
      <div class="point-choix">
        <label class="choix"><input type="radio" name="cadre" value="individuel" checked data-libelle-court="${c.s('coaching.point.individuel')}"><span>${c.t('coaching.point.individuel')}</span></label>
        <label class="choix"><input type="radio" name="cadre" value="collectif" data-libelle-court="${c.s('coaching.point.collectif')}"><span>${c.t('coaching.point.collectif')}</span></label>
        <label class="choix"><input type="radio" name="lieu" value="presentiel" checked data-libelle-court="${c.s('coaching.point.presentiel')}"><span>${c.t('coaching.point.presentiel')}</span></label>
        <label class="choix"><input type="radio" name="lieu" value="distance" data-libelle-court="${c.s('coaching.point.distance')}"><span>${c.t('coaching.point.distance')}</span></label>
      </div>
    </fieldset>
    <div class="point-resultat" aria-live="polite">
      <h3>${c.t('coaching.point.resultat')}</h3>
      <p data-point-resume data-vide="${c.s('coaching.point.vide')}">${c.t('coaching.point.vide')}</p>
      <p>${c.lien('contact', { ancre: 'rendez-vous', params: 'demande=coaching', classe: 'bouton', texte: c.t('coaching.point.envoyer'), attrs: 'data-point-lien' })}</p>
      <p class="petit">${c.t('coaching.point.simule')}</p>
    </div>
  </div>
</section>

${appel(c, { cleTitre: 'coaching.appelTitre', cleTexte: 'coaching.appelTexte', params: 'demande=coaching' })}
`;
};
