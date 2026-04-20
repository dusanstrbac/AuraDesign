'use client';
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    number: "01",
    title: "Idejni Projekat",
    description: "Analiza prostora, definisanje koncepta, moodboard-ovi i funkcionalna organizacija. Ovo je faza gde tvoja vizija dobija prve obrise.",
    details: ["Moodboard", "2D Layout", "Koncept materijala"]
  },
  {
    number: "02",
    title: "3D Vizuelizacija",
    description: "Fotorealistični prikazi vašeg budućeg prostora. Omogućavamo vam da osetite atmosferu, osvetljenje i teksture pre nego što krene izvođenje.",
    details: ["High-end Renderi", "360° Prikaz", "Dizajn osvetljenja"]
  },
  {
    number: "03",
    title: "Glavni Projekat",
    description: "Detaljna tehnička dokumentacija neophodna za izvođenje radova. Crteži nameštaja po meri, planovi struje, vode i gipsarskih radova.",
    details: ["Radionički crteži", "Specifikacije", "Plan instalacija"]
  },
  {
    number: "04",
    title: "Nadzor i Realizacija",
    description: "Pratimo proces od prvog radnika do poslednjeg komada dekora. Osiguravamo da realnost bude identična projektu.",
    details: ["Koordinacija", "Kontrola kvaliteta", "Finalni styling"]
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      <Navbar variant="dark" />

      {/* Hero Sekcija */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif mb-12"
          >
            Naše <span className="italic text-gray-500">Usluge</span>
          </motion.h1>
          <p className="max-w-2xl text-gray-400 font-light text-lg leading-relaxed">
            Nudimo kompletan ciklus transformacije prostora — od inicijalne ideje do najsitnijeg detalja u enterijeru.
          </p>
        </div>
      </section>

      {/* Services List - Accordion/List Style */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto border-t border-white/10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-white/10 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start hover:bg-white/2 transition-colors px-4"
            >
              {/* Broj */}
              <div className="md:col-span-1 text-gold-500 font-serif text-xl">
                {service.number}.
              </div>

              {/* Naslov i Opis */}
              <div className="md:col-span-6">
                <h3 className="text-2xl md:text-3xl font-serif mb-4 group-hover:text-gold-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Detalji (Bulleti) */}
              <div className="md:col-span-5 md:pl-12 flex flex-wrap gap-3">
                {service.details.map((detail, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full text-gray-500"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* "Process" Sekcija - Dodatni vizuelni element */}
      <section className="py-32 bg-[#0f0f0f] px-6">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-3xl font-serif italic text-gray-300">Naš način rada</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <div className="w-12 h-12 border border-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-500">1</div>
              <h4 className="uppercase tracking-widest text-xs mb-4">Slušamo</h4>
              <p className="text-sm text-gray-500 font-light">Razumemo vaše potrebe, navike i estetske preferencije.</p>
            </div>
            <div>
              <div className="w-12 h-12 border border-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-500">2</div>
              <h4 className="uppercase tracking-widest text-xs mb-4">Stvaramo</h4>
              <p className="text-sm text-gray-500 font-light">Pretvaramo viziju u precizan tehnički i estetski plan.</p>
            </div>
            <div>
              <div className="w-12 h-12 border border-gold-500 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-500">3</div>
              <h4 className="uppercase tracking-widest text-xs mb-4">Gradimo</h4>
              <p className="text-sm text-gray-500 font-light">Nadziremo svaki korak do momenta kada dobijete ključ u ruke.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}