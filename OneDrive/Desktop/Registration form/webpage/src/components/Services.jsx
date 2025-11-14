// src/components/Services.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { servicesData } from '../data'; // Import the data

function Services() {
  return (
    <Container as="section" className="text-center mt-5">
      <h4 style={{ color: 'orange' }}>OUR SERVICES</h4>
      <h1>What We Do?</h1>
      <h5>Contrary to popular belief, Lorem ipsum dolor sit.<br/>Lorem ipsum dolor sit amet...</h5>
      
      <Row className="g-4 mt-3">
        {servicesData.map((service, index) => (
          <Col md={4} key={index}>
            <Card className="text-center h-100">
              <div
                style={{ width: '60px', height: '60px', overflow: 'hidden', backgroundColor: '#fd7e14' }}
                className="d-flex align-items-center justify-content-center mx-auto mt-3 rounded-circle"
              >
                <img src={service.img} className="img-fluid" alt={service.title} />
              </div>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Services;