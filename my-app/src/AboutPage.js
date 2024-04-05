// AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import styles

const AboutPage = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>About Us</h1>
                <p>This is the about page.</p>
            </div>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default AboutPage;
