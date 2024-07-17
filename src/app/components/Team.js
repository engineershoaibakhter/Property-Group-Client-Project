// components/Team.jsx
import React from 'react';
import styles from '../styles/Team.module.css';
import Link from 'next/link';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TeamMember = ({ name, title, imgSrc,linkedIn }) => {
  return (
    <div className={styles.teamMember}>
      <img src={imgSrc} alt={`${name} image`} className={styles.teamImage} />
      <div className={styles.overlay}>
        <div className={styles.text}>
          <h3>{name} <span> <Link href={linkedIn} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></Link> </span></h3> 
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: 'Nick Gupta',
      title: 'CO-FOUNDER',
      imgSrc: '/images/man/leftman.png',
      linkedIn:'https://linkedin.com',
    },
    {
      name: 'Michael Ellis',
      title: 'DIRECTOR',
      imgSrc: '/images/man/centerman.png',
      linkedIn:'https://linkedin.com',
    },
    {
      name: 'Manpreet Dandiwal',
      title: 'CONSULTANT',
      imgSrc: '/images/man/rightman.png',
      linkedIn:'https://linkedin.com',
    },
  ];

  return (
    <div className={styles.teamSection}>
      
      <div className={styles.gallery}>
        <div className={styles.leftColumn}>
          <h2>Our great team</h2>
          <p>Under the right circumstances, a team can be significantly more creative than any individual.</p>
        </div>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
