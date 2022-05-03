const { DataTypes } = require('sequelize');
const sequelize = require('../../bd.js')

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  modelName: 'Category',
  timestamps: true
});

Category.sync();

module.exports = Category;