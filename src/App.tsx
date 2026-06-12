import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function App() {
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
