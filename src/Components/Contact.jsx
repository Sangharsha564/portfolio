import React from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const ContactHeading = styled.h1`
  color: #f7dc4f;
  padding-bottom: 40px;
`;

const FirstContainer = styled(Container)`
  background-image: url("./Photos/touch.jpg");
  background-size: cover;
  background-position: center;
  background-attachment:fixed;
  padding-top: 60px;
  padding-bottom: 60px;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #015761;
  align-items: center;
  position: relative;
  top: -100px;
  margin-bottom: 20px;
  color: #f7dc4f;
  padding: 40px 40px 60px 40px;
`;

const IconWrapper = styled.div`
  font-size: x-large;
  margin: 20px;
  height: 70px;
  width: 70px;
  text-align: center;
  padding-top: 17px;
  border-radius: 50%;
  background-color: #f7dc4f;
  color: #015761;
`;
const ContactBox=styled.div`
  display: flex;
  flex-direction:column;
  text-align: center;
`;
const ContactText = styled.p`
  font-size: 18px;
`;

const Contact = () => {
  return (
    <>
      <FirstContainer fluid id="contact">
        <Container>
          <Row>
            <Col sm={12} md={5}>
        <ContactHeading>Get In Touch</ContactHeading>
              <h5 style={{color:'#f7dc4f', padding:'40px 0px 100px 0px'}}>Have a question or need assistance? I'm here to help! Here's how you can reach us...</h5>
            </Col>
            
          </Row>
        </Container>
      </FirstContainer>
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <ContactItem>
              <IconWrapper>
                <FontAwesomeIcon icon={faPhone} />
              </IconWrapper>
              <ContactBox>

              <ContactText>Talk to Me</ContactText>
              <ContactText>Feel free to reach out to me through the contact information for any inquiries or collaboration opportunities.</ContactText>
              <hr />
              <ContactText>+977 9861526363</ContactText>

              </ContactBox>
            </ContactItem>
          </Col>
          <Col sm={12} md={4}>
            <ContactItem>
              <IconWrapper>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </IconWrapper>
              <ContactBox>
                    <ContactText>My Location</ContactText>
                    <ContactText>Connect with me through my location for collaboration and face-to-face discussions.</ContactText>
                    <hr />
                    <ContactText>Thankot, Kathmandu, Nepal</ContactText>

              </ContactBox>
            </ContactItem>
          </Col>
          <Col sm={12} md={4}>
            <ContactItem>
              <IconWrapper>
                <FontAwesomeIcon icon={faEnvelope} />
              </IconWrapper>
              <ContactBox>
              <ContactText>Text Me</ContactText>
              <ContactText>Text me anytime for quick and efficient communication for any inquiries, I'm just a message away.</ContactText>
              <hr />
              <ContactText>sobitmagar76@gmail.com</ContactText>

              </ContactBox>
            </ContactItem>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
