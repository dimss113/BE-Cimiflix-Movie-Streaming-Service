const movieStatusRepository = require("../repositories/movieStatusRepository");

const getAllMovieStatus = async () => {
  try {
    const moviestatus = await movieStatusRepository.getAllMovieStatus();

    return moviestatus;
  } catch (err) {
    return err;
  }
};

const addMovieStatus = async (data) => {
  try {
    const moviestatus = await movieStatusRepository.addMovieStatus(data);

    return moviestatus;
  } catch (err) {
    return err;
  }
};

const updateMovieStatus = async (data, id) => {
  try {
    const moviestatus = await movieStatusRepository.updateMovieStatus(data, id);

    return moviestatus;
  } catch (err) {
    return err;
  }
};

const deleteMovieStatus = async (id) => {
  try {
    const moviestatus = await movieStatusRepository.deleteMovieStatus(id);

    return moviestatus;
  } catch (err) {
    return err;
  }
};

const getMovieStatusById = async (id) => {
  try {
    const moviestatus = await movieStatusRepository.getMovieStatusById(id);
    return moviestatus;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllMovieStatus,
  addMovieStatus,
  updateMovieStatus,
  deleteMovieStatus,
  getMovieStatusById,
};
