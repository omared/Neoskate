
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const webpUrl = "https://ltnmnhgsiptcgswqwkfi.supabase.co/storage/v1/object/sign/web/video_final.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82YmZjOWY0Yi03NmZkLTQzZGMtYTYyOS03YTM3NDRlODgwYTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvdmlkZW9fZmluYWwud2VicCIsImlhdCI6MTc2ODc0OTU3MywiZXhwIjoxODAwMjg1NTczfQ.79pajUCeJESSM2UEz4ZWoc-J-u70Z5a3cGodBCQGSYI";

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.8, 0.95]);

  const titleContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
  };

  const titleLetter = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const } 
    },
  };

  const brandName = "NeoSkate";

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          style={{ scale: bgScale, opacity: bgOpacity, backgroundImage: `url(${webpUrl})` }}
          className="absolute inset-0 bg-center bg-cover bg-no-repeat w-full h-full"
        />

        <motion.div 
          style={{ opacity: overlayOpacity }}
          className={`absolute inset-0 transition-theme ${isDarkMode ? 'bg-gradient-to-t from-emerald-950 via-black/80 to-black/20' : 'bg-gradient-to-t from-emerald-500/10 via-white/80 to-white/20'}`} 
        />

        <motion.div style={{ opacity: textOpacity, y: textY }} className="relative z-10 text-center px-6 max-w-5xl">
          <motion.h1 
            variants={titleContainer}
            initial="hidden"
            animate="visible"
            className={`text-6xl md:text-[8rem] font-black uppercase tracking-tighter mb-4 flex justify-center text-white pb-4`}
          >
            {brandName.split("").map((char, index) => (
              <motion.span 
                key={index} 
                variants={titleLetter} 
                className="inline-block relative"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className={`text-xl md:text-3xl font-light mb-6 tracking-[0.3em] uppercase ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`}
          >
            MUÉVETE VERDE, VIVE LIGERO
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-sm ${isDarkMode ? 'text-zinc-200' : 'text-zinc-700'}`}
          >
            Libera tu ciudad sin ataduras. Alquila la tecnología eléctrica más avanzada con solo un toque. Sin mantenimiento, sin parkings costosos, solo pura libertad.
          </motion.p>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 1.8 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-10 py-4 font-black uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl ${isDarkMode ? 'bg-emerald-500 text-black hover:bg-white' : 'bg-black text-white hover:bg-emerald-500 hover:text-black'}`}>
              DESBLOQUEAR AHORA
            </button>
            <button className={`px-10 py-4 border-2 font-black uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${isDarkMode ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}>
              VER UBICACIONES
            </button>
          </motion.div>
        </motion.div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className={`text-[10px] uppercase tracking-[0.2em] mb-2 ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Desliza</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
