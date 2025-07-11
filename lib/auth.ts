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