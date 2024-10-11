import React from 'react';
import './About.css';
import about from '../../assets/about1.jpg';

const About = () => {
  return (
    <div className='about-section'name='about'>
      
      <h1 className='about-heading'>About Us</h1>
      
      
      <div className='about-content'>
        <div className='about-left'>
          <img src={about} alt="About EmpowerHer" className='about-image' />
        </div>  
        
        <div className='about-right'>
          <p>
            <strong>EmpowerHer</strong> is dedicated to empowering young women through technology and education. We provide essential skills and leadership opportunities that enable girls to thrive in the tech industry.
          </p>
          <p>
            Our mission is to bridge the gender gap in technology and create a future where women are leaders and innovators. Join us in empowering the next generation of female leaders!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
