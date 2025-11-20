import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Removed FaTwitter as it wasn't used

// Make sure to import the CSS file
import "./Footer.css";

function Footer() {
    // Use consistent details
    const GITHUB_LINK = "https://github.com/KaushikBorad";
    const LINKEDIN_LINK = "https://www.linkedin.com/in/kaushik-borad-456728224/";
    const EMAIL_ADDRESS = "kaushikborad238@gmail.com";

    return (
        // ⭐ ADDED main-footer CLASS HERE ⭐
        <footer className="footer main-footer bg-dark text-light pt-5 pb-3">
            <Container>
                <Row className="gy-4 align-items-center">
                    {/* About Section */}
                    <Col md={6} className="text-center text-md-start">
                        <h5 className="fw-bold mb-3">
                            Kaushik Borad
                        </h5>
                        <p className="small text-muted">
                            Crafting modern, responsive, and scalable web applications.
                        </p>
                    </Col>

                    {/* Socials */}
                    <Col md={6} className="text-center text-md-end">
                        <h6 className="fw-bold mb-3">Connect with me</h6>
                        <div className="d-flex justify-content-center justify-content-md-end gap-3">
                            <a
                                href={`mailto:${EMAIL_ADDRESS}`}
                                className="social-icon"
                                aria-label="Email"
                            >
                                <FaEnvelope />
                            </a>
                            <a
                                href={GITHUB_LINK}
                                target="_blank"
                                rel="noreferrer"
                                className="social-icon"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href={LINKEDIN_LINK}
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

                <hr className="border-secondary my-4" />

                <Row>
                    <Col className="text-center small text-muted">
                        © {new Date().getFullYear()} <strong>Kaushik Borad</strong>. All rights reserved.
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;