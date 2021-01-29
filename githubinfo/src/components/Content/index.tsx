import React from 'react';

import { useDataApi } from '../../hooks/dataApi';
import { Data } from '../../types/dataApi';
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
        data?.map(
          ({
            id,
            avatar_url,
            full_name,
            stargazers_count,
            forks_count,
            open_issues_count,
            language,
            created_at,
            updated_at,
          }: Data) => (
            <Card
              key={id}
              id={id}
              avatar_url={avatar_url}
              full_name={full_name}
              stargazers_count={stargazers_count}
              forks_count={forks_count}
              open_issues_count={open_issues_count}
              language={language}
              created_at={created_at}
              updated_at={updated_at}
              deleteRepository={deleteRepository}
            />
          ),
        )
      ) : (
        <Empty />
      )}
    </Container>
  );
};

export default Content;
