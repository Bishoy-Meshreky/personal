/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Row, Col, Container, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import img from "../assets/images/IMG_2.png";

const Home = () => {
  return (
    <div className="home">
      <Container fluid>
        <Row>
          <Col md="6" className="mb-5">
            <header className="App-header mt-5">
              <div style={{ marginTop: "8rem" }}>
                <div
                  tag="h1"
                  style={{ fontSize: "3rem", color: "#B79A5D" }}
                  data-aos="fade-down"
                >
                  Hello
                </div>
                <div data-aos="fade-up">
                  <h1 className="fw-bold" style={{ fontSize: "4rem" }}>
                    I'm Bishoy Meshreky
                  </h1>
                  <h1>
                    <TypeAnimation
                      style={{ color: "#B79A5D" }}
                      sequence={[
                        "Software Developer",
                        2000,
                        "Web Developer",
                        2000,
                        "Frontend Developer",
                        2000,
                        "Full Stack Developer",
                        2000,
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                    />
                  </h1>
                </div>
              </div>
            </header>
          </Col>

          <Col md="6">
            <div className="glitch-image">
              <img
                className="rounded-5 mb-5"
                src={img}
                alt="Image"
                style={{
                  height: "25rem",
                  width: "25rem",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              className="d-flex flex-wrap"
              style={{
                float: "right",
                marginRight: "6rem",
              }}
            >
              <div
                data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-offset="200"
                data-aos-duration="200"
              >
                <Button
                  href="https://www.linkedin.com/in/bishoymeshreky/"
                  target="_blank"
                  className="rounded-5 btn-md fw-bold mt-4 ms-3"
                  style={{
                    backgroundColor: "#B79A5D",
                    borderColor: "#B79A5D",
                  }}
                >
                  <FontAwesomeIcon icon={faLinkedin} /> Linkedin
                </Button>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-offset="400"
                data-aos-duration="400"
              >
                <Button
                  href="https://wa.me/+201271793373?text=Please%20leave%20your%20message%20along%20with%20your%20name,%20company%20name,%20and%20email%20address.%20Thank%20you!"
                  target="_blank"
                  className="rounded-5 btn-md fw-bold mt-4 ms-3"
                  style={{
                    backgroundColor: "#B79A5D",
                    borderColor: "#B79A5D",
                  }}
                >
                  <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
                </Button>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-offset="600"
                data-aos-duration="600"
              >
                <Button
                  href="https://medium.com/@beshoymeshreky2013"
                  target="_blank"
                  className="rounded-5 btn-md fw-bold mt-4 ms-3"
                  style={{
                    backgroundColor: "#B79A5D",
                    borderColor: "#B79A5D",
                  }}
                >
                  <FontAwesomeIcon icon={faMedium} /> Medium
                </Button>
              </div>
              <div
                data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-offset="800"
                data-aos-duration="800"
              >
                <Button
                  href="https://s3.me-central-1.amazonaws.com/www.bishoymeshreky.com/Bishoy-Meshreky-CV.pdf"
                  download="Bishoy Meshreky CV.pdf"
                  target="_blank"
                  className="rounded-5 btn-md fw-bold ms-3 mt-4"
                  style={{
                    backgroundColor: "#B79A5D",
                    borderColor: "#B79A5D",
                  }}
                >
                  <FontAwesomeIcon icon={faDownload} /> Download CV
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
