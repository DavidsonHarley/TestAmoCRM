import React from 'react';
import { Link } from 'react-router-dom';
import { Contacts } from './Header';
import styles from './Task2.module.css';
import { menuFooter } from './text';

export default function Footer() {
  return (
    <>
      <div className={styles.containerInfo}>
        <div className={styles.company}>
          <div className={styles.textHeading}>О компании</div>
          <div className={styles.textFooter}>Партнёрская программа</div>
          <div className={styles.textFooter}>Вакансии</div>
        </div>
        <div className={styles.containerMenu}>
          <div className={styles.textHeading}>Меню</div>
          <div className={styles.menu}>
            {menuFooter.map((el) => <div key={el} className={styles.textMenu}>{el}</div>)}
          </div>

        </div>
        <div className={styles.footerContacts}>
          <div className={styles.textHeading}>Контакты</div>
          <div className={styles.number}>
            +7 555 555-55-55
          </div>
          <div className={styles.imgContacts}>
            {Contacts()}
          </div>
          <div className={styles.textFooter}>
            Москва, Путевой проезд 3с1, к 902
          </div>
        </div>
      </div>
      <div className={styles.containerСonfidentiality}>
        <div className={styles.textСonfidentiality}>
          ©WELBEX 2022. Все права защищены.
        </div>
        <Link className={styles.textСonfidentiality} to="/">
          Политика конфиденциальности
        </Link>
      </div>

    </>
  );
}
