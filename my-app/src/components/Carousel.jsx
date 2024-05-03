import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import '../css/Carousel.scss'

const Carousel = () => {
  const IMAGE_PARTS = 4;
  const AUTOCHANGE_TIME = 4000;

  const [activeSlide, setActiveSlide] = useState(-1);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(false);

  const slides = [
    {
      city: 'Buy a Property',
      country: 'I would like to',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
    },
    {
      city: 'Sell my Property',
      country: 'I would like to',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
    },
    {
      city: 'Buy a Property',
      country: 'I would like to',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
    },
    {
      city: 'Sell my Property',
      country: 'I would like to',
      img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      changeSlides(1);
    }, AUTOCHANGE_TIME);

    return () => clearTimeout(timer);
  }, [activeSlide]);

  useEffect(() => {
    setTimeout(() => {
      setActiveSlide(0);
      setSliderReady(true);
    }, 0);
  }, []);

  const changeSlides = (change) => {
    const length = slides.length;
    const prevSlide = activeSlide;
    let newActiveSlide = prevSlide + change;

    if (newActiveSlide < 0) {
      newActiveSlide = length - 1;
    }
    if (newActiveSlide >= length) {
      newActiveSlide = 0;
    }

    setActiveSlide(newActiveSlide);
    setPrevSlide(prevSlide);
  };

  return (
    <div className={classNames('slider', { 's--ready': sliderReady })}>
      <p className="slider__top-heading">PSP-Property Group</p>
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            className={classNames('slider__slide', {
              's--active': activeSlide === index,
              's--prev': prevSlide === index,
            })}
            key={slide.city}
          >
            <div className="slider__slide-content">
              <h3 className="slider__slide-subheading">{slide.country || slide.city}</h3>
              <h2 className="slider__slide-heading">
                {slide.city.split('-').map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </h2>
              <p className="slider__slide-readmore">read more</p>
            </div>
            <div className="slider__slide-parts">
              {[...Array(IMAGE_PARTS).fill()].map((_, i) => (
                <div className="slider__slide-part" key={i}>
                  <div
                    className="slider__slide-part-inner"
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => changeSlides(-1)} />
      <div className="slider__control slider__control--right" onClick={() => changeSlides(1)} />
    </div>
  );
};

export default Carousel;