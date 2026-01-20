
import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface LoadingScreenProps {
  isDark: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isDark }) => {
  return (
    <div className={`fixed inset-0 z-[100] transition-theme ${isDark ? 'bg-black text-white' : 'bg-white text-zinc-900'} flex flex-col items-center justify-center`}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(16,185,129,0.4)]"
      >
        <Zap className="text-black fill-current" size={40} />
      </motion.div>
      
      <div className="overflow-hidden mb-2">
        <motion.h2 
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-black uppercase tracking-tighter"
        >
          NeoSkate
        </motion.h2>
      </div>
      
      <div className={`w-48 h-1 ${isDark ? 'bg-zinc-900' : 'bg-slate-100'} rounded-full mt-4 relative overflow-hidden`}>
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 bg-emerald-500"
        />
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-zinc-500 text-[10px] uppercase tracking-[0.4em] animate-pulse"
      >
        Cargando Experiencia...
      </motion.p>
    </div>
  );
};

export default LoadingScreen;
