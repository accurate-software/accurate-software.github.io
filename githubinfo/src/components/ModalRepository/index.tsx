import React, { useState } from 'react';
import Modal from 'react-modal';
import { Title, Button, Body, Footer, Input } from './styles';

import { useGitHubRepository } from '../../hooks/githubRepository';
import { useDataApi } from '../../hooks/dataApi';

const ModalRepository: React.FC = () => {
  const [repository, setRepository] = useState('');
  const { modalIsOpen, setModalIsOpen } = useGitHubRepository();
  const { getRepository, data } = useDataApi();

  const closeModal = () => {
    console.log('Close Modal foi chamado');
    setRepository('');
    setModalIsOpen(false);
  };
  console.log(modalIsOpen);

  const sendRepository = (repository: string) => {
    getRepository(repository);
    closeModal();
  };

  Modal.setAppElement('#root');
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
    <Modal isOpen={modalIsOpen} style={styles} contentLabel="Example Modal">
      <Title>GitHub Repository</Title>
      <Body>
        <Input
          onChange={(e) => setRepository(e.target.value)}
          value={repository}
          placeholder="Informe o repositório do github"
          type="text"
        />
        <Footer>
          <Button color={'#95a5a6'} onClick={closeModal}>
            Cancelar
          </Button>
          <Button color={'#0984e3'} onClick={(e) => sendRepository(repository)}>
            Enviar
          </Button>
        </Footer>
      </Body>
    </Modal>
  );
};

export default ModalRepository;
