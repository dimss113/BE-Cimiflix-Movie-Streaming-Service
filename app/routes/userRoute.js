const router = require("express").Router();
const userController = require("../controllers/userController");
const { refreshToken } = require("../controllers/refreshToken");
const { verifyToken } = require("../middleware/verifyToken");

router.get("/users", userController.getAllUsers);
router.post("/register", userController.addUser);
router.post("/login", userController.userLogin);
router.delete("/logout", userController.Logout);
router.get("/users/:id", userController.getUserById);

module.exports = router;
