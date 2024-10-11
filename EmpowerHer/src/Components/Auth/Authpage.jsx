import React, { useState, useEffect } from 'react';
import './Auth.css';
import Register from '../../register';
import Login from '../../login';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthPage = () => {
  axios.defaults.withCredentials = true; // Enable cookies for authentication
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  // Function to handle the response from the server
  function clearup(das) {
    if (das.data.status === "Successfully Logged in") {
      setAuth(true);
      setName(das.data.name);
      navigate('/'); // Redirect to home after login
    } else {
      setAuth(false);
      setMessage(das.data.Error);
    }
  }

  useEffect(() => {
    // Check authentication status on component mount
    axios.get('http://localhost:8081/')
      .then(res => clearup(res))
      .catch(err => console.log(err));
  }, []);

  // Handle logout
  const handleDelete = () => {
    axios.get('http://localhost:8081/logout')
      .then(res => {
        if (res.data.status === "Logged out") {
          setAuth(false);
          setName('');
          setMessage('Successfully logged out');
          navigate('/login'); // Redirect to login after logout
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="auth-container">
        <h1>Welcome to the Authentication Page</h1>
        {auth ? (
          <div>
            <h4 className="text-success">Logged in as <b>{name}</b></h4>
            <button onClick={handleDelete} className="btn btn-danger btn-sm min">Logout</button>
          </div>
        ) : (
          <div>
            <Register /> {/* Display Register component */}
            <Login /> {/* Display Login component */}
            {message && <div className="alert alert-danger">{message}</div>} {/* Show error messages */}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
