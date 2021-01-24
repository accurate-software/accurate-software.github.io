import React from 'react';
import style from '../module/Cards.module.css';

const Card = ({ peolpe, joke }) => {
  return (
    <div className={style.div}>
      {peolpe.map((person, i) => (
        <ul className={style.list} key={i}>
          <li className={style.listgrid}>{person}</li>
          {joke.map((jokes, i) => (
            <li className={style.listGrid} key={i}>
              {jokes}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Card;
