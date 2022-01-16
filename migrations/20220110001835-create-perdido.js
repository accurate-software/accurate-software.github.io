'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Perdidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      localPerda: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.DATE
      },
      recuperado: {
        type: Sequelize.BOOLEAN
      },
      nomeProprietario: {
        type: Sequelize.STRING
      },
      enderecoProprietario: {
        type: Sequelize.STRING
      },
      telefoneProprietario: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Perdidos');
  }
};