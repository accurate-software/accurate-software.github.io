const express = require('express');
const cors = require('cors');

const {Sequelize} = require('./models');

const models = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

let achado=models.Achado;
let perdido=models.Perdido;

app.get('/achado', function(req, res){
    res.send('Hello World');
});

let port = process.env.PORT || 3001;

app.listen(port, (req,res)=> {
    console.log('Servidor ativo: http://localhost:3001');
});


// INCLUSAO
//Incluir cadastro de ACHADOS no banco de dados
app.post('/incluir-achado', async(req,res) =>{
    await achado.create(
     req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'Objeto achado cadastrado com sucesso'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Foi impossível se conectar'
        })
    });
});


//Incluir cadastro de PERDIDOS no banco de dados
app.post('/incluir-perdido', async(req,res) =>{
    await perdido.create(
     req.body
    ).then(function(){
        return res.json({
            error: false,
            message: 'Objeto perdido notificado com sucesso'
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: 'Foi impossível se conectar'
        })
    });
});


//LISTAGEM
//Listar cadastro de ACHADOS do banco de dados
app.get('/listar-achados', async(req,res) => {
    await achado.findAll({
        //raw: true
        order: [['descricao', 'ASC']]
    }).then(function(achados){
        res.json({achados})
    });
});


//Listar cadastro de PERDIDOS do banco de dados
app.get('/listar-perdidos', async(req,res) => {
    await perdido.findAll({
        //raw: true
        order: [['descricao', 'ASC']]
    }).then(function(perdidos){
        res.json({perdidos})
    });
});



//EDITAR
//Editar cadastro de ACHADOS do banco de dados
app.put('/editar-achado/:id', async (req,res) => {
      await achado.update (req.body,
        {where: {id: req.params.id}})
        .then(function(){
        return res.json({
            error: false,
            message: "Cadastro foi alterado com sucesso"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error: true,
            message: "Houve erro na alteração do cadastro"
        });
    });
});


//Editar cadastro de PERDIDOS do banco de dados
app.put('/editar-perdido/:id', async (req,res) => {
    await perdido.update (req.body,
      {where: {id: req.params.id}})
      .then(function(){
      return res.json({
          error: false,
          message: "Cadastro foi alterado com sucesso"
      })
  }).catch(function(erro){
      return res.status(400).json({
          error: true,
          message: "Houve erro na alteração do cadastro"
      });
  });
});



//EXCLUSAO
//Excluir cadastro de ACHADOS do banco de dados
app.get('/excluir-achado/:id', async (req,res) => {
    await achado.destroy ({where: {id: req.params.id}})
      .then(function(){
      return res.json({
          error: false,
          message: "Cadastro foi excluído com sucesso"
      })
  }).catch(function(erro){
      return res.status(400).json({
          error: true,
          message: "Houve erro na exclusão do cadastro"
      });
  });
});


//Excluir cadastro de PERDIDOS do banco de dados
app.get('/excluir-perdido/:id', async (req,res) => {
    await perdido.destroy ({where: {id: req.params.id}})
      .then(function(){
      return res.json({
          error: false,
          message: "Cadastro foi excluído com sucesso"
      })
  }).catch(function(erro){
      return res.status(400).json({
          error: true,
          message: "Houve erro na exclusão do cadastro"
      });
  });
});
