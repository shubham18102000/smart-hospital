import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import HospitalNavbar from './component/Navbar';
import Hero from './component/Hero';
import DoctorLogin from './componentdoctor/DoctorLogin';
import DoctorDashboard from './componentdoctor/DoctorDashboard';
import BookAppointment from './componentdoctor/BookAppointment';
import Footer from './component/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import LiveCases from './componentdoctor/LiveCases';
import Sidebar from './componentdoctor/Sidebar';
import PatientList from './componentdoctor/PatientList';
import PatientLogin from './componentpatient/PatientLogin';
import PatientDashboard from './componentpatient/PatientDashboard';
import DiabetesPrediction from './componentpatient/DiabetesPrediction';
import PatientProfile from './componentpatient/PatientProfile';
import DoctorList from './componentpatient/DoctorList';
import PatientAppointmentForm from './componentpatient/PatientAppointmentForm';
import AppointmentConfirmation from './componentpatient/AppointmentConfirmation';
import ContributorsPage from './component/ContributorsPage';
// Sample patients data for routing
const samplePatients = [
    {
        id: 1,
        name: 'Mohit',
        image: 'path/to/image1.jpg', // Replace with actual image path
        Address: "Dehradun",
        category: 'Cardiology',
        rating: 3.5,
        inventoryStatus: 'Admitted',
    },
    {
        id: 2,
        name: 'Ram',
        image: 'path/to/image2.jpg', // Replace with actual image path
        Address: "Delhi",
        category: 'Cardiology',
        rating: 3,
        inventoryStatus: 'Under Treatment',
    },
    // Add more sample patients as needed
];

const AppContent = () => {
    const location = useLocation();

    // Check if the current route is the homepage
    const isHomepage = location.pathname === "/";

    return (
        <>
            {/* Show Navbar, Hero, and Footer only on the homepage */}
            {isHomepage && <HospitalNavbar />}
            {isHomepage && <Hero />}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path ="/contact" element ={<ContributorsPage/>}/>
                <Route path="/doctor-login" element={<DoctorLogin />} />
                <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
                <Route path="/book-appointment/:doctorId" element={<BookAppointment />} />
                <Route path="/patientlogin" element={<PatientLogin />} />
                <Route path="/patientdashboard" element={<PatientDashboard />} />
                <Route path="/diabetes-prediction" element={<DiabetesPrediction />} />
                <Route path="/patients" element={<PatientList />} />
                <Route path="/doctor-list" element={<DoctorList />} />
                <Route path="/sidebar" element={<Sidebar />} />
                <Route path="/livecase" element={<LiveCases />} />
                <Route path="/appointment-confirmation" element={<AppointmentConfirmation />} />
                <Route path="/patient/:id" element={<PatientProfile patients={samplePatients} />} />
                <Route path="/book-appointment" element={<PatientAppointmentForm />} />
                {/* Add other routes here */}
            </Routes>

            {/* Show Footer only on the homepage */}
            {isHomepage && <Footer />}
        </>
    );
};

const Home = () => {
    return (
        <></>
    );               
};

const App = () => {
    return (
        <Router>
            <AppContent />
        </Router>
    );
};

export default App;





