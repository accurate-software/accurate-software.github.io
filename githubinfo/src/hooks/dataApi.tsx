import React, { createContext, useState, useContext } from 'react';
import { IProps } from '../hooks/githubRepository';

interface IApiGitHub {
  full_name: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string;
  created_at: string;
  updated_at: string;
  owner: {
    avatar_url: string;
  };
}

export interface IData {
  id: number | undefined;
  full_name: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string;
  created_at: string;
  updated_at: string;
  avatar_url: string;
}

interface IContextApi {
  data: IData[] | undefined;
  setData: (data: IData[]) => void;
  getRepository(repository: string): void;
  error: {
    status: boolean;
    message: string;
  };
}

import api from '../services/api';

const DataApiContext = createContext<IContextApi>({} as IContextApi);

const DataApiProvider = ({ children }: IProps) => {
  const [data, setData] = useState<IData[]>([]);
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
      const result = await api.get<IApiGitHub>(`/${repository}`);

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
            message: 'Repository not found',
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
