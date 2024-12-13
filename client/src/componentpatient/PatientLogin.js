import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DoctorLogin.css';
import axios from 'axios';
import PatientNavbar from './PatientNavbar';

const PatientLogin = () => {
  const [isRegistering, setIsRegistering] = useState(true); // Track whether to show login or register form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3001/patientregister', { name, email, password })
      .then((result) => {
        if (result.data === "Already registered") {
          alert("E-mail already registered! Please Login to proceed.");
          setIsRegistering(false);
        } else {
          alert("Registered successfully! Please Login to proceed.");
          setIsRegistering(false);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3001/patientlogin', { email, password })
      .then((result) => {
        if (result.data === "Invalid credentials") {
          alert('Login failed. Please check your credentials.');
        } else {
          alert("Logged in successfully!");
          navigate('/patientdashboard');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <PatientNavbar />
      <div className='doctor-login'>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">
            {isRegistering ? 'Patient Register' : 'Patient Login'}
          </h5>
          <form onSubmit={isRegistering ? handleRegister : handleLogin} className="space-y-6">
            {isRegistering && (
              <div>
                <label htmlFor="exampleInputname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input
                  type="text"
                  id="exampleInputname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div>
              <label htmlFor="exampleInputEmail1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Id</label>
              <input
                type="email"
                id="exampleInputEmail1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="exampleInputPassword1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input
                type="password"
                id="exampleInputPassword1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {isRegistering ? 'Register' : 'Login'}
            </button>
          </form>

          <p className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center my-2">
            {isRegistering ? 'Already have an account?' : 'Don’t have an account?'}
          </p>
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="w-full text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            {isRegistering ? 'Login' : 'Register'}
          </button>
        </div>
      </div>
    </>
  );
};

export default PatientLogin;


