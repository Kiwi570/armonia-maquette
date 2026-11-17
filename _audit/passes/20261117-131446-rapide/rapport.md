# Rapport d’audit

Projet : `armonia-maquette` · 17/11/2026 14:19:31 · 5 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison

## Résumé

- Statut : **16 échec(s)**
- Passe : `20261117-131446-rapide` · version ?v=1
- Échecs : **16**
- À regarder : **12**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (6), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (6), liens vers la page en cours (1), changements de hauteur (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (4), souris immobile (2), vitesse (1), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### image de partage (5)

- **image de partage** — `art-therapie.html` — fichier introuvable : /assets/partage/art-therapie-fr.jpg
- **image de partage** — `coaching-de-transition.html` — fichier introuvable : /assets/partage/coaching-fr.jpg
- **image de partage** — `echangeons.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `energie-et-liberations.html` — fichier introuvable : /assets/partage/energie-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg

### textes qui se chevauchent (9)

- **textes qui se chevauchent** — `/` — section#ce-qui-vous-amene > ul.reconnaitre-liste > li:nth-of-type(1) « Une transition de vie. » — avec section#ce-qui-vous-amene > ul.reconnaitre-liste > li:nth-of-type(2) « Une reconversion. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — section#ce-qui-vous-amene > ul.reconnaitre-liste > li:nth-of-type(2) « Une reconversion. » — avec section#ce-qui-vous-amene > ul.reconnaitre-liste > li:nth-of-type(3) « Une perte de sens ou de motivation. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — section#ce-qui-vous-amene > ul.reconnaitre-liste > li:nth-of-type(3) « Une perte de sens ou de motivation. » — avec section#ce-qui-vous-amene > ul.reconnaitre-liste > li:nth-of-type(4) « Du stress, de l'anxiété, un épuisement. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — section#ce-qui-vous-amene > ul.reconnaitre-liste > li:nth-of-type(4) « Du stress, de l'anxiété, un épuisement. » — avec section#ce-qui-vous-amene > ul.reconnaitre-liste > li:nth-of-type(5) « Des relations difficiles. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — section#ce-qui-vous-amene > ul.reconnaitre-liste > li:nth-of-type(5) « Des relations difficiles. » — avec section#ce-qui-vous-amene > ul.reconnaitre-liste > li:nth-of-type(6) « Apprendre à dire non, et à dire oui. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Mieux vous » — avec div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.ouv-ligne « comprendre, » _(844×390 normal)_
- **textes qui se chevauchent** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(1) > span.ouv-ligne « Mieux vous » — avec div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(3) > span.ouv-ligne « retrouver votre » _(844×390 normal)_
- **textes qui se chevauchent** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(2) > span.ouv-ligne « comprendre, » — avec div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(3) > span.ouv-ligne « retrouver votre » _(844×390 normal)_
- **textes qui se chevauchent** — `/` — div.hero-texte:nth-of-type(1) > h1.hero-titre > span.ligne-masque:nth-of-type(3) > span.ouv-ligne « retrouver votre » — avec h1.hero-titre > span.ligne-masque:nth-of-type(4) > span.ouv-ligne > em « équilibre » _(844×390 normal)_

### élément sans nom accessible (1)

- **élément sans nom accessible** — `/` — body#haut > header > div.entete-rangee > a.entete-logo _(1366×768 normal, 390×844 normal, 390×844 sansJs)_

### positions non recalculées après un changement de hauteur (1)

- **positions non recalculées après un changement de hauteur** — `/` — Faut-il savoir dessiner ou peindre ? — décalage de 33 px _(1366×768)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `echangeons.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 1 de donnees/site.json

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### texte de contenu sous 13 px (ordinateur) (5)

- **texte de contenu sous 13 px (ordinateur)** — `/` — article#chemin-equilibre > figure.media.chemin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — article#chemin-emploi > figure.media.chemin-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.approches-grille.fx-fini:nth-of-type(2) > article.approche:nth-of-type(1) > figure.media.approche-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.approches-grille.fx-fini:nth-of-type(2) > article.approche:nth-of-type(2) > figure.media.approche-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.approches-grille.fx-fini:nth-of-type(2) > article.approche:nth-of-type(3) > figure.media.approche-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### section sans visuel (1)

- **section sans visuel** — `/` — section#temoignages « TÉMOIGNAGES Ce sont elles et eux qui en parlent le » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 sansWebgl, 390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Audit rapide : étapes lourdes sur /.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2854 ms depuis le premier octet
- Ouverture / (390×844) : 2816 ms depuis le premier octet
- Bords de l’écran : 60 images d’intro, 6 de voile et 23 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 409, tâche la plus longue 74 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1383, tâche la plus longue 53 ms
- Vitesse / : 0.69 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,parcours
```
