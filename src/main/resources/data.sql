INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Pedro', 'Almeida', 'pedro@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Silvia', 'Camilla', 'silvia@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_cadastro (bairro, cep, complemento, localidade, logradouro, numero, uf, cpf, email, nome, data_de_nascimento) VALUES ('Vila Olímpia', '04545-002', 'Apt 2002', 'São Paulo', 'Rua das Fiandeiras', 470, 'SP', '277.627.008-97', 's__daianeanabernardes@autbook.com', 'Daiane Ana Bernardes', TIMESTAMP WITH TIME ZONE '2006-10-04 05:00:00Z');
INSERT INTO tb_cadastro (bairro, cep, complemento, localidade, logradouro, numero, uf, cpf, email, nome, data_de_nascimento) VALUES ('Moema', '04077-020', 'Casa 3', 'São Paulo', 'Avenida Moema', 349, 'SP', '380.262.088-70', 'ooliviasaracardoso@wwlimpador.com.br', 'Olivia Sara Cardoso', TIMESTAMP WITH TIME ZONE '1986-04-27 21:00:00Z');
INSERT INTO tb_cadastro (bairro, cep, complemento, localidade, logradouro, numero, uf, cpf, email, nome, data_de_nascimento) VALUES ('Vila Uberabinha', '04514-090', 'Edf. Ema', 'São Paulo', 'Travessa Vera Cruz do Oeste', 5521, 'SP', '975.359.708-85', 'bbryancaleblima@abcautoservice.net', 'Bryan Caleb Lima', TIMESTAMP WITH TIME ZONE '1942-02-21 06:00:00Z');
INSERT INTO tb_cadastro (bairro, cep, complemento, localidade, logradouro, numero, uf, cpf, email, nome, data_de_nascimento) VALUES ('Moema', '04524-030', 'Apt 201', 'São Paulo', 'Avenida Bem-te-vi', 235, 'SP', '225.102.198-12', 'marcosluccathomasnovaes-94@lht.com.br', 'Marcos Lucca Thomas Novaes', TIMESTAMP WITH TIME ZONE '1980-11-20 20:00:00Z');
INSERT INTO tb_cadastro (bairro, cep, complemento, localidade, logradouro, numero, uf, cpf, email, nome, data_de_nascimento) VALUES ('Vila Olímpia', '04552-010', 'Bl-D, Apt 2504', 'São Paulo', 'Travessa Doutor José Alves de Souza Neto', 1185, 'SP', '137.991.538-45', 'murilotomasdias..murilotomasdias@vick1.com.br', 'Murilo Tomás Dias', TIMESTAMP WITH TIME ZONE '1952-04-22 10:00:00Z');
INSERT INTO tb_cadastro (bairro, cep, complemento, localidade, logradouro, numero, uf, cpf, email, nome, data_de_nascimento) VALUES ('Moema', '04521-022', 'Casa E', 'São Paulo', 'Rua Ministro Gabriel de Rezende Passos', 1352, 'SP', '561.541.078-70', 'alicealanadasilva_@acmorgado.com.br', 'Alice Alana da Silva', TIMESTAMP WITH TIME ZONE '1988-10-26 20:00:00Z');
INSERT INTO tb_cadastro (bairro, cep, complemento, localidade, logradouro, numero, uf, cpf, email, nome, data_de_nascimento) VALUES ('Moema', '04521-001', 'Condomínio Azul', 'São Paulo', 'Rua Canário', 499, 'SP', '096.060.708-08', 'mmarcelopaulodossantos@cntbrasil.com.br', 'Marcelo Paulo dos Santos', TIMESTAMP WITH TIME ZONE '2003-05-08 22:00:00Z');
INSERT INTO tb_cadastro (bairro, cep, complemento, localidade, logradouro, numero, uf, cpf, email, nome, data_de_nascimento) VALUES ('Vila Olímpia', '04548-030', 'Apt 1502', 'São Paulo', 'Rua Bramantino', 56, 'SP', '902.651.298-85', 'aandreapereira@lagencemodelos.com.br', 'Andrea Emanuelly Pereira', TIMESTAMP WITH TIME ZONE '1968-11-12 16:00:00Z');
INSERT INTO tb_cadastro (bairro, cep, complemento, localidade, logradouro, numero, uf, cpf, email, nome, data_de_nascimento) VALUES ('Moema', '04524-901', 'Bl-23, Apt 303', 'São Paulo', 'Alameda dos Arapanés', 309, 'SP', '801.168.188-59', 'andreiagiovana-96@acmsaopaulo.com', 'Andreia Giovana Bárbara da Rocha', TIMESTAMP WITH TIME ZONE '1990-09-04 20:00:00Z');
INSERT INTO tb_cadastro (bairro, cep, complemento, localidade, logradouro, numero, uf, cpf, email, nome, data_de_nascimento) VALUES ('Vila Uberabinha', '04514-906', 'Prédio', 'São Paulo', 'Rua Graúna', 419, 'SP', '101.833.168-94', 'soniagabrielamilenadamota_@rauh.net', 'Sônia Gabriela Milena da Mota', TIMESTAMP WITH TIME ZONE '1989-07-03 05:00:00Z');

INSERT INTO tb_solicitacao (moment, cadastro_do_dono_do_objeto_id) VALUES (TIMESTAMP WITH TIME ZONE '2021-01-01T10:00:00Z', 1);
INSERT INTO tb_solicitacao (moment, cadastro_do_dono_do_objeto_id) VALUES (TIMESTAMP WITH TIME ZONE '2021-01-01T15:00:00Z', 2);

INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Itaim Bibi',  TIMESTAMP WITH TIME ZONE '2021-01-16T17:00:00Z', 'Documento CPF 156.499.562-07', 'ACHADO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Brooklin',  TIMESTAMP WITH TIME ZONE '2021-01-26T21:00:00Z', 'Viseira branca', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Vila Olímpia',  TIMESTAMP WITH TIME ZONE '2021-01-18T21:00:00Z', 'Boné azul ', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Moema',  TIMESTAMP WITH TIME ZONE '2021-01-09T21:00:00Z', 'Camiseta Azulona', 'ACHADO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Vila Clementino',  TIMESTAMP WITH TIME ZONE '2021-01-12T11:00:00Z', 'Documento CPF 439.132.108-06 ', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Vila Uberabinha',  TIMESTAMP WITH TIME ZONE '2021-01-18T21:00:00Z', 'Camisa Lacoste Azulzinha', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Brooklin',  TIMESTAMP WITH TIME ZONE '2021-01-03T07:00:00Z', 'Documento RG 39.142.008-2', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Vila Olímpia',  TIMESTAMP WITH TIME ZONE '2021-01-07T21:00:00Z', 'Bolsa branca', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Itaim Bibi',  TIMESTAMP WITH TIME ZONE '2021-01-21T21:00:00Z', 'Chave de automóvel Hyundai, chaveiro branco', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Vila Uberabinha',  TIMESTAMP WITH TIME ZONE '2021-01-23T21:00:00Z', 'Livro didático de química, capa branca', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Brooklin',  TIMESTAMP WITH TIME ZONE '2021-01-20T21:00:00Z', 'Bola de basquete', 'ACHADO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Itaim Bibi',  TIMESTAMP WITH TIME ZONE '2021-01-11T21:00:00Z', 'Camisa do flamengo', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Itaim Bibi',  TIMESTAMP WITH TIME ZONE '2021-01-16T11:00:00Z', 'Documento RG 39.372.780-4', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Vila Olímpia',  TIMESTAMP WITH TIME ZONE '2021-01-15T21:00:00Z', 'Bola de futebol americano', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Itaim Bibi',  TIMESTAMP WITH TIME ZONE '2021-01-11T21:00:00Z', 'Boné Trucker Azulzinho', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Moema',  TIMESTAMP WITH TIME ZONE '2021-01-19T21:00:00Z', 'Chinelo Azulão', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Vila Clementino',  TIMESTAMP WITH TIME ZONE '2021-01-07T15:00:00Z', 'Documento RG 39.142.499-2 ', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Moema',  TIMESTAMP WITH TIME ZONE '2021-01-08T21:00:00Z', 'Livro Argo, capa preta', 'ACHADO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Itaim Bibi',  TIMESTAMP WITH TIME ZONE '2021-01-24T21:00:00Z', 'Boné Aba Curva preto ', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Vila Olímpia',  TIMESTAMP WITH TIME ZONE '2021-01-25T21:00:00Z', 'Chuteira de futebol de campo, cadarço branco', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Brooklin',  TIMESTAMP WITH TIME ZONE '2021-01-01T10:00:00Z', 'Documento CPF 757.499.238-00', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Vila Uberabinha',  TIMESTAMP WITH TIME ZONE '2021-01-10T21:00:00Z', 'Chave de automóvel Toyota, chaveiro preto', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Moema',  TIMESTAMP WITH TIME ZONE '2021-01-13T21:00:00Z', 'Relógio analógico, detalhes em branco', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Itaim Bibi',  TIMESTAMP WITH TIME ZONE '2021-01-27T21:00:00Z', 'Bolsa preta', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Itaim Bibi',  TIMESTAMP WITH TIME ZONE '2021-01-06T21:00:00Z', 'Livro da área de saúde, capa preta', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Brooklin',  TIMESTAMP WITH TIME ZONE '2021-01-22T21:00:00Z', 'Fone de ouvido, preto', 'ACHADO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Vila Clementino',  TIMESTAMP WITH TIME ZONE '2021-01-14T11:00:00Z', 'Documento RG 57.372.780-4', 'PERDIDO');
INSERT INTO tb_objeto (bairro_onde_objeto_foi_encontrado, moment, descricao_do_objeto, status_do_objeto) VALUES ('Moema',  TIMESTAMP WITH TIME ZONE '2021-01-25T21:00:00Z', 'Garrafa Squeeze branca', 'PERDIDO');

INSERT INTO tb_solicitacao_objeto (solicitacao_id, objeto_id) VALUES (1 , 1);
INSERT INTO tb_solicitacao_objeto (solicitacao_id, objeto_id) VALUES (1 , 4);
INSERT INTO tb_solicitacao_objeto (solicitacao_id, objeto_id) VALUES (2 , 11);
INSERT INTO tb_solicitacao_objeto (solicitacao_id, objeto_id) VALUES (2 , 18);
INSERT INTO tb_solicitacao_objeto (solicitacao_id, objeto_id) VALUES (2 , 26);