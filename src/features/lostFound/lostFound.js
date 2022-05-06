const { DataTypes } = require('sequelize');
const sequelize = require('../../bd.js')
const Categorie = require('../categorie/categorie.js')

const LostFound = sequelize.define('lost_founds', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  categorie: {
    type: DataTypes.INTEGER,
    references: {
      model: Categorie,
      key: 'id',
    } 
  }
}, {
  modelName: 'lost_founds',
  timestamps: false
});

LostFound.sync();

module.exports = LostFound;