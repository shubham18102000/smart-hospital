import React from 'react';
import  '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Hospital Information */}
        <div className="footer-section hospital-info">
          <h4>Hospital Management System</h4>
          <p>Providing excellent healthcare services.</p>
        </div>

        {/* Contact Information */}
        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <p><b>Uttaranchal Univesity, UK</b></p>
          <p>Phone: +44 1234 567890</p>
          <p>Email: contact@hospital.com</p>
        </div>

        {/* Important Links */}
        <div className="footer-section important-links">
          <h4>Important Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#doctors">Find a Doctor</a></li>
            <li><a href="#appointments">Book an Appointment</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Hospital Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
