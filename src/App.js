import React, { useEffect } from "react";
import "./assets/scss/App.scss";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import { Row, Col, Card, CardBody, Container } from "reactstrap";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <React.StrictMode>
      <div className="App">
        <Container fluid>
          <Header />
          <Row>
            <Col>
              <Home />
            </Col>

            <Col md="8">
              <Card
                className="rounded-5 card-scroll"
                style={{
                  borderColor: "#343a40",
                  backgroundColor: "rgb(37 37 37 / 70%)",
                  height: "43rem",
                  overflowY: "auto",
                }}
              >
                <CardBody>
                  <About />
                  <Projects />
                  <Blogs />
                  <Contact />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.StrictMode>
  );
}

export default App;
