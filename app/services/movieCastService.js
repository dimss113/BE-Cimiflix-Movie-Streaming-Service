const movieCastRepository = require("../repositories/movieCastRepository");

const getAllMovieCasts = async () => {
  try {
    const moviecasts = await movieCastRepository.getAllMovieCasts();
    return moviecasts;
  } catch (error) {
    throw error;
  }
};

const addMovieCast = async (data) => {
  try {
    const moviecasts = await movieCastRepository.addMovieCast(data);
    return moviecasts;
  } catch (error) {
    throw error;
  }
};

const getCastIdByMovieId = async (id) => {
  try {
    const moviecasts = await movieCastRepository.getCastIdByMovieId(id);
    return moviecasts;
  } catch (error) {
    throw error;
  }
};

const getMovieIdByCastId = async (id) => {
  try {
    const moviecasts = await movieCastRepository.getMovieIdByCastId(id);
    return moviecasts;
  } catch (error) {
    throw error;
  }
};

const deleteMovieCastById = async (id) => {
  try {
    const moviecasts = await movieCastRepository.deleteMovieCastById(id);
    return moviecasts;
  } catch (error) {
    throw error;
  }
};

const updateMovieCastById = async (data, id) => {
  try {
    const moviecasts = await movieCastRepository.updateMovieCastById(data, id);
    return moviecasts;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllMovieCasts,
  addMovieCast,
  getCastIdByMovieId,
  getMovieIdByCastId,
  deleteMovieCastById,
  updateMovieCastById,
};
