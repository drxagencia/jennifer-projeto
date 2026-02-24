'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlidersHorizontal, X, Check } from 'lucide-react';

export default function FilterBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeType, setActiveType] = useState('All');

  const types = ['All', 'Penthouse', 'Sea View', 'Mansion', 'Duplex'];

  return (
    <>
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="fixed top-6 left-0 right-0 z-40 px-6 pointer-events-none h-16 flex items-center"
      >
        <div className="pointer-events-auto absolute left-6">
           <span className="text-luxury-charcoal font-serif text-xl font-bold tracking-widest bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">L | B</span>
        </div>

        <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 glass-panel rounded-full px-6 py-3 flex items-center gap-6 shadow-lg">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-sm font-medium tracking-wide uppercase hover:text-luxury-gold transition-colors"
          >
            <SlidersHorizontal size={16} />
            <span className="hidden sm:inline">Filter</span>
          </button>
          <div className="h-4 w-[1px] bg-luxury-charcoal/20" />
          <div className="flex items-center gap-4">
            {types.slice(0, 3).map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`text-sm transition-colors hidden sm:block ${
                  activeType === type ? 'text-luxury-charcoal font-semibold' : 'text-luxury-charcoal/60 hover:text-luxury-charcoal'
                }`}
              >
                {type}
              </button>
            ))}
             <button
                className="sm:hidden text-sm font-semibold text-luxury-charcoal"
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
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-luxury-cream z-50 shadow-2xl p-8 md:p-12 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-serif text-luxury-charcoal">Refine Search</h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-luxury-charcoal/5 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-10">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-luxury-charcoal/50 mb-4">Property Type</h3>
                  <div className="flex flex-wrap gap-3">
                    {types.map((type) => (
                      <button
                        key={type}
                        onClick={() => setActiveType(type)}
                        className={`px-4 py-2 border transition-all duration-300 ${
                          activeType === type 
                            ? 'bg-luxury-charcoal text-white border-luxury-charcoal' 
                            : 'border-luxury-charcoal/20 text-luxury-charcoal hover:border-luxury-charcoal'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-luxury-charcoal/50 mb-4">Price Range</h3>
                  <div className="space-y-4">
                    <input type="range" className="w-full accent-luxury-gold" />
                    <div className="flex justify-between text-sm font-medium">
                      <span>R$ 2M</span>
                      <span>R$ 50M+</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-luxury-charcoal/50 mb-4">Bedrooms</h3>
                  <div className="flex gap-4">
                    {[2, 3, 4, '5+'].map((num) => (
                      <button key={num} className="w-12 h-12 rounded-full border border-luxury-charcoal/20 flex items-center justify-center hover:bg-luxury-charcoal hover:text-white transition-colors">
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-luxury-charcoal/10">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-luxury-charcoal text-white uppercase tracking-widest text-sm font-medium hover:bg-luxury-gold transition-colors duration-300"
                >
                  Show 12 Properties
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
