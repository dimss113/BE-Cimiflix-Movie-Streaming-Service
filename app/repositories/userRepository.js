const { users } = require("../models");

const getAllUsers = () => {
  return users.findAll();
};

const addUser = (data) => {
  return users.create(data);
};

const getUserById = (id) => {
  return users.findOne({
    where: {
      id: id,
    },
  });
};

module.exports = {
  getAllUsers,
  addUser,
  getUserById,
};
