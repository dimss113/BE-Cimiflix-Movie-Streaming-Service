const { categories } = require("../models");

const getAllCategories = () => {
  return categories.findAll();
};

const addCategory = (data) => {
  return categories.create(data);
};

const updateCategory = (data, id) => {
  return categories.update(data, {
    where: {
      id: id,
    },
  });
};

const deleteCategory = (id) => {
  return categories.destroy({
    where: {
      id: id,
    },
  });
};

const getCategoryById = (id) => {
  return categories.findOne({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  getCategoryById,
};
