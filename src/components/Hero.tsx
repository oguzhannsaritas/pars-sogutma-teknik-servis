import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const stats = ["7/24 Destek"];

export default function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.92]);
  const y = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <section
      id="hero"
      className="sticky top-0 h-screen w-full overflow-hidden flex items-center"
      style={{ zIndex: 0 }}
    >
      {/* Arka plan resmi — mobil */}
      <img
        src="/teknik-servis-mobil.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
      />
      {/* Arka plan resmi — masaüstü */}
      <img
        src="/teknik-servis.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
      />
      {/* Koyu overlay */}
      <div className="absolute inset-0 bg-[#111827]/75" />

      {/* Decorative blurred circle */}
      <div className="absolute top-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-primary opacity-10 blur-3xl rounded-full pointer-events-none" />

      {/* Floating dots */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-primary/40 rounded-full"
          style={{
            left: `${15 + i * 20}%`,
            top: `${20 + (i % 2) * 50}%`,
          }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-2 bg-white border border-white/60 text-gray-900 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-green-600 animate-caret-blink" /> 7/24 Teknik Destek
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight"
        >
          Pars Soğutma
          <br />
          <span className="text-white">Teknik Servisi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-gray-300 text-xs md:text-lg mt-6 max-w-2xl"
        >
          Soğuk oda, soğuk hava deposu, buzhane ve tüm endüstriyel soğutma sistemleriniz
          için profesyonel servis hizmeti.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-3 mt-8"
        >
          <motion.a
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.03 }}
            href="tel:+905431707277"
            className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 md:px-7 md:py-3.5 rounded-full inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Phone size={18} /> SERVİS ÇAĞIR
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.03 }}
            href="https://wa.me/905431707277"
            className="bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-3 md:px-7 md:py-3.5 rounded-full inline-flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <WhatsAppIcon size={18} /> Whatsapp'tan Ulaş
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
}
