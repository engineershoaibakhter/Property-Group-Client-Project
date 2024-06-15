"use client";
import styles from '../styles/HeaderNavbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneVolume, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
          <h6 className={styles.h6}><a href="tel:0392224000" className={styles.phoneLink}>03 9222 4000</a></h6>
        </div>
      </div>
      <div className={styles.LeftContent}>
        <div className={styles.TimingContainer}>
          <FontAwesomeIcon icon={faClock} className={styles.icon} />
          <h6 className={styles.h6}>Mon to Fri - 09:00 to 17:00</h6>
        </div>
        <span className={styles.BreakLine}>|</span>
        <div className={styles.icons}>
          <span className={styles.icon}><FontAwesomeIcon icon={faFacebookF} /></span>
          <span className={styles.icon}><FontAwesomeIcon icon={faTwitter} /></span>
          <span className={styles.icon}><FontAwesomeIcon icon={faYoutube} /></span>
          <span className={styles.icon}><FontAwesomeIcon icon={faInstagram} /></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbar;
