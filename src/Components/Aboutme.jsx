import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Resume from './Resume';

const AboutCon = styled(Container)`
  background-color: #F1F0F0;
  text-align: center;
`;

const About = styled.h1`
  margin-top: 40px;
  margin-bottom: 30px;
  font-weight: bold;
  color: #015761;
`;

const AboutPara = styled.p`
  text-align: center;
  padding: 20px 20%;
`;

const AboutButton = styled(Button)`
  margin-bottom: 40px;
  background-color: #F7DC4F;
  border: none;
  border-radius: 0px;
  color: #015761;
  font-size: 16px;
  &:hover {
    background-color: #015761;
    color: #F7DC4F;
  }
`;

const Aboutme = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <AboutCon fluid id="aboutme">
        <Row>
          <Col>
            <About>About Me</About>
            <AboutPara>
              As a passionate MERN stack developer, I am driven by a relentless pursuit of excellence in web development, constantly seeking new challenges and opportunities to expand my skill set and knowledge. With expertise in front-end and back-end technologies, I take pride in crafting seamless and engaging digital experiences that not only meet but exceed user expectations, delivering cutting-edge solutions that stand out in the competitive digital landscape. My portfolio showcases a collection of projects that reflect my commitment to innovation, problem-solving, and creating impactful solutions that resonate with users, ensuring that every line of code contributes to a dynamic and user-centric online experience.
            </AboutPara>
            <AboutPara>
              In addition to my technical skills, I thrive in collaborative environments, leveraging my communication and teamwork abilities to contribute effectively to any project, fostering an environment of creativity and cooperation. Continuously seeking growth and staying up-to-date with the latest industry trends, I am dedicated to making a positive and meaningful impact in the ever-evolving world of web development. My passion for learning drives me to explore emerging technologies and best practices, keeping me at the forefront of the fast-paced tech industry. Beyond coding, I also find joy in mentoring and sharing knowledge with aspiring developers, empowering them to reach their full potential.
            </AboutPara>
            <AboutButton onClick={handleShow}>View Full Resume</AboutButton>
            <Offcanvas show={show} onHide={handleClose} style={{ width: '100vw', backgroundColor: '#015761' }}>
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Resume />
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
        </Row>
      </AboutCon>
    </>
  );
};

export default Aboutme;
