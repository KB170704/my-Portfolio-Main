import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";
import CodeIcon from "@mui/icons-material/Code";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

function Services() {
  const services = [
    {
      icon: <CodeIcon fontSize="large" color="primary" />,
      title: "Web Development",
      desc: "Responsive and modern websites built using React, Bootstrap, and MUI."
    },
    {
      icon: <PhoneIphoneIcon fontSize="large" color="secondary" />,
      title: "App Development",
      desc: "Cross-platform mobile apps with smooth UI & high performance."
    },
    {
      icon: <DesignServicesIcon fontSize="large" color="success" />,
      title: "UI/UX Design",
      desc: "User-friendly designs with focus on simplicity and clarity."
    }
  ];

  return (
    <section id="services" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Services</h2>
          <p className="text-muted">What I Offer</p>
        </div>
        <Row>
          {services.map((service, i) => (
            <Col md={4} key={i} className="mb-4">
              <Card className="shadow-sm h-100 text-center">
                <CardContent>
                  <div className="mb-3">{service.icon}</div>
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;
