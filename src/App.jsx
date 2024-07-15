// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import Register from './components/Register'
import { BrowserRouter as Route,Router, Routes } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Login from './components/Login'

const App = () => {
  return (
    <>
      <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={ContactUs} />
        </Routes>
      </div>
      </Router>
    
      <Navbar/>
    </>
    
  );
};

export default App;
