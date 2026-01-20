
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Battery, Zap, Navigation, X, Shield, Star, Filter, SlidersHorizontal, Tag } from 'lucide-react';

interface Scooter {
  id: string;
  lat: number;
  lng: number;
  battery: number;
  model: string;
  status: 'available' | 'reserved';
}

interface MapSectionProps {
  isDarkMode: boolean;
}

const MapSection: React.FC<MapSectionProps> = ({ isDarkMode }) => {
  const [selectedScooter, setSelectedScooter] = useState<Scooter | null>(null);
  const [filterModel, setFilterModel] = useState<string>('All');
  const [minBattery, setMinBattery] = useState<number>(0);
  const [showFilters, setShowFilters] = useState(false);

  const scooters: Scooter[] = [
    { id: 'NEO-1024', lat: 30, lng: 45, battery: 88, model: 'NeoPro v3', status: 'available' },
    { id: 'NEO-5521', lat: 55, lng: 52, battery: 42, model: 'NeoCruise', status: 'available' },
    { id: 'NEO-9910', lat: 42, lng: 38, battery: 95, model: 'NeoPro v3', status: 'available' },
    { id: 'NEO-2201', lat: 65, lng: 60, battery: 12, model: 'NeoLite', status: 'available' },
    { id: 'NEO-8844', lat: 48, lng: 55, battery: 67, model: 'NeoCruise', status: 'available' },
    { id: 'NEO-3341', lat: 35, lng: 30, battery: 92, model: 'NeoLite', status: 'available' },
    { id: 'NEO-4412', lat: 25, lng: 58, battery: 30, model: 'NeoPro v3', status: 'available' },
  ];

  const models = ['All', 'NeoPro v3', 'NeoCruise', 'NeoLite'];

  const filteredScooters = useMemo(() => {
    return scooters.filter(scooter => {
      const matchModel = filterModel === 'All' || scooter.model === filterModel;
      const matchBattery = scooter.battery >= minBattery;
      return matchModel && matchBattery;
    });
  }, [filterModel, minBattery]);

  return (
    <div className="py-24 container mx-auto px-6 overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Cerca de ti</h2>
          <p className={`${isDarkMode ? 'text-zinc-500' : 'text-slate-500'} max-w-xl font-light text-lg`}>
            Estamos en las calles de Bogotá. Encuentra tu NeoSkate ideal en segundos.
          </p>
        </div>
        
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className={`md:hidden flex items-center space-x-2 px-6 py-3 ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-slate-200 shadow-sm'} border rounded-full text-sm font-bold uppercase tracking-widest text-emerald-500`}
        >
          <SlidersHorizontal size={16} />
          <span>Filtros</span>
        </button>
      </div>

      <div className={`mb-8 flex flex-col md:flex-row items-start md:items-center gap-8 p-6 ${isDarkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-slate-200 shadow-sm'} border rounded-3xl transition-all duration-300 ${showFilters ? 'block' : 'hidden md:flex'}`}>
        <div className="w-full md:w-auto">
          <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mb-3 flex items-center">
            <Filter size={12} className="mr-2" /> Modelo de Patineta
          </p>
          <div className="flex flex-wrap gap-2">
            {models.map(model => (
              <button
                key={model}
                onClick={() => setFilterModel(model)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  filterModel === model 
                  ? 'bg-emerald-500 text-black shadow-lg' 
                  : `${isDarkMode ? 'bg-black text-zinc-400 border-zinc-800' : 'bg-slate-50 text-slate-500 border-slate-200'} border`
                }`}
              >
                {model}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full md:w-64">
          <div className="flex justify-between items-center mb-3">
            <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest flex items-center">
              <Battery size={12} className="mr-2" /> Batería Mínima
            </p>
            <span className="text-emerald-500 text-xs font-black">{minBattery}%</span>
          </div>
          <input 
            type="range" min="0" max="100" value={minBattery} 
            onChange={(e) => setMinBattery(parseInt(e.target.value))}
            className="w-full h-1.5 bg-zinc-200 dark:bg-black rounded-lg appearance-none cursor-pointer accent-emerald-500 border dark:border-zinc-800"
          />
        </div>
      </div>

      <div className={`relative w-full h-[600px] ${isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-slate-200'} border rounded-[3rem] overflow-hidden shadow-2xl`}>
        <div className={`absolute inset-0 grayscale ${isDarkMode ? 'invert brightness-75 contrast-125 opacity-40' : 'opacity-80'}`}>
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127255.42289139178!2d-74.153351915625!3d4.648283734005114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d1b063d099d40!2zQm9nb3TDoSwgQ29sb21iaWE!5e0!3m2!1ses!2sco!4v1715421234567!5m2!1ses!2sco" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" 
          ></iframe>
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="relative w-full h-full pointer-events-auto">
            {filteredScooters.map((scooter) => (
              <motion.button
                key={scooter.id} layout
                onClick={() => setSelectedScooter(scooter)}
                className="absolute group"
                style={{ top: `${scooter.lat}%`, left: `${scooter.lng}%` }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-emerald-500/20 rounded-full animate-ping"></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-colors ${selectedScooter?.id === scooter.id ? 'bg-white text-black' : 'bg-emerald-500 text-black'}`}>
                    <Zap size={16} fill="currentColor" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedScooter && (
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              className={`absolute top-0 right-0 h-full w-full md:w-96 ${isDarkMode ? 'bg-zinc-900/95 border-zinc-800' : 'bg-white/95 border-slate-200'} backdrop-blur-xl border-l z-30 p-8 flex flex-col shadow-2xl`}
            >
              <button onClick={() => setSelectedScooter(null)} className="absolute top-6 right-6 text-zinc-500 hover:text-emerald-500"><X size={24} /></button>
              <div className="mt-12">
                <h3 className={`text-4xl font-black uppercase tracking-tighter mb-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>{selectedScooter.model}</h3>
                <div className="grid grid-cols-2 gap-4 mb-10 mt-8">
                  <div className={`${isDarkMode ? 'bg-black border-zinc-800' : 'bg-slate-50 border-slate-100'} p-4 rounded-2xl border flex items-center space-x-4`}>
                    <Battery className="text-emerald-500" size={24} />
                    <div><p className="text-[10px] text-zinc-500 uppercase font-bold">Batería</p><p className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-black'}`}>{selectedScooter.battery}%</p></div>
                  </div>
                  <div className={`${isDarkMode ? 'bg-black border-zinc-800' : 'bg-slate-50 border-slate-100'} p-4 rounded-2xl border flex items-center space-x-4`}>
                    <Zap className="text-emerald-500" size={24} />
                    <div><p className="text-[10px] text-zinc-500 uppercase font-bold">Rango</p><p className={`text-xl font-black ${isDarkMode ? 'text-white' : 'text-black'}`}>{Math.floor(selectedScooter.battery * 0.6)} km</p></div>
                  </div>
                </div>
                <button className="w-full py-5 bg-emerald-500 text-black font-black uppercase tracking-widest rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all">RESERVAR AHORA</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MapSection;
