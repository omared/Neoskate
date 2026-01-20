
import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    { 
      name: "Andrés Rivera", 
      role: "Madrid Rider", 
      text: "Antes tardaba 20 minutos en metro para llegar al trabajo. Ahora con NeoSkate tardo 10.", 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    },
    { 
      name: "Lucía Méndez", 
      role: "Barcelona Explorer", 
      text: "Me encanta lo fácil que es encontrar una patineta. Los frenos te dan mucha seguridad.", 
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    { 
      name: "Marco Soler", 
      role: "Sevilla Commuter", 
      text: "La mejor opción para evitar el tráfico. He dejado el coche en casa y ahorro mucho dinero.", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    { 
      name: "Elena Vázquez", 
      role: "Valencia Resident", 
      text: "El diseño es simplemente superior. Son estables, potentes y muy cómodas.", 
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <div className="py-24 container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 dark:text-white text-slate-900">La comunidad NeoSkate</h2>
        <p className="dark:text-zinc-500 text-slate-500 font-light text-lg">Únete a los miles de riders que ya han transformado su forma de moverse.</p>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div 
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="dark:bg-zinc-900/40 bg-white border dark:border-zinc-800/50 border-slate-200 p-8 rounded-[2rem] flex flex-col h-full hover:border-emerald-500/30 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 dark:border-zinc-800 border-slate-100 group-hover:border-emerald-500/50 transition-colors duration-500">
                    <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 p-1.5 rounded-lg text-black shadow-lg">
                    <Quote size={12} fill="currentColor" />
                  </div>
                </div>
                <div>
                  <h3 className="font-black dark:text-white text-slate-900 uppercase tracking-tighter text-sm leading-tight">{review.name}</h3>
                  <p className="text-emerald-500/70 font-bold uppercase tracking-widest text-[9px] mt-1">{review.role}</p>
                </div>
              </div>
              
              <p className="dark:text-zinc-400 text-slate-600 italic text-sm font-light leading-relaxed flex-grow">
                "{review.text}"
              </p>
              
              <div className="mt-6 flex space-x-1">
                {[...Array(5)].map((_, starIdx) => (
                  <div key={starIdx} className="w-2 h-2 rounded-full bg-emerald-500/30"></div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
