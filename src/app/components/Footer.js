"use client";
import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaLinkedin, FaYoutube, FaTwitter, FaFacebook,FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.main_footer}>
    <section className={styles.footer}>
      <div className={styles.footerRow}>

<div className={styles.footerCol} id={"footerCol1"}>
          <ul className={styles.links}>
          <h4>BCA CORP</h4>
            <p>The paragraph will show on here. The paragraph will show on here. The paragraph will show on here. The paragraph will show on here</p>
            <li className={styles.socialIcons}>
              <a href="#">
                <FaLinkedin className={styles.icon}/>
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a href="#">
                <FaYoutube className={styles.icon}/>
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a href="#">
                <FaTwitter className={styles.icon}/>
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a href="#">
                <FaFacebook className={styles.icon}/>
              </a>
            </li>
            <li className={styles.socialIcons}>
              <a href="#">
                <FaInstagram className={styles.icon}/>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <ul className={styles.links}>
          <h4>SERVICES</h4>
            <li><a href="#">Development Advisory</a></li>
            <li><a href="#">Project Management</a></li>
            <li><a href="#">Financier Representation</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <ul className={styles.links}>
          <h4>MELBOURNE</h4>
            <li><Link href="#">Level 8/468 St Kilda Road Melbourne VIC 3004</Link></li>
            <li><Link href="#">03 9222 4000</Link></li>
            <li><Link href="mailto:info@bcacorp.com.au">info@bcacorp.com.au</Link></li>
          </ul>
        </div>

        

        
      </div>
      
    </section>
    <div className={styles.copyright}>
          <p>Copyright 2024 - BCA-CORP | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
