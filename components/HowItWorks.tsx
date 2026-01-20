
import React from 'react';
import { motion } from 'framer-motion';
import { Search, QrCode, Play } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Search />,
      title: "Encuentra",
      desc: "Usa el mapa de la app para localizar la NeoSkate más cercana a ti en segundos."
    },
    {
      icon: <QrCode />,
      title: "Escanea",
      desc: "Escanea el código QR del manillar para desbloquear tu patineta de forma instantánea."
    },
    {
      icon: <Play />,
      title: "Viaja",
      desc: "¡Ya estás listo! Disfruta de un viaje suave, silencioso y ecológico hacia tu destino."
    }
  ];

  return (
    <div className="py-24 container mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 dark:text-white text-slate-900">Tu viaje empieza aquí</h2>
        <p className="dark:text-zinc-400 text-slate-600 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Tan sencillo como tres pasos. Sin complicaciones, sin esperas. La ciudad es tuya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 dark:bg-zinc-900 bg-white rounded-3xl flex items-center justify-center text-emerald-500 mb-8 border dark:border-zinc-800 border-slate-200 group-hover:border-emerald-500/50 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500 shadow-2xl">
              {React.cloneElement(step.icon as React.ReactElement<any>, { size: 36 })}
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-emerald-500 font-black text-xl">{idx + 1}.</span>
              <h3 className="text-2xl font-bold uppercase tracking-wide dark:text-white text-slate-900">{step.title}</h3>
            </div>
            <p className="dark:text-zinc-400 text-slate-600 leading-relaxed font-light px-4">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
