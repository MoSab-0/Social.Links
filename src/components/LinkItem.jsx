import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaInstagram, FaSnapchatGhost, FaGlobe } from 'react-icons/fa';

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  padding: 16px 24px;
  margin-bottom: 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 24px;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`;

const Title = styled.span`
  text-align: center;
  width: 100%;
`;

const getIcon = (iconName) => {
  switch (iconName) {
    case 'github':
      return <FaGithub />;
    case 'instagram':
      return <FaInstagram />;
    case 'snapchat':
      return <FaSnapchatGhost />;
    case 'globe':
      return <FaGlobe />;
    default:
      return <FaGlobe />;
  }
};

const LinkItem = ({ title, url, icon }) => {
  return (
    <StyledLink href={url} target="_blank" rel="noopener noreferrer">
      <IconWrapper>{getIcon(icon)}</IconWrapper>
      <Title>{title}</Title>
    </StyledLink>
  );
};

export default LinkItem;
