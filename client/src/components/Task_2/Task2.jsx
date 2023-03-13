import React from 'react';
import Footer from './Footer';

import Header from './Header';
import Main from './Main';
import styles from './Task2.module.css';

export default function Task2() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>

  );
}
