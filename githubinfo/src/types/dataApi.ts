export type ApiGitHub = {
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
};

export type Data = {
  id: number | undefined;
  full_name: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string;
  created_at: string;
  updated_at: string;
  avatar_url: string;
};

export type ContextApi = {
  data: Data[] | undefined;
  setData: (data: Data[]) => void;
  getRepository(repository: string): void;
  error: Error;
};
export type Error = {
  status: boolean;
  message: string;
};
