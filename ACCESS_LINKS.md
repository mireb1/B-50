# 🔗 Guide d'Accès - Plateforme B2B

## 🌍 URLs de Production

### 🚀 Accès Principal - Vercel
```
https://b-50.vercel.app
```
**Usage :** Production principale, performance optimale

### 🔄 Accès Secondaire - Netlify  
```
https://b-50.netlify.app
```
**Usage :** Backup/staging, tests de déploiement

### 📖 Accès Documentation - GitHub Pages
```
https://mireb1.github.io/B-50
```
**Usage :** Documentation, démo statique

---

## 🔐 Comptes de Démonstration

### 👤 Compte Acheteur
- **Email :** `buyer@b2b.com`
- **Mot de passe :** `buyer`
- **Dashboard :** [https://b-50.vercel.app/dashboard/buyer](https://b-50.vercel.app/dashboard/buyer)

### 🏢 Compte Fournisseur  
- **Email :** `supplier@b2b.com`
- **Mot de passe :** `supplier`
- **Dashboard :** [https://b-50.vercel.app/dashboard/supplier](https://b-50.vercel.app/dashboard/supplier)

---

## 🗺️ Plan du Site

### Routes Publiques
| Route | Description | URL Complète |
|-------|-------------|--------------|
| `/` | **Page de connexion** | [https://b-50.vercel.app](https://b-50.vercel.app) |

### Routes Protégées (Authentification requise)
| Route | Description | URL Complète |
|-------|-------------|--------------|
| `/dashboard/buyer` | **Dashboard Acheteur** | [https://b-50.vercel.app/dashboard/buyer](https://b-50.vercel.app/dashboard/buyer) |
| `/dashboard/supplier` | **Dashboard Fournisseur** | [https://b-50.vercel.app/dashboard/supplier](https://b-50.vercel.app/dashboard/supplier) |

### Routes Futures (En développement)
| Route | Description | Status |
|-------|-------------|--------|
| `/catalog` | Catalogue produits | 🚧 Plannifié |
| `/orders` | Gestion commandes | 🚧 Plannifié |
| `/search` | Recherche avancée | 🚧 Plannifié |
| `/profile` | Profil utilisateur | 🚧 Plannifié |

---

## 🛠️ Développement Local

### Prérequis
- Node.js 18+
- npm/yarn/pnpm

### Installation
```bash
git clone https://github.com/mireb1/B-50.git
cd B-50
npm install
npm run dev
```

### Accès Local
```
http://localhost:3000
```

---

## 🔄 États des Déploiements

| Plateforme | Status | Build | Deploy | Dernière MAJ |
|------------|--------|-------|--------|--------------|
| **Vercel** | 🟢 Active | ✅ Success | ✅ Success | Automatique |
| **Netlify** | 🟢 Active | ✅ Success | ✅ Success | Automatique |
| **GitHub Pages** | 🟢 Active | ✅ Success | ✅ Success | CI/CD |

---

## 📞 Support

**Repository :** [https://github.com/mireb1/B-50](https://github.com/mireb1/B-50)  
**Issues :** [https://github.com/mireb1/B-50/issues](https://github.com/mireb1/B-50/issues)  
**Maintainer :** [@mireb1](https://github.com/mireb1)
