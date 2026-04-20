'use client';
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-serif tracking-widest">
              AURA <span className="text-xs block text-gray-500 tracking-[0.5em]">DESIGN STUDIO</span>
            </h2>
            <p className="text-gray-500 max-w-sm leading-relaxed font-light">
              Transformišemo prostore u autentična iskustva. Svaki projekat je balans između estetike i funkcije.
            </p>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white/40">Kontakt</h4>
            <ul className="space-y-2 text-sm text-gray-400 font-light">
              <li className="hover:text-white transition-colors cursor-pointer">info@auradesign.rs</li>
              <li>Belgrade, Serbia</li>
              <li>+381 11 123 4567</li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white/40">Pratite Nas</h4>
            <ul className="space-y-2 text-sm text-gray-400 font-light">
              <li className="hover:text-white transition-colors cursor-pointer tracking-widest uppercase text-[10px]">Instagram</li>
              <li className="hover:text-white transition-colors cursor-pointer tracking-widest uppercase text-[10px]">Pinterest</li>
              <li className="hover:text-white transition-colors cursor-pointer tracking-widest uppercase text-[10px]">LinkedIn</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-widest text-gray-600">
            © {new Date().getFullYear()} Aura Design. Sva prava zadržana.
          </p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <span className="text-[10px] uppercase tracking-widest text-gray-600 hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
             <span className="text-[10px] uppercase tracking-widest text-gray-600 hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}