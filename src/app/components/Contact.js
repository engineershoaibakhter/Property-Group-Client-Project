"use client";
import React from 'react';
import styles from '../styles/Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPhone, faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className={styles.contactContainer} id='contact_us'>
      <div className={styles.leftSection}>
        <h2 className={styles.h2}>CONTACT US</h2>
        <div className={styles.contactDetails}>
          <div className={styles.detailItem}>
            <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
            <div>
              <h3>Address</h3>
              <p>Level 8/468 St Kilda Road Melbourne VIC 3004</p>
            </div>
          </div>
          <div className={styles.detailItem}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            <div>
              <h3>Contact Us</h3>
              <p>03 9222 4000</p>
            </div>
          </div>
          {/* <div className={styles.detailItem}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            <div>
              <h3>Michael’s Mobile Number</h3>
              <p>04 1306 6115</p>
            </div>
          </div> */}
          <div className={styles.detailItem}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <div>
              <h3>Email</h3>
              <p>info@bcacorp.com.au</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <form className={styles.contactForm}>
          <div className={`${styles.formGroup} ${styles.row}`}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" name="name" placeholder="Mimosic John" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email*</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" required />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Additional Message</label>
            <textarea id="message" name="message" placeholder="Please write any note here..."></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
