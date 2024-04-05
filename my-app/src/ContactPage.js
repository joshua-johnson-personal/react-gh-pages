// ContactPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import styles

const ContactPage = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>Contact Us</h1>
                <p>This is the contact page.</p>
            </div>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default ContactPage;
