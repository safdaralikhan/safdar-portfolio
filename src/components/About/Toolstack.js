import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiFigma,
  // SiTailwindcss,
  SiVercel,
  SiGit,
  SiNetlify,
  SiCpanel
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* VS Code */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>

      {/* GitHub */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" />
      </Col>

      {/* Figma */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma title="Figma" />
      </Col>

    

      {/* Vercel */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel title="Vercel" />
      </Col>

      {/* Git / Git CLI */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGit title="Git / Git CLI" />
      </Col>

      {/* Netlify */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify title="Netlify" />
      </Col>

      {/* cPanel */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCpanel title="cPanel" />
      </Col>
    </Row>
  );
}

export default Toolstack;
