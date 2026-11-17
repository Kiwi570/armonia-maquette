/* Accueil : ouverture scindée (titre et vraie toile de Corinne), deux chemins, ce qui vous amène, trois approches,
   leviers en mots géants, œuvres en rangée qui glisse, Corinne, séance en trois temps, témoignages, tarifs et FAQ, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { sur, titre, lignes, rosace, tache, toile, tarifs, appel } from '../gabarits/composants.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'toile-mandala-bleu' };

export default (c) => {
  const d = c.donnees.contenu;
  return html`
<section class="hero" id="debut">
  <div class="hero-texte">
    <p class="surtitre ouv-fondu">${c.t('accueil.hero.sur')}</p>
    <h1 class="hero-titre">${lignes(c, ['accueil.hero.t1', 'accueil.hero.t2', 'accueil.hero.t3', 'accueil.hero.t4'])}</h1>
    <p class="hero-intro ouv-fondu masque-ecran-tres-bas">${c.t('accueil.hero.texte')}</p>
    <p class="hero-actions ouv-fondu">
      ${c.lien('contact', { ancre: 'rendez-vous', classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <a class="lien-fleche masque-ecran-tres-bas" href="#approches">${c.t('accueil.hero.second')}</a>
    </p>
    <p class="hero-info ouv-fondu" data-info-cle>${c.t('accueil.hero.info')}</p>
  </div>
  <div class="hero-visuel">
    ${tache('hero-tache hero-tache--a', 0)}${tache('hero-tache hero-tache--b', 1)}
    ${rosace('hero-rosace')}
    <figure class="toile hero-toile" data-iris-centre data-survol="incline" data-survol-force="5">
      <div class="toile-cadre">${c.media({ nom: 'toile-mandala-bleu', alt: c.donnees.images['toile-mandala-bleu'].alt, ratio: '1978 / 2000', priorite: true, sizes: '(max-width: 760px) 62vw, 34vw', classe: 'toile-media' })}</div>
      <figcaption class="toile-cartel masque-ecran-tres-bas"><span>${c.t('accueil.hero.legende')}</span></figcaption>
    </figure>
  </div>
</section>

<section class="chemins fond-lavis" id="chemins">
  <svg class="chemins-trait" viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true" data-effet="deux-chemins" data-audit-ignorer>
    <path class="chemin-a" pathLength="1" d="M600 0 C 600 120, 380 140, 300 260 S 220 480, 300 600"/>
    <path class="chemin-b" pathLength="1" d="M600 0 C 600 120, 820 140, 900 260 S 980 480, 900 600"/>
  </svg>
  <div class="conteneur chemins-tete">
    ${sur(c, 'accueil.chemins.sur')}
    ${titre(c, 'accueil.chemins.titre')}
    <p class="chapo" data-anime>${c.t('accueil.chemins.texte')}</p>
  </div>
  <div class="conteneur chemins-grille" data-anime="cascade">
    ${d.chemins.map((x) => html`<article class="chemin" id="chemin-${x.id}">
      ${c.media({ nom: x.image, alt: x.alt, cadrage: x.cadrage, classe: 'chemin-media', sizes: '(max-width: 760px) 90vw, 30vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
      <div class="chemin-texte">
        <p class="surtitre">${x.sur}</p>
        <h3>${x.titre}</h3>
        <p>${x.texte}</p>
        <ul class="puces">${x.outils.map((o) => html`<li>${o}</li>`)}</ul>
        ${c.lien('coaching', { ancre: 'parcours', classe: 'lien-fleche', texte: c.t('accueil.chemins.lien') })}
      </div>
    </article>`)}
  </div>
</section>

<section class="reconnaitre conteneur" id="ce-qui-vous-amene">
  <div class="reconnaitre-texte">
    ${sur(c, 'accueil.reconnaitre.sur')}
    <h2 class="visuellement-cache">${c.t('accueil.reconnaitre.titre')}</h2>
    <ul class="reconnaitre-liste">${d.reconnaitre.map((x) => html`<li data-anime="mots">${x}</li>`)}</ul>
    <p class="reconnaitre-fin" data-anime>${c.t('accueil.reconnaitre.fin')}</p>
  </div>
  <figure class="reconnaitre-citation" data-visuel data-effet="tache">
    ${tache('reconnaitre-tache', 2)}
    <blockquote><p>${c.t('accueil.citation.texte')}</p></blockquote>
    <figcaption>${c.t('accueil.citation.auteur')}</figcaption>
  </figure>
</section>

<section class="approches conteneur" id="approches">
  <div class="approches-tete">
    ${sur(c, 'accueil.approches.sur')}
    ${titre(c, 'accueil.approches.titre')}
    <p class="chapo" data-anime>${c.t('accueil.approches.texte')}</p>
  </div>
  <div class="approches-grille" data-anime="cascade">
    ${d.approches.map((x, i) => html`<article class="approche" data-survol="incline" data-survol-force="4">
      ${c.media({ nom: x.image, alt: x.alt, classe: 'approche-media', sizes: '(max-width: 760px) 90vw, 30vw', attrs: 'data-effet="tache"' })}
      <p class="approche-format">${x.format}</p>
      <h3>${x.titre}</h3>
      <p>${x.texte}</p>
      ${c.lien(x.page, { classe: 'lien-fleche', texte: x.lien })}
    </article>`)}
  </div>
</section>

<section class="leviers" id="leviers" aria-labelledby="leviers-titre">
  <h2 class="visuellement-cache" id="leviers-titre">${c.t('accueil.leviers.titre')}</h2>
  <ul class="visuellement-cache">${d.leviers.map((x) => html`<li>${x}</li>`)}</ul>
  <div class="leviers-mots" data-fx="mots-geants" data-fx-force="18" aria-hidden="true" data-ruban data-visuel>
    <p data-fx-rangee>${d.leviers.slice(0, 3).map((x) => html`<span>${x}</span>`)}</p>
    <p data-fx-rangee data-sens="-1">${d.leviers.slice(3).concat(d.leviers.slice(0, 1)).map((x) => html`<span>${x}</span>`)}</p>
  </div>
</section>

<section class="oeuvres fond-lavis" id="oeuvres">
  <div class="conteneur oeuvres-tete">
    <div>
      ${sur(c, 'accueil.oeuvres.sur')}
      ${titre(c, 'accueil.oeuvres.titre')}
    </div>
    <p class="chapo" data-anime>${c.t('accueil.oeuvres.texte')}</p>
  </div>
  <div class="oeuvres-fenetre" data-effet="accrochage">
    <div class="oeuvres-piste" data-galerie tabindex="0" role="region" aria-label="${c.s('accueil.oeuvres.region')}">
      ${d.oeuvres.map((o) => toile(c, o, { classe: 'oeuvre', sizes: '(max-width: 760px) 70vw, 30vw' }))}
    </div>
  </div>
  <p class="conteneur oeuvres-pied" data-anime>
    <span class="oeuvres-glisser">${c.t('accueil.oeuvres.glisser')}</span>
    ${c.lien('contact', { ancre: 'rendez-vous', params: 'demande=oeuvre', classe: 'lien-fleche', texte: c.t('commun.oeuvreLien') })}
  </p>
</section>

<section class="corinne conteneur" id="corinne">
  <div class="corinne-portrait">
    ${tache('corinne-tache', 1)}
    ${c.media({ nom: 'corinne', alt: c.donnees.images.corinne.alt, cadrage: c.donnees.images.corinne.cadrage || '50% 30%', classe: 'corinne-media', sizes: '(max-width: 760px) 60vw, 24vw', attrs: 'data-effet="tache"' })}
  </div>
  <div class="corinne-texte">
    ${sur(c, 'accueil.corinne.sur')}
    ${titre(c, 'accueil.corinne.titre')}
    <p data-anime>${c.t('accueil.corinne.p1')}</p>
    <p data-anime>${c.t('accueil.corinne.p2')}</p>
    <p class="corinne-citation" data-anime>${c.t('accueil.corinne.citation')}</p>
    <ul class="valeurs" data-anime="cascade">${d.valeurs.map((v) => html`<li>${v}</li>`)}</ul>
    <p data-anime>${c.lien('contact', { classe: 'lien-fleche', texte: c.t('accueil.corinne.lien') })}</p>
  </div>
</section>

<section class="temoignages fond-lavis" id="temoignages">
  <div class="conteneur">
    ${sur(c, 'accueil.temoignages.sur')}
    ${titre(c, 'accueil.temoignages.titre')}
    <div class="temoignages-grille" data-anime="cascade" data-visuel data-galerie tabindex="0" role="region" aria-label="${c.s('accueil.temoignages.region')}">
      ${d.temoignages.map((t, i) => html`<figure class="temoignage temoignage--${i % 3}" data-fx="vitesse" data-fx-force="1.5">
        <svg class="temoignage-guillemet" viewBox="0 0 40 30" aria-hidden="true"><path d="M2 28C2 14 8 4 18 2l1 4c-5 2-8 6-8 11h7v11zm20 0c0-14 6-24 16-26l1 4c-5 2-8 6-8 11h7v11z" fill="currentColor"/></svg>
        <blockquote><p>${t.texte}</p></blockquote>
        <figcaption><strong>${t.nom}</strong>${t.sur ? html`<span>${t.sur}</span>` : ''}</figcaption>
      </figure>`)}
    </div>
    <p class="temoignages-glisser petit">${c.t('commun.glisser')}</p>
  </div>
</section>

<section class="pratique conteneur" id="tarifs">
  <div class="pratique-tarifs" data-visuel>
    ${sur(c, 'accueil.tarifs.sur')}
    ${titre(c, 'accueil.tarifs.titre')}
    ${tarifs(c)}
    <p class="petit" data-anime>${c.t('accueil.tarifs.conditions')}</p>
  </div>
  <div class="pratique-faq" id="faq">
    <h3 class="faq-titre" data-anime>${c.t('accueil.tarifs.faq')}</h3>
    ${c.donnees.faq.map((f) => html`<details class="faq-item" data-anime><summary>${f.q}</summary><p>${f.r}</p></details>`)}
  </div>
</section>

${appel(c)}
`;
};
