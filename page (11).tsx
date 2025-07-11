
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SyncPage() {
  const [selectedPage, setSelectedPage] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [isModified, setIsModified] = useState(false);

  const pages = [
    { id: 'home', name: 'Accueil', elements: 12 },
    { id: 'products', name: 'Produits', elements: 24 },
    { id: 'categories', name: 'Catégories', elements: 8 },
    { id: 'profile', name: 'Profil', elements: 6 }
  ];

  const contentTypes = [
    { id: 'text', name: 'Textes', count: 35 },
    { id: 'image', name: 'Images', count: 18 },
    { id: 'link', name: 'Liens', count: 12 },
    { id: 'button', name: 'Boutons', count: 8 }
  ];

  const sampleElements = [
    { id: 1, type: 'text', page: 'home', content: 'Mireb Commercial B2B', editable: true },
    { id: 2, type: 'image', page: 'home', content: 'Banner principal', editable: true },
    { id: 3, type: 'text', page: 'products', content: 'Nos Produits Premium', editable: true },
    { id: 4, type: 'link', page: 'categories', content: 'Voir toutes les catégories', editable: true },
    { id: 5, type: 'button', page: 'profile', content: 'Modifier le profil', editable: true },
    { id: 6, type: 'text', page: 'home', content: 'Solutions B2B pour entreprises', editable: true }
  ];

  const handleSave = () => {
    setIsModified(false);
    // Simulation de sauvegarde
    alert('Modifications sauvegardées avec succès !');
  };

  const handleSync = () => {
    // Simulation de synchronisation
    alert('Synchronisation effectuée sur toutes les pages !');
  };

  const filteredElements = sampleElements.filter(element => {
    const pageMatch = selectedPage === 'all' || element.page === selectedPage;
    const typeMatch = selectedType === 'all' || element.type === selectedType;
    return pageMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Navigation Bar */}
      <div className="fixed top-0 w-full bg-white shadow-sm z-10">
        <div className="flex items-center justify-between p-4">
          <Link href="/" className="text-blue-600">
            <i className="ri-arrow-left-line text-xl"></i>
          </Link>
          <h1 className="text-lg font-semibold">Synchronisation</h1>
          <button 
            onClick={handleSave}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              isModified 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-400'
            }`}
            disabled={!isModified}
          >
            Sauvegarder
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 px-4">
        {/* Filters */}
        <div className="mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Filtrer par page
            </label>
            <select 
              value={selectedPage}
              onChange={(e) => setSelectedPage(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg bg-white"
            >
              <option value="all">Toutes les pages</option>
              {pages.map(page => (
                <option key={page.id} value={page.id}>
                  {page.name} ({page.elements} éléments)
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Type de contenu
            </label>
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-3 border border-gray-200 rounded-lg bg-white"
            >
              <option value="all">Tous les types</option>
              {contentTypes.map(type => (
                <option key={type.id} value={type.id}>
                  {type.name} ({type.count})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">{filteredElements.length}</div>
            <div className="text-sm text-gray-600">Éléments trouvés</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-green-600">
              {filteredElements.filter(e => e.editable).length}
            </div>
            <div className="text-sm text-gray-600">Modifiables</div>
          </div>
        </div>

        {/* Elements List */}
        <div className="space-y-3 mb-6">
          {filteredElements.map(element => (
            <div key={element.id} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    element.type === 'text' ? 'bg-blue-100 text-blue-600' :
                    element.type === 'image' ? 'bg-green-100 text-green-600' :
                    element.type === 'link' ? 'bg-purple-100 text-purple-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    {element.type}
                  </span>
                  <span className="text-xs text-gray-500 capitalize">{element.page}</span>
                </div>
                {element.editable && (
                  <i className="ri-edit-2-line text-gray-400"></i>
                )}
              </div>
              <div className="text-sm text-gray-800">{element.content}</div>
              {element.editable && (
                <input
                  type="text"
                  defaultValue={element.content}
                  className="w-full mt-2 p-2 border border-gray-200 rounded text-sm"
                  onChange={() => setIsModified(true)}
                />
              )}
            </div>
          ))}
        </div>

        {/* Sync Button */}
        <div className="fixed bottom-24 left-4 right-4">
          <button 
            onClick={handleSync}
            className="w-full bg-blue-600 text-white py-4 rounded-full font-medium shadow-lg flex items-center justify-center space-x-2"
          >
            <i className="ri-refresh-line"></i>
            <span>Synchroniser toutes les pages</span>
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full bg-white border-t grid grid-cols-5 h-16">
        <Link href="/" className="flex flex-col items-center justify-center text-gray-400">
          <i className="ri-home-line text-lg"></i>
          <span className="text-xs mt-1">Accueil</span>
        </Link>
        <Link href="/categories" className="flex flex-col items-center justify-center text-gray-400">
          <i className="ri-grid-line text-lg"></i>
          <span className="text-xs mt-1">Catégories</span>
        </Link>
        <Link href="/messages" className="flex flex-col items-center justify-center text-gray-400">
          <i className="ri-message-line text-lg"></i>
          <span className="text-xs mt-1">Messages</span>
        </Link>
        <Link href="/sync" className="flex flex-col items-center justify-center text-blue-600">
          <i className="ri-refresh-line text-lg"></i>
          <span className="text-xs mt-1">Sync</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center justify-center text-gray-400">
          <i className="ri-user-line text-lg"></i>
          <span className="text-xs mt-1">Profil</span>
        </Link>
      </div>
    </div>
  );
}
