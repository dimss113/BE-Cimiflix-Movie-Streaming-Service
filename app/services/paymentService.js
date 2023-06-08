const paymentRepository = require("../repositories/paymentRepository");

const getAllPayments = async () => {
  try {
    const payments = await paymentRepository.getAllPayments();
    return payments;
  } catch (error) {
    throw error;
  }
};

const getPaymentById = async (id) => {
  try {
    const payment = await paymentRepository.getPaymentById(id);
    return payment;
  } catch (error) {
    throw error;
  }
};

const createPayment = async (newPayment) => {
  try {
    const payment = await paymentRepository.createPayment(newPayment);
    return payment;
  } catch (error) {
    throw error;
  }
};

const updatePayment = async (id, newPayment) => {
  try {
    const payment = await paymentRepository.updatePayment(id, newPayment);
    return payment;
  } catch (error) {
    throw error;
  }
};

const deletePayment = async (id) => {
  try {
    const payment = await paymentRepository.deletePayment(id);
    return payment;
  } catch (error) {
    throw error;
  }
};

const getPaymentByUserId = async (userId) => {
  try {
    const payment = await paymentRepository.getPaymentByUserId(userId);
    return payment;
  } catch (error) {
    throw error;
  }
};

const getPaymentBySubscriptionId = async (subscriptionId) => {
  try {
    const payment = await paymentRepository.getPaymentBySubscriptionId(
      subscriptionId
    );
    return payment;
  } catch (error) {
    throw error;
  }
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
