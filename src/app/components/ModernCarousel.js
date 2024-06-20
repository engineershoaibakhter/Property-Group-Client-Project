"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/ModernCarousel.module.css";

const images = [
  "/images/laptop.jpg",
  "/images/projectImage1.webp",
  "/images/cars.jpg",
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
      <button className={styles.prev} onClick={prevSlide}>
        ‹
      </button>
      <div className={styles.slides}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.slide}
            style={{
              backgroundImage: `url(${image})`,
              display: currentIndex === index ? "block" : "none",
            }}
          >
            <div className={styles.text}>
              <h1>BCA Corp</h1>
              <h2>Building Community Assets</h2>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.next} onClick={nextSlide}>
        ›
      </button>
    </div>
  );
};

export default ModernCarousel;
