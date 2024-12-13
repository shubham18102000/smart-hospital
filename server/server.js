const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Replace with your MongoDB Atlas username and password
const dbUsername = 'shubhamchamoli';  // MongoDB Atlas username
const dbPassword = 'chamolishubham';  // MongoDB Atlas password
const dbName = 'hospital';  // Database name you want to connect to

// Connection string for MongoDB Atlas
const atlasUrl = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.fqx0m.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose.connect(atlasUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// Sensor data schema and model
const sensorDataSchema = new mongoose.Schema({
  bpm: Number,
  spo2: Number,
  createdAt: { type: Date, default: Date.now }
});

const SensorData = mongoose.model('SensorData', sensorDataSchema);

// Doctor schema and model
const doctorSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
const patientSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const Doctor = mongoose.model('Doctor', doctorSchema);
const Patient = mongoose.model('Patient', patientSchema);

// ---------------------------------------------------------------//
// Register route
app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).send("Already registered");
    }
    const newDoctor = new Doctor({ name, email, password });
    await newDoctor.save();
    res.status(201).send("Registered successfully");
  } catch (error) {
    res.status(500).send("Registration error: " + error.message);
  }
});

// Login route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctor = await Doctor.findOne({ email, password });
    if (!doctor) {
      return res.status(400).send("Invalid credentials");
    
    }
    res.status(200).send("Logged in successfully");
  } catch (error) {
    res.status(500).send("Login error: " + error.message);
    
  }
});
// ---------------------------------------------------------------//

// Register route
app.post('/patientregister', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingPatient = await Patient.findOne({ email });
    if (existingPatient) {
      return res.status(400).send("Already registered");
    }
    const newPatient = new Patient({ name, email, password });
    await newPatient.save();
    res.status(201).send("Registered successfully");
  } catch (error) {
    res.status(500).send("Registration error: " + error.message);
  }
});

// Login route
app.post('/patientlogin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const patient = await Patient.findOne({ email, password });
    if (!patient) {
      return res.status(400).send("Invalid credentials");
    
    }
    res.status(200).send("Logged in successfully");
  } catch (error) {
    res.status(500).send("Login error: " + error.message);
    
  }
});
// ---------------------------------------------------------------//




// Sensor data route
app.post('/sensor-data', async (req, res) => {
  console.log("Sensor data endpoint hit");
  try {
    const { bpm, spo2 } = req.body;
    const newSensorData = new SensorData({ bpm, spo2 });
    await newSensorData.save();
    res.status(200).send("Data received successfully");
  } catch (error) {
    res.status(500).send("Error processing data: " + error.message);
  }
});

// Route to get the latest sensor data
app.get('/sensor-data', async (req, res) => {
  try {
    const latestSensorData = await SensorData.find().sort({ createdAt: -1 }).limit(1);
    if (latestSensorData.length > 0) {
      res.status(200).json({
        bpm: latestSensorData[0].bpm,
        spo2: latestSensorData[0].spo2,
        date: latestSensorData[0].createdAt,
      });
    } else {
      res.status(404).json({ message: 'No sensor data found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching sensor data: ' + error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



