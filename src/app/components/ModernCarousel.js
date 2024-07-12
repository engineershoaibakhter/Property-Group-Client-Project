"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/ModernCarousel.module.css";

const ModernCarousel = () => {


  return (
    <div className={styles.carousel}>
      <div className={styles.slides}>
        <video muted autoPlay loop className={styles.video}>
          <source src="/video/web video_2.mp4" type="video/mp4" />
        </video>
        <div className={styles.text}>
          <h1>
            We Build{" "}
          </h1>
            <span className={styles.dynamicTextContainer}>
              <span className={styles.dynamicText}></span>
            </span>
        </div>
      </div>
    </div>
  );
};

export default ModernCarousel;
