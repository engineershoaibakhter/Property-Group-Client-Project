'use client'

import React from 'react';
import styles from '../styles/News.module.css';
import { useRouter } from 'next/navigation';

const NewsArticle = ({ title, date, category, description, imgSrc }) => {
  return (
    <div className={styles.newsArticle}>
      <img src={imgSrc} alt={title} className={styles.articleImage} />
      <div className={styles.articleContent}>
        <div className={styles.articleMeta}>
          <span className={styles.category}>{category}</span>
          <span className={styles.date}>{date}</span>
        </div>
        <h3 className={styles.articleTitle}>{title}</h3>
        <p className={styles.articleDescription}>{description}</p>
      </div>
    </div>
  );
};


const News = () => {
  const navigation=useRouter();

  const NavigateToDetailsPage=()=>{
    navigation.push('/pages/CommercialDetails')
  }
  const newsArticles = [
    {
      title: 'Saep Nemo Fugiat Nesnt',
      date: 'December 18, 2018',
      category: 'Saep Post',
      description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      imgSrc: '/images/commercial/firstimage.png',
    },
    {
      title: 'Dolore Magna Aliqua Enim',
      date: 'March 8, 2018',
      category: 'Dolore Post',
      description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      imgSrc: '/images/commercial/secondimage.png',
    },
    {
      title: 'Last Blog Form Myalbam',
      date: 'May 10, 2019',
      category: 'London Post',
      description: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      imgSrc: '/images/commercial/thirdimage.png',
    },
  ];

  return (
    <div className={styles.newsSection}>
      <div className={styles.header}>
        <h2>Latest News</h2>
        <p>High performance businesses need high-performance places to function as the engine-rooms of their success. From the home of Australia’s biggest blue-chip companies to world-class innovation precincts supporting the next wave of entrepreneurs, our commercial neighbourhoods are fueling the future of work.</p>
      </div>
      <div className={styles.articles}>
        {newsArticles.map((article, index) => (
          <NewsArticle key={index} {...article} />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={NavigateToDetailsPage} className={styles.learnMoreBtn}>Learn More</button>
      </div>
    </div>
  );
};

export default News;