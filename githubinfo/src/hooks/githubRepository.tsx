import React, { createContext, useState, useContext, ReactNode } from 'react';

interface IGitRepository {
  modalIsOpen: boolean;
  setModalIsOpen: (isModal: boolean) => void;
}

interface IProps {
  children: ReactNode;
}

const GitHubRepositoryContext = createContext<IGitRepository>(
  {} as IGitRepository,
);

const GitHubRepositoryProvider = ({ children }: IProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <GitHubRepositoryContext.Provider value={{ modalIsOpen, setModalIsOpen }}>
      {children}
    </GitHubRepositoryContext.Provider>
  );
};

const useGitHubRepository = () => {
  const ctx = useContext(GitHubRepositoryContext);
  return ctx;
};

export { GitHubRepositoryProvider, useGitHubRepository };
