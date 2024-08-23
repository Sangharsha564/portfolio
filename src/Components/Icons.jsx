import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 50px;
  background-color: #f7dc4f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  padding: 10px;
`;

const SocialMediaIcons = () => {
  return (
    <StyledContainer>
      <IconContainer>
        <IconWrapper>
          <a href="https://www.facebook.com/sobitmagar76/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
        </IconWrapper>
        <IconWrapper>
          <a style={{color:'red'}} href="https://www.instagram.com/sobit_thapa76/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </IconWrapper>
        <IconWrapper>
          <a style={{color:'red'}} href="https://www.youtube.com/channel/UC23vXdDFJYN7J2EhqBZTgeg" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
        </IconWrapper>
        <IconWrapper>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </IconWrapper>
      </IconContainer>
    </StyledContainer>
  );
};

export default SocialMediaIcons;
