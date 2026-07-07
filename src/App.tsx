import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Sectors from "@/components/Sectors";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ServiceDetail from "@/pages/ServiceDetail";
import { getServiceByPath } from "@/data/services";
import SEO from "@/components/SEO";
import { getHomeSeo, getServiceSeo } from "@/lib/seo-data";

export default function App() {
  const service = getServiceByPath(window.location.pathname);
  const seo = service ? getServiceSeo(service) : getHomeSeo();

  return (
    <div className="bg-white">
      <SEO seo={seo} />
      <Navbar />
      {service ? (
        <ServiceDetail service={service} />
      ) : (
        <>
          <Hero />
          <div className="relative">
            <About />
            <Stats />
            <Services />
            <Sectors />
            <FAQ />
            <Contact />
          </div>
        </>
      )}
      <div className="relative">
        <Footer />
      </div>
      <WhatsAppFloat />
    </div>
  );
}
