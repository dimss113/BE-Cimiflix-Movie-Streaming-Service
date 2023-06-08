const { moviestatus } = require("../models");

const getAllMovieStatus = () => {
  return moviestatus.findAll();
};

const addMovieStatus = (data) => {
  return moviestatus.create(data);
};

const updateMovieStatus = (data, id) => {
  return moviestatus.update(data, {
    where: {
      id: id,
    },
  });
};

const deleteMovieStatus = (id) => {
  return moviestatus.destroy({
    where: {
      id: id,
    },
  });
};

const getMovieStatusById = (id) => {
  return moviestatus.findOne({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getAllMovieStatus,
  addMovieStatus,
  updateMovieStatus,
  deleteMovieStatus,
  getMovieStatusById,
};
