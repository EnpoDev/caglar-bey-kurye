import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function Security() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Güvenlik Ayarları</h1>
        <p className="text-muted-foreground mt-2">Hesap güvenliğinizi yönetin</p>
      </div>

      <div className="max-w-2xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Şifre Değiştir</CardTitle>
            <CardDescription>Hesap şifrenizi güncelleyin</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Mevcut Şifre</label>
                <Input type="password" placeholder="••••••••" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Yeni Şifre</label>
                <Input type="password" placeholder="••••••••" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Yeni Şifre (Tekrar)</label>
                <Input type="password" placeholder="••••••••" />
              </div>
              <Button className="w-full">Şifreyi Güncelle</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>İki Faktörlü Doğrulama</CardTitle>
            <CardDescription>Hesabınıza ekstra güvenlik katmanı ekleyin</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">İki Faktörlü Doğrulama</p>
                <p className="text-sm text-muted-foreground">Şu anda pasif</p>
              </div>
              <Button variant="outline">Etkinleştir</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Oturum Yönetimi</CardTitle>
            <CardDescription>Aktif oturumlarınızı görüntüleyin</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Chrome - Windows</p>
                  <p className="text-sm text-muted-foreground">İstanbul, Türkiye - Aktif şimdi</p>
                </div>
                <Button variant="ghost" size="sm" className="text-destructive">Çıkış Yap</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
