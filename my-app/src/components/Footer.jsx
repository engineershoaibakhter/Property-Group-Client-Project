import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlack, faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../css/Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="content">
                <div className="top">
                    <div className="logo-details">
                        <span className="logo_name">
                            <img src="https://s3-us-west-2.amazonaws.com/eagleagent-orig/uploads%2F1662688300331-h8k1ss17zck-af6b8473bfbda71dca726d9c86011651%2Fllogo.png" alt="PSP Property Group" data-branding="LOGO" loading="lazy" width={200} height={100} />
                        </span>
                    </div>
                    <div className="media-icons">
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                </div>
                <div className="link-boxes">
                    <ul className="box">
                        <li className="link_name">Company</li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Get started</a></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Services</li>
                        <li><a href="#">App design</a></li>
                        <li><a href="#">Web design</a></li>
                        <li><a href="#">Logo design</a></li>
                        <li><a href="#">Banner design</a></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Quick Links</li>
                        <li><a href="#">Buy</a></li>
                        <li><a href="#">Rent</a></li>
                        <li><a href="#">Sell</a></li>
                    </ul>
                    <ul className="box">
                        <li className="link_name">Contact US</li>
                        <li><a href="#"><FontAwesomeIcon icon={faLocationDot} /> Level 8/468 St Kilda Road Melbourne VIC 3004</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faPhone} /> 03 9222 4000</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faEnvelope} /> info@pspproperty.com.au</a></li>
                    </ul>
                    <ul className="box input-box">
                        <li className="link_name">Subscribe</li>
                        <li><input type="text" placeholder="Enter your email" /></li>
                        <li><input type="button" value="Subscribe" /></li>
                    </ul>
                </div>
            </div>
            <div className="bottom-details">
                <div className="bottom_text">
                    <span className="copyright_text">Copyright © 2024 <a href="#">PSP-Property Group.</a>All rights reserved</span>
                    <span className="policy_terms">
                        <a href="#">Privacy policy</a>
                        <a href="#">Terms & condition</a>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
