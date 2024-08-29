import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button, CardText, Container } from "reactstrap";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start" style={{ color: "white" }}>
      {/* Social Media Section */}
      <Container
        fluid
        className="pt-4"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(24 25 28)",
        }}
      >
        <div className="mb-4">
          <Button
            href="https://www.linkedin.com/in/bishoymeshreky/"
            className="btn btn-link btn-floating btn-lg text-light m-1 rounded-5"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Button>

          <Button
            href="https://wa.me/+201271793373?text=Please%20leave%20your%20message%20along%20with%20your%20name,%20company%20name,%20and%20email%20address.%20Thank%20you!"
            className="btn btn-link btn-floating btn-lg text-light m-1 rounded-5"
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </Button>

          <Button
            href="https://medium.com/@beshoymeshreky2013"
            className="btn btn-link btn-floating btn-lg text-light m-1 rounded-5"
            target="_blank"
          >
            <FontAwesomeIcon icon={faMedium} />
          </Button>

          <Button
            href="mailto:meshreky.beshoy@gmail.com"
            className="btn btn-link btn-floating btn-lg text-light m-1 rounded-5"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </Button>
        </div>
      </Container>

      {/* Copyright Section */} 
      <div className="text-center p-3" style={{ backgroundColor: "rgb(24 25 28)" }}> 
        &copy; {new Date().getFullYear()} Copyright
        <CardText className="text-light ms-2">
          Developed by Bishoy Meshreky
        </CardText>
      </div>
    </footer>
  );
};

export default Footer;
