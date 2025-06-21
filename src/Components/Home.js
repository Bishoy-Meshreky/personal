import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  Row,
  Container,
  CardText,
  Card,
  CardImg,
  CardFooter,
  Col,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWhatsapp,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import img from "../assets/images/B.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="Home">
      <Container fluid>
        <Row>
          <header className="App-header">
            <Card className="angle-card rounded-5">
              <div className="glitch-image">
                <CardImg
                  src={img}
                  alt="Image"
                  style={{
                    height: "100%",
                    width: "100%",
                    borderTopLeftRadius: "30px",
                    borderTopRightRadius: "30px",
                  }}
                />
              </div>

              <div className="blury-card position-absolute top-50 start-50 translate-middle text-center">
                <CardText tag="h1" className="mt-3" data-aos="zoom-in">
                  Bishoy Meshreky
                </CardText>
                <div>
                  <div>
                    <CardText tag="h3" style={{ color: "#25d366" }}>
                      <TypeAnimation
                        sequence={[
                          1000,
                          "Frontend Developer",
                          2000,
                          "Web Developer",
                          2000,
                          "Full Stack Developer",
                          1000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                      />
                    </CardText>
                  </div>
                </div>

                <div className="d-flex flex-wrap justify-content-center">
                  <Link
                    to="https://github.com/Bishoy-Meshreky"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 move-icon"
                    style={{ fontSize: "25px" }}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                  <Link
                    to="https://wa.me/+971508124475?text=Please%20leave%20your%20message%20along%20with%20Your%20Name,%20Your%20Company%20Name,%20and%20Your%20Email%20Address.%20Thank%20you!"
                    target="_blank"
                    className="rounded-5 btn-sm fw-bold mt-4 ms-4 move-icon"
                    rel="noopener noreferrer"
                    style={{ fontSize: "25px" }}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </Link>
                  <Link
                    to="https://medium.com/@beshoymeshreky2013"
                    target="_blank"
                    className="rounded-5 btn-sm fw-bold mt-4 ms-3 move-icon"
                    rel="noopener noreferrer"
                    style={{ fontSize: "25px" }}
                  >
                    <FontAwesomeIcon icon={faMedium} />
                  </Link>
                  <a
                    href="mailto:meshreky.beshoy@gmail.com"
                    className="rounded-5 btn-sm fw-bold mt-4 ms-4 move-icon"
                    rel="noopener noreferrer"
                    style={{ fontSize: "25px" }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </div>
              </div>

              <CardFooter
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "nowrap",
                  alignItems: "center",
                  margin: "93px 0px 13px",
                }}
              >
                <Col md="6" className="fw-bold">
                  <Link
                    to="https://s3.me-central-1.amazonaws.com/www.bishoymeshreky.com/Bishoy-Meshreky-CV.pdf"
                    download="Bishoy Meshreky CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="style-btn"
                  >
                    DOWNLOAD CV <FontAwesomeIcon icon={faDownload} />
                  </Link>
                </Col>

                <Col md="6" className="fw-bold">
                  <a href={`#CONTACT`} className="style-btn">
                    CONTACT ME <FontAwesomeIcon icon={faPhone} />
                  </a>
                </Col>
              </CardFooter>
            </Card>
          </header>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
