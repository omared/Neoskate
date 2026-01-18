
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-zinc-950" aria-labelledby="contact-title">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 id="contact-title" className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">Soporte 24/7</h2>
            <p className="text-zinc-400 text-xl font-light mb-12 max-w-md leading-relaxed">
              ¿Tienes algún problema con un alquiler o quieres proponer una alianza en tu ciudad? Estamos aquí para escucharte.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-emerald-500" aria-hidden="true">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Atención al Rider</p>
                  <a href="mailto:soporte@neoskate.com" className="text-xl font-bold hover:text-emerald-500 transition-colors">soporte@neoskate.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-emerald-500" aria-hidden="true">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Línea Directa</p>
                  <p className="text-xl font-bold">+34 900 123 456</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-emerald-500" aria-hidden="true">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Oficina Central</p>
                  <p className="text-xl font-bold">Distrito Tech, Madrid, ES</p>
                </div>
              </div>
            </div>

            <nav className="flex space-x-4 mt-12" aria-label="Redes sociales">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Facebook, label: "Facebook" }
              ].map(({ Icon, label }, i) => (
                <a key={i} href="#" aria-label={label} className="w-10 h-10 border border-zinc-800 rounded-full flex items-center justify-center text-zinc-500 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300 focus:ring-2 focus:ring-emerald-500 outline-none">
                  <Icon size={18} />
                </a>
              ))}
            </nav>
          </div>

          <div className="bg-zinc-900 p-8 md:p-12 rounded-[2.5rem] border border-zinc-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full" aria-hidden="true"></div>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Nombre Completo</label>
                  <input id="name" type="text" required className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder-zinc-700" placeholder="Ej. Alex Smith" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Email</label>
                  <input id="email" type="email" required className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all placeholder-zinc-700" placeholder="alex@empresa.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Tu Consulta</label>
                <textarea id="message" rows={4} required className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all resize-none placeholder-zinc-700" placeholder="Cuéntanos cómo podemos ayudarte..."></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-emerald-500 text-black font-black uppercase tracking-widest rounded-xl hover:bg-white transition-all duration-300 transform active:scale-95 focus:ring-4 focus:ring-emerald-500/50 shadow-lg">
                ENVIAR SOLICITUD
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
