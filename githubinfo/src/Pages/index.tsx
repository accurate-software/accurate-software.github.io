import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import ModalRepository from '../components/ModalRepository';
import Content from '../components/Content';

const Index: React.FC = () => (
  <>
    <Header />
    <Button>Adicionar Repositório</Button>
    <ModalRepository />
    <Content />
  </>
);

export default Index;
