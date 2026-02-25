'use client';

import React, { useState } from 'react';
import HeroModern from '@/components/HeroModern';
import SearchFilter from '@/components/SearchFilter';
import FeaturedProperties from '@/components/FeaturedProperties';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Footer from '@/components/Footer';

export default function Home() {
  const [searchIntent, setSearchIntent] = useState({ type: 'Apartamento', location: '' });

  const handleSearch = (filters: any) => {
    setSearchIntent({ type: filters.type, location: filters.location });
    // In a real app, this would filter the properties list or redirect
    console.log("Searching for:", filters);
    
    // Scroll to properties
    const propertiesSection = document.getElementById('properties');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main style={{ backgroundColor: '#050505', minHeight: '100vh' }}>
      <HeroModern />
      <SearchFilter onSearch={handleSearch} />
      <div id="properties">
        <FeaturedProperties />
      </div>
      <Footer />
      <WhatsAppFloat intent={searchIntent} />
    </main>
  );
}

