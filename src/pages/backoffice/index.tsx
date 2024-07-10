import React from 'react';
import Headerbar from '@/components/Headerbar';
import styles from '@/styles/Backoffice.module.css';

const Backoffice: React.FC = () => {
  return (
    <div className={styles.container}>
      <Headerbar />
      <div className={styles.menu_lateral}>
        <div className={styles.menu_logo}></div>
        <div className={styles.menu_item + ' ' + styles.active}>Home</div>
        <div className={styles.menu_item}>Enviar Arquivo</div>
        <div className={styles.menu_item}>Meus Arquivos</div>
      </div>
      <main className={styles.main_container}>
        <div className={styles.search_section}>
          <input type="text" placeholder="Pesquisar por arquivos..." className={styles.search_input} />
        </div>
        <div className={styles.centro_bg}>
          <h2>Seja bem vindo(a), ao seu portal de análise de contratos</h2>
          <p>Arraste seus arquivos e pastas para cá ou use o botão "Enviar arquivo" para fazer upload e começar a analisar.</p>
        </div>
      </main>
    </div>
  );
};

export default Backoffice;
