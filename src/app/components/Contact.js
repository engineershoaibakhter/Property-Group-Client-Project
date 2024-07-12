"use client";
import React from 'react';
import styles from '../styles/Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className={styles.contact_us}>
        <h2 className={styles.h2}>CONTACT US</h2>
    <div className={styles.contactContainer} id='contact_us'>
      <div className={styles.leftSection}>
      <p>We'd love to hear from you! Whether you have a question, feedback, or simply want to say hello, our team is here to help. Your thoughts and inquiries are important to us, and we are committed to providing you with the best possible support.</p>
          <h2>Drop Us a Message</h2>
          <p>For your convenience, we have provided a contact form below. Simply fill out the form, and one of our representatives will get back to you as soon as possible. We strive to respond to all inquiries within 24 hours.</p>
        
        {/* <div className={styles.contactDetails}>
          <div className={styles.detailItem}>
            <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
            <div className={styles.textContainer}>
              <h3>Address</h3>
              <p>Level 8/468 St Kilda Road Melbourne VIC 3004</p>
            </div>
          </div>
          <div className={styles.detailItem}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            <div className={styles.textContainer}>
              <h3>Contact Us</h3>
              <p>03 9222 4000</p>
            </div>
          </div>
          <div className={styles.detailItem}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <div className={styles.textContainer}>
              <h3>Email</h3>
              <p>info@bcacorp.com.au</p>
            </div>
          </div>
       </div> */}
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
    </div>
  );
};

export default Contact;
