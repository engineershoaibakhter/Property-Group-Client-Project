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
  const [videoLoaded,setVideoLoaded]=useState(false);

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

  const handleCanPlay=()=>{
    setVideoLoaded(true);
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.slides}>
  <video  muted autoPlay loop className={styles.video} onCanPlay={handleCanPlay}>
<source  src='/video/company_video.mp4' type='video/mp4'/>
</video>
<div className={styles.text}>
              <h1>BCA Corp</h1>
              <h2>Building Community Assets</h2>
            </div>
      </div>

    </div>
  );
};

export default ModernCarousel;
