import React, { useEffect } from "react";
import "./assets/scss/App.scss";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
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
          <Row>
            <Col>
              <Home />
            </Col>
            
            <Col md="8">
              <Card
                className="rounded-5 card-scroll"
                style={{
                  borderColor: "#343a40",
                  backgroundColor: "#25252580",
                  height: "42.5rem",
                  overflowY: "auto",
                }}
              >
                <CardBody>
                  <About />
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
