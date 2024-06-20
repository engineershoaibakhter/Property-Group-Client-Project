'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/ModernCarousel.module.css';

const images = [
  "http://demo.themeton.com/cooper/wp-content/uploads/sites/68/2016/08/slide1.jpg",
  "/images/projectImage1.webp",
  "https://images.squarespace-cdn.com/content/v1/657a4d4e67692d471cfca870/d85f65d1-6b10-411d-bb91-b6e53747940f/image+to+replace+Msquare+-+new+point+aeriel.jpg",
  "/images/building.jpg",
];

const ModernCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prev} onClick={prevSlide}>‹</button>
      <div className={styles.slides}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.slide}
            style={{
              backgroundImage: `url(${image})`,
              display: currentIndex === index ? 'block' : 'none',
            }}
          >
            <div className={styles.text}>
              <h1>BCA Corp</h1>
              <h2>Building Community Assets</h2>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.next} onClick={nextSlide}>›</button>
    </div>
  );
};

export default ModernCarousel;
