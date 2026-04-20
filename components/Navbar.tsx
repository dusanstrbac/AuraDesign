"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dodali smo variant prop: "dark" je za crne stranice, "light" za off-white
export default function Navbar({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Početna", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "O nama", href: "/o-nama" },
    { name: "Usluge", href: "/usluge" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  const isLightMode = variant === "light" && !isScrolled && !isOpen;
  const textColor = isLightMode ? "text-[#0a0a0a]" : "text-white";
  const logoColor = isLightMode ? "text-[#0a0a0a]" : "text-white";
  const buttonBorder = isLightMode ? "border-black/20 text-black" : "border-white/20 text-white";
  const hamburgerColor = isLightMode ? "bg-black" : "bg-white";

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-100 transition-all duration-500 ${
          isScrolled || isOpen
            ? "py-4 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10"
            : `py-8 bg-transparent ${isLightMode ? "border-b border-black/5" : ""}`
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className={`text-2xl font-serif tracking-widest transition-colors duration-500 ${logoColor} relative z-110`}>
            AURA <span className="text-gold-500 text-[10px] block leading-none text-right tracking-widest font-sans">DESIGN</span>
          </div>

          {/* Desktop Linkovi */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[10px] uppercase tracking-[0.3em] transition-colors duration-500 ${textColor} hover:text-gold-500`}
              >
                {link.name}
              </a>
            ))}
            
            <button className={`px-6 py-2 border transition-all duration-300 text-[10px] uppercase tracking-widest cursor-pointer ${
              isLightMode 
              ? "border-black/20 text-black hover:bg-black hover:text-white" 
              : "border-white/20 text-white hover:bg-white hover:text-black"
            }`}>
              Zakažite konsultacije
            </button>
          </div>

          {/* Hamburger Menu Icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden z-110 p-2 focus:outline-none transition-colors duration-500 ${isLightMode && !isOpen ? "text-black" : "text-white"}`}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-px transition-all duration-300 ${isOpen ? "bg-white rotate-45 translate-y-2.25" : hamburgerColor}`} />
              <span className={`w-full h-px transition-all duration-300 ${isOpen ? "opacity-0" : hamburgerColor}`} />
              <span className={`w-[70%] self-end h-px transition-all duration-300 ${isOpen ? "bg-white -rotate-45 -translate-y-2.25 w-full" : hamburgerColor}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Uvek taman */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#0a0a0a] z-90 flex flex-col justify-center items-center p-10 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-serif text-white hover:text-gold-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 px-8 py-4 border border-gold-500 text-gold-500 uppercase tracking-widest text-xs"
              >
                Zakažite konsultacije
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}