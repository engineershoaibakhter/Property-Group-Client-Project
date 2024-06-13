
"use client";
import React, { useState, useRef, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import styles from '../styles/Testimonials.module.css';

const Testimonials = () => {
  const imageListRef = useRef(null);
  const scrollbarThumbRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'images/building.jpg', 'images/buildingImage.png', 'images/projectImage1.webp',
    'images/buildingImage.png', 'images/building.jpg', 'images/projectImage1.webp',
    'images/buildingImage.png', 'images/building.jpg', 'images/projectImage1.webp',
  ];

  const testimonials = [
    {
      companyName: "PolyGonID",
      companyInfo: "Verida’s seamless user experience is essential to create self-sovereign trusted identities and we are very excited to have them in our ecosystem.",
      authorName: "Sebastian Rodriguez",
      authorPosition: "VP of Product, Polygon ID",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU8MdZYug_U-B7wCPkYgHEoh5B1XQGDz56WA&s",
    },
    {
      companyName: "NEAR",
      companyInfo: "We’re excited to support the Verida team as they add more NEAR features to their excellent product. Ease of use and low switching costs are key to mainstream Web3 adoption, so it’s exciting that the Verida Wallet will soon make DIDs and messaging available to NEAR users on mobile.",
      authorName: "Illia Polosukhin",
      authorPosition: "Co-Founder, NEAR",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Y674K-26P6mTLd8oEvHuRJkmD3Ii2_v2dg&s",
    },
    {
      companyName: "Cheqd",
      companyInfo: "The integration of Verida’s decentralised identity storage wallet with the cheqd network offers a compelling vision of ‘Not your keys, not your identity’. People’s digital selves should be in their control, and this includes being able to store their credentials outside of the control of Big Tech providers. We’re proud of the collaboration and technical excellence of the Verida team in offering users an option that is truly in their control.",
      authorName: "Ankur Banerjee",
      authorPosition: "CTO and Co-Founder, cheqd",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2Wl_-hNXIoQLNtMrIFLckCN7TGXPGfWD-w&s",
    },
    {
      companyName: "Pakass",
      companyInfo: "We’re delighted to team up with Verida in our shared vision to enhance private data verification. Our technology, designed to offer secure and private authentication through cryptography technologies, complements Verida’s commitment to privacy and decentralization. Together, we aim to redefine user experience in the digital space, where privacy and trust is not a choice but a standard.",
      authorName: "Bing Jiang",
      authorPosition: "Tech Lead, zkPass",
      imgSrc: "https://a.storyblok.com/f/191576/1048x786/108aa547a3/light_blue_background_1.webp",
    },
    {
      companyName: "PartisiaBlockchain",
      companyInfo: "We’re delighted to team up with Verida in our shared vision to enhance private data verification. Our technology, designed to offer secure and private authentication through cryptography technologies, complements Verida’s commitment to privacy and decentralization. Together, we aim to redefine user experience in the digital space, where privacy and trust is not a choice but a standard.",
      authorName: "Kurt Nielsen",
      authorPosition: "President of the Board, Partisia Blockchain",
      imgSrc: "data:image/jpeg;base64,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",
    },
    {
      companyName: "FinClusive",
      companyInfo: "Expanding our partnership with Verida with the support of cheqd is very exciting as we work to build a ‘consortia’ of partners. Together, we are enabling a globally transportable KYC/KYB verifiable credential that streamlines essential compliance processes and brings needed privacy controls and efficiencies in both traditional and decentralized financial services.",
      authorName: "Amit Sharma",
      authorPosition: "Founder and CEO, FinClusive",
      imgSrc: "data:image/jpeg;base64,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",
    }

  ];

  const handleNextSlide = () => {
    if (imageListRef.current) {
      const maxScrollLeft = imageListRef.current.scrollWidth - imageListRef.current.clientWidth;
      const scrollAmount = imageListRef.current.clientWidth;
      const newScrollLeft = Math.min(imageListRef.current.scrollLeft + scrollAmount, maxScrollLeft);
      imageListRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const handlePrevSlide = () => {
    if (imageListRef.current) {
      const scrollAmount = imageListRef.current.clientWidth;
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

    const handleMouseMove = (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumbRef.current.offsetLeft;
      const maxThumbPosition = imageListElement.clientWidth - scrollbarThumbRef.current.offsetWidth;

      const handleMouseMove = (e) => {
        const deltaX = e.clientX - startX;
        const newThumbPosition = thumbPosition + deltaX;
        const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
        const maxScrollLeft = imageListElement.scrollWidth - imageListElement.clientWidth;
        const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

        scrollbarThumbRef.current.style.left = `${boundedPosition}px`;
        imageListElement.scrollLeft = scrollPosition;
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    if (scrollbarThumbRef.current) {
      scrollbarThumbRef.current.addEventListener('mousedown', handleMouseMove);
    }

    const handleScroll = () => {
      updateScrollThumbPosition();
    };

    if (imageListElement) {
      imageListElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollbarThumbRef.current) {
        scrollbarThumbRef.current.removeEventListener('mousedown', handleMouseMove);
      }

      if (imageListElement) {
        imageListElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className={styles.Project}>
        <h1 className={styles.Heading}>Our Projects</h1>
    <div className={styles.container}>
      <div className={styles.sliderWrapper}>
        <button
          id="prev-slide"
          className={`${styles.slideButton} ${styles.leftButton}`}
          onClick={handlePrevSlide}
        >
          <MdChevronLeft style={{ color: 'white' }} />
        </button>
        <ul className={styles.imageList} ref={imageListRef}>
          {testimonials.map((content, index) => (
            <li  className={styles.imageItemWrapper}>
             <div className={styles.allImage}>
              {/* <img className={styles.imageItem} src={src} alt={`img-${index + 1}`} /> */}
              <div className={styles.imageItem}>
                <div className={styles.companyContent}>
                <h1 className={styles.companyName}>{content.companyName}</h1>
                <p className={styles.companyInfo}>{content.companyInfo}</p>
                <div className={styles.row}>
  <img src={content.imgSrc} width={100} height={100} />
  <div className={styles.textContainer}>
    <h6 className={styles.authorName}>{content.authorName}</h6>
    <p className={styles.authorPosition}>{content.authorPosition}</p>
  </div>
</div>
                </div>
              </div>
             </div>
            </li>
              ))}
        </ul>
        <button
          id="next-slide"
          className={`${styles.slideButton} ${styles.rightButton}`}
          onClick={handleNextSlide}
        >
          <MdChevronRight style={{ color: 'white' }} />
        </button>
      </div>
      <div className={styles.sliderScrollbar}>
        <div className={styles.scrollbarTrack}>
          <div
            className={styles.scrollbarThumb}
            ref={scrollbarThumbRef}
          ></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
