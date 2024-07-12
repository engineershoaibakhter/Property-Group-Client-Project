"use client"

import React from 'react';
import styles from '../styles/Commercial.module.css';
import Link from 'next/link';

const Commercial = () => {
  return (
    <div className={styles.commercial}>
    <div className={styles.commercialContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Our Projects</h2>
        <p className={styles.description}>
          High performance businesses need high-performance places to function as the engine-rooms of their success. From the home of Australia’s biggest blue-chip companies to world-class innovation precincts supporting the next wave of entrepreneurs, our commercial neighbourhoods are fueling the future of work.
        </p>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src="/images/building.jpg" alt="Asset 1" className={styles.image} />
          </div>
          <div className={styles.cardContent}>
            <p className={styles.location}>NSW, Rhodes</p>
            <h4 className={styles.projectName}>Rhodes Quarter</h4>
            <p className={styles.features}>
              <span role="img" aria-label="leaf">🍃</span> Features world-leading carbon neutral NABERS & Platinum WELL certified offices.
            </p>
            <div className={styles.footer}>
              <p className={styles.leasing}>Leasing now</p>
              <p>
                <Link href={'../pages/CommercialDetails'} className={styles.detailsLink}>More details ➔</Link>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
        <div className={styles.imageContainer}>
        <img src="/images/cars.jpg" alt="Asset 2" className={styles.image} />
        
          </div>
          <div className={styles.cardContent}>
            <p className={styles.location}>NSW, Haymarket</p>
            <h2 className={styles.projectName}>Central Place Sydney</h2>
            <p className={styles.features}>
              <span role="img" aria-label="leaf">🍃</span> Targeting net zero carbon emissions and world-leading WELL & Green Star ratings.
            </p>
            <div className={styles.footer}>
              <p className={styles.leasing}>Leasing now</p>
              <Link href={'/pages/CommercialDetails'} className={styles.detailsLink}>More details ➔</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Commercial;
