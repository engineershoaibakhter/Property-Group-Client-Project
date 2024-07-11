// components/Team.jsx
import React from 'react';
import styles from '../styles/Team.module.css';

const TeamMember = ({ name, title, imgSrc }) => {
  return (
    <div className={styles.teamMember}>
      <img src={imgSrc} alt={`${name} image`} className={styles.teamImage} />
      <div className={styles.overlay}>
        <div className={styles.text}>
          <h3>{name}</h3>
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
    },
    {
      name: 'Michael Ellis',
      title: 'DIRECTOR',
      imgSrc: '/images/man/centerman.png',
    },
    {
      name: 'Manpreet Dandiwal',
      title: 'CONSULTANT',
      imgSrc: '/images/man/rightman.png',
    },
  ];

  return (
    <div className={styles.teamSection}>
      
      <div className={styles.gallery}>
        <div className={styles.leftColumn}>
          <h2>Our great team</h2>
          <p>Under the right circumstances, a team can be significantly more creative than any individual.</p>
          <button className={styles.learnMoreBtn}>Learn More</button>
        </div>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
