
import styled from 'styled-components';
import { FaGithub, FaInstagram, FaSnapchatGhost, FaGlobe, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  padding: 16px 24px;
  /* Idea 4: Soften edges with a pill shape */
  border-radius: 9999px; 
  /* Idea 3: Cohesive palette - base color */
  background: rgba(255, 255, 255, 0.05); 
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  font-size: clamp(1rem, 4vw, 1.1rem);
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-4px);
    /* Idea 3: Cohesive palette - accent color on hover (vibrant purple) */
    background: #8b5cf6; 
    box-shadow: 0 10px 20px rgba(139, 92, 246, 0.4);
    border-color: #8b5cf6;
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

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'github':
      return <FaGithub />;
    case 'instagram':
      return <FaInstagram />;
    case 'snapchat':
      return <FaSnapchatGhost />;
    case 'linkedin':
      return <FaLinkedin />;
    case 'twitter':
      return <FaTwitter />;
    case 'youtube':
      return <FaYoutube />;
    case 'globe':
      return <FaGlobe />;
    default:
      return <FaGlobe />;
  }
};

interface LinkItemProps {
  title: string;
  url: string;
  icon: string;
}

const LinkItem = ({ title, url, icon }: LinkItemProps) => {
  return (
    <StyledLink href={url} target="_blank" rel="noopener noreferrer">
      <IconWrapper>{getIcon(icon)}</IconWrapper>
      <Title>{title}</Title>
    </StyledLink>
  );
};

export default LinkItem;
