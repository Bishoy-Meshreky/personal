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
import pic from "../assets/images/Garson.png";
import pic2 from "../assets/images/2B Egypt.png";
import "../assets/scss/App.scss";

const Work = () => {
  return (
    <div className="projects" id="Work">
      <Container>
        <h2 className="mb-4">My Work</h2>
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
                alt="2B Egypt App"
              />
              <CardBody className="rounded-4">
                <CardTitle tag="h5" className="text-pro fw-bold ms-2">
                  2B Egypt
                </CardTitle>
                <CardText tag="h6" className="text-sm-start mt-4 ms-4">
                  An online store for BestBuy (2B), one of the biggest
                  electronics and appliances retails in Egypt.
                </CardText>
                <CardText className="mt-3 mb-2">
                  Project Delivered: December 2022
                </CardText>
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
                alt="Garson App"
              />
              <CardBody className="rounded-4">
                <CardTitle tag="h5" className="text-pro fw-bold ms-2">
                  Garson App
                </CardTitle>
                <CardText tag="h6" className="text-sm-start mt-4 ms-4">
                  I have developed the Garson Web Application for managing
                  restaurant and cafe orders.
                </CardText>
                <CardText className="mt-3 mb-2">
                  Project Delivered: July 2024
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Work;
