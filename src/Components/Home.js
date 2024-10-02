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
  faLinkedin,
  faWhatsapp,
  faMedium,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import img from "../assets/images/IMG.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="Home">
      <Container fluid>
        <Row>
          <header className="App-header">
            <Card
              className="rounded-5 mb-3"
              style={{
                borderColor: "#343a40",
                backgroundColor: "rgb(37 37 37 / 70%)",
                transform: "skewY(4deg)",
                transformOrigin: "center",
                width: "108%",
                height: "100.5%",
                marginTop: "-10px",
              }}
            >
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

              <div
                className="position-absolute top-50 start-50 translate-middle text-center"
                style={{
                  width: "100%",
                  paddingBottom: "7%",
                  color: "#fff",
                  marginTop: "8.5rem",
                  borderColor: "#343a40",
                  backgroundColor: "rgb(37 37 37 / 7%)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <CardText
                  tag="h1"
                  className="fw-bold mt-3"
                  style={{ color: "#B79A5D" }}
                >
                  Bishoy Meshreky
                </CardText>
                <div>
                  <div>
                    <CardText tag="h3" className="fw-bold">
                      <TypeAnimation
                        sequence={[
                          "Software Developer",
                          2000,
                          "Web Developer",
                          2000,
                          "Frontend Developer",
                          2000,
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
                    to="https://www.linkedin.com/in/bishoymeshreky/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 move-icon"
                    style={{
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                  <Link
                    to="https://wa.me/+201271793373?text=Please%20leave%20your%20message%20along%20with%20your%20name,%20company%20name,%20and%20email%20address.%20Thank%20you!"
                    target="_blank"
                    className="rounded-5 btn-sm fw-bold mt-3 ms-4 move-icon"
                    rel="noopener noreferrer"
                    style={{
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </Link>
                  <Link
                    to="https://medium.com/@beshoymeshreky2013"
                    target="_blank"
                    className="rounded-5 btn-sm fw-bold mt-3 ms-4 move-icon"
                    rel="noopener noreferrer"
                    style={{
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    <FontAwesomeIcon icon={faMedium} />
                  </Link>
                  <Link
                    to="https://github.com/Bishoy-Meshreky"
                    target="_blank"
                    className="rounded-5 btn-sm fw-bold mt-3 ms-4 move-icon"
                    rel="noopener noreferrer"
                    style={{
                      color: "white",
                      fontSize: "25px",
                    }}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                  <a
                    href="mailto:meshreky.beshoy@gmail.com"
                    className="rounded-5 btn-sm fw-bold mt-3 ms-4 move-icon"
                    rel="noopener noreferrer"
                    style={{
                      color: "white",
                      fontSize: "25px",
                    }}
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
                  marginTop: "100px",
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
                    Download CV <FontAwesomeIcon icon={faDownload} />
                  </Link>
                </Col>

                <Col md="6" className="fw-bold">
                  <a href={`#Contact`} className="style-btn">
                    Contact Me <FontAwesomeIcon icon={faPhone} />
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
