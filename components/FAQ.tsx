
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b dark:border-zinc-800 border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full py-8 flex justify-between items-center text-left hover:text-emerald-500 transition-colors duration-300 group focus:outline-none focus:text-emerald-400"
      >
        <span className="text-xl md:text-2xl font-bold uppercase tracking-tight dark:text-white text-slate-900">{question}</span>
        <div className="shrink-0 ml-4 transition-transform duration-300">
          {isOpen ? <ChevronUp className="text-emerald-500" /> : <ChevronDown className="group-hover:text-emerald-500" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 dark:text-zinc-400 text-slate-600 font-light leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    { 
      question: "¿Cómo empiezo mi viaje?", 
      answer: "Simplemente descarga la NeoApp, registra tu método de pago y escanea el código QR situado en el manillar de cualquier patineta disponible en el mapa. El candado se liberará automáticamente." 
    },
    { 
      question: "¿Dónde puedo estacionar?", 
      answer: "Debes estacionar en las zonas habilitadas marcadas en azul dentro de la aplicación. Asegúrate de no obstruir pasos de peatones, rampas de accesibilidad o salidas de emergencia. Un mal estacionamiento puede conllevar cargos adicionales." 
    },
    { 
      question: "¿Qué pasa si se agota la batería?", 
      answer: "La app te avisará cuando la batería esté baja. Si se agota durante tu viaje, el sistema lo finalizará automáticamente y deberás dejar la patineta en un lugar seguro. No te preocupes, nuestro equipo de mantenimiento rastrea y cambia las baterías constantemente." 
    },
    { 
      question: "¿Necesito casco para circular?", 
      answer: "Aunque la normativa varía según la ciudad, en NeoSkate recomendamos encarecidamente el uso del casco en todos tus trayectos para garantizar tu seguridad. En algunas ubicaciones, el uso es obligatorio por ley." 
    },
    { 
      question: "¿Cómo se calculan las tarifas?", 
      answer: "El coste total se compone de una tarifa fija de desbloqueo más un precio por minuto de uso. Puedes ver las tarifas vigentes de cada modelo seleccionándolo en el mapa de la aplicación antes de empezar." 
    }
  ];

  return (
    <div className="py-24 dark:bg-black bg-white transition-theme" aria-labelledby="faq-title">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 id="faq-title" className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12 dark:text-white text-slate-900">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
