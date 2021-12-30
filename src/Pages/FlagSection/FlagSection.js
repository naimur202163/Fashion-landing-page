import React from "react";
import { Container } from "react-bootstrap";
import "./FlagSection.css";
import flagImg from "../../Images/Rectangle 146.png";
const FlagSection = () => {
  return (
    <div className="my-5">
      <Container>
        <div style={{ backgroundColor: "#EDDCCB", height: "319px" }}>
          <div className="flex-containerr">
            <div className="text">
              <h3>Start</h3>
            </div>
            <div className="box-items"></div>
            <div className="box-items"></div>
            <div className="box-items"></div>
            <div>
              <img src={flagImg} alt="" />{" "}
            </div>
            <div className="box-items"></div>
            <div className="box-items"></div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FlagSection;
