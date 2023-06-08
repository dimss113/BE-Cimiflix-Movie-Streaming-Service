const ageRateService = require("../services/ageRateService");
const slugify = require("slugify");

const getAllAgeRates = async (req, res) => {
  ageRateService
    .getAllAgeRates()
    .then((agerates) => {
      res.status(200).json({
        status: "Success",
        message: "Success get a;; data age rate",
        data: agerates,
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

const addAgeRate = async (req, res) => {
  const { rate } = req.body;
  const slugRate = slugify(rate);

  if (!rate) {
    res.status(400).json({
      status: "Error",
      message: "rate is required",
    });
  }
  console.log(rate);

  ageRateService
    .addAgeRate({ rate: rate, slug: slugRate })
    .then((agerates) => {
      res.status(200).json({
        status: "Success",
        message: "success add data age rate",
        data: agerates,
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

const updateAgeRate = async (req, res) => {
  const { rate } = req.body;
  const slugRate = slugify(rate);
  const { id } = req.params;

  ageRateService
    .updateAgeRate({ rate: rate, slug: slugRate }, id)
    .then((agerates) => {
      res.status(200).json({
        status: "Success",
        message: "Success update data seminar",
        data: agerates,
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

const deleteAgeRate = async (req, res) => {
  const { id } = req.params;

  ageRateService
    .deleteAgeRate(id)
    .then((agerates) => {
      res.status(200).json({
        status: "Success",
        message: "Success delete data seminar",
        data: agerates,
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

const getAgeRateById = async (req, res) => {
  const { id } = req.params;

  ageRateService
    .getAgeRateById(id)
    .then((agerates) => {
      res.status(200).json({
        status: "Success",
        message: "Success get data age rate by id",
        data: agerates,
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
  getAllAgeRates,
  addAgeRate,
  updateAgeRate,
  deleteAgeRate,
  getAgeRateById,
};
