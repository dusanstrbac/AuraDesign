import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Philosophy from "@/components/Philosophy";
import PortfolioGrid from "@/components/PortfolioGrid";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Philosophy />
      <PortfolioGrid />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
