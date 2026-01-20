
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import MapSection from './components/MapSection';
import Products from './components/Products';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import Chatbot from './components/Chatbot';
import DesignSystem from './components/DesignSystem';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showDesignSystem, setShowDesignSystem] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  if (loading) return <LoadingScreen isDark={isDarkMode} />;

  return (
    <div className={`relative min-h-screen transition-theme ${isDarkMode ? 'bg-black text-white' : 'bg-slate-50 text-slate-900'} selection:bg-emerald-500 selection:text-black`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <AnimatePresence>
        {showDesignSystem && (
          <DesignSystem onClose={() => setShowDesignSystem(false)} />
        )}
      </AnimatePresence>

      <main>
        <section id="home">
          <Hero isDarkMode={isDarkMode} />
        </section>

        <section id="como-funciona" className="relative z-10 transition-theme dark:bg-black bg-white">
          <HowItWorks />
        </section>

        <section id="ubicaciones" className="relative z-10 transition-theme dark:bg-zinc-950 bg-slate-100">
          <MapSection isDarkMode={isDarkMode} />
        </section>
        
        <section id="patinetas" className="relative z-10 transition-theme dark:bg-black bg-white">
          <Products />
        </section>

        <section id="beneficios" className="relative z-10 transition-theme dark:bg-zinc-950 bg-slate-100">
          <Benefits />
        </section>

        <section id="testimonios" className="relative z-10 transition-theme dark:bg-black bg-white">
          <Testimonials />
        </section>

        <section id="faq" className="relative z-10 transition-theme dark:bg-zinc-950 bg-slate-100">
          <FAQ />
        </section>

        <section id="contacto" className="relative z-10 transition-theme dark:bg-black bg-white">
          <Contact />
        </section>
      </main>

      <Chatbot />

      <footer className="py-16 transition-theme dark:bg-black bg-white border-t dark:border-zinc-900 border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:col-span-4 lg:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 lg:col-span-2">
              <span className="text-2xl font-black tracking-tighter uppercase mb-6 block">NeoSkate</span>
              <p className="dark:text-zinc-500 text-slate-500 max-w-sm font-light leading-relaxed">
                Redefiniendo la movilidad urbana a través de la tecnología compartida y el respeto por el medio ambiente en Bogotá y el mundo.
              </p>
              <button 
                onClick={() => setShowDesignSystem(true)}
                className="mt-8 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 hover:text-emerald-400 transition-colors flex items-center space-x-2"
              >
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span>Design System v1.0</span>
              </button>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-emerald-500 uppercase text-xs tracking-widest">Legal</h4>
              <ul className="space-y-4 dark:text-zinc-400 text-slate-400 text-sm">
                <li><a href="#" className="dark:hover:text-white hover:text-black transition-colors">Términos de Servicio</a></li>
                <li><a href="#" className="dark:hover:text-white hover:text-black transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="dark:hover:text-white hover:text-black transition-colors">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-emerald-500 uppercase text-xs tracking-widest">App</h4>
              <ul className="space-y-4 dark:text-zinc-400 text-slate-400 text-sm font-bold">
                <li><a href="#" className="dark:hover:text-white hover:text-black transition-colors">App Store</a></li>
                <li><a href="#" className="dark:hover:text-white hover:text-black transition-colors">Google Play</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t dark:border-zinc-900 border-slate-200 text-center dark:text-zinc-600 text-slate-400 text-xs">
            <p>&copy; {new Date().getFullYear()} NeoSkate Mobility. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
