
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Palette, Type, Square, Layout, Download, X, ArrowLeft } from 'lucide-react';

interface DesignSystemProps {
  onClose: () => void;
}

const DesignSystem: React.FC<DesignSystemProps> = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  const colors = [
    { name: 'Primary Emerald', hex: '#10b981', tailwind: 'bg-emerald-500' },
    { name: 'Zinc Deep', hex: '#18181b', tailwind: 'bg-zinc-900' },
    { name: 'Zinc Darkest', hex: '#09090b', tailwind: 'bg-zinc-950' },
    { name: 'Pure Black', hex: '#000000', tailwind: 'bg-black' },
    { name: 'Text White', hex: '#ffffff', tailwind: 'bg-white' },
    { name: 'Text Muted', hex: '#71717a', tailwind: 'bg-zinc-500' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black overflow-y-auto print:bg-white print:text-black"
    >
      {/* Header Estático - No se imprime */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800 p-6 print:hidden">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-full transition-colors">
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-black uppercase tracking-tighter">NeoSkate <span className="text-emerald-500">Brand System v1.0</span></h1>
          </div>
          <button 
            onClick={handlePrint}
            className="flex items-center space-x-2 px-6 py-2 bg-emerald-500 text-black font-bold rounded-full hover:bg-white transition-all active:scale-95"
          >
            <Download size={18} />
            <span>DESCARGAR PDF</span>
          </button>
        </div>
      </div>

      {/* Contenido del manual */}
      <div className="container mx-auto px-6 py-20 max-w-5xl print:py-10 print:px-0">
        
        {/* Intro */}
        <header className="mb-20 border-b border-zinc-800 pb-10 print:border-black">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
              <Zap className="text-black" fill="currentColor" />
            </div>
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-emerald-500">Guía de Identidad Visual</span>
          </div>
          <h2 className="text-6xl font-black uppercase tracking-tighter mb-6">SISTEMA DE DISEÑO</h2>
          <p className="text-zinc-400 text-xl font-light max-w-2xl print:text-black">
            Este documento define los estándares visuales de NeoSkate, garantizando una experiencia de marca premium, coherente y tecnológica en todos los puntos de contacto.
          </p>
        </header>

        {/* Sección: Colores */}
        <section className="mb-24">
          <div className="flex items-center space-x-3 mb-10">
            <Palette className="text-emerald-500" />
            <h3 className="text-2xl font-bold uppercase tracking-widest">01. PALETA CROMÁTICA</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {colors.map((color) => (
              <div key={color.name} className="group">
                <div className={`h-32 w-full rounded-2xl ${color.tailwind} border border-white/10 mb-4 shadow-xl print:border-black`}></div>
                <p className="font-bold text-sm uppercase">{color.name}</p>
                <p className="font-mono text-xs text-zinc-500 print:text-black">{color.hex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sección: Tipografía */}
        <section className="mb-24 page-break-before">
          <div className="flex items-center space-x-3 mb-10">
            <Type className="text-emerald-500" />
            <h3 className="text-2xl font-bold uppercase tracking-widest">02. TIPOGRAFÍA</h3>
          </div>
          <div className="space-y-12">
            <div>
              <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-4">Fuente Primaria: Inter</p>
              <h4 className="text-8xl font-black uppercase tracking-tighter mb-2">HEADLINE XL</h4>
              <p className="text-zinc-500 print:text-black">Weight: 900 (Black) / Case: Uppercase / Tracking: -0.05em</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold uppercase tracking-tight mb-2">Subheadline Large</h4>
              <p className="text-zinc-500 print:text-black">Weight: 700 (Bold) / Case: Uppercase / Tracking: Tight</p>
            </div>
            <div>
              <p className="text-lg font-light leading-relaxed max-w-xl">
                Cuerpo de texto: Inter Light. Utilizado para descripciones largas, asegurando legibilidad y una sensación de aire y elegancia tecnológica.
              </p>
              <p className="text-zinc-500 mt-2 print:text-black">Weight: 300 (Light) / Line Height: 1.6</p>
            </div>
          </div>
        </section>

        {/* Sección: Componentes UI */}
        <section className="mb-24">
          <div className="flex items-center space-x-3 mb-10">
            <Square className="text-emerald-500" />
            <h3 className="text-2xl font-bold uppercase tracking-widest">03. COMPONENTES CLAVE</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-bold text-zinc-500 uppercase mb-6">Botones Principales</p>
              <div className="space-y-4">
                <button className="px-10 py-4 bg-white text-black font-black rounded-full uppercase tracking-widest">Primario (Light)</button>
                <button className="px-10 py-4 bg-emerald-500 text-black font-black rounded-full uppercase tracking-widest ml-4">Acción (Brand)</button>
                <button className="block px-10 py-4 border-2 border-white text-white font-black rounded-full uppercase tracking-widest">Secundario</button>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-zinc-500 uppercase mb-6">Cards y Glassmorphism</p>
              <div className="bg-zinc-900 border border-white/10 p-8 rounded-[2rem] backdrop-blur-xl">
                <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap size={20} />
                </div>
                <h4 className="font-bold mb-2 uppercase">Glass Card Component</h4>
                <p className="text-zinc-400 text-sm font-light">Efecto de desenfoque de fondo con bordes sutiles y sombras profundas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer del PDF */}
        <footer className="mt-40 pt-10 border-t border-zinc-800 text-center print:border-black">
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} NeoSkate Mobility Labs. Prohibida la reproducción sin autorización.
          </p>
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body { background: white !important; color: black !important; }
          .print\\:hidden { display: none !important; }
          .print\\:text-black { color: black !important; }
          .print\\:border-black { border-color: black !important; }
          .page-break-before { page-break-before: always; }
          @page { margin: 2cm; }
        }
      `}} />
    </motion.div>
  );
};

export default DesignSystem;
