'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perdido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Perdido.init({
    descricao: DataTypes.STRING,
    localPerda: DataTypes.STRING,
    data: DataTypes.DATE,
    recuperado: DataTypes.BOOLEAN,
    nomeProprietario: DataTypes.STRING,
    enderecoProprietario: DataTypes.STRING,
    telefoneProprietario: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Perdido',
  });
  return Perdido;
};