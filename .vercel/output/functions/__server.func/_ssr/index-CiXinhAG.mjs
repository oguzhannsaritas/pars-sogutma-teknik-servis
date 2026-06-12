import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { u as useScroll, m as motion, A as AnimatePresence, a as useTransform, b as useInView } from "../_libs/framer-motion.mjs";
import { P as Phone, X, M as Menu, S as Shield, C as Clock, a as Check, b as Snowflake, W as Warehouse, T as Thermometer, c as Container, d as Milk, e as ShoppingCart, f as ChevronDown, g as MapPin, h as Mail } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const links = [
  { label: "Anasayfa", href: "#hero" },
  { label: "Hakkımızda", href: "#about" },
  { label: "Hizmetlerimiz", href: "#services" },
  { label: "SSS", href: "#faq" },
  { label: "İletişim", href: "#contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [activeSection, setActiveSection] = reactExports.useState("hero");
  const { scrollY } = useScroll();
  reactExports.useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 20));
  }, [scrollY]);
  reactExports.useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
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
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.nav,
      {
        initial: { y: -40, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 0.5, delay: 0.3 },
        className: `sticky top-0 z-50 bg-white transition-shadow overflow-visible ${scrolled ? "shadow-md" : ""}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 h-16 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#hero", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/pars-logo.png", alt: "Pars Soğutma Servis", className: "h-12 sm:h-14 md:h-20 w-auto object-contain" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-8", children: [
            links.map((l) => {
              const isActive = activeSection === l.href.replace("#", "");
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: l.href,
                  className: `relative font-bold transition-colors pb-1 ${isActive ? "text-primary" : "text-gray-700 hover:text-primary"}`,
                  children: [
                    l.label,
                    isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.span,
                      {
                        layoutId: "nav-underline",
                        className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full",
                        transition: { type: "spring", stiffness: 380, damping: 30 }
                      }
                    )
                  ]
                },
                l.href
              );
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.a,
              {
                href: "tel:+905431707277",
                whileTap: { scale: 0.96 },
                whileHover: { scale: 1.03 },
                className: "bg-primary hover:bg-primary-dark text-white font-bold px-6 py-2.5 rounded-full inline-flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16 }),
                  " Servis Çağır"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "lg:hidden p-2",
              onClick: () => setOpen(!open),
              "aria-label": "Menu",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 24 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 24 })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.2 },
          className: "fixed inset-0 bg-black/60 z-40 lg:hidden",
          onClick: () => setOpen(false)
        },
        "backdrop"
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { y: "100%" },
          animate: { y: 0 },
          exit: { y: "100%" },
          transition: { type: "spring", damping: 32, stiffness: 280 },
          drag: "y",
          dragConstraints: { top: 0 },
          dragElastic: { top: 0, bottom: 0.4 },
          onDragEnd: (_, info) => {
            if (info.offset.y > 80 || info.velocity.y > 400) setOpen(false);
          },
          className: "fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-3xl shadow-2xl lg:hidden",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-1.5 bg-gray-200 rounded-full" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 pt-4 pb-10 flex flex-col", children: [
              links.map((l) => {
                const isActive = activeSection === l.href.replace("#", "");
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: l.href,
                    onClick: () => setOpen(false),
                    className: `font-bold text-lg py-4 border-b border-gray-100 transition-colors ${isActive ? "text-primary" : "text-gray-800"}`,
                    children: l.label
                  },
                  l.href
                );
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.a,
                {
                  href: "tel:+905431707277",
                  whileTap: { scale: 0.97 },
                  className: "mt-6 bg-primary text-white text-center font-bold py-3.5 rounded-full inline-flex items-center justify-center gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16 }),
                    " Servis Çağır"
                  ]
                }
              )
            ] })
          ]
        },
        "bottomsheet"
      )
    ] }) })
  ] });
}
function WhatsAppIcon({ size = 24 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
    }
  );
}
function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.92]);
  const y = useTransform(scrollY, [0, 500], [0, -80]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "hero",
      className: "sticky top-0 h-screen w-full overflow-hidden flex items-center",
      style: { zIndex: 0 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/teknik-servis-mobil.png",
            alt: "",
            className: "absolute inset-0 w-full h-full object-cover object-center md:hidden"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/teknik-servis.png",
            alt: "",
            className: "absolute inset-0 w-full h-full object-cover object-center hidden md:block"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[#111827]/75" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-10 right-10 w-48 h-48 md:w-96 md:h-96 bg-primary opacity-10 blur-3xl rounded-full pointer-events-none" }),
        [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "absolute w-3 h-3 bg-primary/40 rounded-full",
            style: {
              left: `${15 + i * 20}%`,
              top: `${20 + i % 2 * 50}%`
            },
            animate: { y: [0, -20, 0] },
            transition: { duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.4 }
          },
          i
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            style: { opacity, scale, y },
            className: "relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.span,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4 },
                  className: "inline-flex items-center gap-2 bg-white border border-white/60 text-gray-900 px-4 py-1.5 rounded-full text-xs md:text-sm font-bold mb-6",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-green-600 animate-caret-blink" }),
                    " 7/24 Teknik Destek"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.h1,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.5 },
                  className: "text-lg sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight",
                  children: [
                    "Pars Soğutma",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Teknik Servisi" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.7 },
                  className: "text-gray-300 text-xs md:text-lg mt-6 max-w-2xl",
                  children: "Soğuk oda, soğuk hava deposu, buzhane ve tüm endüstriyel soğutma sistemleriniz için profesyonel servis hizmeti."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.9 },
                  className: "flex flex-col sm:flex-row gap-3 mt-8",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.a,
                      {
                        whileTap: { scale: 0.96 },
                        whileHover: { scale: 1.03 },
                        href: "tel:+905431707277",
                        className: "bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 md:px-7 md:py-3.5 rounded-full inline-flex items-center justify-center gap-2 w-full sm:w-auto",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 18 }),
                          " SERVİS ÇAĞIR"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      motion.a,
                      {
                        whileTap: { scale: 0.96 },
                        whileHover: { scale: 1.03 },
                        href: "https://wa.me/905431707277",
                        className: "bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-6 py-3 md:px-7 md:py-3.5 rounded-full inline-flex items-center justify-center gap-2 w-full sm:w-auto",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { size: 18 }),
                          " Whatsapp'tan Ulaş"
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
}
const features = [
  { icon: Shield, title: "Orijinal Yedek Parça", desc: "Tüm onarımlarımızda yalnızca orijinal ve üretici onaylı yedek parça kullanırız." },
  { icon: Clock, title: "7/24 Teknik Destek", desc: "Acil müdahale gerektiren durumlarda gece-gündüz yanınızdayız." },
  { icon: Check, title: "Garantili İşçilik", desc: "Tüm servis ve onarım hizmetlerimiz garanti kapsamındadır." }
];
const container$1 = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
};
const item$1 = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.section,
    {
      id: "about",
      initial: { y: 100 },
      whileInView: { y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      style: { borderRadius: "32px 32px 0 0", marginTop: "100vh", zIndex: 10 },
      className: "relative bg-[#f9fafb] py-16 md:py-24 px-4 md:px-6",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-black tracking-widest text-xs md:text-sm", children: "HAKKIMIZDA" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 60 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.3 },
              transition: { duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg md:text-4xl lg:text-5xl font-black tracking-tight text-gray-900", children: "Pars Soğutma Güvencesiyle Soğutma Servisi" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs md:text-lg mt-6 leading-relaxed", children: "40 yıllık sektör deneyimimiz ve uzman teknik kadromuzla, İstanbul genelinde endüstriyel ve ticari soğutma sistemlerinizin kurulum, bakım ve onarım hizmetlerini profesyonel olarak sunuyoruz." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs md:text-lg mt-4 leading-relaxed", children: "Soğuk oda, soğuk hava deposu, buzhane, chiller ve reyon dolaplarınız için 7/24 kesintisiz teknik destek sağlıyor; orijinal yedek parça ve garantili işçilik taahhüdüyle çalışıyoruz." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.a,
                  {
                    whileTap: { scale: 0.96 },
                    whileHover: { scale: 1.03 },
                    href: "tel:+905431707277",
                    className: "inline-flex items-center gap-2 mt-6 md:mt-8 bg-primary hover:bg-primary-dark text-white font-bold px-6 py-3 md:px-7 md:py-3.5 rounded-full",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 18 }),
                      " Hemen Ara"
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              variants: container$1,
              initial: "hidden",
              whileInView: "show",
              viewport: { once: true, amount: 0.2 },
              className: "flex flex-col gap-5",
              children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  variants: item$1,
                  whileHover: { y: -6, boxShadow: "0 20px 40px rgba(51,65,85,0.2)" },
                  className: "bg-white border border-gray-100 rounded-2xl p-6 flex gap-5 items-start transition-shadow",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary-light text-primary p-3 rounded-full shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { size: 24 }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-black text-xs md:text-lg text-gray-900", children: f.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs md:text-base mt-1", children: f.desc })
                    ] })
                  ]
                },
                f.title
              ))
            }
          )
        ] })
      ] })
    }
  );
}
const stats = [
  { value: 232, suffix: "", label: "Memnun Müşteri" },
  { value: 521, suffix: "", label: "Yıllık Servis Sayısı" },
  { value: 1200, suffix: "+", label: "Aktif Servis Saati" },
  { value: 40, suffix: "+", label: "Yıllık Deneyim" }
];
function Counter({ to, suffix }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1500;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    n,
    suffix
  ] });
}
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative z-10 bg-white py-12 md:py-20 px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.3 },
      transition: { duration: 0.5, delay: i * 0.1 },
      whileHover: { y: -6, boxShadow: "0 20px 40px rgba(51,65,85,0.2)" },
      className: "border border-gray-200 rounded-2xl p-4 md:p-6 text-center bg-white transition-shadow",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl md:text-5xl font-black text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.value, suffix: s.suffix }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs md:text-sm text-gray-500 mt-2 font-bold uppercase tracking-wider", children: s.label })
      ]
    },
    s.label
  )) }) });
}
const services = [
  { icon: Snowflake, title: "Soğutma Servisi", desc: "Tüm endüstriyel soğutma cihazlarınız için kapsamlı bakım ve onarım hizmeti." },
  { icon: Warehouse, title: "Soğuk Oda Servisi", desc: "Soğuk oda kurulum, bakım, arıza tespit ve onarım hizmetlerinde uzman ekip." },
  { icon: Thermometer, title: "Soğuk Hava Deposu Servisi", desc: "Soğuk hava depolarınızın sürekli verim sağlaması için periyodik servis." },
  { icon: Container, title: "Buzhane Servisi", desc: "Buzhane sistemlerinizin enerji verimli çalışması için bakım hizmeti." },
  { icon: Milk, title: "Sütlük Tamiri", desc: "Süt soğutma tanklarınızın tamiri, bakımı ve yedek parça desteği." },
  { icon: ShoppingCart, title: "Reyon Dolabı Servisi", desc: "Market reyonu ve teşhir dolaplarınız için hızlı ve garantili servis." }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "relative z-10 bg-[#111827] py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6 },
        className: "text-center max-w-2xl mx-auto mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-400 font-black tracking-widest text-xs md:text-sm", children: "HİZMETLERİMİZ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg md:text-4xl lg:text-5xl font-black tracking-tight mt-3 text-white", children: "Teknik Servis Hizmetlerimiz" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-400 text-xs md:text-lg mt-4", children: "Endüstriyel ve ticari soğutma sistemlerinizin her türlü ihtiyacında yanınızdayız." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.5, delay: i * 0.08 },
        whileHover: { y: -8, borderColor: "#e5e7eb" },
        className: "bg-white border-2 border-gray-100 rounded-2xl p-5 md:p-7",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              whileHover: { rotate: 10, scale: 1.1 },
              className: "bg-primary-light text-primary w-14 h-14 rounded-full flex items-center justify-center mb-5",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { size: 26 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base md:text-xl font-black text-gray-900", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs md:text-base mt-2 mb-6", children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+905431707277", className: "flex-1 text-center border-[1px] border-gray-200 text-primary hover:bg-primary hover:text-white font-bold px-4 py-2.5 rounded-full text-xs md:text-sm transition-colors inline-flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14 }),
              " SERVİS ÇAĞIR"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/905431707277", className: "flex-1 text-center bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold px-4 py-2.5 rounded-full text-sm inline-flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { size: 14 }),
              " Whatsapp ULAŞ"
            ] })
          ] })
        ]
      },
      s.title
    )) })
  ] }) });
}
const faqs = [
  { q: "Soğutma servisiniz hangi saatler aralığında hizmet vermektedir?", a: "Soğutma servisimiz 7/24 hizmet vermektedir. Acil durumlarda gece-gündüz fark etmeksizin teknik ekibimiz yanınızda olur." },
  { q: "Servis talep ettiğimizde gelmesi ne kadar sürer?", a: "İstanbul içinde ortalama 1-2 saat içinde teknik ekibimiz adresinize ulaşır. Acil durumlarda bu süre daha da kısalır." },
  { q: "Servis hizmetinizin garantisi var mıdır?", a: "Tüm servis ve onarım hizmetlerimiz garanti kapsamındadır. Kullanılan yedek parçalar üretici garantisi ile birlikte sunulur." },
  { q: "Servis hizmetinden kısa süre sonra aynı sorunu yaşamaya başladığımızda yeniden müdahale ücretli midir?", a: "Garanti süresi içinde aynı arızanın tekrarlaması durumunda yeniden müdahalemiz tamamen ücretsizdir." },
  { q: "Soğuk oda kurdurmak istiyorum. Keşif ücretli midir?", a: "İstanbul içi keşif hizmetimiz tamamen ücretsizdir. Ekibimiz adresinize gelerek detaylı bir keşif ve fiyat teklifi sunar." },
  { q: "Mevcut soğuk odamı taşımak istiyorum. Bu konuda hizmet veriyor musunuz?", a: "Evet, soğuk oda söküm, taşıma ve yeni adreste tekrar kurulum hizmetlerimiz mevcuttur." },
  { q: "Soğuk odamın dış ünitesinden gelen sesten komşularım şikayetçi. Ne yapabiliriz?", a: "Ses yalıtım kabini montajı, titreşim sönümleyici takviyesi veya kompresör değişimi gibi çözümlerle ses problemini ortadan kaldırabiliriz." }
];
function FAQ() {
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "relative z-10 bg-white py-16 md:py-24 px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6 },
        className: "text-center mb-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-black tracking-widest text-xs md:text-sm", children: "SIKÇA SORULAN SORULAR" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg md:text-4xl lg:text-5xl font-black tracking-tight mt-3 text-gray-900", children: "Aklınızdaki Sorular" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: faqs.map((f, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.4, delay: i * 0.05 },
          className: "border border-gray-200 rounded-2xl overflow-hidden bg-white",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setOpen(isOpen ? null : i),
                className: "w-full flex justify-between items-center text-left px-4 py-4 md:px-6 md:py-5 font-black text-xs md:text-base text-gray-900 hover:bg-gray-50 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pr-4", children: f.q }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { animate: { rotate: isOpen ? 180 : 0 }, transition: { duration: 0.3 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "text-primary shrink-0" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.3, ease: "easeInOut" },
                className: "overflow-hidden",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-4 pb-4 md:px-6 md:pb-5 text-xs md:text-base text-muted-foreground leading-relaxed", children: f.a })
              }
            ) })
          ]
        },
        i
      );
    }) })
  ] }) });
}
const infos = [
  { icon: MapPin, title: "Adres", text: "Mimar Sinan, Cuma Cd. No: 7 İç Kapı No: 2, 34920 Sultanbeyli/İstanbul" },
  { icon: Mail, title: "E-posta", text: "info@parsogutma.com" },
  { icon: Phone, title: "Telefon", text: "+90 543 170 72 77" },
  { icon: Phone, title: "Telefon 2", text: "+90 537 645 82 91" }
];
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.namedItem("name").value;
    const phone = form.elements.namedItem("phone").value;
    const email = form.elements.namedItem("email").value;
    const message = form.elements.namedItem("message").value;
    const subject = encodeURIComponent("TEKNİK SERVİS");
    const body = encodeURIComponent(
      `Ad Soyad: ${name}
Telefon: ${phone}
E-posta: ${email}

Mesaj:
${message}`
    );
    window.location.href = `mailto:info@parsogutma.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative z-10 bg-[#f9fafb] pt-16 md:pt-24 pb-40 md:pb-56 px-4 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.3 },
        transition: { duration: 0.6 },
        className: "text-center mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-black tracking-widest text-xs md:text-sm", children: "İLETİŞİM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg md:text-4xl lg:text-5xl font-black tracking-tight mt-3 text-gray-900", children: "Bize Ulaşın" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -60 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.7 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden shadow-md h-48 md:h-72", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "iframe",
              {
                title: "Konum",
                src: "https://www.google.com/maps?q=Mimar+Sinan+Mahallesi+Cuma+Caddesi+No:7+Sultanbeyli+Istanbul&output=embed",
                className: "w-full h-full border-0",
                loading: "lazy"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-1 gap-3 mt-5", children: infos.map((info, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, amount: 0.3 },
                transition: { duration: 0.4, delay: 0.15 + i * 0.1 },
                whileHover: { y: -4, boxShadow: "0 20px 40px rgba(51,65,85,0.2)" },
                className: "bg-white border border-gray-100 rounded-2xl p-5 flex gap-4 items-start",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-primary-light text-primary p-3 rounded-full shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(info.icon, { size: 20 }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-black text-xs md:text-base text-gray-900", children: info.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-xs md:text-sm mt-1", children: info.text })
                  ] })
                ]
              },
              `${info.title}-${i}`
            )) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.form,
        {
          onSubmit,
          initial: { opacity: 0, x: 60 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.7 },
          className: "bg-white rounded-2xl p-5 md:p-8 shadow-md border border-gray-100 relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg md:text-2xl font-black text-gray-900 mb-6", children: "Mesaj Gönder" }),
            sent && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, y: -16 },
                animate: { opacity: 1, y: 0 },
                className: "absolute top-4 left-4 right-4 bg-primary text-white px-4 py-3 rounded-xl flex items-center gap-2 font-bold text-sm z-10",
                children: "Mail uygulamanız açılıyor..."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  name: "name",
                  required: true,
                  placeholder: "Ad Soyad",
                  className: "border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  name: "phone",
                  required: true,
                  placeholder: "Telefon",
                  className: "border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                name: "email",
                required: true,
                type: "email",
                placeholder: "E-posta",
                className: "w-full mt-4 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                name: "message",
                required: true,
                rows: 5,
                placeholder: "Mesaj",
                className: "w-full mt-4 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none text-sm"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.button,
              {
                whileTap: { scale: 0.97 },
                whileHover: { scale: 1.01 },
                type: "submit",
                className: "w-full mt-5 bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-full transition-colors",
                children: "Gönder"
              }
            )
          ]
        }
      )
    ] })
  ] }) });
}
const YoutubeIcon = ({ size = 16, className }) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81ZM9.75 15.5v-7l6.5 3.5-6.5 3.5Z" }) });
const PinterestIcon = ({ size = 16, className }) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0Z" }) });
const TwitterIcon = ({ size = 16, className }) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-7.01L4.6 22H1.34l8.02-9.17L1 2h7.02l4.84 6.4L18.244 2Zm-1.2 18h1.86L7.04 4H5.05l11.994 16Z" }) });
const FacebookIcon = ({ size = 16, className }) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" }) });
const InstagramIcon = ({ size = 16, className }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className, "aria-hidden": "true", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
] });
const LinkedinIcon = ({ size = 16, className }) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43A2.06 2.06 0 1 1 5.35 3.3a2.06 2.06 0 0 1-.01 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.23 0Z" }) });
const cols = [
  {
    title: "Kurumsal",
    links: ["Hakkımızda", "Hizmetlerimiz", "SSS", "İletişim", "Yasal Şartlar", "Gizlilik"]
  },
  {
    title: "Hizmetlerimiz",
    links: ["Soğutma", "Soğuk Hava", "Soğuk Oda", "Chiller", "Buzhane"]
  }
];
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { x: -20, opacity: 0 }, show: { x: 0, opacity: 1 } };
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative z-10 bg-[#111827] text-gray-300 pt-16 pb-6 px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 1440 320", className: "w-full h-[100px] md:h-[200px] block", preserveAspectRatio: "none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#334155", fillOpacity: "1", d: "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,197.3C672,224,768,224,864,208C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#1e293b", fillOpacity: "1", d: "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,229.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#111827", fillOpacity: "1", d: "M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        variants: container,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.2 },
        className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: item, className: "lg:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xl md:text-2xl font-black", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Pars Soğutma" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white", children: "Teknik Servis" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-400 text-xs md:text-base max-w-md leading-relaxed", children: "Pars Soğutma güvencesiyle 7/24 endüstriyel ve ticari soğutma servisi hizmeti." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mt-6 flex-wrap", children: [
              { Icon: InstagramIcon, href: "https://www.instagram.com/parsogutma/", label: "Instagram", color: "#E1306C" },
              { Icon: TwitterIcon, href: "https://x.com/ParsSogutma", label: "Twitter/X", color: "#000" },
              { Icon: YoutubeIcon, href: "https://www.youtube.com/@parssogutma/videos", label: "YouTube", color: "#FF0000" },
              { Icon: PinterestIcon, href: "https://tr.pinterest.com/parsogutma/", label: "Pinterest", color: "#E60023" },
              { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/parsogutma", label: "LinkedIn", color: "#0A66C2" },
              { Icon: FacebookIcon, href: "https://www.facebook.com/parsogutma/", label: "Facebook", color: "#1877F2" }
            ].map(({ Icon, href, label, color }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": label,
                style: { color },
                className: "bg-white hover:bg-gray-100 p-2.5 rounded-full transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16 })
              },
              label
            )) })
          ] }),
          cols.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: item, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-white font-black text-xs md:text-base mb-4", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: c.links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-primary transition-colors text-xs md:text-sm", children: l }) }, l)) })
          ] }, c.title))
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-xs md:text-sm text-gray-500 text-center", children: "© Copyright Pars Soğutma. Tüm Hakları Saklıdır. Bu hizmet bir Pars Soğutma iştirakidir." })
  ] });
}
function WhatsAppFloat() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.a,
    {
      href: "https://wa.me/905431707277",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "WhatsApp",
      className: "fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg",
      animate: { scale: [1, 1.15, 1] },
      transition: { duration: 2, repeat: Infinity },
      whileHover: { scale: 1.2 },
      whileTap: { scale: 0.9 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { size: 26 })
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppFloat, {})
  ] });
}
export {
  Index as component
};
