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
              <Link href={process.env.NEXT_PUBLIC_LINKEDIN_LINK} target='_blank'>
                <FaLinkedin className={styles.icon}/>
              </Link>
            </li>
            <li className={styles.socialIcons}>
              <Link href={process.env.NEXT_PUBLIC_YOUTUBE_LINK} target='_blank'>
                <FaYoutube className={styles.icon}/>
              </Link>
            </li>
            <li className={styles.socialIcons}>
              <Link href={process.env.NEXT_PUBLIC_TWITTER_LINK} target='_blank'>
                <FaTwitter className={styles.icon}/>
              </Link>
            </li>
            <li className={styles.socialIcons}>
              <Link href={process.env.NEXT_PUBLIC_FACEBOOK_LINK} target='_blank'>
                <FaFacebook className={styles.icon}/>
              </Link>
            </li>
            <li className={styles.socialIcons}>
              <Link href={process.env.NEXT_PUBLIC_INSTAGRAM_LINK} target='_blank'>
                <FaInstagram className={styles.icon}/>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <ul className={styles.links}>
          <h4>SERVICES</h4>
            <li>Development Advisory</li>
            <li>Project Management</li>
            <li>Financier Representation</li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <ul className={styles.links}>
          <h4>MELBOURNE</h4>
            <li>Level 8/468 St Kilda Road Melbourne VIC 3004</li>
            <li><Link href="tel:+61392224000">03 9222 4000</Link></li>
            <li><Link href="mailto:info@bcacorp.com.au">info@bcacorp.com.au</Link></li>
          </ul>
        </div>
        

        

        
      </div>
      
    </section>
    <div className={styles.copyright}>
          <p>Copyright 2024 - BCA Corp | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
