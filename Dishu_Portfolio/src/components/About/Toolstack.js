import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiVisualstudiocode, 
  SiRedux, 
  SiJira, 
  SiSonarqube, 
  SiGithub 
} from "react-icons/si"; 
import { FaProjectDiagram } from "react-icons/fa"; 


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* VS Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux /> {/* Redux */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira /> {/* Jira */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaProjectDiagram /> {/* Agile Methodology */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarqube /> {/* SonarQube */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> {/* GitHub */}
      </Col>
    </Row>
  );
}

export default Toolstack;
