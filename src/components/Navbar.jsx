import React from 'react';
import { Link } from 'react-router-dom';
import ContactUs from './ContactUs';
import Home from './Home'
import AboutUs from './AboutUs'
import Register from './Register'
import Login from './Login'




function Navbar() {
  return (
    <>
        <nav>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About Us</Link>
            </li>
            <li>
            <Link to="/register">Register</Link>
            </li>
            <li>
            <Link to="/login">Login</Link>
            </li>
            <li>
            <Link to="/contact">Contact Us</Link>
            </li>
        </ul>
        </nav>
        <Home/>
        <AboutUs/>
        <ContactUs/>
        <Register/>
        <Login/>
    </>
    
  );
}

export default Navbar;
