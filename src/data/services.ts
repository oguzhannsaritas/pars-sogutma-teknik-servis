import {
  Container,
  Milk,
  ShoppingCart,
  Snowflake,
  Thermometer,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  path: string;
  imageFolder: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  lead: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "sogutma-servisi",
    path: "/sogutma-servisi",
    imageFolder: "sogutma-servisi",
    icon: Snowflake,
    title: "Soğutma Servisi",
    desc: "Tüm endüstriyel soğutma cihazlarınız için kapsamlı bakım ve onarım hizmeti.",
    lead:
      "Endüstriyel ve ticari soğutma sistemlerinde arıza tespiti, bakım, onarım ve performans kontrolünü hızlı servis yaklaşımıyla yürütüyoruz.",
    highlights: [
      "Arıza tespiti ve yerinde müdahale",
      "Periyodik bakım ve verim kontrolü",
      "Gaz kaçağı, fan, kompresör ve elektronik kontroller",
      "İşletme yoğunluğuna uygun servis planı",
    ],
  },
  {
    slug: "soguk-oda-servisi",
    path: "/soguk-oda-servisi",
    imageFolder: "soguk-oda-servisi",
    icon: Warehouse,
    title: "Soğuk Oda Servisi",
    desc: "Soğuk oda kurulum, bakım, arıza tespit ve onarım hizmetlerinde uzman ekip.",
    lead:
      "Soğuk odalarınızın doğru sıcaklıkta, kesintisiz ve güvenli çalışması için kurulumdan bakıma kadar tüm teknik süreçleri üstleniyoruz.",
    highlights: [
      "Soğuk oda arıza tespiti",
      "Kapı, panel, evaporatör ve kondenser kontrolleri",
      "Sıcaklık stabilitesi ve izolasyon kontrolü",
      "Bakım sonrası çalışma raporu",
    ],
  },
  {
    slug: "soguk-hava-deposu-kurulumu",
    path: "/soguk-hava-deposu-kurulumu",
    imageFolder: "soguk-hava-deposu-kurulumu",
    icon: Thermometer,
    title: "Soğuk Hava Deposu Kurulumu",
    desc: "Anahtar teslim soğuk hava deposu kurulumu ve sürekli verim için periyodik bakım servisi.",
    lead:
      "Ürün kapasitesi, kullanım sıklığı ve işletme planınıza göre soğuk hava deposu kurulumunu projelendirip anahtar teslim hazırlıyoruz.",
    highlights: [
      "İhtiyaca göre kapasite planlama",
      "Panel, cihaz ve ekipman kurulumu",
      "Devreye alma ve sıcaklık testleri",
      "Kurulum sonrası bakım desteği",
    ],
  },
  {
    slug: "buzhane-servisi",
    path: "/buzhane-servisi",
    imageFolder: "buzhane-servisi",
    icon: Container,
    title: "Buzhane Servisi",
    desc: "Buzhane sistemlerinizin enerji verimli çalışması için bakım hizmeti.",
    lead:
      "Buzhane sistemlerinde düşük sıcaklık sürekliliğini korumak için bakım, arıza müdahalesi ve ekipman kontrollerini titizlikle yapıyoruz.",
    highlights: [
      "Düşük sıcaklık sistem kontrolü",
      "Kompresör ve evaporatör bakımı",
      "Buzlanma ve defrost sorunlarının çözümü",
      "Enerji tüketimi odaklı servis",
    ],
  },
  {
    slug: "sutluk-tamiri",
    path: "/sutluk-tamiri",
    imageFolder: "sutluk-tamiri",
    icon: Milk,
    title: "Sütlük Tamiri",
    desc: "Süt soğutma tanklarınızın tamiri, bakımı ve yedek parça desteği.",
    lead:
      "Sütlük, süt soğutma tankı ve benzeri ürün saklama ekipmanlarında hızlı arıza tespiti ve güvenilir tamir hizmeti sunuyoruz.",
    highlights: [
      "Sütlük soğutma arızası tespiti",
      "Termostat, fan ve motor kontrolleri",
      "Hijyen ve sıcaklık sürekliliği odaklı bakım",
      "Yedek parça ve onarım desteği",
    ],
  },
  {
    slug: "reyon-dolabi-servisi",
    path: "/reyon-dolabi-servisi",
    imageFolder: "reyon-dolabi-servisi",
    icon: ShoppingCart,
    title: "Reyon Dolabı Servisi",
    desc: "Market reyonu ve teşhir dolaplarınız için hızlı ve garantili servis.",
    lead:
      "Market, kasap, şarküteri ve gıda satış alanlarındaki reyon dolaplarının düzenli, verimli ve güvenli çalışması için servis sağlıyoruz.",
    highlights: [
      "Reyon dolabı arıza müdahalesi",
      "Teşhir sıcaklığı ve hava akışı kontrolü",
      "Aydınlatma, fan ve drenaj kontrolleri",
      "Market operasyonuna uygun hızlı servis",
    ],
  },
];

export function getServiceByPath(pathname: string) {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  return services.find((service) => service.path === normalized);
}
