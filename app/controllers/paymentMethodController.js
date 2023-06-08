const paymentMethodService = require("../services/paymentMethodService");

const getAllPaymentMethods = async (req, res) => {
  paymentMethodService
    .getAllPaymentMethods()
    .then((paymentMethods) => {
      res.status(200).json({
        status: "success",
        message: "Successfully fetched all payment methods",
        data: paymentMethods,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        error: error,
      });
    });
};

const getPaymentMethodById = async (req, res) => {
  const id = req.params.id;
  paymentMethodService
    .getPaymentMethodById(id)
    .then((paymentMethod) => {
      res.status(200).json({
        status: "success",
        message: "Successfully fetched payment method by id",
        data: paymentMethod,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        error: error,
      });
    });
};

const createPaymentMethod = async (req, res) => {
  const newPaymentMethod = req.body;
  paymentMethodService
    .createPaymentMethod(newPaymentMethod)
    .then((paymentMethod) => {
      res.status(200).json({
        status: "success",
        message: "Successfully created payment method",
        data: paymentMethod,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        error: error,
      });
    });
};

const updatePaymentMethod = async (req, res) => {
  const id = req.params.id;
  const newPaymentMethod = req.body;
  paymentMethodService
    .updatePaymentMethod(id, newPaymentMethod)
    .then((paymentMethod) => {
      res.status(200).json({
        status: "success",
        message: "Successfully updated payment method",
        data: paymentMethod,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        error: error,
      });
    });
};

const deletePaymentMethod = async (req, res) => {
  const id = req.params.id;
  paymentMethodService
    .deletePaymentMethod(id)
    .then((paymentMethod) => {
      res.status(200).json({
        status: "success",
        message: "Successfully deleted payment method",
        data: paymentMethod,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: "Internal server error",
        error: error,
      });
    });
};

module.exports = {
  getAllPaymentMethods,
  getPaymentMethodById,
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
};
