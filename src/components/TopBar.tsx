import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { TwitterIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="hidden sm:block bg-primary text-white text-sm w-full"
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center gap-2 md:gap-4">
          <a href="mailto:info@parsogutma.com" className="hidden sm:flex items-center gap-1.5 hover:opacity-80 text-xs md:text-sm">
            <Mail size={13} /> info@parsogutma.com
          </a>
          <a href="tel:+905431707277" className="flex items-center gap-1.5 hover:opacity-80 text-xs md:text-sm">
            <Phone size={13} /> <span className="hidden xs:inline">+90 543 170 72 77</span><span className="xs:hidden">543 170 72 77</span>
          </a>
          <a href="tel:+905376458291" className="hidden md:flex items-center gap-1.5 hover:opacity-80 text-xs md:text-sm">
            <Phone size={13} /> +90 537 645 82 91
          </a>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <a href="#" aria-label="Twitter"><TwitterIcon size={14} /></a>
          <a href="#" aria-label="Facebook"><FacebookIcon size={14} /></a>
          <a href="#" aria-label="Instagram"><InstagramIcon size={14} /></a>
          <a href="#" aria-label="LinkedIn" className="hidden sm:block"><LinkedinIcon size={14} /></a>
        </div>
      </div>
    </motion.div>
  );
}
