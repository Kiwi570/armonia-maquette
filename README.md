# Armonia — maquette v2

Maquette du site de Corinne Fonteneau (Armonia, Nuaillé près de Cholet) : art-thérapie, coaching de transition, énergie et libérations.
Site actuel : armoniacf.jimdofree.com. Adresse de la maquette : https://armonia-maquette.vercel.app (adresse courte, à mettre dans le module Wix).

Direction « Papier et pigments » : fond papier, lavis d'eau, encre marine du logo, accent vermillon. Titres en Fraunces, texte en Figtree.
Skill maquette-premium-client v11.1, socle et audit copiés de la skill. Relevé du site actuel : `_suivi/releve.md`.

## Pages

| Page | Fichier | Ouverture |
|---|---|---|
| Bienvenue | `index.html` | Scindée : titre et vraie toile de Corinne (mandala bleu) |
| Art-thérapie | `art-therapie.html` | Plein cadre sur l'atelier, texte sur une feuille |
| Coaching de transition | `coaching-de-transition.html` | Grand titre, chemin sous une arche |
| Énergie et libérations | `energie-et-liberations.html` | Grand titre centré puis bandeau |
| Échangeons | `echangeons.html` | Numéro de téléphone en très grand, portrait de Corinne |
| 404 | `404.html` | Toile « Spirale, Chemin de vie » |

Pages du site actuel non reprises en v1 : Expositions (deux galeries), Faisons connaissance, Témoignages et Questions fréquentes en pages séparées (intégrés à l'accueil), blog (7 articles), anciennes pages archivées.

## Modifier le site

Ne jamais modifier les pages `.html` à la main : elles sont générées.
- Textes : `donnees/textes/fr.json`. Listes (œuvres, tarifs, témoignages, situations…) : `donnees/contenu.json`. Questions : `donnees/faq.json`.
- Pages : `source/pages/*.mjs`. Composants communs : `source/gabarits/composants.mjs` et `commun.mjs`.
- Style : `assets/css/site.css`. Effets : `assets/js/site.js`.
- Images : `plan-images.json`, puis `node _biblio/images/produire.mjs plan-images.json`.
- Générer : `node outils/generer.mjs`, puis `node _biblio/images/partage.mjs`. Auditer : `node _audit/audit.mjs`.
- À chaque version livrée, augmenter `version` dans `donnees/site.json`.

Effets propres : `tache` (image qui se révèle comme un pigment), `deux-chemins` (traits tracés au défilement), `rosace` (se trace puis tourne), `accrochage` (toiles qui se posent, rangée qui glisse), plus `ondes` et `epingle`.

## À fournir par le client (fiche récapitulative)

À compléter avant la mise en ligne définitive :
- **Mentions légales** : nom ou raison sociale, statut, adresse, SIRET, directrice de la publication. À compléter.
- **Politique de confidentialité** (RGPD) : données recueillies par le formulaire, finalité, durée de conservation, droits. À compléter.
- **Hébergeur** : Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis (à revérifier sur vercel.com au moment de la mise en ligne).
- **Assurance** responsabilité civile professionnelle et **certification** d'art-thérapeute (organisme, année) : à compléter, pour les afficher.
- **Adresse e-mail** de contact : aucune sur le site actuel. À compléter.
- **Crédits** : peintures et portrait, Corinne Fonteneau. Les images marquées « Illustration générée » ont été créées par intelligence artificielle : garder cette mention.

Retiré ou remplacé par une phrase d'attente, faute d'information sur le site actuel :
- **Tarifs du coaching et du Reiki** : « Tarif sur demande » (accueil, Échangeons, Énergie, Coaching). Les autres tarifs viennent de la page SensFlow de Corinne (80 € puis 70 € ; 70 €), à confirmer.
- **Horaires** : « Sur rendez-vous » (Échangeons, pied de page). Aucun statut « ouvert maintenant ».
- **Durée et nombre de séances de coaching**, contenu détaillé des deux parcours : non affichés.
- **Titres, formats et prix de trois toiles** sans légende sur le site actuel (mandala bleu de l'accueil, lotus rouge) : affichées avec « Acrylique sur toile ».
- **Photos du cabinet et des ateliers** : aucune sur le site actuel ; des illustrations générées les remplacent. De vraies photos seraient préférables.
- **Dates des témoignages** : non affichées. Les six témoignages sont repris du site (extraits fidèles, retapés depuis les images).

Incohérences relevées sur le site actuel : aucun tarif sur le site alors qu'ils figurent sur SensFlow ; anciennes pages encore en ligne (guidance intuitive, aura, ateliers 2023 avec une adresse Gmail) ; témoignages publiés en images, sans texte.

Vocabulaire : aucune promesse de résultat ; les mentions « ne remplace pas un accompagnement médical ou psychologique » et « effets non prouvés scientifiquement » viennent de la FAQ de Corinne et sont bien visibles sur la page Énergie et libérations.

## À la mise en ligne définitive

Retirer : `noindex` (balise robots de `source/gabarits/commun.mjs` et en-tête `X-Robots-Tag` de `vercel.json`), le formulaire de rendez-vous simulé et l'outil « Faites un point » simulé (à brancher sur un vrai envoi), la mention « Maquette de démonstration » du pied de page, les « à compléter » du pied de page, les phrases d'attente ci-dessus.
Garder : la mention « Illustration générée » sur chaque image créée par intelligence artificielle.

## Parcours à connaître

- Les boutons « Réserver », « Demander une séance de Reiki », « Une toile vous parle ? » et l'outil « Faites un point » de la page Coaching ouvrent le formulaire de rendez-vous avec le choix déjà fait (paramètres `demande`, `format`, `situation` dans l'adresse).
- Le lien « Réserver en ligne sur SensFlow » mène à la vraie réservation de Corinne, dans un nouvel onglet.

## Fichiers d'exemple du socle restés dans le projet

`assets/images/ouverture-*.webp` et `assets/images/grok/salle-*.webp` (images d'exemple du socle, non utilisées) n'ont pas pu être supprimés depuis la conversation. Ils peuvent être supprimés sans risque.
