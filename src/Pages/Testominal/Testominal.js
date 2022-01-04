import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
const Testominal = () => {
  return (
    <div className="x">
      <Container>
        {" "}
        <h2 className="Testimonials">Testimonials</h2>
        <div style={{ backgroundColor: "#ECE0D1", height: "400px" }}>
          <Row>
            <Col lg={6}>
              <div className="imgDiv">
                <img
                  className="testIimg"
                  src="https://i.ibb.co/Kr8ZbjY/523-5237368-good-to-see-you-girl-hd-png-download-1.png"
                  alt=""
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="Logo">
                <Row>
                  <Col lg={6}>
                    <Row>
                      <Col lg={3}>
                        <i
                          style={{ width: "1re" }}
                          class="fab fa-linkedin fa-2x"
                        ></i>
                      </Col>
                      <Col lg={3}>
                        <i class="fab fa-twitter-square fa-2x"></i>
                      </Col>
                      <Col lg={3}>
                        <i class="fab fa-instagram-square fa-2x"></i>
                      </Col>
                      <Col lg={3}>
                        <i class="fab fa-facebook-square fa-2x"></i>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={4}></Col>
                </Row>
              </div>
              <div className="divText">
                <h2>John Doe</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Elementum,
                  <br /> elit eu facilisis mauris.
                  <br /> Eu viverra iaculis nulla id euismod at. Viverra amet
                  amet pellent
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Testominal;
