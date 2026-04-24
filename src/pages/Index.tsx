import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Valori from "@/components/sections/Valori";
import Servizi from "@/components/sections/Servizi";
import Processo from "@/components/sections/Processo";
import Faq from "@/components/sections/Faq";
import Clienti from "@/components/sections/Clienti";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/sections/WhatsAppButton";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ticker1 = [
  "Naming aziendale",
  "Logo & identità",
  "Insegne & vetrine",
  "Social media design",
  "Fotografia corporate",
  "Video istituzionale",
  "Brand strategy",
  "Restyling",
];

const ticker2 = [
  "Brand strategy",
  "Restyling",
  "Naming",
  "Logo & identità",
  "Insegne",
  "Video corporate",
  "Fotografia",
  "Social design",
];

const Index = () => {
  useScrollReveal();
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Ticker items={ticker1} />
      <About />
      <Ticker items={ticker2} reverse />
      <Portfolio />
      <Valori />
      <Servizi />
      <Processo />
      <Faq />
      <Clienti />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
