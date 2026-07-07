import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import type { KeyboardEvent, MouseEvent } from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { services, type Service } from "@/data/services";
import { useServiceCoverImage } from "@/lib/service-images";

const navigateToService = (path: string) => {
  window.location.href = path;
};

const handleCardClick = (path: string, event: MouseEvent<HTMLElement>) => {
  if ((event.target as HTMLElement).closest("a")) return;
  navigateToService(path);
};

const handleCardKeyDown = (path: string, event: KeyboardEvent<HTMLElement>) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  navigateToService(path);
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const coverImage = useServiceCoverImage(service);

  return (
    <motion.article
      key={service.title}
      role="link"
      tabIndex={0}
      aria-label={`${service.title} sayfasına git`}
      onClick={(event) => handleCardClick(service.path, event)}
      onKeyDown={(event) => handleCardKeyDown(service.path, event)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.35)" }}
      className="group relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-primary cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#111827]"
    >
      {coverImage && (
        <img
          src={coverImage.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/65 to-[#111827]/20" />

      <div className="relative z-10 flex min-h-[360px] flex-col justify-between p-5 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="bg-white/90 text-primary w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-lg"
          >
            <service.icon size={26} />
          </motion.div>
          <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-black shadow-sm">
            <ArrowUpRight size={20} />
          </span>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-black text-white">{service.title}</h3>
          <p className="text-white/80 text-sm md:text-base mt-2 mb-6">{service.desc}</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <a href="tel:+905431707277" className="flex-1 text-center bg-white/95 text-primary hover:bg-white font-bold px-4 py-2.5 rounded-full text-xs md:text-sm transition-colors inline-flex items-center justify-center gap-2">
              <Phone size={14} /> SERVİS ÇAĞIR
            </a>
            <a href="https://wa.me/905431707277" className="flex-1 text-center bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-4 py-2.5 rounded-full text-sm inline-flex items-center justify-center gap-2">
              <WhatsAppIcon size={14} /> Whatsapp ULAŞ
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

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
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
