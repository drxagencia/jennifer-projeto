'use client';

import React, { useState } from 'react';
import styles from './SearchFilter.module.css';

interface SearchFilterProps {
  onSearch?: (filters: any) => void;
}

export default function SearchFilter({ onSearch }: SearchFilterProps) {
  const [type, setType] = useState('Apartamento');
  const [location, setLocation] = useState('');
  const [value, setValue] = useState('Sem limite');

  const handleSearch = () => {
    if (onSearch) {
      onSearch({ type, location, value });
    }
  };

  return (
    <div className={styles.searchWrapper}>
      <div className={styles.searchContainer}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Encontre seu Imóvel</label>
          <select 
            className={styles.select}
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Apartamento</option>
            <option>Cobertura</option>
            <option>Casa em Condomínio</option>
            <option>Terreno</option>
            <option>Frente Mar</option>
          </select>
        </div>
        
        <div className={styles.inputGroup}>
          <label className={styles.label}>Localização</label>
          <input 
            type="text" 
            className={styles.input} 
            placeholder="Ex: Barra Sul, Centro..." 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Valor Máx.</label>
          <select 
            className={styles.select}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          >
            <option>R$ 1.000.000</option>
            <option>R$ 2.500.000</option>
            <option>R$ 5.000.000</option>
            <option>R$ 10.000.000+</option>
            <option>Sem limite</option>
          </select>
        </div>

        <button className={styles.searchButton} onClick={handleSearch}>
          Buscar
        </button>
      </div>
    </div>
  );
}
