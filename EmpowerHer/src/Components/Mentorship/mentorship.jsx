import React from 'react';
import { Link } from 'react-router-dom';
import './Mentorship.css';
import mentor1 from '../../assets/mentor1.jpeg'; 
import mentor2 from '../../assets/mentor2.jpeg';
import mentor3 from '../../assets/mentor3.jpeg';

const Mentorship = () => {
  // Mentor data
  const mentors = [
    {
      id: 1,
      name: "Rose Marie",
      description: "Career guidance expert with 10+ years of experience helping young women navigate their professional paths.",
      image: mentor1,
    },
    {
      id: 2,
      name: "Davis King",
      description: "Leadership coach focused on empowering women in tech to achieve leadership roles.",
      image: mentor2,
    },
    {
      id: 3,
      name: "Christelle Hill",
      description: "Software engineer with a passion for mentoring girls in web development and programming.",
      image: mentor3,
    },
  ];

  return (
    <div className="mentorship-section container" name="mentorship">
      <h1>Our Mentors</h1>
      <p>Connect with our experienced mentors for career guidance, leadership advice, and skill development.</p>
      
      <div className="mentors-grid">
        {mentors.map((mentor) => (
          <div className="mentor-card" key={mentor.id}>
            <img src={mentor.image} alt={mentor.name} className="mentor-img" />
            <h3>{mentor.name}</h3>
            <p>{mentor.description}</p>
            {/* Link to the booking page for this mentor */}
            <Link to={`/book-mentor/${mentor.id}`} className="btn">Book Now</Link> {/* Button that navigates to booking page */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentorship;
