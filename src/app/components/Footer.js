"use client";
import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaLinkedin, FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerRow}>
        <div className={styles.footerCol}>
        <ul className={styles.links}>
          <img 
            src="/logo.png" 
            alt="Pomeroy Pacific Logo" 
            className={styles.logo}
          />
          </ul>
        </div>

        <div className={styles.footerCol}>
          <ul className={styles.links}>
          <h4>PAGES</h4>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <ul className={styles.links}>
          <h4>SERVICES</h4>
            <li><a href="#">Development Advisory</a></li>
            <li><a href="#">Project Management</a></li>
            <li><a href="#">Financier Representation</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Capital Advisory</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <ul className={styles.links}>
          <h4>MELBOURNE</h4>
            <li><a href="#">Level 4, 15 Claremont Street</a></li>
            <li><a href="#">South Yarra, Victoria 3141</a></li>
            <li><a href="#">+61 3 8825 6777</a></li>
            <li><a href="#">info@pomeroypacific.com.au</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <ul className={styles.links}>
            <h4>CONNECT WITH US</h4>
            <li className={styles.socialIcons}>
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a href="#">
                <FaYoutube />
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
          </ul>
        </div>


      </div>
    </section>
  );
};

export default Footer;
