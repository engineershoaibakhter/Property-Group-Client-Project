// components/Team.jsx
import React from 'react';
import styles from '../styles/Team.module.css';
import Link from 'next/link';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const TeamMember = ({ name, title, imgSrc,linkedIn }) => {
  return (
    <div className={styles.teamMember}>
      <Image src={imgSrc} alt={`${name} image`} className={styles.teamImage} width={100} height={100}/>
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
      title: 'Consultant',
      imgSrc: '/images/man/leftman.png',
      linkedIn:"https://linkedin.com",
    },
    {
      name: 'Michael Ellis',
      title: 'Director',
      imgSrc: '/images/man/centerman.png',
      linkedIn:"https://linkedin.com",
    },
    {
      name: 'Manpreet Dandiwal',
      title: 'managing director,',
      imgSrc: '/images/man/rightman.png',
      linkedIn:"https://linkedin.com",
    },
    {
      name: 'Jarrod Membrey',
      title: 'General manager',
      imgSrc: '/images/man/rightman.png',
      linkedIn:"https://linkedin.com",
    }
  ];

  return (
    <div className={styles.teamSection}>
      
      <div className={styles.gallery}>
        <div className={styles.leftColumn}>
          <h2>Our great team</h2>
          <p>Nick Gupta, our Consultant, brings a wealth of expertise to our projects. Michael Ellis, the Director, leads with vision and strategic direction, ensuring our success. Manpreet Dandiwal, the Managing Director, oversees operations with a keen eye for detail. Jarrod Membrey, the General Manager, ensures smooth daily operations and exceptional service.</p>
        </div>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
