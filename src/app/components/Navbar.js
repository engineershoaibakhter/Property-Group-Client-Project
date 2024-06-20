'use client';

import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';

const NavbarWeb = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={'/Companylogo.png'} alt="Company Logo" className={styles.logoImage} />
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <a href="/">Home</a>
        <a href="#projects">Projects</a>
        <a href="#partners">Partners</a>
        <a href="#news">News</a>
        <a href="#contact_us">Contact Us</a>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
};

export default NavbarWeb;
