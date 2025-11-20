import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';
import Button from '../../components/ui/Button';

export default function Roles() {
  const roles = [
    { id: 1, name: 'Admin', description: 'Tam sistem erişimi', users: 3 },
    { id: 2, name: 'Kurye', description: 'Sipariş teslimatı', users: 25 },
    { id: 3, name: 'Müşteri', description: 'Sipariş oluşturma', users: 450 },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Rol Yönetimi</h1>
          <p className="text-muted-foreground mt-2">Kullanıcı rollerini ve yetkilerini düzenleyin</p>
        </div>
        <Button>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Yeni Rol
        </Button>
      </div>

      <div className="grid gap-6">
        {roles.map(role => (
          <Card key={role.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{role.name}</CardTitle>
                  <CardDescription>{role.description}</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">{role.users}</div>
                  <div className="text-sm text-muted-foreground">Kullanıcı</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">Yetkileri Düzenle</Button>
                <Button variant="ghost" size="sm">Sil</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
