
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronDown, User, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      name: 'USUARIOS',
      dropdown: [
        { name: 'Como usar NeoSkate', href: '#como-funciona' },
        { name: 'Precios', href: '#patinetas' },
        { name: 'Ubicaciones', href: '#ubicaciones' },
        { name: 'Conducción segura', href: '#beneficios' },
        { name: 'Estacionamientos', href: '#ubicaciones' },
      ]
    },
    {
      name: 'CIUDADES Y SOCIOS',
      dropdown: [
        { name: 'Oferta a la ciudad', href: '#beneficios' },
        { name: 'Soluciones de Aparcamiento', href: '#ubicaciones' },
        { name: 'Socios', href: '#contacto' },
      ]
    },
    { name: 'CENTDE AYUDA', href: '#faq' },
    { name: 'BLOG', href: '#home' },
    { name: 'CONTACTENOS', href: '#contacto' },
  ];

  const handleMobileDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Fix: Made 'children' optional to satisfy TypeScript's check on JSX attributes
  const FullscreenModal = ({ isOpen, onClose, title, children }: { isOpen: boolean, onClose: () => void, title: string, children?: React.ReactNode }) => (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-emerald-500/70 backdrop-blur-xl flex items-center justify-center p-6"
        >
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 text-black hover:scale-110 transition-transform p-2 bg-white rounded-full shadow-2xl"
          >
            <X size={32} />
          </button>
          
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="w-full max-w-md bg-black rounded-[3rem] p-10 shadow-2xl border border-white/10"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="text-black fill-current" size={32} />
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tighter text-white">{title}</h2>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="flex items-center space-x-2 group shrink-0">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Zap className="text-black fill-current" size={20} />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">NeoSkate</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            {menuItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group py-2"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                <a
                  href={item.href || '#'}
                  className="flex items-center text-[11px] xl:text-[12px] font-bold text-zinc-400 hover:text-emerald-400 transition-colors duration-300 uppercase tracking-widest"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} className="ml-1 opacity-50 group-hover:rotate-180 transition-transform duration-300" />}
                </a>

                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute left-0 top-full mt-2 w-64 bg-zinc-900/95 border border-zinc-800 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden p-2"
                  >
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="block px-4 py-3 text-[11px] font-bold text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800/50 rounded-xl transition-all duration-200 uppercase tracking-wider"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            {/* Login & Register Desktop Buttons */}
            <div className="flex items-center space-x-4 pl-4 border-l border-zinc-800">
              <button 
                onClick={() => setIsLoginOpen(true)}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-white hover:text-emerald-500 transition-colors px-4 py-2"
              >
                LOGIN
              </button>
              <button 
                onClick={() => setIsRegisterOpen(true)}
                className="text-[11px] font-black uppercase tracking-[0.2em] bg-white text-black px-6 py-2 rounded-full hover:bg-emerald-500 transition-all active:scale-95"
              >
                REGISTRO
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-zinc-800 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu Toggle"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-0 bg-black z-40 flex flex-col pt-24 px-8 overflow-y-auto"
            >
              <div className="flex flex-col space-y-4 mb-8">
                <button 
                  onClick={() => { setIsLoginOpen(true); setIsMenuOpen(false); }}
                  className="w-full py-4 border border-zinc-800 text-white font-black uppercase tracking-widest rounded-xl flex items-center justify-center space-x-2"
                >
                  <User size={18} />
                  <span>INICIAR SESIÓN</span>
                </button>
                <button 
                  onClick={() => { setIsRegisterOpen(true); setIsMenuOpen(false); }}
                  className="w-full py-4 bg-emerald-500 text-black font-black uppercase tracking-widest rounded-xl flex items-center justify-center space-x-2"
                >
                  <UserPlus size={18} />
                  <span>CREAR CUENTA</span>
                </button>
              </div>

              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-zinc-800 py-4">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleMobileDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full text-lg font-black text-white uppercase tracking-tighter"
                      >
                        {item.name}
                        <ChevronDown className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-zinc-900/50 rounded-2xl mt-2"
                          >
                            {item.dropdown.map((sub) => (
                              <a
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-3 text-sm font-medium text-zinc-400 hover:text-emerald-400 uppercase tracking-widest"
                              >
                                {sub.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-lg font-black text-white hover:text-emerald-500 transition-colors uppercase tracking-tighter"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Login Modal */}
      <FullscreenModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        title="Bienvenido de nuevo"
      >
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Usuario / Email</label>
            <input 
              type="text" 
              required 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-sm text-white focus:border-emerald-500 outline-none transition-all"
              placeholder="rider@neoskate.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Contraseña</label>
            <input 
              type="password" 
              required 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-sm text-white focus:border-emerald-500 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full py-5 bg-emerald-500 text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all duration-300 shadow-xl active:scale-95">
            INGRESAR
          </button>
          <p className="text-center text-xs text-zinc-500">
            ¿Olvidaste tu contraseña? <a href="#" className="text-emerald-500 underline font-bold">Recupérala aquí</a>
          </p>
        </form>
      </FullscreenModal>

      {/* Register Modal */}
      <FullscreenModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
        title="Únete a la flota"
      >
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Nombre Completo</label>
            <input 
              type="text" 
              required 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-sm text-white focus:border-emerald-500 outline-none transition-all"
              placeholder="Juan Pérez"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Email</label>
            <input 
              type="email" 
              required 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-sm text-white focus:border-emerald-500 outline-none transition-all"
              placeholder="juan@ejemplo.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Contraseña</label>
            <input 
              type="password" 
              required 
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-6 py-4 text-sm text-white focus:border-emerald-500 outline-none transition-all"
              placeholder="Mínimo 8 caracteres"
            />
          </div>
          <div className="flex items-start space-x-3 py-2">
            <input type="checkbox" required className="mt-1 accent-emerald-500 h-4 w-4 bg-zinc-900 border-zinc-800 rounded" />
            <span className="text-[10px] text-zinc-500 font-light leading-tight">Acepto los términos y condiciones de uso y la política de privacidad de NeoSkate.</span>
          </div>
          <button className="w-full py-5 bg-emerald-500 text-black font-black uppercase tracking-widest rounded-2xl hover:bg-white transition-all duration-300 shadow-xl active:scale-95">
            CREAR MI CUENTA
          </button>
        </form>
      </FullscreenModal>
    </>
  );
};

export default Navbar;
