import React from 'react';

import Index from './Pages';

import GlobalStyles from './GlobalStyles';

import { GitHubRepositoryProvider } from './hooks/githubRepository';
import { DataApiProvider } from './hooks/dataApi';

function App() {
  return (
    <DataApiProvider>
      <GitHubRepositoryProvider>
        <Index />
        <GlobalStyles />
      </GitHubRepositoryProvider>
    </DataApiProvider>
  );
}

export default App;
