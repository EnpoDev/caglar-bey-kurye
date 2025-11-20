import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Input from '../components/ui/Input';

export default function CourierMap() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">Kurye Takip Araçları</h1>

      {/* Kurye Haritası Card */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-xl">Kurye Haritası</CardTitle>
          <CardDescription>
            Kuryelerinizi canlı takip etmek, anlık durumlarını öğrenebilmek için
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Badge variant="success" className="text-sm px-4 py-1">
              7 Günlük denemeye başla
            </Badge>
            <Button variant="outline" className="text-amber-600 border-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              Ürün Satın Al
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Araçlar Section */}
      <h2 className="text-2xl font-semibold text-foreground mb-4">Araçlar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Kurye Hakkı Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Kurye Hakkı</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="text-amber-600 border-amber-600 hover:bg-amber-50 dark:hover:bg-amber-950">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              Ürün Satın Al
            </Button>
          </CardContent>
        </Card>

        {/* Caller ID Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Caller ID</CardTitle>
            <CardDescription>
              Telefon müşterilerinin sistem bağlantısı
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input
              type="text"
              placeholder="Sahipsiniz"
              disabled
              className="bg-muted"
            />
          </CardContent>
        </Card>
      </div>

      {/* Kurye Entegrasyonları Section */}
      <h2 className="text-2xl font-semibold text-foreground mb-4">Kurye Entegrasyonları</h2>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Paketiniz Kurye Entegrasyonu</CardTitle>
          <CardDescription>
            Paketiniz kurye firması ile entegrasyon yaparak, sistemlerinizde ki paket servisleri için güçlü bir kurye ağı kullanabilirsiniz
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="text-teal-600 border-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            Ücretsiz Kullanmaya Başla
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
