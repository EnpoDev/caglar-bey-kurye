import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import Input from '../ui/Input';

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-border">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-primary-foreground font-semibold text-sm">
            CB
          </div>
          <div>
            <h1 className="text-sm font-semibold text-foreground">Çağlar Bey Kurye</h1>
            <p className="text-xs text-primary">İşletme</p>
          </div>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Ara"
            className="pr-12"
          />
          <div className="absolute right-3 top-2.5 text-xs text-muted-foreground">⌘ K</div>
        </div>
      </div>

      {/* Icon Bar */}
      <div className="px-4 pb-4 flex items-center justify-between border-b border-border">
        <div className="flex space-x-2">
          <button className="p-1.5 hover:bg-accent rounded transition-colors">
            <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button className="p-1.5 hover:bg-accent rounded transition-colors">
            <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </button>
          <button
            onClick={toggleTheme}
            className="p-1.5 hover:bg-accent rounded transition-colors"
            title={theme === 'dark' ? 'Açık Mod' : 'Koyu Mod'}
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
        <button className="p-1.5 hover:bg-accent rounded transition-colors">
          <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        <NavItem to="/harita" label="Harita" currentPath={location.pathname} />
        <NavItemDropdown
          label="Sipariş Yönetimi"
          defaultOpen={location.pathname.startsWith('/siparis')}
        >
          <NavSubItem to="/siparis/aktif" label="Aktif Siparişler" currentPath={location.pathname} />
          <NavSubItem to="/siparis/gecmis" label="Geçmiş" currentPath={location.pathname} />
          <NavSubItem to="/siparis/iptal" label="İptal Edilenler" currentPath={location.pathname} />
          <NavSubItem to="/siparis/istatistik" label="İstatistik" currentPath={location.pathname} />
        </NavItemDropdown>
        <NavItem to="/gelismis-istatistik" label="Gelişmiş İstatistik" currentPath={location.pathname} />
        <NavItemDropdown
          label="Yönetim"
          defaultOpen={location.pathname.startsWith('/yonetim')}
        >
          <NavSubItem to="/yonetim/kullanicilar" label="Kullanıcılar" currentPath={location.pathname} />
          <NavSubItem to="/yonetim/roller" label="Roller" currentPath={location.pathname} />
        </NavItemDropdown>
        <NavItem to="/menu" label="Menü Yönetimi" currentPath={location.pathname} />
        <NavItemDropdown
          label="İşletmem"
          defaultOpen={location.pathname.startsWith('/isletmem')}
        >
          <NavSubItem to="/isletmem/bilgiler" label="İşletme Bilgileri" currentPath={location.pathname} />
          <NavSubItem to="/isletmem/subeler" label="Şubeler" currentPath={location.pathname} />
        </NavItemDropdown>
        <NavItemDropdown
          label="Hesap Ayarları"
          defaultOpen={location.pathname.startsWith('/hesap')}
        >
          <NavSubItem to="/hesap/profil" label="Profil" currentPath={location.pathname} />
          <NavSubItem to="/hesap/guvenlik" label="Güvenlik" currentPath={location.pathname} />
        </NavItemDropdown>
      </nav>

      {/* Bottom Section */}
      <div className="border-t border-border p-3 space-y-2">
        <button className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-accent rounded transition-colors flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
          <span>Tema yapılandırması</span>
        </button>
        <button className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-accent rounded transition-colors flex items-center space-x-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span>Teknik Destek</span>
        </button>
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-xs font-semibold text-muted-foreground">
              MH
            </div>
            <span className="text-sm text-foreground">Muhammet Hüseyin</span>
          </div>
          <button className="p-1 hover:bg-accent rounded transition-colors">
            <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  );
}

function NavItem({ to, label, currentPath }) {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      className={`w-full text-left px-3 py-2 text-sm rounded transition-colors flex items-center space-x-2 ${
        isActive ? 'bg-accent text-accent-foreground' : 'text-foreground hover:bg-accent'
      }`}
    >
      <div className="w-4 h-4 rounded bg-muted"></div>
      <span>{label}</span>
    </Link>
  );
}

function NavItemDropdown({ label, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-3 py-2 text-sm text-foreground hover:bg-accent rounded transition-colors flex items-center justify-between"
      >
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 rounded bg-muted"></div>
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

function NavSubItem({ to, label, currentPath }) {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      className={`block w-full text-left px-3 py-1.5 text-sm rounded transition-colors ${
        isActive
          ? 'bg-accent text-foreground font-medium'
          : 'text-muted-foreground hover:bg-accent hover:text-foreground'
      }`}
    >
      {label}
    </Link>
  );
}
