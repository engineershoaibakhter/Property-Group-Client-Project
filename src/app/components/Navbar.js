'use client';

import React, { useState } from 'react';
import styles from '../styles/Navbar.module.css';

const NavbarWeb = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu=()=>{
    setIsOpen(false)
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={'/Companylogo.png'} alt="Company Logo" className={styles.logoImage} />
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <a href="/" onClick={closeMenu}>Home</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#partners" onClick={closeMenu}>Partners</a>
        <a href="#news" onClick={closeMenu}>News</a>
        <a href="#contact_us" onClick={closeMenu}>Contact Us</a>
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
