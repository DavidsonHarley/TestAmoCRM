import React from 'react';
import styles from './Task2.module.css';
import { category } from './text';

export default function Main() {
  return (
    <div className={styles.containerMain}>
      <div className={styles.content1}>
        <div className={styles.textContent1}>
          Зарабатывайте больше
        </div>
        <div>
          <img src="../../img/сWELBEX.svg" alt="img" />
        </div>
        <div className={styles.textContent1par}>
          Развиваем и контролируем продажи за вас
        </div>
      </div>
      <div className={styles.content2}>
        <div className={styles.textImg}>
          <img src="../../img/2.svg" alt="img" />
        </div>
        <div className={styles.textContent2}>
          <div className={styles.containerInfoContent2}>
            {category.map((el) => (
              <div className={styles.containerCategory}>
                <div key={el.id} className={styles.categoryText}>{el.category}</div>
                <div className={styles.textPar}>{el.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <button className={styles.button} type="button">Получить консультацию</button>
        </div>
      </div>
    </div>
  );
}
