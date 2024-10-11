import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './page/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
     </Routes>
    </Router>
  );
};

export default App;
