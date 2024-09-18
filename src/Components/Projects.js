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
        <h2 className="section-title mb-4 ">
          My
          <span className="ms-2 fw-bold" style={{ color: "#B79A5D" }}>
            Work
          </span>
        </h2>
        <Row>
          {/* 2B APP */}
          <Col md="6" className="mb-4" data-aos="fade-right">
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
                <CardTitle tag="h5" className="fw-bold ms-2">
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
          {/* Garson App */}
          <Col md="6" data-aos="fade-right">
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
                <CardTitle tag="h5" className="fw-bold ms-2">
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
