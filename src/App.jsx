import React from 'react'
import { useSelector } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import LinkItem from './components/LinkItem'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: 100vh;
  animation: ${fadeIn} 0.8s ease-out;
`;



const ProfileName = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
`;

const Bio = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 32px;
  text-align: center;
`;

const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

function App() {
  const { profile, links } = useSelector((state) => state.linksState)

  return (
    <Container>
      <ProfileName>{profile.name}</ProfileName>
      <Bio>{profile.bio}</Bio>
      
      <LinksContainer>
        {links.map((link) => (
          <LinkItem 
            key={link.id}
            title={link.title}
            url={link.url}
            icon={link.icon}
          />
        ))}
      </LinksContainer>
    </Container>
  )
}

export default App
