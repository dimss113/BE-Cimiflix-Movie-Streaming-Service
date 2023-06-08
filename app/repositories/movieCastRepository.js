const { moviecast } = require("../models");

const getAllMovieCasts = () => {
  return moviecast.findAll();
};

const addMovieCast = (data) => {
  return moviecast.create(data);
};

const getCastIdByMovieId = (id) => {
  return moviecast.findAll({
    where: {
      movie_id: id,
    },
  });
};

const getMovieIdByCastId = (id) => {
  return moviecast.findAll({
    where: {
      cast_id: id,
    },
  });
};

const deleteMovieCastById = (id) => {
  return moviecast.destroy({
    where: {
      id: id,
    },
  });
};

const updateMovieCastById = (data, id) => {
  return moviecast.update(data, {
    where: {
      id: id,
    },
  });
};

module.exports = {
  getAllMovieCasts,
  addMovieCast,
  getCastIdByMovieId,
  getMovieIdByCastId,
  deleteMovieCastById,
  updateMovieCastById,
};
