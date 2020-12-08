<h1 align="center">IFound</h1>
<p align="center">🚀 API REST densenvolvida em .NET Core!</p>
<a href="https://accurate.com.br/">
<img  src="https://img.shields.io/static/v1?label=API&message=Accurate&color=7159c1&style=for-the-badge&logo=ghost"/> 
</a>

## Sobre
O projeto IFound trata-se de uma API REST para prover dados a um site de achados e perdidos

## Tabela de conteúdos
<!--ts-->
   * [Sobre](#sobre)
   * [Tabela de Conteúdos](#tabela-de-conteúdos)
   * [Features](#features)
   * [Tecnologias](#-tecnologias)
   * [Pré-requisitos](#pré-requisitos)
   * [Rodando a aplicação](#rodando-a-aplicação)  
   * [Testes](#testes)
<!--te-->

### Features

- [x] Cadastro de um “Achado”/”Perdido”
- [x] Atualização de histórico de um “Achado”/”Perdido”
- [x] Busca com opção de filtros
- [x] Relatório de cruzamento de informações “Achados”/”Perdidos”, dado um categoria e um raio

### 🛠 Tecnologias

Para a construção deste projeto, foram utilizadas as seguintes ferramentas:

- [.NET Core](https://dotnet.microsoft.com/)
- [Entity Framework Core](https://docs.microsoft.com/pt-br/ef/core/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server)
- [XUnit](https://xunit.net/)
- [OData](https://www.odata.org/)

### Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:
* Git (https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* SDK Do ASP.NET Core Versão 3.1 (https://dotnet.microsoft.com/download/dotnet-core/3.1)
* SQL Server LocalDB (https://docs.microsoft.com/pt-br/sql/database-engine/configure-windows/sql-server-express-localdb?view=sql-server-ver15) ou seu banco de dados de preferência

### Rodando a aplicação
Para instalar e rodar o projeto em sua máquina, siga os seguintes passos;
* Rode o comando "git clone 'url-do-repositorio'" na sua máquina local
* Para facilitar a criação das estruturas no banco, criei um script para o SQL Server (SetUpDB.sql), basta executá-lo
* Mude a string de conexão com o banco no arquivo 'appsettings.json' com os seus dados de conexão
* Mudar a string de conexão em 'appsettings.json' com os dados do seu banco
* Dentro da pasta "ifound-api", rode o projeto via comando "dotnet run ifound-api.csproj"

### Testes
As demonstrações dos testes foram todas feitas via ferramenta Postman (https://www.postman.com/). Neste artigo, foi feita uma simples demonstração de funcionalidade para cada feature existente no backlog do projeto.

#### Feature: Cadastro de um “Achado”/”Perdido”
Para esta feature, foi feita uma demonstração com o cadastro de um produto por meio do endpoint "AddObject". A este endpoint foram passadas as informações do objeto, assim como sua categoria e dados das pessoas que perderam o objeto ou o encontraram. Desse modo, o objeto foi registrado com o id de categoria igual a 3 (por ser da categproa sapato) e foram assosiados a ele os ids 2 e 3 das pessoas que o perderam e o encontraram respectivamente.

![GIF Adicionar](ifound-api/gifs/gif_add_test_ifound.gif)

#### Feature: Atualização de histórico de um “Achado”/”Perdido”
Pada demonstrar esta feature, foi utilizado o endpoint "UpdateObject". Neste sentido, foram passados os dados do objeto a que se tem a intenção de atualizar. Para isso, foi escolhido o objeto de id igual a 5 (Smartphone Xiaomi Note 8). Foram atualizados os campos de descrição do objeto e o local em que foi perdido. A seguir, pode-se ver que os dados foram persisitidos ao se fazer uma consulta de todos os objetos via endpoint "GelAllObjects".

![GIF Atualizar](ifound-api/gifs/gif_update_test_ifound.gif)

#### Feature: Busca com opção de filtros
Na demonstração desta feature foi utilizado o endpoint "GetAllObjects" para se validar a funcionalidade dos filtros. Estes foram implementados via pacote OData da Microsoft, que permite consultas personalizadas aos endpoints da API. Para demonstrar a eficiência dos filtros, primeiro fez-e uma consulta de todos osobjetos do endpoint. Logo após isso, fez-se uma consulta de todos os objetos que possuiam a propriedade "ObjectId" da entidade "Object" com valor igual a 5. Para isso, foi incorpordado à URL da requisição os seguintes parâmetros:

* _"$Filter=Object/ObjectId eq 5"_

A seguir, fez-se uma consulta de todos os objetos que possuiam a propriedade "CategoryId" da entidade "ObjectCategory" com valor igual a 1 (categoria de roupas), mudando os parâmetros como o axemplo:

* _?$Filter=ObjectCategory/CategoryId eq 1_

![GIF Filtros](ifound-api/gifs/gif_filter_test_ifound.gif)

#### Feature: Relatório de cruzamento de informações “Achados”/”Perdidos”, dado uma categoria e um raio
Por fim, para se demonstrar a última feature do backlog, foi feita uma consulta com o seguinte filtro:

* _?$Filter=ObjectCategory/CategoryId eq 3 and Object/ObjectLostLocation eq 'São José do Rio Preto / SP'_

Com isso, temos um relatório dos objetos com base em sua categoria e localização. Na demonstração, pode-se observar que foram encontrados dois produtos (Tênis da Nike e Tênis da Adidas), ambos com id de categoria igual a 3 (sapatos) e tambeém ambos com localização de onde foram perdidos igual a 'São José do Rio Preto / SP'

![GIF Relatorio](ifound-api/gifs/gif_report_test_ifound.gif)


