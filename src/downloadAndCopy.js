/*
3 downloadAndCopy.js:
Ecrivez un programme qui télécharge une page d'un site internet puis la copie dans un fichier. 
L'url du site ainsi que le nom du ficher où sera copié la page téléchargée devront être passés en arguments de la ligne de commande.
*/
import axios from 'axios'
import fs from 'fs/promises'

let url = await axios.get(process.argv[3])
let copyHtml = await fs.writeFile(process.argv[2], url.data)

console.log(`Le contenu html de ${url} a été copié vers ${copyHtml}`)

/* README: 
Pour utiliser le script:
Taper en ligne de commande :"node downloadAndCopy.js 'nom du fichier créé' 'url du site dont vous voulez récupérer le code'"*/
