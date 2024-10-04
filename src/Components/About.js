import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
  Progress,
  Label,
} from "reactstrap";
import "../assets/scss/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faEnvelope,
  faPhone,
  faLocationDot,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faSass,
  faJs,
  faBootstrap,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import nextJs from "../assets/images/nextjs-icon-svgrepo-com.svg";
import reduxJs from "../assets/images/redux-svgrepo-com.svg";
import typeScript from "../assets/images/typescript-icon-svgrepo-com.svg";
import jest from "../assets/images/jest-snapshot-svgrepo-com.svg";
import fireStore from "../assets/images/Primary_Vertical_Lockup_Full_Color.svg";
import googleCloud from "../assets/images/google-cloud-svgrepo-com.svg";

const About = () => {
  const technologies = [
    { icon: faReact, color: "#61DBFB" },
    { icon: nextJs, color: "#000000", isCustom: true },
    { icon: faNodeJs, color: "#68A063" },
    { icon: faJs, color: "#ffc107" },
    { icon: typeScript, color: "#000000", isCustom: true },
    { icon: faHtml5, color: "#e34c26" },
    { icon: faCss3Alt, color: "#264de4" },
    { icon: faSass, color: "#CC6699" },
    { icon: faBootstrap, color: "#712cf9" },
    { icon: reduxJs, color: "#000000", isCustom: true },
    { icon: jest, color: "#000000", isCustom: true },
    { icon: fireStore, color: "#000000", isCustom: true },
    { icon: googleCloud, color: "#000000", isCustom: true },
    { icon: faAws, color: "#252F3E" },
  ];

  return (
    <div className="about" id="About">
      <Container>
        <Row>
          <Col md="5">
            <Card
              className="rounded-4 hover-card"
              style={{
                borderColor: "#343a40",
                backgroundColor: "rgb(37 37 37 / 70%)",
              }}
            >
              <CardBody>
                <div className="d-flex flex-wrap pt-2">
                  <h2 className="gradient-text">About Me</h2>
                  <div className="flex-grow-1 mb-3">
                    <CardText tag="h6" className="text-sm-start mt-2 mb-3">
                      <FontAwesomeIcon icon={faLocationDot} className="me-3" />
                      <Label
                        className="about-colors"
                        style={{ marginLeft: "6px" }}
                      >
                        Location
                      </Label>
                      <span style={{ float: "right" }}>
                        Dubai, United Arab Emirates
                      </span>
                    </CardText>
                    <CardText tag="h6" className="text-sm-start mb-3">
                      <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                      <Label
                        className="about-colors"
                        style={{ marginLeft: "3px" }}
                      >
                        Email
                      </Label>
                      <span style={{ float: "right" }}>
                        meshreky.beshoy@gmail.com
                      </span>
                    </CardText>
                    <CardText tag="h6" className="text-sm-start mb-3">
                      <FontAwesomeIcon icon={faPhone} className="me-3" />
                      <Label
                        className="about-colors"
                        style={{ marginLeft: "3px" }}
                      >
                        Phone
                      </Label>
                      <span style={{ float: "right" }}>+20 1271793373</span>
                    </CardText>
                    <CardText tag="h6" className="text-sm-start mb-3">
                      <FontAwesomeIcon icon={faLanguage} className="me-3" />
                      <Label className="about-colors">Languages</Label>
                      <span style={{ float: "right" }}>Arabic - English</span>
                    </CardText>
                    <CardText tag="h6" className="text-sm-start">
                      <FontAwesomeIcon icon={faIdCard} className="me-3" />
                      <Label
                        className="about-colors"
                        style={{ marginLeft: "1px" }}
                      >
                        Nationality
                      </Label>
                      <span style={{ float: "right" }}>Egyptian</span>
                    </CardText>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md="7">
            <Card
              className="rounded-4 hover-card"
              style={{
                borderColor: "#343a40",
                backgroundColor: "rgb(37 37 37 / 70%)",
              }}
            >
              <CardBody>
                <h4 className="fw-bold mb-2 ms-2 mt-2">Summary</h4>
                <div className="mb-3 mt-2 ms-3 me-4">
                  <CardText tag="h6" className="text-sm-start mb-3 ms-2 me-2">
                    Experienced Software Developer with 5 years of experience,
                    proficient in HTML, CSS, SCSS, React.js, Redux, Jest,
                    JavaScript, TypeScript, Bootstrap, and AJAX.
                  </CardText>
                  <CardText tag="h6" className="text-sm-start mb-3 ms-2 me-2">
                    Successfully created web applications, improving page load
                    times by 60% and boosting user engagement by 70%.
                  </CardText>
                  <CardText tag="h6" className="text-sm-start mb-3 ms-2 me-4">
                    Skilled in implementing efficient development practices in
                    Ubuntu/Linux environments and proficient in tools like
                    GitHub, RESTful APIs, Node.js, Cloud Firestore Firebase,
                    Google Cloud Platform, and Amazon Web Services.
                  </CardText>
                  <CardText tag="h6" className="text-sm-start ms-2 me-2">
                    Dedicated to developing user-centric solutions, writing
                    clean code, and driving innovation.
                  </CardText>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md="12">
            <Card
              className="mt-4 mb-4 rounded-4 hover-card"
              style={{
                borderColor: "#343a40",
                backgroundColor: "rgb(37 37 37 / 70%)",
              }}
            >
              <CardBody className="mb-4">
                <div>
                  <CardTitle tag="h4" className="fw-bold ms-3 mt-3">
                    Top Skills
                  </CardTitle>

                  <h6 className="ms-3 mb-4" style={{ marginTop: "2rem" }}>
                    Programming Languages
                    <span style={{ float: "right" }} className="me-3">
                      90%
                    </span>
                  </h6>
                  <Progress
                    className="mb-4 ms-3 me-3"
                    style={{ height: "5px" }}
                    value={90}
                    min={1}
                    max={100}
                  />

                  <h6 className="ms-3 mb-4" style={{ marginTop: "2rem" }}>
                    Problem-Solving and Algorithms
                    <span style={{ float: "right" }} className="me-3">
                      85%
                    </span>
                  </h6>
                  <Progress
                    className="mb-4 ms-3 me-3"
                    style={{ height: "5px" }}
                    value={85}
                    min={1}
                    max={100}
                  />

                  <h6 className="ms-3 mb-4" style={{ marginTop: "2rem" }}>
                    Frontend and Backend Development
                    <span style={{ float: "right" }} className="me-3">
                      85%
                    </span>
                  </h6>
                  <Progress
                    className="mb-4 ms-3 me-3"
                    style={{ height: "5px" }}
                    value={85}
                    min={1}
                    max={100}
                  />

                  <h6 className="ms-3 mb-4" style={{ marginTop: "2rem" }}>
                    Software Development Frameworks and Tools
                    <span style={{ float: "right" }} className="me-3">
                      90%
                    </span>
                  </h6>
                  <Progress
                    className="mb-4 ms-3 me-3"
                    style={{ height: "5px" }}
                    value={90}
                    min={1}
                    max={100}
                  />

                  <h6 className="ms-3 mb-4" style={{ marginTop: "2rem" }}>
                    Database Management
                    <span style={{ float: "right" }} className="me-3">
                      85%
                    </span>
                  </h6>
                  <Progress
                    className="mb-4 ms-3 me-3"
                    style={{ height: "5px" }}
                    value={85}
                    min={1}
                    max={100}
                  />

                  <h6 className="ms-3 mb-4" style={{ marginTop: "2rem" }}>
                    APIs and Cloud Services
                    <span style={{ float: "right" }} className="me-3">
                      80%
                    </span>
                  </h6>
                  <Progress
                    className="mb-4 ms-3 me-3"
                    style={{ height: "5px" }}
                    value={80}
                    min={1}
                    max={100}
                  />

                  <h6 className="ms-3 mb-4" style={{ marginTop: "1.8rem" }}>
                    Version Control Systems
                    <span style={{ float: "right" }} className="me-3">
                      85%
                    </span>
                  </h6>
                  <Progress
                    className="ms-3 me-3"
                    style={{ height: "5px" }}
                    value={85}
                    min={1}
                    max={100}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>

          <CardText tag="h4" className="fw-bold mt-2">
            Technologies
          </CardText>
          {technologies.map((tech, index) => (
            <Col
              sm="3"
              md="2"
              key={index}
              style={{ width: "10rem" }}
              className="ms-4"
            >
              <Card className="mb-4 mt-4 text-center rounded-4 technology-card">
                <CardBody>
                  {tech.isCustom ? (
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      style={{ width: "60px", height: "65px" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={tech.icon}
                      size="4x"
                      color={tech.color}
                    />
                  )}
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default About;
