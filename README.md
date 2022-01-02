# API Achados e Perdidos

Nossa API REST oferece solução de registro de objetos perdidos ou extraviados, 
possibilitando que tais objetos possam ser recuperados pelos seus donos.

**Incrementamos ao projeto os seguintes recursos:**
```
>>> Spring Security, com suporte a token JWT e biblioteca Spring Cloud OAuth2;
>>> Consumiremos o Webservice 'ViaCep', adotando o Spring Cloud OpenFeign;
>>> 'Swagger 2' para interpretar a estrutura da API e gerar documentação;
>>> Dois ambientes de desenvolvimento (Test e Dev);
>>> Spring Validation (ao utilizar o Postman, requisição 'POST ViaCepCadastro', necessário 
        buscar CEP, CPF e E-mail no site 'https://www.4devs.com.br/gerador_de_pessoas');
>>> Listagem com paginação (contendo seis parâmetros, inclusive filtragem por 
        limitação de tempo inicial/final).
>>>Auditoria, onde ficará registrado o momento em que o Status do objeto muda 
        de 'PERDIDO' para 'ACHADO'.
```




* Quanto ao Postman: 

Implementamos 151 testes de ponta a ponta de forma automatizada por meio do envio de requisições HTTP e da análise do seu retorno. Ver aba codificação de testes. Com este recurso foi sim possível ordenar/validar o comportamento de modo automatizado das requisições praticamente com ‘um clique’ (Run Collection). O arquivo de testes está incluso na raiz do projeto e foi nomeado como **‘TEST_Postman_AchadosPerdidos.postman_collection’**. Já o arquivo contendo as variáveis de ambiente está nomeado como **'TEST_8080_AchadosPerdidos.postman_environment'**.
    
No Postman (requisição **'POST New user role admin/operator'**), devido à necessidade recorrente de autenticação 'OAuth2' no período de testes, optamos por não deixar estático o campo **'email'** . Deste modo, implementamos a criação **randomizada/aleatória** de emails (ver aba **'Pre-request Script'**).
    
Quanto à variável de ambiente, deixar em **branco/não preenchidos** ambos os campos INITIAL VALUE e CURRENT VALUE referentes à variável **'token'**. 

Configurações necessárias para a variável de ambiente (constantes do arquivo **‘TEST_8080_AchadosPerdidos.postman_environment’**):
  
 ![API_8080_Environments_Achados_e_Perdidos](https://user-images.githubusercontent.com/57645281/147786337-5f8449ff-b119-4c79-83a8-8398d9e4f73a.png)




* Quanto ao desenvolvimento de autenticação e autorização de usuários através do Spring Security, 
com suporte a token JWT e biblioteca Spring Cloud OAuth2:
```
- A requisição oferece as credenciais e nosso sistema retorna o token JWT já com OAuth2.


- São 2 os tipos GrantedAuthority: ROLE_ADMIN ou ROLE_OPERATOR.


- Adotamos o 'email' como Username para autenticaçao e autorização de usuários (lembrando que 
'email' é um atributo do usuário).


- No Postman, implementamos a criação randomizada/aleatória de emails nas requisições 
'POST {{baseUrl}}/users' ( ver aba 'Pre-request Script').


- No arquivo ‘data.sql’ foi feito seed com dois perfis de usuários: perfil operador(ROLE_OPERATOR) e 
perfil administrador(ROLE_ADMIN), sendo que o prefixo ‘ROLE + underline’ é um padrão do Spring Secutity.


- No arquivo ‘data.sql’ a variável ‘password’ foi previamente criptografada com o algoritmo ‘decript’.


- Para proteger as senhas foi criado Bean ‘BCryptPasswordEncoder’ na classe de configuração ‘AppConfig’, 
que transforma a senha inserida pelo usuário em Hash.

- Foram adicionados ao Token as seguintes informações customizadas: ‘E-mail’, ‘userFirstName’ e 
‘userId’ (ver Postman, requisição ‘POST: {{baseUrl}}/oauth/token’). Response Body:

                {
                     "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2
                     NDEyMTg3ODYsInVzZXJfbmFtZSI6InBlZHJvQGdtYWlsLmNvbSIsImF1
                     dGhvcml0aWVzIjpbIlJPTEVfT1BFUkFUT1IiXSwianRpIjoiZWExYzc3
                     Y2QtZTViZi00ZGEwLTlmNDgtNWNmMjY5YjU3ZGIwIiwiY2xpZW50X2lk
                     IjoiQXBpIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl19.EhbNEH3Aii0
                     0CGeEUalPzNTVRBb9FJJU-E2dVzwIgDY",
                    "token_type": "bearer",
                    "expires_in": 86399,
                    "scope": "read write",
                    "E-mail": "pedro@gmail.com",
                    "userFirstName": "Pedro",
                    "userId": 1
                }
```



```

>>> São 2 os tipos GrantedAuthority:
    - para testar 'ROLE_ADMIN', inserir no campo 'username': 'silvia@gmail.com'
                Possui autorização para realizar todas as requisições HTTP implementadas.
    
    
    - para testar 'ROLE_OPERATOR', inserir em 'username': 'pedro@gmail.com'
                Possui autorização apenas para:
                                        HttpMethod.POST, "/objetos/**"
                                        HttpMethod.POST, "/cadastros/**"
```




* Quanto à listagem com paginação:
```
Implementamos requisição paginada (contendo seis parâmetros), inclusive com filtragem por 
limitação de datas inicial/final. Conferir no Postman.
```





* Quanto ao Swagger 2 para a documentação de todos os endpoints, acessar o seguinte link:
```
http://localhost:8080/swagger-ui.html
```



* Quanto ao Spring Validation:
```
Validação é uma regra de negócio.

Lembrando que CEP, CPF e E-mail devem ser válidos e únicos (não repetidos).

Deste modo, ao utilizar o Postman, requisição 'POST ViaCepCadastro', necessário 
buscar CEP, CPF e E-mail no site 'https://www.4devs.com.br/gerador_de_pessoas'.

Como uma das validações implementadas foi que, ao inserir novo usuário o nosso banco de 
dados não aceitará email repetido, criamos validação customizada no 
Bean Validation implementando o ConstraintValidator.

```






* Quanto aos dois os ambientes de desenvolvimento: 
    - Ambiente de teste (configuração application-test.properties): banco de dados H2. 
    - Ambiente Dev (configuração application-dev.properties):  utilizamos o banco de dados Postgre.

```
>>> Definir ambiente de desenvolvimento Test/dev em 'APPLICATION.PROPERTIES' ( em 'spring.profiles.active').


>>> Banco de dados H2 (modo teste):

    Acessar o Link:  http://localhost:8080/h2-console

    JDBC URL: jdbc:h2:mem:testdb 
    User Name: sa 
    Password: ‘não preencher’
  
  
>>> Banco de dados Postgres (modo Dev):
        
    - Em ‘application-dev.properties’ devem ser customizados (para 'rodar' no Postgres instalado em 
    seu sistema, caro leitor):
          > nome da base de dados: 'delivery'
          > username: 'SEU USERNAME'
          > password: 'SUA PASSWORD'
````

 





# Requisições HTTP implementadas:
![API_Achados_e_Perdidos_Swagger](https://user-images.githubusercontent.com/57645281/147786603-ccb6efe5-e68c-439e-b412-d6534250401d.png)















*__POST {{baseUrl}}/objetos__
>>>Novo objeto perdido é cadastrado no banco de dados. 

>>>Request Body:
```
                {
                  "bairroOndeObjetoFoiEncontrado": "Vila Clementino",  
                  "descricaoDoObjeto": "Coleção de lápis de cor"  
                }
```
>>>Response Body:
>>>Automaticamente o status inicial é definido como 'PERDIDO' e o momento é salvo (auditoria).
>>>O 'Id' do objeto também fica evidenciado.
```
                {
                    "id": 30,
                    "descricaoDoObjeto": "Coleção de lápis de cor",
                    "bairroOndeObjetoFoiEncontrado": "Vila Clementino",
                    "moment": "2021-12-30T22:08:11.189459900Z",
                    "status": "PERDIDO"
                }
```
*__GET {{baseUrl}}/objetos/broo/bairroOndeObjetoFoiEncontrado__
>>>Busca por bairro, lembrando que é possível realizar a busca usando apenas trecho da palavra
>>>(levando em consideração possível erro de digitação do usuário)

>>>Response Body:
```
            {
                "id": 7,
                "descricaoDoObjeto": "Documento RG 39.142.008-2",
                "bairroOndeObjetoFoiEncontrado": "Brooklin",
                "moment": "2021-01-03T07:00:00Z",
                "status": "PERDIDO"
            },
            {
                "id": 11,
                "descricaoDoObjeto": "Bola de basquete",
                "bairroOndeObjetoFoiEncontrado": "Brooklin",
                "moment": "2021-01-20T21:00:00Z",
                "status": "PERDIDO"
            },
            {
                "id": 21,
                "descricaoDoObjeto": "Documento CPF 757.499.238-00",
                "bairroOndeObjetoFoiEncontrado": "Brooklin",
                "moment": "2021-01-01T10:00:00Z",
                "status": "ACHADO"
            },
            {
                "id": 26,
                "descricaoDoObjeto": "Fone de ouvido, preto",
                "bairroOndeObjetoFoiEncontrado": "Brooklin",
                "moment": "2021-01-22T21:00:00Z",
                "status": "PERDIDO"
            }              
```
*__GET {{baseUrl}}/objetos/2__
>>>Buscar objeto por 'Id'

*__PUT {{baseUrl}}/objetos/2__
>>>Atualizar objeto por 'Id'

*__GET {{baseUrl}}/objetos/azul/nameIgnoreCase__
>>>Busca por nome, lembrando que é possível realizar a busca usando apenas trecho da palavra
>>>(levando em consideração possível erro de digitação ou variações de digitação de palavra realizadas pelo usuário)

>>>Response Body:
```
            {
                "id": 3,
                "descricaoDoObjeto": "Boné azul ",
                "bairroOndeObjetoFoiEncontrado": "Vila Olímpia",
                "moment": "2021-01-18T21:00:00Z",
                "status": "PERDIDO"
            },
            {
                "id": 4,
                "descricaoDoObjeto": "Camiseta Azulona",
                "bairroOndeObjetoFoiEncontrado": "Moema",
                "moment": "2021-01-09T21:00:00Z",
                "status": "PERDIDO"
            },
            {
                "id": 6,
                "descricaoDoObjeto": "Camisa Lacoste Azulzinha",
                "bairroOndeObjetoFoiEncontrado": "Vila Uberabinha",
                "moment": "2021-01-18T21:00:00Z",
                "status": "ACHADO"
            },
            {
                "id": 15,
                "descricaoDoObjeto": "Boné Trucker Azulzinho",
                "bairroOndeObjetoFoiEncontrado": "Itaim Bibi",
                "moment": "2021-01-11T21:00:00Z",
                "status": "ACHADO"
            },
            {
                "id": 16,
                "descricaoDoObjeto": "Chinelo Azulão",
                "bairroOndeObjetoFoiEncontrado": "Moema",
                "moment": "2021-01-19T21:00:00Z",
                "status": "PERDIDO"
            }
```
*__GET {{baseUrl}}/objetos/nomeDoObjetoAsc__
>>>Buscar por todos os objetos (achados ou perdidos).
>>>Nomes em ordem ascendente

*__GET {{baseUrl}}/objetos/somenteObjetosPerdidosnameAsc__
>>>Busca que traz relação apenas dos objetos com status 'PERDIDO'
>>>Nomes em ordem ascendente

*__GET {{baseUrl}}/objetos/paginacaoComSeisParametros?direction=ASC&linesPerPage=0&min=2021-01-07T10:00:00Z&max=2021-01-15T13:00:00Z&orderBy=moment&page=0__
>>>O operador informa, opcionalmente, uma data inicial e data final (intervalo de tempo) 
>>>para filtrar os dados. Foi implementado requisição paginada (contendo seis parâmetros).

*__POST {{baseUrl}}/cadastros__
>>>O proprietário do objeto perdido/extraviado precisa necessáriamente preencher cadastro,
>>>antes de tomar posse novamente dos seus itens.

>>>Para complementar as informações referentes ao endereço, implementamos o consumo 
>>>do Webservice 'ViaCep', adotando o Spring Cloud OpenFeign.

>>>Devido ao Spring Validation, ao utilizar o Postman para testar a requisição, necessário buscar 
>>>CEP, CPF e E-mail no site 'https://www.4devs.com.br/gerador_de_pessoas'.

>>>Lembrando que CPF e E-mail devem ser válidos e únicos (não repetidos).

>>>Request Body:
```
                {
                  "nome": "Cecília Teresinha Malu Campos",
                  "cpf": "675.111.172-01",
                  "dataDeNascimento": "05-08-1987",
                  "email": "cecilia-91@pichler.com.br",
                  "cep": "79005-090",
                  "complemento": "Apt 1802",
                  "numero": 267
                }
```

>>>Response Body:
```
                {
                    "id": 11,
                    "nome": "Cecília Teresinha Malu Campos",
                    "email": "cecilia-91@pichler.com.br",
                    "cpf": "675.111.172-01",
                    "dataDeNascimento": "05-08-1987",
                    "logradouro": "Rua Olavo Bilac",
                    "numero": 267,
                    "complemento": "Apt 1802",
                    "bairro": "Vila Carvalho",
                    "localidade": "Campo Grande",
                    "uf": "MS",
                    "cep": "79005-090"
                }
```

*__GET {{baseUrl}}/cadastros/902.651.298-85__
>>>Busca de proprietários previamente cadastrados por CPF.

*__PUT {{baseUrl}}/objetos/2/objetoAchado__
>>>Atualização de status de um objeto (com 'Id 2') de 'PERDIDO' para 'ACHADO'.

*__POST {{baseUrl}}/solicitacaoDePropriedade__
>>>Solicitação de deferimento de propriedade.

>>>É informado o 'Id' do proprietário do objeto (previamente cadastrado).

>>>São informados os 'Ids' dos objetos cujos proprietário veio buscar (necessário mudar previamente o status dos mesmos para 'ACHADO').

>>>Request Body:
```
                {
                        "cadastroDoDonoDoObjetoId": 1,    
                        "objetos": [
                                {     
                                    "id": 2    
                                },
                                {     
                                    "id": 5    
                                }
                        ]  
                }	
```

>>>Response Body:
```
                {
                    "id": 13,
                    "moment": "2021-12-30T23:57:25.791142300Z",
                    "cadastroDoDonoDoObjetoId": 1,
                    "nome": "Daiane Ana Bernardes",
                    "cpf": "277.627.008-97",
                    "dataDeNascimento": "04-10-2006",
                    "logradouro": "Rua das Fiandeiras",
                    "numero": 470,
                    "complemento": "Apt 2002",
                    "bairro": "Vila Olímpia",
                    "localidade": "São Paulo",
                    "uf": "SP",
                    "cep": "04545-002",
                    "objetos": [
                        {
                            "id": 5,
                            "descricaoDoObjeto": "Documento CPF 439.132.108-06 ",
                            "bairroOndeObjetoFoiEncontrado": "Vila Clementino",
                            "moment": "2021-01-12T11:00:00Z",
                            "status": "ACHADO"
                        },
                        {
                            "id": 2,
                            "descricaoDoObjeto": "Aparador de Pelos, Wahl, Mini Groomsman 3 em 1, 5608-548, Preto",
                            "bairroOndeObjetoFoiEncontrado": "Vila Uberabinha",
                            "moment": "2021-01-26T21:00:00Z",
                            "status": "ACHADO"
                        }
                    ]
                }
```

*__DELETE {{baseUrl}}/objetos/5__
>>>Apagar objeto previamente cadastrado.

>>>Caso o objeto previamente cadastrado 'Id 10' tenha sido deletado e, por engano, este memso objeto 'Id 10' seja inserido em nova solicitação de propriedade,
>>>tal solicitação não será aceita.

>>>Lembrando que não é possível deletar objeto já associado a solicitação de deferimento de propriedade.
>>>(analisando o exemplo da requisição acima, o objeto de 'Id 5' não seria deletado pelo nosso sistema).

*__GET {{baseUrl}}/solicitacaoDePropriedade/page?min=&max=&direction=ASC&linesPerPage=0&orderBy=moment&page=0__
>>>Foi implementado requisição paginada (contendo seis parâmetros). O operador informa, opcionalmente, uma data inicial e data final (intervalo de tempo) 
>>>para filtrar os dados. 
