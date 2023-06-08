const { agerates } = require("../models");

const getAllAgeRates = () => {
  return agerates.findAll();
};

const addAgeRate = (data) => {
  return agerates.create(data);
};

const updateAgeRate = (data, id) => {
  return agerates.update(data, {
    where: {
      id: id,
    },
  });
};

const deleteAgeRate = (id) => {
  return agerates.destroy({
    where: {
      id: id,
    },
  });
};

const getAgeRateById = (id) => {
  return agerates.findOne({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getAllAgeRates,
  addAgeRate,
  updateAgeRate,
  deleteAgeRate,
  getAgeRateById,
};
