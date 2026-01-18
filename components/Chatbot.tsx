
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, AlertCircle } from 'lucide-react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón flotante */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-emerald-500 text-black rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all"
        aria-label="Abrir Chatbot"
      >
        <MessageCircle size={28} />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full border-2 border-emerald-500 flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
        </span>
      </motion.button>

      {/* Modal del Chatbot */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[70] flex items-end justify-end p-6 md:p-8 pointer-events-none">
            {/* Fondo oscuro para cerrar al hacer clic fuera */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
            />

            {/* Tarjeta del Modal */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto"
            >
              {/* Encabezado con botón de cerrar (X) */}
              <div className="p-6 bg-zinc-800/50 border-b border-zinc-800 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-black uppercase tracking-tighter text-sm text-white">NeoAssistant</h3>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Fuera de horario</p>
                  </div>
                </div>
                
                {/* Botón X destacado */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 flex items-center justify-center transition-all active:scale-90"
                  aria-label="Cerrar modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Cuerpo del Modal */}
              <div className="p-8">
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 mb-8 flex items-start space-x-4">
                  <AlertCircle className="text-emerald-500 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-white font-bold text-sm mb-1 uppercase tracking-tight">Atención inmediata no disponible</p>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed">
                      Lo sentimos, todos nuestros agentes están asistiendo a otros riders. Déjanos tu mensaje y te contactaremos en breve.
                    </p>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Tu Email</label>
                    <input 
                        type="email" 
                        required 
                        placeholder="rider@ejemplo.com"
                        className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500">¿En qué podemos ayudarte?</label>
                    <textarea 
                        rows={3} 
                        required 
                        placeholder="Escribe tu mensaje aquí..."
                        className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-emerald-500 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-emerald-500 text-black font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white transition-all duration-300 transform active:scale-95 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <span>Enviar Mensaje</span>
                    <Send size={14} />
                  </button>
                </form>
              </div>

              {/* Pie del Modal */}
              <div className="p-4 bg-black/50 text-center">
                <p className="text-[9px] text-zinc-600 uppercase font-black tracking-[0.2em]">Respuesta promedio: 45 minutos</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
