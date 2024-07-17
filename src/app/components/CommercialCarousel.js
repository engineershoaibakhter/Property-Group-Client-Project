"use client"
import styles from '../styles/CommercialCarousel.module.css'

const CommercialCarousel = ({companyName}) => {
  return (
    <>
    <div className={styles.carousel}>
      <div className={styles.carouselSlide}>
        <img src="/images/webimages2.jpg" alt="Central Place Sydney" />
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