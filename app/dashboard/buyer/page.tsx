'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AuthUser } from '@/lib/auth';

export default function BuyerDashboard() {
  const [user] = useState<AuthUser | null>({
    id: '1',
    email: 'buyer@b2b.com',
    role: 'buyer',
    name: 'Acheteur B2B'
  });

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Redirection vers la connexion...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Dashboard Acheteur</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Bienvenue, {user.name}</span>
              <Link href="/" className="text-sm text-blue-600 hover:text-blue-800">
                Déconnexion
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card Recherche Produits */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                🔍
              </div>
              <h3 className="text-lg font-medium text-gray-900">Rechercher Produits</h3>
            </div>
            <p className="text-gray-600 mb-4">Trouvez les meilleurs fournisseurs pour vos besoins</p>
            <Link href="/search" className="text-blue-600 hover:text-blue-800 font-medium">
              Commencer la recherche →
            </Link>
          </div>

          {/* Card Mes Commandes */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                📦
              </div>
              <h3 className="text-lg font-medium text-gray-900">Mes Commandes</h3>
            </div>
            <p className="text-gray-600 mb-4">Suivez vos commandes en cours et historique</p>
            <Link href="/orders" className="text-blue-600 hover:text-blue-800 font-medium">
              Voir les commandes →
            </Link>
          </div>

          {/* Card Fournisseurs Favoris */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                ⭐
              </div>
              <h3 className="text-lg font-medium text-gray-900">Fournisseurs Favoris</h3>
            </div>
            <p className="text-gray-600 mb-4">Accédez rapidement à vos partenaires privilégiés</p>
            <Link href="/suppliers" className="text-blue-600 hover:text-blue-800 font-medium">
              Gérer favoris →
            </Link>
          </div>
        </div>

        {/* Section Activité Récente */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Activité Récente</h2>
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-900">Commande #12345 livrée</span>
                  </div>
                  <span className="text-sm text-gray-500">Il y a 2 heures</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-900">Nouveau devis reçu de TechSupply</span>
                  </div>
                  <span className="text-sm text-gray-500">Il y a 5 heures</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-gray-900">Commande #12344 en cours de traitement</span>
                  </div>
                  <span className="text-sm text-gray-500">Hier</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
