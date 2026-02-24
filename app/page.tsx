'use client';

import Hero from '@/components/Hero';
import PropertyCard from '@/components/PropertyCard';
import FilterBar from '@/components/FilterBar';
import ConciergeForm from '@/components/ConciergeForm';
import { motion } from 'motion/react';

const properties = [
  {
    id: 1,
    title: "The One Tower",
    location: "Barra Sul, Balneário Camboriú",
    price: "R$ 22.500.000",
    image: "https://picsum.photos/seed/luxury1/800/1000",
    beds: 4,
    baths: 5,
    sqm: 450
  },
  {
    id: 2,
    title: "Yachthouse Residence",
    location: "Barra Sul, Balneário Camboriú",
    price: "R$ 18.900.000",
    image: "https://picsum.photos/seed/luxury2/800/1000",
    beds: 4,
    baths: 4,
    sqm: 380
  },
  {
    id: 3,
    title: "Epic Tower",
    location: "Centro, Balneário Camboriú",
    price: "R$ 15.200.000",
    image: "https://picsum.photos/seed/luxury3/800/1000",
    beds: 3,
    baths: 4,
    sqm: 310
  },
  {
    id: 4,
    title: "Vitra by Pininfarina",
    location: "Av. Brasil, Balneário Camboriú",
    price: "R$ 12.800.000",
    image: "https://picsum.photos/seed/luxury4/800/1000",
    beds: 3,
    baths: 3,
    sqm: 280
  },
  {
    id: 5,
    title: "Copenhagen",
    location: "Pioneiros, Balneário Camboriú",
    price: "R$ 9.500.000",
    image: "https://picsum.photos/seed/luxury5/800/1000",
    beds: 3,
    baths: 3,
    sqm: 240
  },
  {
    id: 6,
    title: "Infinity Coast",
    location: "Barra Norte, Balneário Camboriú",
    price: "R$ 14.500.000",
    image: "https://picsum.photos/seed/luxury6/800/1000",
    beds: 4,
    baths: 5,
    sqm: 350
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-luxury-cream">
      <FilterBar />
      <Hero />
      
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-luxury-gold text-sm tracking-[0.2em] uppercase font-medium mb-2 block">Curated Selection</span>
            <h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal">Featured Residences</h2>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block text-sm uppercase tracking-widest border-b border-luxury-charcoal pb-1 hover:text-luxury-gold hover:border-luxury-gold transition-colors"
          >
            View All Properties
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <button className="text-sm uppercase tracking-widest border-b border-luxury-charcoal pb-1">
            View All Properties
          </button>
        </div>
      </section>

      <ConciergeForm />

      <footer className="bg-luxury-charcoal text-white py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif mb-6">Luxe Balneário</h2>
            <p className="text-white/60 max-w-sm font-light leading-relaxed">
              Defining the standard of luxury living in Santa Catarina. 
              We curate the most exceptional properties for the most discerning clients.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest text-luxury-gold mb-6">Navigation</h4>
            <ul className="space-y-4 text-white/70 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Developments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Concierge</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest text-luxury-gold mb-6">Contact</h4>
            <ul className="space-y-4 text-white/70 font-light">
              <li>Av. Atlântica, 1200</li>
              <li>Balneário Camboriú, SC</li>
              <li>+55 47 9999-9999</li>
              <li>contact@luxebc.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/40 text-xs uppercase tracking-wider">
          <p>&copy; 2024 Luxe Balneário. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
