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
        <Image src='/images/commercial/gallery/1.jpg' alt='sixth image' width={200} height={100}/>
         
        </div>
        <div className={styles.image}>
          <Image src='/images/commercial/gallery/2.jpg' alt='second image' width={200} height={100} />
        </div>
        <div className={styles.image}>
          <Image src='/images/commercial/gallery/3.jpg' alt='third image' width={200} height={100}/>
        </div>
        <div className={styles.image}>
          <Image src='/images/commercial/gallery/4.jpg' alt='fifth image' width={200} height={100}/>
        </div>
        <div className={styles.image}>
          <Image src='/images/commercial/gallery/5.jpg' alt='first image' width={200} height={100}/>
        </div>
        <div className={styles.image}>
          <Image src='/images/commercial/gallery/6.jpg' alt='sixth image' width={200} height={100} />
        </div>
        <div className={styles.image}>
          <Image src='/images/commercial/gallery/7.jpg' alt='sixth image' width={200} height={100} />
        </div>
        <div className={styles.image}>
          <Image src='/images/commercial/gallery/8.jpg' alt='sixth image' width={200} height={100} />
        </div>
      </div>
    </div>
  )
}

export default Gallery
