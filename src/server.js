const express = require('express')
const app = express()
const port = 3000
const sequelize = require('./bd.js');
const categorieRoutes = require('./features/categorie/categorieRoutes');
const lostFoundRoutes = require('./features/lostFound/lostFoundRoutes');

app.use(express.json());

categorieRoutes(app, sequelize);
lostFoundRoutes(app, sequelize);

app.listen(port, () => {
  console.log(`Rodando na porta: ${port}`)
})