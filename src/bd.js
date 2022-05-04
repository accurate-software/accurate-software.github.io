require('dotenv').config()
const { Sequelize } = require('sequelize');
const DB_URL = process.env.DB_URL;
const DB_PORT = process.env.DB_PORT || 3000;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_URL,
  port: DB_PORT,
  dialect: 'mysql'
});

const connectSequelize = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado com sucesso no banco.');
  } catch (error) {
    console.error('Erro de conexão com o banco:', error);
  }
}
connectSequelize();

module.exports = sequelize;