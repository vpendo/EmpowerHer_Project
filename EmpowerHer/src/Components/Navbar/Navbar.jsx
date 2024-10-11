import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';  // Import from react-scroll
import './Navbar.css';
import logo from '../../assets/logo4.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        <li><Link to="back" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="course" smooth={true} offset={-90} duration={500}>Courses</Link></li>
        <li><Link to="mentorship" smooth={true} offset={-90} duration={500}>Mentorship</Link></li>
        <li><Link to="about" smooth={true} offset={-90} duration={500}>About Us</Link></li>

        
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact Us</Link></li>
       
      </ul>
    </nav>
  );
};



export default Navbar;
