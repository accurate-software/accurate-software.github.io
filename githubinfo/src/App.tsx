import React from 'react';

import Index from './Pages';

import GlobalStyles from './GlobalStyles';

import { GitHubRepositoryProvider } from './hooks/githubRepository';

function App() {
  return (
    <GitHubRepositoryProvider>
      <Index />
      <GlobalStyles />
    </GitHubRepositoryProvider>
  );
}

export default App;
