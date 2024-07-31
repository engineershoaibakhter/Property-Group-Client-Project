// components/Team.jsx
import React from 'react';
import styles from '../styles/Team.module.css';
import Link from 'next/link';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const TeamMember = ({ name, title, imgSrc,linkedIn,altText }) => {
  return (
    <div className={styles.teamMember}>
      <Image src={imgSrc} alt={`${altText}`} className={styles.teamImage} width={100} height={100}/>
      <div className={styles.overlay}>
        <div className={styles.text}>
          <h3>{name}</h3> 
          <p>{title}</p>
          <p><Link href={linkedIn} target="_blank"  ><FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} /></Link></p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: 'Nick Gupta',
      title: 'strategic advisor',
      imgSrc: '/images/man/leftman.png',
      linkedIn:"https://www.linkedin.com/in/nitin-gupta-80b48a39/",
      altText:"Nick Gupta, Strategic Advisor at BCA CORP"
    },
    {
      name: 'Michael Ellis',
      title: 'Director',
      imgSrc: '/images/man/centerman.png',
      linkedIn:"https://www.linkedin.com/in/michael-ellis-94b83614a/",
      altText:"Michael Ellis, Director at BCA CORP"
    },
    {
      name: 'Manpreet Dandiwal',
      title: 'managing director,',
      imgSrc: '/images/man/rightman.png',
      linkedIn:"https://www.linkedin.com/in/manpreet-dandiwal-184600112/",
      altText:"Manpreet Dandiwal, Managing Director at BCA CORP"
    },
    {
      name: 'Jarrod Membrey',
      title: 'General manager',
      imgSrc: '/images/man/rightman.png',
      linkedIn:"https://www.linkedin.com/in/jarrod-membrey-a344216/",
      altText:"Jarrod Membrey, General Manager at BCA CORP"
    }
  ];

  return (
    <div className={styles.teamSection}>
      
      <div className={styles.gallery}>
        <div className={styles.leftColumn}>
          <h2>Our great team</h2>
          <p>Nick Gupta, our Strategic Advisor, brings a wealth of expertise to our projects. Michael Ellis, the Director, leads with vision and strategic direction, ensuring our success. Manpreet Dandiwal, the Managing Director, oversees operations with a keen eye for detail. Jarrod Membrey, the General Manager, ensures smooth daily operations and exceptional service.</p>
        </div>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
