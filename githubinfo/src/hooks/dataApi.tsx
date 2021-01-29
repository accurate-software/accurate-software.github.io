import React, { createContext, useState, useContext } from 'react';
import { ApiGitHub, ContextApi, Data } from '../types/dataApi';
import { Props } from '../hooks/githubRepository';

import api from '../services/api';

const DataApiContext = createContext<ContextApi>({} as ContextApi);

const DataApiProvider = ({ children }: Props) => {
  const [data, setData] = useState<Data[]>([]);
  const [error, setError] = useState({
    status: false,
    message: '',
  });

  const formatDate = (date: string) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };

    const dateFormated = new Date(date);
    return dateFormated.toLocaleString('en-US', options);
  };

  const yearAgo = (date: string) => {
    const dateFormated = new Date(date);
    const yearAgo = dateFormated.getFullYear();

    const dateNow = new Date();
    const yearNow = dateNow.getFullYear();

    const resultYear = Number(yearNow) - Number(yearAgo);

    return String(resultYear);
  };

  const getRepository = async (repository: string) => {
    try {
      const result = await api.get<ApiGitHub>(`/${repository}`);

      const resultFormatted = Array(result.data).map(
        ({
          full_name,
          stargazers_count,
          forks_count,
          open_issues_count,
          language,
          created_at,
          updated_at,
          owner,
        }) => {
          return {
            id: data.length + 1,
            full_name,
            stargazers_count,
            forks_count,
            open_issues_count,
            language,
            created_at: yearAgo(created_at),
            updated_at: formatDate(updated_at),
            avatar_url: owner.avatar_url,
          };
        },
      );
      setError({ message: '', status: false });
      setData([resultFormatted[0], ...data]);
    } catch (error) {
      error.message.includes('code 404')
        ? setError({
            message: 'Repositório não encontrado',
            status: true,
          })
        : setError({ message: error.message, status: true });
    }
  };

  return (
    <DataApiContext.Provider value={{ data, getRepository, error, setData }}>
      {children}
    </DataApiContext.Provider>
  );
};

const useDataApi = () => {
  const ctx = useContext(DataApiContext);
  return ctx;
};

export { DataApiProvider, useDataApi };
