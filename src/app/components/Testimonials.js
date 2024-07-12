  "use client";
  import React, { useState, useRef, useEffect } from 'react';
  import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
  import styles from '../styles/Testimonials.module.css';
  import Image from 'next/image';
  
  const Testimonials = () => {
    const imageListRef = useRef(null);
    const scrollbarThumbRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const testimonials = [
      {
        companyLogo: "/images/clients/iga.svg",
        companyInfo: "The integration of Verida’s decentralised identity storage wallet with the cheqd network offers a compelling vision of ‘Not your keys, not your identity’. People’s digital selves should be in their control, and this includes being able to store their credentials outside of the control of Big Tech providers.",
        authorName: "Sebastian Rodriguez",
        authorPosition: "VP of Product, Polygon ID",
        imgSrc: "/images/testimonials/firstImage.png"
      },
      {
        companyLogo: "/images/clients/client logo web2.png",
        companyInfo: "We’re excited to support the Verida team as they add more NEAR features to their excellent product. Ease of use and low switching costs are key to mainstream Web3 adoption, so it’s exciting that the Verida Wallet will soon make DIDs and messaging available to NEAR users on mobile.",
        authorName: "Illia Polosukhin",
        authorPosition: "Co-Founder, NEAR",
        imgSrc: "/images/testimonials/secondImage.png"
      },
      {
        companyName: "Cheqd",
        companyInfo: "The integration of Verida’s decentralised identity storage wallet with the cheqd network offers a compelling vision of ‘Not your keys, not your identity’. People’s digital selves should be in their control, and this includes being able to store their credentials outside of the control of Big Tech providers.",
        authorName: "Ankur Banerjee",
        authorPosition: "CTO and Co-Founder, cheqd",
        imgSrc: "/images/testimonials/thirdImage.png"
      },
      {
        companyName: "Pakass",
        companyInfo: "We’re delighted to team up with Verida in our shared vision to enhance private data verification. Our technology, designed to offer secure and private authentication through cryptography technologies, complements Verida’s commitment to privacy and decentralization. Together, we aim to redefine user experience in the digital space.",
        authorName: "Bing Jiang",
        authorPosition: "Tech Lead, zkPass",
        imgSrc: "/images/testimonials/fourImage.png"
      },
      {
        companyName: "PartisiaBlockchain",
        companyInfo: "We’re delighted to team up with Verida in our shared vision to enhance private data verification. Our technology, designed to offer secure and private authentication through cryptography technologies, complements Verida’s commitment to privacy and decentralization. Together, we aim to redefine user experience in the digital space.",
        authorName: "Kurt Nielsen",
        authorPosition: "President of the Board, Partisia Blockchain",
        imgSrc: "/images/testimonials/firstImage.png"
      },
      {
        companyName: "FinClusive",
        companyInfo: "Expanding our partnership with Verida with the support of cheqd is very exciting as we work to build a ‘consortia’ of partners. Together, we are enabling a globally transportable KYC/KYB verifiable credential that streamlines essential compliance processes and brings needed privacy controls",
        authorName: "Amit Sharma",
        authorPosition: "Founder and CEO, FinClusive",
        imgSrc: "/images/testimonials/secondImage.png"
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
  
        const onMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;
          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const maxScrollLeft = imageListElement.scrollWidth - imageListElement.clientWidth;
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
  
          scrollbarThumbRef.current.style.left = `${boundedPosition}px`;
          imageListElement.scrollLeft = scrollPosition;
        };
  
        const onMouseUp = () => {
          document.removeEventListener('mousemove', onMouseMove);
          document.removeEventListener('mouseup', onMouseUp);
        };
  
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
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
        <h1 className={styles.Heading}>What Our Clients Say</h1>
        <div className={styles.container}>
          <div className={styles.sliderWrapper}>
            <button
              id="prev-slide"
              className={`${styles.slideButton} ${styles.leftButton}`}
              onClick={handlePrevSlide}
            >
              <MdChevronLeft />
            </button>
            <ul className={styles.imageList} ref={imageListRef}>
              {testimonials.map((content, index) => (
                <li key={index} className={styles.imageItemWrapper}>
                  <div className={styles.allImage}>
                    <div className={styles.imageItem}>
                      <div className={styles.companyContent}>
                      <Image src={content.companyLogo} width={100} height={100} alt={'Company Logo'} className={styles.CompanyLogoImage}/>
                        {/* <h1 className={styles.companyName}>{content.companyName}</h1> */}
                        <p className={styles.companyInfo}>{content.companyInfo}</p>
                        <div className={styles.row}>
                          {/* <Image src={content.imgSrc} width={100} height={100} alt={content.authorName || 'Client Image'} /> */}
                          <div className={styles.textContainer}>
                            <h3 className={styles.authorName}>{content.authorName}</h3>
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
              <MdChevronRight />
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  