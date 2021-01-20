import React from 'react';
import { Content } from './GlobalContext';

const Title = () => {
  const limparz = React.useContext(Content);
  return <button onClick={limparz.limpar}>Apagar</button>;
};
export default Title;
