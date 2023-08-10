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
            <CardImage variant="top" src="./Photos/webdesign.jpeg" />
            <Card.Body>
              <Card.Title>Web Design</Card.Title>
              <Card.Text>
              As a web designer, I specialize in creating visually appealing and user-friendly websites. Using cutting-edge design principles, color schemes, and layout techniques, I craft captivating user experiences that align with your brand and vision.
              </Card.Text>
            </Card.Body>
          </StyledCard>
        </Col>
        <Col md={4}>
          <StyledCard>
            <CardImage variant="top" src="./Photos/react.png" />
            <Card.Body>
              <Card.Title>Frontend Developer</Card.Title>
              <Card.Text>
              As a frontend developer, I transform web designs into fully functional and responsive user interfaces. My expertise in HTML, CSS, and JavaScript ensures seamless interactions and optimized user experiences across various devices and platforms.
              </Card.Text>
            </Card.Body>
          </StyledCard>
        </Col>
        <Col md={4}>
          <StyledCard>
            <CardImage variant="top" src="./Photos/nodejs.jpg" />
            <Card.Body>
              <Card.Title>Backend Developer</Card.Title>
              <Card.Text>
              As a backend developer, I focus on building robust server-side infrastructure, databases, and APIs. With proficiency in programming languages like javascript,Express.js, or Node.js, I ensure secure and scalable web applications that handle data processing and user authentication seamlessly.
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
