import Produto from './Produto';
import Titulo from './Titulo';
import React from 'react';
import { Content } from './GlobalContext';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
// const Produtos = ({ dados }) => {
// const produtos = [
//   { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
//   { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
// ];
// return (
//   <section>
//     <Titulo name="Produtos" />
//     {produtos.map((products) => (
//       <Produto key={products.nome} {...products} />
//     ))}
//   </section>
// );
//   return (
//     <div>
//       <h1>{dados.nome}</h1>
//       <p>{dados.descricao}</p>
//       <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
//       <p>R$: {dados.preco}</p>
//     </div>
//   );
// };

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo
// const Produtos = ({ produtos }) => {
//   const [data, setDados] = React.useState(null);
//   React.useEffect(() => {
//     if (produtos !== null) {
//       fetch(
//         `https://ranekapi.origamid.dev/json/api/produto/${produtos}`,
//       ).then((response) => response.json().then((json) => setDados(json)));
//     }
//   }, [produtos]);
//   if (data === null) return null;
//   return (
//     <div>
//       <h1>{data.nome}</h1>
//       <p>R$: {data.preco}</p>
//     </div>
//   );
// };
// const Produtos = () => {
//   const global = React.useContext(Content);
//   if (global.produto === null) return null;
//   return (
//     <div>
//       <p>Total:</p>
//       <ul>
//         {global.produto.map((produto) => (
//           <li key={produto.id}>{produto.nome}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
const Produtos = ({ pergunta, options, id, value, active, onChange }) => {
  if (active === false) return null;
  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};
export default Produtos;
