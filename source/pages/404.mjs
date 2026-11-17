/* Page 404 aux couleurs d'Armonia : la toile « Spirale, Chemin de vie » de Corinne et un titre du métier. */
import { html } from '../../outils/gabarit.mjs';
import { lignes, tache } from '../gabarits/composants.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="introuvable conteneur" id="debut">
  <figure class="toile introuvable-toile">
    ${tache('introuvable-tache', 0)}
    <div class="toile-cadre">${c.media({ nom: 'toile-spirale', alt: c.donnees.images['toile-spirale'].alt, ratio: '660 / 834', priorite: true, classe: 'toile-media', sizes: '(max-width: 760px) 50vw, 26vw', attrs: 'data-iris-centre data-fx="vitesse"' })}</div>
    <figcaption class="toile-cartel masque-ecran-tres-bas"><span>${c.t('introuvable.legende')}</span></figcaption>
  </figure>
  <div>
    <h1 class="introuvable-titre">${lignes(c, ['introuvable.titre'])}</h1>
    <p class="chapo ouv-fondu">${c.t('introuvable.texte')}</p>
    <p class="ouv-fondu">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}</p>
  </div>
</section>
`;
