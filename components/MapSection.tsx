
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

const MapSection: React.FC = () => {
  const [selectedScooter, setSelectedScooter] = useState<Scooter | null>(null);
  const [filterModel, setFilterModel] = useState<string>('All');
  const [minBattery, setMinBattery] = useState<number>(0);
  const [showFilters, setShowFilters] = useState(false);

  // Coordenadas simuladas sobre el área de Bogotá para visualización
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
    <div className="py-24 container mx-auto px-6 overflow-hidden" aria-labelledby="map-section-title">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 id="map-section-title" className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Cerca de ti</h2>
          <p className="text-zinc-500 max-w-xl font-light text-lg">
            Estamos en las calles de Bogotá. Encuentra tu NeoSkate ideal en segundos.
          </p>
        </div>
        
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center space-x-2 px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-sm font-bold uppercase tracking-widest text-emerald-500"
        >
          <SlidersHorizontal size={16} />
          <span>Filtros</span>
        </button>
      </div>

      <div className={`mb-8 flex flex-col md:flex-row items-start md:items-center gap-8 p-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl transition-all duration-300 ${showFilters ? 'block' : 'hidden md:flex'}`}>
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
                  ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.3)]' 
                  : 'bg-black text-zinc-400 border border-zinc-800 hover:border-zinc-700'
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
            type="range" 
            min="0" 
            max="100" 
            value={minBattery} 
            onChange={(e) => setMinBattery(parseInt(e.target.value))}
            className="w-full h-1.5 bg-black rounded-lg appearance-none cursor-pointer accent-emerald-500 border border-zinc-800"
            aria-label="Filtrar por batería mínima"
          />
        </div>

        <div className="md:ml-auto flex items-center space-x-2 text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
          <span>{filteredScooters.length} vehículos en Bogotá</span>
        </div>
      </div>

      <div className="relative w-full h-[600px] bg-zinc-900 border border-zinc-800 rounded-[3rem] overflow-hidden shadow-2xl">
        {/* Real Google Map Integration (Bogotá) */}
        <div className="absolute inset-0 grayscale invert brightness-75 contrast-125 opacity-40">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127255.42289139178!2d-74.153351915625!3d4.648283734005114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d1b063d099d40!2zQm9nb3TDoSwgQ29sb21iaWE!5e0!3m2!1ses!2sco!4v1715421234567!5m2!1ses!2sco" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Bogotá"
          ></iframe>
        </div>

        {/* Map Interactive Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="relative w-full h-full pointer-events-auto">
            <AnimatePresence mode="popLayout">
              {filteredScooters.map((scooter) => (
                <motion.button
                  key={scooter.id}
                  layout
                  onClick={() => setSelectedScooter(scooter)}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute group"
                  style={{ top: `${scooter.lat}%`, left: `${scooter.lng}%` }}
                  aria-label={`Ver detalles de ${scooter.id}`}
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-emerald-500/20 rounded-full animate-ping"></div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300 ${
                      selectedScooter?.id === scooter.id ? 'bg-white text-black' : 'bg-emerald-500 text-black'
                    }`}>
                      <Zap size={16} fill="currentColor" />
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-black/90 border border-zinc-800 px-3 py-1 rounded-full text-[10px] font-bold whitespace-nowrap flex items-center space-x-1">
                        <div className={`w-1.5 h-1.5 rounded-full ${scooter.battery > 20 ? 'bg-emerald-500' : 'bg-red-500'}`}></div>
                        <span>{scooter.battery}%</span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Info Sidebar Overlay */}
        <AnimatePresence>
          {selectedScooter && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="absolute top-0 right-0 h-full w-full md:w-96 bg-zinc-900/95 backdrop-blur-xl border-l border-zinc-800 z-30 p-8 flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
            >
              <button 
                onClick={() => setSelectedScooter(null)}
                className="absolute top-6 right-6 p-2 text-zinc-500 hover:text-white transition-colors"
                aria-label="Cerrar detalles"
              >
                <X size={24} />
              </button>

              <div className="mt-12">
                <div className="flex items-center space-x-2 mb-2">
                  <Star size={14} className="text-emerald-500 fill-emerald-500" />
                  <span className="text-emerald-500 text-xs font-black uppercase tracking-[0.2em]">Selección recomendada</span>
                </div>
                
                <h3 className="text-4xl font-black uppercase tracking-tighter mb-1 leading-none">{selectedScooter.model}</h3>
                
                <div className="flex items-center space-x-3 mb-8">
                  <div className="flex items-center space-x-1.5 bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    <Tag size={10} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Modelo</span>
                  </div>
                  <p className="text-zinc-500 font-mono text-xs">{selectedScooter.id}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="bg-black p-4 rounded-2xl border border-zinc-800 flex items-center space-x-4">
                    <div className={`p-2 rounded-xl ${selectedScooter.battery > 20 ? 'text-emerald-500 bg-emerald-500/10' : 'text-red-500 bg-red-500/10'}`}>
                      <Battery size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Batería</p>
                      <p className="text-xl font-black">{selectedScooter.battery}%</p>
                    </div>
                  </div>
                  <div className="bg-black p-4 rounded-2xl border border-zinc-800 flex items-center space-x-4">
                    <div className="p-2 rounded-xl text-emerald-500 bg-emerald-500/10">
                      <Zap size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Rango</p>
                      <p className="text-xl font-black">{Math.floor(selectedScooter.battery * 0.6)} km</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center text-zinc-300">
                    <Shield size={18} className="mr-3 text-emerald-500" />
                    <span className="text-sm">Seguro de viaje incluido</span>
                  </div>
                  <div className="flex items-center text-zinc-300">
                    <Navigation size={18} className="mr-3 text-emerald-500" />
                    <span className="text-sm">A pocos minutos de ti</span>
                  </div>
                </div>

                <button className="w-full py-5 bg-emerald-500 text-black font-black uppercase tracking-widest rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95 transition-all">
                  RESERVAR AHORA
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Patinetas Libres", value: filteredScooters.length },
          { label: "Tiempo de espera", value: "3.5 min" },
          { label: "Precio medio", value: "5.500 COP" },
          { label: "Reducción CO2", value: "4.2 t" }
        ].map((stat, i) => (
          <div key={i} className="text-center p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
            <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-2">{stat.label}</p>
            <p className="text-2xl font-black text-emerald-500">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapSection;
