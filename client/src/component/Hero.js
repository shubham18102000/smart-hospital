import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Hero.css';
import logo from '../assets/h.jpg';
import patientPhoto1 from '../assets/1.jpg'; // Replace with actual path to patient photo 1
import patientPhoto2 from '../assets/2.jpg'; // Replace with actual path to patient photo 2
import patientPhoto3 from '../assets/1.jpg'; // Replace with actual path to patient photo 3

const Hero = () => {
  // Array to store testimonial data
  const testimonials = [
    {
      name: 'Dr.Mohan',
      photo: patientPhoto1,
      review: 'The IoT systems made healthcare more convenient and efficient. Great service!',
    },
    {
      name: 'Sheetal',
      photo: patientPhoto2,
      review: 'I love how easy it is to access my medical records. The staff is wonderful and service is excellent!',
    },
    {
      name: 'Kamesh ',
      photo: patientPhoto3,
      review: 'Efficient, reliable, and easy-to-use technology. I highly recommend this Platform!',
    },
  ];

  return (
    <>
      <div className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
              <h1 className="hero-title">Empowering Healthcare with IoT-Enabled Management</h1>
              <p className="hero-description">
                Connecting Health and Innovation for Better Care.
              </p>
              <Button href="#appointments" variant="primary" className="me-3">
                Make an Appointment
              </Button>
              <Button href="#services" variant="outline-primary">
                View Services
              </Button>
            </Col>
            <Col md={6}>
              <img src={logo} alt="Hospital" className="img-fluid" />
            </Col>
          </Row>

          {/* Testimonial Section Heading */}
          <Row className="mt-5 text-center">
            <Col>
              <h2 className="testimonial-heading">What Our Patients Are Saying</h2>
              <p className="testimonial-subheading">Real experiences from patients who trust our care.</p>
            </Col>
          </Row>

          {/* Patient Testimonial Section with Three Testimonials in a Row */}
          <Row className="testimonial-row justify-content-center">
            {testimonials.map((testimonial, index) => (
              <Col md={4} sm={12} key={index} className="mb-4">
                <Card className="testimonial-card text-center p-3">
                  <img
                    src={testimonial.photo}
                    alt={`Patient ${testimonial.name}`}
                    className="testimonial-photo"
                  />
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-review">{testimonial.review}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Hero;

