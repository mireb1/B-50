'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState('');

  const conversations = [
    {
      id: 1,
      name: 'TechGlobal Ltd.',
      lastMessage: 'Pouvez-vous confirmer les prix pour 500 unités ?',
      time: '14:32',
      unread: 2,
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20business%20avatar%2C%20corporate%20logo%2C%20modern%20company%20branding%2C%20clean%20simple%20design%2C%20blue%20and%20white%20colors%2C%20minimalist%20style%2C%20professional%20appearance%2C%20business%20identity%2C%20centered%20composition%2C%20isolated%20on%20white%20background&width=50&height=50&seq=avatar1&orientation=squarish',
      status: 'online'
    },
    {
      id: 2,
      name: 'Fashion Europe',
      lastMessage: 'Nous avons de nouveaux modèles disponibles',
      time: '12:45',
      unread: 0,
      avatar: 'https://readdy.ai/api/search-image?query=Fashion%20brand%20logo%2C%20elegant%20design%2C%20stylish%20branding%2C%20premium%20fashion%20company%2C%20sophisticated%20appearance%2C%20pink%20and%20gold%20colors%2C%20luxury%20aesthetic%2C%20professional%20identity%2C%20centered%20composition%2C%20isolated%20on%20white%20background&width=50&height=50&seq=avatar2&orientation=squarish',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Industrial Pro',
      lastMessage: 'Documentation technique envoyée',
      time: 'Hier',
      unread: 1,
      avatar: 'https://readdy.ai/api/search-image?query=Industrial%20company%20logo%2C%20mechanical%20branding%2C%20engineering%20design%2C%20professional%20manufacturing%20company%2C%20strong%20industrial%20appearance%2C%20orange%20and%20black%20colors%2C%20technical%20aesthetic%2C%20business%20identity%2C%20centered%20composition%2C%20isolated%20on%20white%20background&width=50&height=50&seq=avatar3&orientation=squarish',
      status: 'online'
    },
    {
      id: 4,
      name: 'GreenTech Solutions',
      lastMessage: 'Merci pour votre commande !',
      time: 'Hier',
      unread: 0,
      avatar: 'https://readdy.ai/api/search-image?query=Green%20technology%20logo%2C%20eco-friendly%20branding%2C%20sustainable%20company%20design%2C%20environmental%20business%20identity%2C%20green%20and%20blue%20colors%2C%20modern%20clean%20appearance%2C%20professional%20eco%20branding%2C%20centered%20composition%2C%20isolated%20on%20white%20background&width=50&height=50&seq=avatar4&orientation=squarish',
      status: 'offline'
    }
  ];

  const messages = [
    {
      id: 1,
      sender: 'TechGlobal Ltd.',
      content: 'Bonjour, nous sommes intéressés par vos smartphones',
      time: '14:30',
      isOwn: false
    },
    {
      id: 2,
      sender: 'Vous',
      content: 'Parfait ! Combien d\'unités souhaitez-vous ?',
      time: '14:31',
      isOwn: true
    },
    {
      id: 3,
      sender: 'TechGlobal Ltd.',
      content: 'Pouvez-vous confirmer les prix pour 500 unités ?',
      time: '14:32',
      isOwn: false
    }
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="font-pacifico text-xl text-blue-600">
            Messages
          </div>
          <div className="flex items-center space-x-3">
            <button className="w-8 h-8 flex items-center justify-center">
              <i className="ri-search-line text-gray-600"></i>
            </button>
            <button className="w-8 h-8 flex items-center justify-center">
              <i className="ri-more-line text-gray-600"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-16 pb-20">
        {!activeChat ? (
          /* Conversations List */
          <div className="px-4 py-4">
            <div className="space-y-3">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setActiveChat(conv.id)}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 cursor-pointer hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                        <img
                          src={conv.avatar}
                          alt={conv.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      {conv.status === 'online' && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm truncate">
                          {conv.name}
                        </h3>
                        <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                          {conv.time}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-gray-600 text-sm truncate">
                          {conv.lastMessage}
                        </p>
                        {conv.unread > 0 && (
                          <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 ml-2">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* New Conversation Button */}
            <div className="mt-8 text-center">
              <button className="bg-blue-600 text-white px-6 py-3 !rounded-button font-medium">
                <i className="ri-add-line mr-2"></i>
                Nouvelle conversation
              </button>
            </div>
          </div>
        ) : (
          /* Chat View */
          <div className="flex flex-col h-screen">
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-200 px-4 py-3">
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setActiveChat(null)}
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <i className="ri-arrow-left-line text-gray-600"></i>
                </button>
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                  <img
                    src={conversations.find(c => c.id === activeChat)?.avatar}
                    alt="Avatar"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {conversations.find(c => c.id === activeChat)?.name}
                  </h3>
                  <p className="text-xs text-green-500">En ligne</p>
                </div>
                <button className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-phone-line text-gray-600"></i>
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 px-4 py-4 space-y-4 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                      message.isOwn
                        ? 'bg-blue-600 text-white'
                        : 'bg-white border border-gray-200 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.isOwn ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="bg-white border-t border-gray-200 px-4 py-3 pb-20">
              <div className="flex items-center space-x-3">
                <button className="w-8 h-8 flex items-center justify-center">
                  <i className="ri-attachment-line text-gray-600"></i>
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Tapez votre message..."
                    className="w-full py-2 px-4 bg-gray-100 !rounded-button border-none text-gray-900 text-sm"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  className="w-8 h-8 flex items-center justify-center bg-blue-600 !rounded-button"
                >
                  <i className="ri-send-plane-fill text-white"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation - Only show when not in chat */}
      {!activeChat && (
        <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 px-0 py-0">
          <div className="grid grid-cols-4 h-16">
            <Link href="/" className="flex flex-col items-center justify-center space-y-1">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-home-line text-gray-600"></i>
              </div>
              <span className="text-xs text-gray-600">Accueil</span>
            </Link>
            
            <Link href="/categories" className="flex flex-col items-center justify-center space-y-1">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-grid-line text-gray-600"></i>
              </div>
              <span className="text-xs text-gray-600">Catégories</span>
            </Link>
            
            <Link href="/messages" className="flex flex-col items-center justify-center space-y-1 bg-blue-50">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-message-3-fill text-blue-600"></i>
              </div>
              <span className="text-xs text-blue-600 font-medium">Messages</span>
            </Link>
            
            <Link href="/profile" className="flex flex-col items-center justify-center space-y-1">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-user-line text-gray-600"></i>
              </div>
              <span className="text-xs text-gray-600">Profil</span>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}