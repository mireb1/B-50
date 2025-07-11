/**
 * Authentification Next.js B2B
 * - Support JWT, OAuth, session
 * - Utilisation côté serveur et client
 */
import jwt from 'jsonwebtoken';

export type UserRole = 'buyer' | 'supplier' | 'admin';

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
  name?: string;
}

const JWT_SECRET = process.env.NEXTAUTH_SECRET || 'dev-secret';
const JWT_EXPIRES_IN = '7d';

// Générer un token JWT
export function generateToken(user: AuthUser): string {
  return jwt.sign(user, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

// Vérifier un token JWT
export function verifyToken(token: string): AuthUser | null {
  try {
    return jwt.verify(token, JWT_SECRET) as AuthUser;
  } catch {
    return null;
  }
}

// Simuler une authentification (à remplacer par une vraie API)
export async function authenticate(email: string, password: string): Promise<AuthUser | null> {
  // TODO: Remplacer par une vraie logique (API, DB, OAuth)
  if (email === 'buyer@b2b.com' && password === 'buyer') {
    return { id: '1', email, role: 'buyer', name: 'Acheteur B2B' };
  }
  if (email === 'supplier@b2b.com' && password === 'supplier') {
    return { id: '2', email, role: 'supplier', name: 'Fournisseur B2B' };
  }
  return null;
}

// Vérifier le rôle utilisateur
export function hasRole(user: AuthUser | null, role: UserRole): boolean {
  return !!user && user.role === role;
}

// URLs et routes de l'application
export const APP_ROUTES = {
  // Routes publiques
  HOME: '/',
  LOGIN: '/',
  
  // Routes protégées - Dashboards
  BUYER_DASHBOARD: '/dashboard/buyer',
  SUPPLIER_DASHBOARD: '/dashboard/supplier',
  
  // Routes métiers (à développer)
  CATALOG: '/catalog',
  ORDERS: '/orders',
  SEARCH: '/search',
  PROFILE: '/profile',
} as const;

// URLs de déploiement
export const DEPLOYMENT_URLS = {
  PRODUCTION: 'https://b-50.vercel.app',
  STAGING: 'https://b-50.netlify.app', 
  DEMO: 'https://mireb1.github.io/B-50',
  LOCAL: 'http://localhost:3000',
} as const;

// Comptes de démonstration
export const DEMO_ACCOUNTS = {
  BUYER: {
    email: 'buyer@b2b.com',
    password: 'buyer',
    role: 'buyer' as UserRole,
    dashboardUrl: `${DEPLOYMENT_URLS.PRODUCTION}${APP_ROUTES.BUYER_DASHBOARD}`,
  },
  SUPPLIER: {
    email: 'supplier@b2b.com', 
    password: 'supplier',
    role: 'supplier' as UserRole,
    dashboardUrl: `${DEPLOYMENT_URLS.PRODUCTION}${APP_ROUTES.SUPPLIER_DASHBOARD}`,
  },
} as const;

// Redirection après connexion selon le rôle
export function getRedirectUrl(role: UserRole): string {
  switch (role) {
    case 'buyer':
      return APP_ROUTES.BUYER_DASHBOARD;
    case 'supplier':
      return APP_ROUTES.SUPPLIER_DASHBOARD;
    case 'admin':
      return '/admin/dashboard';
    default:
      return APP_ROUTES.HOME;
  }
}