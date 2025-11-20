import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';

export default function ActiveOrders() {
  const orders = [
    { id: 1, customer: 'Ahmet Yılmaz', address: 'Kadıköy, İstanbul', status: 'Hazırlanıyor', time: '10 dk' },
    { id: 2, customer: 'Ayşe Demir', address: 'Beşiktaş, İstanbul', status: 'Yolda', time: '5 dk' },
    { id: 3, customer: 'Mehmet Kaya', address: 'Şişli, İstanbul', status: 'Hazırlanıyor', time: '15 dk' },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Aktif Siparişler</h1>
        <p className="text-muted-foreground mt-2">Devam eden siparişlerinizi buradan takip edebilirsiniz</p>
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
                <Badge variant={order.status === 'Yolda' ? 'default' : 'secondary'}>
                  {order.status}
                </Badge>
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
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{order.time}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
