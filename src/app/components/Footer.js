"use client";
import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaLinkedin, FaYoutube, FaTwitter, FaFacebook,FaInstagram } from 'react-icons/fa';

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
            <li><a href="#">Security</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <ul className={styles.links}>
          <h4>MELBOURNE</h4>
            <li><a href="#">Level 8/468 St Kilda Road Melbourne VIC 3004</a></li>
            <li><a href="#">03 9222 4000</a></li>
            <li><a href="#">michael.ellis@bcacorp.com.au</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <ul className={styles.links}>
            <h4>SUBSCRIPTION</h4>
            <p>Subscribe us to get latest update</p>
            <form>
              <input className={styles.email} type="text" placeholder="Email" required/>
              <h4 type="submit" className={styles.submitBtn}>Subscribe →</h4>
            </form>
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
