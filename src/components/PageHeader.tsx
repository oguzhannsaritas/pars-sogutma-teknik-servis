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
    <header className="relative flex h-[200px] w-full max-w-full items-center overflow-hidden bg-[#111827] px-4 text-white md:px-6">
      <div className="mx-auto w-full max-w-7xl min-w-0 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="break-words text-[36px] font-black uppercase leading-tight tracking-tight [overflow-wrap:anywhere]"
        >
          {title}
        </motion.h1>

        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          aria-label="Breadcrumb"
          className="mt-4 flex max-w-full min-w-0 flex-wrap items-center justify-center gap-2 text-[24px] font-black uppercase leading-snug tracking-widest"
        >
          {breadcrumbs.map((item, index) => (
            <span
              key={`${item.label}-${index}`}
              className="inline-flex min-w-0 max-w-full flex-wrap items-center justify-center gap-2"
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="max-w-full break-words text-white/50 transition-colors hover:text-white [overflow-wrap:anywhere]"
                >
                  {item.label}
                </a>
              ) : (
                <span className="max-w-full break-words text-white [overflow-wrap:anywhere]">
                  {item.label}
                </span>
              )}
              {index < breadcrumbs.length - 1 && <span className="text-white/45">/</span>}
            </span>
          ))}
        </motion.nav>
      </div>
    </header>
  );
}
