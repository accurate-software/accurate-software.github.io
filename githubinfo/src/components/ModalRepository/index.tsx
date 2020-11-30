import React from 'react';
import Modal from 'react-modal';
import { Title, Button, Body, Footer, Input } from './styles';

import { useGitHubRepository } from '../../hooks/githubRepository';

const ModalRepository: React.FC = () => {
  const { modalIsOpen, setModalIsOpen } = useGitHubRepository();
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const styles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={(e) => setModalIsOpen(false)}
      style={styles}
      contentLabel="Example Modal"
    >
      <Title>GitHub Repository</Title>
      <Body>
        <Input placeholder="Informe o repositório do github" type="text" />
        <Footer>
          <Button color={'#95a5a6'} onClick={closeModal}>
            Cancelar
          </Button>
          <Button color={'#0984e3'} onClick={closeModal}>
            Enviar
          </Button>
        </Footer>
      </Body>
    </Modal>
  );
};

export default ModalRepository;
