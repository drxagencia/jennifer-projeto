'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

import MagneticButton from './MagneticButton';

export default function ConciergeForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section className="py-24 px-4 bg-luxury-charcoal text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase font-medium mb-4 block">Concierge Service</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Private Consultation</h2>
          <p className="text-white/60 max-w-xl mx-auto font-light">
            Allow our team to curate a selection of properties tailored to your specific lifestyle requirements.
          </p>
        </div>

        <div className="glass-panel-dark p-8 md:p-12 rounded-2xl max-w-3xl mx-auto">
          {formState === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 rounded-full border-2 border-luxury-gold flex items-center justify-center mx-auto mb-6 text-luxury-gold">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-serif mb-2">Request Received</h3>
              <p className="text-white/60">Our concierge will contact you shortly.</p>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-8 text-sm uppercase tracking-widest text-luxury-gold hover:text-white transition-colors"
              >
                Send another request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-luxury-gold transition-colors">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-luxury-gold transition-colors"
                    placeholder="Your Full Name"
                  />
                </div>
                <div className="group">
                  <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-luxury-gold transition-colors">Contact</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-luxury-gold transition-colors"
                    placeholder="Phone or Email"
                  />
                </div>
              </div>
              
              <div className="group">
                <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-luxury-gold transition-colors">Preferences</label>
                <textarea 
                  rows={3}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-lg focus:outline-none focus:border-luxury-gold transition-colors resize-none"
                  placeholder="Tell us about your ideal property..."
                />
              </div>

              <div className="flex justify-end pt-4">
                <MagneticButton 
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="px-10 py-4 bg-luxury-gold text-luxury-charcoal font-medium uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Request Consultation'}
                </MagneticButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
