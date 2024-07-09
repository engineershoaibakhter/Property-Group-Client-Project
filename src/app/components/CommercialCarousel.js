"use client"
import styles from '../styles/CommercialCarousel.module.css'

const CommercialCarousel = () => {
  return (
    <>
    <div className={styles.carousel}>
      <div className={styles.carouselSlide}>
        <img src="/images/cars.jpg" alt="Central Place Sydney" />
        <div className={styles.carouselContent}>
          <h1>Central Place Sydney</h1>
          <p>The new home for tomorrow’s game changers.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default CommercialCarousel