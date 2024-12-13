import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/DiabetesPrediction.css'; // Optional: Import your CSS for styling
import PatientNavbar from './PatientNavbar';

const DiabetesPrediction = () => {
  const [predictionData, setPredictionData] = useState({
    age: '',
    glucose: '',
    bloodPressure: '',
    bmi: '',
    insulin: '',
    dpf: '',
  });
  const [predictionResult, setPredictionResult] = useState(null);

  const handlePredictionChange = (e) => {
    const { name, value } = e.target;
    setPredictionData({ ...predictionData, [name]: value });
  };

  const handlePredict = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(predictionData),
      });

      const result = await response.json();
      setPredictionResult(result.prediction); // Adjust based on your response structure
    } catch (error) {
      console.error('Error making prediction:', error);
      setPredictionResult('Error making prediction');
    }
  };

  return (
    <>
    <PatientNavbar/>
    
    <div className="diabetes-prediction-container">
      <h3>Diabetes Prediction</h3>
      <Form onSubmit={handlePredict}>
        <Form.Group controlId="formAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your age"
            name="age"
            value={predictionData.age}
            onChange={handlePredictionChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formGlucose">
          <Form.Label>Glucose Level</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter glucose level"
            name="glucose"
            value={predictionData.glucose}
            onChange={handlePredictionChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBloodPressure">
          <Form.Label>Blood Pressure</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter blood pressure"
            name="bloodPressure"
            value={predictionData.bloodPressure}
            onChange={handlePredictionChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBMI">
          <Form.Label>BMI</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter BMI"
            name="bmi"
            value={predictionData.bmi}
            onChange={handlePredictionChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formInsulin">
          <Form.Label>Insulin Level</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter insulin level"
            name="insulin"
            value={predictionData.insulin}
            onChange={handlePredictionChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formDPF">
          <Form.Label>Diabetes Pedigree Function</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            placeholder="Enter DPF"
            name="dpf"
            value={predictionData.dpf}
            onChange={handlePredictionChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">Predict</Button>
      </Form>

      {predictionResult && (
        <div className="prediction-result">
          <h4>Prediction Result:</h4>
          <p>{predictionResult}</p>
        </div>
      )}
    </div>
    </>
  );
};

export default DiabetesPrediction;
