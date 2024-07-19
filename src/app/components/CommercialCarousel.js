"use client"
import Image from 'next/image'
import styles from '../styles/CommercialCarousel.module.css'

const CommercialCarousel = ({companyName}) => {
  return (
    <>
    <div className={styles.carousel}>
      <div className={styles.carouselSlide}>
        <div className={styles.carouselImage}>
        <img src="/images/webimages3.jpg" alt="Central Place Sydney"  />
        </div>
        <div className={styles.carouselContent}>
          <h1>{companyName}</h1>
          <p>The new home for tomorrow’s game changers.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default CommercialCarousel