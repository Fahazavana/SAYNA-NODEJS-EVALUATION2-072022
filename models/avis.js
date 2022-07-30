"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Avis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Avis.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      firstname: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
      avis: {
        type: DataTypes.STRING,
      },
      note: {
        type: DataTypes.INTEGER,
      },
      formation: {
        type: DataTypes.ENUM("Frontend", "Backend", "Marketing", "UX-UI"),
        defaultValue: "Frontend",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Avis",
      timestamps: true,
      createdAt: true,
    }
  );
  return Avis;
};
