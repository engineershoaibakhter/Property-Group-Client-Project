"use client";
import React from 'react';
import styles from '../styles/Partners.module.css';

const Partners = () => {
  return (
    <div className={styles.partners}>
        <h1 className={styles.heading}>Our Partners</h1>
    <div className={styles.container}>
      <div className={styles.sliderWrapper}>
        <ul className={styles.imageList}>
          <li className={styles.imageItem}><img src="/images/partner1.png" alt="img-1" /></li>
          <li className={styles.imageItem}><img src="/images/partner2.png" alt="img-2" /></li>
          <li className={styles.imageItem}><img src="/images/partner1.png" alt="img-3" /></li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Partners;
