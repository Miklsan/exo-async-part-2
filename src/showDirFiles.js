/*
4 showDirFiles.js:
Ecrire un programme qui affiche le contenu de tous les fichiers d'un repertoire.
 Le repertoire devra être passé en argument de la ligne de commande. Parcourir la documentation de l'api fs de node.js afin de decouvrir une fonction asynchrone qui puisse vous lister tous les fichiers contenus dans un repertoire.
*/
import fs from 'fs/promises'

fs.readFile('../node_modules', (err, data) => {
    if (err) throw err
    console.log(data)
})
