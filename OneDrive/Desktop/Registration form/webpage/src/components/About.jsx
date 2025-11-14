// src/components/About.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  const iconCircle = {
    width: '60px',
    height: '60px',
    backgroundColor: 'orange',
    flexShrink: 0
  };

  return (
    <Container as="section" className="mt-5">
      <Row className="align-items-start">
        <Col md={6}>
          <div className="d-flex align-items-center mb-3">
            <div
              className="d-flex align-items-center justify-content-center rounded-circle text-light me-3"
              style={iconCircle}
            >
              <i className="bi bi-boxes fs-3"></i>
            </div>
            <div>
              <h4>Digital Marketing</h4>
              <p>It is a long establised fact that that a reader will be distracted by the readable content of a page</p>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div
              className="d-flex align-items-center justify-content-center rounded-circle text-light me-3"
              style={iconCircle}
            >
              <i className="bi bi-person-video2"></i>
            </div>
            <div>
              <h4>E-mail Marketing</h4>
              <p>It is a long establised fact that that a reader will be distracted by the readable content of a page</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div
              className="d-flex align-items-center justify-content-center rounded-circle text-light me-3"
              style={iconCircle}
            >
              <i className="bi bi-cash-coin"></i>
            </div>
            <div>
              <h4>Bussiness Marketing</h4>
              <p>It is a long establised fact that that a reader will be distracted by the readable content of a page</p>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <img src="src/assets/image/Hero-Image.png" className="img-fluid rounded" alt="A team working in an office" />
        </Col>
      </Row>
    </Container>
  );
}

export default About;