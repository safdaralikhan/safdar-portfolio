import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Safdar Ali Khan</span>
            from <span className="purple">Karachi, Pakistan.</span>
            <br />
            I am currently working as a <b className="purple">Frontend Developer</b> at HNH Soft Tech Solutions in Karachi.
            <br />
            I graduated with a <b className="purple">Bachelor of Science in Computer Science</b> from <b className="purple">Federal Urdu University</b>.
            <br />
            <br />
            Apart from my professional work, I am passionate about:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building modern and responsive web applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Working with React.js, Next.js, and Vite
            </li>
            <li className="about-activity">
              <ImPointRight /> Creating pixel-perfect UI/UX designs
            </li>
            <li className="about-activity">
              <ImPointRight /> Integrating APIs for dynamic and real-time data
            </li>
            <li className="about-activity">
              <ImPointRight /> Handling dynamic data efficiently for scalable apps
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I am passionate about building fast, elegant, and user-friendly web interfaces, integrating APIs seamlessly, and handling dynamic data efficiently for scalable applications."
          </p>
          <footer className="blockquote-footer">Safdar Ali Khan</footer>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
