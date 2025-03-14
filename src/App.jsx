import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Row, Col, Button,Form } from "react-bootstrap";
import "./App.css";

const App = () => {
  const [showNav, setShowNav] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const [message, setMessage] = useState("");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setShowNav(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nSubject: ${subject}`);
  };


  return (
    <div className="bg-dark text-white">
      {/* Navbar */}
      <Navbar expand="lg" className="navbar-dark px-3 fixed-top">
        <Navbar.Brand href="#" className="text-white fw-bold">Max Efforts VFX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setShowNav(!showNav)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-none d-lg-flex">
            <Nav.Link onClick={() => scrollToSection("home")} className="text-white">Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("about")} className="text-white">About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("work")} className="text-white">Work</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("contact")} className="text-white">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* Mobile Nav */}
        <div className={`nav-slide d-lg-none ${showNav ? "open" : ""}`} id="basic-navbar-nav">
          <button className="close-btn" onClick={() => setShowNav(false)}>✖</button>
          <Nav className="d-flex flex-column text-center">
            <Nav.Link onClick={() => scrollToSection("home")} className="text-white">Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("about")} className="text-white">About</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("work")} className="text-white">Work</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("contact")} className="text-white">Contact</Nav.Link>
          </Nav>
        </div>
      </Navbar>
      {/* Sections */}
      <section id="home" className="section-background vfx-background-section" style={{ paddingTop: "80px" }}>
        <h1 className="display-4 fw-bold text-center">Experience the Future of VFX</h1>
      </section>
      
      <section id="about" className="py-5 text-center" style={{ paddingTop: "80px" }}>
        <Container>
          <h2 className="mb-4 mt-2">About Us</h2>
          <p>
            Maximum Efforts FX Studios is an India-based creative visual effects studio specializing in high-quality outsourcing services for films, television, and advertisements. Our team consists of some of the best minds in the industry, with expertise in all technological and functional aspects of VFX. We excel in Rotoscopy, Paint/Prep, Matchmove, and Compositing.
          </p>
          <p>
            With great attention to detail, we bring your expectations to reality. Combining creativity and passion, we deliver impeccable VFX services without compromising on quality. We value your project ideas and treat every creative concept with the same enthusiasm, regardless of technical complexity. Our passion is reflected in our work, attitude, and commitment to delivering exceptional results on time, even under tight deadlines. We are continuously expanding our services worldwide.
          </p>
          <h4 className="mt-4">Why Partner with Us?</h4>
          <ul className="text-start d-inline-block">
            <li>We ensure complete data security, keeping all client information protected from potential threats.</li>
            <li>Cost-effective solutions with an efficient production pipeline.</li>
            <li>We bring your vision to life with precision and creativity.</li>
            <li>Our team consists of highly skilled, creative, and passionate artists.</li>
            <li>24/7 technical assistance to ensure seamless workflow and client support.</li>
          </ul>
        </Container>
      </section>

      <section id="work" className="py-5 text-center bg-light text-dark" style={{ paddingTop: "80px" }}>
        <Container>
          <h2 className="mb-4">Our Work</h2>
          <Row>
            <Col md={4} className="mb-4"><div className="bg-dark text-white p-3">Project 1</div></Col>
            <Col md={4} className="mb-4"><div className="bg-dark text-white p-3">Project 2</div></Col>
            <Col md={4} className="mb-4"><div className="bg-dark text-white p-3">Project 3</div></Col>
            <Col md={4} className="mb-4"><div className="bg-dark text-white p-3">Project 1</div></Col>
            <Col md={4} className="mb-4"><div className="bg-dark text-white p-3">Project 2</div></Col>
            <Col md={4} className="mb-4"><div className="bg-dark text-white p-3">Project 3</div></Col>
          </Row>
        </Container>
      </section>
      
      <section id="contact" className="py-5 text-center" style={{ paddingTop: "100px", minHeight: "100vh", overflowY: "auto" }}>
        <Container>
          <h2 className="mb-4">Contact Us</h2>
          <p>Email: contact@maxeffortsvfx.com</p>
          <Form onSubmit={handleSubmit} className="">
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your subject" 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)} 
                required 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={4} 
                placeholder="Enter your message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                required 
              />
            </Form.Group>
            <Button variant="light" className="fw-bold" type="submit">Send</Button>
          </Form>
        </Container>
      </section>
      {/* Footer */}
      <footer className="bg-black text-center py-3">
        <p className="mb-0">&copy; 2025 Maximum Efforts VFX Pvt. Ltd. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
