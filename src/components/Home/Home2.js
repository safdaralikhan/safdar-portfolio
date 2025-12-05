import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg"; // Ensure this path points to your avatar
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi! I am a <b className="purple">Frontend Developer</b> passionate about building 
              <b className="purple"> modern, fast, and responsive web applications</b> that 
              provide seamless user experiences.
              <br />
              <br />
              I specialize in
              <i>
                <b className="purple"> React.js, Next.js, and Vite.js</b>
              </i>
              , creating
              <b className="purple"> component-based architectures</b> and integrating 
              <b className="purple"> APIs</b> efficiently.
              <br />
              <br />
              My interests lie in
              <b className="purple"> UI/UX Design</b>, 
              <b className="purple"> Performance Optimization</b>, and 
              <b className="purple"> Modern Web Technologies</b>.
              <br />
              <br />
              I love turning ideas into polished, production-ready web applications 
              using <b className="purple">clean code, modern frameworks,</b> and a keen eye for detail.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/safdaralikhan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/safdar-ali-khan/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/asadm7315/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://wa.me/+923461121064"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  style={{ color: "white" }}
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
