
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Smartphone, CreditCard, ShieldCheck, Clock, Share2 } from 'lucide-react';

const Benefits: React.FC = () => {
  const items = [
    { icon: <MapPin />, title: "Ubicuidad Total", desc: "Encuentra un NeoSkate en cada esquina. Nuestra red de estaciones cubre los puntos clave de la ciudad." },
    { icon: <Smartphone />, title: "App Intuitive", desc: "Escanea, desbloquea y viaja. Sin llaves, sin formularios, todo desde tu smartphone." },
    { icon: <CreditCard />, title: "Pago por Uso", desc: "Olvida las suscripciones costosas. Solo pagas por los minutos que realmente conduces." },
    { icon: <ShieldCheck />, title: "Mantenimiento Incluido", desc: "Nosotros nos encargamos de que cada patineta esté en perfectas condiciones y cargada para ti." },
    { icon: <Clock />, title: "Ahorro de Tiempo", desc: "Evita el tráfico y los retrasos del transporte público. Muévete a tu ritmo, sin esperas." },
    { icon: <Share2 />, title: "Economía Circular", desc: "Al alquilar, reduces la producción innecesaria y optimizas los recursos de tu comunidad." },
  ];

  return (
    <div className="py-24 bg-zinc-950" aria-labelledby="benefits-title">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 id="benefits-title" className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Ventajas de Alquilar</h2>
          <p className="text-zinc-500 max-w-xl mx-auto font-light leading-relaxed">
            Descubre por qué miles de usuarios eligen NeoSkate para su movilidad diaria. Eficiencia, ahorro y libertad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl hover:bg-zinc-900 transition-colors duration-300 border border-transparent hover:border-zinc-800 group"
            >
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500" aria-hidden="true">
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-wider">{item.title}</h3>
              <p className="text-zinc-400 font-light leading-relaxed">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
