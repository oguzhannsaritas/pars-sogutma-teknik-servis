import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "Soğutma servisiniz hangi saatler aralığında hizmet vermektedir?", a: "Soğutma servisimiz 7/24 hizmet vermektedir. Acil durumlarda gece-gündüz fark etmeksizin teknik ekibimiz yanınızda olur." },
  { q: "Servis talep ettiğimizde gelmesi ne kadar sürer?", a: "İstanbul içinde ortalama 1-2 saat içinde teknik ekibimiz adresinize ulaşır. Acil durumlarda bu süre daha da kısalır." },
  { q: "Servis hizmetinizin garantisi var mıdır?", a: "Tüm servis ve onarım hizmetlerimiz garanti kapsamındadır. Kullanılan yedek parçalar üretici garantisi ile birlikte sunulur." },
  { q: "Servis hizmetinden kısa süre sonra aynı sorunu yaşamaya başladığımızda yeniden müdahale ücretli midir?", a: "Garanti süresi içinde aynı arızanın tekrarlaması durumunda yeniden müdahalemiz tamamen ücretsizdir." },
  { q: "Soğuk oda kurdurmak istiyorum. Keşif ücretli midir?", a: "İstanbul içi keşif hizmetimiz tamamen ücretsizdir. Ekibimiz adresinize gelerek detaylı bir keşif ve fiyat teklifi sunar." },
  { q: "Mevcut soğuk odamı taşımak istiyorum. Bu konuda hizmet veriyor musunuz?", a: "Evet, soğuk oda söküm, taşıma ve yeni adreste tekrar kurulum hizmetlerimiz mevcuttur." },
  { q: "Soğuk odamın dış ünitesinden gelen sesten komşularım şikayetçi. Ne yapabiliriz?", a: "Ses yalıtım kabini montajı, titreşim sönümleyici takviyesi veya kompresör değişimi gibi çözümlerle ses problemini ortadan kaldırabiliriz." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative z-10 bg-white py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-black tracking-widest text-xs md:text-sm">SIKÇA SORULAN SORULAR</span>
          <h2 className="text-lg md:text-4xl lg:text-5xl font-black tracking-tight mt-3 text-gray-900">
            Aklınızdaki Sorular
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex justify-between items-center text-left px-4 py-4 md:px-6 md:py-5 font-black text-xs md:text-base text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <span className="pr-4">{f.q}</span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="text-primary shrink-0" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 md:px-6 md:pb-5 text-xs md:text-base text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
