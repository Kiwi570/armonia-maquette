# Rapport d’audit

Projet : `armonia-maquette` · 17/11/2026 14:28:37 · 7 min · 5 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/art-therapie,/coaching-de-transition,/energie-et-liberations,/echangeons (étapes : mesures, parcours, ecran, mouvement)

## Résumé

- Statut : **22 échec(s)**
- Passe : `20261117-132121-rapide-cible-partiel` · version ?v=1
- Échecs : **22**
- À regarder : **4**
- Non lancé : **0**
- Contrôles passés : mesures (30), intro accélérable et passable (7), menu (1), clavier (5), liens et boutons (5), liens profonds (13), liens vers la page en cours (5), changements de hauteur (5), mouvement (10), effets du plan (4), souris immobile (7)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261117-131446-rapide | rapide | toutes | toutes | 16 | 12 | 1 | échecs |
| **20261117-132121-rapide-cible-partiel** (celle-ci) | rapide | /,/art-therapie,/coaching-de-transition,/energie-et-liberations,/echangeons | mesures, parcours, ecran, mouvement | 22 | 4 | 0 | échecs |

## Échecs

### contraste insuffisant (8)

- **contraste insuffisant** — `/art-therapie` — div > ol.mediations-liste.fx-fini > li:nth-of-type(1) > span.num « 01 » — 4.34:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/art-therapie` — div > ol.mediations-liste.fx-fini > li:nth-of-type(2) > span.num « 02 » — 4.34:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/art-therapie` — div > ol.mediations-liste.fx-fini > li:nth-of-type(3) > span.num « 03 » — 4.34:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/art-therapie` — div > ol.mediations-liste.fx-fini > li:nth-of-type(4) > span.num « 04 » — 4.34:1 (minimum 4.5:1) _(390×844 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/art-therapie` — div > ol.mediations-liste > li:nth-of-type(1) > span.num « 01 » — 4.34:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/art-therapie` — div > ol.mediations-liste > li:nth-of-type(2) > span.num « 02 » — 4.34:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/art-therapie` — div > ol.mediations-liste > li:nth-of-type(3) > span.num « 03 » — 4.34:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_
- **contraste insuffisant** — `/art-therapie` — div > ol.mediations-liste > li:nth-of-type(4) > span.num « 04 » — 4.34:1 (minimum 4.5:1) _(390×844 sansJs, 320×568 sansJs)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/art-therapie` — li:nth-child(1) > .num[aria-hidden="true"] ; li:nth-child(2) > .num[aria-hidden="true"] ; li:nth-child(3) > .num[aria-hidden="true"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/art-therapie` — section#debut > div.ouv-plein-texte > p.hero-actions.ouv-fondu:nth-of-type(3) > a.bouton « Réserver une séance » _(320×568 sansJs)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/art-therapie` — section#debut > div.ouv-plein-texte > p.hero-actions.ouv-fondu:nth-of-type(3) > span.hero-info « Première séance : 80 € · 1 h 30 à 1 h 45 » _(320×568 sansJs)_

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/echangeons` — section#cabinet > figure.carte > span.carte-nom.carte-nom--cholet:nth-of-type(1) « Cholet » — avec section#cabinet > figure.carte > figcaption « Carte schématique, sans échelle. » _(390×844 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **textes qui se chevauchent** — `/echangeons` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Vos coordonnées » — avec div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(4) > span.fpe__num:nth-of-type(1) « 4 » _(844×390 normal)_

### texte coupé (3)

- **texte coupé** — `/echangeons` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere.est-actif:nth-of-type(1) > span.fpe__nom:nth-of-type(2) « Votre demande » — le contenu dépasse de son cadre _(844×390 normal)_
- **texte coupé** — `/echangeons` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Vos coordonnées » — le contenu dépasse de son cadre _(844×390 normal)_
- **texte coupé** — `/echangeons` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(4) > span.fpe__nom:nth-of-type(2) « Récapitulatif » — coupé par section#rendez-vous « RENDEZ-VOUS Préparez votre rendez-vous Quatre étap » _(844×390 normal)_

### élément recouvert (6)

- **élément recouvert** — `/echangeons` — fieldset.fpe__etape:nth-of-type(1) > div.fpe__groupe.fpe__cartes > label.fpe__carte:nth-of-type(1) > span.fpe__carte-texte:nth-of-type(2) « 80 € la première séance, puis 70 € » — par fieldset.fpe__etape:nth-of-type(1) > div.fpe__groupe.fpe__cartes > label.fpe__carte:nth-of-type(1) > input _(390×844 normal, 1366×768 normal)_
- **élément recouvert** — `/echangeons` — fieldset.fpe__etape:nth-of-type(1) > div.fpe__groupe.fpe__cartes > label.fpe__carte:nth-of-type(2) > span.fpe__carte-texte:nth-of-type(2) « Tarif sur demande » — par fieldset.fpe__etape:nth-of-type(1) > div.fpe__groupe.fpe__cartes > label.fpe__carte:nth-of-type(2) > input _(390×844 normal, 1366×768 normal)_
- **élément recouvert** — `/echangeons` — fieldset.fpe__etape:nth-of-type(1) > div.fpe__groupe.fpe__cartes > label.fpe__carte:nth-of-type(3) > span.fpe__carte-texte:nth-of-type(2) « 70 € la séance » — par fieldset.fpe__etape:nth-of-type(1) > div.fpe__groupe.fpe__cartes > label.fpe__carte:nth-of-type(3) > input _(390×844 normal, 1366×768 normal)_
- **élément recouvert** — `/echangeons` — fieldset.fpe__etape:nth-of-type(1) > div.fpe__groupe.fpe__cartes > label.fpe__carte:nth-of-type(4) > span.fpe__carte-texte:nth-of-type(2) « Tarif sur demande » — par fieldset.fpe__etape:nth-of-type(1) > div.fpe__groupe.fpe__cartes > label.fpe__carte:nth-of-type(4) > input _(390×844 normal, 1366×768 normal)_
- **élément recouvert** — `/echangeons` — fieldset.fpe__etape:nth-of-type(1) > div.fpe__groupe.fpe__cartes > label.fpe__carte:nth-of-type(5) > span.fpe__carte-texte:nth-of-type(2) « Un rendez-vous découverte pour en parler » — par fieldset.fpe__etape:nth-of-type(1) > div.fpe__groupe.fpe__cartes > label.fpe__carte:nth-of-type(5) > input _(390×844 normal, 1366×768 normal)_
- **élément recouvert** — `/echangeons` — fieldset.fpe__etape:nth-of-type(1) > div.fpe__groupe.fpe__cartes > label.fpe__carte:nth-of-type(6) > span.fpe__carte-texte:nth-of-type(2) « Une question sur une toile de Corinne » — par fieldset.fpe__etape:nth-of-type(1) > div.fpe__groupe.fpe__cartes > label.fpe__carte:nth-of-type(6) > input _(390×844 normal, 1366×768 normal)_

## À regarder

### section sans visuel (2)

- **section sans visuel** — `/art-therapie` — section#formats « LES FORMATS Seul ou à plusieurs En individuel Un p » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/energie-et-liberations` — section#choisir « ÉCHANGEONS SUR VOS BESOINS Comment choisir ? L'art » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### texte de contenu sous 13 px (ordinateur) (2)

- **texte de contenu sous 13 px (ordinateur)** — `/echangeons` — div.fpe__carton:nth-of-type(2) > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · VOTRE DEMANDE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/echangeons` — section#cabinet > figure.carte > figcaption « Carte schématique, sans échelle. » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

## Non lancé

Tout a été lancé.


## Repères

- Audit rapide : étapes lourdes sur /, /art-therapie, /coaching-de-transition, /echangeons, /energie-et-liberations.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /art-therapie : aucune section épinglée ou plein écran.
- Tient dans l'écran /coaching-de-transition : aucune section épinglée ou plein écran.
- Tient dans l'écran /echangeons : aucune section épinglée ou plein écran.
- Tient dans l'écran /energie-et-liberations : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --pages=/,/art-therapie,/echangeons --seulement=fichiers,mesures
```
