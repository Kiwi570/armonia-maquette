# Rapport d’audit

Projet : `armonia-maquette` · 17/11/2026 20:39:29 · 21 min · 6 page(s) · audit complet

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261117-191822-complet` · version ?v=2
- Échecs : **1**
- À regarder : **12**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (13), liens vers la page en cours (5), changements de hauteur (5), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (4), souris immobile (6), vitesse (5), captures (1)

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

### effet qui dérive sous la souris immobile (1)

- **effet qui dérive sous la souris immobile** — `/` — [data-souris] incline — l’image change encore 5.3 % plus qu’au repos, 1,5 à 4,5 s après l’arrêt de la souris _(1366×768 souris)_

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

- **section sans visuel** — `/` — section#tarifs « TARIFS ET QUESTIONS Avant de venir Art-thérapie 80 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/art-therapie` — section#formats « LES FORMATS Seul ou à plusieurs En individuel Un p » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### typographie française (1)

- **typographie française** — `/` — section#corinne > div.corinne-texte:nth-of-type(2) > p.corinne-citation:nth-of-type(4) « « Il y a une personne avec son histoire, ses émoti » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_

### retour arrière : changement brusque (2)

- **retour arrière : changement brusque** — `/` — à 85 ms (différence 36 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 83 ms (différence 20 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/art-therapie` — à 85 ms (différence 31 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_

### fluidité (1)

- **fluidité** — `/energie-et-liberations` — 8 % d'images de plus de 50 ms _(1366×768 défilement à la molette, processeur ralenti 4 fois)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Journal v2 : 2 étape(s) notée(s), 24 min de travail pour 45 min de budget, 0 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2610 ms depuis le premier octet
- Ouverture /art-therapie (1366×768) : 2411 ms depuis le premier octet
- Ouverture /coaching-de-transition (1366×768) : 2572 ms depuis le premier octet
- Ouverture /echangeons (1366×768) : 2477 ms depuis le premier octet
- Ouverture /energie-et-liberations (1366×768) : 2420 ms depuis le premier octet
- Ouverture / (390×844) : 2610 ms depuis le premier octet
- Ouverture /art-therapie (390×844) : 2395 ms depuis le premier octet
- Ouverture /coaching-de-transition (390×844) : 2582 ms depuis le premier octet
- film de l'ouverture /coaching-de-transition 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /echangeons (390×844) : 2448 ms depuis le premier octet
- Ouverture /energie-et-liberations (390×844) : 2394 ms depuis le premier octet
- Bords de l’écran : 495 images d’intro, 33 de voile et 135 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /art-therapie : aucune section épinglée ou plein écran.
- Tient dans l'écran /coaching-de-transition : aucune section épinglée ou plein écran.
- Tient dans l'écran /echangeons : aucune section épinglée ou plein écran.
- Tient dans l'écran /energie-et-liberations : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 431, tâche la plus longue 0 ms
- Fluidité /art-therapie 1366×768 (molette) : 0 % d'images lentes sur 279, tâche la plus longue 0 ms
- Fluidité /coaching-de-transition 1366×768 (molette) : 0 % d'images lentes sur 290, tâche la plus longue 0 ms
- Fluidité /echangeons 1366×768 (molette) : 0 % d'images lentes sur 229, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1411, tâche la plus longue 0 ms
- Fluidité /art-therapie 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /coaching-de-transition 390×844 (doigt) : 0 % d'images lentes sur 1337, tâche la plus longue 0 ms
- Fluidité /echangeons 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /energie-et-liberations 390×844 (doigt) : 0 % d'images lentes sur 1461, tâche la plus longue 0 ms
- Vitesse / : 0.45 s de calcul au chargement (téléphone ralenti).
- Vitesse /art-therapie : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /coaching-de-transition : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /echangeons : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /energie-et-liberations : 0.32 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/ --seulement=fichiers,mouvement
```
