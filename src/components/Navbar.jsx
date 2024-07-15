import React from 'react';
import { Link } from 'react-router-dom';
import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'
import Register from '../pages/Register'
import Login from '../pages/Login'




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
        
    </>
    
  );
}

export default Navbar;
