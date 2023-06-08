const router = require("express").Router();
const paymentController = require("../controllers/paymentController");

router.get("/", paymentController.getAllPayments);
router.get("/:id", paymentController.getPaymentById);
router.post("/", paymentController.createPayment);
router.put("/:id", paymentController.updatePayment);
router.delete("/:id", paymentController.deletePayment);
router.get("/user/:userId", paymentController.getPaymentByUserId);
router.get(
  "/subscription/:subscriptionId",
  paymentController.getPaymentBySubscriptionId
);

module.exports = router;
