import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <section id="contact" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Contact Me</h2>
          <p className="text-muted">Get in touch</p>
        </div>
        <Form className="mx-auto" style={{ maxWidth: "600px" }}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Your Name" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Your Email" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={4} placeholder="Your Message" required />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">Send Message</Button>
        </Form>
      </Container>
    </section>
  );
}

export default Contact;
