// src/components/Stats.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Stats() {
  const statsStyle = {
    backgroundImage: `
      linear-gradient(rgba(245, 158, 72, 0.6), rgba(255, 128, 0, 0.6)), 
      url('src/assets/image/network.jpg')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
  };

  return (
    <section className="w-100 d-flex align-items-center mt-5" style={statsStyle}>
      <Container className="text-light text-center">
        <Row className="gx-5">
          <Col>
            <h2 className="fw-bold">90K+</h2>
            <div className="fw-bold">Happy Clients</div>
          </Col>
          <Col>
            <h2 className="fw-bold">45M</h2>
            <div className="fw-bold">Lines of code</div>
          </Col>
          <Col>
            <h2 className="fw-bold">190</h2>
            <div className="fw-bold">total Downloads</div>
          </Col>
          <Col>
            <h2 className="fw-bold">380K+</h2>
            <div className="fw-bold">youtube subscribers</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Stats;