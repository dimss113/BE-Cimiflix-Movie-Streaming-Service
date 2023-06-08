'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      tahun_rilis: {
        type: Sequelize.INTEGER
      },
      deskripsi: {
        type: Sequelize.TEXT
      },
      resolusi: {
        type: Sequelize.STRING
      },
      durasi: {
        type: Sequelize.INTEGER
      },
      director: {
        type: Sequelize.STRING
      },
      studio_produksi: {
        type: Sequelize.STRING
      },
      genre_id: {
        type: Sequelize.INTEGER
      },
      rating_umur_id: {
        type: Sequelize.INTEGER
      },
      moviestatus_id: {
        type: Sequelize.INTEGER
      },
      gambar: {
        type: Sequelize.BLOB
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  }
};