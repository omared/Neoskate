
import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      imgUrl: "https://ltnmnhgsiptcgswqwkfi.supabase.co/storage/v1/object/sign/web/encuentra.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82YmZjOWY0Yi03NmZkLTQzZGMtYTYyOS03YTM3NDRlODgwYTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvZW5jdWVudHJhLmpwZWciLCJpYXQiOjE3Njg5MzMxOTIsImV4cCI6MTgwMDQ2OTE5Mn0.z2-nZoYK1wn3so3lGz7S4kONhgEhn8tUMQ3iJ-usVXg",
      title: "Encuentra",
      desc: "Usa el mapa de la app para localizar la NeoSkate más cercana a ti en segundos."
    },
    {
      imgUrl: "https://ltnmnhgsiptcgswqwkfi.supabase.co/storage/v1/object/sign/web/escanea.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82YmZjOWY0Yi03NmZkLTQzZGMtYTYyOS03YTM3NDRlODgwYTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvZXNjYW5lYS5qcGVnIiwiaWF0IjoxNzY4OTMzMjQzLCJleHAiOjE4MDA0NjkyNDN9.8ImwKtKcHRYcCyRoic0JhwS9MiMExT86UVSlewSy3dU",
      title: "Escanea",
      desc: "Escanea el código QR del manillar para desbloquear tu patineta de forma instantánea."
    },
    {
      imgUrl: "https://ltnmnhgsiptcgswqwkfi.supabase.co/storage/v1/object/sign/web/viaja.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82YmZjOWY0Yi03NmZkLTQzZGMtYTYyOS03YTM3NDRlODgwYTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvdmlhamEuanBlZyIsImlhdCI6MTc2ODkzMzI4NCwiZXhwIjoxODAwNDY5Mjg0fQ.WyKOHKh_Pe43_kyjTpRtfOSEFlRn2jGCg2hU_nwd7zY",
      title: "Viaja",
      desc: "¡Ya estás listo! Disfruta de un viaje suave, silencioso y ecológico hacia tu destino."
    }
  ];

  return (
    <div className="py-24 container mx-auto px-6">
      <div className="text-center mb-24">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-emerald-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block"
        >
          Experiencia Neo
        </motion.span>
        <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-6 dark:text-white text-slate-900">Tu viaje empieza aquí</h2>
        <p className="dark:text-zinc-400 text-slate-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Tres pasos hacia la libertad urbana. Diseñado para que tu única preocupación sea disfrutar del trayecto.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
            className="flex flex-col items-center group relative"
          >
            {/* Image Container with striking effects - Reduced max width */}
            <div className="relative w-full max-w-[320px] mx-auto aspect-[4/5] mb-10 overflow-hidden rounded-[3rem] shadow-2xl transition-all duration-700 group-hover:shadow-emerald-500/20 group-hover:-translate-y-4">
              
              {/* Pulsing Border Glow */}
              <div className="absolute inset-0 border-2 border-emerald-500/0 group-hover:border-emerald-500/50 rounded-[3rem] transition-all duration-700 z-30 pointer-events-none"></div>

              {/* Step Number Badge */}
              <div className="absolute top-6 left-6 z-40">
                <div className="w-10 h-10 bg-emerald-500 text-black rounded-2xl flex items-center justify-center font-black text-lg shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {idx + 1}
                </div>
              </div>

              {/* The Image */}
              <motion.img 
                src={step.imgUrl} 
                alt={step.title}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full h-full object-cover transition-all duration-1000 grayscale-[40%] group-hover:grayscale-0"
              />

              {/* Dynamic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
              
              {/* Glass Reflection Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-20"></div>
            </div>

            {/* Text Content */}
            <div className="text-center px-4 max-w-[320px]">
              <h3 className="text-3xl font-black uppercase tracking-tighter dark:text-white text-slate-900 mb-4 transition-colors group-hover:text-emerald-500">
                {step.title}
              </h3>
              <p className="dark:text-zinc-400 text-slate-600 leading-relaxed font-light text-base">
                {step.desc}
              </p>
            </div>

            {/* Bottom Connector Line (Desktop Only) - Hidden if width is too small to avoid overlap */}
            {idx < 2 && (
              <div className="hidden xl:block absolute top-[25%] -right-10 w-20 h-[2px] bg-gradient-to-r from-emerald-500/50 to-transparent pointer-events-none" aria-hidden="true"></div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
