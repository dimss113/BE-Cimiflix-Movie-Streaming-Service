const paymentService = require("../services/paymentService");

const getAllPayments = async (req, res) => {
  paymentService
    .getAllPayments()
    .then((payments) => {
      res.status(200).json({
        status: "success",
        message: "Successfully fetched all payments",
        data: payments,
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

const getPaymentById = async (req, res) => {
  const id = req.params.id;
  paymentService
    .getPaymentById(id)
    .then((payment) => {
      res.status(200).json({
        status: "success",
        message: "Successfully fetched payment by id",
        data: payment,
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

const createPayment = async (req, res) => {
  const newPayment = req.body;
  paymentService
    .createPayment(newPayment)
    .then((payment) => {
      res.status(200).json({
        status: "success",
        message: "Successfully created payment",
        data: payment,
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

const updatePayment = async (req, res) => {
  const id = req.params.id;
  const newPayment = req.body;
  paymentService
    .updatePayment(id, newPayment)
    .then((payment) => {
      res.status(200).json({
        status: "success",
        message: "Successfully updated payment",
        data: payment,
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

const deletePayment = async (req, res) => {
  const id = req.params.id;
  paymentService
    .deletePayment(id)
    .then((payment) => {
      res.status(200).json({
        status: "success",
        message: "Successfully deleted payment",
        data: payment,
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

const getPaymentByUserId = async (req, res) => {
  const userId = req.params.userId;
  paymentService
    .getPaymentByUserId(userId)
    .then((payment) => {
      res.status(200).json({
        status: "success",
        message: "Successfully fetched payment by user id",
        data: payment,
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

const getPaymentBySubscriptionId = async (req, res) => {
  const subscriptionId = req.params.subscriptionId;
  paymentService
    .getPaymentBySubscriptionId(subscriptionId)
    .then((payment) => {
      res.status(200).json({
        status: "success",
        message: "Successfully fetched payment by subscription id",
        data: payment,
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
  getAllPayments,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
  getPaymentByUserId,
  getPaymentBySubscriptionId,
};
