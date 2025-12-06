"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Usuarios",
      [
        {
          nombre: "Admin",
          apellido: "User",
          usuario: "admin",
          rol: "admin",
          cargo: "Administrador de Sistemas",
          contrasena: "password123", // IMPORTANT: Passwords should be hashed in a real application
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Lucia",
          apellido: "Gomez",
          usuario: "lgomez",
          rol: "gerencia_general",
          cargo: "Gerente General",
          contrasena: "password123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Carlos",
          apellido: "Quispe",
          usuario: "cquispe",
          rol: "marketin",
          cargo: "Jefe de Marketing",
          contrasena: "password123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Sofia",
          apellido: "Rojas",
          usuario: "srojas",
          rol: "cliente",
          cargo: null,
          contrasena: "password123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Javier",
          apellido: "Flores",
          usuario: "jflores",
          rol: "operaciones",
          cargo: "Jefe de Operaciones",
          contrasena: "password123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Mariana",
          apellido: "Torres",
          usuario: "mtorres",
          rol: "desarrollo_de_negocios",
          cargo: "Analista de Negocios",
          contrasena: "password123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nombre: "Ricardo",
          apellido: "Vargas",
          usuario: "rvargas",
          rol: "gerencia_ti",
          cargo: "Gerente de TI",
          contrasena: "password123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Usuarios", null, {});
  },
};
