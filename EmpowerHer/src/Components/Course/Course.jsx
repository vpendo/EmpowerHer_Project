import React from 'react';
import './Course.css';
import python from '../../assets/python1.png';
import HTML from '../../assets/html.png';
import Javascript from '../../assets/javascript.png';

const Course = () => {
  // Course data
  const courses = [
    {
      id: 1,
      title: "Intro to Programming",
      description: "A foundational course to introduce young women to programming concepts using Python.",
      image: python,
      url: "https://www.youtube.com/watch?v=eWRfhZUzrAc",
    },
    {
      id: 2,
      title: "Web Design Basics",
      description: "Learn the essentials of building websites with HTML and CSS.",
      image: HTML,
      url: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
    },
    {
      id: 3,
      title: "Web Development Basics",
      description: "Learn the essentials of building websites with JavaScript.",
      image: Javascript,
      url: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
    },
    // Add more courses as needed
  ];

  // Function to handle course enrollment
  const handleEnroll = (courseId) => {
    alert(`You have enrolled in course ID: ${courseId}`);
    // Additional logic for enrollment can be added here
  };

  return (
    <div className="course-section container" name="course">
      <h1>Our Courses</h1>
      <p>Empowering young women with the knowledge and skills to succeed in technology and leadership roles.</p>
      
      <div className="courses-grid">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} className="course-img" />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <a href={course.url} className="btn">View Course</a>
            <button className="btn enroll-btn" onClick={() => handleEnroll(course.id)}>Enroll Now</button> {/* Enroll button */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
