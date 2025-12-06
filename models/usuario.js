"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init(
    {
      nombre: { type: DataTypes.STRING(50), allowNull: false },
      apellido: { type: DataTypes.STRING(50), allowNull: false },
      usuario: { type: DataTypes.STRING(50), allowNull: false },
      rol: {
        type: DataTypes.ENUM(
          "admin",
          "gerencia_general",
          "marketin",
          "operaciones",
          "desarrollo_de_negocios",
          "gerencia_ti",
          "cliente"
        ),
        allowNull: false,
      },
      cargo: { type: DataTypes.STRING(50), allowNull: true },
      contrasena: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Usuario",
    }
  );
  return Usuario;
};
