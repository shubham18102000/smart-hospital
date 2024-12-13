import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import '../styles/DoctorDashboard.css';
import image from '../assets/sam.jpg';

import DoctorNavbar from './DoctorNavbar';


const DoctorDashboard = () => {
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const mockDoctorData = {
      name: "Dr. Shubham Chamoli",
      specialization: "Physician",
      bio: "Demonstrated work in the field of Physiology and more than 1k+ successful cases of patients!",
      degree: "Ph.D | MBBS | Delhi University",
      email: "shubhamchamoli8218035988@gmail.com",
      state: "Andhra Pradesh",
      workload: 74, // Percentage workload
      image: "https://via.placeholder.com/150", // Placeholder image
    };
    setDoctor(mockDoctorData);
  }, []);

  if (!doctor) {
    return <p>Loading profile...</p>;
  }

  return (
    <>
    <DoctorNavbar/>
    <div className='dashboard-container'>
      <Sidebar />
      
      {/* Doctor Dashboard Content */}
      <div className="doctor-dashboard">
        {/* Card for Doctor Profile */}
        <div className="card profile-card">
          <div className="profile-header">
            <img
              src={image || '/default-doctor.png'}
              alt={doctor.name}
              className="profile-image"
            />
            <div className="profile-info">
              <h1>{doctor.name}</h1>
              <p>{doctor.specialization}</p>
              <button className="follow-button">Follow</button>
            </div>
          </div>
        </div>

        {/* Other cards... */}
        {/* Card for About Section */}
        <div className="card">
          <div className="card-header">About</div>
          <div className="card-body">
            <p>{doctor.bio}</p>
          </div>
        </div>

        {/* Additional cards for qualifications, contact, and account details */}
      </div>
    </div>
    </>
  );
};

export default DoctorDashboard;


