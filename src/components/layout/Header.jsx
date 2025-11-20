import { useState } from 'react';

export default function Header() {
  const [selectedTab, setSelectedTab] = useState('products');

  return (
    <div className="bg-card border-b border-border">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex space-x-6">
          <TabButton
            label="Entegrasyonlar"
            active={selectedTab === 'integrations'}
            onClick={() => setSelectedTab('integrations')}
          />
          <TabButton
            label="Paketler"
            active={selectedTab === 'packages'}
            onClick={() => setSelectedTab('packages')}
          />
          <TabButton
            label="Ürünler"
            active={selectedTab === 'products'}
            onClick={() => setSelectedTab('products')}
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            }
          />
          <TabButton
            label="Kayıtlı Kartlarım"
            active={selectedTab === 'cards'}
            onClick={() => setSelectedTab('cards')}
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            }
          />
          <TabButton
            label="Aboneliklerim"
            active={selectedTab === 'subscriptions'}
            onClick={() => setSelectedTab('subscriptions')}
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
          />
          <TabButton
            label="İşlemlerim"
            active={selectedTab === 'operations'}
            onClick={() => setSelectedTab('operations')}
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            }
          />
        </div>
        <button className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="text-sm font-medium">Sepet</span>
        </button>
      </div>
    </div>
  );
}

function TabButton({ label, active, onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 pb-3 border-b-2 transition-colors ${
        active
          ? 'border-primary text-primary'
          : 'border-transparent text-muted-foreground hover:text-foreground'
      }`}
    >
      {icon && icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
