'use client';
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ONamaPage() {
  return (
    <main className="bg-[#faf9f6] min-h-screen text-[#0a0a0a]">
      <Navbar variant="light"/>

      {/* Hero sekcija */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.5em] text-gray-400 block mb-8"
          >
            Aura Design Studio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-serif leading-tight max-w-4xl"
          >
            Dizajniramo prostore koji <span className="italic text-gray-400">dišu</span> sa vama.
          </motion.h1>
        </div>
      </section>

      {/* Velika slika */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-16/7 overflow-hidden bg-zinc-200"
          >
            <img 
              src="/hero-interior.jpg" 
              alt="Studio Atmosphere" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </motion.div>
        </div>
      </section>

      {/* Tekstualna filozofija - Sređen layout */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* LEVA KOLONA - Naslov i Vrednosti */}
          <div className="md:col-span-5 space-y-16">
            <h2 className="text-3xl font-serif leading-snug">
              Naša misija nije samo estetika, već stvaranje emocionalnog utočišta.
            </h2>

            {/* Vrednosti su sada ovde - izgledaju kao potpis studija */}
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-gray-200">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="block font-serif text-3xl mb-2 text-[#0a0a0a]">01.</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">Integritet Materijala</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="block font-serif text-3xl mb-2 text-[#0a0a0a]">02.</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">Tihi Luksuz</span>
              </motion.div>
            </div>
          </div>

          {/* DESNA KOLONA - Čist, prozračan tekst */}
          <div className="md:col-span-7 space-y-8 text-gray-600 font-light leading-relaxed text-lg md:pl-12">
            <p>
              Osnovani u Beogradu, Aura Design studio se bavi kreiranjem enterijera koji spajaju bezvremenski luksuz i savremenu funkcionalnost. Verujemo da svaki kvadratni metar mora imati svoju svrhu i svoju priču.
            </p>
            <p>
              Naš pristup je personalizovan. Ne pratimo trendove slepo; umesto toga, fokusiramo se na materijale koji stare dostojanstveno — kamen, drvo, mesing i prirodne tkanine. Za nas je svetlost najvažniji element svakog prostora.
            </p>
            <p>
              Svaki projekat započinjemo dubokim razumevanjem načina na koji klijent živi, pretvarajući apstraktne želje u opipljivu arhitektonsku stvarnost.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Sekcija */}
      <section className="py-32 bg-[#0a0a0a] text-white px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-6xl font-serif">Spremni da započnete svoju transformaciju?</h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 border border-white/20 uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            Kontaktirajte nas
          </motion.button>
        </div>
      </section>

      <Footer />
    </main>
  );
}