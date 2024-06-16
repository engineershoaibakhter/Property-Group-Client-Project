// components/Team.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Team.module.css';

const TeamMember = ({ name, title, imgSrc, social }) => {
  const getIcon = (platform) => {
    switch (platform) {
      case 'facebook':
        return faFacebook;
      case 'twitter':
        return faTwitter;
      case 'linkedin':
        return faLinkedin;
      case 'instagram':
        return faInstagram;
      default:
        return null;
    }
  };

  return (
    <div className={styles.teamMember}>
      <div className={styles.entryHover}>
        <h3>{name}</h3>
        <div className={styles.elPos}>{title}</div>
        <div className={styles.distSocial}>
          <ul>
            {social.map((item, index) => (
              <li key={index}>
                <a href={item.link}>
                  <FontAwesomeIcon icon={getIcon(item.platform)} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img src={imgSrc} alt={`${name} image`} className={styles.teamImage} />
    </div>
  );
};

const Team = () => {
  const teamMembers = [
    {
      name: 'Sean Gares',
      title: 'CO-FOUNDER',
      imgSrc: '/images/man/leftman.png',
      social: [
        { platform: 'facebook', link: '#' },
        { platform: 'twitter', link: '#' },
        { platform: 'linkedin', link: '#' }
      ]
    },
    {
      name: 'Eduardo Gares',
      title: 'Director',
      imgSrc: '/images/man/centerman.png',
      social: [
        { platform: 'facebook', link: '#' },
        { platform: 'twitter', link: '#' },
        { platform: 'linkedin', link: '#' }
      ]
    },
    {
      name: 'Sean Banderas',
      title: 'Consultant',
      imgSrc: '/images/man/rightman.png',
      social: [
        { platform: 'twitter', link: '#' },
        { platform: 'linkedin', link: '#' },
        { platform: 'instagram', link: '#' }
      ]
    }
  ];

  return (
    <div className={styles.teamSection}>
      <div className={styles.header}>
        <h2>OUR TEAM</h2>
        <p>Under the right circumstances, a team can be significantly more creative than any individual</p>
        <div className={styles.decorativeLine}></div>
      </div>
      <div className={styles.gallery}>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Team;
