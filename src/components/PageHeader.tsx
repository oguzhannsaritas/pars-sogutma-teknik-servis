import { motion } from "framer-motion";

type Breadcrumb = {
  label: string;
  href?: string;
};

type PageHeaderProps = {
  title: string;
  breadcrumbs: Breadcrumb[];
};

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <header className="relative flex h-50 items-center bg-[#111827] text-white px-4 md:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="lg:text-[36px] md:text-lg font-black tracking-tight uppercase"
        >
          {title}
        </motion.h1>

        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          aria-label="Breadcrumb"
          className="mt-6 flex flex-wrap items-center justify-center gap-2 md:text-sm lg:text-2xl font-black tracking-widest uppercase"
        >
          {breadcrumbs.map((item, index) => (
            <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
              {item.href ? (
                <a href={item.href} className="text-white/50  transition-colors hover:text-white">
                  {item.label}
                </a>
              ) : (
                <span className="text-white ">{item.label}</span>
              )}
              {index < breadcrumbs.length - 1 && <span className="text-white/45">/</span>}
            </span>
          ))}
        </motion.nav>
      </div>
    </header>
  );
}
