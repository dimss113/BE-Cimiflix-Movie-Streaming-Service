const subscriptionRepository = require("../repositories/subscriptionRepository");

const getAllSubscriptions = async () => {
  try {
    const subscriptions = await subscriptionRepository.getAllSubscriptions();
    return subscriptions;
  } catch (error) {
    throw error;
  }
};

const getSubscriptionById = async (id) => {
  try {
    const subscription = await subscriptionRepository.getSubscriptionById(id);
    return subscription;
  } catch (error) {
    throw error;
  }
};

const createSubscription = async (newSubscription) => {
  try {
    const subscription = await subscriptionRepository.createSubscription(
      newSubscription
    );
    return subscription;
  } catch (error) {
    throw error;
  }
};

const updateSubscription = async (id, newSubscription) => {
  try {
    const subscription = await subscriptionRepository.updateSubscription(
      id,
      newSubscription
    );
    return subscription;
  } catch (error) {
    throw error;
  }
};

const deleteSubscription = async (id) => {
  try {
    const subscription = await subscriptionRepository.deleteSubscription(id);
    return subscription;
  } catch (error) {
    throw error;
  }
};

const getSubscriptionByUserId = async (userId) => {
  try {
    const subscription = await subscriptionRepository.getSubscriptionByUserId(
      userId
    );
    return subscription;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllSubscriptions,
  getSubscriptionById,
  createSubscription,
  updateSubscription,
  deleteSubscription,
  getSubscriptionByUserId,
};
