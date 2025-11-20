import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import CourierMap from './pages/CourierMap';

function App() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <CourierMap />
      </main>
    </div>
  );
}

export default App;
