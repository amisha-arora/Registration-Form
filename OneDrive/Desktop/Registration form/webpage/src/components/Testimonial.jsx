// src/components/Testimonial.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

function Testimonial() {
  const testimonialStyle = {
    backgroundImage: `
      linear-gradient(rgba(121, 94, 243, 0.6), rgba(77, 67, 167, 0.6)), 
      url('src/assets/image/mountain.jpg')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
  };

  return (
    <section className="w-100 d-flex align-items-center mt-5" style={testimonialStyle}>
      <Container className="px-4 text-center">
        <div className="col-md-4 mx-auto text-light">
          <div
            style={{ width: '70px', height: '70px', overflow: 'hidden' }}
            className="d-flex align-items-center justify-content-center mx-auto mt-3 rounded-circle"
          >
            <img src="src/assets/image/apple logo.png" className="img-fluid" alt="Apple Logo" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Ethical Hacking</h5>
            <p className="card-text">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-half"></i>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Testimonial;