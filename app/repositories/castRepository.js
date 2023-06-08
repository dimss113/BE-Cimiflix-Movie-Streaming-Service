const { casts } = require("../models");

const getAllCasts = () => {
  return casts.findAll();
};

const addCast = (data) => {
  return casts.create(data);
};

const updateCast = (data, id) => {
  return casts.update(data, {
    where: {
      id: id,
    },
  });
};

const deleteCast = (id) => {
  return casts.destroy({
    where: {
      id: id,
    },
  });
};

const getCastById = (id) => {
  return casts.findOne({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getAllCasts,
  addCast,
  updateCast,
  deleteCast,
  getCastById,
};
