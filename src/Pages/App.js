import React from 'react';
import Api from '../ApiUrl';

const App = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);

  const resp = 'joke/';
  React.useEffect(() => {
    async function getFilmInfo(url) {
      try {
        const { data } = await Api.get(`/films/${url}`);
        setData(data);
      } catch (error) {
        setError('Erro de requisição.');
      } finally {
        console.log(data);
      }
    }
    getFilmInfo(resp);
  }, [resp]);

  return;
};

export default App;
