'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './HeroModern.module.css';

const images = [
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop", // Luxury Home 1
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop", // Luxury Home 2 (Fixed)
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop", // Luxury Home 3
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"  // Luxury Home 4
];

export default function HeroModern() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Mouse spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      containerRef.current.style.setProperty('--mouse-x', `${x}px`);
      containerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Image Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.heroContainer} ref={containerRef}>
      {/* Background Slider */}
      <div className={styles.sliderContainer}>
        {images.map((img, index) => (
          <img 
            key={index}
            src={img} 
            alt={`Luxury Property ${index + 1}`}
            className={`${styles.slideImage} ${index === currentSlide ? styles.activeSlide : ''}`}
          />
        ))}
      </div>

      {/* Spotlight Overlay */}
      <div className={styles.spotlightOverlay} />

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>BC Luxury</div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Institucional</a>
          <a href="#" className={styles.navLink}>Lançamentos</a>
          <a href="#" className={styles.navLink}>Vendas</a>
          <a href="#" className={styles.navLink}>Contato</a>
        </nav>
      </header>

      {/* Main Content */}
      <div className={styles.content}>
        <h1 className={styles.headline}>
          Imobiliária de <br />
          Balneário Camboriú
        </h1>
        <p className={styles.subheadline}>
          Descubra o auge da sofisticação no litoral catarinense. 
          Imóveis exclusivos para quem exige o extraordinário.
        </p>
      </div>
    </div>
  );
}
