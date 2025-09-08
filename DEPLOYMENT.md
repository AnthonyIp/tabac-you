# 🚀 Guide de Déploiement Netlify

## 📋 Prérequis

- Compte Netlify (gratuit)
- Repository Git (GitHub, GitLab, ou Bitbucket)
- Node.js 18+ installé localement

## 🎯 Méthodes de Déploiement

### 1. Déploiement Automatique (Recommandé)

#### Étape 1 : Préparer le Repository
```bash
# Initialiser Git si pas déjà fait
git init
git add .
git commit -m "Initial commit - Site Les Allumettes"

# Ajouter le remote
git remote add origin https://github.com/votre-username/tabac-les-allumettes.git
git push -u origin main
```

#### Étape 2 : Connecter à Netlify
1. Aller sur [netlify.com](https://netlify.com)
2. Cliquer sur "New site from Git"
3. Choisir votre provider Git
4. Sélectionner le repository

#### Étape 3 : Configuration
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: `18`

#### Étape 4 : Variables d'environnement (optionnel)
Si vous avez des variables d'environnement, les ajouter dans :
- Site settings → Environment variables

### 2. Déploiement Manuel

#### Étape 1 : Build Local
```bash
# Installer les dépendances
npm install

# Build de production
npm run build
```

#### Étape 2 : Upload sur Netlify
1. Aller sur [netlify.com](https://netlify.com)
2. Glisser-déposer le dossier `dist` dans la zone de déploiement
3. Le site sera disponible immédiatement

### 3. Déploiement via CLI

#### Installation Netlify CLI
```bash
npm install -g netlify-cli
```

#### Login et Déploiement
```bash
# Login
netlify login

# Déploiement preview
npm run deploy:preview

# Déploiement production
npm run deploy
```

## ⚙️ Configuration Netlify

### Fichiers de Configuration

Le projet inclut déjà :
- `netlify.toml` : Configuration principale
- `_redirects` : Redirections SPA
- `public/_headers` : Headers de sécurité

### Headers de Sécurité

```toml
# Sécurité
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin

# Cache
/assets/*: Cache-Control: public, max-age=31536000, immutable
*.jpg: Cache-Control: public, max-age=31536000
```

### Redirections SPA

```toml
# Toutes les routes vers index.html
/*    /index.html   200
```

## 🔧 Optimisations Incluses

### Performance
- **Code splitting** : Chunks optimisés
- **Tree shaking** : Code mort supprimé
- **Minification** : CSS et JS minifiés
- **Compression** : Gzip/Brotli automatique

### SEO
- **Meta tags** dynamiques
- **Sitemap.xml** automatique
- **Robots.txt** configuré
- **Données structurées** JSON-LD

### Sécurité
- **Headers de sécurité** configurés
- **HTTPS** forcé
- **CSP** (Content Security Policy)

## 📊 Monitoring

### Analytics Netlify
1. Aller dans Site settings → Analytics
2. Activer les analytics gratuits
3. Voir les statistiques de visite

### Performance
- **Core Web Vitals** : Surveillés automatiquement
- **Lighthouse** : Score de performance
- **GTmetrix** : Analyse détaillée

## 🚨 Dépannage

### Build Failed
```bash
# Vérifier les logs
netlify logs

# Build local pour tester
npm run build
```

### 404 sur les routes
- Vérifier que `_redirects` est présent
- Redéployer si nécessaire

### Images ne se chargent pas
- Vérifier les chemins dans `public/images/`
- S'assurer que les images sont dans le build

## 🔄 Mises à Jour

### Déploiement automatique
- Push sur `main` → Déploiement automatique
- Pull requests → Preview automatique

### Déploiement manuel
```bash
# Mise à jour
git add .
git commit -m "Update: description des changements"
git push

# Ou déploiement direct
npm run deploy
```

## 📞 Support

- **Documentation Netlify** : [docs.netlify.com](https://docs.netlify.com)
- **Support Netlify** : [netlify.com/support](https://netlify.com/support)
- **Community** : [community.netlify.com](https://community.netlify.com)

---

**Site prêt pour le déploiement ! 🎉**
