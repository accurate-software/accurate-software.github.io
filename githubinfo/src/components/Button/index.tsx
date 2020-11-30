import React from 'react';
import { Container, ButtonRepository } from './styles';
import { useGitHubRepository } from '../../hooks/githubRepository';

const Button: React.FC = () => {
  const { setModalIsOpen } = useGitHubRepository();
  const openModal = () => {
    setModalIsOpen(true);
  };
  return (
    <Container>
      <ButtonRepository onClick={(e) => openModal()}>
        Cadastrar Repositório
      </ButtonRepository>
    </Container>
  );
};

export default Button;
