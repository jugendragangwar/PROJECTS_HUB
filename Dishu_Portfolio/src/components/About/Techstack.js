import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiGithubBadge } from "react-icons/di";
import { SiHtml5, SiCss3, SiTypescript, SiPostman, SiJira } from "react-icons/si"; // Use relevant icons from 'react-icons'

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> {/* React.js */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 /> {/* HTML */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 /> {/* CSS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {/* JavaScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript /> {/* TypeScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge /> {/* GitHub */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> {/* Postman */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira /> {/* Jira */}
      </Col>
    </Row>
  );
}

export default Techstack;
