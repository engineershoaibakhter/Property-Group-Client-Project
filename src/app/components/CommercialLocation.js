"use client"
import styles from "../styles/CommercialLocation.module.css"

const CommercialLocation = () => {
  return (
    <div>
        <div className={styles.locationContainer}>
      <h1>Our Location</h1>
      <p>Central Place Sydney is set to redefine innovation.</p>
      <div className={styles.mapContainer}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.820788404048!2d144.9738940752896!3d-37.84108113559879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6681bed7b7575%3A0x276e5d58b462d42!2s8%2F468%20St%20Kilda%20Rd%2C%20Melbourne%20VIC%203004%2C%20Australia!5e0!3m2!1sen!2s!4v1720614641305!5m2!1sen!2s" 
        width="2000" 
        height="450" 
        style={{border:0}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"
        title="BCA CORP"
        ></iframe>

      </div>
    </div>
    </div>
  )
}

export default CommercialLocation