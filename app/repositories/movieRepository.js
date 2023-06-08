const { movie } = require("../models");

const getAllMovies = () => {
  return movie.findAll();
};

const addMovie = (data) => {
  return movie.create(data);
};

const updateMovie = (data, id) => {
  return movie.update(data, {
    where: {
      id: id,
    },
  });
};

const deleteMovie = (id) => {
  return movie.destroy({
    where: {
      id: id,
    },
  });
};

const getMoviePhotobyId = (id) => {
  return movie.findOne({
    where: {
      id: id,
    },
    attributes: ["gambar"],
  });
};

const getMoviebyId = (id) => {
  return movie.findOne({
    where: {
      id: id,
    },
  });
};

const getMovieBySlug = (slug) => {
  return movie.findOne({
    where: {
      slug: slug,
    },
  });
};

const getAllMoviesByGenreId = (genreId) => {
  return movie.findAll({
    where: {
      genre_id: genreId,
    },
  });
};

const getAllFreeMovies = () => {
  return movie.findAll({
    where: {
      moviestatus_id: 1,
    },
  });
};

const getAllPaidMovies = () => {
  return movie.findAll({
    where: {
      moviestatus_id: 3,
    },
  });
};

module.exports = {
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie,
  getMoviePhotobyId,
  getMoviebyId,
  getMovieBySlug,
  getAllMoviesByGenreId,
  getAllFreeMovies,
  getAllPaidMovies,
};
