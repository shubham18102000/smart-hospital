import React, { useState } from 'react';
import '../styles/PatientAppointmentForm.css';
import PatientNavbar from './PatientNavbar';
import { useNavigate } from 'react-router-dom';

export default function PatientAppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    problem: '',
    doctor: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointmentDetails = {
      ...formData,
      ticketNumber: `T-${Math.floor(1000 + Math.random() * 9000)}`,
      appointmentTime: new Date().toLocaleString(), // Example date and time
    };

    localStorage.setItem('appointmentDetails', JSON.stringify(appointmentDetails));

    navigate('/appointment-confirmation'); // Navigate to confirmation page
  };

  return (
    <>
      <PatientNavbar />
      <div className="containerpatient">
        <h1>Patient Appointment Form</h1>
        <form id="appointment-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Patient Name:</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />
          <br />

          <label htmlFor="age">Patient Age:</label>
          <input type="number" id="age" value={formData.age} onChange={handleChange} required />
          <br />

          <label htmlFor="problem">Problem Description:</label>
          <textarea
            id="problem"
            value={formData.problem}
            onChange={handleChange}
            required
            placeholder="Feeling pain on knee..."
          ></textarea>
          <br />

          <label htmlFor="doctor">Select Doctor:</label>
          <select id="doctor" value={formData.doctor} onChange={handleChange} required>
            <option value="">Choose Doctor</option>
            <option value="Dr. Smith">Dr. Smith - Cardiologist</option>
            <option value="Dr. Johnson">Dr. Johnson - Neurologist</option>
            <option value="Dr. Lee">Dr. Lee - Orthopedic</option>
            <option value="Dr. Patel">Dr. Patel - Dermatologist</option>
          </select>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
