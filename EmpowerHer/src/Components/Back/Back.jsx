import React from 'react';
import './Back.css';
// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Back = () => {
  return (
    <div className='back container 'name ="Back">
      <div className='back-text'>
        <h1>Your Voice, Our Future</h1>
        <p>We empower young women in Rwanda with tech, education, and mentorship, building a future of equal opportunities for all girls to lead and succeed.</p>

        <button className='btn'>
          Join Us  
          <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' />
        </button>
      </div>
    </div>
  );
}

export default Back;

