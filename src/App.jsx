import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Nav, Container, Row, Col, Button, Carousel } from "react-bootstrap";
import city from './assets/city.webp';
import jet from './assets/jet.webp';
import lady from './assets/lady.webp'
import "./App.css";

const App = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="bg-dark text-white">
            {/* Navbar */}
            <Navbar expand="lg" className="navbar-dark px-3" style={{ background: "transparent" }}>
        <Navbar.Brand href="#" className="text-white fw-bold">Max Efforts VFX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setShowNav(!showNav)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-none d-lg-flex">
            <Nav.Link href="#" className="text-white">Home</Nav.Link>
            <Nav.Link href="#" className="text-white">About</Nav.Link>
            <Nav.Link href="#" className="text-white">Work</Nav.Link>
            <Nav.Link href="#" className="text-white">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* Mobile Nav */}
        <div className={`nav-slide d-lg-none ${showNav ? "open" : ""}`} id="basic-navbar-nav">
          <button className="close-btn" onClick={() => setShowNav(false)}>✖</button>
          <Nav className="d-flex flex-column text-center">
            <Nav.Link href="#" className="text-white">Home</Nav.Link>
            <Nav.Link href="#" className="text-white">About</Nav.Link>
            <Nav.Link href="#" className="text-white">Work</Nav.Link>
            <Nav.Link href="#" className="text-white">Contact</Nav.Link>
          </Nav>
        </div>
      </Navbar>
      {/* Carousel Section */}
      <section className="vfx-background-section section-background">
        <h1 className="display-4 fw-bold text-center">Experience the Future of VFX</h1>
      </section>
      {/* Hero Section */}
      <Container fluid className="text-center py-5" style={{ background: "url('/hero.jpg') no-repeat center center/cover", minHeight: "60vh" }}>
        <h1 className="display-4 fw-bold">World-Class VFX & Animation</h1>
        <p className="lead">Bringing Imagination to Reality</p>
        <Button variant="light" className="fw-bold">Explore Our Work</Button>
      </Container>
      
      {/* Portfolio Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Our Work</h2>
        <Row>
          <Col md={4} className="mb-4">
            <div className="bg-light p-3 text-dark">Project 1</div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="bg-light p-3 text-dark">Project 2</div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="bg-light p-3 text-dark">Project 3</div>
          </Col>
        </Row>
      </Container>
      
      {/* Footer */}
      <footer className="bg-black text-center py-3">
        <p className="mb-0">&copy; 2025 Maximum Efforts VFX Pvt. Ltd. All Rights Reserved.</p>
      </footer>

      
    </div>
  );
};

export default App;
