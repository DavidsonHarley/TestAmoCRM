import React from 'react';
import styles from './Task2.module.css';
import { menuHeader } from './text';

export function Contacts() {
  return (
    <>
      <div>
        <img src="../../img/Vector.svg" alt="telegram" />
      </div>
      <div>
        <img src="../../img/phone.svg" alt="phone" />
      </div>
      <div>
        <img src="../../img/Vector (1).svg" alt="whatsapp" />
      </div>

    </>
  );
}

export default function Header() {
  return (
    <>
      <div className={styles.containerLogo}>
        <div className={styles.logo}>
          <img src="../../img/logo_welbex.svg" alt="logo" />
        </div>
        <div className={styles.logoInfo}>
          крупный интегратор CRM в Росcии и ещё 8 странах
        </div>
      </div>

      <div className={styles.navigation}>
        {menuHeader.map((el) => <div key={el} className={styles.navigationName}>{el}</div>)}
      </div>
      <div className={styles.headerСontacts}>
        <div className={styles.number}>
          +7 555 555-55-55
        </div>
        {Contacts()}
      </div>
    </>

  );
}
