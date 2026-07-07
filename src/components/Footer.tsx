import { motion } from "framer-motion";
import { TwitterIcon, FacebookIcon, InstagramIcon, LinkedinIcon, YoutubeIcon, PinterestIcon } from "./SocialIcons";
import { services } from "@/data/services";

const cols = [
  {
    title: "Kurumsal",
    links: [
      { label: "Hakkımızda", href: "/#about" },
      { label: "Hizmetlerimiz", href: "/#services" },
      { label: "SSS", href: "/#faq" },
      { label: "İletişim", href: "/#contact" },
    ],
  },
  {
    title: "Hizmetlerimiz",
    links: services.map((service) => ({ label: service.title, href: service.path })),
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { x: -20, opacity: 0 }, show: { x: 0, opacity: 1 } };

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#111827] text-gray-300 pt-16 pb-6 px-6">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-full">
        <svg viewBox="0 0 1440 320" className="w-full h-[100px] md:h-[200px] block" preserveAspectRatio="none">
          <path fill="#334155" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,197.3C672,224,768,224,864,208C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          <path fill="#1e293b" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,229.3C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          <path fill="#111827" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10"
      >
        <motion.div variants={item} className="col-span-2">
          <div className="text-xl md:text-2xl font-black">
            <span className="text-white">Pars Soğutma</span> <span className="text-white">Teknik Servis</span>
          </div>
          <p className="mt-4 text-gray-400 text-xs md:text-base max-w-md leading-relaxed">
            Pars Soğutma güvencesiyle 7/24 endüstriyel ve ticari soğutma servisi hizmeti.
          </p>
          <div className="flex gap-3 mt-6 flex-wrap">
            {[
              { Icon: InstagramIcon, href: "https://www.instagram.com/parsogutma/", label: "Instagram", color: "#E1306C" },
              { Icon: TwitterIcon, href: "https://x.com/ParsSogutma", label: "Twitter/X", color: "#000" },
              { Icon: YoutubeIcon, href: "https://www.youtube.com/@parssogutma/videos", label: "YouTube", color: "#FF0000" },
              { Icon: PinterestIcon, href: "https://tr.pinterest.com/parsogutma/", label: "Pinterest", color: "#E60023" },
              { Icon: LinkedinIcon, href: "https://www.linkedin.com/in/parsogutma", label: "LinkedIn", color: "#0A66C2" },
              { Icon: FacebookIcon, href: "https://www.facebook.com/parsogutma/", label: "Facebook", color: "#1877F2" },
            ].map(({ Icon, href, label, color }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                style={{ color }}
                className="bg-white hover:bg-gray-100 p-2.5 rounded-full transition-colors">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {cols.map((c) => (
          <motion.div key={c.title} variants={item} className="text-center lg:text-left">
            <h4 className="text-white font-black text-xs md:text-base mb-4">{c.title}</h4>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-primary transition-colors text-xs md:text-sm">{l.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-xs md:text-sm text-gray-500 text-center">
        © Copyright Pars Soğutma. Tüm Hakları Saklıdır. Bu hizmet bir Pars Soğutma iştirakidir.
      </div>
    </footer>
  );
}
