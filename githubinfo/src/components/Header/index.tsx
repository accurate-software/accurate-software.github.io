import React from 'react';
import { Container, Logo, Text } from './styles';
import gitHubLogo from '../../assets/github.svg';

const Header: React.FC = () => (
  <Container>
    <Text>GitHub Repository</Text>
    <Logo src={gitHubLogo} />
  </Container>
);

export default Header;
