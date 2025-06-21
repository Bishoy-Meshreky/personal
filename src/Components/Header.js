import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import "../assets/scss/App.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (hash) => {
    setActiveLink(hash);
  };

  return (
    <Row>
      <Col md="12">
        <Navbar
          className={`navbar-custom ${scrolled ? "navbar-scrolled" : ""}`}
          expand="lg"
          fixed="top"
        >
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar className="justify-content-center">
            <Nav className="fw-bold" navbar>
              {["About", "Projects", "Blogs", "Contact"].map((item) => (
                <NavItem key={item}>
                  <NavLink
                    href={`#${item}`}
                    className={activeLink === `#${item}` ? "active" : ""}
                    onClick={() => handleNavLinkClick(`${item}`)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      </Col>
    </Row>
  );
};

export default Header;
