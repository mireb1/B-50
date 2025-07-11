
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'buyer',
    country: '',
    acceptTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration attempt:', formData);
  };

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
      <div className="pt-16 px-4 pb-8">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center pt-8 pb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Créer un compte
            </h1>
            <p className="text-gray-600">
              Rejoignez des millions d'entreprises
            </p>
          </div>

          {/* User Type Selection */}
          <div className="mb-6">
            <div className="flex bg-gray-100 rounded-full p-1">
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, userType: 'buyer' }))}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                  formData.userType === 'buyer'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600'
                }`}
              >
                Acheteur
              </button>
              <button
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, userType: 'seller' }))}
                className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                  formData.userType === 'seller'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600'
                }`}
              >
                Vendeur
              </button>
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom de l'entreprise
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Votre Entreprise SARL"
                className="w-full py-3 px-4 bg-white border border-gray-200 !rounded-button text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email professionnel
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="contact@entreprise.com"
                className="w-full py-3 px-4 bg-white border border-gray-200 !rounded-button text-gray-900"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pays
              </label>
              <div className="relative">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full py-3 px-4 bg-white border border-gray-200 !rounded-button text-gray-900 appearance-none"
                  required
                >
                  <option value="">Sélectionner un pays</option>
                  <option value="france">France</option>
                  <option value="belgium">Belgique</option>
                  <option value="switzerland">Suisse</option>
                  <option value="canada">Canada</option>
                  <option value="morocco">Maroc</option>
                  <option value="tunisia">Tunisie</option>
                  <option value="algeria">Algérie</option>
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                  <i className="ri-arrow-down-s-line text-gray-400"></i>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="8+ caractères"
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirmer le mot de passe
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Répéter le mot de passe"
                className="w-full py-3 px-4 bg-white border border-gray-200 !rounded-button text-gray-900"
                required
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded mt-1"
                required
              />
              <label className="text-sm text-gray-600">
                J'accepte les{' '}
                <Link href="/terms" className="text-blue-600">
                  conditions d'utilisation
                </Link>
                {' '}et la{' '}
                <Link href="/privacy" className="text-blue-600">
                  politique de confidentialité
                </Link>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 !rounded-button font-medium"
            >
              Créer mon compte
            </button>
          </form>

          {/* Divider */}
          <div className="my-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-gray-50 px-4 text-gray-500">ou</span>
              </div>
            </div>
          </div>

          {/* Social Registration */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-200 !rounded-button bg-white">
              <i className="ri-google-fill text-red-500 mr-3"></i>
              <span className="text-gray-700">S'inscrire avec Google</span>
            </button>
            
            <button className="w-full flex items-center justify-center py-3 px-4 border border-gray-200 !rounded-button bg-white">
              <i className="ri-linkedin-fill text-blue-700 mr-3"></i>
              <span className="text-gray-700">S'inscrire avec LinkedIn</span>
            </button>
          </div>

          {/* Sign In Link */}
          <div className="text-center mt-8 pb-8">
            <p className="text-gray-600">
              Déjà un compte ?{' '}
              <Link href="/auth/login" className="text-blue-600 font-medium">
                Se connecter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
