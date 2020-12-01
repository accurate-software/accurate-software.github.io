import React from 'react';

import { useDataApi } from '../../hooks/dataApi';
import { Container } from './styles';
import Card from '../Card';
import Empty from '../Empty';

const Content: React.FC = () => {
  const { data, setData } = useDataApi();

  const deleteRepository = (id: string | number) => {
    const newArray = data?.filter((data) => data.id != id);
    if (newArray) setData(newArray);
  };

  return (
    <Container>
      {data?.length !== 0 ? (
        data?.map((repository) => (
          <Card
            key={repository.id}
            id={repository.id}
            avatar_url={repository.avatar_url}
            full_name={repository.full_name}
            stargazers_count={repository.stargazers_count}
            forks_count={repository.forks_count}
            open_issues_count={repository.open_issues_count}
            language={repository.language}
            created_at={repository.created_at}
            updated_at={repository.updated_at}
            deleteRepository={deleteRepository}
          />
        ))
      ) : (
        <Empty />
      )}
    </Container>
  );
};

export default Content;
