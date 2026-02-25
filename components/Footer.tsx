'use client';

import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.logo}>BC Luxury</div>
            <p className={styles.description}>
              Sua parceira exclusiva em negócios imobiliários de alto padrão em Balneário Camboriú e região. 
              Transformando sonhos em endereços de prestígio.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Navegação</h4>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}>Início</a></li>
              <li><a href="#" className={styles.link}>Imóveis à Venda</a></li>
              <li><a href="#" className={styles.link}>Lançamentos</a></li>
              <li><a href="#" className={styles.link}>Sobre Nós</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contato</h4>
            <div className={styles.contactInfo}>
              <p>Av. Atlântica, 2400 - Centro</p>
              <p>Balneário Camboriú - SC</p>
              <p>(47) 9 9999-9999</p>
              <p>contato@bcluxury.com.br</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2024 BC Luxury Imóveis. Todos os direitos reservados.</p>
          <p>CRECI 9999-J</p>
        </div>
      </div>
    </footer>
  );
}
