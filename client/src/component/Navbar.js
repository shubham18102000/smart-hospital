import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from React Router
// import 'bootstrap/dist/css/bootstrap.min.css';
import  '../styles/Navbar.css';
import logo from '../assets/logo.jpg';

const HospitalNavbar = () => {
  return (
    <div>
      <Navbar className="custom-navbar" expand="lg" sticky="top">
        <Container>
        <div className="navbar-logo">
        <img src={logo}alt="Doctor Logo" className="logo" />
        
      </div>
          {/* Use Link component for routing */}
          <Navbar.Brand as={Link} to="/">IoT Health Hub</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navbarheading">
              {/* Use Link instead of href */}
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/doctor-login">Doctors</Nav.Link>
              <Nav.Link as={Link} to="/patientlogin">Patients</Nav.Link>
              <Nav.Link as={Link} to="/appointments">Hospital's</Nav.Link>
              <Nav.Link as={Link} to="/contact">Project-contributer</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HospitalNavbar;



