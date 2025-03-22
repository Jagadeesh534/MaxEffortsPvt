import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Carousel,
} from "react-bootstrap";
import "./App.css";
import bgVideo from "./assets/vfx_bg_eternals.mp4";
import roto from "./assets/services/roto.jpg";
import comp from "./assets/services/comp.jpg";
import paint from "./assets/services/paint.jpg";
const images = import.meta.glob("/src/assets/projects/*.jpg", { eager: true });

const App = () => {
  const [showNav, setShowNav] = useState(false);
  const currentYear = new Date().getFullYear();

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

  const projectData = Object.values(images).map((module, index) => ({
    id: index + 1,
    imageUrl: module.default,
  }));
  return (
    <div className="bg-dark text-white">
      {/* Navbar */}
      <Navbar expand="lg" className="navbar-dark px-3 fixed-top">
        <Navbar.Brand href="#" className="text-white fw-bold">
          Maximum Efforts <br />
          Fx Studios
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setShowNav(!showNav)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-none d-lg-flex">
            <Nav.Link
              onClick={() => scrollToSection("home")}
              className="text-white"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("about")}
              className="text-white"
            >
              About
            </Nav.Link>

            <Nav.Link
              onClick={() => scrollToSection("services")}
              className="text-white"
            >
              Services
            </Nav.Link>

            <Nav.Link
              onClick={() => scrollToSection("work")}
              className="text-white"
            >
              Work
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("contact")}
              className="text-white"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* Mobile Nav */}
        <div
          className={`nav-slide d-lg-none ${showNav ? "open" : ""}`}
          id="basic-navbar-nav"
        >
          <button className="close-btn" onClick={() => setShowNav(false)}>
            ✖
          </button>
          <Nav className="d-flex flex-column text-center">
            <Nav.Link
              onClick={() => scrollToSection("home")}
              className="text-white"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("about")}
              className="text-white"
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("services")}
              className="text-white"
            >
              Services
            </Nav.Link>

            <Nav.Link
              onClick={() => scrollToSection("work")}
              className="text-white"
            >
              Work
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("contact")}
              className="text-white"
            >
              Contact
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
      {/* Sections */}
      <section id="home" className="section-background vfx-background-section">
        <video autoPlay loop muted playsInline className="video-background">
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="row">
        <h1 className="display-4 fw-bold text-center text-overlay">
          Experience the Future of VFX
        </h1>
        <div>
        <Carousel
          indicators={true}
          controls={false}
          interval={3000}
          className="text-carousel"
        >
          <Carousel.Item>
            <h3 className="text-white text-center carousel-text">
             We love VFX
            </h3>
          </Carousel.Item>
          <Carousel.Item>
            <h3 className="text-white text-center carousel-text">
              We love cinema
            </h3>
          </Carousel.Item>
          <Carousel.Item>
            <h3 className="text-white text-center carousel-text">
              We love pizza
            </h3>
          </Carousel.Item>
        </Carousel>
        </div>
        </div>
      </section>
      <section
        id="about"
        className="pb-5 text-center"
        style={{ paddingTop: "80px" }}
      >
        <Container>
          <h2 className="mb-4 mt-2">About Us</h2>
          <p>
            Maximum Efforts Fx studios established in 2023 and managed by <i>KAVITA NANDAM & ALLAM</i>
            MAHENDRA, It is an Indian based creative visual effects studio that
            specializes in providing high quality outsourcing services for
            Films, Television & Advertisements. The studio is driven by some of
            the best minds from the industry, who have been expertise in all the
            technological and functional aspects in this industry. We are
            specialized in doing any kind of Rotoscopy, Paint/Prep, Matchmove
            and Compositing
          </p>
          <p>
            With great attention to detail, we bring your expectations to
            reality. Combining creativity and passion, we deliver impeccable VFX
            services without compromising on quality. We value your project
            ideas and treat every creative concept with the same enthusiasm,
            regardless of technical complexity. Our passion is reflected in our
            work, attitude, and commitment to delivering exceptional results on
            time, even under tight deadlines. We are continuously expanding our
            services worldwide.
          </p>
          <h4 className="mt-4">Why Partner with Us?</h4>
          <ul className="text-start d-inline-block">
            <li>
              We ensure complete data security, keeping all client information
              protected from potential threats.
            </li>
            <li>
              Cost-effective solutions with an efficient production pipeline.
            </li>
            <li>We bring your vision to life with precision and creativity.</li>
            <li>
              Our team consists of highly skilled, creative, and passionate
              artists.
            </li>
            <li>
              24/7 technical assistance to ensure seamless workflow and client
              support.
            </li>
          </ul>
        </Container>
      </section>
      <section id="services" className="service-padding text-center">
        <Container>
          <h2 className="mb-4">Services</h2>
          <p>
            Maximum Efforts Fx Studio Visual Effects Studio is a vfx outsourcing
            service provider for visual effect services like Rotoscopy, Tracking
            & MatchMove/Rotomation, Paint/Wire Removal/Clean up, Chroma/Keying
            for Feature films, TV Series, Commercials etc. We also provide On
            Set VFX Supervision and Film Production services.
          </p>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="bg-dark text-white">
                <Card.Img src={roto} alt="Rotoscopy" />
                <Card.Body>
                  <Card.Title>ROTOSCOPY</Card.Title>
                  <Card.Text>
                    <ul className="text-start">
                      <li>VFX Roto</li>
                      <li>Green/Blue Keying</li>
                      <li>Matt Extraction</li>
                      <li>Stereo Roto</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="bg-dark text-white">
                <Card.Img src={paint} alt="Paint/Prep" />
                <Card.Body>
                  <Card.Title>PAINT/PREP</Card.Title>
                  <Card.Text>
                    <ul className="text-start d-inline-block">
                      <li>Wire & Rig Removals</li>
                      <li>Camera/Reflection Removals</li>
                      <li>Crew/Object Removals</li>
                      <li>Clean Plate Creation</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="bg-dark text-white">
                <Card.Img src={comp} alt="compositing" />
                <Card.Body>
                  <Card.Title>COMPOSITING</Card.Title>
                  <Card.Text>
                    <ul className="text-start d-inline-block">
                      <li>Crowd Duplication</li>
                      <li>Monitor Screen Comp</li>
                      <li>Mobile Screen Comp</li>
                      <li>Set Extension</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        id="work"
        className="pb-5 text-center text-light"
        style={{ paddingTop: "100px" }}
      >
        <Container>
          <h2 className="mb-4">Work</h2>
          <Row>
            {projectData.map((p) => {
              return (
                <Col xs={6} md={4} className="mb-4" key={p.id}>
                  <img
                    src={p.imageUrl}
                    alt={p.id}
                    className="img-fluid rounded shadow"
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section
        id="contact"
        className="pb-5"
        style={{ paddingTop: "100px", overflowY: "auto" }}
      >
        <Container className="text-white pb-5">
          <h2 className="text-danger fw-bold">Contact Office</h2>
          <p>
            <strong>Maximum Efforts Fx Studios</strong> <br />
            Hyderabad, Telangana, INDIA <br />
            Phone:{" "}
            <a href="tel:+917097528722" className="text-white">
              +91-7097528722
            </a>{" "}
            <br />
            Email:{" "}
            <a
              href="mailto:info@Maximumeffortsvfxstudios.com"
              className="text-white"
            >
              info@Maximumeffortsvfxstudios.com
            </a>
          </p>

          <h2 className="text-danger fw-bold mt-4">Careers</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:Careers@Maximumeffortsvfxstudios.com"
              className="text-white"
            >
              Careers@Maximumeffortsvfxstudios.com
            </a>
          </p>
        </Container>
      </section>
      {/* Footer */}
      <footer className="bg-black text-center pb-3">
        <p className="mb-0">
          &copy; {currentYear} Maximum Efforts VFX Pvt. Ltd. All Rights Reserved.
        </p>
        <p className="mb-0">
    Designed & Developed by <i><strong>Jagadeesh .K</strong></i>
  </p>
      </footer>
    </div>
  );
};

export default App;
