# Rapport d’audit

Projet : `armonia-maquette` · 17/11/2026 19:19:29 · 16 min · 6 page(s) · audit standard

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261117-180341-standard` · version ?v=1
- Échecs : **0**
- À regarder : **9**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (8), films de transition (8), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (13), liens vers la page en cours (5), changements de hauteur (4), fluidité (8), défilement selon l’appareil (5), mouvement (8), effets du plan (4), souris immobile (6), vitesse (5), captures (1)

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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261117-131446-rapide | rapide | toutes | toutes | 16 | 12 | 1 | échecs |
| 20261117-132121-rapide-cible-partiel | rapide | /,/art-therapie,/coaching-de-transition,/energie-et-liberations,/echangeons | mesures, parcours, ecran, mouvement | 22 | 4 | 0 | échecs |
| 20261117-172601-standard | standard | toutes | toutes | 10 | 10 | 1 | échecs |
| 20261117-174401-complet-partiel | complet | toutes | mesures, ecran | 4 | 2 | 0 | échecs |
| 20261117-175130-standard-cible-partiel | standard | /,/404,/art-therapie,/coaching-de-transition,/energie-et-liberations | mesures | 2 | 2 | 0 | échecs |
| **20261117-180341-standard** (celle-ci) | standard | toutes | toutes | 0 | 9 | 1 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `echangeons.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (2)

- **section sans visuel** — `/art-therapie` — section#formats « LES FORMATS Seul ou à plusieurs En individuel Un p » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/energie-et-liberations` — section#choisir « ÉCHANGEONS SUR VOS BESOINS Comment choisir ? L'art » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/art-therapie` — à 80 ms (différence 31 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### fluidité (1)

- **fluidité** — `/energie-et-liberations` — 6 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

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
- Journal v1 : 5 étape(s) notée(s), 39 min de travail pour 115 min de budget, 269 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /art-therapie, /coaching-de-transition, /energie-et-liberations.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2796 ms depuis le premier octet
- Ouverture /art-therapie (1366×768) : 2563 ms depuis le premier octet
- Ouverture /coaching-de-transition (1366×768) : 2723 ms depuis le premier octet
- Ouverture /energie-et-liberations (1366×768) : 2588 ms depuis le premier octet
- Ouverture / (390×844) : 2788 ms depuis le premier octet
- Ouverture /art-therapie (390×844) : 2595 ms depuis le premier octet
- Ouverture /coaching-de-transition (390×844) : 2745 ms depuis le premier octet
- Ouverture /energie-et-liberations (390×844) : 2585 ms depuis le premier octet
- bords de l’écran /art-therapie 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 442 images d’intro, 29 de voile et 113 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /art-therapie : aucune section épinglée ou plein écran.
- Tient dans l'écran /coaching-de-transition : aucune section épinglée ou plein écran.
- Tient dans l'écran /echangeons : aucune section épinglée ou plein écran.
- Tient dans l'écran /energie-et-liberations : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 439, tâche la plus longue 0 ms
- Fluidité /art-therapie 1366×768 (molette) : 0 % d'images lentes sur 278, tâche la plus longue 0 ms
- Fluidité /coaching-de-transition 1366×768 (molette) : 0 % d'images lentes sur 287, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1415, tâche la plus longue 0 ms
- Fluidité /art-therapie 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /coaching-de-transition 390×844 (doigt) : 0 % d'images lentes sur 1338, tâche la plus longue 0 ms
- Fluidité /energie-et-liberations 390×844 (doigt) : 0 % d'images lentes sur 1410, tâche la plus longue 0 ms
- Vitesse / : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /art-therapie : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /coaching-de-transition : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /echangeons : 0.46 s de calcul au chargement (téléphone ralenti).
- Vitesse /energie-et-liberations : 0.37 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
