import React from 'react';
import style from '../module/Home.module.css';
import Card from './Cards';
import jokes from '../Array';
import styles from '../module/Cards.module.css';
import animate from '../module/Components.module.css';

const Home = () => {
  return (
    <div className={animate.animeLeft}>
      <div className={style.container}>
        <div className={style.div}>
          <img
            src="https://cdn.mensagenscomamor.com/content/images/p000003218.jpg?v=0&w=400&h=225&c=1"
            alt="Mussun"
          />

          <div className={style.para}>
            <h3> FRASES DE HUMORISTAS</h3>
            <p>
              Alguns humoristas possuem falas marcantes, ou até mesmo marcaram
              época! Venha rever algumas frases de humoristas famosos para dar
              muita risada e conhecer um pouco mais dos artistas desse mundo do
              riso.
            </p>
          </div>
        </div>
        <ul className={styles.gridList}>
          {jokes.map((joke, i) => (
            <Card key={i} {...joke} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
