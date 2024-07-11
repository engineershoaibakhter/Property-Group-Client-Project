'use client'

import React from 'react';
import styles from '../styles/Commercial.module.css';
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


const Commercial = () => {
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

export default Commercial;




// "use client"

// import React from 'react';
// import styles from '../styles/Commercial.module.css';
// import Link from 'next/link';

// const Commercial = () => {
//   return (
//     <div className={styles.commercial}>
//     <div className={styles.commercialContainer}>
//       <div className={styles.header}>
//         <h2 className={styles.title}>Commercial</h2>
//         <p className={styles.description}>
//           High performance businesses need high-performance places to function as the engine-rooms of their success. From the home of Australia’s biggest blue-chip companies to world-class innovation precincts supporting the next wave of entrepreneurs, our commercial neighbourhoods are fueling the future of work.
//         </p>
//       </div>
//       <div className={styles.cardsContainer}>
//         <div className={styles.card}>
//         <div className={styles.imageContainer}>
//           <img src="/images/building.jpg" alt="Asset 1" className={styles.image} />
//            <div className={styles.assetTag}>ASSETS</div>
//           </div>
//           <div className={styles.cardContent}>
//             <p className={styles.location}>NSW, Rhodes</p>
//             <h4 className={styles.projectName}>Rhodes Quarter</h4>
//             <p className={styles.features}>
//               <span role="img" aria-label="leaf">🍃</span> Features world-leading carbon neutral NABERS & Platinum WELL certified offices.
//             </p>
//             <div className={styles.footer}>
//               <p className={styles.leasing}>Leasing now</p>
//               <Link href={'../pages/CommercialDetails'} className={styles.detailsLink}>More details ➔</Link>
//             </div>
//           </div>
//         </div>
//         <div className={styles.card}>
//         <div className={styles.imageContainer}>
//         <img src="/images/cars.jpg" alt="Asset 2" className={styles.image} />
//         <div className={styles.assetTag}>ASSETS</div>
//           </div>
//           <div className={styles.cardContent}>
//             <p className={styles.location}>NSW, Haymarket</p>
//             <h2 className={styles.projectName}>Central Place Sydney</h2>
//             <p className={styles.features}>
//               <span role="img" aria-label="leaf">🍃</span> Targeting net zero carbon emissions and world-leading WELL & Green Star ratings.
//             </p>
//             <div className={styles.footer}>
//               <p className={styles.leasing}>Leasing now</p>
//               <Link href={'/pages/CommercialDetails'} className={styles.detailsLink}>More details ➔</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Commercial;
