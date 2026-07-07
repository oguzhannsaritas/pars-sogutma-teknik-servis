import { motion } from "framer-motion";
import { useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Service } from "@/data/services";
import { useServiceImages } from "@/lib/service-images";

type ServiceDetailProps = {
  service: Service;
};

function ServiceGallery({ service }: ServiceDetailProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const images = useServiceImages(service);
  const selectedImage = selectedIndex === null ? null : images[selectedIndex];
  const selectedPosition = selectedIndex === null ? 0 : selectedIndex + 1;
  const hasMultipleImages = images.length > 1;

  const showPreviousImage = () => {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return current === 0 ? images.length - 1 : current - 1;
    });
  };

  const showNextImage = () => {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return current === images.length - 1 ? 0 : current + 1;
    });
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (!hasMultipleImages) return;
    if ((event.target as HTMLElement).closest("button")) return;

    const touch = event.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (!hasMultipleImages || touchStartX.current === null || touchStartY.current === null) return;

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return;

    if (deltaX > 0) {
      showPreviousImage();
    } else {
      showNextImage();
    }
  };

  if (images.length === 0) return null;

  return (
    <section className="mb-[100px] bg-white px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {images.map((image, index) => (
            <motion.button
              key={`${image.src}-${index}`}
              type="button"
              aria-label={`${image.alt} görselini aç`}
              onClick={() => setSelectedIndex(index)}
              whileHover={{ y: -6 }}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="aspect-[4/3] w-full bg-primary-light object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") showPreviousImage();
            if (event.key === "ArrowRight") showNextImage();
          }}
          className="inset-0 left-0 top-0 h-dvh w-full max-w-full translate-x-0 translate-y-0 place-items-center gap-0 border-0 bg-transparent p-4 shadow-none outline-none sm:rounded-none md:p-6 [&>button]:fixed [&>button]:right-4 [&>button]:top-4 [&>button]:z-30 [&>button]:flex [&>button]:h-12 [&>button]:w-12 [&>button]:items-center [&>button]:justify-center [&>button]:rounded-none [&>button]:bg-transparent [&>button]:text-white [&>button]:opacity-100 [&>button]:shadow-none [&>button_svg]:h-8 [&>button_svg]:w-8"
        >
          {selectedImage && (
            <div
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="relative flex h-full w-full touch-pan-y select-none items-center justify-center"
            >
              <DialogTitle className="sr-only">{selectedImage.alt}</DialogTitle>
              <DialogDescription className="sr-only">{service.title}</DialogDescription>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[calc(100dvh-6rem)] w-auto max-w-[calc(100dvw-2rem)] object-contain md:max-h-[calc(100dvh-5rem)] md:max-w-[min(82vw,1160px)]"
              />

              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    aria-label="Önceki görsel"
                    className="fixed left-3 md:left-8 top-1/2 z-20 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 text-white flex items-center justify-center transition hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <ChevronLeft size={42} strokeWidth={2.4} />
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    aria-label="Sonraki görsel"
                    className="fixed right-3 md:right-8 top-1/2 z-20 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 text-white flex items-center justify-center transition hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <ChevronRight size={42} strokeWidth={2.4} />
                  </button>
                  <div className="fixed bottom-5 left-1/2 z-20 -translate-x-1/2 rounded-full bg-black/45 px-4 py-1.5 text-sm font-bold text-white md:bottom-7">
                    {selectedPosition} / {images.length}
                  </div>
                </>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ServiceSeoContent({ service }: ServiceDetailProps) {
  return (
    <section className="bg-[#f9fafb] px-4 md:px-6 py-12 mb-[100px] md:py-16">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-[minmax(0,1fr)_360px] gap-8 lg:gap-12">
        <div>
          <span className="text-primary font-black tracking-widest text-xs md:text-sm uppercase">
            İstanbul Teknik Servis
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 mt-3">
            İstanbul {service.title}
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mt-4">
            {service.lead}
          </p>
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mt-4">
            Pars Soğutma, İstanbul genelinde endüstriyel ve ticari soğutma
            sistemleri için arıza tespiti, bakım, onarım ve kurulum desteği sunar.
            İşletmenizin soğuk zincir ihtiyacına uygun, hızlı ve garantili teknik
            servis süreci planlanır.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-5 md:p-6">
          <h3 className="text-lg md:text-xl font-black text-gray-900">Hizmet Kapsamı</h3>
          <ul className="mt-4 space-y-3">
            {service.highlights.map((highlight) => (
              <li key={highlight} className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <main className="bg-white">
      <PageHeader
        title={service.title}
        breadcrumbs={[
          { label: "Anasayfa", href: "/" },
          { label: service.title },
        ]}
      />
      <ServiceGallery service={service} />
      <ServiceSeoContent service={service} />
    </main>
  );
}
