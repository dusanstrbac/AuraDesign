'use client';
import { motion } from "framer-motion";
import Link from "next/link";

export default function Philosophy() {
  const MotionLink = motion(Link);
  return (
    <section className="py-24 md:py-32 bg-[#faf9f6] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Leva strana - Slika sa dekorativnim elementom */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Kontejner slike */}
            <div className="relative aspect-4/5 overflow-hidden shadow-xl">
              <img 
                src="/detail-1.jpg" 
                alt="Minimalist Interior Detail"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Plutajući box - Sređen responsive */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              /* OBJAŠNJENJE:
                 Na mobilnom: bottom-4 right-4 (box je unutar slike, nema skrola)
                 Na desktopu (md): -bottom-10 -right-10 (box izlazi van slike za premium look)
              */
              className="absolute bottom-4 right-4 md:-bottom-10 md:-right-10 bg-[#0a0a0a] p-6 md:p-10 text-white max-w-50 md:max-w-60 shadow-2xl z-10"
            >
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] leading-relaxed font-light">
                Svaki prostor ima svoju <span className="text-gold-400">auru</span>. Mi je samo izvlačimo na površinu.
              </p>
            </motion.div>
          </motion.div>

          {/* Desna strana - Tekstualni sadržaj */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.5em] text-gray-400 block font-light">
                Naša Vizija
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-[#0a0a0a] leading-tight">
                Prostori koji <br /> 
                <span className="italic">inspirišu</span> život.
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-md text-lg font-light">
              U Aura Design-u ne verujemo u generička rešenja. Verujemo u materijale koji stare dostojanstveno i u svetlost koja menja raspoloženje. Vaš dom je produžetak vašeg bića.
            </p>

            <div className="pt-6">
              <MotionLink 
                href="/usluge"
                whileHover={{ x: 10 }}
                className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-semibold text-[#0a0a0a] w-fit cursor-pointer"
              >
                <span>Saznajte više o procesu</span>
                <div className="h-px w-12 bg-[#0a0a0a] group-hover:w-20 transition-all duration-300" />
              </MotionLink>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}