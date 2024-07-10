import React from 'react'
import styles from '../styles/CommercialProjectMoreInfo.module.css'

const CommercialProjectMoreInfo = () => {
  return (
    <div className={styles.container}>
    <div className={styles.leftContent}>
      <ul className={styles.featuresList}>
        <li>Revitalisation of one of the busiest public realms in the Sydney CBD, redefining the experience of over 20 million pedestrians annually.</li>
        <li>To be one of the most sustainable commercial developments in Australia, with workspaces that integrate nature, energy-efficient passive shading and natural ventilation.</li>
        <li>10,000sqm of amenities; including activated rooftops, business hub, health and wellness spaces and pet facilities.</li>
      </ul>
    </div>
    <div className={styles.rightContent}>
    <ul className={styles.featuresList}>
        <li>~$3 billion mixed-use precinct within Sydney’s new ‘Tech Central’ precinct</li>
        <li>133,000sqm of workspace across three buildings (two towers and a smaller low-rise building)</li>
        <li>Future workplace for ~15,000 employees</li>
        <li>700+ jobs to be created during construction</li>
      </ul>
    </div>
  </div>
  )
}

export default CommercialProjectMoreInfo