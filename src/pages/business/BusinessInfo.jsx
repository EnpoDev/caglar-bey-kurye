import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function BusinessInfo() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">İşletme Bilgileri</h1>
        <p className="text-muted-foreground mt-2">İşletmenizin genel bilgilerini düzenleyin</p>
      </div>

      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Genel Bilgiler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">İşletme Adı</label>
                <Input placeholder="Çağlar Bey Kurye" defaultValue="Çağlar Bey Kurye" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">E-posta</label>
                <Input type="email" placeholder="info@caglarbeykurye.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Telefon</label>
                <Input placeholder="+90 555 123 45 67" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Adres</label>
                <Input placeholder="Kadıköy, İstanbul" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Vergi No</label>
                <Input placeholder="1234567890" />
              </div>
              <Button className="w-full">Kaydet</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
