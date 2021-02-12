import React from 'react';

import Routes from '../src/components/routes';

import GlobalStyles from './GlobalStyles';

import { GitHubRepositoryProvider } from './hooks/githubRepository';
import { DataApiProvider } from './hooks/dataApi';
import { AuthProvider } from './hooks/auth';

function App() {
  return (
    <DataApiProvider>
      <GitHubRepositoryProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
        <GlobalStyles />
      </GitHubRepositoryProvider>
    </DataApiProvider>
  );
}

export default App;
