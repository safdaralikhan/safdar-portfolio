import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiGit,
} from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiReact  // using React icon as placeholder for Shadcn
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs title="Next.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVite title="Vite" />
      </Col>

      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript (ES6+)" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript title="TypeScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 title="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 title="CSS3" />
      </Col>

      {/* CSS Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss title="Tailwind CSS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap title="Bootstrap" />
      </Col>

      {/* State Management */}
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux title="Redux" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Zustand / Context API (Git icon placeholder)" />
      </Col>

      {/* Shadcn/UI */}
      <Col xs={4} md={2} className="tech-icons">
        <SiReact title="Shadcn/UI (React-based UI library)" />
      </Col>
    </Row>
  );
}

export default Techstack;
