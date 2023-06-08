const castService = require("../services/castService");
const slugify = require("slugify");

const getAllCasts = async (req, res) => {
  castService
    .getAllCasts()
    .then((casts) => {
      res.status(200).json({
        status: "Success",
        message: "Success get all data cast",
        data: casts,
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

const addCast = async (req, res) => {
  const { nama } = req.body;
  const slugNama = slugify(nama);

  castService
    .addCast({ nama: nama, slug: slugNama })
    .then((casts) => {
      res.status(200).json({
        status: "Success",
        message: "Success add data cast",
        data: casts,
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

const updateCast = async (req, res) => {
  const { nama } = req.body;
  const slugNama = slugify(nama);
  const { id } = req.params;

  castService
    .updateCast({ nama: nama, slug: slugNama }, id)
    .then((casts) => {
      res.status(200).json({
        status: "Success",
        message: "Success update data cast",
        data: casts,
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

const deleteCast = async (req, res) => {
  const { id } = req.params;

  castService
    .deleteCast(id)
    .then((casts) => {
      res.status(200).json({
        status: "Success",
        message: "Success delete data cast",
        data: casts,
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

const getCastById = async (req, res) => {
  const { id } = req.params;

  castService
    .getCastById(id)
    .then((casts) => {
      res.status(200).json({
        status: "Success",
        message: "Success get data cast by id",
        data: casts,
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
  getAllCasts,
  addCast,
  updateCast,
  deleteCast,
  getCastById,
};
