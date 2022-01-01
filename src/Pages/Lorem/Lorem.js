import React from "react";
import { Button, Container } from "react-bootstrap";

const Lorem = () => {
  return (
    <div>
      <Container style={{ backgroundColor: "#E4BFA4" }}>
        <div>
          <h2 className="text-center  pt-4" style={{ marginBottom: "100px" }}>
            “Lorem Ipsum is simply dummy”
          </h2>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an <br />
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
          <div className="text-center">
            <button
              style={{
                height: "68px",
                width: "360px",
                backgroundColor: "#ECE0D1",
                color: "#000",
              }}
            >
              Write your message here
            </button>
          </div>
          <div className="text-center mt-4">
            <button
              style={{
                height: "30px",
                width: "99px",
                backgroundColor: "#FFF8F5",
                color: "#000",
              }}
            >
              Send
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Lorem;
