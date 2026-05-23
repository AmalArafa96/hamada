// import Particles from "react-tsparticles";
import "../Banner/Banner.css";

import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import headerImg from "../../assets/img/amal-pic.png"

export default function Banner() {
  const [showAlert, setShowAlert] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(250);

  const toRotate = ["Web Developer", "Frontend Developer"];
  //   const period = 1800;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  });

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(100);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
      setDelta(250);
    }
  };

  const handleContact = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000);
  };

  return (
    <section className="banner py-5" id="home">
      <Container>  
        <Row className="align-items-center py-5">
          {/* LEFT */}
          <Col xs={12} md={6}>
            <span className="tagline mt-5 p-3">Welcome to my Portfolio</span>
            <h1 className=" py-3">
              Hi! I'm Amal <span className="wrap">{text}</span>
            </h1>
            <p className="sup-title py-2">
              Front-End Developer spicialist in React and Next, focused on
              building fast, responsive, and user-friendly web applications.
            </p>
           
            <div className="social-icons my-5">
                <a
                  href="https://github.com/AmalArafa96"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="github"
                >
                  <i className="fa-brands fa-github"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/amal-arafa-92amyoka/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="linkedin"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                   href="https://wa.me/201069934970"
                   target="_blank"
                   rel="noreferrer"
                   aria-label="whatsapp"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a
                    href="https://www.facebook.com/anaGody"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="facebook"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
               

                <a href="mailto:eng.amal.arafa@gmail.com" aria-label="email">
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </div>

              <div className="hero-buttons">
             <button className="hero-btn">
              <a
                href="/My.Cv/Amal-Arafa-FlowCV-Resume.pdf"
                download
                className="text-decoration-none"
              >
                Download CV <i className="fa-solid fa-download"></i>
              </a>
              </button>
              <button className="hero-btn" onClick={handleContact}>
                Let's Connect <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </Col>

          {/* RIGHT */}
          <Col xs={12} md={6} className="text-center">
            <div className="hero-img-wrapper">
              <img src={headerImg} alt="Amal Arafa - Frontend Developer" className="hero-img" />
            </div>
          </Col>
        </Row>
       
      </Container>

      {/* CUSTOM TOAST */}
      <div className={`toast-box ${showAlert ? "show" : ""}`}>
        <h4>📞 My Contact</h4>
        <p>+20 1069934970</p>
        <p>📧 eng.amal.arafa@gmail.com</p>
      </div>
    </section>
  );
}
