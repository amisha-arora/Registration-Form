// src/components/Team.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Team() {
  return (
    <>
      <section className="text-center mt-5">
        <h4 style={{ color: 'orange' }}>TEAM</h4>
        <h1>Team Members</h1>
        <h5>Contrary to popular belief, Lorem ipsum dolor sit.<br/>Lorem ipsum dolor sit amet...</h5>
      </section>
      <Container as="section" className="text-center mt-4">
        <Row>
          <Col>
            <img src="src/assets/image/iPhone-16-Teal-1.png" className="d-block w-100" alt="Teal Phone" />
            Teal
          </Col>
          <Col>
            <img src="src/assets/image/iPhone Blue.webp" className="d-block w-100" alt="Blue Phone" />
            Blue
          </Col>
          <Col>
            <img src="src/assets/image/Iphone pink.webp" className="d-block w-100" alt="Pink Phone" />
            Pink
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Team;