import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";
import pic from "../assets/images/react-hooks.jpg";
import pic1 from "../assets/images/cicd.jpg";
import pic2 from "../assets/images/REST-API-and-RESTful-API.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Blogs = () => {
  return (
    <div className="blogs" id="BLOGS">
      <Container>
        <h2 className="mb-4">Blogs on Medium</h2>

        <Row>
          <Col md="6" className="mb-4">
            <Card
              className="rounded-4 hover-card"
              style={{
                borderColor: "#343a40",
                backgroundColor: "rgb(37 37 37 / 70%)",
              }}
            >
              <CardImg
                className="rounded-4"
                top
                width="100%"
                src={pic2}
                alt=""
              />
              <CardBody className="rounded-4">
                <CardTitle tag="h5" className="text-pro fw-bold mb-4">
                  REST API vs RESTful
                </CardTitle>
                <CardText>
                  <span className="fw-bold">Published Date:</span> August 2024
                </CardText>
                <div>
                  <a
                    className="fw-bold style-btn2"
                    target="_blank"
                    href="https://medium.com/@beshoymeshreky2013/rest-api-vs-restful-api-whats-the-difference-b5a6500368bb"
                    rel="noopener noreferrer"
                  >
                    READ ME
                    <FontAwesomeIcon
                      className="ms-2"
                      icon={faArrowUpRightFromSquare}
                    />
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md="6" className="mb-4">
            <Card
              className="rounded-4 hover-card"
              style={{
                borderColor: "#343a40",
                backgroundColor: "rgb(37 37 37 / 70%)",
              }}
            >
              <CardImg
                className="rounded-4"
                top
                width="100%"
                src={pic1}
                alt=""
              />
              <CardBody className="rounded-4">
                <CardTitle tag="h5" className="text-pro fw-bold mb-4">
                  What is a (CI/CD) Pipeline?
                </CardTitle>
                <CardText>
                  <span className="fw-bold">Published Date:</span> August 2024
                </CardText>
                <div>
                  <a
                    className="fw-bold style-btn2"
                    target="_blank"
                    href="https://medium.com/@beshoymeshreky2013/what-is-a-ci-cd-pipeline-71a6bdf6781d"
                    rel="noopener noreferrer"
                  >
                    READ ME
                    <FontAwesomeIcon
                      className="ms-2"
                      icon={faArrowUpRightFromSquare}
                    />
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md="6">
            <Card
              className="rounded-4 hover-card"
              style={{
                borderColor: "#343a40",
                backgroundColor: "rgb(37 37 37 / 70%)",
              }}
            >
              <CardImg
                className="rounded-4"
                top
                width="100%"
                src={pic}
                alt="2B Egypt App"
              />
              <CardBody className="rounded-4">
                <CardTitle tag="h5" className="text-pro fw-bold mb-4">
                  What are React Hooks?
                </CardTitle>
                <CardText>
                  <span className="fw-bold">Published Date:</span> August 2024
                </CardText>
                <div>
                  <a
                    className="fw-bold style-btn2"
                    target="_blank"
                    href="https://medium.com/@beshoymeshreky2013/what-are-react-hooks-for-beginners-d223afe26817"
                    rel="noopener noreferrer"
                  >
                    READ ME
                    <FontAwesomeIcon
                      className="ms-2"
                      icon={faArrowUpRightFromSquare}
                    />
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blogs;
