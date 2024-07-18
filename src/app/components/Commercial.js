"use client"

import React from 'react';
import styles from '../styles/Commercial.module.css';
import Link from 'next/link';

const Commercial = () => {
  return (
    
    <div className={styles.commercial} id='projects'>
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
            <p className={styles.location}>VIC, Thornhill Park</p>
            <h4 className={styles.projectName}>Central Square</h4>
            <p className={styles.features}>
              Features world-leading carbon neutral NABERS & Platinum WELL certified offices.
            </p>
            <div className={styles.footer}>
              <Link href={'https://www.pspproperty.com.au/property?property_id=1064509/2-sadie-avenue-thornhill-park'} target="_blank" rel="noopener noreferrer"><button className={styles.leasing}>Leasing now</button></Link> 
                <Link href={'/craigieburn'} target="_blank" rel="noopener noreferrer"><button className={styles.detailsLink}>More details ➔</button></Link> 
              
            </div>
          </div>
        </div>
        <div className={styles.card}>
        <div className={styles.imageContainer}>
        <img src="/images/cars.jpg" alt="Asset 2" className={styles.image} />
        
          </div>
          <div className={styles.cardContent}>
            <p className={styles.location}>VIC, Craigieburn</p>
            <h2 className={styles.projectName}>Aston Square</h2>
            <p className={styles.features}>
              Targeting net zero carbon emissions and world-leading WELL & Green Star ratings.
            </p>
            <div className={styles.footer}>
              <Link href={'https://www.pspproperty.com.au/property?property_id=1241993/179-elevation-boulevard-craigieburn'} target="_blank" rel="noopener noreferrer"><button className={styles.leasing}>Leasing now</button></Link> 
              <Link href={'/thornhill'} target="_blank" rel="noopener noreferrer"><button className={styles.detailsLink}>More details ➔</button></Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Commercial;
