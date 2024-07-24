"use client";
import Image from 'next/image';
// components/Partners.js
import styles from '../styles/Partners.module.css';

const Partners = () => {
  const images = [
    '/images/clients/clean.webp',
    '/images/clients/iga.svg',
    '/images/clients/anytimefitness.jpg',
    '/images/clients/subway-logo.avif',
  ];

  return (
    <div className={styles.Partners} id='partners'>
      <h2 className={styles.h2}>Our Partners</h2>
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {images.map((source, index) => (
          <div className={styles.slide} key={index}>
            <Image src={source} height={100} width={250} alt={`Partner ${index + 1}`} />
          </div>
        ))}
        {images.map((source, index) => (
          <div className={styles.slide} key={index + images.length}>
            <Image src={source} height={100} width={250} alt={`Partner ${index + 1}`} />
          </div>
        ))}
        {images.map((source, index) => (
          <div className={styles.slide} key={index + images.length}>
            <Image src={source} height={100} width={200} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Partners;
