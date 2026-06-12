import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const infos = [
  { icon: MapPin, title: "Adres", text: "Mimar Sinan, Cuma Cd. No: 7 İç Kapı No: 2, 34920 Sultanbeyli/İstanbul" },
  { icon: Mail, title: "E-posta", text: "info@parsogutma.com" },
  { icon: Phone, title: "Telefon", text: "+90 543 170 72 77" },
  { icon: Phone, title: "Telefon 2", text: "+90 537 645 82 91" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent("TEKNİK SERVİS");
    const body = encodeURIComponent(
      `Ad Soyad: ${name}\nTelefon: ${phone}\nE-posta: ${email}\n\nMesaj:\n${message}`
    );

    window.location.href = `mailto:info@parsogutma.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative z-10 bg-[#f9fafb] pt-16 md:pt-24 pb-40 md:pb-56 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary font-black tracking-widest text-xs md:text-sm">İLETİŞİM</span>
          <h2 className="text-lg md:text-4xl lg:text-5xl font-black tracking-tight mt-3 text-gray-900">
            Bize Ulaşın
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-md h-48 md:h-72">
              <iframe
                title="Konum"
                src="https://www.google.com/maps?q=Mimar+Sinan+Mahallesi+Cuma+Caddesi+No:7+Sultanbeyli+Istanbul&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
            <div className="grid sm:grid-cols-1 gap-3 mt-5">
              {infos.map((info, i) => (
                <motion.div
                  key={`${info.title}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                  whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(51,65,85,0.2)" }}
                  className="bg-white border border-gray-100 rounded-2xl p-5 flex gap-4 items-start"
                >
                  <div className="bg-primary-light text-primary p-3 rounded-full shrink-0">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <div className="font-black text-xs md:text-base text-gray-900">{info.title}</div>
                    <div className="text-muted-foreground text-xs md:text-sm mt-1">{info.text}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl p-5 md:p-8 shadow-md border border-gray-100 relative"
          >
            <h3 className="text-lg md:text-2xl font-black text-gray-900 mb-6">Mesaj Gönder</h3>

            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-4 left-4 right-4 bg-primary text-white px-4 py-3 rounded-xl flex items-center gap-2 font-bold text-sm z-10"
              >
                Mail uygulamanız açılıyor...
              </motion.div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="name"
                required
                placeholder="Ad Soyad"
                className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
              />
              <input
                name="phone"
                required
                placeholder="Telefon"
                className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
              />
            </div>
            <input
              name="email"
              required
              type="email"
              placeholder="E-posta"
              className="w-full mt-4 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition text-sm"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Mesaj"
              className="w-full mt-4 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none text-sm"
            />
            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.01 }}
              type="submit"
              className="w-full mt-5 bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-full transition-colors"
            >
              Gönder
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
