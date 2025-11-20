import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';

export default function OrderStats() {
  const stats = [
    { title: 'Toplam Sipariş', value: '1,234', change: '+12%', color: 'text-blue-600' },
    { title: 'Teslim Edilen', value: '1,180', change: '+8%', color: 'text-green-600' },
    { title: 'İptal Edilen', value: '54', change: '-3%', color: 'text-red-600' },
    { title: 'Ortalama Süre', value: '28 dk', change: '-5%', color: 'text-amber-600' },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Sipariş İstatistikleri</h1>
        <p className="text-muted-foreground mt-2">Detaylı sipariş analizleriniz</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className={`text-sm font-medium ${stat.color}`}>{stat.change}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Haftalık Sipariş Grafiği</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            Grafik entegrasyonu yakında...
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
