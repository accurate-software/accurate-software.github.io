# Candidato - Dev Frontend - Júnior

Para o cumprimento do desafio frontend eu fiz utilização da API da [Musixmatch](https://developer.musixmatch.com/);

<img src="https://davidcarmoupload.s3.sa-east-1.amazonaws.com/d05d00124b9f8f53bcdfdfa820c33f43%20-%20logo.png" alt="drawing" width="500"/> 

Criei uma aplicação simples que gera um Harry Ipsum - um lorem ipsum tendo como base as letras das músicas do álbum Fine Line do cantor Harry Styles - as letras das músicas são fornecidas pela api da MusixMacth.  

<img src="https://davidcarmoupload.s3.sa-east-1.amazonaws.com/24ce92132a16338facaa29b8e23fb191%20-%20HarryIpsonScreen.png" alt="drawing" width="700"/> 

Para o consumo da API Musixmatch foi necessário a criação do server com node.JS devido os navegadores bloquearem as requisições para terceiros devido a política de CORS. 

# Tecnologias Utilizadas
+ <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> CSS</a>
+ <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> HTML5 </a>
+ <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> JavaScript</a>
+ <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> Node </a>

+ <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> ReactJS </a> 

# Pré - Requisitos e Execução

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
Git, Node.js., NPM (Recomendo o Yarn) e o VSCode. Siga os passos a seguir:  

+ Instale as dependências com npm install nos diretórios server e harry_ipsum

+ Inicie o servidor do node na pasta server com npm dev 
+ Após o servidor iniciar inicie também o react na pasta harry_ipsum
 npm start

Provavelmente tudo correrá bem, mas caso execute e não retorne nenhum dado existe a possibilidade de key_id da api ter expirado ou os acessos do dia para essa key free estejam esgotados. 

Para utilizar uma outra key na aplicação, basta simplementes que abra a pasta server e encontre o arquivo .env, lá sera possível encontrar uma key_id reserva, copie o que vem após // e substitua o que está na frente de "MUSIXMATCH_API_KEY = ". Reinicie o servidor e a aplicação funcionará normalmente. 

