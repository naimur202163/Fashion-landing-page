import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./PercentBanner.css";
import vactor1 from "../../Images/Vector 1.png";
import vactor2 from "../../Images/Vector 2.png";
const PercentBanner = () => {
  return (
    <div className="my-5">
      <Container>
        <div width="100%">
          <div className="box">
            <Row>
              <Col lg={8}>
                <div style={{ display: "flex" }}>
                  <h2
                    style={{
                      color: "#474747",
                      marginTop: "2.3rem",
                      fontWeight: "bold",
                      fontSize: "3.5rem",
                      marginLeft: "1rem",
                    }}
                  >
                    Black Friday
                    <br /> Sale Upto
                  </h2>
                  <h1
                    style={{
                      color: "#474747",
                      marginTop: "3.5rem",
                      marginLeft: "4rem",
                      fontWeight: "bold",
                      fontSize: "6rem",
                    }}
                  >
                    60%
                  </h1>
                </div>
              </Col>
              <Col lg={4}>
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "6rem",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#ADABAB",
                      height: "68px",
                      width: "320px",
                      border: "0px",
                      marginRight: "3rem",
                    }}
                  >
                    <h2> Grab Now !!</h2>
                  </button>
                </div>
              </Col>
            </Row>
          </div>
          {/* Percentise */}
          <div style={{ height: "auto" }} className="bg-img">
            <div className="flex-container">
              <div className="itmes">
                {" "}
                <img src={vactor1} alt="" />
              </div>
              <div></div>
              <div>
                {" "}
                <img src={vactor2} alt="" />
              </div>
            </div>
          </div>
          {/* f */}
        </div>
      </Container>
    </div>
  );
};

export default PercentBanner;
