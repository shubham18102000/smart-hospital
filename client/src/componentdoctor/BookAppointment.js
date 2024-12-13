import React from 'react';
import { useParams } from 'react-router-dom';

const BookAppointment = () => {
  const { doctorId } = useParams(); // Extract the doctorId from the URL

  const doctors = [
    { id: 1, name: 'Dr. Martin Carder', specialization: 'Dentist', rating: 5.0, reviews: 250 },
    { id: 2, name: 'Dr. Lydia', specialization: 'General Practitioner', rating: 4.5, reviews: 150 },
    { id: 3, name: 'Dr. Sylvia', specialization: 'General Practitioner', rating: 4.2, reviews: 120 },
  ];

  // Find the selected doctor by doctorId
  const selectedDoctor = doctors.find(doctor => doctor.id === parseInt(doctorId));

  if (!selectedDoctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div>
      <h1>Book an Appointment with {selectedDoctor.name}</h1>
      <p>Specialization: {selectedDoctor.specialization}</p>
      <p>Rating: {selectedDoctor.rating} ★ ({selectedDoctor.reviews} Reviews)</p>

      {/* Your appointment form and details */}
      <form>
        <label>Select Date:</label>
        <input type="date" />
        
        <label>Select Time:</label>
        <input type="time" />
        
        <button type="submit">Confirm Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;
