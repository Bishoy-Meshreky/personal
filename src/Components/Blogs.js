import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import pic from "../assets/images/react-hooks.jpg";
import pic1 from "../assets/images/cicd4.jpg";
import pic2 from "../assets/images/REST-API-and-RESTful-API.jpg";

const Blogs = () => {
  return (
    <div className="blogs" id="Blogs">
      <Container>
        <h2 className="section-title mb-4" >
          Blogs on
          <span className="ms-2 fw-bold" style={{ color: "#B79A5D" }}>
            Medium
          </span>
        </h2>
        <Row >
          <Col md="6" className="mb-4">
            <Card
              data-aos="zoom-in"
              className="rounded-4"
              style={{ borderColor: "#B79A5D", backgroundColor: "#252525" }}
            >
              <CardImg
                className="rounded-4"
                top
                width="100%"
                src={pic2}
                alt=""
              />
              <CardBody className="rounded-4">
                <CardTitle tag="h5" className="fw-bold mb-4">
                  REST API vs RESTful
                </CardTitle>
                <CardText>Published Date: August 2024</CardText>
                <div>
                  <Button
                    className="rounded-5 fw-bold"
                    style={{
                      backgroundColor: "#B79A5D",
                      borderColor: "#B79A5D",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "nowrap",
                      justifyContent: "center",
                    }}
                    target="_blank"
                    href="https://medium.com/@beshoymeshreky2013/rest-api-vs-restful-api-whats-the-difference-b5a6500368bb"
                  >
                    Read
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md="6" className="mb-4" >
            <Card
              data-aos="zoom-in"
              className="rounded-4"
              style={{ borderColor: "#B79A5D", backgroundColor: "#252525" }}
            >
              <CardImg
                className="rounded-4"
                top
                width="100%"
                src={pic1}
                alt=""
              />
              <CardBody className="rounded-4">
                <CardTitle tag="h5" className="fw-bold mb-4">
                  What is a (CI/CD) Pipeline?
                </CardTitle>
                <CardText>Published Date: August 2024</CardText>
                <div>
                  <Button
                    className="rounded-5 fw-bold"
                    style={{
                      backgroundColor: "#B79A5D",
                      borderColor: "#B79A5D",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "nowrap",
                      justifyContent: "center",
                    }}
                    target="_blank"
                    href="https://medium.com/@beshoymeshreky2013/what-is-a-ci-cd-pipeline-71a6bdf6781d"
                  >
                    Read
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col md="6">
            <Card
              data-aos="zoom-in"
              className="rounded-4"
              style={{ borderColor: "#B79A5D", backgroundColor: "#252525" }}
            >
              <CardImg
                className="rounded-4"
                top
                width="100%"
                src={pic}
                alt="2B Egypt App"
              />
              <CardBody className="rounded-4">
                <CardTitle tag="h5" className="fw-bold mb-4">
                  What are React Hooks?
                </CardTitle>
                <CardText>Published Date: August 2024</CardText>
                <div>
                  <Button
                    className="rounded-5 fw-bold"
                    style={{
                      backgroundColor: "#B79A5D",
                      borderColor: "#B79A5D",
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "nowrap",
                      justifyContent: "center",
                    }}
                    target="_blank"
                    href="https://medium.com/@beshoymeshreky2013/what-are-react-hooks-for-beginners-d223afe26817"
                  >
                    Read
                  </Button>
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
