'use client';

import { motion } from 'motion/react';
import { MapPin, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  sqm: number;
}

export default function PropertyCard({ property, index }: { property: Property; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      className="group relative w-full aspect-[3/4] overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 bg-luxury-charcoal/10 group-hover:bg-luxury-charcoal/0 transition-colors duration-500 z-10" />
      
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-full w-full relative"
      >
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/60 via-transparent to-transparent">
        <div className="flex justify-end">
          <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-white hover:text-luxury-charcoal transition-colors duration-300">
            <ArrowUpRight size={20} />
          </div>
        </div>
        
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-white uppercase bg-luxury-gold/90 backdrop-blur-md">
            Exclusive
          </span>
          <h3 className="text-2xl font-serif text-white mb-1">{property.title}</h3>
          <div className="flex items-center text-white/80 text-sm mb-4">
            <MapPin size={14} className="mr-1" />
            {property.location}
          </div>
          <div className="flex items-center justify-between border-t border-white/20 pt-4 text-white/90 text-sm font-light">
            <span>{property.beds} Beds</span>
            <span>{property.baths} Baths</span>
            <span>{property.sqm} m²</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 group-hover:opacity-0 transition-opacity duration-500">
        <h3 className="text-2xl font-serif text-white drop-shadow-md">{property.title}</h3>
        <p className="text-luxury-gold-light font-medium mt-1">{property.price}</p>
      </div>
    </motion.div>
  );
}
