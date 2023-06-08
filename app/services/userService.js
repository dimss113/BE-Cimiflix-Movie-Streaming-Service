const userRepository = require("../repositories/userRepository");

const getAllUsers = async () => {
  try {
    const users = await userRepository.getAllUsers();
    return users;
  } catch (error) {
    return error;
  }
};

const addUser = async (data) => {
  try {
    const users = await userRepository.addUser(data);
    return users;
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

const getUserById = async (id) => {
  try {
    const users = await userRepository.getUserById(id);
    return users;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUsers,
  addUser,
  deleteCategory,
  getUserById,
};
