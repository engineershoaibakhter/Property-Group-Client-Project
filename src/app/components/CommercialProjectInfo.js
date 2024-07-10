import React from 'react'
import styles from '../styles/CommercialProjectInfo.module.css'

const CommercialProjectInfo = () => {
  return (
    <div className={styles.container}>
    <div className={styles.leftContent}>
      <p className={styles.description}>
        Central Place Sydney will be Sydney’s most significant CBD development in over a decade, delivering a highly sustainable urban precinct to attract the best of the international tech and innovation sector to live and work.
      </p>
      <ul className={styles.featuresList}>
        <li>~$3 billion mixed-use precinct within Sydney’s new ‘Tech Central’ precinct</li>
        <li>133,000sqm of workspace across three buildings (two towers and a smaller low-rise building)</li>
        <li>Future workplace for ~15,000 employees</li>
        <li>700+ jobs to be created during construction</li>
      </ul>
    </div>
    <div className={styles.rightContent}>
      <div className={styles.status}>
        <h3>Development Status</h3>
        <p>DA Approved</p>
      </div>
      <div className={styles.location}>
        <h3>Location</h3>
        <p>14-30 Lee Street, Haymarket NSW 2000</p>
        <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className={styles.mapLink}>Google Map</a>
      </div>
      <div className={styles.buttons}>
        <button className={styles.updateButton}>Register for updates</button>
        <button className={styles.enquiryButton}>Media enquiries</button>
      </div>
    </div>
  </div>
  )
}

export default CommercialProjectInfo