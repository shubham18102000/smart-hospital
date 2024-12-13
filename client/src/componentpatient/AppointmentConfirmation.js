import React, { useEffect } from 'react';
import { jsPDF } from 'jspdf';
import '../styles/AppointmentConfirmation.css';
import PatientNavbar from './PatientNavbar';

export default function AppointmentConfirmation() {
  useEffect(() => {
    const appointmentDetails = JSON.parse(localStorage.getItem('appointmentDetails'));
    if (appointmentDetails) {
      const { name, age, problem, doctor, ticketNumber, appointmentTime } = appointmentDetails;
      document.getElementById('appointment-details').innerHTML = `
          <p><strong>Patient Name:</strong> ${name}</p>
          <p><strong>Age:</strong> ${age}</p>
          <p><strong>Problem Description:</strong> ${problem}</p>
          <p><strong>Doctor:</strong> ${doctor}</p>
          <p><strong>Ticket Number:</strong> ${ticketNumber}</p>
          <p><strong>Appointment Date & Time:</strong> ${appointmentTime}</p>
      `;
    } else {
      document.getElementById('appointment-details').innerHTML = "<p>No appointment details found.</p>";
    }
  }, []);

  const downloadPDF = () => {
    const appointmentDetails = JSON.parse(localStorage.getItem('appointmentDetails'));
    if (!appointmentDetails) return;

    const { name, age, problem, doctor, ticketNumber, appointmentTime } = appointmentDetails;

    const doc = new jsPDF();
    doc.text("Appointment Letter", 20, 20);
    doc.text(`Patient Name: ${name}`, 20, 30);
    doc.text(`Age: ${age}`, 20, 40);
    doc.text(`Problem Description: ${problem}`, 20, 50);
    doc.text(`Doctor: ${doctor}`, 20, 60);
    doc.text(`Ticket Number: ${ticketNumber}`, 20, 70);
    doc.text(`Appointment Date & Time: ${appointmentTime}`, 20, 80);

    doc.save("appointment-letter.pdf");
  };

  return (
    <>
    <PatientNavbar/>
    <div className="confirmation-container">
      <h1>Appointment Confirmation</h1>
      <div id="appointment-details"></div>
      <button id="download-pdf" className="download-button" onClick={downloadPDF}>
        Download Appointment Letter
      </button>
    </div>
    </>
  );
}
