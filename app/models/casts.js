"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class casts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  casts.init(
    {
      nama: DataTypes.STRING,
      slug: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "casts",
    }
  );
  return casts;
};
