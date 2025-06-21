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
import pic2 from "../assets/images/2BEgypt.png";
import pic5 from "../assets/images/design 4.png";
import pic6 from "../assets/images/Alpha.png";
import "../assets/scss/App.scss";
import { motion } from "framer-motion";

const Projects = () => {
  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="projects" id="Projects">
      <Container>
        <h2 className="mb-4">Projects</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariantsLeft}
          viewport={{ once: true }}
        >
          <Row>
            <Col md="6" className="mb-4">
              <Card className="border-colors rounded-4">
                <CardImg
                  className="rounded-4"
                  top
                  width="100%"
                  src={pic2}
                  alt="Garson App"
                />
                <CardBody className="rounded-4">
                  <CardTitle tag="h5" className="text-pro fw-bold ms-2">
                    Best Buy Egypt
                  </CardTitle>
                  <CardText
                    tag="h6"
                    className="text-sm-start mt-3 ms-4"
                    style={{ marginBottom: "35px" }}
                  ></CardText>
                  <CardText className=" mb-3">
                    <span className="fw-bold">Project Delivered:</span> December
                    2022
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            <Col md="6" className="mb-4">
              <Card className="border-colors rounded-4">
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
                  <CardText
                    tag="h6"
                    className="text-sm-start mt-3 ms-4"
                    style={{ marginBottom: "35px" }}
                  ></CardText>
                  <CardText className="mt-3 mb-2">
                    <span className="fw-bold">Project Delivered:</span> December
                    2024
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            <Col md="6" className="mb-4">
              <Card className="border-colors rounded-4">
                <CardImg
                  className="rounded-4"
                  top
                  width="100%"
                  src={pic5}
                  alt="Design"
                />
                <CardBody className="rounded-4">
                  <CardTitle tag="h5" className="text-pro fw-bold ms-2">
                    U.R.S Adminto
                  </CardTitle>
                  <CardText
                    tag="h6"
                    className="text-sm-center mt-3 ms-4"
                    style={{ marginBottom: "36px" }}
                  ></CardText>
                  <CardText className="mt-3 mb-2">
                    <span className="fw-bold">Project Delivered:</span> April
                    2025
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md="6" className="mb-4">
              <Card className="border-colors rounded-4">
                <CardImg
                  className="rounded-4"
                  top
                  width="100%"
                  src={pic6}
                  alt="Design"
                />
                <CardBody className="rounded-4">
                  <CardTitle tag="h5" className="text-pro fw-bold ms-2">
                    Alpha Fashion
                  </CardTitle>
                  <CardText
                    tag="h6"
                    className="text-sm-center mt-3 ms-4"
                    style={{ marginBottom: "36px" }}
                  ></CardText>
                  <CardText className="mt-3 mb-2">
                    <span className="fw-bold">Project Delivered:</span> June
                    2025
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default Projects;
