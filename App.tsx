
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

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="como-funciona" className="relative z-10 bg-black">
          <HowItWorks />
        </section>

        <section id="ubicaciones" className="relative z-10 bg-zinc-950">
          <MapSection />
        </section>
        
        <section id="patinetas" className="relative z-10 bg-black">
          <Products />
        </section>

        <section id="beneficios" className="relative z-10 bg-zinc-950">
          <Benefits />
        </section>

        <section id="testimonios" className="relative z-10 bg-black">
          <Testimonials />
        </section>

        <section id="faq" className="relative z-10 bg-zinc-950">
          <FAQ />
        </section>

        <section id="contacto" className="relative z-10 bg-black">
          <Contact />
        </section>
      </main>

      <Chatbot />

      <footer className="py-16 bg-black border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:col-span-4 lg:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 lg:col-span-2">
              <span className="text-2xl font-black tracking-tighter uppercase mb-6 block">NeoSkate</span>
              <p className="text-zinc-500 max-w-sm font-light leading-relaxed">
                Redefiniendo la movilidad urbana a través de la tecnología compartida y el respeto por el medio ambiente en Bogotá y el mundo.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-emerald-500 uppercase text-xs tracking-widest">Legal</h4>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Términos de Servicio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-emerald-500 uppercase text-xs tracking-widest">App</h4>
              <ul className="space-y-4 text-zinc-400 text-sm font-bold">
                <li><a href="#" className="hover:text-white transition-colors">App Store</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Google Play</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-zinc-900 text-center text-zinc-600 text-xs">
            <p>&copy; {new Date().getFullYear()} NeoSkate Mobility. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
