"use client";
import Image from 'next/image';
import styles from '../styles/CommercialCarousel.module.css';

const CommercialCarousel = ({ companyName, companyDescription }) => {
  const image = "/images/webimages5.jpg";
  const isBlurred = companyName !== "Central Square";
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselSlide}>
        <div className={`${styles.carouselImageContainer} ${isBlurred ? styles.blurred : ''}`}>
          <Image
            src={image}
            alt='Central Place Sydney'
            
            className={styles.carouselImage}
            
            layout="responsive" width={200} height={100} objectFit="cover"
          />
        </div>
        <div className={styles.carouselContent}>
          <h1>{companyName}</h1>
          <p>{companyDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default CommercialCarousel;
