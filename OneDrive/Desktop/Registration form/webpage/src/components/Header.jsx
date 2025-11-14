// src/components/Header.jsx
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function Header() {
  const orangeBg = {
    backgroundColor: 'rgb(255, 145, 0)',
    padding: '0.5rem 0',
  };

  const contactButton = {
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
  };

  return (
    <header>
      <div style={orangeBg}>
        <Container fluid>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="mx-2 text-light">
                <i className="bi bi-envelope-fill"></i> youremail@company.com
              </span>
              <span className="mx-2 text-light">
                <i className="bi bi-telephone-fill"></i> +1 234 567 890
              </span>
            </div>
            <div className="d-flex justify-content-end">
              <i className="bi bi-facebook mx-2 text-light"></i>
              <i className="bi bi-twitter mx-2 text-light"></i>
              <i className="bi bi-instagram mx-2 text-light"></i>
              <i className="bi bi-linkedin mx-2 text-light"></i>
            </div>
          </div>
        </Container>
      </div>

      <Navbar bg="body-tertiary" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="src/assets/image/OIP.webp" alt="Logo" width="200" height="70" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#" style={{ color: 'orange' }}>Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Portfolio</Nav.Link>
              <Nav.Link href="#">Teams</Nav.Link>
              <Nav.Link href="#">Reviews</Nav.Link>
              <Nav.Link href="#">Store</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
              <Button style={contactButton} as="a" href="#">
                Contact
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

