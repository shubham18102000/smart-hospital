import React from 'react';
import '../styles/ContributorsPage.css';
import HospitalNavbar from './Navbar';
import Footer from './Footer';
import logo from '../assets/sam.jpg';
import logo1 from '../assets/ajit.jpg';

const contributors = [
  {
    id: 1,
    name: 'Shubham Chamoli',
    role: 'Website developemt',
    contribution: 'Developed the patient and doctor dashboards with responsive UI.',
    rollNo: '12345',
    image: logo, // Replace with actual image path or URL
  },
  // {
  //   id: 2,
  //   name: 'Sapna parshwan',
  //   role: 'Research Work',
  //   contribution: 'Implement new idea',
  //   rollNo: '12346',
  //   image: 'https://via.placeholder.com/150',
  // },
  // {
  //   id: 3,
  //   name: 'Ayushi',
  //   role: 'Presentation Work',
  //   contribution: 'Preapare ppt and documentatio.',
  //   rollNo: '12347',
  //   image: 'https://via.placeholder.com/150',
  // },
  // {
  //   id: 4,
  //   name: 'Ajit Singh',
  //   role: 'Project Report',
  //   contribution: 'Prepare Presentaiton and Project ppt',
  //   rollNo: '12346',
  //   image: logo1,
  // },
  
 
];

const ContributorsPage = () => {
  return (
    <>
    <HospitalNavbar/>
    <div className="contributors-page">
      <h1>Project Contributors</h1>
      <div className="contributors-grid">
        {contributors.map(contributor => (
          <div key={contributor.id} className="contributor-card">
            <img src={contributor.image} alt={contributor.name} className="contributor-image" />
            <h3 className="contributor-name">{contributor.name}</h3>
            <p className="contributor-role">Role: {contributor.role}</p>
            <p className="contributor-contribution">Contribution: {contributor.contribution}</p>
            <p className="contributor-rollNo">Roll No: {contributor.rollNo}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContributorsPage;
