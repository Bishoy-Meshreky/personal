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
            <Nav navbar>
              {["HOME", "ABOUT", "PROJECTS", "BLOGS", "CONTACT"].map((item) => (
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

// TODO: THESE ARE FOR MULTI PAGES
/* import React, { useState, useEffect } from "react";
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

  return (
    <Row>
      <Col md="12">
        <Navbar
          className={`navbar-custom ${scrolled ? "navbar-scrolled" : ""}`}
          expand="lg"
          fixed="top"
        >
          <NavbarToggler onClick={toggle} />
          <Collapse
            isOpen={isOpen}
            navbar
            className="justify-content-center fw-bold"
          >
            <Nav navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/blogs">Blogs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Col>
    </Row>
  );
};

export default Header; */
