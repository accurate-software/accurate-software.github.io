import React from 'react';
import { Container, Logo, Text, LoginContainer } from './styles';
import gitHubLogo from '../../assets/github.svg';

import { useAuth } from '../../hooks/auth';

const Header: React.FC = () => {
  const { singOut } = useAuth();
  return (
    <Container>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Text>GitHub Repository</Text>
        <Logo src={gitHubLogo} />
      </div>
      <LoginContainer>
        <span onClick={() => singOut()} style={{ cursor: 'pointer' }}>
          SignOut
        </span>
        <span>Isaac Maciel de Araújo Neto</span>
      </LoginContainer>
    </Container>
  );
};

export default Header;
