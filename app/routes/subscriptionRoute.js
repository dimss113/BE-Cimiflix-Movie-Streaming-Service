const router = require("express").Router();
const subscriptionController = require("../controllers/subscriptionController");

router.get("", subscriptionController.getAllSubscriptions);
router.get("/:id", subscriptionController.getSubscriptionById);
router.post("", subscriptionController.createSubscription);
router.put("/:id", subscriptionController.updateSubscription);
router.delete("/:id", subscriptionController.deleteSubscription);
router.get("/user/:userId", subscriptionController.getSubscriptionByUserId);

module.exports = router;
