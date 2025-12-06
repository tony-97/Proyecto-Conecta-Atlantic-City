"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Usuarios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      apellido: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      usuario: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      rol: {
        allowNull: false,
        type: Sequelize.ENUM(
          "admin",
          "gerencia_general",
          "marketin",
          "operaciones",
          "desarrollo_de_negocios",
          "gerencia_ti",
          "cliente"
        ),
      },
      cargo: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      contrasena: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Usuarios");
  },
};
