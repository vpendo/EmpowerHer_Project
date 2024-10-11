import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookMentor.css'; // Add your styles here

const BookMentor = () => {
  const { id } = useParams(); // Retrieve mentor ID from URL
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate booking the mentor
    console.log(`Booking mentor with ID: ${id}`);
    console.log(`Mentee Name: ${name}, Email: ${email}, Date: ${date}, Message: ${message}`);

    // Redirect or display a success message
    alert('Your meeting has been scheduled! A Google Meet link will be sent to your email.');
  };

  return (
    <div className="book-mentor-section">
      <h1>Book a Session with Mentor</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Your Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Preferred Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default BookMentor;
