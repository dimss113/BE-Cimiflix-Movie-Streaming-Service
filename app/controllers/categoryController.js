const categoryService = require("../services/categoryService");
const slugify = require("slugify");

const getAllCategories = async (req, res) => {
  categoryService
    .getAllCategories()
    .then((categories) => {
      res.status(200).json({
        status: "Success",
        message: "Success get all data category",
        data: categories,
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

const addCategory = async (req, res) => {
  const { title } = req.body;
  const slugTitle = slugify(title);

  categoryService
    .addCategory({ title: slugTitle })
    .then((categories) => {
      res.status(200).json({
        status: "Success",
        message: "Success add data category",
        data: categories,
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

const updateCategory = async (req, res) => {
  const { title } = req.body;
  const slugTitle = slugify(title);
  const { id } = req.params;

  categoryService
    .updateCategory({ title: slugTitle }, id)
    .then((categories) => {
      res.status(200).json({
        status: "Success",
        message: "Success update data category",
        data: categories,
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

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  categoryService
    .deleteCategory(id)
    .then((categories) => {
      res.status(200).json({
        status: "Success",
        message: "Success delete data category",
        data: categories,
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

const getCategoryById = async (req, res) => {
  const { id } = req.params;

  categoryService
    .getCategoryById(id)
    .then((categories) => {
      res.status(200).json({
        status: "Success",
        message: "Success get data category by id",
        data: categories,
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
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  getCategoryById,
};
