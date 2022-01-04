import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <div>
      <Container className="my-2" style={{ backgroundColor: "#545454" }}>
        <Row>
          <Col lg={4}>
            <h3 style={{ color: "#fff" }} className="text-center">
              Logo
            </h3>
            <div>
              <p style={{ color: "#A4A4A4" }} className="ms-4 mt-5">
                Lorem Ipsum is simply dummy
                <br /> text of the printing and typesetting industry.
                <br /> Lorem Ipsum has been the
                <br /> industry's standard dummy text{" "}
              </p>
            </div>
          </Col>
          <Col lg={2}>
            <h3 className="text-center" style={{ color: "#fff" }}>
              Fashioo
            </h3>
            <div className="text-lg-left">
              <h4 style={{ color: "#A4A4A4" }}>About</h4>
              <h4 style={{ color: "#A4A4A4" }}>Terms of use</h4>
              <h4 style={{ color: "#A4A4A4" }}>Privacy policy</h4>
              <h4 style={{ color: "#A4A4A4" }}>Contact Us</h4>
            </div>
          </Col>
          <Col lg={2}>
            <h3 className="text-center" style={{ color: "#fff" }}>
              Support
            </h3>
            <div style={{ marginTop: "30px" }}>
              <h4 style={{ color: "#A4A4A4" }}>Support center</h4>
              <h4 style={{ color: "#A4A4A4" }}>Quick Chat</h4>
            </div>
          </Col>
          <Col lg={4}>
            <p
              style={{
                color: "#fff",
                marginTop: "30px",
                color: "#919191",
                fontSize: "1.5rem",
              }}
              className="text-center "
            >
              Lorem Ipsum is simply dummy
            </p>
            <div class="mb-3">
              <input
                style={{ width: "80%", marginLeft: "2.6rem" }}
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Enter Your Email"
              />
            </div>
            {/* Social Icon */}
            <div>
              <i style={{ width: "1re" }} class="fab fa-linkedin"></i>
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-twitter-square"></i>
              <i class="fab fa-instagram-square"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
