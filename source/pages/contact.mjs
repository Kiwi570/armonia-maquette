/* Échangeons : ouverture au numéro de téléphone en très grand et portrait de Corinne, rendez-vous simulé en quatre étapes
   (module formulaire-par-etapes de la bibliothèque), cabinet et carte dessinée, tarifs, réservation en ligne. */
import { html, brut } from '../../outils/gabarit.mjs';
import { sur, titre, lignes, tache, tarifs, appel } from '../gabarits/composants.mjs';

export const page = { cle: 'contact', fichier: 'echangeons', imagePartage: 'corinne' };

const ICONES = {
  'art-therapie': '<path d="M6 26c2-6 6-8 9-8M15 18 26 5l2 2-11 13zM6 26c4 1 8-1 9-5"/>',
  coaching: '<path d="M16 28V14M16 14C16 8 10 6 6 6M16 14c0-6 6-8 10-8"/>',
  liberation: '<circle cx="16" cy="16" r="3"/><circle cx="16" cy="16" r="8"/><circle cx="16" cy="16" r="13"/>',
  reiki: '<path d="M5 20c3-6 8-6 11 0s8 6 11 0M5 12c3-6 8-6 11 0s8 6 11 0"/>',
  decouverte: '<path d="M6 9h20v13H13l-5 4v-4H6z"/>',
  oeuvre: '<rect x="6" y="6" width="20" height="20" rx="1"/><path d="M6 21l6-6 5 5 3-3 6 6"/>',
};

export default (c) => {
  const d = c.donnees.contenu, k = c.site.contact;
  return html`
<section class="ouv-numero conteneur" id="debut">
  <div class="ouv-numero-texte">
    <p class="surtitre ouv-fondu">${c.t('contact.sur')}</p>
    <h1 class="ouv-numero-titre">${lignes(c, ['contact.titre'])}</h1>
    <p class="chapo ouv-fondu masque-ecran-tres-bas">${c.t('contact.texte')}</p>
    <p class="ouv-numero-tel ouv-fondu" data-info-cle>
      <a href="tel:${k.telephoneLien}" aria-label="${c.s('contact.telLibelle')} ${k.telephone}">${k.telephone}</a>
      <svg class="numero-trait" viewBox="0 0 600 30" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M4 18 C 120 2, 260 28, 380 12 S 540 4, 596 16" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>
    </p>
    <p class="hero-actions ouv-fondu">
      <a class="bouton" href="#rendez-vous" data-action-principale data-survol="magnetique">${c.t('contact.action')}</a>
      <a class="lien-fleche" href="${k.reservation}" target="_blank" rel="noopener">${c.t('commun.reserverEnLigne')} <span class="visuellement-cache">${c.t('commun.nouvelOnglet')}</span></a>
    </p>
  </div>
  <figure class="ouv-numero-portrait">
    ${tache('ouv-numero-tache', 1)}
    ${c.media({ nom: 'corinne', alt: c.donnees.images.corinne.alt, cadrage: c.donnees.images.corinne.cadrage || '50% 30%', priorite: true, classe: 'ouv-numero-media', sizes: '(max-width: 760px) 44vw, 22vw', attrs: 'data-iris-centre' })}
    <figcaption class="masque-ecran-tres-bas">${c.t('contact.portrait')}</figcaption>
  </figure>
</section>

<section class="rdv fond-lavis fpe" id="rendez-vous" data-module="formulaire-par-etapes" aria-labelledby="rdv-titre">
  <div class="conteneur rdv-grille">
    <div class="rdv-tete">
      ${sur(c, 'contact.rdv.sur')}
      <h2 class="titre" id="rdv-titre" data-anime="lignes">${c.tb('contact.rdv.titre')}</h2>
      <p class="chapo" data-anime>${c.t('contact.rdv.texte')}</p>
      <p class="petit rdv-simule" data-anime>${c.t('contact.rdv.simule')}</p>
      <p class="rdv-direct" data-anime>${c.t('contact.rdv.direct')}<br><a class="lien-fleche" href="${k.reservation}" target="_blank" rel="noopener">${c.t('commun.reserverEnLigne')} <span class="visuellement-cache">${c.t('commun.nouvelOnglet')}</span></a></p>
    </div>
    <div class="fpe__carton" data-anime data-visuel>
      <form class="fpe__form" action="#" method="post" novalidate>
        <div class="fpe__progression">
          <ol class="fpe__reperes" aria-label="Progression"></ol>
          <div class="fpe__barre" aria-hidden="true"><span></span></div>
          <p class="fpe__etat" aria-live="polite"></p>
        </div>

        <fieldset class="fpe__etape" data-etape="${c.s('contact.rdv.e1')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.rdv.e1q')}</h3></legend>
          <div class="fpe__groupe fpe__cartes" data-libelle="${c.s('contact.rdv.e1l')}">
            ${d.prestations.map((p, i) => html`<label class="fpe__carte"><input type="radio" name="demande" value="${p.v}"${i === 0 ? ' required' : ''}>
              <svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true">${brut(ICONES[p.v] || ICONES.decouverte)}</svg>
              <span class="fpe__carte-titre">${p.titre}</span><span class="fpe__carte-texte">${p.texte}</span></label>`)}
          </div>
        </fieldset>

        <fieldset class="fpe__etape" data-etape="${c.s('contact.rdv.e2')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.rdv.e2q')}</h3></legend>
          <div class="fpe__groupe fpe__puces" data-libelle="${c.s('contact.rdv.e2l')}">
            <label class="fpe__puce"><input type="radio" name="format" value="cabinet" required><span class="fpe__choix-texte">${c.t('contact.rdv.cabinet')}</span></label>
            <label class="fpe__puce"><input type="radio" name="format" value="visio"><span class="fpe__choix-texte">${c.t('contact.rdv.visio')}</span></label>
            <label class="fpe__puce"><input type="radio" name="format" value="telephone"><span class="fpe__choix-texte">${c.t('contact.rdv.telephone')}</span></label>
          </div>
          <div class="fpe__champ" data-champ-situation hidden>
            <label for="rdv-situation">${c.t('contact.rdv.situations')}</label>
            <input id="rdv-situation" name="situation" data-libelle="${c.s('contact.rdv.situations')}">
          </div>
          <div class="fpe__champ">
            <label for="rdv-message">${c.t('contact.rdv.messageL')}</label>
            <textarea id="rdv-message" name="message" rows="4"></textarea>
          </div>
        </fieldset>

        <fieldset class="fpe__etape" data-etape="${c.s('contact.rdv.e3')}">
          <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.rdv.e3q')}</h3></legend>
          <div class="fpe__grille">
            <div class="fpe__champ"><label for="rdv-prenom">${c.t('contact.rdv.prenom')} <i aria-hidden="true">*</i></label><input id="rdv-prenom" name="prenom" autocomplete="given-name" required></div>
            <div class="fpe__champ"><label for="rdv-nom">${c.t('contact.rdv.nom')} <i aria-hidden="true">*</i></label><input id="rdv-nom" name="nom" autocomplete="family-name" required></div>
            <div class="fpe__champ"><label for="rdv-tel">${c.t('contact.rdv.tel')} <i aria-hidden="true">*</i></label><input id="rdv-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" pattern="[0-9 +().\\-]{8,20}" required></div>
            <div class="fpe__champ"><label for="rdv-email">${c.t('contact.rdv.email')}</label><input id="rdv-email" name="email" type="email" autocomplete="email"></div>
          </div>
          <label class="fpe__case"><input type="checkbox" name="accord" value="oui" required data-libelle="Accord" data-hors-recap><span class="fpe__choix-texte">${c.t('contact.rdv.accord')} <i aria-hidden="true">*</i></span></label>
          <p class="fpe__aide">${c.t('contact.rdv.aide')} ${c.t('contact.rdv.donnees')}</p>
        </fieldset>

        <fieldset class="fpe__etape" data-etape="${c.s('contact.rdv.e4')}" data-recap>
          <legend class="fpe__legende"><h3 class="fpe__titre">${c.t('contact.rdv.e4q')}</h3></legend>
          <div class="fpe__recap"><p>${c.t('contact.rdv.recapVide')}</p></div>
        </fieldset>

        <div class="fpe__nav">
          <button class="fpe__bouton fpe__bouton--ligne" type="button" data-precedent>${c.t('contact.rdv.retour')}</button>
          <button class="fpe__bouton" type="button" data-suivant data-retour="${c.s('contact.rdv.revenir')}">${c.t('contact.rdv.continuer')}</button>
          <button class="fpe__bouton" type="submit">${c.t('contact.rdv.envoyer')}</button>
        </div>
      </form>
      <div class="fpe__fin" hidden>
        <svg class="fpe__coche" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="28"/><path d="M20 33l8 8 16-17"/></svg>
        <h3>${c.t('contact.rdv.finTitre')}</h3>
        <p data-resume></p>
        <p>${c.t('contact.rdv.finTexte')}</p>
        <button class="fpe__bouton fpe__bouton--ligne" type="button" data-recommencer>${c.t('contact.rdv.recommencer')}</button>
      </div>
    </div>
  </div>
</section>

<section class="lieu conteneur" id="cabinet">
  <div class="lieu-texte">
    ${sur(c, 'contact.lieu.sur')}
    ${titre(c, 'contact.lieu.titre')}
    <dl class="lieu-infos" data-anime="cascade">
      <div><dt>${c.t('contact.lieu.adresseL')}</dt><dd>${k.adresse}</dd></div>
      <div><dt>${c.t('contact.lieu.telL')}</dt><dd><a href="tel:${k.telephoneLien}">${k.telephone}</a></dd></div>
      <div><dt>${c.t('contact.lieu.horairesL')}</dt><dd>${c.t('contact.lieu.horaires')}</dd></div>
      <div><dt>${c.t('contact.lieu.distanceL')}</dt><dd>${c.t('contact.lieu.distance')}</dd></div>
    </dl>
    <p data-anime><a class="lien-fleche" href="${k.itineraire}" target="_blank" rel="noopener">${c.t('contact.lieu.itineraire')} <span class="visuellement-cache">${c.t('commun.nouvelOnglet')}</span></a></p>
  </div>
  <figure class="carte" data-visuel role="img" aria-label="${c.s('contact.lieu.carteAlt')}">
    <div class="carte-plan">
    <svg viewBox="0 0 600 440" aria-hidden="true" data-fx="trace">
      <path class="carte-foret" d="M380 60c40-18 96-6 118 28 20 30 8 74-24 90-36 18-84 6-104-26-18-30-18-76 10-92z"/>
      <path class="carte-ville" d="M96 300c22-22 64-26 90-8 24 18 30 54 12 78-20 26-62 32-90 14-28-20-34-60-12-84z"/>
      <path data-fx-trait d="M150 338 C 220 300, 290 262, 352 218 S 420 168, 436 150" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
      <path class="carte-route" d="M20 396 C 80 372, 110 356, 150 338 M150 338 C 170 380, 200 410, 240 432 M436 150 C 480 120, 530 96, 590 70" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 8"/>
      <circle class="carte-point" cx="150" cy="338" r="9"/>
      <g class="carte-epingle" data-effet="epingle"><path d="M436 150c-16-22-24-36-24-48a24 24 0 1 1 48 0c0 12-8 26-24 48z"/><circle cx="436" cy="101" r="8" fill="#FAF5EC"/></g>
      <path class="carte-nord" d="M548 372 l10-34 10 34 -10-8z"/>
    </svg>
    <span class="carte-nom carte-nom--cholet" data-repere>${c.t('contact.lieu.carteCholet')}</span>
    <span class="carte-nom carte-nom--nuaille" data-repere><strong>${c.t('contact.lieu.carteNuaille')}</strong><br>${c.t('contact.lieu.carteCabinet')}</span>
    <span class="carte-nom carte-nom--nord" aria-hidden="true">${c.t('contact.lieu.carteNord')}</span>
    </div>
    <figcaption>${c.t('contact.lieu.carteNote')}</figcaption>
  </figure>
</section>

<section class="grille-tarifs fond-lavis" id="tarifs">
  <div class="conteneur">
    ${sur(c, 'contact.tarifs.sur')}
    ${titre(c, 'contact.tarifs.titre')}
    <div data-visuel>${tarifs(c, 'tarifs--large')}</div>
    <p class="petit" data-anime>${c.t('contact.tarifs.conditions')}</p>
  </div>
</section>

${appel(c, { cleTitre: 'contact.fin.titre', cleTexte: 'contact.fin.texte', externe: true })}
`;

};
