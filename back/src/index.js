const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");


mongoose.connect(
  "mongodb+srv://root:patomalk33@cluster0-0hwzz.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//Configurações do Swagger
// const swaggerOptions = {
//   swaggerDefinition: {},
//   apis: [`${__dirname}/swagger.js`]
// }

const swaggerDocument = require("./sw.json");
  
//const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

var cors = require('cors');

app.use(cors({ origin: 'http://localhost:8080' }));
//app.use(cors({ origin: 'http://localhost:3333' }));

app.use(express.json());

app.use(routes);

app.listen(3333);
