'use client';
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Penthouse BW",
    location: "Beograd, Srbija",
    image: "/project-1.jpg",
    // Na mobilnom col-span-12 i visina 350px, na desktopu col-span-8 i 500px
    className: "col-span-12 md:col-span-8 h-[350px] md:h-[500px]",
  },
  {
    id: 2,
    title: "Minimalist Loft",
    location: "Novi Sad, Srbija",
    image: "/project-2.jpg",
    // Na mobilnom col-span-12, na desktopu col-span-4
    className: "col-span-12 md:col-span-4 h-[350px] md:h-[500px]",
  },
  {
    id: 3,
    title: "Villa Aura",
    location: "Zlatibor, Srbija",
    image: "/project-3.jpg",
    className: "col-span-12 md:col-span-6 h-[350px] md:h-[450px]",
  },
  {
    id: 4,
    title: "Zen Office",
    location: "Budimpešta, Mađarska",
    image: "/project-4.jpg",
    className: "col-span-12 md:col-span-6 h-[350px] md:h-[450px]",
  },
];

export default function PortfolioGrid() {
  const MotionLink = motion(Link);
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#0a0a0a] px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Naslov sekcije */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.5em] text-gray-500 block font-light">
              Izabrani Radovi
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Aura <span className="italic text-white/60">Portfolio</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm font-light text-sm md:text-base">
            Od luksuznih rezidencija do komercijalnih prostora, svaki projekat je unikatna priča o stilu i funkcionalnosti.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className={`group relative overflow-hidden bg-gray-900 rounded-sm ${project.className}`}
            >
              {/* Container za sliku */}
              <div className="w-full h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
              </div>

              {/* Overlay - Na mobilnom je uvek malo vidljiv (gradijent), na hover se pojačava */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8" >
                <div className="transform md:translate-y-6 md:group-hover:translate-y-0 transition-transform duration-500 space-y-2">
                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-gold-400 font-medium">
                        {project.location}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight">
                        {project.title}
                    </h3>
                </div>
              </div>

              {/* Suptilna bordura */}
              <div className="absolute inset-0 border border-white/5 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Taster za "Svi projekti" */}
        <div className="flex justify-center pt-8 md:pt-12">
          <MotionLink
            href="/portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto inline-block text-center px-12 py-5 border border-white/10 text-white hover:bg-white/5 transition-colors uppercase tracking-[0.3em] text-[10px] backdrop-blur-sm cursor-pointer"
          >
            Pogledaj Sve Projekte
          </MotionLink>
        </div>

      </div>
    </section>
  );
}