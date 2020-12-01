import React, { useEffect, useState } from 'react';

import { Container, Header, Body, Footer, Options } from './styles';

import ModalDelete from '../ModalDelete';

import trashIcon from '../../assets/trashIcon.svg';

import LabelCard from '../LabelCard';
import { IData } from '../../hooks/dataApi';

interface ICardFunctions {
  deleteRepository(id: string | number): void;
}

type Props = IData & ICardFunctions;

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
  const [displayModal, setDisplayModal] = useState(false);
  const [cardDelete, setCardDelete] = useState(false);

  //   useEffect(() => {
  //     setCardDelete(false);
  //   }, [displayModal]);

  //   useEffect(() => {
  //     if (cardDelete) {
  //       deleteRepository(id);
  //     }
  //   }, [cardDelete]);

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
              <img
                onClick={(e) => id && deleteRepository(id)}
                src={trashIcon}
              />
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
      <ModalDelete />
    </>
  );
};

export default Card;
