
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Background WebP Sequence URL
  const webpUrl = "https://ltnmnhgsiptcgswqwkfi.supabase.co/storage/v1/object/sign/web/video_final.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82YmZjOWY0Yi03NmZkLTQzZGMtYTYyOS03YTM3NDRlODgwYTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvdmlkZW9fZmluYWwud2VicCIsImlhdCI6MTc2ODc0OTU3MywiZXhwIjoxODAwMjg1NTczfQ.79pajUCeJESSM2UEz4ZWoc-J-u70Z5a3cGodBCQGSYI";

  // Transformations for background and text
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.8, 0.95]);

  // Variants for staggered text animation
  const titleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.5,
      },
    },
  };

  const titleLetter = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a smooth, premium feel
      },
    },
  };

  const brandName = "NeoSkate";

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full" aria-label="Hero de NeoSkate - Alquiler de patinetas eléctricas">
      {/* Sticky Background Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Animated Background Image */}
        <motion.div 
          style={{ 
            scale: bgScale,
            opacity: bgOpacity,
            backgroundImage: `url(${webpUrl})`
          }}
          className="absolute inset-0 bg-center bg-cover bg-no-repeat w-full h-full"
          role="img"
          aria-label="Video cinematográfico de patinetas en la ciudad"
        />

        {/* Updated Visual Overlay for Depth, Readability and Branding */}
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-black/80 to-black/20" 
        />

        {/* Centered Content */}
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          {/* STAGGERED TITLE ANIMATION */}
          <motion.h1 
            variants={titleContainer}
            initial="hidden"
            animate="visible"
            className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-4 text-white drop-shadow-2xl flex justify-center overflow-hidden"
          >
            {brandName.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={titleLetter}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xl md:text-3xl font-light text-emerald-400 mb-6 tracking-widest"
          >
            MUÉVETE VERDE, VIVE LIGERO
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-zinc-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-lg"
          >
            Libera tu ciudad sin ataduras. Alquila la tecnología eléctrica más avanzada con solo un toque. Sin mantenimiento, sin parkings costosos, solo pura libertad.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-emerald-500 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl focus:ring-4 focus:ring-emerald-500/50 outline-none">
              DESBLOQUEAR AHORA
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 active:scale-95 focus:ring-4 focus:ring-white/30 outline-none">
              VER UBICACIONES
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-zinc-400"
          aria-hidden="true"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] mb-2">Desliza</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-emerald-500 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
