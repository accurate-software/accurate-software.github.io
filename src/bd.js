const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('accurate', 'root', 'root', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql'
});

const connectSequelize = async () => {
  try {
    await sequelize.authenticate();
    console.log('Successfully connected to Database');
  } catch (error) {
    console.error('Database Connecting Error:', error);
  }
}
connectSequelize();

module.exports = sequelize;