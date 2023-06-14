const subscriptionService = require("../services/subscriptionService");

const getAllSubscriptions = async (req, res) => {
  subscriptionService
    .getAllSubscriptions()
    .then((subscriptions) => {
      res.status(200).json({
        status: "success",
        message: "Successfully fetched all subscriptions",
        data: subscriptions,
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

const getSubscriptionById = async (req, res) => {
  const id = req.params.id;
  subscriptionService
    .getSubscriptionById(id)
    .then((subscription) => {
      res.status(200).json({
        status: "success",
        message: "Successfully fetched subscription by id",
        data: subscription,
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

const createSubscription = async (req, res) => {
  const newSubscription = req.body;
  subscriptionService
    .createSubscription(newSubscription)
    .then((subscription) => {
      res.status(200).json({
        status: "success",
        message: "Successfully created subscription",
        data: subscription,
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

const updateSubscription = async (req, res) => {
  const id = req.params.id;
  const newSubscription = req.body;
  subscriptionService
    .updateSubscription(id, newSubscription)
    .then((subscription) => {
      res.status(200).json({
        status: "success",
        message: "Successfully updated subscription",
        data: subscription,
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

const deleteSubscription = async (req, res) => {
  const id = req.params.id;
  subscriptionService
    .deleteSubscription(id)
    .then((subscription) => {
      res.status(200).json({
        status: "success",
        message: "Successfully deleted subscription",
        data: subscription,
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

const getSubscriptionByUserId = async (req, res) => {
  const userId = req.params.userId;
  subscriptionService
    .getSubscriptionByUserId(userId)
    .then((subscription) => {
      res.status(200).json({
        status: "success",
        message: "Successfully fetched subscription by user id",
        data: subscription,
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

const getSubscriptionByStatus = async (req, res) => {
  const status = req.params.status;
  subscriptionService

    .getSubscriptionByStatus(status)
    .then((subscription) => {
      res.status(200).json({
        status: "success",
        message: "Successfully fetched subscription by status",
        data: subscription,
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
  getAllSubscriptions,
  getSubscriptionById,
  createSubscription,
  updateSubscription,
  deleteSubscription,
  getSubscriptionByUserId,
  getSubscriptionByStatus,
};
