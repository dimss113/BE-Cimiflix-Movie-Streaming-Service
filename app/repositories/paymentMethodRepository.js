const { paymentmethod } = require("../models");

const getAllPaymentMethods = () => {
  return paymentmethod.findAll();
};

const getPaymentMethodById = (id) => {
  return paymentmethod.findByPk(id);
};

const createPaymentMethod = (newPaymentMethod) => {
  return paymentmethod.create(newPaymentMethod);
};

const updatePaymentMethod = (id, newPaymentMethod) => {
  return paymentmethod.update(newPaymentMethod, { where: { id: id } });
};

const deletePaymentMethod = (id) => {
  return paymentmethod.destroy({ where: { id: id } });
};

module.exports = {
  getAllPaymentMethods,
  getPaymentMethodById,
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
};
