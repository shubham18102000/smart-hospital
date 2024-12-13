import React from 'react';
import '../styles/DoctorNavbar.css'; // Import your CSS file
import logo from '../assets/logo.jpg';

const DoctorNavbar = ({ onLogin, onLogout, isLoggedIn }) => {
  return (
    <nav className="Doctornavbar">
      <div className="navbar-logo">
        <img src={logo}alt="Doctor Logo" className="logo" />
        <span className="logo-text">Doctor Portal</span>
      </div>
      <div className="navbar-links">
      
          <button className="navbar-button" onClick={onLogout}>Logout</button>
     
          <button className="navbar-button" onClick={onLogin}>Login</button>
      
      </div>
    </nav>
  );
};

export default DoctorNavbar;
