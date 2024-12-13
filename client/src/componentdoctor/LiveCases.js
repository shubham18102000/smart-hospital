import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router for navigation
import '../styles/LiveCases.css'; // Assuming you have a CSS file

const LiveCases = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [cases] = useState([
    { pid: 1, name: "Ronnie", sex: "Male", category: "Cardiologist", description: "Experienced a catastrophic heart attack 5 mins ago", timeLog: "21:30 Hours", prevHistory: "Yes" },
    { pid: 2, name: "Sheldon", sex: "Male", category: "Psychologist", description: "Can't sleep properly due to stress and work load. Not able to enjoy life!", timeLog: "18:30 Hours", prevHistory: "No" },
    { pid: 3, name: "Azio", sex: "Male", category: "Orthopaedist", description: "Fractures reported in the wrist due to excessive coding on Flutter without pause", timeLog: "03:30 Hours", prevHistory: "Yes" },
    { pid: 4, name: "Henna", sex: "Female", category: "Dermatologist", description: "Needs to get rid of pimples on her skin", timeLog: "21:30 Hours", prevHistory: "Yes" },
    { pid: 5, name: "Drake", sex: "Male", category: "Physician", description: "Suspected to be Covid + due to violation of Lockdown norms during Lockdown.", timeLog: "14:30 Hours", prevHistory: "No" }
  ]);

  const handleAccept = (pid) => {
    // Navigate to a case details page (if needed)
    navigate(`/case-details/${pid}`);
  };

  return (
    <div className="live-cases">
      <h2>Live Cases</h2>
      <table className="cases-table">
        <thead>
          <tr>
            <th>PID</th>
            <th>Name</th>
            <th>Sex</th>
            <th>Category</th>
            <th>Description</th>
            <th>Time Log</th>
            <th>Prev History</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((caseData) => (
            <tr key={caseData.pid}>
              <td>{caseData.pid}</td>
              <td>{caseData.name}</td>
              <td>{caseData.sex}</td>
              <td>{caseData.category}</td>
              <td>{caseData.description}</td>
              <td>{caseData.timeLog}</td>
              <td>{caseData.prevHistory}</td>
              <td><button onClick={() => handleAccept(caseData.pid)} className="accept-button">Accept</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LiveCases;
