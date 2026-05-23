import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "../Footer/Footer.css";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="footer ">
      <Container>
      <Row className="text-center gy-5 align-items-start">
          {/* About */}
          <Col md={4} className="d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="d-flex flex-column align-items-center">
              <h4 className="name">Amal.</h4>
              <p className="sup-title">
                Frontend Developer passionate about building modern, fast, and
                responsive web applications using React.
              </p>
              </div>
            </motion.div>
          </Col>

          {/* service */}
          <Col md={4} className="d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h5 className="">Services</h5>
              <ul className="footer-service d-flex flex-column align-items-center">
                <li>UI/UX Design</li>
                <li>Web Development</li>
                <li>Responsive Design</li>
                <li>Performance</li>
              </ul>
            </motion.div>
          </Col>

          {/* Contact */}
          <Col md={4} className="d-flex justify-content-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h5 className="">Contact</h5>
              <p className="sup-title">
                <FaEnvelope /> eng.amal.arafa@gmail.com
              </p>

              <div className="social-icons my-4">
                <a
                  href="https://github.com/AmalArafa96"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/amal-arafa-92amyoka/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://wa.me/201069934970"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.facebook.com/anaGody"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="facebook"
                >
                  <FaFacebook />
                </a>
               
                <a href="mailto:eng.amal.arafa@gmail.com" aria-label="email">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* Bottom */}
        <Row className="footer-bottom">
          <Col md={5}>
            <p>© {new Date().getFullYear()} Amal. All rights reserved.</p>
          </Col>

          <Col md={5} className="text-center text-md-end">
            <button className="top-btn" onClick={scrollToTop}>
              <FaArrowUp />
            </button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
