const { payment } = require("../models");

const getAllPayments = () => {
  return payment.findAll();
};

const getPaymentById = (id) => {
  return payment.findByPk(id);
};

const createPayment = (newPayment) => {
  return payment.create(newPayment);
};

const updatePayment = (id, newPayment) => {
  return payment.update(newPayment, { where: { id: id } });
};

const deletePayment = (id) => {
  return payment.destroy({ where: { id: id } });
};

const getPaymentByUserId = (userId) => {
  return payment.findOne({ where: { user_id: userId } });
};

const getPaymentBySubscriptionId = (subscriptionId) => {
  return payment.findOne({ where: { subscription_id: subscriptionId } });
};

module.exports = {
  getAllPayments,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
  getPaymentByUserId,
  getPaymentBySubscriptionId,
};
