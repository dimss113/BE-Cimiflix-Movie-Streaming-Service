"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint("movies", {
      fields: ["genre_id"],
      type: "foreign key",
      name: "movie_idCategories_fk",
      references: {
        table: "categories",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("movies", {
      fields: ["rating_umur_id"],
      type: "foreign key",
      name: "movie_idAgeRates_fk",
      references: {
        table: "agerates",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("movies", {
      fields: ["moviestatus_id"],
      type: "foreign key",
      name: "movie_idMovieStatus_fk",
      references: {
        table: "moviestatuses",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("moviecasts", {
      fields: ["movie_id"],
      type: "foreign key",
      name: "movie_idMovieId_fk",
      references: {
        table: "movies",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("moviecasts", {
      fields: ["cast_id"],
      type: "foreign key",
      name: "cast_idCastId_fk",
      references: {
        table: "casts",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
