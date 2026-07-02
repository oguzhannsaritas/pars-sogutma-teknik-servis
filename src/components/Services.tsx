import { motion } from "framer-motion";
import { Snowflake, Warehouse, Thermometer, Container, Milk, ShoppingCart, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const services = [
  { icon: Snowflake, title: "Soğutma Servisi", desc: "Tüm endüstriyel soğutma cihazlarınız için kapsamlı bakım ve onarım hizmeti." },
  { icon: Warehouse, title: "Soğuk Oda Servisi", desc: "Soğuk oda kurulum, bakım, arıza tespit ve onarım hizmetlerinde uzman ekip." },
  { icon: Thermometer, title: "Soğuk Hava Deposu Kurulumu", desc: "Anahtar teslim soğuk hava deposu kurulumu ve sürekli verim için periyodik bakım servisi." },
  { icon: Container, title: "Buzhane Servisi", desc: "Buzhane sistemlerinizin enerji verimli çalışması için bakım hizmeti." },
  { icon: Milk, title: "Sütlük Tamiri", desc: "Süt soğutma tanklarınızın tamiri, bakımı ve yedek parça desteği." },
  { icon: ShoppingCart, title: "Reyon Dolabı Servisi", desc: "Market reyonu ve teşhir dolaplarınız için hızlı ve garantili servis." },
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 bg-[#111827] py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gray-400 font-black tracking-widest text-xs md:text-sm">HİZMETLERİMİZ</span>
          <h2 className="text-lg md:text-4xl lg:text-5xl font-black tracking-tight mt-3 text-white">
            Teknik Servis Hizmetlerimiz
          </h2>
          <p className="text-gray-400 text-xs md:text-lg mt-4">
            Endüstriyel ve ticari soğutma sistemlerinizin her türlü ihtiyacında yanınızdayız.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, borderColor: "#e5e7eb" }}
              className="bg-white border-2 border-gray-100 rounded-2xl p-5 md:p-7"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="bg-primary-light text-primary w-14 h-14 rounded-full flex items-center justify-center mb-5"
              >
                <s.icon size={26} />
              </motion.div>
              <h3 className="text-base md:text-xl font-black text-gray-900">{s.title}</h3>
              <p className="text-muted-foreground text-xs md:text-base mt-2 mb-6">{s.desc}</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <a href="tel:+905431707277" className="flex-1 text-center border-[1px] border-gray-200 text-primary hover:bg-primary hover:text-white font-bold px-4 py-2.5 rounded-full text-xs md:text-sm transition-colors inline-flex items-center justify-center gap-2">
                  <Phone size={14} /> SERVİS ÇAĞIR
                </a>
                <a href="https://wa.me/905431707277" className="flex-1 text-center bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-4 py-2.5 rounded-full text-sm inline-flex items-center justify-center gap-2">
                  <WhatsAppIcon size={14} /> Whatsapp ULAŞ
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
