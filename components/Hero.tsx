'use client';
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const MotionLink = motion(Link);
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-interior.jpg" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/20 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.4em] text-[9px] md:text-xs text-white/80 mb-4 md:mb-6 block font-light"
        >
          Elegancija u svakom detalju
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          /* PROMENA: text-5xl na mobilnom, text-8xl na desktopu. 
             Dodat leading-tight da razmak između redova bude elegantan. */
          className="text-5xl md:text-8xl font-serif text-white mb-8 md:mb-10 tracking-tight leading-[1.1]"
        >
          Aura Design
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <MotionLink
            href="/portfolio"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,1)", color: "#000" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="inline-block px-8 py-3.5 md:px-10 md:py-4 border border-white/30 text-white transition-colors uppercase tracking-widest text-[10px] backdrop-blur-sm cursor-pointer"
          >
            Pogledaj Portfolio
          </MotionLink>
        </motion.div>
      </div>

      {/* Scroll indicator na dnu - sakrivamo na jako malim visinama ekrana ako treba */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
        <div className="w-px h-8 md:h-12 bg-linear-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}