'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Achado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Achado.init({
    descricao: DataTypes.STRING,
    localEncontrado: DataTypes.STRING,
    data: DataTypes.DATE,
    devolvido: DataTypes.BOOLEAN,
    devolvidoPara: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Achado',
  });
  return Achado;
};