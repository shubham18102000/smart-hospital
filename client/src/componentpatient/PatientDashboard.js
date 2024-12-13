import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarCheck, faFileAlt, faSyringe, faStethoscope, faPrescriptionBottleAlt, faHistory, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import patientImage from '../assets/1.jpg'; // Import the image
import '../styles/patientdashboard.css';
import PatientNavbar from './PatientNavbar';


const features = [
  { name: 'Profile', icon: faUser, alt: 'Profile' },
  { name: 'Book Appointment', icon: faCalendarCheck, alt: 'Book Appointment', link :'/doctor-list' },
  { name: 'Reports', icon: faFileAlt, alt: 'Reports' },
  { name: 'Doctor Details', icon: faStethoscope, alt: 'Doctor Details' },
  { name: 'Prescription', icon: faPrescriptionBottleAlt, alt: 'Prescription' },
  { name: 'Visits', icon: faHistory, alt: 'Visits' },
  { name: 'Contact Us', icon: faPhone, alt: 'Contact Us' }
];

const features1 = [
  { name: 'AI-Diabetics Prediction', icon: faSyringe, alt: 'Diabetes Prediction', link: '/diabetes-prediction' },
  { name: 'AI-Health Analysis', icon: faSyringe, alt: 'Health Analysis', link: '/ai-health-analysis' }
];

function PatientDashboard() {
  return (
    <>
    <PatientNavbar/>
    <div className="app-container">
      <main className="app-main">
        <div className="profile-section">
          <img src={patientImage} alt="Patient Profile" className="profile-image" />
          <h3>Welcome, [Mohit]</h3> {/* Optionally make this dynamic */}
        </div>

        <div className="menu-container">
  {features.map((feature, index) => (
    feature.link ? (
      <Link to={feature.link} key={index} className="menu-item">
        <FontAwesomeIcon icon={feature.icon} size="2x" />
        <p>{feature.name}</p>
      </Link>
    ) : (
      <div className="menu-item" key={index}>
        <FontAwesomeIcon icon={feature.icon} size="2x" />
        <p>{feature.name}</p>
      </div>
    )
  ))}
</div>

        <div className="menu-container">
          {features1.map((feature, index) => (
            <Link to={feature.link} key={index} className="menu-item">
              <FontAwesomeIcon icon={feature.icon} size="2x" />
              <p>{feature.name}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
    </>
  );
}

export default PatientDashboard;

