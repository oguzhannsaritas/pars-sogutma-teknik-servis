import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "İstanbul Soğutma Servisi | 7/24 Endüstriyel Soğutma Servisi" },
      { name: "description", content: "Frigobien güvencesiyle 40 yıllık deneyim. Soğuk oda, soğuk hava deposu, buzhane ve endüstriyel soğutma sistemleri için 7/24 İstanbul servisi." },
      { property: "og:title", content: "İstanbul Soğutma Servisi" },
      { property: "og:description", content: "İstanbul genelinde 7/24 endüstriyel soğutma servisi. Garantili işçilik, orijinal yedek parça." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <Stats />
        <Services />
        <FAQ />
        <Contact />
        <Footer />
      </div>
      <WhatsAppFloat />
    </div>
  );
}
