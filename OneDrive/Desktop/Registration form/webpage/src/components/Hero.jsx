// src/components/Hero.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Hero() {
  const heroStyle = {
    backgroundImage: 'url("src/assets/image/background.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  return (
    <section style={heroStyle}>
      <Container>
        <p className="lead">WE CRAFT DIGITAL EXPERIENCES</p>
        <h1>DESIGN DRIVEN FOR PROFESSIONALS</h1>
        <Button variant="warning">Get Started</Button>{' '}
        <Button variant="outline-light">Our work</Button>
      </Container>
    </section>
  );
}

export default Hero;