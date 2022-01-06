import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";
const OurStyle = () => {
  return (
    <div>
      <Container>
        <div style={{ marginLeft: "2rem" }}>
          <Row>
            <Col lg={6}>
              <h2>OUR STYLE AND STUDIOS</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </Col>
          </Row>
        </div>
        {/*  Bar */}
        <div>
          <div>
            <Row>
              <Col lg={6}>
                <div
                  style={{
                    backgroundColor: "#E4BFA4",
                    height: "44px",
                    borderRadius: ".7rem",
                  }}
                >
                  <Row>
                    <Col>
                      <div
                        style={{
                          boxShadow: "3px 3px 3px gray",
                          height: "42px",
                          borderRadius: "0.7rem",
                        }}
                      >
                        <h5 className="p-1">Papadon</h5>
                      </div>
                    </Col>
                    <Col>
                      <h5 className="p-1"> LABEL 2</h5>
                    </Col>
                    <Col>
                      <h5 className="p-1"> LABEL 3</h5>
                    </Col>
                    <Col>
                      <h5 className="p-1"> LABEL 4</h5>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        {/* Part-2 */}
        <div className="my-3">
          <Row>
            <Col>
              <div className="bg-img1"> </div>
            </Col>
            <Col>
              <div className="bg-img2"></div>
            </Col>
            <Col>
              <div className="bg-img3"></div>
            </Col>
            <Col>
              <div className="bg-img4"></div>
            </Col>
            <Col>
              <div className="bg-img5"></div>
            </Col>
            <Col>
              <div className="bg-img6"></div>
            </Col>
            <Col>
              <div className="bg-img7"></div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default OurStyle;
