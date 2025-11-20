import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

export default function Profile() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Profil Ayarları</h1>
        <p className="text-muted-foreground mt-2">Kişisel bilgilerinizi güncelleyin</p>
      </div>

      <div className="max-w-2xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Profil Fotoğrafı</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-semibold">
                MH
              </div>
              <div className="space-y-2">
                <Button variant="outline" size="sm">Fotoğraf Yükle</Button>
                <p className="text-xs text-muted-foreground">PNG, JPG - Max 2MB</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Kişisel Bilgiler</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Ad</label>
                  <Input placeholder="Muhammet" defaultValue="Muhammet" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Soyad</label>
                  <Input placeholder="Hüseyin" defaultValue="Hüseyin" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">E-posta</label>
                <Input type="email" placeholder="muhammet@example.com" defaultValue="muhammet@example.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Telefon</label>
                <Input placeholder="+90 555 123 45 67" />
              </div>
              <Button className="w-full">Değişiklikleri Kaydet</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
