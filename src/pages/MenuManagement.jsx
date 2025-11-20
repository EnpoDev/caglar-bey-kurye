import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

export default function MenuManagement() {
  const menuItems = [
    { id: 1, name: 'Margarita Pizza', category: 'Pizza', price: '₺85', status: 'Aktif' },
    { id: 2, name: 'Cheeseburger', category: 'Burger', price: '₺65', status: 'Aktif' },
    { id: 3, name: 'Caesar Salad', category: 'Salata', price: '₺45', status: 'Pasif' },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Menü Yönetimi</h1>
          <p className="text-muted-foreground mt-2">Ürünlerinizi ve fiyatları yönetin</p>
        </div>
        <Button>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Yeni Ürün
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Menü Ürünleri</CardTitle>
          <CardDescription>Tüm ürünlerinizi buradan düzenleyebilirsiniz</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {menuItems.map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{item.name}</div>
                    <div className="text-sm text-muted-foreground">{item.category}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-lg font-semibold text-foreground">{item.price}</div>
                  <Badge variant={item.status === 'Aktif' ? 'success' : 'secondary'}>
                    {item.status}
                  </Badge>
                  <Button variant="ghost" size="sm">Düzenle</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
