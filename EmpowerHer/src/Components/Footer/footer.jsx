import React from 'react';
import { Link } from 'react-scroll'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">

        {/* Logo and About (Left) */}
        <div className="footer_section footer_about">
          <div className="footer_logo_container">
            <a href="#">
              <div className="footer_logo_text">EMPOWER<span>HER</span></div>
            </a>
          </div>
          <div className="footer_about_text">
            <p>Inspire your greatness.</p>
          </div>
          <div className="footer_social">
            <ul>
              <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>

        {/* Links (center) */}
        <div className="footer_section footer_links">
          <div className="footer_title">Links</div>
          <div className="footer_links_container">
            <ul>
              <li><Link to="back" smooth={true} offset={-90} duration={500}>Home</Link></li>
              <li><Link to="about" smooth={true} offset={-90} duration={500}>About Us</Link></li>
              <li><Link to="course" smooth={true} offset={-90} duration={500}>Courses</Link></li>
              <li><Link to="mentorship" smooth={true} offset={-90} duration={500}>Mentorship</Link></li>
              <li><Link to="contact" smooth={true} offset={-250} duration={500}>Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info (Right) */}
        <div className="footer_section footer_contact">
          <div className="footer_title">Contact Us</div>
          <div className="footer_contact_info">
            <ul>
              <li>Email: empowerher@info6@gmail.com</li>
              <li>Phone: +250 782030814</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <div className="cr_text">
          Copyright &copy; {new Date().getFullYear()} All rights reserved
        </div>
        <div className="cr_links">
          <ul className="cr_list">
            <li><a href="ajax/logout">Logout Now?</a></li>
            <li><a href="terms">Terms of Use</a></li>
            <li><a href="priv">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
