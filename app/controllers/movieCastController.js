const movieCastService = require("../services/movieCastService");

const getAllMovieCasts = async (req, res) => {
  movieCastService.getAllMovieCasts().then((moviecasts) => {
    res.status(200).json({
      status: "success",
      message: "Successfully get all moviecasts",
      data: moviecasts,
    });
  });
};

const addMovieCast = async (req, res) => {
  movieCastService.addMovieCast(req.body).then((moviecasts) => {
    res.status(200).json({
      status: "success",
      message: "Successfully add moviecast",
      data: moviecasts,
    });
  });
};

const getCastIdByMovieId = async (req, res) => {
  movieCastService.getCastIdByMovieId(req.params.id).then((moviecasts) => {
    res.status(200).json({
      status: "success",
      message: "Successfully get moviecast by movie id",
      data: moviecasts,
    });
  });
};

const getMovieIdByCastId = async (req, res) => {
  movieCastService.getMovieIdByCastId(req.params.id).then((moviecasts) => {
    res.status(200).json({
      status: "success",
      message: "Successfully get moviecast by cast id",
      data: moviecasts,
    });
  });
};

const deleteMovieCastById = async (req, res) => {
  movieCastService.deleteMovieCastById(req.params.id).then((moviecasts) => {
    res.status(200).json({
      status: "success",
      message: "Successfully delete moviecast by id",
      data: moviecasts,
    });
  });
};

const updateMovieCastById = async (req, res) => {
  movieCastService
    .updateMovieCastById(req.body, req.params.id)
    .then((moviecasts) => {
      res.status(200).json({
        status: "success",
        message: "Successfully update moviecast by id",
        data: moviecasts,
      });
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
