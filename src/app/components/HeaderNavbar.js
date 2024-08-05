"use client";
import styles from '../styles/HeaderNavbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneVolume, faClock } from '@fortawesome/free-solid-svg-icons';
// import { faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const HeaderNavbar = () => {
  return (
    <div className={styles.HeaderNavbar}>
      <div className={styles.RightContent}>
        <div className={styles.AddressContainer}>
          <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
          <h6 className={styles.h6}>Melbourne, Victoria</h6>
        </div>
        <span className={styles.BreakLine}>|</span>
        <div className={styles.NumberContainer}>
          <FontAwesomeIcon icon={faPhoneVolume} className={styles.icon} />
          <h6 className={styles.h6}><Link href="tel:+61392224000" className={styles.phoneLink}>03 9222 4000</Link></h6>
        </div>
      </div>
      <div className={styles.LeftContent}>
        {/* <div className={styles.TimingContainer}>
          <FontAwesomeIcon icon={faPhoneVolume} className={styles.icon} />
          <h6 className={styles.h6}><Link href="tel:+61413066115" className={styles.phoneLink}>04 1306 6115</Link></h6>
        </div> */}
        {/* <span className={styles.BreakLine}>|</span> */}
        <div className={styles.icons}>
          {/* <span ><Link href={process.env.NEXT_PUBLIC_FACEBOOK_LINK} target='_blank'><FontAwesomeIcon icon={faFacebookF} className={styles.icon} /></Link></span> */}
          <span><Link href={process.env.NEXT_PUBLIC_TWITTER_LINK} target='_blank'><FontAwesomeIcon icon={faTwitter} className={styles.icon} /></Link></span>
          <span><Link href={process.env.NEXT_PUBLIC_YOUTUBE_LINK} target='_blank'><FontAwesomeIcon icon={faYoutube} className={styles.icon} /></Link></span>
          <span><Link href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK} target='_blank'><FontAwesomeIcon icon={faInstagram} className={styles.icon} /></Link></span>
          {/* <span><Link href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target='_blank'><FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} /></Link></span> */}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '200px', margin: '0 auto' }}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="1x" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} size="1x" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="1x" />
      </a>
    </div>
      </div>
    </div>
  );
};

export default HeaderNavbar;
