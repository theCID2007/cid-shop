# CID SHOP — site vitrine e-commerce responsive

## Contenu
- Accueil éditorial avec catégories et sélection de produits.
- Catalogue de 80 références de démonstration : 20 T-shirts, 20 hauts, 20 pantalons et 20 robes.
- Photos de mode chargées depuis Unsplash et descriptions de chaque modèle.
- Recherche, filtres, tri par prix, fiche article, choix de taille et panier persistant.
- Formulaire de commande et page de confirmation de demande.
- Sélecteur de 15 langues, mémorisé dans le navigateur.
- Pages contact et confidentialité.
- Mise en page adaptée aux téléphones, tablettes et ordinateurs.

## Lancer le site
Ouvre `index.html` dans un navigateur. Pour tester les pages avec un petit serveur local, ouvre le dossier dans VS Code et lance Live Server.

## Publier sur GitHub Pages
1. Décompresse l'archive.
2. Copie tous les fichiers du dossier dans le dépôt GitHub du site.
3. Vérifie que `index.html`, `style.css`, `app.js` et `products.js` sont à la racine du dépôt.
4. Envoie les modifications (`Commit changes` / `Push`).
5. Dans GitHub, ouvre **Settings → Pages**, puis vérifie que le site est publié depuis la branche voulue et le dossier `/ (root)`.
6. Attends la fin du déploiement puis actualise le site. Sur téléphone, essaie aussi en navigation privée ou vide le cache si l'ancienne version apparaît.

## Important avant une vraie mise en vente
- Les photos sont des images d'illustration hébergées par Unsplash. Les noms, descriptions et prix sont des exemples de catalogue : confirme les produits, tailles, stock et prix réels avant publication commerciale.
- Le panier et la demande de commande fonctionnent côté navigateur. Cette version ne prélève pas d'argent, ne déclenche pas de paiement MTN/Orange Money et n'envoie pas automatiquement d'e-mails.
- Pour accepter de vrais paiements, il faudra intégrer un prestataire de paiement agréé et un serveur sécurisé. Ne demande jamais aux clients de communiquer leur PIN Mobile Money sur le site.
- Le formulaire de contact ouvre le logiciel e-mail du visiteur ; configure une adresse de contact et un service d'envoi côté serveur pour une version de production.
- Les traductions de l'interface sont fournies pour 15 langues, mais les noms et descriptions du catalogue restent principalement en français. Une vraie boutique multilingue devrait disposer de traductions vérifiées pour chaque fiche produit.
- Les images et polices externes nécessitent une connexion Internet.
