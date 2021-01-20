import React from 'react';

export const Produto = ({ nome, propriedades }) => {
  return (
    <div
      style={{ border: '1px solid #e09', margin: '1rem 0', padding: '2rem' }}
    >
      <p>{nome}</p>
      <ul>
        {propriedades.map((propertie) => (
          <li key={propertie} style={{ color: 'yellowgreen' }}>
            {propertie}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Produto;
