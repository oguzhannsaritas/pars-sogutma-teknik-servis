import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Hotel, UtensilsCrossed, Croissant, Coffee, Store, ChefHat, Phone, Images, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { sectorImageManifest } from "@/generated/image-manifest";

type Sector = {
  slug: string;
  icon: typeof Hotel;
  title: string;
  desc: string;
};

const sectors: Sector[] = [
  { slug: "oteller", icon: Hotel, title: "Oteller", desc: "Otellerin mutfak, restoran ve depo soğutma sistemlerinde kesintisiz hizmet." },
  { slug: "restoranlar", icon: UtensilsCrossed, title: "Restoranlar", desc: "Restoran mutfaklarındaki soğuk oda ve teşhir dolaplarının bakım ve onarımı." },
  { slug: "firin-pastane", icon: Croissant, title: "Fırın & Pastaneler", desc: "Fırın ve pastanelerin hamur mayalama, soğutma ve saklama üniteleri için servis." },
  { slug: "kafeler", icon: Coffee, title: "Kafeler", desc: "Kafelerin içecek soğutucuları ve vitrin dolaplarına hızlı teknik destek." },
  { slug: "marketler", icon: Store, title: "Marketler", desc: "Market ve süpermarket reyon dolapları, depo soğutmasının periyodik bakımı." },
  { slug: "gida-uretim", icon: ChefHat, title: "Gıda Üretim Tesisleri", desc: "Gıda üretim ve toptan satış tesislerinin soğuk zincir altyapısına profesyonel servis." },
];

type SectorGalleryImage = {
  src: string;
  alt: string;
};

function SectorImage({ src, icon: Icon, alt }: { src: string; icon: Sector["icon"]; alt: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="aspect-square rounded-xl bg-primary-light flex items-center justify-center">
        <Icon className="text-primary/30" size={32} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className="aspect-square rounded-xl object-contain object-center bg-[#f1f5f9] w-full h-full"
    />
  );
}

const PAGE_SIZE = 4;

const getSectorImages = (sector: Sector): SectorGalleryImage[] => {
  const images = sectorImageManifest[sector.slug as keyof typeof sectorImageManifest] ?? [];

  return images.map((src, index) => ({
    src,
    alt: `${sector.title} ${index + 1}`,
  }));
};

function SectorGallery({ sector }: { sector: Sector }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const images = getSectorImages(sector);

  const pageCount = Math.ceil(images.length / PAGE_SIZE);
  const pages = Array.from({ length: pageCount }, (_, p) =>
    images.slice(p * PAGE_SIZE, p * PAGE_SIZE + PAGE_SIZE)
  );

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => ro.disconnect();
  }, [sector, images.length]);

  const scrollByPage = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        onScroll={updateScrollState}
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
      >
        {pages.map((indices, p) => (
          <div key={p} className="grid grid-cols-2 grid-rows-2 gap-3 shrink-0 w-full snap-start">
            {indices.map((image) => (
              <SectorImage
                key={image.src}
                src={image.src}
                icon={sector.icon}
                alt={image.alt}
              />
            ))}
          </div>
        ))}
      </div>

      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scrollByPage(-1)}
          aria-label="Önceki görseller"
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-md border border-gray-100 rounded-full w-9 h-9 flex items-center justify-center text-primary hover:bg-white"
        >
          <ChevronLeft size={18} />
        </button>
      )}
      {canScrollRight && (
        <button
          type="button"
          onClick={() => scrollByPage(1)}
          aria-label="Sonraki görseller"
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-md border border-gray-100 rounded-full w-9 h-9 flex items-center justify-center text-primary hover:bg-white"
        >
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  );
}

export default function Sectors() {
  const [selected, setSelected] = useState<Sector | null>(null);

  return (
    <section id="sectors" className="relative z-10 bg-[#f9fafb] py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-black tracking-widest text-xs md:text-sm">SEKTÖRLER</span>
          <h2 className="text-lg md:text-4xl lg:text-5xl font-black tracking-tight mt-3 text-gray-900">
            Hizmet Verdiğimiz Sektörler
          </h2>
          <p className="text-muted-foreground text-xs md:text-lg mt-4">
            Otelden restorana, fırından markete kadar gıda ve soğutma zincirinin her
            noktasında yanınızdayız. Görselleri görmek için bir sektöre tıklayın.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {sectors.map((s, i) => (
            <motion.button
              key={s.title}
              type="button"
              onClick={() => setSelected(s)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(51,65,85,0.15)" }}
              className="text-left cursor-pointer bg-white border border-gray-100 rounded-2xl p-5 md:p-7"
            >
              <div className="flex items-start justify-between">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="bg-primary-light text-primary w-14 h-14 rounded-full flex items-center justify-center mb-5"
                >
                  <s.icon size={26} />
                </motion.div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-[#f1f5f9] text-black shadow-sm">
                  <ArrowUpRight size={18} />
                </span>
              </div>
              <h3 className="text-base md:text-xl font-black text-gray-900">{s.title}</h3>
              <p className="text-muted-foreground text-xs md:text-base mt-2">{s.desc}</p>
              <span className="inline-flex items-center gap-1.5 text-primary font-bold text-xs md:text-sm mt-4">
                <Images size={14} /> Görselleri Gör
              </span>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 md:mt-16 bg-primary rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div>
            <h3 className="text-white font-black text-base md:text-2xl">
              Sektörünüzü listede göremediniz mi?
            </h3>
            <p className="text-gray-300 text-xs md:text-base mt-2">
              İşletmenizin soğutma ihtiyacı ne olursa olsun bize ulaşın, hemen çözüm sunalım.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href="tel:+905431707277" className="text-center bg-white text-primary hover:bg-gray-100 font-bold px-6 py-3 rounded-full text-xs md:text-sm transition-colors inline-flex items-center justify-center gap-2">
              <Phone size={14} /> SERVİS ÇAĞIR
            </a>
            <a href="https://wa.me/905431707277" className="text-center bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-3 rounded-full text-xs md:text-sm inline-flex items-center justify-center gap-2">
              <WhatsAppIcon size={14} /> Whatsapp ULAŞ
            </a>
          </div>
        </motion.div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-xl max-h-[85vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary-light text-primary w-11 h-11 rounded-full flex items-center justify-center shrink-0">
                    <selected.icon size={20} />
                  </div>
                  <DialogTitle>{selected.title}</DialogTitle>
                </div>
                <DialogDescription className="pt-2">{selected.desc}</DialogDescription>
              </DialogHeader>

              <SectorGallery sector={selected} key={selected.slug} />

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <a href="tel:+905431707277" className="flex-1 text-center border border-gray-200 text-primary hover:bg-primary hover:text-white font-bold px-4 py-2.5 rounded-full text-sm transition-colors inline-flex items-center justify-center gap-2">
                  <Phone size={14} /> SERVİS ÇAĞIR
                </a>
                <a href="https://wa.me/905431707277" className="flex-1 text-center bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-4 py-2.5 rounded-full text-sm inline-flex items-center justify-center gap-2">
                  <WhatsAppIcon size={14} /> Whatsapp ULAŞ
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
