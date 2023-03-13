import React from 'react';
import Footer from './Footer';

import Header from './Header';
import styles from './Task2.module.css';
import { menuFooter, menuHeader } from './text';

export default function Task2() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Header />
      </header>
      <main>
        <div>MAIN</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
