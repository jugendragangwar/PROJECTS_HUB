import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a frontend developer at Kurmato Company, specializing in building dynamic and responsive web applications using React.js. 🤷‍♂️
              <br />
              <br />With expertise in 
              <i>
                <b className="purple"> JavaScript, HTML, and CSS, React js </b>
              </i>
              <br />
              <br />
              I create modern, user-friendly interfaces that enhance user experiences.&nbsp;
              <i>
                <b className="purple"> I'm passionate about leveraging new web technologies, </b> solving complex problems, and writing clean,{" "}
                <b className="purple">
                maintainable code.
                </b>
              </i>
              <br />
              <br />
              I thrive on continuous learning, collaborating ,
               <b className="purple">with</b> teams
              <i>
                <b className="purple">
                  {" "}
                  and delivering high-quality 
                </b>
              </i>
              &nbsp; products that exceed
              <i>
                <b className="purple"> expectations.</b>
              </i>
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
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/12yu43"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
        
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/deeksha-awasthi-4b6433203/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/deeksha_awasthi_a?igsh=MTYxZ2s2ZHN6ajd3aA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
