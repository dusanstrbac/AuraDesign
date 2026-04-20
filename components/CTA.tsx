'use client';
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 bg-[#0a0a0a] px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-7xl font-serif text-white leading-tight">
            Spremni da unesete <br /> 
            <span className="italic text-white/50">novu auru</span> u vaš dom?
          </h2>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto"
        >
          Vaš idealan prostor je samo jedan razgovor daleko. Zakažite inicijalne konsultacije i započnimo proces transformacije.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="pt-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-transparent border border-white text-white uppercase tracking-[0.3em] text-xs transition-all duration-300 cursor-pointer"
          >
            Zakažite Konsultacije
          </motion.button>
        </motion.div>

        {/* Dekorativna linija koja vodi ka footeru */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 100 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="w-px bg-linear-to-b from-white/20 to-transparent mx-auto mt-12"
        />
      </div>
    </section>
  );
}