import { useState } from 'react';

function App() {
  const [selectedTab, setSelectedTab] = useState('products');

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-semibold text-sm">
              IF
            </div>
            <div>
              <h1 className="text-sm font-semibold text-gray-900">Irmak Fırın & Cafe</h1>
              <p className="text-xs text-blue-600">İşletme</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Ara"
              className="w-full px-3 py-2 text-sm bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute right-3 top-2 text-xs text-gray-400">⌘ K</div>
          </div>
        </div>

        {/* Icon Bar */}
        <div className="px-4 pb-4 flex items-center justify-between border-b border-gray-200">
          <div className="flex space-x-2">
            <button className="p-1.5 hover:bg-gray-100 rounded">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
          </div>
          <button className="p-1.5 hover:bg-gray-100 rounded">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <NavItem icon="map" label="Harita" />
          <NavItemDropdown icon="orders" label="Sipariş Yönetimi" defaultOpen>
            <NavSubItem label="Sipariş" />
            <NavSubItem label="Geçmiş" />
            <NavSubItem label="İptal Edilenler" />
            <NavSubItem label="İstatistik" />
          </NavItemDropdown>
          <NavItem icon="stats" label="Gelişmiş İstatistik" />
          <NavItemDropdown icon="settings" label="Yönetim">
          </NavItemDropdown>
          <NavItem icon="menu" label="Menü Yönetimi" />
          <NavItemDropdown icon="business" label="İşletmem">
          </NavItemDropdown>
          <NavItemDropdown icon="account" label="Hesap Ayarları">
          </NavItemDropdown>
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 p-3 space-y-2">
          <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            <span>Tema yapılandırması</span>
          </button>
          <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>Teknik Destek</span>
          </button>
          <div className="flex items-center justify-between px-3 py-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs font-semibold text-gray-700">
                MH
              </div>
              <span className="text-sm text-gray-700">Muhammet Hüseyin Koçaş</span>
            </div>
            <button className="p-1 hover:bg-gray-100 rounded">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <div className="bg-white border-b border-gray-200">
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
            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-sm font-medium">Sepet</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-8">Kurye Takip Araçları</h1>

          {/* Kurye Haritası Card */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Kurye Haritası</h2>
            <p className="text-sm text-gray-600 mb-4">
              Kuryelerinizi canlı takip etmek, anlık durumlarını öğrenebilmek için
            </p>
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                7 Günlük denemeye başla
              </span>
              <button className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <span>Ürün Satın Al</span>
              </button>
            </div>
          </div>

          {/* Araçlar Section */}
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Araçlar</h2>
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Kurye Hakkı Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-base font-semibold text-gray-900 mb-4">Kurye Hakkı</h3>
              <button className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 text-sm font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <span>Ürün Satın Al</span>
              </button>
            </div>

            {/* Caller ID Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-base font-semibold text-gray-900 mb-2">Caller ID</h3>
              <p className="text-sm text-gray-600 mb-4">
                Telefon müşterilerinin sistem bağlantısı
              </p>
              <input
                type="text"
                placeholder="Sahipsiniz"
                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
              />
            </div>
          </div>

          {/* Kurye Entegrasyonları Section */}
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Kurye Entegrasyonları</h2>
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-base font-semibold text-gray-900 mb-2">Paketiniz Kurye Entegrasyonu</h3>
            <p className="text-sm text-gray-600 mb-4">
              Paketiniz kurye firması ile entegrasyon yaparak, sistemlerinizde ki paket servisleri için güçlü bir kurye ağı kullanabilirsiniz
            </p>
            <button className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 text-sm font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <span>Ücretsiz Kullanmaya Başla</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

// Navigation Components
function NavItem({ icon, label }) {
  return (
    <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded flex items-center space-x-2">
      <IconPlaceholder />
      <span>{label}</span>
    </button>
  );
}

function NavItemDropdown({ icon, label, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded flex items-center justify-between"
      >
        <div className="flex items-center space-x-2">
          <IconPlaceholder />
          <span>{label}</span>
        </div>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      {isOpen && <div className="ml-6 mt-1 space-y-1">{children}</div>}
    </div>
  );
}

function NavSubItem({ label }) {
  return (
    <button className="w-full text-left px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded">
      {label}
    </button>
  );
}

function TabButton({ label, active, onClick, icon }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 pb-3 border-b-2 transition-colors ${
        active
          ? 'border-blue-600 text-blue-600'
          : 'border-transparent text-gray-600 hover:text-gray-900'
      }`}
    >
      {icon && icon}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

function IconPlaceholder() {
  return (
    <div className="w-4 h-4 rounded bg-gray-200"></div>
  );
}

export default App;
