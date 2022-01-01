import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container className="my-2" style={{ backgroundColor: "#545454" }}>
        <Row>
          <Col lg={4}>
            <h3 className="text-center">Logo</h3>
          </Col>
          <Col className="text-center" lg={2}>
            <h3>Fashioo</h3>
          </Col>
          <Col className="text-center" lg={2}>
            <h3>Support</h3>
          </Col>
          <Col lg={4}>
            <h3 className="text-center">Support</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
