"use client"
import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.leftSection}>
        <h2 className={styles.h2}>CONTACT US</h2>
        <h1 className={styles.h1}>To Know More About Properties</h1>
        <div className={styles.contactDetails}>
          <div className={styles.detailItem}>
            <img src="globe-icon.png" alt="Address" />
            <div>
              <h3>Our Address</h3>
              <p>291 Roderick Wells, UK, Connecticut, 08429</p>
            </div>
          </div>
          <div className={styles.detailItem}>
            <img src="phone-icon.png" alt="Phone" />
            <div>
              <h3>Contact Us</h3>
              <p>+(000) 123-456-789</p>
              <p>+(0000) 1234-56789</p>
            </div>
          </div>
          <div className={styles.detailItem}>
            <img src="location-icon.png" alt="Working Hours" />
            <div>
              <h3>Working Hours</h3>
              <p>Mon-Fri: 8 AM - 5 PM</p>
              <p>Sat-Sun: 8 AM - 2 PM</p>
            </div>
          </div>
          <div className={styles.detailItem}>
            <img src="email-icon.png" alt="Email" />
            <div>
              <h3>Email Us</h3>
              <p>info@example.com</p>
              <p>contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <form className={styles.contactForm}>
          <div className={`${styles.formGroup} ${styles.row}`}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" name="name" placeholder="Mimosic john" required />
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
