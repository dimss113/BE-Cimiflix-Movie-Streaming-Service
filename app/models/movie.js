"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  movie.init(
    {
      nama: DataTypes.STRING,
      slug: DataTypes.STRING,
      tahun_rilis: DataTypes.INTEGER,
      deskripsi: DataTypes.TEXT,
      resolusi: DataTypes.STRING,
      durasi: DataTypes.INTEGER,
      director: DataTypes.STRING,
      studio_produksi: DataTypes.STRING,
      genre_id: DataTypes.INTEGER,
      rating_umur_id: DataTypes.INTEGER,
      moviestatus_id: DataTypes.INTEGER,
      gambar: DataTypes.BLOB,
    },
    {
      sequelize,
      modelName: "movie",
    }
  );
  return movie;
};
