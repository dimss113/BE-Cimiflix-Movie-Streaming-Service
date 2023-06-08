const castRepository = require("../repositories/castRepository");
const { get } = require("../routes/movieRoute");

const getAllCasts = async () => {
  try {
    const casts = await castRepository.getAllCasts();
    return casts;
  } catch (error) {
    throw new Error(error);
  }
};

const addCast = async (data) => {
  try {
    const casts = await castRepository.addCast(data);
    return casts;
  } catch (error) {
    throw new Error(error);
  }
};

const updateCast = async (data, id) => {
  try {
    const casts = await castRepository.updateCast(data, id);
    return casts;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteCast = async (id) => {
  try {
    const casts = await castRepository.deleteCast(id);
    return casts;
  } catch (error) {
    throw new Error(error);
  }
};

const getCastById = async (id) => {
  try {
    const casts = await castRepository.getCastById(id);
    return casts;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllCasts,
  addCast,
  updateCast,
  deleteCast,
  getCastById,
};
