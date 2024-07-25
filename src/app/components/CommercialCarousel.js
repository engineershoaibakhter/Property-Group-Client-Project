"use client";
import Image from 'next/image';
import styles from '../styles/CommercialCarousel.module.css';

const CommercialCarousel = ({ companyName, companyDescription }) => {
  const image = "/images/webimages3.jpg";
  return (
    <div className={styles.carousel}>
      <div className={styles.carouselSlide}>
        <div className={styles.carouselImageContainer}>
          <Image
            src={image}
            alt='Central Place Sydney'
            layout="responsive"
            objectFit="cover"
            className={styles.carouselImage}
            width={200} height={100}
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
