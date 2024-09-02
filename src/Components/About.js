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
} from "reactstrap";
import "../assets/scss/App.scss";
import pic from "../assets/images/Beshoy.jpeg";

const About = () => {
  return (
    <div className="about" id="About">
      <Container>
        <h2 className="section-title mb-4" data-aos="zoom-in">
          About<span className="ms-2 fw-bold" style={{ color: "#B79A5D" }}>Me</span>
        </h2>
        
        <Row>
          <Col md="6" data-aos="fade-right">
            <Card
              className="rounded-4"
              style={{ borderColor: "#B79A5D", backgroundColor: "#252525" }}
            >
              <CardBody>
                <div className="d-flex flex-wrap pt-2">
                  <img
                    className="d-flex me-4 ms-3 mb-3 rounded-4 avatar-md"
                    src={pic}
                    alt=""
                    style={{
                      height: "10rem",
                      width: "10rem",
                      objectFit: "cover",
                    }}
                  />
                  <div className="flex-grow-1">
                    <CardText
                      tag="h6"
                      className="fw-bold text-sm-start mt-2 mb-4"
                    >
                      Name:
                      <span className="fw-normal ms-2">Bishoy Meshreky</span>
                    </CardText>
                    <CardText tag="h6" className="fw-bold text-sm-start mb-4">
                      Phone:
                      <span className="fw-normal ms-2">+20 1271793373</span>
                    </CardText>
                    <CardText tag="h6" className="fw-bold text-sm-start mb-4">
                      Email:
                      <span className="fw-normal ms-2">
                        meshreky.beshoy@gmail.com
                      </span>
                    </CardText>
                    <CardText tag="h6" className="fw-bold text-sm-start mb-2">
                      Nationality:
                      <span className="fw-normal ms-2">Egyptian</span>
                    </CardText>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card
              data-aos="fade-right"
              className="mt-4 mb-4 rounded-4"
              style={{ borderColor: "#B79A5D", backgroundColor: "#252525" }}
            >
              <CardBody style={{ marginBottom: "12px" }}>
                <h4 className="fw-bold mb-4 ms-2 mt-3">Summary</h4>
                <div className="mb-4 mt-2 ms-3 me-4">
                  <CardText tag="h6" className="text-sm-start mb-4 ms-2 me-2">
                    Experienced Software Developer with 5 years of experience,
                    proficient in HTML, HTML5, CSS, CSS3, SCSS, Bootstrap,
                    JavaScript, TypeScript, React.js, Redux, and AJAX.
                  </CardText>
                  <CardText tag="h6" className="text-sm-start mb-4 ms-2 me-2">
                    Successfully created web applications, improving page load
                    times by 60% and boosting user engagement by 70%.
                  </CardText>
                  <CardText tag="h6" className="text-sm-start mb-4 ms-2 me-4">
                    Skilled in implementing efficient development practices in
                    Ubuntu/Linux environments and proficient in tools like
                    GitHub, RESTful API, Node.js, Cloud Firestore Firebase,
                    Google Cloud Platform (GCP), and Amazon Web Services (AWS).
                  </CardText>
                  <CardText tag="h6" className="text-sm-start ms-2 me-2">
                    Dedicated to developing user-centric solutions, writing
                    clean code, and driving innovation.
                  </CardText>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md="6">
            <Card
              data-aos="fade-up"
              className="rounded-4"
              style={{ borderColor: "#B79A5D", backgroundColor: "#252525" }}
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
                    min={0}
                    max={100}
                  />

                  <h6 className="ms-3 mb-4" style={{ marginTop: "2rem" }}>
                    Software Development Frameworks and Tools
                    <span style={{ float: "right" }} className="me-3">
                      75%
                    </span>
                  </h6>
                  <Progress
                    className="mb-4 ms-3 me-3"
                    style={{ height: "5px" }}
                    value={75}
                    min={0}
                    max={100}
                  />

                  <h6 className="ms-3 mb-4" style={{ marginTop: "2rem" }}>
                    Database Management
                    <span style={{ float: "right" }} className="me-3">
                      70%
                    </span>
                  </h6>
                  <Progress
                    className="mb-4 ms-3 me-3"
                    style={{ height: "5px" }}
                    value={70}
                    min={0}
                    max={100}
                  />

                  <h6 className="ms-3 mb-4" style={{ marginTop: "2rem" }}>
                    APIs and Cloud Services
                    <span style={{ float: "right" }} className="me-3">
                      65%
                    </span>
                  </h6>
                  <Progress
                    className="mb-4 ms-3 me-3"
                    style={{ height: "5px" }}
                    value={65}
                    min={0}
                    max={100}
                  />

                  <h6 className="ms-3 mb-4" style={{ marginTop: "2rem" }}>
                    Version Control Systems
                    <span style={{ float: "right" }} className="me-3">
                      75%
                    </span>
                  </h6>
                  <Progress
                    className="ms-3 me-3"
                    style={{ height: "5px" }}
                    value={75}
                    min={0}
                    max={100}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
