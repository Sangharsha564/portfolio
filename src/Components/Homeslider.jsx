import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../Components/Navbar";
import Stack from "react-bootstrap/esm/Stack";
import styled, { css } from "styled-components";
import SocialMediaIcons from "../Components/Icons";
import Image from "react-bootstrap/Image";



const StyledLeftCol = styled(Col)`
    background-color: #015761;
  `;
  const colStyle = {
    margin: 0, // Remove margin
    padding: 0, // Remove padding
  };
  const Textcolor = styled.h1`
    color: white;
    font-size: 100px;
    ${(props) =>
      props.$small &&
      css`
        @media (max-width: 364px) {
          font-size: 24px !important;
        }
        @media (max-width: 457px) {
          font-size: 28px !important;
        }
        @media (max-width: 576px) {
          font-size: 68px;
        }
        @media (max-width: 1223px) {
          font-size: 70px;
        }
      `}
  `;

  const Pcolor = styled.p`
    color: white;
  `;

  const Texts = styled.div`
    margin: auto;
    margin-top: 63px;
    margin-bottom: 240px;
  `;

  const IconManager = styled.div`
    position: absolute;
    position: fixed;
    bottom: 40%; /* Add a unit (e.g., px) for the 'bottom' property */
    right: 0;
    z-index: 1;
  `;

const Homeslider = () => {
  
  return (
    <div>
      <Container fluid>
        <Row >
          <StyledLeftCol sm={12} xs={12} md={6}>
            <Stack>
              <Navbar />
              <Texts>
                <Textcolor $small>
                  <span style={{ color: "#F7DC4F", fontSize: "48px" }}>
                    Hey, I'am
                  </span>
                  <br />
                  Sangharsha <br /> Thapa
                </Textcolor>
                <Pcolor>Cybersecurity Analyst</Pcolor>
              </Texts>
            </Stack>
          </StyledLeftCol>
          <Col sm={12} xs={12} md={6} style={colStyle}>
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image
                src="./Photos/me3.jpg"
                alt="Image"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <IconManager>
        <SocialMediaIcons />
      </IconManager>
    </div>
  );
};

export default Homeslider;
