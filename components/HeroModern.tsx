'use client';

import React, { useEffect, useRef } from 'react';
import styles from './HeroModern.module.css';
import { Search } from 'lucide-react';

export default function HeroModern() {
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className={styles.heroContainer} ref={containerRef}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>Imobiliária KP</div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Institucional</a>
          <a href="#" className={styles.navLink}>Lançamentos</a>
          <a href="#" className={styles.navLink}>Vendas</a>
          <a href="#" className={styles.navLink}>Contato</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.textContent}>
          <h1 className={styles.headline}>
            Imobiliária KP <br />
            construindo sonhos...
          </h1>
          <p className={styles.subheadline}>
            Encontre o imóvel perfeito com a segurança e exclusividade que você merece. 
            Nossa curadoria especializada transforma a busca pelo seu novo lar em uma experiência única.
          </p>

          {/* Search Bar */}
          <div className={styles.searchContainer}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Tipo</label>
              <select className={styles.select}>
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Cobertura</option>
                <option>Terreno</option>
              </select>
            </div>
            
            <div className={styles.inputGroup}>
              <label className={styles.label}>Localização</label>
              <input type="text" className={styles.input} placeholder="Cidade ou Bairro" />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Valor Máx.</label>
              <select className={styles.select}>
                <option>R$ 500.000</option>
                <option>R$ 1.000.000</option>
                <option>R$ 2.000.000+</option>
                <option>Sem limite</option>
              </select>
            </div>

            <button className={styles.searchButton}>
              Buscar
            </button>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className={styles.imagePlaceholder}>
          {/* Using a high quality placeholder image that fits the dark theme */}
          <img 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" 
            alt="Corretor Imobiliário" 
            className={styles.realtorImage}
          />
        </div>
      </main>
    </div>
  );
}
