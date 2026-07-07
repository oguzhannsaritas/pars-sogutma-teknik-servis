import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Anasayfa", href: "#hero", id: "hero" },
  { label: "Hakkımızda", href: "#about", id: "about" },
  { label: "Hizmetlerimiz", href: "#services", id: "services" },
  { label: "Sektörler", href: "#sectors", id: "sectors" },
  { label: "SSS", href: "#faq", id: "faq" },
  { label: "İletişim", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const isHome = window.location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 20));
  }, [scrollY]);

  useEffect(() => {
    if (!isHome) return;

    const ids = links.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -65% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  const getLinkHref = (href: string) => (isHome ? href : `/${href}`);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`sticky top-0 z-50 bg-white transition-shadow overflow-visible ${scrolled ? "shadow-md" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href={isHome ? "#hero" : "/"} className="flex items-center">
            <img src="/pars-logo.webp" alt="Pars Soğutma Servis" decoding="async" className="h-12 sm:h-14 md:h-20 w-auto object-contain" />
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => {
              const isActive = isHome && activeSection === l.id;
              return (
                <a
                  key={l.href}
                  href={getLinkHref(l.href)}
                  className={`relative font-bold transition-colors pb-1 ${
                    isActive ? "text-primary" : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            <motion.a
              href="tel:+905431707277"
              whileTap={{ scale: 0.96 }}
              whileHover={{ scale: 1.03 }}
              className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-2.5 rounded-full inline-flex items-center gap-2"
            >
              <Phone size={16} /> Servis Çağır
            </motion.a>
          </div>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobil Bottom Sheet — nav dışında, fixed pozisyon nav transform'undan etkilenmiyor */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="bottomsheet"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 280 }}
              drag="y"
              dragConstraints={{ top: 0 }}
              dragElastic={{ top: 0, bottom: 0.4 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > 80 || info.velocity.y > 400) setOpen(false);
              }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl lg:hidden"
            >
              {/* Sürükleme kolu */}
              <div className="flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing select-none">
                <div className="w-10 h-1.5 bg-gray-200 rounded-full" />
              </div>

              <div className="px-6 pt-4 pb-10 flex flex-col">
                {links.map((l) => {
                  const isActive = isHome && activeSection === l.id;
                  return (
                    <a
                      key={l.href}
                      href={getLinkHref(l.href)}
                      onClick={() => setOpen(false)}
                      className={`font-bold text-lg py-4 border-b border-gray-100 transition-colors ${
                        isActive ? "text-primary" : "text-gray-800"
                      }`}
                    >
                      {l.label}
                    </a>
                  );
                })}
                <motion.a
                  href="tel:+905431707277"
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 bg-primary text-white text-center font-bold py-3.5 rounded-full inline-flex items-center justify-center gap-2"
                >
                  <Phone size={16} /> Servis Çağır
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
