'use client';

import React from 'react';
import styles from './FeaturedProperties.module.css';
import { MapPin, Bed, Bath, Maximize, ArrowRight } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: "Cobertura Duplex Frente Mar",
    location: "Av. Atlântica, Barra Sul",
    price: "R$ 28.500.000",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    beds: 4,
    baths: 5,
    area: "450m²",
    type: "Cobertura"
  },
  {
    id: 2,
    title: "Apartamento Alto Padrão",
    location: "Centro, Balneário Camboriú",
    price: "R$ 4.200.000",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2074&auto=format&fit=crop",
    beds: 3,
    baths: 3,
    area: "180m²",
    type: "Apartamento"
  },
  {
    id: 3,
    title: "Mansão em Condomínio Fechado",
    location: "Praia dos Amores",
    price: "R$ 12.900.000",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    beds: 5,
    baths: 6,
    area: "800m²",
    type: "Casa"
  },
  {
    id: 4,
    title: "Vista Panorâmica 360º",
    location: "Barra Norte, Balneário Camboriú",
    price: "R$ 9.800.000",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    beds: 4,
    baths: 4,
    area: "320m²",
    type: "Apartamento"
  },
  {
    id: 5,
    title: "Penthouse Exclusiva",
    location: "Av. Brasil, Centro",
    price: "R$ 15.500.000",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    beds: 4,
    baths: 5,
    area: "410m²",
    type: "Cobertura"
  },
  {
    id: 6,
    title: "Studio Design",
    location: "Pioneiros, Balneário Camboriú",
    price: "R$ 1.800.000",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop",
    beds: 1,
    baths: 1,
    area: "75m²",
    type: "Studio"
  }
];

export default function FeaturedProperties() {
  const handleWhatsAppClick = (propertyTitle: string) => {
    const message = `Olá, tenho interesse no imóvel: ${propertyTitle}. Poderia me dar mais informações?`;
    const url = `https://wa.me/5547999999999?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className={styles.gridWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Portfólio Exclusivo</h2>
          <p className={styles.subtitle}>Oportunidades únicas selecionadas para você</p>
        </div>

        <div className={styles.grid}>
          {properties.map((property) => (
            <div key={property.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <img src={property.image} alt={property.title} className={styles.image} />
                <span className={styles.badge}>{property.type}</span>
              </div>
              <div className={styles.content}>
                <div className={styles.price}>{property.price}</div>
                <h3 className={styles.propertyTitle}>{property.title}</h3>
                <div className={styles.location}>
                  <MapPin size={14} />
                  {property.location}
                </div>
                <div className={styles.features}>
                  <div className={styles.feature}>
                    <Bed size={16} /> {property.beds}
                  </div>
                  <div className={styles.feature}>
                    <Bath size={16} /> {property.baths}
                  </div>
                  <div className={styles.feature}>
                    <Maximize size={16} /> {property.area}
                  </div>
                </div>
                <button 
                  className={styles.whatsappBtn}
                  onClick={() => handleWhatsAppClick(property.title)}
                >
                  Tenho Interesse
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
