
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, Navigation, Globe } from 'lucide-react';

const GeoBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Retraso para no saturar al usuario apenas entra
    const timer = setTimeout(() => {
      const geoDismissed = sessionStorage.getItem('geo-banner-dismissed');
      if (!geoDismissed) {
        setIsVisible(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleAllow = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.debug("Acceso concedido:", position.coords.latitude);
          handleClose();
        },
        (error) => {
          console.debug("Acceso denegado/error:", error.message);
          handleClose();
        }
      );
    } else {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('geo-banner-dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed top-6 left-0 w-full z-[120] pointer-events-none flex justify-center px-6">
          <motion.div
            initial={{ y: -50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.95 }}
            transition={{ 
              type: "spring", 
              damping: 25, 
              stiffness: 200,
              duration: 0.6 
            }}
            className="pointer-events-auto w-full max-w-2xl bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-2 pr-4 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(16,185,129,0.1)] flex items-center justify-between gap-4 group"
          >
            {/* Lado Izquierdo: Icono + Texto */}
            <div className="flex items-center space-x-4 pl-2">
              <div className="relative">
                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-black shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-transform group-hover:rotate-12 duration-500">
                  <MapPin size={22} fill="currentColor" />
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-1 border border-emerald-500 rounded-2xl" 
                />
              </div>
              
              <div className="hidden sm:block">
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-500 mb-0.5">Servicio de Ubicación</h4>
                <p className="text-white text-xs font-light leading-tight max-w-[280px]">
                  NeoSkate usa tu posición para mostrarte la flota disponible en tiempo real.
                </p>
              </div>
            </div>

            {/* Lado Derecho: Acciones */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handleAllow}
                className="group/btn relative overflow-hidden px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all duration-300 active:scale-95 flex items-center space-x-2"
              >
                <Navigation size={12} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                <span>Permitir</span>
              </button>
              
              <button
                onClick={handleClose}
                className="px-4 py-3 text-zinc-500 text-[10px] font-black uppercase tracking-widest rounded-xl hover:text-white hover:bg-white/5 transition-all"
              >
                Cerrar
              </button>
            </div>

            {/* Botón X minimalista */}
            <button 
              onClick={handleClose}
              className="absolute -top-2 -right-2 w-6 h-6 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center text-zinc-500 hover:text-white hover:scale-110 transition-all md:hidden"
            >
              <X size={12} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default GeoBanner;
