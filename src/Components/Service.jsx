// ServicePage.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  background-color: #f7dc4f;
  text-align: center;
  margin-bottom: 40px;
  z-index: 1;
`;

const CardImage = styled(Card.Img)`
  height: 300px; 
  object-fit: cover; 
`;

const ServicePage = () => {
  return (
    <Container id="service" fluid style={{backgroundColor:'#015761'}}>
    <Container>
      <h1 className="text-center pt-5 pb-5" style={{color:'#f7dc4f'}}>Our Services</h1>
      <Row>
        <Col md={4}>
          <StyledCard>
            <CardImage variant="top" src="./Photos/vuln.jpg" />
            <Card.Body>
              <Card.Title>Vulnerability Assessment & Penetration Testing</Card.Title>
              <Card.Text>
             With expertise in vulnerability assessment and penetration testing, I help organizations identify and mitigate security risks. Using advanced tools and techniques, I conduct thorough assessments to uncover potential vulnerabilities in networks, systems, and applications, ensuring robust defense against cyber threats.
              </Card.Text>
            </Card.Body>
          </StyledCard>
        </Col>
        <Col md={4}>
          <StyledCard>
            <CardImage variant="top" src="./Photos/network.png" />
            <Card.Body>
              <Card.Title>Network Security & Exploitation Techniques</Card.Title>
              <Card.Text>
              I specialize in network security, offering services that include the design and implementation of secure network architectures. Additionally, I apply exploitation techniques and conduct comprehensive security assessments to evaluate and strengthen the resilience of IT infrastructures against attacks.
              </Card.Text>
            </Card.Body>
          </StyledCard>
        </Col>
        <Col md={4}>
          <StyledCard>
            <CardImage variant="top" src="./Photos/python.png" />
            <Card.Body>
              <Card.Title>Python Scripting & Frontend Development</Card.Title>
              <Card.Text>
              Leveraging my skills in Python scripting and automation, I streamline processes, enhance security measures, and improve efficiency in various tasks. I also provide frontend development services, using HTML, CSS, and JavaScript to create responsive and user-friendly web designs that meet modern standards.
              </Card.Text>
            </Card.Body>
          </StyledCard>
        </Col>
      </Row>
    </Container>
    </Container>
  );
};

export default ServicePage;
