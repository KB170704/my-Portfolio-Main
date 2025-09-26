import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer bg-dark text-light pt-5 pb-3">
      <Container>
        <Row className="gy-4 align-items-center">
          {/* About Section */}
          <Col md={6} className="text-center text-md-start">
            <h5 className="fw-bold mb-3">MyPortfolio</h5>
            <p className="small text-muted">
              Crafting modern, responsive, and user-friendly web applications.
            </p>
          </Col>

          {/* Socials */}
          <Col md={6} className="text-center text-md-end">
            <h6 className="fw-bold mb-3">Connect with me</h6>
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a
                href="kaushikborad238@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/msheladiya99"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/meet-sheladiya-ba333031b/"
                target="_blank"
                rel="noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-light my-4" />

        <Row>
          <Col className="text-center small text-muted">
            © {new Date().getFullYear()} <strong>MyPortfolio</strong>. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
