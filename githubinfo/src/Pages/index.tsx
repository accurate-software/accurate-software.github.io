import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import ModalRepository from '../components/ModalRepository';

const Index: React.FC = () => (
  <>
    <Header />
    <Button>Adicionar Repositório</Button>
    <ModalRepository />
  </>
);

export default Index;
