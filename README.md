# Tabac Presse FDJ Les Allumettes

Site web moderne et responsive pour le Tabac Presse FDJ Les Allumettes à Vert-le-Petit (91710).

## 🌟 Fonctionnalités

- **Design moderne** avec thème Monstera (vert naturel)
- **Mode sombre/clair** avec toggle adaptatif
- **Responsive** : parfait sur mobile et desktop
- **SEO optimisé** : meta tags, données structurées, sitemap
- **Performance** : chargement rapide et optimisé
- **Accessibilité** : conforme aux standards WCAG
- **Carte interactive** : OpenStreetMap avec Leaflet
- **Actualités en modales** : Système de modales pour les news
- **Avis clients** : Intégration Google Reviews anonymisées
- **Réseaux sociaux** : Liens Instagram et Google My Business

## 🚀 Déploiement sur Netlify

### ✅ Site déployé et en ligne

**URL du site :** [https://les-allumettes.netlify.app](https://les-allumettes.netlify.app)

### Configuration Netlify

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** `18`
- **Déploiement automatique** : Connecté au repository GitHub
- **Redirections** : Configurées dans `public/_redirects`
- **Headers** : Optimisés dans `public/_headers`

### Déploiement automatique

Le site se déploie automatiquement à chaque push sur la branche `main` grâce à l'intégration Netlify-GitHub.

### Optimisations Netlify

- **CDN global** : Distribution rapide dans le monde entier
- **HTTPS automatique** : Certificat SSL Let's Encrypt
- **Compression Gzip/Brotli** : Réduction de 70% de la taille des fichiers
- **Cache intelligent** : Mise en cache optimisée des assets statiques
- **Redirections** : Gestion des redirections 301/302
- **Headers de sécurité** : Configuration sécurisée des en-têtes HTTP

## 📁 Structure du Projet

```
src/
├── components/          # Composants React
│   ├── ui/             # Composants UI (shadcn/ui) - 9 composants optimisés
│   ├── Header.tsx      # En-tête avec navigation adaptative
│   ├── Hero.tsx        # Section principale avec CTA
│   ├── Services.tsx    # Services proposés (FDJ, Presse, Tabac)
│   ├── News.tsx        # Actualités avec système de modales
│   ├── NewsModal.tsx   # Modales pour les actualités détaillées
│   ├── Gallery.tsx     # Galerie photos interactive
│   ├── Reviews.tsx     # Avis clients Google Reviews
│   ├── AccessMap.tsx   # Carte et accès avec horaires
│   ├── LeafletMap.tsx  # Carte interactive OpenStreetMap
│   ├── Footer.tsx      # Pied de page avec liens sociaux
│   ├── LegalModals.tsx # Mentions légales et confidentialité
│   └── ThemeToggle.tsx # Toggle thème adaptatif
├── hooks/              # Hooks personnalisés
│   ├── use-theme.ts    # Gestion des thèmes
│   └── use-mobile.tsx  # Détection mobile
├── lib/                # Utilitaires et types
│   ├── content.ts      # Types TypeScript
│   └── utils.ts        # Fonctions utilitaires
├── pages/              # Pages de l'application
│   ├── Index.tsx       # Page principale
│   └── NotFound.tsx    # Page 404
└── index.css           # Styles globaux et thème Monstera
```

## 🛠️ Technologies

- **React 18** + **TypeScript**
- **Vite** (build tool optimisé)
- **Tailwind CSS** (styling avec thème personnalisé)
- **Framer Motion** (animations fluides)
- **shadcn/ui** (composants UI optimisés - 9 composants)
- **React Router** (routing avec futures flags)
- **React Helmet** (SEO dynamique)
- **Leaflet** (cartes interactives)
- **date-fns** (formatage des dates)
- **Lucide React** (icônes modernes)

## 📱 Fonctionnalités SEO

- **Meta tags** optimisés et dynamiques
- **Données structurées** JSON-LD (LocalBusiness)
- **Sitemap.xml** automatique
- **Robots.txt** configuré
- **Open Graph** pour les réseaux sociaux
- **Twitter Cards** optimisées
- **Images optimisées** avec alt text
- **Attributions OSM** conformes
- **Performance** : Core Web Vitals optimisés

## 🎨 Thème Monstera

- **Couleurs naturelles** inspirées de la plante Monstera
- **Mode sombre par défaut** avec toggle clair
- **Navigation adaptative** : couleurs selon la position
- **Gradients subtils** et élégants
- **Animations fluides** et modernes
- **Design cohérent** : header, hero, sections harmonisés

## 📞 Contact & Réseaux

**Tabac Presse FDJ Les Allumettes**
- 📍 4 Rue du Général Leclerc, 91710 Vert-le-Petit
- 📞 01 64 93 73 98
- 📧 contact@lesallumettes-vert.fr
- 🌐 [Site web](https://les-allumettes.netlify.app)
- 📸 [Instagram](https://www.instagram.com/lesallumettes.vertlepetit/)
- 🗺️ [Google My Business](https://www.google.com/search?q=les+allumettes+vert+le+petit)

## 🚀 Démarrage rapide

```bash
# Installation
npm install

# Développement
npm run dev

# Build production
npm run build

# Preview build
npm run preview
```

## 📊 Performance

- **Bundle optimisé** : 357KB (gzippé: 104KB)
- **Chargement rapide** : < 3s sur 3G
- **SEO score** : 95+ sur Lighthouse
- **Accessibilité** : WCAG 2.1 AA
- **Core Web Vitals** : Optimisés pour Netlify
- **CDN** : Distribution mondiale via Netlify

## 📄 Licence

© 2025 Les Allumettes - Tous droits réservés  
Développé par **Anthony Ip**
