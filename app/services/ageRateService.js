const ageRateRepository = require("../repositories/ageRateRepository");

const getAllAgeRates = async () => {
  try {
    const agerates = await ageRateRepository.getAllAgeRates();
    return agerates;
  } catch (error) {
    return error;
  }
};

const addAgeRate = async (data) => {
  try {
    const agerates = await ageRateRepository.addAgeRate(data);
    return agerates;
  } catch (error) {
    return error;
  }
};

const updateAgeRate = async (data, id) => {
  try {
    const agerates = await ageRateRepository.updateAgeRate(data, id);
    return agerates;
  } catch (error) {
    return error;
  }
};

const deleteAgeRate = async (id) => {
  try {
    const agerates = await ageRateRepository.deleteAgeRate(id);
    return agerates;
  } catch (error) {
    return error;
  }
};

const getAgeRateById = async (id) => {
  try {
    const agerates = await ageRateRepository.getAgeRateById(id);
    return agerates;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAgeRates,
  addAgeRate,
  updateAgeRate,
  deleteAgeRate,
  getAgeRateById,
};
