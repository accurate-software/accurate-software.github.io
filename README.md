## Objetivo Geral

- Desenvolvimento de uma API Restful para realizar o gerenciamento de objetos achados e perdidos.

## Funcionalidades do Sistema

- Deve ser possível usuário se cadastrar, ler, atualizar e deletar seus dados pessoais. Visando também o controle sobre sua conta. Os usuários são dividios em usuários comuns com funcionalidades restritas para seu cadastro e usuário administrador com acesso a todas as funcionalidades do sistema. Os usuários comuns não poderam excluir suas contas.

- Deve ser possível que usuário faça upload do seu avatar de usuário.

- Deve ser possível que usuário faça a recuperação de senha informando o email que será enviado um token de autorização.

- Deve ser possível que usuário logado faça a troca de senha.

- Deve ser possível que usuário administrador cadastre, exclua, atualiza e liste categorias de objetos.

- Deve ser possível que usuário administrador liste todos os usuários cadastrados.

- Deve ser possível que o usuário, desde que logado no sistema, cadastrar um objeto perdido e/ou encontrado. O usuário administrador tem acesso pleno aos objetos criados por outros usuários.

- Deve ser possível que o usuário faça upload de fotos dos objetos perdidos e/ou encontrados.

- Deve ser possível que o usuário filtre todos os objetos disponíveis por categorias e nome.

- Deve ser possível que o usuário administrador envie uma mensagem ao usuário que criou o objeto perdido, avisando-o que o objeto foi encontrado, com isso o objeto ficará indisponível automaticamente. O dono pode se dirigir ao setor responsável para retirá-lo.

- Deve ser possível a listagem de todos os objetos, antes de fazer o cadastro de usuário.

## Ferramentas e Tecnologias Utilizadas

- Conceitos de boas práticas e qualidade no código, usando Design Patterns, Domain Driven Design (DDD) e Princípios SOLID, além de introduzir Testes Automatizados com o framework Jest.

- Node.js com Typescript;

- Express;

- TypeORM;

- PostgreSQL;

- Redis;

- Docker;
