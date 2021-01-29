import React from 'react';

import { Container, Header, Body, Options } from './styles';

import Swal from 'sweetalert2';

import trashIcon from '../../assets/trashIcon.svg';

import LabelCard from '../LabelCard';
import { Data } from '../../types/dataApi';

interface ICardFunctions {
  deleteRepository(id: string | number): void;
}

type Props = Data & ICardFunctions;

const Card: React.FC<Props> = ({
  id,
  full_name,
  stargazers_count,
  forks_count,
  open_issues_count,
  language,
  created_at,
  updated_at,
  avatar_url,
  deleteRepository,
}) => {
  // const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  // const [cardDelete, setCardDelete] = useState(false);

  const confirmDelete = (id: string | number) => {
    Swal.fire({
      title: 'Você tem certeza?',
      text: `Desejas deletar o repositório: ${full_name} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, quero deletar!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteRepository(id);
        Swal.fire(
          'Repositório Deletado!',
          'O repositório foi deletado com sucesso.',
          'success',
        );
      }
    });
  };

  return (
    <>
      <div className="col-12  col-md-6 col-lg-5 col-xl-4 mb-4">
        <Container>
          <Header>
            <div>
              <img
                style={{
                  width: '40px',
                  height: '40px',
                  overflow: 'hidden',
                  marginLeft: '10px',
                }}
                src={avatar_url}
                alt={full_name}
              />

              <span style={{ marginLeft: '10px' }}>
                {full_name.length >= 34
                  ? full_name.substr(0, 32) + '...'
                  : full_name}
              </span>
            </div>
            <Options>
              <img onClick={(e) => id && confirmDelete(id)} src={trashIcon} />
            </Options>
          </Header>
          <Body>
            <LabelCard keyLabel="Stars" contentLabel={stargazers_count} />
            <LabelCard keyLabel="Forks" contentLabel={forks_count} />
            <LabelCard
              keyLabel="Open Issues"
              contentLabel={open_issues_count}
            />
            <LabelCard
              keyLabel="Age"
              contentLabel={`${created_at} years Ago`}
            />
            <LabelCard keyLabel="Last commit" contentLabel={updated_at} />
            <LabelCard keyLabel="License" contentLabel="N/A" />
          </Body>
        </Container>
      </div>
    </>
  );
};

export default Card;
