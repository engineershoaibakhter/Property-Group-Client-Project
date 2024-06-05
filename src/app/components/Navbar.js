// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  width: 95%;
  z-index: 15;
  position: absolute;
  padding: 0rem 2rem;
  // background: #333; 
  font-family:FranklinGothic-MediumCond, Helvetica, Arial, sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    // margin-bottom: 0.5rem;
    width: 15vw;
    height:15vh;
  }
`;

const LogoImage = styled.img`
  width: 14vw; /* Set a width to control logo size */
  height: 14vh;
  margin-left:8vw

  @media (max-width: 768px) {
    margin-bottom: 5rem;
    
  }

`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 2rem;
    right: 3rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  width: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    display: ${({ open }) => (open ? "flex" : "none")};
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  letter-spacing: 1.2px;

  &:hover {
    color: #ffcc00;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarContainer>
      <Logo>
        <LogoImage
          src="/logo.png"
          alt="Pomeroy Pacific Logo"
        />
        
      </Logo>
      <HamburgerMenu onClick={toggleMenu}>
        &#9776; {/* This represents the hamburger icon */}
      </HamburgerMenu>
      <NavLinks open={menuOpen}>
        <NavLink href="/">HOME</NavLink>
        <NavLink href="/#services">SERVICES</NavLink>
        <NavLink href="/#portfolio">PORTFOLIO</NavLink>
        <NavLink href="/#about">ABOUT</NavLink>
        <NavLink href="/#contact">CONTACT US</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
