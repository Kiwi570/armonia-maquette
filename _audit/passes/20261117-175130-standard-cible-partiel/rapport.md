# Rapport d’audit

Projet : `armonia-maquette` · 17/11/2026 18:53:16 · 2 min · 5 page(s) · audit standard ciblé sur /,/404,/art-therapie,/coaching-de-transition,/energie-et-liberations (étapes : mesures)

## Résumé

- Statut : **2 échec(s)**
- Passe : `20261117-175130-standard-cible-partiel` · version ?v=1
- Échecs : **2**
- À regarder : **2**
- Non lancé : **0**
- Contrôles passés : mesures (55), balayage (4)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261117-131446-rapide | rapide | toutes | toutes | 16 | 12 | 1 | échecs |
| 20261117-132121-rapide-cible-partiel | rapide | /,/art-therapie,/coaching-de-transition,/energie-et-liberations,/echangeons | mesures, parcours, ecran, mouvement | 22 | 4 | 0 | échecs |
| 20261117-172601-standard | standard | toutes | toutes | 10 | 10 | 1 | échecs |
| 20261117-174401-complet-partiel | complet | toutes | mesures, ecran | 4 | 2 | 0 | échecs |
| **20261117-175130-standard-cible-partiel** (celle-ci) | standard | /,/404,/art-therapie,/coaching-de-transition,/energie-et-liberations | mesures | 2 | 2 | 0 | échecs |

## Échecs

### photo faible affichée en grand (2)

- **photo faible affichée en grand** — `/energie-et-liberations` — section#debut > figure.media.ouv-bandeau-media > picture > img « Un coussin de lin, une couverture roulée et des bo » — grok/energie-ouverture (4/5, faible, 84 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/energie-et-liberations` — section#debut > figure.media.ouv-bandeau-media > picture > img « Un coussin de lin, une couverture roulée et des bo » — grok/energie-ouverture (4/5, faible, 89 % de l'écran) : en vignette, ou une meilleure image _(1920×1080 normal)_

## À regarder

### section sans visuel (2)

- **section sans visuel** — `/art-therapie` — section#formats « LES FORMATS Seul ou à plusieurs En individuel Un p » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/energie-et-liberations` — section#choisir « ÉCHANGEONS SUR VOS BESOINS Comment choisir ? L'art » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

## Non lancé

Tout a été lancé.


## Repères

- Audit standard : étapes lourdes sur /, /art-therapie, /coaching-de-transition, /energie-et-liberations.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/energie-et-liberations --seulement=fichiers,mesures
```
