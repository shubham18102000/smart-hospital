import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import logo1 from '../assets/1.jpg';
import logo2 from '../assets/2.jpg';
import '../styles/PatientList.css';
import DoctorNavbar from './DoctorNavbar';
import PatientProfile from '../componentpatient/PatientProfile';
import { Link } from 'react-router-dom';

import "primereact/resources/themes/lara-light-cyan/theme.css";

const samplePatients = [
  {
    id: 1,
    name: 'Mohit',
    image: logo1,
    Address: "Dehradun",
    category: 'Cardiology',
    rating: 3.5,
    inventoryStatus: 'Admitted',
  },
  {
    id: 2,
    name: 'Ram',
    image: logo1,
    Address: "Delhi",
    category: 'Cardiology',
    rating: 3,
    inventoryStatus: 'Under Treatment',
  },
  {
    id: 3,
    name: 'Sheetal',
    image: logo2,
    Address: "Mumbai",
    category: 'Cardiology',
    rating: 5,
    inventoryStatus: 'Discharged',
  },
  {
    id: 4,
    name: 'Mayank',
    image: logo1,
    Address: "Bangalore",
    category: 'Cardiology',
    rating: 1,
    inventoryStatus: 'Critical',
  },
];

export default function PatientList() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [displayProfile, setDisplayProfile] = useState(false);

  useEffect(() => {
    setPatients(samplePatients);
  }, []);

  const imageBodyTemplate = (patient) => {
    return (
      <img
        src={patient.image}
        alt={patient.name}
        className="w-6rem shadow-2 border-round"
      />
    );
  };

  const addressBodyTemplate = (patient) => {
    return patient.Address;
  };

  const ratingBodyTemplate = (patient) => {
    return <Rating value={patient.rating} readOnly cancel={false} />;
  };

  const statusBodyTemplate = (patient) => {
    return <Tag value={patient.inventoryStatus} severity={getSeverity(patient)} />;
  };

  const getSeverity = (patient) => {
    switch (patient.inventoryStatus) {
      case 'Admitted':
        return 'success';
      case 'Under Treatment':
        return 'warning';
      case 'Discharged':
        return 'info';
      case 'Critical':
        return 'danger';
      default:
        return null;
    }
  };

  const handleProfileClick = (patient) => {
    setSelectedPatient(patient);
    setDisplayProfile(true);
  };

  return (
    <>
      <DoctorNavbar />
      <div className="card">
        <DataTable value={patients} tableStyle={{ minWidth: '60rem' }}>
          <Column field="name" header="Name"></Column>
          <Column header="Image" body={imageBodyTemplate}></Column>
          <Column field="Address" header="Address" body={addressBodyTemplate}></Column>
          <Column field="category" header="Category"></Column>
          <Column field="rating" header="Health Status" body={ratingBodyTemplate}></Column>
          <Column header="Status" body={statusBodyTemplate}></Column>

          <Column
            header="Action"
            body={(patient) => (
              <Link to={`/patient/${patient.id}`} state={{ patient }}>
                <Button label="View Profile" icon="pi pi-eye" />
              </Link>
            )}
          />

        </DataTable>
      </div>

      {selectedPatient && (
        <PatientProfile
          patient={selectedPatient}
          visible={displayProfile}
          onHide={() => setDisplayProfile(false)}
        />
      )}
    </>
  );
}

