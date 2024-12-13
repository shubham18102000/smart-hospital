import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/Sidebar.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <i className="bi bi-house"></i>
          <span>Home</span>
        </li>
        <li className="sidebar-item">
          <i className="bi bi-speedometer2"></i>
          <span>Dashboard</span>
        </li>
        <li className="sidebar-item">
          <i className="bi bi-table"></i>
          <span>Reports</span>
        </li>
        <li className="sidebar-item">
        <Link to="/patients">
          <i className="bi bi-people"></i>
          <span>Patients</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <i className="bi bi-bag"></i>
          <span>Pending cases</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
