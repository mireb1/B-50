
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      name: 'Électronique & Technologie',
      subcategories: ['Smartphones', 'Ordinateurs', 'Composants', 'Accessoires'],
      productCount: '2.3M+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20electronic%20devices%20smartphone%20laptop%20computer%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=electronics-cat&orientation=squarish'
    },
    {
      name: 'Mode & Textile',
      subcategories: ['Vêtements', 'Chaussures', 'Accessoires', 'Tissus'],
      productCount: '1.8M+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20fashion%20clothing%20shirt%20dress%20shoes%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=fashion-cat&orientation=squarish'
    },
    {
      name: 'Industrie & Machines',
      subcategories: ['Machines', 'Outils', 'Équipements', 'Pièces'],
      productCount: '950K+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20industrial%20machinery%20tools%20equipment%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=industry-cat&orientation=squarish'
    },
    {
      name: 'Automobile & Transport',
      subcategories: ['Pièces auto', 'Accessoires', 'Véhicules', 'Outillage'],
      productCount: '680K+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20car%20automotive%20parts%20vehicle%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=auto-cat&orientation=squarish'
    },
    {
      name: 'Maison & Décoration',
      subcategories: ['Meubles', 'Décoration', 'Électroménager', 'Jardinage'],
      productCount: '1.2M+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20home%20house%20furniture%20decoration%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=home-cat&orientation=squarish'
    },
    {
      name: 'Beauté & Cosmétiques',
      subcategories: ['Maquillage', 'Soins', 'Parfums', 'Accessoires'],
      productCount: '520K+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20cosmetics%20beauty%20products%20lipstick%20makeup%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=beauty-cat&orientation=squarish'
    },
    {
      name: 'Alimentation & Boissons',
      subcategories: ['Produits frais', 'Conserves', 'Boissons', 'Équipements'],
      productCount: '890K+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20food%20drink%20products%20fruits%20vegetables%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=food-cat&orientation=squarish'
    },
    {
      name: 'Sports & Loisirs',
      subcategories: ['Équipements', 'Vêtements', 'Accessoires', 'Outdoor'],
      productCount: '435K+',
      image: 'https://readdy.ai/api/search-image?query=icon%2C%203D%20cartoon%20sports%20equipment%20ball%20fitness%2C%20vibrant%20colors%20with%20soft%20gradients%2C%20minimalist%20design%2C%20smooth%20rounded%20shapes%2C%20subtle%20shading%2C%20no%20outlines%2C%20centered%20composition%2C%20isolated%20on%20white%20background%2C%20playful%20and%20friendly%20aesthetic%2C%20isometric%20perspective%2C%20high%20detail%20quality%2C%20clean%20and%20modern%20look%2C%20single%20object%20focus%2C%20the%20icon%20should%20take%20up%2070%25%20of%20the%20frame&width=150&height=150&seq=sports-cat&orientation=squarish'
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.subcategories.some(sub => 
      sub.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="font-pacifico text-xl text-blue-600">
            Catégories
          </div>
          <Link href="/search" className="w-8 h-8 flex items-center justify-center">
            <i className="ri-search-line text-gray-600"></i>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-16 pb-20">
        {/* Search Bar */}
        <div className="px-4 py-4 bg-white border-b border-gray-100">
          <div className="relative">
            <input
              type="text"
              placeholder="Rechercher une catégorie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 px-4 pr-12 bg-gray-50 border-none !rounded-button text-gray-900"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center">
              <i className="ri-search-line text-gray-400"></i>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="px-4 py-6">
          <div className="space-y-4">
            {filteredCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <Link href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-base mb-1">
                          {category.name}
                        </h3>
                        <p className="text-blue-600 text-sm font-medium mb-2">
                          {category.productCount} produits
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {category.subcategories.slice(0, 3).map((sub, subIndex) => (
                            <span
                              key={subIndex}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
                            >
                              {sub}
                            </span>
                          ))}
                          {category.subcategories.length > 3 && (
                            <span className="text-xs text-gray-400">
                              +{category.subcategories.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="w-6 h-6 flex items-center justify-center">
                        <i className="ri-arrow-right-s-line text-gray-400"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Searches */}
        <div className="px-4 py-4">
          <h3 className="font-semibold text-gray-900 mb-4">Recherches populaires</h3>
          <div className="flex flex-wrap gap-2">
            {['iPhone', 'Textile', 'Machines CNC', 'Cosmétiques', 'Automobile', 'Électronique'].map((term, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 !rounded-button text-sm text-gray-700"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-0 py-0">
        <div className="grid grid-cols-4 h-16">
          <Link href="/" className="flex flex-col items-center justify-center space-y-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-home-line text-gray-600"></i>
            </div>
            <span className="text-xs text-gray-600">Accueil</span>
          </Link>
          
          <Link href="/categories" className="flex flex-col items-center justify-center space-y-1 bg-blue-50">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-grid-fill text-blue-600"></i>
            </div>
            <span className="text-xs text-blue-600 font-medium">Catégories</span>
          </Link>
          
          <Link href="/messages" className="flex flex-col items-center justify-center space-y-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-message-3-line text-gray-600"></i>
            </div>
            <span className="text-xs text-gray-600">Messages</span>
          </Link>
          
          <Link href="/profile" className="flex flex-col items-center justify-center space-y-1">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-user-line text-gray-600"></i>
            </div>
            <span className="text-xs text-gray-600">Profil</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
