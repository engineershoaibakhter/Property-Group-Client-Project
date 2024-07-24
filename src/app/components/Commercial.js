"use client";

import React, { useRef, useEffect, useState } from 'react';
import styles from '../styles/Commercial.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Commercial = () => {
  const imageListRef = useRef(null);
  const scrollbarThumbRef = useRef(null);



  const handleNextSlide = () => {
    if (imageListRef.current) {
      const maxScrollLeft = imageListRef.current.scrollWidth - imageListRef.current.clientWidth;
      const scrollAmount = imageListRef.current.clientWidth+10;
      const newScrollLeft = Math.min(imageListRef.current.scrollLeft + scrollAmount, maxScrollLeft);
      imageListRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const handlePrevSlide = () => {
    if (imageListRef.current) {
      const scrollAmount = imageListRef.current.clientWidth+10;
      const newScrollLeft = Math.max(imageListRef.current.scrollLeft - scrollAmount, 0);
      imageListRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const updateScrollThumbPosition = () => {
    if (imageListRef.current && scrollbarThumbRef.current) {
      const maxScrollLeft = imageListRef.current.scrollWidth - imageListRef.current.clientWidth;
      const scrollPosition = imageListRef.current.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (imageListRef.current.clientWidth - scrollbarThumbRef.current.offsetWidth);
      scrollbarThumbRef.current.style.left = `${thumbPosition}px`;
    }
  };

  useEffect(() => {
    const imageListElement = imageListRef.current;
    const scrollbarThumbElement = scrollbarThumbRef.current; // Copy ref to a variable

    const handleMouseMove = (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumbElement.offsetLeft;
      const maxThumbPosition = imageListElement.clientWidth - scrollbarThumbElement.offsetWidth;

      const onMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;
        const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
        const maxScrollLeft = imageListElement.scrollWidth - imageListElement.clientWidth;
        const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

        scrollbarThumbElement.style.left = `${boundedPosition}px`;
        imageListElement.scrollLeft = scrollPosition;
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };

    if (scrollbarThumbElement) {
      scrollbarThumbElement.addEventListener('mousedown', handleMouseMove);
    }

    const handleScroll = () => {
      updateScrollThumbPosition();
    };

    if (imageListElement) {
      imageListElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollbarThumbElement) {
        scrollbarThumbElement.removeEventListener('mousedown', handleMouseMove);
      }

      if (imageListElement) {
        imageListElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className={styles.commercial} id='projects'>
      <div className={styles.commercialContainer}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Projects</h2>
          <p className={styles.description}>
            High performance businesses need high-performance places to function as the engine-rooms of their success. From the home of Australia’s biggest blue-chip companies to world-class innovation precincts supporting the next wave of entrepreneurs, our commercial neighbourhoods are fueling the future of work.
          </p>
        </div>
        <div className={styles.sliderWrapper}>
          <button
            id="prev-slide"
            className={`${styles.slideButton} ${styles.leftButton}`}
            onClick={handlePrevSlide}
          >
            <MdChevronLeft />
          </button>
          <ul className={styles.cardList} ref={imageListRef}>
          <li className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src="/images/commercial/THRONHILL_PARK-110.jpg" alt="Asset 1" className={styles.image} width={200} height={100} />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.location}>VIC, Thornhill Park</p>
                <h4 className={styles.projectName}>Central Square</h4>
                <p className={styles.features}>
                Local Activity Centre with diverse tenancies and ample parking.
                </p>
                <div className={styles.footer}>
                  <Link href={'https://www.pspproperty.com.au/property?property_id=1064509/2-sadie-avenue-thornhill-park'} target="_blank" rel="noopener noreferrer"><button className={styles.leasing}>Leasing now</button></Link>
                  <Link href={'/thornhill'}><button className={styles.detailsLink}>More details ➔</button></Link>
                </div>
              </div>
            </li>
            <li className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src="/images/cars.jpg" alt="Asset 1" className={styles.image} width={200} height={100} />
              </div>
              <div className={styles.cardContent}>
              <p className={styles.location}>VIC, Craigieburn</p>
            <h2 className={styles.projectName}>Aston Square</h2>
            <p className={styles.features}>
            Upcoming neighbourhood centre with childcare, gym, and specialty shops.
            </p>
                <div className={styles.footer}>
              <Link href={'https://www.pspproperty.com.au/property?property_id=1241993/179-elevation-boulevard-craigieburn'} target="_blank" rel="noopener noreferrer"><button className={styles.leasing}>Leasing now</button></Link> 
                <Link href={'/craigieburn'}><button className={styles.detailsLink}>More details ➔</button></Link>
                </div>
              </div>
            </li>
            <li className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src="/images/building.jpg" alt="Asset 1" className={styles.image} width={200} height={100} />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.location}>Clyde Square</p>
                <h4 className={styles.projectName}>Central Square</h4>
                <p className={styles.features}>
                Unique mix of commercial, industrial lots, and boutique F&B precinct.
                </p>
                <div className={styles.footer}>
                  <Link href={'https://www.pspproperty.com.au/property?property_id=1064509/2-sadie-avenue-thornhill-park'} target="_blank" rel="noopener noreferrer"><button className={styles.leasing}>Leasing now</button></Link>
                  <Link href={'/clydesquare'}><button className={styles.detailsLink}>More details ➔</button></Link>
                </div>
              </div>
            </li>
            <li className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src="/images/cars.jpg" alt="Asset 1" className={styles.image} width={200} height={100} />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.location}>Wollert, VIC</p>
                <h4 className={styles.projectName}>Central Square</h4>
                <p className={styles.features}>
                129 residential lots with over 1Ha green space in Wollert.
                </p>
                <div className={styles.footer}>
                  <Link href={'https://www.pspproperty.com.au/property?property_id=1064509/2-sadie-avenue-thornhill-park'} target="_blank" rel="noopener noreferrer"><button className={styles.leasing}>Leasing now</button></Link>
                  <Link href={'/wollert'}><button className={styles.detailsLink}>More details ➔</button></Link>
                </div>
              </div>
            </li>
            <li className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src="/images/cars.jpg" alt="Asset 1" className={styles.image} width={200} height={100} />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.location}>Orrong Tower</p>
                <h4 className={styles.projectName}>Central Square</h4>
                <p className={styles.features}>
                Boutique architecturally designed apartment block in Toorak coming soon.
                </p>
                <div className={styles.footer}>
                  <Link href={'https://www.pspproperty.com.au/property?property_id=1064509/2-sadie-avenue-thornhill-park'} target="_blank" rel="noopener noreferrer"><button className={styles.leasing}>Leasing now</button></Link>
                  <Link href={'/orrongtower'}><button className={styles.detailsLink}>More details ➔</button></Link>
                </div>
              </div>
            </li>
            <li className={styles.card}>
              <div className={styles.imageContainer}>
                <Image src="/images/cars.jpg" alt="Asset 1" className={styles.image} width={200} height={100} />
              </div>
              <div className={styles.cardContent}>
                <p className={styles.location}>Iramoo Waters</p>
                <h4 className={styles.projectName}>Central Square</h4>
                <p className={styles.features}>
                150+ residential lots, 2Ha green space, wetland, and walking tracks.
                </p>
                <div className={styles.footer}>
                  <Link href={'https://www.pspproperty.com.au/property?property_id=1064509/2-sadie-avenue-thornhill-park'} target="_blank" rel="noopener noreferrer"><button className={styles.leasing}>Leasing now</button></Link>
                  <Link href={'/iramoo'}><button className={styles.detailsLink}>More details ➔</button></Link>
                </div>
              </div>
            </li>
            {/* Add more cards here */}
          </ul>
          <button
            id="next-slide"
            className={`${styles.slideButton} ${styles.rightButton}`}
            onClick={handleNextSlide}
          >
            <MdChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Commercial;

