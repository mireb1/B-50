'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AuthUser } from '@/lib/auth';

export default function SupplierDashboard() {
  const [user] = useState<AuthUser | null>({
    id: '2',
    email: 'supplier@b2b.com',
    role: 'supplier',
    name: 'Fournisseur B2B'
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
              <h1 className="text-xl font-semibold text-gray-900">Dashboard Fournisseur</h1>
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
          {/* Card Catalogue Produits */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                📋
              </div>
              <h3 className="text-lg font-medium text-gray-900">Catalogue Produits</h3>
            </div>
            <p className="text-gray-600 mb-4">Gérez votre catalogue et vos prix</p>
            <Link href="/catalog" className="text-blue-600 hover:text-blue-800 font-medium">
              Gérer catalogue →
            </Link>
          </div>

          {/* Card Commandes Reçues */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                📥
              </div>
              <h3 className="text-lg font-medium text-gray-900">Commandes Reçues</h3>
            </div>
            <p className="text-gray-600 mb-4">Traitez les nouvelles commandes clients</p>
            <Link href="/orders/received" className="text-blue-600 hover:text-blue-800 font-medium">
              Voir commandes →
            </Link>
          </div>

          {/* Card Analytics */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                📊
              </div>
              <h3 className="text-lg font-medium text-gray-900">Statistiques</h3>
            </div>
            <p className="text-gray-600 mb-4">Analysez vos performances de vente</p>
            <Link href="/analytics" className="text-blue-600 hover:text-blue-800 font-medium">
              Voir analytics →
            </Link>
          </div>
        </div>

        {/* Métriques Rapides */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">127</div>
            <div className="text-sm text-gray-600">Produits actifs</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-green-600">€45,230</div>
            <div className="text-sm text-gray-600">CA ce mois</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">23</div>
            <div className="text-sm text-gray-600">Commandes en attente</div>
          </div>
          <div className="bg-white rounded-lg shadow p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">4.8</div>
            <div className="text-sm text-gray-600">Note moyenne</div>
          </div>
        </div>

        {/* Section Commandes Récentes */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Commandes Récentes</h2>
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span className="text-gray-900">Commande #CMD-2025-001 - TechCorp</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-green-600">€2,450</span>
                    <span className="text-sm text-gray-500">Il y a 1 heure</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-gray-900">Commande #CMD-2025-002 - InnovSolutions</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-orange-600">€1,890</span>
                    <span className="text-sm text-gray-500">Il y a 3 heures</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-900">Commande #CMD-2025-003 - GlobalTech</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-blue-600">€3,200</span>
                    <span className="text-sm text-gray-500">Il y a 6 heures</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
