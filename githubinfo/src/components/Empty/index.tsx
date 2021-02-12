import React from 'react';
import { Container, Image, Message } from './styles';
import emptyBox from '../../assets/emptyBox.svg';

const Empty: React.FC = () => (
  <Container>
    <Image src={emptyBox} />
    <Message>
      Nenhum repositório cadastrado. Para cadastrar clique no botão acima e
      coloque o seu User/Repositorio do Github
    </Message>
  </Container>
);

export default Empty;
