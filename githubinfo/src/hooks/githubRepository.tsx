import React, { createContext, useState, useContext, ReactNode } from 'react';

type GitRepository = {
  modalIsOpen: boolean;
  setModalIsOpen: (isModal: boolean) => void;
};

export type Props = {
  children: ReactNode;
};

const GitHubRepositoryContext = createContext<GitRepository>(
  {} as GitRepository,
);

const GitHubRepositoryProvider = ({ children }: Props) => {
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
