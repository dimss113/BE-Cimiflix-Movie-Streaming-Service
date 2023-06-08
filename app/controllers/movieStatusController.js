const movieStatusService = require("../services/movieStatusService");
const slugify = require("slugify");

const getAllMovieStatus = async (req, res) => {
  movieStatusService
    .getAllMovieStatus()
    .then((moviestatus) => {
      res.status(200).json({
        status: "Success",
        message: "Success get all data movie status",
        data: moviestatus,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

const addMovieStatus = async (req, res) => {
  const { jenis } = req.body;
  const slugjenis = slugify(jenis);

  movieStatusService
    .addMovieStatus({ jenis: jenis, slug: slugjenis })
    .then((moviestatus) => {
      res.status(200).json({
        status: "Success",
        message: "Success add data movie status",
        data: moviestatus,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

const updateMovieStatus = async (req, res) => {
  const { jenis } = req.body;
  const slugjenis = slugify(jenis);
  const { id } = req.params;

  movieStatusService
    .updateMovieStatus({ jenis: jenis, slug: slugjenis }, id)
    .then((moviestatus) => {
      res.status(200).json({
        status: "Success",
        message: "Success update data movie status",
        data: moviestatus,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

const deleteMovieStatus = async (req, res) => {
  const { id } = req.params;

  movieStatusService
    .deleteMovieStatus(id)
    .then((moviestatus) => {
      res.status(200).json({
        status: "Success",
        message: "Success delete data movie status",
        data: moviestatus,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

const getMovieStatusById = async (req, res) => {
  const { id } = req.params;

  movieStatusService
    .getMovieStatusById(id)
    .then((moviestatus) => {
      res.status(200).json({
        status: "Success",
        message: "Success get data movie status by id",
        data: moviestatus,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        message: "internal sever error",
        data: err,
      });
    });
};

module.exports = {
  getAllMovieStatus,
  addMovieStatus,
  updateMovieStatus,
  deleteMovieStatus,
  getMovieStatusById,
};
