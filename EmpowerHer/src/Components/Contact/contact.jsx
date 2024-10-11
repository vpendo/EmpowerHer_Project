import React from 'react';
import './contact.css';
import msg_icon from '../../assets/msg_icon.png';
import mail_icon from '../../assets/mail_icon.png';
import phone_icon from '../../assets/phone_icon.png';
import location_icon from '../../assets/location_icon.png';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f3e51c7a-77c8-49bf-bd07-b85677d03c9b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact-section'>
      {/* Title for the Contact Us section */}
      <h1 className='contact-title'>Contact Us</h1>

      <div className='contact'>
        <div className='contact-col'>
          <h3>Send us a Message <img src={msg_icon} alt="Message Icon" /></h3>
          <p>If you have any questions, feedback, or would like to learn more about our mission to empower young girls and women in Rwanda, feel free to reach out. We are always here to listen and support you. Send us a message, and our team will get back to you as soon as possible!</p>
          <ul>
            <li><img src={mail_icon} alt="Mail Icon" /> empowerherinfo6@gmail.com</li>
            <li><img src={phone_icon} alt="Phone Icon" />+250782030814</li>
            <li><img src={location_icon} alt="Location Icon" />KG 178 St, Kigali</li>
          </ul>
        </div>

        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" placeholder='Enter Your Name' required />
            
            <label>Your Email</label>
            <input type="email" placeholder='Enter Your Email' required />
            
            <label>Phone Number</label>
            <input type="tel" placeholder='Enter Your Phone Number' required />
            
            <label>Write Your Message</label>
            <textarea name='message' rows='6' placeholder='Enter Your Message' required></textarea>
            
            <button type='submit' className='btn'>Submit Now</button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  )
}

export default Contact;
