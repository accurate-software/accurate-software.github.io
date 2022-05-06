const { DataTypes } = require('sequelize');
const sequelize = require('../../bd.js');

const Categorie = sequelize.define('categorie', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  modelName: 'categorie',
  timestamps: true
});

Categorie.sync();

module.exports = Categorie;