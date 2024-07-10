"use client"

import React from 'react'
import styles from '../styles/Gallery.module.css'

const Gallery = () => {
  return (
    <div className={styles.Gallery}>
      <h1>Gallery</h1>
      <p>Central Place Sydney is set to redefine innovation.</p>
      <div className={styles.Images}>
        <div className={styles.image}>
        <img src='/images/commercial/gallery/sixth_image.png' alt='sixth image' />
         
        </div>
        <div className={styles.image}>
          <img src='/images/commercial/gallery/second_image.png' alt='second image' />
        </div>
        <div className={styles.image}>
          <img src='/images/commercial/gallery/third_image.png' alt='third image' />
        </div>
        <div className={styles.image}>
          <img src='/images/commercial/gallery/fifth_image.png' alt='fifth image' />
        </div>
        <div className={styles.image}>
          <img src='/images/commercial/gallery/fourth_image.png' alt='first image' />
        </div>
        <div className={styles.image}>
          <img src='/images/commercial/gallery/sixth_image.png' alt='sixth image' />
        </div>
      </div>
    </div>
  )
}

export default Gallery
