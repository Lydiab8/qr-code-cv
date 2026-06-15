# QR-Code CV 

Solution d'hébergement et de consultation de CV au format PDF, optimisée pour l'expérience utilisateur mobile via un point d'accès QR Code.
Le projet est structuré de manière minimaliste et modulaire pour séparer la structure, le design et la logique comportementale :

* **`index.html`** : Contient le squelette de l'application. Il définit la structure de la page d'accueil, le bouton de redirection vers le PDF.
* **`style.css`** : Gère la mise en page *responsive* (adaptée aux mobiles), le positionnement des éléments au centre de l'écran (Flexbox) et l'animation d'affichage du pop-up.
* **`script.js`** : Contient la logique JavaScript. Il écoute l'action de clic sur le bouton d'ouverture .
* **`assets/cv.pdf`** : Le fichier source du CV au format PDF standard, stocké dans le dépôt pour être servi par GitHub Pages.
