import React from "react";
import git from '../../Assets/git.png'
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <img 
        src={git} 
        alt="Coding Days" 
        style={{ width: "200%", maxWidth: "1000px" }}
      />
      {/* <GitHubCalendar
        username="12yu43"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      /> */}
    </Row>
  );
}

export default Github;
