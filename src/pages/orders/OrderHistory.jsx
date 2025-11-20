import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';

export default function OrderHistory() {
  const orders = [
    { id: 101, customer: 'Ali Veli', address: 'Üsküdar, İstanbul', status: 'Teslim Edildi', date: '20.11.2025', total: '₺125' },
    { id: 102, customer: 'Fatma Nur', address: 'Bakırköy, İstanbul', status: 'Teslim Edildi', date: '20.11.2025', total: '₺89' },
    { id: 103, customer: 'Can Öztürk', address: 'Sarıyer, İstanbul', status: 'Teslim Edildi', date: '19.11.2025', total: '₺210' },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Sipariş Geçmişi</h1>
        <p className="text-muted-foreground mt-2">Geçmiş siparişlerinizi görüntüleyin</p>
      </div>

      <div className="grid gap-4">
        {orders.map(order => (
          <Card key={order.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Sipariş #{order.id}</CardTitle>
                  <CardDescription>{order.customer}</CardDescription>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-lg font-semibold text-foreground">{order.total}</span>
                  <Badge variant="success">{order.status}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{order.address}</span>
                </div>
                <div className="text-sm text-muted-foreground">{order.date}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
