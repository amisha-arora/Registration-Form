// src/components/Projects.jsx
import React from 'react';
import { Container, Carousel } from 'react-bootstrap';

function Projects() {
  const captionStyle = {
    textAlign: 'left', left: '10%', bottom: '2rem',
  };
  const lineStyle = {
    width: '50px', height: '3px', backgroundColor: '#fd7e14', marginBottom: '0.5rem',
  };
  const textStyle = {
    color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  };

  return (
    <Container as="section" className="my-5">
      <div className="text-center">
        <h4 style={{ color: 'orange' }}>WORK</h4>
        <h1>Successful Projects</h1>
        <h5>Contrary to popular belief, Lorem ipsum dolor sit.<br/>Lorem ipsum dolor sit amet...</h5>
      </div>

      <Carousel id="carouselExampleIndicators" className="rounded mt-4">
        <Carousel.Item style={{ height: '400px' }}>
          <img
            className="d-block w-100"
            src="src/assets/image/digital world.webp"
            alt="First slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          <Carousel.Caption style={captionStyle}>
            <div style={lineStyle}></div>
            <h3 style={textStyle}>Consulting Marketing</h3>
            <p style={textStyle}>Website Design</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: '400px' }}>
          <img
            className="d-block w-100"
            src="src/assets/image/icon shining.jpg"
            alt="Second slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          <Carousel.Caption style={captionStyle}>
            <div style={lineStyle}></div>
            <h3 style={textStyle}>Another Project</h3>
            <p style={textStyle}>Digital Strategy</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item style={{ height: '400px' }}>
          <img
            className="d-block w-100"
            src="src/assets/image/AIhand.webp"
            alt="Third slide"
            style={{ objectFit: 'cover', height: '100%' }}
          />
          <Carousel.Caption style={captionStyle}>
            <div style={lineStyle}></div>
            <h3 style={textStyle}>Last Slide</h3>
            <p style={textStyle}>App Development</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Projects;