import React from 'react';

export const Content = React.createContext();

export const GlobalContent = ({ children }) => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);

  function limpar() {
    setProduto(null);
  }
  return (
    <Content.Provider value={{ produto, setProduto, limpar }}>
      {children}
    </Content.Provider>
  );
};
