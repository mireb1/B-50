# 🚀 Plateforme B2B Next.js - Projet Professionnel

[![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

## 📋 Vue d'ensemble

Plateforme B2B moderne et responsive construite avec **Next.js 15**, **TypeScript**, et **Tailwind CSS**. 
Architecture professionnelle avec support multi-plateforme, CI/CD automatisé, et déploiement optimisé.

### 🌟 Fonctionnalités principales

- ✅ **Interface Moderne** : Design responsive mobile-first avec Tailwind CSS
- ✅ **Authentification JWT** : Système de connexion acheteurs/fournisseurs sécurisé
- ✅ **Dashboards Métiers** : Interfaces dédiées par type d'utilisateur
- ✅ **Gestion Média** : Upload et organisation de fichiers avec intégration cloud
- ✅ **Performance** : Optimisation SSG/SSR avec Next.js 15
- ✅ **Type Safety** : TypeScript strict avec configurations avancées
- ✅ **Qualité Code** : ESLint, Prettier, Jest, Testing Library
- ✅ **CI/CD** : GitHub Actions avec déploiement multi-plateforme
- ✅ **Docker** : Containerisation avec optimisation production

## 🌍 URLs de Déploiement

| Plateforme | URL d'accès | Status | Usage |
|-----------|-------------|--------|-------|
| **🚀 Vercel** | [https://b-50.vercel.app](https://b-50.vercel.app) | 🟢 Production | Principal |
| **🔄 Netlify** | [https://b-50.netlify.app](https://b-50.netlify.app) | 🟢 Staging | Backup |
| **📖 GitHub Pages** | [https://mireb1.github.io/B-50](https://mireb1.github.io/B-50) | 🟢 Demo | Documentation |
| **💻 Local Dev** | [http://localhost:3000](http://localhost:3000) | 🔧 Dev | Développement |

### 🔗 Routes Principales

| Route | Description | Accès |
|-------|-------------|-------|
| `/` | **Page de connexion** - Authentification principale | 🔓 Public |
| `/dashboard/buyer` | **Dashboard Acheteur** - Interface métier acheteurs | 🔒 Auth required |
| `/dashboard/supplier` | **Dashboard Fournisseur** - Interface métier fournisseurs | 🔒 Auth required |

### � Comptes de Démonstration

| Type | Email | Mot de passe | Dashboard |
|------|-------|--------------|-----------|
| **👤 Acheteur** | `buyer@b2b.com` | `buyer` | [/dashboard/buyer](https://b-50.vercel.app/dashboard/buyer) |
| **🏢 Fournisseur** | `supplier@b2b.com` | `supplier` | [/dashboard/supplier](https://b-50.vercel.app/dashboard/supplier) |
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript 5.0
- **Font**: Geist, Pacifico

### DevOps & Quality
- **Testing**: Jest + Testing Library
- **Linting**: ESLint + Prettier
- **CI/CD**: GitHub Actions
- **Containerization**: Docker + Docker Compose
- **Deployment**: Vercel, Netlify, GitHub Pages

### Outils de Développement
- **Package Manager**: npm
- **Version Control**: Git
- **Pre-commit Hooks**: Husky + lint-staged
- **Type Checking**: TypeScript strict mode

## 🚀 Installation Rapide

### Prérequis
- Node.js 18+ 
- npm 8+
- Git

### Configuration locale

```bash
# Cloner le repository
git clone https://github.com/mireb1/B-50.git
cd B-50

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local

# Démarrer le serveur de développement
npm run dev
```

🌐 **Accès**: [http://localhost:3000](http://localhost:3000)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
