# Rapport d’audit

Projet : `armonia-maquette` · 17/11/2026 18:49:54 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261117-174401-complet-partiel` · version ?v=1
- Échecs : **4**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261117-131446-rapide | rapide | toutes | toutes | 16 | 12 | 1 | échecs |
| 20261117-132121-rapide-cible-partiel | rapide | /,/art-therapie,/coaching-de-transition,/energie-et-liberations,/echangeons | mesures, parcours, ecran, mouvement | 22 | 4 | 0 | échecs |
| 20261117-172601-standard | standard | toutes | toutes | 10 | 10 | 1 | échecs |
| **20261117-174401-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 4 | 2 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info.ouv-fondu:nth-of-type(4) « Au cabinet à Nuaillé ou à distance · sur rendez-vo » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/coaching-de-transition` — section#debut > div.ouv-arche-texte:nth-of-type(1) > p.hero-info.ouv-fondu:nth-of-type(4) « En individuel ou en collectif · en présentiel ou à » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

### photo faible affichée en grand (2)

- **photo faible affichée en grand** — `/energie-et-liberations` — section#debut > figure.media.ouv-bandeau-media > picture > img « Un coussin de lin, une couverture roulée et des bo » — grok/energie-ouverture (4/5, faible, 84 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/energie-et-liberations` — section#debut > figure.media.ouv-bandeau-media > picture > img « Un coussin de lin, une couverture roulée et des bo » — grok/energie-ouverture (4/5, faible, 89 % de l'écran) : en vignette, ou une meilleure image _(1920×1080 normal)_

## À regarder

### section sans visuel (2)

- **section sans visuel** — `/art-therapie` — section#formats « LES FORMATS Seul ou à plusieurs En individuel Un p » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/energie-et-liberations` — section#choisir « ÉCHANGEONS SUR VOS BESOINS Comment choisir ? L'art » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
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
node _audit/audit.mjs --complet --pages=/,/coaching-de-transition,/energie-et-liberations --seulement=fichiers,mesures
```
