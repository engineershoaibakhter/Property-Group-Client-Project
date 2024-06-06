// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import styled from "styled-components";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import styles from '../styles/Navbar.module.css'


// const NavbarContainer = styled(Navbar)`
// background-color: ${({ bgColor }) => bgColor || 'transparent'};
//   color: white;
//   padding: 0rem 2rem;
//   font-family: FranklinGothic-MediumCond, Helvetica, Arial, sans-serif;
//   width: 100%;
//   z-index: 15;
//   position: absolute;

  

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//     padding: 1rem;
//   }
// `;

// const Logo = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;

//   @media (max-width: 768px) {
//     width: 15vw;
//     height: 15vh;
//   }
// `;

// const LogoImage = styled.img`
//   width: 20vw;
//   height: 20vh;

//   @media (max-width: 1366px) {
//     width: 30vw;
//   height: 15vh;
//   }

//   @media (max-width: 768px) {
//     width: 30vw;
//   height: 15vh;

//   }
// `;

// const NavLinks = styled(Nav)`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   gap: 2rem;
//   width: auto;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: flex-start;
//     width: 100%;
//   }
// `;

// const NavLink = styled(Link)`
//   color: white;
//   text-decoration: none;
//   font-size: 1.1rem;
//   letter-spacing: 1.2px;

//   @media (max-width: 1366px) {
//     font-size: 1.2rem;
//   }

//   @media (max-width: 1180px) {
//     font-size: 1.1rem;
//   }

//   &:hover {
//     color: orange;
//   }
// `;

// const HamburgerMenu = styled.div`
//   display: none;
//   cursor: pointer;
//   font-size: 2rem;

//   @media (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 2rem;
//     right: 3rem;
//   }
// `;

// const NavbarWeb = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <NavbarContainer expand="lg" bgColor={menuOpen ? "#333" : "transparent"}>
//       <Container>
//         <Logo>
//           {/* <LogoImage src="/logo.png" alt="Pomeroy Pacific Logo"/> */}
//           <img src="/logo.png" alt="Pomeroy Pacific Logo" width={100} height={100}  />
//         </Logo>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} className={styles.custom_toggle} />
//         <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-end ${menuOpen ? 'show' : ''}`}>
//           <NavLinks>
//             <Nav.Link href="/" as={NavLink}>HOME</Nav.Link>
//             <Nav.Link href="/#services" as={NavLink}>SERVICES</Nav.Link>
//             <Nav.Link href="/#portfolio" as={NavLink}>PORTFOLIO</Nav.Link>
//             <Nav.Link href="/#about" as={NavLink}>ABOUT</Nav.Link>
//             <Nav.Link href="/#contact" as={NavLink}>CONTACT US</Nav.Link>
            
//           </NavLinks>
//         </Navbar.Collapse>
//       </Container>
//     </NavbarContainer>
//   );
// };

// export default NavbarWeb;



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
