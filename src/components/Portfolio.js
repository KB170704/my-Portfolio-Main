import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Portfolio.css";

function Portfolio() {
  const projects = [
    {
      title: "Soltech IT Website Design",
      img: "https://media.istockphoto.com/id/1074983828/photo/sharing-ideas-concepts-with-papernote-writing-strategy-on-wall-glass-office-business-marketing.jpg?s=612x612&w=0&k=20&c=q47Ot4HKOFzfSy5K03o_CuJtezZ_1RMjEID5DGVN2gw=", // you can replace with your Soltech website screenshot
      desc: "Professional IT company website designed with modern UI/UX and responsive layout.",
      link: "https://soltech-drab.vercel.app/" // replace with your actual live project link
    },
    {
      title: "Portfolio Website",
      img: "https://media.istockphoto.com/id/682084406/photo/retouche-at-work.jpg?s=612x612&w=0&k=20&c=0M4EMaLiWFXBBGs2VCRbf0oe9Cn3ZaTnEeiIajkbGRU=", // screenshot of your portfolio website
      desc: "My personal portfolio built with React, Bootstrap, and modern UI design.",
      link: "https://myportfolio-kappa-blush.vercel.app/" // replace with your portfolio live link
    },
    {
      title: "Admin Dashboard",
      img: "https://media.istockphoto.com/id/2166408543/photo/young-adult-asia-female-freelance-eyeglasses-typing-write-prompt-ai-bot-it-app-smart-program.jpg?s=612x612&w=0&k=20&c=-riDkgvoYunEeThfoRO3UkWryFWFf7wtM9toaW86UOo=", // suggested image
      desc: "Interactive dashboard with charts, tables, and authentication.",
      link: "https://www.example-dashboard.com" // replace with your project link
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section py-5">
      <Container>
        <h2 className="text-center fw-bold mb-5">📂 My Portfolio</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="portfolio-card">
                <div className="portfolio-img-wrapper">
                  <Card.Img variant="top" src={project.img} className="portfolio-img" />
                  <div className="overlay">
                    <Button variant="light" href={project.link} target="_blank">
                      View Project
                    </Button>
                  </div>
                </div>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Portfolio;
