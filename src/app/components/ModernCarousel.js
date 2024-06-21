"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/ModernCarousel.module.css";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const images = [
  "/images/laptop.jpg",
  "/images/projectImage1.webp",
  "/images/cars.jpg",
  "/images/building.jpg",
];

const ModernCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    startInterval();
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    startInterval();
  };

  return (
    <div className={styles.carousel}>
      <button className={styles.prev} onClick={prevSlide}>
      <MdChevronLeft size={24} />
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
      <MdChevronRight size={24} />
      </button>
    </div>
  );
};

export default ModernCarousel;
