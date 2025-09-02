# Configuration du Formulaire de Contact

## Variables d'environnement requises

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
# Google Sheets Configuration
NEXT_PUBLIC_GOOGLE_SHEET_ID=your-google-sheet-id-here

# Google Service Account (pour le backend)
GOOGLE_CLIENT_EMAIL=your-service-account-email@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
```

## Configuration Google Sheets

1. **Créer un projet Google Cloud** :
   - Allez sur [Google Cloud Console](https://console.cloud.google.com/)
   - Créez un nouveau projet ou sélectionnez un projet existant

2. **Activer l'API Google Sheets** :
   - Dans la console Google Cloud, allez dans "APIs & Services" > "Library"
   - Recherchez "Google Sheets API" et activez-la

3. **Créer un compte de service** :
   - Allez dans "APIs & Services" > "Credentials"
   - Cliquez sur "Create Credentials" > "Service Account"
   - Donnez un nom à votre compte de service
   - Téléchargez le fichier JSON contenant les credentials

4. **Configurer les variables d'environnement** :
   - `GOOGLE_CLIENT_EMAIL` : L'email du compte de service (ex: `my-service@project.iam.gserviceaccount.com`)
   - `GOOGLE_PRIVATE_KEY` : La clé privée du fichier JSON (avec les `\n` pour les retours à la ligne)

5. **Créer ou partager un Google Sheet** :
   - Créez un nouveau Google Sheet
   - Partagez-le avec l'email du compte de service avec les permissions "Editor"
   - Copiez l'ID du sheet depuis l'URL (la partie entre `/d/` et `/edit`)
   - Ajoutez cet ID dans `NEXT_PUBLIC_GOOGLE_SHEET_ID`

## Structure du Google Sheet

Le formulaire ajoutera automatiquement les colonnes suivantes :
- Nom
- Message
- Contact (email)
- Confirmation de présence
- Date et heure

## Test du formulaire

1. Démarrez le serveur de développement : `pnpm dev`
2. Allez sur la page de contact
3. Remplissez le formulaire et soumettez-le
4. Vérifiez que les données apparaissent dans votre Google Sheet

## Dépannage

- **Erreur "Spreadsheet not found"** : Vérifiez que l'ID du sheet est correct et que le compte de service a accès
- **Erreur "Invalid private key"** : Vérifiez que la clé privée est correctement formatée avec les `\n`
- **Erreur CORS** : La route API inclut déjà les headers CORS nécessaires
