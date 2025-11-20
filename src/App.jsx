import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';

// Pages
import CourierMap from './pages/CourierMap';
import ActiveOrders from './pages/orders/ActiveOrders';
import OrderHistory from './pages/orders/OrderHistory';
import CancelledOrders from './pages/orders/CancelledOrders';
import OrderStats from './pages/orders/OrderStats';
import AdvancedStats from './pages/AdvancedStats';
import Users from './pages/management/Users';
import Roles from './pages/management/Roles';
import MenuManagement from './pages/MenuManagement';
import BusinessInfo from './pages/business/BusinessInfo';
import Branches from './pages/business/Branches';
import Profile from './pages/account/Profile';
import Security from './pages/account/Security';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-background">
        <Sidebar />
        <main className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/harita" replace />} />
            <Route path="/harita" element={<CourierMap />} />

            {/* Sipariş Yönetimi */}
            <Route path="/siparis/aktif" element={<ActiveOrders />} />
            <Route path="/siparis/gecmis" element={<OrderHistory />} />
            <Route path="/siparis/iptal" element={<CancelledOrders />} />
            <Route path="/siparis/istatistik" element={<OrderStats />} />

            {/* Gelişmiş İstatistik */}
            <Route path="/gelismis-istatistik" element={<AdvancedStats />} />

            {/* Yönetim */}
            <Route path="/yonetim/kullanicilar" element={<Users />} />
            <Route path="/yonetim/roller" element={<Roles />} />

            {/* Menü */}
            <Route path="/menu" element={<MenuManagement />} />

            {/* İşletmem */}
            <Route path="/isletmem/bilgiler" element={<BusinessInfo />} />
            <Route path="/isletmem/subeler" element={<Branches />} />

            {/* Hesap Ayarları */}
            <Route path="/hesap/profil" element={<Profile />} />
            <Route path="/hesap/guvenlik" element={<Security />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
