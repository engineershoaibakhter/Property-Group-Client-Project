// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  z-index: 15;
  position: absolute;
  padding: 1rem 0;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const LogoImage = styled.img`
  width: auto;
  height: auto;
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
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
        <LogoImage src="https://pomeroypacific.com.au/wp-content/uploads/2020/09/PP_Stacked_REV_W-125x96.png" alt="Pomeroy Pacific Logo" />
      </Logo>
      <HamburgerMenu onClick={toggleMenu}>
        &#9776; {/* This represents the hamburger icon */}
      </HamburgerMenu>
      <NavLinks open={menuOpen}>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/#services">Services</NavLink>
        <NavLink href="/#portfolio">Portfolio</NavLink>
        <NavLink href="/#about">About Us</NavLink>
        <NavLink href="/#contact">Contact Us</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
