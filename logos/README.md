# Logos des références

La bande « Ils nous ont fait confiance », juste sous la première section du site,
affiche le logo quand le fichier est présent, et le nom en toutes lettres sinon.

## État actuel

| Fichier                    | Référence affichée   | État                      |
| -------------------------- | -------------------- | ------------------------- |
| `sncf.png`                 | SNCF                 | ✅ en place                |
| `gendarmerie.png`          | Gendarmerie          | nom affiché, logo attendu |
| `assemblee-nationale.png`  | Assemblée nationale  | nom affiché, logo attendu |
| `ministeres.png`           | Ministères           | nom affiché, logo attendu |
| `services-etat.png`        | Services de l'État   | nom affiché, logo attendu |
| `groupe-balas.png`         | Groupe Balas         | nom affiché, logo attendu |

Déposez un fichier avec le nom exact de la première colonne : le logo remplace
automatiquement le nom, sans modification du code. Tant qu'il est absent, le nom
reste affiché et la bande n'est jamais cassée.

Pour un autre format (`.svg`, `.jpg`, `.webp`), modifiez l'extension dans
l'attribut `src` correspondant, dans `index.html`.

## Format conseillé

- **PNG à fond transparent** (ou SVG), logo détouré, sans cadre ni marge.
- Hauteur d'au moins **110 px** (affichage sur 54 px de haut, le double pour
  les écrans Retina). `sncf.png` fait 480 × 252 px, c'est la bonne échelle.
- Les logos passent automatiquement en noir et blanc et reprennent leurs
  couleurs au survol. Inutile de les préparer en gris.

## Logo non intégré : le bloc-marque de l'État

Le fichier « Marianne » (bandeau bleu-blanc-rouge au profil de Marianne) fourni
le 27/11 n'a volontairement **pas** été ajouté au site.

Ce bloc-marque est l'emblème officiel de la République française. Son usage est
réservé aux services de l'État et aux organismes expressément autorisés par le
Service d'information du Gouvernement. L'afficher sur le site commercial d'une
entreprise privée laisse entendre un lien officiel ou un agrément qui n'existe
pas, ce qui expose l'entreprise.

Les références « Services de l'État » et « Ministères » restent donc affichées
en toutes lettres : c'est exact, et sans risque.

## Avant de mettre les autres en ligne

Ces logos sont des marques déposées, et les emblèmes de la Gendarmerie nationale
et de l'Assemblée nationale sont eux aussi d'usage réglementé. Afficher le logo
d'un donneur d'ordre sur un site commercial suppose son accord : c'est au client
de confirmer qu'il en dispose pour chaque référence.
