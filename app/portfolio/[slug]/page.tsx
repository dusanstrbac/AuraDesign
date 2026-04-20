'use client';
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import { allProjects } from "@/lib/data"; // 1. Uvozimo tvoje podatke

export default function SingleProject() {
  const params = useParams(); // 2. Hvata slug iz URL-a (npr. 'zen-office')
  
  // 3. Pronalazimo specifičan projekat na osnovu sluga
  const project = allProjects.find((p) => p.slug === params.slug);

  // 4. Safety check - ako neko ukuca pogrešan URL
  if (!project) {
    return (
      <main className="bg-[#0a0a0a] min-h-screen flex items-center justify-center text-white">
        <h1 className="font-serif text-2xl">Projekat nije pronađen.</h1>
      </main>
    );
  }

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white">
      <Navbar />

      {/* Hero sekcija projekta */}
      <section className="relative h-[70vh] flex items-end pb-20 px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.images[0]} 
            className="w-full h-full object-cover opacity-50"
            alt={project.title}
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-xs uppercase tracking-[0.5em] text-gold-500">{project.category}</span>
            <h1 className="text-5xl md:text-8xl font-serif">{project.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Info sekcija */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Detalji */}
          <div className="md:col-span-4 space-y-8 border-l border-white/10 pl-8">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Lokacija</h4>
              <p className="text-sm font-light">{project.location}</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Godina</h4>
              <p className="text-sm font-light">{project.year}</p>
            </div>
          </div>

          {/* Opis */}
          <div className="md:col-span-8">
            <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed italic">
              "{project.description}"
            </p>
          </div>
        </div>
      </section>

      {/* Galerija slika */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-4/5 overflow-hidden bg-zinc-900 shadow-lg"
            >
              <img 
                src={project.images[1]} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                alt="Detail" 
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-4/5 overflow-hidden bg-zinc-900 shadow-lg"
            >
              <img 
                src={project.images[2]} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                alt="Perspective" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}