"use client";
import { useState } from "react";
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/Navbar.module.css';

const NavbarWeb = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar className={`${styles.navbar_container} ${menuOpen ? styles.bg_color : ''}`} expand="lg">
      <Container>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Pomeroy Pacific Logo" className={styles.logo_img} />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} className={styles.custom_toggle} />
        <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-end ${menuOpen ? 'show' : ''}`}>
          <Nav className={styles.nav_links}>
            <li href="/" as={Link} className={styles.nav_link}>HOME</li>
            <li href="/#services" as={Link} className={styles.nav_link}>SERVICES</li>
            <li href="/#portfolio" as={Link} className={styles.nav_link}>PORTFOLIO</li>
            <li href="/#about" as={Link} className={styles.nav_link}>ABOUT</li>
            <li href="/#contact" as={Link} className={styles.nav_link}>CONTACT US</li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarWeb;
