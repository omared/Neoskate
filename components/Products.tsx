
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Navigation } from 'lucide-react';

const Products: React.FC = () => {
  const fleet = [
    {
      id: 1,
      name: "NeoPro v3",
      price: "1.00 €",
      rate: "0.25 € / min",
      specs: ["Autonomía 50km", "Frenos Triples", "Soporte para móvil"],
      image: "https://ltnmnhgsiptcgswqwkfi.supabase.co/storage/v1/object/sign/web/NeoPro_v3.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82YmZjOWY0Yi03NmZkLTQzZGMtYTYyOS03YTM3NDRlODgwYTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvTmVvUHJvX3YzLmpwZWciLCJpYXQiOjE3Njg3NTU5MjMsImV4cCI6MTgwMDI5MTkyM30.KoDvQCVxuLj_gbLSCLYrgYNNbMqB22agJMMOZHFjpDs",
      label: "Lo más nuevo"
    },
    {
      id: 2,
      name: "NeoCruise",
      price: "0.50 €",
      rate: "0.19 € / min",
      specs: ["Confort Extra", "Suspensión delantera", "Intermitentes"],
      image: "https://ltnmnhgsiptcgswqwkfi.supabase.co/storage/v1/object/sign/web/NeoCruise.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82YmZjOWY0Yi03NmZkLTQzZGMtYTYyOS03YTM3NDRlODgwYTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvTmVvQ3J1aXNlLmpwZWciLCJpYXQiOjE3Njg3NTU5NTksImV4cCI6MTgwMDI5MTk1OX0.PJcDfLtmWI5KZQd4kFgYYp3htFOTR0jR9ukQcet3nXA",
      label: "Más Cómodo"
    },
    {
      id: 3,
      name: "NeoLite",
      price: "0.00 €",
      rate: "0.15 € / min",
      specs: ["Súper Ligera", "Modo Eco", "Ideal trayectos cortos"],
      image: "https://ltnmnhgsiptcgswqwkfi.supabase.co/storage/v1/object/sign/web/NeoLite.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82YmZjOWY0Yi03NmZkLTQzZGMtYTYyOS03YTM3NDRlODgwYTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvTmVvTGl0ZS5qcGVnIiwiaWF0IjoxNzY4NzU1OTg0LCJleHAiOjE4MDAyOTE5ODR9.zlXwrzsNmmZz7M9n-bJTHJ6DcP4Mt8wArniI1Y4wQ8w",
      label: "Económico"
    }
  ];

  return (
    <div className="py-24 container mx-auto px-6" aria-labelledby="fleet-title">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 id="fleet-title" className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Nuestra Flota Urbana</h2>
          <div className="h-1 w-24 bg-emerald-500" aria-hidden="true"></div>
        </div>
        <div className="max-w-md bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
          <p className="text-zinc-400 font-light leading-relaxed">
            Vehículos diseñados exclusivamente para el uso compartido. Más seguros, más duraderos y siempre listos para ti.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {fleet.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] overflow-hidden hover:bg-zinc-900 transition-all duration-500 flex flex-col"
          >
            <div className="absolute top-6 left-6 z-20">
              <span className="px-4 py-1.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl">
                {item.label}
              </span>
            </div>
            
            <div className="h-72 overflow-hidden relative">
              <img 
                src={item.image} 
                alt={`Patineta ${item.name}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
            </div>

            <div className="p-10 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter">{item.name}</h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <Navigation size={14} className="text-emerald-500" />
                    <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Disponible ahora</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8 bg-black/40 p-4 rounded-2xl border border-zinc-800/50">
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">Desbloqueo</p>
                  <p className="text-xl font-black text-white">{item.price}</p>
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-1">Por Minuto</p>
                  <p className="text-xl font-black text-emerald-500">{item.rate}</p>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow" aria-label={`Especificaciones de ${item.name}`}>
                {item.specs.map(spec => (
                  <li key={spec} className="flex items-center text-zinc-400 text-sm font-light">
                    <Zap size={14} className="text-emerald-500/50 mr-3" aria-hidden="true" />
                    {spec}
                  </li>
                ))}
              </ul>

              <button 
                className="w-full py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest group-hover:bg-emerald-500 transition-all duration-300 active:scale-95 shadow-lg"
              >
                Elegir esta Neo
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Products;
