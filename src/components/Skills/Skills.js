import "../Skills/Skills.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loader from "../Loader/Loader";

export default function Skills() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const skills = [
    { name: "Next.js", value: 90 },
    { name: "React.js", value: 95 },
    { name: "JavaScript (ES6+)", value: 95 },
    { name: "TypeScript", value: 90 },
    { name: "CSS / Tailwind / Bootstrap / Sass", value: 95 },
    { name: "MaterialUI", value: 90 },
    { name: "Redux / Zustand", value: 90 },
    { name: "APIs / Performance / SEO", value: 95 },
    { name: "Figma", value: 90 },
  ];

  return (
    <section className="skills-section" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skills-box">
            <div className="d-flex flex-column align-items-center">
              <h1 className="title">Technical Skills</h1>
              <p className="sup-title">
                My website highlights a range of skills tailored for the digital
                landscape
              </p>
            </div>

              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2200}
                arrows={false}
                showDots={true}
                className="skills-slider"
              >
                {skills.map((skill, i) => (
                  <div className="skill-card" key={i}>
                    <h5>{skill.name}</h5>
                    <Loader target={skill.value} />
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
