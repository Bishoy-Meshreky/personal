import React from "react";
import {
  Card,
  CardBody,
  CardText,
  Col,
  Container,
  Row,
  Progress,
  Label,
} from "reactstrap";
import "../assets/scss/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
import { motion } from "framer-motion";

const About = () => {
  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const cardVariantsUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
    <div className="about" id="ABOUT">
      <Container>
        <Row>
          <Col md="12">
            <Card
              className="rounded-4 hover-card"
              style={{
                borderColor: "#343a40",
                backgroundColor: "rgb(37 37 37 / 70%)",
              }}
            >
              <CardBody>
                <h2 className="gradient-text text-sm-start ms-3 mt-2">
                  About Me
                </h2>
                <div className="d-flex flex-wrap mb-2 mt-4">
                  <div className="flex-grow-1 ms-4 me-4">
                    <CardText tag="h6" className="text-sm-start mb-4">
                      <FontAwesomeIcon icon={faLocationDot} className="me-3" />
                      <Label
                        className="about-colors fw-bold"
                        style={{ marginLeft: "6px" }}
                      >
                        Location
                      </Label>
                      <span
                        style={{ float: "right" }}
                        data-aos="fade-right"
                        data-aos-duration="800"
                      >
                        Dubai, United Arab Emirates
                      </span>
                    </CardText>
                    <CardText tag="h6" className="text-sm-start mb-4">
                      <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                      <Label
                        className="about-colors fw-bold"
                        style={{ marginLeft: "3px" }}
                      >
                        Email
                      </Label>
                      <span
                        style={{ float: "right" }}
                        data-aos="fade-right"
                        data-aos-duration="1000"
                      >
                        meshreky.beshoy@gmail.com
                      </span>
                    </CardText>
                    <CardText tag="h6" className="text-sm-start mb-4">
                      <FontAwesomeIcon icon={faPhone} className="me-3" />
                      <Label
                        className="about-colors fw-bold"
                        style={{ marginLeft: "3px" }}
                      >
                        Phone
                      </Label>
                      <span
                        style={{ float: "right" }}
                        data-aos="fade-right"
                        data-aos-duration="1200"
                      >
                        +20 1271793373
                      </span>
                    </CardText>
                    <CardText tag="h6" className="text-sm-start">
                      <FontAwesomeIcon icon={faLanguage} className="me-3" />
                      <Label className="about-colors fw-bold">Languages</Label>
                      <span
                        style={{ float: "right" }}
                        data-aos="fade-right"
                        data-aos-duration="1400"
                      >
                        Arabic - English
                      </span>
                    </CardText>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md="6">
            <Card
              className="rounded-4 hover-card mt-4"
              style={{
                borderColor: "#343a40",
                backgroundColor: "rgb(37 37 37 / 70%)",
              }}
            >
              <CardBody>
                <CardText
                  tag="h3"
                  className="text-pro text-sm-start fw-bold mb-2 ms-2 mt-3"
                >
                  Summary
                </CardText>
                <div
                  className="mt-4 ms-3 me-4"
                  style={{ marginBottom: "44px" }}
                >
                  <CardText tag="h6" className="text-sm-start mb-4 ms-2">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={cardVariantsUp}
                      viewport={{ once: true }}
                    >
                      I'm a passionate Software Developer with 5 years of
                      experience specializing in front-end development and web
                      applications. I have a strong foundation in HTML, CSS,
                      Sass, and JavaScript, and I am particularly skilled in
                      using modern frameworks like ReactJS and NextJS to create
                      responsive, dynamic user interfaces.
                    </motion.div>
                  </CardText>
                  <CardText tag="h6" className="text-sm-start mb-4 ms-2">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={cardVariantsUp}
                      viewport={{ once: true }}
                    >
                      Throughout my career, I've developed and optimized web
                      applications, always focusing on delivering smooth user
                      experiences and clean, maintainable code. My expertise
                      extends to TypeScript, Bootstrap, and AJAX, allowing me to
                      create interactive, robust solutions.
                    </motion.div>
                  </CardText>
                  <CardText tag="h6" className="text-sm-start mb-4 ms-2">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={cardVariantsUp}
                      viewport={{ once: true }}
                    >
                      In addition to front-end skills, I'm experienced in
                      backend technologies like Node.js and have worked with
                      RESTful APIs, cloud platforms such as Google Cloud,
                      Firebase, and AWS. I thrive in Ubuntu environments,
                      leveraging tools like GitHub to manage code and
                      collaborate effectively.
                    </motion.div>
                  </CardText>
                  <CardText tag="h6" className="text-sm-start ms-2 mb-4">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      variants={cardVariantsUp}
                      viewport={{ once: true }}
                    >
                      I'm driven by a desire to create user-centric solutions,
                      continually improving my skills and embracing new
                      technologies to stay at the forefront of the ever-evolving
                      tech landscape.
                    </motion.div>
                  </CardText>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md="6">
            <Card
              className="mt-4 mb-4 rounded-4 hover-card"
              style={{
                borderColor: "#343a40",
                backgroundColor: "rgb(37 37 37 / 70%)",
              }}
            >
              <CardBody className="mb-4">
                <div>
                  <CardText
                    tag="h3"
                    className="text-pro text-sm-start fw-bold ms-3 mt-3"
                  >
                    Top Skills
                  </CardText>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariantsUp}
                    viewport={{ once: true }}
                  >
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
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariantsUp}
                    viewport={{ once: true }}
                  >
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
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariantsUp}
                    viewport={{ once: true }}
                  >
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
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariantsUp}
                    viewport={{ once: true }}
                  >
                    <h6 className="ms-3 mb-4" style={{ marginTop: "2rem" }}>
                      Frameworks and Tools
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
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariantsUp}
                    viewport={{ once: true }}
                  >
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
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariantsUp}
                    viewport={{ once: true }}
                  >
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
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={cardVariantsUp}
                    viewport={{ once: true }}
                  >
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
                  </motion.div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <CardText tag="h3" className="text-pro text-sm-start fw-bold mt-2">
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
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={cardVariantsLeft}
                viewport={{ once: true }}
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
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default About;
