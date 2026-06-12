import { motion } from "framer-motion";
import { Shield, Clock, Check, Phone } from "lucide-react";

const features = [
  { icon: Shield, title: "Orijinal Yedek Parça", desc: "Tüm onarımlarımızda yalnızca orijinal ve üretici onaylı yedek parça kullanırız." },
  { icon: Clock, title: "7/24 Teknik Destek", desc: "Acil müdahale gerektiren durumlarda gece-gündüz yanınızdayız." },
  { icon: Check, title: "Garantili İşçilik", desc: "Tüm servis ve onarım hizmetlerimiz garanti kapsamındadır." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ borderRadius: "32px 32px 0 0", marginTop: "100vh", zIndex: 10 }}
      className="relative bg-[#f9fafb] py-16 md:py-24 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-primary font-black tracking-widest text-xs md:text-sm">HAKKIMIZDA</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900">
            Pars Soğutma Güvencesiyle Soğutma Servisi
          </h2>
          <p className="text-muted-foreground text-xs md:text-lg mt-6 leading-relaxed">
            40 yıllık sektör deneyimimiz ve uzman teknik kadromuzla, İstanbul genelinde
            endüstriyel ve ticari soğutma sistemlerinizin kurulum, bakım ve onarım hizmetlerini
            profesyonel olarak sunuyoruz.
          </p>
          <p className="text-muted-foreground text-xs md:text-lg mt-4 leading-relaxed">
            Soğuk oda, soğuk hava deposu, buzhane, chiller ve reyon dolaplarınız için 7/24
            kesintisiz teknik destek sağlıyor; orijinal yedek parça ve garantili işçilik
            taahhüdüyle çalışıyoruz.
          </p>
          <motion.a
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.03 }}
            href="tel:+905431707277"
            className="inline-flex items-center gap-2 mt-6 md:mt-8 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 md:px-7 md:py-3.5 rounded-full"
          >
            <Phone size={18} /> Hemen Ara
          </motion.a>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-5"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(51,65,85,0.2)" }}
              className="bg-white border border-gray-100 rounded-2xl p-6 flex gap-5 items-start transition-shadow"
            >
              <div className="bg-primary-light text-primary p-3 rounded-full shrink-0">
                <f.icon size={24} />
              </div>
              <div>
                <h3 className="font-black text-xs md:text-lg text-gray-900">{f.title}</h3>
                <p className="text-muted-foreground text-xs md:text-base mt-1">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>
    </motion.section>
  );
}
