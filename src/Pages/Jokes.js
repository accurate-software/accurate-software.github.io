import React from 'react';
import Api from '../ApiUrl';
import Map from '../Components/Map';
import Joke from './Joke';
import component from '../module/Components.module.css';

const Jokes = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [target, setTarget] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  function handleClick({ target }) {
    setTarget(target.innerText);
  }
  const categorias = 'categories';

  React.useEffect(() => {
    async function getJoke(url) {
      try {
        setLoading(true);
        const { data } = await Api.get(`${url}`);
        setData(data);
      } catch (error) {
        setError('Erro de requisição.');
      } finally {
        setLoading(false);
      }
    }
    getJoke(categorias);
  }, []);
  if (loading) return <div className={component.loading}></div>;
  if (error) return <p>{error}</p>;
  if (data === null) return null;
  return (
    <div>
      <Map data={data} showJoke={handleClick} />
      <Joke targeText={target} />
    </div>
  );
};
export default Jokes;
