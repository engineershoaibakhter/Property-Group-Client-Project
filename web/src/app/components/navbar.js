// components/Navbar.js
"use client";
import Link from "next/link";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
//   padding: 1rem 2rem;
  color: white;
  position: fixed;
  width: 100%;
  z-index: 10;

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
  width: auto; /* Adjust the width if needed */
  height: auto; /* Adjust the height if needed */
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
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
  return (
    <NavbarContainer>
      <Logo>
        <LogoImage src="https://pomeroypacific.com.au/wp-content/uploads/2020/09/PP_Stacked_REV_W-125x96.png" alt="Pomeroy Pacific Logo" />
      </Logo>
      <NavLinks>
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
