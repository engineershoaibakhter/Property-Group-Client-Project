// import Link from 'next/link';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import '../css/Navbar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';


// function NavbarWeb() {
//   return (
//     <>
//     {/* <div className='navbar'>
//          <div className="nav">
//       <input type="checkbox" id="nav-check" />
//       <div className="nav-header">
//         <div className="nav-title">
//           JoGeek
//         </div>
//       </div>
//       <div className="nav-btn">
//         <label htmlFor="nav-check">
//           <span></span>
//           <span></span>
//           <span></span>
//         </label>
//       </div>
      
//       <div className="nav-links">
//         <a href="//github.io/jo_geek" className='nav-link' target="_blank" rel="noopener noreferrer">Home</a>
//         <a href="http://stackoverflow.com/users/4084003/" target="_blank" rel="noopener noreferrer">Buy</a>
//         <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank" rel="noopener noreferrer">Sell</a>
//         <a href="https://codepen.io/jo_Geek/" target="_blank" rel="noopener noreferrer">New Communities</a>
//         <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank" rel="noopener noreferrer">Rent</a>
//       </div>
//     </div>
//     </div> */}
//       <nav>
//         <div className='logo'>Brand</div>
//         <input type="checkbox" id="click" />
//         <label htmlFor="click" className='menuBtn'>
//           <FontAwesomeIcon icon={['fas', 'bars']} />
//         </label>
//         <ul>
//           <li><a className='active' href="#">Home</a></li>
//           <li><a href="#">About</a></li>
//           <li><a href="#">Services</a></li>
//           <li><a href="#">Gallery</a></li>
//           <li><a href="#">Feedback</a></li>
//         </ul>
//       </nav>
//       <div className='content'>
//         <div>Responsive Navigation Menu Bar Design</div>
//         <div>using only HTML & CSS</div>
//       </div>
//     </>
//   );
// }

// export default NavbarWeb;


import { useClient } from 'next/client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from '../css/Navbar.css'; // Import your CSS file

function NavbarWeb() {
  useClient();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className={styles.logo}>Brand</div>
        <input type="checkbox" id="click" checked={isOpen} onChange={toggleNavbar} />
        <label htmlFor="click" className={styles.menuBtn}>
          <FontAwesomeIcon icon={faBars} />
        </label>
        <ul className={isOpen ? styles.navActive : ''}>
          <li><a className={styles.active} href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Feedback</a></li>
        </ul>
      </nav>
      <div className={styles.content}>
        <div>Responsive Navigation Menu Bar Design</div>
        <div>using only HTML & CSS</div>
      </div>
    </>
  );
}

export default NavbarWeb;
