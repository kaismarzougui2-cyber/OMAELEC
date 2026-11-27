# Logos des références

La bande « Ils nous ont fait confiance », juste sous la première section du site,
affiche pour l'instant les noms en toutes lettres.

## Comment afficher les vrais logos

Déposez les fichiers dans ce dossier, **avec exactement ces noms** :

| Fichier attendu            | Référence affichée   |
| -------------------------- | -------------------- |
| `sncf.png`                 | SNCF                 |
| `gendarmerie.png`          | Gendarmerie          |
| `assemblee-nationale.png`  | Assemblée nationale  |
| `ministeres.png`           | Ministères           |
| `services-etat.png`        | Services de l'État   |
| `groupe-balas.png`         | Groupe Balas         |

Dès qu'un fichier est présent, le logo remplace automatiquement le nom.
Tant qu'il est absent, le nom reste affiché : la bande n'est jamais cassée.

Pour utiliser un autre format (`.svg`, `.jpg`, `.webp`), modifiez l'extension
dans l'attribut `src` correspondant, dans `index.html`.

## Format conseillé

- **PNG à fond transparent** (ou SVG), logo détouré, sans cadre ni marge.
- Hauteur d'au moins **110 px** (les logos sont affichés sur 54 px de haut,
  le double pour les écrans Retina).
- Les logos sont automatiquement passés en **noir et blanc**, et reprennent
  leurs couleurs au survol de la souris. Inutile de les préparer en gris.

## Avant de les mettre en ligne

Ces logos sont des marques déposées, et les emblèmes de l'État
(Gendarmerie nationale, Assemblée nationale, ministères) ont un usage
réglementé. Afficher le logo d'un donneur d'ordre sur un site commercial
suppose son accord : c'est au client de confirmer qu'il dispose de cette
autorisation pour chaque référence.

Sans autorisation, la mention du nom en toutes lettres — ce que fait la page
aujourd'hui — reste la solution la plus sûre.
