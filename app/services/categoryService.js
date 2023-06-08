const categoryRepository = require("../repositories/categoryRepository");

const getAllCategories = async () => {
  try {
    const categories = await categoryRepository.getAllCategories();
    return categories;
  } catch (error) {
    return error;
  }
};

const addCategory = async (data) => {
  try {
    const categories = await categoryRepository.addCategory(data);
    return categories;
  } catch (error) {
    return error;
  }
};

const updateCategory = async (data, id) => {
  try {
    const categories = await categoryRepository.updateCategory(data, id);
    return categories;
  } catch (error) {
    return error;
  }
};

const deleteCategory = async (id) => {
  try {
    const categories = await categoryRepository.deleteCategory(id);
    return categories;
  } catch (error) {
    return error;
  }
};

const getCategoryById = async (id) => {
  try {
    const categories = await categoryRepository.getCategoryById(id);
    return categories;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  getCategoryById,
};
