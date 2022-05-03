const express = require('express')
const app = express()
const port = 3000
const sequelize = require('./bd.js');
const categoryRoutes = require('./features/category/categoryRoutes.js')
const lostFoundRoutes = require('./features/lostFound/lostFoundRoutes.js')

app.use(express.json());

categoryRoutes(app);
lostFoundRoutes(app, sequelize);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})