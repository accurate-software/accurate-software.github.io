const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const connStr = "Server=localhost\\SQLEXPRESS; Database=testeback; User Id = usuarioteste; Password = senhateste; TrustServerCertificate=True; ";
const sql = require("mssql");

sql.connect(connStr)
	.then(conn => global.conn = conn)
	.catch(err=>console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'OK!' }));
app.use('/', router);


app.listen(port);
console.log('Teste backend está executando...!');

function execSQLQuery(sqlQry){
    return global.conn.request()
               .query(sqlQry)
               
}


/* Busca os achados/perdidos, opcionalmente pode filtrar via query string passando ?categoria=num&nome=string   (categoria e/ou nome), se nao for informado filtro retorna todos. */
router.get('/buscar', (req, res) =>{
	try {
		let filter = '';
	
		if(req.query.categoria) {
			filter = ' WHERE categoria=' + parseInt(req.query.categoria);
		}
		if(req.query.nome) {
			if(filter) {
				filter += " AND ";
			} else {
				filter += " WHERE "
			}
			filter += " nome LIKE '%" + req.query.nome + "%' ";
		}
		
		var query = "SELECT * FROM achadoPerdido ";
		console.log(query + ' ' + filter);

		execSQLQuery(query + ' ' + filter).then(result => res.json(result.recordset))
				   .catch(err => res.json(err));
	} catch(ex) {
		res.json({"error":"Ocorreu um erro ao tentar consultar os achados e perdidos"});
	}
    
			   
});

/* Insere um achado perdido e retorna o ID desse novo achado/perdido criado */
router.post('/cadastrarAchadoPerdido', (req, res) =>{
	try {
		const nome = req.body.nome;
		const descricao = req.body.descricao;
		const categoria = parseInt(req.body.categoria);
		const devolvido = req.body.devolvido;
		var query = `INSERT INTO achadoPerdido(nome, descricao, categoria, devolvido) VALUES('${nome}','${descricao}','${categoria}','${devolvido}'); SELECT SCOPE_IDENTITY() AS id;`;
		console.log(query);
		execSQLQuery(query).then(result => {console.log(result); res.json(result.recordset);})
		.catch(err => res.json(err));
	} catch(ex) {
		res.json({"error":"Ocorreu um erro ao tentar salvar um achado/perdido"});
	}
}); 