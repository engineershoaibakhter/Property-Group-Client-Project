"use client";
// components/Partners.js
import styles from '../styles/Partners.module.css';

const Partners = () => {
  const images = [
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png',
  ];

  return (
    <div className={styles.Partners} id='partners'>
      <h2 className={styles.h2}>Our Partners</h2>
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {images.map((src, index) => (
          <div className={styles.slide} key={index}>
            <img src={src} height="100" width="250" alt={`Partner ${index + 1}`} />
          </div>
        ))}
        {images.map((src, index) => (
          <div className={styles.slide} key={index + images.length}>
            <img src={src} height="100" width="250" alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Partners;
