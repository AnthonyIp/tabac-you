# Tabac Presse FDJ Les Allumettes

Site web moderne et responsive pour le Tabac Presse FDJ Les Allumettes à Vert-le-Petit (91710).

## 🌟 Fonctionnalités

- **Design moderne** avec thème Monstera (vert naturel)
- **Mode sombre/clair** avec toggle
- **Responsive** : parfait sur mobile et desktop
- **SEO optimisé** : meta tags, données structurées, sitemap
- **Performance** : chargement rapide et optimisé
- **Accessibilité** : conforme aux standards WCAG

## 🚀 Déploiement sur Netlify

### Méthode 1 : Déploiement automatique (Recommandé)

1. **Connecter le repository** à Netlify
2. **Configuration automatique** :
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

### Méthode 2 : Déploiement manuel

1. **Build local** :
   ```bash
   npm run build
   ```

2. **Upload du dossier `dist`** sur Netlify

## 📁 Structure du Projet

```
src/
├── components/          # Composants React
│   ├── ui/             # Composants UI (shadcn/ui)
│   ├── Header.tsx      # En-tête avec navigation
│   ├── Hero.tsx        # Section principale
│   ├── Services.tsx    # Services proposés
│   ├── News.tsx        # Actualités
│   ├── Gallery.tsx     # Galerie photos
│   ├── Reviews.tsx     # Avis clients
│   ├── AccessMap.tsx   # Carte et accès
│   ├── Footer.tsx      # Pied de page
│   ├── LegalModals.tsx # Mentions légales
│   └── ThemeToggle.tsx # Toggle thème
├── hooks/              # Hooks personnalisés
├── lib/                # Utilitaires et types
├── pages/              # Pages de l'application
└── index.css           # Styles globaux
```

## 🛠️ Technologies

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **shadcn/ui** (composants UI)
- **React Router** (routing)
- **React Helmet** (SEO)

## 📱 Fonctionnalités SEO

- **Meta tags** optimisés
- **Données structurées** JSON-LD
- **Sitemap.xml** automatique
- **Robots.txt** configuré
- **Open Graph** pour les réseaux sociaux
- **Images optimisées** avec alt text

## 🎨 Thème Monstera

- **Couleurs naturelles** inspirées de la plante Monstera
- **Mode sombre par défaut** avec toggle clair
- **Gradients subtils** et élégants
- **Animations fluides** et modernes

## 📞 Contact

**Tabac Presse FDJ Les Allumettes**
- 📍 4 Rue du Général Leclerc, 91710 Vert-le-Petit
- 📞 01 64 93 73 98
- 🌐 [Site web](https://lesallumettes-vert.netlify.app)

## 📄 Licence

© 2025 Les Allumettes - Tous droits réservés
