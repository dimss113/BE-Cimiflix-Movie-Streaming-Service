const { subscription } = require("../models");

const getAllSubscriptions = () => {
  return subscription.findAll();
};

const getSubscriptionById = (id) => {
  return subscription.findByPk(id);
};

const createSubscription = (newSubscription) => {
  return subscription.create(newSubscription);
};

const updateSubscription = (id, newSubscription) => {
  return subscription.update(newSubscription, { where: { id } });
};

const deleteSubscription = (id) => {
  return subscription.destroy({ where: { id } });
};

const getSubscriptionByUserId = (userId) => {
  return subscription.findAll({ where: { user_id: userId, status: 0 } });
};

const getSubscriptionByStatus = (status) => {
  return subscription.findAll({ where: { status } });
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
