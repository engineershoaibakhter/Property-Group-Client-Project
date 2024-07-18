"use client"

import React from 'react'
import styles from '../styles/Gallery.module.css'
import Image from 'next/image'

const Gallery = ({companyName}) => {
  return (
    <div className={styles.Gallery}>
      <h1>Gallery</h1>
      <p>{companyName} is set to redefine innovation.</p>
      <div className={styles.Images}>
        <div className={styles.image}>
        <Image src='/images/commercial/gallery/sixth_image.png' alt='sixth image' width={200} height={100}/>
         
        </div>
        <div className={styles.image}>
          <Image src='/images/commercial/gallery/second_image.png' alt='second image' width={200} height={100} />
        </div>
        <div className={styles.image}>
          <Image src='/images/commercial/gallery/third_image.png' alt='third image' width={200} height={100}/>
        </div>
        <div className={styles.image}>
          <Image src='/images/commercial/gallery/fifth_image.png' alt='fifth image' width={200} height={100}/>
        </div>
        <div className={styles.image}>
          <Image src='/images/commercial/gallery/fourth_image.png' alt='first image' width={200} height={100}/>
        </div>
        <div className={styles.image}>
          <Image src='/images/commercial/gallery/sixth_image.png' alt='sixth image' width={200} height={100} />
        </div>
      </div>
    </div>
  )
}

export default Gallery
