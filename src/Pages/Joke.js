import React from 'react';
import Api from '../ApiUrl';
import style from '../module/Joke.module.css';
import component from '../module/Components.module.css';

const Joke = ({ targeText }) => {
  const [joke, setJoke] = React.useState(null);
  const [erro, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const resp = targeText;

  React.useEffect(() => {
    async function getJoke(url) {
      try {
        setLoading(true);
        const { data } = await Api.get(`joke/${url}`);
        setJoke(data);
      } catch (error) {
        setError('Erro de requisição.');
      } finally {
        setLoading(false);
      }
    }
    getJoke(resp);
  }, [resp]);
  if (loading) return <div className={component.loading}></div>;
  if (joke === null) return null;
  if (joke.error) {
    return (
      <>
        <div className={component.animeLeft}>
          <h1>Click to show Jokes</h1>
          <div className={style.error}>
            <p>{joke.message}</p>
            <p>Please select a Jokes</p>
          </div>
        </div>
      </>
    );
  }
  return (
    <div className={component.animeLeft}>
      <div className={style.div}>
        <h1>{joke.category}</h1>
        <p>{joke.setup}</p>
        <p>{joke.delivery}</p>
        <p>{joke.joke}</p>
        <p>{erro}</p>
      </div>
    </div>
  );
};
export default Joke;
