const router = require("express").Router();
const categoryController = require("../controllers/categoryController");

router.get("/categories", categoryController.getAllCategories);
router.post("/add-category", categoryController.addCategory);
router.put("/update-category/:id", categoryController.updateCategory);
router.delete("/delete-category/:id", categoryController.deleteCategory);
router.get("/get-category/:id", categoryController.getCategoryById);

module.exports = router;
