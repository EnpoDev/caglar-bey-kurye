import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';

export default function Branches() {
  const branches = [
    { id: 1, name: 'Kadıköy Şubesi', address: 'Kadıköy, İstanbul', phone: '+90 555 111 22 33', status: 'Açık' },
    { id: 2, name: 'Beşiktaş Şubesi', address: 'Beşiktaş, İstanbul', phone: '+90 555 444 55 66', status: 'Açık' },
    { id: 3, name: 'Üsküdar Şubesi', address: 'Üsküdar, İstanbul', phone: '+90 555 777 88 99', status: 'Kapalı' },
  ];

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Şube Yönetimi</h1>
          <p className="text-muted-foreground mt-2">Şubelerinizi yönetin</p>
        </div>
        <Button>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Yeni Şube
        </Button>
      </div>

      <div className="grid gap-6">
        {branches.map(branch => (
          <Card key={branch.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{branch.name}</CardTitle>
                  <CardDescription>{branch.address}</CardDescription>
                </div>
                <Badge variant={branch.status === 'Açık' ? 'success' : 'secondary'}>
                  {branch.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{branch.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">Düzenle</Button>
                  <Button variant="ghost" size="sm">Sil</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
