import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Title, Button, Body, Footer, Input, Error } from './styles';

import { useGitHubRepository } from '../../hooks/githubRepository';
import { useDataApi } from '../../hooks/dataApi';

const ModalRepository: React.FC = () => {
  const [repository, setRepository] = useState('');
  const { modalIsOpen, setModalIsOpen } = useGitHubRepository();
  const { getRepository, error, data } = useDataApi();

  const closeModal = () => {
    setRepository('');
    setModalIsOpen(false);
  };

  const sendRepository = (repository: string) => {
    getRepository(repository);
  };

  useEffect(() => {
    if (error.status) {
      return;
    }
    closeModal();
  }, [data, error]);

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
        <Error>{error.message}</Error>
        <Footer>
          <Button color={'#95a5a6'} onClick={closeModal}>
            Cancelar
          </Button>
          <Button
            color={'#0984e3'}
            disabled={repository == '' ? true : false}
            onClick={(e) => sendRepository(repository)}
          >
            Enviar
          </Button>
        </Footer>
      </Body>
    </Modal>
  );
};

export default ModalRepository;
