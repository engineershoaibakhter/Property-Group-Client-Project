"use client";
import Image from 'next/image';
import styles from '../styles/CommercialCarousel.module.css';

const CommercialCarousel = ({ companyName, companyDescription }) => {
  const image = "/images/webimages3.jpg";
  const isBlurred = companyName !== "Central Square Thornhill Park";
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselSlide}>
        <div className={`${styles.carouselImageContainer} ${isBlurred ? styles.blurred : ''}`}>
          <Image
            src={image}
            alt='Central Place Sydney'
            layout="responsive"
            objectFit="cover"
            className={styles.carouselImage}
            width={2000}
            height={1000}
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
