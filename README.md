# lostfound
 projeto de achados e perdidos - backend


SISTEMA DE ACHADOS E PERDIDOS

PROJETO - INICIADO 09/01/2022

    Cadastro de Objetos Achados (achado)
        descricao: string
        localEncontrado: string
        data: date
        devolvido: boolean
        devolvidoPara: string


    Cadastro de Objetos Perdidos (perdido)
        descricao: string
        localPerda: string
        data: date
        recuperado: boolean
        nomeProprietario: string
        enderecoProprietario: string
        telefoneProprietario: string

LINKS:
localhost:3001/incluir-achado = inclui registro de objeto achado
localhost:3001/incluir-perdido = inclui registro de objeto perdido
localhost:3001/listar-achados = lista todos objetos achados
localhost:3001/listar-perdidos = lista todos objetos perdidos
localhost:3001/editar-achado/:id = edita registro de objeto achado
localhost:3001/editar-perdido/:id = edita registro de objeto perdido
localhost:3001/excluir-achado/:id = exclui registro de objeto achado
localhost:3001/excluir-perdido/:id = exclui registro de objeto achado
