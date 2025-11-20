import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';

export default function AdvancedStats() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Gelişmiş İstatistikler</h1>
        <p className="text-muted-foreground mt-2">Detaylı performans ve analiz raporları</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Günlük Gelir</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">₺12,450</div>
            <p className="text-sm text-green-600 mt-1">+18% önceki güne göre</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Aktif Kuryeler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">24</div>
            <p className="text-sm text-muted-foreground mt-1">32 kuryeden</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Müşteri Memnuniyeti</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">4.8/5.0</div>
            <p className="text-sm text-green-600 mt-1">Mükemmel</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performans Metrikleri</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 flex items-center justify-center text-muted-foreground">
            Detaylı grafik ve analiz araçları yakında...
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
