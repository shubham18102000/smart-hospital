import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import '../styles/PatientProfile.css';


const PatientProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const patient = location.state?.patient;

    const [status, setStatus] = useState(patient?.inventoryStatus || '');
    const [prescription, setPrescription] = useState('');
    const [sensorData, setSensorData] = useState({
        bpm: 'Loading...',
        spo2: 'Loading...',
        date: 'Loading...',
    });

    const statusOptions = [
        { label: 'Admitted', value: 'Admitted' },
        { label: 'Under Treatment', value: 'Under Treatment' },
        { label: 'Discharged', value: 'Discharged' },
        { label: 'Critical', value: 'Critical' },
    ];

    const handleStatusChange = () => {
        patient.inventoryStatus = status;
        alert(`Patient status updated to ${status}`);
    };

    const handlePrescriptionSubmit = () => {
        alert(`Prescription submitted: ${prescription}`);
    };

    const handleBack = () => {
        navigate('/patients');
    };

    // Fetch sensor data
    const fetchSensorData = async () => {
        try {
            const response = await fetch('http://localhost:3001/sensor-data');
            if (response.ok) {
                const data = await response.json();
                setSensorData({
                    bpm: data.bpm,
                    spo2: data.spo2,
                    date: new Date(data.date).toLocaleString(), // Format date as needed
                });
            } else {
                console.error('Failed to fetch sensor data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching sensor data:', error);
        }
    };

    // Fetch data on component mount and set interval for polling
    useEffect(() => {
        fetchSensorData(); // Initial fetch
        const intervalId = setInterval(fetchSensorData, 5000); // Fetch data every 5 seconds

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    if (!patient) {
        return <div>Patient not found</div>;
    }

    return (
        <>
       
            <div className="patient-profile-container">
                <div className="patient-profile">
                    <img
                        src={patient.image}
                        alt={patient.name}
                        className="patient-image"
                        style={{ width: '150px', borderRadius: '50%' }}
                    />
                    <h3>{patient.name}</h3>
                    <p><strong>Address:</strong> {patient.Address}</p>
                    <p><strong>Category:</strong> {patient.category}</p>
                    <p>
                        <strong>Health Status:</strong>
                        <Rating value={patient.rating} readOnly cancel={false} />
                    </p>
                    <p><strong>Status:</strong> {status}</p>

                    <h4>Update Status</h4>
                    <Dropdown
                        value={status}
                        options={statusOptions}
                        onChange={(e) => setStatus(e.value)}
                        placeholder="Select a Status"
                    />
                    <Button label="Update Status" onClick={handleStatusChange} />

                    <h4>Digital Prescription</h4>
                    <InputText
                        value={prescription}
                        onChange={(e) => setPrescription(e.target.value)}
                        placeholder="Enter Prescription"
                        style={{ width: '300px' }}
                    />
                    <Button label="Submit Prescription" onClick={handlePrescriptionSubmit} />

                    <Button label="Back to Patients" onClick={handleBack} />
                </div>
                <aside className="patient-sidebar">
                    <h4>Live Data</h4>
                    <p><strong>Oximeter Level:</strong> {patient.oximeterLevel} %</p>
                    <p><strong>Blood Pressure:</strong> {patient.bloodPressure} mmHg</p>
                    <p><strong>BPM:</strong> {sensorData.bpm} bpm</p>
                    <p><strong>SpO2:</strong> {sensorData.spo2} %</p>
                    <p><strong>Date:</strong> {sensorData.date}</p>
                    <h4>Static Details</h4>
                    <p><strong>Blood Group:</strong> {patient.bloodGroup}</p>
                    <p><strong>Diabetic Status:</strong> {patient.diabeticStatus ? "Yes" : "No"}</p>
                    <p><strong>Weight:</strong> {patient.weight} kg</p>
                    <p><strong>Disability:</strong> {patient.disability ? "Yes" : "No"}</p>
                </aside>
            </div>
        </>
    );
};

export default PatientProfile;





