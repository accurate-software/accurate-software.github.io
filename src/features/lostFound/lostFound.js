const { DataTypes } = require('sequelize');
const sequelize = require('../../bd.js')
const Category = require('../category/category.js')

const LostFound = sequelize.define('LostFound', {
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
  category: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: 'id',
    }
  }
}, {
  modelName: 'Category',
  timestamps: false
});

LostFound.hasMany(Category, { foreignKey: 'category' })
LostFound.sync();

module.exports = LostFound;