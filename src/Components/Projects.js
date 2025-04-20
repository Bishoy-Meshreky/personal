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
import "../assets/scss/App.scss";
import { motion } from "framer-motion";

const Work = () => {
  const cardVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="projects" id="PROJECTS">
      <Container>
        <h2 className="mb-4">My Work</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariantsLeft}>
          <Row>
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
                    style={{ marginBottom: "41px" }}
                  >
                    I have developed the Garson Web Application for managing
                    restaurant and cafe orders.
                  </CardText>
                  <CardText className="mt-3 mb-2">
                    <span className="fw-bold">Project Delivered:</span> December
                    2024
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

export default Work;
