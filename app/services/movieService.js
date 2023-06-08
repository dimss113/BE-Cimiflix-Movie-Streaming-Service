const movieRepository = require("../repositories/movieRepository");

const getAllMovies = async () => {
  try {
    const movies = await movieRepository.getAllMovies();
    return movies;
  } catch (err) {
    throw new Error(err);
  }
};

const addMovie = async (data) => {
  try {
    const movies = await movieRepository.addMovie(data);
    return movies;
  } catch (err) {
    throw new Error(err);
  }
};

const updateMovie = async (data, id) => {
  try {
    const movies = await movieRepository.updateMovie(data, id);
    return movies;
  } catch (err) {
    throw new Error(err);
  }
};

const deleteMovie = async (id) => {
  try {
    const movies = await movieRepository.deleteMovie(id);
    return movies;
  } catch (err) {
    throw new Error(err);
  }
};

const getMoviePhotobyId = async (id) => {
  try {
    const movies = await movieRepository.getMoviePhotobyId(id);
    return movies;
  } catch (err) {
    throw new Error(err);
  }
};

const getMoviebyId = async (id) => {
  try {
    const movies = await movieRepository.getMoviebyId(id);
    return movies;
  } catch (err) {
    throw new Error(err);
  }
};

const getMovieBySlug = async (slug) => {
  try {
    const movies = await movieRepository.getMovieBySlug(slug);
    return movies;
  } catch (err) {
    throw new Error(err);
  }
};

const getAllMoviesByGenreId = async (genreId) => {
  try {
    const movies = await movieRepository.getAllMoviesByGenreId(genreId);
    return movies;
  } catch (err) {
    throw new Error(err);
  }
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
};
