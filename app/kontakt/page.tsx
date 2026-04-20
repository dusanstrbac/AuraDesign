'use client';
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function KontaktPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white overflow-hidden">
      <Navbar variant="dark" />

      {/* Smanjen pt sa 40 na 32 i pb sa 20 na 10 za kompaktnost */}
      <section className="pt-32 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Leva strana - Zbijeniji spacing */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif mb-4">
                  Hajde da <br />
                  <span className="italic text-gray-500 text-5xl md:text-6xl">stvaramo</span>
                </h1>
                <p className="text-gray-400 font-light text-base max-w-md leading-relaxed">
                  Bilo da planirate potpunu rekonstrukciju ili suptilno osveženje prostora, tu smo da vašu viziju pretvorimo u stvarnost.
                </p>
              </motion.div>

              {/* Grid za info da zauzme manje vertikalnog prostora */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-4">
                <div>
                  <h4 className="text-[9px] uppercase tracking-[0.3em] text-gold-500 mb-1">E-mail</h4>
                  <a href="mailto:studio@auradesign.rs" className="text-lg font-light hover:text-gold-500 transition-colors">
                    studio@auradesign.rs
                  </a>
                </div>
                <div>
                  <h4 className="text-[9px] uppercase tracking-[0.3em] text-gold-500 mb-1">Br. telefona</h4>
                  <a href="tel:+381601234567" className="text-lg font-light hover:text-gold-500 transition-colors">
                    +381 60 1234 567
                  </a>
                </div>
                <div>
                  <h4 className="text-[9px] uppercase tracking-[0.3em] text-gold-500 mb-1">Lokacija</h4>
                  <p className="text-lg font-light">Beograd, Srbija</p>
                </div>
                <div>
                  <h4 className="text-[9px] uppercase tracking-[0.3em] text-gold-500 mb-1">Društvene mreže</h4>
                  <div className="flex gap-4 pt-1">
                    {["Instagram", "LinkedIn"].map((social) => (
                      <a key={social} href="#" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Desna strana - Kompaktnija forma */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/2 p-8 lg:p-10 border border-white/5"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-widest text-gray-500">Ime i prezime</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-gold-500 transition-colors font-light text-sm" 
                      placeholder="Petar Petrović"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-widest text-gray-500">E-mail adresa</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-gold-500 transition-colors font-light text-sm" 
                      placeholder="petar@gmail.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-[9px] uppercase tracking-widest text-gray-500">Vaša poruka</label>
                  <textarea 
                    rows={3} 
                    className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-gold-500 transition-colors font-light resize-none text-sm" 
                    placeholder="Opišite nam vaš projekat..."
                  />
                </div>

                <button className="w-full py-4 border border-white/20 uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-black transition-all duration-500 mt-4 cursor-pointer">
                  Pošaljite upit
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}