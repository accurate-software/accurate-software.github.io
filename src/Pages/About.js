import React from 'react';
import style from '../module/About.module.css';
import styles from '../module/Components.module.css';

const About = () => {
  return (
    <div className={style.div}>
      <h1>About</h1>
      <h5>
        - Na página jokes, você pode acessar piadas selionadas de uma Api com
        mais de 1200 piadas em inglês, Se divirta.
      </h5>
      <div className={styles.animeLeft}>
        <div className={style.p}>
          <p>Alguns texto de Comediantes que nos inspiraram desde criança</p>

          <p>
            "Seja muito bom, que eles não vão ter como ignorar você" - Steve
            martin
          </p>
          <p>
            "Não seja outra pessoa só porque alguém quer ou porque é mais fácil.
            Você não será feliz. Você precisa fazer algo que você gosta muito,
            muito, muito mesmo, por mais que assuste"- Kristen Wiig
          </p>
          <p>
            "Trabalhe duro, seja gentil e coisas maravilhosas acontecerão com
            você."- Conan O'Brien
          </p>
          <p>
            "Eu realmente acho que é melhor falhar em algo que você ama do que
            ser bem sucedido em algo que você odeia."- George Burns
          </p>
          <p>
            Eu pensava que a pior coisa na vida era acabar sozinho. Não é. A
            pior coisa na vida, é acabar com as pessoas que fazem você se sentir
            sozinho. - Robin Williams
          </p>
          <p>
            Em algumas manhãs eu acordo, sento enquanto tomo o café e olho para
            o meu lindo jardim e digo 'Lembra como tudo isto é bom. Porque você
            pode perder tudo".- Jim Carrey
          </p>
        </div>
        <div className={style.imagem}></div>
      </div>
    </div>
  );
};
export default About;
