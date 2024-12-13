import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import logo1 from '../assets/1.jpg';
import logo2 from '../assets/2.jpg';
import '../styles/PatientList.css';
import { Link } from 'react-router-dom';
import PatientNavbar from './PatientNavbar';


const samplePatients = [
  {
    id: 1,
    name: 'Mohit',
    image: logo1,
    Address: "Dehradun",
    category: 'Cardiology',
    rating: 3.5,
    inventoryStatus: 'Available',
  },
  {
    id: 2,
    name: 'Ram',
    image: logo2,
    Address: "Delhi",
    category: 'Cardiology',
    rating: 3,
    inventoryStatus: 'Unavailable',
  },
  {
    id: 3,
    name: 'Sapna',
    image: logo1,
    Address: "Mumbai",
    category: 'Cardiology',
    rating: 5,
    inventoryStatus: 'Available',
  },
  {
    id: 4,
    name: 'Mayank',
    image: logo2,
    Address: "Bangalore",
    category: 'Cardiology',
    rating: 1,
    inventoryStatus: 'Unavailable',
  },
];

export default function DoctorList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    setPatients(samplePatients);
  }, []);

  const imageBodyTemplate = (patient) => (
    <img src={patient.image} alt={patient.name} className="w-6rem shadow-2 border-round" />
  );

  const statusBodyTemplate = (patient) => (
    <Tag value={patient.inventoryStatus} severity={patient.inventoryStatus === 'Available' ? 'success' : 'warning'} />
  );

  return (
    <>
    <PatientNavbar />
   
      
      <div className="card">
        <DataTable value={patients} tableStyle={{ minWidth: '60rem' }}>
          <Column field="name" header="Name" />
          <Column header="Image" body={imageBodyTemplate} />
          <Column field="category" header="Specialist" />
          <Column header="Status" body={statusBodyTemplate} />
          <Column
            header="Action"
            body={(patient) => (
              <Link to={`/book-appointment`} state={{ patient }}>
                <Button label="Book appointment" icon="pi pi-eye" />
              </Link>
            )}
          />
        </DataTable>
      </div>
    
    </>
  );
}