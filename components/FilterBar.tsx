'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlidersHorizontal, X, Check } from 'lucide-react';

export default function FilterBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeType, setActiveType] = useState('Todos');

  const types = ['Todos', 'Cobertura', 'Vista Mar', 'Mansão', 'Duplex'];

  return (
    <>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="fixed top-6 left-0 right-0 z-40 px-4 md:px-6 pointer-events-none h-16 flex items-center justify-between md:justify-center"
      >
        <div className="pointer-events-auto md:absolute md:left-6">
           <span className="text-white font-serif text-xl font-bold tracking-widest bg-luxury-charcoal/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/10">L | B</span>
        </div>

        <div className="pointer-events-auto glass-panel-dark rounded-full px-5 py-3 flex items-center gap-4 md:gap-6 shadow-2xl border border-white/10">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-white hover:text-luxury-gold transition-colors"
          >
            <SlidersHorizontal size={16} />
            <span className="hidden sm:inline">Filtrar</span>
          </button>
          <div className="h-4 w-[1px] bg-white/20" />
          <div className="flex items-center gap-4">
            {types.slice(0, 3).map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`text-sm transition-colors hidden sm:block ${
                  activeType === type ? 'text-white font-semibold' : 'text-white/60 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
             <button
                className="sm:hidden text-sm font-semibold text-white"
              >
                {activeType}
              </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-luxury-charcoal z-50 shadow-2xl p-8 md:p-12 overflow-y-auto border-l border-white/10"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-serif text-white">Refinar Busca</h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-luxury-gold mb-4">Tipo de Imóvel</h3>
                  <div className="flex flex-wrap gap-3">
                    {types.map((type) => (
                      <button
                        key={type}
                        onClick={() => setActiveType(type)}
                        className={`px-4 py-2 border transition-all duration-300 ${
                          activeType === type 
                            ? 'bg-white text-luxury-charcoal border-white' 
                            : 'border-white/20 text-white hover:border-white'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-luxury-gold mb-4">Faixa de Preço</h3>
                  <div className="space-y-4">
                    <input type="range" className="w-full accent-luxury-gold" />
                    <div className="flex justify-between text-sm font-medium text-white/80">
                      <span>R$ 2M</span>
                      <span>R$ 50M+</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-luxury-gold mb-4">Quartos</h3>
                  <div className="flex gap-4">
                    {[2, 3, 4, '5+'].map((num) => (
                      <button key={num} className="w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-luxury-charcoal transition-colors">
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-luxury-gold text-luxury-charcoal uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors duration-300"
                >
                  Mostrar 12 Imóveis
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
