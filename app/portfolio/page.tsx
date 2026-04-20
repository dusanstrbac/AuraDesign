'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const allProjects = [
  { id: 1, slug: "penthouse-bw", title: "Penthouse BW", category: "Rezidencijalno", image: "/project-1.jpg" },
  { id: 2, slug: "minimalist-loft", title: "Minimalist Loft", category: "Rezidencijalno", image: "/project-2.jpg" },
  { id: 3, slug: "zen-office", title: "Zen Office", category: "Komercijalno", image: "/project-4.jpg" },
  { id: 4, slug: "villa-aura", title: "Villa Aura", category: "Rezidencijalno", image: "/project-3.jpg" },
  { id: 5, slug: "concrete-studio", title: "Concrete Studio", category: "Komercijalno", image: "/detail-1.jpg" },
  { id: 6, slug: "modern-haven", title: "Modern Haven", category: "Koncept", image: "/hero-interior.jpg" },
];

const categories = ["Sve", "Rezidencijalno", "Komercijalno", "Koncept"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("Sve");

  const filteredProjects = allProjects.filter(p => 
    filter === "Sve" ? true : p.category === filter
  );

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      <Navbar />
      
      {/* Header Sekcija */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-[0.5em] text-gold-500"
          >
            Arhiva Radova
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif"
          >
            Portfolio
          </motion.h1>
          
          {/* Filteri */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] uppercase tracking-[0.3em] transition-all duration-300 pb-2 border-b ${
                  filter === cat ? "border-gold-500 text-white" : "border-transparent text-gray-500 hover:text-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid sa projektima */}
        <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* 3. OMATAŠ SVE U LINK */}
                    <Link href={`/portfolio/${project.slug}`} className="group block relative cursor-pointer">
                    <div className="aspect-4/5 overflow-hidden bg-gray-900">
                        <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                        />
                    </div>
                    <div className="mt-6 space-y-1">
                        <span className="text-[9px] uppercase tracking-widest text-gold-500/80">{project.category}</span>
                        <h3 className="text-xl font-serif tracking-wide group-hover:text-gold-500 transition-colors">
                        {project.title}
                        </h3>
                    </div>
                    </Link>
                </motion.div>
                ))}
            </AnimatePresence>
            </motion.div>
        </div>
        </section>

      <Footer />
    </main>
  );
}