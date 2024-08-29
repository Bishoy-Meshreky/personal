/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { CardText, Container } from "reactstrap";

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
        <section className="mb-4">
          <a
            href="https://www.linkedin.com/in/bishoymeshreky/"
            className="btn btn-link btn-floating btn-lg text-light m-1"
            role="button"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://wa.me/+201271793373?text=Please%20leave%20your%20message%20along%20with%20your%20name,%20company%20name,%20and%20email%20address.%20Thank%20you!"
            className="btn btn-link btn-floating btn-lg text-light m-1"
            role="button"
            target="_blank"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>

          <a
            href="https://medium.com/@beshoymeshreky2013"
            className="btn btn-link btn-floating btn-lg text-light m-1"
            role="button"
            target="_blank"
          >
            <FontAwesomeIcon icon={faMedium} />
          </a>

          <a
            href="mailto:meshreky.beshoy@gmail.com"
            className="btn btn-link btn-floating btn-lg text-light m-1"
            role="button"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </section>
      </Container>

      {/* Copyright Section // #191c1f*/} 
      <div className="text-center p-3" style={{ backgroundColor: "#191c1f" }}> 
        &copy; {new Date().getFullYear()} Copyright
        <CardText className="text-light ms-2">
          Developed by Bishoy Meshreky
        </CardText>
      </div>
    </footer>
  );
};

export default Footer;
