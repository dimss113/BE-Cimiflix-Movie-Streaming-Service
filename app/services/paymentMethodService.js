const paymentMethodRepository = require("../repositories/paymentMethodRepository");

const getAllPaymentMethods = async () => {
  try {
    const paymentMethods = await paymentMethodRepository.getAllPaymentMethods();
    return paymentMethods;
  } catch (error) {
    throw error;
  }
};

const getPaymentMethodById = async (id) => {
  try {
    const paymentMethod = await paymentMethodRepository.getPaymentMethodById(
      id
    );
    return paymentMethod;
  } catch (error) {
    throw error;
  }
};

const createPaymentMethod = async (newPaymentMethod) => {
  try {
    const paymentMethod = await paymentMethodRepository.createPaymentMethod(
      newPaymentMethod
    );
    return paymentMethod;
  } catch (error) {
    throw error;
  }
};

const updatePaymentMethod = async (id, newPaymentMethod) => {
  try {
    const paymentMethod = await paymentMethodRepository.updatePaymentMethod(
      id,
      newPaymentMethod
    );
    return paymentMethod;
  } catch (error) {
    throw error;
  }
};

const deletePaymentMethod = async (id) => {
  try {
    const paymentMethod = await paymentMethodRepository.deletePaymentMethod(id);
    return paymentMethod;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllPaymentMethods,
  getPaymentMethodById,
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
};
