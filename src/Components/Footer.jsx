import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const StyledFooter = styled.footer`
  background-color: #015761;
  color: #F7DC4F;
  padding: 20px 0;
`;

const FooterContent = styled.div`
  text-align: center;
`;

const FooterLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProfileIcon = styled.div`
  font-size: 40px;
  margin-bottom: 10px;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  font-size: 18px;
  margin-bottom: 5px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <FooterContent>
              <ProfileIcon>
                <FontAwesomeIcon icon={faUser} />
              </ProfileIcon>
              <FooterLogo>Sangharsha Thapa</FooterLogo>
            </FooterContent>
          </Col>
          <Col xs={12} md={4}>
            <FooterContent>
              <h4>Note</h4>
              <SkillList>
                <SkillItem>Security is a journey, not a destination</SkillItem>
                <SkillItem> Keep moving forward and stay one step ahead</SkillItem>
              </SkillList>
            </FooterContent>
          </Col>
          <Col xs={12} md={4}>
            <FooterContent>
              <h4>Contact</h4>
              <p>Email: sobitmagar76@gmail.com</p>
              <p>Phone: +977 9861526363</p>
              <p>Address: Thankot, Kathmandu, Nepal</p>
            </FooterContent>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
