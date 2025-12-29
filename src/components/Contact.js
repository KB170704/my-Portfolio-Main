import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Phone, Mail, MapPin, ArrowDownToLine } from "lucide-react";
import "./Contact.css";

function Contact() {
    const contactDetails = [
        {
            icon: <Phone size={24} className="contact-icon" />,
            title: "Call Me",
            detail: "+91 63527 28286",
            link: "tel:+916352728286",
        },
        {
            icon: <Mail size={24} className="contact-icon" />,
            title: "Email",
            detail: "kaushikborad238@gmail.com",
            link: "mailto:kaushikborad238@gmail.com?subject=Inquiry from Portfolio",
        },
        {
            icon: <MapPin size={24} className="contact-icon" />,
            title: "Location",
            detail: "Surat, Gujarat, India",
            link: "",
        },
    ];

    return (
        <section id="contact" className="contact-section py-5">
            <Container>
                <div className="text-center mb-5 section-header">
                    <h2 className="fw-bold display-4 animate__animated animate__fadeInDown">Contact Me</h2>
                    <p className="text-muted lead animate__animated animate__fadeInUp">Get in touch</p>
                </div>

                <Row>
                    {/* Left Side: Contact Details */}
                    <Col lg={5} className="contact-info-col mb-4 mb-lg-0">
                        <div className="contact-details">
                            {contactDetails.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    className={`detail-item d-flex align-items-center p-3 mb-4 rounded shadow-sm contact-anim-${index}`}
                                >
                                    <div className="icon-wrapper me-3">{item.icon}</div>
                                    <div>
                                        <h5 className="mb-0 fw-bold">{item.title}</h5>
                                        <p className="mb-0 text-muted">{item.detail}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </Col>

                    {/* Right Side: CV Download System */}
                    <Col lg={7} className="contact-form-col d-flex align-items-center justify-content-center">
                        <div className="contact-form-wrapper p-4 rounded shadow-lg form-fade-in w-100 text-center">
                            <h2 className="mb-4 fw-bold">Download My Resume</h2>
                            <h6 className="mb-5 text-center">Click the button below to download my latest curriculum vitae (CV).</h6>

                            {/* DEDICATED CV BUTTON */}
                            <div className="contact-cv-btn-container">
                                <a
                                    href="/Kaushik-Borad.pdf"
                                    download="Kaushik_Borad_Resume.pdf"
                                    className="contact-cv-btn"
                                >
                                    <ArrowDownToLine size={24} style={{ marginRight: '10px' }} />
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;