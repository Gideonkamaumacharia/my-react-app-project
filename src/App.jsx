import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Register from './pages/Register';
import Login from './pages/Login';
import SurveyList from './components/SurveyList';
import './App.css'

const App = () => {
  return (
    <>
      <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      </Router>
        <Home/>
        <AboutUs/>
        <ContactUs/>
        <Register/>
        <Login/>
        <SurveyList/>
    </>
    
  );
};

export default App;
