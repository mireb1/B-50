
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { authenticate, AuthUser, getRedirectUrl } from '@/lib/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'buyer' | 'supplier'>('buyer');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const authenticatedUser = await authenticate(email, password);
      
      if (authenticatedUser && authenticatedUser.role === userType) {
        setUser(authenticatedUser);
        // Redirection intelligente selon le rôle
        const redirectUrl = getRedirectUrl(authenticatedUser.role);
        window.location.href = redirectUrl;
      } else {
        setError('Email, mot de passe ou type d\'utilisateur incorrect');
      }
    } catch (err) {
      setError('Erreur de connexion. Veuillez réessayer.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Si utilisateur connecté, afficher un message de succès
  if (user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="text-green-600 text-4xl mb-4">✓</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Connexion réussie !</h2>
          <p className="text-gray-600 mb-4">Bienvenue {user.name}</p>
          <p className="text-sm text-gray-500">Redirection en cours...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-4 py-3">
        <div className="flex items-center">
          <Link href="/" className="w-6 h-6 flex items-center justify-center mr-3">
            <i className="ri-arrow-left-line text-gray-700"></i>
          </Link>
          <div className="font-pacifico text-xl text-blue-600">
            Mireb Commercial
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-16 px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center pt-12 pb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Se connecter
            </h1>
            <p className="text-gray-600">
              Accédez à votre compte professionnel
            </p>
          </div>

          {/* User Type Selection */}
          <div className="mb-8">
            <div className="flex bg-gray-100 rounded-full p-1">
              <button
                type="button"
                onClick={() => setUserType('buyer')}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                  userType === 'buyer'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600'
                }`}
              >
                Acheteur
              </button>
              <button
                type="button"
                onClick={() => setUserType('supplier')}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                  userType === 'supplier'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600'
                }`}
              >
                Fournisseur
              </button>
            </div>
          </div>

          {/* Exemples de connexion */}
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-medium text-blue-800 mb-2">Comptes de démonstration :</h3>
            <div className="text-xs text-blue-700 space-y-1">
              <div><strong>Acheteur:</strong> buyer@b2b.com / buyer</div>
              <div><strong>Fournisseur:</strong> supplier@b2b.com / supplier</div>
            </div>
          </div>

          {/* Affichage des erreurs */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email professionnel
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@entreprise.com"
                className="w-full py-3 px-4 bg-white border border-gray-200 !rounded-button text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full py-3 px-4 pr-12 bg-white border border-gray-200 !rounded-button text-gray-900"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center"
                >
                  <i className={`${showPassword ? 'ri-eye-line' : 'ri-eye-off-line'} text-gray-400`}></i>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">Se souvenir</span>
              </label>
              <Link href="/auth/forgot-password" className="text-sm text-blue-600">
                Mot de passe oublié ?
              </Link>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-colors ${
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isLoading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>

          {/* Divider - Simplifié */}
          <div className="my-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-50 px-4 text-gray-500">Authentification professionnelle</span>
              </div>
            </div>
          </div>

          {/* Sign Up Link - Nettoyé */}
          <div className="text-center mt-8 pb-8">
            <p className="text-gray-600 text-sm">
              Plateforme B2B sécurisée pour professionnels
            </p>
            <p className="text-xs text-gray-500 mt-2">
              © 2025 Mireb Commercial - Tous droits réservés
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
