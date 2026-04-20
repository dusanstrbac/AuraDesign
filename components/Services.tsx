'use client';
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Konsultacije i Koncept",
    description: "Definišemo vaš stil, potrebe i viziju prostora kroz detaljan razgovor i moodboard-ove."
  },
  {
    number: "02",
    title: "3D Vizuelizacija",
    description: "Fotorealistični prikazi vašeg budućeg enterijera pre nego što ijedan rad počne."
  },
  {
    number: "03",
    title: "Opremanje i Nadzor",
    description: "Odabir nameštaja, materijala i koordinacija sa izvođačima do samog useljenja."
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-[#faf9f6] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Levi deo - Naslov */}
          <div className="md:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <span className="text-xs uppercase tracking-[0.5em] text-gray-400 block mb-4">
                Usluge
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#0a0a0a] leading-tight">
                Kako stvaramo <br /> vašu <span className="italic">auru</span>
              </h2>
            </motion.div>
          </div>

          {/* Desni deo - Lista usluga */}
          <div className="md:w-2/3 space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group border-b border-black/5 pb-12 last:border-0"
              >
                <div className="flex gap-8 items-start">
                  <span className="text-sm font-serif italic text-gold-600 pt-2">
                    {service.number}
                  </span>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-serif text-[#0a0a0a] group-hover:text-gold-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-lg font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}