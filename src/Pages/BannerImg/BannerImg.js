import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const BannerImg = () => {
  return (
    <div>
      <Container>
        <div>
          <Row>
            <Col md={8} lg={8}>
              <h2 className="my-2">OUR CONSULTANCY</h2>
              <p className="text-muted mt-3">
                A successful fashion consultant should have excellent
                communication and interpersonal skills to interact with clients
                and should be friendly, outgoing, and trustworthy. Ultimately, a
                top-notch fashion consultant should be a good multitasker and a
                great listener, have good time management skills, and be highly
                organized.
              </p>
            </Col>
          </Row>
        </div>
        {/* Imges  */}
        <div>
          <Row>
            <Col>
              <div></div>
            </Col>
            <Col>
              <div></div>
            </Col>
            <Col>
              <div></div>
            </Col>
            <Col>
              <div></div>
            </Col>
            <Col>
              <div></div>
            </Col>
            <Col>
              <div></div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BannerImg;
