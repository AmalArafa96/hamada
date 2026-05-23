import "../Navbar/Navbar.css";
import React, { useEffect, useState, useRef } from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

export default function NavbarComponent() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setHidden(true);
        setExpanded(false); // close menu when scrolling down
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (value) => {
    setActiveLink(value);
    setExpanded(false); // close menu on link click
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={(val) => setExpanded(val)}
      className={`custom-navbar ${scrolled ? "scrolled" : ""} ${
        hidden ? "hidden" : ""
      }`}
    >
      <Container>
        <Navbar.Brand href="#home" className="name" onClick={() => handleLinkClick("home")}>
          <span>A</span>mal <span>A</span>rafa
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-nav"
          aria-label="Toggle navigation"
        />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link
              href="#home"
              onClick={() => handleLinkClick("home")}
              className={activeLink === "home" ? "active" : ""}
            >
              Home
            </Nav.Link>

            <Nav.Link
              href="#skills"
              onClick={() => handleLinkClick("skills")}
              className={activeLink === "skills" ? "active" : ""}
            >
              Skills
            </Nav.Link>

            <Nav.Link
              href="#Certificates"
              onClick={() => handleLinkClick("Certificates")}
              className={activeLink === "Certificates" ? "active" : ""}
            >
              Certificates
            </Nav.Link>

            <Nav.Link
              href="#projects"
              onClick={() => handleLinkClick("projects")}
              className={activeLink === "projects" ? "active" : ""}
            >
              Projects
            </Nav.Link>

            <Nav.Link
              href="#Contact"
              onClick={() => handleLinkClick("Contact")}
              className={activeLink === "Contact" ? "active" : ""}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
