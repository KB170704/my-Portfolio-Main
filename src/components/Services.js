import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./Services.css"
import { Container, Row, Col, Carousel } from "react-bootstrap";
// Service Icons
import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
// Tool Logos
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import StorageIcon from "@mui/icons-material/Storage";
import PaletteIcon from "@mui/icons-material/Palette";
import DataUsageIcon from "@mui/icons-material/DataUsage";

function Services() {
    const services = [
        {
            icon: <CodeIcon className="service-icon" />,
            title: "Web Development",
            desc: "Responsive and modern websites built using React, Bootstrap, and MUI."
        },
        {
            icon: <PhoneIphoneIcon className="service-icon" />,
            title: "App Development",
            desc: "Cross-platform mobile apps with smooth UI & high performance."
        },
        {
            icon: <DesignServicesIcon className="service-icon" />,
            title: "UI/UX Design",
            desc: "User-friendly designs with focus on simplicity and clarity."
        }
    ];

    // Services for the Carousel (one service per slide)
    const serviceSlides = services.map((service, i) => (
        <Carousel.Item key={`service-${i}`}>
            <Row className="justify-content-center">
                <Col md={6} lg={4}>
                    <Card className="service-card h-100 text-center">
                        <CardContent>
                            <div className="mb-3 service-icon-wrapper">{service.icon}</div>
                            <Typography variant="h5" className="service-title">{service.title}</Typography>
                            <Typography variant="body1" color="textSecondary">
                                {service.desc}
                            </Typography>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
        </Carousel.Item>
    ));

    const allToolLogos = [
        // Existing Tools
        { icon: <CodeIcon fontSize="large" />, name: "VS Code" },
        { icon: <WebIcon fontSize="large" />, name: "WebStorm" },
        { icon: <RocketLaunchIcon fontSize="large" />, name: "Vercel/Render" },
        { icon: <CssIcon fontSize="large" />, name: "CSS" },
        { icon: <HtmlIcon fontSize="large" />, name: "HTML5" },
        { icon: <JavascriptIcon fontSize="large" />, name: "JavaScript" },
        { icon: <PaletteIcon fontSize="large" />, name: "Bootstrap/MUI" },
        { icon: <WebIcon fontSize="large" />, name: "React" },
        { icon: <StorageIcon fontSize="large" />, name: "Node.js" },
        { icon: <GitHubIcon fontSize="large" />, name: "Git/GitHub" },
        { icon: <PhoneIphoneIcon fontSize="large" />, name: "React Native" },
        // AI Productivity Tools
        { icon: <RocketLaunchIcon fontSize="large" />, name: "ChatGPT (AI)" },
        { icon: <DataUsageIcon fontSize="large" />, name: "Gemini (AI)" },
        { icon: <WebIcon fontSize="large" />, name: "Perplexity (AI)" },
        { icon: <CodeIcon fontSize="large" />, name: "Grok (AI)" },
    ];

    // Duplicate the logos for a smooth, seamless loop
    const loopingToolLogos = [...allToolLogos, ...allToolLogos];

    const logoElements = loopingToolLogos.map((tool, i) => (
        <div key={`tool-${i}`} className="tool-logo-box text-center p-3">
            {tool.icon}
            <small className="d-block mt-1 fw-bold">{tool.name}</small>
        </div>
    ));


    return (
        <section id="services">
            <Container>
                {/* Services Header */}
                <div className="text-center mb-5 section-header">
                    <h2 className="fw-bold display-4 animate__animated animate__fadeInDown">Services</h2>
                    <p className="text-muted lead animate__animated animate__fadeInUp">What I Offer</p>
                </div>

                {/* Services Slider */}
                <div className="services-slider mb-5">
                    <Carousel
                        indicators={true}
                        controls={false}
                        interval={5000}
                        className="custom-carousel"
                    >
                        {serviceSlides}
                    </Carousel>
                </div>

                {/* -------------------------------------------------------------------------------- */}

                {/* Tools Section Header */}
                <hr className="my-5" />
                <div className="text-center mb-5">
                    <h3 className="fw-bold animate__animated animate__fadeIn">Tools & Technologies 🛠️</h3>
                </div>

                {/* Tools Slider - MARQUEE/LOOP EFFECT */}
                <div className="tools-slider-marquee">
                    <div className="tool-logo-track">
                        {logoElements}
                    </div>
                </div>

            </Container>
        </section>
    );
}

export default Services;