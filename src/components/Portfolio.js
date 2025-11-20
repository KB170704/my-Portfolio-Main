import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Code, Dashboard, Web } from '@mui/icons-material';
import "./Portfolio.css";

function Portfolio() {
    const projects = [
        {
            icon: <Dashboard fontSize="large" />,
            title: "Soltech IT Website Design",
            img: "https://media.istockphoto.com/id/1074983828/photo/sharing-ideas-concepts-with-papernote-writing-strategy-on-wall-glass-office-business-marketing.jpg?s=612x612&w=0&k=20&c=q47Ot4HKOFzfSy5K03o_CuJtezZ_1RMjEID5DGVN2gw=",
            desc: "Professional IT company website designed with modern UI/UX and responsive layout. **Tech Stack: React, Bootstrap, Node.js**",
            link: "https://soltech-drab.vercel.app/"
        },
        {
            icon: <Web fontSize="large" />,
            title: "Portfolio Website",
            img: "https://media.istockphoto.com/id/682084406/photo/retouche-at-work.jpg?s=612x612&w=0&k=20&c=0M4EMaLiWFXBBGs2VCRbf0oe9Cn3ZaTnEeiIajkbGRU=",
            desc: "My personal portfolio built with React, Bootstrap, and modern UI design. **Tech Stack: React, CSS3, Animate.css**",
            link: "https://myportfolio-kappa-blush.vercel.app/"
        },
        {
            icon: <Code fontSize="large" />,
            title: "Admin Dashboard",
            img: "https://media.istockphoto.com/id/2166408543/photo/young-adult-asia-female-freelance-eyeglasses-typing-write-prompt-ai-bot-it-app-smart-program.jpg?s=612x612&w=0&k=20&c=-riDkgvoYunEeThfoRO3UkWryFWFf7wtM9toaW86UOo=",
            desc: "Interactive dashboard with charts, tables, and authentication features. **Tech Stack: Express, MongoDB, React**",
            link: "https://www.example-dashboard.com"
        }
    ];

    // Define an array of class names to cycle through for dynamic styling
    const colorSchemes = [
        "color-scheme-blue",
        "color-scheme-green",
        "color-scheme-yellow"
    ];

    const getDynamicClass = (index) => {
        return colorSchemes[index % colorSchemes.length];
    };

    return (
        <section id="portfolio" className="portfolio-section py-5">
            <Container>
                <div className="text-center mb-5 section-header">
                    <h2 className="fw-bold display-4 animate__animated animate__fadeInDown text-dark-blue">
                        My Portfolio
                    </h2>
                    <p className="text-muted lead animate__animated animate__fadeInUp">
                        Showcasing My Latest Work
                    </p>
                </div>

                <Row>
                    {projects.map((project, index) => {
                        const dynamicClass = getDynamicClass(index);

                        return (
                            <Col md={6} lg={4} className="mb-5 portfolio-item-col" key={index}>
                                <Card
                                    className={`portfolio-card shadow-lg rounded-4 portfolio-anim-${index} ${dynamicClass}`}
                                >
                                    <div className="portfolio-img-wrapper">
                                        <Card.Img variant="top" src={project.img} className="portfolio-img" />
                                        <div className="overlay d-flex justify-content-center align-items-center">
                                            <Button
                                                variant="light"
                                                href={project.link}
                                                target="_blank"
                                                className="view-project-btn text-decoration-none"
                                            >
                                                <Web style={{ marginRight: '8px' }} /> View Project
                                            </Button>
                                        </div>
                                    </div>
                                    <Card.Body className="d-flex flex-column">
                                        <div className="d-flex align-items-center mb-2">
                                            <div className="icon-badge me-2">{project.icon}</div>
                                            <Card.Title className="fw-bold mb-0 text-primary-dark">{project.title}</Card.Title>
                                        </div>
                                        <Card.Text className="text-secondary-dark mt-2">{project.desc}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}

export default Portfolio;