import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 232, suffix: "", label: "Memnun Müşteri" },
  { value: 521, suffix: "", label: "Yıllık Servis Sayısı" },
  { value: 1200, suffix: "+", label: "Aktif Servis Saati" },
  { value: 40, suffix: "+", label: "Yıllık Deneyim" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1500;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{n}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative z-10 bg-white py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(51,65,85,0.2)" }}
            className="border border-gray-200 rounded-2xl p-4 md:p-6 text-center bg-white transition-shadow"
          >
            <div className="text-3xl md:text-5xl font-black text-primary">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="text-xs md:text-sm text-gray-500 mt-2 font-bold uppercase tracking-wider">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
