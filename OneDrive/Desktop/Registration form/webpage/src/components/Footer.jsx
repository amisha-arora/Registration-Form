// src/components/Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  const footerStyle = {
    backgroundImage: `
      linear-gradient(rgba(121, 94, 243, 0.6), rgba(77, 67, 167, 0.6)), 
      url('src/assets/image/iPhone hand.webp')
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '40vh',
  };

  return (
    <footer className="w-100 d-flex align-items-center mt-5" style={footerStyle}>
      <Container className="px-4 text-center">
        <div className="col-md-4 mx-auto text-light">
          <div
            style={{ width: '70px', height: '70px', overflow: 'hidden' }}
            className="d-flex align-items-center justify-content-center mx-auto mt-3 rounded-circle"
          >
            <img src="src/assets/image/apple logo.png" className="img-fluid" alt="Apple Logo" />
          </div>
          <div className="card-body">
            <h5 className="card-title">PRIXIMA</h5>
            <p className="card-text">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
            <i className="bi bi-facebook mx-2 text-light"></i>
            <i className="bi bi-twitter mx-2 text-light"></i>
            <i className="bi bi-instagram mx-2 text-light"></i>
            <i className="bi bi-linkedin mx-2 text-light"></i>
            <br />
            <div className="d-flex justify-content-center">
              <div className="d-flex">
                <h6 className="text-decoration-underline me-3">privacy</h6>
                <h6 className="text-decoration-underline me-3">terms</h6>
                <h6 className="text-decoration-underline">Disclaimer</h6>
              </div>
            </div>
            <h5>copyright vicpa 2022.all rights reserved</h5>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;