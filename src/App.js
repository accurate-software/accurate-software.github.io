import React from 'react';
import Produtos from './Produtos';
import Home from './Home';
import Header from './Header';
import { GlobalContent } from './GlobalContext';
import Title from './Titile';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const App = () => {
  // const { pathname } = window.location;
  // let Pagina = Home;
  // if (pathname === '/produtos') {
  //   Pagina = Produtos;
  // } else {
  //   Pagina = Home;
  // }
  // return (
  //   <section>
  //     <Header />
  //     <Pagina />
  //   </section>
  // );
  // Os links abaixo puxam dados de um produto em formato JSON
  // https://ranekapi.origamid.dev/json/api/produto/tablet
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // Crie uma interface com 3 botões, um para cada produto.
  // Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
  // Mostre apenas um produto por vez
  // Mostre a mensagem carregando... enquanto o fetch é realizado
  // const [dados, setDados] = React.useState(null);
  // const [carregando, setCarregando] = React.useState(null);
  // async function handleClick(event) {
  //   setCarregando(true);
  //   const response = await fetch(
  //     `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
  //   );
  //   const json = await response.json();
  //   setDados(json);
  //   setCarregando(false);
  // }
  // return (
  //   <>
  //     <button onClick={handleClick}>smartphone</button>
  //     <button onClick={handleClick}>tablet</button>
  //     <button onClick={handleClick}>notebook</button>
  //     {carregando && <p>Carregando...</p>}
  //     {!carregando && dados && <Produtos dados={dados} />}
  //   </>
  // );
  // const [produtos, setProdutos] = React.useState(null);
  // React.useEffect(() => {
  //   const local = window.localStorage.getItem('product');
  //   if (local !== null) setProdutos(local);
  // }, []);
  // React.useEffect(() => {
  //   if (produtos !== null) window.localStorage.setItem('product', produtos);
  // }, [produtos]);
  // function search(event) {
  //   setProdutos(event.target.innerText);
  // }
  // return (
  //   <div>
  //     <button onClick={search}>notebook</button>
  //     <button onClick={search}>smartphone</button>
  //     <Produtos produtos={produtos} />
  //   </div>
  // );
  // const [mensagem, setMensagem] = React.useState([]);
  // const [input, setInput] = React.useState('');
  // const inputElemnet = React.useRef();
  // const handle = () => {
  //   setMensagem((coments) => [...coments, input]);
  //   setInput('');
  //   inputElemnet.current.focus();
  // };
  // return (
  //   <div>
  //     <ul>
  //       {mensagem.map((mesage) => (
  //         <li key={mesage}>{mesage}</li>
  //       ))}
  //     </ul>
  //     <input
  //       type="text"
  //       value={input}
  //       ref={inputElemnet}
  //       onChange={({ target }) => setInput(target.value)}
  //     />
  //     <button style={{ margin: '1rem' }} onClick={handle}>
  //       Enviar
  //     </button>
  //   </div>
  // );

  // Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
  // https://ranekapi.origamid.dev/json/api/produto/
  // assim que o usuário acessar o app
  // coloque os dados da API no contexto global, dando acesso aos dados da mesma
  // defina uma função chamada limparDados que é responsável por zerar os dados de produto
  // e exponha essa função no contexto global

  // return (
  //   <GlobalContent>
  //     <Produtos />
  //     <Title />
  //   </GlobalContent>
  // );

  // const [endereco, setEndereco] = React.useState({
  //   nome: '',
  //   email: '',
  //   senha: '',
  //   cep: '',
  //   rua: '',
  //   numero: '',
  //   bairro: '',
  //   cidade: '',
  //   estado: '',
  // });
  // const [response, setResponse] = React.useState(null);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(endereco),
  //   }).then((response) => {
  //     setResponse(response);
  //   });
  // }
  // function handleChange({ target }) {
  //   const { id, value } = target;
  //   setEndereco({ ...endereco, [id]: value });
  //   console.log(endereco);
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <label htmlFor="nome">Nome</label>
  //     <input
  //       type="text"
  //       id="nome"
  //       value={endereco.nome}
  //       onChange={handleChange}
  //     />
  //     <label htmlFor="email">Email</label>
  //     <input
  //       type="email"
  //       id="email"
  //       value={endereco.email}
  //       onChange={handleChange}
  //     />
  //     <label htmlFor="senha">Senha</label>
  //     <input
  //       type="password"
  //       id="senha"
  //       value={endereco.senha}
  //       onChange={handleChange}
  //     />
  //     <label htmlFor="cep">Cep</label>
  //     <input
  //       type="text"
  //       id="cep"
  //       value={endereco.cep}
  //       onChange={handleChange}
  //     />
  //     <label htmlFor="rua">Rua</label>
  //     <input
  //       type="text"
  //       id="rua"
  //       value={endereco.rua}
  //       onChange={handleChange}
  //     />
  //     <label htmlFor="numero">Numero</label>
  //     <input
  //       type="text"
  //       id="numero"
  //       value={endereco.numero}
  //       onChange={handleChange}
  //     />
  //     <label htmlFor="bairro">Bairro</label>
  //     <input
  //       type="text"
  //       id="bairro"
  //       value={endereco.bairro}
  //       onChange={handleChange}
  //     />
  //     <label htmlFor="cidade">Cidade</label>
  //     <input
  //       type="text"
  //       id="cidade"
  //       value={endereco.cidade}
  //       onChange={handleChange}
  //     />{' '}
  //     <label htmlFor="estado">Estado</label>
  //     <input
  //       type="text"
  //       id="estado"
  //       value={endereco.estado}
  //       onChange={handleChange}
  //     />
  //     <button>Enviar</button>
  //     {response && response.ok && (
  //       <p style={{ color: 'yellowgreen' }}>Usuário Criado com sucesso !</p>
  //     )}
  //   </form>
  // );

  // Otimize o código do slide anterior
  // Utilizando a array abaixo para mostrar
  // cada checkbox na tela.

  // const [cores, setCores] = React.useState([]);

  // function handleChange({ target }) {
  //   const { checked, value } = target;
  //   if (checked) {
  //     setCores([...cores, target.value]);
  //   } else {
  //     setCores(cores.filter((cor) => cor !== value));
  //   }
  // }

  // function handleCheck(cor) {
  //   return cores.includes(cor);
  // }
  // return (
  //   <form>
  //     {coresArray.map((cores) => (
  //       <label key={cores} style={{ textTransform: 'capitalize' }}>
  //         <input
  //           type="checkbox"
  //           checked={handleCheck(cores)}
  //           value={cores}
  //           onChange={handleChange}
  //         />
  //         {cores}
  //       </label>
  //     ))}
  //     <ul>
  //       {cores.map((color) => (
  //         <li key={color}>{color}</li>
  //       ))}
  //     </ul>
  //   </form>
  // );
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  const [slide, setSlide] = React.useState(0);
  const [result, setResult] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }
  function resultadoFinal() {
    const correta = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    setResult(`Você acertou: ${correta.length} de ${perguntas.length}`);
    console.log(respostas.p1 === correta[0].resposta);
  }
  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Produtos
          active={slide === index}
          key={pergunta.id}
          onChange={handleChange}
          value={respostas[pergunta.id]}
          {...pergunta}
        />
      ))}
      {result ? (
        <p>{result}</p>
      ) : (
        <button onClick={handleClick}>Próxima</button>
      )}
    </form>
  );
};
export default App;
