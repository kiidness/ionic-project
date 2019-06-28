# LeBonKoin
LeBonKoin est une application réalisé en Ionic 4.12 dans le cadre d'un projet en License Professionnelle en développement mobile.
Cette application a été développée par **Aurélien Douard** et **Eliott Chaput**.


## Résumé
Il s'agit d'une application permettant de poster des articles avec un titre, un prix, une description et une photo. Il est possible de naviguer parmis tous les articles ou uniquement mes articles postés. Une fois un article posté, il est modifiable et supprimable.
Pour ajouter ou modifier la photo d'un article, il suffit de sélectionner l'article et de cliquer sur le bouton prévu à cet effet. La caméra de votre téléphone sera ainsi ouvert.

## Ce qui a été implémenté
- Une base de donnée firebase contenant les articles et les comptes
- Un système d'authentification (firebase/auth)
- Une navigation sur tous les articles ainsi que sur les articles publiés
- Un système d'ajout/de lecture/de modification/de suppression d'articles (CRUD)
- La prise de photo des articles (stockées en base 64 sur firebase et prises via le plugin Camera de Cordova).
- L'envoi de mail au créateur de l'article (ouverture de l'application de mails du téléphone via le plugin EmailComposer de Cordova).

